// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17025 = [];
var len__10030__auto___17031 = arguments.length;
var i__10031__auto___17032 = (0);
while(true){
if((i__10031__auto___17032 < len__10030__auto___17031)){
args17025.push((arguments[i__10031__auto___17032]));

var G__17033 = (i__10031__auto___17032 + (1));
i__10031__auto___17032 = G__17033;
continue;
} else {
}
break;
}

var G__17027 = args17025.length;
switch (G__17027) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17025.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17028 = (function (f,blockable,meta17029){
this.f = f;
this.blockable = blockable;
this.meta17029 = meta17029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17030,meta17029__$1){
var self__ = this;
var _17030__$1 = this;
return (new cljs.core.async.t_cljs$core$async17028(self__.f,self__.blockable,meta17029__$1));
});

cljs.core.async.t_cljs$core$async17028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17030){
var self__ = this;
var _17030__$1 = this;
return self__.meta17029;
});

cljs.core.async.t_cljs$core$async17028.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17029","meta17029",-79188392,null)], null);
});

cljs.core.async.t_cljs$core$async17028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17028";

cljs.core.async.t_cljs$core$async17028.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async17028");
});

cljs.core.async.__GT_t_cljs$core$async17028 = (function cljs$core$async$__GT_t_cljs$core$async17028(f__$1,blockable__$1,meta17029){
return (new cljs.core.async.t_cljs$core$async17028(f__$1,blockable__$1,meta17029));
});

}

return (new cljs.core.async.t_cljs$core$async17028(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17037 = [];
var len__10030__auto___17040 = arguments.length;
var i__10031__auto___17041 = (0);
while(true){
if((i__10031__auto___17041 < len__10030__auto___17040)){
args17037.push((arguments[i__10031__auto___17041]));

var G__17042 = (i__10031__auto___17041 + (1));
i__10031__auto___17041 = G__17042;
continue;
} else {
}
break;
}

var G__17039 = args17037.length;
switch (G__17039) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17037.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args17044 = [];
var len__10030__auto___17047 = arguments.length;
var i__10031__auto___17048 = (0);
while(true){
if((i__10031__auto___17048 < len__10030__auto___17047)){
args17044.push((arguments[i__10031__auto___17048]));

var G__17049 = (i__10031__auto___17048 + (1));
i__10031__auto___17048 = G__17049;
continue;
} else {
}
break;
}

var G__17046 = args17044.length;
switch (G__17046) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17044.length)].join('')));

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
var args17051 = [];
var len__10030__auto___17054 = arguments.length;
var i__10031__auto___17055 = (0);
while(true){
if((i__10031__auto___17055 < len__10030__auto___17054)){
args17051.push((arguments[i__10031__auto___17055]));

var G__17056 = (i__10031__auto___17055 + (1));
i__10031__auto___17055 = G__17056;
continue;
} else {
}
break;
}

var G__17053 = args17051.length;
switch (G__17053) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17051.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17058 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17058);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17058,ret){
return (function (){
return fn1.call(null,val_17058);
});})(val_17058,ret))
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
var args17059 = [];
var len__10030__auto___17062 = arguments.length;
var i__10031__auto___17063 = (0);
while(true){
if((i__10031__auto___17063 < len__10030__auto___17062)){
args17059.push((arguments[i__10031__auto___17063]));

var G__17064 = (i__10031__auto___17063 + (1));
i__10031__auto___17063 = G__17064;
continue;
} else {
}
break;
}

var G__17061 = args17059.length;
switch (G__17061) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17059.length)].join('')));

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
var n__9840__auto___17066 = n;
var x_17067 = (0);
while(true){
if((x_17067 < n__9840__auto___17066)){
(a[x_17067] = (0));

var G__17068 = (x_17067 + (1));
x_17067 = G__17068;
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

var G__17069 = (i + (1));
i = G__17069;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17073 = (function (flag,meta17074){
this.flag = flag;
this.meta17074 = meta17074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17075,meta17074__$1){
var self__ = this;
var _17075__$1 = this;
return (new cljs.core.async.t_cljs$core$async17073(self__.flag,meta17074__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17075){
var self__ = this;
var _17075__$1 = this;
return self__.meta17074;
});})(flag))
;

cljs.core.async.t_cljs$core$async17073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17073.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17074","meta17074",-1396061494,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17073";

cljs.core.async.t_cljs$core$async17073.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async17073");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17073 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17073(flag__$1,meta17074){
return (new cljs.core.async.t_cljs$core$async17073(flag__$1,meta17074));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17073(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17079 = (function (flag,cb,meta17080){
this.flag = flag;
this.cb = cb;
this.meta17080 = meta17080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17081,meta17080__$1){
var self__ = this;
var _17081__$1 = this;
return (new cljs.core.async.t_cljs$core$async17079(self__.flag,self__.cb,meta17080__$1));
});

cljs.core.async.t_cljs$core$async17079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17081){
var self__ = this;
var _17081__$1 = this;
return self__.meta17080;
});

cljs.core.async.t_cljs$core$async17079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17080","meta17080",1672031605,null)], null);
});

cljs.core.async.t_cljs$core$async17079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17079";

cljs.core.async.t_cljs$core$async17079.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async17079");
});

cljs.core.async.__GT_t_cljs$core$async17079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17079(flag__$1,cb__$1,meta17080){
return (new cljs.core.async.t_cljs$core$async17079(flag__$1,cb__$1,meta17080));
});

}

return (new cljs.core.async.t_cljs$core$async17079(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17082_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17082_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17083_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17083_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8917__auto__ = wport;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17084 = (i + (1));
i = G__17084;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8917__auto__ = ret;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8905__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8905__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8905__auto__;
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
var args__10037__auto__ = [];
var len__10030__auto___17090 = arguments.length;
var i__10031__auto___17091 = (0);
while(true){
if((i__10031__auto___17091 < len__10030__auto___17090)){
args__10037__auto__.push((arguments[i__10031__auto___17091]));

var G__17092 = (i__10031__auto___17091 + (1));
i__10031__auto___17091 = G__17092;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((1) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10038__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17087){
var map__17088 = p__17087;
var map__17088__$1 = ((((!((map__17088 == null)))?((((map__17088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17088):map__17088);
var opts = map__17088__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17085){
var G__17086 = cljs.core.first.call(null,seq17085);
var seq17085__$1 = cljs.core.next.call(null,seq17085);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17086,seq17085__$1);
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
var args17093 = [];
var len__10030__auto___17143 = arguments.length;
var i__10031__auto___17144 = (0);
while(true){
if((i__10031__auto___17144 < len__10030__auto___17143)){
args17093.push((arguments[i__10031__auto___17144]));

var G__17145 = (i__10031__auto___17144 + (1));
i__10031__auto___17144 = G__17145;
continue;
} else {
}
break;
}

var G__17095 = args17093.length;
switch (G__17095) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17093.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16980__auto___17147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___17147){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___17147){
return (function (state_17119){
var state_val_17120 = (state_17119[(1)]);
if((state_val_17120 === (7))){
var inst_17115 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17121_17148 = state_17119__$1;
(statearr_17121_17148[(2)] = inst_17115);

(statearr_17121_17148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (1))){
var state_17119__$1 = state_17119;
var statearr_17122_17149 = state_17119__$1;
(statearr_17122_17149[(2)] = null);

(statearr_17122_17149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (4))){
var inst_17098 = (state_17119[(7)]);
var inst_17098__$1 = (state_17119[(2)]);
var inst_17099 = (inst_17098__$1 == null);
var state_17119__$1 = (function (){var statearr_17123 = state_17119;
(statearr_17123[(7)] = inst_17098__$1);

return statearr_17123;
})();
if(cljs.core.truth_(inst_17099)){
var statearr_17124_17150 = state_17119__$1;
(statearr_17124_17150[(1)] = (5));

} else {
var statearr_17125_17151 = state_17119__$1;
(statearr_17125_17151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (13))){
var state_17119__$1 = state_17119;
var statearr_17126_17152 = state_17119__$1;
(statearr_17126_17152[(2)] = null);

(statearr_17126_17152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (6))){
var inst_17098 = (state_17119[(7)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17119__$1,(11),to,inst_17098);
} else {
if((state_val_17120 === (3))){
var inst_17117 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17119__$1,inst_17117);
} else {
if((state_val_17120 === (12))){
var state_17119__$1 = state_17119;
var statearr_17127_17153 = state_17119__$1;
(statearr_17127_17153[(2)] = null);

(statearr_17127_17153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (2))){
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17119__$1,(4),from);
} else {
if((state_val_17120 === (11))){
var inst_17108 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
if(cljs.core.truth_(inst_17108)){
var statearr_17128_17154 = state_17119__$1;
(statearr_17128_17154[(1)] = (12));

} else {
var statearr_17129_17155 = state_17119__$1;
(statearr_17129_17155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (9))){
var state_17119__$1 = state_17119;
var statearr_17130_17156 = state_17119__$1;
(statearr_17130_17156[(2)] = null);

(statearr_17130_17156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (5))){
var state_17119__$1 = state_17119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17131_17157 = state_17119__$1;
(statearr_17131_17157[(1)] = (8));

} else {
var statearr_17132_17158 = state_17119__$1;
(statearr_17132_17158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (14))){
var inst_17113 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17133_17159 = state_17119__$1;
(statearr_17133_17159[(2)] = inst_17113);

(statearr_17133_17159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (10))){
var inst_17105 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17134_17160 = state_17119__$1;
(statearr_17134_17160[(2)] = inst_17105);

(statearr_17134_17160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (8))){
var inst_17102 = cljs.core.async.close_BANG_.call(null,to);
var state_17119__$1 = state_17119;
var statearr_17135_17161 = state_17119__$1;
(statearr_17135_17161[(2)] = inst_17102);

(statearr_17135_17161[(1)] = (10));


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
});})(c__16980__auto___17147))
;
return ((function (switch__16868__auto__,c__16980__auto___17147){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_17139 = [null,null,null,null,null,null,null,null];
(statearr_17139[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_17139[(1)] = (1));

return statearr_17139;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_17119){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17140){if((e17140 instanceof Object)){
var ex__16872__auto__ = e17140;
var statearr_17141_17162 = state_17119;
(statearr_17141_17162[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17163 = state_17119;
state_17119 = G__17163;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_17119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_17119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___17147))
})();
var state__16982__auto__ = (function (){var statearr_17142 = f__16981__auto__.call(null);
(statearr_17142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___17147);

return statearr_17142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___17147))
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
return (function (p__17351){
var vec__17352 = p__17351;
var v = cljs.core.nth.call(null,vec__17352,(0),null);
var p = cljs.core.nth.call(null,vec__17352,(1),null);
var job = vec__17352;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16980__auto___17538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___17538,res,vec__17352,v,p,job,jobs,results){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___17538,res,vec__17352,v,p,job,jobs,results){
return (function (state_17359){
var state_val_17360 = (state_17359[(1)]);
if((state_val_17360 === (1))){
var state_17359__$1 = state_17359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17359__$1,(2),res,v);
} else {
if((state_val_17360 === (2))){
var inst_17356 = (state_17359[(2)]);
var inst_17357 = cljs.core.async.close_BANG_.call(null,res);
var state_17359__$1 = (function (){var statearr_17361 = state_17359;
(statearr_17361[(7)] = inst_17356);

return statearr_17361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17359__$1,inst_17357);
} else {
return null;
}
}
});})(c__16980__auto___17538,res,vec__17352,v,p,job,jobs,results))
;
return ((function (switch__16868__auto__,c__16980__auto___17538,res,vec__17352,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0 = (function (){
var statearr_17365 = [null,null,null,null,null,null,null,null];
(statearr_17365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__);

(statearr_17365[(1)] = (1));

return statearr_17365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1 = (function (state_17359){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17366){if((e17366 instanceof Object)){
var ex__16872__auto__ = e17366;
var statearr_17367_17539 = state_17359;
(statearr_17367_17539[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17540 = state_17359;
state_17359 = G__17540;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = function(state_17359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1.call(this,state_17359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___17538,res,vec__17352,v,p,job,jobs,results))
})();
var state__16982__auto__ = (function (){var statearr_17368 = f__16981__auto__.call(null);
(statearr_17368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___17538);

return statearr_17368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___17538,res,vec__17352,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17369){
var vec__17370 = p__17369;
var v = cljs.core.nth.call(null,vec__17370,(0),null);
var p = cljs.core.nth.call(null,vec__17370,(1),null);
var job = vec__17370;
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
var n__9840__auto___17541 = n;
var __17542 = (0);
while(true){
if((__17542 < n__9840__auto___17541)){
var G__17373_17543 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17373_17543) {
case "compute":
var c__16980__auto___17545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17542,c__16980__auto___17545,G__17373_17543,n__9840__auto___17541,jobs,results,process,async){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (__17542,c__16980__auto___17545,G__17373_17543,n__9840__auto___17541,jobs,results,process,async){
return (function (state_17386){
var state_val_17387 = (state_17386[(1)]);
if((state_val_17387 === (1))){
var state_17386__$1 = state_17386;
var statearr_17388_17546 = state_17386__$1;
(statearr_17388_17546[(2)] = null);

(statearr_17388_17546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (2))){
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17386__$1,(4),jobs);
} else {
if((state_val_17387 === (3))){
var inst_17384 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17386__$1,inst_17384);
} else {
if((state_val_17387 === (4))){
var inst_17376 = (state_17386[(2)]);
var inst_17377 = process.call(null,inst_17376);
var state_17386__$1 = state_17386;
if(cljs.core.truth_(inst_17377)){
var statearr_17389_17547 = state_17386__$1;
(statearr_17389_17547[(1)] = (5));

} else {
var statearr_17390_17548 = state_17386__$1;
(statearr_17390_17548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (5))){
var state_17386__$1 = state_17386;
var statearr_17391_17549 = state_17386__$1;
(statearr_17391_17549[(2)] = null);

(statearr_17391_17549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (6))){
var state_17386__$1 = state_17386;
var statearr_17392_17550 = state_17386__$1;
(statearr_17392_17550[(2)] = null);

(statearr_17392_17550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (7))){
var inst_17382 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
var statearr_17393_17551 = state_17386__$1;
(statearr_17393_17551[(2)] = inst_17382);

(statearr_17393_17551[(1)] = (3));


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
});})(__17542,c__16980__auto___17545,G__17373_17543,n__9840__auto___17541,jobs,results,process,async))
;
return ((function (__17542,switch__16868__auto__,c__16980__auto___17545,G__17373_17543,n__9840__auto___17541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0 = (function (){
var statearr_17397 = [null,null,null,null,null,null,null];
(statearr_17397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__);

(statearr_17397[(1)] = (1));

return statearr_17397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1 = (function (state_17386){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17398){if((e17398 instanceof Object)){
var ex__16872__auto__ = e17398;
var statearr_17399_17552 = state_17386;
(statearr_17399_17552[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17553 = state_17386;
state_17386 = G__17553;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = function(state_17386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1.call(this,state_17386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__;
})()
;})(__17542,switch__16868__auto__,c__16980__auto___17545,G__17373_17543,n__9840__auto___17541,jobs,results,process,async))
})();
var state__16982__auto__ = (function (){var statearr_17400 = f__16981__auto__.call(null);
(statearr_17400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___17545);

return statearr_17400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(__17542,c__16980__auto___17545,G__17373_17543,n__9840__auto___17541,jobs,results,process,async))
);


break;
case "async":
var c__16980__auto___17554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17542,c__16980__auto___17554,G__17373_17543,n__9840__auto___17541,jobs,results,process,async){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (__17542,c__16980__auto___17554,G__17373_17543,n__9840__auto___17541,jobs,results,process,async){
return (function (state_17413){
var state_val_17414 = (state_17413[(1)]);
if((state_val_17414 === (1))){
var state_17413__$1 = state_17413;
var statearr_17415_17555 = state_17413__$1;
(statearr_17415_17555[(2)] = null);

(statearr_17415_17555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (2))){
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17413__$1,(4),jobs);
} else {
if((state_val_17414 === (3))){
var inst_17411 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17413__$1,inst_17411);
} else {
if((state_val_17414 === (4))){
var inst_17403 = (state_17413[(2)]);
var inst_17404 = async.call(null,inst_17403);
var state_17413__$1 = state_17413;
if(cljs.core.truth_(inst_17404)){
var statearr_17416_17556 = state_17413__$1;
(statearr_17416_17556[(1)] = (5));

} else {
var statearr_17417_17557 = state_17413__$1;
(statearr_17417_17557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (5))){
var state_17413__$1 = state_17413;
var statearr_17418_17558 = state_17413__$1;
(statearr_17418_17558[(2)] = null);

(statearr_17418_17558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (6))){
var state_17413__$1 = state_17413;
var statearr_17419_17559 = state_17413__$1;
(statearr_17419_17559[(2)] = null);

(statearr_17419_17559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (7))){
var inst_17409 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17420_17560 = state_17413__$1;
(statearr_17420_17560[(2)] = inst_17409);

(statearr_17420_17560[(1)] = (3));


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
});})(__17542,c__16980__auto___17554,G__17373_17543,n__9840__auto___17541,jobs,results,process,async))
;
return ((function (__17542,switch__16868__auto__,c__16980__auto___17554,G__17373_17543,n__9840__auto___17541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0 = (function (){
var statearr_17424 = [null,null,null,null,null,null,null];
(statearr_17424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__);

(statearr_17424[(1)] = (1));

return statearr_17424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1 = (function (state_17413){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17425){if((e17425 instanceof Object)){
var ex__16872__auto__ = e17425;
var statearr_17426_17561 = state_17413;
(statearr_17426_17561[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17562 = state_17413;
state_17413 = G__17562;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = function(state_17413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1.call(this,state_17413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__;
})()
;})(__17542,switch__16868__auto__,c__16980__auto___17554,G__17373_17543,n__9840__auto___17541,jobs,results,process,async))
})();
var state__16982__auto__ = (function (){var statearr_17427 = f__16981__auto__.call(null);
(statearr_17427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___17554);

return statearr_17427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(__17542,c__16980__auto___17554,G__17373_17543,n__9840__auto___17541,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__17563 = (__17542 + (1));
__17542 = G__17563;
continue;
} else {
}
break;
}

var c__16980__auto___17564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___17564,jobs,results,process,async){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___17564,jobs,results,process,async){
return (function (state_17449){
var state_val_17450 = (state_17449[(1)]);
if((state_val_17450 === (1))){
var state_17449__$1 = state_17449;
var statearr_17451_17565 = state_17449__$1;
(statearr_17451_17565[(2)] = null);

(statearr_17451_17565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (2))){
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17449__$1,(4),from);
} else {
if((state_val_17450 === (3))){
var inst_17447 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17449__$1,inst_17447);
} else {
if((state_val_17450 === (4))){
var inst_17430 = (state_17449[(7)]);
var inst_17430__$1 = (state_17449[(2)]);
var inst_17431 = (inst_17430__$1 == null);
var state_17449__$1 = (function (){var statearr_17452 = state_17449;
(statearr_17452[(7)] = inst_17430__$1);

return statearr_17452;
})();
if(cljs.core.truth_(inst_17431)){
var statearr_17453_17566 = state_17449__$1;
(statearr_17453_17566[(1)] = (5));

} else {
var statearr_17454_17567 = state_17449__$1;
(statearr_17454_17567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (5))){
var inst_17433 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17449__$1 = state_17449;
var statearr_17455_17568 = state_17449__$1;
(statearr_17455_17568[(2)] = inst_17433);

(statearr_17455_17568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (6))){
var inst_17435 = (state_17449[(8)]);
var inst_17430 = (state_17449[(7)]);
var inst_17435__$1 = cljs.core.async.chan.call(null,(1));
var inst_17436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17437 = [inst_17430,inst_17435__$1];
var inst_17438 = (new cljs.core.PersistentVector(null,2,(5),inst_17436,inst_17437,null));
var state_17449__$1 = (function (){var statearr_17456 = state_17449;
(statearr_17456[(8)] = inst_17435__$1);

return statearr_17456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17449__$1,(8),jobs,inst_17438);
} else {
if((state_val_17450 === (7))){
var inst_17445 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
var statearr_17457_17569 = state_17449__$1;
(statearr_17457_17569[(2)] = inst_17445);

(statearr_17457_17569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (8))){
var inst_17435 = (state_17449[(8)]);
var inst_17440 = (state_17449[(2)]);
var state_17449__$1 = (function (){var statearr_17458 = state_17449;
(statearr_17458[(9)] = inst_17440);

return statearr_17458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17449__$1,(9),results,inst_17435);
} else {
if((state_val_17450 === (9))){
var inst_17442 = (state_17449[(2)]);
var state_17449__$1 = (function (){var statearr_17459 = state_17449;
(statearr_17459[(10)] = inst_17442);

return statearr_17459;
})();
var statearr_17460_17570 = state_17449__$1;
(statearr_17460_17570[(2)] = null);

(statearr_17460_17570[(1)] = (2));


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
});})(c__16980__auto___17564,jobs,results,process,async))
;
return ((function (switch__16868__auto__,c__16980__auto___17564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0 = (function (){
var statearr_17464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__);

(statearr_17464[(1)] = (1));

return statearr_17464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1 = (function (state_17449){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17465){if((e17465 instanceof Object)){
var ex__16872__auto__ = e17465;
var statearr_17466_17571 = state_17449;
(statearr_17466_17571[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17572 = state_17449;
state_17449 = G__17572;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = function(state_17449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1.call(this,state_17449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___17564,jobs,results,process,async))
})();
var state__16982__auto__ = (function (){var statearr_17467 = f__16981__auto__.call(null);
(statearr_17467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___17564);

return statearr_17467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___17564,jobs,results,process,async))
);


var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__,jobs,results,process,async){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__,jobs,results,process,async){
return (function (state_17505){
var state_val_17506 = (state_17505[(1)]);
if((state_val_17506 === (7))){
var inst_17501 = (state_17505[(2)]);
var state_17505__$1 = state_17505;
var statearr_17507_17573 = state_17505__$1;
(statearr_17507_17573[(2)] = inst_17501);

(statearr_17507_17573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (20))){
var state_17505__$1 = state_17505;
var statearr_17508_17574 = state_17505__$1;
(statearr_17508_17574[(2)] = null);

(statearr_17508_17574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (1))){
var state_17505__$1 = state_17505;
var statearr_17509_17575 = state_17505__$1;
(statearr_17509_17575[(2)] = null);

(statearr_17509_17575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (4))){
var inst_17470 = (state_17505[(7)]);
var inst_17470__$1 = (state_17505[(2)]);
var inst_17471 = (inst_17470__$1 == null);
var state_17505__$1 = (function (){var statearr_17510 = state_17505;
(statearr_17510[(7)] = inst_17470__$1);

return statearr_17510;
})();
if(cljs.core.truth_(inst_17471)){
var statearr_17511_17576 = state_17505__$1;
(statearr_17511_17576[(1)] = (5));

} else {
var statearr_17512_17577 = state_17505__$1;
(statearr_17512_17577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (15))){
var inst_17483 = (state_17505[(8)]);
var state_17505__$1 = state_17505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17505__$1,(18),to,inst_17483);
} else {
if((state_val_17506 === (21))){
var inst_17496 = (state_17505[(2)]);
var state_17505__$1 = state_17505;
var statearr_17513_17578 = state_17505__$1;
(statearr_17513_17578[(2)] = inst_17496);

(statearr_17513_17578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (13))){
var inst_17498 = (state_17505[(2)]);
var state_17505__$1 = (function (){var statearr_17514 = state_17505;
(statearr_17514[(9)] = inst_17498);

return statearr_17514;
})();
var statearr_17515_17579 = state_17505__$1;
(statearr_17515_17579[(2)] = null);

(statearr_17515_17579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (6))){
var inst_17470 = (state_17505[(7)]);
var state_17505__$1 = state_17505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17505__$1,(11),inst_17470);
} else {
if((state_val_17506 === (17))){
var inst_17491 = (state_17505[(2)]);
var state_17505__$1 = state_17505;
if(cljs.core.truth_(inst_17491)){
var statearr_17516_17580 = state_17505__$1;
(statearr_17516_17580[(1)] = (19));

} else {
var statearr_17517_17581 = state_17505__$1;
(statearr_17517_17581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (3))){
var inst_17503 = (state_17505[(2)]);
var state_17505__$1 = state_17505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17505__$1,inst_17503);
} else {
if((state_val_17506 === (12))){
var inst_17480 = (state_17505[(10)]);
var state_17505__$1 = state_17505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17505__$1,(14),inst_17480);
} else {
if((state_val_17506 === (2))){
var state_17505__$1 = state_17505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17505__$1,(4),results);
} else {
if((state_val_17506 === (19))){
var state_17505__$1 = state_17505;
var statearr_17518_17582 = state_17505__$1;
(statearr_17518_17582[(2)] = null);

(statearr_17518_17582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (11))){
var inst_17480 = (state_17505[(2)]);
var state_17505__$1 = (function (){var statearr_17519 = state_17505;
(statearr_17519[(10)] = inst_17480);

return statearr_17519;
})();
var statearr_17520_17583 = state_17505__$1;
(statearr_17520_17583[(2)] = null);

(statearr_17520_17583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (9))){
var state_17505__$1 = state_17505;
var statearr_17521_17584 = state_17505__$1;
(statearr_17521_17584[(2)] = null);

(statearr_17521_17584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (5))){
var state_17505__$1 = state_17505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17522_17585 = state_17505__$1;
(statearr_17522_17585[(1)] = (8));

} else {
var statearr_17523_17586 = state_17505__$1;
(statearr_17523_17586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (14))){
var inst_17483 = (state_17505[(8)]);
var inst_17485 = (state_17505[(11)]);
var inst_17483__$1 = (state_17505[(2)]);
var inst_17484 = (inst_17483__$1 == null);
var inst_17485__$1 = cljs.core.not.call(null,inst_17484);
var state_17505__$1 = (function (){var statearr_17524 = state_17505;
(statearr_17524[(8)] = inst_17483__$1);

(statearr_17524[(11)] = inst_17485__$1);

return statearr_17524;
})();
if(inst_17485__$1){
var statearr_17525_17587 = state_17505__$1;
(statearr_17525_17587[(1)] = (15));

} else {
var statearr_17526_17588 = state_17505__$1;
(statearr_17526_17588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (16))){
var inst_17485 = (state_17505[(11)]);
var state_17505__$1 = state_17505;
var statearr_17527_17589 = state_17505__$1;
(statearr_17527_17589[(2)] = inst_17485);

(statearr_17527_17589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (10))){
var inst_17477 = (state_17505[(2)]);
var state_17505__$1 = state_17505;
var statearr_17528_17590 = state_17505__$1;
(statearr_17528_17590[(2)] = inst_17477);

(statearr_17528_17590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (18))){
var inst_17488 = (state_17505[(2)]);
var state_17505__$1 = state_17505;
var statearr_17529_17591 = state_17505__$1;
(statearr_17529_17591[(2)] = inst_17488);

(statearr_17529_17591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17506 === (8))){
var inst_17474 = cljs.core.async.close_BANG_.call(null,to);
var state_17505__$1 = state_17505;
var statearr_17530_17592 = state_17505__$1;
(statearr_17530_17592[(2)] = inst_17474);

(statearr_17530_17592[(1)] = (10));


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
});})(c__16980__auto__,jobs,results,process,async))
;
return ((function (switch__16868__auto__,c__16980__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0 = (function (){
var statearr_17534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__);

(statearr_17534[(1)] = (1));

return statearr_17534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1 = (function (state_17505){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17535){if((e17535 instanceof Object)){
var ex__16872__auto__ = e17535;
var statearr_17536_17593 = state_17505;
(statearr_17536_17593[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17594 = state_17505;
state_17505 = G__17594;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__ = function(state_17505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1.call(this,state_17505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__,jobs,results,process,async))
})();
var state__16982__auto__ = (function (){var statearr_17537 = f__16981__auto__.call(null);
(statearr_17537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_17537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__,jobs,results,process,async))
);

return c__16980__auto__;
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
var args17595 = [];
var len__10030__auto___17598 = arguments.length;
var i__10031__auto___17599 = (0);
while(true){
if((i__10031__auto___17599 < len__10030__auto___17598)){
args17595.push((arguments[i__10031__auto___17599]));

var G__17600 = (i__10031__auto___17599 + (1));
i__10031__auto___17599 = G__17600;
continue;
} else {
}
break;
}

var G__17597 = args17595.length;
switch (G__17597) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17595.length)].join('')));

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
var args17602 = [];
var len__10030__auto___17605 = arguments.length;
var i__10031__auto___17606 = (0);
while(true){
if((i__10031__auto___17606 < len__10030__auto___17605)){
args17602.push((arguments[i__10031__auto___17606]));

var G__17607 = (i__10031__auto___17606 + (1));
i__10031__auto___17606 = G__17607;
continue;
} else {
}
break;
}

var G__17604 = args17602.length;
switch (G__17604) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17602.length)].join('')));

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
var args17609 = [];
var len__10030__auto___17662 = arguments.length;
var i__10031__auto___17663 = (0);
while(true){
if((i__10031__auto___17663 < len__10030__auto___17662)){
args17609.push((arguments[i__10031__auto___17663]));

var G__17664 = (i__10031__auto___17663 + (1));
i__10031__auto___17663 = G__17664;
continue;
} else {
}
break;
}

var G__17611 = args17609.length;
switch (G__17611) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17609.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16980__auto___17666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___17666,tc,fc){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___17666,tc,fc){
return (function (state_17637){
var state_val_17638 = (state_17637[(1)]);
if((state_val_17638 === (7))){
var inst_17633 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17639_17667 = state_17637__$1;
(statearr_17639_17667[(2)] = inst_17633);

(statearr_17639_17667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (1))){
var state_17637__$1 = state_17637;
var statearr_17640_17668 = state_17637__$1;
(statearr_17640_17668[(2)] = null);

(statearr_17640_17668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (4))){
var inst_17614 = (state_17637[(7)]);
var inst_17614__$1 = (state_17637[(2)]);
var inst_17615 = (inst_17614__$1 == null);
var state_17637__$1 = (function (){var statearr_17641 = state_17637;
(statearr_17641[(7)] = inst_17614__$1);

return statearr_17641;
})();
if(cljs.core.truth_(inst_17615)){
var statearr_17642_17669 = state_17637__$1;
(statearr_17642_17669[(1)] = (5));

} else {
var statearr_17643_17670 = state_17637__$1;
(statearr_17643_17670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (13))){
var state_17637__$1 = state_17637;
var statearr_17644_17671 = state_17637__$1;
(statearr_17644_17671[(2)] = null);

(statearr_17644_17671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (6))){
var inst_17614 = (state_17637[(7)]);
var inst_17620 = p.call(null,inst_17614);
var state_17637__$1 = state_17637;
if(cljs.core.truth_(inst_17620)){
var statearr_17645_17672 = state_17637__$1;
(statearr_17645_17672[(1)] = (9));

} else {
var statearr_17646_17673 = state_17637__$1;
(statearr_17646_17673[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (3))){
var inst_17635 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17637__$1,inst_17635);
} else {
if((state_val_17638 === (12))){
var state_17637__$1 = state_17637;
var statearr_17647_17674 = state_17637__$1;
(statearr_17647_17674[(2)] = null);

(statearr_17647_17674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (2))){
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17637__$1,(4),ch);
} else {
if((state_val_17638 === (11))){
var inst_17614 = (state_17637[(7)]);
var inst_17624 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17637__$1,(8),inst_17624,inst_17614);
} else {
if((state_val_17638 === (9))){
var state_17637__$1 = state_17637;
var statearr_17648_17675 = state_17637__$1;
(statearr_17648_17675[(2)] = tc);

(statearr_17648_17675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (5))){
var inst_17617 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17618 = cljs.core.async.close_BANG_.call(null,fc);
var state_17637__$1 = (function (){var statearr_17649 = state_17637;
(statearr_17649[(8)] = inst_17617);

return statearr_17649;
})();
var statearr_17650_17676 = state_17637__$1;
(statearr_17650_17676[(2)] = inst_17618);

(statearr_17650_17676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (14))){
var inst_17631 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17651_17677 = state_17637__$1;
(statearr_17651_17677[(2)] = inst_17631);

(statearr_17651_17677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (10))){
var state_17637__$1 = state_17637;
var statearr_17652_17678 = state_17637__$1;
(statearr_17652_17678[(2)] = fc);

(statearr_17652_17678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (8))){
var inst_17626 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
if(cljs.core.truth_(inst_17626)){
var statearr_17653_17679 = state_17637__$1;
(statearr_17653_17679[(1)] = (12));

} else {
var statearr_17654_17680 = state_17637__$1;
(statearr_17654_17680[(1)] = (13));

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
});})(c__16980__auto___17666,tc,fc))
;
return ((function (switch__16868__auto__,c__16980__auto___17666,tc,fc){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_17658 = [null,null,null,null,null,null,null,null,null];
(statearr_17658[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_17658[(1)] = (1));

return statearr_17658;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_17637){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17659){if((e17659 instanceof Object)){
var ex__16872__auto__ = e17659;
var statearr_17660_17681 = state_17637;
(statearr_17660_17681[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17682 = state_17637;
state_17637 = G__17682;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_17637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_17637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___17666,tc,fc))
})();
var state__16982__auto__ = (function (){var statearr_17661 = f__16981__auto__.call(null);
(statearr_17661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___17666);

return statearr_17661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___17666,tc,fc))
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
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__){
return (function (state_17746){
var state_val_17747 = (state_17746[(1)]);
if((state_val_17747 === (7))){
var inst_17742 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17748_17769 = state_17746__$1;
(statearr_17748_17769[(2)] = inst_17742);

(statearr_17748_17769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (1))){
var inst_17726 = init;
var state_17746__$1 = (function (){var statearr_17749 = state_17746;
(statearr_17749[(7)] = inst_17726);

return statearr_17749;
})();
var statearr_17750_17770 = state_17746__$1;
(statearr_17750_17770[(2)] = null);

(statearr_17750_17770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (4))){
var inst_17729 = (state_17746[(8)]);
var inst_17729__$1 = (state_17746[(2)]);
var inst_17730 = (inst_17729__$1 == null);
var state_17746__$1 = (function (){var statearr_17751 = state_17746;
(statearr_17751[(8)] = inst_17729__$1);

return statearr_17751;
})();
if(cljs.core.truth_(inst_17730)){
var statearr_17752_17771 = state_17746__$1;
(statearr_17752_17771[(1)] = (5));

} else {
var statearr_17753_17772 = state_17746__$1;
(statearr_17753_17772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (6))){
var inst_17726 = (state_17746[(7)]);
var inst_17729 = (state_17746[(8)]);
var inst_17733 = (state_17746[(9)]);
var inst_17733__$1 = f.call(null,inst_17726,inst_17729);
var inst_17734 = cljs.core.reduced_QMARK_.call(null,inst_17733__$1);
var state_17746__$1 = (function (){var statearr_17754 = state_17746;
(statearr_17754[(9)] = inst_17733__$1);

return statearr_17754;
})();
if(inst_17734){
var statearr_17755_17773 = state_17746__$1;
(statearr_17755_17773[(1)] = (8));

} else {
var statearr_17756_17774 = state_17746__$1;
(statearr_17756_17774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (3))){
var inst_17744 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17746__$1,inst_17744);
} else {
if((state_val_17747 === (2))){
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17746__$1,(4),ch);
} else {
if((state_val_17747 === (9))){
var inst_17733 = (state_17746[(9)]);
var inst_17726 = inst_17733;
var state_17746__$1 = (function (){var statearr_17757 = state_17746;
(statearr_17757[(7)] = inst_17726);

return statearr_17757;
})();
var statearr_17758_17775 = state_17746__$1;
(statearr_17758_17775[(2)] = null);

(statearr_17758_17775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (5))){
var inst_17726 = (state_17746[(7)]);
var state_17746__$1 = state_17746;
var statearr_17759_17776 = state_17746__$1;
(statearr_17759_17776[(2)] = inst_17726);

(statearr_17759_17776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (10))){
var inst_17740 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17760_17777 = state_17746__$1;
(statearr_17760_17777[(2)] = inst_17740);

(statearr_17760_17777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (8))){
var inst_17733 = (state_17746[(9)]);
var inst_17736 = cljs.core.deref.call(null,inst_17733);
var state_17746__$1 = state_17746;
var statearr_17761_17778 = state_17746__$1;
(statearr_17761_17778[(2)] = inst_17736);

(statearr_17761_17778[(1)] = (10));


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
});})(c__16980__auto__))
;
return ((function (switch__16868__auto__,c__16980__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16869__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16869__auto____0 = (function (){
var statearr_17765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17765[(0)] = cljs$core$async$reduce_$_state_machine__16869__auto__);

(statearr_17765[(1)] = (1));

return statearr_17765;
});
var cljs$core$async$reduce_$_state_machine__16869__auto____1 = (function (state_17746){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17766){if((e17766 instanceof Object)){
var ex__16872__auto__ = e17766;
var statearr_17767_17779 = state_17746;
(statearr_17767_17779[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17780 = state_17746;
state_17746 = G__17780;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16869__auto__ = function(state_17746){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16869__auto____1.call(this,state_17746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16869__auto____0;
cljs$core$async$reduce_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16869__auto____1;
return cljs$core$async$reduce_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__))
})();
var state__16982__auto__ = (function (){var statearr_17768 = f__16981__auto__.call(null);
(statearr_17768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_17768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__))
);

return c__16980__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__,f__$1){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__,f__$1){
return (function (state_17800){
var state_val_17801 = (state_17800[(1)]);
if((state_val_17801 === (1))){
var inst_17795 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17800__$1 = state_17800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17800__$1,(2),inst_17795);
} else {
if((state_val_17801 === (2))){
var inst_17797 = (state_17800[(2)]);
var inst_17798 = f__$1.call(null,inst_17797);
var state_17800__$1 = state_17800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17800__$1,inst_17798);
} else {
return null;
}
}
});})(c__16980__auto__,f__$1))
;
return ((function (switch__16868__auto__,c__16980__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16869__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16869__auto____0 = (function (){
var statearr_17805 = [null,null,null,null,null,null,null];
(statearr_17805[(0)] = cljs$core$async$transduce_$_state_machine__16869__auto__);

(statearr_17805[(1)] = (1));

return statearr_17805;
});
var cljs$core$async$transduce_$_state_machine__16869__auto____1 = (function (state_17800){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17806){if((e17806 instanceof Object)){
var ex__16872__auto__ = e17806;
var statearr_17807_17809 = state_17800;
(statearr_17807_17809[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17810 = state_17800;
state_17800 = G__17810;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16869__auto__ = function(state_17800){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16869__auto____1.call(this,state_17800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16869__auto____0;
cljs$core$async$transduce_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16869__auto____1;
return cljs$core$async$transduce_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__,f__$1))
})();
var state__16982__auto__ = (function (){var statearr_17808 = f__16981__auto__.call(null);
(statearr_17808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_17808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__,f__$1))
);

return c__16980__auto__;
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
var args17811 = [];
var len__10030__auto___17863 = arguments.length;
var i__10031__auto___17864 = (0);
while(true){
if((i__10031__auto___17864 < len__10030__auto___17863)){
args17811.push((arguments[i__10031__auto___17864]));

var G__17865 = (i__10031__auto___17864 + (1));
i__10031__auto___17864 = G__17865;
continue;
} else {
}
break;
}

var G__17813 = args17811.length;
switch (G__17813) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17811.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__){
return (function (state_17838){
var state_val_17839 = (state_17838[(1)]);
if((state_val_17839 === (7))){
var inst_17820 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
var statearr_17840_17867 = state_17838__$1;
(statearr_17840_17867[(2)] = inst_17820);

(statearr_17840_17867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (1))){
var inst_17814 = cljs.core.seq.call(null,coll);
var inst_17815 = inst_17814;
var state_17838__$1 = (function (){var statearr_17841 = state_17838;
(statearr_17841[(7)] = inst_17815);

return statearr_17841;
})();
var statearr_17842_17868 = state_17838__$1;
(statearr_17842_17868[(2)] = null);

(statearr_17842_17868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (4))){
var inst_17815 = (state_17838[(7)]);
var inst_17818 = cljs.core.first.call(null,inst_17815);
var state_17838__$1 = state_17838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17838__$1,(7),ch,inst_17818);
} else {
if((state_val_17839 === (13))){
var inst_17832 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
var statearr_17843_17869 = state_17838__$1;
(statearr_17843_17869[(2)] = inst_17832);

(statearr_17843_17869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (6))){
var inst_17823 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
if(cljs.core.truth_(inst_17823)){
var statearr_17844_17870 = state_17838__$1;
(statearr_17844_17870[(1)] = (8));

} else {
var statearr_17845_17871 = state_17838__$1;
(statearr_17845_17871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (3))){
var inst_17836 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17838__$1,inst_17836);
} else {
if((state_val_17839 === (12))){
var state_17838__$1 = state_17838;
var statearr_17846_17872 = state_17838__$1;
(statearr_17846_17872[(2)] = null);

(statearr_17846_17872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (2))){
var inst_17815 = (state_17838[(7)]);
var state_17838__$1 = state_17838;
if(cljs.core.truth_(inst_17815)){
var statearr_17847_17873 = state_17838__$1;
(statearr_17847_17873[(1)] = (4));

} else {
var statearr_17848_17874 = state_17838__$1;
(statearr_17848_17874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (11))){
var inst_17829 = cljs.core.async.close_BANG_.call(null,ch);
var state_17838__$1 = state_17838;
var statearr_17849_17875 = state_17838__$1;
(statearr_17849_17875[(2)] = inst_17829);

(statearr_17849_17875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (9))){
var state_17838__$1 = state_17838;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17850_17876 = state_17838__$1;
(statearr_17850_17876[(1)] = (11));

} else {
var statearr_17851_17877 = state_17838__$1;
(statearr_17851_17877[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (5))){
var inst_17815 = (state_17838[(7)]);
var state_17838__$1 = state_17838;
var statearr_17852_17878 = state_17838__$1;
(statearr_17852_17878[(2)] = inst_17815);

(statearr_17852_17878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (10))){
var inst_17834 = (state_17838[(2)]);
var state_17838__$1 = state_17838;
var statearr_17853_17879 = state_17838__$1;
(statearr_17853_17879[(2)] = inst_17834);

(statearr_17853_17879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17839 === (8))){
var inst_17815 = (state_17838[(7)]);
var inst_17825 = cljs.core.next.call(null,inst_17815);
var inst_17815__$1 = inst_17825;
var state_17838__$1 = (function (){var statearr_17854 = state_17838;
(statearr_17854[(7)] = inst_17815__$1);

return statearr_17854;
})();
var statearr_17855_17880 = state_17838__$1;
(statearr_17855_17880[(2)] = null);

(statearr_17855_17880[(1)] = (2));


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
});})(c__16980__auto__))
;
return ((function (switch__16868__auto__,c__16980__auto__){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_17859 = [null,null,null,null,null,null,null,null];
(statearr_17859[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_17859[(1)] = (1));

return statearr_17859;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_17838){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_17838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e17860){if((e17860 instanceof Object)){
var ex__16872__auto__ = e17860;
var statearr_17861_17881 = state_17838;
(statearr_17861_17881[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17882 = state_17838;
state_17838 = G__17882;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_17838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_17838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__))
})();
var state__16982__auto__ = (function (){var statearr_17862 = f__16981__auto__.call(null);
(statearr_17862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_17862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__))
);

return c__16980__auto__;
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
var x__9585__auto__ = (((_ == null))?null:_);
var m__9586__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,_);
} else {
var m__9586__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,_);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9586__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m,ch);
} else {
var m__9586__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m,ch);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m);
} else {
var m__9586__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async18108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18108 = (function (ch,cs,meta18109){
this.ch = ch;
this.cs = cs;
this.meta18109 = meta18109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18110,meta18109__$1){
var self__ = this;
var _18110__$1 = this;
return (new cljs.core.async.t_cljs$core$async18108(self__.ch,self__.cs,meta18109__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18110){
var self__ = this;
var _18110__$1 = this;
return self__.meta18109;
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18109","meta18109",-1345360677,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18108";

cljs.core.async.t_cljs$core$async18108.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async18108");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18108 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18108(ch__$1,cs__$1,meta18109){
return (new cljs.core.async.t_cljs$core$async18108(ch__$1,cs__$1,meta18109));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18108(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16980__auto___18333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___18333,cs,m,dchan,dctr,done){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___18333,cs,m,dchan,dctr,done){
return (function (state_18245){
var state_val_18246 = (state_18245[(1)]);
if((state_val_18246 === (7))){
var inst_18241 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18247_18334 = state_18245__$1;
(statearr_18247_18334[(2)] = inst_18241);

(statearr_18247_18334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (20))){
var inst_18144 = (state_18245[(7)]);
var inst_18156 = cljs.core.first.call(null,inst_18144);
var inst_18157 = cljs.core.nth.call(null,inst_18156,(0),null);
var inst_18158 = cljs.core.nth.call(null,inst_18156,(1),null);
var state_18245__$1 = (function (){var statearr_18248 = state_18245;
(statearr_18248[(8)] = inst_18157);

return statearr_18248;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18249_18335 = state_18245__$1;
(statearr_18249_18335[(1)] = (22));

} else {
var statearr_18250_18336 = state_18245__$1;
(statearr_18250_18336[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (27))){
var inst_18186 = (state_18245[(9)]);
var inst_18113 = (state_18245[(10)]);
var inst_18193 = (state_18245[(11)]);
var inst_18188 = (state_18245[(12)]);
var inst_18193__$1 = cljs.core._nth.call(null,inst_18186,inst_18188);
var inst_18194 = cljs.core.async.put_BANG_.call(null,inst_18193__$1,inst_18113,done);
var state_18245__$1 = (function (){var statearr_18251 = state_18245;
(statearr_18251[(11)] = inst_18193__$1);

return statearr_18251;
})();
if(cljs.core.truth_(inst_18194)){
var statearr_18252_18337 = state_18245__$1;
(statearr_18252_18337[(1)] = (30));

} else {
var statearr_18253_18338 = state_18245__$1;
(statearr_18253_18338[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (1))){
var state_18245__$1 = state_18245;
var statearr_18254_18339 = state_18245__$1;
(statearr_18254_18339[(2)] = null);

(statearr_18254_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (24))){
var inst_18144 = (state_18245[(7)]);
var inst_18163 = (state_18245[(2)]);
var inst_18164 = cljs.core.next.call(null,inst_18144);
var inst_18122 = inst_18164;
var inst_18123 = null;
var inst_18124 = (0);
var inst_18125 = (0);
var state_18245__$1 = (function (){var statearr_18255 = state_18245;
(statearr_18255[(13)] = inst_18123);

(statearr_18255[(14)] = inst_18124);

(statearr_18255[(15)] = inst_18125);

(statearr_18255[(16)] = inst_18122);

(statearr_18255[(17)] = inst_18163);

return statearr_18255;
})();
var statearr_18256_18340 = state_18245__$1;
(statearr_18256_18340[(2)] = null);

(statearr_18256_18340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (39))){
var state_18245__$1 = state_18245;
var statearr_18260_18341 = state_18245__$1;
(statearr_18260_18341[(2)] = null);

(statearr_18260_18341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (4))){
var inst_18113 = (state_18245[(10)]);
var inst_18113__$1 = (state_18245[(2)]);
var inst_18114 = (inst_18113__$1 == null);
var state_18245__$1 = (function (){var statearr_18261 = state_18245;
(statearr_18261[(10)] = inst_18113__$1);

return statearr_18261;
})();
if(cljs.core.truth_(inst_18114)){
var statearr_18262_18342 = state_18245__$1;
(statearr_18262_18342[(1)] = (5));

} else {
var statearr_18263_18343 = state_18245__$1;
(statearr_18263_18343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (15))){
var inst_18123 = (state_18245[(13)]);
var inst_18124 = (state_18245[(14)]);
var inst_18125 = (state_18245[(15)]);
var inst_18122 = (state_18245[(16)]);
var inst_18140 = (state_18245[(2)]);
var inst_18141 = (inst_18125 + (1));
var tmp18257 = inst_18123;
var tmp18258 = inst_18124;
var tmp18259 = inst_18122;
var inst_18122__$1 = tmp18259;
var inst_18123__$1 = tmp18257;
var inst_18124__$1 = tmp18258;
var inst_18125__$1 = inst_18141;
var state_18245__$1 = (function (){var statearr_18264 = state_18245;
(statearr_18264[(13)] = inst_18123__$1);

(statearr_18264[(14)] = inst_18124__$1);

(statearr_18264[(15)] = inst_18125__$1);

(statearr_18264[(18)] = inst_18140);

(statearr_18264[(16)] = inst_18122__$1);

return statearr_18264;
})();
var statearr_18265_18344 = state_18245__$1;
(statearr_18265_18344[(2)] = null);

(statearr_18265_18344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (21))){
var inst_18167 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18269_18345 = state_18245__$1;
(statearr_18269_18345[(2)] = inst_18167);

(statearr_18269_18345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (31))){
var inst_18193 = (state_18245[(11)]);
var inst_18197 = done.call(null,null);
var inst_18198 = cljs.core.async.untap_STAR_.call(null,m,inst_18193);
var state_18245__$1 = (function (){var statearr_18270 = state_18245;
(statearr_18270[(19)] = inst_18197);

return statearr_18270;
})();
var statearr_18271_18346 = state_18245__$1;
(statearr_18271_18346[(2)] = inst_18198);

(statearr_18271_18346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (32))){
var inst_18187 = (state_18245[(20)]);
var inst_18186 = (state_18245[(9)]);
var inst_18185 = (state_18245[(21)]);
var inst_18188 = (state_18245[(12)]);
var inst_18200 = (state_18245[(2)]);
var inst_18201 = (inst_18188 + (1));
var tmp18266 = inst_18187;
var tmp18267 = inst_18186;
var tmp18268 = inst_18185;
var inst_18185__$1 = tmp18268;
var inst_18186__$1 = tmp18267;
var inst_18187__$1 = tmp18266;
var inst_18188__$1 = inst_18201;
var state_18245__$1 = (function (){var statearr_18272 = state_18245;
(statearr_18272[(20)] = inst_18187__$1);

(statearr_18272[(9)] = inst_18186__$1);

(statearr_18272[(22)] = inst_18200);

(statearr_18272[(21)] = inst_18185__$1);

(statearr_18272[(12)] = inst_18188__$1);

return statearr_18272;
})();
var statearr_18273_18347 = state_18245__$1;
(statearr_18273_18347[(2)] = null);

(statearr_18273_18347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (40))){
var inst_18213 = (state_18245[(23)]);
var inst_18217 = done.call(null,null);
var inst_18218 = cljs.core.async.untap_STAR_.call(null,m,inst_18213);
var state_18245__$1 = (function (){var statearr_18274 = state_18245;
(statearr_18274[(24)] = inst_18217);

return statearr_18274;
})();
var statearr_18275_18348 = state_18245__$1;
(statearr_18275_18348[(2)] = inst_18218);

(statearr_18275_18348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (33))){
var inst_18204 = (state_18245[(25)]);
var inst_18206 = cljs.core.chunked_seq_QMARK_.call(null,inst_18204);
var state_18245__$1 = state_18245;
if(inst_18206){
var statearr_18276_18349 = state_18245__$1;
(statearr_18276_18349[(1)] = (36));

} else {
var statearr_18277_18350 = state_18245__$1;
(statearr_18277_18350[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (13))){
var inst_18134 = (state_18245[(26)]);
var inst_18137 = cljs.core.async.close_BANG_.call(null,inst_18134);
var state_18245__$1 = state_18245;
var statearr_18278_18351 = state_18245__$1;
(statearr_18278_18351[(2)] = inst_18137);

(statearr_18278_18351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (22))){
var inst_18157 = (state_18245[(8)]);
var inst_18160 = cljs.core.async.close_BANG_.call(null,inst_18157);
var state_18245__$1 = state_18245;
var statearr_18279_18352 = state_18245__$1;
(statearr_18279_18352[(2)] = inst_18160);

(statearr_18279_18352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (36))){
var inst_18204 = (state_18245[(25)]);
var inst_18208 = cljs.core.chunk_first.call(null,inst_18204);
var inst_18209 = cljs.core.chunk_rest.call(null,inst_18204);
var inst_18210 = cljs.core.count.call(null,inst_18208);
var inst_18185 = inst_18209;
var inst_18186 = inst_18208;
var inst_18187 = inst_18210;
var inst_18188 = (0);
var state_18245__$1 = (function (){var statearr_18280 = state_18245;
(statearr_18280[(20)] = inst_18187);

(statearr_18280[(9)] = inst_18186);

(statearr_18280[(21)] = inst_18185);

(statearr_18280[(12)] = inst_18188);

return statearr_18280;
})();
var statearr_18281_18353 = state_18245__$1;
(statearr_18281_18353[(2)] = null);

(statearr_18281_18353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (41))){
var inst_18204 = (state_18245[(25)]);
var inst_18220 = (state_18245[(2)]);
var inst_18221 = cljs.core.next.call(null,inst_18204);
var inst_18185 = inst_18221;
var inst_18186 = null;
var inst_18187 = (0);
var inst_18188 = (0);
var state_18245__$1 = (function (){var statearr_18282 = state_18245;
(statearr_18282[(27)] = inst_18220);

(statearr_18282[(20)] = inst_18187);

(statearr_18282[(9)] = inst_18186);

(statearr_18282[(21)] = inst_18185);

(statearr_18282[(12)] = inst_18188);

return statearr_18282;
})();
var statearr_18283_18354 = state_18245__$1;
(statearr_18283_18354[(2)] = null);

(statearr_18283_18354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (43))){
var state_18245__$1 = state_18245;
var statearr_18284_18355 = state_18245__$1;
(statearr_18284_18355[(2)] = null);

(statearr_18284_18355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (29))){
var inst_18229 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18285_18356 = state_18245__$1;
(statearr_18285_18356[(2)] = inst_18229);

(statearr_18285_18356[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (44))){
var inst_18238 = (state_18245[(2)]);
var state_18245__$1 = (function (){var statearr_18286 = state_18245;
(statearr_18286[(28)] = inst_18238);

return statearr_18286;
})();
var statearr_18287_18357 = state_18245__$1;
(statearr_18287_18357[(2)] = null);

(statearr_18287_18357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (6))){
var inst_18177 = (state_18245[(29)]);
var inst_18176 = cljs.core.deref.call(null,cs);
var inst_18177__$1 = cljs.core.keys.call(null,inst_18176);
var inst_18178 = cljs.core.count.call(null,inst_18177__$1);
var inst_18179 = cljs.core.reset_BANG_.call(null,dctr,inst_18178);
var inst_18184 = cljs.core.seq.call(null,inst_18177__$1);
var inst_18185 = inst_18184;
var inst_18186 = null;
var inst_18187 = (0);
var inst_18188 = (0);
var state_18245__$1 = (function (){var statearr_18288 = state_18245;
(statearr_18288[(20)] = inst_18187);

(statearr_18288[(9)] = inst_18186);

(statearr_18288[(30)] = inst_18179);

(statearr_18288[(21)] = inst_18185);

(statearr_18288[(29)] = inst_18177__$1);

(statearr_18288[(12)] = inst_18188);

return statearr_18288;
})();
var statearr_18289_18358 = state_18245__$1;
(statearr_18289_18358[(2)] = null);

(statearr_18289_18358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (28))){
var inst_18204 = (state_18245[(25)]);
var inst_18185 = (state_18245[(21)]);
var inst_18204__$1 = cljs.core.seq.call(null,inst_18185);
var state_18245__$1 = (function (){var statearr_18290 = state_18245;
(statearr_18290[(25)] = inst_18204__$1);

return statearr_18290;
})();
if(inst_18204__$1){
var statearr_18291_18359 = state_18245__$1;
(statearr_18291_18359[(1)] = (33));

} else {
var statearr_18292_18360 = state_18245__$1;
(statearr_18292_18360[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (25))){
var inst_18187 = (state_18245[(20)]);
var inst_18188 = (state_18245[(12)]);
var inst_18190 = (inst_18188 < inst_18187);
var inst_18191 = inst_18190;
var state_18245__$1 = state_18245;
if(cljs.core.truth_(inst_18191)){
var statearr_18293_18361 = state_18245__$1;
(statearr_18293_18361[(1)] = (27));

} else {
var statearr_18294_18362 = state_18245__$1;
(statearr_18294_18362[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (34))){
var state_18245__$1 = state_18245;
var statearr_18295_18363 = state_18245__$1;
(statearr_18295_18363[(2)] = null);

(statearr_18295_18363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (17))){
var state_18245__$1 = state_18245;
var statearr_18296_18364 = state_18245__$1;
(statearr_18296_18364[(2)] = null);

(statearr_18296_18364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (3))){
var inst_18243 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18245__$1,inst_18243);
} else {
if((state_val_18246 === (12))){
var inst_18172 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18297_18365 = state_18245__$1;
(statearr_18297_18365[(2)] = inst_18172);

(statearr_18297_18365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (2))){
var state_18245__$1 = state_18245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18245__$1,(4),ch);
} else {
if((state_val_18246 === (23))){
var state_18245__$1 = state_18245;
var statearr_18298_18366 = state_18245__$1;
(statearr_18298_18366[(2)] = null);

(statearr_18298_18366[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (35))){
var inst_18227 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18299_18367 = state_18245__$1;
(statearr_18299_18367[(2)] = inst_18227);

(statearr_18299_18367[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (19))){
var inst_18144 = (state_18245[(7)]);
var inst_18148 = cljs.core.chunk_first.call(null,inst_18144);
var inst_18149 = cljs.core.chunk_rest.call(null,inst_18144);
var inst_18150 = cljs.core.count.call(null,inst_18148);
var inst_18122 = inst_18149;
var inst_18123 = inst_18148;
var inst_18124 = inst_18150;
var inst_18125 = (0);
var state_18245__$1 = (function (){var statearr_18300 = state_18245;
(statearr_18300[(13)] = inst_18123);

(statearr_18300[(14)] = inst_18124);

(statearr_18300[(15)] = inst_18125);

(statearr_18300[(16)] = inst_18122);

return statearr_18300;
})();
var statearr_18301_18368 = state_18245__$1;
(statearr_18301_18368[(2)] = null);

(statearr_18301_18368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (11))){
var inst_18144 = (state_18245[(7)]);
var inst_18122 = (state_18245[(16)]);
var inst_18144__$1 = cljs.core.seq.call(null,inst_18122);
var state_18245__$1 = (function (){var statearr_18302 = state_18245;
(statearr_18302[(7)] = inst_18144__$1);

return statearr_18302;
})();
if(inst_18144__$1){
var statearr_18303_18369 = state_18245__$1;
(statearr_18303_18369[(1)] = (16));

} else {
var statearr_18304_18370 = state_18245__$1;
(statearr_18304_18370[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (9))){
var inst_18174 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18305_18371 = state_18245__$1;
(statearr_18305_18371[(2)] = inst_18174);

(statearr_18305_18371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (5))){
var inst_18120 = cljs.core.deref.call(null,cs);
var inst_18121 = cljs.core.seq.call(null,inst_18120);
var inst_18122 = inst_18121;
var inst_18123 = null;
var inst_18124 = (0);
var inst_18125 = (0);
var state_18245__$1 = (function (){var statearr_18306 = state_18245;
(statearr_18306[(13)] = inst_18123);

(statearr_18306[(14)] = inst_18124);

(statearr_18306[(15)] = inst_18125);

(statearr_18306[(16)] = inst_18122);

return statearr_18306;
})();
var statearr_18307_18372 = state_18245__$1;
(statearr_18307_18372[(2)] = null);

(statearr_18307_18372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (14))){
var state_18245__$1 = state_18245;
var statearr_18308_18373 = state_18245__$1;
(statearr_18308_18373[(2)] = null);

(statearr_18308_18373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (45))){
var inst_18235 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18309_18374 = state_18245__$1;
(statearr_18309_18374[(2)] = inst_18235);

(statearr_18309_18374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (26))){
var inst_18177 = (state_18245[(29)]);
var inst_18231 = (state_18245[(2)]);
var inst_18232 = cljs.core.seq.call(null,inst_18177);
var state_18245__$1 = (function (){var statearr_18310 = state_18245;
(statearr_18310[(31)] = inst_18231);

return statearr_18310;
})();
if(inst_18232){
var statearr_18311_18375 = state_18245__$1;
(statearr_18311_18375[(1)] = (42));

} else {
var statearr_18312_18376 = state_18245__$1;
(statearr_18312_18376[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (16))){
var inst_18144 = (state_18245[(7)]);
var inst_18146 = cljs.core.chunked_seq_QMARK_.call(null,inst_18144);
var state_18245__$1 = state_18245;
if(inst_18146){
var statearr_18313_18377 = state_18245__$1;
(statearr_18313_18377[(1)] = (19));

} else {
var statearr_18314_18378 = state_18245__$1;
(statearr_18314_18378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (38))){
var inst_18224 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18315_18379 = state_18245__$1;
(statearr_18315_18379[(2)] = inst_18224);

(statearr_18315_18379[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (30))){
var state_18245__$1 = state_18245;
var statearr_18316_18380 = state_18245__$1;
(statearr_18316_18380[(2)] = null);

(statearr_18316_18380[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (10))){
var inst_18123 = (state_18245[(13)]);
var inst_18125 = (state_18245[(15)]);
var inst_18133 = cljs.core._nth.call(null,inst_18123,inst_18125);
var inst_18134 = cljs.core.nth.call(null,inst_18133,(0),null);
var inst_18135 = cljs.core.nth.call(null,inst_18133,(1),null);
var state_18245__$1 = (function (){var statearr_18317 = state_18245;
(statearr_18317[(26)] = inst_18134);

return statearr_18317;
})();
if(cljs.core.truth_(inst_18135)){
var statearr_18318_18381 = state_18245__$1;
(statearr_18318_18381[(1)] = (13));

} else {
var statearr_18319_18382 = state_18245__$1;
(statearr_18319_18382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (18))){
var inst_18170 = (state_18245[(2)]);
var state_18245__$1 = state_18245;
var statearr_18320_18383 = state_18245__$1;
(statearr_18320_18383[(2)] = inst_18170);

(statearr_18320_18383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (42))){
var state_18245__$1 = state_18245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18245__$1,(45),dchan);
} else {
if((state_val_18246 === (37))){
var inst_18204 = (state_18245[(25)]);
var inst_18213 = (state_18245[(23)]);
var inst_18113 = (state_18245[(10)]);
var inst_18213__$1 = cljs.core.first.call(null,inst_18204);
var inst_18214 = cljs.core.async.put_BANG_.call(null,inst_18213__$1,inst_18113,done);
var state_18245__$1 = (function (){var statearr_18321 = state_18245;
(statearr_18321[(23)] = inst_18213__$1);

return statearr_18321;
})();
if(cljs.core.truth_(inst_18214)){
var statearr_18322_18384 = state_18245__$1;
(statearr_18322_18384[(1)] = (39));

} else {
var statearr_18323_18385 = state_18245__$1;
(statearr_18323_18385[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18246 === (8))){
var inst_18124 = (state_18245[(14)]);
var inst_18125 = (state_18245[(15)]);
var inst_18127 = (inst_18125 < inst_18124);
var inst_18128 = inst_18127;
var state_18245__$1 = state_18245;
if(cljs.core.truth_(inst_18128)){
var statearr_18324_18386 = state_18245__$1;
(statearr_18324_18386[(1)] = (10));

} else {
var statearr_18325_18387 = state_18245__$1;
(statearr_18325_18387[(1)] = (11));

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
});})(c__16980__auto___18333,cs,m,dchan,dctr,done))
;
return ((function (switch__16868__auto__,c__16980__auto___18333,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16869__auto__ = null;
var cljs$core$async$mult_$_state_machine__16869__auto____0 = (function (){
var statearr_18329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18329[(0)] = cljs$core$async$mult_$_state_machine__16869__auto__);

(statearr_18329[(1)] = (1));

return statearr_18329;
});
var cljs$core$async$mult_$_state_machine__16869__auto____1 = (function (state_18245){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_18245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e18330){if((e18330 instanceof Object)){
var ex__16872__auto__ = e18330;
var statearr_18331_18388 = state_18245;
(statearr_18331_18388[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18389 = state_18245;
state_18245 = G__18389;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16869__auto__ = function(state_18245){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16869__auto____1.call(this,state_18245);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16869__auto____0;
cljs$core$async$mult_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16869__auto____1;
return cljs$core$async$mult_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___18333,cs,m,dchan,dctr,done))
})();
var state__16982__auto__ = (function (){var statearr_18332 = f__16981__auto__.call(null);
(statearr_18332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___18333);

return statearr_18332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___18333,cs,m,dchan,dctr,done))
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
var args18390 = [];
var len__10030__auto___18393 = arguments.length;
var i__10031__auto___18394 = (0);
while(true){
if((i__10031__auto___18394 < len__10030__auto___18393)){
args18390.push((arguments[i__10031__auto___18394]));

var G__18395 = (i__10031__auto___18394 + (1));
i__10031__auto___18394 = G__18395;
continue;
} else {
}
break;
}

var G__18392 = args18390.length;
switch (G__18392) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18390.length)].join('')));

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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m,ch);
} else {
var m__9586__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m,ch);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m,ch);
} else {
var m__9586__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m,ch);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m);
} else {
var m__9586__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m,state_map);
} else {
var m__9586__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m,state_map);
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
var x__9585__auto__ = (((m == null))?null:m);
var m__9586__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,m,mode);
} else {
var m__9586__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___18407 = arguments.length;
var i__10031__auto___18408 = (0);
while(true){
if((i__10031__auto___18408 < len__10030__auto___18407)){
args__10037__auto__.push((arguments[i__10031__auto___18408]));

var G__18409 = (i__10031__auto___18408 + (1));
i__10031__auto___18408 = G__18409;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18401){
var map__18402 = p__18401;
var map__18402__$1 = ((((!((map__18402 == null)))?((((map__18402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18402):map__18402);
var opts = map__18402__$1;
var statearr_18404_18410 = state;
(statearr_18404_18410[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18402,map__18402__$1,opts){
return (function (val){
var statearr_18405_18411 = state;
(statearr_18405_18411[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18402,map__18402__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18406_18412 = state;
(statearr_18406_18412[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18397){
var G__18398 = cljs.core.first.call(null,seq18397);
var seq18397__$1 = cljs.core.next.call(null,seq18397);
var G__18399 = cljs.core.first.call(null,seq18397__$1);
var seq18397__$2 = cljs.core.next.call(null,seq18397__$1);
var G__18400 = cljs.core.first.call(null,seq18397__$2);
var seq18397__$3 = cljs.core.next.call(null,seq18397__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18398,G__18399,G__18400,seq18397__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18580 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18581){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18581 = meta18581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18582,meta18581__$1){
var self__ = this;
var _18582__$1 = this;
return (new cljs.core.async.t_cljs$core$async18580(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18581__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18582){
var self__ = this;
var _18582__$1 = this;
return self__.meta18581;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18581","meta18581",-1059752072,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18580";

cljs.core.async.t_cljs$core$async18580.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async18580");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18580 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18580(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18581){
return (new cljs.core.async.t_cljs$core$async18580(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18581));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18580(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16980__auto___18747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___18747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___18747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18684){
var state_val_18685 = (state_18684[(1)]);
if((state_val_18685 === (7))){
var inst_18599 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18686_18748 = state_18684__$1;
(statearr_18686_18748[(2)] = inst_18599);

(statearr_18686_18748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (20))){
var inst_18611 = (state_18684[(7)]);
var state_18684__$1 = state_18684;
var statearr_18687_18749 = state_18684__$1;
(statearr_18687_18749[(2)] = inst_18611);

(statearr_18687_18749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (27))){
var state_18684__$1 = state_18684;
var statearr_18688_18750 = state_18684__$1;
(statearr_18688_18750[(2)] = null);

(statearr_18688_18750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (1))){
var inst_18586 = (state_18684[(8)]);
var inst_18586__$1 = calc_state.call(null);
var inst_18588 = (inst_18586__$1 == null);
var inst_18589 = cljs.core.not.call(null,inst_18588);
var state_18684__$1 = (function (){var statearr_18689 = state_18684;
(statearr_18689[(8)] = inst_18586__$1);

return statearr_18689;
})();
if(inst_18589){
var statearr_18690_18751 = state_18684__$1;
(statearr_18690_18751[(1)] = (2));

} else {
var statearr_18691_18752 = state_18684__$1;
(statearr_18691_18752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (24))){
var inst_18644 = (state_18684[(9)]);
var inst_18658 = (state_18684[(10)]);
var inst_18635 = (state_18684[(11)]);
var inst_18658__$1 = inst_18635.call(null,inst_18644);
var state_18684__$1 = (function (){var statearr_18692 = state_18684;
(statearr_18692[(10)] = inst_18658__$1);

return statearr_18692;
})();
if(cljs.core.truth_(inst_18658__$1)){
var statearr_18693_18753 = state_18684__$1;
(statearr_18693_18753[(1)] = (29));

} else {
var statearr_18694_18754 = state_18684__$1;
(statearr_18694_18754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (4))){
var inst_18602 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18602)){
var statearr_18695_18755 = state_18684__$1;
(statearr_18695_18755[(1)] = (8));

} else {
var statearr_18696_18756 = state_18684__$1;
(statearr_18696_18756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (15))){
var inst_18629 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18629)){
var statearr_18697_18757 = state_18684__$1;
(statearr_18697_18757[(1)] = (19));

} else {
var statearr_18698_18758 = state_18684__$1;
(statearr_18698_18758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (21))){
var inst_18634 = (state_18684[(12)]);
var inst_18634__$1 = (state_18684[(2)]);
var inst_18635 = cljs.core.get.call(null,inst_18634__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18636 = cljs.core.get.call(null,inst_18634__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18637 = cljs.core.get.call(null,inst_18634__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18684__$1 = (function (){var statearr_18699 = state_18684;
(statearr_18699[(11)] = inst_18635);

(statearr_18699[(13)] = inst_18636);

(statearr_18699[(12)] = inst_18634__$1);

return statearr_18699;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18684__$1,(22),inst_18637);
} else {
if((state_val_18685 === (31))){
var inst_18666 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18666)){
var statearr_18700_18759 = state_18684__$1;
(statearr_18700_18759[(1)] = (32));

} else {
var statearr_18701_18760 = state_18684__$1;
(statearr_18701_18760[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (32))){
var inst_18643 = (state_18684[(14)]);
var state_18684__$1 = state_18684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18684__$1,(35),out,inst_18643);
} else {
if((state_val_18685 === (33))){
var inst_18634 = (state_18684[(12)]);
var inst_18611 = inst_18634;
var state_18684__$1 = (function (){var statearr_18702 = state_18684;
(statearr_18702[(7)] = inst_18611);

return statearr_18702;
})();
var statearr_18703_18761 = state_18684__$1;
(statearr_18703_18761[(2)] = null);

(statearr_18703_18761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (13))){
var inst_18611 = (state_18684[(7)]);
var inst_18618 = inst_18611.cljs$lang$protocol_mask$partition0$;
var inst_18619 = (inst_18618 & (64));
var inst_18620 = inst_18611.cljs$core$ISeq$;
var inst_18621 = (cljs.core.PROTOCOL_SENTINEL === inst_18620);
var inst_18622 = (inst_18619) || (inst_18621);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18622)){
var statearr_18704_18762 = state_18684__$1;
(statearr_18704_18762[(1)] = (16));

} else {
var statearr_18705_18763 = state_18684__$1;
(statearr_18705_18763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (22))){
var inst_18644 = (state_18684[(9)]);
var inst_18643 = (state_18684[(14)]);
var inst_18642 = (state_18684[(2)]);
var inst_18643__$1 = cljs.core.nth.call(null,inst_18642,(0),null);
var inst_18644__$1 = cljs.core.nth.call(null,inst_18642,(1),null);
var inst_18645 = (inst_18643__$1 == null);
var inst_18646 = cljs.core._EQ_.call(null,inst_18644__$1,change);
var inst_18647 = (inst_18645) || (inst_18646);
var state_18684__$1 = (function (){var statearr_18706 = state_18684;
(statearr_18706[(9)] = inst_18644__$1);

(statearr_18706[(14)] = inst_18643__$1);

return statearr_18706;
})();
if(cljs.core.truth_(inst_18647)){
var statearr_18707_18764 = state_18684__$1;
(statearr_18707_18764[(1)] = (23));

} else {
var statearr_18708_18765 = state_18684__$1;
(statearr_18708_18765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (36))){
var inst_18634 = (state_18684[(12)]);
var inst_18611 = inst_18634;
var state_18684__$1 = (function (){var statearr_18709 = state_18684;
(statearr_18709[(7)] = inst_18611);

return statearr_18709;
})();
var statearr_18710_18766 = state_18684__$1;
(statearr_18710_18766[(2)] = null);

(statearr_18710_18766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (29))){
var inst_18658 = (state_18684[(10)]);
var state_18684__$1 = state_18684;
var statearr_18711_18767 = state_18684__$1;
(statearr_18711_18767[(2)] = inst_18658);

(statearr_18711_18767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (6))){
var state_18684__$1 = state_18684;
var statearr_18712_18768 = state_18684__$1;
(statearr_18712_18768[(2)] = false);

(statearr_18712_18768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (28))){
var inst_18654 = (state_18684[(2)]);
var inst_18655 = calc_state.call(null);
var inst_18611 = inst_18655;
var state_18684__$1 = (function (){var statearr_18713 = state_18684;
(statearr_18713[(15)] = inst_18654);

(statearr_18713[(7)] = inst_18611);

return statearr_18713;
})();
var statearr_18714_18769 = state_18684__$1;
(statearr_18714_18769[(2)] = null);

(statearr_18714_18769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (25))){
var inst_18680 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18715_18770 = state_18684__$1;
(statearr_18715_18770[(2)] = inst_18680);

(statearr_18715_18770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (34))){
var inst_18678 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18716_18771 = state_18684__$1;
(statearr_18716_18771[(2)] = inst_18678);

(statearr_18716_18771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (17))){
var state_18684__$1 = state_18684;
var statearr_18717_18772 = state_18684__$1;
(statearr_18717_18772[(2)] = false);

(statearr_18717_18772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (3))){
var state_18684__$1 = state_18684;
var statearr_18718_18773 = state_18684__$1;
(statearr_18718_18773[(2)] = false);

(statearr_18718_18773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (12))){
var inst_18682 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18684__$1,inst_18682);
} else {
if((state_val_18685 === (2))){
var inst_18586 = (state_18684[(8)]);
var inst_18591 = inst_18586.cljs$lang$protocol_mask$partition0$;
var inst_18592 = (inst_18591 & (64));
var inst_18593 = inst_18586.cljs$core$ISeq$;
var inst_18594 = (cljs.core.PROTOCOL_SENTINEL === inst_18593);
var inst_18595 = (inst_18592) || (inst_18594);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18595)){
var statearr_18719_18774 = state_18684__$1;
(statearr_18719_18774[(1)] = (5));

} else {
var statearr_18720_18775 = state_18684__$1;
(statearr_18720_18775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (23))){
var inst_18643 = (state_18684[(14)]);
var inst_18649 = (inst_18643 == null);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18649)){
var statearr_18721_18776 = state_18684__$1;
(statearr_18721_18776[(1)] = (26));

} else {
var statearr_18722_18777 = state_18684__$1;
(statearr_18722_18777[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (35))){
var inst_18669 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18669)){
var statearr_18723_18778 = state_18684__$1;
(statearr_18723_18778[(1)] = (36));

} else {
var statearr_18724_18779 = state_18684__$1;
(statearr_18724_18779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (19))){
var inst_18611 = (state_18684[(7)]);
var inst_18631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18611);
var state_18684__$1 = state_18684;
var statearr_18725_18780 = state_18684__$1;
(statearr_18725_18780[(2)] = inst_18631);

(statearr_18725_18780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (11))){
var inst_18611 = (state_18684[(7)]);
var inst_18615 = (inst_18611 == null);
var inst_18616 = cljs.core.not.call(null,inst_18615);
var state_18684__$1 = state_18684;
if(inst_18616){
var statearr_18726_18781 = state_18684__$1;
(statearr_18726_18781[(1)] = (13));

} else {
var statearr_18727_18782 = state_18684__$1;
(statearr_18727_18782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (9))){
var inst_18586 = (state_18684[(8)]);
var state_18684__$1 = state_18684;
var statearr_18728_18783 = state_18684__$1;
(statearr_18728_18783[(2)] = inst_18586);

(statearr_18728_18783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (5))){
var state_18684__$1 = state_18684;
var statearr_18729_18784 = state_18684__$1;
(statearr_18729_18784[(2)] = true);

(statearr_18729_18784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (14))){
var state_18684__$1 = state_18684;
var statearr_18730_18785 = state_18684__$1;
(statearr_18730_18785[(2)] = false);

(statearr_18730_18785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (26))){
var inst_18644 = (state_18684[(9)]);
var inst_18651 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18644);
var state_18684__$1 = state_18684;
var statearr_18731_18786 = state_18684__$1;
(statearr_18731_18786[(2)] = inst_18651);

(statearr_18731_18786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (16))){
var state_18684__$1 = state_18684;
var statearr_18732_18787 = state_18684__$1;
(statearr_18732_18787[(2)] = true);

(statearr_18732_18787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (38))){
var inst_18674 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18733_18788 = state_18684__$1;
(statearr_18733_18788[(2)] = inst_18674);

(statearr_18733_18788[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (30))){
var inst_18644 = (state_18684[(9)]);
var inst_18635 = (state_18684[(11)]);
var inst_18636 = (state_18684[(13)]);
var inst_18661 = cljs.core.empty_QMARK_.call(null,inst_18635);
var inst_18662 = inst_18636.call(null,inst_18644);
var inst_18663 = cljs.core.not.call(null,inst_18662);
var inst_18664 = (inst_18661) && (inst_18663);
var state_18684__$1 = state_18684;
var statearr_18734_18789 = state_18684__$1;
(statearr_18734_18789[(2)] = inst_18664);

(statearr_18734_18789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (10))){
var inst_18586 = (state_18684[(8)]);
var inst_18607 = (state_18684[(2)]);
var inst_18608 = cljs.core.get.call(null,inst_18607,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18609 = cljs.core.get.call(null,inst_18607,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18610 = cljs.core.get.call(null,inst_18607,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18611 = inst_18586;
var state_18684__$1 = (function (){var statearr_18735 = state_18684;
(statearr_18735[(16)] = inst_18608);

(statearr_18735[(17)] = inst_18610);

(statearr_18735[(7)] = inst_18611);

(statearr_18735[(18)] = inst_18609);

return statearr_18735;
})();
var statearr_18736_18790 = state_18684__$1;
(statearr_18736_18790[(2)] = null);

(statearr_18736_18790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (18))){
var inst_18626 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18737_18791 = state_18684__$1;
(statearr_18737_18791[(2)] = inst_18626);

(statearr_18737_18791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (37))){
var state_18684__$1 = state_18684;
var statearr_18738_18792 = state_18684__$1;
(statearr_18738_18792[(2)] = null);

(statearr_18738_18792[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18685 === (8))){
var inst_18586 = (state_18684[(8)]);
var inst_18604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18586);
var state_18684__$1 = state_18684;
var statearr_18739_18793 = state_18684__$1;
(statearr_18739_18793[(2)] = inst_18604);

(statearr_18739_18793[(1)] = (10));


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
});})(c__16980__auto___18747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16868__auto__,c__16980__auto___18747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16869__auto__ = null;
var cljs$core$async$mix_$_state_machine__16869__auto____0 = (function (){
var statearr_18743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18743[(0)] = cljs$core$async$mix_$_state_machine__16869__auto__);

(statearr_18743[(1)] = (1));

return statearr_18743;
});
var cljs$core$async$mix_$_state_machine__16869__auto____1 = (function (state_18684){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_18684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e18744){if((e18744 instanceof Object)){
var ex__16872__auto__ = e18744;
var statearr_18745_18794 = state_18684;
(statearr_18745_18794[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18795 = state_18684;
state_18684 = G__18795;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16869__auto__ = function(state_18684){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16869__auto____1.call(this,state_18684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16869__auto____0;
cljs$core$async$mix_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16869__auto____1;
return cljs$core$async$mix_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___18747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16982__auto__ = (function (){var statearr_18746 = f__16981__auto__.call(null);
(statearr_18746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___18747);

return statearr_18746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___18747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9585__auto__ = (((p == null))?null:p);
var m__9586__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9586__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9585__auto__ = (((p == null))?null:p);
var m__9586__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,p,v,ch);
} else {
var m__9586__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18796 = [];
var len__10030__auto___18799 = arguments.length;
var i__10031__auto___18800 = (0);
while(true){
if((i__10031__auto___18800 < len__10030__auto___18799)){
args18796.push((arguments[i__10031__auto___18800]));

var G__18801 = (i__10031__auto___18800 + (1));
i__10031__auto___18800 = G__18801;
continue;
} else {
}
break;
}

var G__18798 = args18796.length;
switch (G__18798) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18796.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9585__auto__ = (((p == null))?null:p);
var m__9586__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,p);
} else {
var m__9586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,p);
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
var x__9585__auto__ = (((p == null))?null:p);
var m__9586__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9585__auto__)]);
if(!((m__9586__auto__ == null))){
return m__9586__auto__.call(null,p,v);
} else {
var m__9586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9586__auto____$1 == null))){
return m__9586__auto____$1.call(null,p,v);
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
var args18804 = [];
var len__10030__auto___18929 = arguments.length;
var i__10031__auto___18930 = (0);
while(true){
if((i__10031__auto___18930 < len__10030__auto___18929)){
args18804.push((arguments[i__10031__auto___18930]));

var G__18931 = (i__10031__auto___18930 + (1));
i__10031__auto___18930 = G__18931;
continue;
} else {
}
break;
}

var G__18806 = args18804.length;
switch (G__18806) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18804.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8917__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8917__auto__,mults){
return (function (p1__18803_SHARP_){
if(cljs.core.truth_(p1__18803_SHARP_.call(null,topic))){
return p1__18803_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18803_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8917__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18807 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18808){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18808 = meta18808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18809,meta18808__$1){
var self__ = this;
var _18809__$1 = this;
return (new cljs.core.async.t_cljs$core$async18807(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18808__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18809){
var self__ = this;
var _18809__$1 = this;
return self__.meta18808;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18808","meta18808",-413934862,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18807";

cljs.core.async.t_cljs$core$async18807.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async18807");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18807 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18807(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18808){
return (new cljs.core.async.t_cljs$core$async18807(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18808));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18807(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16980__auto___18933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___18933,mults,ensure_mult,p){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___18933,mults,ensure_mult,p){
return (function (state_18881){
var state_val_18882 = (state_18881[(1)]);
if((state_val_18882 === (7))){
var inst_18877 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18883_18934 = state_18881__$1;
(statearr_18883_18934[(2)] = inst_18877);

(statearr_18883_18934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (20))){
var state_18881__$1 = state_18881;
var statearr_18884_18935 = state_18881__$1;
(statearr_18884_18935[(2)] = null);

(statearr_18884_18935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (1))){
var state_18881__$1 = state_18881;
var statearr_18885_18936 = state_18881__$1;
(statearr_18885_18936[(2)] = null);

(statearr_18885_18936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (24))){
var inst_18860 = (state_18881[(7)]);
var inst_18869 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18860);
var state_18881__$1 = state_18881;
var statearr_18886_18937 = state_18881__$1;
(statearr_18886_18937[(2)] = inst_18869);

(statearr_18886_18937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (4))){
var inst_18812 = (state_18881[(8)]);
var inst_18812__$1 = (state_18881[(2)]);
var inst_18813 = (inst_18812__$1 == null);
var state_18881__$1 = (function (){var statearr_18887 = state_18881;
(statearr_18887[(8)] = inst_18812__$1);

return statearr_18887;
})();
if(cljs.core.truth_(inst_18813)){
var statearr_18888_18938 = state_18881__$1;
(statearr_18888_18938[(1)] = (5));

} else {
var statearr_18889_18939 = state_18881__$1;
(statearr_18889_18939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (15))){
var inst_18854 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18890_18940 = state_18881__$1;
(statearr_18890_18940[(2)] = inst_18854);

(statearr_18890_18940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (21))){
var inst_18874 = (state_18881[(2)]);
var state_18881__$1 = (function (){var statearr_18891 = state_18881;
(statearr_18891[(9)] = inst_18874);

return statearr_18891;
})();
var statearr_18892_18941 = state_18881__$1;
(statearr_18892_18941[(2)] = null);

(statearr_18892_18941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (13))){
var inst_18836 = (state_18881[(10)]);
var inst_18838 = cljs.core.chunked_seq_QMARK_.call(null,inst_18836);
var state_18881__$1 = state_18881;
if(inst_18838){
var statearr_18893_18942 = state_18881__$1;
(statearr_18893_18942[(1)] = (16));

} else {
var statearr_18894_18943 = state_18881__$1;
(statearr_18894_18943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (22))){
var inst_18866 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
if(cljs.core.truth_(inst_18866)){
var statearr_18895_18944 = state_18881__$1;
(statearr_18895_18944[(1)] = (23));

} else {
var statearr_18896_18945 = state_18881__$1;
(statearr_18896_18945[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (6))){
var inst_18860 = (state_18881[(7)]);
var inst_18862 = (state_18881[(11)]);
var inst_18812 = (state_18881[(8)]);
var inst_18860__$1 = topic_fn.call(null,inst_18812);
var inst_18861 = cljs.core.deref.call(null,mults);
var inst_18862__$1 = cljs.core.get.call(null,inst_18861,inst_18860__$1);
var state_18881__$1 = (function (){var statearr_18897 = state_18881;
(statearr_18897[(7)] = inst_18860__$1);

(statearr_18897[(11)] = inst_18862__$1);

return statearr_18897;
})();
if(cljs.core.truth_(inst_18862__$1)){
var statearr_18898_18946 = state_18881__$1;
(statearr_18898_18946[(1)] = (19));

} else {
var statearr_18899_18947 = state_18881__$1;
(statearr_18899_18947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (25))){
var inst_18871 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18900_18948 = state_18881__$1;
(statearr_18900_18948[(2)] = inst_18871);

(statearr_18900_18948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (17))){
var inst_18836 = (state_18881[(10)]);
var inst_18845 = cljs.core.first.call(null,inst_18836);
var inst_18846 = cljs.core.async.muxch_STAR_.call(null,inst_18845);
var inst_18847 = cljs.core.async.close_BANG_.call(null,inst_18846);
var inst_18848 = cljs.core.next.call(null,inst_18836);
var inst_18822 = inst_18848;
var inst_18823 = null;
var inst_18824 = (0);
var inst_18825 = (0);
var state_18881__$1 = (function (){var statearr_18901 = state_18881;
(statearr_18901[(12)] = inst_18824);

(statearr_18901[(13)] = inst_18823);

(statearr_18901[(14)] = inst_18822);

(statearr_18901[(15)] = inst_18847);

(statearr_18901[(16)] = inst_18825);

return statearr_18901;
})();
var statearr_18902_18949 = state_18881__$1;
(statearr_18902_18949[(2)] = null);

(statearr_18902_18949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (3))){
var inst_18879 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18881__$1,inst_18879);
} else {
if((state_val_18882 === (12))){
var inst_18856 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18903_18950 = state_18881__$1;
(statearr_18903_18950[(2)] = inst_18856);

(statearr_18903_18950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (2))){
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18881__$1,(4),ch);
} else {
if((state_val_18882 === (23))){
var state_18881__$1 = state_18881;
var statearr_18904_18951 = state_18881__$1;
(statearr_18904_18951[(2)] = null);

(statearr_18904_18951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (19))){
var inst_18862 = (state_18881[(11)]);
var inst_18812 = (state_18881[(8)]);
var inst_18864 = cljs.core.async.muxch_STAR_.call(null,inst_18862);
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18881__$1,(22),inst_18864,inst_18812);
} else {
if((state_val_18882 === (11))){
var inst_18836 = (state_18881[(10)]);
var inst_18822 = (state_18881[(14)]);
var inst_18836__$1 = cljs.core.seq.call(null,inst_18822);
var state_18881__$1 = (function (){var statearr_18905 = state_18881;
(statearr_18905[(10)] = inst_18836__$1);

return statearr_18905;
})();
if(inst_18836__$1){
var statearr_18906_18952 = state_18881__$1;
(statearr_18906_18952[(1)] = (13));

} else {
var statearr_18907_18953 = state_18881__$1;
(statearr_18907_18953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (9))){
var inst_18858 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18908_18954 = state_18881__$1;
(statearr_18908_18954[(2)] = inst_18858);

(statearr_18908_18954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (5))){
var inst_18819 = cljs.core.deref.call(null,mults);
var inst_18820 = cljs.core.vals.call(null,inst_18819);
var inst_18821 = cljs.core.seq.call(null,inst_18820);
var inst_18822 = inst_18821;
var inst_18823 = null;
var inst_18824 = (0);
var inst_18825 = (0);
var state_18881__$1 = (function (){var statearr_18909 = state_18881;
(statearr_18909[(12)] = inst_18824);

(statearr_18909[(13)] = inst_18823);

(statearr_18909[(14)] = inst_18822);

(statearr_18909[(16)] = inst_18825);

return statearr_18909;
})();
var statearr_18910_18955 = state_18881__$1;
(statearr_18910_18955[(2)] = null);

(statearr_18910_18955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (14))){
var state_18881__$1 = state_18881;
var statearr_18914_18956 = state_18881__$1;
(statearr_18914_18956[(2)] = null);

(statearr_18914_18956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (16))){
var inst_18836 = (state_18881[(10)]);
var inst_18840 = cljs.core.chunk_first.call(null,inst_18836);
var inst_18841 = cljs.core.chunk_rest.call(null,inst_18836);
var inst_18842 = cljs.core.count.call(null,inst_18840);
var inst_18822 = inst_18841;
var inst_18823 = inst_18840;
var inst_18824 = inst_18842;
var inst_18825 = (0);
var state_18881__$1 = (function (){var statearr_18915 = state_18881;
(statearr_18915[(12)] = inst_18824);

(statearr_18915[(13)] = inst_18823);

(statearr_18915[(14)] = inst_18822);

(statearr_18915[(16)] = inst_18825);

return statearr_18915;
})();
var statearr_18916_18957 = state_18881__$1;
(statearr_18916_18957[(2)] = null);

(statearr_18916_18957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (10))){
var inst_18824 = (state_18881[(12)]);
var inst_18823 = (state_18881[(13)]);
var inst_18822 = (state_18881[(14)]);
var inst_18825 = (state_18881[(16)]);
var inst_18830 = cljs.core._nth.call(null,inst_18823,inst_18825);
var inst_18831 = cljs.core.async.muxch_STAR_.call(null,inst_18830);
var inst_18832 = cljs.core.async.close_BANG_.call(null,inst_18831);
var inst_18833 = (inst_18825 + (1));
var tmp18911 = inst_18824;
var tmp18912 = inst_18823;
var tmp18913 = inst_18822;
var inst_18822__$1 = tmp18913;
var inst_18823__$1 = tmp18912;
var inst_18824__$1 = tmp18911;
var inst_18825__$1 = inst_18833;
var state_18881__$1 = (function (){var statearr_18917 = state_18881;
(statearr_18917[(12)] = inst_18824__$1);

(statearr_18917[(13)] = inst_18823__$1);

(statearr_18917[(14)] = inst_18822__$1);

(statearr_18917[(17)] = inst_18832);

(statearr_18917[(16)] = inst_18825__$1);

return statearr_18917;
})();
var statearr_18918_18958 = state_18881__$1;
(statearr_18918_18958[(2)] = null);

(statearr_18918_18958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (18))){
var inst_18851 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18919_18959 = state_18881__$1;
(statearr_18919_18959[(2)] = inst_18851);

(statearr_18919_18959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (8))){
var inst_18824 = (state_18881[(12)]);
var inst_18825 = (state_18881[(16)]);
var inst_18827 = (inst_18825 < inst_18824);
var inst_18828 = inst_18827;
var state_18881__$1 = state_18881;
if(cljs.core.truth_(inst_18828)){
var statearr_18920_18960 = state_18881__$1;
(statearr_18920_18960[(1)] = (10));

} else {
var statearr_18921_18961 = state_18881__$1;
(statearr_18921_18961[(1)] = (11));

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
});})(c__16980__auto___18933,mults,ensure_mult,p))
;
return ((function (switch__16868__auto__,c__16980__auto___18933,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_18925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18925[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_18925[(1)] = (1));

return statearr_18925;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_18881){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_18881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e18926){if((e18926 instanceof Object)){
var ex__16872__auto__ = e18926;
var statearr_18927_18962 = state_18881;
(statearr_18927_18962[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18963 = state_18881;
state_18881 = G__18963;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_18881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_18881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___18933,mults,ensure_mult,p))
})();
var state__16982__auto__ = (function (){var statearr_18928 = f__16981__auto__.call(null);
(statearr_18928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___18933);

return statearr_18928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___18933,mults,ensure_mult,p))
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
var args18964 = [];
var len__10030__auto___18967 = arguments.length;
var i__10031__auto___18968 = (0);
while(true){
if((i__10031__auto___18968 < len__10030__auto___18967)){
args18964.push((arguments[i__10031__auto___18968]));

var G__18969 = (i__10031__auto___18968 + (1));
i__10031__auto___18968 = G__18969;
continue;
} else {
}
break;
}

var G__18966 = args18964.length;
switch (G__18966) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18964.length)].join('')));

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
var args18971 = [];
var len__10030__auto___18974 = arguments.length;
var i__10031__auto___18975 = (0);
while(true){
if((i__10031__auto___18975 < len__10030__auto___18974)){
args18971.push((arguments[i__10031__auto___18975]));

var G__18976 = (i__10031__auto___18975 + (1));
i__10031__auto___18975 = G__18976;
continue;
} else {
}
break;
}

var G__18973 = args18971.length;
switch (G__18973) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18971.length)].join('')));

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
var args18978 = [];
var len__10030__auto___19049 = arguments.length;
var i__10031__auto___19050 = (0);
while(true){
if((i__10031__auto___19050 < len__10030__auto___19049)){
args18978.push((arguments[i__10031__auto___19050]));

var G__19051 = (i__10031__auto___19050 + (1));
i__10031__auto___19050 = G__19051;
continue;
} else {
}
break;
}

var G__18980 = args18978.length;
switch (G__18980) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18978.length)].join('')));

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
var c__16980__auto___19053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19019){
var state_val_19020 = (state_19019[(1)]);
if((state_val_19020 === (7))){
var state_19019__$1 = state_19019;
var statearr_19021_19054 = state_19019__$1;
(statearr_19021_19054[(2)] = null);

(statearr_19021_19054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (1))){
var state_19019__$1 = state_19019;
var statearr_19022_19055 = state_19019__$1;
(statearr_19022_19055[(2)] = null);

(statearr_19022_19055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (4))){
var inst_18983 = (state_19019[(7)]);
var inst_18985 = (inst_18983 < cnt);
var state_19019__$1 = state_19019;
if(cljs.core.truth_(inst_18985)){
var statearr_19023_19056 = state_19019__$1;
(statearr_19023_19056[(1)] = (6));

} else {
var statearr_19024_19057 = state_19019__$1;
(statearr_19024_19057[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (15))){
var inst_19015 = (state_19019[(2)]);
var state_19019__$1 = state_19019;
var statearr_19025_19058 = state_19019__$1;
(statearr_19025_19058[(2)] = inst_19015);

(statearr_19025_19058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (13))){
var inst_19008 = cljs.core.async.close_BANG_.call(null,out);
var state_19019__$1 = state_19019;
var statearr_19026_19059 = state_19019__$1;
(statearr_19026_19059[(2)] = inst_19008);

(statearr_19026_19059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (6))){
var state_19019__$1 = state_19019;
var statearr_19027_19060 = state_19019__$1;
(statearr_19027_19060[(2)] = null);

(statearr_19027_19060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (3))){
var inst_19017 = (state_19019[(2)]);
var state_19019__$1 = state_19019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19019__$1,inst_19017);
} else {
if((state_val_19020 === (12))){
var inst_19005 = (state_19019[(8)]);
var inst_19005__$1 = (state_19019[(2)]);
var inst_19006 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19005__$1);
var state_19019__$1 = (function (){var statearr_19028 = state_19019;
(statearr_19028[(8)] = inst_19005__$1);

return statearr_19028;
})();
if(cljs.core.truth_(inst_19006)){
var statearr_19029_19061 = state_19019__$1;
(statearr_19029_19061[(1)] = (13));

} else {
var statearr_19030_19062 = state_19019__$1;
(statearr_19030_19062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (2))){
var inst_18982 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18983 = (0);
var state_19019__$1 = (function (){var statearr_19031 = state_19019;
(statearr_19031[(9)] = inst_18982);

(statearr_19031[(7)] = inst_18983);

return statearr_19031;
})();
var statearr_19032_19063 = state_19019__$1;
(statearr_19032_19063[(2)] = null);

(statearr_19032_19063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (11))){
var inst_18983 = (state_19019[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19019,(10),Object,null,(9));
var inst_18992 = chs__$1.call(null,inst_18983);
var inst_18993 = done.call(null,inst_18983);
var inst_18994 = cljs.core.async.take_BANG_.call(null,inst_18992,inst_18993);
var state_19019__$1 = state_19019;
var statearr_19033_19064 = state_19019__$1;
(statearr_19033_19064[(2)] = inst_18994);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (9))){
var inst_18983 = (state_19019[(7)]);
var inst_18996 = (state_19019[(2)]);
var inst_18997 = (inst_18983 + (1));
var inst_18983__$1 = inst_18997;
var state_19019__$1 = (function (){var statearr_19034 = state_19019;
(statearr_19034[(10)] = inst_18996);

(statearr_19034[(7)] = inst_18983__$1);

return statearr_19034;
})();
var statearr_19035_19065 = state_19019__$1;
(statearr_19035_19065[(2)] = null);

(statearr_19035_19065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (5))){
var inst_19003 = (state_19019[(2)]);
var state_19019__$1 = (function (){var statearr_19036 = state_19019;
(statearr_19036[(11)] = inst_19003);

return statearr_19036;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19019__$1,(12),dchan);
} else {
if((state_val_19020 === (14))){
var inst_19005 = (state_19019[(8)]);
var inst_19010 = cljs.core.apply.call(null,f,inst_19005);
var state_19019__$1 = state_19019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19019__$1,(16),out,inst_19010);
} else {
if((state_val_19020 === (16))){
var inst_19012 = (state_19019[(2)]);
var state_19019__$1 = (function (){var statearr_19037 = state_19019;
(statearr_19037[(12)] = inst_19012);

return statearr_19037;
})();
var statearr_19038_19066 = state_19019__$1;
(statearr_19038_19066[(2)] = null);

(statearr_19038_19066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (10))){
var inst_18987 = (state_19019[(2)]);
var inst_18988 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19019__$1 = (function (){var statearr_19039 = state_19019;
(statearr_19039[(13)] = inst_18987);

return statearr_19039;
})();
var statearr_19040_19067 = state_19019__$1;
(statearr_19040_19067[(2)] = inst_18988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19020 === (8))){
var inst_19001 = (state_19019[(2)]);
var state_19019__$1 = state_19019;
var statearr_19041_19068 = state_19019__$1;
(statearr_19041_19068[(2)] = inst_19001);

(statearr_19041_19068[(1)] = (5));


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
});})(c__16980__auto___19053,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16868__auto__,c__16980__auto___19053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19045[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19045[(1)] = (1));

return statearr_19045;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19019){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19046){if((e19046 instanceof Object)){
var ex__16872__auto__ = e19046;
var statearr_19047_19069 = state_19019;
(statearr_19047_19069[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19070 = state_19019;
state_19019 = G__19070;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19053,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16982__auto__ = (function (){var statearr_19048 = f__16981__auto__.call(null);
(statearr_19048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19053);

return statearr_19048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19053,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19072 = [];
var len__10030__auto___19130 = arguments.length;
var i__10031__auto___19131 = (0);
while(true){
if((i__10031__auto___19131 < len__10030__auto___19130)){
args19072.push((arguments[i__10031__auto___19131]));

var G__19132 = (i__10031__auto___19131 + (1));
i__10031__auto___19131 = G__19132;
continue;
} else {
}
break;
}

var G__19074 = args19072.length;
switch (G__19074) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19072.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16980__auto___19134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19134,out){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19134,out){
return (function (state_19106){
var state_val_19107 = (state_19106[(1)]);
if((state_val_19107 === (7))){
var inst_19086 = (state_19106[(7)]);
var inst_19085 = (state_19106[(8)]);
var inst_19085__$1 = (state_19106[(2)]);
var inst_19086__$1 = cljs.core.nth.call(null,inst_19085__$1,(0),null);
var inst_19087 = cljs.core.nth.call(null,inst_19085__$1,(1),null);
var inst_19088 = (inst_19086__$1 == null);
var state_19106__$1 = (function (){var statearr_19108 = state_19106;
(statearr_19108[(9)] = inst_19087);

(statearr_19108[(7)] = inst_19086__$1);

(statearr_19108[(8)] = inst_19085__$1);

return statearr_19108;
})();
if(cljs.core.truth_(inst_19088)){
var statearr_19109_19135 = state_19106__$1;
(statearr_19109_19135[(1)] = (8));

} else {
var statearr_19110_19136 = state_19106__$1;
(statearr_19110_19136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (1))){
var inst_19075 = cljs.core.vec.call(null,chs);
var inst_19076 = inst_19075;
var state_19106__$1 = (function (){var statearr_19111 = state_19106;
(statearr_19111[(10)] = inst_19076);

return statearr_19111;
})();
var statearr_19112_19137 = state_19106__$1;
(statearr_19112_19137[(2)] = null);

(statearr_19112_19137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (4))){
var inst_19076 = (state_19106[(10)]);
var state_19106__$1 = state_19106;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19106__$1,(7),inst_19076);
} else {
if((state_val_19107 === (6))){
var inst_19102 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19113_19138 = state_19106__$1;
(statearr_19113_19138[(2)] = inst_19102);

(statearr_19113_19138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (3))){
var inst_19104 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19106__$1,inst_19104);
} else {
if((state_val_19107 === (2))){
var inst_19076 = (state_19106[(10)]);
var inst_19078 = cljs.core.count.call(null,inst_19076);
var inst_19079 = (inst_19078 > (0));
var state_19106__$1 = state_19106;
if(cljs.core.truth_(inst_19079)){
var statearr_19115_19139 = state_19106__$1;
(statearr_19115_19139[(1)] = (4));

} else {
var statearr_19116_19140 = state_19106__$1;
(statearr_19116_19140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (11))){
var inst_19076 = (state_19106[(10)]);
var inst_19095 = (state_19106[(2)]);
var tmp19114 = inst_19076;
var inst_19076__$1 = tmp19114;
var state_19106__$1 = (function (){var statearr_19117 = state_19106;
(statearr_19117[(11)] = inst_19095);

(statearr_19117[(10)] = inst_19076__$1);

return statearr_19117;
})();
var statearr_19118_19141 = state_19106__$1;
(statearr_19118_19141[(2)] = null);

(statearr_19118_19141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (9))){
var inst_19086 = (state_19106[(7)]);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19106__$1,(11),out,inst_19086);
} else {
if((state_val_19107 === (5))){
var inst_19100 = cljs.core.async.close_BANG_.call(null,out);
var state_19106__$1 = state_19106;
var statearr_19119_19142 = state_19106__$1;
(statearr_19119_19142[(2)] = inst_19100);

(statearr_19119_19142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (10))){
var inst_19098 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19120_19143 = state_19106__$1;
(statearr_19120_19143[(2)] = inst_19098);

(statearr_19120_19143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (8))){
var inst_19087 = (state_19106[(9)]);
var inst_19086 = (state_19106[(7)]);
var inst_19085 = (state_19106[(8)]);
var inst_19076 = (state_19106[(10)]);
var inst_19090 = (function (){var cs = inst_19076;
var vec__19081 = inst_19085;
var v = inst_19086;
var c = inst_19087;
return ((function (cs,vec__19081,v,c,inst_19087,inst_19086,inst_19085,inst_19076,state_val_19107,c__16980__auto___19134,out){
return (function (p1__19071_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19071_SHARP_);
});
;})(cs,vec__19081,v,c,inst_19087,inst_19086,inst_19085,inst_19076,state_val_19107,c__16980__auto___19134,out))
})();
var inst_19091 = cljs.core.filterv.call(null,inst_19090,inst_19076);
var inst_19076__$1 = inst_19091;
var state_19106__$1 = (function (){var statearr_19121 = state_19106;
(statearr_19121[(10)] = inst_19076__$1);

return statearr_19121;
})();
var statearr_19122_19144 = state_19106__$1;
(statearr_19122_19144[(2)] = null);

(statearr_19122_19144[(1)] = (2));


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
});})(c__16980__auto___19134,out))
;
return ((function (switch__16868__auto__,c__16980__auto___19134,out){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19126[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19126[(1)] = (1));

return statearr_19126;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19106){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19127){if((e19127 instanceof Object)){
var ex__16872__auto__ = e19127;
var statearr_19128_19145 = state_19106;
(statearr_19128_19145[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19146 = state_19106;
state_19106 = G__19146;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19134,out))
})();
var state__16982__auto__ = (function (){var statearr_19129 = f__16981__auto__.call(null);
(statearr_19129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19134);

return statearr_19129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19134,out))
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
var args19147 = [];
var len__10030__auto___19196 = arguments.length;
var i__10031__auto___19197 = (0);
while(true){
if((i__10031__auto___19197 < len__10030__auto___19196)){
args19147.push((arguments[i__10031__auto___19197]));

var G__19198 = (i__10031__auto___19197 + (1));
i__10031__auto___19197 = G__19198;
continue;
} else {
}
break;
}

var G__19149 = args19147.length;
switch (G__19149) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19147.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16980__auto___19200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19200,out){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19200,out){
return (function (state_19173){
var state_val_19174 = (state_19173[(1)]);
if((state_val_19174 === (7))){
var inst_19155 = (state_19173[(7)]);
var inst_19155__$1 = (state_19173[(2)]);
var inst_19156 = (inst_19155__$1 == null);
var inst_19157 = cljs.core.not.call(null,inst_19156);
var state_19173__$1 = (function (){var statearr_19175 = state_19173;
(statearr_19175[(7)] = inst_19155__$1);

return statearr_19175;
})();
if(inst_19157){
var statearr_19176_19201 = state_19173__$1;
(statearr_19176_19201[(1)] = (8));

} else {
var statearr_19177_19202 = state_19173__$1;
(statearr_19177_19202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (1))){
var inst_19150 = (0);
var state_19173__$1 = (function (){var statearr_19178 = state_19173;
(statearr_19178[(8)] = inst_19150);

return statearr_19178;
})();
var statearr_19179_19203 = state_19173__$1;
(statearr_19179_19203[(2)] = null);

(statearr_19179_19203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (4))){
var state_19173__$1 = state_19173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19173__$1,(7),ch);
} else {
if((state_val_19174 === (6))){
var inst_19168 = (state_19173[(2)]);
var state_19173__$1 = state_19173;
var statearr_19180_19204 = state_19173__$1;
(statearr_19180_19204[(2)] = inst_19168);

(statearr_19180_19204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (3))){
var inst_19170 = (state_19173[(2)]);
var inst_19171 = cljs.core.async.close_BANG_.call(null,out);
var state_19173__$1 = (function (){var statearr_19181 = state_19173;
(statearr_19181[(9)] = inst_19170);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19173__$1,inst_19171);
} else {
if((state_val_19174 === (2))){
var inst_19150 = (state_19173[(8)]);
var inst_19152 = (inst_19150 < n);
var state_19173__$1 = state_19173;
if(cljs.core.truth_(inst_19152)){
var statearr_19182_19205 = state_19173__$1;
(statearr_19182_19205[(1)] = (4));

} else {
var statearr_19183_19206 = state_19173__$1;
(statearr_19183_19206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (11))){
var inst_19150 = (state_19173[(8)]);
var inst_19160 = (state_19173[(2)]);
var inst_19161 = (inst_19150 + (1));
var inst_19150__$1 = inst_19161;
var state_19173__$1 = (function (){var statearr_19184 = state_19173;
(statearr_19184[(8)] = inst_19150__$1);

(statearr_19184[(10)] = inst_19160);

return statearr_19184;
})();
var statearr_19185_19207 = state_19173__$1;
(statearr_19185_19207[(2)] = null);

(statearr_19185_19207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (9))){
var state_19173__$1 = state_19173;
var statearr_19186_19208 = state_19173__$1;
(statearr_19186_19208[(2)] = null);

(statearr_19186_19208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (5))){
var state_19173__$1 = state_19173;
var statearr_19187_19209 = state_19173__$1;
(statearr_19187_19209[(2)] = null);

(statearr_19187_19209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (10))){
var inst_19165 = (state_19173[(2)]);
var state_19173__$1 = state_19173;
var statearr_19188_19210 = state_19173__$1;
(statearr_19188_19210[(2)] = inst_19165);

(statearr_19188_19210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (8))){
var inst_19155 = (state_19173[(7)]);
var state_19173__$1 = state_19173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19173__$1,(11),out,inst_19155);
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
});})(c__16980__auto___19200,out))
;
return ((function (switch__16868__auto__,c__16980__auto___19200,out){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19192[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19192[(1)] = (1));

return statearr_19192;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19173){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19193){if((e19193 instanceof Object)){
var ex__16872__auto__ = e19193;
var statearr_19194_19211 = state_19173;
(statearr_19194_19211[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19212 = state_19173;
state_19173 = G__19212;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19200,out))
})();
var state__16982__auto__ = (function (){var statearr_19195 = f__16981__auto__.call(null);
(statearr_19195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19200);

return statearr_19195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19200,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19220 = (function (f,ch,meta19221){
this.f = f;
this.ch = ch;
this.meta19221 = meta19221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19222,meta19221__$1){
var self__ = this;
var _19222__$1 = this;
return (new cljs.core.async.t_cljs$core$async19220(self__.f,self__.ch,meta19221__$1));
});

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19222){
var self__ = this;
var _19222__$1 = this;
return self__.meta19221;
});

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19223 = (function (f,ch,meta19221,_,fn1,meta19224){
this.f = f;
this.ch = ch;
this.meta19221 = meta19221;
this._ = _;
this.fn1 = fn1;
this.meta19224 = meta19224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19225,meta19224__$1){
var self__ = this;
var _19225__$1 = this;
return (new cljs.core.async.t_cljs$core$async19223(self__.f,self__.ch,self__.meta19221,self__._,self__.fn1,meta19224__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19225){
var self__ = this;
var _19225__$1 = this;
return self__.meta19224;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19213_SHARP_){
return f1.call(null,(((p1__19213_SHARP_ == null))?null:self__.f.call(null,p1__19213_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19223.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19221","meta19221",-1967068083,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19220","cljs.core.async/t_cljs$core$async19220",-1160344009,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19224","meta19224",-1613615279,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19223";

cljs.core.async.t_cljs$core$async19223.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async19223");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19223 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19223(f__$1,ch__$1,meta19221__$1,___$2,fn1__$1,meta19224){
return (new cljs.core.async.t_cljs$core$async19223(f__$1,ch__$1,meta19221__$1,___$2,fn1__$1,meta19224));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19223(self__.f,self__.ch,self__.meta19221,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8905__auto__ = ret;
if(cljs.core.truth_(and__8905__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8905__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19221","meta19221",-1967068083,null)], null);
});

cljs.core.async.t_cljs$core$async19220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19220";

cljs.core.async.t_cljs$core$async19220.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async19220");
});

cljs.core.async.__GT_t_cljs$core$async19220 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19220(f__$1,ch__$1,meta19221){
return (new cljs.core.async.t_cljs$core$async19220(f__$1,ch__$1,meta19221));
});

}

return (new cljs.core.async.t_cljs$core$async19220(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19229 = (function (f,ch,meta19230){
this.f = f;
this.ch = ch;
this.meta19230 = meta19230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19231,meta19230__$1){
var self__ = this;
var _19231__$1 = this;
return (new cljs.core.async.t_cljs$core$async19229(self__.f,self__.ch,meta19230__$1));
});

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19231){
var self__ = this;
var _19231__$1 = this;
return self__.meta19230;
});

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19230","meta19230",1179103955,null)], null);
});

cljs.core.async.t_cljs$core$async19229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19229";

cljs.core.async.t_cljs$core$async19229.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async19229");
});

cljs.core.async.__GT_t_cljs$core$async19229 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19229(f__$1,ch__$1,meta19230){
return (new cljs.core.async.t_cljs$core$async19229(f__$1,ch__$1,meta19230));
});

}

return (new cljs.core.async.t_cljs$core$async19229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19235 = (function (p,ch,meta19236){
this.p = p;
this.ch = ch;
this.meta19236 = meta19236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19237,meta19236__$1){
var self__ = this;
var _19237__$1 = this;
return (new cljs.core.async.t_cljs$core$async19235(self__.p,self__.ch,meta19236__$1));
});

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19237){
var self__ = this;
var _19237__$1 = this;
return self__.meta19236;
});

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19236","meta19236",995842252,null)], null);
});

cljs.core.async.t_cljs$core$async19235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19235";

cljs.core.async.t_cljs$core$async19235.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cljs.core.async/t_cljs$core$async19235");
});

cljs.core.async.__GT_t_cljs$core$async19235 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19235(p__$1,ch__$1,meta19236){
return (new cljs.core.async.t_cljs$core$async19235(p__$1,ch__$1,meta19236));
});

}

return (new cljs.core.async.t_cljs$core$async19235(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19238 = [];
var len__10030__auto___19282 = arguments.length;
var i__10031__auto___19283 = (0);
while(true){
if((i__10031__auto___19283 < len__10030__auto___19282)){
args19238.push((arguments[i__10031__auto___19283]));

var G__19284 = (i__10031__auto___19283 + (1));
i__10031__auto___19283 = G__19284;
continue;
} else {
}
break;
}

var G__19240 = args19238.length;
switch (G__19240) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19238.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16980__auto___19286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19286,out){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19286,out){
return (function (state_19261){
var state_val_19262 = (state_19261[(1)]);
if((state_val_19262 === (7))){
var inst_19257 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
var statearr_19263_19287 = state_19261__$1;
(statearr_19263_19287[(2)] = inst_19257);

(statearr_19263_19287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (1))){
var state_19261__$1 = state_19261;
var statearr_19264_19288 = state_19261__$1;
(statearr_19264_19288[(2)] = null);

(statearr_19264_19288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (4))){
var inst_19243 = (state_19261[(7)]);
var inst_19243__$1 = (state_19261[(2)]);
var inst_19244 = (inst_19243__$1 == null);
var state_19261__$1 = (function (){var statearr_19265 = state_19261;
(statearr_19265[(7)] = inst_19243__$1);

return statearr_19265;
})();
if(cljs.core.truth_(inst_19244)){
var statearr_19266_19289 = state_19261__$1;
(statearr_19266_19289[(1)] = (5));

} else {
var statearr_19267_19290 = state_19261__$1;
(statearr_19267_19290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (6))){
var inst_19243 = (state_19261[(7)]);
var inst_19248 = p.call(null,inst_19243);
var state_19261__$1 = state_19261;
if(cljs.core.truth_(inst_19248)){
var statearr_19268_19291 = state_19261__$1;
(statearr_19268_19291[(1)] = (8));

} else {
var statearr_19269_19292 = state_19261__$1;
(statearr_19269_19292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (3))){
var inst_19259 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19261__$1,inst_19259);
} else {
if((state_val_19262 === (2))){
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19261__$1,(4),ch);
} else {
if((state_val_19262 === (11))){
var inst_19251 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
var statearr_19270_19293 = state_19261__$1;
(statearr_19270_19293[(2)] = inst_19251);

(statearr_19270_19293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (9))){
var state_19261__$1 = state_19261;
var statearr_19271_19294 = state_19261__$1;
(statearr_19271_19294[(2)] = null);

(statearr_19271_19294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (5))){
var inst_19246 = cljs.core.async.close_BANG_.call(null,out);
var state_19261__$1 = state_19261;
var statearr_19272_19295 = state_19261__$1;
(statearr_19272_19295[(2)] = inst_19246);

(statearr_19272_19295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (10))){
var inst_19254 = (state_19261[(2)]);
var state_19261__$1 = (function (){var statearr_19273 = state_19261;
(statearr_19273[(8)] = inst_19254);

return statearr_19273;
})();
var statearr_19274_19296 = state_19261__$1;
(statearr_19274_19296[(2)] = null);

(statearr_19274_19296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19262 === (8))){
var inst_19243 = (state_19261[(7)]);
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19261__$1,(11),out,inst_19243);
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
});})(c__16980__auto___19286,out))
;
return ((function (switch__16868__auto__,c__16980__auto___19286,out){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19278 = [null,null,null,null,null,null,null,null,null];
(statearr_19278[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19278[(1)] = (1));

return statearr_19278;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19261){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19279){if((e19279 instanceof Object)){
var ex__16872__auto__ = e19279;
var statearr_19280_19297 = state_19261;
(statearr_19280_19297[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19298 = state_19261;
state_19261 = G__19298;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19286,out))
})();
var state__16982__auto__ = (function (){var statearr_19281 = f__16981__auto__.call(null);
(statearr_19281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19286);

return statearr_19281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19286,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19299 = [];
var len__10030__auto___19302 = arguments.length;
var i__10031__auto___19303 = (0);
while(true){
if((i__10031__auto___19303 < len__10030__auto___19302)){
args19299.push((arguments[i__10031__auto___19303]));

var G__19304 = (i__10031__auto___19303 + (1));
i__10031__auto___19303 = G__19304;
continue;
} else {
}
break;
}

var G__19301 = args19299.length;
switch (G__19301) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19299.length)].join('')));

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
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__){
return (function (state_19471){
var state_val_19472 = (state_19471[(1)]);
if((state_val_19472 === (7))){
var inst_19467 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19473_19514 = state_19471__$1;
(statearr_19473_19514[(2)] = inst_19467);

(statearr_19473_19514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (20))){
var inst_19437 = (state_19471[(7)]);
var inst_19448 = (state_19471[(2)]);
var inst_19449 = cljs.core.next.call(null,inst_19437);
var inst_19423 = inst_19449;
var inst_19424 = null;
var inst_19425 = (0);
var inst_19426 = (0);
var state_19471__$1 = (function (){var statearr_19474 = state_19471;
(statearr_19474[(8)] = inst_19425);

(statearr_19474[(9)] = inst_19426);

(statearr_19474[(10)] = inst_19424);

(statearr_19474[(11)] = inst_19423);

(statearr_19474[(12)] = inst_19448);

return statearr_19474;
})();
var statearr_19475_19515 = state_19471__$1;
(statearr_19475_19515[(2)] = null);

(statearr_19475_19515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (1))){
var state_19471__$1 = state_19471;
var statearr_19476_19516 = state_19471__$1;
(statearr_19476_19516[(2)] = null);

(statearr_19476_19516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (4))){
var inst_19412 = (state_19471[(13)]);
var inst_19412__$1 = (state_19471[(2)]);
var inst_19413 = (inst_19412__$1 == null);
var state_19471__$1 = (function (){var statearr_19477 = state_19471;
(statearr_19477[(13)] = inst_19412__$1);

return statearr_19477;
})();
if(cljs.core.truth_(inst_19413)){
var statearr_19478_19517 = state_19471__$1;
(statearr_19478_19517[(1)] = (5));

} else {
var statearr_19479_19518 = state_19471__$1;
(statearr_19479_19518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (15))){
var state_19471__$1 = state_19471;
var statearr_19483_19519 = state_19471__$1;
(statearr_19483_19519[(2)] = null);

(statearr_19483_19519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (21))){
var state_19471__$1 = state_19471;
var statearr_19484_19520 = state_19471__$1;
(statearr_19484_19520[(2)] = null);

(statearr_19484_19520[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (13))){
var inst_19425 = (state_19471[(8)]);
var inst_19426 = (state_19471[(9)]);
var inst_19424 = (state_19471[(10)]);
var inst_19423 = (state_19471[(11)]);
var inst_19433 = (state_19471[(2)]);
var inst_19434 = (inst_19426 + (1));
var tmp19480 = inst_19425;
var tmp19481 = inst_19424;
var tmp19482 = inst_19423;
var inst_19423__$1 = tmp19482;
var inst_19424__$1 = tmp19481;
var inst_19425__$1 = tmp19480;
var inst_19426__$1 = inst_19434;
var state_19471__$1 = (function (){var statearr_19485 = state_19471;
(statearr_19485[(8)] = inst_19425__$1);

(statearr_19485[(9)] = inst_19426__$1);

(statearr_19485[(10)] = inst_19424__$1);

(statearr_19485[(14)] = inst_19433);

(statearr_19485[(11)] = inst_19423__$1);

return statearr_19485;
})();
var statearr_19486_19521 = state_19471__$1;
(statearr_19486_19521[(2)] = null);

(statearr_19486_19521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (22))){
var state_19471__$1 = state_19471;
var statearr_19487_19522 = state_19471__$1;
(statearr_19487_19522[(2)] = null);

(statearr_19487_19522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (6))){
var inst_19412 = (state_19471[(13)]);
var inst_19421 = f.call(null,inst_19412);
var inst_19422 = cljs.core.seq.call(null,inst_19421);
var inst_19423 = inst_19422;
var inst_19424 = null;
var inst_19425 = (0);
var inst_19426 = (0);
var state_19471__$1 = (function (){var statearr_19488 = state_19471;
(statearr_19488[(8)] = inst_19425);

(statearr_19488[(9)] = inst_19426);

(statearr_19488[(10)] = inst_19424);

(statearr_19488[(11)] = inst_19423);

return statearr_19488;
})();
var statearr_19489_19523 = state_19471__$1;
(statearr_19489_19523[(2)] = null);

(statearr_19489_19523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (17))){
var inst_19437 = (state_19471[(7)]);
var inst_19441 = cljs.core.chunk_first.call(null,inst_19437);
var inst_19442 = cljs.core.chunk_rest.call(null,inst_19437);
var inst_19443 = cljs.core.count.call(null,inst_19441);
var inst_19423 = inst_19442;
var inst_19424 = inst_19441;
var inst_19425 = inst_19443;
var inst_19426 = (0);
var state_19471__$1 = (function (){var statearr_19490 = state_19471;
(statearr_19490[(8)] = inst_19425);

(statearr_19490[(9)] = inst_19426);

(statearr_19490[(10)] = inst_19424);

(statearr_19490[(11)] = inst_19423);

return statearr_19490;
})();
var statearr_19491_19524 = state_19471__$1;
(statearr_19491_19524[(2)] = null);

(statearr_19491_19524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (3))){
var inst_19469 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19471__$1,inst_19469);
} else {
if((state_val_19472 === (12))){
var inst_19457 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19492_19525 = state_19471__$1;
(statearr_19492_19525[(2)] = inst_19457);

(statearr_19492_19525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (2))){
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19471__$1,(4),in$);
} else {
if((state_val_19472 === (23))){
var inst_19465 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19493_19526 = state_19471__$1;
(statearr_19493_19526[(2)] = inst_19465);

(statearr_19493_19526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (19))){
var inst_19452 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19494_19527 = state_19471__$1;
(statearr_19494_19527[(2)] = inst_19452);

(statearr_19494_19527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (11))){
var inst_19437 = (state_19471[(7)]);
var inst_19423 = (state_19471[(11)]);
var inst_19437__$1 = cljs.core.seq.call(null,inst_19423);
var state_19471__$1 = (function (){var statearr_19495 = state_19471;
(statearr_19495[(7)] = inst_19437__$1);

return statearr_19495;
})();
if(inst_19437__$1){
var statearr_19496_19528 = state_19471__$1;
(statearr_19496_19528[(1)] = (14));

} else {
var statearr_19497_19529 = state_19471__$1;
(statearr_19497_19529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (9))){
var inst_19459 = (state_19471[(2)]);
var inst_19460 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19471__$1 = (function (){var statearr_19498 = state_19471;
(statearr_19498[(15)] = inst_19459);

return statearr_19498;
})();
if(cljs.core.truth_(inst_19460)){
var statearr_19499_19530 = state_19471__$1;
(statearr_19499_19530[(1)] = (21));

} else {
var statearr_19500_19531 = state_19471__$1;
(statearr_19500_19531[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (5))){
var inst_19415 = cljs.core.async.close_BANG_.call(null,out);
var state_19471__$1 = state_19471;
var statearr_19501_19532 = state_19471__$1;
(statearr_19501_19532[(2)] = inst_19415);

(statearr_19501_19532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (14))){
var inst_19437 = (state_19471[(7)]);
var inst_19439 = cljs.core.chunked_seq_QMARK_.call(null,inst_19437);
var state_19471__$1 = state_19471;
if(inst_19439){
var statearr_19502_19533 = state_19471__$1;
(statearr_19502_19533[(1)] = (17));

} else {
var statearr_19503_19534 = state_19471__$1;
(statearr_19503_19534[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (16))){
var inst_19455 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19504_19535 = state_19471__$1;
(statearr_19504_19535[(2)] = inst_19455);

(statearr_19504_19535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (10))){
var inst_19426 = (state_19471[(9)]);
var inst_19424 = (state_19471[(10)]);
var inst_19431 = cljs.core._nth.call(null,inst_19424,inst_19426);
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19471__$1,(13),out,inst_19431);
} else {
if((state_val_19472 === (18))){
var inst_19437 = (state_19471[(7)]);
var inst_19446 = cljs.core.first.call(null,inst_19437);
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19471__$1,(20),out,inst_19446);
} else {
if((state_val_19472 === (8))){
var inst_19425 = (state_19471[(8)]);
var inst_19426 = (state_19471[(9)]);
var inst_19428 = (inst_19426 < inst_19425);
var inst_19429 = inst_19428;
var state_19471__$1 = state_19471;
if(cljs.core.truth_(inst_19429)){
var statearr_19505_19536 = state_19471__$1;
(statearr_19505_19536[(1)] = (10));

} else {
var statearr_19506_19537 = state_19471__$1;
(statearr_19506_19537[(1)] = (11));

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
});})(c__16980__auto__))
;
return ((function (switch__16868__auto__,c__16980__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16869__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16869__auto____0 = (function (){
var statearr_19510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19510[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16869__auto__);

(statearr_19510[(1)] = (1));

return statearr_19510;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16869__auto____1 = (function (state_19471){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19511){if((e19511 instanceof Object)){
var ex__16872__auto__ = e19511;
var statearr_19512_19538 = state_19471;
(statearr_19512_19538[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19539 = state_19471;
state_19471 = G__19539;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16869__auto__ = function(state_19471){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16869__auto____1.call(this,state_19471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16869__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16869__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__))
})();
var state__16982__auto__ = (function (){var statearr_19513 = f__16981__auto__.call(null);
(statearr_19513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_19513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__))
);

return c__16980__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19540 = [];
var len__10030__auto___19543 = arguments.length;
var i__10031__auto___19544 = (0);
while(true){
if((i__10031__auto___19544 < len__10030__auto___19543)){
args19540.push((arguments[i__10031__auto___19544]));

var G__19545 = (i__10031__auto___19544 + (1));
i__10031__auto___19544 = G__19545;
continue;
} else {
}
break;
}

var G__19542 = args19540.length;
switch (G__19542) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19540.length)].join('')));

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
var args19547 = [];
var len__10030__auto___19550 = arguments.length;
var i__10031__auto___19551 = (0);
while(true){
if((i__10031__auto___19551 < len__10030__auto___19550)){
args19547.push((arguments[i__10031__auto___19551]));

var G__19552 = (i__10031__auto___19551 + (1));
i__10031__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var G__19549 = args19547.length;
switch (G__19549) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19547.length)].join('')));

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
var args19554 = [];
var len__10030__auto___19605 = arguments.length;
var i__10031__auto___19606 = (0);
while(true){
if((i__10031__auto___19606 < len__10030__auto___19605)){
args19554.push((arguments[i__10031__auto___19606]));

var G__19607 = (i__10031__auto___19606 + (1));
i__10031__auto___19606 = G__19607;
continue;
} else {
}
break;
}

var G__19556 = args19554.length;
switch (G__19556) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19554.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16980__auto___19609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19609,out){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19609,out){
return (function (state_19580){
var state_val_19581 = (state_19580[(1)]);
if((state_val_19581 === (7))){
var inst_19575 = (state_19580[(2)]);
var state_19580__$1 = state_19580;
var statearr_19582_19610 = state_19580__$1;
(statearr_19582_19610[(2)] = inst_19575);

(statearr_19582_19610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (1))){
var inst_19557 = null;
var state_19580__$1 = (function (){var statearr_19583 = state_19580;
(statearr_19583[(7)] = inst_19557);

return statearr_19583;
})();
var statearr_19584_19611 = state_19580__$1;
(statearr_19584_19611[(2)] = null);

(statearr_19584_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (4))){
var inst_19560 = (state_19580[(8)]);
var inst_19560__$1 = (state_19580[(2)]);
var inst_19561 = (inst_19560__$1 == null);
var inst_19562 = cljs.core.not.call(null,inst_19561);
var state_19580__$1 = (function (){var statearr_19585 = state_19580;
(statearr_19585[(8)] = inst_19560__$1);

return statearr_19585;
})();
if(inst_19562){
var statearr_19586_19612 = state_19580__$1;
(statearr_19586_19612[(1)] = (5));

} else {
var statearr_19587_19613 = state_19580__$1;
(statearr_19587_19613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (6))){
var state_19580__$1 = state_19580;
var statearr_19588_19614 = state_19580__$1;
(statearr_19588_19614[(2)] = null);

(statearr_19588_19614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (3))){
var inst_19577 = (state_19580[(2)]);
var inst_19578 = cljs.core.async.close_BANG_.call(null,out);
var state_19580__$1 = (function (){var statearr_19589 = state_19580;
(statearr_19589[(9)] = inst_19577);

return statearr_19589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19580__$1,inst_19578);
} else {
if((state_val_19581 === (2))){
var state_19580__$1 = state_19580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19580__$1,(4),ch);
} else {
if((state_val_19581 === (11))){
var inst_19560 = (state_19580[(8)]);
var inst_19569 = (state_19580[(2)]);
var inst_19557 = inst_19560;
var state_19580__$1 = (function (){var statearr_19590 = state_19580;
(statearr_19590[(7)] = inst_19557);

(statearr_19590[(10)] = inst_19569);

return statearr_19590;
})();
var statearr_19591_19615 = state_19580__$1;
(statearr_19591_19615[(2)] = null);

(statearr_19591_19615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (9))){
var inst_19560 = (state_19580[(8)]);
var state_19580__$1 = state_19580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19580__$1,(11),out,inst_19560);
} else {
if((state_val_19581 === (5))){
var inst_19557 = (state_19580[(7)]);
var inst_19560 = (state_19580[(8)]);
var inst_19564 = cljs.core._EQ_.call(null,inst_19560,inst_19557);
var state_19580__$1 = state_19580;
if(inst_19564){
var statearr_19593_19616 = state_19580__$1;
(statearr_19593_19616[(1)] = (8));

} else {
var statearr_19594_19617 = state_19580__$1;
(statearr_19594_19617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (10))){
var inst_19572 = (state_19580[(2)]);
var state_19580__$1 = state_19580;
var statearr_19595_19618 = state_19580__$1;
(statearr_19595_19618[(2)] = inst_19572);

(statearr_19595_19618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19581 === (8))){
var inst_19557 = (state_19580[(7)]);
var tmp19592 = inst_19557;
var inst_19557__$1 = tmp19592;
var state_19580__$1 = (function (){var statearr_19596 = state_19580;
(statearr_19596[(7)] = inst_19557__$1);

return statearr_19596;
})();
var statearr_19597_19619 = state_19580__$1;
(statearr_19597_19619[(2)] = null);

(statearr_19597_19619[(1)] = (2));


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
});})(c__16980__auto___19609,out))
;
return ((function (switch__16868__auto__,c__16980__auto___19609,out){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19601[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19601[(1)] = (1));

return statearr_19601;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19580){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19602){if((e19602 instanceof Object)){
var ex__16872__auto__ = e19602;
var statearr_19603_19620 = state_19580;
(statearr_19603_19620[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19621 = state_19580;
state_19580 = G__19621;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19609,out))
})();
var state__16982__auto__ = (function (){var statearr_19604 = f__16981__auto__.call(null);
(statearr_19604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19609);

return statearr_19604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19609,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19622 = [];
var len__10030__auto___19692 = arguments.length;
var i__10031__auto___19693 = (0);
while(true){
if((i__10031__auto___19693 < len__10030__auto___19692)){
args19622.push((arguments[i__10031__auto___19693]));

var G__19694 = (i__10031__auto___19693 + (1));
i__10031__auto___19693 = G__19694;
continue;
} else {
}
break;
}

var G__19624 = args19622.length;
switch (G__19624) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19622.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16980__auto___19696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19696,out){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19696,out){
return (function (state_19662){
var state_val_19663 = (state_19662[(1)]);
if((state_val_19663 === (7))){
var inst_19658 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
var statearr_19664_19697 = state_19662__$1;
(statearr_19664_19697[(2)] = inst_19658);

(statearr_19664_19697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (1))){
var inst_19625 = (new Array(n));
var inst_19626 = inst_19625;
var inst_19627 = (0);
var state_19662__$1 = (function (){var statearr_19665 = state_19662;
(statearr_19665[(7)] = inst_19626);

(statearr_19665[(8)] = inst_19627);

return statearr_19665;
})();
var statearr_19666_19698 = state_19662__$1;
(statearr_19666_19698[(2)] = null);

(statearr_19666_19698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (4))){
var inst_19630 = (state_19662[(9)]);
var inst_19630__$1 = (state_19662[(2)]);
var inst_19631 = (inst_19630__$1 == null);
var inst_19632 = cljs.core.not.call(null,inst_19631);
var state_19662__$1 = (function (){var statearr_19667 = state_19662;
(statearr_19667[(9)] = inst_19630__$1);

return statearr_19667;
})();
if(inst_19632){
var statearr_19668_19699 = state_19662__$1;
(statearr_19668_19699[(1)] = (5));

} else {
var statearr_19669_19700 = state_19662__$1;
(statearr_19669_19700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (15))){
var inst_19652 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
var statearr_19670_19701 = state_19662__$1;
(statearr_19670_19701[(2)] = inst_19652);

(statearr_19670_19701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (13))){
var state_19662__$1 = state_19662;
var statearr_19671_19702 = state_19662__$1;
(statearr_19671_19702[(2)] = null);

(statearr_19671_19702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (6))){
var inst_19627 = (state_19662[(8)]);
var inst_19648 = (inst_19627 > (0));
var state_19662__$1 = state_19662;
if(cljs.core.truth_(inst_19648)){
var statearr_19672_19703 = state_19662__$1;
(statearr_19672_19703[(1)] = (12));

} else {
var statearr_19673_19704 = state_19662__$1;
(statearr_19673_19704[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (3))){
var inst_19660 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19662__$1,inst_19660);
} else {
if((state_val_19663 === (12))){
var inst_19626 = (state_19662[(7)]);
var inst_19650 = cljs.core.vec.call(null,inst_19626);
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19662__$1,(15),out,inst_19650);
} else {
if((state_val_19663 === (2))){
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19662__$1,(4),ch);
} else {
if((state_val_19663 === (11))){
var inst_19642 = (state_19662[(2)]);
var inst_19643 = (new Array(n));
var inst_19626 = inst_19643;
var inst_19627 = (0);
var state_19662__$1 = (function (){var statearr_19674 = state_19662;
(statearr_19674[(7)] = inst_19626);

(statearr_19674[(10)] = inst_19642);

(statearr_19674[(8)] = inst_19627);

return statearr_19674;
})();
var statearr_19675_19705 = state_19662__$1;
(statearr_19675_19705[(2)] = null);

(statearr_19675_19705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (9))){
var inst_19626 = (state_19662[(7)]);
var inst_19640 = cljs.core.vec.call(null,inst_19626);
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19662__$1,(11),out,inst_19640);
} else {
if((state_val_19663 === (5))){
var inst_19626 = (state_19662[(7)]);
var inst_19630 = (state_19662[(9)]);
var inst_19635 = (state_19662[(11)]);
var inst_19627 = (state_19662[(8)]);
var inst_19634 = (inst_19626[inst_19627] = inst_19630);
var inst_19635__$1 = (inst_19627 + (1));
var inst_19636 = (inst_19635__$1 < n);
var state_19662__$1 = (function (){var statearr_19676 = state_19662;
(statearr_19676[(11)] = inst_19635__$1);

(statearr_19676[(12)] = inst_19634);

return statearr_19676;
})();
if(cljs.core.truth_(inst_19636)){
var statearr_19677_19706 = state_19662__$1;
(statearr_19677_19706[(1)] = (8));

} else {
var statearr_19678_19707 = state_19662__$1;
(statearr_19678_19707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (14))){
var inst_19655 = (state_19662[(2)]);
var inst_19656 = cljs.core.async.close_BANG_.call(null,out);
var state_19662__$1 = (function (){var statearr_19680 = state_19662;
(statearr_19680[(13)] = inst_19655);

return statearr_19680;
})();
var statearr_19681_19708 = state_19662__$1;
(statearr_19681_19708[(2)] = inst_19656);

(statearr_19681_19708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (10))){
var inst_19646 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
var statearr_19682_19709 = state_19662__$1;
(statearr_19682_19709[(2)] = inst_19646);

(statearr_19682_19709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (8))){
var inst_19626 = (state_19662[(7)]);
var inst_19635 = (state_19662[(11)]);
var tmp19679 = inst_19626;
var inst_19626__$1 = tmp19679;
var inst_19627 = inst_19635;
var state_19662__$1 = (function (){var statearr_19683 = state_19662;
(statearr_19683[(7)] = inst_19626__$1);

(statearr_19683[(8)] = inst_19627);

return statearr_19683;
})();
var statearr_19684_19710 = state_19662__$1;
(statearr_19684_19710[(2)] = null);

(statearr_19684_19710[(1)] = (2));


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
});})(c__16980__auto___19696,out))
;
return ((function (switch__16868__auto__,c__16980__auto___19696,out){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19688[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19688[(1)] = (1));

return statearr_19688;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19662){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19689){if((e19689 instanceof Object)){
var ex__16872__auto__ = e19689;
var statearr_19690_19711 = state_19662;
(statearr_19690_19711[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19712 = state_19662;
state_19662 = G__19712;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19696,out))
})();
var state__16982__auto__ = (function (){var statearr_19691 = f__16981__auto__.call(null);
(statearr_19691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19696);

return statearr_19691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19696,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19713 = [];
var len__10030__auto___19787 = arguments.length;
var i__10031__auto___19788 = (0);
while(true){
if((i__10031__auto___19788 < len__10030__auto___19787)){
args19713.push((arguments[i__10031__auto___19788]));

var G__19789 = (i__10031__auto___19788 + (1));
i__10031__auto___19788 = G__19789;
continue;
} else {
}
break;
}

var G__19715 = args19713.length;
switch (G__19715) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19713.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16980__auto___19791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___19791,out){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___19791,out){
return (function (state_19757){
var state_val_19758 = (state_19757[(1)]);
if((state_val_19758 === (7))){
var inst_19753 = (state_19757[(2)]);
var state_19757__$1 = state_19757;
var statearr_19759_19792 = state_19757__$1;
(statearr_19759_19792[(2)] = inst_19753);

(statearr_19759_19792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (1))){
var inst_19716 = [];
var inst_19717 = inst_19716;
var inst_19718 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19757__$1 = (function (){var statearr_19760 = state_19757;
(statearr_19760[(7)] = inst_19718);

(statearr_19760[(8)] = inst_19717);

return statearr_19760;
})();
var statearr_19761_19793 = state_19757__$1;
(statearr_19761_19793[(2)] = null);

(statearr_19761_19793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (4))){
var inst_19721 = (state_19757[(9)]);
var inst_19721__$1 = (state_19757[(2)]);
var inst_19722 = (inst_19721__$1 == null);
var inst_19723 = cljs.core.not.call(null,inst_19722);
var state_19757__$1 = (function (){var statearr_19762 = state_19757;
(statearr_19762[(9)] = inst_19721__$1);

return statearr_19762;
})();
if(inst_19723){
var statearr_19763_19794 = state_19757__$1;
(statearr_19763_19794[(1)] = (5));

} else {
var statearr_19764_19795 = state_19757__$1;
(statearr_19764_19795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (15))){
var inst_19747 = (state_19757[(2)]);
var state_19757__$1 = state_19757;
var statearr_19765_19796 = state_19757__$1;
(statearr_19765_19796[(2)] = inst_19747);

(statearr_19765_19796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (13))){
var state_19757__$1 = state_19757;
var statearr_19766_19797 = state_19757__$1;
(statearr_19766_19797[(2)] = null);

(statearr_19766_19797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (6))){
var inst_19717 = (state_19757[(8)]);
var inst_19742 = inst_19717.length;
var inst_19743 = (inst_19742 > (0));
var state_19757__$1 = state_19757;
if(cljs.core.truth_(inst_19743)){
var statearr_19767_19798 = state_19757__$1;
(statearr_19767_19798[(1)] = (12));

} else {
var statearr_19768_19799 = state_19757__$1;
(statearr_19768_19799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (3))){
var inst_19755 = (state_19757[(2)]);
var state_19757__$1 = state_19757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19757__$1,inst_19755);
} else {
if((state_val_19758 === (12))){
var inst_19717 = (state_19757[(8)]);
var inst_19745 = cljs.core.vec.call(null,inst_19717);
var state_19757__$1 = state_19757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19757__$1,(15),out,inst_19745);
} else {
if((state_val_19758 === (2))){
var state_19757__$1 = state_19757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19757__$1,(4),ch);
} else {
if((state_val_19758 === (11))){
var inst_19721 = (state_19757[(9)]);
var inst_19725 = (state_19757[(10)]);
var inst_19735 = (state_19757[(2)]);
var inst_19736 = [];
var inst_19737 = inst_19736.push(inst_19721);
var inst_19717 = inst_19736;
var inst_19718 = inst_19725;
var state_19757__$1 = (function (){var statearr_19769 = state_19757;
(statearr_19769[(7)] = inst_19718);

(statearr_19769[(11)] = inst_19735);

(statearr_19769[(8)] = inst_19717);

(statearr_19769[(12)] = inst_19737);

return statearr_19769;
})();
var statearr_19770_19800 = state_19757__$1;
(statearr_19770_19800[(2)] = null);

(statearr_19770_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (9))){
var inst_19717 = (state_19757[(8)]);
var inst_19733 = cljs.core.vec.call(null,inst_19717);
var state_19757__$1 = state_19757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19757__$1,(11),out,inst_19733);
} else {
if((state_val_19758 === (5))){
var inst_19718 = (state_19757[(7)]);
var inst_19721 = (state_19757[(9)]);
var inst_19725 = (state_19757[(10)]);
var inst_19725__$1 = f.call(null,inst_19721);
var inst_19726 = cljs.core._EQ_.call(null,inst_19725__$1,inst_19718);
var inst_19727 = cljs.core.keyword_identical_QMARK_.call(null,inst_19718,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19728 = (inst_19726) || (inst_19727);
var state_19757__$1 = (function (){var statearr_19771 = state_19757;
(statearr_19771[(10)] = inst_19725__$1);

return statearr_19771;
})();
if(cljs.core.truth_(inst_19728)){
var statearr_19772_19801 = state_19757__$1;
(statearr_19772_19801[(1)] = (8));

} else {
var statearr_19773_19802 = state_19757__$1;
(statearr_19773_19802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (14))){
var inst_19750 = (state_19757[(2)]);
var inst_19751 = cljs.core.async.close_BANG_.call(null,out);
var state_19757__$1 = (function (){var statearr_19775 = state_19757;
(statearr_19775[(13)] = inst_19750);

return statearr_19775;
})();
var statearr_19776_19803 = state_19757__$1;
(statearr_19776_19803[(2)] = inst_19751);

(statearr_19776_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (10))){
var inst_19740 = (state_19757[(2)]);
var state_19757__$1 = state_19757;
var statearr_19777_19804 = state_19757__$1;
(statearr_19777_19804[(2)] = inst_19740);

(statearr_19777_19804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (8))){
var inst_19721 = (state_19757[(9)]);
var inst_19717 = (state_19757[(8)]);
var inst_19725 = (state_19757[(10)]);
var inst_19730 = inst_19717.push(inst_19721);
var tmp19774 = inst_19717;
var inst_19717__$1 = tmp19774;
var inst_19718 = inst_19725;
var state_19757__$1 = (function (){var statearr_19778 = state_19757;
(statearr_19778[(7)] = inst_19718);

(statearr_19778[(14)] = inst_19730);

(statearr_19778[(8)] = inst_19717__$1);

return statearr_19778;
})();
var statearr_19779_19805 = state_19757__$1;
(statearr_19779_19805[(2)] = null);

(statearr_19779_19805[(1)] = (2));


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
});})(c__16980__auto___19791,out))
;
return ((function (switch__16868__auto__,c__16980__auto___19791,out){
return (function() {
var cljs$core$async$state_machine__16869__auto__ = null;
var cljs$core$async$state_machine__16869__auto____0 = (function (){
var statearr_19783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19783[(0)] = cljs$core$async$state_machine__16869__auto__);

(statearr_19783[(1)] = (1));

return statearr_19783;
});
var cljs$core$async$state_machine__16869__auto____1 = (function (state_19757){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e19784){if((e19784 instanceof Object)){
var ex__16872__auto__ = e19784;
var statearr_19785_19806 = state_19757;
(statearr_19785_19806[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19807 = state_19757;
state_19757 = G__19807;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
cljs$core$async$state_machine__16869__auto__ = function(state_19757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16869__auto____1.call(this,state_19757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16869__auto____0;
cljs$core$async$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16869__auto____1;
return cljs$core$async$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___19791,out))
})();
var state__16982__auto__ = (function (){var statearr_19786 = f__16981__auto__.call(null);
(statearr_19786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___19791);

return statearr_19786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___19791,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map