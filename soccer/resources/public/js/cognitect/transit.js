// Compiled by ClojureScript 1.7.145 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__10995_10999 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10996_11000 = null;
var count__10997_11001 = (0);
var i__10998_11002 = (0);
while(true){
if((i__10998_11002 < count__10997_11001)){
var k_11003 = cljs.core._nth.call(null,chunk__10996_11000,i__10998_11002);
var v_11004 = (b[k_11003]);
(a[k_11003] = v_11004);

var G__11005 = seq__10995_10999;
var G__11006 = chunk__10996_11000;
var G__11007 = count__10997_11001;
var G__11008 = (i__10998_11002 + (1));
seq__10995_10999 = G__11005;
chunk__10996_11000 = G__11006;
count__10997_11001 = G__11007;
i__10998_11002 = G__11008;
continue;
} else {
var temp__4657__auto___11009 = cljs.core.seq.call(null,seq__10995_10999);
if(temp__4657__auto___11009){
var seq__10995_11010__$1 = temp__4657__auto___11009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10995_11010__$1)){
var c__5383__auto___11011 = cljs.core.chunk_first.call(null,seq__10995_11010__$1);
var G__11012 = cljs.core.chunk_rest.call(null,seq__10995_11010__$1);
var G__11013 = c__5383__auto___11011;
var G__11014 = cljs.core.count.call(null,c__5383__auto___11011);
var G__11015 = (0);
seq__10995_10999 = G__11012;
chunk__10996_11000 = G__11013;
count__10997_11001 = G__11014;
i__10998_11002 = G__11015;
continue;
} else {
var k_11016 = cljs.core.first.call(null,seq__10995_11010__$1);
var v_11017 = (b[k_11016]);
(a[k_11016] = v_11017);

var G__11018 = cljs.core.next.call(null,seq__10995_11010__$1);
var G__11019 = null;
var G__11020 = (0);
var G__11021 = (0);
seq__10995_10999 = G__11018;
chunk__10996_11000 = G__11019;
count__10997_11001 = G__11020;
i__10998_11002 = G__11021;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args11022 = [];
var len__5638__auto___11025 = arguments.length;
var i__5639__auto___11026 = (0);
while(true){
if((i__5639__auto___11026 < len__5638__auto___11025)){
args11022.push((arguments[i__5639__auto___11026]));

var G__11027 = (i__5639__auto___11026 + (1));
i__5639__auto___11026 = G__11027;
continue;
} else {
}
break;
}

var G__11024 = args11022.length;
switch (G__11024) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11022.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__11029 = (i + (2));
var G__11030 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11029;
ret = G__11030;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11031_11035 = cljs.core.seq.call(null,v);
var chunk__11032_11036 = null;
var count__11033_11037 = (0);
var i__11034_11038 = (0);
while(true){
if((i__11034_11038 < count__11033_11037)){
var x_11039 = cljs.core._nth.call(null,chunk__11032_11036,i__11034_11038);
ret.push(x_11039);

var G__11040 = seq__11031_11035;
var G__11041 = chunk__11032_11036;
var G__11042 = count__11033_11037;
var G__11043 = (i__11034_11038 + (1));
seq__11031_11035 = G__11040;
chunk__11032_11036 = G__11041;
count__11033_11037 = G__11042;
i__11034_11038 = G__11043;
continue;
} else {
var temp__4657__auto___11044 = cljs.core.seq.call(null,seq__11031_11035);
if(temp__4657__auto___11044){
var seq__11031_11045__$1 = temp__4657__auto___11044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11031_11045__$1)){
var c__5383__auto___11046 = cljs.core.chunk_first.call(null,seq__11031_11045__$1);
var G__11047 = cljs.core.chunk_rest.call(null,seq__11031_11045__$1);
var G__11048 = c__5383__auto___11046;
var G__11049 = cljs.core.count.call(null,c__5383__auto___11046);
var G__11050 = (0);
seq__11031_11035 = G__11047;
chunk__11032_11036 = G__11048;
count__11033_11037 = G__11049;
i__11034_11038 = G__11050;
continue;
} else {
var x_11051 = cljs.core.first.call(null,seq__11031_11045__$1);
ret.push(x_11051);

var G__11052 = cljs.core.next.call(null,seq__11031_11045__$1);
var G__11053 = null;
var G__11054 = (0);
var G__11055 = (0);
seq__11031_11035 = G__11052;
chunk__11032_11036 = G__11053;
count__11033_11037 = G__11054;
i__11034_11038 = G__11055;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11056_11060 = cljs.core.seq.call(null,v);
var chunk__11057_11061 = null;
var count__11058_11062 = (0);
var i__11059_11063 = (0);
while(true){
if((i__11059_11063 < count__11058_11062)){
var x_11064 = cljs.core._nth.call(null,chunk__11057_11061,i__11059_11063);
ret.push(x_11064);

var G__11065 = seq__11056_11060;
var G__11066 = chunk__11057_11061;
var G__11067 = count__11058_11062;
var G__11068 = (i__11059_11063 + (1));
seq__11056_11060 = G__11065;
chunk__11057_11061 = G__11066;
count__11058_11062 = G__11067;
i__11059_11063 = G__11068;
continue;
} else {
var temp__4657__auto___11069 = cljs.core.seq.call(null,seq__11056_11060);
if(temp__4657__auto___11069){
var seq__11056_11070__$1 = temp__4657__auto___11069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11056_11070__$1)){
var c__5383__auto___11071 = cljs.core.chunk_first.call(null,seq__11056_11070__$1);
var G__11072 = cljs.core.chunk_rest.call(null,seq__11056_11070__$1);
var G__11073 = c__5383__auto___11071;
var G__11074 = cljs.core.count.call(null,c__5383__auto___11071);
var G__11075 = (0);
seq__11056_11060 = G__11072;
chunk__11057_11061 = G__11073;
count__11058_11062 = G__11074;
i__11059_11063 = G__11075;
continue;
} else {
var x_11076 = cljs.core.first.call(null,seq__11056_11070__$1);
ret.push(x_11076);

var G__11077 = cljs.core.next.call(null,seq__11056_11070__$1);
var G__11078 = null;
var G__11079 = (0);
var G__11080 = (0);
seq__11056_11060 = G__11077;
chunk__11057_11061 = G__11078;
count__11058_11062 = G__11079;
i__11059_11063 = G__11080;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11081_11085 = cljs.core.seq.call(null,v);
var chunk__11082_11086 = null;
var count__11083_11087 = (0);
var i__11084_11088 = (0);
while(true){
if((i__11084_11088 < count__11083_11087)){
var x_11089 = cljs.core._nth.call(null,chunk__11082_11086,i__11084_11088);
ret.push(x_11089);

var G__11090 = seq__11081_11085;
var G__11091 = chunk__11082_11086;
var G__11092 = count__11083_11087;
var G__11093 = (i__11084_11088 + (1));
seq__11081_11085 = G__11090;
chunk__11082_11086 = G__11091;
count__11083_11087 = G__11092;
i__11084_11088 = G__11093;
continue;
} else {
var temp__4657__auto___11094 = cljs.core.seq.call(null,seq__11081_11085);
if(temp__4657__auto___11094){
var seq__11081_11095__$1 = temp__4657__auto___11094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11081_11095__$1)){
var c__5383__auto___11096 = cljs.core.chunk_first.call(null,seq__11081_11095__$1);
var G__11097 = cljs.core.chunk_rest.call(null,seq__11081_11095__$1);
var G__11098 = c__5383__auto___11096;
var G__11099 = cljs.core.count.call(null,c__5383__auto___11096);
var G__11100 = (0);
seq__11081_11085 = G__11097;
chunk__11082_11086 = G__11098;
count__11083_11087 = G__11099;
i__11084_11088 = G__11100;
continue;
} else {
var x_11101 = cljs.core.first.call(null,seq__11081_11095__$1);
ret.push(x_11101);

var G__11102 = cljs.core.next.call(null,seq__11081_11095__$1);
var G__11103 = null;
var G__11104 = (0);
var G__11105 = (0);
seq__11081_11085 = G__11102;
chunk__11082_11086 = G__11103;
count__11083_11087 = G__11104;
i__11084_11088 = G__11105;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args11106 = [];
var len__5638__auto___11117 = arguments.length;
var i__5639__auto___11118 = (0);
while(true){
if((i__5639__auto___11118 < len__5638__auto___11117)){
args11106.push((arguments[i__5639__auto___11118]));

var G__11119 = (i__5639__auto___11118 + (1));
i__5639__auto___11118 = G__11119;
continue;
} else {
}
break;
}

var G__11108 = args11106.length;
switch (G__11108) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11106.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__11109 = obj;
G__11109.push(kfn.call(null,k),vfn.call(null,v));

return G__11109;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x11110 = cljs.core.clone.call(null,handlers);
x11110.forEach = ((function (x11110,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__11111 = cljs.core.seq.call(null,coll);
var chunk__11112 = null;
var count__11113 = (0);
var i__11114 = (0);
while(true){
if((i__11114 < count__11113)){
var vec__11115 = cljs.core._nth.call(null,chunk__11112,i__11114);
var k = cljs.core.nth.call(null,vec__11115,(0),null);
var v = cljs.core.nth.call(null,vec__11115,(1),null);
f.call(null,v,k);

var G__11121 = seq__11111;
var G__11122 = chunk__11112;
var G__11123 = count__11113;
var G__11124 = (i__11114 + (1));
seq__11111 = G__11121;
chunk__11112 = G__11122;
count__11113 = G__11123;
i__11114 = G__11124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11111);
if(temp__4657__auto__){
var seq__11111__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11111__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__11111__$1);
var G__11125 = cljs.core.chunk_rest.call(null,seq__11111__$1);
var G__11126 = c__5383__auto__;
var G__11127 = cljs.core.count.call(null,c__5383__auto__);
var G__11128 = (0);
seq__11111 = G__11125;
chunk__11112 = G__11126;
count__11113 = G__11127;
i__11114 = G__11128;
continue;
} else {
var vec__11116 = cljs.core.first.call(null,seq__11111__$1);
var k = cljs.core.nth.call(null,vec__11116,(0),null);
var v = cljs.core.nth.call(null,vec__11116,(1),null);
f.call(null,v,k);

var G__11129 = cljs.core.next.call(null,seq__11111__$1);
var G__11130 = null;
var G__11131 = (0);
var G__11132 = (0);
seq__11111 = G__11129;
chunk__11112 = G__11130;
count__11113 = G__11131;
i__11114 = G__11132;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11110,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x11110;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args11133 = [];
var len__5638__auto___11139 = arguments.length;
var i__5639__auto___11140 = (0);
while(true){
if((i__5639__auto___11140 < len__5638__auto___11139)){
args11133.push((arguments[i__5639__auto___11140]));

var G__11141 = (i__5639__auto___11140 + (1));
i__5639__auto___11140 = G__11141;
continue;
} else {
}
break;
}

var G__11135 = args11133.length;
switch (G__11135) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11133.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit11136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit11136 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta11137){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta11137 = meta11137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit11136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11138,meta11137__$1){
var self__ = this;
var _11138__$1 = this;
return (new cognitect.transit.t_cognitect$transit11136(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta11137__$1));
});

cognitect.transit.t_cognitect$transit11136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11138){
var self__ = this;
var _11138__$1 = this;
return self__.meta11137;
});

cognitect.transit.t_cognitect$transit11136.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit11136.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit11136.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit11136.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit11136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta11137","meta11137",312089994,null)], null);
});

cognitect.transit.t_cognitect$transit11136.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit11136.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit11136";

cognitect.transit.t_cognitect$transit11136.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cognitect.transit/t_cognitect$transit11136");
});

cognitect.transit.__GT_t_cognitect$transit11136 = (function cognitect$transit$__GT_t_cognitect$transit11136(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11137){
return (new cognitect.transit.t_cognitect$transit11136(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11137));
});

}

return (new cognitect.transit.t_cognitect$transit11136(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4580__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map