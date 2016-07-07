// Compiled by ClojureScript 1.7.145 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4580__auto__ = elem.textContent;
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args5986 = [];
var len__5638__auto___5989 = arguments.length;
var i__5639__auto___5990 = (0);
while(true){
if((i__5639__auto___5990 < len__5638__auto___5989)){
args5986.push((arguments[i__5639__auto___5990]));

var G__5991 = (i__5639__auto___5990 + (1));
i__5639__auto___5990 = G__5991;
continue;
} else {
}
break;
}

var G__5988 = args5986.length;
switch (G__5988) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5986.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args5993 = [];
var len__5638__auto___5996 = arguments.length;
var i__5639__auto___5997 = (0);
while(true){
if((i__5639__auto___5997 < len__5638__auto___5996)){
args5993.push((arguments[i__5639__auto___5997]));

var G__5998 = (i__5639__auto___5997 + (1));
i__5639__auto___5997 = G__5998;
continue;
} else {
}
break;
}

var G__5995 = args5993.length;
switch (G__5995) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5993.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args6001 = [];
var len__5638__auto___6004 = arguments.length;
var i__5639__auto___6005 = (0);
while(true){
if((i__5639__auto___6005 < len__5638__auto___6004)){
args6001.push((arguments[i__5639__auto___6005]));

var G__6006 = (i__5639__auto___6005 + (1));
i__5639__auto___6005 = G__6006;
continue;
} else {
}
break;
}

var G__6003 = args6001.length;
switch (G__6003) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6001.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6000_SHARP_){
return !((p1__6000_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6016 = arguments.length;
var i__5639__auto___6017 = (0);
while(true){
if((i__5639__auto___6017 < len__5638__auto___6016)){
args__5645__auto__.push((arguments[i__5639__auto___6017]));

var G__6018 = (i__5639__auto___6017 + (1));
i__5639__auto___6017 = G__6018;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__6010_6019 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6011_6020 = null;
var count__6012_6021 = (0);
var i__6013_6022 = (0);
while(true){
if((i__6013_6022 < count__6012_6021)){
var vec__6014_6023 = cljs.core._nth.call(null,chunk__6011_6020,i__6013_6022);
var k_6024 = cljs.core.nth.call(null,vec__6014_6023,(0),null);
var v_6025 = cljs.core.nth.call(null,vec__6014_6023,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6024),v_6025);

var G__6026 = seq__6010_6019;
var G__6027 = chunk__6011_6020;
var G__6028 = count__6012_6021;
var G__6029 = (i__6013_6022 + (1));
seq__6010_6019 = G__6026;
chunk__6011_6020 = G__6027;
count__6012_6021 = G__6028;
i__6013_6022 = G__6029;
continue;
} else {
var temp__4657__auto___6030 = cljs.core.seq.call(null,seq__6010_6019);
if(temp__4657__auto___6030){
var seq__6010_6031__$1 = temp__4657__auto___6030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6010_6031__$1)){
var c__5383__auto___6032 = cljs.core.chunk_first.call(null,seq__6010_6031__$1);
var G__6033 = cljs.core.chunk_rest.call(null,seq__6010_6031__$1);
var G__6034 = c__5383__auto___6032;
var G__6035 = cljs.core.count.call(null,c__5383__auto___6032);
var G__6036 = (0);
seq__6010_6019 = G__6033;
chunk__6011_6020 = G__6034;
count__6012_6021 = G__6035;
i__6013_6022 = G__6036;
continue;
} else {
var vec__6015_6037 = cljs.core.first.call(null,seq__6010_6031__$1);
var k_6038 = cljs.core.nth.call(null,vec__6015_6037,(0),null);
var v_6039 = cljs.core.nth.call(null,vec__6015_6037,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6038),v_6039);

var G__6040 = cljs.core.next.call(null,seq__6010_6031__$1);
var G__6041 = null;
var G__6042 = (0);
var G__6043 = (0);
seq__6010_6019 = G__6040;
chunk__6011_6020 = G__6041;
count__6012_6021 = G__6042;
i__6013_6022 = G__6043;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6008){
var G__6009 = cljs.core.first.call(null,seq6008);
var seq6008__$1 = cljs.core.next.call(null,seq6008);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6009,seq6008__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6050 = arguments.length;
var i__5639__auto___6051 = (0);
while(true){
if((i__5639__auto___6051 < len__5638__auto___6050)){
args__5645__auto__.push((arguments[i__5639__auto___6051]));

var G__6052 = (i__5639__auto___6051 + (1));
i__5639__auto___6051 = G__6052;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__6046_6053 = cljs.core.seq.call(null,keywords);
var chunk__6047_6054 = null;
var count__6048_6055 = (0);
var i__6049_6056 = (0);
while(true){
if((i__6049_6056 < count__6048_6055)){
var kw_6057 = cljs.core._nth.call(null,chunk__6047_6054,i__6049_6056);
style.removeProperty(dommy.utils.as_str.call(null,kw_6057));

var G__6058 = seq__6046_6053;
var G__6059 = chunk__6047_6054;
var G__6060 = count__6048_6055;
var G__6061 = (i__6049_6056 + (1));
seq__6046_6053 = G__6058;
chunk__6047_6054 = G__6059;
count__6048_6055 = G__6060;
i__6049_6056 = G__6061;
continue;
} else {
var temp__4657__auto___6062 = cljs.core.seq.call(null,seq__6046_6053);
if(temp__4657__auto___6062){
var seq__6046_6063__$1 = temp__4657__auto___6062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6046_6063__$1)){
var c__5383__auto___6064 = cljs.core.chunk_first.call(null,seq__6046_6063__$1);
var G__6065 = cljs.core.chunk_rest.call(null,seq__6046_6063__$1);
var G__6066 = c__5383__auto___6064;
var G__6067 = cljs.core.count.call(null,c__5383__auto___6064);
var G__6068 = (0);
seq__6046_6053 = G__6065;
chunk__6047_6054 = G__6066;
count__6048_6055 = G__6067;
i__6049_6056 = G__6068;
continue;
} else {
var kw_6069 = cljs.core.first.call(null,seq__6046_6063__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_6069));

var G__6070 = cljs.core.next.call(null,seq__6046_6063__$1);
var G__6071 = null;
var G__6072 = (0);
var G__6073 = (0);
seq__6046_6053 = G__6070;
chunk__6047_6054 = G__6071;
count__6048_6055 = G__6072;
i__6049_6056 = G__6073;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq6044){
var G__6045 = cljs.core.first.call(null,seq6044);
var seq6044__$1 = cljs.core.next.call(null,seq6044);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6045,seq6044__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6082 = arguments.length;
var i__5639__auto___6083 = (0);
while(true){
if((i__5639__auto___6083 < len__5638__auto___6082)){
args__5645__auto__.push((arguments[i__5639__auto___6083]));

var G__6084 = (i__5639__auto___6083 + (1));
i__5639__auto___6083 = G__6084;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6076_6085 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6077_6086 = null;
var count__6078_6087 = (0);
var i__6079_6088 = (0);
while(true){
if((i__6079_6088 < count__6078_6087)){
var vec__6080_6089 = cljs.core._nth.call(null,chunk__6077_6086,i__6079_6088);
var k_6090 = cljs.core.nth.call(null,vec__6080_6089,(0),null);
var v_6091 = cljs.core.nth.call(null,vec__6080_6089,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6090,[cljs.core.str(v_6091),cljs.core.str("px")].join(''));

var G__6092 = seq__6076_6085;
var G__6093 = chunk__6077_6086;
var G__6094 = count__6078_6087;
var G__6095 = (i__6079_6088 + (1));
seq__6076_6085 = G__6092;
chunk__6077_6086 = G__6093;
count__6078_6087 = G__6094;
i__6079_6088 = G__6095;
continue;
} else {
var temp__4657__auto___6096 = cljs.core.seq.call(null,seq__6076_6085);
if(temp__4657__auto___6096){
var seq__6076_6097__$1 = temp__4657__auto___6096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6076_6097__$1)){
var c__5383__auto___6098 = cljs.core.chunk_first.call(null,seq__6076_6097__$1);
var G__6099 = cljs.core.chunk_rest.call(null,seq__6076_6097__$1);
var G__6100 = c__5383__auto___6098;
var G__6101 = cljs.core.count.call(null,c__5383__auto___6098);
var G__6102 = (0);
seq__6076_6085 = G__6099;
chunk__6077_6086 = G__6100;
count__6078_6087 = G__6101;
i__6079_6088 = G__6102;
continue;
} else {
var vec__6081_6103 = cljs.core.first.call(null,seq__6076_6097__$1);
var k_6104 = cljs.core.nth.call(null,vec__6081_6103,(0),null);
var v_6105 = cljs.core.nth.call(null,vec__6081_6103,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6104,[cljs.core.str(v_6105),cljs.core.str("px")].join(''));

var G__6106 = cljs.core.next.call(null,seq__6076_6097__$1);
var G__6107 = null;
var G__6108 = (0);
var G__6109 = (0);
seq__6076_6085 = G__6106;
chunk__6077_6086 = G__6107;
count__6078_6087 = G__6108;
i__6079_6088 = G__6109;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq6074){
var G__6075 = cljs.core.first.call(null,seq6074);
var seq6074__$1 = cljs.core.next.call(null,seq6074);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6075,seq6074__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args6110 = [];
var len__5638__auto___6125 = arguments.length;
var i__5639__auto___6126 = (0);
while(true){
if((i__5639__auto___6126 < len__5638__auto___6125)){
args6110.push((arguments[i__5639__auto___6126]));

var G__6127 = (i__5639__auto___6126 + (1));
i__5639__auto___6126 = G__6127;
continue;
} else {
}
break;
}

var G__6116 = args6110.length;
switch (G__6116) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args6110.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5657__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__6117 = elem;
(G__6117[k__$1] = v);

return G__6117;
} else {
var G__6118 = elem;
G__6118.setAttribute(k__$1,v);

return G__6118;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6119_6129 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__6120_6130 = null;
var count__6121_6131 = (0);
var i__6122_6132 = (0);
while(true){
if((i__6122_6132 < count__6121_6131)){
var vec__6123_6133 = cljs.core._nth.call(null,chunk__6120_6130,i__6122_6132);
var k_6134__$1 = cljs.core.nth.call(null,vec__6123_6133,(0),null);
var v_6135__$1 = cljs.core.nth.call(null,vec__6123_6133,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_6134__$1,v_6135__$1);

var G__6136 = seq__6119_6129;
var G__6137 = chunk__6120_6130;
var G__6138 = count__6121_6131;
var G__6139 = (i__6122_6132 + (1));
seq__6119_6129 = G__6136;
chunk__6120_6130 = G__6137;
count__6121_6131 = G__6138;
i__6122_6132 = G__6139;
continue;
} else {
var temp__4657__auto___6140 = cljs.core.seq.call(null,seq__6119_6129);
if(temp__4657__auto___6140){
var seq__6119_6141__$1 = temp__4657__auto___6140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6119_6141__$1)){
var c__5383__auto___6142 = cljs.core.chunk_first.call(null,seq__6119_6141__$1);
var G__6143 = cljs.core.chunk_rest.call(null,seq__6119_6141__$1);
var G__6144 = c__5383__auto___6142;
var G__6145 = cljs.core.count.call(null,c__5383__auto___6142);
var G__6146 = (0);
seq__6119_6129 = G__6143;
chunk__6120_6130 = G__6144;
count__6121_6131 = G__6145;
i__6122_6132 = G__6146;
continue;
} else {
var vec__6124_6147 = cljs.core.first.call(null,seq__6119_6141__$1);
var k_6148__$1 = cljs.core.nth.call(null,vec__6124_6147,(0),null);
var v_6149__$1 = cljs.core.nth.call(null,vec__6124_6147,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_6148__$1,v_6149__$1);

var G__6150 = cljs.core.next.call(null,seq__6119_6141__$1);
var G__6151 = null;
var G__6152 = (0);
var G__6153 = (0);
seq__6119_6129 = G__6150;
chunk__6120_6130 = G__6151;
count__6121_6131 = G__6152;
i__6122_6132 = G__6153;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq6111){
var G__6112 = cljs.core.first.call(null,seq6111);
var seq6111__$1 = cljs.core.next.call(null,seq6111);
var G__6113 = cljs.core.first.call(null,seq6111__$1);
var seq6111__$2 = cljs.core.next.call(null,seq6111__$1);
var G__6114 = cljs.core.first.call(null,seq6111__$2);
var seq6111__$3 = cljs.core.next.call(null,seq6111__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6112,G__6113,G__6114,seq6111__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args6154 = [];
var len__5638__auto___6164 = arguments.length;
var i__5639__auto___6165 = (0);
while(true){
if((i__5639__auto___6165 < len__5638__auto___6164)){
args6154.push((arguments[i__5639__auto___6165]));

var G__6166 = (i__5639__auto___6165 + (1));
i__5639__auto___6165 = G__6166;
continue;
} else {
}
break;
}

var G__6159 = args6154.length;
switch (G__6159) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args6154.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_6168__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6168__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_6168__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__6160_6169 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__6161_6170 = null;
var count__6162_6171 = (0);
var i__6163_6172 = (0);
while(true){
if((i__6163_6172 < count__6162_6171)){
var k_6173__$1 = cljs.core._nth.call(null,chunk__6161_6170,i__6163_6172);
dommy.core.remove_attr_BANG_.call(null,elem,k_6173__$1);

var G__6174 = seq__6160_6169;
var G__6175 = chunk__6161_6170;
var G__6176 = count__6162_6171;
var G__6177 = (i__6163_6172 + (1));
seq__6160_6169 = G__6174;
chunk__6161_6170 = G__6175;
count__6162_6171 = G__6176;
i__6163_6172 = G__6177;
continue;
} else {
var temp__4657__auto___6178 = cljs.core.seq.call(null,seq__6160_6169);
if(temp__4657__auto___6178){
var seq__6160_6179__$1 = temp__4657__auto___6178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6160_6179__$1)){
var c__5383__auto___6180 = cljs.core.chunk_first.call(null,seq__6160_6179__$1);
var G__6181 = cljs.core.chunk_rest.call(null,seq__6160_6179__$1);
var G__6182 = c__5383__auto___6180;
var G__6183 = cljs.core.count.call(null,c__5383__auto___6180);
var G__6184 = (0);
seq__6160_6169 = G__6181;
chunk__6161_6170 = G__6182;
count__6162_6171 = G__6183;
i__6163_6172 = G__6184;
continue;
} else {
var k_6185__$1 = cljs.core.first.call(null,seq__6160_6179__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_6185__$1);

var G__6186 = cljs.core.next.call(null,seq__6160_6179__$1);
var G__6187 = null;
var G__6188 = (0);
var G__6189 = (0);
seq__6160_6169 = G__6186;
chunk__6161_6170 = G__6187;
count__6162_6171 = G__6188;
i__6163_6172 = G__6189;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq6155){
var G__6156 = cljs.core.first.call(null,seq6155);
var seq6155__$1 = cljs.core.next.call(null,seq6155);
var G__6157 = cljs.core.first.call(null,seq6155__$1);
var seq6155__$2 = cljs.core.next.call(null,seq6155__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6156,G__6157,seq6155__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args6190 = [];
var len__5638__auto___6193 = arguments.length;
var i__5639__auto___6194 = (0);
while(true){
if((i__5639__auto___6194 < len__5638__auto___6193)){
args6190.push((arguments[i__5639__auto___6194]));

var G__6195 = (i__5639__auto___6194 + (1));
i__5639__auto___6194 = G__6195;
continue;
} else {
}
break;
}

var G__6192 = args6190.length;
switch (G__6192) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6190.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args6197 = [];
var len__5638__auto___6215 = arguments.length;
var i__5639__auto___6216 = (0);
while(true){
if((i__5639__auto___6216 < len__5638__auto___6215)){
args6197.push((arguments[i__5639__auto___6216]));

var G__6217 = (i__5639__auto___6216 + (1));
i__5639__auto___6216 = G__6217;
continue;
} else {
}
break;
}

var G__6202 = args6197.length;
switch (G__6202) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args6197.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___6219 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___6219)){
var class_list_6220 = temp__4655__auto___6219;
var seq__6203_6221 = cljs.core.seq.call(null,classes__$1);
var chunk__6204_6222 = null;
var count__6205_6223 = (0);
var i__6206_6224 = (0);
while(true){
if((i__6206_6224 < count__6205_6223)){
var c_6225 = cljs.core._nth.call(null,chunk__6204_6222,i__6206_6224);
class_list_6220.add(c_6225);

var G__6226 = seq__6203_6221;
var G__6227 = chunk__6204_6222;
var G__6228 = count__6205_6223;
var G__6229 = (i__6206_6224 + (1));
seq__6203_6221 = G__6226;
chunk__6204_6222 = G__6227;
count__6205_6223 = G__6228;
i__6206_6224 = G__6229;
continue;
} else {
var temp__4657__auto___6230 = cljs.core.seq.call(null,seq__6203_6221);
if(temp__4657__auto___6230){
var seq__6203_6231__$1 = temp__4657__auto___6230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6203_6231__$1)){
var c__5383__auto___6232 = cljs.core.chunk_first.call(null,seq__6203_6231__$1);
var G__6233 = cljs.core.chunk_rest.call(null,seq__6203_6231__$1);
var G__6234 = c__5383__auto___6232;
var G__6235 = cljs.core.count.call(null,c__5383__auto___6232);
var G__6236 = (0);
seq__6203_6221 = G__6233;
chunk__6204_6222 = G__6234;
count__6205_6223 = G__6235;
i__6206_6224 = G__6236;
continue;
} else {
var c_6237 = cljs.core.first.call(null,seq__6203_6231__$1);
class_list_6220.add(c_6237);

var G__6238 = cljs.core.next.call(null,seq__6203_6231__$1);
var G__6239 = null;
var G__6240 = (0);
var G__6241 = (0);
seq__6203_6221 = G__6238;
chunk__6204_6222 = G__6239;
count__6205_6223 = G__6240;
i__6206_6224 = G__6241;
continue;
}
} else {
}
}
break;
}
} else {
var seq__6207_6242 = cljs.core.seq.call(null,classes__$1);
var chunk__6208_6243 = null;
var count__6209_6244 = (0);
var i__6210_6245 = (0);
while(true){
if((i__6210_6245 < count__6209_6244)){
var c_6246 = cljs.core._nth.call(null,chunk__6208_6243,i__6210_6245);
var class_name_6247 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6247,c_6246))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_6247 === ""))?c_6246:[cljs.core.str(class_name_6247),cljs.core.str(" "),cljs.core.str(c_6246)].join('')));
}

var G__6248 = seq__6207_6242;
var G__6249 = chunk__6208_6243;
var G__6250 = count__6209_6244;
var G__6251 = (i__6210_6245 + (1));
seq__6207_6242 = G__6248;
chunk__6208_6243 = G__6249;
count__6209_6244 = G__6250;
i__6210_6245 = G__6251;
continue;
} else {
var temp__4657__auto___6252 = cljs.core.seq.call(null,seq__6207_6242);
if(temp__4657__auto___6252){
var seq__6207_6253__$1 = temp__4657__auto___6252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6207_6253__$1)){
var c__5383__auto___6254 = cljs.core.chunk_first.call(null,seq__6207_6253__$1);
var G__6255 = cljs.core.chunk_rest.call(null,seq__6207_6253__$1);
var G__6256 = c__5383__auto___6254;
var G__6257 = cljs.core.count.call(null,c__5383__auto___6254);
var G__6258 = (0);
seq__6207_6242 = G__6255;
chunk__6208_6243 = G__6256;
count__6209_6244 = G__6257;
i__6210_6245 = G__6258;
continue;
} else {
var c_6259 = cljs.core.first.call(null,seq__6207_6253__$1);
var class_name_6260 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6260,c_6259))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_6260 === ""))?c_6259:[cljs.core.str(class_name_6260),cljs.core.str(" "),cljs.core.str(c_6259)].join('')));
}

var G__6261 = cljs.core.next.call(null,seq__6207_6253__$1);
var G__6262 = null;
var G__6263 = (0);
var G__6264 = (0);
seq__6207_6242 = G__6261;
chunk__6208_6243 = G__6262;
count__6209_6244 = G__6263;
i__6210_6245 = G__6264;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__6211_6265 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__6212_6266 = null;
var count__6213_6267 = (0);
var i__6214_6268 = (0);
while(true){
if((i__6214_6268 < count__6213_6267)){
var c_6269 = cljs.core._nth.call(null,chunk__6212_6266,i__6214_6268);
dommy.core.add_class_BANG_.call(null,elem,c_6269);

var G__6270 = seq__6211_6265;
var G__6271 = chunk__6212_6266;
var G__6272 = count__6213_6267;
var G__6273 = (i__6214_6268 + (1));
seq__6211_6265 = G__6270;
chunk__6212_6266 = G__6271;
count__6213_6267 = G__6272;
i__6214_6268 = G__6273;
continue;
} else {
var temp__4657__auto___6274 = cljs.core.seq.call(null,seq__6211_6265);
if(temp__4657__auto___6274){
var seq__6211_6275__$1 = temp__4657__auto___6274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6211_6275__$1)){
var c__5383__auto___6276 = cljs.core.chunk_first.call(null,seq__6211_6275__$1);
var G__6277 = cljs.core.chunk_rest.call(null,seq__6211_6275__$1);
var G__6278 = c__5383__auto___6276;
var G__6279 = cljs.core.count.call(null,c__5383__auto___6276);
var G__6280 = (0);
seq__6211_6265 = G__6277;
chunk__6212_6266 = G__6278;
count__6213_6267 = G__6279;
i__6214_6268 = G__6280;
continue;
} else {
var c_6281 = cljs.core.first.call(null,seq__6211_6275__$1);
dommy.core.add_class_BANG_.call(null,elem,c_6281);

var G__6282 = cljs.core.next.call(null,seq__6211_6275__$1);
var G__6283 = null;
var G__6284 = (0);
var G__6285 = (0);
seq__6211_6265 = G__6282;
chunk__6212_6266 = G__6283;
count__6213_6267 = G__6284;
i__6214_6268 = G__6285;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq6198){
var G__6199 = cljs.core.first.call(null,seq6198);
var seq6198__$1 = cljs.core.next.call(null,seq6198);
var G__6200 = cljs.core.first.call(null,seq6198__$1);
var seq6198__$2 = cljs.core.next.call(null,seq6198__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6199,G__6200,seq6198__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args6286 = [];
var len__5638__auto___6296 = arguments.length;
var i__5639__auto___6297 = (0);
while(true){
if((i__5639__auto___6297 < len__5638__auto___6296)){
args6286.push((arguments[i__5639__auto___6297]));

var G__6298 = (i__5639__auto___6297 + (1));
i__5639__auto___6297 = G__6298;
continue;
} else {
}
break;
}

var G__6291 = args6286.length;
switch (G__6291) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args6286.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___6300 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___6300)){
var class_list_6301 = temp__4655__auto___6300;
class_list_6301.remove(c__$1);
} else {
var class_name_6302 = dommy.core.class$.call(null,elem);
var new_class_name_6303 = dommy.utils.remove_class_str.call(null,class_name_6302,c__$1);
if((class_name_6302 === new_class_name_6303)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_6303);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__6292 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__6293 = null;
var count__6294 = (0);
var i__6295 = (0);
while(true){
if((i__6295 < count__6294)){
var c = cljs.core._nth.call(null,chunk__6293,i__6295);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__6304 = seq__6292;
var G__6305 = chunk__6293;
var G__6306 = count__6294;
var G__6307 = (i__6295 + (1));
seq__6292 = G__6304;
chunk__6293 = G__6305;
count__6294 = G__6306;
i__6295 = G__6307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6292);
if(temp__4657__auto__){
var seq__6292__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6292__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__6292__$1);
var G__6308 = cljs.core.chunk_rest.call(null,seq__6292__$1);
var G__6309 = c__5383__auto__;
var G__6310 = cljs.core.count.call(null,c__5383__auto__);
var G__6311 = (0);
seq__6292 = G__6308;
chunk__6293 = G__6309;
count__6294 = G__6310;
i__6295 = G__6311;
continue;
} else {
var c = cljs.core.first.call(null,seq__6292__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__6312 = cljs.core.next.call(null,seq__6292__$1);
var G__6313 = null;
var G__6314 = (0);
var G__6315 = (0);
seq__6292 = G__6312;
chunk__6293 = G__6313;
count__6294 = G__6314;
i__6295 = G__6315;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq6287){
var G__6288 = cljs.core.first.call(null,seq6287);
var seq6287__$1 = cljs.core.next.call(null,seq6287);
var G__6289 = cljs.core.first.call(null,seq6287__$1);
var seq6287__$2 = cljs.core.next.call(null,seq6287__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6288,G__6289,seq6287__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args6316 = [];
var len__5638__auto___6319 = arguments.length;
var i__5639__auto___6320 = (0);
while(true){
if((i__5639__auto___6320 < len__5638__auto___6319)){
args6316.push((arguments[i__5639__auto___6320]));

var G__6321 = (i__5639__auto___6320 + (1));
i__5639__auto___6320 = G__6321;
continue;
} else {
}
break;
}

var G__6318 = args6316.length;
switch (G__6318) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6316.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___6323 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___6323)){
var class_list_6324 = temp__4655__auto___6323;
class_list_6324.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args6325 = [];
var len__5638__auto___6328 = arguments.length;
var i__5639__auto___6329 = (0);
while(true){
if((i__5639__auto___6329 < len__5638__auto___6328)){
args6325.push((arguments[i__5639__auto___6329]));

var G__6330 = (i__5639__auto___6329 + (1));
i__5639__auto___6329 = G__6330;
continue;
} else {
}
break;
}

var G__6327 = args6325.length;
switch (G__6327) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6325.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args6332 = [];
var len__5638__auto___6335 = arguments.length;
var i__5639__auto___6336 = (0);
while(true){
if((i__5639__auto___6336 < len__5638__auto___6335)){
args6332.push((arguments[i__5639__auto___6336]));

var G__6337 = (i__5639__auto___6336 + (1));
i__5639__auto___6336 = G__6337;
continue;
} else {
}
break;
}

var G__6334 = args6332.length;
switch (G__6334) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6332.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args6339 = [];
var len__5638__auto___6350 = arguments.length;
var i__5639__auto___6351 = (0);
while(true){
if((i__5639__auto___6351 < len__5638__auto___6350)){
args6339.push((arguments[i__5639__auto___6351]));

var G__6352 = (i__5639__auto___6351 + (1));
i__5639__auto___6351 = G__6352;
continue;
} else {
}
break;
}

var G__6344 = args6339.length;
switch (G__6344) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args6339.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__6345 = parent;
G__6345.appendChild(child);

return G__6345;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__6346_6354 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6347_6355 = null;
var count__6348_6356 = (0);
var i__6349_6357 = (0);
while(true){
if((i__6349_6357 < count__6348_6356)){
var c_6358 = cljs.core._nth.call(null,chunk__6347_6355,i__6349_6357);
dommy.core.append_BANG_.call(null,parent,c_6358);

var G__6359 = seq__6346_6354;
var G__6360 = chunk__6347_6355;
var G__6361 = count__6348_6356;
var G__6362 = (i__6349_6357 + (1));
seq__6346_6354 = G__6359;
chunk__6347_6355 = G__6360;
count__6348_6356 = G__6361;
i__6349_6357 = G__6362;
continue;
} else {
var temp__4657__auto___6363 = cljs.core.seq.call(null,seq__6346_6354);
if(temp__4657__auto___6363){
var seq__6346_6364__$1 = temp__4657__auto___6363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6346_6364__$1)){
var c__5383__auto___6365 = cljs.core.chunk_first.call(null,seq__6346_6364__$1);
var G__6366 = cljs.core.chunk_rest.call(null,seq__6346_6364__$1);
var G__6367 = c__5383__auto___6365;
var G__6368 = cljs.core.count.call(null,c__5383__auto___6365);
var G__6369 = (0);
seq__6346_6354 = G__6366;
chunk__6347_6355 = G__6367;
count__6348_6356 = G__6368;
i__6349_6357 = G__6369;
continue;
} else {
var c_6370 = cljs.core.first.call(null,seq__6346_6364__$1);
dommy.core.append_BANG_.call(null,parent,c_6370);

var G__6371 = cljs.core.next.call(null,seq__6346_6364__$1);
var G__6372 = null;
var G__6373 = (0);
var G__6374 = (0);
seq__6346_6354 = G__6371;
chunk__6347_6355 = G__6372;
count__6348_6356 = G__6373;
i__6349_6357 = G__6374;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq6340){
var G__6341 = cljs.core.first.call(null,seq6340);
var seq6340__$1 = cljs.core.next.call(null,seq6340);
var G__6342 = cljs.core.first.call(null,seq6340__$1);
var seq6340__$2 = cljs.core.next.call(null,seq6340__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6341,G__6342,seq6340__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args6375 = [];
var len__5638__auto___6386 = arguments.length;
var i__5639__auto___6387 = (0);
while(true){
if((i__5639__auto___6387 < len__5638__auto___6386)){
args6375.push((arguments[i__5639__auto___6387]));

var G__6388 = (i__5639__auto___6387 + (1));
i__5639__auto___6387 = G__6388;
continue;
} else {
}
break;
}

var G__6380 = args6375.length;
switch (G__6380) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5657__auto__ = (new cljs.core.IndexedSeq(args6375.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5657__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__6381 = parent;
G__6381.insertBefore(child,parent.firstChild);

return G__6381;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__6382_6390 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6383_6391 = null;
var count__6384_6392 = (0);
var i__6385_6393 = (0);
while(true){
if((i__6385_6393 < count__6384_6392)){
var c_6394 = cljs.core._nth.call(null,chunk__6383_6391,i__6385_6393);
dommy.core.prepend_BANG_.call(null,parent,c_6394);

var G__6395 = seq__6382_6390;
var G__6396 = chunk__6383_6391;
var G__6397 = count__6384_6392;
var G__6398 = (i__6385_6393 + (1));
seq__6382_6390 = G__6395;
chunk__6383_6391 = G__6396;
count__6384_6392 = G__6397;
i__6385_6393 = G__6398;
continue;
} else {
var temp__4657__auto___6399 = cljs.core.seq.call(null,seq__6382_6390);
if(temp__4657__auto___6399){
var seq__6382_6400__$1 = temp__4657__auto___6399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6382_6400__$1)){
var c__5383__auto___6401 = cljs.core.chunk_first.call(null,seq__6382_6400__$1);
var G__6402 = cljs.core.chunk_rest.call(null,seq__6382_6400__$1);
var G__6403 = c__5383__auto___6401;
var G__6404 = cljs.core.count.call(null,c__5383__auto___6401);
var G__6405 = (0);
seq__6382_6390 = G__6402;
chunk__6383_6391 = G__6403;
count__6384_6392 = G__6404;
i__6385_6393 = G__6405;
continue;
} else {
var c_6406 = cljs.core.first.call(null,seq__6382_6400__$1);
dommy.core.prepend_BANG_.call(null,parent,c_6406);

var G__6407 = cljs.core.next.call(null,seq__6382_6400__$1);
var G__6408 = null;
var G__6409 = (0);
var G__6410 = (0);
seq__6382_6390 = G__6407;
chunk__6383_6391 = G__6408;
count__6384_6392 = G__6409;
i__6385_6393 = G__6410;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq6376){
var G__6377 = cljs.core.first.call(null,seq6376);
var seq6376__$1 = cljs.core.next.call(null,seq6376);
var G__6378 = cljs.core.first.call(null,seq6376__$1);
var seq6376__$2 = cljs.core.next.call(null,seq6376__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6377,G__6378,seq6376__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___6411 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___6411)){
var next_6412 = temp__4655__auto___6411;
dommy.core.insert_before_BANG_.call(null,elem,next_6412);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args6413 = [];
var len__5638__auto___6417 = arguments.length;
var i__5639__auto___6418 = (0);
while(true){
if((i__5639__auto___6418 < len__5638__auto___6417)){
args6413.push((arguments[i__5639__auto___6418]));

var G__6419 = (i__5639__auto___6418 + (1));
i__5639__auto___6418 = G__6419;
continue;
} else {
}
break;
}

var G__6415 = args6413.length;
switch (G__6415) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6413.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__6416 = p;
G__6416.removeChild(elem);

return G__6416;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6421){
var vec__6422 = p__6421;
var special_mouse_event = cljs.core.nth.call(null,vec__6422,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__6422,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6422,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__6422,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4580__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4568__auto__ = related_target;
if(cljs.core.truth_(and__4568__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4568__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__6422,special_mouse_event,real_mouse_event))
});})(vec__6422,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4568__auto__ = selected_target;
if(cljs.core.truth_(and__4568__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4568__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4580__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6426 = arguments.length;
var i__5639__auto___6427 = (0);
while(true){
if((i__5639__auto___6427 < len__5638__auto___6426)){
args__5645__auto__.push((arguments[i__5639__auto___6427]));

var G__6428 = (i__5639__auto___6427 + (1));
i__5639__auto___6427 = G__6428;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((2) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5646__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq6423){
var G__6424 = cljs.core.first.call(null,seq6423);
var seq6423__$1 = cljs.core.next.call(null,seq6423);
var G__6425 = cljs.core.first.call(null,seq6423__$1);
var seq6423__$2 = cljs.core.next.call(null,seq6423__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6424,G__6425,seq6423__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6454 = arguments.length;
var i__5639__auto___6455 = (0);
while(true){
if((i__5639__auto___6455 < len__5638__auto___6454)){
args__5645__auto__.push((arguments[i__5639__auto___6455]));

var G__6456 = (i__5639__auto___6455 + (1));
i__5639__auto___6455 = G__6456;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6431_6457 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6458 = cljs.core.nth.call(null,vec__6431_6457,(0),null);
var selector_6459 = cljs.core.nth.call(null,vec__6431_6457,(1),null);
var seq__6432_6460 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6439_6461 = null;
var count__6440_6462 = (0);
var i__6441_6463 = (0);
while(true){
if((i__6441_6463 < count__6440_6462)){
var vec__6448_6464 = cljs.core._nth.call(null,chunk__6439_6461,i__6441_6463);
var orig_type_6465 = cljs.core.nth.call(null,vec__6448_6464,(0),null);
var f_6466 = cljs.core.nth.call(null,vec__6448_6464,(1),null);
var seq__6442_6467 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6465,cljs.core.PersistentArrayMap.fromArray([orig_type_6465,cljs.core.identity], true, false)));
var chunk__6444_6468 = null;
var count__6445_6469 = (0);
var i__6446_6470 = (0);
while(true){
if((i__6446_6470 < count__6445_6469)){
var vec__6449_6471 = cljs.core._nth.call(null,chunk__6444_6468,i__6446_6470);
var actual_type_6472 = cljs.core.nth.call(null,vec__6449_6471,(0),null);
var factory_6473 = cljs.core.nth.call(null,vec__6449_6471,(1),null);
var canonical_f_6474 = (cljs.core.truth_(selector_6459)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6458,selector_6459):cljs.core.identity).call(null,factory_6473.call(null,f_6466));
dommy.core.update_event_listeners_BANG_.call(null,elem_6458,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6459,actual_type_6472,f_6466], null),canonical_f_6474);

if(cljs.core.truth_(elem_6458.addEventListener)){
elem_6458.addEventListener(cljs.core.name.call(null,actual_type_6472),canonical_f_6474);
} else {
elem_6458.attachEvent(cljs.core.name.call(null,actual_type_6472),canonical_f_6474);
}

var G__6475 = seq__6442_6467;
var G__6476 = chunk__6444_6468;
var G__6477 = count__6445_6469;
var G__6478 = (i__6446_6470 + (1));
seq__6442_6467 = G__6475;
chunk__6444_6468 = G__6476;
count__6445_6469 = G__6477;
i__6446_6470 = G__6478;
continue;
} else {
var temp__4657__auto___6479 = cljs.core.seq.call(null,seq__6442_6467);
if(temp__4657__auto___6479){
var seq__6442_6480__$1 = temp__4657__auto___6479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6442_6480__$1)){
var c__5383__auto___6481 = cljs.core.chunk_first.call(null,seq__6442_6480__$1);
var G__6482 = cljs.core.chunk_rest.call(null,seq__6442_6480__$1);
var G__6483 = c__5383__auto___6481;
var G__6484 = cljs.core.count.call(null,c__5383__auto___6481);
var G__6485 = (0);
seq__6442_6467 = G__6482;
chunk__6444_6468 = G__6483;
count__6445_6469 = G__6484;
i__6446_6470 = G__6485;
continue;
} else {
var vec__6450_6486 = cljs.core.first.call(null,seq__6442_6480__$1);
var actual_type_6487 = cljs.core.nth.call(null,vec__6450_6486,(0),null);
var factory_6488 = cljs.core.nth.call(null,vec__6450_6486,(1),null);
var canonical_f_6489 = (cljs.core.truth_(selector_6459)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6458,selector_6459):cljs.core.identity).call(null,factory_6488.call(null,f_6466));
dommy.core.update_event_listeners_BANG_.call(null,elem_6458,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6459,actual_type_6487,f_6466], null),canonical_f_6489);

if(cljs.core.truth_(elem_6458.addEventListener)){
elem_6458.addEventListener(cljs.core.name.call(null,actual_type_6487),canonical_f_6489);
} else {
elem_6458.attachEvent(cljs.core.name.call(null,actual_type_6487),canonical_f_6489);
}

var G__6490 = cljs.core.next.call(null,seq__6442_6480__$1);
var G__6491 = null;
var G__6492 = (0);
var G__6493 = (0);
seq__6442_6467 = G__6490;
chunk__6444_6468 = G__6491;
count__6445_6469 = G__6492;
i__6446_6470 = G__6493;
continue;
}
} else {
}
}
break;
}

var G__6494 = seq__6432_6460;
var G__6495 = chunk__6439_6461;
var G__6496 = count__6440_6462;
var G__6497 = (i__6441_6463 + (1));
seq__6432_6460 = G__6494;
chunk__6439_6461 = G__6495;
count__6440_6462 = G__6496;
i__6441_6463 = G__6497;
continue;
} else {
var temp__4657__auto___6498 = cljs.core.seq.call(null,seq__6432_6460);
if(temp__4657__auto___6498){
var seq__6432_6499__$1 = temp__4657__auto___6498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6432_6499__$1)){
var c__5383__auto___6500 = cljs.core.chunk_first.call(null,seq__6432_6499__$1);
var G__6501 = cljs.core.chunk_rest.call(null,seq__6432_6499__$1);
var G__6502 = c__5383__auto___6500;
var G__6503 = cljs.core.count.call(null,c__5383__auto___6500);
var G__6504 = (0);
seq__6432_6460 = G__6501;
chunk__6439_6461 = G__6502;
count__6440_6462 = G__6503;
i__6441_6463 = G__6504;
continue;
} else {
var vec__6451_6505 = cljs.core.first.call(null,seq__6432_6499__$1);
var orig_type_6506 = cljs.core.nth.call(null,vec__6451_6505,(0),null);
var f_6507 = cljs.core.nth.call(null,vec__6451_6505,(1),null);
var seq__6433_6508 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6506,cljs.core.PersistentArrayMap.fromArray([orig_type_6506,cljs.core.identity], true, false)));
var chunk__6435_6509 = null;
var count__6436_6510 = (0);
var i__6437_6511 = (0);
while(true){
if((i__6437_6511 < count__6436_6510)){
var vec__6452_6512 = cljs.core._nth.call(null,chunk__6435_6509,i__6437_6511);
var actual_type_6513 = cljs.core.nth.call(null,vec__6452_6512,(0),null);
var factory_6514 = cljs.core.nth.call(null,vec__6452_6512,(1),null);
var canonical_f_6515 = (cljs.core.truth_(selector_6459)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6458,selector_6459):cljs.core.identity).call(null,factory_6514.call(null,f_6507));
dommy.core.update_event_listeners_BANG_.call(null,elem_6458,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6459,actual_type_6513,f_6507], null),canonical_f_6515);

if(cljs.core.truth_(elem_6458.addEventListener)){
elem_6458.addEventListener(cljs.core.name.call(null,actual_type_6513),canonical_f_6515);
} else {
elem_6458.attachEvent(cljs.core.name.call(null,actual_type_6513),canonical_f_6515);
}

var G__6516 = seq__6433_6508;
var G__6517 = chunk__6435_6509;
var G__6518 = count__6436_6510;
var G__6519 = (i__6437_6511 + (1));
seq__6433_6508 = G__6516;
chunk__6435_6509 = G__6517;
count__6436_6510 = G__6518;
i__6437_6511 = G__6519;
continue;
} else {
var temp__4657__auto___6520__$1 = cljs.core.seq.call(null,seq__6433_6508);
if(temp__4657__auto___6520__$1){
var seq__6433_6521__$1 = temp__4657__auto___6520__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6433_6521__$1)){
var c__5383__auto___6522 = cljs.core.chunk_first.call(null,seq__6433_6521__$1);
var G__6523 = cljs.core.chunk_rest.call(null,seq__6433_6521__$1);
var G__6524 = c__5383__auto___6522;
var G__6525 = cljs.core.count.call(null,c__5383__auto___6522);
var G__6526 = (0);
seq__6433_6508 = G__6523;
chunk__6435_6509 = G__6524;
count__6436_6510 = G__6525;
i__6437_6511 = G__6526;
continue;
} else {
var vec__6453_6527 = cljs.core.first.call(null,seq__6433_6521__$1);
var actual_type_6528 = cljs.core.nth.call(null,vec__6453_6527,(0),null);
var factory_6529 = cljs.core.nth.call(null,vec__6453_6527,(1),null);
var canonical_f_6530 = (cljs.core.truth_(selector_6459)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6458,selector_6459):cljs.core.identity).call(null,factory_6529.call(null,f_6507));
dommy.core.update_event_listeners_BANG_.call(null,elem_6458,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6459,actual_type_6528,f_6507], null),canonical_f_6530);

if(cljs.core.truth_(elem_6458.addEventListener)){
elem_6458.addEventListener(cljs.core.name.call(null,actual_type_6528),canonical_f_6530);
} else {
elem_6458.attachEvent(cljs.core.name.call(null,actual_type_6528),canonical_f_6530);
}

var G__6531 = cljs.core.next.call(null,seq__6433_6521__$1);
var G__6532 = null;
var G__6533 = (0);
var G__6534 = (0);
seq__6433_6508 = G__6531;
chunk__6435_6509 = G__6532;
count__6436_6510 = G__6533;
i__6437_6511 = G__6534;
continue;
}
} else {
}
}
break;
}

var G__6535 = cljs.core.next.call(null,seq__6432_6499__$1);
var G__6536 = null;
var G__6537 = (0);
var G__6538 = (0);
seq__6432_6460 = G__6535;
chunk__6439_6461 = G__6536;
count__6440_6462 = G__6537;
i__6441_6463 = G__6538;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq6429){
var G__6430 = cljs.core.first.call(null,seq6429);
var seq6429__$1 = cljs.core.next.call(null,seq6429);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6430,seq6429__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6564 = arguments.length;
var i__5639__auto___6565 = (0);
while(true){
if((i__5639__auto___6565 < len__5638__auto___6564)){
args__5645__auto__.push((arguments[i__5639__auto___6565]));

var G__6566 = (i__5639__auto___6565 + (1));
i__5639__auto___6565 = G__6566;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6541_6567 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6568 = cljs.core.nth.call(null,vec__6541_6567,(0),null);
var selector_6569 = cljs.core.nth.call(null,vec__6541_6567,(1),null);
var seq__6542_6570 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6549_6571 = null;
var count__6550_6572 = (0);
var i__6551_6573 = (0);
while(true){
if((i__6551_6573 < count__6550_6572)){
var vec__6558_6574 = cljs.core._nth.call(null,chunk__6549_6571,i__6551_6573);
var orig_type_6575 = cljs.core.nth.call(null,vec__6558_6574,(0),null);
var f_6576 = cljs.core.nth.call(null,vec__6558_6574,(1),null);
var seq__6552_6577 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6575,cljs.core.PersistentArrayMap.fromArray([orig_type_6575,cljs.core.identity], true, false)));
var chunk__6554_6578 = null;
var count__6555_6579 = (0);
var i__6556_6580 = (0);
while(true){
if((i__6556_6580 < count__6555_6579)){
var vec__6559_6581 = cljs.core._nth.call(null,chunk__6554_6578,i__6556_6580);
var actual_type_6582 = cljs.core.nth.call(null,vec__6559_6581,(0),null);
var __6583 = cljs.core.nth.call(null,vec__6559_6581,(1),null);
var keys_6584 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6569,actual_type_6582,f_6576], null);
var canonical_f_6585 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6568),keys_6584);
dommy.core.update_event_listeners_BANG_.call(null,elem_6568,dommy.utils.dissoc_in,keys_6584);

if(cljs.core.truth_(elem_6568.removeEventListener)){
elem_6568.removeEventListener(cljs.core.name.call(null,actual_type_6582),canonical_f_6585);
} else {
elem_6568.detachEvent(cljs.core.name.call(null,actual_type_6582),canonical_f_6585);
}

var G__6586 = seq__6552_6577;
var G__6587 = chunk__6554_6578;
var G__6588 = count__6555_6579;
var G__6589 = (i__6556_6580 + (1));
seq__6552_6577 = G__6586;
chunk__6554_6578 = G__6587;
count__6555_6579 = G__6588;
i__6556_6580 = G__6589;
continue;
} else {
var temp__4657__auto___6590 = cljs.core.seq.call(null,seq__6552_6577);
if(temp__4657__auto___6590){
var seq__6552_6591__$1 = temp__4657__auto___6590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6552_6591__$1)){
var c__5383__auto___6592 = cljs.core.chunk_first.call(null,seq__6552_6591__$1);
var G__6593 = cljs.core.chunk_rest.call(null,seq__6552_6591__$1);
var G__6594 = c__5383__auto___6592;
var G__6595 = cljs.core.count.call(null,c__5383__auto___6592);
var G__6596 = (0);
seq__6552_6577 = G__6593;
chunk__6554_6578 = G__6594;
count__6555_6579 = G__6595;
i__6556_6580 = G__6596;
continue;
} else {
var vec__6560_6597 = cljs.core.first.call(null,seq__6552_6591__$1);
var actual_type_6598 = cljs.core.nth.call(null,vec__6560_6597,(0),null);
var __6599 = cljs.core.nth.call(null,vec__6560_6597,(1),null);
var keys_6600 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6569,actual_type_6598,f_6576], null);
var canonical_f_6601 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6568),keys_6600);
dommy.core.update_event_listeners_BANG_.call(null,elem_6568,dommy.utils.dissoc_in,keys_6600);

if(cljs.core.truth_(elem_6568.removeEventListener)){
elem_6568.removeEventListener(cljs.core.name.call(null,actual_type_6598),canonical_f_6601);
} else {
elem_6568.detachEvent(cljs.core.name.call(null,actual_type_6598),canonical_f_6601);
}

var G__6602 = cljs.core.next.call(null,seq__6552_6591__$1);
var G__6603 = null;
var G__6604 = (0);
var G__6605 = (0);
seq__6552_6577 = G__6602;
chunk__6554_6578 = G__6603;
count__6555_6579 = G__6604;
i__6556_6580 = G__6605;
continue;
}
} else {
}
}
break;
}

var G__6606 = seq__6542_6570;
var G__6607 = chunk__6549_6571;
var G__6608 = count__6550_6572;
var G__6609 = (i__6551_6573 + (1));
seq__6542_6570 = G__6606;
chunk__6549_6571 = G__6607;
count__6550_6572 = G__6608;
i__6551_6573 = G__6609;
continue;
} else {
var temp__4657__auto___6610 = cljs.core.seq.call(null,seq__6542_6570);
if(temp__4657__auto___6610){
var seq__6542_6611__$1 = temp__4657__auto___6610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6542_6611__$1)){
var c__5383__auto___6612 = cljs.core.chunk_first.call(null,seq__6542_6611__$1);
var G__6613 = cljs.core.chunk_rest.call(null,seq__6542_6611__$1);
var G__6614 = c__5383__auto___6612;
var G__6615 = cljs.core.count.call(null,c__5383__auto___6612);
var G__6616 = (0);
seq__6542_6570 = G__6613;
chunk__6549_6571 = G__6614;
count__6550_6572 = G__6615;
i__6551_6573 = G__6616;
continue;
} else {
var vec__6561_6617 = cljs.core.first.call(null,seq__6542_6611__$1);
var orig_type_6618 = cljs.core.nth.call(null,vec__6561_6617,(0),null);
var f_6619 = cljs.core.nth.call(null,vec__6561_6617,(1),null);
var seq__6543_6620 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6618,cljs.core.PersistentArrayMap.fromArray([orig_type_6618,cljs.core.identity], true, false)));
var chunk__6545_6621 = null;
var count__6546_6622 = (0);
var i__6547_6623 = (0);
while(true){
if((i__6547_6623 < count__6546_6622)){
var vec__6562_6624 = cljs.core._nth.call(null,chunk__6545_6621,i__6547_6623);
var actual_type_6625 = cljs.core.nth.call(null,vec__6562_6624,(0),null);
var __6626 = cljs.core.nth.call(null,vec__6562_6624,(1),null);
var keys_6627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6569,actual_type_6625,f_6619], null);
var canonical_f_6628 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6568),keys_6627);
dommy.core.update_event_listeners_BANG_.call(null,elem_6568,dommy.utils.dissoc_in,keys_6627);

if(cljs.core.truth_(elem_6568.removeEventListener)){
elem_6568.removeEventListener(cljs.core.name.call(null,actual_type_6625),canonical_f_6628);
} else {
elem_6568.detachEvent(cljs.core.name.call(null,actual_type_6625),canonical_f_6628);
}

var G__6629 = seq__6543_6620;
var G__6630 = chunk__6545_6621;
var G__6631 = count__6546_6622;
var G__6632 = (i__6547_6623 + (1));
seq__6543_6620 = G__6629;
chunk__6545_6621 = G__6630;
count__6546_6622 = G__6631;
i__6547_6623 = G__6632;
continue;
} else {
var temp__4657__auto___6633__$1 = cljs.core.seq.call(null,seq__6543_6620);
if(temp__4657__auto___6633__$1){
var seq__6543_6634__$1 = temp__4657__auto___6633__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6543_6634__$1)){
var c__5383__auto___6635 = cljs.core.chunk_first.call(null,seq__6543_6634__$1);
var G__6636 = cljs.core.chunk_rest.call(null,seq__6543_6634__$1);
var G__6637 = c__5383__auto___6635;
var G__6638 = cljs.core.count.call(null,c__5383__auto___6635);
var G__6639 = (0);
seq__6543_6620 = G__6636;
chunk__6545_6621 = G__6637;
count__6546_6622 = G__6638;
i__6547_6623 = G__6639;
continue;
} else {
var vec__6563_6640 = cljs.core.first.call(null,seq__6543_6634__$1);
var actual_type_6641 = cljs.core.nth.call(null,vec__6563_6640,(0),null);
var __6642 = cljs.core.nth.call(null,vec__6563_6640,(1),null);
var keys_6643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6569,actual_type_6641,f_6619], null);
var canonical_f_6644 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6568),keys_6643);
dommy.core.update_event_listeners_BANG_.call(null,elem_6568,dommy.utils.dissoc_in,keys_6643);

if(cljs.core.truth_(elem_6568.removeEventListener)){
elem_6568.removeEventListener(cljs.core.name.call(null,actual_type_6641),canonical_f_6644);
} else {
elem_6568.detachEvent(cljs.core.name.call(null,actual_type_6641),canonical_f_6644);
}

var G__6645 = cljs.core.next.call(null,seq__6543_6634__$1);
var G__6646 = null;
var G__6647 = (0);
var G__6648 = (0);
seq__6543_6620 = G__6645;
chunk__6545_6621 = G__6646;
count__6546_6622 = G__6647;
i__6547_6623 = G__6648;
continue;
}
} else {
}
}
break;
}

var G__6649 = cljs.core.next.call(null,seq__6542_6611__$1);
var G__6650 = null;
var G__6651 = (0);
var G__6652 = (0);
seq__6542_6570 = G__6649;
chunk__6549_6571 = G__6650;
count__6550_6572 = G__6651;
i__6551_6573 = G__6652;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq6539){
var G__6540 = cljs.core.first.call(null,seq6539);
var seq6539__$1 = cljs.core.next.call(null,seq6539);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6540,seq6539__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___6662 = arguments.length;
var i__5639__auto___6663 = (0);
while(true){
if((i__5639__auto___6663 < len__5638__auto___6662)){
args__5645__auto__.push((arguments[i__5639__auto___6663]));

var G__6664 = (i__5639__auto___6663 + (1));
i__5639__auto___6663 = G__6664;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6655_6665 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6666 = cljs.core.nth.call(null,vec__6655_6665,(0),null);
var selector_6667 = cljs.core.nth.call(null,vec__6655_6665,(1),null);
var seq__6656_6668 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6657_6669 = null;
var count__6658_6670 = (0);
var i__6659_6671 = (0);
while(true){
if((i__6659_6671 < count__6658_6670)){
var vec__6660_6672 = cljs.core._nth.call(null,chunk__6657_6669,i__6659_6671);
var type_6673 = cljs.core.nth.call(null,vec__6660_6672,(0),null);
var f_6674 = cljs.core.nth.call(null,vec__6660_6672,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_6673,((function (seq__6656_6668,chunk__6657_6669,count__6658_6670,i__6659_6671,vec__6660_6672,type_6673,f_6674,vec__6655_6665,elem_6666,selector_6667){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_6673,dommy$core$this_fn);

return f_6674.call(null,e);
});})(seq__6656_6668,chunk__6657_6669,count__6658_6670,i__6659_6671,vec__6660_6672,type_6673,f_6674,vec__6655_6665,elem_6666,selector_6667))
);

var G__6675 = seq__6656_6668;
var G__6676 = chunk__6657_6669;
var G__6677 = count__6658_6670;
var G__6678 = (i__6659_6671 + (1));
seq__6656_6668 = G__6675;
chunk__6657_6669 = G__6676;
count__6658_6670 = G__6677;
i__6659_6671 = G__6678;
continue;
} else {
var temp__4657__auto___6679 = cljs.core.seq.call(null,seq__6656_6668);
if(temp__4657__auto___6679){
var seq__6656_6680__$1 = temp__4657__auto___6679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6656_6680__$1)){
var c__5383__auto___6681 = cljs.core.chunk_first.call(null,seq__6656_6680__$1);
var G__6682 = cljs.core.chunk_rest.call(null,seq__6656_6680__$1);
var G__6683 = c__5383__auto___6681;
var G__6684 = cljs.core.count.call(null,c__5383__auto___6681);
var G__6685 = (0);
seq__6656_6668 = G__6682;
chunk__6657_6669 = G__6683;
count__6658_6670 = G__6684;
i__6659_6671 = G__6685;
continue;
} else {
var vec__6661_6686 = cljs.core.first.call(null,seq__6656_6680__$1);
var type_6687 = cljs.core.nth.call(null,vec__6661_6686,(0),null);
var f_6688 = cljs.core.nth.call(null,vec__6661_6686,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_6687,((function (seq__6656_6668,chunk__6657_6669,count__6658_6670,i__6659_6671,vec__6661_6686,type_6687,f_6688,seq__6656_6680__$1,temp__4657__auto___6679,vec__6655_6665,elem_6666,selector_6667){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_6687,dommy$core$this_fn);

return f_6688.call(null,e);
});})(seq__6656_6668,chunk__6657_6669,count__6658_6670,i__6659_6671,vec__6661_6686,type_6687,f_6688,seq__6656_6680__$1,temp__4657__auto___6679,vec__6655_6665,elem_6666,selector_6667))
);

var G__6689 = cljs.core.next.call(null,seq__6656_6680__$1);
var G__6690 = null;
var G__6691 = (0);
var G__6692 = (0);
seq__6656_6668 = G__6689;
chunk__6657_6669 = G__6690;
count__6658_6670 = G__6691;
i__6659_6671 = G__6692;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq6653){
var G__6654 = cljs.core.first.call(null,seq6653);
var seq6653__$1 = cljs.core.next.call(null,seq6653);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6654,seq6653__$1);
});

//# sourceMappingURL=core.js.map