<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Robin Appelman <robin@icewind.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Photos\Tests\Album;

use OCA\Photos\Album\AlbumFile;
use OCA\Photos\Album\AlbumInfo;
use OCA\Photos\Album\AlbumMapper;
use OCA\Photos\Album\AlbumWithFiles;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Constants;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\Files\IMimeTypeLoader;
use OCP\IDBConnection;
use Test\TestCase;

/**
 * @group DB
 */
class AlbumMapperTest extends TestCase {
	/** @var IDBConnection */
	private $connection;
	private array $createdFiles = [];
	/** @var IMimeTypeLoader */
	private $mimeLoader;
	/** @var AlbumMapper */
	private $mapper;
	/** @var ITimeFactory|\PHPUnit_Framework_MockObject_MockObject */
	private $timeFactory;
	private int $time = 100;

	protected function setUp(): void {
		parent::setUp();

		$this->createdFiles = [];
		$this->connection = \OC::$server->get(IDBConnection::class);
		$this->mimeLoader = \OC::$server->get(IMimeTypeLoader::class);
		$this->timeFactory = $this->createMock(ITimeFactory::class);
		$this->timeFactory->method('getTime')->willReturnCallback(function () {
			return $this->time;
		});

		$this->mapper = new AlbumMapper($this->connection, $this->mimeLoader, $this->timeFactory);
	}

	protected function tearDown():void {
		$query = $this->connection->getQueryBuilder();
		$query->delete('filecache')
			->where($query->expr()->eq('fileid', $query->createParameter("fileid")));
		foreach ($this->createdFiles as $createdFile) {
			$query->setParameter("fileid", $createdFile);
			$query->executeStatement();
		}
		$this->createdFiles = [];

		$this->connection->getQueryBuilder()->delete('photos_albums')->executeStatement();
		$this->connection->getQueryBuilder()->delete('photos_albums_files')->executeStatement();

		parent::tearDown();
	}

	private function createFile(string $name, string $mimeType, int $size = 10, int $mtime = 10000, int $permissions = Constants::PERMISSION_ALL): int {
		$mimeId = $this->mimeLoader->getId($mimeType);
		$mimePartId = $this->mimeLoader->getId(substr($mimeType, strpos($mimeType, '/')));
		$query = $this->connection->getQueryBuilder();
		$query->insert('filecache')
			->values([
				'storage' => $query->createNamedParameter(-1, IQueryBuilder::PARAM_INT),
				'parent' => $query->createNamedParameter(-1, IQueryBuilder::PARAM_INT),
				'path' => $query->createNamedParameter("/dummy/" . $name),
				'path_hash' => $query->createNamedParameter(md5("dummy/" . $name)),
				'name' => $query->createNamedParameter($name),
				'mimetype' => $query->createNamedParameter($mimeId, IQueryBuilder::PARAM_INT),
				'mimepart' => $query->createNamedParameter($mimePartId, IQueryBuilder::PARAM_INT),
				'size' => $query->createNamedParameter($size, IQueryBuilder::PARAM_INT),
				'mtime' => $query->createNamedParameter($mtime, IQueryBuilder::PARAM_INT),
				'storage_mtime' => $query->createNamedParameter($mtime, IQueryBuilder::PARAM_INT),
				'permissions' => $query->createNamedParameter($permissions, IQueryBuilder::PARAM_INT),
				'etag' => $query->createNamedParameter('dummy'),
			]);
		$query->executeStatement();
		$id = $query->getLastInsertId();
		$this->createdFiles[] = $id;
		return $id;
	}

	public function testCreateGet() {
		$album = $this->mapper->create("user1", "album1");

		$retrievedAlbum = $this->mapper->get($album->getId());
		$this->assertEquals($album, $retrievedAlbum);
		$this->assertEquals(100, $retrievedAlbum->getCreated());
		$this->assertEquals("", $retrievedAlbum->getLocation());
		$this->assertEquals(-1, $retrievedAlbum->getLastAddedPhoto());
	}

	public function testCreateList() {
		$album1 = $this->mapper->create("user1", "album1");
		$album2 = $this->mapper->create("user1", "album2");
		$this->mapper->create("user2", "album3");

		$retrievedAlbums = $this->mapper->getForUser('user1');
		usort($retrievedAlbums, function (AlbumInfo $a, AlbumInfo $b) {
			return $a->getId() <=> $b->getId();
		});
		$this->assertEquals([$album1, $album2], $retrievedAlbums);
	}

	public function testCreateDeleteGet() {
		$album = $this->mapper->create("user1", "album1");

		$retrievedAlbum = $this->mapper->get($album->getId());
		$this->assertEquals($album, $retrievedAlbum);

		$this->mapper->delete($album->getId());

		$this->assertEquals(null, $this->mapper->get($album->getId()));
	}

	public function testCreateDeleteList() {
		$album1 = $this->mapper->create("user1", "album1");
		$album2 = $this->mapper->create("user1", "album2");
		$this->mapper->create("user2", "album3");

		$this->mapper->delete($album1->getId());

		$retrievedAlbums = $this->mapper->getForUser('user1');
		usort($retrievedAlbums, function (AlbumInfo $a, AlbumInfo $b) {
			return $a->getId() <=> $b->getId();
		});
		$this->assertEquals([$album2], $retrievedAlbums);
	}

	public function testCreateRenameGet() {
		$album = $this->mapper->create("user1", "album1");
		$this->mapper->rename($album->getId(),"renamed");

		$retrievedAlbum = $this->mapper->get($album->getId());
		$this->assertEquals("renamed", $retrievedAlbum->getTitle());
	}

	public function testCreateUpdateGet() {
		$album = $this->mapper->create("user1", "album1");
		$this->mapper->setLocation($album->getId(),"nowhere");

		$retrievedAlbum = $this->mapper->get($album->getId());
		$this->assertEquals("nowhere", $retrievedAlbum->getLocation());
	}

	public function testEmptyFiles() {
		$album1 = $this->mapper->create("user1", "album1");

		$this->assertEquals([new AlbumWithFiles($album1, [])], $this->mapper->getForUserWithFiles("user1"));
	}

	public function testAddFiles() {
		$album1 = $this->mapper->create("user1", "album1");
		$album2 = $this->mapper->create("user1", "album2");

		$fileId1 = $this->createFile("file1", "text/plain");
		$fileId2 = $this->createFile("file2", "image/png");

		$this->mapper->addFile($album1->getId(), $fileId1);
		$this->mapper->addFile($album1->getId(), $fileId2);
		$this->mapper->addFile($album2->getId(), $fileId1);

		$albumsWithFiles = $this->mapper->getForUserWithFiles("user1");
		usort($albumsWithFiles, function (AlbumWithFiles $a, AlbumWithFiles $b) {
			return $a->getAlbum()->getId() <=> $b->getAlbum()->getId();
		});
		$this->assertCount(2, $albumsWithFiles);

		$this->assertEquals($album1->getId(), $albumsWithFiles[0]->getAlbum()->getId());
		$this->assertEquals($fileId2, $albumsWithFiles[0]->getAlbum()->getLastAddedPhoto());
		$files = $albumsWithFiles[0]->getFiles();
		usort($files, function (AlbumFile $a, AlbumFile $b) {
			return $a->getFileId() <=> $b->getFileId();
		});
		$this->assertCount(2, $files);
		$this->assertEquals(new AlbumFile($fileId1, "file1", "text/plain", 10, 10000, "dummy", 100), $albumsWithFiles[0]->getFiles()[0]);
		$this->assertEquals(new AlbumFile($fileId2, "file2", "image/png", 10, 10000, "dummy", 100), $albumsWithFiles[0]->getFiles()[1]);

		$this->assertEquals($album2->getId(), $albumsWithFiles[1]->getAlbum()->getId());
		$this->assertEquals($fileId1, $albumsWithFiles[1]->getAlbum()->getLastAddedPhoto());

		$files = $albumsWithFiles[1]->getFiles();
		usort($files, function (AlbumFile $a, AlbumFile $b) {
			return $a->getFileId() <=> $b->getFileId();
		});
		$this->assertCount(1, $files);
		$this->assertEquals(new AlbumFile($fileId1, "file1", "text/plain", 10, 10000, "dummy", 100), $albumsWithFiles[0]->getFiles()[0]);
	}

	public function testAddRemoveFiles() {
		$album1 = $this->mapper->create("user1", "album1");

		$fileId1 = $this->createFile("file1", "text/plain");
		$fileId2 = $this->createFile("file2", "image/png");
		$fileId3 = $this->createFile("file3", "image/png");

		$this->time = 110;
		$this->mapper->addFile($album1->getId(), $fileId1);
		$this->time = 120;
		$this->mapper->addFile($album1->getId(), $fileId2);
		$this->time = 130;
		$this->mapper->addFile($album1->getId(), $fileId3);

		$albumsWithFiles = $this->mapper->getForUserWithFiles("user1");
		usort($albumsWithFiles, function (AlbumWithFiles $a, AlbumWithFiles $b) {
			return $a->getAlbum()->getId() <=> $b->getAlbum()->getId();
		});
		$this->assertCount(1, $albumsWithFiles);

		$this->assertEquals($album1->getId(), $albumsWithFiles[0]->getAlbum()->getId());
		$this->assertEquals($fileId3, $albumsWithFiles[0]->getAlbum()->getLastAddedPhoto());
		$files = $albumsWithFiles[0]->getFiles();
		usort($files, function (AlbumFile $a, AlbumFile $b) {
			return $a->getFileId() <=> $b->getFileId();
		});
		$this->assertCount(3, $files);
		$this->assertEquals(new AlbumFile($fileId1, "file1", "text/plain", 10, 10000, "dummy", 110), $albumsWithFiles[0]->getFiles()[0]);
		$this->assertEquals(new AlbumFile($fileId2, "file2", "image/png", 10, 10000, "dummy", 120), $albumsWithFiles[0]->getFiles()[1]);
		$this->assertEquals(new AlbumFile($fileId3, "file3", "image/png", 10, 10000, "dummy", 130), $albumsWithFiles[0]->getFiles()[2]);



		$this->mapper->removeFile($album1->getId(), $fileId2);

		$albumsWithFiles = $this->mapper->getForUserWithFiles("user1");
		usort($albumsWithFiles, function (AlbumWithFiles $a, AlbumWithFiles $b) {
			return $a->getAlbum()->getId() <=> $b->getAlbum()->getId();
		});
		$this->assertCount(1, $albumsWithFiles);

		$this->assertEquals($album1->getId(), $albumsWithFiles[0]->getAlbum()->getId());
		$this->assertEquals($fileId3, $albumsWithFiles[0]->getAlbum()->getLastAddedPhoto());
		$files = $albumsWithFiles[0]->getFiles();
		usort($files, function (AlbumFile $a, AlbumFile $b) {
			return $a->getFileId() <=> $b->getFileId();
		});
		$this->assertCount(2, $files);
		$this->assertEquals(new AlbumFile($fileId1, "file1", "text/plain", 10, 10000, "dummy", 110), $albumsWithFiles[0]->getFiles()[0]);
		$this->assertEquals(new AlbumFile($fileId3, "file3", "image/png", 10, 10000, "dummy", 130), $albumsWithFiles[0]->getFiles()[1]);



		$this->mapper->removeFile($album1->getId(), $fileId3);

		$albumsWithFiles = $this->mapper->getForUserWithFiles("user1");
		usort($albumsWithFiles, function (AlbumWithFiles $a, AlbumWithFiles $b) {
			return $a->getAlbum()->getId() <=> $b->getAlbum()->getId();
		});
		$this->assertCount(1, $albumsWithFiles);

		$this->assertEquals($album1->getId(), $albumsWithFiles[0]->getAlbum()->getId());
		$this->assertEquals($fileId1, $albumsWithFiles[0]->getAlbum()->getLastAddedPhoto());
		$files = $albumsWithFiles[0]->getFiles();
		usort($files, function (AlbumFile $a, AlbumFile $b) {
			return $a->getFileId() <=> $b->getFileId();
		});
		$this->assertCount(1, $files);
		$this->assertEquals(new AlbumFile($fileId1, "file1", "text/plain", 10, 10000, "dummy", 110), $albumsWithFiles[0]->getFiles()[0]);



		$this->mapper->removeFile($album1->getId(), $fileId1);

		$albumsWithFiles = $this->mapper->getForUserWithFiles("user1");
		usort($albumsWithFiles, function (AlbumWithFiles $a, AlbumWithFiles $b) {
			return $a->getAlbum()->getId() <=> $b->getAlbum()->getId();
		});
		$this->assertCount(1, $albumsWithFiles);

		$this->assertEquals($album1->getId(), $albumsWithFiles[0]->getAlbum()->getId());
		$this->assertEquals(-1, $albumsWithFiles[0]->getAlbum()->getLastAddedPhoto());
		$files = $albumsWithFiles[0]->getFiles();
		$this->assertCount(0, $files);
	}
}
