/*! For license information please see photos-src_mixins_AbortControllerMixin_js-src_views_Albums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_AbortControllerMixin_js-src_views_Albums_vue"],{69363:(n,t,e)=>{e.d(t,{Z:()=>o});const o={name:"AbortControllerMixin",data:function(){return{abortController:new AbortController}},beforeDestroy:function(){this.abortController.abort()},beforeRouteLeave:function(n,t,e){this.abortController.abort(),this.abortController=new AbortController,e()}}},95473:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(87537),r=e.n(o),l=e(23645),i=e.n(l)()(r());i.push([n.id,".collection-cover[data-v-33523911]{display:flex;flex-direction:column;padding:16px;border-radius:var(--border-radius-large)}.collection-cover[data-v-33523911]:hover,.collection-cover[data-v-33523911]:focus{background:var(--color-background-dark)}.collection-cover__image[data-v-33523911]{width:350px;height:350px;object-fit:none;border-radius:var(--border-radius-large)}@media only screen and (max-width: 1200px){.collection-cover__image[data-v-33523911]{width:250px;height:250px}}.collection-cover__image--placeholder[data-v-33523911]{background:var(--color-primary-light)}.collection-cover__image--placeholder :deep .material-design-icon[data-v-33523911]{width:100%;height:100%}.collection-cover__image--placeholder :deep .material-design-icon .material-design-icon__svg[data-v-33523911]{fill:var(--color-primary)}.collection-cover__details[data-v-33523911]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.collection-cover__details[data-v-33523911]{width:250px}}.collection-cover__details__title[data-v-33523911]{display:flex}.collection-cover__details__subtitle[data-v-33523911]{display:flex;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./src/components/Collection/CollectionCover.vue"],names:[],mappings:"AAqFA,mCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,kFACC,uCAAA,CAGD,0CACC,WAAA,CACA,YAAA,CACA,eAAA,CACA,wCAAA,CAEA,2CAND,0CAOE,WAAA,CACA,YAAA,CAAA,CAGD,uDACC,qCAAA,CAEA,mFACC,UAAA,CACA,WAAA,CAEA,8GACC,yBAAA,CAMJ,4CACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,4CAOE,WAAA,CAAA,CAGD,mDACC,YAAA,CAGD,sDACC,YAAA,CACA,+BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.collection-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: var(--border-radius-large);\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: none;\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t:deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__title {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__subtitle {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const a=i},25154:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(87537),r=e.n(o),l=e(23645),i=e.n(l)()(r());i.push([n.id,".collections[data-v-71e04184]{display:flex;flex-direction:column;height:100%}.collections__list[data-v-71e04184]{padding:32px 48px;flex-grow:1;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;height:calc(100% - 60px);overflow-x:scroll}@media only screen and (max-width: 1200px){.collections__list[data-v-71e04184]{padding:32px 12px;justify-content:center}}","",{version:3,sources:["webpack://./src/components/Collection/CollectionsList.vue"],names:[],mappings:"AAmFA,8BACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,oCACC,iBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,2CAVD,oCAWE,iBAAA,CACA,sBAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.collections {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__list {\n\t\tpadding: 32px 48px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 16px;\n\t\talign-items: flex-start;\n\t\theight: calc(100% - 60px);\n\t\toverflow-x: scroll;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 32px 12px;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const a=i},64193:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(87537),r=e.n(o),l=e(23645),i=e.n(l)()(r());i.push([n.id,".albums-list[data-v-241eef3e]{display:flex;flex-direction:column}.albums-list .album__name[data-v-241eef3e]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/Albums.vue"],names:[],mappings:"AAiIA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.albums-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.album__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const a=i},18664:(n,t,e)=>{e.d(t,{Z:()=>f});var o=e(20629);function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const i={name:"CollectionCover",components:{ImageMultiple:e(36288).Z},props:{coverUrl:{type:String,required:!0},altImg:{type:String,required:!0},link:{type:String,required:!0}},computed:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){l(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},(0,o.Se)(["files","albums"]))};var a=e(93379),s=e.n(a),c=e(7795),A=e.n(c),m=e(90569),u=e.n(m),d=e(3565),p=e.n(d),C=e(19216),g=e.n(C),v=e(44589),b=e.n(v),h=e(95473),_={};_.styleTagTransform=b(),_.setAttributes=p(),_.insert=u().bind(null,"head"),_.domAPI=A(),_.insertStyleElement=g();s()(h.Z,_);h.Z&&h.Z.locals&&h.Z.locals;const f=(0,e(51900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",[e("router-link",{staticClass:"collection-cover",attrs:{to:n.link}},[""!==n.coverUrl?e("img",{staticClass:"collection-cover__image",attrs:{src:n.coverUrl,alt:n.altImg}}):e("div",{staticClass:"collection-cover__image collection-cover__image--placeholder"},[e("ImageMultiple",{attrs:{size:128}})],1),n._v(" "),e("div",{staticClass:"collection-cover__details"},[e("div",{staticClass:"collection-cover__details__title"},[n._t("default")],2),n._v(" "),e("div",{staticClass:"collection-cover__details__subtitle"},[n._t("subtitle")],2)])])],1)}),[],!1,null,"33523911",null).exports},39981:(n,t,e)=>{e.d(t,{Z:()=>_});var o=e(24777),r=e(15961);const l={name:"CollectionsList",components:{AlertCircle:o.Z,NcEmptyContent:r.SL},props:{collections:{type:Object,required:!0},loading:{type:Boolean,default:!1},error:{type:Error,default:null}},computed:{noCollection:function(){return 0===Object.keys(this.collections).length}}};var i=e(93379),a=e.n(i),s=e(7795),c=e.n(s),A=e(90569),m=e.n(A),u=e(3565),d=e.n(u),p=e(19216),C=e.n(p),g=e(44589),v=e.n(g),b=e(25154),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=m().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=C();a()(b.Z,h);b.Z&&b.Z.locals&&b.Z.locals;const _=(0,e(51900).Z)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.error?e("NcEmptyContent",{attrs:{title:n.t("photos","An error occurred")}},[e("AlertCircle",{attrs:{slot:"icon"},slot:"icon"})],1):e("div",{staticClass:"collections"},[n._t("header"),n._v(" "),n.noCollection&&!n.loading?n._t("empty-collections-list"):n.noCollection?n._e():e("ul",{staticClass:"collections__list"},[n._l(n.collections,(function(t){return n._t("default",null,{collection:t})}))],2)],2)}),[],!1,null,"71e04184",null).exports},82318:(n,t,e)=>{e.r(t),e.d(t,{default:()=>Z});var o=e(40502),r=e(65322),l=e(79753),i=e(15961),a=e(12945),s=e(39981),c=e(18664),A=e(68391),m=e(29987);const u={name:"Albums",components:{Plus:o.Z,FolderMultipleImage:r.Z,NcModal:i.Jc,NcButton:i.P2,NcEmptyContent:i.SL,CollectionsList:s.Z,CollectionCover:c.Z,HeaderNavigation:A.Z,AlbumForm:m.Z},filters:{coverUrl:function(n){return-1===n?"":(0,l.generateUrl)("/apps/photos/api/v1/preview/".concat(n,"?x=",512,"&y=",512))}},mixins:[a.Z],data:function(){return{showAlbumCreationForm:!1}},methods:{handleAlbumCreated:function(n){var t=n.album;this.showAlbumCreationForm=!1,this.$router.push("albums/".concat(t.basename))}}};var d=e(93379),p=e.n(d),C=e(7795),g=e.n(C),v=e(90569),b=e.n(v),h=e(3565),_=e.n(h),f=e(19216),x=e.n(f),y=e(44589),w=e.n(y),W=e(64193),T={};T.styleTagTransform=w(),T.setAttributes=_(),T.insert=b().bind(null,"head"),T.domAPI=g(),T.insertStyleElement=x();p()(W.Z,T);W.Z&&W.Z.locals&&W.Z.locals;const Z=(0,e(51900).Z)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("CollectionsList",{staticClass:"albums-list",attrs:{collections:n.albums,loading:n.loadingAlbums,error:n.errorFetchingAlbums},scopedSlots:n._u([{key:"default",fn:function(t){var o=t.collection;return e("CollectionCover",{key:o.basename,attrs:{link:"/albums/"+o.basename,"alt-img":n.t("photos","Cover photo for album {albumName}",{albumName:o.basename}),"cover-url":n._f("coverUrl")(o.lastPhoto)}},[e("h2",{staticClass:"album__name"},[n._v("\n\t\t\t\t"+n._s(o.basename)+"\n\t\t\t")]),n._v(" "),e("div",{staticClass:"album__details",attrs:{slot:"subtitle"},slot:"subtitle"},[n._v("\n\t\t\t\t"+n._s(o.date)+" ⸱ "+n._s(n.n("photos","%n item","%n photos and videos",o.nbItems))+"\n\t\t\t")])])}}])},[e("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:n.loadingAlbums,title:n.t("photos","Albums"),"root-title":n.t("photos","Albums")},on:{refresh:n.fetchAlbums},slot:"header"},[e("NcButton",{attrs:{"aria-label":n.t("photos","Create a new album.")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}])},[n._v("\n\t\t\t\t"+n._s(n.t("photos","New album"))+"\n\t\t\t")])],1),n._v(" "),n._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:n.t("photos","There is no album yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1),n._v(" "),n.showAlbumCreationForm?e("NcModal",{attrs:{title:n.t("photos","New album")},on:{close:function(t){n.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:n.handleAlbumCreated}})],1):n._e()],1)}),[],!1,null,"241eef3e",null).exports}}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_views_Albums_vue.js.map?v=d8ea59396bbcf5a6711b