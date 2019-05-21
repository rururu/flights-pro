// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__6755 = arguments.length;
switch (G__6755) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6756 = (function (f,blockable,meta6757){
this.f = f;
this.blockable = blockable;
this.meta6757 = meta6757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6758,meta6757__$1){
var self__ = this;
var _6758__$1 = this;
return (new cljs.core.async.t_cljs$core$async6756(self__.f,self__.blockable,meta6757__$1));
});

cljs.core.async.t_cljs$core$async6756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6758){
var self__ = this;
var _6758__$1 = this;
return self__.meta6757;
});

cljs.core.async.t_cljs$core$async6756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6757","meta6757",-1051619224,null)], null);
});

cljs.core.async.t_cljs$core$async6756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6756";

cljs.core.async.t_cljs$core$async6756.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async6756");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6756.
 */
cljs.core.async.__GT_t_cljs$core$async6756 = (function cljs$core$async$__GT_t_cljs$core$async6756(f__$1,blockable__$1,meta6757){
return (new cljs.core.async.t_cljs$core$async6756(f__$1,blockable__$1,meta6757));
});

}

return (new cljs.core.async.t_cljs$core$async6756(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__6762 = arguments.length;
switch (G__6762) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__6765 = arguments.length;
switch (G__6765) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__6768 = arguments.length;
switch (G__6768) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_6770 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6770);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6770,ret){
return (function (){
return fn1.call(null,val_6770);
});})(val_6770,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__6772 = arguments.length;
switch (G__6772) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4518__auto___6774 = n;
var x_6775 = (0);
while(true){
if((x_6775 < n__4518__auto___6774)){
(a[x_6775] = (0));

var G__6776 = (x_6775 + (1));
x_6775 = G__6776;
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

var G__6777 = (i + (1));
i = G__6777;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6778 = (function (flag,meta6779){
this.flag = flag;
this.meta6779 = meta6779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6780,meta6779__$1){
var self__ = this;
var _6780__$1 = this;
return (new cljs.core.async.t_cljs$core$async6778(self__.flag,meta6779__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6780){
var self__ = this;
var _6780__$1 = this;
return self__.meta6779;
});})(flag))
;

cljs.core.async.t_cljs$core$async6778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6778.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6779","meta6779",-1804078016,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6778";

cljs.core.async.t_cljs$core$async6778.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async6778");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6778.
 */
cljs.core.async.__GT_t_cljs$core$async6778 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6778(flag__$1,meta6779){
return (new cljs.core.async.t_cljs$core$async6778(flag__$1,meta6779));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6778(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6781 = (function (flag,cb,meta6782){
this.flag = flag;
this.cb = cb;
this.meta6782 = meta6782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6783,meta6782__$1){
var self__ = this;
var _6783__$1 = this;
return (new cljs.core.async.t_cljs$core$async6781(self__.flag,self__.cb,meta6782__$1));
});

cljs.core.async.t_cljs$core$async6781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6783){
var self__ = this;
var _6783__$1 = this;
return self__.meta6782;
});

cljs.core.async.t_cljs$core$async6781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6782","meta6782",1449137026,null)], null);
});

cljs.core.async.t_cljs$core$async6781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6781";

cljs.core.async.t_cljs$core$async6781.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async6781");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6781.
 */
cljs.core.async.__GT_t_cljs$core$async6781 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6781(flag__$1,cb__$1,meta6782){
return (new cljs.core.async.t_cljs$core$async6781(flag__$1,cb__$1,meta6782));
});

}

return (new cljs.core.async.t_cljs$core$async6781(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__6784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6784_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6785_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__6786 = (i + (1));
i = G__6786;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___6792 = arguments.length;
var i__4642__auto___6793 = (0);
while(true){
if((i__4642__auto___6793 < len__4641__auto___6792)){
args__4647__auto__.push((arguments[i__4642__auto___6793]));

var G__6794 = (i__4642__auto___6793 + (1));
i__4642__auto___6793 = G__6794;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6789){
var map__6790 = p__6789;
var map__6790__$1 = (((((!((map__6790 == null))))?(((((map__6790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6790):map__6790);
var opts = map__6790__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6787){
var G__6788 = cljs.core.first.call(null,seq6787);
var seq6787__$1 = cljs.core.next.call(null,seq6787);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6788,seq6787__$1);
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
var G__6796 = arguments.length;
switch (G__6796) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__4831__auto___6842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___6842){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___6842){
return (function (state_6820){
var state_val_6821 = (state_6820[(1)]);
if((state_val_6821 === (7))){
var inst_6816 = (state_6820[(2)]);
var state_6820__$1 = state_6820;
var statearr_6822_6843 = state_6820__$1;
(statearr_6822_6843[(2)] = inst_6816);

(statearr_6822_6843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (1))){
var state_6820__$1 = state_6820;
var statearr_6823_6844 = state_6820__$1;
(statearr_6823_6844[(2)] = null);

(statearr_6823_6844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (4))){
var inst_6799 = (state_6820[(7)]);
var inst_6799__$1 = (state_6820[(2)]);
var inst_6800 = (inst_6799__$1 == null);
var state_6820__$1 = (function (){var statearr_6824 = state_6820;
(statearr_6824[(7)] = inst_6799__$1);

return statearr_6824;
})();
if(cljs.core.truth_(inst_6800)){
var statearr_6825_6845 = state_6820__$1;
(statearr_6825_6845[(1)] = (5));

} else {
var statearr_6826_6846 = state_6820__$1;
(statearr_6826_6846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (13))){
var state_6820__$1 = state_6820;
var statearr_6827_6847 = state_6820__$1;
(statearr_6827_6847[(2)] = null);

(statearr_6827_6847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (6))){
var inst_6799 = (state_6820[(7)]);
var state_6820__$1 = state_6820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6820__$1,(11),to,inst_6799);
} else {
if((state_val_6821 === (3))){
var inst_6818 = (state_6820[(2)]);
var state_6820__$1 = state_6820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6820__$1,inst_6818);
} else {
if((state_val_6821 === (12))){
var state_6820__$1 = state_6820;
var statearr_6828_6848 = state_6820__$1;
(statearr_6828_6848[(2)] = null);

(statearr_6828_6848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (2))){
var state_6820__$1 = state_6820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6820__$1,(4),from);
} else {
if((state_val_6821 === (11))){
var inst_6809 = (state_6820[(2)]);
var state_6820__$1 = state_6820;
if(cljs.core.truth_(inst_6809)){
var statearr_6829_6849 = state_6820__$1;
(statearr_6829_6849[(1)] = (12));

} else {
var statearr_6830_6850 = state_6820__$1;
(statearr_6830_6850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (9))){
var state_6820__$1 = state_6820;
var statearr_6831_6851 = state_6820__$1;
(statearr_6831_6851[(2)] = null);

(statearr_6831_6851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (5))){
var state_6820__$1 = state_6820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6832_6852 = state_6820__$1;
(statearr_6832_6852[(1)] = (8));

} else {
var statearr_6833_6853 = state_6820__$1;
(statearr_6833_6853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (14))){
var inst_6814 = (state_6820[(2)]);
var state_6820__$1 = state_6820;
var statearr_6834_6854 = state_6820__$1;
(statearr_6834_6854[(2)] = inst_6814);

(statearr_6834_6854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (10))){
var inst_6806 = (state_6820[(2)]);
var state_6820__$1 = state_6820;
var statearr_6835_6855 = state_6820__$1;
(statearr_6835_6855[(2)] = inst_6806);

(statearr_6835_6855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6821 === (8))){
var inst_6803 = cljs.core.async.close_BANG_.call(null,to);
var state_6820__$1 = state_6820;
var statearr_6836_6856 = state_6820__$1;
(statearr_6836_6856[(2)] = inst_6803);

(statearr_6836_6856[(1)] = (10));


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
});})(c__4831__auto___6842))
;
return ((function (switch__4664__auto__,c__4831__auto___6842){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_6837 = [null,null,null,null,null,null,null,null];
(statearr_6837[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_6837[(1)] = (1));

return statearr_6837;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_6820){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_6820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e6838){if((e6838 instanceof Object)){
var ex__4668__auto__ = e6838;
var statearr_6839_6857 = state_6820;
(statearr_6839_6857[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6858 = state_6820;
state_6820 = G__6858;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_6820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_6820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___6842))
})();
var state__4833__auto__ = (function (){var statearr_6840 = f__4832__auto__.call(null);
(statearr_6840[(6)] = c__4831__auto___6842);

return statearr_6840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___6842))
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
return (function (p__6859){
var vec__6860 = p__6859;
var v = cljs.core.nth.call(null,vec__6860,(0),null);
var p = cljs.core.nth.call(null,vec__6860,(1),null);
var job = vec__6860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__4831__auto___7031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___7031,res,vec__6860,v,p,job,jobs,results){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___7031,res,vec__6860,v,p,job,jobs,results){
return (function (state_6867){
var state_val_6868 = (state_6867[(1)]);
if((state_val_6868 === (1))){
var state_6867__$1 = state_6867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6867__$1,(2),res,v);
} else {
if((state_val_6868 === (2))){
var inst_6864 = (state_6867[(2)]);
var inst_6865 = cljs.core.async.close_BANG_.call(null,res);
var state_6867__$1 = (function (){var statearr_6869 = state_6867;
(statearr_6869[(7)] = inst_6864);

return statearr_6869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6867__$1,inst_6865);
} else {
return null;
}
}
});})(c__4831__auto___7031,res,vec__6860,v,p,job,jobs,results))
;
return ((function (switch__4664__auto__,c__4831__auto___7031,res,vec__6860,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0 = (function (){
var statearr_6870 = [null,null,null,null,null,null,null,null];
(statearr_6870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__);

(statearr_6870[(1)] = (1));

return statearr_6870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1 = (function (state_6867){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_6867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e6871){if((e6871 instanceof Object)){
var ex__4668__auto__ = e6871;
var statearr_6872_7032 = state_6867;
(statearr_6872_7032[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7033 = state_6867;
state_6867 = G__7033;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = function(state_6867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1.call(this,state_6867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___7031,res,vec__6860,v,p,job,jobs,results))
})();
var state__4833__auto__ = (function (){var statearr_6873 = f__4832__auto__.call(null);
(statearr_6873[(6)] = c__4831__auto___7031);

return statearr_6873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___7031,res,vec__6860,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6874){
var vec__6875 = p__6874;
var v = cljs.core.nth.call(null,vec__6875,(0),null);
var p = cljs.core.nth.call(null,vec__6875,(1),null);
var job = vec__6875;
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
var n__4518__auto___7034 = n;
var __7035 = (0);
while(true){
if((__7035 < n__4518__auto___7034)){
var G__6878_7036 = type;
var G__6878_7037__$1 = (((G__6878_7036 instanceof cljs.core.Keyword))?G__6878_7036.fqn:null);
switch (G__6878_7037__$1) {
case "compute":
var c__4831__auto___7039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7035,c__4831__auto___7039,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (__7035,c__4831__auto___7039,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async){
return (function (state_6891){
var state_val_6892 = (state_6891[(1)]);
if((state_val_6892 === (1))){
var state_6891__$1 = state_6891;
var statearr_6893_7040 = state_6891__$1;
(statearr_6893_7040[(2)] = null);

(statearr_6893_7040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6892 === (2))){
var state_6891__$1 = state_6891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6891__$1,(4),jobs);
} else {
if((state_val_6892 === (3))){
var inst_6889 = (state_6891[(2)]);
var state_6891__$1 = state_6891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6891__$1,inst_6889);
} else {
if((state_val_6892 === (4))){
var inst_6881 = (state_6891[(2)]);
var inst_6882 = process.call(null,inst_6881);
var state_6891__$1 = state_6891;
if(cljs.core.truth_(inst_6882)){
var statearr_6894_7041 = state_6891__$1;
(statearr_6894_7041[(1)] = (5));

} else {
var statearr_6895_7042 = state_6891__$1;
(statearr_6895_7042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6892 === (5))){
var state_6891__$1 = state_6891;
var statearr_6896_7043 = state_6891__$1;
(statearr_6896_7043[(2)] = null);

(statearr_6896_7043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6892 === (6))){
var state_6891__$1 = state_6891;
var statearr_6897_7044 = state_6891__$1;
(statearr_6897_7044[(2)] = null);

(statearr_6897_7044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6892 === (7))){
var inst_6887 = (state_6891[(2)]);
var state_6891__$1 = state_6891;
var statearr_6898_7045 = state_6891__$1;
(statearr_6898_7045[(2)] = inst_6887);

(statearr_6898_7045[(1)] = (3));


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
});})(__7035,c__4831__auto___7039,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async))
;
return ((function (__7035,switch__4664__auto__,c__4831__auto___7039,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0 = (function (){
var statearr_6899 = [null,null,null,null,null,null,null];
(statearr_6899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__);

(statearr_6899[(1)] = (1));

return statearr_6899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1 = (function (state_6891){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_6891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e6900){if((e6900 instanceof Object)){
var ex__4668__auto__ = e6900;
var statearr_6901_7046 = state_6891;
(statearr_6901_7046[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7047 = state_6891;
state_6891 = G__7047;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = function(state_6891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1.call(this,state_6891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__;
})()
;})(__7035,switch__4664__auto__,c__4831__auto___7039,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async))
})();
var state__4833__auto__ = (function (){var statearr_6902 = f__4832__auto__.call(null);
(statearr_6902[(6)] = c__4831__auto___7039);

return statearr_6902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(__7035,c__4831__auto___7039,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async))
);


break;
case "async":
var c__4831__auto___7048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7035,c__4831__auto___7048,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (__7035,c__4831__auto___7048,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async){
return (function (state_6915){
var state_val_6916 = (state_6915[(1)]);
if((state_val_6916 === (1))){
var state_6915__$1 = state_6915;
var statearr_6917_7049 = state_6915__$1;
(statearr_6917_7049[(2)] = null);

(statearr_6917_7049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6916 === (2))){
var state_6915__$1 = state_6915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6915__$1,(4),jobs);
} else {
if((state_val_6916 === (3))){
var inst_6913 = (state_6915[(2)]);
var state_6915__$1 = state_6915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6915__$1,inst_6913);
} else {
if((state_val_6916 === (4))){
var inst_6905 = (state_6915[(2)]);
var inst_6906 = async.call(null,inst_6905);
var state_6915__$1 = state_6915;
if(cljs.core.truth_(inst_6906)){
var statearr_6918_7050 = state_6915__$1;
(statearr_6918_7050[(1)] = (5));

} else {
var statearr_6919_7051 = state_6915__$1;
(statearr_6919_7051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6916 === (5))){
var state_6915__$1 = state_6915;
var statearr_6920_7052 = state_6915__$1;
(statearr_6920_7052[(2)] = null);

(statearr_6920_7052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6916 === (6))){
var state_6915__$1 = state_6915;
var statearr_6921_7053 = state_6915__$1;
(statearr_6921_7053[(2)] = null);

(statearr_6921_7053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6916 === (7))){
var inst_6911 = (state_6915[(2)]);
var state_6915__$1 = state_6915;
var statearr_6922_7054 = state_6915__$1;
(statearr_6922_7054[(2)] = inst_6911);

(statearr_6922_7054[(1)] = (3));


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
});})(__7035,c__4831__auto___7048,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async))
;
return ((function (__7035,switch__4664__auto__,c__4831__auto___7048,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0 = (function (){
var statearr_6923 = [null,null,null,null,null,null,null];
(statearr_6923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__);

(statearr_6923[(1)] = (1));

return statearr_6923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1 = (function (state_6915){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_6915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e6924){if((e6924 instanceof Object)){
var ex__4668__auto__ = e6924;
var statearr_6925_7055 = state_6915;
(statearr_6925_7055[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7056 = state_6915;
state_6915 = G__7056;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = function(state_6915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1.call(this,state_6915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__;
})()
;})(__7035,switch__4664__auto__,c__4831__auto___7048,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async))
})();
var state__4833__auto__ = (function (){var statearr_6926 = f__4832__auto__.call(null);
(statearr_6926[(6)] = c__4831__auto___7048);

return statearr_6926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(__7035,c__4831__auto___7048,G__6878_7036,G__6878_7037__$1,n__4518__auto___7034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6878_7037__$1)].join('')));

}

var G__7057 = (__7035 + (1));
__7035 = G__7057;
continue;
} else {
}
break;
}

var c__4831__auto___7058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___7058,jobs,results,process,async){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___7058,jobs,results,process,async){
return (function (state_6948){
var state_val_6949 = (state_6948[(1)]);
if((state_val_6949 === (7))){
var inst_6944 = (state_6948[(2)]);
var state_6948__$1 = state_6948;
var statearr_6950_7059 = state_6948__$1;
(statearr_6950_7059[(2)] = inst_6944);

(statearr_6950_7059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6949 === (1))){
var state_6948__$1 = state_6948;
var statearr_6951_7060 = state_6948__$1;
(statearr_6951_7060[(2)] = null);

(statearr_6951_7060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6949 === (4))){
var inst_6929 = (state_6948[(7)]);
var inst_6929__$1 = (state_6948[(2)]);
var inst_6930 = (inst_6929__$1 == null);
var state_6948__$1 = (function (){var statearr_6952 = state_6948;
(statearr_6952[(7)] = inst_6929__$1);

return statearr_6952;
})();
if(cljs.core.truth_(inst_6930)){
var statearr_6953_7061 = state_6948__$1;
(statearr_6953_7061[(1)] = (5));

} else {
var statearr_6954_7062 = state_6948__$1;
(statearr_6954_7062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6949 === (6))){
var inst_6929 = (state_6948[(7)]);
var inst_6934 = (state_6948[(8)]);
var inst_6934__$1 = cljs.core.async.chan.call(null,(1));
var inst_6935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6936 = [inst_6929,inst_6934__$1];
var inst_6937 = (new cljs.core.PersistentVector(null,2,(5),inst_6935,inst_6936,null));
var state_6948__$1 = (function (){var statearr_6955 = state_6948;
(statearr_6955[(8)] = inst_6934__$1);

return statearr_6955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6948__$1,(8),jobs,inst_6937);
} else {
if((state_val_6949 === (3))){
var inst_6946 = (state_6948[(2)]);
var state_6948__$1 = state_6948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6948__$1,inst_6946);
} else {
if((state_val_6949 === (2))){
var state_6948__$1 = state_6948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6948__$1,(4),from);
} else {
if((state_val_6949 === (9))){
var inst_6941 = (state_6948[(2)]);
var state_6948__$1 = (function (){var statearr_6956 = state_6948;
(statearr_6956[(9)] = inst_6941);

return statearr_6956;
})();
var statearr_6957_7063 = state_6948__$1;
(statearr_6957_7063[(2)] = null);

(statearr_6957_7063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6949 === (5))){
var inst_6932 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6948__$1 = state_6948;
var statearr_6958_7064 = state_6948__$1;
(statearr_6958_7064[(2)] = inst_6932);

(statearr_6958_7064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6949 === (8))){
var inst_6934 = (state_6948[(8)]);
var inst_6939 = (state_6948[(2)]);
var state_6948__$1 = (function (){var statearr_6959 = state_6948;
(statearr_6959[(10)] = inst_6939);

return statearr_6959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6948__$1,(9),results,inst_6934);
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
});})(c__4831__auto___7058,jobs,results,process,async))
;
return ((function (switch__4664__auto__,c__4831__auto___7058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0 = (function (){
var statearr_6960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__);

(statearr_6960[(1)] = (1));

return statearr_6960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1 = (function (state_6948){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_6948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e6961){if((e6961 instanceof Object)){
var ex__4668__auto__ = e6961;
var statearr_6962_7065 = state_6948;
(statearr_6962_7065[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7066 = state_6948;
state_6948 = G__7066;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = function(state_6948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1.call(this,state_6948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___7058,jobs,results,process,async))
})();
var state__4833__auto__ = (function (){var statearr_6963 = f__4832__auto__.call(null);
(statearr_6963[(6)] = c__4831__auto___7058);

return statearr_6963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___7058,jobs,results,process,async))
);


var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__,jobs,results,process,async){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__,jobs,results,process,async){
return (function (state_7001){
var state_val_7002 = (state_7001[(1)]);
if((state_val_7002 === (7))){
var inst_6997 = (state_7001[(2)]);
var state_7001__$1 = state_7001;
var statearr_7003_7067 = state_7001__$1;
(statearr_7003_7067[(2)] = inst_6997);

(statearr_7003_7067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (20))){
var state_7001__$1 = state_7001;
var statearr_7004_7068 = state_7001__$1;
(statearr_7004_7068[(2)] = null);

(statearr_7004_7068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (1))){
var state_7001__$1 = state_7001;
var statearr_7005_7069 = state_7001__$1;
(statearr_7005_7069[(2)] = null);

(statearr_7005_7069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (4))){
var inst_6966 = (state_7001[(7)]);
var inst_6966__$1 = (state_7001[(2)]);
var inst_6967 = (inst_6966__$1 == null);
var state_7001__$1 = (function (){var statearr_7006 = state_7001;
(statearr_7006[(7)] = inst_6966__$1);

return statearr_7006;
})();
if(cljs.core.truth_(inst_6967)){
var statearr_7007_7070 = state_7001__$1;
(statearr_7007_7070[(1)] = (5));

} else {
var statearr_7008_7071 = state_7001__$1;
(statearr_7008_7071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (15))){
var inst_6979 = (state_7001[(8)]);
var state_7001__$1 = state_7001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7001__$1,(18),to,inst_6979);
} else {
if((state_val_7002 === (21))){
var inst_6992 = (state_7001[(2)]);
var state_7001__$1 = state_7001;
var statearr_7009_7072 = state_7001__$1;
(statearr_7009_7072[(2)] = inst_6992);

(statearr_7009_7072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (13))){
var inst_6994 = (state_7001[(2)]);
var state_7001__$1 = (function (){var statearr_7010 = state_7001;
(statearr_7010[(9)] = inst_6994);

return statearr_7010;
})();
var statearr_7011_7073 = state_7001__$1;
(statearr_7011_7073[(2)] = null);

(statearr_7011_7073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (6))){
var inst_6966 = (state_7001[(7)]);
var state_7001__$1 = state_7001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7001__$1,(11),inst_6966);
} else {
if((state_val_7002 === (17))){
var inst_6987 = (state_7001[(2)]);
var state_7001__$1 = state_7001;
if(cljs.core.truth_(inst_6987)){
var statearr_7012_7074 = state_7001__$1;
(statearr_7012_7074[(1)] = (19));

} else {
var statearr_7013_7075 = state_7001__$1;
(statearr_7013_7075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (3))){
var inst_6999 = (state_7001[(2)]);
var state_7001__$1 = state_7001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7001__$1,inst_6999);
} else {
if((state_val_7002 === (12))){
var inst_6976 = (state_7001[(10)]);
var state_7001__$1 = state_7001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7001__$1,(14),inst_6976);
} else {
if((state_val_7002 === (2))){
var state_7001__$1 = state_7001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7001__$1,(4),results);
} else {
if((state_val_7002 === (19))){
var state_7001__$1 = state_7001;
var statearr_7014_7076 = state_7001__$1;
(statearr_7014_7076[(2)] = null);

(statearr_7014_7076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (11))){
var inst_6976 = (state_7001[(2)]);
var state_7001__$1 = (function (){var statearr_7015 = state_7001;
(statearr_7015[(10)] = inst_6976);

return statearr_7015;
})();
var statearr_7016_7077 = state_7001__$1;
(statearr_7016_7077[(2)] = null);

(statearr_7016_7077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (9))){
var state_7001__$1 = state_7001;
var statearr_7017_7078 = state_7001__$1;
(statearr_7017_7078[(2)] = null);

(statearr_7017_7078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (5))){
var state_7001__$1 = state_7001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7018_7079 = state_7001__$1;
(statearr_7018_7079[(1)] = (8));

} else {
var statearr_7019_7080 = state_7001__$1;
(statearr_7019_7080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (14))){
var inst_6981 = (state_7001[(11)]);
var inst_6979 = (state_7001[(8)]);
var inst_6979__$1 = (state_7001[(2)]);
var inst_6980 = (inst_6979__$1 == null);
var inst_6981__$1 = cljs.core.not.call(null,inst_6980);
var state_7001__$1 = (function (){var statearr_7020 = state_7001;
(statearr_7020[(11)] = inst_6981__$1);

(statearr_7020[(8)] = inst_6979__$1);

return statearr_7020;
})();
if(inst_6981__$1){
var statearr_7021_7081 = state_7001__$1;
(statearr_7021_7081[(1)] = (15));

} else {
var statearr_7022_7082 = state_7001__$1;
(statearr_7022_7082[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (16))){
var inst_6981 = (state_7001[(11)]);
var state_7001__$1 = state_7001;
var statearr_7023_7083 = state_7001__$1;
(statearr_7023_7083[(2)] = inst_6981);

(statearr_7023_7083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (10))){
var inst_6973 = (state_7001[(2)]);
var state_7001__$1 = state_7001;
var statearr_7024_7084 = state_7001__$1;
(statearr_7024_7084[(2)] = inst_6973);

(statearr_7024_7084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (18))){
var inst_6984 = (state_7001[(2)]);
var state_7001__$1 = state_7001;
var statearr_7025_7085 = state_7001__$1;
(statearr_7025_7085[(2)] = inst_6984);

(statearr_7025_7085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7002 === (8))){
var inst_6970 = cljs.core.async.close_BANG_.call(null,to);
var state_7001__$1 = state_7001;
var statearr_7026_7086 = state_7001__$1;
(statearr_7026_7086[(2)] = inst_6970);

(statearr_7026_7086[(1)] = (10));


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
});})(c__4831__auto__,jobs,results,process,async))
;
return ((function (switch__4664__auto__,c__4831__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0 = (function (){
var statearr_7027 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__);

(statearr_7027[(1)] = (1));

return statearr_7027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1 = (function (state_7001){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7028){if((e7028 instanceof Object)){
var ex__4668__auto__ = e7028;
var statearr_7029_7087 = state_7001;
(statearr_7029_7087[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7088 = state_7001;
state_7001 = G__7088;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__ = function(state_7001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1.call(this,state_7001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__,jobs,results,process,async))
})();
var state__4833__auto__ = (function (){var statearr_7030 = f__4832__auto__.call(null);
(statearr_7030[(6)] = c__4831__auto__);

return statearr_7030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__,jobs,results,process,async))
);

return c__4831__auto__;
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
var G__7090 = arguments.length;
switch (G__7090) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7093 = arguments.length;
switch (G__7093) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7096 = arguments.length;
switch (G__7096) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__4831__auto___7145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___7145,tc,fc){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___7145,tc,fc){
return (function (state_7122){
var state_val_7123 = (state_7122[(1)]);
if((state_val_7123 === (7))){
var inst_7118 = (state_7122[(2)]);
var state_7122__$1 = state_7122;
var statearr_7124_7146 = state_7122__$1;
(statearr_7124_7146[(2)] = inst_7118);

(statearr_7124_7146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (1))){
var state_7122__$1 = state_7122;
var statearr_7125_7147 = state_7122__$1;
(statearr_7125_7147[(2)] = null);

(statearr_7125_7147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (4))){
var inst_7099 = (state_7122[(7)]);
var inst_7099__$1 = (state_7122[(2)]);
var inst_7100 = (inst_7099__$1 == null);
var state_7122__$1 = (function (){var statearr_7126 = state_7122;
(statearr_7126[(7)] = inst_7099__$1);

return statearr_7126;
})();
if(cljs.core.truth_(inst_7100)){
var statearr_7127_7148 = state_7122__$1;
(statearr_7127_7148[(1)] = (5));

} else {
var statearr_7128_7149 = state_7122__$1;
(statearr_7128_7149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (13))){
var state_7122__$1 = state_7122;
var statearr_7129_7150 = state_7122__$1;
(statearr_7129_7150[(2)] = null);

(statearr_7129_7150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (6))){
var inst_7099 = (state_7122[(7)]);
var inst_7105 = p.call(null,inst_7099);
var state_7122__$1 = state_7122;
if(cljs.core.truth_(inst_7105)){
var statearr_7130_7151 = state_7122__$1;
(statearr_7130_7151[(1)] = (9));

} else {
var statearr_7131_7152 = state_7122__$1;
(statearr_7131_7152[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (3))){
var inst_7120 = (state_7122[(2)]);
var state_7122__$1 = state_7122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7122__$1,inst_7120);
} else {
if((state_val_7123 === (12))){
var state_7122__$1 = state_7122;
var statearr_7132_7153 = state_7122__$1;
(statearr_7132_7153[(2)] = null);

(statearr_7132_7153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (2))){
var state_7122__$1 = state_7122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7122__$1,(4),ch);
} else {
if((state_val_7123 === (11))){
var inst_7099 = (state_7122[(7)]);
var inst_7109 = (state_7122[(2)]);
var state_7122__$1 = state_7122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7122__$1,(8),inst_7109,inst_7099);
} else {
if((state_val_7123 === (9))){
var state_7122__$1 = state_7122;
var statearr_7133_7154 = state_7122__$1;
(statearr_7133_7154[(2)] = tc);

(statearr_7133_7154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (5))){
var inst_7102 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7103 = cljs.core.async.close_BANG_.call(null,fc);
var state_7122__$1 = (function (){var statearr_7134 = state_7122;
(statearr_7134[(8)] = inst_7102);

return statearr_7134;
})();
var statearr_7135_7155 = state_7122__$1;
(statearr_7135_7155[(2)] = inst_7103);

(statearr_7135_7155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (14))){
var inst_7116 = (state_7122[(2)]);
var state_7122__$1 = state_7122;
var statearr_7136_7156 = state_7122__$1;
(statearr_7136_7156[(2)] = inst_7116);

(statearr_7136_7156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (10))){
var state_7122__$1 = state_7122;
var statearr_7137_7157 = state_7122__$1;
(statearr_7137_7157[(2)] = fc);

(statearr_7137_7157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7123 === (8))){
var inst_7111 = (state_7122[(2)]);
var state_7122__$1 = state_7122;
if(cljs.core.truth_(inst_7111)){
var statearr_7138_7158 = state_7122__$1;
(statearr_7138_7158[(1)] = (12));

} else {
var statearr_7139_7159 = state_7122__$1;
(statearr_7139_7159[(1)] = (13));

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
});})(c__4831__auto___7145,tc,fc))
;
return ((function (switch__4664__auto__,c__4831__auto___7145,tc,fc){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_7140 = [null,null,null,null,null,null,null,null,null];
(statearr_7140[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_7140[(1)] = (1));

return statearr_7140;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_7122){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7141){if((e7141 instanceof Object)){
var ex__4668__auto__ = e7141;
var statearr_7142_7160 = state_7122;
(statearr_7142_7160[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7161 = state_7122;
state_7122 = G__7161;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_7122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_7122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___7145,tc,fc))
})();
var state__4833__auto__ = (function (){var statearr_7143 = f__4832__auto__.call(null);
(statearr_7143[(6)] = c__4831__auto___7145);

return statearr_7143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___7145,tc,fc))
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
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__){
return (function (state_7182){
var state_val_7183 = (state_7182[(1)]);
if((state_val_7183 === (7))){
var inst_7178 = (state_7182[(2)]);
var state_7182__$1 = state_7182;
var statearr_7184_7202 = state_7182__$1;
(statearr_7184_7202[(2)] = inst_7178);

(statearr_7184_7202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (1))){
var inst_7162 = init;
var state_7182__$1 = (function (){var statearr_7185 = state_7182;
(statearr_7185[(7)] = inst_7162);

return statearr_7185;
})();
var statearr_7186_7203 = state_7182__$1;
(statearr_7186_7203[(2)] = null);

(statearr_7186_7203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (4))){
var inst_7165 = (state_7182[(8)]);
var inst_7165__$1 = (state_7182[(2)]);
var inst_7166 = (inst_7165__$1 == null);
var state_7182__$1 = (function (){var statearr_7187 = state_7182;
(statearr_7187[(8)] = inst_7165__$1);

return statearr_7187;
})();
if(cljs.core.truth_(inst_7166)){
var statearr_7188_7204 = state_7182__$1;
(statearr_7188_7204[(1)] = (5));

} else {
var statearr_7189_7205 = state_7182__$1;
(statearr_7189_7205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (6))){
var inst_7165 = (state_7182[(8)]);
var inst_7169 = (state_7182[(9)]);
var inst_7162 = (state_7182[(7)]);
var inst_7169__$1 = f.call(null,inst_7162,inst_7165);
var inst_7170 = cljs.core.reduced_QMARK_.call(null,inst_7169__$1);
var state_7182__$1 = (function (){var statearr_7190 = state_7182;
(statearr_7190[(9)] = inst_7169__$1);

return statearr_7190;
})();
if(inst_7170){
var statearr_7191_7206 = state_7182__$1;
(statearr_7191_7206[(1)] = (8));

} else {
var statearr_7192_7207 = state_7182__$1;
(statearr_7192_7207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (3))){
var inst_7180 = (state_7182[(2)]);
var state_7182__$1 = state_7182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7182__$1,inst_7180);
} else {
if((state_val_7183 === (2))){
var state_7182__$1 = state_7182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7182__$1,(4),ch);
} else {
if((state_val_7183 === (9))){
var inst_7169 = (state_7182[(9)]);
var inst_7162 = inst_7169;
var state_7182__$1 = (function (){var statearr_7193 = state_7182;
(statearr_7193[(7)] = inst_7162);

return statearr_7193;
})();
var statearr_7194_7208 = state_7182__$1;
(statearr_7194_7208[(2)] = null);

(statearr_7194_7208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (5))){
var inst_7162 = (state_7182[(7)]);
var state_7182__$1 = state_7182;
var statearr_7195_7209 = state_7182__$1;
(statearr_7195_7209[(2)] = inst_7162);

(statearr_7195_7209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (10))){
var inst_7176 = (state_7182[(2)]);
var state_7182__$1 = state_7182;
var statearr_7196_7210 = state_7182__$1;
(statearr_7196_7210[(2)] = inst_7176);

(statearr_7196_7210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7183 === (8))){
var inst_7169 = (state_7182[(9)]);
var inst_7172 = cljs.core.deref.call(null,inst_7169);
var state_7182__$1 = state_7182;
var statearr_7197_7211 = state_7182__$1;
(statearr_7197_7211[(2)] = inst_7172);

(statearr_7197_7211[(1)] = (10));


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
});})(c__4831__auto__))
;
return ((function (switch__4664__auto__,c__4831__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4665__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4665__auto____0 = (function (){
var statearr_7198 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7198[(0)] = cljs$core$async$reduce_$_state_machine__4665__auto__);

(statearr_7198[(1)] = (1));

return statearr_7198;
});
var cljs$core$async$reduce_$_state_machine__4665__auto____1 = (function (state_7182){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7199){if((e7199 instanceof Object)){
var ex__4668__auto__ = e7199;
var statearr_7200_7212 = state_7182;
(statearr_7200_7212[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7213 = state_7182;
state_7182 = G__7213;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4665__auto__ = function(state_7182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4665__auto____1.call(this,state_7182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4665__auto____0;
cljs$core$async$reduce_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4665__auto____1;
return cljs$core$async$reduce_$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__))
})();
var state__4833__auto__ = (function (){var statearr_7201 = f__4832__auto__.call(null);
(statearr_7201[(6)] = c__4831__auto__);

return statearr_7201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__))
);

return c__4831__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__,f__$1){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__,f__$1){
return (function (state_7219){
var state_val_7220 = (state_7219[(1)]);
if((state_val_7220 === (1))){
var inst_7214 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7219__$1 = state_7219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7219__$1,(2),inst_7214);
} else {
if((state_val_7220 === (2))){
var inst_7216 = (state_7219[(2)]);
var inst_7217 = f__$1.call(null,inst_7216);
var state_7219__$1 = state_7219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7219__$1,inst_7217);
} else {
return null;
}
}
});})(c__4831__auto__,f__$1))
;
return ((function (switch__4664__auto__,c__4831__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4665__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4665__auto____0 = (function (){
var statearr_7221 = [null,null,null,null,null,null,null];
(statearr_7221[(0)] = cljs$core$async$transduce_$_state_machine__4665__auto__);

(statearr_7221[(1)] = (1));

return statearr_7221;
});
var cljs$core$async$transduce_$_state_machine__4665__auto____1 = (function (state_7219){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7222){if((e7222 instanceof Object)){
var ex__4668__auto__ = e7222;
var statearr_7223_7225 = state_7219;
(statearr_7223_7225[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7226 = state_7219;
state_7219 = G__7226;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4665__auto__ = function(state_7219){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4665__auto____1.call(this,state_7219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4665__auto____0;
cljs$core$async$transduce_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4665__auto____1;
return cljs$core$async$transduce_$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__,f__$1))
})();
var state__4833__auto__ = (function (){var statearr_7224 = f__4832__auto__.call(null);
(statearr_7224[(6)] = c__4831__auto__);

return statearr_7224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__,f__$1))
);

return c__4831__auto__;
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
var G__7228 = arguments.length;
switch (G__7228) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__){
return (function (state_7253){
var state_val_7254 = (state_7253[(1)]);
if((state_val_7254 === (7))){
var inst_7235 = (state_7253[(2)]);
var state_7253__$1 = state_7253;
var statearr_7255_7276 = state_7253__$1;
(statearr_7255_7276[(2)] = inst_7235);

(statearr_7255_7276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (1))){
var inst_7229 = cljs.core.seq.call(null,coll);
var inst_7230 = inst_7229;
var state_7253__$1 = (function (){var statearr_7256 = state_7253;
(statearr_7256[(7)] = inst_7230);

return statearr_7256;
})();
var statearr_7257_7277 = state_7253__$1;
(statearr_7257_7277[(2)] = null);

(statearr_7257_7277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (4))){
var inst_7230 = (state_7253[(7)]);
var inst_7233 = cljs.core.first.call(null,inst_7230);
var state_7253__$1 = state_7253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7253__$1,(7),ch,inst_7233);
} else {
if((state_val_7254 === (13))){
var inst_7247 = (state_7253[(2)]);
var state_7253__$1 = state_7253;
var statearr_7258_7278 = state_7253__$1;
(statearr_7258_7278[(2)] = inst_7247);

(statearr_7258_7278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (6))){
var inst_7238 = (state_7253[(2)]);
var state_7253__$1 = state_7253;
if(cljs.core.truth_(inst_7238)){
var statearr_7259_7279 = state_7253__$1;
(statearr_7259_7279[(1)] = (8));

} else {
var statearr_7260_7280 = state_7253__$1;
(statearr_7260_7280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (3))){
var inst_7251 = (state_7253[(2)]);
var state_7253__$1 = state_7253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7253__$1,inst_7251);
} else {
if((state_val_7254 === (12))){
var state_7253__$1 = state_7253;
var statearr_7261_7281 = state_7253__$1;
(statearr_7261_7281[(2)] = null);

(statearr_7261_7281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (2))){
var inst_7230 = (state_7253[(7)]);
var state_7253__$1 = state_7253;
if(cljs.core.truth_(inst_7230)){
var statearr_7262_7282 = state_7253__$1;
(statearr_7262_7282[(1)] = (4));

} else {
var statearr_7263_7283 = state_7253__$1;
(statearr_7263_7283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (11))){
var inst_7244 = cljs.core.async.close_BANG_.call(null,ch);
var state_7253__$1 = state_7253;
var statearr_7264_7284 = state_7253__$1;
(statearr_7264_7284[(2)] = inst_7244);

(statearr_7264_7284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (9))){
var state_7253__$1 = state_7253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7265_7285 = state_7253__$1;
(statearr_7265_7285[(1)] = (11));

} else {
var statearr_7266_7286 = state_7253__$1;
(statearr_7266_7286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (5))){
var inst_7230 = (state_7253[(7)]);
var state_7253__$1 = state_7253;
var statearr_7267_7287 = state_7253__$1;
(statearr_7267_7287[(2)] = inst_7230);

(statearr_7267_7287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (10))){
var inst_7249 = (state_7253[(2)]);
var state_7253__$1 = state_7253;
var statearr_7268_7288 = state_7253__$1;
(statearr_7268_7288[(2)] = inst_7249);

(statearr_7268_7288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7254 === (8))){
var inst_7230 = (state_7253[(7)]);
var inst_7240 = cljs.core.next.call(null,inst_7230);
var inst_7230__$1 = inst_7240;
var state_7253__$1 = (function (){var statearr_7269 = state_7253;
(statearr_7269[(7)] = inst_7230__$1);

return statearr_7269;
})();
var statearr_7270_7289 = state_7253__$1;
(statearr_7270_7289[(2)] = null);

(statearr_7270_7289[(1)] = (2));


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
});})(c__4831__auto__))
;
return ((function (switch__4664__auto__,c__4831__auto__){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_7271 = [null,null,null,null,null,null,null,null];
(statearr_7271[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_7271[(1)] = (1));

return statearr_7271;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_7253){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7272){if((e7272 instanceof Object)){
var ex__4668__auto__ = e7272;
var statearr_7273_7290 = state_7253;
(statearr_7273_7290[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7291 = state_7253;
state_7253 = G__7291;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_7253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_7253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__))
})();
var state__4833__auto__ = (function (){var statearr_7274 = f__4832__auto__.call(null);
(statearr_7274[(6)] = c__4831__auto__);

return statearr_7274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__))
);

return c__4831__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7292 = (function (ch,cs,meta7293){
this.ch = ch;
this.cs = cs;
this.meta7293 = meta7293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7294,meta7293__$1){
var self__ = this;
var _7294__$1 = this;
return (new cljs.core.async.t_cljs$core$async7292(self__.ch,self__.cs,meta7293__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7294){
var self__ = this;
var _7294__$1 = this;
return self__.meta7293;
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7293","meta7293",22129956,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7292";

cljs.core.async.t_cljs$core$async7292.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7292");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7292.
 */
cljs.core.async.__GT_t_cljs$core$async7292 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7292(ch__$1,cs__$1,meta7293){
return (new cljs.core.async.t_cljs$core$async7292(ch__$1,cs__$1,meta7293));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7292(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__4831__auto___7514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___7514,cs,m,dchan,dctr,done){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___7514,cs,m,dchan,dctr,done){
return (function (state_7429){
var state_val_7430 = (state_7429[(1)]);
if((state_val_7430 === (7))){
var inst_7425 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7431_7515 = state_7429__$1;
(statearr_7431_7515[(2)] = inst_7425);

(statearr_7431_7515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (20))){
var inst_7328 = (state_7429[(7)]);
var inst_7340 = cljs.core.first.call(null,inst_7328);
var inst_7341 = cljs.core.nth.call(null,inst_7340,(0),null);
var inst_7342 = cljs.core.nth.call(null,inst_7340,(1),null);
var state_7429__$1 = (function (){var statearr_7432 = state_7429;
(statearr_7432[(8)] = inst_7341);

return statearr_7432;
})();
if(cljs.core.truth_(inst_7342)){
var statearr_7433_7516 = state_7429__$1;
(statearr_7433_7516[(1)] = (22));

} else {
var statearr_7434_7517 = state_7429__$1;
(statearr_7434_7517[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (27))){
var inst_7372 = (state_7429[(9)]);
var inst_7370 = (state_7429[(10)]);
var inst_7377 = (state_7429[(11)]);
var inst_7297 = (state_7429[(12)]);
var inst_7377__$1 = cljs.core._nth.call(null,inst_7370,inst_7372);
var inst_7378 = cljs.core.async.put_BANG_.call(null,inst_7377__$1,inst_7297,done);
var state_7429__$1 = (function (){var statearr_7435 = state_7429;
(statearr_7435[(11)] = inst_7377__$1);

return statearr_7435;
})();
if(cljs.core.truth_(inst_7378)){
var statearr_7436_7518 = state_7429__$1;
(statearr_7436_7518[(1)] = (30));

} else {
var statearr_7437_7519 = state_7429__$1;
(statearr_7437_7519[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (1))){
var state_7429__$1 = state_7429;
var statearr_7438_7520 = state_7429__$1;
(statearr_7438_7520[(2)] = null);

(statearr_7438_7520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (24))){
var inst_7328 = (state_7429[(7)]);
var inst_7347 = (state_7429[(2)]);
var inst_7348 = cljs.core.next.call(null,inst_7328);
var inst_7306 = inst_7348;
var inst_7307 = null;
var inst_7308 = (0);
var inst_7309 = (0);
var state_7429__$1 = (function (){var statearr_7439 = state_7429;
(statearr_7439[(13)] = inst_7309);

(statearr_7439[(14)] = inst_7306);

(statearr_7439[(15)] = inst_7347);

(statearr_7439[(16)] = inst_7307);

(statearr_7439[(17)] = inst_7308);

return statearr_7439;
})();
var statearr_7440_7521 = state_7429__$1;
(statearr_7440_7521[(2)] = null);

(statearr_7440_7521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (39))){
var state_7429__$1 = state_7429;
var statearr_7444_7522 = state_7429__$1;
(statearr_7444_7522[(2)] = null);

(statearr_7444_7522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (4))){
var inst_7297 = (state_7429[(12)]);
var inst_7297__$1 = (state_7429[(2)]);
var inst_7298 = (inst_7297__$1 == null);
var state_7429__$1 = (function (){var statearr_7445 = state_7429;
(statearr_7445[(12)] = inst_7297__$1);

return statearr_7445;
})();
if(cljs.core.truth_(inst_7298)){
var statearr_7446_7523 = state_7429__$1;
(statearr_7446_7523[(1)] = (5));

} else {
var statearr_7447_7524 = state_7429__$1;
(statearr_7447_7524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (15))){
var inst_7309 = (state_7429[(13)]);
var inst_7306 = (state_7429[(14)]);
var inst_7307 = (state_7429[(16)]);
var inst_7308 = (state_7429[(17)]);
var inst_7324 = (state_7429[(2)]);
var inst_7325 = (inst_7309 + (1));
var tmp7441 = inst_7306;
var tmp7442 = inst_7307;
var tmp7443 = inst_7308;
var inst_7306__$1 = tmp7441;
var inst_7307__$1 = tmp7442;
var inst_7308__$1 = tmp7443;
var inst_7309__$1 = inst_7325;
var state_7429__$1 = (function (){var statearr_7448 = state_7429;
(statearr_7448[(13)] = inst_7309__$1);

(statearr_7448[(18)] = inst_7324);

(statearr_7448[(14)] = inst_7306__$1);

(statearr_7448[(16)] = inst_7307__$1);

(statearr_7448[(17)] = inst_7308__$1);

return statearr_7448;
})();
var statearr_7449_7525 = state_7429__$1;
(statearr_7449_7525[(2)] = null);

(statearr_7449_7525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (21))){
var inst_7351 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7453_7526 = state_7429__$1;
(statearr_7453_7526[(2)] = inst_7351);

(statearr_7453_7526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (31))){
var inst_7377 = (state_7429[(11)]);
var inst_7381 = done.call(null,null);
var inst_7382 = cljs.core.async.untap_STAR_.call(null,m,inst_7377);
var state_7429__$1 = (function (){var statearr_7454 = state_7429;
(statearr_7454[(19)] = inst_7381);

return statearr_7454;
})();
var statearr_7455_7527 = state_7429__$1;
(statearr_7455_7527[(2)] = inst_7382);

(statearr_7455_7527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (32))){
var inst_7372 = (state_7429[(9)]);
var inst_7370 = (state_7429[(10)]);
var inst_7371 = (state_7429[(20)]);
var inst_7369 = (state_7429[(21)]);
var inst_7384 = (state_7429[(2)]);
var inst_7385 = (inst_7372 + (1));
var tmp7450 = inst_7370;
var tmp7451 = inst_7371;
var tmp7452 = inst_7369;
var inst_7369__$1 = tmp7452;
var inst_7370__$1 = tmp7450;
var inst_7371__$1 = tmp7451;
var inst_7372__$1 = inst_7385;
var state_7429__$1 = (function (){var statearr_7456 = state_7429;
(statearr_7456[(9)] = inst_7372__$1);

(statearr_7456[(10)] = inst_7370__$1);

(statearr_7456[(20)] = inst_7371__$1);

(statearr_7456[(22)] = inst_7384);

(statearr_7456[(21)] = inst_7369__$1);

return statearr_7456;
})();
var statearr_7457_7528 = state_7429__$1;
(statearr_7457_7528[(2)] = null);

(statearr_7457_7528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (40))){
var inst_7397 = (state_7429[(23)]);
var inst_7401 = done.call(null,null);
var inst_7402 = cljs.core.async.untap_STAR_.call(null,m,inst_7397);
var state_7429__$1 = (function (){var statearr_7458 = state_7429;
(statearr_7458[(24)] = inst_7401);

return statearr_7458;
})();
var statearr_7459_7529 = state_7429__$1;
(statearr_7459_7529[(2)] = inst_7402);

(statearr_7459_7529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (33))){
var inst_7388 = (state_7429[(25)]);
var inst_7390 = cljs.core.chunked_seq_QMARK_.call(null,inst_7388);
var state_7429__$1 = state_7429;
if(inst_7390){
var statearr_7460_7530 = state_7429__$1;
(statearr_7460_7530[(1)] = (36));

} else {
var statearr_7461_7531 = state_7429__$1;
(statearr_7461_7531[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (13))){
var inst_7318 = (state_7429[(26)]);
var inst_7321 = cljs.core.async.close_BANG_.call(null,inst_7318);
var state_7429__$1 = state_7429;
var statearr_7462_7532 = state_7429__$1;
(statearr_7462_7532[(2)] = inst_7321);

(statearr_7462_7532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (22))){
var inst_7341 = (state_7429[(8)]);
var inst_7344 = cljs.core.async.close_BANG_.call(null,inst_7341);
var state_7429__$1 = state_7429;
var statearr_7463_7533 = state_7429__$1;
(statearr_7463_7533[(2)] = inst_7344);

(statearr_7463_7533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (36))){
var inst_7388 = (state_7429[(25)]);
var inst_7392 = cljs.core.chunk_first.call(null,inst_7388);
var inst_7393 = cljs.core.chunk_rest.call(null,inst_7388);
var inst_7394 = cljs.core.count.call(null,inst_7392);
var inst_7369 = inst_7393;
var inst_7370 = inst_7392;
var inst_7371 = inst_7394;
var inst_7372 = (0);
var state_7429__$1 = (function (){var statearr_7464 = state_7429;
(statearr_7464[(9)] = inst_7372);

(statearr_7464[(10)] = inst_7370);

(statearr_7464[(20)] = inst_7371);

(statearr_7464[(21)] = inst_7369);

return statearr_7464;
})();
var statearr_7465_7534 = state_7429__$1;
(statearr_7465_7534[(2)] = null);

(statearr_7465_7534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (41))){
var inst_7388 = (state_7429[(25)]);
var inst_7404 = (state_7429[(2)]);
var inst_7405 = cljs.core.next.call(null,inst_7388);
var inst_7369 = inst_7405;
var inst_7370 = null;
var inst_7371 = (0);
var inst_7372 = (0);
var state_7429__$1 = (function (){var statearr_7466 = state_7429;
(statearr_7466[(9)] = inst_7372);

(statearr_7466[(10)] = inst_7370);

(statearr_7466[(20)] = inst_7371);

(statearr_7466[(27)] = inst_7404);

(statearr_7466[(21)] = inst_7369);

return statearr_7466;
})();
var statearr_7467_7535 = state_7429__$1;
(statearr_7467_7535[(2)] = null);

(statearr_7467_7535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (43))){
var state_7429__$1 = state_7429;
var statearr_7468_7536 = state_7429__$1;
(statearr_7468_7536[(2)] = null);

(statearr_7468_7536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (29))){
var inst_7413 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7469_7537 = state_7429__$1;
(statearr_7469_7537[(2)] = inst_7413);

(statearr_7469_7537[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (44))){
var inst_7422 = (state_7429[(2)]);
var state_7429__$1 = (function (){var statearr_7470 = state_7429;
(statearr_7470[(28)] = inst_7422);

return statearr_7470;
})();
var statearr_7471_7538 = state_7429__$1;
(statearr_7471_7538[(2)] = null);

(statearr_7471_7538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (6))){
var inst_7361 = (state_7429[(29)]);
var inst_7360 = cljs.core.deref.call(null,cs);
var inst_7361__$1 = cljs.core.keys.call(null,inst_7360);
var inst_7362 = cljs.core.count.call(null,inst_7361__$1);
var inst_7363 = cljs.core.reset_BANG_.call(null,dctr,inst_7362);
var inst_7368 = cljs.core.seq.call(null,inst_7361__$1);
var inst_7369 = inst_7368;
var inst_7370 = null;
var inst_7371 = (0);
var inst_7372 = (0);
var state_7429__$1 = (function (){var statearr_7472 = state_7429;
(statearr_7472[(9)] = inst_7372);

(statearr_7472[(10)] = inst_7370);

(statearr_7472[(20)] = inst_7371);

(statearr_7472[(29)] = inst_7361__$1);

(statearr_7472[(21)] = inst_7369);

(statearr_7472[(30)] = inst_7363);

return statearr_7472;
})();
var statearr_7473_7539 = state_7429__$1;
(statearr_7473_7539[(2)] = null);

(statearr_7473_7539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (28))){
var inst_7369 = (state_7429[(21)]);
var inst_7388 = (state_7429[(25)]);
var inst_7388__$1 = cljs.core.seq.call(null,inst_7369);
var state_7429__$1 = (function (){var statearr_7474 = state_7429;
(statearr_7474[(25)] = inst_7388__$1);

return statearr_7474;
})();
if(inst_7388__$1){
var statearr_7475_7540 = state_7429__$1;
(statearr_7475_7540[(1)] = (33));

} else {
var statearr_7476_7541 = state_7429__$1;
(statearr_7476_7541[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (25))){
var inst_7372 = (state_7429[(9)]);
var inst_7371 = (state_7429[(20)]);
var inst_7374 = (inst_7372 < inst_7371);
var inst_7375 = inst_7374;
var state_7429__$1 = state_7429;
if(cljs.core.truth_(inst_7375)){
var statearr_7477_7542 = state_7429__$1;
(statearr_7477_7542[(1)] = (27));

} else {
var statearr_7478_7543 = state_7429__$1;
(statearr_7478_7543[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (34))){
var state_7429__$1 = state_7429;
var statearr_7479_7544 = state_7429__$1;
(statearr_7479_7544[(2)] = null);

(statearr_7479_7544[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (17))){
var state_7429__$1 = state_7429;
var statearr_7480_7545 = state_7429__$1;
(statearr_7480_7545[(2)] = null);

(statearr_7480_7545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (3))){
var inst_7427 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7429__$1,inst_7427);
} else {
if((state_val_7430 === (12))){
var inst_7356 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7481_7546 = state_7429__$1;
(statearr_7481_7546[(2)] = inst_7356);

(statearr_7481_7546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (2))){
var state_7429__$1 = state_7429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7429__$1,(4),ch);
} else {
if((state_val_7430 === (23))){
var state_7429__$1 = state_7429;
var statearr_7482_7547 = state_7429__$1;
(statearr_7482_7547[(2)] = null);

(statearr_7482_7547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (35))){
var inst_7411 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7483_7548 = state_7429__$1;
(statearr_7483_7548[(2)] = inst_7411);

(statearr_7483_7548[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (19))){
var inst_7328 = (state_7429[(7)]);
var inst_7332 = cljs.core.chunk_first.call(null,inst_7328);
var inst_7333 = cljs.core.chunk_rest.call(null,inst_7328);
var inst_7334 = cljs.core.count.call(null,inst_7332);
var inst_7306 = inst_7333;
var inst_7307 = inst_7332;
var inst_7308 = inst_7334;
var inst_7309 = (0);
var state_7429__$1 = (function (){var statearr_7484 = state_7429;
(statearr_7484[(13)] = inst_7309);

(statearr_7484[(14)] = inst_7306);

(statearr_7484[(16)] = inst_7307);

(statearr_7484[(17)] = inst_7308);

return statearr_7484;
})();
var statearr_7485_7549 = state_7429__$1;
(statearr_7485_7549[(2)] = null);

(statearr_7485_7549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (11))){
var inst_7306 = (state_7429[(14)]);
var inst_7328 = (state_7429[(7)]);
var inst_7328__$1 = cljs.core.seq.call(null,inst_7306);
var state_7429__$1 = (function (){var statearr_7486 = state_7429;
(statearr_7486[(7)] = inst_7328__$1);

return statearr_7486;
})();
if(inst_7328__$1){
var statearr_7487_7550 = state_7429__$1;
(statearr_7487_7550[(1)] = (16));

} else {
var statearr_7488_7551 = state_7429__$1;
(statearr_7488_7551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (9))){
var inst_7358 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7489_7552 = state_7429__$1;
(statearr_7489_7552[(2)] = inst_7358);

(statearr_7489_7552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (5))){
var inst_7304 = cljs.core.deref.call(null,cs);
var inst_7305 = cljs.core.seq.call(null,inst_7304);
var inst_7306 = inst_7305;
var inst_7307 = null;
var inst_7308 = (0);
var inst_7309 = (0);
var state_7429__$1 = (function (){var statearr_7490 = state_7429;
(statearr_7490[(13)] = inst_7309);

(statearr_7490[(14)] = inst_7306);

(statearr_7490[(16)] = inst_7307);

(statearr_7490[(17)] = inst_7308);

return statearr_7490;
})();
var statearr_7491_7553 = state_7429__$1;
(statearr_7491_7553[(2)] = null);

(statearr_7491_7553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (14))){
var state_7429__$1 = state_7429;
var statearr_7492_7554 = state_7429__$1;
(statearr_7492_7554[(2)] = null);

(statearr_7492_7554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (45))){
var inst_7419 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7493_7555 = state_7429__$1;
(statearr_7493_7555[(2)] = inst_7419);

(statearr_7493_7555[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (26))){
var inst_7361 = (state_7429[(29)]);
var inst_7415 = (state_7429[(2)]);
var inst_7416 = cljs.core.seq.call(null,inst_7361);
var state_7429__$1 = (function (){var statearr_7494 = state_7429;
(statearr_7494[(31)] = inst_7415);

return statearr_7494;
})();
if(inst_7416){
var statearr_7495_7556 = state_7429__$1;
(statearr_7495_7556[(1)] = (42));

} else {
var statearr_7496_7557 = state_7429__$1;
(statearr_7496_7557[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (16))){
var inst_7328 = (state_7429[(7)]);
var inst_7330 = cljs.core.chunked_seq_QMARK_.call(null,inst_7328);
var state_7429__$1 = state_7429;
if(inst_7330){
var statearr_7497_7558 = state_7429__$1;
(statearr_7497_7558[(1)] = (19));

} else {
var statearr_7498_7559 = state_7429__$1;
(statearr_7498_7559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (38))){
var inst_7408 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7499_7560 = state_7429__$1;
(statearr_7499_7560[(2)] = inst_7408);

(statearr_7499_7560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (30))){
var state_7429__$1 = state_7429;
var statearr_7500_7561 = state_7429__$1;
(statearr_7500_7561[(2)] = null);

(statearr_7500_7561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (10))){
var inst_7309 = (state_7429[(13)]);
var inst_7307 = (state_7429[(16)]);
var inst_7317 = cljs.core._nth.call(null,inst_7307,inst_7309);
var inst_7318 = cljs.core.nth.call(null,inst_7317,(0),null);
var inst_7319 = cljs.core.nth.call(null,inst_7317,(1),null);
var state_7429__$1 = (function (){var statearr_7501 = state_7429;
(statearr_7501[(26)] = inst_7318);

return statearr_7501;
})();
if(cljs.core.truth_(inst_7319)){
var statearr_7502_7562 = state_7429__$1;
(statearr_7502_7562[(1)] = (13));

} else {
var statearr_7503_7563 = state_7429__$1;
(statearr_7503_7563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (18))){
var inst_7354 = (state_7429[(2)]);
var state_7429__$1 = state_7429;
var statearr_7504_7564 = state_7429__$1;
(statearr_7504_7564[(2)] = inst_7354);

(statearr_7504_7564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (42))){
var state_7429__$1 = state_7429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7429__$1,(45),dchan);
} else {
if((state_val_7430 === (37))){
var inst_7297 = (state_7429[(12)]);
var inst_7397 = (state_7429[(23)]);
var inst_7388 = (state_7429[(25)]);
var inst_7397__$1 = cljs.core.first.call(null,inst_7388);
var inst_7398 = cljs.core.async.put_BANG_.call(null,inst_7397__$1,inst_7297,done);
var state_7429__$1 = (function (){var statearr_7505 = state_7429;
(statearr_7505[(23)] = inst_7397__$1);

return statearr_7505;
})();
if(cljs.core.truth_(inst_7398)){
var statearr_7506_7565 = state_7429__$1;
(statearr_7506_7565[(1)] = (39));

} else {
var statearr_7507_7566 = state_7429__$1;
(statearr_7507_7566[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7430 === (8))){
var inst_7309 = (state_7429[(13)]);
var inst_7308 = (state_7429[(17)]);
var inst_7311 = (inst_7309 < inst_7308);
var inst_7312 = inst_7311;
var state_7429__$1 = state_7429;
if(cljs.core.truth_(inst_7312)){
var statearr_7508_7567 = state_7429__$1;
(statearr_7508_7567[(1)] = (10));

} else {
var statearr_7509_7568 = state_7429__$1;
(statearr_7509_7568[(1)] = (11));

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
});})(c__4831__auto___7514,cs,m,dchan,dctr,done))
;
return ((function (switch__4664__auto__,c__4831__auto___7514,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4665__auto__ = null;
var cljs$core$async$mult_$_state_machine__4665__auto____0 = (function (){
var statearr_7510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7510[(0)] = cljs$core$async$mult_$_state_machine__4665__auto__);

(statearr_7510[(1)] = (1));

return statearr_7510;
});
var cljs$core$async$mult_$_state_machine__4665__auto____1 = (function (state_7429){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7511){if((e7511 instanceof Object)){
var ex__4668__auto__ = e7511;
var statearr_7512_7569 = state_7429;
(statearr_7512_7569[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7570 = state_7429;
state_7429 = G__7570;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4665__auto__ = function(state_7429){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4665__auto____1.call(this,state_7429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4665__auto____0;
cljs$core$async$mult_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4665__auto____1;
return cljs$core$async$mult_$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___7514,cs,m,dchan,dctr,done))
})();
var state__4833__auto__ = (function (){var statearr_7513 = f__4832__auto__.call(null);
(statearr_7513[(6)] = c__4831__auto___7514);

return statearr_7513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___7514,cs,m,dchan,dctr,done))
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
var G__7572 = arguments.length;
switch (G__7572) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___7584 = arguments.length;
var i__4642__auto___7585 = (0);
while(true){
if((i__4642__auto___7585 < len__4641__auto___7584)){
args__4647__auto__.push((arguments[i__4642__auto___7585]));

var G__7586 = (i__4642__auto___7585 + (1));
i__4642__auto___7585 = G__7586;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7578){
var map__7579 = p__7578;
var map__7579__$1 = (((((!((map__7579 == null))))?(((((map__7579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7579):map__7579);
var opts = map__7579__$1;
var statearr_7581_7587 = state;
(statearr_7581_7587[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__7579,map__7579__$1,opts){
return (function (val){
var statearr_7582_7588 = state;
(statearr_7582_7588[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7579,map__7579__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_7583_7589 = state;
(statearr_7583_7589[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7574){
var G__7575 = cljs.core.first.call(null,seq7574);
var seq7574__$1 = cljs.core.next.call(null,seq7574);
var G__7576 = cljs.core.first.call(null,seq7574__$1);
var seq7574__$2 = cljs.core.next.call(null,seq7574__$1);
var G__7577 = cljs.core.first.call(null,seq7574__$2);
var seq7574__$3 = cljs.core.next.call(null,seq7574__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7575,G__7576,G__7577,seq7574__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7590 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta7591){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta7591 = meta7591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7592,meta7591__$1){
var self__ = this;
var _7592__$1 = this;
return (new cljs.core.async.t_cljs$core$async7590(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta7591__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7592){
var self__ = this;
var _7592__$1 = this;
return self__.meta7591;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta7591","meta7591",318812923,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7590";

cljs.core.async.t_cljs$core$async7590.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7590");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7590.
 */
cljs.core.async.__GT_t_cljs$core$async7590 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7590(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta7591){
return (new cljs.core.async.t_cljs$core$async7590(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta7591));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7590(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4831__auto___7754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___7754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___7754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7694){
var state_val_7695 = (state_7694[(1)]);
if((state_val_7695 === (7))){
var inst_7609 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
var statearr_7696_7755 = state_7694__$1;
(statearr_7696_7755[(2)] = inst_7609);

(statearr_7696_7755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (20))){
var inst_7621 = (state_7694[(7)]);
var state_7694__$1 = state_7694;
var statearr_7697_7756 = state_7694__$1;
(statearr_7697_7756[(2)] = inst_7621);

(statearr_7697_7756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (27))){
var state_7694__$1 = state_7694;
var statearr_7698_7757 = state_7694__$1;
(statearr_7698_7757[(2)] = null);

(statearr_7698_7757[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (1))){
var inst_7596 = (state_7694[(8)]);
var inst_7596__$1 = calc_state.call(null);
var inst_7598 = (inst_7596__$1 == null);
var inst_7599 = cljs.core.not.call(null,inst_7598);
var state_7694__$1 = (function (){var statearr_7699 = state_7694;
(statearr_7699[(8)] = inst_7596__$1);

return statearr_7699;
})();
if(inst_7599){
var statearr_7700_7758 = state_7694__$1;
(statearr_7700_7758[(1)] = (2));

} else {
var statearr_7701_7759 = state_7694__$1;
(statearr_7701_7759[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (24))){
var inst_7668 = (state_7694[(9)]);
var inst_7654 = (state_7694[(10)]);
var inst_7645 = (state_7694[(11)]);
var inst_7668__$1 = inst_7645.call(null,inst_7654);
var state_7694__$1 = (function (){var statearr_7702 = state_7694;
(statearr_7702[(9)] = inst_7668__$1);

return statearr_7702;
})();
if(cljs.core.truth_(inst_7668__$1)){
var statearr_7703_7760 = state_7694__$1;
(statearr_7703_7760[(1)] = (29));

} else {
var statearr_7704_7761 = state_7694__$1;
(statearr_7704_7761[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (4))){
var inst_7612 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7612)){
var statearr_7705_7762 = state_7694__$1;
(statearr_7705_7762[(1)] = (8));

} else {
var statearr_7706_7763 = state_7694__$1;
(statearr_7706_7763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (15))){
var inst_7639 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7639)){
var statearr_7707_7764 = state_7694__$1;
(statearr_7707_7764[(1)] = (19));

} else {
var statearr_7708_7765 = state_7694__$1;
(statearr_7708_7765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (21))){
var inst_7644 = (state_7694[(12)]);
var inst_7644__$1 = (state_7694[(2)]);
var inst_7645 = cljs.core.get.call(null,inst_7644__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7646 = cljs.core.get.call(null,inst_7644__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7647 = cljs.core.get.call(null,inst_7644__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7694__$1 = (function (){var statearr_7709 = state_7694;
(statearr_7709[(13)] = inst_7646);

(statearr_7709[(11)] = inst_7645);

(statearr_7709[(12)] = inst_7644__$1);

return statearr_7709;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7694__$1,(22),inst_7647);
} else {
if((state_val_7695 === (31))){
var inst_7676 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7676)){
var statearr_7710_7766 = state_7694__$1;
(statearr_7710_7766[(1)] = (32));

} else {
var statearr_7711_7767 = state_7694__$1;
(statearr_7711_7767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (32))){
var inst_7653 = (state_7694[(14)]);
var state_7694__$1 = state_7694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7694__$1,(35),out,inst_7653);
} else {
if((state_val_7695 === (33))){
var inst_7644 = (state_7694[(12)]);
var inst_7621 = inst_7644;
var state_7694__$1 = (function (){var statearr_7712 = state_7694;
(statearr_7712[(7)] = inst_7621);

return statearr_7712;
})();
var statearr_7713_7768 = state_7694__$1;
(statearr_7713_7768[(2)] = null);

(statearr_7713_7768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (13))){
var inst_7621 = (state_7694[(7)]);
var inst_7628 = inst_7621.cljs$lang$protocol_mask$partition0$;
var inst_7629 = (inst_7628 & (64));
var inst_7630 = inst_7621.cljs$core$ISeq$;
var inst_7631 = (cljs.core.PROTOCOL_SENTINEL === inst_7630);
var inst_7632 = ((inst_7629) || (inst_7631));
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7632)){
var statearr_7714_7769 = state_7694__$1;
(statearr_7714_7769[(1)] = (16));

} else {
var statearr_7715_7770 = state_7694__$1;
(statearr_7715_7770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (22))){
var inst_7653 = (state_7694[(14)]);
var inst_7654 = (state_7694[(10)]);
var inst_7652 = (state_7694[(2)]);
var inst_7653__$1 = cljs.core.nth.call(null,inst_7652,(0),null);
var inst_7654__$1 = cljs.core.nth.call(null,inst_7652,(1),null);
var inst_7655 = (inst_7653__$1 == null);
var inst_7656 = cljs.core._EQ_.call(null,inst_7654__$1,change);
var inst_7657 = ((inst_7655) || (inst_7656));
var state_7694__$1 = (function (){var statearr_7716 = state_7694;
(statearr_7716[(14)] = inst_7653__$1);

(statearr_7716[(10)] = inst_7654__$1);

return statearr_7716;
})();
if(cljs.core.truth_(inst_7657)){
var statearr_7717_7771 = state_7694__$1;
(statearr_7717_7771[(1)] = (23));

} else {
var statearr_7718_7772 = state_7694__$1;
(statearr_7718_7772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (36))){
var inst_7644 = (state_7694[(12)]);
var inst_7621 = inst_7644;
var state_7694__$1 = (function (){var statearr_7719 = state_7694;
(statearr_7719[(7)] = inst_7621);

return statearr_7719;
})();
var statearr_7720_7773 = state_7694__$1;
(statearr_7720_7773[(2)] = null);

(statearr_7720_7773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (29))){
var inst_7668 = (state_7694[(9)]);
var state_7694__$1 = state_7694;
var statearr_7721_7774 = state_7694__$1;
(statearr_7721_7774[(2)] = inst_7668);

(statearr_7721_7774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (6))){
var state_7694__$1 = state_7694;
var statearr_7722_7775 = state_7694__$1;
(statearr_7722_7775[(2)] = false);

(statearr_7722_7775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (28))){
var inst_7664 = (state_7694[(2)]);
var inst_7665 = calc_state.call(null);
var inst_7621 = inst_7665;
var state_7694__$1 = (function (){var statearr_7723 = state_7694;
(statearr_7723[(15)] = inst_7664);

(statearr_7723[(7)] = inst_7621);

return statearr_7723;
})();
var statearr_7724_7776 = state_7694__$1;
(statearr_7724_7776[(2)] = null);

(statearr_7724_7776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (25))){
var inst_7690 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
var statearr_7725_7777 = state_7694__$1;
(statearr_7725_7777[(2)] = inst_7690);

(statearr_7725_7777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (34))){
var inst_7688 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
var statearr_7726_7778 = state_7694__$1;
(statearr_7726_7778[(2)] = inst_7688);

(statearr_7726_7778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (17))){
var state_7694__$1 = state_7694;
var statearr_7727_7779 = state_7694__$1;
(statearr_7727_7779[(2)] = false);

(statearr_7727_7779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (3))){
var state_7694__$1 = state_7694;
var statearr_7728_7780 = state_7694__$1;
(statearr_7728_7780[(2)] = false);

(statearr_7728_7780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (12))){
var inst_7692 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7694__$1,inst_7692);
} else {
if((state_val_7695 === (2))){
var inst_7596 = (state_7694[(8)]);
var inst_7601 = inst_7596.cljs$lang$protocol_mask$partition0$;
var inst_7602 = (inst_7601 & (64));
var inst_7603 = inst_7596.cljs$core$ISeq$;
var inst_7604 = (cljs.core.PROTOCOL_SENTINEL === inst_7603);
var inst_7605 = ((inst_7602) || (inst_7604));
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7605)){
var statearr_7729_7781 = state_7694__$1;
(statearr_7729_7781[(1)] = (5));

} else {
var statearr_7730_7782 = state_7694__$1;
(statearr_7730_7782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (23))){
var inst_7653 = (state_7694[(14)]);
var inst_7659 = (inst_7653 == null);
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7659)){
var statearr_7731_7783 = state_7694__$1;
(statearr_7731_7783[(1)] = (26));

} else {
var statearr_7732_7784 = state_7694__$1;
(statearr_7732_7784[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (35))){
var inst_7679 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
if(cljs.core.truth_(inst_7679)){
var statearr_7733_7785 = state_7694__$1;
(statearr_7733_7785[(1)] = (36));

} else {
var statearr_7734_7786 = state_7694__$1;
(statearr_7734_7786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (19))){
var inst_7621 = (state_7694[(7)]);
var inst_7641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7621);
var state_7694__$1 = state_7694;
var statearr_7735_7787 = state_7694__$1;
(statearr_7735_7787[(2)] = inst_7641);

(statearr_7735_7787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (11))){
var inst_7621 = (state_7694[(7)]);
var inst_7625 = (inst_7621 == null);
var inst_7626 = cljs.core.not.call(null,inst_7625);
var state_7694__$1 = state_7694;
if(inst_7626){
var statearr_7736_7788 = state_7694__$1;
(statearr_7736_7788[(1)] = (13));

} else {
var statearr_7737_7789 = state_7694__$1;
(statearr_7737_7789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (9))){
var inst_7596 = (state_7694[(8)]);
var state_7694__$1 = state_7694;
var statearr_7738_7790 = state_7694__$1;
(statearr_7738_7790[(2)] = inst_7596);

(statearr_7738_7790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (5))){
var state_7694__$1 = state_7694;
var statearr_7739_7791 = state_7694__$1;
(statearr_7739_7791[(2)] = true);

(statearr_7739_7791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (14))){
var state_7694__$1 = state_7694;
var statearr_7740_7792 = state_7694__$1;
(statearr_7740_7792[(2)] = false);

(statearr_7740_7792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (26))){
var inst_7654 = (state_7694[(10)]);
var inst_7661 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7654);
var state_7694__$1 = state_7694;
var statearr_7741_7793 = state_7694__$1;
(statearr_7741_7793[(2)] = inst_7661);

(statearr_7741_7793[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (16))){
var state_7694__$1 = state_7694;
var statearr_7742_7794 = state_7694__$1;
(statearr_7742_7794[(2)] = true);

(statearr_7742_7794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (38))){
var inst_7684 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
var statearr_7743_7795 = state_7694__$1;
(statearr_7743_7795[(2)] = inst_7684);

(statearr_7743_7795[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (30))){
var inst_7646 = (state_7694[(13)]);
var inst_7654 = (state_7694[(10)]);
var inst_7645 = (state_7694[(11)]);
var inst_7671 = cljs.core.empty_QMARK_.call(null,inst_7645);
var inst_7672 = inst_7646.call(null,inst_7654);
var inst_7673 = cljs.core.not.call(null,inst_7672);
var inst_7674 = ((inst_7671) && (inst_7673));
var state_7694__$1 = state_7694;
var statearr_7744_7796 = state_7694__$1;
(statearr_7744_7796[(2)] = inst_7674);

(statearr_7744_7796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (10))){
var inst_7596 = (state_7694[(8)]);
var inst_7617 = (state_7694[(2)]);
var inst_7618 = cljs.core.get.call(null,inst_7617,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7619 = cljs.core.get.call(null,inst_7617,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7620 = cljs.core.get.call(null,inst_7617,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7621 = inst_7596;
var state_7694__$1 = (function (){var statearr_7745 = state_7694;
(statearr_7745[(16)] = inst_7620);

(statearr_7745[(17)] = inst_7619);

(statearr_7745[(18)] = inst_7618);

(statearr_7745[(7)] = inst_7621);

return statearr_7745;
})();
var statearr_7746_7797 = state_7694__$1;
(statearr_7746_7797[(2)] = null);

(statearr_7746_7797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (18))){
var inst_7636 = (state_7694[(2)]);
var state_7694__$1 = state_7694;
var statearr_7747_7798 = state_7694__$1;
(statearr_7747_7798[(2)] = inst_7636);

(statearr_7747_7798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (37))){
var state_7694__$1 = state_7694;
var statearr_7748_7799 = state_7694__$1;
(statearr_7748_7799[(2)] = null);

(statearr_7748_7799[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7695 === (8))){
var inst_7596 = (state_7694[(8)]);
var inst_7614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7596);
var state_7694__$1 = state_7694;
var statearr_7749_7800 = state_7694__$1;
(statearr_7749_7800[(2)] = inst_7614);

(statearr_7749_7800[(1)] = (10));


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
});})(c__4831__auto___7754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__4664__auto__,c__4831__auto___7754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4665__auto__ = null;
var cljs$core$async$mix_$_state_machine__4665__auto____0 = (function (){
var statearr_7750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7750[(0)] = cljs$core$async$mix_$_state_machine__4665__auto__);

(statearr_7750[(1)] = (1));

return statearr_7750;
});
var cljs$core$async$mix_$_state_machine__4665__auto____1 = (function (state_7694){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7751){if((e7751 instanceof Object)){
var ex__4668__auto__ = e7751;
var statearr_7752_7801 = state_7694;
(statearr_7752_7801[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7802 = state_7694;
state_7694 = G__7802;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4665__auto__ = function(state_7694){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4665__auto____1.call(this,state_7694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4665__auto____0;
cljs$core$async$mix_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4665__auto____1;
return cljs$core$async$mix_$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___7754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__4833__auto__ = (function (){var statearr_7753 = f__4832__auto__.call(null);
(statearr_7753[(6)] = c__4831__auto___7754);

return statearr_7753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___7754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__7804 = arguments.length;
switch (G__7804) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
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
var G__7808 = arguments.length;
switch (G__7808) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__7806_SHARP_){
if(cljs.core.truth_(p1__7806_SHARP_.call(null,topic))){
return p1__7806_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7806_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7809 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7810){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7810 = meta7810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7811,meta7810__$1){
var self__ = this;
var _7811__$1 = this;
return (new cljs.core.async.t_cljs$core$async7809(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7810__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7811){
var self__ = this;
var _7811__$1 = this;
return self__.meta7810;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7810","meta7810",-670262818,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7809";

cljs.core.async.t_cljs$core$async7809.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7809");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7809.
 */
cljs.core.async.__GT_t_cljs$core$async7809 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7809(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7810){
return (new cljs.core.async.t_cljs$core$async7809(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7810));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7809(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4831__auto___7929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___7929,mults,ensure_mult,p){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___7929,mults,ensure_mult,p){
return (function (state_7883){
var state_val_7884 = (state_7883[(1)]);
if((state_val_7884 === (7))){
var inst_7879 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7885_7930 = state_7883__$1;
(statearr_7885_7930[(2)] = inst_7879);

(statearr_7885_7930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (20))){
var state_7883__$1 = state_7883;
var statearr_7886_7931 = state_7883__$1;
(statearr_7886_7931[(2)] = null);

(statearr_7886_7931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (1))){
var state_7883__$1 = state_7883;
var statearr_7887_7932 = state_7883__$1;
(statearr_7887_7932[(2)] = null);

(statearr_7887_7932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (24))){
var inst_7862 = (state_7883[(7)]);
var inst_7871 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7862);
var state_7883__$1 = state_7883;
var statearr_7888_7933 = state_7883__$1;
(statearr_7888_7933[(2)] = inst_7871);

(statearr_7888_7933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (4))){
var inst_7814 = (state_7883[(8)]);
var inst_7814__$1 = (state_7883[(2)]);
var inst_7815 = (inst_7814__$1 == null);
var state_7883__$1 = (function (){var statearr_7889 = state_7883;
(statearr_7889[(8)] = inst_7814__$1);

return statearr_7889;
})();
if(cljs.core.truth_(inst_7815)){
var statearr_7890_7934 = state_7883__$1;
(statearr_7890_7934[(1)] = (5));

} else {
var statearr_7891_7935 = state_7883__$1;
(statearr_7891_7935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (15))){
var inst_7856 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7892_7936 = state_7883__$1;
(statearr_7892_7936[(2)] = inst_7856);

(statearr_7892_7936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (21))){
var inst_7876 = (state_7883[(2)]);
var state_7883__$1 = (function (){var statearr_7893 = state_7883;
(statearr_7893[(9)] = inst_7876);

return statearr_7893;
})();
var statearr_7894_7937 = state_7883__$1;
(statearr_7894_7937[(2)] = null);

(statearr_7894_7937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (13))){
var inst_7838 = (state_7883[(10)]);
var inst_7840 = cljs.core.chunked_seq_QMARK_.call(null,inst_7838);
var state_7883__$1 = state_7883;
if(inst_7840){
var statearr_7895_7938 = state_7883__$1;
(statearr_7895_7938[(1)] = (16));

} else {
var statearr_7896_7939 = state_7883__$1;
(statearr_7896_7939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (22))){
var inst_7868 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
if(cljs.core.truth_(inst_7868)){
var statearr_7897_7940 = state_7883__$1;
(statearr_7897_7940[(1)] = (23));

} else {
var statearr_7898_7941 = state_7883__$1;
(statearr_7898_7941[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (6))){
var inst_7862 = (state_7883[(7)]);
var inst_7864 = (state_7883[(11)]);
var inst_7814 = (state_7883[(8)]);
var inst_7862__$1 = topic_fn.call(null,inst_7814);
var inst_7863 = cljs.core.deref.call(null,mults);
var inst_7864__$1 = cljs.core.get.call(null,inst_7863,inst_7862__$1);
var state_7883__$1 = (function (){var statearr_7899 = state_7883;
(statearr_7899[(7)] = inst_7862__$1);

(statearr_7899[(11)] = inst_7864__$1);

return statearr_7899;
})();
if(cljs.core.truth_(inst_7864__$1)){
var statearr_7900_7942 = state_7883__$1;
(statearr_7900_7942[(1)] = (19));

} else {
var statearr_7901_7943 = state_7883__$1;
(statearr_7901_7943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (25))){
var inst_7873 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7902_7944 = state_7883__$1;
(statearr_7902_7944[(2)] = inst_7873);

(statearr_7902_7944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (17))){
var inst_7838 = (state_7883[(10)]);
var inst_7847 = cljs.core.first.call(null,inst_7838);
var inst_7848 = cljs.core.async.muxch_STAR_.call(null,inst_7847);
var inst_7849 = cljs.core.async.close_BANG_.call(null,inst_7848);
var inst_7850 = cljs.core.next.call(null,inst_7838);
var inst_7824 = inst_7850;
var inst_7825 = null;
var inst_7826 = (0);
var inst_7827 = (0);
var state_7883__$1 = (function (){var statearr_7903 = state_7883;
(statearr_7903[(12)] = inst_7827);

(statearr_7903[(13)] = inst_7826);

(statearr_7903[(14)] = inst_7825);

(statearr_7903[(15)] = inst_7849);

(statearr_7903[(16)] = inst_7824);

return statearr_7903;
})();
var statearr_7904_7945 = state_7883__$1;
(statearr_7904_7945[(2)] = null);

(statearr_7904_7945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (3))){
var inst_7881 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7883__$1,inst_7881);
} else {
if((state_val_7884 === (12))){
var inst_7858 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7905_7946 = state_7883__$1;
(statearr_7905_7946[(2)] = inst_7858);

(statearr_7905_7946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (2))){
var state_7883__$1 = state_7883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7883__$1,(4),ch);
} else {
if((state_val_7884 === (23))){
var state_7883__$1 = state_7883;
var statearr_7906_7947 = state_7883__$1;
(statearr_7906_7947[(2)] = null);

(statearr_7906_7947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (19))){
var inst_7864 = (state_7883[(11)]);
var inst_7814 = (state_7883[(8)]);
var inst_7866 = cljs.core.async.muxch_STAR_.call(null,inst_7864);
var state_7883__$1 = state_7883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7883__$1,(22),inst_7866,inst_7814);
} else {
if((state_val_7884 === (11))){
var inst_7824 = (state_7883[(16)]);
var inst_7838 = (state_7883[(10)]);
var inst_7838__$1 = cljs.core.seq.call(null,inst_7824);
var state_7883__$1 = (function (){var statearr_7907 = state_7883;
(statearr_7907[(10)] = inst_7838__$1);

return statearr_7907;
})();
if(inst_7838__$1){
var statearr_7908_7948 = state_7883__$1;
(statearr_7908_7948[(1)] = (13));

} else {
var statearr_7909_7949 = state_7883__$1;
(statearr_7909_7949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (9))){
var inst_7860 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7910_7950 = state_7883__$1;
(statearr_7910_7950[(2)] = inst_7860);

(statearr_7910_7950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (5))){
var inst_7821 = cljs.core.deref.call(null,mults);
var inst_7822 = cljs.core.vals.call(null,inst_7821);
var inst_7823 = cljs.core.seq.call(null,inst_7822);
var inst_7824 = inst_7823;
var inst_7825 = null;
var inst_7826 = (0);
var inst_7827 = (0);
var state_7883__$1 = (function (){var statearr_7911 = state_7883;
(statearr_7911[(12)] = inst_7827);

(statearr_7911[(13)] = inst_7826);

(statearr_7911[(14)] = inst_7825);

(statearr_7911[(16)] = inst_7824);

return statearr_7911;
})();
var statearr_7912_7951 = state_7883__$1;
(statearr_7912_7951[(2)] = null);

(statearr_7912_7951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (14))){
var state_7883__$1 = state_7883;
var statearr_7916_7952 = state_7883__$1;
(statearr_7916_7952[(2)] = null);

(statearr_7916_7952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (16))){
var inst_7838 = (state_7883[(10)]);
var inst_7842 = cljs.core.chunk_first.call(null,inst_7838);
var inst_7843 = cljs.core.chunk_rest.call(null,inst_7838);
var inst_7844 = cljs.core.count.call(null,inst_7842);
var inst_7824 = inst_7843;
var inst_7825 = inst_7842;
var inst_7826 = inst_7844;
var inst_7827 = (0);
var state_7883__$1 = (function (){var statearr_7917 = state_7883;
(statearr_7917[(12)] = inst_7827);

(statearr_7917[(13)] = inst_7826);

(statearr_7917[(14)] = inst_7825);

(statearr_7917[(16)] = inst_7824);

return statearr_7917;
})();
var statearr_7918_7953 = state_7883__$1;
(statearr_7918_7953[(2)] = null);

(statearr_7918_7953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (10))){
var inst_7827 = (state_7883[(12)]);
var inst_7826 = (state_7883[(13)]);
var inst_7825 = (state_7883[(14)]);
var inst_7824 = (state_7883[(16)]);
var inst_7832 = cljs.core._nth.call(null,inst_7825,inst_7827);
var inst_7833 = cljs.core.async.muxch_STAR_.call(null,inst_7832);
var inst_7834 = cljs.core.async.close_BANG_.call(null,inst_7833);
var inst_7835 = (inst_7827 + (1));
var tmp7913 = inst_7826;
var tmp7914 = inst_7825;
var tmp7915 = inst_7824;
var inst_7824__$1 = tmp7915;
var inst_7825__$1 = tmp7914;
var inst_7826__$1 = tmp7913;
var inst_7827__$1 = inst_7835;
var state_7883__$1 = (function (){var statearr_7919 = state_7883;
(statearr_7919[(12)] = inst_7827__$1);

(statearr_7919[(13)] = inst_7826__$1);

(statearr_7919[(14)] = inst_7825__$1);

(statearr_7919[(17)] = inst_7834);

(statearr_7919[(16)] = inst_7824__$1);

return statearr_7919;
})();
var statearr_7920_7954 = state_7883__$1;
(statearr_7920_7954[(2)] = null);

(statearr_7920_7954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (18))){
var inst_7853 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7921_7955 = state_7883__$1;
(statearr_7921_7955[(2)] = inst_7853);

(statearr_7921_7955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (8))){
var inst_7827 = (state_7883[(12)]);
var inst_7826 = (state_7883[(13)]);
var inst_7829 = (inst_7827 < inst_7826);
var inst_7830 = inst_7829;
var state_7883__$1 = state_7883;
if(cljs.core.truth_(inst_7830)){
var statearr_7922_7956 = state_7883__$1;
(statearr_7922_7956[(1)] = (10));

} else {
var statearr_7923_7957 = state_7883__$1;
(statearr_7923_7957[(1)] = (11));

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
});})(c__4831__auto___7929,mults,ensure_mult,p))
;
return ((function (switch__4664__auto__,c__4831__auto___7929,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_7924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7924[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_7924[(1)] = (1));

return statearr_7924;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_7883){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_7883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e7925){if((e7925 instanceof Object)){
var ex__4668__auto__ = e7925;
var statearr_7926_7958 = state_7883;
(statearr_7926_7958[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7959 = state_7883;
state_7883 = G__7959;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_7883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_7883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___7929,mults,ensure_mult,p))
})();
var state__4833__auto__ = (function (){var statearr_7927 = f__4832__auto__.call(null);
(statearr_7927[(6)] = c__4831__auto___7929);

return statearr_7927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___7929,mults,ensure_mult,p))
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
var G__7961 = arguments.length;
switch (G__7961) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7964 = arguments.length;
switch (G__7964) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__7967 = arguments.length;
switch (G__7967) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__4831__auto___8034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8006){
var state_val_8007 = (state_8006[(1)]);
if((state_val_8007 === (7))){
var state_8006__$1 = state_8006;
var statearr_8008_8035 = state_8006__$1;
(statearr_8008_8035[(2)] = null);

(statearr_8008_8035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (1))){
var state_8006__$1 = state_8006;
var statearr_8009_8036 = state_8006__$1;
(statearr_8009_8036[(2)] = null);

(statearr_8009_8036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (4))){
var inst_7970 = (state_8006[(7)]);
var inst_7972 = (inst_7970 < cnt);
var state_8006__$1 = state_8006;
if(cljs.core.truth_(inst_7972)){
var statearr_8010_8037 = state_8006__$1;
(statearr_8010_8037[(1)] = (6));

} else {
var statearr_8011_8038 = state_8006__$1;
(statearr_8011_8038[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (15))){
var inst_8002 = (state_8006[(2)]);
var state_8006__$1 = state_8006;
var statearr_8012_8039 = state_8006__$1;
(statearr_8012_8039[(2)] = inst_8002);

(statearr_8012_8039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (13))){
var inst_7995 = cljs.core.async.close_BANG_.call(null,out);
var state_8006__$1 = state_8006;
var statearr_8013_8040 = state_8006__$1;
(statearr_8013_8040[(2)] = inst_7995);

(statearr_8013_8040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (6))){
var state_8006__$1 = state_8006;
var statearr_8014_8041 = state_8006__$1;
(statearr_8014_8041[(2)] = null);

(statearr_8014_8041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (3))){
var inst_8004 = (state_8006[(2)]);
var state_8006__$1 = state_8006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8006__$1,inst_8004);
} else {
if((state_val_8007 === (12))){
var inst_7992 = (state_8006[(8)]);
var inst_7992__$1 = (state_8006[(2)]);
var inst_7993 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7992__$1);
var state_8006__$1 = (function (){var statearr_8015 = state_8006;
(statearr_8015[(8)] = inst_7992__$1);

return statearr_8015;
})();
if(cljs.core.truth_(inst_7993)){
var statearr_8016_8042 = state_8006__$1;
(statearr_8016_8042[(1)] = (13));

} else {
var statearr_8017_8043 = state_8006__$1;
(statearr_8017_8043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (2))){
var inst_7969 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7970 = (0);
var state_8006__$1 = (function (){var statearr_8018 = state_8006;
(statearr_8018[(7)] = inst_7970);

(statearr_8018[(9)] = inst_7969);

return statearr_8018;
})();
var statearr_8019_8044 = state_8006__$1;
(statearr_8019_8044[(2)] = null);

(statearr_8019_8044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (11))){
var inst_7970 = (state_8006[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8006,(10),Object,null,(9));
var inst_7979 = chs__$1.call(null,inst_7970);
var inst_7980 = done.call(null,inst_7970);
var inst_7981 = cljs.core.async.take_BANG_.call(null,inst_7979,inst_7980);
var state_8006__$1 = state_8006;
var statearr_8020_8045 = state_8006__$1;
(statearr_8020_8045[(2)] = inst_7981);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8006__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (9))){
var inst_7970 = (state_8006[(7)]);
var inst_7983 = (state_8006[(2)]);
var inst_7984 = (inst_7970 + (1));
var inst_7970__$1 = inst_7984;
var state_8006__$1 = (function (){var statearr_8021 = state_8006;
(statearr_8021[(7)] = inst_7970__$1);

(statearr_8021[(10)] = inst_7983);

return statearr_8021;
})();
var statearr_8022_8046 = state_8006__$1;
(statearr_8022_8046[(2)] = null);

(statearr_8022_8046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (5))){
var inst_7990 = (state_8006[(2)]);
var state_8006__$1 = (function (){var statearr_8023 = state_8006;
(statearr_8023[(11)] = inst_7990);

return statearr_8023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8006__$1,(12),dchan);
} else {
if((state_val_8007 === (14))){
var inst_7992 = (state_8006[(8)]);
var inst_7997 = cljs.core.apply.call(null,f,inst_7992);
var state_8006__$1 = state_8006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8006__$1,(16),out,inst_7997);
} else {
if((state_val_8007 === (16))){
var inst_7999 = (state_8006[(2)]);
var state_8006__$1 = (function (){var statearr_8024 = state_8006;
(statearr_8024[(12)] = inst_7999);

return statearr_8024;
})();
var statearr_8025_8047 = state_8006__$1;
(statearr_8025_8047[(2)] = null);

(statearr_8025_8047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (10))){
var inst_7974 = (state_8006[(2)]);
var inst_7975 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8006__$1 = (function (){var statearr_8026 = state_8006;
(statearr_8026[(13)] = inst_7974);

return statearr_8026;
})();
var statearr_8027_8048 = state_8006__$1;
(statearr_8027_8048[(2)] = inst_7975);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8006__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (8))){
var inst_7988 = (state_8006[(2)]);
var state_8006__$1 = state_8006;
var statearr_8028_8049 = state_8006__$1;
(statearr_8028_8049[(2)] = inst_7988);

(statearr_8028_8049[(1)] = (5));


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
});})(c__4831__auto___8034,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__4664__auto__,c__4831__auto___8034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8029[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8029[(1)] = (1));

return statearr_8029;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8006){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8030){if((e8030 instanceof Object)){
var ex__4668__auto__ = e8030;
var statearr_8031_8050 = state_8006;
(statearr_8031_8050[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8051 = state_8006;
state_8006 = G__8051;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8034,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__4833__auto__ = (function (){var statearr_8032 = f__4832__auto__.call(null);
(statearr_8032[(6)] = c__4831__auto___8034);

return statearr_8032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8034,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__8054 = arguments.length;
switch (G__8054) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4831__auto___8108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8108,out){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8108,out){
return (function (state_8086){
var state_val_8087 = (state_8086[(1)]);
if((state_val_8087 === (7))){
var inst_8066 = (state_8086[(7)]);
var inst_8065 = (state_8086[(8)]);
var inst_8065__$1 = (state_8086[(2)]);
var inst_8066__$1 = cljs.core.nth.call(null,inst_8065__$1,(0),null);
var inst_8067 = cljs.core.nth.call(null,inst_8065__$1,(1),null);
var inst_8068 = (inst_8066__$1 == null);
var state_8086__$1 = (function (){var statearr_8088 = state_8086;
(statearr_8088[(7)] = inst_8066__$1);

(statearr_8088[(8)] = inst_8065__$1);

(statearr_8088[(9)] = inst_8067);

return statearr_8088;
})();
if(cljs.core.truth_(inst_8068)){
var statearr_8089_8109 = state_8086__$1;
(statearr_8089_8109[(1)] = (8));

} else {
var statearr_8090_8110 = state_8086__$1;
(statearr_8090_8110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (1))){
var inst_8055 = cljs.core.vec.call(null,chs);
var inst_8056 = inst_8055;
var state_8086__$1 = (function (){var statearr_8091 = state_8086;
(statearr_8091[(10)] = inst_8056);

return statearr_8091;
})();
var statearr_8092_8111 = state_8086__$1;
(statearr_8092_8111[(2)] = null);

(statearr_8092_8111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (4))){
var inst_8056 = (state_8086[(10)]);
var state_8086__$1 = state_8086;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8086__$1,(7),inst_8056);
} else {
if((state_val_8087 === (6))){
var inst_8082 = (state_8086[(2)]);
var state_8086__$1 = state_8086;
var statearr_8093_8112 = state_8086__$1;
(statearr_8093_8112[(2)] = inst_8082);

(statearr_8093_8112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (3))){
var inst_8084 = (state_8086[(2)]);
var state_8086__$1 = state_8086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8086__$1,inst_8084);
} else {
if((state_val_8087 === (2))){
var inst_8056 = (state_8086[(10)]);
var inst_8058 = cljs.core.count.call(null,inst_8056);
var inst_8059 = (inst_8058 > (0));
var state_8086__$1 = state_8086;
if(cljs.core.truth_(inst_8059)){
var statearr_8095_8113 = state_8086__$1;
(statearr_8095_8113[(1)] = (4));

} else {
var statearr_8096_8114 = state_8086__$1;
(statearr_8096_8114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (11))){
var inst_8056 = (state_8086[(10)]);
var inst_8075 = (state_8086[(2)]);
var tmp8094 = inst_8056;
var inst_8056__$1 = tmp8094;
var state_8086__$1 = (function (){var statearr_8097 = state_8086;
(statearr_8097[(10)] = inst_8056__$1);

(statearr_8097[(11)] = inst_8075);

return statearr_8097;
})();
var statearr_8098_8115 = state_8086__$1;
(statearr_8098_8115[(2)] = null);

(statearr_8098_8115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (9))){
var inst_8066 = (state_8086[(7)]);
var state_8086__$1 = state_8086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8086__$1,(11),out,inst_8066);
} else {
if((state_val_8087 === (5))){
var inst_8080 = cljs.core.async.close_BANG_.call(null,out);
var state_8086__$1 = state_8086;
var statearr_8099_8116 = state_8086__$1;
(statearr_8099_8116[(2)] = inst_8080);

(statearr_8099_8116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (10))){
var inst_8078 = (state_8086[(2)]);
var state_8086__$1 = state_8086;
var statearr_8100_8117 = state_8086__$1;
(statearr_8100_8117[(2)] = inst_8078);

(statearr_8100_8117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8087 === (8))){
var inst_8056 = (state_8086[(10)]);
var inst_8066 = (state_8086[(7)]);
var inst_8065 = (state_8086[(8)]);
var inst_8067 = (state_8086[(9)]);
var inst_8070 = (function (){var cs = inst_8056;
var vec__8061 = inst_8065;
var v = inst_8066;
var c = inst_8067;
return ((function (cs,vec__8061,v,c,inst_8056,inst_8066,inst_8065,inst_8067,state_val_8087,c__4831__auto___8108,out){
return (function (p1__8052_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__8052_SHARP_);
});
;})(cs,vec__8061,v,c,inst_8056,inst_8066,inst_8065,inst_8067,state_val_8087,c__4831__auto___8108,out))
})();
var inst_8071 = cljs.core.filterv.call(null,inst_8070,inst_8056);
var inst_8056__$1 = inst_8071;
var state_8086__$1 = (function (){var statearr_8101 = state_8086;
(statearr_8101[(10)] = inst_8056__$1);

return statearr_8101;
})();
var statearr_8102_8118 = state_8086__$1;
(statearr_8102_8118[(2)] = null);

(statearr_8102_8118[(1)] = (2));


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
});})(c__4831__auto___8108,out))
;
return ((function (switch__4664__auto__,c__4831__auto___8108,out){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8103[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8103[(1)] = (1));

return statearr_8103;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8086){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8104){if((e8104 instanceof Object)){
var ex__4668__auto__ = e8104;
var statearr_8105_8119 = state_8086;
(statearr_8105_8119[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8120 = state_8086;
state_8086 = G__8120;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8108,out))
})();
var state__4833__auto__ = (function (){var statearr_8106 = f__4832__auto__.call(null);
(statearr_8106[(6)] = c__4831__auto___8108);

return statearr_8106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8108,out))
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
var G__8122 = arguments.length;
switch (G__8122) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4831__auto___8167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8167,out){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8167,out){
return (function (state_8146){
var state_val_8147 = (state_8146[(1)]);
if((state_val_8147 === (7))){
var inst_8128 = (state_8146[(7)]);
var inst_8128__$1 = (state_8146[(2)]);
var inst_8129 = (inst_8128__$1 == null);
var inst_8130 = cljs.core.not.call(null,inst_8129);
var state_8146__$1 = (function (){var statearr_8148 = state_8146;
(statearr_8148[(7)] = inst_8128__$1);

return statearr_8148;
})();
if(inst_8130){
var statearr_8149_8168 = state_8146__$1;
(statearr_8149_8168[(1)] = (8));

} else {
var statearr_8150_8169 = state_8146__$1;
(statearr_8150_8169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (1))){
var inst_8123 = (0);
var state_8146__$1 = (function (){var statearr_8151 = state_8146;
(statearr_8151[(8)] = inst_8123);

return statearr_8151;
})();
var statearr_8152_8170 = state_8146__$1;
(statearr_8152_8170[(2)] = null);

(statearr_8152_8170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (4))){
var state_8146__$1 = state_8146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8146__$1,(7),ch);
} else {
if((state_val_8147 === (6))){
var inst_8141 = (state_8146[(2)]);
var state_8146__$1 = state_8146;
var statearr_8153_8171 = state_8146__$1;
(statearr_8153_8171[(2)] = inst_8141);

(statearr_8153_8171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (3))){
var inst_8143 = (state_8146[(2)]);
var inst_8144 = cljs.core.async.close_BANG_.call(null,out);
var state_8146__$1 = (function (){var statearr_8154 = state_8146;
(statearr_8154[(9)] = inst_8143);

return statearr_8154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8146__$1,inst_8144);
} else {
if((state_val_8147 === (2))){
var inst_8123 = (state_8146[(8)]);
var inst_8125 = (inst_8123 < n);
var state_8146__$1 = state_8146;
if(cljs.core.truth_(inst_8125)){
var statearr_8155_8172 = state_8146__$1;
(statearr_8155_8172[(1)] = (4));

} else {
var statearr_8156_8173 = state_8146__$1;
(statearr_8156_8173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (11))){
var inst_8123 = (state_8146[(8)]);
var inst_8133 = (state_8146[(2)]);
var inst_8134 = (inst_8123 + (1));
var inst_8123__$1 = inst_8134;
var state_8146__$1 = (function (){var statearr_8157 = state_8146;
(statearr_8157[(8)] = inst_8123__$1);

(statearr_8157[(10)] = inst_8133);

return statearr_8157;
})();
var statearr_8158_8174 = state_8146__$1;
(statearr_8158_8174[(2)] = null);

(statearr_8158_8174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (9))){
var state_8146__$1 = state_8146;
var statearr_8159_8175 = state_8146__$1;
(statearr_8159_8175[(2)] = null);

(statearr_8159_8175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (5))){
var state_8146__$1 = state_8146;
var statearr_8160_8176 = state_8146__$1;
(statearr_8160_8176[(2)] = null);

(statearr_8160_8176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (10))){
var inst_8138 = (state_8146[(2)]);
var state_8146__$1 = state_8146;
var statearr_8161_8177 = state_8146__$1;
(statearr_8161_8177[(2)] = inst_8138);

(statearr_8161_8177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8147 === (8))){
var inst_8128 = (state_8146[(7)]);
var state_8146__$1 = state_8146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8146__$1,(11),out,inst_8128);
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
});})(c__4831__auto___8167,out))
;
return ((function (switch__4664__auto__,c__4831__auto___8167,out){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8162[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8162[(1)] = (1));

return statearr_8162;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8146){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8163){if((e8163 instanceof Object)){
var ex__4668__auto__ = e8163;
var statearr_8164_8178 = state_8146;
(statearr_8164_8178[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8179 = state_8146;
state_8146 = G__8179;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8167,out))
})();
var state__4833__auto__ = (function (){var statearr_8165 = f__4832__auto__.call(null);
(statearr_8165[(6)] = c__4831__auto___8167);

return statearr_8165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8167,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8181 = (function (f,ch,meta8182){
this.f = f;
this.ch = ch;
this.meta8182 = meta8182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8183,meta8182__$1){
var self__ = this;
var _8183__$1 = this;
return (new cljs.core.async.t_cljs$core$async8181(self__.f,self__.ch,meta8182__$1));
});

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8183){
var self__ = this;
var _8183__$1 = this;
return self__.meta8182;
});

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8184 = (function (f,ch,meta8182,_,fn1,meta8185){
this.f = f;
this.ch = ch;
this.meta8182 = meta8182;
this._ = _;
this.fn1 = fn1;
this.meta8185 = meta8185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8186,meta8185__$1){
var self__ = this;
var _8186__$1 = this;
return (new cljs.core.async.t_cljs$core$async8184(self__.f,self__.ch,self__.meta8182,self__._,self__.fn1,meta8185__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8186){
var self__ = this;
var _8186__$1 = this;
return self__.meta8185;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8184.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8180_SHARP_){
return f1.call(null,(((p1__8180_SHARP_ == null))?null:self__.f.call(null,p1__8180_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8184.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8182","meta8182",629831970,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8181","cljs.core.async/t_cljs$core$async8181",241843819,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8185","meta8185",1817257979,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8184";

cljs.core.async.t_cljs$core$async8184.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8184");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8184.
 */
cljs.core.async.__GT_t_cljs$core$async8184 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8184(f__$1,ch__$1,meta8182__$1,___$2,fn1__$1,meta8185){
return (new cljs.core.async.t_cljs$core$async8184(f__$1,ch__$1,meta8182__$1,___$2,fn1__$1,meta8185));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8184(self__.f,self__.ch,self__.meta8182,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8182","meta8182",629831970,null)], null);
});

cljs.core.async.t_cljs$core$async8181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8181";

cljs.core.async.t_cljs$core$async8181.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8181");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8181.
 */
cljs.core.async.__GT_t_cljs$core$async8181 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8181(f__$1,ch__$1,meta8182){
return (new cljs.core.async.t_cljs$core$async8181(f__$1,ch__$1,meta8182));
});

}

return (new cljs.core.async.t_cljs$core$async8181(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8187 = (function (f,ch,meta8188){
this.f = f;
this.ch = ch;
this.meta8188 = meta8188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8189,meta8188__$1){
var self__ = this;
var _8189__$1 = this;
return (new cljs.core.async.t_cljs$core$async8187(self__.f,self__.ch,meta8188__$1));
});

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8189){
var self__ = this;
var _8189__$1 = this;
return self__.meta8188;
});

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8188","meta8188",-2043197210,null)], null);
});

cljs.core.async.t_cljs$core$async8187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8187";

cljs.core.async.t_cljs$core$async8187.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8187");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8187.
 */
cljs.core.async.__GT_t_cljs$core$async8187 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8187(f__$1,ch__$1,meta8188){
return (new cljs.core.async.t_cljs$core$async8187(f__$1,ch__$1,meta8188));
});

}

return (new cljs.core.async.t_cljs$core$async8187(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8190 = (function (p,ch,meta8191){
this.p = p;
this.ch = ch;
this.meta8191 = meta8191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8192,meta8191__$1){
var self__ = this;
var _8192__$1 = this;
return (new cljs.core.async.t_cljs$core$async8190(self__.p,self__.ch,meta8191__$1));
});

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8192){
var self__ = this;
var _8192__$1 = this;
return self__.meta8191;
});

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8191","meta8191",1147085253,null)], null);
});

cljs.core.async.t_cljs$core$async8190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8190";

cljs.core.async.t_cljs$core$async8190.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8190");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8190.
 */
cljs.core.async.__GT_t_cljs$core$async8190 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8190(p__$1,ch__$1,meta8191){
return (new cljs.core.async.t_cljs$core$async8190(p__$1,ch__$1,meta8191));
});

}

return (new cljs.core.async.t_cljs$core$async8190(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8194 = arguments.length;
switch (G__8194) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4831__auto___8234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8234,out){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8234,out){
return (function (state_8215){
var state_val_8216 = (state_8215[(1)]);
if((state_val_8216 === (7))){
var inst_8211 = (state_8215[(2)]);
var state_8215__$1 = state_8215;
var statearr_8217_8235 = state_8215__$1;
(statearr_8217_8235[(2)] = inst_8211);

(statearr_8217_8235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (1))){
var state_8215__$1 = state_8215;
var statearr_8218_8236 = state_8215__$1;
(statearr_8218_8236[(2)] = null);

(statearr_8218_8236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (4))){
var inst_8197 = (state_8215[(7)]);
var inst_8197__$1 = (state_8215[(2)]);
var inst_8198 = (inst_8197__$1 == null);
var state_8215__$1 = (function (){var statearr_8219 = state_8215;
(statearr_8219[(7)] = inst_8197__$1);

return statearr_8219;
})();
if(cljs.core.truth_(inst_8198)){
var statearr_8220_8237 = state_8215__$1;
(statearr_8220_8237[(1)] = (5));

} else {
var statearr_8221_8238 = state_8215__$1;
(statearr_8221_8238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (6))){
var inst_8197 = (state_8215[(7)]);
var inst_8202 = p.call(null,inst_8197);
var state_8215__$1 = state_8215;
if(cljs.core.truth_(inst_8202)){
var statearr_8222_8239 = state_8215__$1;
(statearr_8222_8239[(1)] = (8));

} else {
var statearr_8223_8240 = state_8215__$1;
(statearr_8223_8240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (3))){
var inst_8213 = (state_8215[(2)]);
var state_8215__$1 = state_8215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8215__$1,inst_8213);
} else {
if((state_val_8216 === (2))){
var state_8215__$1 = state_8215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8215__$1,(4),ch);
} else {
if((state_val_8216 === (11))){
var inst_8205 = (state_8215[(2)]);
var state_8215__$1 = state_8215;
var statearr_8224_8241 = state_8215__$1;
(statearr_8224_8241[(2)] = inst_8205);

(statearr_8224_8241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (9))){
var state_8215__$1 = state_8215;
var statearr_8225_8242 = state_8215__$1;
(statearr_8225_8242[(2)] = null);

(statearr_8225_8242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (5))){
var inst_8200 = cljs.core.async.close_BANG_.call(null,out);
var state_8215__$1 = state_8215;
var statearr_8226_8243 = state_8215__$1;
(statearr_8226_8243[(2)] = inst_8200);

(statearr_8226_8243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (10))){
var inst_8208 = (state_8215[(2)]);
var state_8215__$1 = (function (){var statearr_8227 = state_8215;
(statearr_8227[(8)] = inst_8208);

return statearr_8227;
})();
var statearr_8228_8244 = state_8215__$1;
(statearr_8228_8244[(2)] = null);

(statearr_8228_8244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (8))){
var inst_8197 = (state_8215[(7)]);
var state_8215__$1 = state_8215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8215__$1,(11),out,inst_8197);
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
});})(c__4831__auto___8234,out))
;
return ((function (switch__4664__auto__,c__4831__auto___8234,out){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8229 = [null,null,null,null,null,null,null,null,null];
(statearr_8229[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8229[(1)] = (1));

return statearr_8229;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8215){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8230){if((e8230 instanceof Object)){
var ex__4668__auto__ = e8230;
var statearr_8231_8245 = state_8215;
(statearr_8231_8245[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8246 = state_8215;
state_8215 = G__8246;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8234,out))
})();
var state__4833__auto__ = (function (){var statearr_8232 = f__4832__auto__.call(null);
(statearr_8232[(6)] = c__4831__auto___8234);

return statearr_8232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8234,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8248 = arguments.length;
switch (G__8248) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__){
return (function (state_8311){
var state_val_8312 = (state_8311[(1)]);
if((state_val_8312 === (7))){
var inst_8307 = (state_8311[(2)]);
var state_8311__$1 = state_8311;
var statearr_8313_8351 = state_8311__$1;
(statearr_8313_8351[(2)] = inst_8307);

(statearr_8313_8351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (20))){
var inst_8277 = (state_8311[(7)]);
var inst_8288 = (state_8311[(2)]);
var inst_8289 = cljs.core.next.call(null,inst_8277);
var inst_8263 = inst_8289;
var inst_8264 = null;
var inst_8265 = (0);
var inst_8266 = (0);
var state_8311__$1 = (function (){var statearr_8314 = state_8311;
(statearr_8314[(8)] = inst_8266);

(statearr_8314[(9)] = inst_8288);

(statearr_8314[(10)] = inst_8265);

(statearr_8314[(11)] = inst_8263);

(statearr_8314[(12)] = inst_8264);

return statearr_8314;
})();
var statearr_8315_8352 = state_8311__$1;
(statearr_8315_8352[(2)] = null);

(statearr_8315_8352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (1))){
var state_8311__$1 = state_8311;
var statearr_8316_8353 = state_8311__$1;
(statearr_8316_8353[(2)] = null);

(statearr_8316_8353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (4))){
var inst_8252 = (state_8311[(13)]);
var inst_8252__$1 = (state_8311[(2)]);
var inst_8253 = (inst_8252__$1 == null);
var state_8311__$1 = (function (){var statearr_8317 = state_8311;
(statearr_8317[(13)] = inst_8252__$1);

return statearr_8317;
})();
if(cljs.core.truth_(inst_8253)){
var statearr_8318_8354 = state_8311__$1;
(statearr_8318_8354[(1)] = (5));

} else {
var statearr_8319_8355 = state_8311__$1;
(statearr_8319_8355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (15))){
var state_8311__$1 = state_8311;
var statearr_8323_8356 = state_8311__$1;
(statearr_8323_8356[(2)] = null);

(statearr_8323_8356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (21))){
var state_8311__$1 = state_8311;
var statearr_8324_8357 = state_8311__$1;
(statearr_8324_8357[(2)] = null);

(statearr_8324_8357[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (13))){
var inst_8266 = (state_8311[(8)]);
var inst_8265 = (state_8311[(10)]);
var inst_8263 = (state_8311[(11)]);
var inst_8264 = (state_8311[(12)]);
var inst_8273 = (state_8311[(2)]);
var inst_8274 = (inst_8266 + (1));
var tmp8320 = inst_8265;
var tmp8321 = inst_8263;
var tmp8322 = inst_8264;
var inst_8263__$1 = tmp8321;
var inst_8264__$1 = tmp8322;
var inst_8265__$1 = tmp8320;
var inst_8266__$1 = inst_8274;
var state_8311__$1 = (function (){var statearr_8325 = state_8311;
(statearr_8325[(14)] = inst_8273);

(statearr_8325[(8)] = inst_8266__$1);

(statearr_8325[(10)] = inst_8265__$1);

(statearr_8325[(11)] = inst_8263__$1);

(statearr_8325[(12)] = inst_8264__$1);

return statearr_8325;
})();
var statearr_8326_8358 = state_8311__$1;
(statearr_8326_8358[(2)] = null);

(statearr_8326_8358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (22))){
var state_8311__$1 = state_8311;
var statearr_8327_8359 = state_8311__$1;
(statearr_8327_8359[(2)] = null);

(statearr_8327_8359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (6))){
var inst_8252 = (state_8311[(13)]);
var inst_8261 = f.call(null,inst_8252);
var inst_8262 = cljs.core.seq.call(null,inst_8261);
var inst_8263 = inst_8262;
var inst_8264 = null;
var inst_8265 = (0);
var inst_8266 = (0);
var state_8311__$1 = (function (){var statearr_8328 = state_8311;
(statearr_8328[(8)] = inst_8266);

(statearr_8328[(10)] = inst_8265);

(statearr_8328[(11)] = inst_8263);

(statearr_8328[(12)] = inst_8264);

return statearr_8328;
})();
var statearr_8329_8360 = state_8311__$1;
(statearr_8329_8360[(2)] = null);

(statearr_8329_8360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (17))){
var inst_8277 = (state_8311[(7)]);
var inst_8281 = cljs.core.chunk_first.call(null,inst_8277);
var inst_8282 = cljs.core.chunk_rest.call(null,inst_8277);
var inst_8283 = cljs.core.count.call(null,inst_8281);
var inst_8263 = inst_8282;
var inst_8264 = inst_8281;
var inst_8265 = inst_8283;
var inst_8266 = (0);
var state_8311__$1 = (function (){var statearr_8330 = state_8311;
(statearr_8330[(8)] = inst_8266);

(statearr_8330[(10)] = inst_8265);

(statearr_8330[(11)] = inst_8263);

(statearr_8330[(12)] = inst_8264);

return statearr_8330;
})();
var statearr_8331_8361 = state_8311__$1;
(statearr_8331_8361[(2)] = null);

(statearr_8331_8361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (3))){
var inst_8309 = (state_8311[(2)]);
var state_8311__$1 = state_8311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8311__$1,inst_8309);
} else {
if((state_val_8312 === (12))){
var inst_8297 = (state_8311[(2)]);
var state_8311__$1 = state_8311;
var statearr_8332_8362 = state_8311__$1;
(statearr_8332_8362[(2)] = inst_8297);

(statearr_8332_8362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (2))){
var state_8311__$1 = state_8311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8311__$1,(4),in$);
} else {
if((state_val_8312 === (23))){
var inst_8305 = (state_8311[(2)]);
var state_8311__$1 = state_8311;
var statearr_8333_8363 = state_8311__$1;
(statearr_8333_8363[(2)] = inst_8305);

(statearr_8333_8363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (19))){
var inst_8292 = (state_8311[(2)]);
var state_8311__$1 = state_8311;
var statearr_8334_8364 = state_8311__$1;
(statearr_8334_8364[(2)] = inst_8292);

(statearr_8334_8364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (11))){
var inst_8277 = (state_8311[(7)]);
var inst_8263 = (state_8311[(11)]);
var inst_8277__$1 = cljs.core.seq.call(null,inst_8263);
var state_8311__$1 = (function (){var statearr_8335 = state_8311;
(statearr_8335[(7)] = inst_8277__$1);

return statearr_8335;
})();
if(inst_8277__$1){
var statearr_8336_8365 = state_8311__$1;
(statearr_8336_8365[(1)] = (14));

} else {
var statearr_8337_8366 = state_8311__$1;
(statearr_8337_8366[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (9))){
var inst_8299 = (state_8311[(2)]);
var inst_8300 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8311__$1 = (function (){var statearr_8338 = state_8311;
(statearr_8338[(15)] = inst_8299);

return statearr_8338;
})();
if(cljs.core.truth_(inst_8300)){
var statearr_8339_8367 = state_8311__$1;
(statearr_8339_8367[(1)] = (21));

} else {
var statearr_8340_8368 = state_8311__$1;
(statearr_8340_8368[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (5))){
var inst_8255 = cljs.core.async.close_BANG_.call(null,out);
var state_8311__$1 = state_8311;
var statearr_8341_8369 = state_8311__$1;
(statearr_8341_8369[(2)] = inst_8255);

(statearr_8341_8369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (14))){
var inst_8277 = (state_8311[(7)]);
var inst_8279 = cljs.core.chunked_seq_QMARK_.call(null,inst_8277);
var state_8311__$1 = state_8311;
if(inst_8279){
var statearr_8342_8370 = state_8311__$1;
(statearr_8342_8370[(1)] = (17));

} else {
var statearr_8343_8371 = state_8311__$1;
(statearr_8343_8371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (16))){
var inst_8295 = (state_8311[(2)]);
var state_8311__$1 = state_8311;
var statearr_8344_8372 = state_8311__$1;
(statearr_8344_8372[(2)] = inst_8295);

(statearr_8344_8372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8312 === (10))){
var inst_8266 = (state_8311[(8)]);
var inst_8264 = (state_8311[(12)]);
var inst_8271 = cljs.core._nth.call(null,inst_8264,inst_8266);
var state_8311__$1 = state_8311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8311__$1,(13),out,inst_8271);
} else {
if((state_val_8312 === (18))){
var inst_8277 = (state_8311[(7)]);
var inst_8286 = cljs.core.first.call(null,inst_8277);
var state_8311__$1 = state_8311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8311__$1,(20),out,inst_8286);
} else {
if((state_val_8312 === (8))){
var inst_8266 = (state_8311[(8)]);
var inst_8265 = (state_8311[(10)]);
var inst_8268 = (inst_8266 < inst_8265);
var inst_8269 = inst_8268;
var state_8311__$1 = state_8311;
if(cljs.core.truth_(inst_8269)){
var statearr_8345_8373 = state_8311__$1;
(statearr_8345_8373[(1)] = (10));

} else {
var statearr_8346_8374 = state_8311__$1;
(statearr_8346_8374[(1)] = (11));

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
});})(c__4831__auto__))
;
return ((function (switch__4664__auto__,c__4831__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4665__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4665__auto____0 = (function (){
var statearr_8347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8347[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4665__auto__);

(statearr_8347[(1)] = (1));

return statearr_8347;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4665__auto____1 = (function (state_8311){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8348){if((e8348 instanceof Object)){
var ex__4668__auto__ = e8348;
var statearr_8349_8375 = state_8311;
(statearr_8349_8375[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8376 = state_8311;
state_8311 = G__8376;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4665__auto__ = function(state_8311){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4665__auto____1.call(this,state_8311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4665__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4665__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__))
})();
var state__4833__auto__ = (function (){var statearr_8350 = f__4832__auto__.call(null);
(statearr_8350[(6)] = c__4831__auto__);

return statearr_8350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__))
);

return c__4831__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8378 = arguments.length;
switch (G__8378) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__8381 = arguments.length;
switch (G__8381) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__8384 = arguments.length;
switch (G__8384) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4831__auto___8431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8431,out){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8431,out){
return (function (state_8408){
var state_val_8409 = (state_8408[(1)]);
if((state_val_8409 === (7))){
var inst_8403 = (state_8408[(2)]);
var state_8408__$1 = state_8408;
var statearr_8410_8432 = state_8408__$1;
(statearr_8410_8432[(2)] = inst_8403);

(statearr_8410_8432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (1))){
var inst_8385 = null;
var state_8408__$1 = (function (){var statearr_8411 = state_8408;
(statearr_8411[(7)] = inst_8385);

return statearr_8411;
})();
var statearr_8412_8433 = state_8408__$1;
(statearr_8412_8433[(2)] = null);

(statearr_8412_8433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (4))){
var inst_8388 = (state_8408[(8)]);
var inst_8388__$1 = (state_8408[(2)]);
var inst_8389 = (inst_8388__$1 == null);
var inst_8390 = cljs.core.not.call(null,inst_8389);
var state_8408__$1 = (function (){var statearr_8413 = state_8408;
(statearr_8413[(8)] = inst_8388__$1);

return statearr_8413;
})();
if(inst_8390){
var statearr_8414_8434 = state_8408__$1;
(statearr_8414_8434[(1)] = (5));

} else {
var statearr_8415_8435 = state_8408__$1;
(statearr_8415_8435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (6))){
var state_8408__$1 = state_8408;
var statearr_8416_8436 = state_8408__$1;
(statearr_8416_8436[(2)] = null);

(statearr_8416_8436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (3))){
var inst_8405 = (state_8408[(2)]);
var inst_8406 = cljs.core.async.close_BANG_.call(null,out);
var state_8408__$1 = (function (){var statearr_8417 = state_8408;
(statearr_8417[(9)] = inst_8405);

return statearr_8417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8408__$1,inst_8406);
} else {
if((state_val_8409 === (2))){
var state_8408__$1 = state_8408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8408__$1,(4),ch);
} else {
if((state_val_8409 === (11))){
var inst_8388 = (state_8408[(8)]);
var inst_8397 = (state_8408[(2)]);
var inst_8385 = inst_8388;
var state_8408__$1 = (function (){var statearr_8418 = state_8408;
(statearr_8418[(10)] = inst_8397);

(statearr_8418[(7)] = inst_8385);

return statearr_8418;
})();
var statearr_8419_8437 = state_8408__$1;
(statearr_8419_8437[(2)] = null);

(statearr_8419_8437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (9))){
var inst_8388 = (state_8408[(8)]);
var state_8408__$1 = state_8408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8408__$1,(11),out,inst_8388);
} else {
if((state_val_8409 === (5))){
var inst_8388 = (state_8408[(8)]);
var inst_8385 = (state_8408[(7)]);
var inst_8392 = cljs.core._EQ_.call(null,inst_8388,inst_8385);
var state_8408__$1 = state_8408;
if(inst_8392){
var statearr_8421_8438 = state_8408__$1;
(statearr_8421_8438[(1)] = (8));

} else {
var statearr_8422_8439 = state_8408__$1;
(statearr_8422_8439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (10))){
var inst_8400 = (state_8408[(2)]);
var state_8408__$1 = state_8408;
var statearr_8423_8440 = state_8408__$1;
(statearr_8423_8440[(2)] = inst_8400);

(statearr_8423_8440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8409 === (8))){
var inst_8385 = (state_8408[(7)]);
var tmp8420 = inst_8385;
var inst_8385__$1 = tmp8420;
var state_8408__$1 = (function (){var statearr_8424 = state_8408;
(statearr_8424[(7)] = inst_8385__$1);

return statearr_8424;
})();
var statearr_8425_8441 = state_8408__$1;
(statearr_8425_8441[(2)] = null);

(statearr_8425_8441[(1)] = (2));


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
});})(c__4831__auto___8431,out))
;
return ((function (switch__4664__auto__,c__4831__auto___8431,out){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8426[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8426[(1)] = (1));

return statearr_8426;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8408){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8427){if((e8427 instanceof Object)){
var ex__4668__auto__ = e8427;
var statearr_8428_8442 = state_8408;
(statearr_8428_8442[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8443 = state_8408;
state_8408 = G__8443;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8431,out))
})();
var state__4833__auto__ = (function (){var statearr_8429 = f__4832__auto__.call(null);
(statearr_8429[(6)] = c__4831__auto___8431);

return statearr_8429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8431,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8445 = arguments.length;
switch (G__8445) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4831__auto___8511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8511,out){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8511,out){
return (function (state_8483){
var state_val_8484 = (state_8483[(1)]);
if((state_val_8484 === (7))){
var inst_8479 = (state_8483[(2)]);
var state_8483__$1 = state_8483;
var statearr_8485_8512 = state_8483__$1;
(statearr_8485_8512[(2)] = inst_8479);

(statearr_8485_8512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (1))){
var inst_8446 = (new Array(n));
var inst_8447 = inst_8446;
var inst_8448 = (0);
var state_8483__$1 = (function (){var statearr_8486 = state_8483;
(statearr_8486[(7)] = inst_8448);

(statearr_8486[(8)] = inst_8447);

return statearr_8486;
})();
var statearr_8487_8513 = state_8483__$1;
(statearr_8487_8513[(2)] = null);

(statearr_8487_8513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (4))){
var inst_8451 = (state_8483[(9)]);
var inst_8451__$1 = (state_8483[(2)]);
var inst_8452 = (inst_8451__$1 == null);
var inst_8453 = cljs.core.not.call(null,inst_8452);
var state_8483__$1 = (function (){var statearr_8488 = state_8483;
(statearr_8488[(9)] = inst_8451__$1);

return statearr_8488;
})();
if(inst_8453){
var statearr_8489_8514 = state_8483__$1;
(statearr_8489_8514[(1)] = (5));

} else {
var statearr_8490_8515 = state_8483__$1;
(statearr_8490_8515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (15))){
var inst_8473 = (state_8483[(2)]);
var state_8483__$1 = state_8483;
var statearr_8491_8516 = state_8483__$1;
(statearr_8491_8516[(2)] = inst_8473);

(statearr_8491_8516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (13))){
var state_8483__$1 = state_8483;
var statearr_8492_8517 = state_8483__$1;
(statearr_8492_8517[(2)] = null);

(statearr_8492_8517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (6))){
var inst_8448 = (state_8483[(7)]);
var inst_8469 = (inst_8448 > (0));
var state_8483__$1 = state_8483;
if(cljs.core.truth_(inst_8469)){
var statearr_8493_8518 = state_8483__$1;
(statearr_8493_8518[(1)] = (12));

} else {
var statearr_8494_8519 = state_8483__$1;
(statearr_8494_8519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (3))){
var inst_8481 = (state_8483[(2)]);
var state_8483__$1 = state_8483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8483__$1,inst_8481);
} else {
if((state_val_8484 === (12))){
var inst_8447 = (state_8483[(8)]);
var inst_8471 = cljs.core.vec.call(null,inst_8447);
var state_8483__$1 = state_8483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8483__$1,(15),out,inst_8471);
} else {
if((state_val_8484 === (2))){
var state_8483__$1 = state_8483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8483__$1,(4),ch);
} else {
if((state_val_8484 === (11))){
var inst_8463 = (state_8483[(2)]);
var inst_8464 = (new Array(n));
var inst_8447 = inst_8464;
var inst_8448 = (0);
var state_8483__$1 = (function (){var statearr_8495 = state_8483;
(statearr_8495[(7)] = inst_8448);

(statearr_8495[(8)] = inst_8447);

(statearr_8495[(10)] = inst_8463);

return statearr_8495;
})();
var statearr_8496_8520 = state_8483__$1;
(statearr_8496_8520[(2)] = null);

(statearr_8496_8520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (9))){
var inst_8447 = (state_8483[(8)]);
var inst_8461 = cljs.core.vec.call(null,inst_8447);
var state_8483__$1 = state_8483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8483__$1,(11),out,inst_8461);
} else {
if((state_val_8484 === (5))){
var inst_8456 = (state_8483[(11)]);
var inst_8448 = (state_8483[(7)]);
var inst_8447 = (state_8483[(8)]);
var inst_8451 = (state_8483[(9)]);
var inst_8455 = (inst_8447[inst_8448] = inst_8451);
var inst_8456__$1 = (inst_8448 + (1));
var inst_8457 = (inst_8456__$1 < n);
var state_8483__$1 = (function (){var statearr_8497 = state_8483;
(statearr_8497[(11)] = inst_8456__$1);

(statearr_8497[(12)] = inst_8455);

return statearr_8497;
})();
if(cljs.core.truth_(inst_8457)){
var statearr_8498_8521 = state_8483__$1;
(statearr_8498_8521[(1)] = (8));

} else {
var statearr_8499_8522 = state_8483__$1;
(statearr_8499_8522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (14))){
var inst_8476 = (state_8483[(2)]);
var inst_8477 = cljs.core.async.close_BANG_.call(null,out);
var state_8483__$1 = (function (){var statearr_8501 = state_8483;
(statearr_8501[(13)] = inst_8476);

return statearr_8501;
})();
var statearr_8502_8523 = state_8483__$1;
(statearr_8502_8523[(2)] = inst_8477);

(statearr_8502_8523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (10))){
var inst_8467 = (state_8483[(2)]);
var state_8483__$1 = state_8483;
var statearr_8503_8524 = state_8483__$1;
(statearr_8503_8524[(2)] = inst_8467);

(statearr_8503_8524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8484 === (8))){
var inst_8456 = (state_8483[(11)]);
var inst_8447 = (state_8483[(8)]);
var tmp8500 = inst_8447;
var inst_8447__$1 = tmp8500;
var inst_8448 = inst_8456;
var state_8483__$1 = (function (){var statearr_8504 = state_8483;
(statearr_8504[(7)] = inst_8448);

(statearr_8504[(8)] = inst_8447__$1);

return statearr_8504;
})();
var statearr_8505_8525 = state_8483__$1;
(statearr_8505_8525[(2)] = null);

(statearr_8505_8525[(1)] = (2));


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
});})(c__4831__auto___8511,out))
;
return ((function (switch__4664__auto__,c__4831__auto___8511,out){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8506[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8506[(1)] = (1));

return statearr_8506;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8483){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8507){if((e8507 instanceof Object)){
var ex__4668__auto__ = e8507;
var statearr_8508_8526 = state_8483;
(statearr_8508_8526[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8527 = state_8483;
state_8483 = G__8527;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8511,out))
})();
var state__4833__auto__ = (function (){var statearr_8509 = f__4832__auto__.call(null);
(statearr_8509[(6)] = c__4831__auto___8511);

return statearr_8509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8511,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8529 = arguments.length;
switch (G__8529) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4831__auto___8599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___8599,out){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___8599,out){
return (function (state_8571){
var state_val_8572 = (state_8571[(1)]);
if((state_val_8572 === (7))){
var inst_8567 = (state_8571[(2)]);
var state_8571__$1 = state_8571;
var statearr_8573_8600 = state_8571__$1;
(statearr_8573_8600[(2)] = inst_8567);

(statearr_8573_8600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (1))){
var inst_8530 = [];
var inst_8531 = inst_8530;
var inst_8532 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8571__$1 = (function (){var statearr_8574 = state_8571;
(statearr_8574[(7)] = inst_8531);

(statearr_8574[(8)] = inst_8532);

return statearr_8574;
})();
var statearr_8575_8601 = state_8571__$1;
(statearr_8575_8601[(2)] = null);

(statearr_8575_8601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (4))){
var inst_8535 = (state_8571[(9)]);
var inst_8535__$1 = (state_8571[(2)]);
var inst_8536 = (inst_8535__$1 == null);
var inst_8537 = cljs.core.not.call(null,inst_8536);
var state_8571__$1 = (function (){var statearr_8576 = state_8571;
(statearr_8576[(9)] = inst_8535__$1);

return statearr_8576;
})();
if(inst_8537){
var statearr_8577_8602 = state_8571__$1;
(statearr_8577_8602[(1)] = (5));

} else {
var statearr_8578_8603 = state_8571__$1;
(statearr_8578_8603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (15))){
var inst_8561 = (state_8571[(2)]);
var state_8571__$1 = state_8571;
var statearr_8579_8604 = state_8571__$1;
(statearr_8579_8604[(2)] = inst_8561);

(statearr_8579_8604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (13))){
var state_8571__$1 = state_8571;
var statearr_8580_8605 = state_8571__$1;
(statearr_8580_8605[(2)] = null);

(statearr_8580_8605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (6))){
var inst_8531 = (state_8571[(7)]);
var inst_8556 = inst_8531.length;
var inst_8557 = (inst_8556 > (0));
var state_8571__$1 = state_8571;
if(cljs.core.truth_(inst_8557)){
var statearr_8581_8606 = state_8571__$1;
(statearr_8581_8606[(1)] = (12));

} else {
var statearr_8582_8607 = state_8571__$1;
(statearr_8582_8607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (3))){
var inst_8569 = (state_8571[(2)]);
var state_8571__$1 = state_8571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8571__$1,inst_8569);
} else {
if((state_val_8572 === (12))){
var inst_8531 = (state_8571[(7)]);
var inst_8559 = cljs.core.vec.call(null,inst_8531);
var state_8571__$1 = state_8571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8571__$1,(15),out,inst_8559);
} else {
if((state_val_8572 === (2))){
var state_8571__$1 = state_8571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8571__$1,(4),ch);
} else {
if((state_val_8572 === (11))){
var inst_8539 = (state_8571[(10)]);
var inst_8535 = (state_8571[(9)]);
var inst_8549 = (state_8571[(2)]);
var inst_8550 = [];
var inst_8551 = inst_8550.push(inst_8535);
var inst_8531 = inst_8550;
var inst_8532 = inst_8539;
var state_8571__$1 = (function (){var statearr_8583 = state_8571;
(statearr_8583[(7)] = inst_8531);

(statearr_8583[(11)] = inst_8549);

(statearr_8583[(12)] = inst_8551);

(statearr_8583[(8)] = inst_8532);

return statearr_8583;
})();
var statearr_8584_8608 = state_8571__$1;
(statearr_8584_8608[(2)] = null);

(statearr_8584_8608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (9))){
var inst_8531 = (state_8571[(7)]);
var inst_8547 = cljs.core.vec.call(null,inst_8531);
var state_8571__$1 = state_8571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8571__$1,(11),out,inst_8547);
} else {
if((state_val_8572 === (5))){
var inst_8539 = (state_8571[(10)]);
var inst_8535 = (state_8571[(9)]);
var inst_8532 = (state_8571[(8)]);
var inst_8539__$1 = f.call(null,inst_8535);
var inst_8540 = cljs.core._EQ_.call(null,inst_8539__$1,inst_8532);
var inst_8541 = cljs.core.keyword_identical_QMARK_.call(null,inst_8532,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8542 = ((inst_8540) || (inst_8541));
var state_8571__$1 = (function (){var statearr_8585 = state_8571;
(statearr_8585[(10)] = inst_8539__$1);

return statearr_8585;
})();
if(cljs.core.truth_(inst_8542)){
var statearr_8586_8609 = state_8571__$1;
(statearr_8586_8609[(1)] = (8));

} else {
var statearr_8587_8610 = state_8571__$1;
(statearr_8587_8610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (14))){
var inst_8564 = (state_8571[(2)]);
var inst_8565 = cljs.core.async.close_BANG_.call(null,out);
var state_8571__$1 = (function (){var statearr_8589 = state_8571;
(statearr_8589[(13)] = inst_8564);

return statearr_8589;
})();
var statearr_8590_8611 = state_8571__$1;
(statearr_8590_8611[(2)] = inst_8565);

(statearr_8590_8611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (10))){
var inst_8554 = (state_8571[(2)]);
var state_8571__$1 = state_8571;
var statearr_8591_8612 = state_8571__$1;
(statearr_8591_8612[(2)] = inst_8554);

(statearr_8591_8612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8572 === (8))){
var inst_8539 = (state_8571[(10)]);
var inst_8531 = (state_8571[(7)]);
var inst_8535 = (state_8571[(9)]);
var inst_8544 = inst_8531.push(inst_8535);
var tmp8588 = inst_8531;
var inst_8531__$1 = tmp8588;
var inst_8532 = inst_8539;
var state_8571__$1 = (function (){var statearr_8592 = state_8571;
(statearr_8592[(7)] = inst_8531__$1);

(statearr_8592[(14)] = inst_8544);

(statearr_8592[(8)] = inst_8532);

return statearr_8592;
})();
var statearr_8593_8613 = state_8571__$1;
(statearr_8593_8613[(2)] = null);

(statearr_8593_8613[(1)] = (2));


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
});})(c__4831__auto___8599,out))
;
return ((function (switch__4664__auto__,c__4831__auto___8599,out){
return (function() {
var cljs$core$async$state_machine__4665__auto__ = null;
var cljs$core$async$state_machine__4665__auto____0 = (function (){
var statearr_8594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8594[(0)] = cljs$core$async$state_machine__4665__auto__);

(statearr_8594[(1)] = (1));

return statearr_8594;
});
var cljs$core$async$state_machine__4665__auto____1 = (function (state_8571){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_8571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e8595){if((e8595 instanceof Object)){
var ex__4668__auto__ = e8595;
var statearr_8596_8614 = state_8571;
(statearr_8596_8614[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8615 = state_8571;
state_8571 = G__8615;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
cljs$core$async$state_machine__4665__auto__ = function(state_8571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4665__auto____1.call(this,state_8571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4665__auto____0;
cljs$core$async$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4665__auto____1;
return cljs$core$async$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___8599,out))
})();
var state__4833__auto__ = (function (){var statearr_8597 = f__4832__auto__.call(null);
(statearr_8597[(6)] = c__4831__auto___8599);

return statearr_8597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___8599,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
