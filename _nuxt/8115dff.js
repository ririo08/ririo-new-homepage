(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{319:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("7fa2433c",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(319)},328:function(t,e,n){var l=n(29)((function(i){return i[1]}));l.push([t.i,".movielistContainer{margin-left:auto;margin-right:auto;max-width:1000px}.grayscreen{background-color:#000;display:none;height:100%;opacity:.5;position:absolute;width:100%;z-index:8}.grayscreen-active{display:block}.movielist-entrylist{font-weight:700;padding-left:5px;width:100%}.movielist-entrylist p{font-weight:400}.movielist-jstarget{color:red;font-weight:700}.listTable-links{display:block;margin-bottom:1.5rem;padding-left:20px}.listTable-links a{margin-left:.5rem}.youlink a:hover{color:red}.new{color:#f44;font-size:.8rem}",""]),l.locals={},t.exports=l},345:function(t,e,n){"use strict";n.r(e);var l=n(12),r=(n(66),{data:function(){return{list:[]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://ririo.dev/db/movie-list.json");case 2:n=e.sent,t.list=n;case 4:case"end":return e.stop()}}),e)})))()}}),o=(n(327),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"globalBox"},[e("h2",{staticClass:"globalBox-title"},[t._v("動画リスト")]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("\n      現在\n      "),e("span",{staticClass:"movielist-jstarget",attrs:{id:"movielist-jstarget"}},[t._v("\n        "+t._s(t.list.length)+"\n      ")]),t._v("\n      シリーズを配信中！\n    ")])]),t._v(" "),e("div",{staticClass:"movielist-flex"},[e("div",{staticClass:"movielist-entrylist"},[e("p",[t._v("0-1 A-Z あ-ん シリーズ順で並べています。")]),t._v(" "),e("dt",{staticClass:"listTable-title",staticStyle:{color:"rgb(185, 89, 9)"}},[t._v("\n        一緒に見ようシリーズ\n      ")]),t._v(" "),t._m(1),t._v(" "),t._l(t.list,(function(n){return e("div",{key:n.Title},[e("dt",{staticClass:"listTable-title"},[t._v("\n          "+t._s(n.Title)+"\n          "),"1"===n.NewFlag?e("span",{staticClass:"new"},[t._v("new")]):t._e()]),t._v(" "),e("dd",{staticClass:"listTable-links youlink"},[n.StreamLink?e("a",{attrs:{href:n.StreamLink,target:"_blank"}},[t._v("\n            配信アーカイブ\n          ")]):t._e(),t._v(" "),n.MovieLink?e("a",{attrs:{href:n.MovieLink,target:"_blank"}},[t._v("\n            実況動画\n          ")]):t._e()])])}))],2)])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n      ここでは今までにプレイしたゲームの映像リンク等を貼っていきます。\n      "),e("br"),t._v("\n      実況は「実況動画」リンクから（リリオが編集して見やすくしたやつです。）\n      "),e("br"),t._v("\n      配信は「配信アーカイブ」リンクから！\n      "),e("br")])},function(){var t=this._self._c;return t("dd",{staticClass:"listTable-links youlink"},[t("a",{attrs:{href:"https://www.youtube.com/playlist?list=PL_KrJ2Q-UZsG_1EC0W9k71ubsCSemBZZY",target:"piframe"}},[this._v("\n          YouTube\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);