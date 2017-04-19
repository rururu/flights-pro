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
var args16068 = [];
var len__10353__auto___16074 = arguments.length;
var i__10354__auto___16075 = (0);
while(true){
if((i__10354__auto___16075 < len__10353__auto___16074)){
args16068.push((arguments[i__10354__auto___16075]));

var G__16076 = (i__10354__auto___16075 + (1));
i__10354__auto___16075 = G__16076;
continue;
} else {
}
break;
}

var G__16070 = args16068.length;
switch (G__16070) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16068.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16071 = (function (f,blockable,meta16072){
this.f = f;
this.blockable = blockable;
this.meta16072 = meta16072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16073,meta16072__$1){
var self__ = this;
var _16073__$1 = this;
return (new cljs.core.async.t_cljs$core$async16071(self__.f,self__.blockable,meta16072__$1));
});

cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16073){
var self__ = this;
var _16073__$1 = this;
return self__.meta16072;
});

cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16072","meta16072",1574091300,null)], null);
});

cljs.core.async.t_cljs$core$async16071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16071";

cljs.core.async.t_cljs$core$async16071.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async16071");
});

cljs.core.async.__GT_t_cljs$core$async16071 = (function cljs$core$async$__GT_t_cljs$core$async16071(f__$1,blockable__$1,meta16072){
return (new cljs.core.async.t_cljs$core$async16071(f__$1,blockable__$1,meta16072));
});

}

return (new cljs.core.async.t_cljs$core$async16071(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args16080 = [];
var len__10353__auto___16083 = arguments.length;
var i__10354__auto___16084 = (0);
while(true){
if((i__10354__auto___16084 < len__10353__auto___16083)){
args16080.push((arguments[i__10354__auto___16084]));

var G__16085 = (i__10354__auto___16084 + (1));
i__10354__auto___16084 = G__16085;
continue;
} else {
}
break;
}

var G__16082 = args16080.length;
switch (G__16082) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16080.length)].join('')));

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
var args16087 = [];
var len__10353__auto___16090 = arguments.length;
var i__10354__auto___16091 = (0);
while(true){
if((i__10354__auto___16091 < len__10353__auto___16090)){
args16087.push((arguments[i__10354__auto___16091]));

var G__16092 = (i__10354__auto___16091 + (1));
i__10354__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var G__16089 = args16087.length;
switch (G__16089) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16087.length)].join('')));

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
var args16094 = [];
var len__10353__auto___16097 = arguments.length;
var i__10354__auto___16098 = (0);
while(true){
if((i__10354__auto___16098 < len__10353__auto___16097)){
args16094.push((arguments[i__10354__auto___16098]));

var G__16099 = (i__10354__auto___16098 + (1));
i__10354__auto___16098 = G__16099;
continue;
} else {
}
break;
}

var G__16096 = args16094.length;
switch (G__16096) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16094.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16101 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16101);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16101,ret){
return (function (){
return fn1.call(null,val_16101);
});})(val_16101,ret))
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
var args16102 = [];
var len__10353__auto___16105 = arguments.length;
var i__10354__auto___16106 = (0);
while(true){
if((i__10354__auto___16106 < len__10353__auto___16105)){
args16102.push((arguments[i__10354__auto___16106]));

var G__16107 = (i__10354__auto___16106 + (1));
i__10354__auto___16106 = G__16107;
continue;
} else {
}
break;
}

var G__16104 = args16102.length;
switch (G__16104) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16102.length)].join('')));

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
var n__10163__auto___16109 = n;
var x_16110 = (0);
while(true){
if((x_16110 < n__10163__auto___16109)){
(a[x_16110] = (0));

var G__16111 = (x_16110 + (1));
x_16110 = G__16111;
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

var G__16112 = (i + (1));
i = G__16112;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async16116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16116 = (function (flag,meta16117){
this.flag = flag;
this.meta16117 = meta16117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16118,meta16117__$1){
var self__ = this;
var _16118__$1 = this;
return (new cljs.core.async.t_cljs$core$async16116(self__.flag,meta16117__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16118){
var self__ = this;
var _16118__$1 = this;
return self__.meta16117;
});})(flag))
;

cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16116.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16117","meta16117",1261240413,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16116";

cljs.core.async.t_cljs$core$async16116.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async16116");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16116 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16116(flag__$1,meta16117){
return (new cljs.core.async.t_cljs$core$async16116(flag__$1,meta16117));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16116(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16122 = (function (flag,cb,meta16123){
this.flag = flag;
this.cb = cb;
this.meta16123 = meta16123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16124,meta16123__$1){
var self__ = this;
var _16124__$1 = this;
return (new cljs.core.async.t_cljs$core$async16122(self__.flag,self__.cb,meta16123__$1));
});

cljs.core.async.t_cljs$core$async16122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16124){
var self__ = this;
var _16124__$1 = this;
return self__.meta16123;
});

cljs.core.async.t_cljs$core$async16122.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16123","meta16123",-483165553,null)], null);
});

cljs.core.async.t_cljs$core$async16122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16122";

cljs.core.async.t_cljs$core$async16122.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async16122");
});

cljs.core.async.__GT_t_cljs$core$async16122 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16122(flag__$1,cb__$1,meta16123){
return (new cljs.core.async.t_cljs$core$async16122(flag__$1,cb__$1,meta16123));
});

}

return (new cljs.core.async.t_cljs$core$async16122(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16125_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16126_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16126_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9245__auto__ = wport;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16127 = (i + (1));
i = G__16127;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9245__auto__ = ret;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__9233__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9233__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9233__auto__;
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
var args__10360__auto__ = [];
var len__10353__auto___16133 = arguments.length;
var i__10354__auto___16134 = (0);
while(true){
if((i__10354__auto___16134 < len__10353__auto___16133)){
args__10360__auto__.push((arguments[i__10354__auto___16134]));

var G__16135 = (i__10354__auto___16134 + (1));
i__10354__auto___16134 = G__16135;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((1) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10361__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16130){
var map__16131 = p__16130;
var map__16131__$1 = ((((!((map__16131 == null)))?((((map__16131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16131):map__16131);
var opts = map__16131__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16128){
var G__16129 = cljs.core.first.call(null,seq16128);
var seq16128__$1 = cljs.core.next.call(null,seq16128);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16129,seq16128__$1);
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
var args16136 = [];
var len__10353__auto___16186 = arguments.length;
var i__10354__auto___16187 = (0);
while(true){
if((i__10354__auto___16187 < len__10353__auto___16186)){
args16136.push((arguments[i__10354__auto___16187]));

var G__16188 = (i__10354__auto___16187 + (1));
i__10354__auto___16187 = G__16188;
continue;
} else {
}
break;
}

var G__16138 = args16136.length;
switch (G__16138) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16136.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16023__auto___16190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___16190){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___16190){
return (function (state_16162){
var state_val_16163 = (state_16162[(1)]);
if((state_val_16163 === (7))){
var inst_16158 = (state_16162[(2)]);
var state_16162__$1 = state_16162;
var statearr_16164_16191 = state_16162__$1;
(statearr_16164_16191[(2)] = inst_16158);

(statearr_16164_16191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (1))){
var state_16162__$1 = state_16162;
var statearr_16165_16192 = state_16162__$1;
(statearr_16165_16192[(2)] = null);

(statearr_16165_16192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (4))){
var inst_16141 = (state_16162[(7)]);
var inst_16141__$1 = (state_16162[(2)]);
var inst_16142 = (inst_16141__$1 == null);
var state_16162__$1 = (function (){var statearr_16166 = state_16162;
(statearr_16166[(7)] = inst_16141__$1);

return statearr_16166;
})();
if(cljs.core.truth_(inst_16142)){
var statearr_16167_16193 = state_16162__$1;
(statearr_16167_16193[(1)] = (5));

} else {
var statearr_16168_16194 = state_16162__$1;
(statearr_16168_16194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (13))){
var state_16162__$1 = state_16162;
var statearr_16169_16195 = state_16162__$1;
(statearr_16169_16195[(2)] = null);

(statearr_16169_16195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (6))){
var inst_16141 = (state_16162[(7)]);
var state_16162__$1 = state_16162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16162__$1,(11),to,inst_16141);
} else {
if((state_val_16163 === (3))){
var inst_16160 = (state_16162[(2)]);
var state_16162__$1 = state_16162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16162__$1,inst_16160);
} else {
if((state_val_16163 === (12))){
var state_16162__$1 = state_16162;
var statearr_16170_16196 = state_16162__$1;
(statearr_16170_16196[(2)] = null);

(statearr_16170_16196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (2))){
var state_16162__$1 = state_16162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16162__$1,(4),from);
} else {
if((state_val_16163 === (11))){
var inst_16151 = (state_16162[(2)]);
var state_16162__$1 = state_16162;
if(cljs.core.truth_(inst_16151)){
var statearr_16171_16197 = state_16162__$1;
(statearr_16171_16197[(1)] = (12));

} else {
var statearr_16172_16198 = state_16162__$1;
(statearr_16172_16198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (9))){
var state_16162__$1 = state_16162;
var statearr_16173_16199 = state_16162__$1;
(statearr_16173_16199[(2)] = null);

(statearr_16173_16199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (5))){
var state_16162__$1 = state_16162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16174_16200 = state_16162__$1;
(statearr_16174_16200[(1)] = (8));

} else {
var statearr_16175_16201 = state_16162__$1;
(statearr_16175_16201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (14))){
var inst_16156 = (state_16162[(2)]);
var state_16162__$1 = state_16162;
var statearr_16176_16202 = state_16162__$1;
(statearr_16176_16202[(2)] = inst_16156);

(statearr_16176_16202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (10))){
var inst_16148 = (state_16162[(2)]);
var state_16162__$1 = state_16162;
var statearr_16177_16203 = state_16162__$1;
(statearr_16177_16203[(2)] = inst_16148);

(statearr_16177_16203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16163 === (8))){
var inst_16145 = cljs.core.async.close_BANG_.call(null,to);
var state_16162__$1 = state_16162;
var statearr_16178_16204 = state_16162__$1;
(statearr_16178_16204[(2)] = inst_16145);

(statearr_16178_16204[(1)] = (10));


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
});})(c__16023__auto___16190))
;
return ((function (switch__15911__auto__,c__16023__auto___16190){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_16182 = [null,null,null,null,null,null,null,null];
(statearr_16182[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_16182[(1)] = (1));

return statearr_16182;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_16162){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16183){if((e16183 instanceof Object)){
var ex__15915__auto__ = e16183;
var statearr_16184_16205 = state_16162;
(statearr_16184_16205[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16206 = state_16162;
state_16162 = G__16206;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_16162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_16162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___16190))
})();
var state__16025__auto__ = (function (){var statearr_16185 = f__16024__auto__.call(null);
(statearr_16185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___16190);

return statearr_16185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___16190))
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
return (function (p__16394){
var vec__16395 = p__16394;
var v = cljs.core.nth.call(null,vec__16395,(0),null);
var p = cljs.core.nth.call(null,vec__16395,(1),null);
var job = vec__16395;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16023__auto___16581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___16581,res,vec__16395,v,p,job,jobs,results){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___16581,res,vec__16395,v,p,job,jobs,results){
return (function (state_16402){
var state_val_16403 = (state_16402[(1)]);
if((state_val_16403 === (1))){
var state_16402__$1 = state_16402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16402__$1,(2),res,v);
} else {
if((state_val_16403 === (2))){
var inst_16399 = (state_16402[(2)]);
var inst_16400 = cljs.core.async.close_BANG_.call(null,res);
var state_16402__$1 = (function (){var statearr_16404 = state_16402;
(statearr_16404[(7)] = inst_16399);

return statearr_16404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16402__$1,inst_16400);
} else {
return null;
}
}
});})(c__16023__auto___16581,res,vec__16395,v,p,job,jobs,results))
;
return ((function (switch__15911__auto__,c__16023__auto___16581,res,vec__16395,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0 = (function (){
var statearr_16408 = [null,null,null,null,null,null,null,null];
(statearr_16408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__);

(statearr_16408[(1)] = (1));

return statearr_16408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1 = (function (state_16402){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16409){if((e16409 instanceof Object)){
var ex__15915__auto__ = e16409;
var statearr_16410_16582 = state_16402;
(statearr_16410_16582[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16583 = state_16402;
state_16402 = G__16583;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = function(state_16402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1.call(this,state_16402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___16581,res,vec__16395,v,p,job,jobs,results))
})();
var state__16025__auto__ = (function (){var statearr_16411 = f__16024__auto__.call(null);
(statearr_16411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___16581);

return statearr_16411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___16581,res,vec__16395,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16412){
var vec__16413 = p__16412;
var v = cljs.core.nth.call(null,vec__16413,(0),null);
var p = cljs.core.nth.call(null,vec__16413,(1),null);
var job = vec__16413;
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
var n__10163__auto___16584 = n;
var __16585 = (0);
while(true){
if((__16585 < n__10163__auto___16584)){
var G__16416_16586 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16416_16586) {
case "compute":
var c__16023__auto___16588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16585,c__16023__auto___16588,G__16416_16586,n__10163__auto___16584,jobs,results,process,async){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (__16585,c__16023__auto___16588,G__16416_16586,n__10163__auto___16584,jobs,results,process,async){
return (function (state_16429){
var state_val_16430 = (state_16429[(1)]);
if((state_val_16430 === (1))){
var state_16429__$1 = state_16429;
var statearr_16431_16589 = state_16429__$1;
(statearr_16431_16589[(2)] = null);

(statearr_16431_16589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (2))){
var state_16429__$1 = state_16429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16429__$1,(4),jobs);
} else {
if((state_val_16430 === (3))){
var inst_16427 = (state_16429[(2)]);
var state_16429__$1 = state_16429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16429__$1,inst_16427);
} else {
if((state_val_16430 === (4))){
var inst_16419 = (state_16429[(2)]);
var inst_16420 = process.call(null,inst_16419);
var state_16429__$1 = state_16429;
if(cljs.core.truth_(inst_16420)){
var statearr_16432_16590 = state_16429__$1;
(statearr_16432_16590[(1)] = (5));

} else {
var statearr_16433_16591 = state_16429__$1;
(statearr_16433_16591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (5))){
var state_16429__$1 = state_16429;
var statearr_16434_16592 = state_16429__$1;
(statearr_16434_16592[(2)] = null);

(statearr_16434_16592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (6))){
var state_16429__$1 = state_16429;
var statearr_16435_16593 = state_16429__$1;
(statearr_16435_16593[(2)] = null);

(statearr_16435_16593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (7))){
var inst_16425 = (state_16429[(2)]);
var state_16429__$1 = state_16429;
var statearr_16436_16594 = state_16429__$1;
(statearr_16436_16594[(2)] = inst_16425);

(statearr_16436_16594[(1)] = (3));


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
});})(__16585,c__16023__auto___16588,G__16416_16586,n__10163__auto___16584,jobs,results,process,async))
;
return ((function (__16585,switch__15911__auto__,c__16023__auto___16588,G__16416_16586,n__10163__auto___16584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0 = (function (){
var statearr_16440 = [null,null,null,null,null,null,null];
(statearr_16440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__);

(statearr_16440[(1)] = (1));

return statearr_16440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1 = (function (state_16429){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16441){if((e16441 instanceof Object)){
var ex__15915__auto__ = e16441;
var statearr_16442_16595 = state_16429;
(statearr_16442_16595[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16596 = state_16429;
state_16429 = G__16596;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = function(state_16429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1.call(this,state_16429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__;
})()
;})(__16585,switch__15911__auto__,c__16023__auto___16588,G__16416_16586,n__10163__auto___16584,jobs,results,process,async))
})();
var state__16025__auto__ = (function (){var statearr_16443 = f__16024__auto__.call(null);
(statearr_16443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___16588);

return statearr_16443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(__16585,c__16023__auto___16588,G__16416_16586,n__10163__auto___16584,jobs,results,process,async))
);


break;
case "async":
var c__16023__auto___16597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16585,c__16023__auto___16597,G__16416_16586,n__10163__auto___16584,jobs,results,process,async){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (__16585,c__16023__auto___16597,G__16416_16586,n__10163__auto___16584,jobs,results,process,async){
return (function (state_16456){
var state_val_16457 = (state_16456[(1)]);
if((state_val_16457 === (1))){
var state_16456__$1 = state_16456;
var statearr_16458_16598 = state_16456__$1;
(statearr_16458_16598[(2)] = null);

(statearr_16458_16598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (2))){
var state_16456__$1 = state_16456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16456__$1,(4),jobs);
} else {
if((state_val_16457 === (3))){
var inst_16454 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16456__$1,inst_16454);
} else {
if((state_val_16457 === (4))){
var inst_16446 = (state_16456[(2)]);
var inst_16447 = async.call(null,inst_16446);
var state_16456__$1 = state_16456;
if(cljs.core.truth_(inst_16447)){
var statearr_16459_16599 = state_16456__$1;
(statearr_16459_16599[(1)] = (5));

} else {
var statearr_16460_16600 = state_16456__$1;
(statearr_16460_16600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (5))){
var state_16456__$1 = state_16456;
var statearr_16461_16601 = state_16456__$1;
(statearr_16461_16601[(2)] = null);

(statearr_16461_16601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (6))){
var state_16456__$1 = state_16456;
var statearr_16462_16602 = state_16456__$1;
(statearr_16462_16602[(2)] = null);

(statearr_16462_16602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (7))){
var inst_16452 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
var statearr_16463_16603 = state_16456__$1;
(statearr_16463_16603[(2)] = inst_16452);

(statearr_16463_16603[(1)] = (3));


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
});})(__16585,c__16023__auto___16597,G__16416_16586,n__10163__auto___16584,jobs,results,process,async))
;
return ((function (__16585,switch__15911__auto__,c__16023__auto___16597,G__16416_16586,n__10163__auto___16584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0 = (function (){
var statearr_16467 = [null,null,null,null,null,null,null];
(statearr_16467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__);

(statearr_16467[(1)] = (1));

return statearr_16467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1 = (function (state_16456){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16468){if((e16468 instanceof Object)){
var ex__15915__auto__ = e16468;
var statearr_16469_16604 = state_16456;
(statearr_16469_16604[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16605 = state_16456;
state_16456 = G__16605;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = function(state_16456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1.call(this,state_16456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__;
})()
;})(__16585,switch__15911__auto__,c__16023__auto___16597,G__16416_16586,n__10163__auto___16584,jobs,results,process,async))
})();
var state__16025__auto__ = (function (){var statearr_16470 = f__16024__auto__.call(null);
(statearr_16470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___16597);

return statearr_16470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(__16585,c__16023__auto___16597,G__16416_16586,n__10163__auto___16584,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16606 = (__16585 + (1));
__16585 = G__16606;
continue;
} else {
}
break;
}

var c__16023__auto___16607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___16607,jobs,results,process,async){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___16607,jobs,results,process,async){
return (function (state_16492){
var state_val_16493 = (state_16492[(1)]);
if((state_val_16493 === (1))){
var state_16492__$1 = state_16492;
var statearr_16494_16608 = state_16492__$1;
(statearr_16494_16608[(2)] = null);

(statearr_16494_16608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16493 === (2))){
var state_16492__$1 = state_16492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16492__$1,(4),from);
} else {
if((state_val_16493 === (3))){
var inst_16490 = (state_16492[(2)]);
var state_16492__$1 = state_16492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16492__$1,inst_16490);
} else {
if((state_val_16493 === (4))){
var inst_16473 = (state_16492[(7)]);
var inst_16473__$1 = (state_16492[(2)]);
var inst_16474 = (inst_16473__$1 == null);
var state_16492__$1 = (function (){var statearr_16495 = state_16492;
(statearr_16495[(7)] = inst_16473__$1);

return statearr_16495;
})();
if(cljs.core.truth_(inst_16474)){
var statearr_16496_16609 = state_16492__$1;
(statearr_16496_16609[(1)] = (5));

} else {
var statearr_16497_16610 = state_16492__$1;
(statearr_16497_16610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16493 === (5))){
var inst_16476 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16492__$1 = state_16492;
var statearr_16498_16611 = state_16492__$1;
(statearr_16498_16611[(2)] = inst_16476);

(statearr_16498_16611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16493 === (6))){
var inst_16478 = (state_16492[(8)]);
var inst_16473 = (state_16492[(7)]);
var inst_16478__$1 = cljs.core.async.chan.call(null,(1));
var inst_16479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16480 = [inst_16473,inst_16478__$1];
var inst_16481 = (new cljs.core.PersistentVector(null,2,(5),inst_16479,inst_16480,null));
var state_16492__$1 = (function (){var statearr_16499 = state_16492;
(statearr_16499[(8)] = inst_16478__$1);

return statearr_16499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16492__$1,(8),jobs,inst_16481);
} else {
if((state_val_16493 === (7))){
var inst_16488 = (state_16492[(2)]);
var state_16492__$1 = state_16492;
var statearr_16500_16612 = state_16492__$1;
(statearr_16500_16612[(2)] = inst_16488);

(statearr_16500_16612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16493 === (8))){
var inst_16478 = (state_16492[(8)]);
var inst_16483 = (state_16492[(2)]);
var state_16492__$1 = (function (){var statearr_16501 = state_16492;
(statearr_16501[(9)] = inst_16483);

return statearr_16501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16492__$1,(9),results,inst_16478);
} else {
if((state_val_16493 === (9))){
var inst_16485 = (state_16492[(2)]);
var state_16492__$1 = (function (){var statearr_16502 = state_16492;
(statearr_16502[(10)] = inst_16485);

return statearr_16502;
})();
var statearr_16503_16613 = state_16492__$1;
(statearr_16503_16613[(2)] = null);

(statearr_16503_16613[(1)] = (2));


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
});})(c__16023__auto___16607,jobs,results,process,async))
;
return ((function (switch__15911__auto__,c__16023__auto___16607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0 = (function (){
var statearr_16507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__);

(statearr_16507[(1)] = (1));

return statearr_16507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1 = (function (state_16492){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16508){if((e16508 instanceof Object)){
var ex__15915__auto__ = e16508;
var statearr_16509_16614 = state_16492;
(statearr_16509_16614[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16615 = state_16492;
state_16492 = G__16615;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = function(state_16492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1.call(this,state_16492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___16607,jobs,results,process,async))
})();
var state__16025__auto__ = (function (){var statearr_16510 = f__16024__auto__.call(null);
(statearr_16510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___16607);

return statearr_16510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___16607,jobs,results,process,async))
);


var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__,jobs,results,process,async){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__,jobs,results,process,async){
return (function (state_16548){
var state_val_16549 = (state_16548[(1)]);
if((state_val_16549 === (7))){
var inst_16544 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
var statearr_16550_16616 = state_16548__$1;
(statearr_16550_16616[(2)] = inst_16544);

(statearr_16550_16616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (20))){
var state_16548__$1 = state_16548;
var statearr_16551_16617 = state_16548__$1;
(statearr_16551_16617[(2)] = null);

(statearr_16551_16617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (1))){
var state_16548__$1 = state_16548;
var statearr_16552_16618 = state_16548__$1;
(statearr_16552_16618[(2)] = null);

(statearr_16552_16618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (4))){
var inst_16513 = (state_16548[(7)]);
var inst_16513__$1 = (state_16548[(2)]);
var inst_16514 = (inst_16513__$1 == null);
var state_16548__$1 = (function (){var statearr_16553 = state_16548;
(statearr_16553[(7)] = inst_16513__$1);

return statearr_16553;
})();
if(cljs.core.truth_(inst_16514)){
var statearr_16554_16619 = state_16548__$1;
(statearr_16554_16619[(1)] = (5));

} else {
var statearr_16555_16620 = state_16548__$1;
(statearr_16555_16620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (15))){
var inst_16526 = (state_16548[(8)]);
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16548__$1,(18),to,inst_16526);
} else {
if((state_val_16549 === (21))){
var inst_16539 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
var statearr_16556_16621 = state_16548__$1;
(statearr_16556_16621[(2)] = inst_16539);

(statearr_16556_16621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (13))){
var inst_16541 = (state_16548[(2)]);
var state_16548__$1 = (function (){var statearr_16557 = state_16548;
(statearr_16557[(9)] = inst_16541);

return statearr_16557;
})();
var statearr_16558_16622 = state_16548__$1;
(statearr_16558_16622[(2)] = null);

(statearr_16558_16622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (6))){
var inst_16513 = (state_16548[(7)]);
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16548__$1,(11),inst_16513);
} else {
if((state_val_16549 === (17))){
var inst_16534 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
if(cljs.core.truth_(inst_16534)){
var statearr_16559_16623 = state_16548__$1;
(statearr_16559_16623[(1)] = (19));

} else {
var statearr_16560_16624 = state_16548__$1;
(statearr_16560_16624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (3))){
var inst_16546 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16548__$1,inst_16546);
} else {
if((state_val_16549 === (12))){
var inst_16523 = (state_16548[(10)]);
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16548__$1,(14),inst_16523);
} else {
if((state_val_16549 === (2))){
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16548__$1,(4),results);
} else {
if((state_val_16549 === (19))){
var state_16548__$1 = state_16548;
var statearr_16561_16625 = state_16548__$1;
(statearr_16561_16625[(2)] = null);

(statearr_16561_16625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (11))){
var inst_16523 = (state_16548[(2)]);
var state_16548__$1 = (function (){var statearr_16562 = state_16548;
(statearr_16562[(10)] = inst_16523);

return statearr_16562;
})();
var statearr_16563_16626 = state_16548__$1;
(statearr_16563_16626[(2)] = null);

(statearr_16563_16626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (9))){
var state_16548__$1 = state_16548;
var statearr_16564_16627 = state_16548__$1;
(statearr_16564_16627[(2)] = null);

(statearr_16564_16627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (5))){
var state_16548__$1 = state_16548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16565_16628 = state_16548__$1;
(statearr_16565_16628[(1)] = (8));

} else {
var statearr_16566_16629 = state_16548__$1;
(statearr_16566_16629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (14))){
var inst_16528 = (state_16548[(11)]);
var inst_16526 = (state_16548[(8)]);
var inst_16526__$1 = (state_16548[(2)]);
var inst_16527 = (inst_16526__$1 == null);
var inst_16528__$1 = cljs.core.not.call(null,inst_16527);
var state_16548__$1 = (function (){var statearr_16567 = state_16548;
(statearr_16567[(11)] = inst_16528__$1);

(statearr_16567[(8)] = inst_16526__$1);

return statearr_16567;
})();
if(inst_16528__$1){
var statearr_16568_16630 = state_16548__$1;
(statearr_16568_16630[(1)] = (15));

} else {
var statearr_16569_16631 = state_16548__$1;
(statearr_16569_16631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (16))){
var inst_16528 = (state_16548[(11)]);
var state_16548__$1 = state_16548;
var statearr_16570_16632 = state_16548__$1;
(statearr_16570_16632[(2)] = inst_16528);

(statearr_16570_16632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (10))){
var inst_16520 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
var statearr_16571_16633 = state_16548__$1;
(statearr_16571_16633[(2)] = inst_16520);

(statearr_16571_16633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (18))){
var inst_16531 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
var statearr_16572_16634 = state_16548__$1;
(statearr_16572_16634[(2)] = inst_16531);

(statearr_16572_16634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16549 === (8))){
var inst_16517 = cljs.core.async.close_BANG_.call(null,to);
var state_16548__$1 = state_16548;
var statearr_16573_16635 = state_16548__$1;
(statearr_16573_16635[(2)] = inst_16517);

(statearr_16573_16635[(1)] = (10));


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
});})(c__16023__auto__,jobs,results,process,async))
;
return ((function (switch__15911__auto__,c__16023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0 = (function (){
var statearr_16577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__);

(statearr_16577[(1)] = (1));

return statearr_16577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1 = (function (state_16548){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16578){if((e16578 instanceof Object)){
var ex__15915__auto__ = e16578;
var statearr_16579_16636 = state_16548;
(statearr_16579_16636[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16637 = state_16548;
state_16548 = G__16637;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__ = function(state_16548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1.call(this,state_16548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__,jobs,results,process,async))
})();
var state__16025__auto__ = (function (){var statearr_16580 = f__16024__auto__.call(null);
(statearr_16580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_16580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__,jobs,results,process,async))
);

return c__16023__auto__;
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
var args16638 = [];
var len__10353__auto___16641 = arguments.length;
var i__10354__auto___16642 = (0);
while(true){
if((i__10354__auto___16642 < len__10353__auto___16641)){
args16638.push((arguments[i__10354__auto___16642]));

var G__16643 = (i__10354__auto___16642 + (1));
i__10354__auto___16642 = G__16643;
continue;
} else {
}
break;
}

var G__16640 = args16638.length;
switch (G__16640) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16638.length)].join('')));

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
var args16645 = [];
var len__10353__auto___16648 = arguments.length;
var i__10354__auto___16649 = (0);
while(true){
if((i__10354__auto___16649 < len__10353__auto___16648)){
args16645.push((arguments[i__10354__auto___16649]));

var G__16650 = (i__10354__auto___16649 + (1));
i__10354__auto___16649 = G__16650;
continue;
} else {
}
break;
}

var G__16647 = args16645.length;
switch (G__16647) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16645.length)].join('')));

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
var args16652 = [];
var len__10353__auto___16705 = arguments.length;
var i__10354__auto___16706 = (0);
while(true){
if((i__10354__auto___16706 < len__10353__auto___16705)){
args16652.push((arguments[i__10354__auto___16706]));

var G__16707 = (i__10354__auto___16706 + (1));
i__10354__auto___16706 = G__16707;
continue;
} else {
}
break;
}

var G__16654 = args16652.length;
switch (G__16654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16652.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16023__auto___16709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___16709,tc,fc){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___16709,tc,fc){
return (function (state_16680){
var state_val_16681 = (state_16680[(1)]);
if((state_val_16681 === (7))){
var inst_16676 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
var statearr_16682_16710 = state_16680__$1;
(statearr_16682_16710[(2)] = inst_16676);

(statearr_16682_16710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (1))){
var state_16680__$1 = state_16680;
var statearr_16683_16711 = state_16680__$1;
(statearr_16683_16711[(2)] = null);

(statearr_16683_16711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (4))){
var inst_16657 = (state_16680[(7)]);
var inst_16657__$1 = (state_16680[(2)]);
var inst_16658 = (inst_16657__$1 == null);
var state_16680__$1 = (function (){var statearr_16684 = state_16680;
(statearr_16684[(7)] = inst_16657__$1);

return statearr_16684;
})();
if(cljs.core.truth_(inst_16658)){
var statearr_16685_16712 = state_16680__$1;
(statearr_16685_16712[(1)] = (5));

} else {
var statearr_16686_16713 = state_16680__$1;
(statearr_16686_16713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (13))){
var state_16680__$1 = state_16680;
var statearr_16687_16714 = state_16680__$1;
(statearr_16687_16714[(2)] = null);

(statearr_16687_16714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (6))){
var inst_16657 = (state_16680[(7)]);
var inst_16663 = p.call(null,inst_16657);
var state_16680__$1 = state_16680;
if(cljs.core.truth_(inst_16663)){
var statearr_16688_16715 = state_16680__$1;
(statearr_16688_16715[(1)] = (9));

} else {
var statearr_16689_16716 = state_16680__$1;
(statearr_16689_16716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (3))){
var inst_16678 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16680__$1,inst_16678);
} else {
if((state_val_16681 === (12))){
var state_16680__$1 = state_16680;
var statearr_16690_16717 = state_16680__$1;
(statearr_16690_16717[(2)] = null);

(statearr_16690_16717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (2))){
var state_16680__$1 = state_16680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16680__$1,(4),ch);
} else {
if((state_val_16681 === (11))){
var inst_16657 = (state_16680[(7)]);
var inst_16667 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16680__$1,(8),inst_16667,inst_16657);
} else {
if((state_val_16681 === (9))){
var state_16680__$1 = state_16680;
var statearr_16691_16718 = state_16680__$1;
(statearr_16691_16718[(2)] = tc);

(statearr_16691_16718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (5))){
var inst_16660 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16661 = cljs.core.async.close_BANG_.call(null,fc);
var state_16680__$1 = (function (){var statearr_16692 = state_16680;
(statearr_16692[(8)] = inst_16660);

return statearr_16692;
})();
var statearr_16693_16719 = state_16680__$1;
(statearr_16693_16719[(2)] = inst_16661);

(statearr_16693_16719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (14))){
var inst_16674 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
var statearr_16694_16720 = state_16680__$1;
(statearr_16694_16720[(2)] = inst_16674);

(statearr_16694_16720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (10))){
var state_16680__$1 = state_16680;
var statearr_16695_16721 = state_16680__$1;
(statearr_16695_16721[(2)] = fc);

(statearr_16695_16721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (8))){
var inst_16669 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
if(cljs.core.truth_(inst_16669)){
var statearr_16696_16722 = state_16680__$1;
(statearr_16696_16722[(1)] = (12));

} else {
var statearr_16697_16723 = state_16680__$1;
(statearr_16697_16723[(1)] = (13));

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
});})(c__16023__auto___16709,tc,fc))
;
return ((function (switch__15911__auto__,c__16023__auto___16709,tc,fc){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_16701 = [null,null,null,null,null,null,null,null,null];
(statearr_16701[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_16701[(1)] = (1));

return statearr_16701;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_16680){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16702){if((e16702 instanceof Object)){
var ex__15915__auto__ = e16702;
var statearr_16703_16724 = state_16680;
(statearr_16703_16724[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16725 = state_16680;
state_16680 = G__16725;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_16680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_16680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___16709,tc,fc))
})();
var state__16025__auto__ = (function (){var statearr_16704 = f__16024__auto__.call(null);
(statearr_16704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___16709);

return statearr_16704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___16709,tc,fc))
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
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__){
return (function (state_16789){
var state_val_16790 = (state_16789[(1)]);
if((state_val_16790 === (7))){
var inst_16785 = (state_16789[(2)]);
var state_16789__$1 = state_16789;
var statearr_16791_16812 = state_16789__$1;
(statearr_16791_16812[(2)] = inst_16785);

(statearr_16791_16812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (1))){
var inst_16769 = init;
var state_16789__$1 = (function (){var statearr_16792 = state_16789;
(statearr_16792[(7)] = inst_16769);

return statearr_16792;
})();
var statearr_16793_16813 = state_16789__$1;
(statearr_16793_16813[(2)] = null);

(statearr_16793_16813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (4))){
var inst_16772 = (state_16789[(8)]);
var inst_16772__$1 = (state_16789[(2)]);
var inst_16773 = (inst_16772__$1 == null);
var state_16789__$1 = (function (){var statearr_16794 = state_16789;
(statearr_16794[(8)] = inst_16772__$1);

return statearr_16794;
})();
if(cljs.core.truth_(inst_16773)){
var statearr_16795_16814 = state_16789__$1;
(statearr_16795_16814[(1)] = (5));

} else {
var statearr_16796_16815 = state_16789__$1;
(statearr_16796_16815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (6))){
var inst_16772 = (state_16789[(8)]);
var inst_16769 = (state_16789[(7)]);
var inst_16776 = (state_16789[(9)]);
var inst_16776__$1 = f.call(null,inst_16769,inst_16772);
var inst_16777 = cljs.core.reduced_QMARK_.call(null,inst_16776__$1);
var state_16789__$1 = (function (){var statearr_16797 = state_16789;
(statearr_16797[(9)] = inst_16776__$1);

return statearr_16797;
})();
if(inst_16777){
var statearr_16798_16816 = state_16789__$1;
(statearr_16798_16816[(1)] = (8));

} else {
var statearr_16799_16817 = state_16789__$1;
(statearr_16799_16817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (3))){
var inst_16787 = (state_16789[(2)]);
var state_16789__$1 = state_16789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16789__$1,inst_16787);
} else {
if((state_val_16790 === (2))){
var state_16789__$1 = state_16789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16789__$1,(4),ch);
} else {
if((state_val_16790 === (9))){
var inst_16776 = (state_16789[(9)]);
var inst_16769 = inst_16776;
var state_16789__$1 = (function (){var statearr_16800 = state_16789;
(statearr_16800[(7)] = inst_16769);

return statearr_16800;
})();
var statearr_16801_16818 = state_16789__$1;
(statearr_16801_16818[(2)] = null);

(statearr_16801_16818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (5))){
var inst_16769 = (state_16789[(7)]);
var state_16789__$1 = state_16789;
var statearr_16802_16819 = state_16789__$1;
(statearr_16802_16819[(2)] = inst_16769);

(statearr_16802_16819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (10))){
var inst_16783 = (state_16789[(2)]);
var state_16789__$1 = state_16789;
var statearr_16803_16820 = state_16789__$1;
(statearr_16803_16820[(2)] = inst_16783);

(statearr_16803_16820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16790 === (8))){
var inst_16776 = (state_16789[(9)]);
var inst_16779 = cljs.core.deref.call(null,inst_16776);
var state_16789__$1 = state_16789;
var statearr_16804_16821 = state_16789__$1;
(statearr_16804_16821[(2)] = inst_16779);

(statearr_16804_16821[(1)] = (10));


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
});})(c__16023__auto__))
;
return ((function (switch__15911__auto__,c__16023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15912__auto____0 = (function (){
var statearr_16808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16808[(0)] = cljs$core$async$reduce_$_state_machine__15912__auto__);

(statearr_16808[(1)] = (1));

return statearr_16808;
});
var cljs$core$async$reduce_$_state_machine__15912__auto____1 = (function (state_16789){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16809){if((e16809 instanceof Object)){
var ex__15915__auto__ = e16809;
var statearr_16810_16822 = state_16789;
(statearr_16810_16822[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16823 = state_16789;
state_16789 = G__16823;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15912__auto__ = function(state_16789){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15912__auto____1.call(this,state_16789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15912__auto____0;
cljs$core$async$reduce_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15912__auto____1;
return cljs$core$async$reduce_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__))
})();
var state__16025__auto__ = (function (){var statearr_16811 = f__16024__auto__.call(null);
(statearr_16811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_16811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__))
);

return c__16023__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__,f__$1){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__,f__$1){
return (function (state_16843){
var state_val_16844 = (state_16843[(1)]);
if((state_val_16844 === (1))){
var inst_16838 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16843__$1 = state_16843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16843__$1,(2),inst_16838);
} else {
if((state_val_16844 === (2))){
var inst_16840 = (state_16843[(2)]);
var inst_16841 = f__$1.call(null,inst_16840);
var state_16843__$1 = state_16843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16843__$1,inst_16841);
} else {
return null;
}
}
});})(c__16023__auto__,f__$1))
;
return ((function (switch__15911__auto__,c__16023__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15912__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15912__auto____0 = (function (){
var statearr_16848 = [null,null,null,null,null,null,null];
(statearr_16848[(0)] = cljs$core$async$transduce_$_state_machine__15912__auto__);

(statearr_16848[(1)] = (1));

return statearr_16848;
});
var cljs$core$async$transduce_$_state_machine__15912__auto____1 = (function (state_16843){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16849){if((e16849 instanceof Object)){
var ex__15915__auto__ = e16849;
var statearr_16850_16852 = state_16843;
(statearr_16850_16852[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16853 = state_16843;
state_16843 = G__16853;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15912__auto__ = function(state_16843){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15912__auto____1.call(this,state_16843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15912__auto____0;
cljs$core$async$transduce_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15912__auto____1;
return cljs$core$async$transduce_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__,f__$1))
})();
var state__16025__auto__ = (function (){var statearr_16851 = f__16024__auto__.call(null);
(statearr_16851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_16851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__,f__$1))
);

return c__16023__auto__;
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
var args16854 = [];
var len__10353__auto___16906 = arguments.length;
var i__10354__auto___16907 = (0);
while(true){
if((i__10354__auto___16907 < len__10353__auto___16906)){
args16854.push((arguments[i__10354__auto___16907]));

var G__16908 = (i__10354__auto___16907 + (1));
i__10354__auto___16907 = G__16908;
continue;
} else {
}
break;
}

var G__16856 = args16854.length;
switch (G__16856) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16854.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__){
return (function (state_16881){
var state_val_16882 = (state_16881[(1)]);
if((state_val_16882 === (7))){
var inst_16863 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16883_16910 = state_16881__$1;
(statearr_16883_16910[(2)] = inst_16863);

(statearr_16883_16910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (1))){
var inst_16857 = cljs.core.seq.call(null,coll);
var inst_16858 = inst_16857;
var state_16881__$1 = (function (){var statearr_16884 = state_16881;
(statearr_16884[(7)] = inst_16858);

return statearr_16884;
})();
var statearr_16885_16911 = state_16881__$1;
(statearr_16885_16911[(2)] = null);

(statearr_16885_16911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (4))){
var inst_16858 = (state_16881[(7)]);
var inst_16861 = cljs.core.first.call(null,inst_16858);
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16881__$1,(7),ch,inst_16861);
} else {
if((state_val_16882 === (13))){
var inst_16875 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16886_16912 = state_16881__$1;
(statearr_16886_16912[(2)] = inst_16875);

(statearr_16886_16912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (6))){
var inst_16866 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
if(cljs.core.truth_(inst_16866)){
var statearr_16887_16913 = state_16881__$1;
(statearr_16887_16913[(1)] = (8));

} else {
var statearr_16888_16914 = state_16881__$1;
(statearr_16888_16914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (3))){
var inst_16879 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16881__$1,inst_16879);
} else {
if((state_val_16882 === (12))){
var state_16881__$1 = state_16881;
var statearr_16889_16915 = state_16881__$1;
(statearr_16889_16915[(2)] = null);

(statearr_16889_16915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (2))){
var inst_16858 = (state_16881[(7)]);
var state_16881__$1 = state_16881;
if(cljs.core.truth_(inst_16858)){
var statearr_16890_16916 = state_16881__$1;
(statearr_16890_16916[(1)] = (4));

} else {
var statearr_16891_16917 = state_16881__$1;
(statearr_16891_16917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (11))){
var inst_16872 = cljs.core.async.close_BANG_.call(null,ch);
var state_16881__$1 = state_16881;
var statearr_16892_16918 = state_16881__$1;
(statearr_16892_16918[(2)] = inst_16872);

(statearr_16892_16918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (9))){
var state_16881__$1 = state_16881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16893_16919 = state_16881__$1;
(statearr_16893_16919[(1)] = (11));

} else {
var statearr_16894_16920 = state_16881__$1;
(statearr_16894_16920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (5))){
var inst_16858 = (state_16881[(7)]);
var state_16881__$1 = state_16881;
var statearr_16895_16921 = state_16881__$1;
(statearr_16895_16921[(2)] = inst_16858);

(statearr_16895_16921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (10))){
var inst_16877 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16896_16922 = state_16881__$1;
(statearr_16896_16922[(2)] = inst_16877);

(statearr_16896_16922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (8))){
var inst_16858 = (state_16881[(7)]);
var inst_16868 = cljs.core.next.call(null,inst_16858);
var inst_16858__$1 = inst_16868;
var state_16881__$1 = (function (){var statearr_16897 = state_16881;
(statearr_16897[(7)] = inst_16858__$1);

return statearr_16897;
})();
var statearr_16898_16923 = state_16881__$1;
(statearr_16898_16923[(2)] = null);

(statearr_16898_16923[(1)] = (2));


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
});})(c__16023__auto__))
;
return ((function (switch__15911__auto__,c__16023__auto__){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_16902 = [null,null,null,null,null,null,null,null];
(statearr_16902[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_16902[(1)] = (1));

return statearr_16902;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_16881){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_16881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e16903){if((e16903 instanceof Object)){
var ex__15915__auto__ = e16903;
var statearr_16904_16924 = state_16881;
(statearr_16904_16924[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16925 = state_16881;
state_16881 = G__16925;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_16881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_16881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__))
})();
var state__16025__auto__ = (function (){var statearr_16905 = f__16024__auto__.call(null);
(statearr_16905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_16905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__))
);

return c__16023__auto__;
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
var x__9908__auto__ = (((_ == null))?null:_);
var m__9909__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,_);
} else {
var m__9909__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,_);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9909__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m,ch);
} else {
var m__9909__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m,ch);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m);
} else {
var m__9909__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async17151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17151 = (function (ch,cs,meta17152){
this.ch = ch;
this.cs = cs;
this.meta17152 = meta17152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17153,meta17152__$1){
var self__ = this;
var _17153__$1 = this;
return (new cljs.core.async.t_cljs$core$async17151(self__.ch,self__.cs,meta17152__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17153){
var self__ = this;
var _17153__$1 = this;
return self__.meta17152;
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17152","meta17152",1412503215,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17151";

cljs.core.async.t_cljs$core$async17151.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async17151");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17151 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17151(ch__$1,cs__$1,meta17152){
return (new cljs.core.async.t_cljs$core$async17151(ch__$1,cs__$1,meta17152));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17151(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16023__auto___17376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___17376,cs,m,dchan,dctr,done){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___17376,cs,m,dchan,dctr,done){
return (function (state_17288){
var state_val_17289 = (state_17288[(1)]);
if((state_val_17289 === (7))){
var inst_17284 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17290_17377 = state_17288__$1;
(statearr_17290_17377[(2)] = inst_17284);

(statearr_17290_17377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (20))){
var inst_17187 = (state_17288[(7)]);
var inst_17199 = cljs.core.first.call(null,inst_17187);
var inst_17200 = cljs.core.nth.call(null,inst_17199,(0),null);
var inst_17201 = cljs.core.nth.call(null,inst_17199,(1),null);
var state_17288__$1 = (function (){var statearr_17291 = state_17288;
(statearr_17291[(8)] = inst_17200);

return statearr_17291;
})();
if(cljs.core.truth_(inst_17201)){
var statearr_17292_17378 = state_17288__$1;
(statearr_17292_17378[(1)] = (22));

} else {
var statearr_17293_17379 = state_17288__$1;
(statearr_17293_17379[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (27))){
var inst_17231 = (state_17288[(9)]);
var inst_17156 = (state_17288[(10)]);
var inst_17229 = (state_17288[(11)]);
var inst_17236 = (state_17288[(12)]);
var inst_17236__$1 = cljs.core._nth.call(null,inst_17229,inst_17231);
var inst_17237 = cljs.core.async.put_BANG_.call(null,inst_17236__$1,inst_17156,done);
var state_17288__$1 = (function (){var statearr_17294 = state_17288;
(statearr_17294[(12)] = inst_17236__$1);

return statearr_17294;
})();
if(cljs.core.truth_(inst_17237)){
var statearr_17295_17380 = state_17288__$1;
(statearr_17295_17380[(1)] = (30));

} else {
var statearr_17296_17381 = state_17288__$1;
(statearr_17296_17381[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (1))){
var state_17288__$1 = state_17288;
var statearr_17297_17382 = state_17288__$1;
(statearr_17297_17382[(2)] = null);

(statearr_17297_17382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (24))){
var inst_17187 = (state_17288[(7)]);
var inst_17206 = (state_17288[(2)]);
var inst_17207 = cljs.core.next.call(null,inst_17187);
var inst_17165 = inst_17207;
var inst_17166 = null;
var inst_17167 = (0);
var inst_17168 = (0);
var state_17288__$1 = (function (){var statearr_17298 = state_17288;
(statearr_17298[(13)] = inst_17165);

(statearr_17298[(14)] = inst_17206);

(statearr_17298[(15)] = inst_17166);

(statearr_17298[(16)] = inst_17167);

(statearr_17298[(17)] = inst_17168);

return statearr_17298;
})();
var statearr_17299_17383 = state_17288__$1;
(statearr_17299_17383[(2)] = null);

(statearr_17299_17383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (39))){
var state_17288__$1 = state_17288;
var statearr_17303_17384 = state_17288__$1;
(statearr_17303_17384[(2)] = null);

(statearr_17303_17384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (4))){
var inst_17156 = (state_17288[(10)]);
var inst_17156__$1 = (state_17288[(2)]);
var inst_17157 = (inst_17156__$1 == null);
var state_17288__$1 = (function (){var statearr_17304 = state_17288;
(statearr_17304[(10)] = inst_17156__$1);

return statearr_17304;
})();
if(cljs.core.truth_(inst_17157)){
var statearr_17305_17385 = state_17288__$1;
(statearr_17305_17385[(1)] = (5));

} else {
var statearr_17306_17386 = state_17288__$1;
(statearr_17306_17386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (15))){
var inst_17165 = (state_17288[(13)]);
var inst_17166 = (state_17288[(15)]);
var inst_17167 = (state_17288[(16)]);
var inst_17168 = (state_17288[(17)]);
var inst_17183 = (state_17288[(2)]);
var inst_17184 = (inst_17168 + (1));
var tmp17300 = inst_17165;
var tmp17301 = inst_17166;
var tmp17302 = inst_17167;
var inst_17165__$1 = tmp17300;
var inst_17166__$1 = tmp17301;
var inst_17167__$1 = tmp17302;
var inst_17168__$1 = inst_17184;
var state_17288__$1 = (function (){var statearr_17307 = state_17288;
(statearr_17307[(13)] = inst_17165__$1);

(statearr_17307[(18)] = inst_17183);

(statearr_17307[(15)] = inst_17166__$1);

(statearr_17307[(16)] = inst_17167__$1);

(statearr_17307[(17)] = inst_17168__$1);

return statearr_17307;
})();
var statearr_17308_17387 = state_17288__$1;
(statearr_17308_17387[(2)] = null);

(statearr_17308_17387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (21))){
var inst_17210 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17312_17388 = state_17288__$1;
(statearr_17312_17388[(2)] = inst_17210);

(statearr_17312_17388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (31))){
var inst_17236 = (state_17288[(12)]);
var inst_17240 = done.call(null,null);
var inst_17241 = cljs.core.async.untap_STAR_.call(null,m,inst_17236);
var state_17288__$1 = (function (){var statearr_17313 = state_17288;
(statearr_17313[(19)] = inst_17240);

return statearr_17313;
})();
var statearr_17314_17389 = state_17288__$1;
(statearr_17314_17389[(2)] = inst_17241);

(statearr_17314_17389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (32))){
var inst_17231 = (state_17288[(9)]);
var inst_17229 = (state_17288[(11)]);
var inst_17228 = (state_17288[(20)]);
var inst_17230 = (state_17288[(21)]);
var inst_17243 = (state_17288[(2)]);
var inst_17244 = (inst_17231 + (1));
var tmp17309 = inst_17229;
var tmp17310 = inst_17228;
var tmp17311 = inst_17230;
var inst_17228__$1 = tmp17310;
var inst_17229__$1 = tmp17309;
var inst_17230__$1 = tmp17311;
var inst_17231__$1 = inst_17244;
var state_17288__$1 = (function (){var statearr_17315 = state_17288;
(statearr_17315[(9)] = inst_17231__$1);

(statearr_17315[(11)] = inst_17229__$1);

(statearr_17315[(22)] = inst_17243);

(statearr_17315[(20)] = inst_17228__$1);

(statearr_17315[(21)] = inst_17230__$1);

return statearr_17315;
})();
var statearr_17316_17390 = state_17288__$1;
(statearr_17316_17390[(2)] = null);

(statearr_17316_17390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (40))){
var inst_17256 = (state_17288[(23)]);
var inst_17260 = done.call(null,null);
var inst_17261 = cljs.core.async.untap_STAR_.call(null,m,inst_17256);
var state_17288__$1 = (function (){var statearr_17317 = state_17288;
(statearr_17317[(24)] = inst_17260);

return statearr_17317;
})();
var statearr_17318_17391 = state_17288__$1;
(statearr_17318_17391[(2)] = inst_17261);

(statearr_17318_17391[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (33))){
var inst_17247 = (state_17288[(25)]);
var inst_17249 = cljs.core.chunked_seq_QMARK_.call(null,inst_17247);
var state_17288__$1 = state_17288;
if(inst_17249){
var statearr_17319_17392 = state_17288__$1;
(statearr_17319_17392[(1)] = (36));

} else {
var statearr_17320_17393 = state_17288__$1;
(statearr_17320_17393[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (13))){
var inst_17177 = (state_17288[(26)]);
var inst_17180 = cljs.core.async.close_BANG_.call(null,inst_17177);
var state_17288__$1 = state_17288;
var statearr_17321_17394 = state_17288__$1;
(statearr_17321_17394[(2)] = inst_17180);

(statearr_17321_17394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (22))){
var inst_17200 = (state_17288[(8)]);
var inst_17203 = cljs.core.async.close_BANG_.call(null,inst_17200);
var state_17288__$1 = state_17288;
var statearr_17322_17395 = state_17288__$1;
(statearr_17322_17395[(2)] = inst_17203);

(statearr_17322_17395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (36))){
var inst_17247 = (state_17288[(25)]);
var inst_17251 = cljs.core.chunk_first.call(null,inst_17247);
var inst_17252 = cljs.core.chunk_rest.call(null,inst_17247);
var inst_17253 = cljs.core.count.call(null,inst_17251);
var inst_17228 = inst_17252;
var inst_17229 = inst_17251;
var inst_17230 = inst_17253;
var inst_17231 = (0);
var state_17288__$1 = (function (){var statearr_17323 = state_17288;
(statearr_17323[(9)] = inst_17231);

(statearr_17323[(11)] = inst_17229);

(statearr_17323[(20)] = inst_17228);

(statearr_17323[(21)] = inst_17230);

return statearr_17323;
})();
var statearr_17324_17396 = state_17288__$1;
(statearr_17324_17396[(2)] = null);

(statearr_17324_17396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (41))){
var inst_17247 = (state_17288[(25)]);
var inst_17263 = (state_17288[(2)]);
var inst_17264 = cljs.core.next.call(null,inst_17247);
var inst_17228 = inst_17264;
var inst_17229 = null;
var inst_17230 = (0);
var inst_17231 = (0);
var state_17288__$1 = (function (){var statearr_17325 = state_17288;
(statearr_17325[(9)] = inst_17231);

(statearr_17325[(11)] = inst_17229);

(statearr_17325[(27)] = inst_17263);

(statearr_17325[(20)] = inst_17228);

(statearr_17325[(21)] = inst_17230);

return statearr_17325;
})();
var statearr_17326_17397 = state_17288__$1;
(statearr_17326_17397[(2)] = null);

(statearr_17326_17397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (43))){
var state_17288__$1 = state_17288;
var statearr_17327_17398 = state_17288__$1;
(statearr_17327_17398[(2)] = null);

(statearr_17327_17398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (29))){
var inst_17272 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17328_17399 = state_17288__$1;
(statearr_17328_17399[(2)] = inst_17272);

(statearr_17328_17399[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (44))){
var inst_17281 = (state_17288[(2)]);
var state_17288__$1 = (function (){var statearr_17329 = state_17288;
(statearr_17329[(28)] = inst_17281);

return statearr_17329;
})();
var statearr_17330_17400 = state_17288__$1;
(statearr_17330_17400[(2)] = null);

(statearr_17330_17400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (6))){
var inst_17220 = (state_17288[(29)]);
var inst_17219 = cljs.core.deref.call(null,cs);
var inst_17220__$1 = cljs.core.keys.call(null,inst_17219);
var inst_17221 = cljs.core.count.call(null,inst_17220__$1);
var inst_17222 = cljs.core.reset_BANG_.call(null,dctr,inst_17221);
var inst_17227 = cljs.core.seq.call(null,inst_17220__$1);
var inst_17228 = inst_17227;
var inst_17229 = null;
var inst_17230 = (0);
var inst_17231 = (0);
var state_17288__$1 = (function (){var statearr_17331 = state_17288;
(statearr_17331[(9)] = inst_17231);

(statearr_17331[(11)] = inst_17229);

(statearr_17331[(30)] = inst_17222);

(statearr_17331[(20)] = inst_17228);

(statearr_17331[(29)] = inst_17220__$1);

(statearr_17331[(21)] = inst_17230);

return statearr_17331;
})();
var statearr_17332_17401 = state_17288__$1;
(statearr_17332_17401[(2)] = null);

(statearr_17332_17401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (28))){
var inst_17228 = (state_17288[(20)]);
var inst_17247 = (state_17288[(25)]);
var inst_17247__$1 = cljs.core.seq.call(null,inst_17228);
var state_17288__$1 = (function (){var statearr_17333 = state_17288;
(statearr_17333[(25)] = inst_17247__$1);

return statearr_17333;
})();
if(inst_17247__$1){
var statearr_17334_17402 = state_17288__$1;
(statearr_17334_17402[(1)] = (33));

} else {
var statearr_17335_17403 = state_17288__$1;
(statearr_17335_17403[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (25))){
var inst_17231 = (state_17288[(9)]);
var inst_17230 = (state_17288[(21)]);
var inst_17233 = (inst_17231 < inst_17230);
var inst_17234 = inst_17233;
var state_17288__$1 = state_17288;
if(cljs.core.truth_(inst_17234)){
var statearr_17336_17404 = state_17288__$1;
(statearr_17336_17404[(1)] = (27));

} else {
var statearr_17337_17405 = state_17288__$1;
(statearr_17337_17405[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (34))){
var state_17288__$1 = state_17288;
var statearr_17338_17406 = state_17288__$1;
(statearr_17338_17406[(2)] = null);

(statearr_17338_17406[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (17))){
var state_17288__$1 = state_17288;
var statearr_17339_17407 = state_17288__$1;
(statearr_17339_17407[(2)] = null);

(statearr_17339_17407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (3))){
var inst_17286 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17288__$1,inst_17286);
} else {
if((state_val_17289 === (12))){
var inst_17215 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17340_17408 = state_17288__$1;
(statearr_17340_17408[(2)] = inst_17215);

(statearr_17340_17408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (2))){
var state_17288__$1 = state_17288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17288__$1,(4),ch);
} else {
if((state_val_17289 === (23))){
var state_17288__$1 = state_17288;
var statearr_17341_17409 = state_17288__$1;
(statearr_17341_17409[(2)] = null);

(statearr_17341_17409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (35))){
var inst_17270 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17342_17410 = state_17288__$1;
(statearr_17342_17410[(2)] = inst_17270);

(statearr_17342_17410[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (19))){
var inst_17187 = (state_17288[(7)]);
var inst_17191 = cljs.core.chunk_first.call(null,inst_17187);
var inst_17192 = cljs.core.chunk_rest.call(null,inst_17187);
var inst_17193 = cljs.core.count.call(null,inst_17191);
var inst_17165 = inst_17192;
var inst_17166 = inst_17191;
var inst_17167 = inst_17193;
var inst_17168 = (0);
var state_17288__$1 = (function (){var statearr_17343 = state_17288;
(statearr_17343[(13)] = inst_17165);

(statearr_17343[(15)] = inst_17166);

(statearr_17343[(16)] = inst_17167);

(statearr_17343[(17)] = inst_17168);

return statearr_17343;
})();
var statearr_17344_17411 = state_17288__$1;
(statearr_17344_17411[(2)] = null);

(statearr_17344_17411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (11))){
var inst_17165 = (state_17288[(13)]);
var inst_17187 = (state_17288[(7)]);
var inst_17187__$1 = cljs.core.seq.call(null,inst_17165);
var state_17288__$1 = (function (){var statearr_17345 = state_17288;
(statearr_17345[(7)] = inst_17187__$1);

return statearr_17345;
})();
if(inst_17187__$1){
var statearr_17346_17412 = state_17288__$1;
(statearr_17346_17412[(1)] = (16));

} else {
var statearr_17347_17413 = state_17288__$1;
(statearr_17347_17413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (9))){
var inst_17217 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17348_17414 = state_17288__$1;
(statearr_17348_17414[(2)] = inst_17217);

(statearr_17348_17414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (5))){
var inst_17163 = cljs.core.deref.call(null,cs);
var inst_17164 = cljs.core.seq.call(null,inst_17163);
var inst_17165 = inst_17164;
var inst_17166 = null;
var inst_17167 = (0);
var inst_17168 = (0);
var state_17288__$1 = (function (){var statearr_17349 = state_17288;
(statearr_17349[(13)] = inst_17165);

(statearr_17349[(15)] = inst_17166);

(statearr_17349[(16)] = inst_17167);

(statearr_17349[(17)] = inst_17168);

return statearr_17349;
})();
var statearr_17350_17415 = state_17288__$1;
(statearr_17350_17415[(2)] = null);

(statearr_17350_17415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (14))){
var state_17288__$1 = state_17288;
var statearr_17351_17416 = state_17288__$1;
(statearr_17351_17416[(2)] = null);

(statearr_17351_17416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (45))){
var inst_17278 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17352_17417 = state_17288__$1;
(statearr_17352_17417[(2)] = inst_17278);

(statearr_17352_17417[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (26))){
var inst_17220 = (state_17288[(29)]);
var inst_17274 = (state_17288[(2)]);
var inst_17275 = cljs.core.seq.call(null,inst_17220);
var state_17288__$1 = (function (){var statearr_17353 = state_17288;
(statearr_17353[(31)] = inst_17274);

return statearr_17353;
})();
if(inst_17275){
var statearr_17354_17418 = state_17288__$1;
(statearr_17354_17418[(1)] = (42));

} else {
var statearr_17355_17419 = state_17288__$1;
(statearr_17355_17419[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (16))){
var inst_17187 = (state_17288[(7)]);
var inst_17189 = cljs.core.chunked_seq_QMARK_.call(null,inst_17187);
var state_17288__$1 = state_17288;
if(inst_17189){
var statearr_17356_17420 = state_17288__$1;
(statearr_17356_17420[(1)] = (19));

} else {
var statearr_17357_17421 = state_17288__$1;
(statearr_17357_17421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (38))){
var inst_17267 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17358_17422 = state_17288__$1;
(statearr_17358_17422[(2)] = inst_17267);

(statearr_17358_17422[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (30))){
var state_17288__$1 = state_17288;
var statearr_17359_17423 = state_17288__$1;
(statearr_17359_17423[(2)] = null);

(statearr_17359_17423[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (10))){
var inst_17166 = (state_17288[(15)]);
var inst_17168 = (state_17288[(17)]);
var inst_17176 = cljs.core._nth.call(null,inst_17166,inst_17168);
var inst_17177 = cljs.core.nth.call(null,inst_17176,(0),null);
var inst_17178 = cljs.core.nth.call(null,inst_17176,(1),null);
var state_17288__$1 = (function (){var statearr_17360 = state_17288;
(statearr_17360[(26)] = inst_17177);

return statearr_17360;
})();
if(cljs.core.truth_(inst_17178)){
var statearr_17361_17424 = state_17288__$1;
(statearr_17361_17424[(1)] = (13));

} else {
var statearr_17362_17425 = state_17288__$1;
(statearr_17362_17425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (18))){
var inst_17213 = (state_17288[(2)]);
var state_17288__$1 = state_17288;
var statearr_17363_17426 = state_17288__$1;
(statearr_17363_17426[(2)] = inst_17213);

(statearr_17363_17426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (42))){
var state_17288__$1 = state_17288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17288__$1,(45),dchan);
} else {
if((state_val_17289 === (37))){
var inst_17156 = (state_17288[(10)]);
var inst_17256 = (state_17288[(23)]);
var inst_17247 = (state_17288[(25)]);
var inst_17256__$1 = cljs.core.first.call(null,inst_17247);
var inst_17257 = cljs.core.async.put_BANG_.call(null,inst_17256__$1,inst_17156,done);
var state_17288__$1 = (function (){var statearr_17364 = state_17288;
(statearr_17364[(23)] = inst_17256__$1);

return statearr_17364;
})();
if(cljs.core.truth_(inst_17257)){
var statearr_17365_17427 = state_17288__$1;
(statearr_17365_17427[(1)] = (39));

} else {
var statearr_17366_17428 = state_17288__$1;
(statearr_17366_17428[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17289 === (8))){
var inst_17167 = (state_17288[(16)]);
var inst_17168 = (state_17288[(17)]);
var inst_17170 = (inst_17168 < inst_17167);
var inst_17171 = inst_17170;
var state_17288__$1 = state_17288;
if(cljs.core.truth_(inst_17171)){
var statearr_17367_17429 = state_17288__$1;
(statearr_17367_17429[(1)] = (10));

} else {
var statearr_17368_17430 = state_17288__$1;
(statearr_17368_17430[(1)] = (11));

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
});})(c__16023__auto___17376,cs,m,dchan,dctr,done))
;
return ((function (switch__15911__auto__,c__16023__auto___17376,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15912__auto__ = null;
var cljs$core$async$mult_$_state_machine__15912__auto____0 = (function (){
var statearr_17372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17372[(0)] = cljs$core$async$mult_$_state_machine__15912__auto__);

(statearr_17372[(1)] = (1));

return statearr_17372;
});
var cljs$core$async$mult_$_state_machine__15912__auto____1 = (function (state_17288){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_17288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e17373){if((e17373 instanceof Object)){
var ex__15915__auto__ = e17373;
var statearr_17374_17431 = state_17288;
(statearr_17374_17431[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17432 = state_17288;
state_17288 = G__17432;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15912__auto__ = function(state_17288){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15912__auto____1.call(this,state_17288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15912__auto____0;
cljs$core$async$mult_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15912__auto____1;
return cljs$core$async$mult_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___17376,cs,m,dchan,dctr,done))
})();
var state__16025__auto__ = (function (){var statearr_17375 = f__16024__auto__.call(null);
(statearr_17375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___17376);

return statearr_17375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___17376,cs,m,dchan,dctr,done))
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
var args17433 = [];
var len__10353__auto___17436 = arguments.length;
var i__10354__auto___17437 = (0);
while(true){
if((i__10354__auto___17437 < len__10353__auto___17436)){
args17433.push((arguments[i__10354__auto___17437]));

var G__17438 = (i__10354__auto___17437 + (1));
i__10354__auto___17437 = G__17438;
continue;
} else {
}
break;
}

var G__17435 = args17433.length;
switch (G__17435) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17433.length)].join('')));

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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m,ch);
} else {
var m__9909__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m,ch);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m,ch);
} else {
var m__9909__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m,ch);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m);
} else {
var m__9909__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m,state_map);
} else {
var m__9909__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m,state_map);
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
var x__9908__auto__ = (((m == null))?null:m);
var m__9909__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,m,mode);
} else {
var m__9909__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___17450 = arguments.length;
var i__10354__auto___17451 = (0);
while(true){
if((i__10354__auto___17451 < len__10353__auto___17450)){
args__10360__auto__.push((arguments[i__10354__auto___17451]));

var G__17452 = (i__10354__auto___17451 + (1));
i__10354__auto___17451 = G__17452;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17444){
var map__17445 = p__17444;
var map__17445__$1 = ((((!((map__17445 == null)))?((((map__17445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17445):map__17445);
var opts = map__17445__$1;
var statearr_17447_17453 = state;
(statearr_17447_17453[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__17445,map__17445__$1,opts){
return (function (val){
var statearr_17448_17454 = state;
(statearr_17448_17454[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17445,map__17445__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17449_17455 = state;
(statearr_17449_17455[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17440){
var G__17441 = cljs.core.first.call(null,seq17440);
var seq17440__$1 = cljs.core.next.call(null,seq17440);
var G__17442 = cljs.core.first.call(null,seq17440__$1);
var seq17440__$2 = cljs.core.next.call(null,seq17440__$1);
var G__17443 = cljs.core.first.call(null,seq17440__$2);
var seq17440__$3 = cljs.core.next.call(null,seq17440__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17441,G__17442,G__17443,seq17440__$3);
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
if(typeof cljs.core.async.t_cljs$core$async17623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17623 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17624){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17624 = meta17624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17625,meta17624__$1){
var self__ = this;
var _17625__$1 = this;
return (new cljs.core.async.t_cljs$core$async17623(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17624__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17625){
var self__ = this;
var _17625__$1 = this;
return self__.meta17624;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17623.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17624","meta17624",2018370224,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17623";

cljs.core.async.t_cljs$core$async17623.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async17623");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17623 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17623(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17624){
return (new cljs.core.async.t_cljs$core$async17623(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17624));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17623(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16023__auto___17790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___17790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___17790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17727){
var state_val_17728 = (state_17727[(1)]);
if((state_val_17728 === (7))){
var inst_17642 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17729_17791 = state_17727__$1;
(statearr_17729_17791[(2)] = inst_17642);

(statearr_17729_17791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (20))){
var inst_17654 = (state_17727[(7)]);
var state_17727__$1 = state_17727;
var statearr_17730_17792 = state_17727__$1;
(statearr_17730_17792[(2)] = inst_17654);

(statearr_17730_17792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (27))){
var state_17727__$1 = state_17727;
var statearr_17731_17793 = state_17727__$1;
(statearr_17731_17793[(2)] = null);

(statearr_17731_17793[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (1))){
var inst_17629 = (state_17727[(8)]);
var inst_17629__$1 = calc_state.call(null);
var inst_17631 = (inst_17629__$1 == null);
var inst_17632 = cljs.core.not.call(null,inst_17631);
var state_17727__$1 = (function (){var statearr_17732 = state_17727;
(statearr_17732[(8)] = inst_17629__$1);

return statearr_17732;
})();
if(inst_17632){
var statearr_17733_17794 = state_17727__$1;
(statearr_17733_17794[(1)] = (2));

} else {
var statearr_17734_17795 = state_17727__$1;
(statearr_17734_17795[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (24))){
var inst_17678 = (state_17727[(9)]);
var inst_17687 = (state_17727[(10)]);
var inst_17701 = (state_17727[(11)]);
var inst_17701__$1 = inst_17678.call(null,inst_17687);
var state_17727__$1 = (function (){var statearr_17735 = state_17727;
(statearr_17735[(11)] = inst_17701__$1);

return statearr_17735;
})();
if(cljs.core.truth_(inst_17701__$1)){
var statearr_17736_17796 = state_17727__$1;
(statearr_17736_17796[(1)] = (29));

} else {
var statearr_17737_17797 = state_17727__$1;
(statearr_17737_17797[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (4))){
var inst_17645 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17645)){
var statearr_17738_17798 = state_17727__$1;
(statearr_17738_17798[(1)] = (8));

} else {
var statearr_17739_17799 = state_17727__$1;
(statearr_17739_17799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (15))){
var inst_17672 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17672)){
var statearr_17740_17800 = state_17727__$1;
(statearr_17740_17800[(1)] = (19));

} else {
var statearr_17741_17801 = state_17727__$1;
(statearr_17741_17801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (21))){
var inst_17677 = (state_17727[(12)]);
var inst_17677__$1 = (state_17727[(2)]);
var inst_17678 = cljs.core.get.call(null,inst_17677__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17679 = cljs.core.get.call(null,inst_17677__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17680 = cljs.core.get.call(null,inst_17677__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17727__$1 = (function (){var statearr_17742 = state_17727;
(statearr_17742[(9)] = inst_17678);

(statearr_17742[(12)] = inst_17677__$1);

(statearr_17742[(13)] = inst_17679);

return statearr_17742;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17727__$1,(22),inst_17680);
} else {
if((state_val_17728 === (31))){
var inst_17709 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17709)){
var statearr_17743_17802 = state_17727__$1;
(statearr_17743_17802[(1)] = (32));

} else {
var statearr_17744_17803 = state_17727__$1;
(statearr_17744_17803[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (32))){
var inst_17686 = (state_17727[(14)]);
var state_17727__$1 = state_17727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17727__$1,(35),out,inst_17686);
} else {
if((state_val_17728 === (33))){
var inst_17677 = (state_17727[(12)]);
var inst_17654 = inst_17677;
var state_17727__$1 = (function (){var statearr_17745 = state_17727;
(statearr_17745[(7)] = inst_17654);

return statearr_17745;
})();
var statearr_17746_17804 = state_17727__$1;
(statearr_17746_17804[(2)] = null);

(statearr_17746_17804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (13))){
var inst_17654 = (state_17727[(7)]);
var inst_17661 = inst_17654.cljs$lang$protocol_mask$partition0$;
var inst_17662 = (inst_17661 & (64));
var inst_17663 = inst_17654.cljs$core$ISeq$;
var inst_17664 = (cljs.core.PROTOCOL_SENTINEL === inst_17663);
var inst_17665 = (inst_17662) || (inst_17664);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17665)){
var statearr_17747_17805 = state_17727__$1;
(statearr_17747_17805[(1)] = (16));

} else {
var statearr_17748_17806 = state_17727__$1;
(statearr_17748_17806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (22))){
var inst_17687 = (state_17727[(10)]);
var inst_17686 = (state_17727[(14)]);
var inst_17685 = (state_17727[(2)]);
var inst_17686__$1 = cljs.core.nth.call(null,inst_17685,(0),null);
var inst_17687__$1 = cljs.core.nth.call(null,inst_17685,(1),null);
var inst_17688 = (inst_17686__$1 == null);
var inst_17689 = cljs.core._EQ_.call(null,inst_17687__$1,change);
var inst_17690 = (inst_17688) || (inst_17689);
var state_17727__$1 = (function (){var statearr_17749 = state_17727;
(statearr_17749[(10)] = inst_17687__$1);

(statearr_17749[(14)] = inst_17686__$1);

return statearr_17749;
})();
if(cljs.core.truth_(inst_17690)){
var statearr_17750_17807 = state_17727__$1;
(statearr_17750_17807[(1)] = (23));

} else {
var statearr_17751_17808 = state_17727__$1;
(statearr_17751_17808[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (36))){
var inst_17677 = (state_17727[(12)]);
var inst_17654 = inst_17677;
var state_17727__$1 = (function (){var statearr_17752 = state_17727;
(statearr_17752[(7)] = inst_17654);

return statearr_17752;
})();
var statearr_17753_17809 = state_17727__$1;
(statearr_17753_17809[(2)] = null);

(statearr_17753_17809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (29))){
var inst_17701 = (state_17727[(11)]);
var state_17727__$1 = state_17727;
var statearr_17754_17810 = state_17727__$1;
(statearr_17754_17810[(2)] = inst_17701);

(statearr_17754_17810[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (6))){
var state_17727__$1 = state_17727;
var statearr_17755_17811 = state_17727__$1;
(statearr_17755_17811[(2)] = false);

(statearr_17755_17811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (28))){
var inst_17697 = (state_17727[(2)]);
var inst_17698 = calc_state.call(null);
var inst_17654 = inst_17698;
var state_17727__$1 = (function (){var statearr_17756 = state_17727;
(statearr_17756[(15)] = inst_17697);

(statearr_17756[(7)] = inst_17654);

return statearr_17756;
})();
var statearr_17757_17812 = state_17727__$1;
(statearr_17757_17812[(2)] = null);

(statearr_17757_17812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (25))){
var inst_17723 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17758_17813 = state_17727__$1;
(statearr_17758_17813[(2)] = inst_17723);

(statearr_17758_17813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (34))){
var inst_17721 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17759_17814 = state_17727__$1;
(statearr_17759_17814[(2)] = inst_17721);

(statearr_17759_17814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (17))){
var state_17727__$1 = state_17727;
var statearr_17760_17815 = state_17727__$1;
(statearr_17760_17815[(2)] = false);

(statearr_17760_17815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (3))){
var state_17727__$1 = state_17727;
var statearr_17761_17816 = state_17727__$1;
(statearr_17761_17816[(2)] = false);

(statearr_17761_17816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (12))){
var inst_17725 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17727__$1,inst_17725);
} else {
if((state_val_17728 === (2))){
var inst_17629 = (state_17727[(8)]);
var inst_17634 = inst_17629.cljs$lang$protocol_mask$partition0$;
var inst_17635 = (inst_17634 & (64));
var inst_17636 = inst_17629.cljs$core$ISeq$;
var inst_17637 = (cljs.core.PROTOCOL_SENTINEL === inst_17636);
var inst_17638 = (inst_17635) || (inst_17637);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17638)){
var statearr_17762_17817 = state_17727__$1;
(statearr_17762_17817[(1)] = (5));

} else {
var statearr_17763_17818 = state_17727__$1;
(statearr_17763_17818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (23))){
var inst_17686 = (state_17727[(14)]);
var inst_17692 = (inst_17686 == null);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17692)){
var statearr_17764_17819 = state_17727__$1;
(statearr_17764_17819[(1)] = (26));

} else {
var statearr_17765_17820 = state_17727__$1;
(statearr_17765_17820[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (35))){
var inst_17712 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
if(cljs.core.truth_(inst_17712)){
var statearr_17766_17821 = state_17727__$1;
(statearr_17766_17821[(1)] = (36));

} else {
var statearr_17767_17822 = state_17727__$1;
(statearr_17767_17822[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (19))){
var inst_17654 = (state_17727[(7)]);
var inst_17674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17654);
var state_17727__$1 = state_17727;
var statearr_17768_17823 = state_17727__$1;
(statearr_17768_17823[(2)] = inst_17674);

(statearr_17768_17823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (11))){
var inst_17654 = (state_17727[(7)]);
var inst_17658 = (inst_17654 == null);
var inst_17659 = cljs.core.not.call(null,inst_17658);
var state_17727__$1 = state_17727;
if(inst_17659){
var statearr_17769_17824 = state_17727__$1;
(statearr_17769_17824[(1)] = (13));

} else {
var statearr_17770_17825 = state_17727__$1;
(statearr_17770_17825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (9))){
var inst_17629 = (state_17727[(8)]);
var state_17727__$1 = state_17727;
var statearr_17771_17826 = state_17727__$1;
(statearr_17771_17826[(2)] = inst_17629);

(statearr_17771_17826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (5))){
var state_17727__$1 = state_17727;
var statearr_17772_17827 = state_17727__$1;
(statearr_17772_17827[(2)] = true);

(statearr_17772_17827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (14))){
var state_17727__$1 = state_17727;
var statearr_17773_17828 = state_17727__$1;
(statearr_17773_17828[(2)] = false);

(statearr_17773_17828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (26))){
var inst_17687 = (state_17727[(10)]);
var inst_17694 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17687);
var state_17727__$1 = state_17727;
var statearr_17774_17829 = state_17727__$1;
(statearr_17774_17829[(2)] = inst_17694);

(statearr_17774_17829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (16))){
var state_17727__$1 = state_17727;
var statearr_17775_17830 = state_17727__$1;
(statearr_17775_17830[(2)] = true);

(statearr_17775_17830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (38))){
var inst_17717 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17776_17831 = state_17727__$1;
(statearr_17776_17831[(2)] = inst_17717);

(statearr_17776_17831[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (30))){
var inst_17678 = (state_17727[(9)]);
var inst_17687 = (state_17727[(10)]);
var inst_17679 = (state_17727[(13)]);
var inst_17704 = cljs.core.empty_QMARK_.call(null,inst_17678);
var inst_17705 = inst_17679.call(null,inst_17687);
var inst_17706 = cljs.core.not.call(null,inst_17705);
var inst_17707 = (inst_17704) && (inst_17706);
var state_17727__$1 = state_17727;
var statearr_17777_17832 = state_17727__$1;
(statearr_17777_17832[(2)] = inst_17707);

(statearr_17777_17832[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (10))){
var inst_17629 = (state_17727[(8)]);
var inst_17650 = (state_17727[(2)]);
var inst_17651 = cljs.core.get.call(null,inst_17650,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17652 = cljs.core.get.call(null,inst_17650,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17653 = cljs.core.get.call(null,inst_17650,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17654 = inst_17629;
var state_17727__$1 = (function (){var statearr_17778 = state_17727;
(statearr_17778[(16)] = inst_17653);

(statearr_17778[(17)] = inst_17651);

(statearr_17778[(7)] = inst_17654);

(statearr_17778[(18)] = inst_17652);

return statearr_17778;
})();
var statearr_17779_17833 = state_17727__$1;
(statearr_17779_17833[(2)] = null);

(statearr_17779_17833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (18))){
var inst_17669 = (state_17727[(2)]);
var state_17727__$1 = state_17727;
var statearr_17780_17834 = state_17727__$1;
(statearr_17780_17834[(2)] = inst_17669);

(statearr_17780_17834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (37))){
var state_17727__$1 = state_17727;
var statearr_17781_17835 = state_17727__$1;
(statearr_17781_17835[(2)] = null);

(statearr_17781_17835[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17728 === (8))){
var inst_17629 = (state_17727[(8)]);
var inst_17647 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17629);
var state_17727__$1 = state_17727;
var statearr_17782_17836 = state_17727__$1;
(statearr_17782_17836[(2)] = inst_17647);

(statearr_17782_17836[(1)] = (10));


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
});})(c__16023__auto___17790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15911__auto__,c__16023__auto___17790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15912__auto__ = null;
var cljs$core$async$mix_$_state_machine__15912__auto____0 = (function (){
var statearr_17786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17786[(0)] = cljs$core$async$mix_$_state_machine__15912__auto__);

(statearr_17786[(1)] = (1));

return statearr_17786;
});
var cljs$core$async$mix_$_state_machine__15912__auto____1 = (function (state_17727){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_17727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e17787){if((e17787 instanceof Object)){
var ex__15915__auto__ = e17787;
var statearr_17788_17837 = state_17727;
(statearr_17788_17837[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17838 = state_17727;
state_17727 = G__17838;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15912__auto__ = function(state_17727){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15912__auto____1.call(this,state_17727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15912__auto____0;
cljs$core$async$mix_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15912__auto____1;
return cljs$core$async$mix_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___17790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16025__auto__ = (function (){var statearr_17789 = f__16024__auto__.call(null);
(statearr_17789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___17790);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___17790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9908__auto__ = (((p == null))?null:p);
var m__9909__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9909__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9908__auto__ = (((p == null))?null:p);
var m__9909__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,p,v,ch);
} else {
var m__9909__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17839 = [];
var len__10353__auto___17842 = arguments.length;
var i__10354__auto___17843 = (0);
while(true){
if((i__10354__auto___17843 < len__10353__auto___17842)){
args17839.push((arguments[i__10354__auto___17843]));

var G__17844 = (i__10354__auto___17843 + (1));
i__10354__auto___17843 = G__17844;
continue;
} else {
}
break;
}

var G__17841 = args17839.length;
switch (G__17841) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17839.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9908__auto__ = (((p == null))?null:p);
var m__9909__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,p);
} else {
var m__9909__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,p);
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
var x__9908__auto__ = (((p == null))?null:p);
var m__9909__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9908__auto__)]);
if(!((m__9909__auto__ == null))){
return m__9909__auto__.call(null,p,v);
} else {
var m__9909__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9909__auto____$1 == null))){
return m__9909__auto____$1.call(null,p,v);
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
var args17847 = [];
var len__10353__auto___17972 = arguments.length;
var i__10354__auto___17973 = (0);
while(true){
if((i__10354__auto___17973 < len__10353__auto___17972)){
args17847.push((arguments[i__10354__auto___17973]));

var G__17974 = (i__10354__auto___17973 + (1));
i__10354__auto___17973 = G__17974;
continue;
} else {
}
break;
}

var G__17849 = args17847.length;
switch (G__17849) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17847.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9245__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9245__auto__,mults){
return (function (p1__17846_SHARP_){
if(cljs.core.truth_(p1__17846_SHARP_.call(null,topic))){
return p1__17846_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17846_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9245__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17850 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17851){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17851 = meta17851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17852,meta17851__$1){
var self__ = this;
var _17852__$1 = this;
return (new cljs.core.async.t_cljs$core$async17850(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17851__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17852){
var self__ = this;
var _17852__$1 = this;
return self__.meta17851;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17851","meta17851",308527333,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17850";

cljs.core.async.t_cljs$core$async17850.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async17850");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17850 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17851){
return (new cljs.core.async.t_cljs$core$async17850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17851));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17850(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16023__auto___17976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___17976,mults,ensure_mult,p){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___17976,mults,ensure_mult,p){
return (function (state_17924){
var state_val_17925 = (state_17924[(1)]);
if((state_val_17925 === (7))){
var inst_17920 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17926_17977 = state_17924__$1;
(statearr_17926_17977[(2)] = inst_17920);

(statearr_17926_17977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (20))){
var state_17924__$1 = state_17924;
var statearr_17927_17978 = state_17924__$1;
(statearr_17927_17978[(2)] = null);

(statearr_17927_17978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (1))){
var state_17924__$1 = state_17924;
var statearr_17928_17979 = state_17924__$1;
(statearr_17928_17979[(2)] = null);

(statearr_17928_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (24))){
var inst_17903 = (state_17924[(7)]);
var inst_17912 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17903);
var state_17924__$1 = state_17924;
var statearr_17929_17980 = state_17924__$1;
(statearr_17929_17980[(2)] = inst_17912);

(statearr_17929_17980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (4))){
var inst_17855 = (state_17924[(8)]);
var inst_17855__$1 = (state_17924[(2)]);
var inst_17856 = (inst_17855__$1 == null);
var state_17924__$1 = (function (){var statearr_17930 = state_17924;
(statearr_17930[(8)] = inst_17855__$1);

return statearr_17930;
})();
if(cljs.core.truth_(inst_17856)){
var statearr_17931_17981 = state_17924__$1;
(statearr_17931_17981[(1)] = (5));

} else {
var statearr_17932_17982 = state_17924__$1;
(statearr_17932_17982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (15))){
var inst_17897 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17933_17983 = state_17924__$1;
(statearr_17933_17983[(2)] = inst_17897);

(statearr_17933_17983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (21))){
var inst_17917 = (state_17924[(2)]);
var state_17924__$1 = (function (){var statearr_17934 = state_17924;
(statearr_17934[(9)] = inst_17917);

return statearr_17934;
})();
var statearr_17935_17984 = state_17924__$1;
(statearr_17935_17984[(2)] = null);

(statearr_17935_17984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (13))){
var inst_17879 = (state_17924[(10)]);
var inst_17881 = cljs.core.chunked_seq_QMARK_.call(null,inst_17879);
var state_17924__$1 = state_17924;
if(inst_17881){
var statearr_17936_17985 = state_17924__$1;
(statearr_17936_17985[(1)] = (16));

} else {
var statearr_17937_17986 = state_17924__$1;
(statearr_17937_17986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (22))){
var inst_17909 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
if(cljs.core.truth_(inst_17909)){
var statearr_17938_17987 = state_17924__$1;
(statearr_17938_17987[(1)] = (23));

} else {
var statearr_17939_17988 = state_17924__$1;
(statearr_17939_17988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (6))){
var inst_17905 = (state_17924[(11)]);
var inst_17855 = (state_17924[(8)]);
var inst_17903 = (state_17924[(7)]);
var inst_17903__$1 = topic_fn.call(null,inst_17855);
var inst_17904 = cljs.core.deref.call(null,mults);
var inst_17905__$1 = cljs.core.get.call(null,inst_17904,inst_17903__$1);
var state_17924__$1 = (function (){var statearr_17940 = state_17924;
(statearr_17940[(11)] = inst_17905__$1);

(statearr_17940[(7)] = inst_17903__$1);

return statearr_17940;
})();
if(cljs.core.truth_(inst_17905__$1)){
var statearr_17941_17989 = state_17924__$1;
(statearr_17941_17989[(1)] = (19));

} else {
var statearr_17942_17990 = state_17924__$1;
(statearr_17942_17990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (25))){
var inst_17914 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17943_17991 = state_17924__$1;
(statearr_17943_17991[(2)] = inst_17914);

(statearr_17943_17991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (17))){
var inst_17879 = (state_17924[(10)]);
var inst_17888 = cljs.core.first.call(null,inst_17879);
var inst_17889 = cljs.core.async.muxch_STAR_.call(null,inst_17888);
var inst_17890 = cljs.core.async.close_BANG_.call(null,inst_17889);
var inst_17891 = cljs.core.next.call(null,inst_17879);
var inst_17865 = inst_17891;
var inst_17866 = null;
var inst_17867 = (0);
var inst_17868 = (0);
var state_17924__$1 = (function (){var statearr_17944 = state_17924;
(statearr_17944[(12)] = inst_17868);

(statearr_17944[(13)] = inst_17865);

(statearr_17944[(14)] = inst_17866);

(statearr_17944[(15)] = inst_17890);

(statearr_17944[(16)] = inst_17867);

return statearr_17944;
})();
var statearr_17945_17992 = state_17924__$1;
(statearr_17945_17992[(2)] = null);

(statearr_17945_17992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (3))){
var inst_17922 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17924__$1,inst_17922);
} else {
if((state_val_17925 === (12))){
var inst_17899 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17946_17993 = state_17924__$1;
(statearr_17946_17993[(2)] = inst_17899);

(statearr_17946_17993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (2))){
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17924__$1,(4),ch);
} else {
if((state_val_17925 === (23))){
var state_17924__$1 = state_17924;
var statearr_17947_17994 = state_17924__$1;
(statearr_17947_17994[(2)] = null);

(statearr_17947_17994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (19))){
var inst_17905 = (state_17924[(11)]);
var inst_17855 = (state_17924[(8)]);
var inst_17907 = cljs.core.async.muxch_STAR_.call(null,inst_17905);
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17924__$1,(22),inst_17907,inst_17855);
} else {
if((state_val_17925 === (11))){
var inst_17879 = (state_17924[(10)]);
var inst_17865 = (state_17924[(13)]);
var inst_17879__$1 = cljs.core.seq.call(null,inst_17865);
var state_17924__$1 = (function (){var statearr_17948 = state_17924;
(statearr_17948[(10)] = inst_17879__$1);

return statearr_17948;
})();
if(inst_17879__$1){
var statearr_17949_17995 = state_17924__$1;
(statearr_17949_17995[(1)] = (13));

} else {
var statearr_17950_17996 = state_17924__$1;
(statearr_17950_17996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (9))){
var inst_17901 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17951_17997 = state_17924__$1;
(statearr_17951_17997[(2)] = inst_17901);

(statearr_17951_17997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (5))){
var inst_17862 = cljs.core.deref.call(null,mults);
var inst_17863 = cljs.core.vals.call(null,inst_17862);
var inst_17864 = cljs.core.seq.call(null,inst_17863);
var inst_17865 = inst_17864;
var inst_17866 = null;
var inst_17867 = (0);
var inst_17868 = (0);
var state_17924__$1 = (function (){var statearr_17952 = state_17924;
(statearr_17952[(12)] = inst_17868);

(statearr_17952[(13)] = inst_17865);

(statearr_17952[(14)] = inst_17866);

(statearr_17952[(16)] = inst_17867);

return statearr_17952;
})();
var statearr_17953_17998 = state_17924__$1;
(statearr_17953_17998[(2)] = null);

(statearr_17953_17998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (14))){
var state_17924__$1 = state_17924;
var statearr_17957_17999 = state_17924__$1;
(statearr_17957_17999[(2)] = null);

(statearr_17957_17999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (16))){
var inst_17879 = (state_17924[(10)]);
var inst_17883 = cljs.core.chunk_first.call(null,inst_17879);
var inst_17884 = cljs.core.chunk_rest.call(null,inst_17879);
var inst_17885 = cljs.core.count.call(null,inst_17883);
var inst_17865 = inst_17884;
var inst_17866 = inst_17883;
var inst_17867 = inst_17885;
var inst_17868 = (0);
var state_17924__$1 = (function (){var statearr_17958 = state_17924;
(statearr_17958[(12)] = inst_17868);

(statearr_17958[(13)] = inst_17865);

(statearr_17958[(14)] = inst_17866);

(statearr_17958[(16)] = inst_17867);

return statearr_17958;
})();
var statearr_17959_18000 = state_17924__$1;
(statearr_17959_18000[(2)] = null);

(statearr_17959_18000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (10))){
var inst_17868 = (state_17924[(12)]);
var inst_17865 = (state_17924[(13)]);
var inst_17866 = (state_17924[(14)]);
var inst_17867 = (state_17924[(16)]);
var inst_17873 = cljs.core._nth.call(null,inst_17866,inst_17868);
var inst_17874 = cljs.core.async.muxch_STAR_.call(null,inst_17873);
var inst_17875 = cljs.core.async.close_BANG_.call(null,inst_17874);
var inst_17876 = (inst_17868 + (1));
var tmp17954 = inst_17865;
var tmp17955 = inst_17866;
var tmp17956 = inst_17867;
var inst_17865__$1 = tmp17954;
var inst_17866__$1 = tmp17955;
var inst_17867__$1 = tmp17956;
var inst_17868__$1 = inst_17876;
var state_17924__$1 = (function (){var statearr_17960 = state_17924;
(statearr_17960[(12)] = inst_17868__$1);

(statearr_17960[(13)] = inst_17865__$1);

(statearr_17960[(14)] = inst_17866__$1);

(statearr_17960[(17)] = inst_17875);

(statearr_17960[(16)] = inst_17867__$1);

return statearr_17960;
})();
var statearr_17961_18001 = state_17924__$1;
(statearr_17961_18001[(2)] = null);

(statearr_17961_18001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (18))){
var inst_17894 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17962_18002 = state_17924__$1;
(statearr_17962_18002[(2)] = inst_17894);

(statearr_17962_18002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17925 === (8))){
var inst_17868 = (state_17924[(12)]);
var inst_17867 = (state_17924[(16)]);
var inst_17870 = (inst_17868 < inst_17867);
var inst_17871 = inst_17870;
var state_17924__$1 = state_17924;
if(cljs.core.truth_(inst_17871)){
var statearr_17963_18003 = state_17924__$1;
(statearr_17963_18003[(1)] = (10));

} else {
var statearr_17964_18004 = state_17924__$1;
(statearr_17964_18004[(1)] = (11));

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
});})(c__16023__auto___17976,mults,ensure_mult,p))
;
return ((function (switch__15911__auto__,c__16023__auto___17976,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_17968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17968[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_17968[(1)] = (1));

return statearr_17968;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_17924){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_17924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e17969){if((e17969 instanceof Object)){
var ex__15915__auto__ = e17969;
var statearr_17970_18005 = state_17924;
(statearr_17970_18005[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18006 = state_17924;
state_17924 = G__18006;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_17924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_17924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___17976,mults,ensure_mult,p))
})();
var state__16025__auto__ = (function (){var statearr_17971 = f__16024__auto__.call(null);
(statearr_17971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___17976);

return statearr_17971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___17976,mults,ensure_mult,p))
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
var args18007 = [];
var len__10353__auto___18010 = arguments.length;
var i__10354__auto___18011 = (0);
while(true){
if((i__10354__auto___18011 < len__10353__auto___18010)){
args18007.push((arguments[i__10354__auto___18011]));

var G__18012 = (i__10354__auto___18011 + (1));
i__10354__auto___18011 = G__18012;
continue;
} else {
}
break;
}

var G__18009 = args18007.length;
switch (G__18009) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18007.length)].join('')));

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
var args18014 = [];
var len__10353__auto___18017 = arguments.length;
var i__10354__auto___18018 = (0);
while(true){
if((i__10354__auto___18018 < len__10353__auto___18017)){
args18014.push((arguments[i__10354__auto___18018]));

var G__18019 = (i__10354__auto___18018 + (1));
i__10354__auto___18018 = G__18019;
continue;
} else {
}
break;
}

var G__18016 = args18014.length;
switch (G__18016) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18014.length)].join('')));

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
var args18021 = [];
var len__10353__auto___18092 = arguments.length;
var i__10354__auto___18093 = (0);
while(true){
if((i__10354__auto___18093 < len__10353__auto___18092)){
args18021.push((arguments[i__10354__auto___18093]));

var G__18094 = (i__10354__auto___18093 + (1));
i__10354__auto___18093 = G__18094;
continue;
} else {
}
break;
}

var G__18023 = args18021.length;
switch (G__18023) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18021.length)].join('')));

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
var c__16023__auto___18096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18096,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18096,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18062){
var state_val_18063 = (state_18062[(1)]);
if((state_val_18063 === (7))){
var state_18062__$1 = state_18062;
var statearr_18064_18097 = state_18062__$1;
(statearr_18064_18097[(2)] = null);

(statearr_18064_18097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (1))){
var state_18062__$1 = state_18062;
var statearr_18065_18098 = state_18062__$1;
(statearr_18065_18098[(2)] = null);

(statearr_18065_18098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (4))){
var inst_18026 = (state_18062[(7)]);
var inst_18028 = (inst_18026 < cnt);
var state_18062__$1 = state_18062;
if(cljs.core.truth_(inst_18028)){
var statearr_18066_18099 = state_18062__$1;
(statearr_18066_18099[(1)] = (6));

} else {
var statearr_18067_18100 = state_18062__$1;
(statearr_18067_18100[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (15))){
var inst_18058 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
var statearr_18068_18101 = state_18062__$1;
(statearr_18068_18101[(2)] = inst_18058);

(statearr_18068_18101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (13))){
var inst_18051 = cljs.core.async.close_BANG_.call(null,out);
var state_18062__$1 = state_18062;
var statearr_18069_18102 = state_18062__$1;
(statearr_18069_18102[(2)] = inst_18051);

(statearr_18069_18102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (6))){
var state_18062__$1 = state_18062;
var statearr_18070_18103 = state_18062__$1;
(statearr_18070_18103[(2)] = null);

(statearr_18070_18103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (3))){
var inst_18060 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18062__$1,inst_18060);
} else {
if((state_val_18063 === (12))){
var inst_18048 = (state_18062[(8)]);
var inst_18048__$1 = (state_18062[(2)]);
var inst_18049 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18048__$1);
var state_18062__$1 = (function (){var statearr_18071 = state_18062;
(statearr_18071[(8)] = inst_18048__$1);

return statearr_18071;
})();
if(cljs.core.truth_(inst_18049)){
var statearr_18072_18104 = state_18062__$1;
(statearr_18072_18104[(1)] = (13));

} else {
var statearr_18073_18105 = state_18062__$1;
(statearr_18073_18105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (2))){
var inst_18025 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18026 = (0);
var state_18062__$1 = (function (){var statearr_18074 = state_18062;
(statearr_18074[(7)] = inst_18026);

(statearr_18074[(9)] = inst_18025);

return statearr_18074;
})();
var statearr_18075_18106 = state_18062__$1;
(statearr_18075_18106[(2)] = null);

(statearr_18075_18106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (11))){
var inst_18026 = (state_18062[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18062,(10),Object,null,(9));
var inst_18035 = chs__$1.call(null,inst_18026);
var inst_18036 = done.call(null,inst_18026);
var inst_18037 = cljs.core.async.take_BANG_.call(null,inst_18035,inst_18036);
var state_18062__$1 = state_18062;
var statearr_18076_18107 = state_18062__$1;
(statearr_18076_18107[(2)] = inst_18037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (9))){
var inst_18026 = (state_18062[(7)]);
var inst_18039 = (state_18062[(2)]);
var inst_18040 = (inst_18026 + (1));
var inst_18026__$1 = inst_18040;
var state_18062__$1 = (function (){var statearr_18077 = state_18062;
(statearr_18077[(7)] = inst_18026__$1);

(statearr_18077[(10)] = inst_18039);

return statearr_18077;
})();
var statearr_18078_18108 = state_18062__$1;
(statearr_18078_18108[(2)] = null);

(statearr_18078_18108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (5))){
var inst_18046 = (state_18062[(2)]);
var state_18062__$1 = (function (){var statearr_18079 = state_18062;
(statearr_18079[(11)] = inst_18046);

return statearr_18079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18062__$1,(12),dchan);
} else {
if((state_val_18063 === (14))){
var inst_18048 = (state_18062[(8)]);
var inst_18053 = cljs.core.apply.call(null,f,inst_18048);
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18062__$1,(16),out,inst_18053);
} else {
if((state_val_18063 === (16))){
var inst_18055 = (state_18062[(2)]);
var state_18062__$1 = (function (){var statearr_18080 = state_18062;
(statearr_18080[(12)] = inst_18055);

return statearr_18080;
})();
var statearr_18081_18109 = state_18062__$1;
(statearr_18081_18109[(2)] = null);

(statearr_18081_18109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (10))){
var inst_18030 = (state_18062[(2)]);
var inst_18031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18062__$1 = (function (){var statearr_18082 = state_18062;
(statearr_18082[(13)] = inst_18030);

return statearr_18082;
})();
var statearr_18083_18110 = state_18062__$1;
(statearr_18083_18110[(2)] = inst_18031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (8))){
var inst_18044 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
var statearr_18084_18111 = state_18062__$1;
(statearr_18084_18111[(2)] = inst_18044);

(statearr_18084_18111[(1)] = (5));


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
});})(c__16023__auto___18096,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15911__auto__,c__16023__auto___18096,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18088[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18088[(1)] = (1));

return statearr_18088;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18062){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18089){if((e18089 instanceof Object)){
var ex__15915__auto__ = e18089;
var statearr_18090_18112 = state_18062;
(statearr_18090_18112[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18113 = state_18062;
state_18062 = G__18113;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18096,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16025__auto__ = (function (){var statearr_18091 = f__16024__auto__.call(null);
(statearr_18091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18096);

return statearr_18091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18096,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18115 = [];
var len__10353__auto___18173 = arguments.length;
var i__10354__auto___18174 = (0);
while(true){
if((i__10354__auto___18174 < len__10353__auto___18173)){
args18115.push((arguments[i__10354__auto___18174]));

var G__18175 = (i__10354__auto___18174 + (1));
i__10354__auto___18174 = G__18175;
continue;
} else {
}
break;
}

var G__18117 = args18115.length;
switch (G__18117) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18115.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16023__auto___18177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18177,out){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18177,out){
return (function (state_18149){
var state_val_18150 = (state_18149[(1)]);
if((state_val_18150 === (7))){
var inst_18128 = (state_18149[(7)]);
var inst_18129 = (state_18149[(8)]);
var inst_18128__$1 = (state_18149[(2)]);
var inst_18129__$1 = cljs.core.nth.call(null,inst_18128__$1,(0),null);
var inst_18130 = cljs.core.nth.call(null,inst_18128__$1,(1),null);
var inst_18131 = (inst_18129__$1 == null);
var state_18149__$1 = (function (){var statearr_18151 = state_18149;
(statearr_18151[(7)] = inst_18128__$1);

(statearr_18151[(9)] = inst_18130);

(statearr_18151[(8)] = inst_18129__$1);

return statearr_18151;
})();
if(cljs.core.truth_(inst_18131)){
var statearr_18152_18178 = state_18149__$1;
(statearr_18152_18178[(1)] = (8));

} else {
var statearr_18153_18179 = state_18149__$1;
(statearr_18153_18179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (1))){
var inst_18118 = cljs.core.vec.call(null,chs);
var inst_18119 = inst_18118;
var state_18149__$1 = (function (){var statearr_18154 = state_18149;
(statearr_18154[(10)] = inst_18119);

return statearr_18154;
})();
var statearr_18155_18180 = state_18149__$1;
(statearr_18155_18180[(2)] = null);

(statearr_18155_18180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (4))){
var inst_18119 = (state_18149[(10)]);
var state_18149__$1 = state_18149;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18149__$1,(7),inst_18119);
} else {
if((state_val_18150 === (6))){
var inst_18145 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18156_18181 = state_18149__$1;
(statearr_18156_18181[(2)] = inst_18145);

(statearr_18156_18181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (3))){
var inst_18147 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18149__$1,inst_18147);
} else {
if((state_val_18150 === (2))){
var inst_18119 = (state_18149[(10)]);
var inst_18121 = cljs.core.count.call(null,inst_18119);
var inst_18122 = (inst_18121 > (0));
var state_18149__$1 = state_18149;
if(cljs.core.truth_(inst_18122)){
var statearr_18158_18182 = state_18149__$1;
(statearr_18158_18182[(1)] = (4));

} else {
var statearr_18159_18183 = state_18149__$1;
(statearr_18159_18183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (11))){
var inst_18119 = (state_18149[(10)]);
var inst_18138 = (state_18149[(2)]);
var tmp18157 = inst_18119;
var inst_18119__$1 = tmp18157;
var state_18149__$1 = (function (){var statearr_18160 = state_18149;
(statearr_18160[(10)] = inst_18119__$1);

(statearr_18160[(11)] = inst_18138);

return statearr_18160;
})();
var statearr_18161_18184 = state_18149__$1;
(statearr_18161_18184[(2)] = null);

(statearr_18161_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (9))){
var inst_18129 = (state_18149[(8)]);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18149__$1,(11),out,inst_18129);
} else {
if((state_val_18150 === (5))){
var inst_18143 = cljs.core.async.close_BANG_.call(null,out);
var state_18149__$1 = state_18149;
var statearr_18162_18185 = state_18149__$1;
(statearr_18162_18185[(2)] = inst_18143);

(statearr_18162_18185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (10))){
var inst_18141 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18163_18186 = state_18149__$1;
(statearr_18163_18186[(2)] = inst_18141);

(statearr_18163_18186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (8))){
var inst_18128 = (state_18149[(7)]);
var inst_18119 = (state_18149[(10)]);
var inst_18130 = (state_18149[(9)]);
var inst_18129 = (state_18149[(8)]);
var inst_18133 = (function (){var cs = inst_18119;
var vec__18124 = inst_18128;
var v = inst_18129;
var c = inst_18130;
return ((function (cs,vec__18124,v,c,inst_18128,inst_18119,inst_18130,inst_18129,state_val_18150,c__16023__auto___18177,out){
return (function (p1__18114_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18114_SHARP_);
});
;})(cs,vec__18124,v,c,inst_18128,inst_18119,inst_18130,inst_18129,state_val_18150,c__16023__auto___18177,out))
})();
var inst_18134 = cljs.core.filterv.call(null,inst_18133,inst_18119);
var inst_18119__$1 = inst_18134;
var state_18149__$1 = (function (){var statearr_18164 = state_18149;
(statearr_18164[(10)] = inst_18119__$1);

return statearr_18164;
})();
var statearr_18165_18187 = state_18149__$1;
(statearr_18165_18187[(2)] = null);

(statearr_18165_18187[(1)] = (2));


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
});})(c__16023__auto___18177,out))
;
return ((function (switch__15911__auto__,c__16023__auto___18177,out){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18169 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18169[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18169[(1)] = (1));

return statearr_18169;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18149){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18170){if((e18170 instanceof Object)){
var ex__15915__auto__ = e18170;
var statearr_18171_18188 = state_18149;
(statearr_18171_18188[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18189 = state_18149;
state_18149 = G__18189;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18177,out))
})();
var state__16025__auto__ = (function (){var statearr_18172 = f__16024__auto__.call(null);
(statearr_18172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18177);

return statearr_18172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18177,out))
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
var args18190 = [];
var len__10353__auto___18239 = arguments.length;
var i__10354__auto___18240 = (0);
while(true){
if((i__10354__auto___18240 < len__10353__auto___18239)){
args18190.push((arguments[i__10354__auto___18240]));

var G__18241 = (i__10354__auto___18240 + (1));
i__10354__auto___18240 = G__18241;
continue;
} else {
}
break;
}

var G__18192 = args18190.length;
switch (G__18192) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18190.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16023__auto___18243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18243,out){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18243,out){
return (function (state_18216){
var state_val_18217 = (state_18216[(1)]);
if((state_val_18217 === (7))){
var inst_18198 = (state_18216[(7)]);
var inst_18198__$1 = (state_18216[(2)]);
var inst_18199 = (inst_18198__$1 == null);
var inst_18200 = cljs.core.not.call(null,inst_18199);
var state_18216__$1 = (function (){var statearr_18218 = state_18216;
(statearr_18218[(7)] = inst_18198__$1);

return statearr_18218;
})();
if(inst_18200){
var statearr_18219_18244 = state_18216__$1;
(statearr_18219_18244[(1)] = (8));

} else {
var statearr_18220_18245 = state_18216__$1;
(statearr_18220_18245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (1))){
var inst_18193 = (0);
var state_18216__$1 = (function (){var statearr_18221 = state_18216;
(statearr_18221[(8)] = inst_18193);

return statearr_18221;
})();
var statearr_18222_18246 = state_18216__$1;
(statearr_18222_18246[(2)] = null);

(statearr_18222_18246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (4))){
var state_18216__$1 = state_18216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18216__$1,(7),ch);
} else {
if((state_val_18217 === (6))){
var inst_18211 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
var statearr_18223_18247 = state_18216__$1;
(statearr_18223_18247[(2)] = inst_18211);

(statearr_18223_18247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (3))){
var inst_18213 = (state_18216[(2)]);
var inst_18214 = cljs.core.async.close_BANG_.call(null,out);
var state_18216__$1 = (function (){var statearr_18224 = state_18216;
(statearr_18224[(9)] = inst_18213);

return statearr_18224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18216__$1,inst_18214);
} else {
if((state_val_18217 === (2))){
var inst_18193 = (state_18216[(8)]);
var inst_18195 = (inst_18193 < n);
var state_18216__$1 = state_18216;
if(cljs.core.truth_(inst_18195)){
var statearr_18225_18248 = state_18216__$1;
(statearr_18225_18248[(1)] = (4));

} else {
var statearr_18226_18249 = state_18216__$1;
(statearr_18226_18249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (11))){
var inst_18193 = (state_18216[(8)]);
var inst_18203 = (state_18216[(2)]);
var inst_18204 = (inst_18193 + (1));
var inst_18193__$1 = inst_18204;
var state_18216__$1 = (function (){var statearr_18227 = state_18216;
(statearr_18227[(8)] = inst_18193__$1);

(statearr_18227[(10)] = inst_18203);

return statearr_18227;
})();
var statearr_18228_18250 = state_18216__$1;
(statearr_18228_18250[(2)] = null);

(statearr_18228_18250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (9))){
var state_18216__$1 = state_18216;
var statearr_18229_18251 = state_18216__$1;
(statearr_18229_18251[(2)] = null);

(statearr_18229_18251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (5))){
var state_18216__$1 = state_18216;
var statearr_18230_18252 = state_18216__$1;
(statearr_18230_18252[(2)] = null);

(statearr_18230_18252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (10))){
var inst_18208 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
var statearr_18231_18253 = state_18216__$1;
(statearr_18231_18253[(2)] = inst_18208);

(statearr_18231_18253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (8))){
var inst_18198 = (state_18216[(7)]);
var state_18216__$1 = state_18216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18216__$1,(11),out,inst_18198);
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
});})(c__16023__auto___18243,out))
;
return ((function (switch__15911__auto__,c__16023__auto___18243,out){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18235[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18235[(1)] = (1));

return statearr_18235;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18216){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18236){if((e18236 instanceof Object)){
var ex__15915__auto__ = e18236;
var statearr_18237_18254 = state_18216;
(statearr_18237_18254[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18255 = state_18216;
state_18216 = G__18255;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18243,out))
})();
var state__16025__auto__ = (function (){var statearr_18238 = f__16024__auto__.call(null);
(statearr_18238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18243);

return statearr_18238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18243,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18263 = (function (f,ch,meta18264){
this.f = f;
this.ch = ch;
this.meta18264 = meta18264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18265,meta18264__$1){
var self__ = this;
var _18265__$1 = this;
return (new cljs.core.async.t_cljs$core$async18263(self__.f,self__.ch,meta18264__$1));
});

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18265){
var self__ = this;
var _18265__$1 = this;
return self__.meta18264;
});

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18266 = (function (f,ch,meta18264,_,fn1,meta18267){
this.f = f;
this.ch = ch;
this.meta18264 = meta18264;
this._ = _;
this.fn1 = fn1;
this.meta18267 = meta18267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18268,meta18267__$1){
var self__ = this;
var _18268__$1 = this;
return (new cljs.core.async.t_cljs$core$async18266(self__.f,self__.ch,self__.meta18264,self__._,self__.fn1,meta18267__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18268){
var self__ = this;
var _18268__$1 = this;
return self__.meta18267;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18266.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18256_SHARP_){
return f1.call(null,(((p1__18256_SHARP_ == null))?null:self__.f.call(null,p1__18256_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18266.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18264","meta18264",-359373282,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18263","cljs.core.async/t_cljs$core$async18263",-1406550359,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18267","meta18267",713249868,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18266";

cljs.core.async.t_cljs$core$async18266.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async18266");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18266 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18266(f__$1,ch__$1,meta18264__$1,___$2,fn1__$1,meta18267){
return (new cljs.core.async.t_cljs$core$async18266(f__$1,ch__$1,meta18264__$1,___$2,fn1__$1,meta18267));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18266(self__.f,self__.ch,self__.meta18264,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9233__auto__ = ret;
if(cljs.core.truth_(and__9233__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9233__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18264","meta18264",-359373282,null)], null);
});

cljs.core.async.t_cljs$core$async18263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18263";

cljs.core.async.t_cljs$core$async18263.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async18263");
});

cljs.core.async.__GT_t_cljs$core$async18263 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18263(f__$1,ch__$1,meta18264){
return (new cljs.core.async.t_cljs$core$async18263(f__$1,ch__$1,meta18264));
});

}

return (new cljs.core.async.t_cljs$core$async18263(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18272 = (function (f,ch,meta18273){
this.f = f;
this.ch = ch;
this.meta18273 = meta18273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18274,meta18273__$1){
var self__ = this;
var _18274__$1 = this;
return (new cljs.core.async.t_cljs$core$async18272(self__.f,self__.ch,meta18273__$1));
});

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18274){
var self__ = this;
var _18274__$1 = this;
return self__.meta18273;
});

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18273","meta18273",-2041257713,null)], null);
});

cljs.core.async.t_cljs$core$async18272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18272";

cljs.core.async.t_cljs$core$async18272.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async18272");
});

cljs.core.async.__GT_t_cljs$core$async18272 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18272(f__$1,ch__$1,meta18273){
return (new cljs.core.async.t_cljs$core$async18272(f__$1,ch__$1,meta18273));
});

}

return (new cljs.core.async.t_cljs$core$async18272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18278 = (function (p,ch,meta18279){
this.p = p;
this.ch = ch;
this.meta18279 = meta18279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18280,meta18279__$1){
var self__ = this;
var _18280__$1 = this;
return (new cljs.core.async.t_cljs$core$async18278(self__.p,self__.ch,meta18279__$1));
});

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18280){
var self__ = this;
var _18280__$1 = this;
return self__.meta18279;
});

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18279","meta18279",1188872114,null)], null);
});

cljs.core.async.t_cljs$core$async18278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18278";

cljs.core.async.t_cljs$core$async18278.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cljs.core.async/t_cljs$core$async18278");
});

cljs.core.async.__GT_t_cljs$core$async18278 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18278(p__$1,ch__$1,meta18279){
return (new cljs.core.async.t_cljs$core$async18278(p__$1,ch__$1,meta18279));
});

}

return (new cljs.core.async.t_cljs$core$async18278(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18281 = [];
var len__10353__auto___18325 = arguments.length;
var i__10354__auto___18326 = (0);
while(true){
if((i__10354__auto___18326 < len__10353__auto___18325)){
args18281.push((arguments[i__10354__auto___18326]));

var G__18327 = (i__10354__auto___18326 + (1));
i__10354__auto___18326 = G__18327;
continue;
} else {
}
break;
}

var G__18283 = args18281.length;
switch (G__18283) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18281.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16023__auto___18329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18329,out){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18329,out){
return (function (state_18304){
var state_val_18305 = (state_18304[(1)]);
if((state_val_18305 === (7))){
var inst_18300 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
var statearr_18306_18330 = state_18304__$1;
(statearr_18306_18330[(2)] = inst_18300);

(statearr_18306_18330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (1))){
var state_18304__$1 = state_18304;
var statearr_18307_18331 = state_18304__$1;
(statearr_18307_18331[(2)] = null);

(statearr_18307_18331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (4))){
var inst_18286 = (state_18304[(7)]);
var inst_18286__$1 = (state_18304[(2)]);
var inst_18287 = (inst_18286__$1 == null);
var state_18304__$1 = (function (){var statearr_18308 = state_18304;
(statearr_18308[(7)] = inst_18286__$1);

return statearr_18308;
})();
if(cljs.core.truth_(inst_18287)){
var statearr_18309_18332 = state_18304__$1;
(statearr_18309_18332[(1)] = (5));

} else {
var statearr_18310_18333 = state_18304__$1;
(statearr_18310_18333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (6))){
var inst_18286 = (state_18304[(7)]);
var inst_18291 = p.call(null,inst_18286);
var state_18304__$1 = state_18304;
if(cljs.core.truth_(inst_18291)){
var statearr_18311_18334 = state_18304__$1;
(statearr_18311_18334[(1)] = (8));

} else {
var statearr_18312_18335 = state_18304__$1;
(statearr_18312_18335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (3))){
var inst_18302 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18304__$1,inst_18302);
} else {
if((state_val_18305 === (2))){
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18304__$1,(4),ch);
} else {
if((state_val_18305 === (11))){
var inst_18294 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
var statearr_18313_18336 = state_18304__$1;
(statearr_18313_18336[(2)] = inst_18294);

(statearr_18313_18336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (9))){
var state_18304__$1 = state_18304;
var statearr_18314_18337 = state_18304__$1;
(statearr_18314_18337[(2)] = null);

(statearr_18314_18337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (5))){
var inst_18289 = cljs.core.async.close_BANG_.call(null,out);
var state_18304__$1 = state_18304;
var statearr_18315_18338 = state_18304__$1;
(statearr_18315_18338[(2)] = inst_18289);

(statearr_18315_18338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (10))){
var inst_18297 = (state_18304[(2)]);
var state_18304__$1 = (function (){var statearr_18316 = state_18304;
(statearr_18316[(8)] = inst_18297);

return statearr_18316;
})();
var statearr_18317_18339 = state_18304__$1;
(statearr_18317_18339[(2)] = null);

(statearr_18317_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (8))){
var inst_18286 = (state_18304[(7)]);
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18304__$1,(11),out,inst_18286);
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
});})(c__16023__auto___18329,out))
;
return ((function (switch__15911__auto__,c__16023__auto___18329,out){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18321 = [null,null,null,null,null,null,null,null,null];
(statearr_18321[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18321[(1)] = (1));

return statearr_18321;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18304){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18322){if((e18322 instanceof Object)){
var ex__15915__auto__ = e18322;
var statearr_18323_18340 = state_18304;
(statearr_18323_18340[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18341 = state_18304;
state_18304 = G__18341;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18329,out))
})();
var state__16025__auto__ = (function (){var statearr_18324 = f__16024__auto__.call(null);
(statearr_18324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18329);

return statearr_18324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18329,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18342 = [];
var len__10353__auto___18345 = arguments.length;
var i__10354__auto___18346 = (0);
while(true){
if((i__10354__auto___18346 < len__10353__auto___18345)){
args18342.push((arguments[i__10354__auto___18346]));

var G__18347 = (i__10354__auto___18346 + (1));
i__10354__auto___18346 = G__18347;
continue;
} else {
}
break;
}

var G__18344 = args18342.length;
switch (G__18344) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18342.length)].join('')));

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
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__){
return (function (state_18514){
var state_val_18515 = (state_18514[(1)]);
if((state_val_18515 === (7))){
var inst_18510 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18516_18557 = state_18514__$1;
(statearr_18516_18557[(2)] = inst_18510);

(statearr_18516_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (20))){
var inst_18480 = (state_18514[(7)]);
var inst_18491 = (state_18514[(2)]);
var inst_18492 = cljs.core.next.call(null,inst_18480);
var inst_18466 = inst_18492;
var inst_18467 = null;
var inst_18468 = (0);
var inst_18469 = (0);
var state_18514__$1 = (function (){var statearr_18517 = state_18514;
(statearr_18517[(8)] = inst_18491);

(statearr_18517[(9)] = inst_18469);

(statearr_18517[(10)] = inst_18468);

(statearr_18517[(11)] = inst_18467);

(statearr_18517[(12)] = inst_18466);

return statearr_18517;
})();
var statearr_18518_18558 = state_18514__$1;
(statearr_18518_18558[(2)] = null);

(statearr_18518_18558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (1))){
var state_18514__$1 = state_18514;
var statearr_18519_18559 = state_18514__$1;
(statearr_18519_18559[(2)] = null);

(statearr_18519_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (4))){
var inst_18455 = (state_18514[(13)]);
var inst_18455__$1 = (state_18514[(2)]);
var inst_18456 = (inst_18455__$1 == null);
var state_18514__$1 = (function (){var statearr_18520 = state_18514;
(statearr_18520[(13)] = inst_18455__$1);

return statearr_18520;
})();
if(cljs.core.truth_(inst_18456)){
var statearr_18521_18560 = state_18514__$1;
(statearr_18521_18560[(1)] = (5));

} else {
var statearr_18522_18561 = state_18514__$1;
(statearr_18522_18561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (15))){
var state_18514__$1 = state_18514;
var statearr_18526_18562 = state_18514__$1;
(statearr_18526_18562[(2)] = null);

(statearr_18526_18562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (21))){
var state_18514__$1 = state_18514;
var statearr_18527_18563 = state_18514__$1;
(statearr_18527_18563[(2)] = null);

(statearr_18527_18563[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (13))){
var inst_18469 = (state_18514[(9)]);
var inst_18468 = (state_18514[(10)]);
var inst_18467 = (state_18514[(11)]);
var inst_18466 = (state_18514[(12)]);
var inst_18476 = (state_18514[(2)]);
var inst_18477 = (inst_18469 + (1));
var tmp18523 = inst_18468;
var tmp18524 = inst_18467;
var tmp18525 = inst_18466;
var inst_18466__$1 = tmp18525;
var inst_18467__$1 = tmp18524;
var inst_18468__$1 = tmp18523;
var inst_18469__$1 = inst_18477;
var state_18514__$1 = (function (){var statearr_18528 = state_18514;
(statearr_18528[(9)] = inst_18469__$1);

(statearr_18528[(14)] = inst_18476);

(statearr_18528[(10)] = inst_18468__$1);

(statearr_18528[(11)] = inst_18467__$1);

(statearr_18528[(12)] = inst_18466__$1);

return statearr_18528;
})();
var statearr_18529_18564 = state_18514__$1;
(statearr_18529_18564[(2)] = null);

(statearr_18529_18564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (22))){
var state_18514__$1 = state_18514;
var statearr_18530_18565 = state_18514__$1;
(statearr_18530_18565[(2)] = null);

(statearr_18530_18565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (6))){
var inst_18455 = (state_18514[(13)]);
var inst_18464 = f.call(null,inst_18455);
var inst_18465 = cljs.core.seq.call(null,inst_18464);
var inst_18466 = inst_18465;
var inst_18467 = null;
var inst_18468 = (0);
var inst_18469 = (0);
var state_18514__$1 = (function (){var statearr_18531 = state_18514;
(statearr_18531[(9)] = inst_18469);

(statearr_18531[(10)] = inst_18468);

(statearr_18531[(11)] = inst_18467);

(statearr_18531[(12)] = inst_18466);

return statearr_18531;
})();
var statearr_18532_18566 = state_18514__$1;
(statearr_18532_18566[(2)] = null);

(statearr_18532_18566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (17))){
var inst_18480 = (state_18514[(7)]);
var inst_18484 = cljs.core.chunk_first.call(null,inst_18480);
var inst_18485 = cljs.core.chunk_rest.call(null,inst_18480);
var inst_18486 = cljs.core.count.call(null,inst_18484);
var inst_18466 = inst_18485;
var inst_18467 = inst_18484;
var inst_18468 = inst_18486;
var inst_18469 = (0);
var state_18514__$1 = (function (){var statearr_18533 = state_18514;
(statearr_18533[(9)] = inst_18469);

(statearr_18533[(10)] = inst_18468);

(statearr_18533[(11)] = inst_18467);

(statearr_18533[(12)] = inst_18466);

return statearr_18533;
})();
var statearr_18534_18567 = state_18514__$1;
(statearr_18534_18567[(2)] = null);

(statearr_18534_18567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (3))){
var inst_18512 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18514__$1,inst_18512);
} else {
if((state_val_18515 === (12))){
var inst_18500 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18535_18568 = state_18514__$1;
(statearr_18535_18568[(2)] = inst_18500);

(statearr_18535_18568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (2))){
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18514__$1,(4),in$);
} else {
if((state_val_18515 === (23))){
var inst_18508 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18536_18569 = state_18514__$1;
(statearr_18536_18569[(2)] = inst_18508);

(statearr_18536_18569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (19))){
var inst_18495 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18537_18570 = state_18514__$1;
(statearr_18537_18570[(2)] = inst_18495);

(statearr_18537_18570[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (11))){
var inst_18480 = (state_18514[(7)]);
var inst_18466 = (state_18514[(12)]);
var inst_18480__$1 = cljs.core.seq.call(null,inst_18466);
var state_18514__$1 = (function (){var statearr_18538 = state_18514;
(statearr_18538[(7)] = inst_18480__$1);

return statearr_18538;
})();
if(inst_18480__$1){
var statearr_18539_18571 = state_18514__$1;
(statearr_18539_18571[(1)] = (14));

} else {
var statearr_18540_18572 = state_18514__$1;
(statearr_18540_18572[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (9))){
var inst_18502 = (state_18514[(2)]);
var inst_18503 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18514__$1 = (function (){var statearr_18541 = state_18514;
(statearr_18541[(15)] = inst_18502);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18503)){
var statearr_18542_18573 = state_18514__$1;
(statearr_18542_18573[(1)] = (21));

} else {
var statearr_18543_18574 = state_18514__$1;
(statearr_18543_18574[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (5))){
var inst_18458 = cljs.core.async.close_BANG_.call(null,out);
var state_18514__$1 = state_18514;
var statearr_18544_18575 = state_18514__$1;
(statearr_18544_18575[(2)] = inst_18458);

(statearr_18544_18575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (14))){
var inst_18480 = (state_18514[(7)]);
var inst_18482 = cljs.core.chunked_seq_QMARK_.call(null,inst_18480);
var state_18514__$1 = state_18514;
if(inst_18482){
var statearr_18545_18576 = state_18514__$1;
(statearr_18545_18576[(1)] = (17));

} else {
var statearr_18546_18577 = state_18514__$1;
(statearr_18546_18577[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (16))){
var inst_18498 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18547_18578 = state_18514__$1;
(statearr_18547_18578[(2)] = inst_18498);

(statearr_18547_18578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (10))){
var inst_18469 = (state_18514[(9)]);
var inst_18467 = (state_18514[(11)]);
var inst_18474 = cljs.core._nth.call(null,inst_18467,inst_18469);
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18514__$1,(13),out,inst_18474);
} else {
if((state_val_18515 === (18))){
var inst_18480 = (state_18514[(7)]);
var inst_18489 = cljs.core.first.call(null,inst_18480);
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18514__$1,(20),out,inst_18489);
} else {
if((state_val_18515 === (8))){
var inst_18469 = (state_18514[(9)]);
var inst_18468 = (state_18514[(10)]);
var inst_18471 = (inst_18469 < inst_18468);
var inst_18472 = inst_18471;
var state_18514__$1 = state_18514;
if(cljs.core.truth_(inst_18472)){
var statearr_18548_18579 = state_18514__$1;
(statearr_18548_18579[(1)] = (10));

} else {
var statearr_18549_18580 = state_18514__$1;
(statearr_18549_18580[(1)] = (11));

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
});})(c__16023__auto__))
;
return ((function (switch__15911__auto__,c__16023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15912__auto____0 = (function (){
var statearr_18553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18553[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15912__auto__);

(statearr_18553[(1)] = (1));

return statearr_18553;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15912__auto____1 = (function (state_18514){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18554){if((e18554 instanceof Object)){
var ex__15915__auto__ = e18554;
var statearr_18555_18581 = state_18514;
(statearr_18555_18581[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18582 = state_18514;
state_18514 = G__18582;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15912__auto__ = function(state_18514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15912__auto____1.call(this,state_18514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__))
})();
var state__16025__auto__ = (function (){var statearr_18556 = f__16024__auto__.call(null);
(statearr_18556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_18556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__))
);

return c__16023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18583 = [];
var len__10353__auto___18586 = arguments.length;
var i__10354__auto___18587 = (0);
while(true){
if((i__10354__auto___18587 < len__10353__auto___18586)){
args18583.push((arguments[i__10354__auto___18587]));

var G__18588 = (i__10354__auto___18587 + (1));
i__10354__auto___18587 = G__18588;
continue;
} else {
}
break;
}

var G__18585 = args18583.length;
switch (G__18585) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18583.length)].join('')));

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
var args18590 = [];
var len__10353__auto___18593 = arguments.length;
var i__10354__auto___18594 = (0);
while(true){
if((i__10354__auto___18594 < len__10353__auto___18593)){
args18590.push((arguments[i__10354__auto___18594]));

var G__18595 = (i__10354__auto___18594 + (1));
i__10354__auto___18594 = G__18595;
continue;
} else {
}
break;
}

var G__18592 = args18590.length;
switch (G__18592) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18590.length)].join('')));

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
var args18597 = [];
var len__10353__auto___18648 = arguments.length;
var i__10354__auto___18649 = (0);
while(true){
if((i__10354__auto___18649 < len__10353__auto___18648)){
args18597.push((arguments[i__10354__auto___18649]));

var G__18650 = (i__10354__auto___18649 + (1));
i__10354__auto___18649 = G__18650;
continue;
} else {
}
break;
}

var G__18599 = args18597.length;
switch (G__18599) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18597.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16023__auto___18652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18652,out){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18652,out){
return (function (state_18623){
var state_val_18624 = (state_18623[(1)]);
if((state_val_18624 === (7))){
var inst_18618 = (state_18623[(2)]);
var state_18623__$1 = state_18623;
var statearr_18625_18653 = state_18623__$1;
(statearr_18625_18653[(2)] = inst_18618);

(statearr_18625_18653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (1))){
var inst_18600 = null;
var state_18623__$1 = (function (){var statearr_18626 = state_18623;
(statearr_18626[(7)] = inst_18600);

return statearr_18626;
})();
var statearr_18627_18654 = state_18623__$1;
(statearr_18627_18654[(2)] = null);

(statearr_18627_18654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (4))){
var inst_18603 = (state_18623[(8)]);
var inst_18603__$1 = (state_18623[(2)]);
var inst_18604 = (inst_18603__$1 == null);
var inst_18605 = cljs.core.not.call(null,inst_18604);
var state_18623__$1 = (function (){var statearr_18628 = state_18623;
(statearr_18628[(8)] = inst_18603__$1);

return statearr_18628;
})();
if(inst_18605){
var statearr_18629_18655 = state_18623__$1;
(statearr_18629_18655[(1)] = (5));

} else {
var statearr_18630_18656 = state_18623__$1;
(statearr_18630_18656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (6))){
var state_18623__$1 = state_18623;
var statearr_18631_18657 = state_18623__$1;
(statearr_18631_18657[(2)] = null);

(statearr_18631_18657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (3))){
var inst_18620 = (state_18623[(2)]);
var inst_18621 = cljs.core.async.close_BANG_.call(null,out);
var state_18623__$1 = (function (){var statearr_18632 = state_18623;
(statearr_18632[(9)] = inst_18620);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18623__$1,inst_18621);
} else {
if((state_val_18624 === (2))){
var state_18623__$1 = state_18623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18623__$1,(4),ch);
} else {
if((state_val_18624 === (11))){
var inst_18603 = (state_18623[(8)]);
var inst_18612 = (state_18623[(2)]);
var inst_18600 = inst_18603;
var state_18623__$1 = (function (){var statearr_18633 = state_18623;
(statearr_18633[(7)] = inst_18600);

(statearr_18633[(10)] = inst_18612);

return statearr_18633;
})();
var statearr_18634_18658 = state_18623__$1;
(statearr_18634_18658[(2)] = null);

(statearr_18634_18658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (9))){
var inst_18603 = (state_18623[(8)]);
var state_18623__$1 = state_18623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18623__$1,(11),out,inst_18603);
} else {
if((state_val_18624 === (5))){
var inst_18600 = (state_18623[(7)]);
var inst_18603 = (state_18623[(8)]);
var inst_18607 = cljs.core._EQ_.call(null,inst_18603,inst_18600);
var state_18623__$1 = state_18623;
if(inst_18607){
var statearr_18636_18659 = state_18623__$1;
(statearr_18636_18659[(1)] = (8));

} else {
var statearr_18637_18660 = state_18623__$1;
(statearr_18637_18660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (10))){
var inst_18615 = (state_18623[(2)]);
var state_18623__$1 = state_18623;
var statearr_18638_18661 = state_18623__$1;
(statearr_18638_18661[(2)] = inst_18615);

(statearr_18638_18661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18624 === (8))){
var inst_18600 = (state_18623[(7)]);
var tmp18635 = inst_18600;
var inst_18600__$1 = tmp18635;
var state_18623__$1 = (function (){var statearr_18639 = state_18623;
(statearr_18639[(7)] = inst_18600__$1);

return statearr_18639;
})();
var statearr_18640_18662 = state_18623__$1;
(statearr_18640_18662[(2)] = null);

(statearr_18640_18662[(1)] = (2));


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
});})(c__16023__auto___18652,out))
;
return ((function (switch__15911__auto__,c__16023__auto___18652,out){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18644[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18644[(1)] = (1));

return statearr_18644;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18623){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18645){if((e18645 instanceof Object)){
var ex__15915__auto__ = e18645;
var statearr_18646_18663 = state_18623;
(statearr_18646_18663[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18664 = state_18623;
state_18623 = G__18664;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18652,out))
})();
var state__16025__auto__ = (function (){var statearr_18647 = f__16024__auto__.call(null);
(statearr_18647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18652);

return statearr_18647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18652,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18665 = [];
var len__10353__auto___18735 = arguments.length;
var i__10354__auto___18736 = (0);
while(true){
if((i__10354__auto___18736 < len__10353__auto___18735)){
args18665.push((arguments[i__10354__auto___18736]));

var G__18737 = (i__10354__auto___18736 + (1));
i__10354__auto___18736 = G__18737;
continue;
} else {
}
break;
}

var G__18667 = args18665.length;
switch (G__18667) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18665.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16023__auto___18739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18739,out){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18739,out){
return (function (state_18705){
var state_val_18706 = (state_18705[(1)]);
if((state_val_18706 === (7))){
var inst_18701 = (state_18705[(2)]);
var state_18705__$1 = state_18705;
var statearr_18707_18740 = state_18705__$1;
(statearr_18707_18740[(2)] = inst_18701);

(statearr_18707_18740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (1))){
var inst_18668 = (new Array(n));
var inst_18669 = inst_18668;
var inst_18670 = (0);
var state_18705__$1 = (function (){var statearr_18708 = state_18705;
(statearr_18708[(7)] = inst_18670);

(statearr_18708[(8)] = inst_18669);

return statearr_18708;
})();
var statearr_18709_18741 = state_18705__$1;
(statearr_18709_18741[(2)] = null);

(statearr_18709_18741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (4))){
var inst_18673 = (state_18705[(9)]);
var inst_18673__$1 = (state_18705[(2)]);
var inst_18674 = (inst_18673__$1 == null);
var inst_18675 = cljs.core.not.call(null,inst_18674);
var state_18705__$1 = (function (){var statearr_18710 = state_18705;
(statearr_18710[(9)] = inst_18673__$1);

return statearr_18710;
})();
if(inst_18675){
var statearr_18711_18742 = state_18705__$1;
(statearr_18711_18742[(1)] = (5));

} else {
var statearr_18712_18743 = state_18705__$1;
(statearr_18712_18743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (15))){
var inst_18695 = (state_18705[(2)]);
var state_18705__$1 = state_18705;
var statearr_18713_18744 = state_18705__$1;
(statearr_18713_18744[(2)] = inst_18695);

(statearr_18713_18744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (13))){
var state_18705__$1 = state_18705;
var statearr_18714_18745 = state_18705__$1;
(statearr_18714_18745[(2)] = null);

(statearr_18714_18745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (6))){
var inst_18670 = (state_18705[(7)]);
var inst_18691 = (inst_18670 > (0));
var state_18705__$1 = state_18705;
if(cljs.core.truth_(inst_18691)){
var statearr_18715_18746 = state_18705__$1;
(statearr_18715_18746[(1)] = (12));

} else {
var statearr_18716_18747 = state_18705__$1;
(statearr_18716_18747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (3))){
var inst_18703 = (state_18705[(2)]);
var state_18705__$1 = state_18705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18705__$1,inst_18703);
} else {
if((state_val_18706 === (12))){
var inst_18669 = (state_18705[(8)]);
var inst_18693 = cljs.core.vec.call(null,inst_18669);
var state_18705__$1 = state_18705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18705__$1,(15),out,inst_18693);
} else {
if((state_val_18706 === (2))){
var state_18705__$1 = state_18705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18705__$1,(4),ch);
} else {
if((state_val_18706 === (11))){
var inst_18685 = (state_18705[(2)]);
var inst_18686 = (new Array(n));
var inst_18669 = inst_18686;
var inst_18670 = (0);
var state_18705__$1 = (function (){var statearr_18717 = state_18705;
(statearr_18717[(10)] = inst_18685);

(statearr_18717[(7)] = inst_18670);

(statearr_18717[(8)] = inst_18669);

return statearr_18717;
})();
var statearr_18718_18748 = state_18705__$1;
(statearr_18718_18748[(2)] = null);

(statearr_18718_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (9))){
var inst_18669 = (state_18705[(8)]);
var inst_18683 = cljs.core.vec.call(null,inst_18669);
var state_18705__$1 = state_18705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18705__$1,(11),out,inst_18683);
} else {
if((state_val_18706 === (5))){
var inst_18678 = (state_18705[(11)]);
var inst_18673 = (state_18705[(9)]);
var inst_18670 = (state_18705[(7)]);
var inst_18669 = (state_18705[(8)]);
var inst_18677 = (inst_18669[inst_18670] = inst_18673);
var inst_18678__$1 = (inst_18670 + (1));
var inst_18679 = (inst_18678__$1 < n);
var state_18705__$1 = (function (){var statearr_18719 = state_18705;
(statearr_18719[(11)] = inst_18678__$1);

(statearr_18719[(12)] = inst_18677);

return statearr_18719;
})();
if(cljs.core.truth_(inst_18679)){
var statearr_18720_18749 = state_18705__$1;
(statearr_18720_18749[(1)] = (8));

} else {
var statearr_18721_18750 = state_18705__$1;
(statearr_18721_18750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (14))){
var inst_18698 = (state_18705[(2)]);
var inst_18699 = cljs.core.async.close_BANG_.call(null,out);
var state_18705__$1 = (function (){var statearr_18723 = state_18705;
(statearr_18723[(13)] = inst_18698);

return statearr_18723;
})();
var statearr_18724_18751 = state_18705__$1;
(statearr_18724_18751[(2)] = inst_18699);

(statearr_18724_18751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (10))){
var inst_18689 = (state_18705[(2)]);
var state_18705__$1 = state_18705;
var statearr_18725_18752 = state_18705__$1;
(statearr_18725_18752[(2)] = inst_18689);

(statearr_18725_18752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18706 === (8))){
var inst_18678 = (state_18705[(11)]);
var inst_18669 = (state_18705[(8)]);
var tmp18722 = inst_18669;
var inst_18669__$1 = tmp18722;
var inst_18670 = inst_18678;
var state_18705__$1 = (function (){var statearr_18726 = state_18705;
(statearr_18726[(7)] = inst_18670);

(statearr_18726[(8)] = inst_18669__$1);

return statearr_18726;
})();
var statearr_18727_18753 = state_18705__$1;
(statearr_18727_18753[(2)] = null);

(statearr_18727_18753[(1)] = (2));


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
});})(c__16023__auto___18739,out))
;
return ((function (switch__15911__auto__,c__16023__auto___18739,out){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18731[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18731[(1)] = (1));

return statearr_18731;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18705){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18732){if((e18732 instanceof Object)){
var ex__15915__auto__ = e18732;
var statearr_18733_18754 = state_18705;
(statearr_18733_18754[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18755 = state_18705;
state_18705 = G__18755;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18739,out))
})();
var state__16025__auto__ = (function (){var statearr_18734 = f__16024__auto__.call(null);
(statearr_18734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18739);

return statearr_18734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18739,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18756 = [];
var len__10353__auto___18830 = arguments.length;
var i__10354__auto___18831 = (0);
while(true){
if((i__10354__auto___18831 < len__10353__auto___18830)){
args18756.push((arguments[i__10354__auto___18831]));

var G__18832 = (i__10354__auto___18831 + (1));
i__10354__auto___18831 = G__18832;
continue;
} else {
}
break;
}

var G__18758 = args18756.length;
switch (G__18758) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18756.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16023__auto___18834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___18834,out){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___18834,out){
return (function (state_18800){
var state_val_18801 = (state_18800[(1)]);
if((state_val_18801 === (7))){
var inst_18796 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18802_18835 = state_18800__$1;
(statearr_18802_18835[(2)] = inst_18796);

(statearr_18802_18835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (1))){
var inst_18759 = [];
var inst_18760 = inst_18759;
var inst_18761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18800__$1 = (function (){var statearr_18803 = state_18800;
(statearr_18803[(7)] = inst_18760);

(statearr_18803[(8)] = inst_18761);

return statearr_18803;
})();
var statearr_18804_18836 = state_18800__$1;
(statearr_18804_18836[(2)] = null);

(statearr_18804_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (4))){
var inst_18764 = (state_18800[(9)]);
var inst_18764__$1 = (state_18800[(2)]);
var inst_18765 = (inst_18764__$1 == null);
var inst_18766 = cljs.core.not.call(null,inst_18765);
var state_18800__$1 = (function (){var statearr_18805 = state_18800;
(statearr_18805[(9)] = inst_18764__$1);

return statearr_18805;
})();
if(inst_18766){
var statearr_18806_18837 = state_18800__$1;
(statearr_18806_18837[(1)] = (5));

} else {
var statearr_18807_18838 = state_18800__$1;
(statearr_18807_18838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (15))){
var inst_18790 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18808_18839 = state_18800__$1;
(statearr_18808_18839[(2)] = inst_18790);

(statearr_18808_18839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (13))){
var state_18800__$1 = state_18800;
var statearr_18809_18840 = state_18800__$1;
(statearr_18809_18840[(2)] = null);

(statearr_18809_18840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (6))){
var inst_18760 = (state_18800[(7)]);
var inst_18785 = inst_18760.length;
var inst_18786 = (inst_18785 > (0));
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18786)){
var statearr_18810_18841 = state_18800__$1;
(statearr_18810_18841[(1)] = (12));

} else {
var statearr_18811_18842 = state_18800__$1;
(statearr_18811_18842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (3))){
var inst_18798 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18800__$1,inst_18798);
} else {
if((state_val_18801 === (12))){
var inst_18760 = (state_18800[(7)]);
var inst_18788 = cljs.core.vec.call(null,inst_18760);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18800__$1,(15),out,inst_18788);
} else {
if((state_val_18801 === (2))){
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18800__$1,(4),ch);
} else {
if((state_val_18801 === (11))){
var inst_18768 = (state_18800[(10)]);
var inst_18764 = (state_18800[(9)]);
var inst_18778 = (state_18800[(2)]);
var inst_18779 = [];
var inst_18780 = inst_18779.push(inst_18764);
var inst_18760 = inst_18779;
var inst_18761 = inst_18768;
var state_18800__$1 = (function (){var statearr_18812 = state_18800;
(statearr_18812[(7)] = inst_18760);

(statearr_18812[(11)] = inst_18780);

(statearr_18812[(8)] = inst_18761);

(statearr_18812[(12)] = inst_18778);

return statearr_18812;
})();
var statearr_18813_18843 = state_18800__$1;
(statearr_18813_18843[(2)] = null);

(statearr_18813_18843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (9))){
var inst_18760 = (state_18800[(7)]);
var inst_18776 = cljs.core.vec.call(null,inst_18760);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18800__$1,(11),out,inst_18776);
} else {
if((state_val_18801 === (5))){
var inst_18768 = (state_18800[(10)]);
var inst_18764 = (state_18800[(9)]);
var inst_18761 = (state_18800[(8)]);
var inst_18768__$1 = f.call(null,inst_18764);
var inst_18769 = cljs.core._EQ_.call(null,inst_18768__$1,inst_18761);
var inst_18770 = cljs.core.keyword_identical_QMARK_.call(null,inst_18761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18771 = (inst_18769) || (inst_18770);
var state_18800__$1 = (function (){var statearr_18814 = state_18800;
(statearr_18814[(10)] = inst_18768__$1);

return statearr_18814;
})();
if(cljs.core.truth_(inst_18771)){
var statearr_18815_18844 = state_18800__$1;
(statearr_18815_18844[(1)] = (8));

} else {
var statearr_18816_18845 = state_18800__$1;
(statearr_18816_18845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (14))){
var inst_18793 = (state_18800[(2)]);
var inst_18794 = cljs.core.async.close_BANG_.call(null,out);
var state_18800__$1 = (function (){var statearr_18818 = state_18800;
(statearr_18818[(13)] = inst_18793);

return statearr_18818;
})();
var statearr_18819_18846 = state_18800__$1;
(statearr_18819_18846[(2)] = inst_18794);

(statearr_18819_18846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (10))){
var inst_18783 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18820_18847 = state_18800__$1;
(statearr_18820_18847[(2)] = inst_18783);

(statearr_18820_18847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (8))){
var inst_18768 = (state_18800[(10)]);
var inst_18764 = (state_18800[(9)]);
var inst_18760 = (state_18800[(7)]);
var inst_18773 = inst_18760.push(inst_18764);
var tmp18817 = inst_18760;
var inst_18760__$1 = tmp18817;
var inst_18761 = inst_18768;
var state_18800__$1 = (function (){var statearr_18821 = state_18800;
(statearr_18821[(7)] = inst_18760__$1);

(statearr_18821[(14)] = inst_18773);

(statearr_18821[(8)] = inst_18761);

return statearr_18821;
})();
var statearr_18822_18848 = state_18800__$1;
(statearr_18822_18848[(2)] = null);

(statearr_18822_18848[(1)] = (2));


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
});})(c__16023__auto___18834,out))
;
return ((function (switch__15911__auto__,c__16023__auto___18834,out){
return (function() {
var cljs$core$async$state_machine__15912__auto__ = null;
var cljs$core$async$state_machine__15912__auto____0 = (function (){
var statearr_18826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18826[(0)] = cljs$core$async$state_machine__15912__auto__);

(statearr_18826[(1)] = (1));

return statearr_18826;
});
var cljs$core$async$state_machine__15912__auto____1 = (function (state_18800){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18827){if((e18827 instanceof Object)){
var ex__15915__auto__ = e18827;
var statearr_18828_18849 = state_18800;
(statearr_18828_18849[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18850 = state_18800;
state_18800 = G__18850;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
cljs$core$async$state_machine__15912__auto__ = function(state_18800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15912__auto____1.call(this,state_18800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15912__auto____0;
cljs$core$async$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15912__auto____1;
return cljs$core$async$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___18834,out))
})();
var state__16025__auto__ = (function (){var statearr_18829 = f__16024__auto__.call(null);
(statearr_18829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___18834);

return statearr_18829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___18834,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map