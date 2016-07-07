// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.pixi');
goog.require('cljs.core');
goog.require('dommy.core');
if(typeof soccer.pixi.pixi !== 'undefined'){
} else {
soccer.pixi.pixi = PIXI;
}
soccer.pixi.mk_view = (function soccer$pixi$mk_view(width,height){
var renderer = soccer.pixi.pixi.autoDetectRenderer.call(null,width,height);
var stage = (new soccer.pixi.pixi.Container());
renderer.autoResize = true;

dommy.core.append_BANG_.call(null,document.body,dommy.core.set_style_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,renderer.view,new cljs.core.Keyword(null,"id","id",-1388402092),"canvas"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px"));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stage","stage",1843544772),stage], null);
});

//# sourceMappingURL=pixi.js.map