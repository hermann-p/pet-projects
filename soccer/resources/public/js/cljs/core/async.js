// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args11325 = [];
var len__5638__auto___11331 = arguments.length;
var i__5639__auto___11332 = (0);
while(true){
if((i__5639__auto___11332 < len__5638__auto___11331)){
args11325.push((arguments[i__5639__auto___11332]));

var G__11333 = (i__5639__auto___11332 + (1));
i__5639__auto___11332 = G__11333;
continue;
} else {
}
break;
}

var G__11327 = args11325.length;
switch (G__11327) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11325.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11328 = (function (f,blockable,meta11329){
this.f = f;
this.blockable = blockable;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11330,meta11329__$1){
var self__ = this;
var _11330__$1 = this;
return (new cljs.core.async.t_cljs$core$async11328(self__.f,self__.blockable,meta11329__$1));
});

cljs.core.async.t_cljs$core$async11328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11330){
var self__ = this;
var _11330__$1 = this;
return self__.meta11329;
});

cljs.core.async.t_cljs$core$async11328.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11329","meta11329",-1005286836,null)], null);
});

cljs.core.async.t_cljs$core$async11328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11328";

cljs.core.async.t_cljs$core$async11328.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async11328");
});

cljs.core.async.__GT_t_cljs$core$async11328 = (function cljs$core$async$__GT_t_cljs$core$async11328(f__$1,blockable__$1,meta11329){
return (new cljs.core.async.t_cljs$core$async11328(f__$1,blockable__$1,meta11329));
});

}

return (new cljs.core.async.t_cljs$core$async11328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args11337 = [];
var len__5638__auto___11340 = arguments.length;
var i__5639__auto___11341 = (0);
while(true){
if((i__5639__auto___11341 < len__5638__auto___11340)){
args11337.push((arguments[i__5639__auto___11341]));

var G__11342 = (i__5639__auto___11341 + (1));
i__5639__auto___11341 = G__11342;
continue;
} else {
}
break;
}

var G__11339 = args11337.length;
switch (G__11339) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11337.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args11344 = [];
var len__5638__auto___11347 = arguments.length;
var i__5639__auto___11348 = (0);
while(true){
if((i__5639__auto___11348 < len__5638__auto___11347)){
args11344.push((arguments[i__5639__auto___11348]));

var G__11349 = (i__5639__auto___11348 + (1));
i__5639__auto___11348 = G__11349;
continue;
} else {
}
break;
}

var G__11346 = args11344.length;
switch (G__11346) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11344.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args11351 = [];
var len__5638__auto___11354 = arguments.length;
var i__5639__auto___11355 = (0);
while(true){
if((i__5639__auto___11355 < len__5638__auto___11354)){
args11351.push((arguments[i__5639__auto___11355]));

var G__11356 = (i__5639__auto___11355 + (1));
i__5639__auto___11355 = G__11356;
continue;
} else {
}
break;
}

var G__11353 = args11351.length;
switch (G__11353) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11351.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11358 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11358);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11358,ret){
return (function (){
return fn1.call(null,val_11358);
});})(val_11358,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args11359 = [];
var len__5638__auto___11362 = arguments.length;
var i__5639__auto___11363 = (0);
while(true){
if((i__5639__auto___11363 < len__5638__auto___11362)){
args11359.push((arguments[i__5639__auto___11363]));

var G__11364 = (i__5639__auto___11363 + (1));
i__5639__auto___11363 = G__11364;
continue;
} else {
}
break;
}

var G__11361 = args11359.length;
switch (G__11361) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11359.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5483__auto___11366 = n;
var x_11367 = (0);
while(true){
if((x_11367 < n__5483__auto___11366)){
(a[x_11367] = (0));

var G__11368 = (x_11367 + (1));
x_11367 = G__11368;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11369 = (i + (1));
i = G__11369;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11373 = (function (alt_flag,flag,meta11374){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11374 = meta11374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11375,meta11374__$1){
var self__ = this;
var _11375__$1 = this;
return (new cljs.core.async.t_cljs$core$async11373(self__.alt_flag,self__.flag,meta11374__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11375){
var self__ = this;
var _11375__$1 = this;
return self__.meta11374;
});})(flag))
;

cljs.core.async.t_cljs$core$async11373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11373.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11374","meta11374",428856040,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11373";

cljs.core.async.t_cljs$core$async11373.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async11373");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11373 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11373(alt_flag__$1,flag__$1,meta11374){
return (new cljs.core.async.t_cljs$core$async11373(alt_flag__$1,flag__$1,meta11374));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11373(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11379 = (function (alt_handler,flag,cb,meta11380){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11380 = meta11380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11381,meta11380__$1){
var self__ = this;
var _11381__$1 = this;
return (new cljs.core.async.t_cljs$core$async11379(self__.alt_handler,self__.flag,self__.cb,meta11380__$1));
});

cljs.core.async.t_cljs$core$async11379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11381){
var self__ = this;
var _11381__$1 = this;
return self__.meta11380;
});

cljs.core.async.t_cljs$core$async11379.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11380","meta11380",-728575231,null)], null);
});

cljs.core.async.t_cljs$core$async11379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11379";

cljs.core.async.t_cljs$core$async11379.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async11379");
});

cljs.core.async.__GT_t_cljs$core$async11379 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11379(alt_handler__$1,flag__$1,cb__$1,meta11380){
return (new cljs.core.async.t_cljs$core$async11379(alt_handler__$1,flag__$1,cb__$1,meta11380));
});

}

return (new cljs.core.async.t_cljs$core$async11379(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11382_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11383_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4580__auto__ = wport;
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11384 = (i + (1));
i = G__11384;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4580__auto__ = ret;
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__4568__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4568__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4568__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___11390 = arguments.length;
var i__5639__auto___11391 = (0);
while(true){
if((i__5639__auto___11391 < len__5638__auto___11390)){
args__5645__auto__.push((arguments[i__5639__auto___11391]));

var G__11392 = (i__5639__auto___11391 + (1));
i__5639__auto___11391 = G__11392;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11387){
var map__11388 = p__11387;
var map__11388__$1 = ((((!((map__11388 == null)))?((((map__11388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11388):map__11388);
var opts = map__11388__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11385){
var G__11386 = cljs.core.first.call(null,seq11385);
var seq11385__$1 = cljs.core.next.call(null,seq11385);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11386,seq11385__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11393 = [];
var len__5638__auto___11443 = arguments.length;
var i__5639__auto___11444 = (0);
while(true){
if((i__5639__auto___11444 < len__5638__auto___11443)){
args11393.push((arguments[i__5639__auto___11444]));

var G__11445 = (i__5639__auto___11444 + (1));
i__5639__auto___11444 = G__11445;
continue;
} else {
}
break;
}

var G__11395 = args11393.length;
switch (G__11395) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11393.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7572__auto___11447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___11447){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___11447){
return (function (state_11419){
var state_val_11420 = (state_11419[(1)]);
if((state_val_11420 === (7))){
var inst_11415 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
var statearr_11421_11448 = state_11419__$1;
(statearr_11421_11448[(2)] = inst_11415);

(statearr_11421_11448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (1))){
var state_11419__$1 = state_11419;
var statearr_11422_11449 = state_11419__$1;
(statearr_11422_11449[(2)] = null);

(statearr_11422_11449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (4))){
var inst_11398 = (state_11419[(7)]);
var inst_11398__$1 = (state_11419[(2)]);
var inst_11399 = (inst_11398__$1 == null);
var state_11419__$1 = (function (){var statearr_11423 = state_11419;
(statearr_11423[(7)] = inst_11398__$1);

return statearr_11423;
})();
if(cljs.core.truth_(inst_11399)){
var statearr_11424_11450 = state_11419__$1;
(statearr_11424_11450[(1)] = (5));

} else {
var statearr_11425_11451 = state_11419__$1;
(statearr_11425_11451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (13))){
var state_11419__$1 = state_11419;
var statearr_11426_11452 = state_11419__$1;
(statearr_11426_11452[(2)] = null);

(statearr_11426_11452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (6))){
var inst_11398 = (state_11419[(7)]);
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11419__$1,(11),to,inst_11398);
} else {
if((state_val_11420 === (3))){
var inst_11417 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11419__$1,inst_11417);
} else {
if((state_val_11420 === (12))){
var state_11419__$1 = state_11419;
var statearr_11427_11453 = state_11419__$1;
(statearr_11427_11453[(2)] = null);

(statearr_11427_11453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (2))){
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11419__$1,(4),from);
} else {
if((state_val_11420 === (11))){
var inst_11408 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
if(cljs.core.truth_(inst_11408)){
var statearr_11428_11454 = state_11419__$1;
(statearr_11428_11454[(1)] = (12));

} else {
var statearr_11429_11455 = state_11419__$1;
(statearr_11429_11455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (9))){
var state_11419__$1 = state_11419;
var statearr_11430_11456 = state_11419__$1;
(statearr_11430_11456[(2)] = null);

(statearr_11430_11456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (5))){
var state_11419__$1 = state_11419;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11431_11457 = state_11419__$1;
(statearr_11431_11457[(1)] = (8));

} else {
var statearr_11432_11458 = state_11419__$1;
(statearr_11432_11458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (14))){
var inst_11413 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
var statearr_11433_11459 = state_11419__$1;
(statearr_11433_11459[(2)] = inst_11413);

(statearr_11433_11459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (10))){
var inst_11405 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
var statearr_11434_11460 = state_11419__$1;
(statearr_11434_11460[(2)] = inst_11405);

(statearr_11434_11460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (8))){
var inst_11402 = cljs.core.async.close_BANG_.call(null,to);
var state_11419__$1 = state_11419;
var statearr_11435_11461 = state_11419__$1;
(statearr_11435_11461[(2)] = inst_11402);

(statearr_11435_11461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___11447))
;
return ((function (switch__7507__auto__,c__7572__auto___11447){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_11439 = [null,null,null,null,null,null,null,null];
(statearr_11439[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_11439[(1)] = (1));

return statearr_11439;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_11419){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11440){if((e11440 instanceof Object)){
var ex__7511__auto__ = e11440;
var statearr_11441_11462 = state_11419;
(statearr_11441_11462[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11463 = state_11419;
state_11419 = G__11463;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_11419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_11419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___11447))
})();
var state__7574__auto__ = (function (){var statearr_11442 = f__7573__auto__.call(null);
(statearr_11442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11447);

return statearr_11442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___11447))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11647){
var vec__11648 = p__11647;
var v = cljs.core.nth.call(null,vec__11648,(0),null);
var p = cljs.core.nth.call(null,vec__11648,(1),null);
var job = vec__11648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7572__auto___11830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___11830,res,vec__11648,v,p,job,jobs,results){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___11830,res,vec__11648,v,p,job,jobs,results){
return (function (state_11653){
var state_val_11654 = (state_11653[(1)]);
if((state_val_11654 === (1))){
var state_11653__$1 = state_11653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11653__$1,(2),res,v);
} else {
if((state_val_11654 === (2))){
var inst_11650 = (state_11653[(2)]);
var inst_11651 = cljs.core.async.close_BANG_.call(null,res);
var state_11653__$1 = (function (){var statearr_11655 = state_11653;
(statearr_11655[(7)] = inst_11650);

return statearr_11655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11653__$1,inst_11651);
} else {
return null;
}
}
});})(c__7572__auto___11830,res,vec__11648,v,p,job,jobs,results))
;
return ((function (switch__7507__auto__,c__7572__auto___11830,res,vec__11648,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0 = (function (){
var statearr_11659 = [null,null,null,null,null,null,null,null];
(statearr_11659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__);

(statearr_11659[(1)] = (1));

return statearr_11659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1 = (function (state_11653){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11660){if((e11660 instanceof Object)){
var ex__7511__auto__ = e11660;
var statearr_11661_11831 = state_11653;
(statearr_11661_11831[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11832 = state_11653;
state_11653 = G__11832;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = function(state_11653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1.call(this,state_11653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___11830,res,vec__11648,v,p,job,jobs,results))
})();
var state__7574__auto__ = (function (){var statearr_11662 = f__7573__auto__.call(null);
(statearr_11662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11830);

return statearr_11662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___11830,res,vec__11648,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11663){
var vec__11664 = p__11663;
var v = cljs.core.nth.call(null,vec__11664,(0),null);
var p = cljs.core.nth.call(null,vec__11664,(1),null);
var job = vec__11664;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5483__auto___11833 = n;
var __11834 = (0);
while(true){
if((__11834 < n__5483__auto___11833)){
var G__11665_11835 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11665_11835) {
case "compute":
var c__7572__auto___11837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11834,c__7572__auto___11837,G__11665_11835,n__5483__auto___11833,jobs,results,process,async){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (__11834,c__7572__auto___11837,G__11665_11835,n__5483__auto___11833,jobs,results,process,async){
return (function (state_11678){
var state_val_11679 = (state_11678[(1)]);
if((state_val_11679 === (1))){
var state_11678__$1 = state_11678;
var statearr_11680_11838 = state_11678__$1;
(statearr_11680_11838[(2)] = null);

(statearr_11680_11838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (2))){
var state_11678__$1 = state_11678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11678__$1,(4),jobs);
} else {
if((state_val_11679 === (3))){
var inst_11676 = (state_11678[(2)]);
var state_11678__$1 = state_11678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11678__$1,inst_11676);
} else {
if((state_val_11679 === (4))){
var inst_11668 = (state_11678[(2)]);
var inst_11669 = process.call(null,inst_11668);
var state_11678__$1 = state_11678;
if(cljs.core.truth_(inst_11669)){
var statearr_11681_11839 = state_11678__$1;
(statearr_11681_11839[(1)] = (5));

} else {
var statearr_11682_11840 = state_11678__$1;
(statearr_11682_11840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (5))){
var state_11678__$1 = state_11678;
var statearr_11683_11841 = state_11678__$1;
(statearr_11683_11841[(2)] = null);

(statearr_11683_11841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (6))){
var state_11678__$1 = state_11678;
var statearr_11684_11842 = state_11678__$1;
(statearr_11684_11842[(2)] = null);

(statearr_11684_11842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (7))){
var inst_11674 = (state_11678[(2)]);
var state_11678__$1 = state_11678;
var statearr_11685_11843 = state_11678__$1;
(statearr_11685_11843[(2)] = inst_11674);

(statearr_11685_11843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11834,c__7572__auto___11837,G__11665_11835,n__5483__auto___11833,jobs,results,process,async))
;
return ((function (__11834,switch__7507__auto__,c__7572__auto___11837,G__11665_11835,n__5483__auto___11833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0 = (function (){
var statearr_11689 = [null,null,null,null,null,null,null];
(statearr_11689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__);

(statearr_11689[(1)] = (1));

return statearr_11689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1 = (function (state_11678){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11690){if((e11690 instanceof Object)){
var ex__7511__auto__ = e11690;
var statearr_11691_11844 = state_11678;
(statearr_11691_11844[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11845 = state_11678;
state_11678 = G__11845;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = function(state_11678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1.call(this,state_11678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__;
})()
;})(__11834,switch__7507__auto__,c__7572__auto___11837,G__11665_11835,n__5483__auto___11833,jobs,results,process,async))
})();
var state__7574__auto__ = (function (){var statearr_11692 = f__7573__auto__.call(null);
(statearr_11692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11837);

return statearr_11692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(__11834,c__7572__auto___11837,G__11665_11835,n__5483__auto___11833,jobs,results,process,async))
);


break;
case "async":
var c__7572__auto___11846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11834,c__7572__auto___11846,G__11665_11835,n__5483__auto___11833,jobs,results,process,async){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (__11834,c__7572__auto___11846,G__11665_11835,n__5483__auto___11833,jobs,results,process,async){
return (function (state_11705){
var state_val_11706 = (state_11705[(1)]);
if((state_val_11706 === (1))){
var state_11705__$1 = state_11705;
var statearr_11707_11847 = state_11705__$1;
(statearr_11707_11847[(2)] = null);

(statearr_11707_11847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (2))){
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11705__$1,(4),jobs);
} else {
if((state_val_11706 === (3))){
var inst_11703 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11705__$1,inst_11703);
} else {
if((state_val_11706 === (4))){
var inst_11695 = (state_11705[(2)]);
var inst_11696 = async.call(null,inst_11695);
var state_11705__$1 = state_11705;
if(cljs.core.truth_(inst_11696)){
var statearr_11708_11848 = state_11705__$1;
(statearr_11708_11848[(1)] = (5));

} else {
var statearr_11709_11849 = state_11705__$1;
(statearr_11709_11849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (5))){
var state_11705__$1 = state_11705;
var statearr_11710_11850 = state_11705__$1;
(statearr_11710_11850[(2)] = null);

(statearr_11710_11850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (6))){
var state_11705__$1 = state_11705;
var statearr_11711_11851 = state_11705__$1;
(statearr_11711_11851[(2)] = null);

(statearr_11711_11851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (7))){
var inst_11701 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11712_11852 = state_11705__$1;
(statearr_11712_11852[(2)] = inst_11701);

(statearr_11712_11852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11834,c__7572__auto___11846,G__11665_11835,n__5483__auto___11833,jobs,results,process,async))
;
return ((function (__11834,switch__7507__auto__,c__7572__auto___11846,G__11665_11835,n__5483__auto___11833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0 = (function (){
var statearr_11716 = [null,null,null,null,null,null,null];
(statearr_11716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__);

(statearr_11716[(1)] = (1));

return statearr_11716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1 = (function (state_11705){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11717){if((e11717 instanceof Object)){
var ex__7511__auto__ = e11717;
var statearr_11718_11853 = state_11705;
(statearr_11718_11853[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11854 = state_11705;
state_11705 = G__11854;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = function(state_11705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1.call(this,state_11705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__;
})()
;})(__11834,switch__7507__auto__,c__7572__auto___11846,G__11665_11835,n__5483__auto___11833,jobs,results,process,async))
})();
var state__7574__auto__ = (function (){var statearr_11719 = f__7573__auto__.call(null);
(statearr_11719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11846);

return statearr_11719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(__11834,c__7572__auto___11846,G__11665_11835,n__5483__auto___11833,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11855 = (__11834 + (1));
__11834 = G__11855;
continue;
} else {
}
break;
}

var c__7572__auto___11856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___11856,jobs,results,process,async){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___11856,jobs,results,process,async){
return (function (state_11741){
var state_val_11742 = (state_11741[(1)]);
if((state_val_11742 === (1))){
var state_11741__$1 = state_11741;
var statearr_11743_11857 = state_11741__$1;
(statearr_11743_11857[(2)] = null);

(statearr_11743_11857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11742 === (2))){
var state_11741__$1 = state_11741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11741__$1,(4),from);
} else {
if((state_val_11742 === (3))){
var inst_11739 = (state_11741[(2)]);
var state_11741__$1 = state_11741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11741__$1,inst_11739);
} else {
if((state_val_11742 === (4))){
var inst_11722 = (state_11741[(7)]);
var inst_11722__$1 = (state_11741[(2)]);
var inst_11723 = (inst_11722__$1 == null);
var state_11741__$1 = (function (){var statearr_11744 = state_11741;
(statearr_11744[(7)] = inst_11722__$1);

return statearr_11744;
})();
if(cljs.core.truth_(inst_11723)){
var statearr_11745_11858 = state_11741__$1;
(statearr_11745_11858[(1)] = (5));

} else {
var statearr_11746_11859 = state_11741__$1;
(statearr_11746_11859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11742 === (5))){
var inst_11725 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11741__$1 = state_11741;
var statearr_11747_11860 = state_11741__$1;
(statearr_11747_11860[(2)] = inst_11725);

(statearr_11747_11860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11742 === (6))){
var inst_11722 = (state_11741[(7)]);
var inst_11727 = (state_11741[(8)]);
var inst_11727__$1 = cljs.core.async.chan.call(null,(1));
var inst_11728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11729 = [inst_11722,inst_11727__$1];
var inst_11730 = (new cljs.core.PersistentVector(null,2,(5),inst_11728,inst_11729,null));
var state_11741__$1 = (function (){var statearr_11748 = state_11741;
(statearr_11748[(8)] = inst_11727__$1);

return statearr_11748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11741__$1,(8),jobs,inst_11730);
} else {
if((state_val_11742 === (7))){
var inst_11737 = (state_11741[(2)]);
var state_11741__$1 = state_11741;
var statearr_11749_11861 = state_11741__$1;
(statearr_11749_11861[(2)] = inst_11737);

(statearr_11749_11861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11742 === (8))){
var inst_11727 = (state_11741[(8)]);
var inst_11732 = (state_11741[(2)]);
var state_11741__$1 = (function (){var statearr_11750 = state_11741;
(statearr_11750[(9)] = inst_11732);

return statearr_11750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11741__$1,(9),results,inst_11727);
} else {
if((state_val_11742 === (9))){
var inst_11734 = (state_11741[(2)]);
var state_11741__$1 = (function (){var statearr_11751 = state_11741;
(statearr_11751[(10)] = inst_11734);

return statearr_11751;
})();
var statearr_11752_11862 = state_11741__$1;
(statearr_11752_11862[(2)] = null);

(statearr_11752_11862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___11856,jobs,results,process,async))
;
return ((function (switch__7507__auto__,c__7572__auto___11856,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0 = (function (){
var statearr_11756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__);

(statearr_11756[(1)] = (1));

return statearr_11756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1 = (function (state_11741){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11757){if((e11757 instanceof Object)){
var ex__7511__auto__ = e11757;
var statearr_11758_11863 = state_11741;
(statearr_11758_11863[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11864 = state_11741;
state_11741 = G__11864;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = function(state_11741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1.call(this,state_11741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___11856,jobs,results,process,async))
})();
var state__7574__auto__ = (function (){var statearr_11759 = f__7573__auto__.call(null);
(statearr_11759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11856);

return statearr_11759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___11856,jobs,results,process,async))
);


var c__7572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto__,jobs,results,process,async){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto__,jobs,results,process,async){
return (function (state_11797){
var state_val_11798 = (state_11797[(1)]);
if((state_val_11798 === (7))){
var inst_11793 = (state_11797[(2)]);
var state_11797__$1 = state_11797;
var statearr_11799_11865 = state_11797__$1;
(statearr_11799_11865[(2)] = inst_11793);

(statearr_11799_11865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (20))){
var state_11797__$1 = state_11797;
var statearr_11800_11866 = state_11797__$1;
(statearr_11800_11866[(2)] = null);

(statearr_11800_11866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (1))){
var state_11797__$1 = state_11797;
var statearr_11801_11867 = state_11797__$1;
(statearr_11801_11867[(2)] = null);

(statearr_11801_11867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (4))){
var inst_11762 = (state_11797[(7)]);
var inst_11762__$1 = (state_11797[(2)]);
var inst_11763 = (inst_11762__$1 == null);
var state_11797__$1 = (function (){var statearr_11802 = state_11797;
(statearr_11802[(7)] = inst_11762__$1);

return statearr_11802;
})();
if(cljs.core.truth_(inst_11763)){
var statearr_11803_11868 = state_11797__$1;
(statearr_11803_11868[(1)] = (5));

} else {
var statearr_11804_11869 = state_11797__$1;
(statearr_11804_11869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (15))){
var inst_11775 = (state_11797[(8)]);
var state_11797__$1 = state_11797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11797__$1,(18),to,inst_11775);
} else {
if((state_val_11798 === (21))){
var inst_11788 = (state_11797[(2)]);
var state_11797__$1 = state_11797;
var statearr_11805_11870 = state_11797__$1;
(statearr_11805_11870[(2)] = inst_11788);

(statearr_11805_11870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (13))){
var inst_11790 = (state_11797[(2)]);
var state_11797__$1 = (function (){var statearr_11806 = state_11797;
(statearr_11806[(9)] = inst_11790);

return statearr_11806;
})();
var statearr_11807_11871 = state_11797__$1;
(statearr_11807_11871[(2)] = null);

(statearr_11807_11871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (6))){
var inst_11762 = (state_11797[(7)]);
var state_11797__$1 = state_11797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11797__$1,(11),inst_11762);
} else {
if((state_val_11798 === (17))){
var inst_11783 = (state_11797[(2)]);
var state_11797__$1 = state_11797;
if(cljs.core.truth_(inst_11783)){
var statearr_11808_11872 = state_11797__$1;
(statearr_11808_11872[(1)] = (19));

} else {
var statearr_11809_11873 = state_11797__$1;
(statearr_11809_11873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (3))){
var inst_11795 = (state_11797[(2)]);
var state_11797__$1 = state_11797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11797__$1,inst_11795);
} else {
if((state_val_11798 === (12))){
var inst_11772 = (state_11797[(10)]);
var state_11797__$1 = state_11797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11797__$1,(14),inst_11772);
} else {
if((state_val_11798 === (2))){
var state_11797__$1 = state_11797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11797__$1,(4),results);
} else {
if((state_val_11798 === (19))){
var state_11797__$1 = state_11797;
var statearr_11810_11874 = state_11797__$1;
(statearr_11810_11874[(2)] = null);

(statearr_11810_11874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (11))){
var inst_11772 = (state_11797[(2)]);
var state_11797__$1 = (function (){var statearr_11811 = state_11797;
(statearr_11811[(10)] = inst_11772);

return statearr_11811;
})();
var statearr_11812_11875 = state_11797__$1;
(statearr_11812_11875[(2)] = null);

(statearr_11812_11875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (9))){
var state_11797__$1 = state_11797;
var statearr_11813_11876 = state_11797__$1;
(statearr_11813_11876[(2)] = null);

(statearr_11813_11876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (5))){
var state_11797__$1 = state_11797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11814_11877 = state_11797__$1;
(statearr_11814_11877[(1)] = (8));

} else {
var statearr_11815_11878 = state_11797__$1;
(statearr_11815_11878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (14))){
var inst_11775 = (state_11797[(8)]);
var inst_11777 = (state_11797[(11)]);
var inst_11775__$1 = (state_11797[(2)]);
var inst_11776 = (inst_11775__$1 == null);
var inst_11777__$1 = cljs.core.not.call(null,inst_11776);
var state_11797__$1 = (function (){var statearr_11816 = state_11797;
(statearr_11816[(8)] = inst_11775__$1);

(statearr_11816[(11)] = inst_11777__$1);

return statearr_11816;
})();
if(inst_11777__$1){
var statearr_11817_11879 = state_11797__$1;
(statearr_11817_11879[(1)] = (15));

} else {
var statearr_11818_11880 = state_11797__$1;
(statearr_11818_11880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (16))){
var inst_11777 = (state_11797[(11)]);
var state_11797__$1 = state_11797;
var statearr_11819_11881 = state_11797__$1;
(statearr_11819_11881[(2)] = inst_11777);

(statearr_11819_11881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (10))){
var inst_11769 = (state_11797[(2)]);
var state_11797__$1 = state_11797;
var statearr_11820_11882 = state_11797__$1;
(statearr_11820_11882[(2)] = inst_11769);

(statearr_11820_11882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (18))){
var inst_11780 = (state_11797[(2)]);
var state_11797__$1 = state_11797;
var statearr_11821_11883 = state_11797__$1;
(statearr_11821_11883[(2)] = inst_11780);

(statearr_11821_11883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11798 === (8))){
var inst_11766 = cljs.core.async.close_BANG_.call(null,to);
var state_11797__$1 = state_11797;
var statearr_11822_11884 = state_11797__$1;
(statearr_11822_11884[(2)] = inst_11766);

(statearr_11822_11884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto__,jobs,results,process,async))
;
return ((function (switch__7507__auto__,c__7572__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0 = (function (){
var statearr_11826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__);

(statearr_11826[(1)] = (1));

return statearr_11826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1 = (function (state_11797){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11827){if((e11827 instanceof Object)){
var ex__7511__auto__ = e11827;
var statearr_11828_11885 = state_11797;
(statearr_11828_11885[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11886 = state_11797;
state_11797 = G__11886;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__ = function(state_11797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1.call(this,state_11797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto__,jobs,results,process,async))
})();
var state__7574__auto__ = (function (){var statearr_11829 = f__7573__auto__.call(null);
(statearr_11829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto__);

return statearr_11829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto__,jobs,results,process,async))
);

return c__7572__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11887 = [];
var len__5638__auto___11890 = arguments.length;
var i__5639__auto___11891 = (0);
while(true){
if((i__5639__auto___11891 < len__5638__auto___11890)){
args11887.push((arguments[i__5639__auto___11891]));

var G__11892 = (i__5639__auto___11891 + (1));
i__5639__auto___11891 = G__11892;
continue;
} else {
}
break;
}

var G__11889 = args11887.length;
switch (G__11889) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11887.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11894 = [];
var len__5638__auto___11897 = arguments.length;
var i__5639__auto___11898 = (0);
while(true){
if((i__5639__auto___11898 < len__5638__auto___11897)){
args11894.push((arguments[i__5639__auto___11898]));

var G__11899 = (i__5639__auto___11898 + (1));
i__5639__auto___11898 = G__11899;
continue;
} else {
}
break;
}

var G__11896 = args11894.length;
switch (G__11896) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11894.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11901 = [];
var len__5638__auto___11954 = arguments.length;
var i__5639__auto___11955 = (0);
while(true){
if((i__5639__auto___11955 < len__5638__auto___11954)){
args11901.push((arguments[i__5639__auto___11955]));

var G__11956 = (i__5639__auto___11955 + (1));
i__5639__auto___11955 = G__11956;
continue;
} else {
}
break;
}

var G__11903 = args11901.length;
switch (G__11903) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11901.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7572__auto___11958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___11958,tc,fc){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___11958,tc,fc){
return (function (state_11929){
var state_val_11930 = (state_11929[(1)]);
if((state_val_11930 === (7))){
var inst_11925 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
var statearr_11931_11959 = state_11929__$1;
(statearr_11931_11959[(2)] = inst_11925);

(statearr_11931_11959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (1))){
var state_11929__$1 = state_11929;
var statearr_11932_11960 = state_11929__$1;
(statearr_11932_11960[(2)] = null);

(statearr_11932_11960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (4))){
var inst_11906 = (state_11929[(7)]);
var inst_11906__$1 = (state_11929[(2)]);
var inst_11907 = (inst_11906__$1 == null);
var state_11929__$1 = (function (){var statearr_11933 = state_11929;
(statearr_11933[(7)] = inst_11906__$1);

return statearr_11933;
})();
if(cljs.core.truth_(inst_11907)){
var statearr_11934_11961 = state_11929__$1;
(statearr_11934_11961[(1)] = (5));

} else {
var statearr_11935_11962 = state_11929__$1;
(statearr_11935_11962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (13))){
var state_11929__$1 = state_11929;
var statearr_11936_11963 = state_11929__$1;
(statearr_11936_11963[(2)] = null);

(statearr_11936_11963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (6))){
var inst_11906 = (state_11929[(7)]);
var inst_11912 = p.call(null,inst_11906);
var state_11929__$1 = state_11929;
if(cljs.core.truth_(inst_11912)){
var statearr_11937_11964 = state_11929__$1;
(statearr_11937_11964[(1)] = (9));

} else {
var statearr_11938_11965 = state_11929__$1;
(statearr_11938_11965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (3))){
var inst_11927 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11929__$1,inst_11927);
} else {
if((state_val_11930 === (12))){
var state_11929__$1 = state_11929;
var statearr_11939_11966 = state_11929__$1;
(statearr_11939_11966[(2)] = null);

(statearr_11939_11966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (2))){
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11929__$1,(4),ch);
} else {
if((state_val_11930 === (11))){
var inst_11906 = (state_11929[(7)]);
var inst_11916 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11929__$1,(8),inst_11916,inst_11906);
} else {
if((state_val_11930 === (9))){
var state_11929__$1 = state_11929;
var statearr_11940_11967 = state_11929__$1;
(statearr_11940_11967[(2)] = tc);

(statearr_11940_11967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (5))){
var inst_11909 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11910 = cljs.core.async.close_BANG_.call(null,fc);
var state_11929__$1 = (function (){var statearr_11941 = state_11929;
(statearr_11941[(8)] = inst_11909);

return statearr_11941;
})();
var statearr_11942_11968 = state_11929__$1;
(statearr_11942_11968[(2)] = inst_11910);

(statearr_11942_11968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (14))){
var inst_11923 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
var statearr_11943_11969 = state_11929__$1;
(statearr_11943_11969[(2)] = inst_11923);

(statearr_11943_11969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (10))){
var state_11929__$1 = state_11929;
var statearr_11944_11970 = state_11929__$1;
(statearr_11944_11970[(2)] = fc);

(statearr_11944_11970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (8))){
var inst_11918 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
if(cljs.core.truth_(inst_11918)){
var statearr_11945_11971 = state_11929__$1;
(statearr_11945_11971[(1)] = (12));

} else {
var statearr_11946_11972 = state_11929__$1;
(statearr_11946_11972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___11958,tc,fc))
;
return ((function (switch__7507__auto__,c__7572__auto___11958,tc,fc){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_11950 = [null,null,null,null,null,null,null,null,null];
(statearr_11950[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_11950[(1)] = (1));

return statearr_11950;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_11929){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_11929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e11951){if((e11951 instanceof Object)){
var ex__7511__auto__ = e11951;
var statearr_11952_11973 = state_11929;
(statearr_11952_11973[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11974 = state_11929;
state_11929 = G__11974;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_11929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_11929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___11958,tc,fc))
})();
var state__7574__auto__ = (function (){var statearr_11953 = f__7573__auto__.call(null);
(statearr_11953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___11958);

return statearr_11953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___11958,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto__){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto__){
return (function (state_12038){
var state_val_12039 = (state_12038[(1)]);
if((state_val_12039 === (7))){
var inst_12034 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12040_12061 = state_12038__$1;
(statearr_12040_12061[(2)] = inst_12034);

(statearr_12040_12061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (1))){
var inst_12018 = init;
var state_12038__$1 = (function (){var statearr_12041 = state_12038;
(statearr_12041[(7)] = inst_12018);

return statearr_12041;
})();
var statearr_12042_12062 = state_12038__$1;
(statearr_12042_12062[(2)] = null);

(statearr_12042_12062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (4))){
var inst_12021 = (state_12038[(8)]);
var inst_12021__$1 = (state_12038[(2)]);
var inst_12022 = (inst_12021__$1 == null);
var state_12038__$1 = (function (){var statearr_12043 = state_12038;
(statearr_12043[(8)] = inst_12021__$1);

return statearr_12043;
})();
if(cljs.core.truth_(inst_12022)){
var statearr_12044_12063 = state_12038__$1;
(statearr_12044_12063[(1)] = (5));

} else {
var statearr_12045_12064 = state_12038__$1;
(statearr_12045_12064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (6))){
var inst_12018 = (state_12038[(7)]);
var inst_12021 = (state_12038[(8)]);
var inst_12025 = (state_12038[(9)]);
var inst_12025__$1 = f.call(null,inst_12018,inst_12021);
var inst_12026 = cljs.core.reduced_QMARK_.call(null,inst_12025__$1);
var state_12038__$1 = (function (){var statearr_12046 = state_12038;
(statearr_12046[(9)] = inst_12025__$1);

return statearr_12046;
})();
if(inst_12026){
var statearr_12047_12065 = state_12038__$1;
(statearr_12047_12065[(1)] = (8));

} else {
var statearr_12048_12066 = state_12038__$1;
(statearr_12048_12066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (3))){
var inst_12036 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12038__$1,inst_12036);
} else {
if((state_val_12039 === (2))){
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12038__$1,(4),ch);
} else {
if((state_val_12039 === (9))){
var inst_12025 = (state_12038[(9)]);
var inst_12018 = inst_12025;
var state_12038__$1 = (function (){var statearr_12049 = state_12038;
(statearr_12049[(7)] = inst_12018);

return statearr_12049;
})();
var statearr_12050_12067 = state_12038__$1;
(statearr_12050_12067[(2)] = null);

(statearr_12050_12067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (5))){
var inst_12018 = (state_12038[(7)]);
var state_12038__$1 = state_12038;
var statearr_12051_12068 = state_12038__$1;
(statearr_12051_12068[(2)] = inst_12018);

(statearr_12051_12068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (10))){
var inst_12032 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12052_12069 = state_12038__$1;
(statearr_12052_12069[(2)] = inst_12032);

(statearr_12052_12069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (8))){
var inst_12025 = (state_12038[(9)]);
var inst_12028 = cljs.core.deref.call(null,inst_12025);
var state_12038__$1 = state_12038;
var statearr_12053_12070 = state_12038__$1;
(statearr_12053_12070[(2)] = inst_12028);

(statearr_12053_12070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto__))
;
return ((function (switch__7507__auto__,c__7572__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7508__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7508__auto____0 = (function (){
var statearr_12057 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12057[(0)] = cljs$core$async$reduce_$_state_machine__7508__auto__);

(statearr_12057[(1)] = (1));

return statearr_12057;
});
var cljs$core$async$reduce_$_state_machine__7508__auto____1 = (function (state_12038){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_12038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e12058){if((e12058 instanceof Object)){
var ex__7511__auto__ = e12058;
var statearr_12059_12071 = state_12038;
(statearr_12059_12071[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12072 = state_12038;
state_12038 = G__12072;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7508__auto__ = function(state_12038){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7508__auto____1.call(this,state_12038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7508__auto____0;
cljs$core$async$reduce_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7508__auto____1;
return cljs$core$async$reduce_$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto__))
})();
var state__7574__auto__ = (function (){var statearr_12060 = f__7573__auto__.call(null);
(statearr_12060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto__);

return statearr_12060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto__))
);

return c__7572__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args12073 = [];
var len__5638__auto___12125 = arguments.length;
var i__5639__auto___12126 = (0);
while(true){
if((i__5639__auto___12126 < len__5638__auto___12125)){
args12073.push((arguments[i__5639__auto___12126]));

var G__12127 = (i__5639__auto___12126 + (1));
i__5639__auto___12126 = G__12127;
continue;
} else {
}
break;
}

var G__12075 = args12073.length;
switch (G__12075) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12073.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto__){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto__){
return (function (state_12100){
var state_val_12101 = (state_12100[(1)]);
if((state_val_12101 === (7))){
var inst_12082 = (state_12100[(2)]);
var state_12100__$1 = state_12100;
var statearr_12102_12129 = state_12100__$1;
(statearr_12102_12129[(2)] = inst_12082);

(statearr_12102_12129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (1))){
var inst_12076 = cljs.core.seq.call(null,coll);
var inst_12077 = inst_12076;
var state_12100__$1 = (function (){var statearr_12103 = state_12100;
(statearr_12103[(7)] = inst_12077);

return statearr_12103;
})();
var statearr_12104_12130 = state_12100__$1;
(statearr_12104_12130[(2)] = null);

(statearr_12104_12130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (4))){
var inst_12077 = (state_12100[(7)]);
var inst_12080 = cljs.core.first.call(null,inst_12077);
var state_12100__$1 = state_12100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12100__$1,(7),ch,inst_12080);
} else {
if((state_val_12101 === (13))){
var inst_12094 = (state_12100[(2)]);
var state_12100__$1 = state_12100;
var statearr_12105_12131 = state_12100__$1;
(statearr_12105_12131[(2)] = inst_12094);

(statearr_12105_12131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (6))){
var inst_12085 = (state_12100[(2)]);
var state_12100__$1 = state_12100;
if(cljs.core.truth_(inst_12085)){
var statearr_12106_12132 = state_12100__$1;
(statearr_12106_12132[(1)] = (8));

} else {
var statearr_12107_12133 = state_12100__$1;
(statearr_12107_12133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (3))){
var inst_12098 = (state_12100[(2)]);
var state_12100__$1 = state_12100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12100__$1,inst_12098);
} else {
if((state_val_12101 === (12))){
var state_12100__$1 = state_12100;
var statearr_12108_12134 = state_12100__$1;
(statearr_12108_12134[(2)] = null);

(statearr_12108_12134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (2))){
var inst_12077 = (state_12100[(7)]);
var state_12100__$1 = state_12100;
if(cljs.core.truth_(inst_12077)){
var statearr_12109_12135 = state_12100__$1;
(statearr_12109_12135[(1)] = (4));

} else {
var statearr_12110_12136 = state_12100__$1;
(statearr_12110_12136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (11))){
var inst_12091 = cljs.core.async.close_BANG_.call(null,ch);
var state_12100__$1 = state_12100;
var statearr_12111_12137 = state_12100__$1;
(statearr_12111_12137[(2)] = inst_12091);

(statearr_12111_12137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (9))){
var state_12100__$1 = state_12100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12112_12138 = state_12100__$1;
(statearr_12112_12138[(1)] = (11));

} else {
var statearr_12113_12139 = state_12100__$1;
(statearr_12113_12139[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (5))){
var inst_12077 = (state_12100[(7)]);
var state_12100__$1 = state_12100;
var statearr_12114_12140 = state_12100__$1;
(statearr_12114_12140[(2)] = inst_12077);

(statearr_12114_12140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (10))){
var inst_12096 = (state_12100[(2)]);
var state_12100__$1 = state_12100;
var statearr_12115_12141 = state_12100__$1;
(statearr_12115_12141[(2)] = inst_12096);

(statearr_12115_12141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12101 === (8))){
var inst_12077 = (state_12100[(7)]);
var inst_12087 = cljs.core.next.call(null,inst_12077);
var inst_12077__$1 = inst_12087;
var state_12100__$1 = (function (){var statearr_12116 = state_12100;
(statearr_12116[(7)] = inst_12077__$1);

return statearr_12116;
})();
var statearr_12117_12142 = state_12100__$1;
(statearr_12117_12142[(2)] = null);

(statearr_12117_12142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto__))
;
return ((function (switch__7507__auto__,c__7572__auto__){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_12121 = [null,null,null,null,null,null,null,null];
(statearr_12121[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_12121[(1)] = (1));

return statearr_12121;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_12100){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_12100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e12122){if((e12122 instanceof Object)){
var ex__7511__auto__ = e12122;
var statearr_12123_12143 = state_12100;
(statearr_12123_12143[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12144 = state_12100;
state_12100 = G__12144;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_12100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_12100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto__))
})();
var state__7574__auto__ = (function (){var statearr_12124 = f__7573__auto__.call(null);
(statearr_12124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto__);

return statearr_12124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto__))
);

return c__7572__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5235__auto__ = (((_ == null))?null:_);
var m__5236__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,_);
} else {
var m__5236__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5236__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m,ch);
} else {
var m__5236__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m);
} else {
var m__5236__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12366 = (function (mult,ch,cs,meta12367){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12367 = meta12367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12368,meta12367__$1){
var self__ = this;
var _12368__$1 = this;
return (new cljs.core.async.t_cljs$core$async12366(self__.mult,self__.ch,self__.cs,meta12367__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12368){
var self__ = this;
var _12368__$1 = this;
return self__.meta12367;
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12367","meta12367",-2115789405,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12366";

cljs.core.async.t_cljs$core$async12366.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async12366");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12366 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12366(mult__$1,ch__$1,cs__$1,meta12367){
return (new cljs.core.async.t_cljs$core$async12366(mult__$1,ch__$1,cs__$1,meta12367));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12366(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7572__auto___12587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___12587,cs,m,dchan,dctr,done){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___12587,cs,m,dchan,dctr,done){
return (function (state_12499){
var state_val_12500 = (state_12499[(1)]);
if((state_val_12500 === (7))){
var inst_12495 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12501_12588 = state_12499__$1;
(statearr_12501_12588[(2)] = inst_12495);

(statearr_12501_12588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (20))){
var inst_12400 = (state_12499[(7)]);
var inst_12410 = cljs.core.first.call(null,inst_12400);
var inst_12411 = cljs.core.nth.call(null,inst_12410,(0),null);
var inst_12412 = cljs.core.nth.call(null,inst_12410,(1),null);
var state_12499__$1 = (function (){var statearr_12502 = state_12499;
(statearr_12502[(8)] = inst_12411);

return statearr_12502;
})();
if(cljs.core.truth_(inst_12412)){
var statearr_12503_12589 = state_12499__$1;
(statearr_12503_12589[(1)] = (22));

} else {
var statearr_12504_12590 = state_12499__$1;
(statearr_12504_12590[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (27))){
var inst_12447 = (state_12499[(9)]);
var inst_12442 = (state_12499[(10)]);
var inst_12440 = (state_12499[(11)]);
var inst_12371 = (state_12499[(12)]);
var inst_12447__$1 = cljs.core._nth.call(null,inst_12440,inst_12442);
var inst_12448 = cljs.core.async.put_BANG_.call(null,inst_12447__$1,inst_12371,done);
var state_12499__$1 = (function (){var statearr_12505 = state_12499;
(statearr_12505[(9)] = inst_12447__$1);

return statearr_12505;
})();
if(cljs.core.truth_(inst_12448)){
var statearr_12506_12591 = state_12499__$1;
(statearr_12506_12591[(1)] = (30));

} else {
var statearr_12507_12592 = state_12499__$1;
(statearr_12507_12592[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (1))){
var state_12499__$1 = state_12499;
var statearr_12508_12593 = state_12499__$1;
(statearr_12508_12593[(2)] = null);

(statearr_12508_12593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (24))){
var inst_12400 = (state_12499[(7)]);
var inst_12417 = (state_12499[(2)]);
var inst_12418 = cljs.core.next.call(null,inst_12400);
var inst_12380 = inst_12418;
var inst_12381 = null;
var inst_12382 = (0);
var inst_12383 = (0);
var state_12499__$1 = (function (){var statearr_12509 = state_12499;
(statearr_12509[(13)] = inst_12417);

(statearr_12509[(14)] = inst_12383);

(statearr_12509[(15)] = inst_12382);

(statearr_12509[(16)] = inst_12380);

(statearr_12509[(17)] = inst_12381);

return statearr_12509;
})();
var statearr_12510_12594 = state_12499__$1;
(statearr_12510_12594[(2)] = null);

(statearr_12510_12594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (39))){
var state_12499__$1 = state_12499;
var statearr_12514_12595 = state_12499__$1;
(statearr_12514_12595[(2)] = null);

(statearr_12514_12595[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (4))){
var inst_12371 = (state_12499[(12)]);
var inst_12371__$1 = (state_12499[(2)]);
var inst_12372 = (inst_12371__$1 == null);
var state_12499__$1 = (function (){var statearr_12515 = state_12499;
(statearr_12515[(12)] = inst_12371__$1);

return statearr_12515;
})();
if(cljs.core.truth_(inst_12372)){
var statearr_12516_12596 = state_12499__$1;
(statearr_12516_12596[(1)] = (5));

} else {
var statearr_12517_12597 = state_12499__$1;
(statearr_12517_12597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (15))){
var inst_12383 = (state_12499[(14)]);
var inst_12382 = (state_12499[(15)]);
var inst_12380 = (state_12499[(16)]);
var inst_12381 = (state_12499[(17)]);
var inst_12396 = (state_12499[(2)]);
var inst_12397 = (inst_12383 + (1));
var tmp12511 = inst_12382;
var tmp12512 = inst_12380;
var tmp12513 = inst_12381;
var inst_12380__$1 = tmp12512;
var inst_12381__$1 = tmp12513;
var inst_12382__$1 = tmp12511;
var inst_12383__$1 = inst_12397;
var state_12499__$1 = (function (){var statearr_12518 = state_12499;
(statearr_12518[(14)] = inst_12383__$1);

(statearr_12518[(15)] = inst_12382__$1);

(statearr_12518[(16)] = inst_12380__$1);

(statearr_12518[(17)] = inst_12381__$1);

(statearr_12518[(18)] = inst_12396);

return statearr_12518;
})();
var statearr_12519_12598 = state_12499__$1;
(statearr_12519_12598[(2)] = null);

(statearr_12519_12598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (21))){
var inst_12421 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12523_12599 = state_12499__$1;
(statearr_12523_12599[(2)] = inst_12421);

(statearr_12523_12599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (31))){
var inst_12447 = (state_12499[(9)]);
var inst_12451 = done.call(null,null);
var inst_12452 = cljs.core.async.untap_STAR_.call(null,m,inst_12447);
var state_12499__$1 = (function (){var statearr_12524 = state_12499;
(statearr_12524[(19)] = inst_12451);

return statearr_12524;
})();
var statearr_12525_12600 = state_12499__$1;
(statearr_12525_12600[(2)] = inst_12452);

(statearr_12525_12600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (32))){
var inst_12442 = (state_12499[(10)]);
var inst_12441 = (state_12499[(20)]);
var inst_12439 = (state_12499[(21)]);
var inst_12440 = (state_12499[(11)]);
var inst_12454 = (state_12499[(2)]);
var inst_12455 = (inst_12442 + (1));
var tmp12520 = inst_12441;
var tmp12521 = inst_12439;
var tmp12522 = inst_12440;
var inst_12439__$1 = tmp12521;
var inst_12440__$1 = tmp12522;
var inst_12441__$1 = tmp12520;
var inst_12442__$1 = inst_12455;
var state_12499__$1 = (function (){var statearr_12526 = state_12499;
(statearr_12526[(22)] = inst_12454);

(statearr_12526[(10)] = inst_12442__$1);

(statearr_12526[(20)] = inst_12441__$1);

(statearr_12526[(21)] = inst_12439__$1);

(statearr_12526[(11)] = inst_12440__$1);

return statearr_12526;
})();
var statearr_12527_12601 = state_12499__$1;
(statearr_12527_12601[(2)] = null);

(statearr_12527_12601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (40))){
var inst_12467 = (state_12499[(23)]);
var inst_12471 = done.call(null,null);
var inst_12472 = cljs.core.async.untap_STAR_.call(null,m,inst_12467);
var state_12499__$1 = (function (){var statearr_12528 = state_12499;
(statearr_12528[(24)] = inst_12471);

return statearr_12528;
})();
var statearr_12529_12602 = state_12499__$1;
(statearr_12529_12602[(2)] = inst_12472);

(statearr_12529_12602[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (33))){
var inst_12458 = (state_12499[(25)]);
var inst_12460 = cljs.core.chunked_seq_QMARK_.call(null,inst_12458);
var state_12499__$1 = state_12499;
if(inst_12460){
var statearr_12530_12603 = state_12499__$1;
(statearr_12530_12603[(1)] = (36));

} else {
var statearr_12531_12604 = state_12499__$1;
(statearr_12531_12604[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (13))){
var inst_12390 = (state_12499[(26)]);
var inst_12393 = cljs.core.async.close_BANG_.call(null,inst_12390);
var state_12499__$1 = state_12499;
var statearr_12532_12605 = state_12499__$1;
(statearr_12532_12605[(2)] = inst_12393);

(statearr_12532_12605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (22))){
var inst_12411 = (state_12499[(8)]);
var inst_12414 = cljs.core.async.close_BANG_.call(null,inst_12411);
var state_12499__$1 = state_12499;
var statearr_12533_12606 = state_12499__$1;
(statearr_12533_12606[(2)] = inst_12414);

(statearr_12533_12606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (36))){
var inst_12458 = (state_12499[(25)]);
var inst_12462 = cljs.core.chunk_first.call(null,inst_12458);
var inst_12463 = cljs.core.chunk_rest.call(null,inst_12458);
var inst_12464 = cljs.core.count.call(null,inst_12462);
var inst_12439 = inst_12463;
var inst_12440 = inst_12462;
var inst_12441 = inst_12464;
var inst_12442 = (0);
var state_12499__$1 = (function (){var statearr_12534 = state_12499;
(statearr_12534[(10)] = inst_12442);

(statearr_12534[(20)] = inst_12441);

(statearr_12534[(21)] = inst_12439);

(statearr_12534[(11)] = inst_12440);

return statearr_12534;
})();
var statearr_12535_12607 = state_12499__$1;
(statearr_12535_12607[(2)] = null);

(statearr_12535_12607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (41))){
var inst_12458 = (state_12499[(25)]);
var inst_12474 = (state_12499[(2)]);
var inst_12475 = cljs.core.next.call(null,inst_12458);
var inst_12439 = inst_12475;
var inst_12440 = null;
var inst_12441 = (0);
var inst_12442 = (0);
var state_12499__$1 = (function (){var statearr_12536 = state_12499;
(statearr_12536[(27)] = inst_12474);

(statearr_12536[(10)] = inst_12442);

(statearr_12536[(20)] = inst_12441);

(statearr_12536[(21)] = inst_12439);

(statearr_12536[(11)] = inst_12440);

return statearr_12536;
})();
var statearr_12537_12608 = state_12499__$1;
(statearr_12537_12608[(2)] = null);

(statearr_12537_12608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (43))){
var state_12499__$1 = state_12499;
var statearr_12538_12609 = state_12499__$1;
(statearr_12538_12609[(2)] = null);

(statearr_12538_12609[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (29))){
var inst_12483 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12539_12610 = state_12499__$1;
(statearr_12539_12610[(2)] = inst_12483);

(statearr_12539_12610[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (44))){
var inst_12492 = (state_12499[(2)]);
var state_12499__$1 = (function (){var statearr_12540 = state_12499;
(statearr_12540[(28)] = inst_12492);

return statearr_12540;
})();
var statearr_12541_12611 = state_12499__$1;
(statearr_12541_12611[(2)] = null);

(statearr_12541_12611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (6))){
var inst_12431 = (state_12499[(29)]);
var inst_12430 = cljs.core.deref.call(null,cs);
var inst_12431__$1 = cljs.core.keys.call(null,inst_12430);
var inst_12432 = cljs.core.count.call(null,inst_12431__$1);
var inst_12433 = cljs.core.reset_BANG_.call(null,dctr,inst_12432);
var inst_12438 = cljs.core.seq.call(null,inst_12431__$1);
var inst_12439 = inst_12438;
var inst_12440 = null;
var inst_12441 = (0);
var inst_12442 = (0);
var state_12499__$1 = (function (){var statearr_12542 = state_12499;
(statearr_12542[(30)] = inst_12433);

(statearr_12542[(29)] = inst_12431__$1);

(statearr_12542[(10)] = inst_12442);

(statearr_12542[(20)] = inst_12441);

(statearr_12542[(21)] = inst_12439);

(statearr_12542[(11)] = inst_12440);

return statearr_12542;
})();
var statearr_12543_12612 = state_12499__$1;
(statearr_12543_12612[(2)] = null);

(statearr_12543_12612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (28))){
var inst_12439 = (state_12499[(21)]);
var inst_12458 = (state_12499[(25)]);
var inst_12458__$1 = cljs.core.seq.call(null,inst_12439);
var state_12499__$1 = (function (){var statearr_12544 = state_12499;
(statearr_12544[(25)] = inst_12458__$1);

return statearr_12544;
})();
if(inst_12458__$1){
var statearr_12545_12613 = state_12499__$1;
(statearr_12545_12613[(1)] = (33));

} else {
var statearr_12546_12614 = state_12499__$1;
(statearr_12546_12614[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (25))){
var inst_12442 = (state_12499[(10)]);
var inst_12441 = (state_12499[(20)]);
var inst_12444 = (inst_12442 < inst_12441);
var inst_12445 = inst_12444;
var state_12499__$1 = state_12499;
if(cljs.core.truth_(inst_12445)){
var statearr_12547_12615 = state_12499__$1;
(statearr_12547_12615[(1)] = (27));

} else {
var statearr_12548_12616 = state_12499__$1;
(statearr_12548_12616[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (34))){
var state_12499__$1 = state_12499;
var statearr_12549_12617 = state_12499__$1;
(statearr_12549_12617[(2)] = null);

(statearr_12549_12617[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (17))){
var state_12499__$1 = state_12499;
var statearr_12550_12618 = state_12499__$1;
(statearr_12550_12618[(2)] = null);

(statearr_12550_12618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (3))){
var inst_12497 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12499__$1,inst_12497);
} else {
if((state_val_12500 === (12))){
var inst_12426 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12551_12619 = state_12499__$1;
(statearr_12551_12619[(2)] = inst_12426);

(statearr_12551_12619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (2))){
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12499__$1,(4),ch);
} else {
if((state_val_12500 === (23))){
var state_12499__$1 = state_12499;
var statearr_12552_12620 = state_12499__$1;
(statearr_12552_12620[(2)] = null);

(statearr_12552_12620[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (35))){
var inst_12481 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12553_12621 = state_12499__$1;
(statearr_12553_12621[(2)] = inst_12481);

(statearr_12553_12621[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (19))){
var inst_12400 = (state_12499[(7)]);
var inst_12404 = cljs.core.chunk_first.call(null,inst_12400);
var inst_12405 = cljs.core.chunk_rest.call(null,inst_12400);
var inst_12406 = cljs.core.count.call(null,inst_12404);
var inst_12380 = inst_12405;
var inst_12381 = inst_12404;
var inst_12382 = inst_12406;
var inst_12383 = (0);
var state_12499__$1 = (function (){var statearr_12554 = state_12499;
(statearr_12554[(14)] = inst_12383);

(statearr_12554[(15)] = inst_12382);

(statearr_12554[(16)] = inst_12380);

(statearr_12554[(17)] = inst_12381);

return statearr_12554;
})();
var statearr_12555_12622 = state_12499__$1;
(statearr_12555_12622[(2)] = null);

(statearr_12555_12622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (11))){
var inst_12400 = (state_12499[(7)]);
var inst_12380 = (state_12499[(16)]);
var inst_12400__$1 = cljs.core.seq.call(null,inst_12380);
var state_12499__$1 = (function (){var statearr_12556 = state_12499;
(statearr_12556[(7)] = inst_12400__$1);

return statearr_12556;
})();
if(inst_12400__$1){
var statearr_12557_12623 = state_12499__$1;
(statearr_12557_12623[(1)] = (16));

} else {
var statearr_12558_12624 = state_12499__$1;
(statearr_12558_12624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (9))){
var inst_12428 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12559_12625 = state_12499__$1;
(statearr_12559_12625[(2)] = inst_12428);

(statearr_12559_12625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (5))){
var inst_12378 = cljs.core.deref.call(null,cs);
var inst_12379 = cljs.core.seq.call(null,inst_12378);
var inst_12380 = inst_12379;
var inst_12381 = null;
var inst_12382 = (0);
var inst_12383 = (0);
var state_12499__$1 = (function (){var statearr_12560 = state_12499;
(statearr_12560[(14)] = inst_12383);

(statearr_12560[(15)] = inst_12382);

(statearr_12560[(16)] = inst_12380);

(statearr_12560[(17)] = inst_12381);

return statearr_12560;
})();
var statearr_12561_12626 = state_12499__$1;
(statearr_12561_12626[(2)] = null);

(statearr_12561_12626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (14))){
var state_12499__$1 = state_12499;
var statearr_12562_12627 = state_12499__$1;
(statearr_12562_12627[(2)] = null);

(statearr_12562_12627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (45))){
var inst_12489 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12563_12628 = state_12499__$1;
(statearr_12563_12628[(2)] = inst_12489);

(statearr_12563_12628[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (26))){
var inst_12431 = (state_12499[(29)]);
var inst_12485 = (state_12499[(2)]);
var inst_12486 = cljs.core.seq.call(null,inst_12431);
var state_12499__$1 = (function (){var statearr_12564 = state_12499;
(statearr_12564[(31)] = inst_12485);

return statearr_12564;
})();
if(inst_12486){
var statearr_12565_12629 = state_12499__$1;
(statearr_12565_12629[(1)] = (42));

} else {
var statearr_12566_12630 = state_12499__$1;
(statearr_12566_12630[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (16))){
var inst_12400 = (state_12499[(7)]);
var inst_12402 = cljs.core.chunked_seq_QMARK_.call(null,inst_12400);
var state_12499__$1 = state_12499;
if(inst_12402){
var statearr_12567_12631 = state_12499__$1;
(statearr_12567_12631[(1)] = (19));

} else {
var statearr_12568_12632 = state_12499__$1;
(statearr_12568_12632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (38))){
var inst_12478 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12569_12633 = state_12499__$1;
(statearr_12569_12633[(2)] = inst_12478);

(statearr_12569_12633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (30))){
var state_12499__$1 = state_12499;
var statearr_12570_12634 = state_12499__$1;
(statearr_12570_12634[(2)] = null);

(statearr_12570_12634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (10))){
var inst_12383 = (state_12499[(14)]);
var inst_12381 = (state_12499[(17)]);
var inst_12389 = cljs.core._nth.call(null,inst_12381,inst_12383);
var inst_12390 = cljs.core.nth.call(null,inst_12389,(0),null);
var inst_12391 = cljs.core.nth.call(null,inst_12389,(1),null);
var state_12499__$1 = (function (){var statearr_12571 = state_12499;
(statearr_12571[(26)] = inst_12390);

return statearr_12571;
})();
if(cljs.core.truth_(inst_12391)){
var statearr_12572_12635 = state_12499__$1;
(statearr_12572_12635[(1)] = (13));

} else {
var statearr_12573_12636 = state_12499__$1;
(statearr_12573_12636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (18))){
var inst_12424 = (state_12499[(2)]);
var state_12499__$1 = state_12499;
var statearr_12574_12637 = state_12499__$1;
(statearr_12574_12637[(2)] = inst_12424);

(statearr_12574_12637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (42))){
var state_12499__$1 = state_12499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12499__$1,(45),dchan);
} else {
if((state_val_12500 === (37))){
var inst_12467 = (state_12499[(23)]);
var inst_12371 = (state_12499[(12)]);
var inst_12458 = (state_12499[(25)]);
var inst_12467__$1 = cljs.core.first.call(null,inst_12458);
var inst_12468 = cljs.core.async.put_BANG_.call(null,inst_12467__$1,inst_12371,done);
var state_12499__$1 = (function (){var statearr_12575 = state_12499;
(statearr_12575[(23)] = inst_12467__$1);

return statearr_12575;
})();
if(cljs.core.truth_(inst_12468)){
var statearr_12576_12638 = state_12499__$1;
(statearr_12576_12638[(1)] = (39));

} else {
var statearr_12577_12639 = state_12499__$1;
(statearr_12577_12639[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12500 === (8))){
var inst_12383 = (state_12499[(14)]);
var inst_12382 = (state_12499[(15)]);
var inst_12385 = (inst_12383 < inst_12382);
var inst_12386 = inst_12385;
var state_12499__$1 = state_12499;
if(cljs.core.truth_(inst_12386)){
var statearr_12578_12640 = state_12499__$1;
(statearr_12578_12640[(1)] = (10));

} else {
var statearr_12579_12641 = state_12499__$1;
(statearr_12579_12641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___12587,cs,m,dchan,dctr,done))
;
return ((function (switch__7507__auto__,c__7572__auto___12587,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7508__auto__ = null;
var cljs$core$async$mult_$_state_machine__7508__auto____0 = (function (){
var statearr_12583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12583[(0)] = cljs$core$async$mult_$_state_machine__7508__auto__);

(statearr_12583[(1)] = (1));

return statearr_12583;
});
var cljs$core$async$mult_$_state_machine__7508__auto____1 = (function (state_12499){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_12499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e12584){if((e12584 instanceof Object)){
var ex__7511__auto__ = e12584;
var statearr_12585_12642 = state_12499;
(statearr_12585_12642[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12643 = state_12499;
state_12499 = G__12643;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7508__auto__ = function(state_12499){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7508__auto____1.call(this,state_12499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7508__auto____0;
cljs$core$async$mult_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7508__auto____1;
return cljs$core$async$mult_$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___12587,cs,m,dchan,dctr,done))
})();
var state__7574__auto__ = (function (){var statearr_12586 = f__7573__auto__.call(null);
(statearr_12586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___12587);

return statearr_12586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___12587,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12644 = [];
var len__5638__auto___12647 = arguments.length;
var i__5639__auto___12648 = (0);
while(true){
if((i__5639__auto___12648 < len__5638__auto___12647)){
args12644.push((arguments[i__5639__auto___12648]));

var G__12649 = (i__5639__auto___12648 + (1));
i__5639__auto___12648 = G__12649;
continue;
} else {
}
break;
}

var G__12646 = args12644.length;
switch (G__12646) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12644.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m,ch);
} else {
var m__5236__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m,ch);
} else {
var m__5236__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m);
} else {
var m__5236__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m,state_map);
} else {
var m__5236__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5235__auto__ = (((m == null))?null:m);
var m__5236__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,m,mode);
} else {
var m__5236__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5645__auto__ = [];
var len__5638__auto___12661 = arguments.length;
var i__5639__auto___12662 = (0);
while(true){
if((i__5639__auto___12662 < len__5638__auto___12661)){
args__5645__auto__.push((arguments[i__5639__auto___12662]));

var G__12663 = (i__5639__auto___12662 + (1));
i__5639__auto___12662 = G__12663;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((3) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5646__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12655){
var map__12656 = p__12655;
var map__12656__$1 = ((((!((map__12656 == null)))?((((map__12656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12656):map__12656);
var opts = map__12656__$1;
var statearr_12658_12664 = state;
(statearr_12658_12664[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12656,map__12656__$1,opts){
return (function (val){
var statearr_12659_12665 = state;
(statearr_12659_12665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12656,map__12656__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12660_12666 = state;
(statearr_12660_12666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12651){
var G__12652 = cljs.core.first.call(null,seq12651);
var seq12651__$1 = cljs.core.next.call(null,seq12651);
var G__12653 = cljs.core.first.call(null,seq12651__$1);
var seq12651__$2 = cljs.core.next.call(null,seq12651__$1);
var G__12654 = cljs.core.first.call(null,seq12651__$2);
var seq12651__$3 = cljs.core.next.call(null,seq12651__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12652,G__12653,G__12654,seq12651__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12830 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12831){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12831 = meta12831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12832,meta12831__$1){
var self__ = this;
var _12832__$1 = this;
return (new cljs.core.async.t_cljs$core$async12830(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12831__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12832){
var self__ = this;
var _12832__$1 = this;
return self__.meta12831;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12831","meta12831",-1553062955,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12830";

cljs.core.async.t_cljs$core$async12830.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async12830");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12830 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12830(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12831){
return (new cljs.core.async.t_cljs$core$async12830(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12831));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12830(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7572__auto___12993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___12993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___12993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12930){
var state_val_12931 = (state_12930[(1)]);
if((state_val_12931 === (7))){
var inst_12848 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12932_12994 = state_12930__$1;
(statearr_12932_12994[(2)] = inst_12848);

(statearr_12932_12994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (20))){
var inst_12860 = (state_12930[(7)]);
var state_12930__$1 = state_12930;
var statearr_12933_12995 = state_12930__$1;
(statearr_12933_12995[(2)] = inst_12860);

(statearr_12933_12995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (27))){
var state_12930__$1 = state_12930;
var statearr_12934_12996 = state_12930__$1;
(statearr_12934_12996[(2)] = null);

(statearr_12934_12996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (1))){
var inst_12836 = (state_12930[(8)]);
var inst_12836__$1 = calc_state.call(null);
var inst_12838 = (inst_12836__$1 == null);
var inst_12839 = cljs.core.not.call(null,inst_12838);
var state_12930__$1 = (function (){var statearr_12935 = state_12930;
(statearr_12935[(8)] = inst_12836__$1);

return statearr_12935;
})();
if(inst_12839){
var statearr_12936_12997 = state_12930__$1;
(statearr_12936_12997[(1)] = (2));

} else {
var statearr_12937_12998 = state_12930__$1;
(statearr_12937_12998[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (24))){
var inst_12883 = (state_12930[(9)]);
var inst_12904 = (state_12930[(10)]);
var inst_12890 = (state_12930[(11)]);
var inst_12904__$1 = inst_12883.call(null,inst_12890);
var state_12930__$1 = (function (){var statearr_12938 = state_12930;
(statearr_12938[(10)] = inst_12904__$1);

return statearr_12938;
})();
if(cljs.core.truth_(inst_12904__$1)){
var statearr_12939_12999 = state_12930__$1;
(statearr_12939_12999[(1)] = (29));

} else {
var statearr_12940_13000 = state_12930__$1;
(statearr_12940_13000[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (4))){
var inst_12851 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12851)){
var statearr_12941_13001 = state_12930__$1;
(statearr_12941_13001[(1)] = (8));

} else {
var statearr_12942_13002 = state_12930__$1;
(statearr_12942_13002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (15))){
var inst_12877 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12877)){
var statearr_12943_13003 = state_12930__$1;
(statearr_12943_13003[(1)] = (19));

} else {
var statearr_12944_13004 = state_12930__$1;
(statearr_12944_13004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (21))){
var inst_12882 = (state_12930[(12)]);
var inst_12882__$1 = (state_12930[(2)]);
var inst_12883 = cljs.core.get.call(null,inst_12882__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12884 = cljs.core.get.call(null,inst_12882__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12885 = cljs.core.get.call(null,inst_12882__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12930__$1 = (function (){var statearr_12945 = state_12930;
(statearr_12945[(12)] = inst_12882__$1);

(statearr_12945[(9)] = inst_12883);

(statearr_12945[(13)] = inst_12884);

return statearr_12945;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12930__$1,(22),inst_12885);
} else {
if((state_val_12931 === (31))){
var inst_12912 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12912)){
var statearr_12946_13005 = state_12930__$1;
(statearr_12946_13005[(1)] = (32));

} else {
var statearr_12947_13006 = state_12930__$1;
(statearr_12947_13006[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (32))){
var inst_12889 = (state_12930[(14)]);
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12930__$1,(35),out,inst_12889);
} else {
if((state_val_12931 === (33))){
var inst_12882 = (state_12930[(12)]);
var inst_12860 = inst_12882;
var state_12930__$1 = (function (){var statearr_12948 = state_12930;
(statearr_12948[(7)] = inst_12860);

return statearr_12948;
})();
var statearr_12949_13007 = state_12930__$1;
(statearr_12949_13007[(2)] = null);

(statearr_12949_13007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (13))){
var inst_12860 = (state_12930[(7)]);
var inst_12867 = inst_12860.cljs$lang$protocol_mask$partition0$;
var inst_12868 = (inst_12867 & (64));
var inst_12869 = inst_12860.cljs$core$ISeq$;
var inst_12870 = (inst_12868) || (inst_12869);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12870)){
var statearr_12950_13008 = state_12930__$1;
(statearr_12950_13008[(1)] = (16));

} else {
var statearr_12951_13009 = state_12930__$1;
(statearr_12951_13009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (22))){
var inst_12889 = (state_12930[(14)]);
var inst_12890 = (state_12930[(11)]);
var inst_12888 = (state_12930[(2)]);
var inst_12889__$1 = cljs.core.nth.call(null,inst_12888,(0),null);
var inst_12890__$1 = cljs.core.nth.call(null,inst_12888,(1),null);
var inst_12891 = (inst_12889__$1 == null);
var inst_12892 = cljs.core._EQ_.call(null,inst_12890__$1,change);
var inst_12893 = (inst_12891) || (inst_12892);
var state_12930__$1 = (function (){var statearr_12952 = state_12930;
(statearr_12952[(14)] = inst_12889__$1);

(statearr_12952[(11)] = inst_12890__$1);

return statearr_12952;
})();
if(cljs.core.truth_(inst_12893)){
var statearr_12953_13010 = state_12930__$1;
(statearr_12953_13010[(1)] = (23));

} else {
var statearr_12954_13011 = state_12930__$1;
(statearr_12954_13011[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (36))){
var inst_12882 = (state_12930[(12)]);
var inst_12860 = inst_12882;
var state_12930__$1 = (function (){var statearr_12955 = state_12930;
(statearr_12955[(7)] = inst_12860);

return statearr_12955;
})();
var statearr_12956_13012 = state_12930__$1;
(statearr_12956_13012[(2)] = null);

(statearr_12956_13012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (29))){
var inst_12904 = (state_12930[(10)]);
var state_12930__$1 = state_12930;
var statearr_12957_13013 = state_12930__$1;
(statearr_12957_13013[(2)] = inst_12904);

(statearr_12957_13013[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (6))){
var state_12930__$1 = state_12930;
var statearr_12958_13014 = state_12930__$1;
(statearr_12958_13014[(2)] = false);

(statearr_12958_13014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (28))){
var inst_12900 = (state_12930[(2)]);
var inst_12901 = calc_state.call(null);
var inst_12860 = inst_12901;
var state_12930__$1 = (function (){var statearr_12959 = state_12930;
(statearr_12959[(15)] = inst_12900);

(statearr_12959[(7)] = inst_12860);

return statearr_12959;
})();
var statearr_12960_13015 = state_12930__$1;
(statearr_12960_13015[(2)] = null);

(statearr_12960_13015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (25))){
var inst_12926 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12961_13016 = state_12930__$1;
(statearr_12961_13016[(2)] = inst_12926);

(statearr_12961_13016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (34))){
var inst_12924 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12962_13017 = state_12930__$1;
(statearr_12962_13017[(2)] = inst_12924);

(statearr_12962_13017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (17))){
var state_12930__$1 = state_12930;
var statearr_12963_13018 = state_12930__$1;
(statearr_12963_13018[(2)] = false);

(statearr_12963_13018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (3))){
var state_12930__$1 = state_12930;
var statearr_12964_13019 = state_12930__$1;
(statearr_12964_13019[(2)] = false);

(statearr_12964_13019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (12))){
var inst_12928 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12930__$1,inst_12928);
} else {
if((state_val_12931 === (2))){
var inst_12836 = (state_12930[(8)]);
var inst_12841 = inst_12836.cljs$lang$protocol_mask$partition0$;
var inst_12842 = (inst_12841 & (64));
var inst_12843 = inst_12836.cljs$core$ISeq$;
var inst_12844 = (inst_12842) || (inst_12843);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12844)){
var statearr_12965_13020 = state_12930__$1;
(statearr_12965_13020[(1)] = (5));

} else {
var statearr_12966_13021 = state_12930__$1;
(statearr_12966_13021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (23))){
var inst_12889 = (state_12930[(14)]);
var inst_12895 = (inst_12889 == null);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12895)){
var statearr_12967_13022 = state_12930__$1;
(statearr_12967_13022[(1)] = (26));

} else {
var statearr_12968_13023 = state_12930__$1;
(statearr_12968_13023[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (35))){
var inst_12915 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12915)){
var statearr_12969_13024 = state_12930__$1;
(statearr_12969_13024[(1)] = (36));

} else {
var statearr_12970_13025 = state_12930__$1;
(statearr_12970_13025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (19))){
var inst_12860 = (state_12930[(7)]);
var inst_12879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12860);
var state_12930__$1 = state_12930;
var statearr_12971_13026 = state_12930__$1;
(statearr_12971_13026[(2)] = inst_12879);

(statearr_12971_13026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (11))){
var inst_12860 = (state_12930[(7)]);
var inst_12864 = (inst_12860 == null);
var inst_12865 = cljs.core.not.call(null,inst_12864);
var state_12930__$1 = state_12930;
if(inst_12865){
var statearr_12972_13027 = state_12930__$1;
(statearr_12972_13027[(1)] = (13));

} else {
var statearr_12973_13028 = state_12930__$1;
(statearr_12973_13028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (9))){
var inst_12836 = (state_12930[(8)]);
var state_12930__$1 = state_12930;
var statearr_12974_13029 = state_12930__$1;
(statearr_12974_13029[(2)] = inst_12836);

(statearr_12974_13029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (5))){
var state_12930__$1 = state_12930;
var statearr_12975_13030 = state_12930__$1;
(statearr_12975_13030[(2)] = true);

(statearr_12975_13030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (14))){
var state_12930__$1 = state_12930;
var statearr_12976_13031 = state_12930__$1;
(statearr_12976_13031[(2)] = false);

(statearr_12976_13031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (26))){
var inst_12890 = (state_12930[(11)]);
var inst_12897 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12890);
var state_12930__$1 = state_12930;
var statearr_12977_13032 = state_12930__$1;
(statearr_12977_13032[(2)] = inst_12897);

(statearr_12977_13032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (16))){
var state_12930__$1 = state_12930;
var statearr_12978_13033 = state_12930__$1;
(statearr_12978_13033[(2)] = true);

(statearr_12978_13033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (38))){
var inst_12920 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12979_13034 = state_12930__$1;
(statearr_12979_13034[(2)] = inst_12920);

(statearr_12979_13034[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (30))){
var inst_12883 = (state_12930[(9)]);
var inst_12884 = (state_12930[(13)]);
var inst_12890 = (state_12930[(11)]);
var inst_12907 = cljs.core.empty_QMARK_.call(null,inst_12883);
var inst_12908 = inst_12884.call(null,inst_12890);
var inst_12909 = cljs.core.not.call(null,inst_12908);
var inst_12910 = (inst_12907) && (inst_12909);
var state_12930__$1 = state_12930;
var statearr_12980_13035 = state_12930__$1;
(statearr_12980_13035[(2)] = inst_12910);

(statearr_12980_13035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (10))){
var inst_12836 = (state_12930[(8)]);
var inst_12856 = (state_12930[(2)]);
var inst_12857 = cljs.core.get.call(null,inst_12856,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12858 = cljs.core.get.call(null,inst_12856,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12859 = cljs.core.get.call(null,inst_12856,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12860 = inst_12836;
var state_12930__$1 = (function (){var statearr_12981 = state_12930;
(statearr_12981[(16)] = inst_12857);

(statearr_12981[(17)] = inst_12858);

(statearr_12981[(18)] = inst_12859);

(statearr_12981[(7)] = inst_12860);

return statearr_12981;
})();
var statearr_12982_13036 = state_12930__$1;
(statearr_12982_13036[(2)] = null);

(statearr_12982_13036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (18))){
var inst_12874 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12983_13037 = state_12930__$1;
(statearr_12983_13037[(2)] = inst_12874);

(statearr_12983_13037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (37))){
var state_12930__$1 = state_12930;
var statearr_12984_13038 = state_12930__$1;
(statearr_12984_13038[(2)] = null);

(statearr_12984_13038[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (8))){
var inst_12836 = (state_12930[(8)]);
var inst_12853 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12836);
var state_12930__$1 = state_12930;
var statearr_12985_13039 = state_12930__$1;
(statearr_12985_13039[(2)] = inst_12853);

(statearr_12985_13039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___12993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7507__auto__,c__7572__auto___12993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7508__auto__ = null;
var cljs$core$async$mix_$_state_machine__7508__auto____0 = (function (){
var statearr_12989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12989[(0)] = cljs$core$async$mix_$_state_machine__7508__auto__);

(statearr_12989[(1)] = (1));

return statearr_12989;
});
var cljs$core$async$mix_$_state_machine__7508__auto____1 = (function (state_12930){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_12930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e12990){if((e12990 instanceof Object)){
var ex__7511__auto__ = e12990;
var statearr_12991_13040 = state_12930;
(statearr_12991_13040[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13041 = state_12930;
state_12930 = G__13041;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7508__auto__ = function(state_12930){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7508__auto____1.call(this,state_12930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7508__auto____0;
cljs$core$async$mix_$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7508__auto____1;
return cljs$core$async$mix_$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___12993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7574__auto__ = (function (){var statearr_12992 = f__7573__auto__.call(null);
(statearr_12992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___12993);

return statearr_12992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___12993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5235__auto__ = (((p == null))?null:p);
var m__5236__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5236__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5235__auto__ = (((p == null))?null:p);
var m__5236__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,p,v,ch);
} else {
var m__5236__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13042 = [];
var len__5638__auto___13045 = arguments.length;
var i__5639__auto___13046 = (0);
while(true){
if((i__5639__auto___13046 < len__5638__auto___13045)){
args13042.push((arguments[i__5639__auto___13046]));

var G__13047 = (i__5639__auto___13046 + (1));
i__5639__auto___13046 = G__13047;
continue;
} else {
}
break;
}

var G__13044 = args13042.length;
switch (G__13044) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13042.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5235__auto__ = (((p == null))?null:p);
var m__5236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,p);
} else {
var m__5236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5235__auto__ = (((p == null))?null:p);
var m__5236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5235__auto__)]);
if(!((m__5236__auto__ == null))){
return m__5236__auto__.call(null,p,v);
} else {
var m__5236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5236__auto____$1 == null))){
return m__5236__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args13050 = [];
var len__5638__auto___13175 = arguments.length;
var i__5639__auto___13176 = (0);
while(true){
if((i__5639__auto___13176 < len__5638__auto___13175)){
args13050.push((arguments[i__5639__auto___13176]));

var G__13177 = (i__5639__auto___13176 + (1));
i__5639__auto___13176 = G__13177;
continue;
} else {
}
break;
}

var G__13052 = args13050.length;
switch (G__13052) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13050.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4580__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4580__auto__,mults){
return (function (p1__13049_SHARP_){
if(cljs.core.truth_(p1__13049_SHARP_.call(null,topic))){
return p1__13049_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13049_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4580__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13053 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13054){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13054 = meta13054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13055,meta13054__$1){
var self__ = this;
var _13055__$1 = this;
return (new cljs.core.async.t_cljs$core$async13053(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13054__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13055){
var self__ = this;
var _13055__$1 = this;
return self__.meta13054;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13054","meta13054",-1233595000,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13053";

cljs.core.async.t_cljs$core$async13053.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async13053");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13053 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13054){
return (new cljs.core.async.t_cljs$core$async13053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13054));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13053(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7572__auto___13179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13179,mults,ensure_mult,p){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13179,mults,ensure_mult,p){
return (function (state_13127){
var state_val_13128 = (state_13127[(1)]);
if((state_val_13128 === (7))){
var inst_13123 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13129_13180 = state_13127__$1;
(statearr_13129_13180[(2)] = inst_13123);

(statearr_13129_13180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (20))){
var state_13127__$1 = state_13127;
var statearr_13130_13181 = state_13127__$1;
(statearr_13130_13181[(2)] = null);

(statearr_13130_13181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (1))){
var state_13127__$1 = state_13127;
var statearr_13131_13182 = state_13127__$1;
(statearr_13131_13182[(2)] = null);

(statearr_13131_13182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (24))){
var inst_13106 = (state_13127[(7)]);
var inst_13115 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13106);
var state_13127__$1 = state_13127;
var statearr_13132_13183 = state_13127__$1;
(statearr_13132_13183[(2)] = inst_13115);

(statearr_13132_13183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (4))){
var inst_13058 = (state_13127[(8)]);
var inst_13058__$1 = (state_13127[(2)]);
var inst_13059 = (inst_13058__$1 == null);
var state_13127__$1 = (function (){var statearr_13133 = state_13127;
(statearr_13133[(8)] = inst_13058__$1);

return statearr_13133;
})();
if(cljs.core.truth_(inst_13059)){
var statearr_13134_13184 = state_13127__$1;
(statearr_13134_13184[(1)] = (5));

} else {
var statearr_13135_13185 = state_13127__$1;
(statearr_13135_13185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (15))){
var inst_13100 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13136_13186 = state_13127__$1;
(statearr_13136_13186[(2)] = inst_13100);

(statearr_13136_13186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (21))){
var inst_13120 = (state_13127[(2)]);
var state_13127__$1 = (function (){var statearr_13137 = state_13127;
(statearr_13137[(9)] = inst_13120);

return statearr_13137;
})();
var statearr_13138_13187 = state_13127__$1;
(statearr_13138_13187[(2)] = null);

(statearr_13138_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (13))){
var inst_13082 = (state_13127[(10)]);
var inst_13084 = cljs.core.chunked_seq_QMARK_.call(null,inst_13082);
var state_13127__$1 = state_13127;
if(inst_13084){
var statearr_13139_13188 = state_13127__$1;
(statearr_13139_13188[(1)] = (16));

} else {
var statearr_13140_13189 = state_13127__$1;
(statearr_13140_13189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (22))){
var inst_13112 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
if(cljs.core.truth_(inst_13112)){
var statearr_13141_13190 = state_13127__$1;
(statearr_13141_13190[(1)] = (23));

} else {
var statearr_13142_13191 = state_13127__$1;
(statearr_13142_13191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (6))){
var inst_13058 = (state_13127[(8)]);
var inst_13108 = (state_13127[(11)]);
var inst_13106 = (state_13127[(7)]);
var inst_13106__$1 = topic_fn.call(null,inst_13058);
var inst_13107 = cljs.core.deref.call(null,mults);
var inst_13108__$1 = cljs.core.get.call(null,inst_13107,inst_13106__$1);
var state_13127__$1 = (function (){var statearr_13143 = state_13127;
(statearr_13143[(11)] = inst_13108__$1);

(statearr_13143[(7)] = inst_13106__$1);

return statearr_13143;
})();
if(cljs.core.truth_(inst_13108__$1)){
var statearr_13144_13192 = state_13127__$1;
(statearr_13144_13192[(1)] = (19));

} else {
var statearr_13145_13193 = state_13127__$1;
(statearr_13145_13193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (25))){
var inst_13117 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13146_13194 = state_13127__$1;
(statearr_13146_13194[(2)] = inst_13117);

(statearr_13146_13194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (17))){
var inst_13082 = (state_13127[(10)]);
var inst_13091 = cljs.core.first.call(null,inst_13082);
var inst_13092 = cljs.core.async.muxch_STAR_.call(null,inst_13091);
var inst_13093 = cljs.core.async.close_BANG_.call(null,inst_13092);
var inst_13094 = cljs.core.next.call(null,inst_13082);
var inst_13068 = inst_13094;
var inst_13069 = null;
var inst_13070 = (0);
var inst_13071 = (0);
var state_13127__$1 = (function (){var statearr_13147 = state_13127;
(statearr_13147[(12)] = inst_13068);

(statearr_13147[(13)] = inst_13071);

(statearr_13147[(14)] = inst_13093);

(statearr_13147[(15)] = inst_13070);

(statearr_13147[(16)] = inst_13069);

return statearr_13147;
})();
var statearr_13148_13195 = state_13127__$1;
(statearr_13148_13195[(2)] = null);

(statearr_13148_13195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (3))){
var inst_13125 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13127__$1,inst_13125);
} else {
if((state_val_13128 === (12))){
var inst_13102 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13149_13196 = state_13127__$1;
(statearr_13149_13196[(2)] = inst_13102);

(statearr_13149_13196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (2))){
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13127__$1,(4),ch);
} else {
if((state_val_13128 === (23))){
var state_13127__$1 = state_13127;
var statearr_13150_13197 = state_13127__$1;
(statearr_13150_13197[(2)] = null);

(statearr_13150_13197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (19))){
var inst_13058 = (state_13127[(8)]);
var inst_13108 = (state_13127[(11)]);
var inst_13110 = cljs.core.async.muxch_STAR_.call(null,inst_13108);
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13127__$1,(22),inst_13110,inst_13058);
} else {
if((state_val_13128 === (11))){
var inst_13082 = (state_13127[(10)]);
var inst_13068 = (state_13127[(12)]);
var inst_13082__$1 = cljs.core.seq.call(null,inst_13068);
var state_13127__$1 = (function (){var statearr_13151 = state_13127;
(statearr_13151[(10)] = inst_13082__$1);

return statearr_13151;
})();
if(inst_13082__$1){
var statearr_13152_13198 = state_13127__$1;
(statearr_13152_13198[(1)] = (13));

} else {
var statearr_13153_13199 = state_13127__$1;
(statearr_13153_13199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (9))){
var inst_13104 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13154_13200 = state_13127__$1;
(statearr_13154_13200[(2)] = inst_13104);

(statearr_13154_13200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (5))){
var inst_13065 = cljs.core.deref.call(null,mults);
var inst_13066 = cljs.core.vals.call(null,inst_13065);
var inst_13067 = cljs.core.seq.call(null,inst_13066);
var inst_13068 = inst_13067;
var inst_13069 = null;
var inst_13070 = (0);
var inst_13071 = (0);
var state_13127__$1 = (function (){var statearr_13155 = state_13127;
(statearr_13155[(12)] = inst_13068);

(statearr_13155[(13)] = inst_13071);

(statearr_13155[(15)] = inst_13070);

(statearr_13155[(16)] = inst_13069);

return statearr_13155;
})();
var statearr_13156_13201 = state_13127__$1;
(statearr_13156_13201[(2)] = null);

(statearr_13156_13201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (14))){
var state_13127__$1 = state_13127;
var statearr_13160_13202 = state_13127__$1;
(statearr_13160_13202[(2)] = null);

(statearr_13160_13202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (16))){
var inst_13082 = (state_13127[(10)]);
var inst_13086 = cljs.core.chunk_first.call(null,inst_13082);
var inst_13087 = cljs.core.chunk_rest.call(null,inst_13082);
var inst_13088 = cljs.core.count.call(null,inst_13086);
var inst_13068 = inst_13087;
var inst_13069 = inst_13086;
var inst_13070 = inst_13088;
var inst_13071 = (0);
var state_13127__$1 = (function (){var statearr_13161 = state_13127;
(statearr_13161[(12)] = inst_13068);

(statearr_13161[(13)] = inst_13071);

(statearr_13161[(15)] = inst_13070);

(statearr_13161[(16)] = inst_13069);

return statearr_13161;
})();
var statearr_13162_13203 = state_13127__$1;
(statearr_13162_13203[(2)] = null);

(statearr_13162_13203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (10))){
var inst_13068 = (state_13127[(12)]);
var inst_13071 = (state_13127[(13)]);
var inst_13070 = (state_13127[(15)]);
var inst_13069 = (state_13127[(16)]);
var inst_13076 = cljs.core._nth.call(null,inst_13069,inst_13071);
var inst_13077 = cljs.core.async.muxch_STAR_.call(null,inst_13076);
var inst_13078 = cljs.core.async.close_BANG_.call(null,inst_13077);
var inst_13079 = (inst_13071 + (1));
var tmp13157 = inst_13068;
var tmp13158 = inst_13070;
var tmp13159 = inst_13069;
var inst_13068__$1 = tmp13157;
var inst_13069__$1 = tmp13159;
var inst_13070__$1 = tmp13158;
var inst_13071__$1 = inst_13079;
var state_13127__$1 = (function (){var statearr_13163 = state_13127;
(statearr_13163[(17)] = inst_13078);

(statearr_13163[(12)] = inst_13068__$1);

(statearr_13163[(13)] = inst_13071__$1);

(statearr_13163[(15)] = inst_13070__$1);

(statearr_13163[(16)] = inst_13069__$1);

return statearr_13163;
})();
var statearr_13164_13204 = state_13127__$1;
(statearr_13164_13204[(2)] = null);

(statearr_13164_13204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (18))){
var inst_13097 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13165_13205 = state_13127__$1;
(statearr_13165_13205[(2)] = inst_13097);

(statearr_13165_13205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (8))){
var inst_13071 = (state_13127[(13)]);
var inst_13070 = (state_13127[(15)]);
var inst_13073 = (inst_13071 < inst_13070);
var inst_13074 = inst_13073;
var state_13127__$1 = state_13127;
if(cljs.core.truth_(inst_13074)){
var statearr_13166_13206 = state_13127__$1;
(statearr_13166_13206[(1)] = (10));

} else {
var statearr_13167_13207 = state_13127__$1;
(statearr_13167_13207[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13179,mults,ensure_mult,p))
;
return ((function (switch__7507__auto__,c__7572__auto___13179,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13171[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13171[(1)] = (1));

return statearr_13171;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13127){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13172){if((e13172 instanceof Object)){
var ex__7511__auto__ = e13172;
var statearr_13173_13208 = state_13127;
(statearr_13173_13208[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13209 = state_13127;
state_13127 = G__13209;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13179,mults,ensure_mult,p))
})();
var state__7574__auto__ = (function (){var statearr_13174 = f__7573__auto__.call(null);
(statearr_13174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13179);

return statearr_13174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13179,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13210 = [];
var len__5638__auto___13213 = arguments.length;
var i__5639__auto___13214 = (0);
while(true){
if((i__5639__auto___13214 < len__5638__auto___13213)){
args13210.push((arguments[i__5639__auto___13214]));

var G__13215 = (i__5639__auto___13214 + (1));
i__5639__auto___13214 = G__13215;
continue;
} else {
}
break;
}

var G__13212 = args13210.length;
switch (G__13212) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13210.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13217 = [];
var len__5638__auto___13220 = arguments.length;
var i__5639__auto___13221 = (0);
while(true){
if((i__5639__auto___13221 < len__5638__auto___13220)){
args13217.push((arguments[i__5639__auto___13221]));

var G__13222 = (i__5639__auto___13221 + (1));
i__5639__auto___13221 = G__13222;
continue;
} else {
}
break;
}

var G__13219 = args13217.length;
switch (G__13219) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13217.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13224 = [];
var len__5638__auto___13295 = arguments.length;
var i__5639__auto___13296 = (0);
while(true){
if((i__5639__auto___13296 < len__5638__auto___13295)){
args13224.push((arguments[i__5639__auto___13296]));

var G__13297 = (i__5639__auto___13296 + (1));
i__5639__auto___13296 = G__13297;
continue;
} else {
}
break;
}

var G__13226 = args13224.length;
switch (G__13226) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13224.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7572__auto___13299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13265){
var state_val_13266 = (state_13265[(1)]);
if((state_val_13266 === (7))){
var state_13265__$1 = state_13265;
var statearr_13267_13300 = state_13265__$1;
(statearr_13267_13300[(2)] = null);

(statearr_13267_13300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (1))){
var state_13265__$1 = state_13265;
var statearr_13268_13301 = state_13265__$1;
(statearr_13268_13301[(2)] = null);

(statearr_13268_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (4))){
var inst_13229 = (state_13265[(7)]);
var inst_13231 = (inst_13229 < cnt);
var state_13265__$1 = state_13265;
if(cljs.core.truth_(inst_13231)){
var statearr_13269_13302 = state_13265__$1;
(statearr_13269_13302[(1)] = (6));

} else {
var statearr_13270_13303 = state_13265__$1;
(statearr_13270_13303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (15))){
var inst_13261 = (state_13265[(2)]);
var state_13265__$1 = state_13265;
var statearr_13271_13304 = state_13265__$1;
(statearr_13271_13304[(2)] = inst_13261);

(statearr_13271_13304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (13))){
var inst_13254 = cljs.core.async.close_BANG_.call(null,out);
var state_13265__$1 = state_13265;
var statearr_13272_13305 = state_13265__$1;
(statearr_13272_13305[(2)] = inst_13254);

(statearr_13272_13305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (6))){
var state_13265__$1 = state_13265;
var statearr_13273_13306 = state_13265__$1;
(statearr_13273_13306[(2)] = null);

(statearr_13273_13306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (3))){
var inst_13263 = (state_13265[(2)]);
var state_13265__$1 = state_13265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13265__$1,inst_13263);
} else {
if((state_val_13266 === (12))){
var inst_13251 = (state_13265[(8)]);
var inst_13251__$1 = (state_13265[(2)]);
var inst_13252 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13251__$1);
var state_13265__$1 = (function (){var statearr_13274 = state_13265;
(statearr_13274[(8)] = inst_13251__$1);

return statearr_13274;
})();
if(cljs.core.truth_(inst_13252)){
var statearr_13275_13307 = state_13265__$1;
(statearr_13275_13307[(1)] = (13));

} else {
var statearr_13276_13308 = state_13265__$1;
(statearr_13276_13308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (2))){
var inst_13228 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13229 = (0);
var state_13265__$1 = (function (){var statearr_13277 = state_13265;
(statearr_13277[(7)] = inst_13229);

(statearr_13277[(9)] = inst_13228);

return statearr_13277;
})();
var statearr_13278_13309 = state_13265__$1;
(statearr_13278_13309[(2)] = null);

(statearr_13278_13309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (11))){
var inst_13229 = (state_13265[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13265,(10),Object,null,(9));
var inst_13238 = chs__$1.call(null,inst_13229);
var inst_13239 = done.call(null,inst_13229);
var inst_13240 = cljs.core.async.take_BANG_.call(null,inst_13238,inst_13239);
var state_13265__$1 = state_13265;
var statearr_13279_13310 = state_13265__$1;
(statearr_13279_13310[(2)] = inst_13240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (9))){
var inst_13229 = (state_13265[(7)]);
var inst_13242 = (state_13265[(2)]);
var inst_13243 = (inst_13229 + (1));
var inst_13229__$1 = inst_13243;
var state_13265__$1 = (function (){var statearr_13280 = state_13265;
(statearr_13280[(7)] = inst_13229__$1);

(statearr_13280[(10)] = inst_13242);

return statearr_13280;
})();
var statearr_13281_13311 = state_13265__$1;
(statearr_13281_13311[(2)] = null);

(statearr_13281_13311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (5))){
var inst_13249 = (state_13265[(2)]);
var state_13265__$1 = (function (){var statearr_13282 = state_13265;
(statearr_13282[(11)] = inst_13249);

return statearr_13282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13265__$1,(12),dchan);
} else {
if((state_val_13266 === (14))){
var inst_13251 = (state_13265[(8)]);
var inst_13256 = cljs.core.apply.call(null,f,inst_13251);
var state_13265__$1 = state_13265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13265__$1,(16),out,inst_13256);
} else {
if((state_val_13266 === (16))){
var inst_13258 = (state_13265[(2)]);
var state_13265__$1 = (function (){var statearr_13283 = state_13265;
(statearr_13283[(12)] = inst_13258);

return statearr_13283;
})();
var statearr_13284_13312 = state_13265__$1;
(statearr_13284_13312[(2)] = null);

(statearr_13284_13312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (10))){
var inst_13233 = (state_13265[(2)]);
var inst_13234 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13265__$1 = (function (){var statearr_13285 = state_13265;
(statearr_13285[(13)] = inst_13233);

return statearr_13285;
})();
var statearr_13286_13313 = state_13265__$1;
(statearr_13286_13313[(2)] = inst_13234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13266 === (8))){
var inst_13247 = (state_13265[(2)]);
var state_13265__$1 = state_13265;
var statearr_13287_13314 = state_13265__$1;
(statearr_13287_13314[(2)] = inst_13247);

(statearr_13287_13314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13299,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7507__auto__,c__7572__auto___13299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13291[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13291[(1)] = (1));

return statearr_13291;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13265){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13292){if((e13292 instanceof Object)){
var ex__7511__auto__ = e13292;
var statearr_13293_13315 = state_13265;
(statearr_13293_13315[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13316 = state_13265;
state_13265 = G__13316;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13299,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7574__auto__ = (function (){var statearr_13294 = f__7573__auto__.call(null);
(statearr_13294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13299);

return statearr_13294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13299,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args13318 = [];
var len__5638__auto___13374 = arguments.length;
var i__5639__auto___13375 = (0);
while(true){
if((i__5639__auto___13375 < len__5638__auto___13374)){
args13318.push((arguments[i__5639__auto___13375]));

var G__13376 = (i__5639__auto___13375 + (1));
i__5639__auto___13375 = G__13376;
continue;
} else {
}
break;
}

var G__13320 = args13318.length;
switch (G__13320) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13318.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7572__auto___13378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13378,out){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13378,out){
return (function (state_13350){
var state_val_13351 = (state_13350[(1)]);
if((state_val_13351 === (7))){
var inst_13329 = (state_13350[(7)]);
var inst_13330 = (state_13350[(8)]);
var inst_13329__$1 = (state_13350[(2)]);
var inst_13330__$1 = cljs.core.nth.call(null,inst_13329__$1,(0),null);
var inst_13331 = cljs.core.nth.call(null,inst_13329__$1,(1),null);
var inst_13332 = (inst_13330__$1 == null);
var state_13350__$1 = (function (){var statearr_13352 = state_13350;
(statearr_13352[(9)] = inst_13331);

(statearr_13352[(7)] = inst_13329__$1);

(statearr_13352[(8)] = inst_13330__$1);

return statearr_13352;
})();
if(cljs.core.truth_(inst_13332)){
var statearr_13353_13379 = state_13350__$1;
(statearr_13353_13379[(1)] = (8));

} else {
var statearr_13354_13380 = state_13350__$1;
(statearr_13354_13380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (1))){
var inst_13321 = cljs.core.vec.call(null,chs);
var inst_13322 = inst_13321;
var state_13350__$1 = (function (){var statearr_13355 = state_13350;
(statearr_13355[(10)] = inst_13322);

return statearr_13355;
})();
var statearr_13356_13381 = state_13350__$1;
(statearr_13356_13381[(2)] = null);

(statearr_13356_13381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (4))){
var inst_13322 = (state_13350[(10)]);
var state_13350__$1 = state_13350;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13350__$1,(7),inst_13322);
} else {
if((state_val_13351 === (6))){
var inst_13346 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
var statearr_13357_13382 = state_13350__$1;
(statearr_13357_13382[(2)] = inst_13346);

(statearr_13357_13382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (3))){
var inst_13348 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13350__$1,inst_13348);
} else {
if((state_val_13351 === (2))){
var inst_13322 = (state_13350[(10)]);
var inst_13324 = cljs.core.count.call(null,inst_13322);
var inst_13325 = (inst_13324 > (0));
var state_13350__$1 = state_13350;
if(cljs.core.truth_(inst_13325)){
var statearr_13359_13383 = state_13350__$1;
(statearr_13359_13383[(1)] = (4));

} else {
var statearr_13360_13384 = state_13350__$1;
(statearr_13360_13384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (11))){
var inst_13322 = (state_13350[(10)]);
var inst_13339 = (state_13350[(2)]);
var tmp13358 = inst_13322;
var inst_13322__$1 = tmp13358;
var state_13350__$1 = (function (){var statearr_13361 = state_13350;
(statearr_13361[(11)] = inst_13339);

(statearr_13361[(10)] = inst_13322__$1);

return statearr_13361;
})();
var statearr_13362_13385 = state_13350__$1;
(statearr_13362_13385[(2)] = null);

(statearr_13362_13385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (9))){
var inst_13330 = (state_13350[(8)]);
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13350__$1,(11),out,inst_13330);
} else {
if((state_val_13351 === (5))){
var inst_13344 = cljs.core.async.close_BANG_.call(null,out);
var state_13350__$1 = state_13350;
var statearr_13363_13386 = state_13350__$1;
(statearr_13363_13386[(2)] = inst_13344);

(statearr_13363_13386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (10))){
var inst_13342 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
var statearr_13364_13387 = state_13350__$1;
(statearr_13364_13387[(2)] = inst_13342);

(statearr_13364_13387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (8))){
var inst_13331 = (state_13350[(9)]);
var inst_13329 = (state_13350[(7)]);
var inst_13322 = (state_13350[(10)]);
var inst_13330 = (state_13350[(8)]);
var inst_13334 = (function (){var cs = inst_13322;
var vec__13327 = inst_13329;
var v = inst_13330;
var c = inst_13331;
return ((function (cs,vec__13327,v,c,inst_13331,inst_13329,inst_13322,inst_13330,state_val_13351,c__7572__auto___13378,out){
return (function (p1__13317_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13317_SHARP_);
});
;})(cs,vec__13327,v,c,inst_13331,inst_13329,inst_13322,inst_13330,state_val_13351,c__7572__auto___13378,out))
})();
var inst_13335 = cljs.core.filterv.call(null,inst_13334,inst_13322);
var inst_13322__$1 = inst_13335;
var state_13350__$1 = (function (){var statearr_13365 = state_13350;
(statearr_13365[(10)] = inst_13322__$1);

return statearr_13365;
})();
var statearr_13366_13388 = state_13350__$1;
(statearr_13366_13388[(2)] = null);

(statearr_13366_13388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13378,out))
;
return ((function (switch__7507__auto__,c__7572__auto___13378,out){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13370[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13370[(1)] = (1));

return statearr_13370;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13350){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13371){if((e13371 instanceof Object)){
var ex__7511__auto__ = e13371;
var statearr_13372_13389 = state_13350;
(statearr_13372_13389[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13390 = state_13350;
state_13350 = G__13390;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13378,out))
})();
var state__7574__auto__ = (function (){var statearr_13373 = f__7573__auto__.call(null);
(statearr_13373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13378);

return statearr_13373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13378,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args13391 = [];
var len__5638__auto___13440 = arguments.length;
var i__5639__auto___13441 = (0);
while(true){
if((i__5639__auto___13441 < len__5638__auto___13440)){
args13391.push((arguments[i__5639__auto___13441]));

var G__13442 = (i__5639__auto___13441 + (1));
i__5639__auto___13441 = G__13442;
continue;
} else {
}
break;
}

var G__13393 = args13391.length;
switch (G__13393) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13391.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7572__auto___13444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13444,out){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13444,out){
return (function (state_13417){
var state_val_13418 = (state_13417[(1)]);
if((state_val_13418 === (7))){
var inst_13399 = (state_13417[(7)]);
var inst_13399__$1 = (state_13417[(2)]);
var inst_13400 = (inst_13399__$1 == null);
var inst_13401 = cljs.core.not.call(null,inst_13400);
var state_13417__$1 = (function (){var statearr_13419 = state_13417;
(statearr_13419[(7)] = inst_13399__$1);

return statearr_13419;
})();
if(inst_13401){
var statearr_13420_13445 = state_13417__$1;
(statearr_13420_13445[(1)] = (8));

} else {
var statearr_13421_13446 = state_13417__$1;
(statearr_13421_13446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (1))){
var inst_13394 = (0);
var state_13417__$1 = (function (){var statearr_13422 = state_13417;
(statearr_13422[(8)] = inst_13394);

return statearr_13422;
})();
var statearr_13423_13447 = state_13417__$1;
(statearr_13423_13447[(2)] = null);

(statearr_13423_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (4))){
var state_13417__$1 = state_13417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13417__$1,(7),ch);
} else {
if((state_val_13418 === (6))){
var inst_13412 = (state_13417[(2)]);
var state_13417__$1 = state_13417;
var statearr_13424_13448 = state_13417__$1;
(statearr_13424_13448[(2)] = inst_13412);

(statearr_13424_13448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (3))){
var inst_13414 = (state_13417[(2)]);
var inst_13415 = cljs.core.async.close_BANG_.call(null,out);
var state_13417__$1 = (function (){var statearr_13425 = state_13417;
(statearr_13425[(9)] = inst_13414);

return statearr_13425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13417__$1,inst_13415);
} else {
if((state_val_13418 === (2))){
var inst_13394 = (state_13417[(8)]);
var inst_13396 = (inst_13394 < n);
var state_13417__$1 = state_13417;
if(cljs.core.truth_(inst_13396)){
var statearr_13426_13449 = state_13417__$1;
(statearr_13426_13449[(1)] = (4));

} else {
var statearr_13427_13450 = state_13417__$1;
(statearr_13427_13450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (11))){
var inst_13394 = (state_13417[(8)]);
var inst_13404 = (state_13417[(2)]);
var inst_13405 = (inst_13394 + (1));
var inst_13394__$1 = inst_13405;
var state_13417__$1 = (function (){var statearr_13428 = state_13417;
(statearr_13428[(8)] = inst_13394__$1);

(statearr_13428[(10)] = inst_13404);

return statearr_13428;
})();
var statearr_13429_13451 = state_13417__$1;
(statearr_13429_13451[(2)] = null);

(statearr_13429_13451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (9))){
var state_13417__$1 = state_13417;
var statearr_13430_13452 = state_13417__$1;
(statearr_13430_13452[(2)] = null);

(statearr_13430_13452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (5))){
var state_13417__$1 = state_13417;
var statearr_13431_13453 = state_13417__$1;
(statearr_13431_13453[(2)] = null);

(statearr_13431_13453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (10))){
var inst_13409 = (state_13417[(2)]);
var state_13417__$1 = state_13417;
var statearr_13432_13454 = state_13417__$1;
(statearr_13432_13454[(2)] = inst_13409);

(statearr_13432_13454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13418 === (8))){
var inst_13399 = (state_13417[(7)]);
var state_13417__$1 = state_13417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13417__$1,(11),out,inst_13399);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13444,out))
;
return ((function (switch__7507__auto__,c__7572__auto___13444,out){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13436[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13436[(1)] = (1));

return statearr_13436;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13417){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13437){if((e13437 instanceof Object)){
var ex__7511__auto__ = e13437;
var statearr_13438_13455 = state_13417;
(statearr_13438_13455[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13456 = state_13417;
state_13417 = G__13456;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13444,out))
})();
var state__7574__auto__ = (function (){var statearr_13439 = f__7573__auto__.call(null);
(statearr_13439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13444);

return statearr_13439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13444,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13464 = (function (map_LT_,f,ch,meta13465){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13465 = meta13465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13466,meta13465__$1){
var self__ = this;
var _13466__$1 = this;
return (new cljs.core.async.t_cljs$core$async13464(self__.map_LT_,self__.f,self__.ch,meta13465__$1));
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13466){
var self__ = this;
var _13466__$1 = this;
return self__.meta13465;
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13467 = (function (map_LT_,f,ch,meta13465,_,fn1,meta13468){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13465 = meta13465;
this._ = _;
this.fn1 = fn1;
this.meta13468 = meta13468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13469,meta13468__$1){
var self__ = this;
var _13469__$1 = this;
return (new cljs.core.async.t_cljs$core$async13467(self__.map_LT_,self__.f,self__.ch,self__.meta13465,self__._,self__.fn1,meta13468__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13469){
var self__ = this;
var _13469__$1 = this;
return self__.meta13468;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13467.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13457_SHARP_){
return f1.call(null,(((p1__13457_SHARP_ == null))?null:self__.f.call(null,p1__13457_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13467.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13465","meta13465",1778848916,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13464","cljs.core.async/t_cljs$core$async13464",-538054406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13468","meta13468",-1529646529,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13467";

cljs.core.async.t_cljs$core$async13467.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async13467");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13467 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13467(map_LT___$1,f__$1,ch__$1,meta13465__$1,___$2,fn1__$1,meta13468){
return (new cljs.core.async.t_cljs$core$async13467(map_LT___$1,f__$1,ch__$1,meta13465__$1,___$2,fn1__$1,meta13468));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13467(self__.map_LT_,self__.f,self__.ch,self__.meta13465,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4568__auto__ = ret;
if(cljs.core.truth_(and__4568__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4568__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13465","meta13465",1778848916,null)], null);
});

cljs.core.async.t_cljs$core$async13464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13464";

cljs.core.async.t_cljs$core$async13464.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async13464");
});

cljs.core.async.__GT_t_cljs$core$async13464 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13464(map_LT___$1,f__$1,ch__$1,meta13465){
return (new cljs.core.async.t_cljs$core$async13464(map_LT___$1,f__$1,ch__$1,meta13465));
});

}

return (new cljs.core.async.t_cljs$core$async13464(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13473 = (function (map_GT_,f,ch,meta13474){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13474 = meta13474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13475,meta13474__$1){
var self__ = this;
var _13475__$1 = this;
return (new cljs.core.async.t_cljs$core$async13473(self__.map_GT_,self__.f,self__.ch,meta13474__$1));
});

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13475){
var self__ = this;
var _13475__$1 = this;
return self__.meta13474;
});

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13474","meta13474",-1934434827,null)], null);
});

cljs.core.async.t_cljs$core$async13473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13473";

cljs.core.async.t_cljs$core$async13473.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async13473");
});

cljs.core.async.__GT_t_cljs$core$async13473 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13473(map_GT___$1,f__$1,ch__$1,meta13474){
return (new cljs.core.async.t_cljs$core$async13473(map_GT___$1,f__$1,ch__$1,meta13474));
});

}

return (new cljs.core.async.t_cljs$core$async13473(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13479 = (function (filter_GT_,p,ch,meta13480){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13480 = meta13480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13481,meta13480__$1){
var self__ = this;
var _13481__$1 = this;
return (new cljs.core.async.t_cljs$core$async13479(self__.filter_GT_,self__.p,self__.ch,meta13480__$1));
});

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13481){
var self__ = this;
var _13481__$1 = this;
return self__.meta13480;
});

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13480","meta13480",1150723195,null)], null);
});

cljs.core.async.t_cljs$core$async13479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13479";

cljs.core.async.t_cljs$core$async13479.cljs$lang$ctorPrWriter = (function (this__5178__auto__,writer__5179__auto__,opt__5180__auto__){
return cljs.core._write.call(null,writer__5179__auto__,"cljs.core.async/t_cljs$core$async13479");
});

cljs.core.async.__GT_t_cljs$core$async13479 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13479(filter_GT___$1,p__$1,ch__$1,meta13480){
return (new cljs.core.async.t_cljs$core$async13479(filter_GT___$1,p__$1,ch__$1,meta13480));
});

}

return (new cljs.core.async.t_cljs$core$async13479(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13482 = [];
var len__5638__auto___13526 = arguments.length;
var i__5639__auto___13527 = (0);
while(true){
if((i__5639__auto___13527 < len__5638__auto___13526)){
args13482.push((arguments[i__5639__auto___13527]));

var G__13528 = (i__5639__auto___13527 + (1));
i__5639__auto___13527 = G__13528;
continue;
} else {
}
break;
}

var G__13484 = args13482.length;
switch (G__13484) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13482.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7572__auto___13530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13530,out){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13530,out){
return (function (state_13505){
var state_val_13506 = (state_13505[(1)]);
if((state_val_13506 === (7))){
var inst_13501 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
var statearr_13507_13531 = state_13505__$1;
(statearr_13507_13531[(2)] = inst_13501);

(statearr_13507_13531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (1))){
var state_13505__$1 = state_13505;
var statearr_13508_13532 = state_13505__$1;
(statearr_13508_13532[(2)] = null);

(statearr_13508_13532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (4))){
var inst_13487 = (state_13505[(7)]);
var inst_13487__$1 = (state_13505[(2)]);
var inst_13488 = (inst_13487__$1 == null);
var state_13505__$1 = (function (){var statearr_13509 = state_13505;
(statearr_13509[(7)] = inst_13487__$1);

return statearr_13509;
})();
if(cljs.core.truth_(inst_13488)){
var statearr_13510_13533 = state_13505__$1;
(statearr_13510_13533[(1)] = (5));

} else {
var statearr_13511_13534 = state_13505__$1;
(statearr_13511_13534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (6))){
var inst_13487 = (state_13505[(7)]);
var inst_13492 = p.call(null,inst_13487);
var state_13505__$1 = state_13505;
if(cljs.core.truth_(inst_13492)){
var statearr_13512_13535 = state_13505__$1;
(statearr_13512_13535[(1)] = (8));

} else {
var statearr_13513_13536 = state_13505__$1;
(statearr_13513_13536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (3))){
var inst_13503 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13505__$1,inst_13503);
} else {
if((state_val_13506 === (2))){
var state_13505__$1 = state_13505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13505__$1,(4),ch);
} else {
if((state_val_13506 === (11))){
var inst_13495 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
var statearr_13514_13537 = state_13505__$1;
(statearr_13514_13537[(2)] = inst_13495);

(statearr_13514_13537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (9))){
var state_13505__$1 = state_13505;
var statearr_13515_13538 = state_13505__$1;
(statearr_13515_13538[(2)] = null);

(statearr_13515_13538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (5))){
var inst_13490 = cljs.core.async.close_BANG_.call(null,out);
var state_13505__$1 = state_13505;
var statearr_13516_13539 = state_13505__$1;
(statearr_13516_13539[(2)] = inst_13490);

(statearr_13516_13539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (10))){
var inst_13498 = (state_13505[(2)]);
var state_13505__$1 = (function (){var statearr_13517 = state_13505;
(statearr_13517[(8)] = inst_13498);

return statearr_13517;
})();
var statearr_13518_13540 = state_13505__$1;
(statearr_13518_13540[(2)] = null);

(statearr_13518_13540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (8))){
var inst_13487 = (state_13505[(7)]);
var state_13505__$1 = state_13505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13505__$1,(11),out,inst_13487);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13530,out))
;
return ((function (switch__7507__auto__,c__7572__auto___13530,out){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13522 = [null,null,null,null,null,null,null,null,null];
(statearr_13522[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13522[(1)] = (1));

return statearr_13522;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13505){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13523){if((e13523 instanceof Object)){
var ex__7511__auto__ = e13523;
var statearr_13524_13541 = state_13505;
(statearr_13524_13541[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13542 = state_13505;
state_13505 = G__13542;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13530,out))
})();
var state__7574__auto__ = (function (){var statearr_13525 = f__7573__auto__.call(null);
(statearr_13525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13530);

return statearr_13525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13530,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13543 = [];
var len__5638__auto___13546 = arguments.length;
var i__5639__auto___13547 = (0);
while(true){
if((i__5639__auto___13547 < len__5638__auto___13546)){
args13543.push((arguments[i__5639__auto___13547]));

var G__13548 = (i__5639__auto___13547 + (1));
i__5639__auto___13547 = G__13548;
continue;
} else {
}
break;
}

var G__13545 = args13543.length;
switch (G__13545) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13543.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto__){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto__){
return (function (state_13715){
var state_val_13716 = (state_13715[(1)]);
if((state_val_13716 === (7))){
var inst_13711 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13717_13758 = state_13715__$1;
(statearr_13717_13758[(2)] = inst_13711);

(statearr_13717_13758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (20))){
var inst_13681 = (state_13715[(7)]);
var inst_13692 = (state_13715[(2)]);
var inst_13693 = cljs.core.next.call(null,inst_13681);
var inst_13667 = inst_13693;
var inst_13668 = null;
var inst_13669 = (0);
var inst_13670 = (0);
var state_13715__$1 = (function (){var statearr_13718 = state_13715;
(statearr_13718[(8)] = inst_13668);

(statearr_13718[(9)] = inst_13667);

(statearr_13718[(10)] = inst_13670);

(statearr_13718[(11)] = inst_13692);

(statearr_13718[(12)] = inst_13669);

return statearr_13718;
})();
var statearr_13719_13759 = state_13715__$1;
(statearr_13719_13759[(2)] = null);

(statearr_13719_13759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (1))){
var state_13715__$1 = state_13715;
var statearr_13720_13760 = state_13715__$1;
(statearr_13720_13760[(2)] = null);

(statearr_13720_13760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (4))){
var inst_13656 = (state_13715[(13)]);
var inst_13656__$1 = (state_13715[(2)]);
var inst_13657 = (inst_13656__$1 == null);
var state_13715__$1 = (function (){var statearr_13721 = state_13715;
(statearr_13721[(13)] = inst_13656__$1);

return statearr_13721;
})();
if(cljs.core.truth_(inst_13657)){
var statearr_13722_13761 = state_13715__$1;
(statearr_13722_13761[(1)] = (5));

} else {
var statearr_13723_13762 = state_13715__$1;
(statearr_13723_13762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (15))){
var state_13715__$1 = state_13715;
var statearr_13727_13763 = state_13715__$1;
(statearr_13727_13763[(2)] = null);

(statearr_13727_13763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (21))){
var state_13715__$1 = state_13715;
var statearr_13728_13764 = state_13715__$1;
(statearr_13728_13764[(2)] = null);

(statearr_13728_13764[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (13))){
var inst_13668 = (state_13715[(8)]);
var inst_13667 = (state_13715[(9)]);
var inst_13670 = (state_13715[(10)]);
var inst_13669 = (state_13715[(12)]);
var inst_13677 = (state_13715[(2)]);
var inst_13678 = (inst_13670 + (1));
var tmp13724 = inst_13668;
var tmp13725 = inst_13667;
var tmp13726 = inst_13669;
var inst_13667__$1 = tmp13725;
var inst_13668__$1 = tmp13724;
var inst_13669__$1 = tmp13726;
var inst_13670__$1 = inst_13678;
var state_13715__$1 = (function (){var statearr_13729 = state_13715;
(statearr_13729[(8)] = inst_13668__$1);

(statearr_13729[(9)] = inst_13667__$1);

(statearr_13729[(14)] = inst_13677);

(statearr_13729[(10)] = inst_13670__$1);

(statearr_13729[(12)] = inst_13669__$1);

return statearr_13729;
})();
var statearr_13730_13765 = state_13715__$1;
(statearr_13730_13765[(2)] = null);

(statearr_13730_13765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (22))){
var state_13715__$1 = state_13715;
var statearr_13731_13766 = state_13715__$1;
(statearr_13731_13766[(2)] = null);

(statearr_13731_13766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (6))){
var inst_13656 = (state_13715[(13)]);
var inst_13665 = f.call(null,inst_13656);
var inst_13666 = cljs.core.seq.call(null,inst_13665);
var inst_13667 = inst_13666;
var inst_13668 = null;
var inst_13669 = (0);
var inst_13670 = (0);
var state_13715__$1 = (function (){var statearr_13732 = state_13715;
(statearr_13732[(8)] = inst_13668);

(statearr_13732[(9)] = inst_13667);

(statearr_13732[(10)] = inst_13670);

(statearr_13732[(12)] = inst_13669);

return statearr_13732;
})();
var statearr_13733_13767 = state_13715__$1;
(statearr_13733_13767[(2)] = null);

(statearr_13733_13767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (17))){
var inst_13681 = (state_13715[(7)]);
var inst_13685 = cljs.core.chunk_first.call(null,inst_13681);
var inst_13686 = cljs.core.chunk_rest.call(null,inst_13681);
var inst_13687 = cljs.core.count.call(null,inst_13685);
var inst_13667 = inst_13686;
var inst_13668 = inst_13685;
var inst_13669 = inst_13687;
var inst_13670 = (0);
var state_13715__$1 = (function (){var statearr_13734 = state_13715;
(statearr_13734[(8)] = inst_13668);

(statearr_13734[(9)] = inst_13667);

(statearr_13734[(10)] = inst_13670);

(statearr_13734[(12)] = inst_13669);

return statearr_13734;
})();
var statearr_13735_13768 = state_13715__$1;
(statearr_13735_13768[(2)] = null);

(statearr_13735_13768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (3))){
var inst_13713 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13715__$1,inst_13713);
} else {
if((state_val_13716 === (12))){
var inst_13701 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13736_13769 = state_13715__$1;
(statearr_13736_13769[(2)] = inst_13701);

(statearr_13736_13769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (2))){
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13715__$1,(4),in$);
} else {
if((state_val_13716 === (23))){
var inst_13709 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13737_13770 = state_13715__$1;
(statearr_13737_13770[(2)] = inst_13709);

(statearr_13737_13770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (19))){
var inst_13696 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13738_13771 = state_13715__$1;
(statearr_13738_13771[(2)] = inst_13696);

(statearr_13738_13771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (11))){
var inst_13667 = (state_13715[(9)]);
var inst_13681 = (state_13715[(7)]);
var inst_13681__$1 = cljs.core.seq.call(null,inst_13667);
var state_13715__$1 = (function (){var statearr_13739 = state_13715;
(statearr_13739[(7)] = inst_13681__$1);

return statearr_13739;
})();
if(inst_13681__$1){
var statearr_13740_13772 = state_13715__$1;
(statearr_13740_13772[(1)] = (14));

} else {
var statearr_13741_13773 = state_13715__$1;
(statearr_13741_13773[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (9))){
var inst_13703 = (state_13715[(2)]);
var inst_13704 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13715__$1 = (function (){var statearr_13742 = state_13715;
(statearr_13742[(15)] = inst_13703);

return statearr_13742;
})();
if(cljs.core.truth_(inst_13704)){
var statearr_13743_13774 = state_13715__$1;
(statearr_13743_13774[(1)] = (21));

} else {
var statearr_13744_13775 = state_13715__$1;
(statearr_13744_13775[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (5))){
var inst_13659 = cljs.core.async.close_BANG_.call(null,out);
var state_13715__$1 = state_13715;
var statearr_13745_13776 = state_13715__$1;
(statearr_13745_13776[(2)] = inst_13659);

(statearr_13745_13776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (14))){
var inst_13681 = (state_13715[(7)]);
var inst_13683 = cljs.core.chunked_seq_QMARK_.call(null,inst_13681);
var state_13715__$1 = state_13715;
if(inst_13683){
var statearr_13746_13777 = state_13715__$1;
(statearr_13746_13777[(1)] = (17));

} else {
var statearr_13747_13778 = state_13715__$1;
(statearr_13747_13778[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (16))){
var inst_13699 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13748_13779 = state_13715__$1;
(statearr_13748_13779[(2)] = inst_13699);

(statearr_13748_13779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13716 === (10))){
var inst_13668 = (state_13715[(8)]);
var inst_13670 = (state_13715[(10)]);
var inst_13675 = cljs.core._nth.call(null,inst_13668,inst_13670);
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13715__$1,(13),out,inst_13675);
} else {
if((state_val_13716 === (18))){
var inst_13681 = (state_13715[(7)]);
var inst_13690 = cljs.core.first.call(null,inst_13681);
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13715__$1,(20),out,inst_13690);
} else {
if((state_val_13716 === (8))){
var inst_13670 = (state_13715[(10)]);
var inst_13669 = (state_13715[(12)]);
var inst_13672 = (inst_13670 < inst_13669);
var inst_13673 = inst_13672;
var state_13715__$1 = state_13715;
if(cljs.core.truth_(inst_13673)){
var statearr_13749_13780 = state_13715__$1;
(statearr_13749_13780[(1)] = (10));

} else {
var statearr_13750_13781 = state_13715__$1;
(statearr_13750_13781[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto__))
;
return ((function (switch__7507__auto__,c__7572__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7508__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7508__auto____0 = (function (){
var statearr_13754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13754[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7508__auto__);

(statearr_13754[(1)] = (1));

return statearr_13754;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7508__auto____1 = (function (state_13715){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13755){if((e13755 instanceof Object)){
var ex__7511__auto__ = e13755;
var statearr_13756_13782 = state_13715;
(statearr_13756_13782[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13783 = state_13715;
state_13715 = G__13783;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7508__auto__ = function(state_13715){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7508__auto____1.call(this,state_13715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7508__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7508__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto__))
})();
var state__7574__auto__ = (function (){var statearr_13757 = f__7573__auto__.call(null);
(statearr_13757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto__);

return statearr_13757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto__))
);

return c__7572__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13784 = [];
var len__5638__auto___13787 = arguments.length;
var i__5639__auto___13788 = (0);
while(true){
if((i__5639__auto___13788 < len__5638__auto___13787)){
args13784.push((arguments[i__5639__auto___13788]));

var G__13789 = (i__5639__auto___13788 + (1));
i__5639__auto___13788 = G__13789;
continue;
} else {
}
break;
}

var G__13786 = args13784.length;
switch (G__13786) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13784.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args13791 = [];
var len__5638__auto___13794 = arguments.length;
var i__5639__auto___13795 = (0);
while(true){
if((i__5639__auto___13795 < len__5638__auto___13794)){
args13791.push((arguments[i__5639__auto___13795]));

var G__13796 = (i__5639__auto___13795 + (1));
i__5639__auto___13795 = G__13796;
continue;
} else {
}
break;
}

var G__13793 = args13791.length;
switch (G__13793) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13791.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13798 = [];
var len__5638__auto___13849 = arguments.length;
var i__5639__auto___13850 = (0);
while(true){
if((i__5639__auto___13850 < len__5638__auto___13849)){
args13798.push((arguments[i__5639__auto___13850]));

var G__13851 = (i__5639__auto___13850 + (1));
i__5639__auto___13850 = G__13851;
continue;
} else {
}
break;
}

var G__13800 = args13798.length;
switch (G__13800) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13798.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7572__auto___13853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13853,out){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13853,out){
return (function (state_13824){
var state_val_13825 = (state_13824[(1)]);
if((state_val_13825 === (7))){
var inst_13819 = (state_13824[(2)]);
var state_13824__$1 = state_13824;
var statearr_13826_13854 = state_13824__$1;
(statearr_13826_13854[(2)] = inst_13819);

(statearr_13826_13854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (1))){
var inst_13801 = null;
var state_13824__$1 = (function (){var statearr_13827 = state_13824;
(statearr_13827[(7)] = inst_13801);

return statearr_13827;
})();
var statearr_13828_13855 = state_13824__$1;
(statearr_13828_13855[(2)] = null);

(statearr_13828_13855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (4))){
var inst_13804 = (state_13824[(8)]);
var inst_13804__$1 = (state_13824[(2)]);
var inst_13805 = (inst_13804__$1 == null);
var inst_13806 = cljs.core.not.call(null,inst_13805);
var state_13824__$1 = (function (){var statearr_13829 = state_13824;
(statearr_13829[(8)] = inst_13804__$1);

return statearr_13829;
})();
if(inst_13806){
var statearr_13830_13856 = state_13824__$1;
(statearr_13830_13856[(1)] = (5));

} else {
var statearr_13831_13857 = state_13824__$1;
(statearr_13831_13857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (6))){
var state_13824__$1 = state_13824;
var statearr_13832_13858 = state_13824__$1;
(statearr_13832_13858[(2)] = null);

(statearr_13832_13858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (3))){
var inst_13821 = (state_13824[(2)]);
var inst_13822 = cljs.core.async.close_BANG_.call(null,out);
var state_13824__$1 = (function (){var statearr_13833 = state_13824;
(statearr_13833[(9)] = inst_13821);

return statearr_13833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13824__$1,inst_13822);
} else {
if((state_val_13825 === (2))){
var state_13824__$1 = state_13824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13824__$1,(4),ch);
} else {
if((state_val_13825 === (11))){
var inst_13804 = (state_13824[(8)]);
var inst_13813 = (state_13824[(2)]);
var inst_13801 = inst_13804;
var state_13824__$1 = (function (){var statearr_13834 = state_13824;
(statearr_13834[(7)] = inst_13801);

(statearr_13834[(10)] = inst_13813);

return statearr_13834;
})();
var statearr_13835_13859 = state_13824__$1;
(statearr_13835_13859[(2)] = null);

(statearr_13835_13859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (9))){
var inst_13804 = (state_13824[(8)]);
var state_13824__$1 = state_13824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13824__$1,(11),out,inst_13804);
} else {
if((state_val_13825 === (5))){
var inst_13801 = (state_13824[(7)]);
var inst_13804 = (state_13824[(8)]);
var inst_13808 = cljs.core._EQ_.call(null,inst_13804,inst_13801);
var state_13824__$1 = state_13824;
if(inst_13808){
var statearr_13837_13860 = state_13824__$1;
(statearr_13837_13860[(1)] = (8));

} else {
var statearr_13838_13861 = state_13824__$1;
(statearr_13838_13861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (10))){
var inst_13816 = (state_13824[(2)]);
var state_13824__$1 = state_13824;
var statearr_13839_13862 = state_13824__$1;
(statearr_13839_13862[(2)] = inst_13816);

(statearr_13839_13862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13825 === (8))){
var inst_13801 = (state_13824[(7)]);
var tmp13836 = inst_13801;
var inst_13801__$1 = tmp13836;
var state_13824__$1 = (function (){var statearr_13840 = state_13824;
(statearr_13840[(7)] = inst_13801__$1);

return statearr_13840;
})();
var statearr_13841_13863 = state_13824__$1;
(statearr_13841_13863[(2)] = null);

(statearr_13841_13863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13853,out))
;
return ((function (switch__7507__auto__,c__7572__auto___13853,out){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13845[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13845[(1)] = (1));

return statearr_13845;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13824){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13846){if((e13846 instanceof Object)){
var ex__7511__auto__ = e13846;
var statearr_13847_13864 = state_13824;
(statearr_13847_13864[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13865 = state_13824;
state_13824 = G__13865;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13853,out))
})();
var state__7574__auto__ = (function (){var statearr_13848 = f__7573__auto__.call(null);
(statearr_13848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13853);

return statearr_13848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13853,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13866 = [];
var len__5638__auto___13936 = arguments.length;
var i__5639__auto___13937 = (0);
while(true){
if((i__5639__auto___13937 < len__5638__auto___13936)){
args13866.push((arguments[i__5639__auto___13937]));

var G__13938 = (i__5639__auto___13937 + (1));
i__5639__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var G__13868 = args13866.length;
switch (G__13868) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13866.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7572__auto___13940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___13940,out){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___13940,out){
return (function (state_13906){
var state_val_13907 = (state_13906[(1)]);
if((state_val_13907 === (7))){
var inst_13902 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
var statearr_13908_13941 = state_13906__$1;
(statearr_13908_13941[(2)] = inst_13902);

(statearr_13908_13941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (1))){
var inst_13869 = (new Array(n));
var inst_13870 = inst_13869;
var inst_13871 = (0);
var state_13906__$1 = (function (){var statearr_13909 = state_13906;
(statearr_13909[(7)] = inst_13870);

(statearr_13909[(8)] = inst_13871);

return statearr_13909;
})();
var statearr_13910_13942 = state_13906__$1;
(statearr_13910_13942[(2)] = null);

(statearr_13910_13942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (4))){
var inst_13874 = (state_13906[(9)]);
var inst_13874__$1 = (state_13906[(2)]);
var inst_13875 = (inst_13874__$1 == null);
var inst_13876 = cljs.core.not.call(null,inst_13875);
var state_13906__$1 = (function (){var statearr_13911 = state_13906;
(statearr_13911[(9)] = inst_13874__$1);

return statearr_13911;
})();
if(inst_13876){
var statearr_13912_13943 = state_13906__$1;
(statearr_13912_13943[(1)] = (5));

} else {
var statearr_13913_13944 = state_13906__$1;
(statearr_13913_13944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (15))){
var inst_13896 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
var statearr_13914_13945 = state_13906__$1;
(statearr_13914_13945[(2)] = inst_13896);

(statearr_13914_13945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (13))){
var state_13906__$1 = state_13906;
var statearr_13915_13946 = state_13906__$1;
(statearr_13915_13946[(2)] = null);

(statearr_13915_13946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (6))){
var inst_13871 = (state_13906[(8)]);
var inst_13892 = (inst_13871 > (0));
var state_13906__$1 = state_13906;
if(cljs.core.truth_(inst_13892)){
var statearr_13916_13947 = state_13906__$1;
(statearr_13916_13947[(1)] = (12));

} else {
var statearr_13917_13948 = state_13906__$1;
(statearr_13917_13948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (3))){
var inst_13904 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13906__$1,inst_13904);
} else {
if((state_val_13907 === (12))){
var inst_13870 = (state_13906[(7)]);
var inst_13894 = cljs.core.vec.call(null,inst_13870);
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13906__$1,(15),out,inst_13894);
} else {
if((state_val_13907 === (2))){
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13906__$1,(4),ch);
} else {
if((state_val_13907 === (11))){
var inst_13886 = (state_13906[(2)]);
var inst_13887 = (new Array(n));
var inst_13870 = inst_13887;
var inst_13871 = (0);
var state_13906__$1 = (function (){var statearr_13918 = state_13906;
(statearr_13918[(10)] = inst_13886);

(statearr_13918[(7)] = inst_13870);

(statearr_13918[(8)] = inst_13871);

return statearr_13918;
})();
var statearr_13919_13949 = state_13906__$1;
(statearr_13919_13949[(2)] = null);

(statearr_13919_13949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (9))){
var inst_13870 = (state_13906[(7)]);
var inst_13884 = cljs.core.vec.call(null,inst_13870);
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13906__$1,(11),out,inst_13884);
} else {
if((state_val_13907 === (5))){
var inst_13879 = (state_13906[(11)]);
var inst_13874 = (state_13906[(9)]);
var inst_13870 = (state_13906[(7)]);
var inst_13871 = (state_13906[(8)]);
var inst_13878 = (inst_13870[inst_13871] = inst_13874);
var inst_13879__$1 = (inst_13871 + (1));
var inst_13880 = (inst_13879__$1 < n);
var state_13906__$1 = (function (){var statearr_13920 = state_13906;
(statearr_13920[(11)] = inst_13879__$1);

(statearr_13920[(12)] = inst_13878);

return statearr_13920;
})();
if(cljs.core.truth_(inst_13880)){
var statearr_13921_13950 = state_13906__$1;
(statearr_13921_13950[(1)] = (8));

} else {
var statearr_13922_13951 = state_13906__$1;
(statearr_13922_13951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (14))){
var inst_13899 = (state_13906[(2)]);
var inst_13900 = cljs.core.async.close_BANG_.call(null,out);
var state_13906__$1 = (function (){var statearr_13924 = state_13906;
(statearr_13924[(13)] = inst_13899);

return statearr_13924;
})();
var statearr_13925_13952 = state_13906__$1;
(statearr_13925_13952[(2)] = inst_13900);

(statearr_13925_13952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (10))){
var inst_13890 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
var statearr_13926_13953 = state_13906__$1;
(statearr_13926_13953[(2)] = inst_13890);

(statearr_13926_13953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (8))){
var inst_13879 = (state_13906[(11)]);
var inst_13870 = (state_13906[(7)]);
var tmp13923 = inst_13870;
var inst_13870__$1 = tmp13923;
var inst_13871 = inst_13879;
var state_13906__$1 = (function (){var statearr_13927 = state_13906;
(statearr_13927[(7)] = inst_13870__$1);

(statearr_13927[(8)] = inst_13871);

return statearr_13927;
})();
var statearr_13928_13954 = state_13906__$1;
(statearr_13928_13954[(2)] = null);

(statearr_13928_13954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___13940,out))
;
return ((function (switch__7507__auto__,c__7572__auto___13940,out){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_13932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13932[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_13932[(1)] = (1));

return statearr_13932;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_13906){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_13906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e13933){if((e13933 instanceof Object)){
var ex__7511__auto__ = e13933;
var statearr_13934_13955 = state_13906;
(statearr_13934_13955[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13956 = state_13906;
state_13906 = G__13956;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_13906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_13906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___13940,out))
})();
var state__7574__auto__ = (function (){var statearr_13935 = f__7573__auto__.call(null);
(statearr_13935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___13940);

return statearr_13935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___13940,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13957 = [];
var len__5638__auto___14031 = arguments.length;
var i__5639__auto___14032 = (0);
while(true){
if((i__5639__auto___14032 < len__5638__auto___14031)){
args13957.push((arguments[i__5639__auto___14032]));

var G__14033 = (i__5639__auto___14032 + (1));
i__5639__auto___14032 = G__14033;
continue;
} else {
}
break;
}

var G__13959 = args13957.length;
switch (G__13959) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13957.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7572__auto___14035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7572__auto___14035,out){
return (function (){
var f__7573__auto__ = (function (){var switch__7507__auto__ = ((function (c__7572__auto___14035,out){
return (function (state_14001){
var state_val_14002 = (state_14001[(1)]);
if((state_val_14002 === (7))){
var inst_13997 = (state_14001[(2)]);
var state_14001__$1 = state_14001;
var statearr_14003_14036 = state_14001__$1;
(statearr_14003_14036[(2)] = inst_13997);

(statearr_14003_14036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (1))){
var inst_13960 = [];
var inst_13961 = inst_13960;
var inst_13962 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14001__$1 = (function (){var statearr_14004 = state_14001;
(statearr_14004[(7)] = inst_13962);

(statearr_14004[(8)] = inst_13961);

return statearr_14004;
})();
var statearr_14005_14037 = state_14001__$1;
(statearr_14005_14037[(2)] = null);

(statearr_14005_14037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (4))){
var inst_13965 = (state_14001[(9)]);
var inst_13965__$1 = (state_14001[(2)]);
var inst_13966 = (inst_13965__$1 == null);
var inst_13967 = cljs.core.not.call(null,inst_13966);
var state_14001__$1 = (function (){var statearr_14006 = state_14001;
(statearr_14006[(9)] = inst_13965__$1);

return statearr_14006;
})();
if(inst_13967){
var statearr_14007_14038 = state_14001__$1;
(statearr_14007_14038[(1)] = (5));

} else {
var statearr_14008_14039 = state_14001__$1;
(statearr_14008_14039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (15))){
var inst_13991 = (state_14001[(2)]);
var state_14001__$1 = state_14001;
var statearr_14009_14040 = state_14001__$1;
(statearr_14009_14040[(2)] = inst_13991);

(statearr_14009_14040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (13))){
var state_14001__$1 = state_14001;
var statearr_14010_14041 = state_14001__$1;
(statearr_14010_14041[(2)] = null);

(statearr_14010_14041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (6))){
var inst_13961 = (state_14001[(8)]);
var inst_13986 = inst_13961.length;
var inst_13987 = (inst_13986 > (0));
var state_14001__$1 = state_14001;
if(cljs.core.truth_(inst_13987)){
var statearr_14011_14042 = state_14001__$1;
(statearr_14011_14042[(1)] = (12));

} else {
var statearr_14012_14043 = state_14001__$1;
(statearr_14012_14043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (3))){
var inst_13999 = (state_14001[(2)]);
var state_14001__$1 = state_14001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14001__$1,inst_13999);
} else {
if((state_val_14002 === (12))){
var inst_13961 = (state_14001[(8)]);
var inst_13989 = cljs.core.vec.call(null,inst_13961);
var state_14001__$1 = state_14001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14001__$1,(15),out,inst_13989);
} else {
if((state_val_14002 === (2))){
var state_14001__$1 = state_14001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14001__$1,(4),ch);
} else {
if((state_val_14002 === (11))){
var inst_13965 = (state_14001[(9)]);
var inst_13969 = (state_14001[(10)]);
var inst_13979 = (state_14001[(2)]);
var inst_13980 = [];
var inst_13981 = inst_13980.push(inst_13965);
var inst_13961 = inst_13980;
var inst_13962 = inst_13969;
var state_14001__$1 = (function (){var statearr_14013 = state_14001;
(statearr_14013[(11)] = inst_13981);

(statearr_14013[(7)] = inst_13962);

(statearr_14013[(12)] = inst_13979);

(statearr_14013[(8)] = inst_13961);

return statearr_14013;
})();
var statearr_14014_14044 = state_14001__$1;
(statearr_14014_14044[(2)] = null);

(statearr_14014_14044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (9))){
var inst_13961 = (state_14001[(8)]);
var inst_13977 = cljs.core.vec.call(null,inst_13961);
var state_14001__$1 = state_14001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14001__$1,(11),out,inst_13977);
} else {
if((state_val_14002 === (5))){
var inst_13965 = (state_14001[(9)]);
var inst_13969 = (state_14001[(10)]);
var inst_13962 = (state_14001[(7)]);
var inst_13969__$1 = f.call(null,inst_13965);
var inst_13970 = cljs.core._EQ_.call(null,inst_13969__$1,inst_13962);
var inst_13971 = cljs.core.keyword_identical_QMARK_.call(null,inst_13962,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13972 = (inst_13970) || (inst_13971);
var state_14001__$1 = (function (){var statearr_14015 = state_14001;
(statearr_14015[(10)] = inst_13969__$1);

return statearr_14015;
})();
if(cljs.core.truth_(inst_13972)){
var statearr_14016_14045 = state_14001__$1;
(statearr_14016_14045[(1)] = (8));

} else {
var statearr_14017_14046 = state_14001__$1;
(statearr_14017_14046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (14))){
var inst_13994 = (state_14001[(2)]);
var inst_13995 = cljs.core.async.close_BANG_.call(null,out);
var state_14001__$1 = (function (){var statearr_14019 = state_14001;
(statearr_14019[(13)] = inst_13994);

return statearr_14019;
})();
var statearr_14020_14047 = state_14001__$1;
(statearr_14020_14047[(2)] = inst_13995);

(statearr_14020_14047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (10))){
var inst_13984 = (state_14001[(2)]);
var state_14001__$1 = state_14001;
var statearr_14021_14048 = state_14001__$1;
(statearr_14021_14048[(2)] = inst_13984);

(statearr_14021_14048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14002 === (8))){
var inst_13965 = (state_14001[(9)]);
var inst_13969 = (state_14001[(10)]);
var inst_13961 = (state_14001[(8)]);
var inst_13974 = inst_13961.push(inst_13965);
var tmp14018 = inst_13961;
var inst_13961__$1 = tmp14018;
var inst_13962 = inst_13969;
var state_14001__$1 = (function (){var statearr_14022 = state_14001;
(statearr_14022[(14)] = inst_13974);

(statearr_14022[(7)] = inst_13962);

(statearr_14022[(8)] = inst_13961__$1);

return statearr_14022;
})();
var statearr_14023_14049 = state_14001__$1;
(statearr_14023_14049[(2)] = null);

(statearr_14023_14049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7572__auto___14035,out))
;
return ((function (switch__7507__auto__,c__7572__auto___14035,out){
return (function() {
var cljs$core$async$state_machine__7508__auto__ = null;
var cljs$core$async$state_machine__7508__auto____0 = (function (){
var statearr_14027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14027[(0)] = cljs$core$async$state_machine__7508__auto__);

(statearr_14027[(1)] = (1));

return statearr_14027;
});
var cljs$core$async$state_machine__7508__auto____1 = (function (state_14001){
while(true){
var ret_value__7509__auto__ = (function (){try{while(true){
var result__7510__auto__ = switch__7507__auto__.call(null,state_14001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7510__auto__;
}
break;
}
}catch (e14028){if((e14028 instanceof Object)){
var ex__7511__auto__ = e14028;
var statearr_14029_14050 = state_14001;
(statearr_14029_14050[(5)] = ex__7511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14051 = state_14001;
state_14001 = G__14051;
continue;
} else {
return ret_value__7509__auto__;
}
break;
}
});
cljs$core$async$state_machine__7508__auto__ = function(state_14001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7508__auto____1.call(this,state_14001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7508__auto____0;
cljs$core$async$state_machine__7508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7508__auto____1;
return cljs$core$async$state_machine__7508__auto__;
})()
;})(switch__7507__auto__,c__7572__auto___14035,out))
})();
var state__7574__auto__ = (function (){var statearr_14030 = f__7573__auto__.call(null);
(statearr_14030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7572__auto___14035);

return statearr_14030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7574__auto__);
});})(c__7572__auto___14035,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map