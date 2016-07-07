// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4568__auto__ = v;
if(cljs.core.truth_(and__4568__auto__)){
return (v > (0));
} else {
return and__4568__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__10685_SHARP_,p2__10684_SHARP_){
var vec__10687 = clojure.string.split.call(null,p2__10684_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__10687,(0),null);
var v = cljs.core.nth.call(null,vec__10687,(1),null);
return cljs.core.assoc.call(null,p1__10685_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__10688_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__10688_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__10689){
var vec__10691 = p__10689;
var k = cljs.core.nth.call(null,vec__10691,(0),null);
var v = cljs.core.nth.call(null,vec__10691,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__10692_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__10692_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4568__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4568__auto__){
var and__4568__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4568__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4568__auto____$1;
}
} else {
return and__4568__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__10693_SHARP_){
return cljs_http.client.decode_body.call(null,p1__10693_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10698 = arguments.length;
var i__5639__auto___10699 = (0);
while(true){
if((i__5639__auto___10699 < len__5638__auto___10698)){
args__5645__auto__.push((arguments[i__5639__auto___10699]));

var G__10700 = (i__5639__auto___10699 + (1));
i__5639__auto___10699 = G__10700;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10696){
var vec__10697 = p__10696;
var default_headers = cljs.core.nth.call(null,vec__10697,(0),null);
return ((function (vec__10697,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__4580__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__10697,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq10694){
var G__10695 = cljs.core.first.call(null,seq10694);
var seq10694__$1 = cljs.core.next.call(null,seq10694);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__10695,seq10694__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10705 = arguments.length;
var i__5639__auto___10706 = (0);
while(true){
if((i__5639__auto___10706 < len__5638__auto___10705)){
args__5645__auto__.push((arguments[i__5639__auto___10706]));

var G__10707 = (i__5639__auto___10706 + (1));
i__5639__auto___10706 = G__10707;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10703){
var vec__10704 = p__10703;
var accept = cljs.core.nth.call(null,vec__10704,(0),null);
return ((function (vec__10704,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__4580__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__10704,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq10701){
var G__10702 = cljs.core.first.call(null,seq10701);
var seq10701__$1 = cljs.core.next.call(null,seq10701);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__10702,seq10701__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10712 = arguments.length;
var i__5639__auto___10713 = (0);
while(true){
if((i__5639__auto___10713 < len__5638__auto___10712)){
args__5645__auto__.push((arguments[i__5639__auto___10713]));

var G__10714 = (i__5639__auto___10713 + (1));
i__5639__auto___10713 = G__10714;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10710){
var vec__10711 = p__10710;
var content_type = cljs.core.nth.call(null,vec__10711,(0),null);
return ((function (vec__10711,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__4580__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__10711,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq10708){
var G__10709 = cljs.core.first.call(null,seq10708);
var seq10708__$1 = cljs.core.next.call(null,seq10708);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__10709,seq10708__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__10717 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__10717__$1 = ((((!((map__10717 == null)))?((((map__10717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10717):map__10717);
var encoding = cljs.core.get.call(null,map__10717__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__10717__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__10723 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__10723__$1 = ((((!((map__10723 == null)))?((((map__10723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10723):map__10723);
var decoding = cljs.core.get.call(null,map__10723__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__10723__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__10723,map__10723__$1,decoding,decoding_opts){
return (function (p1__10719_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__10719_SHARP_,decoding,decoding_opts);
});})(map__10723,map__10723__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__10723,map__10723__$1,decoding,decoding_opts,transit_decode){
return (function (p1__10720_SHARP_){
return cljs_http.client.decode_body.call(null,p1__10720_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__10723,map__10723__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__10725_SHARP_){
return cljs_http.client.decode_body.call(null,p1__10725_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__10729){
var map__10730 = p__10729;
var map__10730__$1 = ((((!((map__10730 == null)))?((((map__10730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10730):map__10730);
var req = map__10730__$1;
var query_params = cljs.core.get.call(null,map__10730__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__10735){
var map__10736 = p__10735;
var map__10736__$1 = ((((!((map__10736 == null)))?((((map__10736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10736):map__10736);
var request = map__10736__$1;
var form_params = cljs.core.get.call(null,map__10736__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__10736__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__10736__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4568__auto__ = form_params;
if(cljs.core.truth_(and__4568__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4568__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__10744_10750 = cljs.core.seq.call(null,params);
var chunk__10745_10751 = null;
var count__10746_10752 = (0);
var i__10747_10753 = (0);
while(true){
if((i__10747_10753 < count__10746_10752)){
var vec__10748_10754 = cljs.core._nth.call(null,chunk__10745_10751,i__10747_10753);
var k_10755 = cljs.core.nth.call(null,vec__10748_10754,(0),null);
var v_10756 = cljs.core.nth.call(null,vec__10748_10754,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_10756)){
form_data.append(cljs.core.name.call(null,k_10755),cljs.core.first.call(null,v_10756),cljs.core.second.call(null,v_10756));
} else {
form_data.append(cljs.core.name.call(null,k_10755),v_10756);
}

var G__10757 = seq__10744_10750;
var G__10758 = chunk__10745_10751;
var G__10759 = count__10746_10752;
var G__10760 = (i__10747_10753 + (1));
seq__10744_10750 = G__10757;
chunk__10745_10751 = G__10758;
count__10746_10752 = G__10759;
i__10747_10753 = G__10760;
continue;
} else {
var temp__4657__auto___10761 = cljs.core.seq.call(null,seq__10744_10750);
if(temp__4657__auto___10761){
var seq__10744_10762__$1 = temp__4657__auto___10761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10744_10762__$1)){
var c__5383__auto___10763 = cljs.core.chunk_first.call(null,seq__10744_10762__$1);
var G__10764 = cljs.core.chunk_rest.call(null,seq__10744_10762__$1);
var G__10765 = c__5383__auto___10763;
var G__10766 = cljs.core.count.call(null,c__5383__auto___10763);
var G__10767 = (0);
seq__10744_10750 = G__10764;
chunk__10745_10751 = G__10765;
count__10746_10752 = G__10766;
i__10747_10753 = G__10767;
continue;
} else {
var vec__10749_10768 = cljs.core.first.call(null,seq__10744_10762__$1);
var k_10769 = cljs.core.nth.call(null,vec__10749_10768,(0),null);
var v_10770 = cljs.core.nth.call(null,vec__10749_10768,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_10770)){
form_data.append(cljs.core.name.call(null,k_10769),cljs.core.first.call(null,v_10770),cljs.core.second.call(null,v_10770));
} else {
form_data.append(cljs.core.name.call(null,k_10769),v_10770);
}

var G__10771 = cljs.core.next.call(null,seq__10744_10762__$1);
var G__10772 = null;
var G__10773 = (0);
var G__10774 = (0);
seq__10744_10750 = G__10771;
chunk__10745_10751 = G__10772;
count__10746_10752 = G__10773;
i__10747_10753 = G__10774;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__10778){
var map__10779 = p__10778;
var map__10779__$1 = ((((!((map__10779 == null)))?((((map__10779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);
var request = map__10779__$1;
var multipart_params = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4568__auto__ = multipart_params;
if(cljs.core.truth_(and__4568__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4568__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__10781_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__10781_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__10786){
var map__10787 = p__10786;
var map__10787__$1 = ((((!((map__10787 == null)))?((((map__10787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10787):map__10787);
var req = map__10787__$1;
var query_params = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__10787,map__10787__$1,req,query_params){
return (function (p1__10782_SHARP_){
return cljs.core.merge.call(null,p1__10782_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__10787,map__10787__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10793 = arguments.length;
var i__5639__auto___10794 = (0);
while(true){
if((i__5639__auto___10794 < len__5638__auto___10793)){
args__5645__auto__.push((arguments[i__5639__auto___10794]));

var G__10795 = (i__5639__auto___10794 + (1));
i__5639__auto___10794 = G__10795;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10791){
var vec__10792 = p__10791;
var credentials = cljs.core.nth.call(null,vec__10792,(0),null);
return ((function (vec__10792,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4580__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__10792,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq10789){
var G__10790 = cljs.core.first.call(null,seq10789);
var seq10789__$1 = cljs.core.next.call(null,seq10789);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__10790,seq10789__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10800 = arguments.length;
var i__5639__auto___10801 = (0);
while(true){
if((i__5639__auto___10801 < len__5638__auto___10800)){
args__5645__auto__.push((arguments[i__5639__auto___10801]));

var G__10802 = (i__5639__auto___10801 + (1));
i__5639__auto___10801 = G__10802;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10798){
var vec__10799 = p__10798;
var req = cljs.core.nth.call(null,vec__10799,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq10796){
var G__10797 = cljs.core.first.call(null,seq10796);
var seq10796__$1 = cljs.core.next.call(null,seq10796);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__10797,seq10796__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10807 = arguments.length;
var i__5639__auto___10808 = (0);
while(true){
if((i__5639__auto___10808 < len__5638__auto___10807)){
args__5645__auto__.push((arguments[i__5639__auto___10808]));

var G__10809 = (i__5639__auto___10808 + (1));
i__5639__auto___10808 = G__10809;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10805){
var vec__10806 = p__10805;
var req = cljs.core.nth.call(null,vec__10806,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq10803){
var G__10804 = cljs.core.first.call(null,seq10803);
var seq10803__$1 = cljs.core.next.call(null,seq10803);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__10804,seq10803__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10814 = arguments.length;
var i__5639__auto___10815 = (0);
while(true){
if((i__5639__auto___10815 < len__5638__auto___10814)){
args__5645__auto__.push((arguments[i__5639__auto___10815]));

var G__10816 = (i__5639__auto___10815 + (1));
i__5639__auto___10815 = G__10816;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10812){
var vec__10813 = p__10812;
var req = cljs.core.nth.call(null,vec__10813,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq10810){
var G__10811 = cljs.core.first.call(null,seq10810);
var seq10810__$1 = cljs.core.next.call(null,seq10810);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__10811,seq10810__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10821 = arguments.length;
var i__5639__auto___10822 = (0);
while(true){
if((i__5639__auto___10822 < len__5638__auto___10821)){
args__5645__auto__.push((arguments[i__5639__auto___10822]));

var G__10823 = (i__5639__auto___10822 + (1));
i__5639__auto___10822 = G__10823;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10819){
var vec__10820 = p__10819;
var req = cljs.core.nth.call(null,vec__10820,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq10817){
var G__10818 = cljs.core.first.call(null,seq10817);
var seq10817__$1 = cljs.core.next.call(null,seq10817);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__10818,seq10817__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10828 = arguments.length;
var i__5639__auto___10829 = (0);
while(true){
if((i__5639__auto___10829 < len__5638__auto___10828)){
args__5645__auto__.push((arguments[i__5639__auto___10829]));

var G__10830 = (i__5639__auto___10829 + (1));
i__5639__auto___10829 = G__10830;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10826){
var vec__10827 = p__10826;
var req = cljs.core.nth.call(null,vec__10827,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq10824){
var G__10825 = cljs.core.first.call(null,seq10824);
var seq10824__$1 = cljs.core.next.call(null,seq10824);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__10825,seq10824__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10835 = arguments.length;
var i__5639__auto___10836 = (0);
while(true){
if((i__5639__auto___10836 < len__5638__auto___10835)){
args__5645__auto__.push((arguments[i__5639__auto___10836]));

var G__10837 = (i__5639__auto___10836 + (1));
i__5639__auto___10836 = G__10837;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10833){
var vec__10834 = p__10833;
var req = cljs.core.nth.call(null,vec__10834,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq10831){
var G__10832 = cljs.core.first.call(null,seq10831);
var seq10831__$1 = cljs.core.next.call(null,seq10831);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__10832,seq10831__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10842 = arguments.length;
var i__5639__auto___10843 = (0);
while(true){
if((i__5639__auto___10843 < len__5638__auto___10842)){
args__5645__auto__.push((arguments[i__5639__auto___10843]));

var G__10844 = (i__5639__auto___10843 + (1));
i__5639__auto___10843 = G__10844;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10840){
var vec__10841 = p__10840;
var req = cljs.core.nth.call(null,vec__10841,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq10838){
var G__10839 = cljs.core.first.call(null,seq10838);
var seq10838__$1 = cljs.core.next.call(null,seq10838);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__10839,seq10838__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10849 = arguments.length;
var i__5639__auto___10850 = (0);
while(true){
if((i__5639__auto___10850 < len__5638__auto___10849)){
args__5645__auto__.push((arguments[i__5639__auto___10850]));

var G__10851 = (i__5639__auto___10850 + (1));
i__5639__auto___10850 = G__10851;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10847){
var vec__10848 = p__10847;
var req = cljs.core.nth.call(null,vec__10848,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq10845){
var G__10846 = cljs.core.first.call(null,seq10845);
var seq10845__$1 = cljs.core.next.call(null,seq10845);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__10846,seq10845__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5645__auto__ = [];
var len__5638__auto___10856 = arguments.length;
var i__5639__auto___10857 = (0);
while(true){
if((i__5639__auto___10857 < len__5638__auto___10856)){
args__5645__auto__.push((arguments[i__5639__auto___10857]));

var G__10858 = (i__5639__auto___10857 + (1));
i__5639__auto___10857 = G__10858;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10854){
var vec__10855 = p__10854;
var req = cljs.core.nth.call(null,vec__10855,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq10852){
var G__10853 = cljs.core.first.call(null,seq10852);
var seq10852__$1 = cljs.core.next.call(null,seq10852);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__10853,seq10852__$1);
});

//# sourceMappingURL=client.js.map