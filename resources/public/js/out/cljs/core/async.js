// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32463 = [];
var len__9525__auto___32469 = arguments.length;
var i__9526__auto___32470 = (0);
while(true){
if((i__9526__auto___32470 < len__9525__auto___32469)){
args32463.push((arguments[i__9526__auto___32470]));

var G__32471 = (i__9526__auto___32470 + (1));
i__9526__auto___32470 = G__32471;
continue;
} else {
}
break;
}

var G__32465 = args32463.length;
switch (G__32465) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32463.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32466 = (function (f,blockable,meta32467){
this.f = f;
this.blockable = blockable;
this.meta32467 = meta32467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32468,meta32467__$1){
var self__ = this;
var _32468__$1 = this;
return (new cljs.core.async.t_cljs$core$async32466(self__.f,self__.blockable,meta32467__$1));
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32468){
var self__ = this;
var _32468__$1 = this;
return self__.meta32467;
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32467","meta32467",-556738159,null)], null);
});

cljs.core.async.t_cljs$core$async32466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32466";

cljs.core.async.t_cljs$core$async32466.cljs$lang$ctorPrWriter = (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async32466");
});

cljs.core.async.__GT_t_cljs$core$async32466 = (function cljs$core$async$__GT_t_cljs$core$async32466(f__$1,blockable__$1,meta32467){
return (new cljs.core.async.t_cljs$core$async32466(f__$1,blockable__$1,meta32467));
});

}

return (new cljs.core.async.t_cljs$core$async32466(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args32475 = [];
var len__9525__auto___32478 = arguments.length;
var i__9526__auto___32479 = (0);
while(true){
if((i__9526__auto___32479 < len__9525__auto___32478)){
args32475.push((arguments[i__9526__auto___32479]));

var G__32480 = (i__9526__auto___32479 + (1));
i__9526__auto___32479 = G__32480;
continue;
} else {
}
break;
}

var G__32477 = args32475.length;
switch (G__32477) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32475.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args32482 = [];
var len__9525__auto___32485 = arguments.length;
var i__9526__auto___32486 = (0);
while(true){
if((i__9526__auto___32486 < len__9525__auto___32485)){
args32482.push((arguments[i__9526__auto___32486]));

var G__32487 = (i__9526__auto___32486 + (1));
i__9526__auto___32486 = G__32487;
continue;
} else {
}
break;
}

var G__32484 = args32482.length;
switch (G__32484) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32482.length)].join('')));

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
var args32489 = [];
var len__9525__auto___32492 = arguments.length;
var i__9526__auto___32493 = (0);
while(true){
if((i__9526__auto___32493 < len__9525__auto___32492)){
args32489.push((arguments[i__9526__auto___32493]));

var G__32494 = (i__9526__auto___32493 + (1));
i__9526__auto___32493 = G__32494;
continue;
} else {
}
break;
}

var G__32491 = args32489.length;
switch (G__32491) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32489.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32496 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32496);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32496,ret){
return (function (){
return fn1.call(null,val_32496);
});})(val_32496,ret))
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
var args32497 = [];
var len__9525__auto___32500 = arguments.length;
var i__9526__auto___32501 = (0);
while(true){
if((i__9526__auto___32501 < len__9525__auto___32500)){
args32497.push((arguments[i__9526__auto___32501]));

var G__32502 = (i__9526__auto___32501 + (1));
i__9526__auto___32501 = G__32502;
continue;
} else {
}
break;
}

var G__32499 = args32497.length;
switch (G__32499) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32497.length)].join('')));

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
var n__9335__auto___32504 = n;
var x_32505 = (0);
while(true){
if((x_32505 < n__9335__auto___32504)){
(a[x_32505] = (0));

var G__32506 = (x_32505 + (1));
x_32505 = G__32506;
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

var G__32507 = (i + (1));
i = G__32507;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32511 = (function (flag,meta32512){
this.flag = flag;
this.meta32512 = meta32512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32513,meta32512__$1){
var self__ = this;
var _32513__$1 = this;
return (new cljs.core.async.t_cljs$core$async32511(self__.flag,meta32512__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32513){
var self__ = this;
var _32513__$1 = this;
return self__.meta32512;
});})(flag))
;

cljs.core.async.t_cljs$core$async32511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32511.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32512","meta32512",1611620874,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32511";

cljs.core.async.t_cljs$core$async32511.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async32511");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32511 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32511(flag__$1,meta32512){
return (new cljs.core.async.t_cljs$core$async32511(flag__$1,meta32512));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32511(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32517 = (function (flag,cb,meta32518){
this.flag = flag;
this.cb = cb;
this.meta32518 = meta32518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32519,meta32518__$1){
var self__ = this;
var _32519__$1 = this;
return (new cljs.core.async.t_cljs$core$async32517(self__.flag,self__.cb,meta32518__$1));
});

cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32519){
var self__ = this;
var _32519__$1 = this;
return self__.meta32518;
});

cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32518","meta32518",-1117070344,null)], null);
});

cljs.core.async.t_cljs$core$async32517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32517";

cljs.core.async.t_cljs$core$async32517.cljs$lang$ctorPrWriter = (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async32517");
});

cljs.core.async.__GT_t_cljs$core$async32517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32517(flag__$1,cb__$1,meta32518){
return (new cljs.core.async.t_cljs$core$async32517(flag__$1,cb__$1,meta32518));
});

}

return (new cljs.core.async.t_cljs$core$async32517(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32520_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32520_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32521_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32521_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8417__auto__ = wport;
if(cljs.core.truth_(or__8417__auto__)){
return or__8417__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32522 = (i + (1));
i = G__32522;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8417__auto__ = ret;
if(cljs.core.truth_(or__8417__auto__)){
return or__8417__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8405__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8405__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8405__auto__;
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
var args__9532__auto__ = [];
var len__9525__auto___32528 = arguments.length;
var i__9526__auto___32529 = (0);
while(true){
if((i__9526__auto___32529 < len__9525__auto___32528)){
args__9532__auto__.push((arguments[i__9526__auto___32529]));

var G__32530 = (i__9526__auto___32529 + (1));
i__9526__auto___32529 = G__32530;
continue;
} else {
}
break;
}

var argseq__9533__auto__ = ((((1) < args__9532__auto__.length))?(new cljs.core.IndexedSeq(args__9532__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9533__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32525){
var map__32526 = p__32525;
var map__32526__$1 = ((((!((map__32526 == null)))?((((map__32526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32526):map__32526);
var opts = map__32526__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32523){
var G__32524 = cljs.core.first.call(null,seq32523);
var seq32523__$1 = cljs.core.next.call(null,seq32523);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32524,seq32523__$1);
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
var args32531 = [];
var len__9525__auto___32581 = arguments.length;
var i__9526__auto___32582 = (0);
while(true){
if((i__9526__auto___32582 < len__9525__auto___32581)){
args32531.push((arguments[i__9526__auto___32582]));

var G__32583 = (i__9526__auto___32582 + (1));
i__9526__auto___32582 = G__32583;
continue;
} else {
}
break;
}

var G__32533 = args32531.length;
switch (G__32533) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32531.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32418__auto___32585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___32585){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___32585){
return (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (7))){
var inst_32553 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32559_32586 = state_32557__$1;
(statearr_32559_32586[(2)] = inst_32553);

(statearr_32559_32586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (1))){
var state_32557__$1 = state_32557;
var statearr_32560_32587 = state_32557__$1;
(statearr_32560_32587[(2)] = null);

(statearr_32560_32587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (4))){
var inst_32536 = (state_32557[(7)]);
var inst_32536__$1 = (state_32557[(2)]);
var inst_32537 = (inst_32536__$1 == null);
var state_32557__$1 = (function (){var statearr_32561 = state_32557;
(statearr_32561[(7)] = inst_32536__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32537)){
var statearr_32562_32588 = state_32557__$1;
(statearr_32562_32588[(1)] = (5));

} else {
var statearr_32563_32589 = state_32557__$1;
(statearr_32563_32589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (13))){
var state_32557__$1 = state_32557;
var statearr_32564_32590 = state_32557__$1;
(statearr_32564_32590[(2)] = null);

(statearr_32564_32590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (6))){
var inst_32536 = (state_32557[(7)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32557__$1,(11),to,inst_32536);
} else {
if((state_val_32558 === (3))){
var inst_32555 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32557__$1,inst_32555);
} else {
if((state_val_32558 === (12))){
var state_32557__$1 = state_32557;
var statearr_32565_32591 = state_32557__$1;
(statearr_32565_32591[(2)] = null);

(statearr_32565_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (2))){
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32557__$1,(4),from);
} else {
if((state_val_32558 === (11))){
var inst_32546 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32546)){
var statearr_32566_32592 = state_32557__$1;
(statearr_32566_32592[(1)] = (12));

} else {
var statearr_32567_32593 = state_32557__$1;
(statearr_32567_32593[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (9))){
var state_32557__$1 = state_32557;
var statearr_32568_32594 = state_32557__$1;
(statearr_32568_32594[(2)] = null);

(statearr_32568_32594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (5))){
var state_32557__$1 = state_32557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32569_32595 = state_32557__$1;
(statearr_32569_32595[(1)] = (8));

} else {
var statearr_32570_32596 = state_32557__$1;
(statearr_32570_32596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (14))){
var inst_32551 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32571_32597 = state_32557__$1;
(statearr_32571_32597[(2)] = inst_32551);

(statearr_32571_32597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (10))){
var inst_32543 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32572_32598 = state_32557__$1;
(statearr_32572_32598[(2)] = inst_32543);

(statearr_32572_32598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (8))){
var inst_32540 = cljs.core.async.close_BANG_.call(null,to);
var state_32557__$1 = state_32557;
var statearr_32573_32599 = state_32557__$1;
(statearr_32573_32599[(2)] = inst_32540);

(statearr_32573_32599[(1)] = (10));


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
});})(c__32418__auto___32585))
;
return ((function (switch__32306__auto__,c__32418__auto___32585){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_32557){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_32557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e32578){if((e32578 instanceof Object)){
var ex__32310__auto__ = e32578;
var statearr_32579_32600 = state_32557;
(statearr_32579_32600[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32601 = state_32557;
state_32557 = G__32601;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___32585))
})();
var state__32420__auto__ = (function (){var statearr_32580 = f__32419__auto__.call(null);
(statearr_32580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___32585);

return statearr_32580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___32585))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32789){
var vec__32790 = p__32789;
var v = cljs.core.nth.call(null,vec__32790,(0),null);
var p = cljs.core.nth.call(null,vec__32790,(1),null);
var job = vec__32790;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32418__auto___32976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___32976,res,vec__32790,v,p,job,jobs,results){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___32976,res,vec__32790,v,p,job,jobs,results){
return (function (state_32797){
var state_val_32798 = (state_32797[(1)]);
if((state_val_32798 === (1))){
var state_32797__$1 = state_32797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32797__$1,(2),res,v);
} else {
if((state_val_32798 === (2))){
var inst_32794 = (state_32797[(2)]);
var inst_32795 = cljs.core.async.close_BANG_.call(null,res);
var state_32797__$1 = (function (){var statearr_32799 = state_32797;
(statearr_32799[(7)] = inst_32794);

return statearr_32799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32797__$1,inst_32795);
} else {
return null;
}
}
});})(c__32418__auto___32976,res,vec__32790,v,p,job,jobs,results))
;
return ((function (switch__32306__auto__,c__32418__auto___32976,res,vec__32790,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0 = (function (){
var statearr_32803 = [null,null,null,null,null,null,null,null];
(statearr_32803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__);

(statearr_32803[(1)] = (1));

return statearr_32803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1 = (function (state_32797){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_32797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e32804){if((e32804 instanceof Object)){
var ex__32310__auto__ = e32804;
var statearr_32805_32977 = state_32797;
(statearr_32805_32977[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32978 = state_32797;
state_32797 = G__32978;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = function(state_32797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1.call(this,state_32797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___32976,res,vec__32790,v,p,job,jobs,results))
})();
var state__32420__auto__ = (function (){var statearr_32806 = f__32419__auto__.call(null);
(statearr_32806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___32976);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___32976,res,vec__32790,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32807){
var vec__32808 = p__32807;
var v = cljs.core.nth.call(null,vec__32808,(0),null);
var p = cljs.core.nth.call(null,vec__32808,(1),null);
var job = vec__32808;
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
var n__9335__auto___32979 = n;
var __32980 = (0);
while(true){
if((__32980 < n__9335__auto___32979)){
var G__32811_32981 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32811_32981) {
case "compute":
var c__32418__auto___32983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32980,c__32418__auto___32983,G__32811_32981,n__9335__auto___32979,jobs,results,process,async){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (__32980,c__32418__auto___32983,G__32811_32981,n__9335__auto___32979,jobs,results,process,async){
return (function (state_32824){
var state_val_32825 = (state_32824[(1)]);
if((state_val_32825 === (1))){
var state_32824__$1 = state_32824;
var statearr_32826_32984 = state_32824__$1;
(statearr_32826_32984[(2)] = null);

(statearr_32826_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (2))){
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32824__$1,(4),jobs);
} else {
if((state_val_32825 === (3))){
var inst_32822 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32824__$1,inst_32822);
} else {
if((state_val_32825 === (4))){
var inst_32814 = (state_32824[(2)]);
var inst_32815 = process.call(null,inst_32814);
var state_32824__$1 = state_32824;
if(cljs.core.truth_(inst_32815)){
var statearr_32827_32985 = state_32824__$1;
(statearr_32827_32985[(1)] = (5));

} else {
var statearr_32828_32986 = state_32824__$1;
(statearr_32828_32986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (5))){
var state_32824__$1 = state_32824;
var statearr_32829_32987 = state_32824__$1;
(statearr_32829_32987[(2)] = null);

(statearr_32829_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (6))){
var state_32824__$1 = state_32824;
var statearr_32830_32988 = state_32824__$1;
(statearr_32830_32988[(2)] = null);

(statearr_32830_32988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (7))){
var inst_32820 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
var statearr_32831_32989 = state_32824__$1;
(statearr_32831_32989[(2)] = inst_32820);

(statearr_32831_32989[(1)] = (3));


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
});})(__32980,c__32418__auto___32983,G__32811_32981,n__9335__auto___32979,jobs,results,process,async))
;
return ((function (__32980,switch__32306__auto__,c__32418__auto___32983,G__32811_32981,n__9335__auto___32979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null];
(statearr_32835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1 = (function (state_32824){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_32824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object)){
var ex__32310__auto__ = e32836;
var statearr_32837_32990 = state_32824;
(statearr_32837_32990[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32991 = state_32824;
state_32824 = G__32991;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = function(state_32824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1.call(this,state_32824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__;
})()
;})(__32980,switch__32306__auto__,c__32418__auto___32983,G__32811_32981,n__9335__auto___32979,jobs,results,process,async))
})();
var state__32420__auto__ = (function (){var statearr_32838 = f__32419__auto__.call(null);
(statearr_32838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___32983);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(__32980,c__32418__auto___32983,G__32811_32981,n__9335__auto___32979,jobs,results,process,async))
);


break;
case "async":
var c__32418__auto___32992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32980,c__32418__auto___32992,G__32811_32981,n__9335__auto___32979,jobs,results,process,async){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (__32980,c__32418__auto___32992,G__32811_32981,n__9335__auto___32979,jobs,results,process,async){
return (function (state_32851){
var state_val_32852 = (state_32851[(1)]);
if((state_val_32852 === (1))){
var state_32851__$1 = state_32851;
var statearr_32853_32993 = state_32851__$1;
(statearr_32853_32993[(2)] = null);

(statearr_32853_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (2))){
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32851__$1,(4),jobs);
} else {
if((state_val_32852 === (3))){
var inst_32849 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32851__$1,inst_32849);
} else {
if((state_val_32852 === (4))){
var inst_32841 = (state_32851[(2)]);
var inst_32842 = async.call(null,inst_32841);
var state_32851__$1 = state_32851;
if(cljs.core.truth_(inst_32842)){
var statearr_32854_32994 = state_32851__$1;
(statearr_32854_32994[(1)] = (5));

} else {
var statearr_32855_32995 = state_32851__$1;
(statearr_32855_32995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (5))){
var state_32851__$1 = state_32851;
var statearr_32856_32996 = state_32851__$1;
(statearr_32856_32996[(2)] = null);

(statearr_32856_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (6))){
var state_32851__$1 = state_32851;
var statearr_32857_32997 = state_32851__$1;
(statearr_32857_32997[(2)] = null);

(statearr_32857_32997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (7))){
var inst_32847 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
var statearr_32858_32998 = state_32851__$1;
(statearr_32858_32998[(2)] = inst_32847);

(statearr_32858_32998[(1)] = (3));


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
});})(__32980,c__32418__auto___32992,G__32811_32981,n__9335__auto___32979,jobs,results,process,async))
;
return ((function (__32980,switch__32306__auto__,c__32418__auto___32992,G__32811_32981,n__9335__auto___32979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0 = (function (){
var statearr_32862 = [null,null,null,null,null,null,null];
(statearr_32862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__);

(statearr_32862[(1)] = (1));

return statearr_32862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1 = (function (state_32851){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_32851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e32863){if((e32863 instanceof Object)){
var ex__32310__auto__ = e32863;
var statearr_32864_32999 = state_32851;
(statearr_32864_32999[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33000 = state_32851;
state_32851 = G__33000;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = function(state_32851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1.call(this,state_32851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__;
})()
;})(__32980,switch__32306__auto__,c__32418__auto___32992,G__32811_32981,n__9335__auto___32979,jobs,results,process,async))
})();
var state__32420__auto__ = (function (){var statearr_32865 = f__32419__auto__.call(null);
(statearr_32865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___32992);

return statearr_32865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(__32980,c__32418__auto___32992,G__32811_32981,n__9335__auto___32979,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33001 = (__32980 + (1));
__32980 = G__33001;
continue;
} else {
}
break;
}

var c__32418__auto___33002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___33002,jobs,results,process,async){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___33002,jobs,results,process,async){
return (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (1))){
var state_32887__$1 = state_32887;
var statearr_32889_33003 = state_32887__$1;
(statearr_32889_33003[(2)] = null);

(statearr_32889_33003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (2))){
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32887__$1,(4),from);
} else {
if((state_val_32888 === (3))){
var inst_32885 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32887__$1,inst_32885);
} else {
if((state_val_32888 === (4))){
var inst_32868 = (state_32887[(7)]);
var inst_32868__$1 = (state_32887[(2)]);
var inst_32869 = (inst_32868__$1 == null);
var state_32887__$1 = (function (){var statearr_32890 = state_32887;
(statearr_32890[(7)] = inst_32868__$1);

return statearr_32890;
})();
if(cljs.core.truth_(inst_32869)){
var statearr_32891_33004 = state_32887__$1;
(statearr_32891_33004[(1)] = (5));

} else {
var statearr_32892_33005 = state_32887__$1;
(statearr_32892_33005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (5))){
var inst_32871 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32887__$1 = state_32887;
var statearr_32893_33006 = state_32887__$1;
(statearr_32893_33006[(2)] = inst_32871);

(statearr_32893_33006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (6))){
var inst_32868 = (state_32887[(7)]);
var inst_32873 = (state_32887[(8)]);
var inst_32873__$1 = cljs.core.async.chan.call(null,(1));
var inst_32874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32875 = [inst_32868,inst_32873__$1];
var inst_32876 = (new cljs.core.PersistentVector(null,2,(5),inst_32874,inst_32875,null));
var state_32887__$1 = (function (){var statearr_32894 = state_32887;
(statearr_32894[(8)] = inst_32873__$1);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32887__$1,(8),jobs,inst_32876);
} else {
if((state_val_32888 === (7))){
var inst_32883 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_32895_33007 = state_32887__$1;
(statearr_32895_33007[(2)] = inst_32883);

(statearr_32895_33007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (8))){
var inst_32873 = (state_32887[(8)]);
var inst_32878 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_32896 = state_32887;
(statearr_32896[(9)] = inst_32878);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32887__$1,(9),results,inst_32873);
} else {
if((state_val_32888 === (9))){
var inst_32880 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_32897 = state_32887;
(statearr_32897[(10)] = inst_32880);

return statearr_32897;
})();
var statearr_32898_33008 = state_32887__$1;
(statearr_32898_33008[(2)] = null);

(statearr_32898_33008[(1)] = (2));


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
});})(c__32418__auto___33002,jobs,results,process,async))
;
return ((function (switch__32306__auto__,c__32418__auto___33002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0 = (function (){
var statearr_32902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__);

(statearr_32902[(1)] = (1));

return statearr_32902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1 = (function (state_32887){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_32887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e32903){if((e32903 instanceof Object)){
var ex__32310__auto__ = e32903;
var statearr_32904_33009 = state_32887;
(statearr_32904_33009[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33010 = state_32887;
state_32887 = G__33010;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___33002,jobs,results,process,async))
})();
var state__32420__auto__ = (function (){var statearr_32905 = f__32419__auto__.call(null);
(statearr_32905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___33002);

return statearr_32905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___33002,jobs,results,process,async))
);


var c__32418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto__,jobs,results,process,async){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto__,jobs,results,process,async){
return (function (state_32943){
var state_val_32944 = (state_32943[(1)]);
if((state_val_32944 === (7))){
var inst_32939 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32945_33011 = state_32943__$1;
(statearr_32945_33011[(2)] = inst_32939);

(statearr_32945_33011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (20))){
var state_32943__$1 = state_32943;
var statearr_32946_33012 = state_32943__$1;
(statearr_32946_33012[(2)] = null);

(statearr_32946_33012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (1))){
var state_32943__$1 = state_32943;
var statearr_32947_33013 = state_32943__$1;
(statearr_32947_33013[(2)] = null);

(statearr_32947_33013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (4))){
var inst_32908 = (state_32943[(7)]);
var inst_32908__$1 = (state_32943[(2)]);
var inst_32909 = (inst_32908__$1 == null);
var state_32943__$1 = (function (){var statearr_32948 = state_32943;
(statearr_32948[(7)] = inst_32908__$1);

return statearr_32948;
})();
if(cljs.core.truth_(inst_32909)){
var statearr_32949_33014 = state_32943__$1;
(statearr_32949_33014[(1)] = (5));

} else {
var statearr_32950_33015 = state_32943__$1;
(statearr_32950_33015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (15))){
var inst_32921 = (state_32943[(8)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32943__$1,(18),to,inst_32921);
} else {
if((state_val_32944 === (21))){
var inst_32934 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32951_33016 = state_32943__$1;
(statearr_32951_33016[(2)] = inst_32934);

(statearr_32951_33016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (13))){
var inst_32936 = (state_32943[(2)]);
var state_32943__$1 = (function (){var statearr_32952 = state_32943;
(statearr_32952[(9)] = inst_32936);

return statearr_32952;
})();
var statearr_32953_33017 = state_32943__$1;
(statearr_32953_33017[(2)] = null);

(statearr_32953_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (6))){
var inst_32908 = (state_32943[(7)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32943__$1,(11),inst_32908);
} else {
if((state_val_32944 === (17))){
var inst_32929 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
if(cljs.core.truth_(inst_32929)){
var statearr_32954_33018 = state_32943__$1;
(statearr_32954_33018[(1)] = (19));

} else {
var statearr_32955_33019 = state_32943__$1;
(statearr_32955_33019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (3))){
var inst_32941 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32943__$1,inst_32941);
} else {
if((state_val_32944 === (12))){
var inst_32918 = (state_32943[(10)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32943__$1,(14),inst_32918);
} else {
if((state_val_32944 === (2))){
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32943__$1,(4),results);
} else {
if((state_val_32944 === (19))){
var state_32943__$1 = state_32943;
var statearr_32956_33020 = state_32943__$1;
(statearr_32956_33020[(2)] = null);

(statearr_32956_33020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (11))){
var inst_32918 = (state_32943[(2)]);
var state_32943__$1 = (function (){var statearr_32957 = state_32943;
(statearr_32957[(10)] = inst_32918);

return statearr_32957;
})();
var statearr_32958_33021 = state_32943__$1;
(statearr_32958_33021[(2)] = null);

(statearr_32958_33021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (9))){
var state_32943__$1 = state_32943;
var statearr_32959_33022 = state_32943__$1;
(statearr_32959_33022[(2)] = null);

(statearr_32959_33022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (5))){
var state_32943__$1 = state_32943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32960_33023 = state_32943__$1;
(statearr_32960_33023[(1)] = (8));

} else {
var statearr_32961_33024 = state_32943__$1;
(statearr_32961_33024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (14))){
var inst_32921 = (state_32943[(8)]);
var inst_32923 = (state_32943[(11)]);
var inst_32921__$1 = (state_32943[(2)]);
var inst_32922 = (inst_32921__$1 == null);
var inst_32923__$1 = cljs.core.not.call(null,inst_32922);
var state_32943__$1 = (function (){var statearr_32962 = state_32943;
(statearr_32962[(8)] = inst_32921__$1);

(statearr_32962[(11)] = inst_32923__$1);

return statearr_32962;
})();
if(inst_32923__$1){
var statearr_32963_33025 = state_32943__$1;
(statearr_32963_33025[(1)] = (15));

} else {
var statearr_32964_33026 = state_32943__$1;
(statearr_32964_33026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (16))){
var inst_32923 = (state_32943[(11)]);
var state_32943__$1 = state_32943;
var statearr_32965_33027 = state_32943__$1;
(statearr_32965_33027[(2)] = inst_32923);

(statearr_32965_33027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (10))){
var inst_32915 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32966_33028 = state_32943__$1;
(statearr_32966_33028[(2)] = inst_32915);

(statearr_32966_33028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (18))){
var inst_32926 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32967_33029 = state_32943__$1;
(statearr_32967_33029[(2)] = inst_32926);

(statearr_32967_33029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (8))){
var inst_32912 = cljs.core.async.close_BANG_.call(null,to);
var state_32943__$1 = state_32943;
var statearr_32968_33030 = state_32943__$1;
(statearr_32968_33030[(2)] = inst_32912);

(statearr_32968_33030[(1)] = (10));


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
});})(c__32418__auto__,jobs,results,process,async))
;
return ((function (switch__32306__auto__,c__32418__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0 = (function (){
var statearr_32972 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__);

(statearr_32972[(1)] = (1));

return statearr_32972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1 = (function (state_32943){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_32943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e32973){if((e32973 instanceof Object)){
var ex__32310__auto__ = e32973;
var statearr_32974_33031 = state_32943;
(statearr_32974_33031[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33032 = state_32943;
state_32943 = G__33032;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__ = function(state_32943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1.call(this,state_32943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto__,jobs,results,process,async))
})();
var state__32420__auto__ = (function (){var statearr_32975 = f__32419__auto__.call(null);
(statearr_32975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto__);

return statearr_32975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto__,jobs,results,process,async))
);

return c__32418__auto__;
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
var args33033 = [];
var len__9525__auto___33036 = arguments.length;
var i__9526__auto___33037 = (0);
while(true){
if((i__9526__auto___33037 < len__9525__auto___33036)){
args33033.push((arguments[i__9526__auto___33037]));

var G__33038 = (i__9526__auto___33037 + (1));
i__9526__auto___33037 = G__33038;
continue;
} else {
}
break;
}

var G__33035 = args33033.length;
switch (G__33035) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33033.length)].join('')));

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
var args33040 = [];
var len__9525__auto___33043 = arguments.length;
var i__9526__auto___33044 = (0);
while(true){
if((i__9526__auto___33044 < len__9525__auto___33043)){
args33040.push((arguments[i__9526__auto___33044]));

var G__33045 = (i__9526__auto___33044 + (1));
i__9526__auto___33044 = G__33045;
continue;
} else {
}
break;
}

var G__33042 = args33040.length;
switch (G__33042) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33040.length)].join('')));

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
var args33047 = [];
var len__9525__auto___33100 = arguments.length;
var i__9526__auto___33101 = (0);
while(true){
if((i__9526__auto___33101 < len__9525__auto___33100)){
args33047.push((arguments[i__9526__auto___33101]));

var G__33102 = (i__9526__auto___33101 + (1));
i__9526__auto___33101 = G__33102;
continue;
} else {
}
break;
}

var G__33049 = args33047.length;
switch (G__33049) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33047.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32418__auto___33104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___33104,tc,fc){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___33104,tc,fc){
return (function (state_33075){
var state_val_33076 = (state_33075[(1)]);
if((state_val_33076 === (7))){
var inst_33071 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33077_33105 = state_33075__$1;
(statearr_33077_33105[(2)] = inst_33071);

(statearr_33077_33105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (1))){
var state_33075__$1 = state_33075;
var statearr_33078_33106 = state_33075__$1;
(statearr_33078_33106[(2)] = null);

(statearr_33078_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (4))){
var inst_33052 = (state_33075[(7)]);
var inst_33052__$1 = (state_33075[(2)]);
var inst_33053 = (inst_33052__$1 == null);
var state_33075__$1 = (function (){var statearr_33079 = state_33075;
(statearr_33079[(7)] = inst_33052__$1);

return statearr_33079;
})();
if(cljs.core.truth_(inst_33053)){
var statearr_33080_33107 = state_33075__$1;
(statearr_33080_33107[(1)] = (5));

} else {
var statearr_33081_33108 = state_33075__$1;
(statearr_33081_33108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (13))){
var state_33075__$1 = state_33075;
var statearr_33082_33109 = state_33075__$1;
(statearr_33082_33109[(2)] = null);

(statearr_33082_33109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (6))){
var inst_33052 = (state_33075[(7)]);
var inst_33058 = p.call(null,inst_33052);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33058)){
var statearr_33083_33110 = state_33075__$1;
(statearr_33083_33110[(1)] = (9));

} else {
var statearr_33084_33111 = state_33075__$1;
(statearr_33084_33111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (3))){
var inst_33073 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33075__$1,inst_33073);
} else {
if((state_val_33076 === (12))){
var state_33075__$1 = state_33075;
var statearr_33085_33112 = state_33075__$1;
(statearr_33085_33112[(2)] = null);

(statearr_33085_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (2))){
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33075__$1,(4),ch);
} else {
if((state_val_33076 === (11))){
var inst_33052 = (state_33075[(7)]);
var inst_33062 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33075__$1,(8),inst_33062,inst_33052);
} else {
if((state_val_33076 === (9))){
var state_33075__$1 = state_33075;
var statearr_33086_33113 = state_33075__$1;
(statearr_33086_33113[(2)] = tc);

(statearr_33086_33113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (5))){
var inst_33055 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33056 = cljs.core.async.close_BANG_.call(null,fc);
var state_33075__$1 = (function (){var statearr_33087 = state_33075;
(statearr_33087[(8)] = inst_33055);

return statearr_33087;
})();
var statearr_33088_33114 = state_33075__$1;
(statearr_33088_33114[(2)] = inst_33056);

(statearr_33088_33114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (14))){
var inst_33069 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33089_33115 = state_33075__$1;
(statearr_33089_33115[(2)] = inst_33069);

(statearr_33089_33115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (10))){
var state_33075__$1 = state_33075;
var statearr_33090_33116 = state_33075__$1;
(statearr_33090_33116[(2)] = fc);

(statearr_33090_33116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (8))){
var inst_33064 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33064)){
var statearr_33091_33117 = state_33075__$1;
(statearr_33091_33117[(1)] = (12));

} else {
var statearr_33092_33118 = state_33075__$1;
(statearr_33092_33118[(1)] = (13));

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
});})(c__32418__auto___33104,tc,fc))
;
return ((function (switch__32306__auto__,c__32418__auto___33104,tc,fc){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_33096 = [null,null,null,null,null,null,null,null,null];
(statearr_33096[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_33096[(1)] = (1));

return statearr_33096;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_33075){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_33075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e33097){if((e33097 instanceof Object)){
var ex__32310__auto__ = e33097;
var statearr_33098_33119 = state_33075;
(statearr_33098_33119[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33120 = state_33075;
state_33075 = G__33120;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_33075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_33075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___33104,tc,fc))
})();
var state__32420__auto__ = (function (){var statearr_33099 = f__32419__auto__.call(null);
(statearr_33099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___33104);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___33104,tc,fc))
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
var c__32418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto__){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto__){
return (function (state_33184){
var state_val_33185 = (state_33184[(1)]);
if((state_val_33185 === (7))){
var inst_33180 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33186_33207 = state_33184__$1;
(statearr_33186_33207[(2)] = inst_33180);

(statearr_33186_33207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (1))){
var inst_33164 = init;
var state_33184__$1 = (function (){var statearr_33187 = state_33184;
(statearr_33187[(7)] = inst_33164);

return statearr_33187;
})();
var statearr_33188_33208 = state_33184__$1;
(statearr_33188_33208[(2)] = null);

(statearr_33188_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (4))){
var inst_33167 = (state_33184[(8)]);
var inst_33167__$1 = (state_33184[(2)]);
var inst_33168 = (inst_33167__$1 == null);
var state_33184__$1 = (function (){var statearr_33189 = state_33184;
(statearr_33189[(8)] = inst_33167__$1);

return statearr_33189;
})();
if(cljs.core.truth_(inst_33168)){
var statearr_33190_33209 = state_33184__$1;
(statearr_33190_33209[(1)] = (5));

} else {
var statearr_33191_33210 = state_33184__$1;
(statearr_33191_33210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (6))){
var inst_33164 = (state_33184[(7)]);
var inst_33167 = (state_33184[(8)]);
var inst_33171 = (state_33184[(9)]);
var inst_33171__$1 = f.call(null,inst_33164,inst_33167);
var inst_33172 = cljs.core.reduced_QMARK_.call(null,inst_33171__$1);
var state_33184__$1 = (function (){var statearr_33192 = state_33184;
(statearr_33192[(9)] = inst_33171__$1);

return statearr_33192;
})();
if(inst_33172){
var statearr_33193_33211 = state_33184__$1;
(statearr_33193_33211[(1)] = (8));

} else {
var statearr_33194_33212 = state_33184__$1;
(statearr_33194_33212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (3))){
var inst_33182 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33184__$1,inst_33182);
} else {
if((state_val_33185 === (2))){
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33184__$1,(4),ch);
} else {
if((state_val_33185 === (9))){
var inst_33171 = (state_33184[(9)]);
var inst_33164 = inst_33171;
var state_33184__$1 = (function (){var statearr_33195 = state_33184;
(statearr_33195[(7)] = inst_33164);

return statearr_33195;
})();
var statearr_33196_33213 = state_33184__$1;
(statearr_33196_33213[(2)] = null);

(statearr_33196_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (5))){
var inst_33164 = (state_33184[(7)]);
var state_33184__$1 = state_33184;
var statearr_33197_33214 = state_33184__$1;
(statearr_33197_33214[(2)] = inst_33164);

(statearr_33197_33214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (10))){
var inst_33178 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33198_33215 = state_33184__$1;
(statearr_33198_33215[(2)] = inst_33178);

(statearr_33198_33215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (8))){
var inst_33171 = (state_33184[(9)]);
var inst_33174 = cljs.core.deref.call(null,inst_33171);
var state_33184__$1 = state_33184;
var statearr_33199_33216 = state_33184__$1;
(statearr_33199_33216[(2)] = inst_33174);

(statearr_33199_33216[(1)] = (10));


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
});})(c__32418__auto__))
;
return ((function (switch__32306__auto__,c__32418__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32307__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32307__auto____0 = (function (){
var statearr_33203 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33203[(0)] = cljs$core$async$reduce_$_state_machine__32307__auto__);

(statearr_33203[(1)] = (1));

return statearr_33203;
});
var cljs$core$async$reduce_$_state_machine__32307__auto____1 = (function (state_33184){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_33184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e33204){if((e33204 instanceof Object)){
var ex__32310__auto__ = e33204;
var statearr_33205_33217 = state_33184;
(statearr_33205_33217[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33218 = state_33184;
state_33184 = G__33218;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32307__auto__ = function(state_33184){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32307__auto____1.call(this,state_33184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32307__auto____0;
cljs$core$async$reduce_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32307__auto____1;
return cljs$core$async$reduce_$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto__))
})();
var state__32420__auto__ = (function (){var statearr_33206 = f__32419__auto__.call(null);
(statearr_33206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto__);

return statearr_33206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto__))
);

return c__32418__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto__,f__$1){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto__,f__$1){
return (function (state_33238){
var state_val_33239 = (state_33238[(1)]);
if((state_val_33239 === (1))){
var inst_33233 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33238__$1 = state_33238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33238__$1,(2),inst_33233);
} else {
if((state_val_33239 === (2))){
var inst_33235 = (state_33238[(2)]);
var inst_33236 = f__$1.call(null,inst_33235);
var state_33238__$1 = state_33238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33238__$1,inst_33236);
} else {
return null;
}
}
});})(c__32418__auto__,f__$1))
;
return ((function (switch__32306__auto__,c__32418__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32307__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32307__auto____0 = (function (){
var statearr_33243 = [null,null,null,null,null,null,null];
(statearr_33243[(0)] = cljs$core$async$transduce_$_state_machine__32307__auto__);

(statearr_33243[(1)] = (1));

return statearr_33243;
});
var cljs$core$async$transduce_$_state_machine__32307__auto____1 = (function (state_33238){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_33238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e33244){if((e33244 instanceof Object)){
var ex__32310__auto__ = e33244;
var statearr_33245_33247 = state_33238;
(statearr_33245_33247[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33248 = state_33238;
state_33238 = G__33248;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32307__auto__ = function(state_33238){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32307__auto____1.call(this,state_33238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32307__auto____0;
cljs$core$async$transduce_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32307__auto____1;
return cljs$core$async$transduce_$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto__,f__$1))
})();
var state__32420__auto__ = (function (){var statearr_33246 = f__32419__auto__.call(null);
(statearr_33246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto__);

return statearr_33246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto__,f__$1))
);

return c__32418__auto__;
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
var args33249 = [];
var len__9525__auto___33301 = arguments.length;
var i__9526__auto___33302 = (0);
while(true){
if((i__9526__auto___33302 < len__9525__auto___33301)){
args33249.push((arguments[i__9526__auto___33302]));

var G__33303 = (i__9526__auto___33302 + (1));
i__9526__auto___33302 = G__33303;
continue;
} else {
}
break;
}

var G__33251 = args33249.length;
switch (G__33251) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33249.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto__){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto__){
return (function (state_33276){
var state_val_33277 = (state_33276[(1)]);
if((state_val_33277 === (7))){
var inst_33258 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33278_33305 = state_33276__$1;
(statearr_33278_33305[(2)] = inst_33258);

(statearr_33278_33305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (1))){
var inst_33252 = cljs.core.seq.call(null,coll);
var inst_33253 = inst_33252;
var state_33276__$1 = (function (){var statearr_33279 = state_33276;
(statearr_33279[(7)] = inst_33253);

return statearr_33279;
})();
var statearr_33280_33306 = state_33276__$1;
(statearr_33280_33306[(2)] = null);

(statearr_33280_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (4))){
var inst_33253 = (state_33276[(7)]);
var inst_33256 = cljs.core.first.call(null,inst_33253);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33276__$1,(7),ch,inst_33256);
} else {
if((state_val_33277 === (13))){
var inst_33270 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33281_33307 = state_33276__$1;
(statearr_33281_33307[(2)] = inst_33270);

(statearr_33281_33307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (6))){
var inst_33261 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
if(cljs.core.truth_(inst_33261)){
var statearr_33282_33308 = state_33276__$1;
(statearr_33282_33308[(1)] = (8));

} else {
var statearr_33283_33309 = state_33276__$1;
(statearr_33283_33309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (3))){
var inst_33274 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33276__$1,inst_33274);
} else {
if((state_val_33277 === (12))){
var state_33276__$1 = state_33276;
var statearr_33284_33310 = state_33276__$1;
(statearr_33284_33310[(2)] = null);

(statearr_33284_33310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (2))){
var inst_33253 = (state_33276[(7)]);
var state_33276__$1 = state_33276;
if(cljs.core.truth_(inst_33253)){
var statearr_33285_33311 = state_33276__$1;
(statearr_33285_33311[(1)] = (4));

} else {
var statearr_33286_33312 = state_33276__$1;
(statearr_33286_33312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (11))){
var inst_33267 = cljs.core.async.close_BANG_.call(null,ch);
var state_33276__$1 = state_33276;
var statearr_33287_33313 = state_33276__$1;
(statearr_33287_33313[(2)] = inst_33267);

(statearr_33287_33313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (9))){
var state_33276__$1 = state_33276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33288_33314 = state_33276__$1;
(statearr_33288_33314[(1)] = (11));

} else {
var statearr_33289_33315 = state_33276__$1;
(statearr_33289_33315[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (5))){
var inst_33253 = (state_33276[(7)]);
var state_33276__$1 = state_33276;
var statearr_33290_33316 = state_33276__$1;
(statearr_33290_33316[(2)] = inst_33253);

(statearr_33290_33316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (10))){
var inst_33272 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33291_33317 = state_33276__$1;
(statearr_33291_33317[(2)] = inst_33272);

(statearr_33291_33317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (8))){
var inst_33253 = (state_33276[(7)]);
var inst_33263 = cljs.core.next.call(null,inst_33253);
var inst_33253__$1 = inst_33263;
var state_33276__$1 = (function (){var statearr_33292 = state_33276;
(statearr_33292[(7)] = inst_33253__$1);

return statearr_33292;
})();
var statearr_33293_33318 = state_33276__$1;
(statearr_33293_33318[(2)] = null);

(statearr_33293_33318[(1)] = (2));


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
});})(c__32418__auto__))
;
return ((function (switch__32306__auto__,c__32418__auto__){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_33297 = [null,null,null,null,null,null,null,null];
(statearr_33297[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_33297[(1)] = (1));

return statearr_33297;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_33276){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_33276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e33298){if((e33298 instanceof Object)){
var ex__32310__auto__ = e33298;
var statearr_33299_33319 = state_33276;
(statearr_33299_33319[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33320 = state_33276;
state_33276 = G__33320;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_33276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_33276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto__))
})();
var state__32420__auto__ = (function (){var statearr_33300 = f__32419__auto__.call(null);
(statearr_33300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto__);

return statearr_33300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto__))
);

return c__32418__auto__;
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
var x__9080__auto__ = (((_ == null))?null:_);
var m__9081__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,_);
} else {
var m__9081__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,_);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9081__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m,ch);
} else {
var m__9081__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m,ch);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m);
} else {
var m__9081__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33546 = (function (ch,cs,meta33547){
this.ch = ch;
this.cs = cs;
this.meta33547 = meta33547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33548,meta33547__$1){
var self__ = this;
var _33548__$1 = this;
return (new cljs.core.async.t_cljs$core$async33546(self__.ch,self__.cs,meta33547__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33548){
var self__ = this;
var _33548__$1 = this;
return self__.meta33547;
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33547","meta33547",-695311653,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33546";

cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async33546");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33546 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33546(ch__$1,cs__$1,meta33547){
return (new cljs.core.async.t_cljs$core$async33546(ch__$1,cs__$1,meta33547));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33546(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32418__auto___33771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___33771,cs,m,dchan,dctr,done){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___33771,cs,m,dchan,dctr,done){
return (function (state_33683){
var state_val_33684 = (state_33683[(1)]);
if((state_val_33684 === (7))){
var inst_33679 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33685_33772 = state_33683__$1;
(statearr_33685_33772[(2)] = inst_33679);

(statearr_33685_33772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (20))){
var inst_33582 = (state_33683[(7)]);
var inst_33594 = cljs.core.first.call(null,inst_33582);
var inst_33595 = cljs.core.nth.call(null,inst_33594,(0),null);
var inst_33596 = cljs.core.nth.call(null,inst_33594,(1),null);
var state_33683__$1 = (function (){var statearr_33686 = state_33683;
(statearr_33686[(8)] = inst_33595);

return statearr_33686;
})();
if(cljs.core.truth_(inst_33596)){
var statearr_33687_33773 = state_33683__$1;
(statearr_33687_33773[(1)] = (22));

} else {
var statearr_33688_33774 = state_33683__$1;
(statearr_33688_33774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (27))){
var inst_33551 = (state_33683[(9)]);
var inst_33626 = (state_33683[(10)]);
var inst_33624 = (state_33683[(11)]);
var inst_33631 = (state_33683[(12)]);
var inst_33631__$1 = cljs.core._nth.call(null,inst_33624,inst_33626);
var inst_33632 = cljs.core.async.put_BANG_.call(null,inst_33631__$1,inst_33551,done);
var state_33683__$1 = (function (){var statearr_33689 = state_33683;
(statearr_33689[(12)] = inst_33631__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33632)){
var statearr_33690_33775 = state_33683__$1;
(statearr_33690_33775[(1)] = (30));

} else {
var statearr_33691_33776 = state_33683__$1;
(statearr_33691_33776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (1))){
var state_33683__$1 = state_33683;
var statearr_33692_33777 = state_33683__$1;
(statearr_33692_33777[(2)] = null);

(statearr_33692_33777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (24))){
var inst_33582 = (state_33683[(7)]);
var inst_33601 = (state_33683[(2)]);
var inst_33602 = cljs.core.next.call(null,inst_33582);
var inst_33560 = inst_33602;
var inst_33561 = null;
var inst_33562 = (0);
var inst_33563 = (0);
var state_33683__$1 = (function (){var statearr_33693 = state_33683;
(statearr_33693[(13)] = inst_33561);

(statearr_33693[(14)] = inst_33563);

(statearr_33693[(15)] = inst_33601);

(statearr_33693[(16)] = inst_33560);

(statearr_33693[(17)] = inst_33562);

return statearr_33693;
})();
var statearr_33694_33778 = state_33683__$1;
(statearr_33694_33778[(2)] = null);

(statearr_33694_33778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (39))){
var state_33683__$1 = state_33683;
var statearr_33698_33779 = state_33683__$1;
(statearr_33698_33779[(2)] = null);

(statearr_33698_33779[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (4))){
var inst_33551 = (state_33683[(9)]);
var inst_33551__$1 = (state_33683[(2)]);
var inst_33552 = (inst_33551__$1 == null);
var state_33683__$1 = (function (){var statearr_33699 = state_33683;
(statearr_33699[(9)] = inst_33551__$1);

return statearr_33699;
})();
if(cljs.core.truth_(inst_33552)){
var statearr_33700_33780 = state_33683__$1;
(statearr_33700_33780[(1)] = (5));

} else {
var statearr_33701_33781 = state_33683__$1;
(statearr_33701_33781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (15))){
var inst_33561 = (state_33683[(13)]);
var inst_33563 = (state_33683[(14)]);
var inst_33560 = (state_33683[(16)]);
var inst_33562 = (state_33683[(17)]);
var inst_33578 = (state_33683[(2)]);
var inst_33579 = (inst_33563 + (1));
var tmp33695 = inst_33561;
var tmp33696 = inst_33560;
var tmp33697 = inst_33562;
var inst_33560__$1 = tmp33696;
var inst_33561__$1 = tmp33695;
var inst_33562__$1 = tmp33697;
var inst_33563__$1 = inst_33579;
var state_33683__$1 = (function (){var statearr_33702 = state_33683;
(statearr_33702[(18)] = inst_33578);

(statearr_33702[(13)] = inst_33561__$1);

(statearr_33702[(14)] = inst_33563__$1);

(statearr_33702[(16)] = inst_33560__$1);

(statearr_33702[(17)] = inst_33562__$1);

return statearr_33702;
})();
var statearr_33703_33782 = state_33683__$1;
(statearr_33703_33782[(2)] = null);

(statearr_33703_33782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (21))){
var inst_33605 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33707_33783 = state_33683__$1;
(statearr_33707_33783[(2)] = inst_33605);

(statearr_33707_33783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (31))){
var inst_33631 = (state_33683[(12)]);
var inst_33635 = done.call(null,null);
var inst_33636 = cljs.core.async.untap_STAR_.call(null,m,inst_33631);
var state_33683__$1 = (function (){var statearr_33708 = state_33683;
(statearr_33708[(19)] = inst_33635);

return statearr_33708;
})();
var statearr_33709_33784 = state_33683__$1;
(statearr_33709_33784[(2)] = inst_33636);

(statearr_33709_33784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (32))){
var inst_33626 = (state_33683[(10)]);
var inst_33624 = (state_33683[(11)]);
var inst_33625 = (state_33683[(20)]);
var inst_33623 = (state_33683[(21)]);
var inst_33638 = (state_33683[(2)]);
var inst_33639 = (inst_33626 + (1));
var tmp33704 = inst_33624;
var tmp33705 = inst_33625;
var tmp33706 = inst_33623;
var inst_33623__$1 = tmp33706;
var inst_33624__$1 = tmp33704;
var inst_33625__$1 = tmp33705;
var inst_33626__$1 = inst_33639;
var state_33683__$1 = (function (){var statearr_33710 = state_33683;
(statearr_33710[(10)] = inst_33626__$1);

(statearr_33710[(11)] = inst_33624__$1);

(statearr_33710[(22)] = inst_33638);

(statearr_33710[(20)] = inst_33625__$1);

(statearr_33710[(21)] = inst_33623__$1);

return statearr_33710;
})();
var statearr_33711_33785 = state_33683__$1;
(statearr_33711_33785[(2)] = null);

(statearr_33711_33785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (40))){
var inst_33651 = (state_33683[(23)]);
var inst_33655 = done.call(null,null);
var inst_33656 = cljs.core.async.untap_STAR_.call(null,m,inst_33651);
var state_33683__$1 = (function (){var statearr_33712 = state_33683;
(statearr_33712[(24)] = inst_33655);

return statearr_33712;
})();
var statearr_33713_33786 = state_33683__$1;
(statearr_33713_33786[(2)] = inst_33656);

(statearr_33713_33786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (33))){
var inst_33642 = (state_33683[(25)]);
var inst_33644 = cljs.core.chunked_seq_QMARK_.call(null,inst_33642);
var state_33683__$1 = state_33683;
if(inst_33644){
var statearr_33714_33787 = state_33683__$1;
(statearr_33714_33787[(1)] = (36));

} else {
var statearr_33715_33788 = state_33683__$1;
(statearr_33715_33788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (13))){
var inst_33572 = (state_33683[(26)]);
var inst_33575 = cljs.core.async.close_BANG_.call(null,inst_33572);
var state_33683__$1 = state_33683;
var statearr_33716_33789 = state_33683__$1;
(statearr_33716_33789[(2)] = inst_33575);

(statearr_33716_33789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (22))){
var inst_33595 = (state_33683[(8)]);
var inst_33598 = cljs.core.async.close_BANG_.call(null,inst_33595);
var state_33683__$1 = state_33683;
var statearr_33717_33790 = state_33683__$1;
(statearr_33717_33790[(2)] = inst_33598);

(statearr_33717_33790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (36))){
var inst_33642 = (state_33683[(25)]);
var inst_33646 = cljs.core.chunk_first.call(null,inst_33642);
var inst_33647 = cljs.core.chunk_rest.call(null,inst_33642);
var inst_33648 = cljs.core.count.call(null,inst_33646);
var inst_33623 = inst_33647;
var inst_33624 = inst_33646;
var inst_33625 = inst_33648;
var inst_33626 = (0);
var state_33683__$1 = (function (){var statearr_33718 = state_33683;
(statearr_33718[(10)] = inst_33626);

(statearr_33718[(11)] = inst_33624);

(statearr_33718[(20)] = inst_33625);

(statearr_33718[(21)] = inst_33623);

return statearr_33718;
})();
var statearr_33719_33791 = state_33683__$1;
(statearr_33719_33791[(2)] = null);

(statearr_33719_33791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (41))){
var inst_33642 = (state_33683[(25)]);
var inst_33658 = (state_33683[(2)]);
var inst_33659 = cljs.core.next.call(null,inst_33642);
var inst_33623 = inst_33659;
var inst_33624 = null;
var inst_33625 = (0);
var inst_33626 = (0);
var state_33683__$1 = (function (){var statearr_33720 = state_33683;
(statearr_33720[(27)] = inst_33658);

(statearr_33720[(10)] = inst_33626);

(statearr_33720[(11)] = inst_33624);

(statearr_33720[(20)] = inst_33625);

(statearr_33720[(21)] = inst_33623);

return statearr_33720;
})();
var statearr_33721_33792 = state_33683__$1;
(statearr_33721_33792[(2)] = null);

(statearr_33721_33792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (43))){
var state_33683__$1 = state_33683;
var statearr_33722_33793 = state_33683__$1;
(statearr_33722_33793[(2)] = null);

(statearr_33722_33793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (29))){
var inst_33667 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33723_33794 = state_33683__$1;
(statearr_33723_33794[(2)] = inst_33667);

(statearr_33723_33794[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (44))){
var inst_33676 = (state_33683[(2)]);
var state_33683__$1 = (function (){var statearr_33724 = state_33683;
(statearr_33724[(28)] = inst_33676);

return statearr_33724;
})();
var statearr_33725_33795 = state_33683__$1;
(statearr_33725_33795[(2)] = null);

(statearr_33725_33795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (6))){
var inst_33615 = (state_33683[(29)]);
var inst_33614 = cljs.core.deref.call(null,cs);
var inst_33615__$1 = cljs.core.keys.call(null,inst_33614);
var inst_33616 = cljs.core.count.call(null,inst_33615__$1);
var inst_33617 = cljs.core.reset_BANG_.call(null,dctr,inst_33616);
var inst_33622 = cljs.core.seq.call(null,inst_33615__$1);
var inst_33623 = inst_33622;
var inst_33624 = null;
var inst_33625 = (0);
var inst_33626 = (0);
var state_33683__$1 = (function (){var statearr_33726 = state_33683;
(statearr_33726[(29)] = inst_33615__$1);

(statearr_33726[(10)] = inst_33626);

(statearr_33726[(11)] = inst_33624);

(statearr_33726[(30)] = inst_33617);

(statearr_33726[(20)] = inst_33625);

(statearr_33726[(21)] = inst_33623);

return statearr_33726;
})();
var statearr_33727_33796 = state_33683__$1;
(statearr_33727_33796[(2)] = null);

(statearr_33727_33796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (28))){
var inst_33623 = (state_33683[(21)]);
var inst_33642 = (state_33683[(25)]);
var inst_33642__$1 = cljs.core.seq.call(null,inst_33623);
var state_33683__$1 = (function (){var statearr_33728 = state_33683;
(statearr_33728[(25)] = inst_33642__$1);

return statearr_33728;
})();
if(inst_33642__$1){
var statearr_33729_33797 = state_33683__$1;
(statearr_33729_33797[(1)] = (33));

} else {
var statearr_33730_33798 = state_33683__$1;
(statearr_33730_33798[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (25))){
var inst_33626 = (state_33683[(10)]);
var inst_33625 = (state_33683[(20)]);
var inst_33628 = (inst_33626 < inst_33625);
var inst_33629 = inst_33628;
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33629)){
var statearr_33731_33799 = state_33683__$1;
(statearr_33731_33799[(1)] = (27));

} else {
var statearr_33732_33800 = state_33683__$1;
(statearr_33732_33800[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (34))){
var state_33683__$1 = state_33683;
var statearr_33733_33801 = state_33683__$1;
(statearr_33733_33801[(2)] = null);

(statearr_33733_33801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (17))){
var state_33683__$1 = state_33683;
var statearr_33734_33802 = state_33683__$1;
(statearr_33734_33802[(2)] = null);

(statearr_33734_33802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (3))){
var inst_33681 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33683__$1,inst_33681);
} else {
if((state_val_33684 === (12))){
var inst_33610 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33735_33803 = state_33683__$1;
(statearr_33735_33803[(2)] = inst_33610);

(statearr_33735_33803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (2))){
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33683__$1,(4),ch);
} else {
if((state_val_33684 === (23))){
var state_33683__$1 = state_33683;
var statearr_33736_33804 = state_33683__$1;
(statearr_33736_33804[(2)] = null);

(statearr_33736_33804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (35))){
var inst_33665 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33737_33805 = state_33683__$1;
(statearr_33737_33805[(2)] = inst_33665);

(statearr_33737_33805[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (19))){
var inst_33582 = (state_33683[(7)]);
var inst_33586 = cljs.core.chunk_first.call(null,inst_33582);
var inst_33587 = cljs.core.chunk_rest.call(null,inst_33582);
var inst_33588 = cljs.core.count.call(null,inst_33586);
var inst_33560 = inst_33587;
var inst_33561 = inst_33586;
var inst_33562 = inst_33588;
var inst_33563 = (0);
var state_33683__$1 = (function (){var statearr_33738 = state_33683;
(statearr_33738[(13)] = inst_33561);

(statearr_33738[(14)] = inst_33563);

(statearr_33738[(16)] = inst_33560);

(statearr_33738[(17)] = inst_33562);

return statearr_33738;
})();
var statearr_33739_33806 = state_33683__$1;
(statearr_33739_33806[(2)] = null);

(statearr_33739_33806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (11))){
var inst_33582 = (state_33683[(7)]);
var inst_33560 = (state_33683[(16)]);
var inst_33582__$1 = cljs.core.seq.call(null,inst_33560);
var state_33683__$1 = (function (){var statearr_33740 = state_33683;
(statearr_33740[(7)] = inst_33582__$1);

return statearr_33740;
})();
if(inst_33582__$1){
var statearr_33741_33807 = state_33683__$1;
(statearr_33741_33807[(1)] = (16));

} else {
var statearr_33742_33808 = state_33683__$1;
(statearr_33742_33808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (9))){
var inst_33612 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33743_33809 = state_33683__$1;
(statearr_33743_33809[(2)] = inst_33612);

(statearr_33743_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (5))){
var inst_33558 = cljs.core.deref.call(null,cs);
var inst_33559 = cljs.core.seq.call(null,inst_33558);
var inst_33560 = inst_33559;
var inst_33561 = null;
var inst_33562 = (0);
var inst_33563 = (0);
var state_33683__$1 = (function (){var statearr_33744 = state_33683;
(statearr_33744[(13)] = inst_33561);

(statearr_33744[(14)] = inst_33563);

(statearr_33744[(16)] = inst_33560);

(statearr_33744[(17)] = inst_33562);

return statearr_33744;
})();
var statearr_33745_33810 = state_33683__$1;
(statearr_33745_33810[(2)] = null);

(statearr_33745_33810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (14))){
var state_33683__$1 = state_33683;
var statearr_33746_33811 = state_33683__$1;
(statearr_33746_33811[(2)] = null);

(statearr_33746_33811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (45))){
var inst_33673 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33747_33812 = state_33683__$1;
(statearr_33747_33812[(2)] = inst_33673);

(statearr_33747_33812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (26))){
var inst_33615 = (state_33683[(29)]);
var inst_33669 = (state_33683[(2)]);
var inst_33670 = cljs.core.seq.call(null,inst_33615);
var state_33683__$1 = (function (){var statearr_33748 = state_33683;
(statearr_33748[(31)] = inst_33669);

return statearr_33748;
})();
if(inst_33670){
var statearr_33749_33813 = state_33683__$1;
(statearr_33749_33813[(1)] = (42));

} else {
var statearr_33750_33814 = state_33683__$1;
(statearr_33750_33814[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (16))){
var inst_33582 = (state_33683[(7)]);
var inst_33584 = cljs.core.chunked_seq_QMARK_.call(null,inst_33582);
var state_33683__$1 = state_33683;
if(inst_33584){
var statearr_33751_33815 = state_33683__$1;
(statearr_33751_33815[(1)] = (19));

} else {
var statearr_33752_33816 = state_33683__$1;
(statearr_33752_33816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (38))){
var inst_33662 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33753_33817 = state_33683__$1;
(statearr_33753_33817[(2)] = inst_33662);

(statearr_33753_33817[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (30))){
var state_33683__$1 = state_33683;
var statearr_33754_33818 = state_33683__$1;
(statearr_33754_33818[(2)] = null);

(statearr_33754_33818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (10))){
var inst_33561 = (state_33683[(13)]);
var inst_33563 = (state_33683[(14)]);
var inst_33571 = cljs.core._nth.call(null,inst_33561,inst_33563);
var inst_33572 = cljs.core.nth.call(null,inst_33571,(0),null);
var inst_33573 = cljs.core.nth.call(null,inst_33571,(1),null);
var state_33683__$1 = (function (){var statearr_33755 = state_33683;
(statearr_33755[(26)] = inst_33572);

return statearr_33755;
})();
if(cljs.core.truth_(inst_33573)){
var statearr_33756_33819 = state_33683__$1;
(statearr_33756_33819[(1)] = (13));

} else {
var statearr_33757_33820 = state_33683__$1;
(statearr_33757_33820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (18))){
var inst_33608 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33758_33821 = state_33683__$1;
(statearr_33758_33821[(2)] = inst_33608);

(statearr_33758_33821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (42))){
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33683__$1,(45),dchan);
} else {
if((state_val_33684 === (37))){
var inst_33551 = (state_33683[(9)]);
var inst_33651 = (state_33683[(23)]);
var inst_33642 = (state_33683[(25)]);
var inst_33651__$1 = cljs.core.first.call(null,inst_33642);
var inst_33652 = cljs.core.async.put_BANG_.call(null,inst_33651__$1,inst_33551,done);
var state_33683__$1 = (function (){var statearr_33759 = state_33683;
(statearr_33759[(23)] = inst_33651__$1);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33652)){
var statearr_33760_33822 = state_33683__$1;
(statearr_33760_33822[(1)] = (39));

} else {
var statearr_33761_33823 = state_33683__$1;
(statearr_33761_33823[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (8))){
var inst_33563 = (state_33683[(14)]);
var inst_33562 = (state_33683[(17)]);
var inst_33565 = (inst_33563 < inst_33562);
var inst_33566 = inst_33565;
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33566)){
var statearr_33762_33824 = state_33683__$1;
(statearr_33762_33824[(1)] = (10));

} else {
var statearr_33763_33825 = state_33683__$1;
(statearr_33763_33825[(1)] = (11));

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
});})(c__32418__auto___33771,cs,m,dchan,dctr,done))
;
return ((function (switch__32306__auto__,c__32418__auto___33771,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32307__auto__ = null;
var cljs$core$async$mult_$_state_machine__32307__auto____0 = (function (){
var statearr_33767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33767[(0)] = cljs$core$async$mult_$_state_machine__32307__auto__);

(statearr_33767[(1)] = (1));

return statearr_33767;
});
var cljs$core$async$mult_$_state_machine__32307__auto____1 = (function (state_33683){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_33683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e33768){if((e33768 instanceof Object)){
var ex__32310__auto__ = e33768;
var statearr_33769_33826 = state_33683;
(statearr_33769_33826[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33827 = state_33683;
state_33683 = G__33827;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32307__auto__ = function(state_33683){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32307__auto____1.call(this,state_33683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32307__auto____0;
cljs$core$async$mult_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32307__auto____1;
return cljs$core$async$mult_$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___33771,cs,m,dchan,dctr,done))
})();
var state__32420__auto__ = (function (){var statearr_33770 = f__32419__auto__.call(null);
(statearr_33770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___33771);

return statearr_33770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___33771,cs,m,dchan,dctr,done))
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
var args33828 = [];
var len__9525__auto___33831 = arguments.length;
var i__9526__auto___33832 = (0);
while(true){
if((i__9526__auto___33832 < len__9525__auto___33831)){
args33828.push((arguments[i__9526__auto___33832]));

var G__33833 = (i__9526__auto___33832 + (1));
i__9526__auto___33832 = G__33833;
continue;
} else {
}
break;
}

var G__33830 = args33828.length;
switch (G__33830) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33828.length)].join('')));

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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m,ch);
} else {
var m__9081__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m,ch);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m,ch);
} else {
var m__9081__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m,ch);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m);
} else {
var m__9081__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m,state_map);
} else {
var m__9081__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m,state_map);
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
var x__9080__auto__ = (((m == null))?null:m);
var m__9081__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,m,mode);
} else {
var m__9081__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9532__auto__ = [];
var len__9525__auto___33845 = arguments.length;
var i__9526__auto___33846 = (0);
while(true){
if((i__9526__auto___33846 < len__9525__auto___33845)){
args__9532__auto__.push((arguments[i__9526__auto___33846]));

var G__33847 = (i__9526__auto___33846 + (1));
i__9526__auto___33846 = G__33847;
continue;
} else {
}
break;
}

var argseq__9533__auto__ = ((((3) < args__9532__auto__.length))?(new cljs.core.IndexedSeq(args__9532__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9533__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33839){
var map__33840 = p__33839;
var map__33840__$1 = ((((!((map__33840 == null)))?((((map__33840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33840):map__33840);
var opts = map__33840__$1;
var statearr_33842_33848 = state;
(statearr_33842_33848[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33840,map__33840__$1,opts){
return (function (val){
var statearr_33843_33849 = state;
(statearr_33843_33849[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33840,map__33840__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33844_33850 = state;
(statearr_33844_33850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33835){
var G__33836 = cljs.core.first.call(null,seq33835);
var seq33835__$1 = cljs.core.next.call(null,seq33835);
var G__33837 = cljs.core.first.call(null,seq33835__$1);
var seq33835__$2 = cljs.core.next.call(null,seq33835__$1);
var G__33838 = cljs.core.first.call(null,seq33835__$2);
var seq33835__$3 = cljs.core.next.call(null,seq33835__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33836,G__33837,G__33838,seq33835__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34018 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34019){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34019 = meta34019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34020,meta34019__$1){
var self__ = this;
var _34020__$1 = this;
return (new cljs.core.async.t_cljs$core$async34018(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34019__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34020){
var self__ = this;
var _34020__$1 = this;
return self__.meta34019;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34019","meta34019",-275528376,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34018";

cljs.core.async.t_cljs$core$async34018.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async34018");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34018 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34018(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34019){
return (new cljs.core.async.t_cljs$core$async34018(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34019));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34018(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32418__auto___34185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___34185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___34185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (7))){
var inst_34037 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34124_34186 = state_34122__$1;
(statearr_34124_34186[(2)] = inst_34037);

(statearr_34124_34186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (20))){
var inst_34049 = (state_34122[(7)]);
var state_34122__$1 = state_34122;
var statearr_34125_34187 = state_34122__$1;
(statearr_34125_34187[(2)] = inst_34049);

(statearr_34125_34187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (27))){
var state_34122__$1 = state_34122;
var statearr_34126_34188 = state_34122__$1;
(statearr_34126_34188[(2)] = null);

(statearr_34126_34188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (1))){
var inst_34024 = (state_34122[(8)]);
var inst_34024__$1 = calc_state.call(null);
var inst_34026 = (inst_34024__$1 == null);
var inst_34027 = cljs.core.not.call(null,inst_34026);
var state_34122__$1 = (function (){var statearr_34127 = state_34122;
(statearr_34127[(8)] = inst_34024__$1);

return statearr_34127;
})();
if(inst_34027){
var statearr_34128_34189 = state_34122__$1;
(statearr_34128_34189[(1)] = (2));

} else {
var statearr_34129_34190 = state_34122__$1;
(statearr_34129_34190[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (24))){
var inst_34082 = (state_34122[(9)]);
var inst_34073 = (state_34122[(10)]);
var inst_34096 = (state_34122[(11)]);
var inst_34096__$1 = inst_34073.call(null,inst_34082);
var state_34122__$1 = (function (){var statearr_34130 = state_34122;
(statearr_34130[(11)] = inst_34096__$1);

return statearr_34130;
})();
if(cljs.core.truth_(inst_34096__$1)){
var statearr_34131_34191 = state_34122__$1;
(statearr_34131_34191[(1)] = (29));

} else {
var statearr_34132_34192 = state_34122__$1;
(statearr_34132_34192[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (4))){
var inst_34040 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34040)){
var statearr_34133_34193 = state_34122__$1;
(statearr_34133_34193[(1)] = (8));

} else {
var statearr_34134_34194 = state_34122__$1;
(statearr_34134_34194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (15))){
var inst_34067 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34067)){
var statearr_34135_34195 = state_34122__$1;
(statearr_34135_34195[(1)] = (19));

} else {
var statearr_34136_34196 = state_34122__$1;
(statearr_34136_34196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (21))){
var inst_34072 = (state_34122[(12)]);
var inst_34072__$1 = (state_34122[(2)]);
var inst_34073 = cljs.core.get.call(null,inst_34072__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34074 = cljs.core.get.call(null,inst_34072__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34075 = cljs.core.get.call(null,inst_34072__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34122__$1 = (function (){var statearr_34137 = state_34122;
(statearr_34137[(13)] = inst_34074);

(statearr_34137[(12)] = inst_34072__$1);

(statearr_34137[(10)] = inst_34073);

return statearr_34137;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34122__$1,(22),inst_34075);
} else {
if((state_val_34123 === (31))){
var inst_34104 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34104)){
var statearr_34138_34197 = state_34122__$1;
(statearr_34138_34197[(1)] = (32));

} else {
var statearr_34139_34198 = state_34122__$1;
(statearr_34139_34198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (32))){
var inst_34081 = (state_34122[(14)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34122__$1,(35),out,inst_34081);
} else {
if((state_val_34123 === (33))){
var inst_34072 = (state_34122[(12)]);
var inst_34049 = inst_34072;
var state_34122__$1 = (function (){var statearr_34140 = state_34122;
(statearr_34140[(7)] = inst_34049);

return statearr_34140;
})();
var statearr_34141_34199 = state_34122__$1;
(statearr_34141_34199[(2)] = null);

(statearr_34141_34199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (13))){
var inst_34049 = (state_34122[(7)]);
var inst_34056 = inst_34049.cljs$lang$protocol_mask$partition0$;
var inst_34057 = (inst_34056 & (64));
var inst_34058 = inst_34049.cljs$core$ISeq$;
var inst_34059 = (cljs.core.PROTOCOL_SENTINEL === inst_34058);
var inst_34060 = (inst_34057) || (inst_34059);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34060)){
var statearr_34142_34200 = state_34122__$1;
(statearr_34142_34200[(1)] = (16));

} else {
var statearr_34143_34201 = state_34122__$1;
(statearr_34143_34201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (22))){
var inst_34081 = (state_34122[(14)]);
var inst_34082 = (state_34122[(9)]);
var inst_34080 = (state_34122[(2)]);
var inst_34081__$1 = cljs.core.nth.call(null,inst_34080,(0),null);
var inst_34082__$1 = cljs.core.nth.call(null,inst_34080,(1),null);
var inst_34083 = (inst_34081__$1 == null);
var inst_34084 = cljs.core._EQ_.call(null,inst_34082__$1,change);
var inst_34085 = (inst_34083) || (inst_34084);
var state_34122__$1 = (function (){var statearr_34144 = state_34122;
(statearr_34144[(14)] = inst_34081__$1);

(statearr_34144[(9)] = inst_34082__$1);

return statearr_34144;
})();
if(cljs.core.truth_(inst_34085)){
var statearr_34145_34202 = state_34122__$1;
(statearr_34145_34202[(1)] = (23));

} else {
var statearr_34146_34203 = state_34122__$1;
(statearr_34146_34203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (36))){
var inst_34072 = (state_34122[(12)]);
var inst_34049 = inst_34072;
var state_34122__$1 = (function (){var statearr_34147 = state_34122;
(statearr_34147[(7)] = inst_34049);

return statearr_34147;
})();
var statearr_34148_34204 = state_34122__$1;
(statearr_34148_34204[(2)] = null);

(statearr_34148_34204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (29))){
var inst_34096 = (state_34122[(11)]);
var state_34122__$1 = state_34122;
var statearr_34149_34205 = state_34122__$1;
(statearr_34149_34205[(2)] = inst_34096);

(statearr_34149_34205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (6))){
var state_34122__$1 = state_34122;
var statearr_34150_34206 = state_34122__$1;
(statearr_34150_34206[(2)] = false);

(statearr_34150_34206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (28))){
var inst_34092 = (state_34122[(2)]);
var inst_34093 = calc_state.call(null);
var inst_34049 = inst_34093;
var state_34122__$1 = (function (){var statearr_34151 = state_34122;
(statearr_34151[(15)] = inst_34092);

(statearr_34151[(7)] = inst_34049);

return statearr_34151;
})();
var statearr_34152_34207 = state_34122__$1;
(statearr_34152_34207[(2)] = null);

(statearr_34152_34207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (25))){
var inst_34118 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34153_34208 = state_34122__$1;
(statearr_34153_34208[(2)] = inst_34118);

(statearr_34153_34208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (34))){
var inst_34116 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34154_34209 = state_34122__$1;
(statearr_34154_34209[(2)] = inst_34116);

(statearr_34154_34209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (17))){
var state_34122__$1 = state_34122;
var statearr_34155_34210 = state_34122__$1;
(statearr_34155_34210[(2)] = false);

(statearr_34155_34210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (3))){
var state_34122__$1 = state_34122;
var statearr_34156_34211 = state_34122__$1;
(statearr_34156_34211[(2)] = false);

(statearr_34156_34211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (12))){
var inst_34120 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (2))){
var inst_34024 = (state_34122[(8)]);
var inst_34029 = inst_34024.cljs$lang$protocol_mask$partition0$;
var inst_34030 = (inst_34029 & (64));
var inst_34031 = inst_34024.cljs$core$ISeq$;
var inst_34032 = (cljs.core.PROTOCOL_SENTINEL === inst_34031);
var inst_34033 = (inst_34030) || (inst_34032);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34033)){
var statearr_34157_34212 = state_34122__$1;
(statearr_34157_34212[(1)] = (5));

} else {
var statearr_34158_34213 = state_34122__$1;
(statearr_34158_34213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (23))){
var inst_34081 = (state_34122[(14)]);
var inst_34087 = (inst_34081 == null);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34087)){
var statearr_34159_34214 = state_34122__$1;
(statearr_34159_34214[(1)] = (26));

} else {
var statearr_34160_34215 = state_34122__$1;
(statearr_34160_34215[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (35))){
var inst_34107 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34107)){
var statearr_34161_34216 = state_34122__$1;
(statearr_34161_34216[(1)] = (36));

} else {
var statearr_34162_34217 = state_34122__$1;
(statearr_34162_34217[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (19))){
var inst_34049 = (state_34122[(7)]);
var inst_34069 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34049);
var state_34122__$1 = state_34122;
var statearr_34163_34218 = state_34122__$1;
(statearr_34163_34218[(2)] = inst_34069);

(statearr_34163_34218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (11))){
var inst_34049 = (state_34122[(7)]);
var inst_34053 = (inst_34049 == null);
var inst_34054 = cljs.core.not.call(null,inst_34053);
var state_34122__$1 = state_34122;
if(inst_34054){
var statearr_34164_34219 = state_34122__$1;
(statearr_34164_34219[(1)] = (13));

} else {
var statearr_34165_34220 = state_34122__$1;
(statearr_34165_34220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (9))){
var inst_34024 = (state_34122[(8)]);
var state_34122__$1 = state_34122;
var statearr_34166_34221 = state_34122__$1;
(statearr_34166_34221[(2)] = inst_34024);

(statearr_34166_34221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (5))){
var state_34122__$1 = state_34122;
var statearr_34167_34222 = state_34122__$1;
(statearr_34167_34222[(2)] = true);

(statearr_34167_34222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (14))){
var state_34122__$1 = state_34122;
var statearr_34168_34223 = state_34122__$1;
(statearr_34168_34223[(2)] = false);

(statearr_34168_34223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (26))){
var inst_34082 = (state_34122[(9)]);
var inst_34089 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34082);
var state_34122__$1 = state_34122;
var statearr_34169_34224 = state_34122__$1;
(statearr_34169_34224[(2)] = inst_34089);

(statearr_34169_34224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (16))){
var state_34122__$1 = state_34122;
var statearr_34170_34225 = state_34122__$1;
(statearr_34170_34225[(2)] = true);

(statearr_34170_34225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (38))){
var inst_34112 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34171_34226 = state_34122__$1;
(statearr_34171_34226[(2)] = inst_34112);

(statearr_34171_34226[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (30))){
var inst_34082 = (state_34122[(9)]);
var inst_34074 = (state_34122[(13)]);
var inst_34073 = (state_34122[(10)]);
var inst_34099 = cljs.core.empty_QMARK_.call(null,inst_34073);
var inst_34100 = inst_34074.call(null,inst_34082);
var inst_34101 = cljs.core.not.call(null,inst_34100);
var inst_34102 = (inst_34099) && (inst_34101);
var state_34122__$1 = state_34122;
var statearr_34172_34227 = state_34122__$1;
(statearr_34172_34227[(2)] = inst_34102);

(statearr_34172_34227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (10))){
var inst_34024 = (state_34122[(8)]);
var inst_34045 = (state_34122[(2)]);
var inst_34046 = cljs.core.get.call(null,inst_34045,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34047 = cljs.core.get.call(null,inst_34045,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34048 = cljs.core.get.call(null,inst_34045,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34049 = inst_34024;
var state_34122__$1 = (function (){var statearr_34173 = state_34122;
(statearr_34173[(16)] = inst_34047);

(statearr_34173[(17)] = inst_34046);

(statearr_34173[(7)] = inst_34049);

(statearr_34173[(18)] = inst_34048);

return statearr_34173;
})();
var statearr_34174_34228 = state_34122__$1;
(statearr_34174_34228[(2)] = null);

(statearr_34174_34228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (18))){
var inst_34064 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34175_34229 = state_34122__$1;
(statearr_34175_34229[(2)] = inst_34064);

(statearr_34175_34229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (37))){
var state_34122__$1 = state_34122;
var statearr_34176_34230 = state_34122__$1;
(statearr_34176_34230[(2)] = null);

(statearr_34176_34230[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (8))){
var inst_34024 = (state_34122[(8)]);
var inst_34042 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34024);
var state_34122__$1 = state_34122;
var statearr_34177_34231 = state_34122__$1;
(statearr_34177_34231[(2)] = inst_34042);

(statearr_34177_34231[(1)] = (10));


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
});})(c__32418__auto___34185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32306__auto__,c__32418__auto___34185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32307__auto__ = null;
var cljs$core$async$mix_$_state_machine__32307__auto____0 = (function (){
var statearr_34181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34181[(0)] = cljs$core$async$mix_$_state_machine__32307__auto__);

(statearr_34181[(1)] = (1));

return statearr_34181;
});
var cljs$core$async$mix_$_state_machine__32307__auto____1 = (function (state_34122){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34182){if((e34182 instanceof Object)){
var ex__32310__auto__ = e34182;
var statearr_34183_34232 = state_34122;
(statearr_34183_34232[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34233 = state_34122;
state_34122 = G__34233;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32307__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32307__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32307__auto____0;
cljs$core$async$mix_$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32307__auto____1;
return cljs$core$async$mix_$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___34185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32420__auto__ = (function (){var statearr_34184 = f__32419__auto__.call(null);
(statearr_34184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___34185);

return statearr_34184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___34185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9080__auto__ = (((p == null))?null:p);
var m__9081__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9081__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9080__auto__ = (((p == null))?null:p);
var m__9081__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,p,v,ch);
} else {
var m__9081__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34234 = [];
var len__9525__auto___34237 = arguments.length;
var i__9526__auto___34238 = (0);
while(true){
if((i__9526__auto___34238 < len__9525__auto___34237)){
args34234.push((arguments[i__9526__auto___34238]));

var G__34239 = (i__9526__auto___34238 + (1));
i__9526__auto___34238 = G__34239;
continue;
} else {
}
break;
}

var G__34236 = args34234.length;
switch (G__34236) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34234.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9080__auto__ = (((p == null))?null:p);
var m__9081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,p);
} else {
var m__9081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,p);
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
var x__9080__auto__ = (((p == null))?null:p);
var m__9081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9080__auto__)]);
if(!((m__9081__auto__ == null))){
return m__9081__auto__.call(null,p,v);
} else {
var m__9081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9081__auto____$1 == null))){
return m__9081__auto____$1.call(null,p,v);
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
var args34242 = [];
var len__9525__auto___34367 = arguments.length;
var i__9526__auto___34368 = (0);
while(true){
if((i__9526__auto___34368 < len__9525__auto___34367)){
args34242.push((arguments[i__9526__auto___34368]));

var G__34369 = (i__9526__auto___34368 + (1));
i__9526__auto___34368 = G__34369;
continue;
} else {
}
break;
}

var G__34244 = args34242.length;
switch (G__34244) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34242.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8417__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8417__auto__)){
return or__8417__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8417__auto__,mults){
return (function (p1__34241_SHARP_){
if(cljs.core.truth_(p1__34241_SHARP_.call(null,topic))){
return p1__34241_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34245 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34246){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34246 = meta34246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34247,meta34246__$1){
var self__ = this;
var _34247__$1 = this;
return (new cljs.core.async.t_cljs$core$async34245(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34246__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34247){
var self__ = this;
var _34247__$1 = this;
return self__.meta34246;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34246","meta34246",1417801467,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34245";

cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async34245");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34245 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34246){
return (new cljs.core.async.t_cljs$core$async34245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34246));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34245(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32418__auto___34371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___34371,mults,ensure_mult,p){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___34371,mults,ensure_mult,p){
return (function (state_34319){
var state_val_34320 = (state_34319[(1)]);
if((state_val_34320 === (7))){
var inst_34315 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34321_34372 = state_34319__$1;
(statearr_34321_34372[(2)] = inst_34315);

(statearr_34321_34372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (20))){
var state_34319__$1 = state_34319;
var statearr_34322_34373 = state_34319__$1;
(statearr_34322_34373[(2)] = null);

(statearr_34322_34373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (1))){
var state_34319__$1 = state_34319;
var statearr_34323_34374 = state_34319__$1;
(statearr_34323_34374[(2)] = null);

(statearr_34323_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (24))){
var inst_34298 = (state_34319[(7)]);
var inst_34307 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34298);
var state_34319__$1 = state_34319;
var statearr_34324_34375 = state_34319__$1;
(statearr_34324_34375[(2)] = inst_34307);

(statearr_34324_34375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (4))){
var inst_34250 = (state_34319[(8)]);
var inst_34250__$1 = (state_34319[(2)]);
var inst_34251 = (inst_34250__$1 == null);
var state_34319__$1 = (function (){var statearr_34325 = state_34319;
(statearr_34325[(8)] = inst_34250__$1);

return statearr_34325;
})();
if(cljs.core.truth_(inst_34251)){
var statearr_34326_34376 = state_34319__$1;
(statearr_34326_34376[(1)] = (5));

} else {
var statearr_34327_34377 = state_34319__$1;
(statearr_34327_34377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (15))){
var inst_34292 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34328_34378 = state_34319__$1;
(statearr_34328_34378[(2)] = inst_34292);

(statearr_34328_34378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (21))){
var inst_34312 = (state_34319[(2)]);
var state_34319__$1 = (function (){var statearr_34329 = state_34319;
(statearr_34329[(9)] = inst_34312);

return statearr_34329;
})();
var statearr_34330_34379 = state_34319__$1;
(statearr_34330_34379[(2)] = null);

(statearr_34330_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (13))){
var inst_34274 = (state_34319[(10)]);
var inst_34276 = cljs.core.chunked_seq_QMARK_.call(null,inst_34274);
var state_34319__$1 = state_34319;
if(inst_34276){
var statearr_34331_34380 = state_34319__$1;
(statearr_34331_34380[(1)] = (16));

} else {
var statearr_34332_34381 = state_34319__$1;
(statearr_34332_34381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (22))){
var inst_34304 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
if(cljs.core.truth_(inst_34304)){
var statearr_34333_34382 = state_34319__$1;
(statearr_34333_34382[(1)] = (23));

} else {
var statearr_34334_34383 = state_34319__$1;
(statearr_34334_34383[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (6))){
var inst_34250 = (state_34319[(8)]);
var inst_34298 = (state_34319[(7)]);
var inst_34300 = (state_34319[(11)]);
var inst_34298__$1 = topic_fn.call(null,inst_34250);
var inst_34299 = cljs.core.deref.call(null,mults);
var inst_34300__$1 = cljs.core.get.call(null,inst_34299,inst_34298__$1);
var state_34319__$1 = (function (){var statearr_34335 = state_34319;
(statearr_34335[(7)] = inst_34298__$1);

(statearr_34335[(11)] = inst_34300__$1);

return statearr_34335;
})();
if(cljs.core.truth_(inst_34300__$1)){
var statearr_34336_34384 = state_34319__$1;
(statearr_34336_34384[(1)] = (19));

} else {
var statearr_34337_34385 = state_34319__$1;
(statearr_34337_34385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (25))){
var inst_34309 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34338_34386 = state_34319__$1;
(statearr_34338_34386[(2)] = inst_34309);

(statearr_34338_34386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (17))){
var inst_34274 = (state_34319[(10)]);
var inst_34283 = cljs.core.first.call(null,inst_34274);
var inst_34284 = cljs.core.async.muxch_STAR_.call(null,inst_34283);
var inst_34285 = cljs.core.async.close_BANG_.call(null,inst_34284);
var inst_34286 = cljs.core.next.call(null,inst_34274);
var inst_34260 = inst_34286;
var inst_34261 = null;
var inst_34262 = (0);
var inst_34263 = (0);
var state_34319__$1 = (function (){var statearr_34339 = state_34319;
(statearr_34339[(12)] = inst_34261);

(statearr_34339[(13)] = inst_34262);

(statearr_34339[(14)] = inst_34260);

(statearr_34339[(15)] = inst_34263);

(statearr_34339[(16)] = inst_34285);

return statearr_34339;
})();
var statearr_34340_34387 = state_34319__$1;
(statearr_34340_34387[(2)] = null);

(statearr_34340_34387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (3))){
var inst_34317 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34319__$1,inst_34317);
} else {
if((state_val_34320 === (12))){
var inst_34294 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34341_34388 = state_34319__$1;
(statearr_34341_34388[(2)] = inst_34294);

(statearr_34341_34388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (2))){
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34319__$1,(4),ch);
} else {
if((state_val_34320 === (23))){
var state_34319__$1 = state_34319;
var statearr_34342_34389 = state_34319__$1;
(statearr_34342_34389[(2)] = null);

(statearr_34342_34389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (19))){
var inst_34250 = (state_34319[(8)]);
var inst_34300 = (state_34319[(11)]);
var inst_34302 = cljs.core.async.muxch_STAR_.call(null,inst_34300);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34319__$1,(22),inst_34302,inst_34250);
} else {
if((state_val_34320 === (11))){
var inst_34274 = (state_34319[(10)]);
var inst_34260 = (state_34319[(14)]);
var inst_34274__$1 = cljs.core.seq.call(null,inst_34260);
var state_34319__$1 = (function (){var statearr_34343 = state_34319;
(statearr_34343[(10)] = inst_34274__$1);

return statearr_34343;
})();
if(inst_34274__$1){
var statearr_34344_34390 = state_34319__$1;
(statearr_34344_34390[(1)] = (13));

} else {
var statearr_34345_34391 = state_34319__$1;
(statearr_34345_34391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (9))){
var inst_34296 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34346_34392 = state_34319__$1;
(statearr_34346_34392[(2)] = inst_34296);

(statearr_34346_34392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (5))){
var inst_34257 = cljs.core.deref.call(null,mults);
var inst_34258 = cljs.core.vals.call(null,inst_34257);
var inst_34259 = cljs.core.seq.call(null,inst_34258);
var inst_34260 = inst_34259;
var inst_34261 = null;
var inst_34262 = (0);
var inst_34263 = (0);
var state_34319__$1 = (function (){var statearr_34347 = state_34319;
(statearr_34347[(12)] = inst_34261);

(statearr_34347[(13)] = inst_34262);

(statearr_34347[(14)] = inst_34260);

(statearr_34347[(15)] = inst_34263);

return statearr_34347;
})();
var statearr_34348_34393 = state_34319__$1;
(statearr_34348_34393[(2)] = null);

(statearr_34348_34393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (14))){
var state_34319__$1 = state_34319;
var statearr_34352_34394 = state_34319__$1;
(statearr_34352_34394[(2)] = null);

(statearr_34352_34394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (16))){
var inst_34274 = (state_34319[(10)]);
var inst_34278 = cljs.core.chunk_first.call(null,inst_34274);
var inst_34279 = cljs.core.chunk_rest.call(null,inst_34274);
var inst_34280 = cljs.core.count.call(null,inst_34278);
var inst_34260 = inst_34279;
var inst_34261 = inst_34278;
var inst_34262 = inst_34280;
var inst_34263 = (0);
var state_34319__$1 = (function (){var statearr_34353 = state_34319;
(statearr_34353[(12)] = inst_34261);

(statearr_34353[(13)] = inst_34262);

(statearr_34353[(14)] = inst_34260);

(statearr_34353[(15)] = inst_34263);

return statearr_34353;
})();
var statearr_34354_34395 = state_34319__$1;
(statearr_34354_34395[(2)] = null);

(statearr_34354_34395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (10))){
var inst_34261 = (state_34319[(12)]);
var inst_34262 = (state_34319[(13)]);
var inst_34260 = (state_34319[(14)]);
var inst_34263 = (state_34319[(15)]);
var inst_34268 = cljs.core._nth.call(null,inst_34261,inst_34263);
var inst_34269 = cljs.core.async.muxch_STAR_.call(null,inst_34268);
var inst_34270 = cljs.core.async.close_BANG_.call(null,inst_34269);
var inst_34271 = (inst_34263 + (1));
var tmp34349 = inst_34261;
var tmp34350 = inst_34262;
var tmp34351 = inst_34260;
var inst_34260__$1 = tmp34351;
var inst_34261__$1 = tmp34349;
var inst_34262__$1 = tmp34350;
var inst_34263__$1 = inst_34271;
var state_34319__$1 = (function (){var statearr_34355 = state_34319;
(statearr_34355[(12)] = inst_34261__$1);

(statearr_34355[(17)] = inst_34270);

(statearr_34355[(13)] = inst_34262__$1);

(statearr_34355[(14)] = inst_34260__$1);

(statearr_34355[(15)] = inst_34263__$1);

return statearr_34355;
})();
var statearr_34356_34396 = state_34319__$1;
(statearr_34356_34396[(2)] = null);

(statearr_34356_34396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (18))){
var inst_34289 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34357_34397 = state_34319__$1;
(statearr_34357_34397[(2)] = inst_34289);

(statearr_34357_34397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (8))){
var inst_34262 = (state_34319[(13)]);
var inst_34263 = (state_34319[(15)]);
var inst_34265 = (inst_34263 < inst_34262);
var inst_34266 = inst_34265;
var state_34319__$1 = state_34319;
if(cljs.core.truth_(inst_34266)){
var statearr_34358_34398 = state_34319__$1;
(statearr_34358_34398[(1)] = (10));

} else {
var statearr_34359_34399 = state_34319__$1;
(statearr_34359_34399[(1)] = (11));

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
});})(c__32418__auto___34371,mults,ensure_mult,p))
;
return ((function (switch__32306__auto__,c__32418__auto___34371,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_34363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34363[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_34363[(1)] = (1));

return statearr_34363;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_34319){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34364){if((e34364 instanceof Object)){
var ex__32310__auto__ = e34364;
var statearr_34365_34400 = state_34319;
(statearr_34365_34400[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34401 = state_34319;
state_34319 = G__34401;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_34319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_34319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___34371,mults,ensure_mult,p))
})();
var state__32420__auto__ = (function (){var statearr_34366 = f__32419__auto__.call(null);
(statearr_34366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___34371);

return statearr_34366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___34371,mults,ensure_mult,p))
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
var args34402 = [];
var len__9525__auto___34405 = arguments.length;
var i__9526__auto___34406 = (0);
while(true){
if((i__9526__auto___34406 < len__9525__auto___34405)){
args34402.push((arguments[i__9526__auto___34406]));

var G__34407 = (i__9526__auto___34406 + (1));
i__9526__auto___34406 = G__34407;
continue;
} else {
}
break;
}

var G__34404 = args34402.length;
switch (G__34404) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34402.length)].join('')));

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
var args34409 = [];
var len__9525__auto___34412 = arguments.length;
var i__9526__auto___34413 = (0);
while(true){
if((i__9526__auto___34413 < len__9525__auto___34412)){
args34409.push((arguments[i__9526__auto___34413]));

var G__34414 = (i__9526__auto___34413 + (1));
i__9526__auto___34413 = G__34414;
continue;
} else {
}
break;
}

var G__34411 = args34409.length;
switch (G__34411) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34409.length)].join('')));

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
var args34416 = [];
var len__9525__auto___34487 = arguments.length;
var i__9526__auto___34488 = (0);
while(true){
if((i__9526__auto___34488 < len__9525__auto___34487)){
args34416.push((arguments[i__9526__auto___34488]));

var G__34489 = (i__9526__auto___34488 + (1));
i__9526__auto___34488 = G__34489;
continue;
} else {
}
break;
}

var G__34418 = args34416.length;
switch (G__34418) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34416.length)].join('')));

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
var c__32418__auto___34491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___34491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___34491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34457){
var state_val_34458 = (state_34457[(1)]);
if((state_val_34458 === (7))){
var state_34457__$1 = state_34457;
var statearr_34459_34492 = state_34457__$1;
(statearr_34459_34492[(2)] = null);

(statearr_34459_34492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (1))){
var state_34457__$1 = state_34457;
var statearr_34460_34493 = state_34457__$1;
(statearr_34460_34493[(2)] = null);

(statearr_34460_34493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (4))){
var inst_34421 = (state_34457[(7)]);
var inst_34423 = (inst_34421 < cnt);
var state_34457__$1 = state_34457;
if(cljs.core.truth_(inst_34423)){
var statearr_34461_34494 = state_34457__$1;
(statearr_34461_34494[(1)] = (6));

} else {
var statearr_34462_34495 = state_34457__$1;
(statearr_34462_34495[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (15))){
var inst_34453 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34463_34496 = state_34457__$1;
(statearr_34463_34496[(2)] = inst_34453);

(statearr_34463_34496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (13))){
var inst_34446 = cljs.core.async.close_BANG_.call(null,out);
var state_34457__$1 = state_34457;
var statearr_34464_34497 = state_34457__$1;
(statearr_34464_34497[(2)] = inst_34446);

(statearr_34464_34497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (6))){
var state_34457__$1 = state_34457;
var statearr_34465_34498 = state_34457__$1;
(statearr_34465_34498[(2)] = null);

(statearr_34465_34498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (3))){
var inst_34455 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34457__$1,inst_34455);
} else {
if((state_val_34458 === (12))){
var inst_34443 = (state_34457[(8)]);
var inst_34443__$1 = (state_34457[(2)]);
var inst_34444 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34443__$1);
var state_34457__$1 = (function (){var statearr_34466 = state_34457;
(statearr_34466[(8)] = inst_34443__$1);

return statearr_34466;
})();
if(cljs.core.truth_(inst_34444)){
var statearr_34467_34499 = state_34457__$1;
(statearr_34467_34499[(1)] = (13));

} else {
var statearr_34468_34500 = state_34457__$1;
(statearr_34468_34500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (2))){
var inst_34420 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34421 = (0);
var state_34457__$1 = (function (){var statearr_34469 = state_34457;
(statearr_34469[(7)] = inst_34421);

(statearr_34469[(9)] = inst_34420);

return statearr_34469;
})();
var statearr_34470_34501 = state_34457__$1;
(statearr_34470_34501[(2)] = null);

(statearr_34470_34501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (11))){
var inst_34421 = (state_34457[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34457,(10),Object,null,(9));
var inst_34430 = chs__$1.call(null,inst_34421);
var inst_34431 = done.call(null,inst_34421);
var inst_34432 = cljs.core.async.take_BANG_.call(null,inst_34430,inst_34431);
var state_34457__$1 = state_34457;
var statearr_34471_34502 = state_34457__$1;
(statearr_34471_34502[(2)] = inst_34432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (9))){
var inst_34421 = (state_34457[(7)]);
var inst_34434 = (state_34457[(2)]);
var inst_34435 = (inst_34421 + (1));
var inst_34421__$1 = inst_34435;
var state_34457__$1 = (function (){var statearr_34472 = state_34457;
(statearr_34472[(10)] = inst_34434);

(statearr_34472[(7)] = inst_34421__$1);

return statearr_34472;
})();
var statearr_34473_34503 = state_34457__$1;
(statearr_34473_34503[(2)] = null);

(statearr_34473_34503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (5))){
var inst_34441 = (state_34457[(2)]);
var state_34457__$1 = (function (){var statearr_34474 = state_34457;
(statearr_34474[(11)] = inst_34441);

return statearr_34474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34457__$1,(12),dchan);
} else {
if((state_val_34458 === (14))){
var inst_34443 = (state_34457[(8)]);
var inst_34448 = cljs.core.apply.call(null,f,inst_34443);
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34457__$1,(16),out,inst_34448);
} else {
if((state_val_34458 === (16))){
var inst_34450 = (state_34457[(2)]);
var state_34457__$1 = (function (){var statearr_34475 = state_34457;
(statearr_34475[(12)] = inst_34450);

return statearr_34475;
})();
var statearr_34476_34504 = state_34457__$1;
(statearr_34476_34504[(2)] = null);

(statearr_34476_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (10))){
var inst_34425 = (state_34457[(2)]);
var inst_34426 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34457__$1 = (function (){var statearr_34477 = state_34457;
(statearr_34477[(13)] = inst_34425);

return statearr_34477;
})();
var statearr_34478_34505 = state_34457__$1;
(statearr_34478_34505[(2)] = inst_34426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (8))){
var inst_34439 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34479_34506 = state_34457__$1;
(statearr_34479_34506[(2)] = inst_34439);

(statearr_34479_34506[(1)] = (5));


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
});})(c__32418__auto___34491,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32306__auto__,c__32418__auto___34491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_34483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34483[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_34483[(1)] = (1));

return statearr_34483;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_34457){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34484){if((e34484 instanceof Object)){
var ex__32310__auto__ = e34484;
var statearr_34485_34507 = state_34457;
(statearr_34485_34507[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34508 = state_34457;
state_34457 = G__34508;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_34457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_34457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___34491,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32420__auto__ = (function (){var statearr_34486 = f__32419__auto__.call(null);
(statearr_34486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___34491);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___34491,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34510 = [];
var len__9525__auto___34568 = arguments.length;
var i__9526__auto___34569 = (0);
while(true){
if((i__9526__auto___34569 < len__9525__auto___34568)){
args34510.push((arguments[i__9526__auto___34569]));

var G__34570 = (i__9526__auto___34569 + (1));
i__9526__auto___34569 = G__34570;
continue;
} else {
}
break;
}

var G__34512 = args34510.length;
switch (G__34512) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34510.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32418__auto___34572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___34572,out){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___34572,out){
return (function (state_34544){
var state_val_34545 = (state_34544[(1)]);
if((state_val_34545 === (7))){
var inst_34524 = (state_34544[(7)]);
var inst_34523 = (state_34544[(8)]);
var inst_34523__$1 = (state_34544[(2)]);
var inst_34524__$1 = cljs.core.nth.call(null,inst_34523__$1,(0),null);
var inst_34525 = cljs.core.nth.call(null,inst_34523__$1,(1),null);
var inst_34526 = (inst_34524__$1 == null);
var state_34544__$1 = (function (){var statearr_34546 = state_34544;
(statearr_34546[(7)] = inst_34524__$1);

(statearr_34546[(9)] = inst_34525);

(statearr_34546[(8)] = inst_34523__$1);

return statearr_34546;
})();
if(cljs.core.truth_(inst_34526)){
var statearr_34547_34573 = state_34544__$1;
(statearr_34547_34573[(1)] = (8));

} else {
var statearr_34548_34574 = state_34544__$1;
(statearr_34548_34574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (1))){
var inst_34513 = cljs.core.vec.call(null,chs);
var inst_34514 = inst_34513;
var state_34544__$1 = (function (){var statearr_34549 = state_34544;
(statearr_34549[(10)] = inst_34514);

return statearr_34549;
})();
var statearr_34550_34575 = state_34544__$1;
(statearr_34550_34575[(2)] = null);

(statearr_34550_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (4))){
var inst_34514 = (state_34544[(10)]);
var state_34544__$1 = state_34544;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34544__$1,(7),inst_34514);
} else {
if((state_val_34545 === (6))){
var inst_34540 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34551_34576 = state_34544__$1;
(statearr_34551_34576[(2)] = inst_34540);

(statearr_34551_34576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (3))){
var inst_34542 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34544__$1,inst_34542);
} else {
if((state_val_34545 === (2))){
var inst_34514 = (state_34544[(10)]);
var inst_34516 = cljs.core.count.call(null,inst_34514);
var inst_34517 = (inst_34516 > (0));
var state_34544__$1 = state_34544;
if(cljs.core.truth_(inst_34517)){
var statearr_34553_34577 = state_34544__$1;
(statearr_34553_34577[(1)] = (4));

} else {
var statearr_34554_34578 = state_34544__$1;
(statearr_34554_34578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (11))){
var inst_34514 = (state_34544[(10)]);
var inst_34533 = (state_34544[(2)]);
var tmp34552 = inst_34514;
var inst_34514__$1 = tmp34552;
var state_34544__$1 = (function (){var statearr_34555 = state_34544;
(statearr_34555[(10)] = inst_34514__$1);

(statearr_34555[(11)] = inst_34533);

return statearr_34555;
})();
var statearr_34556_34579 = state_34544__$1;
(statearr_34556_34579[(2)] = null);

(statearr_34556_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (9))){
var inst_34524 = (state_34544[(7)]);
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34544__$1,(11),out,inst_34524);
} else {
if((state_val_34545 === (5))){
var inst_34538 = cljs.core.async.close_BANG_.call(null,out);
var state_34544__$1 = state_34544;
var statearr_34557_34580 = state_34544__$1;
(statearr_34557_34580[(2)] = inst_34538);

(statearr_34557_34580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (10))){
var inst_34536 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34558_34581 = state_34544__$1;
(statearr_34558_34581[(2)] = inst_34536);

(statearr_34558_34581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (8))){
var inst_34514 = (state_34544[(10)]);
var inst_34524 = (state_34544[(7)]);
var inst_34525 = (state_34544[(9)]);
var inst_34523 = (state_34544[(8)]);
var inst_34528 = (function (){var cs = inst_34514;
var vec__34519 = inst_34523;
var v = inst_34524;
var c = inst_34525;
return ((function (cs,vec__34519,v,c,inst_34514,inst_34524,inst_34525,inst_34523,state_val_34545,c__32418__auto___34572,out){
return (function (p1__34509_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34509_SHARP_);
});
;})(cs,vec__34519,v,c,inst_34514,inst_34524,inst_34525,inst_34523,state_val_34545,c__32418__auto___34572,out))
})();
var inst_34529 = cljs.core.filterv.call(null,inst_34528,inst_34514);
var inst_34514__$1 = inst_34529;
var state_34544__$1 = (function (){var statearr_34559 = state_34544;
(statearr_34559[(10)] = inst_34514__$1);

return statearr_34559;
})();
var statearr_34560_34582 = state_34544__$1;
(statearr_34560_34582[(2)] = null);

(statearr_34560_34582[(1)] = (2));


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
});})(c__32418__auto___34572,out))
;
return ((function (switch__32306__auto__,c__32418__auto___34572,out){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_34544){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__32310__auto__ = e34565;
var statearr_34566_34583 = state_34544;
(statearr_34566_34583[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34584 = state_34544;
state_34544 = G__34584;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_34544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_34544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___34572,out))
})();
var state__32420__auto__ = (function (){var statearr_34567 = f__32419__auto__.call(null);
(statearr_34567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___34572);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___34572,out))
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
var args34585 = [];
var len__9525__auto___34634 = arguments.length;
var i__9526__auto___34635 = (0);
while(true){
if((i__9526__auto___34635 < len__9525__auto___34634)){
args34585.push((arguments[i__9526__auto___34635]));

var G__34636 = (i__9526__auto___34635 + (1));
i__9526__auto___34635 = G__34636;
continue;
} else {
}
break;
}

var G__34587 = args34585.length;
switch (G__34587) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34585.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32418__auto___34638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___34638,out){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___34638,out){
return (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (7))){
var inst_34593 = (state_34611[(7)]);
var inst_34593__$1 = (state_34611[(2)]);
var inst_34594 = (inst_34593__$1 == null);
var inst_34595 = cljs.core.not.call(null,inst_34594);
var state_34611__$1 = (function (){var statearr_34613 = state_34611;
(statearr_34613[(7)] = inst_34593__$1);

return statearr_34613;
})();
if(inst_34595){
var statearr_34614_34639 = state_34611__$1;
(statearr_34614_34639[(1)] = (8));

} else {
var statearr_34615_34640 = state_34611__$1;
(statearr_34615_34640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (1))){
var inst_34588 = (0);
var state_34611__$1 = (function (){var statearr_34616 = state_34611;
(statearr_34616[(8)] = inst_34588);

return statearr_34616;
})();
var statearr_34617_34641 = state_34611__$1;
(statearr_34617_34641[(2)] = null);

(statearr_34617_34641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (4))){
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34611__$1,(7),ch);
} else {
if((state_val_34612 === (6))){
var inst_34606 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34618_34642 = state_34611__$1;
(statearr_34618_34642[(2)] = inst_34606);

(statearr_34618_34642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var inst_34608 = (state_34611[(2)]);
var inst_34609 = cljs.core.async.close_BANG_.call(null,out);
var state_34611__$1 = (function (){var statearr_34619 = state_34611;
(statearr_34619[(9)] = inst_34608);

return statearr_34619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34611__$1,inst_34609);
} else {
if((state_val_34612 === (2))){
var inst_34588 = (state_34611[(8)]);
var inst_34590 = (inst_34588 < n);
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34590)){
var statearr_34620_34643 = state_34611__$1;
(statearr_34620_34643[(1)] = (4));

} else {
var statearr_34621_34644 = state_34611__$1;
(statearr_34621_34644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (11))){
var inst_34588 = (state_34611[(8)]);
var inst_34598 = (state_34611[(2)]);
var inst_34599 = (inst_34588 + (1));
var inst_34588__$1 = inst_34599;
var state_34611__$1 = (function (){var statearr_34622 = state_34611;
(statearr_34622[(8)] = inst_34588__$1);

(statearr_34622[(10)] = inst_34598);

return statearr_34622;
})();
var statearr_34623_34645 = state_34611__$1;
(statearr_34623_34645[(2)] = null);

(statearr_34623_34645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (9))){
var state_34611__$1 = state_34611;
var statearr_34624_34646 = state_34611__$1;
(statearr_34624_34646[(2)] = null);

(statearr_34624_34646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (5))){
var state_34611__$1 = state_34611;
var statearr_34625_34647 = state_34611__$1;
(statearr_34625_34647[(2)] = null);

(statearr_34625_34647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (10))){
var inst_34603 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34626_34648 = state_34611__$1;
(statearr_34626_34648[(2)] = inst_34603);

(statearr_34626_34648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (8))){
var inst_34593 = (state_34611[(7)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34611__$1,(11),out,inst_34593);
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
});})(c__32418__auto___34638,out))
;
return ((function (switch__32306__auto__,c__32418__auto___34638,out){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_34630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34630[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_34630[(1)] = (1));

return statearr_34630;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_34611){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34631){if((e34631 instanceof Object)){
var ex__32310__auto__ = e34631;
var statearr_34632_34649 = state_34611;
(statearr_34632_34649[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34650 = state_34611;
state_34611 = G__34650;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___34638,out))
})();
var state__32420__auto__ = (function (){var statearr_34633 = f__32419__auto__.call(null);
(statearr_34633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___34638);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___34638,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34658 = (function (f,ch,meta34659){
this.f = f;
this.ch = ch;
this.meta34659 = meta34659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34660,meta34659__$1){
var self__ = this;
var _34660__$1 = this;
return (new cljs.core.async.t_cljs$core$async34658(self__.f,self__.ch,meta34659__$1));
});

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34660){
var self__ = this;
var _34660__$1 = this;
return self__.meta34659;
});

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34661 = (function (f,ch,meta34659,_,fn1,meta34662){
this.f = f;
this.ch = ch;
this.meta34659 = meta34659;
this._ = _;
this.fn1 = fn1;
this.meta34662 = meta34662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34663,meta34662__$1){
var self__ = this;
var _34663__$1 = this;
return (new cljs.core.async.t_cljs$core$async34661(self__.f,self__.ch,self__.meta34659,self__._,self__.fn1,meta34662__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34663){
var self__ = this;
var _34663__$1 = this;
return self__.meta34662;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34661.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34651_SHARP_){
return f1.call(null,(((p1__34651_SHARP_ == null))?null:self__.f.call(null,p1__34651_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34661.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34659","meta34659",-569591261,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34658","cljs.core.async/t_cljs$core$async34658",-278094843,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34662","meta34662",996838281,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34661";

cljs.core.async.t_cljs$core$async34661.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async34661");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34661 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34661(f__$1,ch__$1,meta34659__$1,___$2,fn1__$1,meta34662){
return (new cljs.core.async.t_cljs$core$async34661(f__$1,ch__$1,meta34659__$1,___$2,fn1__$1,meta34662));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34661(self__.f,self__.ch,self__.meta34659,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8405__auto__ = ret;
if(cljs.core.truth_(and__8405__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8405__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34659","meta34659",-569591261,null)], null);
});

cljs.core.async.t_cljs$core$async34658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34658";

cljs.core.async.t_cljs$core$async34658.cljs$lang$ctorPrWriter = (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async34658");
});

cljs.core.async.__GT_t_cljs$core$async34658 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34658(f__$1,ch__$1,meta34659){
return (new cljs.core.async.t_cljs$core$async34658(f__$1,ch__$1,meta34659));
});

}

return (new cljs.core.async.t_cljs$core$async34658(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34667 = (function (f,ch,meta34668){
this.f = f;
this.ch = ch;
this.meta34668 = meta34668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34669,meta34668__$1){
var self__ = this;
var _34669__$1 = this;
return (new cljs.core.async.t_cljs$core$async34667(self__.f,self__.ch,meta34668__$1));
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34669){
var self__ = this;
var _34669__$1 = this;
return self__.meta34668;
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34668","meta34668",1749701963,null)], null);
});

cljs.core.async.t_cljs$core$async34667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34667";

cljs.core.async.t_cljs$core$async34667.cljs$lang$ctorPrWriter = (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async34667");
});

cljs.core.async.__GT_t_cljs$core$async34667 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34667(f__$1,ch__$1,meta34668){
return (new cljs.core.async.t_cljs$core$async34667(f__$1,ch__$1,meta34668));
});

}

return (new cljs.core.async.t_cljs$core$async34667(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34673 = (function (p,ch,meta34674){
this.p = p;
this.ch = ch;
this.meta34674 = meta34674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34675,meta34674__$1){
var self__ = this;
var _34675__$1 = this;
return (new cljs.core.async.t_cljs$core$async34673(self__.p,self__.ch,meta34674__$1));
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34675){
var self__ = this;
var _34675__$1 = this;
return self__.meta34674;
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34674","meta34674",-1087466644,null)], null);
});

cljs.core.async.t_cljs$core$async34673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34673";

cljs.core.async.t_cljs$core$async34673.cljs$lang$ctorPrWriter = (function (this__9023__auto__,writer__9024__auto__,opt__9025__auto__){
return cljs.core._write.call(null,writer__9024__auto__,"cljs.core.async/t_cljs$core$async34673");
});

cljs.core.async.__GT_t_cljs$core$async34673 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34673(p__$1,ch__$1,meta34674){
return (new cljs.core.async.t_cljs$core$async34673(p__$1,ch__$1,meta34674));
});

}

return (new cljs.core.async.t_cljs$core$async34673(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34676 = [];
var len__9525__auto___34720 = arguments.length;
var i__9526__auto___34721 = (0);
while(true){
if((i__9526__auto___34721 < len__9525__auto___34720)){
args34676.push((arguments[i__9526__auto___34721]));

var G__34722 = (i__9526__auto___34721 + (1));
i__9526__auto___34721 = G__34722;
continue;
} else {
}
break;
}

var G__34678 = args34676.length;
switch (G__34678) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34676.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32418__auto___34724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___34724,out){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___34724,out){
return (function (state_34699){
var state_val_34700 = (state_34699[(1)]);
if((state_val_34700 === (7))){
var inst_34695 = (state_34699[(2)]);
var state_34699__$1 = state_34699;
var statearr_34701_34725 = state_34699__$1;
(statearr_34701_34725[(2)] = inst_34695);

(statearr_34701_34725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (1))){
var state_34699__$1 = state_34699;
var statearr_34702_34726 = state_34699__$1;
(statearr_34702_34726[(2)] = null);

(statearr_34702_34726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (4))){
var inst_34681 = (state_34699[(7)]);
var inst_34681__$1 = (state_34699[(2)]);
var inst_34682 = (inst_34681__$1 == null);
var state_34699__$1 = (function (){var statearr_34703 = state_34699;
(statearr_34703[(7)] = inst_34681__$1);

return statearr_34703;
})();
if(cljs.core.truth_(inst_34682)){
var statearr_34704_34727 = state_34699__$1;
(statearr_34704_34727[(1)] = (5));

} else {
var statearr_34705_34728 = state_34699__$1;
(statearr_34705_34728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (6))){
var inst_34681 = (state_34699[(7)]);
var inst_34686 = p.call(null,inst_34681);
var state_34699__$1 = state_34699;
if(cljs.core.truth_(inst_34686)){
var statearr_34706_34729 = state_34699__$1;
(statearr_34706_34729[(1)] = (8));

} else {
var statearr_34707_34730 = state_34699__$1;
(statearr_34707_34730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (3))){
var inst_34697 = (state_34699[(2)]);
var state_34699__$1 = state_34699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34699__$1,inst_34697);
} else {
if((state_val_34700 === (2))){
var state_34699__$1 = state_34699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34699__$1,(4),ch);
} else {
if((state_val_34700 === (11))){
var inst_34689 = (state_34699[(2)]);
var state_34699__$1 = state_34699;
var statearr_34708_34731 = state_34699__$1;
(statearr_34708_34731[(2)] = inst_34689);

(statearr_34708_34731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (9))){
var state_34699__$1 = state_34699;
var statearr_34709_34732 = state_34699__$1;
(statearr_34709_34732[(2)] = null);

(statearr_34709_34732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (5))){
var inst_34684 = cljs.core.async.close_BANG_.call(null,out);
var state_34699__$1 = state_34699;
var statearr_34710_34733 = state_34699__$1;
(statearr_34710_34733[(2)] = inst_34684);

(statearr_34710_34733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (10))){
var inst_34692 = (state_34699[(2)]);
var state_34699__$1 = (function (){var statearr_34711 = state_34699;
(statearr_34711[(8)] = inst_34692);

return statearr_34711;
})();
var statearr_34712_34734 = state_34699__$1;
(statearr_34712_34734[(2)] = null);

(statearr_34712_34734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (8))){
var inst_34681 = (state_34699[(7)]);
var state_34699__$1 = state_34699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34699__$1,(11),out,inst_34681);
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
});})(c__32418__auto___34724,out))
;
return ((function (switch__32306__auto__,c__32418__auto___34724,out){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_34716 = [null,null,null,null,null,null,null,null,null];
(statearr_34716[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_34716[(1)] = (1));

return statearr_34716;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_34699){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34717){if((e34717 instanceof Object)){
var ex__32310__auto__ = e34717;
var statearr_34718_34735 = state_34699;
(statearr_34718_34735[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34736 = state_34699;
state_34699 = G__34736;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_34699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_34699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___34724,out))
})();
var state__32420__auto__ = (function (){var statearr_34719 = f__32419__auto__.call(null);
(statearr_34719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___34724);

return statearr_34719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___34724,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34737 = [];
var len__9525__auto___34740 = arguments.length;
var i__9526__auto___34741 = (0);
while(true){
if((i__9526__auto___34741 < len__9525__auto___34740)){
args34737.push((arguments[i__9526__auto___34741]));

var G__34742 = (i__9526__auto___34741 + (1));
i__9526__auto___34741 = G__34742;
continue;
} else {
}
break;
}

var G__34739 = args34737.length;
switch (G__34739) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34737.length)].join('')));

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
var c__32418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto__){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto__){
return (function (state_34909){
var state_val_34910 = (state_34909[(1)]);
if((state_val_34910 === (7))){
var inst_34905 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34911_34952 = state_34909__$1;
(statearr_34911_34952[(2)] = inst_34905);

(statearr_34911_34952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (20))){
var inst_34875 = (state_34909[(7)]);
var inst_34886 = (state_34909[(2)]);
var inst_34887 = cljs.core.next.call(null,inst_34875);
var inst_34861 = inst_34887;
var inst_34862 = null;
var inst_34863 = (0);
var inst_34864 = (0);
var state_34909__$1 = (function (){var statearr_34912 = state_34909;
(statearr_34912[(8)] = inst_34863);

(statearr_34912[(9)] = inst_34862);

(statearr_34912[(10)] = inst_34886);

(statearr_34912[(11)] = inst_34864);

(statearr_34912[(12)] = inst_34861);

return statearr_34912;
})();
var statearr_34913_34953 = state_34909__$1;
(statearr_34913_34953[(2)] = null);

(statearr_34913_34953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (1))){
var state_34909__$1 = state_34909;
var statearr_34914_34954 = state_34909__$1;
(statearr_34914_34954[(2)] = null);

(statearr_34914_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (4))){
var inst_34850 = (state_34909[(13)]);
var inst_34850__$1 = (state_34909[(2)]);
var inst_34851 = (inst_34850__$1 == null);
var state_34909__$1 = (function (){var statearr_34915 = state_34909;
(statearr_34915[(13)] = inst_34850__$1);

return statearr_34915;
})();
if(cljs.core.truth_(inst_34851)){
var statearr_34916_34955 = state_34909__$1;
(statearr_34916_34955[(1)] = (5));

} else {
var statearr_34917_34956 = state_34909__$1;
(statearr_34917_34956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (15))){
var state_34909__$1 = state_34909;
var statearr_34921_34957 = state_34909__$1;
(statearr_34921_34957[(2)] = null);

(statearr_34921_34957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (21))){
var state_34909__$1 = state_34909;
var statearr_34922_34958 = state_34909__$1;
(statearr_34922_34958[(2)] = null);

(statearr_34922_34958[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (13))){
var inst_34863 = (state_34909[(8)]);
var inst_34862 = (state_34909[(9)]);
var inst_34864 = (state_34909[(11)]);
var inst_34861 = (state_34909[(12)]);
var inst_34871 = (state_34909[(2)]);
var inst_34872 = (inst_34864 + (1));
var tmp34918 = inst_34863;
var tmp34919 = inst_34862;
var tmp34920 = inst_34861;
var inst_34861__$1 = tmp34920;
var inst_34862__$1 = tmp34919;
var inst_34863__$1 = tmp34918;
var inst_34864__$1 = inst_34872;
var state_34909__$1 = (function (){var statearr_34923 = state_34909;
(statearr_34923[(8)] = inst_34863__$1);

(statearr_34923[(9)] = inst_34862__$1);

(statearr_34923[(14)] = inst_34871);

(statearr_34923[(11)] = inst_34864__$1);

(statearr_34923[(12)] = inst_34861__$1);

return statearr_34923;
})();
var statearr_34924_34959 = state_34909__$1;
(statearr_34924_34959[(2)] = null);

(statearr_34924_34959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (22))){
var state_34909__$1 = state_34909;
var statearr_34925_34960 = state_34909__$1;
(statearr_34925_34960[(2)] = null);

(statearr_34925_34960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (6))){
var inst_34850 = (state_34909[(13)]);
var inst_34859 = f.call(null,inst_34850);
var inst_34860 = cljs.core.seq.call(null,inst_34859);
var inst_34861 = inst_34860;
var inst_34862 = null;
var inst_34863 = (0);
var inst_34864 = (0);
var state_34909__$1 = (function (){var statearr_34926 = state_34909;
(statearr_34926[(8)] = inst_34863);

(statearr_34926[(9)] = inst_34862);

(statearr_34926[(11)] = inst_34864);

(statearr_34926[(12)] = inst_34861);

return statearr_34926;
})();
var statearr_34927_34961 = state_34909__$1;
(statearr_34927_34961[(2)] = null);

(statearr_34927_34961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (17))){
var inst_34875 = (state_34909[(7)]);
var inst_34879 = cljs.core.chunk_first.call(null,inst_34875);
var inst_34880 = cljs.core.chunk_rest.call(null,inst_34875);
var inst_34881 = cljs.core.count.call(null,inst_34879);
var inst_34861 = inst_34880;
var inst_34862 = inst_34879;
var inst_34863 = inst_34881;
var inst_34864 = (0);
var state_34909__$1 = (function (){var statearr_34928 = state_34909;
(statearr_34928[(8)] = inst_34863);

(statearr_34928[(9)] = inst_34862);

(statearr_34928[(11)] = inst_34864);

(statearr_34928[(12)] = inst_34861);

return statearr_34928;
})();
var statearr_34929_34962 = state_34909__$1;
(statearr_34929_34962[(2)] = null);

(statearr_34929_34962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (3))){
var inst_34907 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34909__$1,inst_34907);
} else {
if((state_val_34910 === (12))){
var inst_34895 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34930_34963 = state_34909__$1;
(statearr_34930_34963[(2)] = inst_34895);

(statearr_34930_34963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (2))){
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34909__$1,(4),in$);
} else {
if((state_val_34910 === (23))){
var inst_34903 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34931_34964 = state_34909__$1;
(statearr_34931_34964[(2)] = inst_34903);

(statearr_34931_34964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (19))){
var inst_34890 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34932_34965 = state_34909__$1;
(statearr_34932_34965[(2)] = inst_34890);

(statearr_34932_34965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (11))){
var inst_34875 = (state_34909[(7)]);
var inst_34861 = (state_34909[(12)]);
var inst_34875__$1 = cljs.core.seq.call(null,inst_34861);
var state_34909__$1 = (function (){var statearr_34933 = state_34909;
(statearr_34933[(7)] = inst_34875__$1);

return statearr_34933;
})();
if(inst_34875__$1){
var statearr_34934_34966 = state_34909__$1;
(statearr_34934_34966[(1)] = (14));

} else {
var statearr_34935_34967 = state_34909__$1;
(statearr_34935_34967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (9))){
var inst_34897 = (state_34909[(2)]);
var inst_34898 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34909__$1 = (function (){var statearr_34936 = state_34909;
(statearr_34936[(15)] = inst_34897);

return statearr_34936;
})();
if(cljs.core.truth_(inst_34898)){
var statearr_34937_34968 = state_34909__$1;
(statearr_34937_34968[(1)] = (21));

} else {
var statearr_34938_34969 = state_34909__$1;
(statearr_34938_34969[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (5))){
var inst_34853 = cljs.core.async.close_BANG_.call(null,out);
var state_34909__$1 = state_34909;
var statearr_34939_34970 = state_34909__$1;
(statearr_34939_34970[(2)] = inst_34853);

(statearr_34939_34970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (14))){
var inst_34875 = (state_34909[(7)]);
var inst_34877 = cljs.core.chunked_seq_QMARK_.call(null,inst_34875);
var state_34909__$1 = state_34909;
if(inst_34877){
var statearr_34940_34971 = state_34909__$1;
(statearr_34940_34971[(1)] = (17));

} else {
var statearr_34941_34972 = state_34909__$1;
(statearr_34941_34972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (16))){
var inst_34893 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34942_34973 = state_34909__$1;
(statearr_34942_34973[(2)] = inst_34893);

(statearr_34942_34973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (10))){
var inst_34862 = (state_34909[(9)]);
var inst_34864 = (state_34909[(11)]);
var inst_34869 = cljs.core._nth.call(null,inst_34862,inst_34864);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34909__$1,(13),out,inst_34869);
} else {
if((state_val_34910 === (18))){
var inst_34875 = (state_34909[(7)]);
var inst_34884 = cljs.core.first.call(null,inst_34875);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34909__$1,(20),out,inst_34884);
} else {
if((state_val_34910 === (8))){
var inst_34863 = (state_34909[(8)]);
var inst_34864 = (state_34909[(11)]);
var inst_34866 = (inst_34864 < inst_34863);
var inst_34867 = inst_34866;
var state_34909__$1 = state_34909;
if(cljs.core.truth_(inst_34867)){
var statearr_34943_34974 = state_34909__$1;
(statearr_34943_34974[(1)] = (10));

} else {
var statearr_34944_34975 = state_34909__$1;
(statearr_34944_34975[(1)] = (11));

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
});})(c__32418__auto__))
;
return ((function (switch__32306__auto__,c__32418__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32307__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32307__auto____0 = (function (){
var statearr_34948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34948[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32307__auto__);

(statearr_34948[(1)] = (1));

return statearr_34948;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32307__auto____1 = (function (state_34909){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_34909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e34949){if((e34949 instanceof Object)){
var ex__32310__auto__ = e34949;
var statearr_34950_34976 = state_34909;
(statearr_34950_34976[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34977 = state_34909;
state_34909 = G__34977;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32307__auto__ = function(state_34909){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32307__auto____1.call(this,state_34909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32307__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32307__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto__))
})();
var state__32420__auto__ = (function (){var statearr_34951 = f__32419__auto__.call(null);
(statearr_34951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto__);

return statearr_34951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto__))
);

return c__32418__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34978 = [];
var len__9525__auto___34981 = arguments.length;
var i__9526__auto___34982 = (0);
while(true){
if((i__9526__auto___34982 < len__9525__auto___34981)){
args34978.push((arguments[i__9526__auto___34982]));

var G__34983 = (i__9526__auto___34982 + (1));
i__9526__auto___34982 = G__34983;
continue;
} else {
}
break;
}

var G__34980 = args34978.length;
switch (G__34980) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34978.length)].join('')));

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
var args34985 = [];
var len__9525__auto___34988 = arguments.length;
var i__9526__auto___34989 = (0);
while(true){
if((i__9526__auto___34989 < len__9525__auto___34988)){
args34985.push((arguments[i__9526__auto___34989]));

var G__34990 = (i__9526__auto___34989 + (1));
i__9526__auto___34989 = G__34990;
continue;
} else {
}
break;
}

var G__34987 = args34985.length;
switch (G__34987) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34985.length)].join('')));

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
var args34992 = [];
var len__9525__auto___35043 = arguments.length;
var i__9526__auto___35044 = (0);
while(true){
if((i__9526__auto___35044 < len__9525__auto___35043)){
args34992.push((arguments[i__9526__auto___35044]));

var G__35045 = (i__9526__auto___35044 + (1));
i__9526__auto___35044 = G__35045;
continue;
} else {
}
break;
}

var G__34994 = args34992.length;
switch (G__34994) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34992.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32418__auto___35047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___35047,out){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___35047,out){
return (function (state_35018){
var state_val_35019 = (state_35018[(1)]);
if((state_val_35019 === (7))){
var inst_35013 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35020_35048 = state_35018__$1;
(statearr_35020_35048[(2)] = inst_35013);

(statearr_35020_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (1))){
var inst_34995 = null;
var state_35018__$1 = (function (){var statearr_35021 = state_35018;
(statearr_35021[(7)] = inst_34995);

return statearr_35021;
})();
var statearr_35022_35049 = state_35018__$1;
(statearr_35022_35049[(2)] = null);

(statearr_35022_35049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (4))){
var inst_34998 = (state_35018[(8)]);
var inst_34998__$1 = (state_35018[(2)]);
var inst_34999 = (inst_34998__$1 == null);
var inst_35000 = cljs.core.not.call(null,inst_34999);
var state_35018__$1 = (function (){var statearr_35023 = state_35018;
(statearr_35023[(8)] = inst_34998__$1);

return statearr_35023;
})();
if(inst_35000){
var statearr_35024_35050 = state_35018__$1;
(statearr_35024_35050[(1)] = (5));

} else {
var statearr_35025_35051 = state_35018__$1;
(statearr_35025_35051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (6))){
var state_35018__$1 = state_35018;
var statearr_35026_35052 = state_35018__$1;
(statearr_35026_35052[(2)] = null);

(statearr_35026_35052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (3))){
var inst_35015 = (state_35018[(2)]);
var inst_35016 = cljs.core.async.close_BANG_.call(null,out);
var state_35018__$1 = (function (){var statearr_35027 = state_35018;
(statearr_35027[(9)] = inst_35015);

return statearr_35027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35018__$1,inst_35016);
} else {
if((state_val_35019 === (2))){
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35018__$1,(4),ch);
} else {
if((state_val_35019 === (11))){
var inst_34998 = (state_35018[(8)]);
var inst_35007 = (state_35018[(2)]);
var inst_34995 = inst_34998;
var state_35018__$1 = (function (){var statearr_35028 = state_35018;
(statearr_35028[(7)] = inst_34995);

(statearr_35028[(10)] = inst_35007);

return statearr_35028;
})();
var statearr_35029_35053 = state_35018__$1;
(statearr_35029_35053[(2)] = null);

(statearr_35029_35053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (9))){
var inst_34998 = (state_35018[(8)]);
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35018__$1,(11),out,inst_34998);
} else {
if((state_val_35019 === (5))){
var inst_34995 = (state_35018[(7)]);
var inst_34998 = (state_35018[(8)]);
var inst_35002 = cljs.core._EQ_.call(null,inst_34998,inst_34995);
var state_35018__$1 = state_35018;
if(inst_35002){
var statearr_35031_35054 = state_35018__$1;
(statearr_35031_35054[(1)] = (8));

} else {
var statearr_35032_35055 = state_35018__$1;
(statearr_35032_35055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (10))){
var inst_35010 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35033_35056 = state_35018__$1;
(statearr_35033_35056[(2)] = inst_35010);

(statearr_35033_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (8))){
var inst_34995 = (state_35018[(7)]);
var tmp35030 = inst_34995;
var inst_34995__$1 = tmp35030;
var state_35018__$1 = (function (){var statearr_35034 = state_35018;
(statearr_35034[(7)] = inst_34995__$1);

return statearr_35034;
})();
var statearr_35035_35057 = state_35018__$1;
(statearr_35035_35057[(2)] = null);

(statearr_35035_35057[(1)] = (2));


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
});})(c__32418__auto___35047,out))
;
return ((function (switch__32306__auto__,c__32418__auto___35047,out){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_35039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35039[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_35039[(1)] = (1));

return statearr_35039;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_35018){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_35018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e35040){if((e35040 instanceof Object)){
var ex__32310__auto__ = e35040;
var statearr_35041_35058 = state_35018;
(statearr_35041_35058[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35059 = state_35018;
state_35018 = G__35059;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_35018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_35018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___35047,out))
})();
var state__32420__auto__ = (function (){var statearr_35042 = f__32419__auto__.call(null);
(statearr_35042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___35047);

return statearr_35042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___35047,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35060 = [];
var len__9525__auto___35130 = arguments.length;
var i__9526__auto___35131 = (0);
while(true){
if((i__9526__auto___35131 < len__9525__auto___35130)){
args35060.push((arguments[i__9526__auto___35131]));

var G__35132 = (i__9526__auto___35131 + (1));
i__9526__auto___35131 = G__35132;
continue;
} else {
}
break;
}

var G__35062 = args35060.length;
switch (G__35062) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35060.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32418__auto___35134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___35134,out){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___35134,out){
return (function (state_35100){
var state_val_35101 = (state_35100[(1)]);
if((state_val_35101 === (7))){
var inst_35096 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
var statearr_35102_35135 = state_35100__$1;
(statearr_35102_35135[(2)] = inst_35096);

(statearr_35102_35135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (1))){
var inst_35063 = (new Array(n));
var inst_35064 = inst_35063;
var inst_35065 = (0);
var state_35100__$1 = (function (){var statearr_35103 = state_35100;
(statearr_35103[(7)] = inst_35064);

(statearr_35103[(8)] = inst_35065);

return statearr_35103;
})();
var statearr_35104_35136 = state_35100__$1;
(statearr_35104_35136[(2)] = null);

(statearr_35104_35136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (4))){
var inst_35068 = (state_35100[(9)]);
var inst_35068__$1 = (state_35100[(2)]);
var inst_35069 = (inst_35068__$1 == null);
var inst_35070 = cljs.core.not.call(null,inst_35069);
var state_35100__$1 = (function (){var statearr_35105 = state_35100;
(statearr_35105[(9)] = inst_35068__$1);

return statearr_35105;
})();
if(inst_35070){
var statearr_35106_35137 = state_35100__$1;
(statearr_35106_35137[(1)] = (5));

} else {
var statearr_35107_35138 = state_35100__$1;
(statearr_35107_35138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (15))){
var inst_35090 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
var statearr_35108_35139 = state_35100__$1;
(statearr_35108_35139[(2)] = inst_35090);

(statearr_35108_35139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (13))){
var state_35100__$1 = state_35100;
var statearr_35109_35140 = state_35100__$1;
(statearr_35109_35140[(2)] = null);

(statearr_35109_35140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (6))){
var inst_35065 = (state_35100[(8)]);
var inst_35086 = (inst_35065 > (0));
var state_35100__$1 = state_35100;
if(cljs.core.truth_(inst_35086)){
var statearr_35110_35141 = state_35100__$1;
(statearr_35110_35141[(1)] = (12));

} else {
var statearr_35111_35142 = state_35100__$1;
(statearr_35111_35142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (3))){
var inst_35098 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35100__$1,inst_35098);
} else {
if((state_val_35101 === (12))){
var inst_35064 = (state_35100[(7)]);
var inst_35088 = cljs.core.vec.call(null,inst_35064);
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35100__$1,(15),out,inst_35088);
} else {
if((state_val_35101 === (2))){
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35100__$1,(4),ch);
} else {
if((state_val_35101 === (11))){
var inst_35080 = (state_35100[(2)]);
var inst_35081 = (new Array(n));
var inst_35064 = inst_35081;
var inst_35065 = (0);
var state_35100__$1 = (function (){var statearr_35112 = state_35100;
(statearr_35112[(7)] = inst_35064);

(statearr_35112[(10)] = inst_35080);

(statearr_35112[(8)] = inst_35065);

return statearr_35112;
})();
var statearr_35113_35143 = state_35100__$1;
(statearr_35113_35143[(2)] = null);

(statearr_35113_35143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (9))){
var inst_35064 = (state_35100[(7)]);
var inst_35078 = cljs.core.vec.call(null,inst_35064);
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35100__$1,(11),out,inst_35078);
} else {
if((state_val_35101 === (5))){
var inst_35064 = (state_35100[(7)]);
var inst_35068 = (state_35100[(9)]);
var inst_35073 = (state_35100[(11)]);
var inst_35065 = (state_35100[(8)]);
var inst_35072 = (inst_35064[inst_35065] = inst_35068);
var inst_35073__$1 = (inst_35065 + (1));
var inst_35074 = (inst_35073__$1 < n);
var state_35100__$1 = (function (){var statearr_35114 = state_35100;
(statearr_35114[(12)] = inst_35072);

(statearr_35114[(11)] = inst_35073__$1);

return statearr_35114;
})();
if(cljs.core.truth_(inst_35074)){
var statearr_35115_35144 = state_35100__$1;
(statearr_35115_35144[(1)] = (8));

} else {
var statearr_35116_35145 = state_35100__$1;
(statearr_35116_35145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (14))){
var inst_35093 = (state_35100[(2)]);
var inst_35094 = cljs.core.async.close_BANG_.call(null,out);
var state_35100__$1 = (function (){var statearr_35118 = state_35100;
(statearr_35118[(13)] = inst_35093);

return statearr_35118;
})();
var statearr_35119_35146 = state_35100__$1;
(statearr_35119_35146[(2)] = inst_35094);

(statearr_35119_35146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (10))){
var inst_35084 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
var statearr_35120_35147 = state_35100__$1;
(statearr_35120_35147[(2)] = inst_35084);

(statearr_35120_35147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (8))){
var inst_35064 = (state_35100[(7)]);
var inst_35073 = (state_35100[(11)]);
var tmp35117 = inst_35064;
var inst_35064__$1 = tmp35117;
var inst_35065 = inst_35073;
var state_35100__$1 = (function (){var statearr_35121 = state_35100;
(statearr_35121[(7)] = inst_35064__$1);

(statearr_35121[(8)] = inst_35065);

return statearr_35121;
})();
var statearr_35122_35148 = state_35100__$1;
(statearr_35122_35148[(2)] = null);

(statearr_35122_35148[(1)] = (2));


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
});})(c__32418__auto___35134,out))
;
return ((function (switch__32306__auto__,c__32418__auto___35134,out){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_35126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35126[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_35126[(1)] = (1));

return statearr_35126;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_35100){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_35100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e35127){if((e35127 instanceof Object)){
var ex__32310__auto__ = e35127;
var statearr_35128_35149 = state_35100;
(statearr_35128_35149[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35150 = state_35100;
state_35100 = G__35150;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_35100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_35100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___35134,out))
})();
var state__32420__auto__ = (function (){var statearr_35129 = f__32419__auto__.call(null);
(statearr_35129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___35134);

return statearr_35129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___35134,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35151 = [];
var len__9525__auto___35225 = arguments.length;
var i__9526__auto___35226 = (0);
while(true){
if((i__9526__auto___35226 < len__9525__auto___35225)){
args35151.push((arguments[i__9526__auto___35226]));

var G__35227 = (i__9526__auto___35226 + (1));
i__9526__auto___35226 = G__35227;
continue;
} else {
}
break;
}

var G__35153 = args35151.length;
switch (G__35153) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35151.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32418__auto___35229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32418__auto___35229,out){
return (function (){
var f__32419__auto__ = (function (){var switch__32306__auto__ = ((function (c__32418__auto___35229,out){
return (function (state_35195){
var state_val_35196 = (state_35195[(1)]);
if((state_val_35196 === (7))){
var inst_35191 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35197_35230 = state_35195__$1;
(statearr_35197_35230[(2)] = inst_35191);

(statearr_35197_35230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (1))){
var inst_35154 = [];
var inst_35155 = inst_35154;
var inst_35156 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35195__$1 = (function (){var statearr_35198 = state_35195;
(statearr_35198[(7)] = inst_35155);

(statearr_35198[(8)] = inst_35156);

return statearr_35198;
})();
var statearr_35199_35231 = state_35195__$1;
(statearr_35199_35231[(2)] = null);

(statearr_35199_35231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (4))){
var inst_35159 = (state_35195[(9)]);
var inst_35159__$1 = (state_35195[(2)]);
var inst_35160 = (inst_35159__$1 == null);
var inst_35161 = cljs.core.not.call(null,inst_35160);
var state_35195__$1 = (function (){var statearr_35200 = state_35195;
(statearr_35200[(9)] = inst_35159__$1);

return statearr_35200;
})();
if(inst_35161){
var statearr_35201_35232 = state_35195__$1;
(statearr_35201_35232[(1)] = (5));

} else {
var statearr_35202_35233 = state_35195__$1;
(statearr_35202_35233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (15))){
var inst_35185 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35203_35234 = state_35195__$1;
(statearr_35203_35234[(2)] = inst_35185);

(statearr_35203_35234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (13))){
var state_35195__$1 = state_35195;
var statearr_35204_35235 = state_35195__$1;
(statearr_35204_35235[(2)] = null);

(statearr_35204_35235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (6))){
var inst_35155 = (state_35195[(7)]);
var inst_35180 = inst_35155.length;
var inst_35181 = (inst_35180 > (0));
var state_35195__$1 = state_35195;
if(cljs.core.truth_(inst_35181)){
var statearr_35205_35236 = state_35195__$1;
(statearr_35205_35236[(1)] = (12));

} else {
var statearr_35206_35237 = state_35195__$1;
(statearr_35206_35237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (3))){
var inst_35193 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35195__$1,inst_35193);
} else {
if((state_val_35196 === (12))){
var inst_35155 = (state_35195[(7)]);
var inst_35183 = cljs.core.vec.call(null,inst_35155);
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35195__$1,(15),out,inst_35183);
} else {
if((state_val_35196 === (2))){
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35195__$1,(4),ch);
} else {
if((state_val_35196 === (11))){
var inst_35159 = (state_35195[(9)]);
var inst_35163 = (state_35195[(10)]);
var inst_35173 = (state_35195[(2)]);
var inst_35174 = [];
var inst_35175 = inst_35174.push(inst_35159);
var inst_35155 = inst_35174;
var inst_35156 = inst_35163;
var state_35195__$1 = (function (){var statearr_35207 = state_35195;
(statearr_35207[(7)] = inst_35155);

(statearr_35207[(8)] = inst_35156);

(statearr_35207[(11)] = inst_35175);

(statearr_35207[(12)] = inst_35173);

return statearr_35207;
})();
var statearr_35208_35238 = state_35195__$1;
(statearr_35208_35238[(2)] = null);

(statearr_35208_35238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (9))){
var inst_35155 = (state_35195[(7)]);
var inst_35171 = cljs.core.vec.call(null,inst_35155);
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35195__$1,(11),out,inst_35171);
} else {
if((state_val_35196 === (5))){
var inst_35159 = (state_35195[(9)]);
var inst_35163 = (state_35195[(10)]);
var inst_35156 = (state_35195[(8)]);
var inst_35163__$1 = f.call(null,inst_35159);
var inst_35164 = cljs.core._EQ_.call(null,inst_35163__$1,inst_35156);
var inst_35165 = cljs.core.keyword_identical_QMARK_.call(null,inst_35156,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35166 = (inst_35164) || (inst_35165);
var state_35195__$1 = (function (){var statearr_35209 = state_35195;
(statearr_35209[(10)] = inst_35163__$1);

return statearr_35209;
})();
if(cljs.core.truth_(inst_35166)){
var statearr_35210_35239 = state_35195__$1;
(statearr_35210_35239[(1)] = (8));

} else {
var statearr_35211_35240 = state_35195__$1;
(statearr_35211_35240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (14))){
var inst_35188 = (state_35195[(2)]);
var inst_35189 = cljs.core.async.close_BANG_.call(null,out);
var state_35195__$1 = (function (){var statearr_35213 = state_35195;
(statearr_35213[(13)] = inst_35188);

return statearr_35213;
})();
var statearr_35214_35241 = state_35195__$1;
(statearr_35214_35241[(2)] = inst_35189);

(statearr_35214_35241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (10))){
var inst_35178 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35215_35242 = state_35195__$1;
(statearr_35215_35242[(2)] = inst_35178);

(statearr_35215_35242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (8))){
var inst_35159 = (state_35195[(9)]);
var inst_35155 = (state_35195[(7)]);
var inst_35163 = (state_35195[(10)]);
var inst_35168 = inst_35155.push(inst_35159);
var tmp35212 = inst_35155;
var inst_35155__$1 = tmp35212;
var inst_35156 = inst_35163;
var state_35195__$1 = (function (){var statearr_35216 = state_35195;
(statearr_35216[(7)] = inst_35155__$1);

(statearr_35216[(14)] = inst_35168);

(statearr_35216[(8)] = inst_35156);

return statearr_35216;
})();
var statearr_35217_35243 = state_35195__$1;
(statearr_35217_35243[(2)] = null);

(statearr_35217_35243[(1)] = (2));


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
});})(c__32418__auto___35229,out))
;
return ((function (switch__32306__auto__,c__32418__auto___35229,out){
return (function() {
var cljs$core$async$state_machine__32307__auto__ = null;
var cljs$core$async$state_machine__32307__auto____0 = (function (){
var statearr_35221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35221[(0)] = cljs$core$async$state_machine__32307__auto__);

(statearr_35221[(1)] = (1));

return statearr_35221;
});
var cljs$core$async$state_machine__32307__auto____1 = (function (state_35195){
while(true){
var ret_value__32308__auto__ = (function (){try{while(true){
var result__32309__auto__ = switch__32306__auto__.call(null,state_35195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32309__auto__;
}
break;
}
}catch (e35222){if((e35222 instanceof Object)){
var ex__32310__auto__ = e35222;
var statearr_35223_35244 = state_35195;
(statearr_35223_35244[(5)] = ex__32310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35245 = state_35195;
state_35195 = G__35245;
continue;
} else {
return ret_value__32308__auto__;
}
break;
}
});
cljs$core$async$state_machine__32307__auto__ = function(state_35195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32307__auto____1.call(this,state_35195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32307__auto____0;
cljs$core$async$state_machine__32307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32307__auto____1;
return cljs$core$async$state_machine__32307__auto__;
})()
;})(switch__32306__auto__,c__32418__auto___35229,out))
})();
var state__32420__auto__ = (function (){var statearr_35224 = f__32419__auto__.call(null);
(statearr_35224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32418__auto___35229);

return statearr_35224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32420__auto__);
});})(c__32418__auto___35229,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map