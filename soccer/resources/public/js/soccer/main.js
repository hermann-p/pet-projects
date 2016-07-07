// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.main');
goog.require('cljs.core');
goog.require('soccer.assets');
goog.require('soccer.loading');
goog.require('soccer.play');
goog.require('soccer.pixi');
soccer.main.init = (function soccer$main$init(){
soccer.assets.request_all.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"evilos","evilos",-681069316),new cljs.core.Keyword(null,"url","url",276297046),"imgs/evilos.jpg"], null)], null)], null));

soccer.assets.load.call(null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading","loading",-737050189),soccer.loading.mk_state.call(null),new cljs.core.Keyword(null,"play","play",-580418022),soccer.play.mk_state.call(null,soccer.pixi.mk_view.call(null,window.innerWidth,window.innerHeight)),new cljs.core.Keyword(null,"cur-state","cur-state",545726752),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});

//# sourceMappingURL=main.js.map