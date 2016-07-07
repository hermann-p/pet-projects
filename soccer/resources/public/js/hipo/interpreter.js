// Compiled by ClojureScript 1.7.145 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__10331){
var map__10334 = p__10331;
var map__10334__$1 = ((((!((map__10334 == null)))?((((map__10334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10334):map__10334);
var m = map__10334__$1;
var interceptors = cljs.core.get.call(null,map__10334__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__5698__auto__ = ((function (en,temp__4655__auto__,map__10334,map__10334__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___10336__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___10336__$1)){
var l_10337 = temp__4655__auto___10336__$1;
el.removeEventListener(en,l_10337);
} else {
}

var temp__4657__auto__ = (function (){var or__4580__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__10334,map__10334__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__5698__auto__ = ((function (temp__4655__auto__,map__10334,map__10334__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__10334,map__10334__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.create_child;
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4655__auto___10338 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___10338)){
var h_10339 = temp__4655__auto___10338;
el.appendChild(hipo.interpreter.create_child.call(null,h_10339,m));
} else {
}

var G__10340 = cljs.core.rest.call(null,v__$1);
v__$1 = G__10340;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__10347_10353 = cljs.core.seq.call(null,attrs);
var chunk__10348_10354 = null;
var count__10349_10355 = (0);
var i__10350_10356 = (0);
while(true){
if((i__10350_10356 < count__10349_10355)){
var vec__10351_10357 = cljs.core._nth.call(null,chunk__10348_10354,i__10350_10356);
var sok_10358 = cljs.core.nth.call(null,vec__10351_10357,(0),null);
var v_10359 = cljs.core.nth.call(null,vec__10351_10357,(1),null);
if(cljs.core.truth_(v_10359)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_10358,null,v_10359,m);
} else {
}

var G__10360 = seq__10347_10353;
var G__10361 = chunk__10348_10354;
var G__10362 = count__10349_10355;
var G__10363 = (i__10350_10356 + (1));
seq__10347_10353 = G__10360;
chunk__10348_10354 = G__10361;
count__10349_10355 = G__10362;
i__10350_10356 = G__10363;
continue;
} else {
var temp__4657__auto___10364 = cljs.core.seq.call(null,seq__10347_10353);
if(temp__4657__auto___10364){
var seq__10347_10365__$1 = temp__4657__auto___10364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10347_10365__$1)){
var c__5383__auto___10366 = cljs.core.chunk_first.call(null,seq__10347_10365__$1);
var G__10367 = cljs.core.chunk_rest.call(null,seq__10347_10365__$1);
var G__10368 = c__5383__auto___10366;
var G__10369 = cljs.core.count.call(null,c__5383__auto___10366);
var G__10370 = (0);
seq__10347_10353 = G__10367;
chunk__10348_10354 = G__10368;
count__10349_10355 = G__10369;
i__10350_10356 = G__10370;
continue;
} else {
var vec__10352_10371 = cljs.core.first.call(null,seq__10347_10365__$1);
var sok_10372 = cljs.core.nth.call(null,vec__10352_10371,(0),null);
var v_10373 = cljs.core.nth.call(null,vec__10352_10371,(1),null);
if(cljs.core.truth_(v_10373)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_10372,null,v_10373,m);
} else {
}

var G__10374 = cljs.core.next.call(null,seq__10347_10365__$1);
var G__10375 = null;
var G__10376 = (0);
var G__10377 = (0);
seq__10347_10353 = G__10374;
chunk__10348_10354 = G__10375;
count__10349_10355 = G__10376;
i__10350_10356 = G__10377;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"h","h",-1544777029,null))))].join('')));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__4580__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__10390_10402 = cljs.core.seq.call(null,nm);
var chunk__10392_10403 = null;
var count__10393_10404 = (0);
var i__10394_10405 = (0);
while(true){
if((i__10394_10405 < count__10393_10404)){
var vec__10396_10406 = cljs.core._nth.call(null,chunk__10392_10403,i__10394_10405);
var sok_10407 = cljs.core.nth.call(null,vec__10396_10406,(0),null);
var nv_10408 = cljs.core.nth.call(null,vec__10396_10406,(1),null);
var ov_10409 = cljs.core.get.call(null,om,sok_10407);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_10407,ov_10409,nv_10408,m);

var G__10410 = seq__10390_10402;
var G__10411 = chunk__10392_10403;
var G__10412 = count__10393_10404;
var G__10413 = (i__10394_10405 + (1));
seq__10390_10402 = G__10410;
chunk__10392_10403 = G__10411;
count__10393_10404 = G__10412;
i__10394_10405 = G__10413;
continue;
} else {
var temp__4657__auto___10414 = cljs.core.seq.call(null,seq__10390_10402);
if(temp__4657__auto___10414){
var seq__10390_10415__$1 = temp__4657__auto___10414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10390_10415__$1)){
var c__5383__auto___10416 = cljs.core.chunk_first.call(null,seq__10390_10415__$1);
var G__10417 = cljs.core.chunk_rest.call(null,seq__10390_10415__$1);
var G__10418 = c__5383__auto___10416;
var G__10419 = cljs.core.count.call(null,c__5383__auto___10416);
var G__10420 = (0);
seq__10390_10402 = G__10417;
chunk__10392_10403 = G__10418;
count__10393_10404 = G__10419;
i__10394_10405 = G__10420;
continue;
} else {
var vec__10397_10421 = cljs.core.first.call(null,seq__10390_10415__$1);
var sok_10422 = cljs.core.nth.call(null,vec__10397_10421,(0),null);
var nv_10423 = cljs.core.nth.call(null,vec__10397_10421,(1),null);
var ov_10424 = cljs.core.get.call(null,om,sok_10422);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_10422,ov_10424,nv_10423,m);

var G__10425 = cljs.core.next.call(null,seq__10390_10415__$1);
var G__10426 = null;
var G__10427 = (0);
var G__10428 = (0);
seq__10390_10402 = G__10425;
chunk__10392_10403 = G__10426;
count__10393_10404 = G__10427;
i__10394_10405 = G__10428;
continue;
}
} else {
}
}
break;
}

var seq__10398 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__10399 = null;
var count__10400 = (0);
var i__10401 = (0);
while(true){
if((i__10401 < count__10400)){
var sok = cljs.core._nth.call(null,chunk__10399,i__10401);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__10429 = seq__10398;
var G__10430 = chunk__10399;
var G__10431 = count__10400;
var G__10432 = (i__10401 + (1));
seq__10398 = G__10429;
chunk__10399 = G__10430;
count__10400 = G__10431;
i__10401 = G__10432;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10398);
if(temp__4657__auto__){
var seq__10398__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10398__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__10398__$1);
var G__10433 = cljs.core.chunk_rest.call(null,seq__10398__$1);
var G__10434 = c__5383__auto__;
var G__10435 = cljs.core.count.call(null,c__5383__auto__);
var G__10436 = (0);
seq__10398 = G__10433;
chunk__10399 = G__10434;
count__10400 = G__10435;
i__10401 = G__10436;
continue;
} else {
var sok = cljs.core.first.call(null,seq__10398__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__10437 = cljs.core.next.call(null,seq__10398__$1);
var G__10438 = null;
var G__10439 = (0);
var G__10440 = (0);
seq__10398 = G__10437;
chunk__10399 = G__10438;
count__10400 = G__10439;
i__10401 = G__10440;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.reconciliate_BANG_;
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5352__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__10445(s__10446){
return (new cljs.core.LazySeq(null,(function (){
var s__10446__$1 = s__10446;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10446__$1);
if(temp__4657__auto__){
var s__10446__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10446__$2)){
var c__5350__auto__ = cljs.core.chunk_first.call(null,s__10446__$2);
var size__5351__auto__ = cljs.core.count.call(null,c__5350__auto__);
var b__10448 = cljs.core.chunk_buffer.call(null,size__5351__auto__);
if((function (){var i__10447 = (0);
while(true){
if((i__10447 < size__5351__auto__)){
var ih = cljs.core._nth.call(null,c__5350__auto__,i__10447);
cljs.core.chunk_append.call(null,b__10448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__10449 = (i__10447 + (1));
i__10447 = G__10449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10448),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__10445.call(null,cljs.core.chunk_rest.call(null,s__10446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10448),null);
}
} else {
var ih = cljs.core.first.call(null,s__10446__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__10445.call(null,cljs.core.rest.call(null,s__10446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5352__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__5352__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__5352__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__10450){
var map__10463 = p__10450;
var map__10463__$1 = ((((!((map__10463 == null)))?((((map__10463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10463):map__10463);
var m = map__10463__$1;
var interceptors = cljs.core.get.call(null,map__10463__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__10465_10475 = cljs.core.seq.call(null,nm);
var chunk__10466_10476 = null;
var count__10467_10477 = (0);
var i__10468_10478 = (0);
while(true){
if((i__10468_10478 < count__10467_10477)){
var vec__10469_10479 = cljs.core._nth.call(null,chunk__10466_10476,i__10468_10478);
var i_10480 = cljs.core.nth.call(null,vec__10469_10479,(0),null);
var vec__10470_10481 = cljs.core.nth.call(null,vec__10469_10479,(1),null);
var ii_10482 = cljs.core.nth.call(null,vec__10470_10481,(0),null);
var h_10483 = cljs.core.nth.call(null,vec__10470_10481,(1),null);
var temp__4655__auto___10484 = cljs.core.get.call(null,om,i_10480);
if(cljs.core.truth_(temp__4655__auto___10484)){
var vec__10471_10485 = temp__4655__auto___10484;
var iii_10486 = cljs.core.nth.call(null,vec__10471_10485,(0),null);
var oh_10487 = cljs.core.nth.call(null,vec__10471_10485,(1),null);
var cel_10488 = cljs.core.nth.call(null,cs,iii_10486);
if((ii_10482 === iii_10486)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_10488,oh_10487,h_10483,m);
} else {
var b__5698__auto___10489 = ((function (seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,cel_10488,vec__10471_10485,iii_10486,oh_10487,temp__4655__auto___10484,vec__10469_10479,i_10480,vec__10470_10481,ii_10482,h_10483,om,nm,cs,map__10463,map__10463__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_10488);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_10487,h_10483,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_10482,ncel);
});})(seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,cel_10488,vec__10471_10485,iii_10486,oh_10487,temp__4655__auto___10484,vec__10469_10479,i_10480,vec__10470_10481,ii_10482,h_10483,om,nm,cs,map__10463,map__10463__$1,m,interceptors))
;
var v__5699__auto___10490 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10490)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10490))){
b__5698__auto___10489.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10489,v__5699__auto___10490,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_10483,new cljs.core.Keyword(null,"index","index",-1531685915),ii_10482], null));
}
}
} else {
var b__5698__auto___10491 = ((function (seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,temp__4655__auto___10484,vec__10469_10479,i_10480,vec__10470_10481,ii_10482,h_10483,om,nm,cs,map__10463,map__10463__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_10482,hipo.interpreter.create_child.call(null,h_10483,m));
});})(seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,temp__4655__auto___10484,vec__10469_10479,i_10480,vec__10470_10481,ii_10482,h_10483,om,nm,cs,map__10463,map__10463__$1,m,interceptors))
;
var v__5699__auto___10492 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10492)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10492))){
b__5698__auto___10491.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10491,v__5699__auto___10492,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_10483,new cljs.core.Keyword(null,"index","index",-1531685915),ii_10482], null));
}
}

var G__10493 = seq__10465_10475;
var G__10494 = chunk__10466_10476;
var G__10495 = count__10467_10477;
var G__10496 = (i__10468_10478 + (1));
seq__10465_10475 = G__10493;
chunk__10466_10476 = G__10494;
count__10467_10477 = G__10495;
i__10468_10478 = G__10496;
continue;
} else {
var temp__4657__auto___10497 = cljs.core.seq.call(null,seq__10465_10475);
if(temp__4657__auto___10497){
var seq__10465_10498__$1 = temp__4657__auto___10497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10465_10498__$1)){
var c__5383__auto___10499 = cljs.core.chunk_first.call(null,seq__10465_10498__$1);
var G__10500 = cljs.core.chunk_rest.call(null,seq__10465_10498__$1);
var G__10501 = c__5383__auto___10499;
var G__10502 = cljs.core.count.call(null,c__5383__auto___10499);
var G__10503 = (0);
seq__10465_10475 = G__10500;
chunk__10466_10476 = G__10501;
count__10467_10477 = G__10502;
i__10468_10478 = G__10503;
continue;
} else {
var vec__10472_10504 = cljs.core.first.call(null,seq__10465_10498__$1);
var i_10505 = cljs.core.nth.call(null,vec__10472_10504,(0),null);
var vec__10473_10506 = cljs.core.nth.call(null,vec__10472_10504,(1),null);
var ii_10507 = cljs.core.nth.call(null,vec__10473_10506,(0),null);
var h_10508 = cljs.core.nth.call(null,vec__10473_10506,(1),null);
var temp__4655__auto___10509 = cljs.core.get.call(null,om,i_10505);
if(cljs.core.truth_(temp__4655__auto___10509)){
var vec__10474_10510 = temp__4655__auto___10509;
var iii_10511 = cljs.core.nth.call(null,vec__10474_10510,(0),null);
var oh_10512 = cljs.core.nth.call(null,vec__10474_10510,(1),null);
var cel_10513 = cljs.core.nth.call(null,cs,iii_10511);
if((ii_10507 === iii_10511)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_10513,oh_10512,h_10508,m);
} else {
var b__5698__auto___10514 = ((function (seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,cel_10513,vec__10474_10510,iii_10511,oh_10512,temp__4655__auto___10509,vec__10472_10504,i_10505,vec__10473_10506,ii_10507,h_10508,seq__10465_10498__$1,temp__4657__auto___10497,om,nm,cs,map__10463,map__10463__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_10513);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_10512,h_10508,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_10507,ncel);
});})(seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,cel_10513,vec__10474_10510,iii_10511,oh_10512,temp__4655__auto___10509,vec__10472_10504,i_10505,vec__10473_10506,ii_10507,h_10508,seq__10465_10498__$1,temp__4657__auto___10497,om,nm,cs,map__10463,map__10463__$1,m,interceptors))
;
var v__5699__auto___10515 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10515)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10515))){
b__5698__auto___10514.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10514,v__5699__auto___10515,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_10508,new cljs.core.Keyword(null,"index","index",-1531685915),ii_10507], null));
}
}
} else {
var b__5698__auto___10516 = ((function (seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,temp__4655__auto___10509,vec__10472_10504,i_10505,vec__10473_10506,ii_10507,h_10508,seq__10465_10498__$1,temp__4657__auto___10497,om,nm,cs,map__10463,map__10463__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_10507,hipo.interpreter.create_child.call(null,h_10508,m));
});})(seq__10465_10475,chunk__10466_10476,count__10467_10477,i__10468_10478,temp__4655__auto___10509,vec__10472_10504,i_10505,vec__10473_10506,ii_10507,h_10508,seq__10465_10498__$1,temp__4657__auto___10497,om,nm,cs,map__10463,map__10463__$1,m,interceptors))
;
var v__5699__auto___10517 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10517)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10517))){
b__5698__auto___10516.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10516,v__5699__auto___10517,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_10508,new cljs.core.Keyword(null,"index","index",-1531685915),ii_10507], null));
}
}

var G__10518 = cljs.core.next.call(null,seq__10465_10498__$1);
var G__10519 = null;
var G__10520 = (0);
var G__10521 = (0);
seq__10465_10475 = G__10518;
chunk__10466_10476 = G__10519;
count__10467_10477 = G__10520;
i__10468_10478 = G__10521;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__5698__auto__ = ((function (d,om,nm,cs,map__10463,map__10463__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__10463,map__10463__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__10522){
var map__10525 = p__10522;
var map__10525__$1 = ((((!((map__10525 == null)))?((((map__10525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10525):map__10525);
var m = map__10525__$1;
var interceptors = cljs.core.get.call(null,map__10525__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__5698__auto___10527 = ((function (oc,nc,d,map__10525,map__10525__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__10525,map__10525__$1,m,interceptors))
;
var v__5699__auto___10528 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10528)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10528))){
b__5698__auto___10527.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10527,v__5699__auto___10528,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__5483__auto___10529 = (function (){var x__4918__auto__ = oc;
var y__4919__auto__ = nc;
return ((x__4918__auto__ < y__4919__auto__) ? x__4918__auto__ : y__4919__auto__);
})();
var i_10530 = (0);
while(true){
if((i_10530 < n__5483__auto___10529)){
var ov_10531 = cljs.core.nth.call(null,och,i_10530);
var nv_10532 = cljs.core.nth.call(null,nch,i_10530);
if(!(((ov_10531 == null)) && ((nv_10532 == null)))){
if((ov_10531 == null)){
var b__5698__auto___10533 = ((function (i_10530,ov_10531,nv_10532,n__5483__auto___10529,oc,nc,d,map__10525,map__10525__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_10530,hipo.interpreter.create_child.call(null,nv_10532,m));
});})(i_10530,ov_10531,nv_10532,n__5483__auto___10529,oc,nc,d,map__10525,map__10525__$1,m,interceptors))
;
var v__5699__auto___10534 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10534)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10534))){
b__5698__auto___10533.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10533,v__5699__auto___10534,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_10532,new cljs.core.Keyword(null,"index","index",-1531685915),i_10530], null));
}
} else {
if((nv_10532 == null)){
var b__5698__auto___10535 = ((function (i_10530,ov_10531,nv_10532,n__5483__auto___10529,oc,nc,d,map__10525,map__10525__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_10530);
});})(i_10530,ov_10531,nv_10532,n__5483__auto___10529,oc,nc,d,map__10525,map__10525__$1,m,interceptors))
;
var v__5699__auto___10536 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10536)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10536))){
b__5698__auto___10535.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10535,v__5699__auto___10536,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_10530], null));
}
} else {
var temp__4655__auto___10537 = hipo.dom.child.call(null,el,i_10530);
if(cljs.core.truth_(temp__4655__auto___10537)){
var cel_10538 = temp__4655__auto___10537;
hipo.interpreter.reconciliate_BANG_.call(null,cel_10538,ov_10531,nv_10532,m);
} else {
}

}
}
} else {
}

var G__10539 = (i_10530 + (1));
i_10530 = G__10539;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__5698__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__10525,map__10525__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__10525,map__10525__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__5698__auto___10540 = ((function (f,cs,oc,nc,d,map__10525,map__10525__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__10525,map__10525__$1,m,interceptors))
;
var v__5699__auto___10541 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10541)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10541))){
b__5698__auto___10540.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10540,v__5699__auto___10541,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__10542){
var map__10545 = p__10542;
var map__10545__$1 = ((((!((map__10545 == null)))?((((map__10545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10545):map__10545);
var m = map__10545__$1;
var interceptors = cljs.core.get.call(null,map__10545__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__5698__auto__ = ((function (map__10545,map__10545__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__10545,map__10545__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__10547){
var map__10550 = p__10547;
var map__10550__$1 = ((((!((map__10550 == null)))?((((map__10550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10550):map__10550);
var m = map__10550__$1;
var interceptors = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null))))].join('')));
}

if(cljs.core.truth_((function (){var or__4580__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__5698__auto__ = ((function (nel,map__10550,map__10550__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__10550,map__10550__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__5698__auto___10552 = ((function (om,nm,och,nch,map__10550,map__10550__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__10550,map__10550__$1,m,interceptors))
;
var v__5699__auto___10553 = interceptors;
if((cljs.core.not.call(null,v__5699__auto___10553)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto___10553))){
b__5698__auto___10552.call(null);
} else {
hipo.interceptor.call.call(null,b__5698__auto___10552,v__5699__auto___10553,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__10554){
var map__10557 = p__10554;
var map__10557__$1 = ((((!((map__10557 == null)))?((((map__10557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10557):map__10557);
var m = map__10557__$1;
var interceptors = cljs.core.get.call(null,map__10557__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__4580__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__4580__auto__){
return or__4580__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

var b__5698__auto__ = ((function (map__10557,map__10557__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__5698__auto__ = ((function (map__10557,map__10557__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__10557,map__10557__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__10557,map__10557__$1,m,interceptors))
;
var v__5699__auto__ = interceptors;
if((cljs.core.not.call(null,v__5699__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5699__auto__))){
return b__5698__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5698__auto__,v__5699__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map