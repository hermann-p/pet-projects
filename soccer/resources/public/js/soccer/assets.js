// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.assets');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof soccer.assets.pixi !== 'undefined'){
} else {
soccer.assets.pixi = PIXI;
}
if(typeof soccer.assets.url_list !== 'undefined'){
} else {
soccer.assets.url_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof soccer.assets.assets !== 'undefined'){
} else {
soccer.assets.assets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
soccer.assets.count_requested = (function soccer$assets$count_requested(){
return (cljs.core.count.call(null,(function (){var or__4580__auto__ = new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()) + cljs.core.count.call(null,(function (){var or__4580__auto__ = new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
soccer.assets.count_loaded = (function soccer$assets$count_loaded(){
var is_ready_QMARK_ = (function soccer$assets$count_loaded_$_is_ready_QMARK_(p__10944){
var vec__10946 = p__10944;
var k = cljs.core.nth.call(null,vec__10946,(0),null);
var v = cljs.core.nth.call(null,vec__10946,(1),null);
return new cljs.core.Keyword(null,"ready","ready",1086465795).cljs$core$IFn$_invoke$arity$1(v);
});
return (cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets)))) + cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets)))));
});
soccer.assets.percent_done = (function soccer$assets$percent_done(){
var total = soccer.assets.count_requested.call(null);
var loaded = soccer.assets.count_loaded.call(null);
if(!((total === (0)))){
return ((100) * (loaded / total));
} else {
return (100);
}
});
soccer.assets.ready_QMARK_ = (function soccer$assets$ready_QMARK_(){
return cljs.core._EQ_.call(null,soccer.assets.count_requested.call(null),soccer.assets.count_loaded.call(null));
});
soccer.assets.asset_error_BANG_ = (function soccer$assets$asset_error_BANG_(type_key,id){
cljs.core.println.call(null,"Could not load",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"img","img",1442687358)))?"image":"sound"),id);

return cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__10947_SHARP_){
return cljs.core.assoc.call(null,p1__10947_SHARP_,type_key,cljs.core.dissoc.call(null,type_key.call(null,cljs.core.deref.call(null,soccer.assets.assets)),id));
}));
});
soccer.assets.request = (function soccer$assets$request(type_key,id,url){
return cljs.core.swap_BANG_.call(null,soccer.assets.url_list,(function (p1__10948_SHARP_){
return cljs.core.conj.call(null,p1__10948_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),type_key,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"url","url",276297046),url], null));
}));
});
soccer.assets.load_img = (function soccer$assets$load_img(id,url){
cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__10949_SHARP_){
return cljs.core.assoc_in.call(null,p1__10949_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

return soccer.assets.pixi.loader.add(url).load((function soccer$assets$load_img_$_on_load(){
var texture = (soccer.assets.pixi.loader.resources[url]).texture;
return cljs.core.swap_BANG_.call(null,soccer.assets.assets,((function (texture){
return (function (p1__10950_SHARP_){
return cljs.core.assoc_in.call(null,p1__10950_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ready","ready",1086465795),true,new cljs.core.Keyword(null,"data","data",-232669377),texture], null));
});})(texture))
);
}));
});
soccer.assets.load_sound = (function soccer$assets$load_sound(id,url){
cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__10951_SHARP_){
return cljs.core.assoc_in.call(null,p1__10951_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

var c__7221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7221__auto__){
return (function (){
var f__7222__auto__ = (function (){var switch__7200__auto__ = ((function (c__7221__auto__){
return (function (state_11011){
var state_val_11012 = (state_11011[(1)]);
if((state_val_11012 === (1))){
var inst_10990 = cljs.core.deref.call(null,soccer.assets.assets);
var inst_10991 = new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024).cljs$core$IFn$_invoke$arity$1(inst_10990);
var inst_10992 = [new cljs.core.Keyword(null,"response-type","response-type",-1493770458)];
var inst_10993 = [new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380)];
var inst_10994 = cljs.core.PersistentHashMap.fromArrays(inst_10992,inst_10993);
var inst_10995 = cljs_http.client.get.call(null,url,inst_10994);
var state_11011__$1 = (function (){var statearr_11013 = state_11011;
(statearr_11013[(7)] = inst_10991);

return statearr_11013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11011__$1,(2),inst_10995);
} else {
if((state_val_11012 === (2))){
var inst_10997 = (state_11011[(8)]);
var inst_10997__$1 = (state_11011[(2)]);
var inst_10998 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10997__$1);
var inst_10999 = cljs.core._EQ_.call(null,(200),inst_10998);
var state_11011__$1 = (function (){var statearr_11014 = state_11011;
(statearr_11014[(8)] = inst_10997__$1);

return statearr_11014;
})();
if(inst_10999){
var statearr_11015_11027 = state_11011__$1;
(statearr_11015_11027[(1)] = (3));

} else {
var statearr_11016_11028 = state_11011__$1;
(statearr_11016_11028[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11012 === (3))){
var inst_10997 = (state_11011[(8)]);
var inst_10991 = (state_11011[(7)]);
var inst_11001 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_10997);
var inst_11002 = (function (){var ctx = inst_10991;
var response = inst_10997;
return ((function (ctx,response,inst_10997,inst_10991,inst_11001,state_val_11012,c__7221__auto__){
return (function (buffer){
return cljs.core.swap_BANG_.call(null,soccer.assets.assets,((function (ctx,response,inst_10997,inst_10991,inst_11001,state_val_11012,c__7221__auto__){
return (function (p1__10952_SHARP_){
return cljs.core.assoc_in.call(null,p1__10952_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),buffer,new cljs.core.Keyword(null,"ready","ready",1086465795),true], null));
});})(ctx,response,inst_10997,inst_10991,inst_11001,state_val_11012,c__7221__auto__))
);
});
;})(ctx,response,inst_10997,inst_10991,inst_11001,state_val_11012,c__7221__auto__))
})();
var inst_11003 = (function (){var ctx = inst_10991;
var response = inst_10997;
return ((function (ctx,response,inst_10997,inst_10991,inst_11001,inst_11002,state_val_11012,c__7221__auto__){
return (function (){
cljs.core.println.call(null,"Error decoding",url);

return soccer.assets.asset_error_BANG_.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
});
;})(ctx,response,inst_10997,inst_10991,inst_11001,inst_11002,state_val_11012,c__7221__auto__))
})();
var inst_11004 = inst_10991.decodeAudioData(inst_11001,inst_11002,inst_11003);
var state_11011__$1 = state_11011;
var statearr_11017_11029 = state_11011__$1;
(statearr_11017_11029[(2)] = inst_11004);

(statearr_11017_11029[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11012 === (4))){
var inst_11006 = cljs.core.println.call(null,"Error loading",url);
var inst_11007 = soccer.assets.asset_error_BANG_.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
var state_11011__$1 = (function (){var statearr_11018 = state_11011;
(statearr_11018[(9)] = inst_11006);

return statearr_11018;
})();
var statearr_11019_11030 = state_11011__$1;
(statearr_11019_11030[(2)] = inst_11007);

(statearr_11019_11030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11012 === (5))){
var inst_11009 = (state_11011[(2)]);
var state_11011__$1 = state_11011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11011__$1,inst_11009);
} else {
return null;
}
}
}
}
}
});})(c__7221__auto__))
;
return ((function (switch__7200__auto__,c__7221__auto__){
return (function() {
var soccer$assets$load_sound_$_state_machine__7201__auto__ = null;
var soccer$assets$load_sound_$_state_machine__7201__auto____0 = (function (){
var statearr_11023 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11023[(0)] = soccer$assets$load_sound_$_state_machine__7201__auto__);

(statearr_11023[(1)] = (1));

return statearr_11023;
});
var soccer$assets$load_sound_$_state_machine__7201__auto____1 = (function (state_11011){
while(true){
var ret_value__7202__auto__ = (function (){try{while(true){
var result__7203__auto__ = switch__7200__auto__.call(null,state_11011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7203__auto__;
}
break;
}
}catch (e11024){if((e11024 instanceof Object)){
var ex__7204__auto__ = e11024;
var statearr_11025_11031 = state_11011;
(statearr_11025_11031[(5)] = ex__7204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11032 = state_11011;
state_11011 = G__11032;
continue;
} else {
return ret_value__7202__auto__;
}
break;
}
});
soccer$assets$load_sound_$_state_machine__7201__auto__ = function(state_11011){
switch(arguments.length){
case 0:
return soccer$assets$load_sound_$_state_machine__7201__auto____0.call(this);
case 1:
return soccer$assets$load_sound_$_state_machine__7201__auto____1.call(this,state_11011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$assets$load_sound_$_state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$assets$load_sound_$_state_machine__7201__auto____0;
soccer$assets$load_sound_$_state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$assets$load_sound_$_state_machine__7201__auto____1;
return soccer$assets$load_sound_$_state_machine__7201__auto__;
})()
;})(switch__7200__auto__,c__7221__auto__))
})();
var state__7223__auto__ = (function (){var statearr_11026 = f__7222__auto__.call(null);
(statearr_11026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7221__auto__);

return statearr_11026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7223__auto__);
});})(c__7221__auto__))
);

return c__7221__auto__;
});
soccer.assets.load_asset = (function soccer$assets$load_asset(p__11033){
var map__11037 = p__11033;
var map__11037__$1 = ((((!((map__11037 == null)))?((((map__11037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11037):map__11037);
var type_key = cljs.core.get.call(null,map__11037__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));
var id = cljs.core.get.call(null,map__11037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.call(null,map__11037__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,soccer.assets.assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id], null)))){
var G__11039 = (((type_key instanceof cljs.core.Keyword))?type_key.fqn:null);
switch (G__11039) {
case "img":
return soccer.assets.load_img.call(null,id,url);

break;
case "snd":
return soccer.assets.load_sound.call(null,id,url);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type_key)].join('')));

}
} else {
return null;
}
});
soccer.assets.load = (function soccer$assets$load(){
cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__11041_SHARP_){
return cljs.core.assoc.call(null,p1__11041_SHARP_,new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024),(function (){var or__4580__auto__ = (new AudioContext());
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return (new webkitAudioContext());
}
})());
}));

var seq__11046 = cljs.core.seq.call(null,cljs.core.deref.call(null,soccer.assets.url_list));
var chunk__11047 = null;
var count__11048 = (0);
var i__11049 = (0);
while(true){
if((i__11049 < count__11048)){
var asset = cljs.core._nth.call(null,chunk__11047,i__11049);
soccer.assets.load_asset.call(null,asset);

var G__11050 = seq__11046;
var G__11051 = chunk__11047;
var G__11052 = count__11048;
var G__11053 = (i__11049 + (1));
seq__11046 = G__11050;
chunk__11047 = G__11051;
count__11048 = G__11052;
i__11049 = G__11053;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11046);
if(temp__4657__auto__){
var seq__11046__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11046__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__11046__$1);
var G__11054 = cljs.core.chunk_rest.call(null,seq__11046__$1);
var G__11055 = c__5383__auto__;
var G__11056 = cljs.core.count.call(null,c__5383__auto__);
var G__11057 = (0);
seq__11046 = G__11054;
chunk__11047 = G__11055;
count__11048 = G__11056;
i__11049 = G__11057;
continue;
} else {
var asset = cljs.core.first.call(null,seq__11046__$1);
soccer.assets.load_asset.call(null,asset);

var G__11058 = cljs.core.next.call(null,seq__11046__$1);
var G__11059 = null;
var G__11060 = (0);
var G__11061 = (0);
seq__11046 = G__11058;
chunk__11047 = G__11059;
count__11048 = G__11060;
i__11049 = G__11061;
continue;
}
} else {
return null;
}
}
break;
}
});
soccer.assets.request_all = (function soccer$assets$request_all(reqmap){
if(cljs.core.map_QMARK_.call(null,reqmap)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Expected asset map {:type [{:id ... :url ...} ...]}"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"reqmap","reqmap",387190031,null))))].join('')));
}

var seq__11070_11078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__11071_11079 = null;
var count__11072_11080 = (0);
var i__11073_11081 = (0);
while(true){
if((i__11073_11081 < count__11072_11080)){
var img_11082 = cljs.core._nth.call(null,chunk__11071_11079,i__11073_11081);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_11082),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_11082)], null));

var G__11083 = seq__11070_11078;
var G__11084 = chunk__11071_11079;
var G__11085 = count__11072_11080;
var G__11086 = (i__11073_11081 + (1));
seq__11070_11078 = G__11083;
chunk__11071_11079 = G__11084;
count__11072_11080 = G__11085;
i__11073_11081 = G__11086;
continue;
} else {
var temp__4657__auto___11087 = cljs.core.seq.call(null,seq__11070_11078);
if(temp__4657__auto___11087){
var seq__11070_11088__$1 = temp__4657__auto___11087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11070_11088__$1)){
var c__5383__auto___11089 = cljs.core.chunk_first.call(null,seq__11070_11088__$1);
var G__11090 = cljs.core.chunk_rest.call(null,seq__11070_11088__$1);
var G__11091 = c__5383__auto___11089;
var G__11092 = cljs.core.count.call(null,c__5383__auto___11089);
var G__11093 = (0);
seq__11070_11078 = G__11090;
chunk__11071_11079 = G__11091;
count__11072_11080 = G__11092;
i__11073_11081 = G__11093;
continue;
} else {
var img_11094 = cljs.core.first.call(null,seq__11070_11088__$1);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_11094),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_11094)], null));

var G__11095 = cljs.core.next.call(null,seq__11070_11088__$1);
var G__11096 = null;
var G__11097 = (0);
var G__11098 = (0);
seq__11070_11078 = G__11095;
chunk__11071_11079 = G__11096;
count__11072_11080 = G__11097;
i__11073_11081 = G__11098;
continue;
}
} else {
}
}
break;
}

var seq__11074 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__11075 = null;
var count__11076 = (0);
var i__11077 = (0);
while(true){
if((i__11077 < count__11076)){
var snd = cljs.core._nth.call(null,chunk__11075,i__11077);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd)], null));

var G__11099 = seq__11074;
var G__11100 = chunk__11075;
var G__11101 = count__11076;
var G__11102 = (i__11077 + (1));
seq__11074 = G__11099;
chunk__11075 = G__11100;
count__11076 = G__11101;
i__11077 = G__11102;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11074);
if(temp__4657__auto__){
var seq__11074__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11074__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__11074__$1);
var G__11103 = cljs.core.chunk_rest.call(null,seq__11074__$1);
var G__11104 = c__5383__auto__;
var G__11105 = cljs.core.count.call(null,c__5383__auto__);
var G__11106 = (0);
seq__11074 = G__11103;
chunk__11075 = G__11104;
count__11076 = G__11105;
i__11077 = G__11106;
continue;
} else {
var snd = cljs.core.first.call(null,seq__11074__$1);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd)], null));

var G__11107 = cljs.core.next.call(null,seq__11074__$1);
var G__11108 = null;
var G__11109 = (0);
var G__11110 = (0);
seq__11074 = G__11107;
chunk__11075 = G__11108;
count__11076 = G__11109;
i__11077 = G__11110;
continue;
}
} else {
return null;
}
}
break;
}
});
soccer.assets.get_asset = (function soccer$assets$get_asset(type_key,id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,soccer.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var asset = temp__4655__auto__;
return asset;
} else {
return cljs.core.println.call(null,"No",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"image","image",-58725096)))?"image":"sound"),"named",id,"loaded!");
}
});
soccer.assets.mk_sprite = (function soccer$assets$mk_sprite(id){
return (new soccer.assets.pixi.Sprite(soccer.assets.get_asset.call(null,new cljs.core.Keyword(null,"img","img",1442687358),id)));
});
soccer.assets.play_sound = (function soccer$assets$play_sound(id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,soccer.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var sound = temp__4655__auto__;
var ctx = new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets));
var src = ctx.createBufferSource();
src.buffer = sound;

var G__11112 = src;
G__11112.connect(ctx.destination);

G__11112.start((0));

return G__11112;
} else {
return null;
}
});

//# sourceMappingURL=assets.js.map