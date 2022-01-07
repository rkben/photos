/*! For license information please see photos-src_views_Albums_vue.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Albums_vue"],{73553:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(87537),i=t.n(r),o=t(23645),a=t.n(o)()(i());a.push([n.id,".file[data-v-51e636c4],.folder[data-v-51e636c4]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-51e636c4],.folder .cover[data-v-51e636c4]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-51e636c4],.file:active .cover[data-v-51e636c4],.file:hover .cover[data-v-51e636c4],.file:focus .cover[data-v-51e636c4],.folder.active .cover[data-v-51e636c4],.folder:active .cover[data-v-51e636c4],.folder:hover .cover[data-v-51e636c4],.folder:focus .cover[data-v-51e636c4]{opacity:.3}.file--clear.active .cover[data-v-51e636c4],.file--clear:active .cover[data-v-51e636c4],.file--clear:hover .cover[data-v-51e636c4],.file--clear:focus .cover[data-v-51e636c4],.folder--clear.active .cover[data-v-51e636c4],.folder--clear:active .cover[data-v-51e636c4],.folder--clear:hover .cover[data-v-51e636c4],.folder--clear:focus .cover[data-v-51e636c4]{opacity:.1}.fade-enter-active[data-v-51e636c4],.fade-leave-active[data-v-51e636c4]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-51e636c4],.fade-leave-to[data-v-51e636c4]{opacity:0}.folder-content[data-v-51e636c4]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-51e636c4]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-51e636c4]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-51e636c4]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-51e636c4]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-51e636c4]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-51e636c4]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-51e636c4]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-51e636c4]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-51e636c4]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-51e636c4]{opacity:.3}.folder--clear .folder-name__name[data-v-51e636c4]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-51e636c4]{opacity:.3}.folder:not(.folder--clear).active .folder-name[data-v-51e636c4],.folder:not(.folder--clear).active .cover[data-v-51e636c4],.folder:not(.folder--clear):active .folder-name[data-v-51e636c4],.folder:not(.folder--clear):active .cover[data-v-51e636c4],.folder:not(.folder--clear):hover .folder-name[data-v-51e636c4],.folder:not(.folder--clear):hover .cover[data-v-51e636c4],.folder:not(.folder--clear):focus .folder-name[data-v-51e636c4],.folder:not(.folder--clear):focus .cover[data-v-51e636c4]{opacity:0}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/Folder.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8DACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,4SACC,UAAA,CAQD,oWACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CCwED,iCACC,iBAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CAEA,yCACC,yBAAA,CACA,sBAAA,CAED,yCACC,yBAAA,CACA,0BAAA,CAED,yCACC,6BAAA,CACA,0BAAA,CACA,yDACC,kBAAA,CAGF,yCACC,6BAAA,CACA,0BAAA,CAED,qCACC,UAAA,CACA,WAAA,CAEA,gBAAA,CAMF,8BACC,iBAAA,CACA,SAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,qDAAA,CACA,SAAA,CACA,oCACC,UAAA,CACA,+BAAA,CACA,mBAAA,CAED,oCACC,eAAA,CACA,WAnBY,CAoBZ,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,kCAAA,CACA,0CAAA,CACA,cA1BY,CA2BZ,gBA3BY,CAmCZ,mDACC,UAAA,CAED,mDACC,4BAAA,CACA,gDAAA,CAQD,oDACC,UAAA,CASA,4eAEC,SAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","$sizes: (400: (count: 3, marginTop: 66, marginW: 8), 700: (count: 4, marginTop: 66, marginW: 8), 1024: (count: 5, marginTop: 66, marginW: 44), 1280: (count: 4, marginTop: 66, marginW: 44), 1440: (count: 5, marginTop: 88, marginW: 66), 1600: (count: 6, marginTop: 88, marginW: 66), 2048: (count: 7, marginTop: 88, marginW: 66), 2560: (count: 8, marginTop: 88, marginW: 88), 3440: (count: 9, marginTop: 88, marginW: 88), max: (count: 10, marginTop: 88, marginW: 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let's display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&.active,\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const c=a},25531:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(87537),i=t.n(r),o=t(23645),a=t.n(o)()(i());a.push([n.id,".file[data-v-f33ea62c],.folder[data-v-f33ea62c]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-f33ea62c],.folder .cover[data-v-f33ea62c]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-f33ea62c],.file:active .cover[data-v-f33ea62c],.file:hover .cover[data-v-f33ea62c],.file:focus .cover[data-v-f33ea62c],.folder.active .cover[data-v-f33ea62c],.folder:active .cover[data-v-f33ea62c],.folder:hover .cover[data-v-f33ea62c],.folder:focus .cover[data-v-f33ea62c]{opacity:.3}.file--clear.active .cover[data-v-f33ea62c],.file--clear:active .cover[data-v-f33ea62c],.file--clear:hover .cover[data-v-f33ea62c],.file--clear:focus .cover[data-v-f33ea62c],.folder--clear.active .cover[data-v-f33ea62c],.folder--clear:active .cover[data-v-f33ea62c],.folder--clear:hover .cover[data-v-f33ea62c],.folder--clear:focus .cover[data-v-f33ea62c]{opacity:.1}.fade-enter-active[data-v-f33ea62c],.fade-leave-active[data-v-f33ea62c]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-f33ea62c],.fade-leave-to[data-v-f33ea62c]{opacity:0}.folder-content[data-v-f33ea62c]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-f33ea62c]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-f33ea62c]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-f33ea62c]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-f33ea62c]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-f33ea62c]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-f33ea62c]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-f33ea62c]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-f33ea62c]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-f33ea62c]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-f33ea62c]{opacity:.3}.folder--clear .folder-name__name[data-v-f33ea62c]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-f33ea62c]{opacity:.3}.folder:not(.folder--clear):active .folder-name[data-v-f33ea62c],.folder:not(.folder--clear):active .cover[data-v-f33ea62c],.folder:not(.folder--clear):hover .folder-name[data-v-f33ea62c],.folder:not(.folder--clear):hover .cover[data-v-f33ea62c],.folder:not(.folder--clear):focus .folder-name[data-v-f33ea62c],.folder:not(.folder--clear):focus .cover[data-v-f33ea62c]{opacity:0}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/FolderTagPreview.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8DACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,4SACC,UAAA,CAQD,oWACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CCmFD,iCACC,iBAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CAEA,yCACC,yBAAA,CACA,sBAAA,CAED,yCACC,yBAAA,CACA,0BAAA,CAED,yCACC,6BAAA,CACA,0BAAA,CACA,yDACC,kBAAA,CAGF,yCACC,6BAAA,CACA,0BAAA,CAED,qCACC,UAAA,CACA,WAAA,CAEA,gBAAA,CAMF,8BACC,iBAAA,CACA,SAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,qDAAA,CACA,SAAA,CACA,oCACC,UAAA,CACA,+BAAA,CACA,mBAAA,CAED,oCACC,eAAA,CACA,WAnBY,CAoBZ,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,kCAAA,CACA,0CAAA,CACA,cA1BY,CA2BZ,gBA3BY,CAmCZ,mDACC,UAAA,CAED,mDACC,4BAAA,CACA,gDAAA,CAQD,oDACC,UAAA,CAQA,gXAEC,SAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","$sizes: (400: (count: 3, marginTop: 66, marginW: 8), 700: (count: 4, marginTop: 66, marginW: 8), 1024: (count: 5, marginTop: 66, marginW: 44), 1280: (count: 4, marginTop: 66, marginW: 44), 1440: (count: 5, marginTop: 88, marginW: 66), 1600: (count: 6, marginTop: 88, marginW: 66), 2048: (count: 7, marginTop: 88, marginW: 66), 2560: (count: 8, marginTop: 88, marginW: 88), 3440: (count: 9, marginTop: 88, marginW: 88), max: (count: 10, marginTop: 88, marginW: 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let's display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const c=a},61955:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(87537),i=t.n(r),o=t(23645),a=t.n(o)()(i());a.push([n.id,"@media(min-width: 0px)and (max-width: 400px){.grid-container[data-v-593c4f4a]{padding:0px 8px 256px 8px}}@media(min-width: 400px)and (max-width: 700px){.grid-container[data-v-593c4f4a]{padding:0px 8px 256px 8px}}@media(min-width: 700px)and (max-width: 1024px){.grid-container[data-v-593c4f4a]{padding:0px 44px 256px 44px}}@media(min-width: 1024px)and (max-width: 1280px){.grid-container[data-v-593c4f4a]{padding:0px 44px 256px 44px}}@media(min-width: 1280px)and (max-width: 1440px){.grid-container[data-v-593c4f4a]{padding:0px 66px 256px 66px}}@media(min-width: 1440px)and (max-width: 1600px){.grid-container[data-v-593c4f4a]{padding:0px 66px 256px 66px}}@media(min-width: 1600px)and (max-width: 2048px){.grid-container[data-v-593c4f4a]{padding:0px 66px 256px 66px}}@media(min-width: 2048px)and (max-width: 2560px){.grid-container[data-v-593c4f4a]{padding:0px 88px 256px 88px}}@media(min-width: 2560px)and (max-width: 3440px){.grid-container[data-v-593c4f4a]{padding:0px 88px 256px 88px}}@media(min-width: 3440px){.grid-container[data-v-593c4f4a]{padding:0px 88px 256px 88px}}","",{version:3,sources:["webpack://./src/mixins/GridSizes.scss","webpack://./src/views/Albums.vue"],names:[],mappings:"AAoCG,6CC4NH,iCAEE,yBAAA,CAAA,CD9NC,+CC4NH,iCAEE,yBAAA,CAAA,CD9NC,gDC4NH,iCAEE,2BAAA,CAAA,CD9NC,iDC4NH,iCAEE,2BAAA,CAAA,CD9NC,iDC4NH,iCAEE,2BAAA,CAAA,CD9NC,iDC4NH,iCAEE,2BAAA,CAAA,CD9NC,iDC4NH,iCAEE,2BAAA,CAAA,CD9NC,iDC4NH,iCAEE,2BAAA,CAAA,CD9NC,iDC4NH,iCAEE,2BAAA,CAAA,CDlOC,0BCgOH,iCAEE,2BAAA,CAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@use 'sass:map';\n\n@mixin grid-sizes() {\n\t$previous: 0;\n\n\t@each $size, $config in $sizes {\n\t\t$count: map-get($config, 'count');\n\t\t$marginTop: map-get($config, 'marginTop');\n\t\t$marginW: map-get($config, 'marginW');\n\n\t\t@if $size == 'max' {\n\t\t\t@media (min-width: #{$previous}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t} @else {\n\t\t\t@media (min-width: #{$previous}px) and (max-width: #{$size}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t}\n\t\t$previous: $size;\n\t}\n}\n","$sizes: (400: (count: 3, marginTop: 66, marginW: 8), 700: (count: 4, marginTop: 66, marginW: 8), 1024: (count: 5, marginTop: 66, marginW: 44), 1280: (count: 4, marginTop: 66, marginW: 44), 1440: (count: 5, marginTop: 88, marginW: 66), 1600: (count: 6, marginTop: 88, marginW: 66), 2048: (count: 7, marginTop: 88, marginW: 66), 2560: (count: 8, marginTop: 88, marginW: 88), 3440: (count: 9, marginTop: 88, marginW: 88), max: (count: 10, marginTop: 88, marginW: 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/GridSizes.scss';\n\n.grid-container {\n\t@include grid-sizes using ($marginTop, $marginW) {\n\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t}\n}\n"],sourceRoot:""}]);const c=a},79559:(n,e,r)=>{"use strict";r.d(e,{Z:()=>w});var i=r(79753);const o={name:"FolderTagPreview",props:{icon:{type:String,default:"icon-folder"},id:{type:Number,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},fileList:{type:Array,default:function(){return[]}}},data:function(){return{loaded:!1,failed:[]}},computed:{isEmpty:function(){return 0===this.previewList.length},ariaUuid:function(){return"folder-".concat(this.id)},ariaLabel:function(){return t("photos",'Open the "{name}" sub-directory',{name:this.name})},previewList:function(){var n=this;return this.fileList.filter((function(e){return-1===n.failed.indexOf(e.fileid)}))},to:function(){var n=/^\/?(.+)/i.exec(this.path)[1];return Object.assign({},this.$route,{params:{path:n.split("/")}})}},methods:{generateImgSrc:function(n){var e=n.fileid,t=n.etag;return(0,i.generateUrl)("/core/preview?fileId=".concat(e,"&x=",256,"&y=",256,"&a=true&v=").concat(t))},onPreviewFail:function(n){var e=n.fileid;this.failed.push(e)}}};var a=r(93379),c=r.n(a),s=r(7795),d=r.n(s),l=r(90569),A=r.n(l),f=r(3565),u=r.n(f),p=r(19216),m=r.n(p),v=r(44589),h=r.n(v),C=r(25531),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=A().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=m();c()(C.Z,g);C.Z&&C.Z.locals&&C.Z.locals;const w=(0,r(51900).Z)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-link",{staticClass:"folder",class:{"folder--clear":n.isEmpty},attrs:{to:n.to,"aria-label":n.ariaLabel}},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.loaded,expression:"loaded"}],staticClass:"folder-content",class:"folder-content--grid-"+n.previewList.length,attrs:{role:"none"}},n._l(n.previewList,(function(e){return t("img",{key:e.fileid,attrs:{src:n.generateImgSrc(e),alt:""},on:{load:function(e){n.loaded=!0},error:function(t){return n.onPreviewFail(e)}}})})),0)]),n._v(" "),t("div",{staticClass:"folder-name"},[t("span",{staticClass:"folder-name__icon",class:[n.isEmpty?"icon-dark":"icon-white",n.icon],attrs:{role:"img"}}),n._v(" "),t("p",{staticClass:"folder-name__name",attrs:{id:n.ariaUuid}},[n._v("\n\t\t\t"+n._s(n.name)+"\n\t\t")])]),n._v(" "),t("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"f33ea62c",null).exports},38710:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>tn});var r=t(20629),i=t(4820),o=t(79753),a=t(99588),c=t(3301);function s(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){c=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function l(n,e,t,r,i,o,a){try{var c=n[o](a),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,i)}function A(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){l(o,r,i,a,c,"next",n)}function c(n){l(o,r,i,a,c,"throw",n)}a(void 0)}))}}function f(){return u.apply(this,arguments)}function u(){return(u=A(regeneratorRuntime.mark((function n(){var e,t,r,d,l,A,f,u,p,m,v,h=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=h.length>0&&void 0!==h[0]?h[0]:"/",t=h.length>1&&void 0!==h[1]?h[1]:{},r=(0,o.generateUrl)("/apps/photos/api/v1/".concat(t.shared?"shared":"albums")),n.next=5,i.default.get(r+(0,a.Px)(e),t);case 5:d=n.sent,l=d.data.map((function(n){return(0,a.AX)(n)})),A={},f=[],u=[],p=s(l);try{for(p.s();!(m=p.n()).done;)(v=m.value).filename===e?A=v:"file"!==v.type?f.push(v):c.ZP.indexOf(v.mime)>-1&&u.push(v)}catch(n){p.e(n)}finally{p.f()}return n.abrupt("return",{folder:A,folders:f,files:u});case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var p=t(30329),m=t.n(p),v=t(66533),h=t(4615),C=t(79559),g=t(25108);function w(n,e,t,r,i,o,a){try{var c=n[o](a),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,i)}function y(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){w(o,r,i,a,c,"next",n)}function c(n){w(o,r,i,a,c,"throw",n)}a(void 0)}))}}function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){k(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function k(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const B={name:"Folder",components:{FolderTagPreview:C.Z},inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:function(){return{cancelRequest:null,previewFolder:this.item.injected.fileid}},computed:x(x({},(0,r.Se)(["files","folders"])),{},{folderContent:function(){return this.folders[this.item.injected.fileid]},previewFiles:function(){var n=this,e=this.folders[this.previewFolder],t=e?e.map((function(e){return n.files[e]})).slice(0,4):[];if(0===t.length&&this.files[this.previewFolder].folders&&this.previewFolder===this.item.injected.fileid){var r=this.files[this.previewFolder].folders[0];this.updatePreviewFolder(r),this.folders[this.previewFolder]||this.getFolderData(this.files[this.previewFolder].filename)}return t}}),created:function(){var n=this;return y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.folderContent){e.next=3;break}return e.next=3,n.getFolderData(n.item.injected.filename);case 3:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")},methods:{getFolderData:function(n){var e=this;return y(regeneratorRuntime.mark((function t(){var r,i,o,a,c,s,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,h.Z)(f),i=r.request,o=r.cancel,e.cancelRequest=o,t.prev=2,t.next=5,i(n,{shared:e.item.injected.showShared});case 5:a=t.sent,c=a.folder,s=a.folders,d=a.files,e.$store.dispatch("updateFolders",{fileid:c.fileid,files:d,folders:s}),e.$store.dispatch("updateFiles",{folder:c,files:d,folders:s}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),t.t0.response&&t.t0.response.status&&g.error("Failed to get folder content",n,t.t0.response);case 16:return t.prev=16,e.cancelRequest=null,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])})))()},updatePreviewFolder:function(n){this.previewFolder=n}}};var T=t(93379),E=t.n(T),D=t(7795),S=t.n(D),F=t(90569),O=t.n(F),_=t(3565),P=t.n(_),W=t(19216),j=t.n(W),$=t(44589),N=t.n($),q=t(73553),R={};R.styleTagTransform=N(),R.setAttributes=P(),R.insert=O().bind(null,"head"),R.domAPI=S(),R.insertStyleElement=j();E()(q.Z,R);q.Z&&q.Z.locals&&q.Z.locals;var U=t(51900);const L=(0,U.Z)(B,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("FolderTagPreview",{attrs:{id:n.item.injected.fileid,name:n.item.injected.basename,path:n.item.injected.filename,"file-list":n.previewFiles}})}),[],!1,null,"51e636c4",null).exports;var I=t(88756),Z=t(84058),z=t(85324),G=t(25108);function Y(n,e,t,r,i,o,a){try{var c=n[o](a),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,i)}function H(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){Y(o,r,i,a,c,"next",n)}function c(n){Y(o,r,i,a,c,"throw",n)}a(void 0)}))}}function M(n){return function(n){if(Array.isArray(n))return J(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return J(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function V(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(t),!0).forEach((function(e){K(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function K(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const X={name:"Albums",components:{VirtualGrid:m(),EmptyContent:v.Z,Navigation:Z.Z},mixins:[z.Z],props:{rootTitle:{type:String,required:!0},path:{type:String,default:"/"},loading:{type:Boolean,required:!0},showShared:{type:Boolean,default:!1}},data:function(){return{error:null,cancelRequest:function(){}}},computed:V(V({},(0,r.Se)(["files","folders"])),{},{folderId:function(){return this.$store.getters.folderId(this.path)},folder:function(){return this.files[this.folderId]},folderContent:function(){return this.folders[this.folderId]},fileList:function(){var n=this;return this.folderContent&&this.folderContent.map((function(e){return n.files[e]})).filter((function(n){return!!n}))},subFolders:function(){return this.folderId&&this.files[this.folderId]&&this.files[this.folderId].folders},folderList:function(){var n=this;return this.subFolders&&this.subFolders.map((function(e){return n.files[e]})).filter((function(n){return!!n}))},contentList:function(){var n,e,t=this,r=null===(n=this.folderList)||void 0===n?void 0:n.map((function(n){return{id:"folder-".concat(n.fileid),injected:V(V({},n),{},{showShared:t.showShared}),width:256,height:256,columnSpan:1,renderComponent:L}})),i=null===(e=this.fileList)||void 0===e?void 0:e.map((function(n){return{id:"file-".concat(n.fileid),injected:V(V({},n),{},{list:t.fileList}),width:256,height:256,columnSpan:1,renderComponent:I.Z}}));return[].concat(M(r||[]),M(i||[]))},isEmpty:function(){return!this.haveFiles&&!this.haveFolders},haveFiles:function(){return!!this.fileList&&0!==this.fileList.length},haveFolders:function(){return!!this.folderList&&0!==this.folderList.length}}),watch:{path:function(){this.fetchFolderContent()},showShared:function(){this.fetchFolderContent()}},beforeMount:function(){var n=this;return H(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fetchFolderContent();case 1:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.cancelRequest("Changed view")},methods:{fetchFolderContent:function(){var n=this;return H(regeneratorRuntime.mark((function e(){var t,r,i,o,a,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.cancelRequest("Changed folder"),OCA.Viewer&&OCA.Viewer.close&&OCA.Viewer.close(),OCA.Files&&OCA.Files.Sidebar.close&&OCA.Files.Sidebar.close(),n.files[n.folderId]&&n.folders[n.folderId]||n.$emit("update:loading",!0),n.error=null,t=(0,h.Z)(f),r=t.request,i=t.cancel,n.cancelRequest=i,e.prev=7,e.next=10,r(n.path,{shared:n.showShared});case 10:o=e.sent,a=o.folder,c=o.folders,s=o.files,n.$store.dispatch("addPath",{path:n.path,fileid:a.fileid}),n.$store.dispatch("updateFolders",{fileid:a.fileid,files:s,folders:c}),n.$store.dispatch("updateFiles",{folder:a,files:s,folders:c}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(7),e.t0.response&&e.t0.response.status&&(404===e.t0.response.status?(n.error=404,setTimeout((function(){n.$router.push({name:n.$route.name})}),3e3)):n.error=e.t0),G.error("Error fetching album data",e.t0);case 23:return e.prev=23,n.$emit("update:loading",!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[7,19,23,26]])})))()}}};var nn=t(61955),en={};en.styleTagTransform=N(),en.setAttributes=P(),en.insert=O().bind(null,"head"),en.domAPI=S(),en.insertStyleElement=j();E()(nn.Z,en);nn.Z&&nn.Z.locals&&nn.Z.locals;const tn=(0,U.Z)(X,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return 404===n.error?t("EmptyContent",{attrs:{"illustration-name":"folder"}},[n._v("\n\t"+n._s(n.t("photos","This folder does not exist"))+"\n")]):n.error?t("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():t("div",[n.folder?t("Navigation",n._b({key:"navigation",attrs:{"root-title":n.rootTitle,"show-actions":!0}},"Navigation",n.folder,!1)):n._e(),n._v(" "),n.isEmpty?t("EmptyContent",{key:"emptycontent",attrs:{"illustration-name":"empty"}},[n._v("\n\t\t"+n._s(n.t("photos","No photos in here"))+"\n\t")]):t("div",{staticClass:"grid-container"},[t("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap}}})],1)],1)}),[],!1,null,"593c4f4a",null).exports}}]);
//# sourceMappingURL=photos-src_views_Albums_vue.js.map?v=f03bde76d697ef597d92