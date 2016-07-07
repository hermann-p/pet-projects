// Compiled by ClojureScript 1.7.145 {}
goog.provide('kicker.assets');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof kicker.assets.pixi !== 'undefined'){
} else {
kicker.assets.pixi = PIXI;
}
if(typeof kicker.assets.url_list !== 'undefined'){
} else {
kicker.assets.url_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof kicker.assets.assets !== 'undefined'){
} else {
kicker.assets.assets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
kicker.assets.count_requested = (function kicker$assets$count_requested(){
return (cljs.core.count.call(null,(function (){var or__4580__auto__ = new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kicker.assets.assets));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()) + cljs.core.count.call(null,(function (){var or__4580__auto__ = new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kicker.assets.assets));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
kicker.assets.count_loaded = (function kicker$assets$count_loaded(){
var is_ready_QMARK_ = (function kicker$assets$count_loaded_$_is_ready_QMARK_(p__14205){
var vec__14207 = p__14205;
var k = cljs.core.nth.call(null,vec__14207,(0),null);
var v = cljs.core.nth.call(null,vec__14207,(1),null);
return new cljs.core.Keyword(null,"ready","ready",1086465795).cljs$core$IFn$_invoke$arity$1(v);
});
return (cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kicker.assets.assets)))) + cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kicker.assets.assets)))));
});
kicker.assets.percent_done = (function kicker$assets$percent_done(){
var total = kicker.assets.count_requested.call(null);
var loaded = kicker.assets.count_loaded.call(null);
if(!((total === (0)))){
return ((100) * (loaded / total));
} else {
return (100);
}
});
kicker.assets.ready_QMARK_ = (function kicker$assets$ready_QMARK_(){
return cljs.core._EQ_.call(null,kicker.assets.count_requested.call(null),kicker.assets.count_loaded.call(null));
});
kicker.assets.asset_error_BANG_ = (function kicker$assets$asset_error_BANG_(type_key,id){
cljs.core.println.call(null,"Could not load",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"img","img",1442687358)))?"image":"sound"),id);

return cljs.core.swap_BANG_.call(null,kicker.assets.assets,(function (p1__14208_SHARP_){
return cljs.core.assoc.call(null,p1__14208_SHARP_,type_key,cljs.core.dissoc.call(null,type_key.call(null,cljs.core.deref.call(null,kicker.assets.assets)),id));
}));
});
kicker.assets.request = (function kicker$assets$request(type_key,id,url){
return cljs.core.swap_BANG_.call(null,kicker.assets.url_list,(function (p1__14209_SHARP_){
return cljs.core.conj.call(null,p1__14209_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),type_key,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"url","url",276297046),url], null));
}));
});
kicker.assets.load_img = (function kicker$assets$load_img(id,url){
cljs.core.swap_BANG_.call(null,kicker.assets.assets,(function (p1__14210_SHARP_){
return cljs.core.assoc_in.call(null,p1__14210_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

return kicker.assets.pixi.loader.add(cljs.core.name.call(null,id),url).load((function (){
var texture = (kicker.assets.pixi.loader.resources[cljs.core.name.call(null,id)]).texture;
return cljs.core.swap_BANG_.call(null,kicker.assets.assets,((function (texture){
return (function (p1__14211_SHARP_){
return cljs.core.assoc_in.call(null,p1__14211_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ready","ready",1086465795),true,new cljs.core.Keyword(null,"data","data",-232669377),texture], null));
});})(texture))
);
}));
});
kicker.assets.load_sound = (function kicker$assets$load_sound(id,url){
cljs.core.swap_BANG_.call(null,kicker.assets.assets,(function (p1__14212_SHARP_){
return cljs.core.assoc_in.call(null,p1__14212_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

var c__7572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto__){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto__){
return (function (state_14272){
var state_val_14273 = (state_14272[(1)]);
if((state_val_14273 === (1))){
var inst_14251 = cljs.core.deref.call(null,kicker.assets.assets);
var inst_14252 = new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024).cljs$core$IFn$_invoke$arity$1(inst_14251);
var inst_14253 = [new cljs.core.Keyword(null,"response-type","response-type",-1493770458)];
var inst_14254 = [new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380)];
var inst_14255 = cljs.core.PersistentHashMap.fromArrays(inst_14253,inst_14254);
var inst_14256 = cljs_http.client.get.call(null,url,inst_14255);
var state_14272__$1 = (function (){var statearr_14274 = state_14272;
(statearr_14274[(7)] = inst_14252);

return statearr_14274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14272__$1,(2),inst_14256);
} else {
if((state_val_14273 === (2))){
var inst_14258 = (state_14272[(8)]);
var inst_14258__$1 = (state_14272[(2)]);
var inst_14259 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_14258__$1);
var inst_14260 = cljs.core._EQ_.call(null,(200),inst_14259);
var state_14272__$1 = (function (){var statearr_14275 = state_14272;
(statearr_14275[(8)] = inst_14258__$1);

return statearr_14275;
})();
if(inst_14260){
var statearr_14276_14288 = state_14272__$1;
(statearr_14276_14288[(1)] = (3));

} else {
var statearr_14277_14289 = state_14272__$1;
(statearr_14277_14289[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (3))){
var inst_14252 = (state_14272[(7)]);
var inst_14258 = (state_14272[(8)]);
var inst_14262 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14258);
var inst_14263 = (function (){var ctx = inst_14252;
var response = inst_14258;
return ((function (ctx,response,inst_14252,inst_14258,inst_14262,state_val_14273,c__7572__auto__){
return (function (buffer){
return cljs.core.swap_BANG_.call(null,kicker.assets.assets,((function (ctx,response,inst_14252,inst_14258,inst_14262,state_val_14273,c__7572__auto__){
return (function (p1__14213_SHARP_){
return cljs.core.assoc_in.call(null,p1__14213_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),buffer,new cljs.core.Keyword(null,"ready","ready",1086465795),true], null));
});})(ctx,response,inst_14252,inst_14258,inst_14262,state_val_14273,c__7572__auto__))
);
});
;})(ctx,response,inst_14252,inst_14258,inst_14262,state_val_14273,c__7572__auto__))
})();
var inst_14264 = (function (){var ctx = inst_14252;
var response = inst_14258;
return ((function (ctx,response,inst_14252,inst_14258,inst_14262,inst_14263,state_val_14273,c__7572__auto__){
return (function (){
cljs.core.println.call(null,"Error decoding",url);

return kicker.assets.asset_error_BANG_.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
});
;})(ctx,response,inst_14252,inst_14258,inst_14262,inst_14263,state_val_14273,c__7572__auto__))
})();
var inst_14265 = inst_14252.decodeAudioData(inst_14262,inst_14263,inst_14264);
var state_14272__$1 = state_14272;
var statearr_14278_14290 = state_14272__$1;
(statearr_14278_14290[(2)] = inst_14265);

(statearr_14278_14290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (4))){
var inst_14267 = cljs.core.println.call(null,"Error loading",url);
var inst_14268 = kicker.assets.asset_error_BANG_.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
var state_14272__$1 = (function (){var statearr_14279 = state_14272;
(statearr_14279[(9)] = inst_14267);

return statearr_14279;
})();
var statearr_14280_14291 = state_14272__$1;
(statearr_14280_14291[(2)] = inst_14268);

(statearr_14280_14291[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (5))){
var inst_14270 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14272__$1,inst_14270);
} else {
return null;
}
}
}
}
}
});})(c__7572__auto__))
;
return ((function (switch__7507__auto__,c__7572__auto__){
return (function() {
var kicker$assets$load_sound_$_state_machine__7508__auto__ = null;
var kicker$assets$load_sound_$_state_machine__7508__auto____0 = (function (){
var statearr_14284 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14284[(0)] = kicker$assets$load_sound_$_state_machine__7508__auto__);

(statearr_14284[(1)] = (1));

return statearr_14284;
});
var kicker$assets$load_sound_$_state_machine__7508__auto____1 = (function (state_14272){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_14272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e14285){if((e14285 instanceof Object)){
var ex__7511__auto__ = e14285;
var statearr_14286_14292 = state_14272;
(statearr_14286_14292[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14293 = state_14272;
state_14272 = G__14293;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
kicker$assets$load_sound_$_state_machine__7508__auto__ = function(state_14272){
switch(arguments.length){
case 0:
return kicker$assets$load_sound_$_state_machine__7508__auto____0.call(this);
case 1:
return kicker$assets$load_sound_$_state_machine__7508__auto____1.call(this,state_14272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kicker$assets$load_sound_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = kicker$assets$load_sound_$_state_machine__7508__auto____0;
kicker$assets$load_sound_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = kicker$assets$load_sound_$_state_machine__7508__auto____1;
return kicker$assets$load_sound_$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto__))
})();
var state__7574__auto__ = (function (){var statearr_14287 = f__7573__auto__.call(null);
(statearr_14287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto__);

return statearr_14287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto__))
);

return c__7572__auto__;
});
kicker.assets.load_asset = (function kicker$assets$load_asset(p__14294){
var map__14298 = p__14294;
var map__14298__$1 = ((((!((map__14298 == null)))?((((map__14298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14298):map__14298);
var type_key = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));
var id = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kicker.assets.assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id], null)))){
var G__14300 = (((type_key instanceof cljs.core.Keyword))?type_key.fqn:null);
switch (G__14300) {
case "img":
return kicker.assets.load_img.call(null,id,url);

break;
case "snd":
return kicker.assets.load_sound.call(null,id,url);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type_key)].join('')));

}
} else {
return null;
}
});
kicker.assets.load = (function kicker$assets$load(){
cljs.core.swap_BANG_.call(null,kicker.assets.assets,(function (p1__14302_SHARP_){
return cljs.core.assoc.call(null,p1__14302_SHARP_,new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024),(function (){var or__4580__auto__ = (new AudioContext());
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return (new webkitAudioContext());
}
})());
}));

var seq__14307 = cljs.core.seq.call(null,cljs.core.deref.call(null,kicker.assets.url_list));
var chunk__14308 = null;
var count__14309 = (0);
var i__14310 = (0);
while(true){
if((i__14310 < count__14309)){
var asset = cljs.core._nth.call(null,chunk__14308,i__14310);
kicker.assets.load_asset.call(null,asset);

var G__14311 = seq__14307;
var G__14312 = chunk__14308;
var G__14313 = count__14309;
var G__14314 = (i__14310 + (1));
seq__14307 = G__14311;
chunk__14308 = G__14312;
count__14309 = G__14313;
i__14310 = G__14314;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14307);
if(temp__4657__auto__){
var seq__14307__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14307__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__14307__$1);
var G__14315 = cljs.core.chunk_rest.call(null,seq__14307__$1);
var G__14316 = c__5383__auto__;
var G__14317 = cljs.core.count.call(null,c__5383__auto__);
var G__14318 = (0);
seq__14307 = G__14315;
chunk__14308 = G__14316;
count__14309 = G__14317;
i__14310 = G__14318;
continue;
} else {
var asset = cljs.core.first.call(null,seq__14307__$1);
kicker.assets.load_asset.call(null,asset);

var G__14319 = cljs.core.next.call(null,seq__14307__$1);
var G__14320 = null;
var G__14321 = (0);
var G__14322 = (0);
seq__14307 = G__14319;
chunk__14308 = G__14320;
count__14309 = G__14321;
i__14310 = G__14322;
continue;
}
} else {
return null;
}
}
break;
}
});
kicker.assets.request_all = (function kicker$assets$request_all(reqmap){
if(cljs.core.map_QMARK_.call(null,reqmap)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Expected asset map {:type [{:id ... :url ...} ...]}"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"reqmap","reqmap",387190031,null))))].join('')));
}

var seq__14331_14339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__14332_14340 = null;
var count__14333_14341 = (0);
var i__14334_14342 = (0);
while(true){
if((i__14334_14342 < count__14333_14341)){
var img_14343 = cljs.core._nth.call(null,chunk__14332_14340,i__14334_14342);
kicker.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_14343),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_14343)], null));

var G__14344 = seq__14331_14339;
var G__14345 = chunk__14332_14340;
var G__14346 = count__14333_14341;
var G__14347 = (i__14334_14342 + (1));
seq__14331_14339 = G__14344;
chunk__14332_14340 = G__14345;
count__14333_14341 = G__14346;
i__14334_14342 = G__14347;
continue;
} else {
var temp__4657__auto___14348 = cljs.core.seq.call(null,seq__14331_14339);
if(temp__4657__auto___14348){
var seq__14331_14349__$1 = temp__4657__auto___14348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14331_14349__$1)){
var c__5383__auto___14350 = cljs.core.chunk_first.call(null,seq__14331_14349__$1);
var G__14351 = cljs.core.chunk_rest.call(null,seq__14331_14349__$1);
var G__14352 = c__5383__auto___14350;
var G__14353 = cljs.core.count.call(null,c__5383__auto___14350);
var G__14354 = (0);
seq__14331_14339 = G__14351;
chunk__14332_14340 = G__14352;
count__14333_14341 = G__14353;
i__14334_14342 = G__14354;
continue;
} else {
var img_14355 = cljs.core.first.call(null,seq__14331_14349__$1);
kicker.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_14355),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_14355)], null));

var G__14356 = cljs.core.next.call(null,seq__14331_14349__$1);
var G__14357 = null;
var G__14358 = (0);
var G__14359 = (0);
seq__14331_14339 = G__14356;
chunk__14332_14340 = G__14357;
count__14333_14341 = G__14358;
i__14334_14342 = G__14359;
continue;
}
} else {
}
}
break;
}

var seq__14335 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__14336 = null;
var count__14337 = (0);
var i__14338 = (0);
while(true){
if((i__14338 < count__14337)){
var snd = cljs.core._nth.call(null,chunk__14336,i__14338);
kicker.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd)], null));

var G__14360 = seq__14335;
var G__14361 = chunk__14336;
var G__14362 = count__14337;
var G__14363 = (i__14338 + (1));
seq__14335 = G__14360;
chunk__14336 = G__14361;
count__14337 = G__14362;
i__14338 = G__14363;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14335);
if(temp__4657__auto__){
var seq__14335__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14335__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__14335__$1);
var G__14364 = cljs.core.chunk_rest.call(null,seq__14335__$1);
var G__14365 = c__5383__auto__;
var G__14366 = cljs.core.count.call(null,c__5383__auto__);
var G__14367 = (0);
seq__14335 = G__14364;
chunk__14336 = G__14365;
count__14337 = G__14366;
i__14338 = G__14367;
continue;
} else {
var snd = cljs.core.first.call(null,seq__14335__$1);
kicker.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd)], null));

var G__14368 = cljs.core.next.call(null,seq__14335__$1);
var G__14369 = null;
var G__14370 = (0);
var G__14371 = (0);
seq__14335 = G__14368;
chunk__14336 = G__14369;
count__14337 = G__14370;
i__14338 = G__14371;
continue;
}
} else {
return null;
}
}
break;
}
});
kicker.assets.get_asset = (function kicker$assets$get_asset(type_key,id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,kicker.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var asset = temp__4655__auto__;
return asset;
} else {
return cljs.core.println.call(null,"No",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"image","image",-58725096)))?"image":"sound"),"named",id,"loaded!");
}
});
kicker.assets.mk_sprite = (function kicker$assets$mk_sprite(id){
return (new kicker.assets.pixi.Sprite(kicker.assets.get_asset.call(null,new cljs.core.Keyword(null,"img","img",1442687358),id)));
});
kicker.assets.play_sound = (function kicker$assets$play_sound(id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,kicker.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var sound = temp__4655__auto__;
var ctx = new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kicker.assets.assets));
var src = ctx.createBufferSource();
src.buffer = sound;

var G__14373 = src;
G__14373.connect(ctx.destination);

G__14373.start((0));

return G__14373;
} else {
return null;
}
});

//# sourceMappingURL=assets.js.map