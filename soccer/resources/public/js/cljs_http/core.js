// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__11206){
var vec__11207 = p__11206;
var k = cljs.core.nth.call(null,vec__11207,(0),null);
var v = cljs.core.nth.call(null,vec__11207,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__11209 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__11209)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__11209)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__11209)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__11209)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__11209)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__11209)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__11210){
var map__11214 = p__11210;
var map__11214__$1 = ((((!((map__11214 == null)))?((((map__11214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11214):map__11214);
var request = map__11214__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__11214__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__11214__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__11214__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4580__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__11216 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__11216,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__11216,response_type);

G__11216.setTimeoutInterval(timeout);

G__11216.setWithCredentials(send_credentials);

return G__11216;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__11217){
var map__11245 = p__11217;
var map__11245__$1 = ((((!((map__11245 == null)))?((((map__11245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11245):map__11245);
var request = map__11245__$1;
var request_method = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4580__auto__ = request_method;
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_11272 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__11247_11273 = xhr__$1;
G__11247_11273.setProgressEventsEnabled(true);

G__11247_11273.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_11272,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__11247_11273.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_11272,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7572__auto___11274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___11274,channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___11274,channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_11258){
var state_val_11259 = (state_11258[(1)]);
if((state_val_11259 === (1))){
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11258__$1,(2),cancel);
} else {
if((state_val_11259 === (2))){
var inst_11249 = (state_11258[(2)]);
var inst_11250 = xhr__$1.isComplete();
var inst_11251 = cljs.core.not.call(null,inst_11250);
var state_11258__$1 = (function (){var statearr_11260 = state_11258;
(statearr_11260[(7)] = inst_11249);

return statearr_11260;
})();
if(inst_11251){
var statearr_11261_11275 = state_11258__$1;
(statearr_11261_11275[(1)] = (3));

} else {
var statearr_11262_11276 = state_11258__$1;
(statearr_11262_11276[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (3))){
var inst_11253 = xhr__$1.abort();
var state_11258__$1 = state_11258;
var statearr_11263_11277 = state_11258__$1;
(statearr_11263_11277[(2)] = inst_11253);

(statearr_11263_11277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (4))){
var state_11258__$1 = state_11258;
var statearr_11264_11278 = state_11258__$1;
(statearr_11264_11278[(2)] = null);

(statearr_11264_11278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (5))){
var inst_11256 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11258__$1,inst_11256);
} else {
return null;
}
}
}
}
}
});})(c__7572__auto___11274,channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__7507__auto__,c__7572__auto___11274,channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__7508__auto__ = null;
var cljs_http$core$xhr_$_state_machine__7508__auto____0 = (function (){
var statearr_11268 = [null,null,null,null,null,null,null,null];
(statearr_11268[(0)] = cljs_http$core$xhr_$_state_machine__7508__auto__);

(statearr_11268[(1)] = (1));

return statearr_11268;
});
var cljs_http$core$xhr_$_state_machine__7508__auto____1 = (function (state_11258){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object)){
var ex__7511__auto__ = e11269;
var statearr_11270_11279 = state_11258;
(statearr_11270_11279[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11280 = state_11258;
state_11258 = G__11280;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__7508__auto__ = function(state_11258){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__7508__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__7508__auto____1.call(this,state_11258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__7508__auto____0;
cljs_http$core$xhr_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__7508__auto____1;
return cljs_http$core$xhr_$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___11274,channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__7574__auto__ = (function (){var statearr_11271 = f__7573__auto__.call(null);
(statearr_11271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11274);

return statearr_11271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___11274,channel,request_url,method,headers__$1,xhr__$1,map__11245,map__11245__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__11281){
var map__11298 = p__11281;
var map__11298__$1 = ((((!((map__11298 == null)))?((((map__11298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11298):map__11298);
var request = map__11298__$1;
var timeout = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_11314 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_11314], null));

if(cljs.core.truth_(cancel)){
var c__7572__auto___11315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___11315,req_11314,channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___11315,req_11314,channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_11304){
var state_val_11305 = (state_11304[(1)]);
if((state_val_11305 === (1))){
var state_11304__$1 = state_11304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11304__$1,(2),cancel);
} else {
if((state_val_11305 === (2))){
var inst_11301 = (state_11304[(2)]);
var inst_11302 = jsonp__$1.cancel(req_11314);
var state_11304__$1 = (function (){var statearr_11306 = state_11304;
(statearr_11306[(7)] = inst_11301);

return statearr_11306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11304__$1,inst_11302);
} else {
return null;
}
}
});})(c__7572__auto___11315,req_11314,channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__7507__auto__,c__7572__auto___11315,req_11314,channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__7508__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__7508__auto____0 = (function (){
var statearr_11310 = [null,null,null,null,null,null,null,null];
(statearr_11310[(0)] = cljs_http$core$jsonp_$_state_machine__7508__auto__);

(statearr_11310[(1)] = (1));

return statearr_11310;
});
var cljs_http$core$jsonp_$_state_machine__7508__auto____1 = (function (state_11304){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11311){if((e11311 instanceof Object)){
var ex__7511__auto__ = e11311;
var statearr_11312_11316 = state_11304;
(statearr_11312_11316[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11317 = state_11304;
state_11304 = G__11317;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__7508__auto__ = function(state_11304){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__7508__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__7508__auto____1.call(this,state_11304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__7508__auto____0;
cljs_http$core$jsonp_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__7508__auto____1;
return cljs_http$core$jsonp_$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___11315,req_11314,channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__7574__auto__ = (function (){var statearr_11313 = f__7573__auto__.call(null);
(statearr_11313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11315);

return statearr_11313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___11315,req_11314,channel,jsonp__$1,map__11298,map__11298__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__11318){
var map__11321 = p__11318;
var map__11321__$1 = ((((!((map__11321 == null)))?((((map__11321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11321):map__11321);
var request__$1 = map__11321__$1;
var request_method = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map