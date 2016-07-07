// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.play');
goog.require('cljs.core');
goog.require('soccer.channels');
goog.require('cljs.core.async');
soccer.play.time_step = (function soccer$play$time_step(game){
return game;
});
soccer.play.enter = (function soccer$play$enter(game){
return game;
});
soccer.play.leave = (function soccer$play$leave(game){
return game;
});
soccer.play.draw = (function soccer$play$draw(game){
return game;
});
soccer.play.mk_state = (function soccer$play$mk_state(container){
return cljs.core.into.call(null,container,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enter","enter",1792452624),soccer.play.enter,new cljs.core.Keyword(null,"leave","leave",1022579443),soccer.play.leave,new cljs.core.Keyword(null,"time-tick","time-tick",331405371),soccer.play.time_step,new cljs.core.Keyword(null,"draw","draw",1358331674),soccer.play.draw], null));
});

//# sourceMappingURL=play.js.map