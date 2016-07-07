// Compiled by ClojureScript 1.7.145 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__10573_SHARP_){
return (max === p1__10573_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args10574 = [];
var len__5638__auto___10580 = arguments.length;
var i__5639__auto___10581 = (0);
while(true){
if((i__5639__auto___10581 < len__5638__auto___10580)){
args10574.push((arguments[i__5639__auto___10581]));

var G__10582 = (i__5639__auto___10581 + (1));
i__5639__auto___10581 = G__10582;
continue;
} else {
}
break;
}

var G__10579 = args10574.length;
switch (G__10579) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args10574.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq10575){
var G__10576 = cljs.core.first.call(null,seq10575);
var seq10575__$1 = cljs.core.next.call(null,seq10575);
var G__10577 = cljs.core.first.call(null,seq10575__$1);
var seq10575__$2 = cljs.core.next.call(null,seq10575__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__10576,G__10577,seq10575__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args10585 = [];
var len__5638__auto___10591 = arguments.length;
var i__5639__auto___10592 = (0);
while(true){
if((i__5639__auto___10592 < len__5638__auto___10591)){
args10585.push((arguments[i__5639__auto___10592]));

var G__10593 = (i__5639__auto___10592 + (1));
i__5639__auto___10592 = G__10593;
continue;
} else {
}
break;
}

var G__10590 = args10585.length;
switch (G__10590) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args10585.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__10595 = s2;
var G__10596 = s1;
s1 = G__10595;
s2 = G__10596;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__10584_SHARP_){
return (- cljs.core.count.call(null,p1__10584_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq10586){
var G__10587 = cljs.core.first.call(null,seq10586);
var seq10586__$1 = cljs.core.next.call(null,seq10586);
var G__10588 = cljs.core.first.call(null,seq10586__$1);
var seq10586__$2 = cljs.core.next.call(null,seq10586__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__10587,G__10588,seq10586__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args10597 = [];
var len__5638__auto___10603 = arguments.length;
var i__5639__auto___10604 = (0);
while(true){
if((i__5639__auto___10604 < len__5638__auto___10603)){
args10597.push((arguments[i__5639__auto___10604]));

var G__10605 = (i__5639__auto___10604 + (1));
i__5639__auto___10604 = G__10605;
continue;
} else {
}
break;
}

var G__10602 = args10597.length;
switch (G__10602) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args10597.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq10598){
var G__10599 = cljs.core.first.call(null,seq10598);
var seq10598__$1 = cljs.core.next.call(null,seq10598);
var G__10600 = cljs.core.first.call(null,seq10598__$1);
var seq10598__$2 = cljs.core.next.call(null,seq10598__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__10599,G__10600,seq10598__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__10607_SHARP_){
return cljs.core.select_keys.call(null,p1__10607_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__10610){
var vec__10611 = p__10610;
var old = cljs.core.nth.call(null,vec__10611,(0),null);
var new$ = cljs.core.nth.call(null,vec__10611,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__10612_SHARP_){
return clojure.set.rename_keys.call(null,p1__10612_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__10615){
var vec__10616 = p__10615;
var k = cljs.core.nth.call(null,vec__10616,(0),null);
var v = cljs.core.nth.call(null,vec__10616,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args10621 = [];
var len__5638__auto___10626 = arguments.length;
var i__5639__auto___10627 = (0);
while(true){
if((i__5639__auto___10627 < len__5638__auto___10626)){
args10621.push((arguments[i__5639__auto___10627]));

var G__10628 = (i__5639__auto___10627 + (1));
i__5639__auto___10627 = G__10628;
continue;
} else {
}
break;
}

var G__10623 = args10621.length;
switch (G__10623) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10621.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__10624 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__10624,(0),null);
var s = cljs.core.nth.call(null,vec__10624,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__10624,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__10624,r,s,idx){
return (function (p1__10617_SHARP_,p2__10618_SHARP_){
return cljs.core.conj.call(null,p1__10617_SHARP_,cljs.core.merge.call(null,p2__10618_SHARP_,x));
});})(found,ks,vec__10624,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__10624,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__10625 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__10625,(0),null);
var s = cljs.core.nth.call(null,vec__10625,(1),null);
var k = cljs.core.nth.call(null,vec__10625,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__10625,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__10625,r,s,k,idx){
return (function (p1__10619_SHARP_,p2__10620_SHARP_){
return cljs.core.conj.call(null,p1__10619_SHARP_,cljs.core.merge.call(null,p2__10620_SHARP_,x));
});})(found,vec__10625,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__10625,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__10630_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__10630_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__10631_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__10631_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map