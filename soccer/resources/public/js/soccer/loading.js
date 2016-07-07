// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.loading');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('dommy.core');
goog.require('soccer.assets');
goog.require('soccer.channels');
goog.require('cljs.core.async');
soccer.loading.enter = (function soccer$loading$enter(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"top","top",-1856271961),"10%");

return state;
});
soccer.loading.exit = (function soccer$loading$exit(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"top","top",-1856271961),"-100%");

return state;
});
soccer.loading.tick = (function soccer$loading$tick(state){
dommy.core.set_attr_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"value","value",305978217),soccer.assets.percent_done.call(null));

if(cljs.core.truth_(soccer.assets.ready_QMARK_.call(null))){
var c__7221__auto___11139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7221__auto___11139){
return (function (){
var f__7222__auto__ = (function (){var switch__7200__auto__ = ((function (c__7221__auto___11139){
return (function (state_11130){
var state_val_11131 = (state_11130[(1)]);
if((state_val_11131 === (1))){
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11130__$1,(2),soccer.channels.state_chan,new cljs.core.Keyword(null,"play","play",-580418022));
} else {
if((state_val_11131 === (2))){
var inst_11128 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11130__$1,inst_11128);
} else {
return null;
}
}
});})(c__7221__auto___11139))
;
return ((function (switch__7200__auto__,c__7221__auto___11139){
return (function() {
var soccer$loading$tick_$_state_machine__7201__auto__ = null;
var soccer$loading$tick_$_state_machine__7201__auto____0 = (function (){
var statearr_11135 = [null,null,null,null,null,null,null];
(statearr_11135[(0)] = soccer$loading$tick_$_state_machine__7201__auto__);

(statearr_11135[(1)] = (1));

return statearr_11135;
});
var soccer$loading$tick_$_state_machine__7201__auto____1 = (function (state_11130){
while(true){
var ret_value__7202__auto__ = (function (){try{while(true){
var result__7203__auto__ = switch__7200__auto__.call(null,state_11130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7203__auto__;
}
break;
}
}catch (e11136){if((e11136 instanceof Object)){
var ex__7204__auto__ = e11136;
var statearr_11137_11140 = state_11130;
(statearr_11137_11140[(5)] = ex__7204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11141 = state_11130;
state_11130 = G__11141;
continue;
} else {
return ret_value__7202__auto__;
}
break;
}
});
soccer$loading$tick_$_state_machine__7201__auto__ = function(state_11130){
switch(arguments.length){
case 0:
return soccer$loading$tick_$_state_machine__7201__auto____0.call(this);
case 1:
return soccer$loading$tick_$_state_machine__7201__auto____1.call(this,state_11130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$loading$tick_$_state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$loading$tick_$_state_machine__7201__auto____0;
soccer$loading$tick_$_state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$loading$tick_$_state_machine__7201__auto____1;
return soccer$loading$tick_$_state_machine__7201__auto__;
})()
;})(switch__7200__auto__,c__7221__auto___11139))
})();
var state__7223__auto__ = (function (){var statearr_11138 = f__7222__auto__.call(null);
(statearr_11138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7221__auto___11139);

return statearr_11138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7223__auto__);
});})(c__7221__auto___11139))
);

} else {
}

return state;
});
soccer.loading.draw = (function soccer$loading$draw(state){
return state;
});
soccer.loading.mk_loading_screen = (function soccer$loading$mk_loading_screen(){
dommy.core.append_BANG_.call(null,document.body,(function (){var v11143 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"loadingScreen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"id","id",-1388402092),"loadingProgress"], null)], null)], null);
var el__5973__auto__ = hipo.interpreter.create.call(null,v11143,null);
hipo.core.set_hiccup_BANG_.call(null,el__5973__auto__,v11143);

return el__5973__auto__;
})());

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),document.getElementById("loadingScreen"),new cljs.core.Keyword(null,"bar","bar",-1386246584),document.getElementById("loadingProgress")], null);
});
soccer.loading.mk_state = (function soccer$loading$mk_state(){
return cljs.core.into.call(null,soccer.loading.mk_loading_screen.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enter","enter",1792452624),soccer.loading.enter,new cljs.core.Keyword(null,"leave","leave",1022579443),soccer.loading.exit,new cljs.core.Keyword(null,"time-tick","time-tick",331405371),soccer.loading.tick,new cljs.core.Keyword(null,"draw","draw",1358331674),soccer.loading.draw], null));
});

//# sourceMappingURL=loading.js.map