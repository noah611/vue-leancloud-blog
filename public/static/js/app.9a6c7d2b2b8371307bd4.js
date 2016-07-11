webpackJsonp([1,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(11),s=o(i),a=n(55),r=o(a),u=n(60),l=o(u),c=n(56),d=o(c),f=n(61),p=o(f),_=n(57),v=o(_),h=n(65),x=o(h),E=n(64),T=o(E);s["default"].use(T["default"]),s["default"].use(x["default"]);var L=new x["default"];L.map({"/home":{component:l["default"]},"/about":{component:function(t){return t(d["default"])}},"/tags":{component:function(t){return t(p["default"])}},"/article/:id":{name:"article",component:function(t){return t(v["default"])}}}),L.redirect({"*":"/home"}),L.start(r["default"],"#app")},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.REQUEST_CONTENT_LIST="REQUEST_CONTENT_LIST",e.GET_CONTENT_LIST="GET_CONTENT_LIST",e.GET_CONTENT_LIST_FAILURE="GET_CONTENT_LIST_FAILURE",e.UPDATE_HEADLINE="UPDATE_HEADLINE",e.GET_HEADLINE="GET_HEADLINE",e.GET_ARTICLE="GET_ARTICLE",e.GET_ARTICLE_FAILURE="GET_ARTICLE_FAILURE",e.CLEAR_ARTICLE="CLEAR_ARTIVLE"},,function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.clearArticle=e.getArticle=e.updateHeadline=e.getHeadline=e.getContentList=void 0;var i=n(1),s=o(i),a=n(12);e.getContentList=function(t){var e=t.dispatch;e(s.REQUEST_CONTENT_LIST),this.$http.get(a.API_ROOT+"api/content-list").then(function(t){e(s.GET_CONTENT_LIST,JSON.parse(t.body))},function(t){e(s.GET_CONTENT_LIST_FAILURE,t)})},e.getHeadline=function(t){var e=t.dispatch;e(s.GET_HEADLINE)},e.updateHeadline=function(t,e){var n=t.dispatch;n(s.UPDATE_HEADLINE,e)},e.getArticle=function(t,e){var n=t.dispatch;this.$http.get(a.API_ROOT+"api/article/"+e).then(function(t){n(s.GET_ARTICLE,JSON.parse(t.body))},function(t){n(s.GET_ARTICLE_FAILURE,t)})},e.clearArticle=function(t){var e=t.dispatch;e(s.CLEAR_ARTICLE)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.contentList=function(t){var e=t.contentList;return e.contentList},e.headline=function(t){var e=t.headline;return e.headline},e.article=function(t){var e=t.article;return e}},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="http://jiangjiu.leanapp.cn/"},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i,s=n(5),a=o(s),r=n(1),u={content:"",title:""},l=(i={},(0,a["default"])(i,r.GET_ARTICLE,function(t,e){t.content=e.content,t.title=e.title}),(0,a["default"])(i,r.GET_ARTICLE_FAILURE,function(t){return t}),(0,a["default"])(i,r.CLEAR_ARTICLE,function(t){t.content="",t.title=""}),i);e["default"]={state:u,mutations:l}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i,s=n(5),a=o(s),r=n(1),u={isFetching:!1,contentList:[]},l=(i={},(0,a["default"])(i,r.REQUEST_CONTENT_LIST,function(t){t.isFetching=!0}),(0,a["default"])(i,r.GET_CONTENT_LIST,function(t,e){t.isFetching=!1,t.contentList=e}),(0,a["default"])(i,r.GET_CONTENT_LIST_FAILURE,function(t){t.isFetching=!1}),i);e["default"]={state:u,mutations:l}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i,s=n(5),a=o(s),r=n(1),u={headline:""},l=(i={},(0,a["default"])(i,r.UPDATE_HEADLINE,function(t,e){t.headline=e}),(0,a["default"])(i,r.GET_HEADLINE,function(t){return t.headline}),i);e["default"]={state:u,mutations:l}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),s=o(i),a=n(66),r=o(a),u=n(14),l=o(u),c=n(15),d=o(c),f=n(13),p=o(f);s["default"].use(r["default"]),s["default"].config.debug=!0;var _=!1;e["default"]=new r["default"].Store({strict:_,modules:{contentList:l["default"],headline:d["default"],article:p["default"]}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(59),s=o(i),a=n(63),r=o(a),u=n(58),l=o(u),c=n(62),d=o(c),f=n(16),p=o(f);e["default"]={components:{Hello:s["default"],Vheader:r["default"],Aside:l["default"],Vfooter:d["default"]},store:p["default"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);e["default"]={vuex:{actions:{updateHeadline:o.updateHeadline}},created:function(){this.updateHeadline("关于")}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),s=o(i),a=n(45),r=o(a);n(35);var u=n(4),l=n(3);s["default"].setOptions({highlight:function(t){return r["default"].highlight(t,r["default"].languages.javascript)}}),e["default"]={vuex:{getters:{article:u.article},actions:{getArticle:l.getArticle,clearArticle:l.clearArticle,updateHeadline:l.updateHeadline}},created:function(){this.getArticle(this.$route.params.id)},beforeDestroy:function(){this.clearArticle()},computed:{content:function(){this.updateHeadline(this.article.title);var t=this.article.content;return(0,s["default"])(t,function(e,n){e||(t=n)}),t}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{msg:"Heccccllo World!"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),i=n(3);e["default"]={vuex:{getters:{items:o.contentList},actions:{getList:i.getContentList,updateHeadline:i.updateHeadline}},created:function(){this.getList(),this.updateHeadline("将就的博客")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4);e["default"]={data:function(){return{show:!0,nav:"nav",navFixed:"nav-fixed",isTop:!0,headlineFinal:""}},vuex:{getters:{headline:o.headline}},watch:{headline:function(t,e){var n=this;this.show=!1,setTimeout(function(){n.show=!0,n.headlineFinal=t},400)}},ready:function(){var t=this;window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;t.isTop=0===e}}}},,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports=" <div id=wrapper> <vheader class=header></vheader> <div class=main> <router-view class=main-wrapper transition=fade transition-mode=out-in></router-view> </div> <aside class=aside></aside> <vfooter class=footer></vfooter> </div> "},function(t,e){t.exports=' <div class=about-wrapper> <h2>将就</h2> <p>北邮研二 前端工程师 健身爱好者</p> <a href=https://github.com/jiangjiu>Github</a> <a href="http://weibo.com/2900330731/profile?topnav=1&wvr=6&is_all=1">微博</a> </div> '},function(t,e){t.exports=" <div class=article> <div v-html=content>zzz</div> </div> "},function(t,e){t.exports=" <div> <div class=aside-wrapper> <h1>丧心病狂广告位</h1> <h1>丧心病狂广告位</h1> <h1>丧心病狂广告位</h1> <h1>丧心病狂广告位</h1> <h1>丧心病狂广告位</h1> <h1>丧心病狂广告位</h1> </div> </div> "},function(t,e){t.exports=' <div class=list-wrapper> <ul class=list-container id=list-ul> <li v-for="item in items" transition=staggered stagger=100> <a v-link="{ name: \'article\', params: {id: item.objectId}}"> <p class=list-title>{{item.title}}</p> <p class=list-updated>{{item.createdAt}}</p> <p class=list-abstract>{{item.abstract}}</p> </a> </li> </ul> </div> '},function(t,e){t.exports=" <div> <p>tags</p> </div> "},function(t,e){t.exports=' <div _v-0d64f75f=""> <p _v-0d64f75f="">Copyrights © 2016 将就. All Rights Reserved.</p> </div> '},function(t,e){t.exports=' <div _v-2e975b51=""> <div class=header-background _v-2e975b51=""></div> <ul :class="[nav, isTop ? \'\' : navFixed]" _v-2e975b51=""> <li _v-2e975b51=""> <a v-link="\'/home\'" _v-2e975b51="">主页</a> </li> <li _v-2e975b51=""> <a v-link="\'/about\'" _v-2e975b51="">关于</a> </li> <li _v-2e975b51=""> <a v-link="\'/tags\'" _v-2e975b51="">标签</a> </li> </ul> <div class=header-title _v-2e975b51=""><h1 v-if=show transition=fade _v-2e975b51="">{{headlineFinal}}</h1></div> </div> '},function(t,e){t.exports=' <div class=hello _v-fff210c0=""> <h1 _v-fff210c0="">{{ msg }}</h1> <p _v-fff210c0="">34234dvsdv</p> </div> '},function(t,e,n){var o,i;n(36),o=n(17),i=n(46),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(37),o=n(18),i=n(47),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(38),o=n(19),i=n(48),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(39),i=n(49),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(43),o=n(20),i=n(54),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(40),o=n(21),i=n(50),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;i=n(51),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(41),i=n(52),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var o,i;n(42),o=n(22),i=n(53),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}]);
//# sourceMappingURL=app.9a6c7d2b2b8371307bd4.js.map