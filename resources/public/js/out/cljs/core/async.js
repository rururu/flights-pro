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
var args17100 = [];
var len__11385__auto___17106 = arguments.length;
var i__11386__auto___17107 = (0);
while(true){
if((i__11386__auto___17107 < len__11385__auto___17106)){
args17100.push((arguments[i__11386__auto___17107]));

var G__17108 = (i__11386__auto___17107 + (1));
i__11386__auto___17107 = G__17108;
continue;
} else {
}
break;
}

var G__17102 = args17100.length;
switch (G__17102) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17100.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17103 = (function (f,blockable,meta17104){
this.f = f;
this.blockable = blockable;
this.meta17104 = meta17104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17105,meta17104__$1){
var self__ = this;
var _17105__$1 = this;
return (new cljs.core.async.t_cljs$core$async17103(self__.f,self__.blockable,meta17104__$1));
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17105){
var self__ = this;
var _17105__$1 = this;
return self__.meta17104;
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17104","meta17104",-270788578,null)], null);
});

cljs.core.async.t_cljs$core$async17103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17103";

cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorPrWriter = (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async17103");
});

cljs.core.async.__GT_t_cljs$core$async17103 = (function cljs$core$async$__GT_t_cljs$core$async17103(f__$1,blockable__$1,meta17104){
return (new cljs.core.async.t_cljs$core$async17103(f__$1,blockable__$1,meta17104));
});

}

return (new cljs.core.async.t_cljs$core$async17103(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17112 = [];
var len__11385__auto___17115 = arguments.length;
var i__11386__auto___17116 = (0);
while(true){
if((i__11386__auto___17116 < len__11385__auto___17115)){
args17112.push((arguments[i__11386__auto___17116]));

var G__17117 = (i__11386__auto___17116 + (1));
i__11386__auto___17116 = G__17117;
continue;
} else {
}
break;
}

var G__17114 = args17112.length;
switch (G__17114) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17112.length)].join('')));

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
var args17119 = [];
var len__11385__auto___17122 = arguments.length;
var i__11386__auto___17123 = (0);
while(true){
if((i__11386__auto___17123 < len__11385__auto___17122)){
args17119.push((arguments[i__11386__auto___17123]));

var G__17124 = (i__11386__auto___17123 + (1));
i__11386__auto___17123 = G__17124;
continue;
} else {
}
break;
}

var G__17121 = args17119.length;
switch (G__17121) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17119.length)].join('')));

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
var args17126 = [];
var len__11385__auto___17129 = arguments.length;
var i__11386__auto___17130 = (0);
while(true){
if((i__11386__auto___17130 < len__11385__auto___17129)){
args17126.push((arguments[i__11386__auto___17130]));

var G__17131 = (i__11386__auto___17130 + (1));
i__11386__auto___17130 = G__17131;
continue;
} else {
}
break;
}

var G__17128 = args17126.length;
switch (G__17128) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17126.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17133 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17133);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17133,ret){
return (function (){
return fn1.call(null,val_17133);
});})(val_17133,ret))
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
var args17134 = [];
var len__11385__auto___17137 = arguments.length;
var i__11386__auto___17138 = (0);
while(true){
if((i__11386__auto___17138 < len__11385__auto___17137)){
args17134.push((arguments[i__11386__auto___17138]));

var G__17139 = (i__11386__auto___17138 + (1));
i__11386__auto___17138 = G__17139;
continue;
} else {
}
break;
}

var G__17136 = args17134.length;
switch (G__17136) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17134.length)].join('')));

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
var n__11195__auto___17141 = n;
var x_17142 = (0);
while(true){
if((x_17142 < n__11195__auto___17141)){
(a[x_17142] = (0));

var G__17143 = (x_17142 + (1));
x_17142 = G__17143;
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

var G__17144 = (i + (1));
i = G__17144;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17148 = (function (flag,meta17149){
this.flag = flag;
this.meta17149 = meta17149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17150,meta17149__$1){
var self__ = this;
var _17150__$1 = this;
return (new cljs.core.async.t_cljs$core$async17148(self__.flag,meta17149__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17150){
var self__ = this;
var _17150__$1 = this;
return self__.meta17149;
});})(flag))
;

cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17148.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17149","meta17149",1805495063,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17148";

cljs.core.async.t_cljs$core$async17148.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async17148");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17148 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17148(flag__$1,meta17149){
return (new cljs.core.async.t_cljs$core$async17148(flag__$1,meta17149));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17148(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17154 = (function (flag,cb,meta17155){
this.flag = flag;
this.cb = cb;
this.meta17155 = meta17155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17156,meta17155__$1){
var self__ = this;
var _17156__$1 = this;
return (new cljs.core.async.t_cljs$core$async17154(self__.flag,self__.cb,meta17155__$1));
});

cljs.core.async.t_cljs$core$async17154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17156){
var self__ = this;
var _17156__$1 = this;
return self__.meta17155;
});

cljs.core.async.t_cljs$core$async17154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17155","meta17155",-1450937728,null)], null);
});

cljs.core.async.t_cljs$core$async17154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17154";

cljs.core.async.t_cljs$core$async17154.cljs$lang$ctorPrWriter = (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async17154");
});

cljs.core.async.__GT_t_cljs$core$async17154 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17154(flag__$1,cb__$1,meta17155){
return (new cljs.core.async.t_cljs$core$async17154(flag__$1,cb__$1,meta17155));
});

}

return (new cljs.core.async.t_cljs$core$async17154(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17157_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17157_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17158_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17158_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10277__auto__ = wport;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17159 = (i + (1));
i = G__17159;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10277__auto__ = ret;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__10265__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__10265__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__10265__auto__;
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
var args__11392__auto__ = [];
var len__11385__auto___17165 = arguments.length;
var i__11386__auto___17166 = (0);
while(true){
if((i__11386__auto___17166 < len__11385__auto___17165)){
args__11392__auto__.push((arguments[i__11386__auto___17166]));

var G__17167 = (i__11386__auto___17166 + (1));
i__11386__auto___17166 = G__17167;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((1) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11393__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17162){
var map__17163 = p__17162;
var map__17163__$1 = ((((!((map__17163 == null)))?((((map__17163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17163):map__17163);
var opts = map__17163__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17160){
var G__17161 = cljs.core.first.call(null,seq17160);
var seq17160__$1 = cljs.core.next.call(null,seq17160);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17161,seq17160__$1);
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
var args17168 = [];
var len__11385__auto___17218 = arguments.length;
var i__11386__auto___17219 = (0);
while(true){
if((i__11386__auto___17219 < len__11385__auto___17218)){
args17168.push((arguments[i__11386__auto___17219]));

var G__17220 = (i__11386__auto___17219 + (1));
i__11386__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var G__17170 = args17168.length;
switch (G__17170) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17168.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17055__auto___17222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___17222){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___17222){
return (function (state_17194){
var state_val_17195 = (state_17194[(1)]);
if((state_val_17195 === (7))){
var inst_17190 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17196_17223 = state_17194__$1;
(statearr_17196_17223[(2)] = inst_17190);

(statearr_17196_17223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (1))){
var state_17194__$1 = state_17194;
var statearr_17197_17224 = state_17194__$1;
(statearr_17197_17224[(2)] = null);

(statearr_17197_17224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (4))){
var inst_17173 = (state_17194[(7)]);
var inst_17173__$1 = (state_17194[(2)]);
var inst_17174 = (inst_17173__$1 == null);
var state_17194__$1 = (function (){var statearr_17198 = state_17194;
(statearr_17198[(7)] = inst_17173__$1);

return statearr_17198;
})();
if(cljs.core.truth_(inst_17174)){
var statearr_17199_17225 = state_17194__$1;
(statearr_17199_17225[(1)] = (5));

} else {
var statearr_17200_17226 = state_17194__$1;
(statearr_17200_17226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (13))){
var state_17194__$1 = state_17194;
var statearr_17201_17227 = state_17194__$1;
(statearr_17201_17227[(2)] = null);

(statearr_17201_17227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (6))){
var inst_17173 = (state_17194[(7)]);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17194__$1,(11),to,inst_17173);
} else {
if((state_val_17195 === (3))){
var inst_17192 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17194__$1,inst_17192);
} else {
if((state_val_17195 === (12))){
var state_17194__$1 = state_17194;
var statearr_17202_17228 = state_17194__$1;
(statearr_17202_17228[(2)] = null);

(statearr_17202_17228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (2))){
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17194__$1,(4),from);
} else {
if((state_val_17195 === (11))){
var inst_17183 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
if(cljs.core.truth_(inst_17183)){
var statearr_17203_17229 = state_17194__$1;
(statearr_17203_17229[(1)] = (12));

} else {
var statearr_17204_17230 = state_17194__$1;
(statearr_17204_17230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (9))){
var state_17194__$1 = state_17194;
var statearr_17205_17231 = state_17194__$1;
(statearr_17205_17231[(2)] = null);

(statearr_17205_17231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (5))){
var state_17194__$1 = state_17194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17206_17232 = state_17194__$1;
(statearr_17206_17232[(1)] = (8));

} else {
var statearr_17207_17233 = state_17194__$1;
(statearr_17207_17233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (14))){
var inst_17188 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17208_17234 = state_17194__$1;
(statearr_17208_17234[(2)] = inst_17188);

(statearr_17208_17234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (10))){
var inst_17180 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17209_17235 = state_17194__$1;
(statearr_17209_17235[(2)] = inst_17180);

(statearr_17209_17235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (8))){
var inst_17177 = cljs.core.async.close_BANG_.call(null,to);
var state_17194__$1 = state_17194;
var statearr_17210_17236 = state_17194__$1;
(statearr_17210_17236[(2)] = inst_17177);

(statearr_17210_17236[(1)] = (10));


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
});})(c__17055__auto___17222))
;
return ((function (switch__16943__auto__,c__17055__auto___17222){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_17214 = [null,null,null,null,null,null,null,null];
(statearr_17214[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_17214[(1)] = (1));

return statearr_17214;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_17194){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17215){if((e17215 instanceof Object)){
var ex__16947__auto__ = e17215;
var statearr_17216_17237 = state_17194;
(statearr_17216_17237[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17238 = state_17194;
state_17194 = G__17238;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_17194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_17194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___17222))
})();
var state__17057__auto__ = (function (){var statearr_17217 = f__17056__auto__.call(null);
(statearr_17217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___17222);

return statearr_17217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___17222))
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
return (function (p__17426){
var vec__17427 = p__17426;
var v = cljs.core.nth.call(null,vec__17427,(0),null);
var p = cljs.core.nth.call(null,vec__17427,(1),null);
var job = vec__17427;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17055__auto___17613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___17613,res,vec__17427,v,p,job,jobs,results){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___17613,res,vec__17427,v,p,job,jobs,results){
return (function (state_17434){
var state_val_17435 = (state_17434[(1)]);
if((state_val_17435 === (1))){
var state_17434__$1 = state_17434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17434__$1,(2),res,v);
} else {
if((state_val_17435 === (2))){
var inst_17431 = (state_17434[(2)]);
var inst_17432 = cljs.core.async.close_BANG_.call(null,res);
var state_17434__$1 = (function (){var statearr_17436 = state_17434;
(statearr_17436[(7)] = inst_17431);

return statearr_17436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17434__$1,inst_17432);
} else {
return null;
}
}
});})(c__17055__auto___17613,res,vec__17427,v,p,job,jobs,results))
;
return ((function (switch__16943__auto__,c__17055__auto___17613,res,vec__17427,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0 = (function (){
var statearr_17440 = [null,null,null,null,null,null,null,null];
(statearr_17440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__);

(statearr_17440[(1)] = (1));

return statearr_17440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1 = (function (state_17434){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17441){if((e17441 instanceof Object)){
var ex__16947__auto__ = e17441;
var statearr_17442_17614 = state_17434;
(statearr_17442_17614[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17615 = state_17434;
state_17434 = G__17615;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = function(state_17434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1.call(this,state_17434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___17613,res,vec__17427,v,p,job,jobs,results))
})();
var state__17057__auto__ = (function (){var statearr_17443 = f__17056__auto__.call(null);
(statearr_17443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___17613);

return statearr_17443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___17613,res,vec__17427,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17444){
var vec__17445 = p__17444;
var v = cljs.core.nth.call(null,vec__17445,(0),null);
var p = cljs.core.nth.call(null,vec__17445,(1),null);
var job = vec__17445;
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
var n__11195__auto___17616 = n;
var __17617 = (0);
while(true){
if((__17617 < n__11195__auto___17616)){
var G__17448_17618 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17448_17618) {
case "compute":
var c__17055__auto___17620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17617,c__17055__auto___17620,G__17448_17618,n__11195__auto___17616,jobs,results,process,async){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (__17617,c__17055__auto___17620,G__17448_17618,n__11195__auto___17616,jobs,results,process,async){
return (function (state_17461){
var state_val_17462 = (state_17461[(1)]);
if((state_val_17462 === (1))){
var state_17461__$1 = state_17461;
var statearr_17463_17621 = state_17461__$1;
(statearr_17463_17621[(2)] = null);

(statearr_17463_17621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (2))){
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17461__$1,(4),jobs);
} else {
if((state_val_17462 === (3))){
var inst_17459 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17461__$1,inst_17459);
} else {
if((state_val_17462 === (4))){
var inst_17451 = (state_17461[(2)]);
var inst_17452 = process.call(null,inst_17451);
var state_17461__$1 = state_17461;
if(cljs.core.truth_(inst_17452)){
var statearr_17464_17622 = state_17461__$1;
(statearr_17464_17622[(1)] = (5));

} else {
var statearr_17465_17623 = state_17461__$1;
(statearr_17465_17623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (5))){
var state_17461__$1 = state_17461;
var statearr_17466_17624 = state_17461__$1;
(statearr_17466_17624[(2)] = null);

(statearr_17466_17624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (6))){
var state_17461__$1 = state_17461;
var statearr_17467_17625 = state_17461__$1;
(statearr_17467_17625[(2)] = null);

(statearr_17467_17625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (7))){
var inst_17457 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17468_17626 = state_17461__$1;
(statearr_17468_17626[(2)] = inst_17457);

(statearr_17468_17626[(1)] = (3));


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
});})(__17617,c__17055__auto___17620,G__17448_17618,n__11195__auto___17616,jobs,results,process,async))
;
return ((function (__17617,switch__16943__auto__,c__17055__auto___17620,G__17448_17618,n__11195__auto___17616,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0 = (function (){
var statearr_17472 = [null,null,null,null,null,null,null];
(statearr_17472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__);

(statearr_17472[(1)] = (1));

return statearr_17472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1 = (function (state_17461){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17473){if((e17473 instanceof Object)){
var ex__16947__auto__ = e17473;
var statearr_17474_17627 = state_17461;
(statearr_17474_17627[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17628 = state_17461;
state_17461 = G__17628;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = function(state_17461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1.call(this,state_17461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__;
})()
;})(__17617,switch__16943__auto__,c__17055__auto___17620,G__17448_17618,n__11195__auto___17616,jobs,results,process,async))
})();
var state__17057__auto__ = (function (){var statearr_17475 = f__17056__auto__.call(null);
(statearr_17475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___17620);

return statearr_17475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(__17617,c__17055__auto___17620,G__17448_17618,n__11195__auto___17616,jobs,results,process,async))
);


break;
case "async":
var c__17055__auto___17629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17617,c__17055__auto___17629,G__17448_17618,n__11195__auto___17616,jobs,results,process,async){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (__17617,c__17055__auto___17629,G__17448_17618,n__11195__auto___17616,jobs,results,process,async){
return (function (state_17488){
var state_val_17489 = (state_17488[(1)]);
if((state_val_17489 === (1))){
var state_17488__$1 = state_17488;
var statearr_17490_17630 = state_17488__$1;
(statearr_17490_17630[(2)] = null);

(statearr_17490_17630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (2))){
var state_17488__$1 = state_17488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17488__$1,(4),jobs);
} else {
if((state_val_17489 === (3))){
var inst_17486 = (state_17488[(2)]);
var state_17488__$1 = state_17488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17488__$1,inst_17486);
} else {
if((state_val_17489 === (4))){
var inst_17478 = (state_17488[(2)]);
var inst_17479 = async.call(null,inst_17478);
var state_17488__$1 = state_17488;
if(cljs.core.truth_(inst_17479)){
var statearr_17491_17631 = state_17488__$1;
(statearr_17491_17631[(1)] = (5));

} else {
var statearr_17492_17632 = state_17488__$1;
(statearr_17492_17632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (5))){
var state_17488__$1 = state_17488;
var statearr_17493_17633 = state_17488__$1;
(statearr_17493_17633[(2)] = null);

(statearr_17493_17633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (6))){
var state_17488__$1 = state_17488;
var statearr_17494_17634 = state_17488__$1;
(statearr_17494_17634[(2)] = null);

(statearr_17494_17634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (7))){
var inst_17484 = (state_17488[(2)]);
var state_17488__$1 = state_17488;
var statearr_17495_17635 = state_17488__$1;
(statearr_17495_17635[(2)] = inst_17484);

(statearr_17495_17635[(1)] = (3));


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
});})(__17617,c__17055__auto___17629,G__17448_17618,n__11195__auto___17616,jobs,results,process,async))
;
return ((function (__17617,switch__16943__auto__,c__17055__auto___17629,G__17448_17618,n__11195__auto___17616,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0 = (function (){
var statearr_17499 = [null,null,null,null,null,null,null];
(statearr_17499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__);

(statearr_17499[(1)] = (1));

return statearr_17499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1 = (function (state_17488){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17500){if((e17500 instanceof Object)){
var ex__16947__auto__ = e17500;
var statearr_17501_17636 = state_17488;
(statearr_17501_17636[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17637 = state_17488;
state_17488 = G__17637;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = function(state_17488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1.call(this,state_17488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__;
})()
;})(__17617,switch__16943__auto__,c__17055__auto___17629,G__17448_17618,n__11195__auto___17616,jobs,results,process,async))
})();
var state__17057__auto__ = (function (){var statearr_17502 = f__17056__auto__.call(null);
(statearr_17502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___17629);

return statearr_17502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(__17617,c__17055__auto___17629,G__17448_17618,n__11195__auto___17616,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17638 = (__17617 + (1));
__17617 = G__17638;
continue;
} else {
}
break;
}

var c__17055__auto___17639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___17639,jobs,results,process,async){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___17639,jobs,results,process,async){
return (function (state_17524){
var state_val_17525 = (state_17524[(1)]);
if((state_val_17525 === (1))){
var state_17524__$1 = state_17524;
var statearr_17526_17640 = state_17524__$1;
(statearr_17526_17640[(2)] = null);

(statearr_17526_17640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (2))){
var state_17524__$1 = state_17524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17524__$1,(4),from);
} else {
if((state_val_17525 === (3))){
var inst_17522 = (state_17524[(2)]);
var state_17524__$1 = state_17524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17524__$1,inst_17522);
} else {
if((state_val_17525 === (4))){
var inst_17505 = (state_17524[(7)]);
var inst_17505__$1 = (state_17524[(2)]);
var inst_17506 = (inst_17505__$1 == null);
var state_17524__$1 = (function (){var statearr_17527 = state_17524;
(statearr_17527[(7)] = inst_17505__$1);

return statearr_17527;
})();
if(cljs.core.truth_(inst_17506)){
var statearr_17528_17641 = state_17524__$1;
(statearr_17528_17641[(1)] = (5));

} else {
var statearr_17529_17642 = state_17524__$1;
(statearr_17529_17642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (5))){
var inst_17508 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17524__$1 = state_17524;
var statearr_17530_17643 = state_17524__$1;
(statearr_17530_17643[(2)] = inst_17508);

(statearr_17530_17643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (6))){
var inst_17505 = (state_17524[(7)]);
var inst_17510 = (state_17524[(8)]);
var inst_17510__$1 = cljs.core.async.chan.call(null,(1));
var inst_17511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17512 = [inst_17505,inst_17510__$1];
var inst_17513 = (new cljs.core.PersistentVector(null,2,(5),inst_17511,inst_17512,null));
var state_17524__$1 = (function (){var statearr_17531 = state_17524;
(statearr_17531[(8)] = inst_17510__$1);

return statearr_17531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17524__$1,(8),jobs,inst_17513);
} else {
if((state_val_17525 === (7))){
var inst_17520 = (state_17524[(2)]);
var state_17524__$1 = state_17524;
var statearr_17532_17644 = state_17524__$1;
(statearr_17532_17644[(2)] = inst_17520);

(statearr_17532_17644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17525 === (8))){
var inst_17510 = (state_17524[(8)]);
var inst_17515 = (state_17524[(2)]);
var state_17524__$1 = (function (){var statearr_17533 = state_17524;
(statearr_17533[(9)] = inst_17515);

return statearr_17533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17524__$1,(9),results,inst_17510);
} else {
if((state_val_17525 === (9))){
var inst_17517 = (state_17524[(2)]);
var state_17524__$1 = (function (){var statearr_17534 = state_17524;
(statearr_17534[(10)] = inst_17517);

return statearr_17534;
})();
var statearr_17535_17645 = state_17524__$1;
(statearr_17535_17645[(2)] = null);

(statearr_17535_17645[(1)] = (2));


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
});})(c__17055__auto___17639,jobs,results,process,async))
;
return ((function (switch__16943__auto__,c__17055__auto___17639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0 = (function (){
var statearr_17539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__);

(statearr_17539[(1)] = (1));

return statearr_17539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1 = (function (state_17524){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17540){if((e17540 instanceof Object)){
var ex__16947__auto__ = e17540;
var statearr_17541_17646 = state_17524;
(statearr_17541_17646[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17647 = state_17524;
state_17524 = G__17647;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = function(state_17524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1.call(this,state_17524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___17639,jobs,results,process,async))
})();
var state__17057__auto__ = (function (){var statearr_17542 = f__17056__auto__.call(null);
(statearr_17542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___17639);

return statearr_17542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___17639,jobs,results,process,async))
);


var c__17055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto__,jobs,results,process,async){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto__,jobs,results,process,async){
return (function (state_17580){
var state_val_17581 = (state_17580[(1)]);
if((state_val_17581 === (7))){
var inst_17576 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17582_17648 = state_17580__$1;
(statearr_17582_17648[(2)] = inst_17576);

(statearr_17582_17648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (20))){
var state_17580__$1 = state_17580;
var statearr_17583_17649 = state_17580__$1;
(statearr_17583_17649[(2)] = null);

(statearr_17583_17649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (1))){
var state_17580__$1 = state_17580;
var statearr_17584_17650 = state_17580__$1;
(statearr_17584_17650[(2)] = null);

(statearr_17584_17650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (4))){
var inst_17545 = (state_17580[(7)]);
var inst_17545__$1 = (state_17580[(2)]);
var inst_17546 = (inst_17545__$1 == null);
var state_17580__$1 = (function (){var statearr_17585 = state_17580;
(statearr_17585[(7)] = inst_17545__$1);

return statearr_17585;
})();
if(cljs.core.truth_(inst_17546)){
var statearr_17586_17651 = state_17580__$1;
(statearr_17586_17651[(1)] = (5));

} else {
var statearr_17587_17652 = state_17580__$1;
(statearr_17587_17652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (15))){
var inst_17558 = (state_17580[(8)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17580__$1,(18),to,inst_17558);
} else {
if((state_val_17581 === (21))){
var inst_17571 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17588_17653 = state_17580__$1;
(statearr_17588_17653[(2)] = inst_17571);

(statearr_17588_17653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (13))){
var inst_17573 = (state_17580[(2)]);
var state_17580__$1 = (function (){var statearr_17589 = state_17580;
(statearr_17589[(9)] = inst_17573);

return statearr_17589;
})();
var statearr_17590_17654 = state_17580__$1;
(statearr_17590_17654[(2)] = null);

(statearr_17590_17654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (6))){
var inst_17545 = (state_17580[(7)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17580__$1,(11),inst_17545);
} else {
if((state_val_17581 === (17))){
var inst_17566 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
if(cljs.core.truth_(inst_17566)){
var statearr_17591_17655 = state_17580__$1;
(statearr_17591_17655[(1)] = (19));

} else {
var statearr_17592_17656 = state_17580__$1;
(statearr_17592_17656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (3))){
var inst_17578 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17580__$1,inst_17578);
} else {
if((state_val_17581 === (12))){
var inst_17555 = (state_17580[(10)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17580__$1,(14),inst_17555);
} else {
if((state_val_17581 === (2))){
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17580__$1,(4),results);
} else {
if((state_val_17581 === (19))){
var state_17580__$1 = state_17580;
var statearr_17593_17657 = state_17580__$1;
(statearr_17593_17657[(2)] = null);

(statearr_17593_17657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (11))){
var inst_17555 = (state_17580[(2)]);
var state_17580__$1 = (function (){var statearr_17594 = state_17580;
(statearr_17594[(10)] = inst_17555);

return statearr_17594;
})();
var statearr_17595_17658 = state_17580__$1;
(statearr_17595_17658[(2)] = null);

(statearr_17595_17658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (9))){
var state_17580__$1 = state_17580;
var statearr_17596_17659 = state_17580__$1;
(statearr_17596_17659[(2)] = null);

(statearr_17596_17659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (5))){
var state_17580__$1 = state_17580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17597_17660 = state_17580__$1;
(statearr_17597_17660[(1)] = (8));

} else {
var statearr_17598_17661 = state_17580__$1;
(statearr_17598_17661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (14))){
var inst_17558 = (state_17580[(8)]);
var inst_17560 = (state_17580[(11)]);
var inst_17558__$1 = (state_17580[(2)]);
var inst_17559 = (inst_17558__$1 == null);
var inst_17560__$1 = cljs.core.not.call(null,inst_17559);
var state_17580__$1 = (function (){var statearr_17599 = state_17580;
(statearr_17599[(8)] = inst_17558__$1);

(statearr_17599[(11)] = inst_17560__$1);

return statearr_17599;
})();
if(inst_17560__$1){
var statearr_17600_17662 = state_17580__$1;
(statearr_17600_17662[(1)] = (15));

} else {
var statearr_17601_17663 = state_17580__$1;
(statearr_17601_17663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (16))){
var inst_17560 = (state_17580[(11)]);
var state_17580__$1 = state_17580;
var statearr_17602_17664 = state_17580__$1;
(statearr_17602_17664[(2)] = inst_17560);

(statearr_17602_17664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (10))){
var inst_17552 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17603_17665 = state_17580__$1;
(statearr_17603_17665[(2)] = inst_17552);

(statearr_17603_17665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (18))){
var inst_17563 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17604_17666 = state_17580__$1;
(statearr_17604_17666[(2)] = inst_17563);

(statearr_17604_17666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (8))){
var inst_17549 = cljs.core.async.close_BANG_.call(null,to);
var state_17580__$1 = state_17580;
var statearr_17605_17667 = state_17580__$1;
(statearr_17605_17667[(2)] = inst_17549);

(statearr_17605_17667[(1)] = (10));


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
});})(c__17055__auto__,jobs,results,process,async))
;
return ((function (switch__16943__auto__,c__17055__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0 = (function (){
var statearr_17609 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__);

(statearr_17609[(1)] = (1));

return statearr_17609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1 = (function (state_17580){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17610){if((e17610 instanceof Object)){
var ex__16947__auto__ = e17610;
var statearr_17611_17668 = state_17580;
(statearr_17611_17668[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17669 = state_17580;
state_17580 = G__17669;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__ = function(state_17580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1.call(this,state_17580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto__,jobs,results,process,async))
})();
var state__17057__auto__ = (function (){var statearr_17612 = f__17056__auto__.call(null);
(statearr_17612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto__);

return statearr_17612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto__,jobs,results,process,async))
);

return c__17055__auto__;
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
var args17670 = [];
var len__11385__auto___17673 = arguments.length;
var i__11386__auto___17674 = (0);
while(true){
if((i__11386__auto___17674 < len__11385__auto___17673)){
args17670.push((arguments[i__11386__auto___17674]));

var G__17675 = (i__11386__auto___17674 + (1));
i__11386__auto___17674 = G__17675;
continue;
} else {
}
break;
}

var G__17672 = args17670.length;
switch (G__17672) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17670.length)].join('')));

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
var args17677 = [];
var len__11385__auto___17680 = arguments.length;
var i__11386__auto___17681 = (0);
while(true){
if((i__11386__auto___17681 < len__11385__auto___17680)){
args17677.push((arguments[i__11386__auto___17681]));

var G__17682 = (i__11386__auto___17681 + (1));
i__11386__auto___17681 = G__17682;
continue;
} else {
}
break;
}

var G__17679 = args17677.length;
switch (G__17679) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17677.length)].join('')));

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
var args17684 = [];
var len__11385__auto___17737 = arguments.length;
var i__11386__auto___17738 = (0);
while(true){
if((i__11386__auto___17738 < len__11385__auto___17737)){
args17684.push((arguments[i__11386__auto___17738]));

var G__17739 = (i__11386__auto___17738 + (1));
i__11386__auto___17738 = G__17739;
continue;
} else {
}
break;
}

var G__17686 = args17684.length;
switch (G__17686) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17684.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17055__auto___17741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___17741,tc,fc){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___17741,tc,fc){
return (function (state_17712){
var state_val_17713 = (state_17712[(1)]);
if((state_val_17713 === (7))){
var inst_17708 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17714_17742 = state_17712__$1;
(statearr_17714_17742[(2)] = inst_17708);

(statearr_17714_17742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (1))){
var state_17712__$1 = state_17712;
var statearr_17715_17743 = state_17712__$1;
(statearr_17715_17743[(2)] = null);

(statearr_17715_17743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (4))){
var inst_17689 = (state_17712[(7)]);
var inst_17689__$1 = (state_17712[(2)]);
var inst_17690 = (inst_17689__$1 == null);
var state_17712__$1 = (function (){var statearr_17716 = state_17712;
(statearr_17716[(7)] = inst_17689__$1);

return statearr_17716;
})();
if(cljs.core.truth_(inst_17690)){
var statearr_17717_17744 = state_17712__$1;
(statearr_17717_17744[(1)] = (5));

} else {
var statearr_17718_17745 = state_17712__$1;
(statearr_17718_17745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (13))){
var state_17712__$1 = state_17712;
var statearr_17719_17746 = state_17712__$1;
(statearr_17719_17746[(2)] = null);

(statearr_17719_17746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (6))){
var inst_17689 = (state_17712[(7)]);
var inst_17695 = p.call(null,inst_17689);
var state_17712__$1 = state_17712;
if(cljs.core.truth_(inst_17695)){
var statearr_17720_17747 = state_17712__$1;
(statearr_17720_17747[(1)] = (9));

} else {
var statearr_17721_17748 = state_17712__$1;
(statearr_17721_17748[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (3))){
var inst_17710 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17712__$1,inst_17710);
} else {
if((state_val_17713 === (12))){
var state_17712__$1 = state_17712;
var statearr_17722_17749 = state_17712__$1;
(statearr_17722_17749[(2)] = null);

(statearr_17722_17749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (2))){
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17712__$1,(4),ch);
} else {
if((state_val_17713 === (11))){
var inst_17689 = (state_17712[(7)]);
var inst_17699 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17712__$1,(8),inst_17699,inst_17689);
} else {
if((state_val_17713 === (9))){
var state_17712__$1 = state_17712;
var statearr_17723_17750 = state_17712__$1;
(statearr_17723_17750[(2)] = tc);

(statearr_17723_17750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (5))){
var inst_17692 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17693 = cljs.core.async.close_BANG_.call(null,fc);
var state_17712__$1 = (function (){var statearr_17724 = state_17712;
(statearr_17724[(8)] = inst_17692);

return statearr_17724;
})();
var statearr_17725_17751 = state_17712__$1;
(statearr_17725_17751[(2)] = inst_17693);

(statearr_17725_17751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (14))){
var inst_17706 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17726_17752 = state_17712__$1;
(statearr_17726_17752[(2)] = inst_17706);

(statearr_17726_17752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (10))){
var state_17712__$1 = state_17712;
var statearr_17727_17753 = state_17712__$1;
(statearr_17727_17753[(2)] = fc);

(statearr_17727_17753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (8))){
var inst_17701 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
if(cljs.core.truth_(inst_17701)){
var statearr_17728_17754 = state_17712__$1;
(statearr_17728_17754[(1)] = (12));

} else {
var statearr_17729_17755 = state_17712__$1;
(statearr_17729_17755[(1)] = (13));

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
});})(c__17055__auto___17741,tc,fc))
;
return ((function (switch__16943__auto__,c__17055__auto___17741,tc,fc){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_17733 = [null,null,null,null,null,null,null,null,null];
(statearr_17733[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_17733[(1)] = (1));

return statearr_17733;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_17712){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17734){if((e17734 instanceof Object)){
var ex__16947__auto__ = e17734;
var statearr_17735_17756 = state_17712;
(statearr_17735_17756[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17757 = state_17712;
state_17712 = G__17757;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_17712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___17741,tc,fc))
})();
var state__17057__auto__ = (function (){var statearr_17736 = f__17056__auto__.call(null);
(statearr_17736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___17741);

return statearr_17736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___17741,tc,fc))
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
var c__17055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto__){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto__){
return (function (state_17821){
var state_val_17822 = (state_17821[(1)]);
if((state_val_17822 === (7))){
var inst_17817 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17823_17844 = state_17821__$1;
(statearr_17823_17844[(2)] = inst_17817);

(statearr_17823_17844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (1))){
var inst_17801 = init;
var state_17821__$1 = (function (){var statearr_17824 = state_17821;
(statearr_17824[(7)] = inst_17801);

return statearr_17824;
})();
var statearr_17825_17845 = state_17821__$1;
(statearr_17825_17845[(2)] = null);

(statearr_17825_17845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (4))){
var inst_17804 = (state_17821[(8)]);
var inst_17804__$1 = (state_17821[(2)]);
var inst_17805 = (inst_17804__$1 == null);
var state_17821__$1 = (function (){var statearr_17826 = state_17821;
(statearr_17826[(8)] = inst_17804__$1);

return statearr_17826;
})();
if(cljs.core.truth_(inst_17805)){
var statearr_17827_17846 = state_17821__$1;
(statearr_17827_17846[(1)] = (5));

} else {
var statearr_17828_17847 = state_17821__$1;
(statearr_17828_17847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (6))){
var inst_17808 = (state_17821[(9)]);
var inst_17804 = (state_17821[(8)]);
var inst_17801 = (state_17821[(7)]);
var inst_17808__$1 = f.call(null,inst_17801,inst_17804);
var inst_17809 = cljs.core.reduced_QMARK_.call(null,inst_17808__$1);
var state_17821__$1 = (function (){var statearr_17829 = state_17821;
(statearr_17829[(9)] = inst_17808__$1);

return statearr_17829;
})();
if(inst_17809){
var statearr_17830_17848 = state_17821__$1;
(statearr_17830_17848[(1)] = (8));

} else {
var statearr_17831_17849 = state_17821__$1;
(statearr_17831_17849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (3))){
var inst_17819 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17821__$1,inst_17819);
} else {
if((state_val_17822 === (2))){
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17821__$1,(4),ch);
} else {
if((state_val_17822 === (9))){
var inst_17808 = (state_17821[(9)]);
var inst_17801 = inst_17808;
var state_17821__$1 = (function (){var statearr_17832 = state_17821;
(statearr_17832[(7)] = inst_17801);

return statearr_17832;
})();
var statearr_17833_17850 = state_17821__$1;
(statearr_17833_17850[(2)] = null);

(statearr_17833_17850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (5))){
var inst_17801 = (state_17821[(7)]);
var state_17821__$1 = state_17821;
var statearr_17834_17851 = state_17821__$1;
(statearr_17834_17851[(2)] = inst_17801);

(statearr_17834_17851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (10))){
var inst_17815 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17835_17852 = state_17821__$1;
(statearr_17835_17852[(2)] = inst_17815);

(statearr_17835_17852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (8))){
var inst_17808 = (state_17821[(9)]);
var inst_17811 = cljs.core.deref.call(null,inst_17808);
var state_17821__$1 = state_17821;
var statearr_17836_17853 = state_17821__$1;
(statearr_17836_17853[(2)] = inst_17811);

(statearr_17836_17853[(1)] = (10));


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
});})(c__17055__auto__))
;
return ((function (switch__16943__auto__,c__17055__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16944__auto____0 = (function (){
var statearr_17840 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17840[(0)] = cljs$core$async$reduce_$_state_machine__16944__auto__);

(statearr_17840[(1)] = (1));

return statearr_17840;
});
var cljs$core$async$reduce_$_state_machine__16944__auto____1 = (function (state_17821){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17841){if((e17841 instanceof Object)){
var ex__16947__auto__ = e17841;
var statearr_17842_17854 = state_17821;
(statearr_17842_17854[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17855 = state_17821;
state_17821 = G__17855;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16944__auto__ = function(state_17821){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16944__auto____1.call(this,state_17821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16944__auto____0;
cljs$core$async$reduce_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16944__auto____1;
return cljs$core$async$reduce_$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto__))
})();
var state__17057__auto__ = (function (){var statearr_17843 = f__17056__auto__.call(null);
(statearr_17843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto__);

return statearr_17843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto__))
);

return c__17055__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto__,f__$1){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto__,f__$1){
return (function (state_17875){
var state_val_17876 = (state_17875[(1)]);
if((state_val_17876 === (1))){
var inst_17870 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17875__$1,(2),inst_17870);
} else {
if((state_val_17876 === (2))){
var inst_17872 = (state_17875[(2)]);
var inst_17873 = f__$1.call(null,inst_17872);
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17875__$1,inst_17873);
} else {
return null;
}
}
});})(c__17055__auto__,f__$1))
;
return ((function (switch__16943__auto__,c__17055__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16944__auto____0 = (function (){
var statearr_17880 = [null,null,null,null,null,null,null];
(statearr_17880[(0)] = cljs$core$async$transduce_$_state_machine__16944__auto__);

(statearr_17880[(1)] = (1));

return statearr_17880;
});
var cljs$core$async$transduce_$_state_machine__16944__auto____1 = (function (state_17875){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17881){if((e17881 instanceof Object)){
var ex__16947__auto__ = e17881;
var statearr_17882_17884 = state_17875;
(statearr_17882_17884[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17885 = state_17875;
state_17875 = G__17885;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16944__auto__ = function(state_17875){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16944__auto____1.call(this,state_17875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16944__auto____0;
cljs$core$async$transduce_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16944__auto____1;
return cljs$core$async$transduce_$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto__,f__$1))
})();
var state__17057__auto__ = (function (){var statearr_17883 = f__17056__auto__.call(null);
(statearr_17883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto__);

return statearr_17883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto__,f__$1))
);

return c__17055__auto__;
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
var args17886 = [];
var len__11385__auto___17938 = arguments.length;
var i__11386__auto___17939 = (0);
while(true){
if((i__11386__auto___17939 < len__11385__auto___17938)){
args17886.push((arguments[i__11386__auto___17939]));

var G__17940 = (i__11386__auto___17939 + (1));
i__11386__auto___17939 = G__17940;
continue;
} else {
}
break;
}

var G__17888 = args17886.length;
switch (G__17888) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17886.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto__){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto__){
return (function (state_17913){
var state_val_17914 = (state_17913[(1)]);
if((state_val_17914 === (7))){
var inst_17895 = (state_17913[(2)]);
var state_17913__$1 = state_17913;
var statearr_17915_17942 = state_17913__$1;
(statearr_17915_17942[(2)] = inst_17895);

(statearr_17915_17942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (1))){
var inst_17889 = cljs.core.seq.call(null,coll);
var inst_17890 = inst_17889;
var state_17913__$1 = (function (){var statearr_17916 = state_17913;
(statearr_17916[(7)] = inst_17890);

return statearr_17916;
})();
var statearr_17917_17943 = state_17913__$1;
(statearr_17917_17943[(2)] = null);

(statearr_17917_17943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (4))){
var inst_17890 = (state_17913[(7)]);
var inst_17893 = cljs.core.first.call(null,inst_17890);
var state_17913__$1 = state_17913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17913__$1,(7),ch,inst_17893);
} else {
if((state_val_17914 === (13))){
var inst_17907 = (state_17913[(2)]);
var state_17913__$1 = state_17913;
var statearr_17918_17944 = state_17913__$1;
(statearr_17918_17944[(2)] = inst_17907);

(statearr_17918_17944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (6))){
var inst_17898 = (state_17913[(2)]);
var state_17913__$1 = state_17913;
if(cljs.core.truth_(inst_17898)){
var statearr_17919_17945 = state_17913__$1;
(statearr_17919_17945[(1)] = (8));

} else {
var statearr_17920_17946 = state_17913__$1;
(statearr_17920_17946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (3))){
var inst_17911 = (state_17913[(2)]);
var state_17913__$1 = state_17913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17913__$1,inst_17911);
} else {
if((state_val_17914 === (12))){
var state_17913__$1 = state_17913;
var statearr_17921_17947 = state_17913__$1;
(statearr_17921_17947[(2)] = null);

(statearr_17921_17947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (2))){
var inst_17890 = (state_17913[(7)]);
var state_17913__$1 = state_17913;
if(cljs.core.truth_(inst_17890)){
var statearr_17922_17948 = state_17913__$1;
(statearr_17922_17948[(1)] = (4));

} else {
var statearr_17923_17949 = state_17913__$1;
(statearr_17923_17949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (11))){
var inst_17904 = cljs.core.async.close_BANG_.call(null,ch);
var state_17913__$1 = state_17913;
var statearr_17924_17950 = state_17913__$1;
(statearr_17924_17950[(2)] = inst_17904);

(statearr_17924_17950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (9))){
var state_17913__$1 = state_17913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17925_17951 = state_17913__$1;
(statearr_17925_17951[(1)] = (11));

} else {
var statearr_17926_17952 = state_17913__$1;
(statearr_17926_17952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (5))){
var inst_17890 = (state_17913[(7)]);
var state_17913__$1 = state_17913;
var statearr_17927_17953 = state_17913__$1;
(statearr_17927_17953[(2)] = inst_17890);

(statearr_17927_17953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (10))){
var inst_17909 = (state_17913[(2)]);
var state_17913__$1 = state_17913;
var statearr_17928_17954 = state_17913__$1;
(statearr_17928_17954[(2)] = inst_17909);

(statearr_17928_17954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (8))){
var inst_17890 = (state_17913[(7)]);
var inst_17900 = cljs.core.next.call(null,inst_17890);
var inst_17890__$1 = inst_17900;
var state_17913__$1 = (function (){var statearr_17929 = state_17913;
(statearr_17929[(7)] = inst_17890__$1);

return statearr_17929;
})();
var statearr_17930_17955 = state_17913__$1;
(statearr_17930_17955[(2)] = null);

(statearr_17930_17955[(1)] = (2));


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
});})(c__17055__auto__))
;
return ((function (switch__16943__auto__,c__17055__auto__){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_17934 = [null,null,null,null,null,null,null,null];
(statearr_17934[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_17934[(1)] = (1));

return statearr_17934;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_17913){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_17913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e17935){if((e17935 instanceof Object)){
var ex__16947__auto__ = e17935;
var statearr_17936_17956 = state_17913;
(statearr_17936_17956[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17957 = state_17913;
state_17913 = G__17957;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_17913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_17913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto__))
})();
var state__17057__auto__ = (function (){var statearr_17937 = f__17056__auto__.call(null);
(statearr_17937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto__);

return statearr_17937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto__))
);

return c__17055__auto__;
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
var x__10940__auto__ = (((_ == null))?null:_);
var m__10941__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,_);
} else {
var m__10941__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,_);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10941__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m,ch);
} else {
var m__10941__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m,ch);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m);
} else {
var m__10941__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async18183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18183 = (function (ch,cs,meta18184){
this.ch = ch;
this.cs = cs;
this.meta18184 = meta18184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18185,meta18184__$1){
var self__ = this;
var _18185__$1 = this;
return (new cljs.core.async.t_cljs$core$async18183(self__.ch,self__.cs,meta18184__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18185){
var self__ = this;
var _18185__$1 = this;
return self__.meta18184;
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18184","meta18184",1108319762,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18183";

cljs.core.async.t_cljs$core$async18183.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async18183");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18183 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18183(ch__$1,cs__$1,meta18184){
return (new cljs.core.async.t_cljs$core$async18183(ch__$1,cs__$1,meta18184));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18183(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17055__auto___18408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___18408,cs,m,dchan,dctr,done){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___18408,cs,m,dchan,dctr,done){
return (function (state_18320){
var state_val_18321 = (state_18320[(1)]);
if((state_val_18321 === (7))){
var inst_18316 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18322_18409 = state_18320__$1;
(statearr_18322_18409[(2)] = inst_18316);

(statearr_18322_18409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (20))){
var inst_18219 = (state_18320[(7)]);
var inst_18231 = cljs.core.first.call(null,inst_18219);
var inst_18232 = cljs.core.nth.call(null,inst_18231,(0),null);
var inst_18233 = cljs.core.nth.call(null,inst_18231,(1),null);
var state_18320__$1 = (function (){var statearr_18323 = state_18320;
(statearr_18323[(8)] = inst_18232);

return statearr_18323;
})();
if(cljs.core.truth_(inst_18233)){
var statearr_18324_18410 = state_18320__$1;
(statearr_18324_18410[(1)] = (22));

} else {
var statearr_18325_18411 = state_18320__$1;
(statearr_18325_18411[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (27))){
var inst_18263 = (state_18320[(9)]);
var inst_18268 = (state_18320[(10)]);
var inst_18261 = (state_18320[(11)]);
var inst_18188 = (state_18320[(12)]);
var inst_18268__$1 = cljs.core._nth.call(null,inst_18261,inst_18263);
var inst_18269 = cljs.core.async.put_BANG_.call(null,inst_18268__$1,inst_18188,done);
var state_18320__$1 = (function (){var statearr_18326 = state_18320;
(statearr_18326[(10)] = inst_18268__$1);

return statearr_18326;
})();
if(cljs.core.truth_(inst_18269)){
var statearr_18327_18412 = state_18320__$1;
(statearr_18327_18412[(1)] = (30));

} else {
var statearr_18328_18413 = state_18320__$1;
(statearr_18328_18413[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (1))){
var state_18320__$1 = state_18320;
var statearr_18329_18414 = state_18320__$1;
(statearr_18329_18414[(2)] = null);

(statearr_18329_18414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (24))){
var inst_18219 = (state_18320[(7)]);
var inst_18238 = (state_18320[(2)]);
var inst_18239 = cljs.core.next.call(null,inst_18219);
var inst_18197 = inst_18239;
var inst_18198 = null;
var inst_18199 = (0);
var inst_18200 = (0);
var state_18320__$1 = (function (){var statearr_18330 = state_18320;
(statearr_18330[(13)] = inst_18238);

(statearr_18330[(14)] = inst_18197);

(statearr_18330[(15)] = inst_18198);

(statearr_18330[(16)] = inst_18200);

(statearr_18330[(17)] = inst_18199);

return statearr_18330;
})();
var statearr_18331_18415 = state_18320__$1;
(statearr_18331_18415[(2)] = null);

(statearr_18331_18415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (39))){
var state_18320__$1 = state_18320;
var statearr_18335_18416 = state_18320__$1;
(statearr_18335_18416[(2)] = null);

(statearr_18335_18416[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (4))){
var inst_18188 = (state_18320[(12)]);
var inst_18188__$1 = (state_18320[(2)]);
var inst_18189 = (inst_18188__$1 == null);
var state_18320__$1 = (function (){var statearr_18336 = state_18320;
(statearr_18336[(12)] = inst_18188__$1);

return statearr_18336;
})();
if(cljs.core.truth_(inst_18189)){
var statearr_18337_18417 = state_18320__$1;
(statearr_18337_18417[(1)] = (5));

} else {
var statearr_18338_18418 = state_18320__$1;
(statearr_18338_18418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (15))){
var inst_18197 = (state_18320[(14)]);
var inst_18198 = (state_18320[(15)]);
var inst_18200 = (state_18320[(16)]);
var inst_18199 = (state_18320[(17)]);
var inst_18215 = (state_18320[(2)]);
var inst_18216 = (inst_18200 + (1));
var tmp18332 = inst_18197;
var tmp18333 = inst_18198;
var tmp18334 = inst_18199;
var inst_18197__$1 = tmp18332;
var inst_18198__$1 = tmp18333;
var inst_18199__$1 = tmp18334;
var inst_18200__$1 = inst_18216;
var state_18320__$1 = (function (){var statearr_18339 = state_18320;
(statearr_18339[(14)] = inst_18197__$1);

(statearr_18339[(15)] = inst_18198__$1);

(statearr_18339[(16)] = inst_18200__$1);

(statearr_18339[(17)] = inst_18199__$1);

(statearr_18339[(18)] = inst_18215);

return statearr_18339;
})();
var statearr_18340_18419 = state_18320__$1;
(statearr_18340_18419[(2)] = null);

(statearr_18340_18419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (21))){
var inst_18242 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18344_18420 = state_18320__$1;
(statearr_18344_18420[(2)] = inst_18242);

(statearr_18344_18420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (31))){
var inst_18268 = (state_18320[(10)]);
var inst_18272 = done.call(null,null);
var inst_18273 = cljs.core.async.untap_STAR_.call(null,m,inst_18268);
var state_18320__$1 = (function (){var statearr_18345 = state_18320;
(statearr_18345[(19)] = inst_18272);

return statearr_18345;
})();
var statearr_18346_18421 = state_18320__$1;
(statearr_18346_18421[(2)] = inst_18273);

(statearr_18346_18421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (32))){
var inst_18263 = (state_18320[(9)]);
var inst_18262 = (state_18320[(20)]);
var inst_18260 = (state_18320[(21)]);
var inst_18261 = (state_18320[(11)]);
var inst_18275 = (state_18320[(2)]);
var inst_18276 = (inst_18263 + (1));
var tmp18341 = inst_18262;
var tmp18342 = inst_18260;
var tmp18343 = inst_18261;
var inst_18260__$1 = tmp18342;
var inst_18261__$1 = tmp18343;
var inst_18262__$1 = tmp18341;
var inst_18263__$1 = inst_18276;
var state_18320__$1 = (function (){var statearr_18347 = state_18320;
(statearr_18347[(9)] = inst_18263__$1);

(statearr_18347[(20)] = inst_18262__$1);

(statearr_18347[(21)] = inst_18260__$1);

(statearr_18347[(22)] = inst_18275);

(statearr_18347[(11)] = inst_18261__$1);

return statearr_18347;
})();
var statearr_18348_18422 = state_18320__$1;
(statearr_18348_18422[(2)] = null);

(statearr_18348_18422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (40))){
var inst_18288 = (state_18320[(23)]);
var inst_18292 = done.call(null,null);
var inst_18293 = cljs.core.async.untap_STAR_.call(null,m,inst_18288);
var state_18320__$1 = (function (){var statearr_18349 = state_18320;
(statearr_18349[(24)] = inst_18292);

return statearr_18349;
})();
var statearr_18350_18423 = state_18320__$1;
(statearr_18350_18423[(2)] = inst_18293);

(statearr_18350_18423[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (33))){
var inst_18279 = (state_18320[(25)]);
var inst_18281 = cljs.core.chunked_seq_QMARK_.call(null,inst_18279);
var state_18320__$1 = state_18320;
if(inst_18281){
var statearr_18351_18424 = state_18320__$1;
(statearr_18351_18424[(1)] = (36));

} else {
var statearr_18352_18425 = state_18320__$1;
(statearr_18352_18425[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (13))){
var inst_18209 = (state_18320[(26)]);
var inst_18212 = cljs.core.async.close_BANG_.call(null,inst_18209);
var state_18320__$1 = state_18320;
var statearr_18353_18426 = state_18320__$1;
(statearr_18353_18426[(2)] = inst_18212);

(statearr_18353_18426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (22))){
var inst_18232 = (state_18320[(8)]);
var inst_18235 = cljs.core.async.close_BANG_.call(null,inst_18232);
var state_18320__$1 = state_18320;
var statearr_18354_18427 = state_18320__$1;
(statearr_18354_18427[(2)] = inst_18235);

(statearr_18354_18427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (36))){
var inst_18279 = (state_18320[(25)]);
var inst_18283 = cljs.core.chunk_first.call(null,inst_18279);
var inst_18284 = cljs.core.chunk_rest.call(null,inst_18279);
var inst_18285 = cljs.core.count.call(null,inst_18283);
var inst_18260 = inst_18284;
var inst_18261 = inst_18283;
var inst_18262 = inst_18285;
var inst_18263 = (0);
var state_18320__$1 = (function (){var statearr_18355 = state_18320;
(statearr_18355[(9)] = inst_18263);

(statearr_18355[(20)] = inst_18262);

(statearr_18355[(21)] = inst_18260);

(statearr_18355[(11)] = inst_18261);

return statearr_18355;
})();
var statearr_18356_18428 = state_18320__$1;
(statearr_18356_18428[(2)] = null);

(statearr_18356_18428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (41))){
var inst_18279 = (state_18320[(25)]);
var inst_18295 = (state_18320[(2)]);
var inst_18296 = cljs.core.next.call(null,inst_18279);
var inst_18260 = inst_18296;
var inst_18261 = null;
var inst_18262 = (0);
var inst_18263 = (0);
var state_18320__$1 = (function (){var statearr_18357 = state_18320;
(statearr_18357[(9)] = inst_18263);

(statearr_18357[(20)] = inst_18262);

(statearr_18357[(21)] = inst_18260);

(statearr_18357[(27)] = inst_18295);

(statearr_18357[(11)] = inst_18261);

return statearr_18357;
})();
var statearr_18358_18429 = state_18320__$1;
(statearr_18358_18429[(2)] = null);

(statearr_18358_18429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (43))){
var state_18320__$1 = state_18320;
var statearr_18359_18430 = state_18320__$1;
(statearr_18359_18430[(2)] = null);

(statearr_18359_18430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (29))){
var inst_18304 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18360_18431 = state_18320__$1;
(statearr_18360_18431[(2)] = inst_18304);

(statearr_18360_18431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (44))){
var inst_18313 = (state_18320[(2)]);
var state_18320__$1 = (function (){var statearr_18361 = state_18320;
(statearr_18361[(28)] = inst_18313);

return statearr_18361;
})();
var statearr_18362_18432 = state_18320__$1;
(statearr_18362_18432[(2)] = null);

(statearr_18362_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (6))){
var inst_18252 = (state_18320[(29)]);
var inst_18251 = cljs.core.deref.call(null,cs);
var inst_18252__$1 = cljs.core.keys.call(null,inst_18251);
var inst_18253 = cljs.core.count.call(null,inst_18252__$1);
var inst_18254 = cljs.core.reset_BANG_.call(null,dctr,inst_18253);
var inst_18259 = cljs.core.seq.call(null,inst_18252__$1);
var inst_18260 = inst_18259;
var inst_18261 = null;
var inst_18262 = (0);
var inst_18263 = (0);
var state_18320__$1 = (function (){var statearr_18363 = state_18320;
(statearr_18363[(29)] = inst_18252__$1);

(statearr_18363[(9)] = inst_18263);

(statearr_18363[(20)] = inst_18262);

(statearr_18363[(21)] = inst_18260);

(statearr_18363[(30)] = inst_18254);

(statearr_18363[(11)] = inst_18261);

return statearr_18363;
})();
var statearr_18364_18433 = state_18320__$1;
(statearr_18364_18433[(2)] = null);

(statearr_18364_18433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (28))){
var inst_18279 = (state_18320[(25)]);
var inst_18260 = (state_18320[(21)]);
var inst_18279__$1 = cljs.core.seq.call(null,inst_18260);
var state_18320__$1 = (function (){var statearr_18365 = state_18320;
(statearr_18365[(25)] = inst_18279__$1);

return statearr_18365;
})();
if(inst_18279__$1){
var statearr_18366_18434 = state_18320__$1;
(statearr_18366_18434[(1)] = (33));

} else {
var statearr_18367_18435 = state_18320__$1;
(statearr_18367_18435[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (25))){
var inst_18263 = (state_18320[(9)]);
var inst_18262 = (state_18320[(20)]);
var inst_18265 = (inst_18263 < inst_18262);
var inst_18266 = inst_18265;
var state_18320__$1 = state_18320;
if(cljs.core.truth_(inst_18266)){
var statearr_18368_18436 = state_18320__$1;
(statearr_18368_18436[(1)] = (27));

} else {
var statearr_18369_18437 = state_18320__$1;
(statearr_18369_18437[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (34))){
var state_18320__$1 = state_18320;
var statearr_18370_18438 = state_18320__$1;
(statearr_18370_18438[(2)] = null);

(statearr_18370_18438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (17))){
var state_18320__$1 = state_18320;
var statearr_18371_18439 = state_18320__$1;
(statearr_18371_18439[(2)] = null);

(statearr_18371_18439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (3))){
var inst_18318 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18320__$1,inst_18318);
} else {
if((state_val_18321 === (12))){
var inst_18247 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18372_18440 = state_18320__$1;
(statearr_18372_18440[(2)] = inst_18247);

(statearr_18372_18440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (2))){
var state_18320__$1 = state_18320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18320__$1,(4),ch);
} else {
if((state_val_18321 === (23))){
var state_18320__$1 = state_18320;
var statearr_18373_18441 = state_18320__$1;
(statearr_18373_18441[(2)] = null);

(statearr_18373_18441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (35))){
var inst_18302 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18374_18442 = state_18320__$1;
(statearr_18374_18442[(2)] = inst_18302);

(statearr_18374_18442[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (19))){
var inst_18219 = (state_18320[(7)]);
var inst_18223 = cljs.core.chunk_first.call(null,inst_18219);
var inst_18224 = cljs.core.chunk_rest.call(null,inst_18219);
var inst_18225 = cljs.core.count.call(null,inst_18223);
var inst_18197 = inst_18224;
var inst_18198 = inst_18223;
var inst_18199 = inst_18225;
var inst_18200 = (0);
var state_18320__$1 = (function (){var statearr_18375 = state_18320;
(statearr_18375[(14)] = inst_18197);

(statearr_18375[(15)] = inst_18198);

(statearr_18375[(16)] = inst_18200);

(statearr_18375[(17)] = inst_18199);

return statearr_18375;
})();
var statearr_18376_18443 = state_18320__$1;
(statearr_18376_18443[(2)] = null);

(statearr_18376_18443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (11))){
var inst_18219 = (state_18320[(7)]);
var inst_18197 = (state_18320[(14)]);
var inst_18219__$1 = cljs.core.seq.call(null,inst_18197);
var state_18320__$1 = (function (){var statearr_18377 = state_18320;
(statearr_18377[(7)] = inst_18219__$1);

return statearr_18377;
})();
if(inst_18219__$1){
var statearr_18378_18444 = state_18320__$1;
(statearr_18378_18444[(1)] = (16));

} else {
var statearr_18379_18445 = state_18320__$1;
(statearr_18379_18445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (9))){
var inst_18249 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18380_18446 = state_18320__$1;
(statearr_18380_18446[(2)] = inst_18249);

(statearr_18380_18446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (5))){
var inst_18195 = cljs.core.deref.call(null,cs);
var inst_18196 = cljs.core.seq.call(null,inst_18195);
var inst_18197 = inst_18196;
var inst_18198 = null;
var inst_18199 = (0);
var inst_18200 = (0);
var state_18320__$1 = (function (){var statearr_18381 = state_18320;
(statearr_18381[(14)] = inst_18197);

(statearr_18381[(15)] = inst_18198);

(statearr_18381[(16)] = inst_18200);

(statearr_18381[(17)] = inst_18199);

return statearr_18381;
})();
var statearr_18382_18447 = state_18320__$1;
(statearr_18382_18447[(2)] = null);

(statearr_18382_18447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (14))){
var state_18320__$1 = state_18320;
var statearr_18383_18448 = state_18320__$1;
(statearr_18383_18448[(2)] = null);

(statearr_18383_18448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (45))){
var inst_18310 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18384_18449 = state_18320__$1;
(statearr_18384_18449[(2)] = inst_18310);

(statearr_18384_18449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (26))){
var inst_18252 = (state_18320[(29)]);
var inst_18306 = (state_18320[(2)]);
var inst_18307 = cljs.core.seq.call(null,inst_18252);
var state_18320__$1 = (function (){var statearr_18385 = state_18320;
(statearr_18385[(31)] = inst_18306);

return statearr_18385;
})();
if(inst_18307){
var statearr_18386_18450 = state_18320__$1;
(statearr_18386_18450[(1)] = (42));

} else {
var statearr_18387_18451 = state_18320__$1;
(statearr_18387_18451[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (16))){
var inst_18219 = (state_18320[(7)]);
var inst_18221 = cljs.core.chunked_seq_QMARK_.call(null,inst_18219);
var state_18320__$1 = state_18320;
if(inst_18221){
var statearr_18388_18452 = state_18320__$1;
(statearr_18388_18452[(1)] = (19));

} else {
var statearr_18389_18453 = state_18320__$1;
(statearr_18389_18453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (38))){
var inst_18299 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18390_18454 = state_18320__$1;
(statearr_18390_18454[(2)] = inst_18299);

(statearr_18390_18454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (30))){
var state_18320__$1 = state_18320;
var statearr_18391_18455 = state_18320__$1;
(statearr_18391_18455[(2)] = null);

(statearr_18391_18455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (10))){
var inst_18198 = (state_18320[(15)]);
var inst_18200 = (state_18320[(16)]);
var inst_18208 = cljs.core._nth.call(null,inst_18198,inst_18200);
var inst_18209 = cljs.core.nth.call(null,inst_18208,(0),null);
var inst_18210 = cljs.core.nth.call(null,inst_18208,(1),null);
var state_18320__$1 = (function (){var statearr_18392 = state_18320;
(statearr_18392[(26)] = inst_18209);

return statearr_18392;
})();
if(cljs.core.truth_(inst_18210)){
var statearr_18393_18456 = state_18320__$1;
(statearr_18393_18456[(1)] = (13));

} else {
var statearr_18394_18457 = state_18320__$1;
(statearr_18394_18457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (18))){
var inst_18245 = (state_18320[(2)]);
var state_18320__$1 = state_18320;
var statearr_18395_18458 = state_18320__$1;
(statearr_18395_18458[(2)] = inst_18245);

(statearr_18395_18458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (42))){
var state_18320__$1 = state_18320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18320__$1,(45),dchan);
} else {
if((state_val_18321 === (37))){
var inst_18279 = (state_18320[(25)]);
var inst_18288 = (state_18320[(23)]);
var inst_18188 = (state_18320[(12)]);
var inst_18288__$1 = cljs.core.first.call(null,inst_18279);
var inst_18289 = cljs.core.async.put_BANG_.call(null,inst_18288__$1,inst_18188,done);
var state_18320__$1 = (function (){var statearr_18396 = state_18320;
(statearr_18396[(23)] = inst_18288__$1);

return statearr_18396;
})();
if(cljs.core.truth_(inst_18289)){
var statearr_18397_18459 = state_18320__$1;
(statearr_18397_18459[(1)] = (39));

} else {
var statearr_18398_18460 = state_18320__$1;
(statearr_18398_18460[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18321 === (8))){
var inst_18200 = (state_18320[(16)]);
var inst_18199 = (state_18320[(17)]);
var inst_18202 = (inst_18200 < inst_18199);
var inst_18203 = inst_18202;
var state_18320__$1 = state_18320;
if(cljs.core.truth_(inst_18203)){
var statearr_18399_18461 = state_18320__$1;
(statearr_18399_18461[(1)] = (10));

} else {
var statearr_18400_18462 = state_18320__$1;
(statearr_18400_18462[(1)] = (11));

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
});})(c__17055__auto___18408,cs,m,dchan,dctr,done))
;
return ((function (switch__16943__auto__,c__17055__auto___18408,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16944__auto__ = null;
var cljs$core$async$mult_$_state_machine__16944__auto____0 = (function (){
var statearr_18404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18404[(0)] = cljs$core$async$mult_$_state_machine__16944__auto__);

(statearr_18404[(1)] = (1));

return statearr_18404;
});
var cljs$core$async$mult_$_state_machine__16944__auto____1 = (function (state_18320){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_18320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e18405){if((e18405 instanceof Object)){
var ex__16947__auto__ = e18405;
var statearr_18406_18463 = state_18320;
(statearr_18406_18463[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18464 = state_18320;
state_18320 = G__18464;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16944__auto__ = function(state_18320){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16944__auto____1.call(this,state_18320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16944__auto____0;
cljs$core$async$mult_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16944__auto____1;
return cljs$core$async$mult_$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___18408,cs,m,dchan,dctr,done))
})();
var state__17057__auto__ = (function (){var statearr_18407 = f__17056__auto__.call(null);
(statearr_18407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___18408);

return statearr_18407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___18408,cs,m,dchan,dctr,done))
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
var args18465 = [];
var len__11385__auto___18468 = arguments.length;
var i__11386__auto___18469 = (0);
while(true){
if((i__11386__auto___18469 < len__11385__auto___18468)){
args18465.push((arguments[i__11386__auto___18469]));

var G__18470 = (i__11386__auto___18469 + (1));
i__11386__auto___18469 = G__18470;
continue;
} else {
}
break;
}

var G__18467 = args18465.length;
switch (G__18467) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18465.length)].join('')));

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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m,ch);
} else {
var m__10941__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m,ch);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m,ch);
} else {
var m__10941__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m,ch);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m);
} else {
var m__10941__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m,state_map);
} else {
var m__10941__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m,state_map);
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
var x__10940__auto__ = (((m == null))?null:m);
var m__10941__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,m,mode);
} else {
var m__10941__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___18482 = arguments.length;
var i__11386__auto___18483 = (0);
while(true){
if((i__11386__auto___18483 < len__11385__auto___18482)){
args__11392__auto__.push((arguments[i__11386__auto___18483]));

var G__18484 = (i__11386__auto___18483 + (1));
i__11386__auto___18483 = G__18484;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18476){
var map__18477 = p__18476;
var map__18477__$1 = ((((!((map__18477 == null)))?((((map__18477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18477):map__18477);
var opts = map__18477__$1;
var statearr_18479_18485 = state;
(statearr_18479_18485[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18477,map__18477__$1,opts){
return (function (val){
var statearr_18480_18486 = state;
(statearr_18480_18486[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18477,map__18477__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18481_18487 = state;
(statearr_18481_18487[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18472){
var G__18473 = cljs.core.first.call(null,seq18472);
var seq18472__$1 = cljs.core.next.call(null,seq18472);
var G__18474 = cljs.core.first.call(null,seq18472__$1);
var seq18472__$2 = cljs.core.next.call(null,seq18472__$1);
var G__18475 = cljs.core.first.call(null,seq18472__$2);
var seq18472__$3 = cljs.core.next.call(null,seq18472__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18473,G__18474,G__18475,seq18472__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18655 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18656){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18656 = meta18656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18657,meta18656__$1){
var self__ = this;
var _18657__$1 = this;
return (new cljs.core.async.t_cljs$core$async18655(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18656__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18657){
var self__ = this;
var _18657__$1 = this;
return self__.meta18656;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18655.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18656","meta18656",855844380,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18655";

cljs.core.async.t_cljs$core$async18655.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async18655");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18655 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18655(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18656){
return (new cljs.core.async.t_cljs$core$async18655(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18656));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18655(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17055__auto___18822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___18822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___18822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18759){
var state_val_18760 = (state_18759[(1)]);
if((state_val_18760 === (7))){
var inst_18674 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18761_18823 = state_18759__$1;
(statearr_18761_18823[(2)] = inst_18674);

(statearr_18761_18823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (20))){
var inst_18686 = (state_18759[(7)]);
var state_18759__$1 = state_18759;
var statearr_18762_18824 = state_18759__$1;
(statearr_18762_18824[(2)] = inst_18686);

(statearr_18762_18824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (27))){
var state_18759__$1 = state_18759;
var statearr_18763_18825 = state_18759__$1;
(statearr_18763_18825[(2)] = null);

(statearr_18763_18825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (1))){
var inst_18661 = (state_18759[(8)]);
var inst_18661__$1 = calc_state.call(null);
var inst_18663 = (inst_18661__$1 == null);
var inst_18664 = cljs.core.not.call(null,inst_18663);
var state_18759__$1 = (function (){var statearr_18764 = state_18759;
(statearr_18764[(8)] = inst_18661__$1);

return statearr_18764;
})();
if(inst_18664){
var statearr_18765_18826 = state_18759__$1;
(statearr_18765_18826[(1)] = (2));

} else {
var statearr_18766_18827 = state_18759__$1;
(statearr_18766_18827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (24))){
var inst_18733 = (state_18759[(9)]);
var inst_18719 = (state_18759[(10)]);
var inst_18710 = (state_18759[(11)]);
var inst_18733__$1 = inst_18710.call(null,inst_18719);
var state_18759__$1 = (function (){var statearr_18767 = state_18759;
(statearr_18767[(9)] = inst_18733__$1);

return statearr_18767;
})();
if(cljs.core.truth_(inst_18733__$1)){
var statearr_18768_18828 = state_18759__$1;
(statearr_18768_18828[(1)] = (29));

} else {
var statearr_18769_18829 = state_18759__$1;
(statearr_18769_18829[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (4))){
var inst_18677 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18677)){
var statearr_18770_18830 = state_18759__$1;
(statearr_18770_18830[(1)] = (8));

} else {
var statearr_18771_18831 = state_18759__$1;
(statearr_18771_18831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (15))){
var inst_18704 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18704)){
var statearr_18772_18832 = state_18759__$1;
(statearr_18772_18832[(1)] = (19));

} else {
var statearr_18773_18833 = state_18759__$1;
(statearr_18773_18833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (21))){
var inst_18709 = (state_18759[(12)]);
var inst_18709__$1 = (state_18759[(2)]);
var inst_18710 = cljs.core.get.call(null,inst_18709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18711 = cljs.core.get.call(null,inst_18709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18712 = cljs.core.get.call(null,inst_18709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18759__$1 = (function (){var statearr_18774 = state_18759;
(statearr_18774[(13)] = inst_18711);

(statearr_18774[(11)] = inst_18710);

(statearr_18774[(12)] = inst_18709__$1);

return statearr_18774;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18759__$1,(22),inst_18712);
} else {
if((state_val_18760 === (31))){
var inst_18741 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18741)){
var statearr_18775_18834 = state_18759__$1;
(statearr_18775_18834[(1)] = (32));

} else {
var statearr_18776_18835 = state_18759__$1;
(statearr_18776_18835[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (32))){
var inst_18718 = (state_18759[(14)]);
var state_18759__$1 = state_18759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18759__$1,(35),out,inst_18718);
} else {
if((state_val_18760 === (33))){
var inst_18709 = (state_18759[(12)]);
var inst_18686 = inst_18709;
var state_18759__$1 = (function (){var statearr_18777 = state_18759;
(statearr_18777[(7)] = inst_18686);

return statearr_18777;
})();
var statearr_18778_18836 = state_18759__$1;
(statearr_18778_18836[(2)] = null);

(statearr_18778_18836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (13))){
var inst_18686 = (state_18759[(7)]);
var inst_18693 = inst_18686.cljs$lang$protocol_mask$partition0$;
var inst_18694 = (inst_18693 & (64));
var inst_18695 = inst_18686.cljs$core$ISeq$;
var inst_18696 = (cljs.core.PROTOCOL_SENTINEL === inst_18695);
var inst_18697 = (inst_18694) || (inst_18696);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18697)){
var statearr_18779_18837 = state_18759__$1;
(statearr_18779_18837[(1)] = (16));

} else {
var statearr_18780_18838 = state_18759__$1;
(statearr_18780_18838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (22))){
var inst_18718 = (state_18759[(14)]);
var inst_18719 = (state_18759[(10)]);
var inst_18717 = (state_18759[(2)]);
var inst_18718__$1 = cljs.core.nth.call(null,inst_18717,(0),null);
var inst_18719__$1 = cljs.core.nth.call(null,inst_18717,(1),null);
var inst_18720 = (inst_18718__$1 == null);
var inst_18721 = cljs.core._EQ_.call(null,inst_18719__$1,change);
var inst_18722 = (inst_18720) || (inst_18721);
var state_18759__$1 = (function (){var statearr_18781 = state_18759;
(statearr_18781[(14)] = inst_18718__$1);

(statearr_18781[(10)] = inst_18719__$1);

return statearr_18781;
})();
if(cljs.core.truth_(inst_18722)){
var statearr_18782_18839 = state_18759__$1;
(statearr_18782_18839[(1)] = (23));

} else {
var statearr_18783_18840 = state_18759__$1;
(statearr_18783_18840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (36))){
var inst_18709 = (state_18759[(12)]);
var inst_18686 = inst_18709;
var state_18759__$1 = (function (){var statearr_18784 = state_18759;
(statearr_18784[(7)] = inst_18686);

return statearr_18784;
})();
var statearr_18785_18841 = state_18759__$1;
(statearr_18785_18841[(2)] = null);

(statearr_18785_18841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (29))){
var inst_18733 = (state_18759[(9)]);
var state_18759__$1 = state_18759;
var statearr_18786_18842 = state_18759__$1;
(statearr_18786_18842[(2)] = inst_18733);

(statearr_18786_18842[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (6))){
var state_18759__$1 = state_18759;
var statearr_18787_18843 = state_18759__$1;
(statearr_18787_18843[(2)] = false);

(statearr_18787_18843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (28))){
var inst_18729 = (state_18759[(2)]);
var inst_18730 = calc_state.call(null);
var inst_18686 = inst_18730;
var state_18759__$1 = (function (){var statearr_18788 = state_18759;
(statearr_18788[(15)] = inst_18729);

(statearr_18788[(7)] = inst_18686);

return statearr_18788;
})();
var statearr_18789_18844 = state_18759__$1;
(statearr_18789_18844[(2)] = null);

(statearr_18789_18844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (25))){
var inst_18755 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18790_18845 = state_18759__$1;
(statearr_18790_18845[(2)] = inst_18755);

(statearr_18790_18845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (34))){
var inst_18753 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18791_18846 = state_18759__$1;
(statearr_18791_18846[(2)] = inst_18753);

(statearr_18791_18846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (17))){
var state_18759__$1 = state_18759;
var statearr_18792_18847 = state_18759__$1;
(statearr_18792_18847[(2)] = false);

(statearr_18792_18847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (3))){
var state_18759__$1 = state_18759;
var statearr_18793_18848 = state_18759__$1;
(statearr_18793_18848[(2)] = false);

(statearr_18793_18848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (12))){
var inst_18757 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18759__$1,inst_18757);
} else {
if((state_val_18760 === (2))){
var inst_18661 = (state_18759[(8)]);
var inst_18666 = inst_18661.cljs$lang$protocol_mask$partition0$;
var inst_18667 = (inst_18666 & (64));
var inst_18668 = inst_18661.cljs$core$ISeq$;
var inst_18669 = (cljs.core.PROTOCOL_SENTINEL === inst_18668);
var inst_18670 = (inst_18667) || (inst_18669);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18670)){
var statearr_18794_18849 = state_18759__$1;
(statearr_18794_18849[(1)] = (5));

} else {
var statearr_18795_18850 = state_18759__$1;
(statearr_18795_18850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (23))){
var inst_18718 = (state_18759[(14)]);
var inst_18724 = (inst_18718 == null);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18724)){
var statearr_18796_18851 = state_18759__$1;
(statearr_18796_18851[(1)] = (26));

} else {
var statearr_18797_18852 = state_18759__$1;
(statearr_18797_18852[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (35))){
var inst_18744 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18744)){
var statearr_18798_18853 = state_18759__$1;
(statearr_18798_18853[(1)] = (36));

} else {
var statearr_18799_18854 = state_18759__$1;
(statearr_18799_18854[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (19))){
var inst_18686 = (state_18759[(7)]);
var inst_18706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18686);
var state_18759__$1 = state_18759;
var statearr_18800_18855 = state_18759__$1;
(statearr_18800_18855[(2)] = inst_18706);

(statearr_18800_18855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (11))){
var inst_18686 = (state_18759[(7)]);
var inst_18690 = (inst_18686 == null);
var inst_18691 = cljs.core.not.call(null,inst_18690);
var state_18759__$1 = state_18759;
if(inst_18691){
var statearr_18801_18856 = state_18759__$1;
(statearr_18801_18856[(1)] = (13));

} else {
var statearr_18802_18857 = state_18759__$1;
(statearr_18802_18857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (9))){
var inst_18661 = (state_18759[(8)]);
var state_18759__$1 = state_18759;
var statearr_18803_18858 = state_18759__$1;
(statearr_18803_18858[(2)] = inst_18661);

(statearr_18803_18858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (5))){
var state_18759__$1 = state_18759;
var statearr_18804_18859 = state_18759__$1;
(statearr_18804_18859[(2)] = true);

(statearr_18804_18859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (14))){
var state_18759__$1 = state_18759;
var statearr_18805_18860 = state_18759__$1;
(statearr_18805_18860[(2)] = false);

(statearr_18805_18860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (26))){
var inst_18719 = (state_18759[(10)]);
var inst_18726 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18719);
var state_18759__$1 = state_18759;
var statearr_18806_18861 = state_18759__$1;
(statearr_18806_18861[(2)] = inst_18726);

(statearr_18806_18861[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (16))){
var state_18759__$1 = state_18759;
var statearr_18807_18862 = state_18759__$1;
(statearr_18807_18862[(2)] = true);

(statearr_18807_18862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (38))){
var inst_18749 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18808_18863 = state_18759__$1;
(statearr_18808_18863[(2)] = inst_18749);

(statearr_18808_18863[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (30))){
var inst_18719 = (state_18759[(10)]);
var inst_18711 = (state_18759[(13)]);
var inst_18710 = (state_18759[(11)]);
var inst_18736 = cljs.core.empty_QMARK_.call(null,inst_18710);
var inst_18737 = inst_18711.call(null,inst_18719);
var inst_18738 = cljs.core.not.call(null,inst_18737);
var inst_18739 = (inst_18736) && (inst_18738);
var state_18759__$1 = state_18759;
var statearr_18809_18864 = state_18759__$1;
(statearr_18809_18864[(2)] = inst_18739);

(statearr_18809_18864[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (10))){
var inst_18661 = (state_18759[(8)]);
var inst_18682 = (state_18759[(2)]);
var inst_18683 = cljs.core.get.call(null,inst_18682,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18684 = cljs.core.get.call(null,inst_18682,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18685 = cljs.core.get.call(null,inst_18682,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18686 = inst_18661;
var state_18759__$1 = (function (){var statearr_18810 = state_18759;
(statearr_18810[(16)] = inst_18685);

(statearr_18810[(17)] = inst_18683);

(statearr_18810[(18)] = inst_18684);

(statearr_18810[(7)] = inst_18686);

return statearr_18810;
})();
var statearr_18811_18865 = state_18759__$1;
(statearr_18811_18865[(2)] = null);

(statearr_18811_18865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (18))){
var inst_18701 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18812_18866 = state_18759__$1;
(statearr_18812_18866[(2)] = inst_18701);

(statearr_18812_18866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (37))){
var state_18759__$1 = state_18759;
var statearr_18813_18867 = state_18759__$1;
(statearr_18813_18867[(2)] = null);

(statearr_18813_18867[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (8))){
var inst_18661 = (state_18759[(8)]);
var inst_18679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18661);
var state_18759__$1 = state_18759;
var statearr_18814_18868 = state_18759__$1;
(statearr_18814_18868[(2)] = inst_18679);

(statearr_18814_18868[(1)] = (10));


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
});})(c__17055__auto___18822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16943__auto__,c__17055__auto___18822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16944__auto__ = null;
var cljs$core$async$mix_$_state_machine__16944__auto____0 = (function (){
var statearr_18818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18818[(0)] = cljs$core$async$mix_$_state_machine__16944__auto__);

(statearr_18818[(1)] = (1));

return statearr_18818;
});
var cljs$core$async$mix_$_state_machine__16944__auto____1 = (function (state_18759){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_18759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e18819){if((e18819 instanceof Object)){
var ex__16947__auto__ = e18819;
var statearr_18820_18869 = state_18759;
(statearr_18820_18869[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18870 = state_18759;
state_18759 = G__18870;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16944__auto__ = function(state_18759){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16944__auto____1.call(this,state_18759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16944__auto____0;
cljs$core$async$mix_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16944__auto____1;
return cljs$core$async$mix_$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___18822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17057__auto__ = (function (){var statearr_18821 = f__17056__auto__.call(null);
(statearr_18821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___18822);

return statearr_18821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___18822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10940__auto__ = (((p == null))?null:p);
var m__10941__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10941__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10940__auto__ = (((p == null))?null:p);
var m__10941__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,p,v,ch);
} else {
var m__10941__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18871 = [];
var len__11385__auto___18874 = arguments.length;
var i__11386__auto___18875 = (0);
while(true){
if((i__11386__auto___18875 < len__11385__auto___18874)){
args18871.push((arguments[i__11386__auto___18875]));

var G__18876 = (i__11386__auto___18875 + (1));
i__11386__auto___18875 = G__18876;
continue;
} else {
}
break;
}

var G__18873 = args18871.length;
switch (G__18873) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18871.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10940__auto__ = (((p == null))?null:p);
var m__10941__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,p);
} else {
var m__10941__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,p);
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
var x__10940__auto__ = (((p == null))?null:p);
var m__10941__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10940__auto__)]);
if(!((m__10941__auto__ == null))){
return m__10941__auto__.call(null,p,v);
} else {
var m__10941__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10941__auto____$1 == null))){
return m__10941__auto____$1.call(null,p,v);
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
var args18879 = [];
var len__11385__auto___19004 = arguments.length;
var i__11386__auto___19005 = (0);
while(true){
if((i__11386__auto___19005 < len__11385__auto___19004)){
args18879.push((arguments[i__11386__auto___19005]));

var G__19006 = (i__11386__auto___19005 + (1));
i__11386__auto___19005 = G__19006;
continue;
} else {
}
break;
}

var G__18881 = args18879.length;
switch (G__18881) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18879.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__10277__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10277__auto__,mults){
return (function (p1__18878_SHARP_){
if(cljs.core.truth_(p1__18878_SHARP_.call(null,topic))){
return p1__18878_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18878_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10277__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18882 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18883){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18883 = meta18883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18884,meta18883__$1){
var self__ = this;
var _18884__$1 = this;
return (new cljs.core.async.t_cljs$core$async18882(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18883__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18884){
var self__ = this;
var _18884__$1 = this;
return self__.meta18883;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18883","meta18883",-1543228377,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18882";

cljs.core.async.t_cljs$core$async18882.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async18882");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18882 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18882(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18883){
return (new cljs.core.async.t_cljs$core$async18882(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18883));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18882(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17055__auto___19008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19008,mults,ensure_mult,p){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19008,mults,ensure_mult,p){
return (function (state_18956){
var state_val_18957 = (state_18956[(1)]);
if((state_val_18957 === (7))){
var inst_18952 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
var statearr_18958_19009 = state_18956__$1;
(statearr_18958_19009[(2)] = inst_18952);

(statearr_18958_19009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (20))){
var state_18956__$1 = state_18956;
var statearr_18959_19010 = state_18956__$1;
(statearr_18959_19010[(2)] = null);

(statearr_18959_19010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (1))){
var state_18956__$1 = state_18956;
var statearr_18960_19011 = state_18956__$1;
(statearr_18960_19011[(2)] = null);

(statearr_18960_19011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (24))){
var inst_18935 = (state_18956[(7)]);
var inst_18944 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18935);
var state_18956__$1 = state_18956;
var statearr_18961_19012 = state_18956__$1;
(statearr_18961_19012[(2)] = inst_18944);

(statearr_18961_19012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (4))){
var inst_18887 = (state_18956[(8)]);
var inst_18887__$1 = (state_18956[(2)]);
var inst_18888 = (inst_18887__$1 == null);
var state_18956__$1 = (function (){var statearr_18962 = state_18956;
(statearr_18962[(8)] = inst_18887__$1);

return statearr_18962;
})();
if(cljs.core.truth_(inst_18888)){
var statearr_18963_19013 = state_18956__$1;
(statearr_18963_19013[(1)] = (5));

} else {
var statearr_18964_19014 = state_18956__$1;
(statearr_18964_19014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (15))){
var inst_18929 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
var statearr_18965_19015 = state_18956__$1;
(statearr_18965_19015[(2)] = inst_18929);

(statearr_18965_19015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (21))){
var inst_18949 = (state_18956[(2)]);
var state_18956__$1 = (function (){var statearr_18966 = state_18956;
(statearr_18966[(9)] = inst_18949);

return statearr_18966;
})();
var statearr_18967_19016 = state_18956__$1;
(statearr_18967_19016[(2)] = null);

(statearr_18967_19016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (13))){
var inst_18911 = (state_18956[(10)]);
var inst_18913 = cljs.core.chunked_seq_QMARK_.call(null,inst_18911);
var state_18956__$1 = state_18956;
if(inst_18913){
var statearr_18968_19017 = state_18956__$1;
(statearr_18968_19017[(1)] = (16));

} else {
var statearr_18969_19018 = state_18956__$1;
(statearr_18969_19018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (22))){
var inst_18941 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
if(cljs.core.truth_(inst_18941)){
var statearr_18970_19019 = state_18956__$1;
(statearr_18970_19019[(1)] = (23));

} else {
var statearr_18971_19020 = state_18956__$1;
(statearr_18971_19020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (6))){
var inst_18937 = (state_18956[(11)]);
var inst_18935 = (state_18956[(7)]);
var inst_18887 = (state_18956[(8)]);
var inst_18935__$1 = topic_fn.call(null,inst_18887);
var inst_18936 = cljs.core.deref.call(null,mults);
var inst_18937__$1 = cljs.core.get.call(null,inst_18936,inst_18935__$1);
var state_18956__$1 = (function (){var statearr_18972 = state_18956;
(statearr_18972[(11)] = inst_18937__$1);

(statearr_18972[(7)] = inst_18935__$1);

return statearr_18972;
})();
if(cljs.core.truth_(inst_18937__$1)){
var statearr_18973_19021 = state_18956__$1;
(statearr_18973_19021[(1)] = (19));

} else {
var statearr_18974_19022 = state_18956__$1;
(statearr_18974_19022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (25))){
var inst_18946 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
var statearr_18975_19023 = state_18956__$1;
(statearr_18975_19023[(2)] = inst_18946);

(statearr_18975_19023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (17))){
var inst_18911 = (state_18956[(10)]);
var inst_18920 = cljs.core.first.call(null,inst_18911);
var inst_18921 = cljs.core.async.muxch_STAR_.call(null,inst_18920);
var inst_18922 = cljs.core.async.close_BANG_.call(null,inst_18921);
var inst_18923 = cljs.core.next.call(null,inst_18911);
var inst_18897 = inst_18923;
var inst_18898 = null;
var inst_18899 = (0);
var inst_18900 = (0);
var state_18956__$1 = (function (){var statearr_18976 = state_18956;
(statearr_18976[(12)] = inst_18898);

(statearr_18976[(13)] = inst_18900);

(statearr_18976[(14)] = inst_18922);

(statearr_18976[(15)] = inst_18899);

(statearr_18976[(16)] = inst_18897);

return statearr_18976;
})();
var statearr_18977_19024 = state_18956__$1;
(statearr_18977_19024[(2)] = null);

(statearr_18977_19024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (3))){
var inst_18954 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18956__$1,inst_18954);
} else {
if((state_val_18957 === (12))){
var inst_18931 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
var statearr_18978_19025 = state_18956__$1;
(statearr_18978_19025[(2)] = inst_18931);

(statearr_18978_19025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (2))){
var state_18956__$1 = state_18956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18956__$1,(4),ch);
} else {
if((state_val_18957 === (23))){
var state_18956__$1 = state_18956;
var statearr_18979_19026 = state_18956__$1;
(statearr_18979_19026[(2)] = null);

(statearr_18979_19026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (19))){
var inst_18937 = (state_18956[(11)]);
var inst_18887 = (state_18956[(8)]);
var inst_18939 = cljs.core.async.muxch_STAR_.call(null,inst_18937);
var state_18956__$1 = state_18956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18956__$1,(22),inst_18939,inst_18887);
} else {
if((state_val_18957 === (11))){
var inst_18897 = (state_18956[(16)]);
var inst_18911 = (state_18956[(10)]);
var inst_18911__$1 = cljs.core.seq.call(null,inst_18897);
var state_18956__$1 = (function (){var statearr_18980 = state_18956;
(statearr_18980[(10)] = inst_18911__$1);

return statearr_18980;
})();
if(inst_18911__$1){
var statearr_18981_19027 = state_18956__$1;
(statearr_18981_19027[(1)] = (13));

} else {
var statearr_18982_19028 = state_18956__$1;
(statearr_18982_19028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (9))){
var inst_18933 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
var statearr_18983_19029 = state_18956__$1;
(statearr_18983_19029[(2)] = inst_18933);

(statearr_18983_19029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (5))){
var inst_18894 = cljs.core.deref.call(null,mults);
var inst_18895 = cljs.core.vals.call(null,inst_18894);
var inst_18896 = cljs.core.seq.call(null,inst_18895);
var inst_18897 = inst_18896;
var inst_18898 = null;
var inst_18899 = (0);
var inst_18900 = (0);
var state_18956__$1 = (function (){var statearr_18984 = state_18956;
(statearr_18984[(12)] = inst_18898);

(statearr_18984[(13)] = inst_18900);

(statearr_18984[(15)] = inst_18899);

(statearr_18984[(16)] = inst_18897);

return statearr_18984;
})();
var statearr_18985_19030 = state_18956__$1;
(statearr_18985_19030[(2)] = null);

(statearr_18985_19030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (14))){
var state_18956__$1 = state_18956;
var statearr_18989_19031 = state_18956__$1;
(statearr_18989_19031[(2)] = null);

(statearr_18989_19031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (16))){
var inst_18911 = (state_18956[(10)]);
var inst_18915 = cljs.core.chunk_first.call(null,inst_18911);
var inst_18916 = cljs.core.chunk_rest.call(null,inst_18911);
var inst_18917 = cljs.core.count.call(null,inst_18915);
var inst_18897 = inst_18916;
var inst_18898 = inst_18915;
var inst_18899 = inst_18917;
var inst_18900 = (0);
var state_18956__$1 = (function (){var statearr_18990 = state_18956;
(statearr_18990[(12)] = inst_18898);

(statearr_18990[(13)] = inst_18900);

(statearr_18990[(15)] = inst_18899);

(statearr_18990[(16)] = inst_18897);

return statearr_18990;
})();
var statearr_18991_19032 = state_18956__$1;
(statearr_18991_19032[(2)] = null);

(statearr_18991_19032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (10))){
var inst_18898 = (state_18956[(12)]);
var inst_18900 = (state_18956[(13)]);
var inst_18899 = (state_18956[(15)]);
var inst_18897 = (state_18956[(16)]);
var inst_18905 = cljs.core._nth.call(null,inst_18898,inst_18900);
var inst_18906 = cljs.core.async.muxch_STAR_.call(null,inst_18905);
var inst_18907 = cljs.core.async.close_BANG_.call(null,inst_18906);
var inst_18908 = (inst_18900 + (1));
var tmp18986 = inst_18898;
var tmp18987 = inst_18899;
var tmp18988 = inst_18897;
var inst_18897__$1 = tmp18988;
var inst_18898__$1 = tmp18986;
var inst_18899__$1 = tmp18987;
var inst_18900__$1 = inst_18908;
var state_18956__$1 = (function (){var statearr_18992 = state_18956;
(statearr_18992[(12)] = inst_18898__$1);

(statearr_18992[(13)] = inst_18900__$1);

(statearr_18992[(15)] = inst_18899__$1);

(statearr_18992[(17)] = inst_18907);

(statearr_18992[(16)] = inst_18897__$1);

return statearr_18992;
})();
var statearr_18993_19033 = state_18956__$1;
(statearr_18993_19033[(2)] = null);

(statearr_18993_19033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (18))){
var inst_18926 = (state_18956[(2)]);
var state_18956__$1 = state_18956;
var statearr_18994_19034 = state_18956__$1;
(statearr_18994_19034[(2)] = inst_18926);

(statearr_18994_19034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18957 === (8))){
var inst_18900 = (state_18956[(13)]);
var inst_18899 = (state_18956[(15)]);
var inst_18902 = (inst_18900 < inst_18899);
var inst_18903 = inst_18902;
var state_18956__$1 = state_18956;
if(cljs.core.truth_(inst_18903)){
var statearr_18995_19035 = state_18956__$1;
(statearr_18995_19035[(1)] = (10));

} else {
var statearr_18996_19036 = state_18956__$1;
(statearr_18996_19036[(1)] = (11));

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
});})(c__17055__auto___19008,mults,ensure_mult,p))
;
return ((function (switch__16943__auto__,c__17055__auto___19008,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19000[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19000[(1)] = (1));

return statearr_19000;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_18956){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_18956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19001){if((e19001 instanceof Object)){
var ex__16947__auto__ = e19001;
var statearr_19002_19037 = state_18956;
(statearr_19002_19037[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19038 = state_18956;
state_18956 = G__19038;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_18956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_18956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19008,mults,ensure_mult,p))
})();
var state__17057__auto__ = (function (){var statearr_19003 = f__17056__auto__.call(null);
(statearr_19003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19008);

return statearr_19003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19008,mults,ensure_mult,p))
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
var args19039 = [];
var len__11385__auto___19042 = arguments.length;
var i__11386__auto___19043 = (0);
while(true){
if((i__11386__auto___19043 < len__11385__auto___19042)){
args19039.push((arguments[i__11386__auto___19043]));

var G__19044 = (i__11386__auto___19043 + (1));
i__11386__auto___19043 = G__19044;
continue;
} else {
}
break;
}

var G__19041 = args19039.length;
switch (G__19041) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19039.length)].join('')));

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
var args19046 = [];
var len__11385__auto___19049 = arguments.length;
var i__11386__auto___19050 = (0);
while(true){
if((i__11386__auto___19050 < len__11385__auto___19049)){
args19046.push((arguments[i__11386__auto___19050]));

var G__19051 = (i__11386__auto___19050 + (1));
i__11386__auto___19050 = G__19051;
continue;
} else {
}
break;
}

var G__19048 = args19046.length;
switch (G__19048) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19046.length)].join('')));

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
var args19053 = [];
var len__11385__auto___19124 = arguments.length;
var i__11386__auto___19125 = (0);
while(true){
if((i__11386__auto___19125 < len__11385__auto___19124)){
args19053.push((arguments[i__11386__auto___19125]));

var G__19126 = (i__11386__auto___19125 + (1));
i__11386__auto___19125 = G__19126;
continue;
} else {
}
break;
}

var G__19055 = args19053.length;
switch (G__19055) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19053.length)].join('')));

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
var c__17055__auto___19128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19094){
var state_val_19095 = (state_19094[(1)]);
if((state_val_19095 === (7))){
var state_19094__$1 = state_19094;
var statearr_19096_19129 = state_19094__$1;
(statearr_19096_19129[(2)] = null);

(statearr_19096_19129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (1))){
var state_19094__$1 = state_19094;
var statearr_19097_19130 = state_19094__$1;
(statearr_19097_19130[(2)] = null);

(statearr_19097_19130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (4))){
var inst_19058 = (state_19094[(7)]);
var inst_19060 = (inst_19058 < cnt);
var state_19094__$1 = state_19094;
if(cljs.core.truth_(inst_19060)){
var statearr_19098_19131 = state_19094__$1;
(statearr_19098_19131[(1)] = (6));

} else {
var statearr_19099_19132 = state_19094__$1;
(statearr_19099_19132[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (15))){
var inst_19090 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19100_19133 = state_19094__$1;
(statearr_19100_19133[(2)] = inst_19090);

(statearr_19100_19133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (13))){
var inst_19083 = cljs.core.async.close_BANG_.call(null,out);
var state_19094__$1 = state_19094;
var statearr_19101_19134 = state_19094__$1;
(statearr_19101_19134[(2)] = inst_19083);

(statearr_19101_19134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (6))){
var state_19094__$1 = state_19094;
var statearr_19102_19135 = state_19094__$1;
(statearr_19102_19135[(2)] = null);

(statearr_19102_19135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (3))){
var inst_19092 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19094__$1,inst_19092);
} else {
if((state_val_19095 === (12))){
var inst_19080 = (state_19094[(8)]);
var inst_19080__$1 = (state_19094[(2)]);
var inst_19081 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19080__$1);
var state_19094__$1 = (function (){var statearr_19103 = state_19094;
(statearr_19103[(8)] = inst_19080__$1);

return statearr_19103;
})();
if(cljs.core.truth_(inst_19081)){
var statearr_19104_19136 = state_19094__$1;
(statearr_19104_19136[(1)] = (13));

} else {
var statearr_19105_19137 = state_19094__$1;
(statearr_19105_19137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (2))){
var inst_19057 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19058 = (0);
var state_19094__$1 = (function (){var statearr_19106 = state_19094;
(statearr_19106[(9)] = inst_19057);

(statearr_19106[(7)] = inst_19058);

return statearr_19106;
})();
var statearr_19107_19138 = state_19094__$1;
(statearr_19107_19138[(2)] = null);

(statearr_19107_19138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (11))){
var inst_19058 = (state_19094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19094,(10),Object,null,(9));
var inst_19067 = chs__$1.call(null,inst_19058);
var inst_19068 = done.call(null,inst_19058);
var inst_19069 = cljs.core.async.take_BANG_.call(null,inst_19067,inst_19068);
var state_19094__$1 = state_19094;
var statearr_19108_19139 = state_19094__$1;
(statearr_19108_19139[(2)] = inst_19069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (9))){
var inst_19058 = (state_19094[(7)]);
var inst_19071 = (state_19094[(2)]);
var inst_19072 = (inst_19058 + (1));
var inst_19058__$1 = inst_19072;
var state_19094__$1 = (function (){var statearr_19109 = state_19094;
(statearr_19109[(10)] = inst_19071);

(statearr_19109[(7)] = inst_19058__$1);

return statearr_19109;
})();
var statearr_19110_19140 = state_19094__$1;
(statearr_19110_19140[(2)] = null);

(statearr_19110_19140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (5))){
var inst_19078 = (state_19094[(2)]);
var state_19094__$1 = (function (){var statearr_19111 = state_19094;
(statearr_19111[(11)] = inst_19078);

return statearr_19111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19094__$1,(12),dchan);
} else {
if((state_val_19095 === (14))){
var inst_19080 = (state_19094[(8)]);
var inst_19085 = cljs.core.apply.call(null,f,inst_19080);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19094__$1,(16),out,inst_19085);
} else {
if((state_val_19095 === (16))){
var inst_19087 = (state_19094[(2)]);
var state_19094__$1 = (function (){var statearr_19112 = state_19094;
(statearr_19112[(12)] = inst_19087);

return statearr_19112;
})();
var statearr_19113_19141 = state_19094__$1;
(statearr_19113_19141[(2)] = null);

(statearr_19113_19141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (10))){
var inst_19062 = (state_19094[(2)]);
var inst_19063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19094__$1 = (function (){var statearr_19114 = state_19094;
(statearr_19114[(13)] = inst_19062);

return statearr_19114;
})();
var statearr_19115_19142 = state_19094__$1;
(statearr_19115_19142[(2)] = inst_19063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (8))){
var inst_19076 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19116_19143 = state_19094__$1;
(statearr_19116_19143[(2)] = inst_19076);

(statearr_19116_19143[(1)] = (5));


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
});})(c__17055__auto___19128,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16943__auto__,c__17055__auto___19128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19120[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19120[(1)] = (1));

return statearr_19120;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19094){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19121){if((e19121 instanceof Object)){
var ex__16947__auto__ = e19121;
var statearr_19122_19144 = state_19094;
(statearr_19122_19144[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19145 = state_19094;
state_19094 = G__19145;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19128,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17057__auto__ = (function (){var statearr_19123 = f__17056__auto__.call(null);
(statearr_19123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19128);

return statearr_19123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19128,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19147 = [];
var len__11385__auto___19205 = arguments.length;
var i__11386__auto___19206 = (0);
while(true){
if((i__11386__auto___19206 < len__11385__auto___19205)){
args19147.push((arguments[i__11386__auto___19206]));

var G__19207 = (i__11386__auto___19206 + (1));
i__11386__auto___19206 = G__19207;
continue;
} else {
}
break;
}

var G__19149 = args19147.length;
switch (G__19149) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19147.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17055__auto___19209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19209,out){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19209,out){
return (function (state_19181){
var state_val_19182 = (state_19181[(1)]);
if((state_val_19182 === (7))){
var inst_19160 = (state_19181[(7)]);
var inst_19161 = (state_19181[(8)]);
var inst_19160__$1 = (state_19181[(2)]);
var inst_19161__$1 = cljs.core.nth.call(null,inst_19160__$1,(0),null);
var inst_19162 = cljs.core.nth.call(null,inst_19160__$1,(1),null);
var inst_19163 = (inst_19161__$1 == null);
var state_19181__$1 = (function (){var statearr_19183 = state_19181;
(statearr_19183[(9)] = inst_19162);

(statearr_19183[(7)] = inst_19160__$1);

(statearr_19183[(8)] = inst_19161__$1);

return statearr_19183;
})();
if(cljs.core.truth_(inst_19163)){
var statearr_19184_19210 = state_19181__$1;
(statearr_19184_19210[(1)] = (8));

} else {
var statearr_19185_19211 = state_19181__$1;
(statearr_19185_19211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (1))){
var inst_19150 = cljs.core.vec.call(null,chs);
var inst_19151 = inst_19150;
var state_19181__$1 = (function (){var statearr_19186 = state_19181;
(statearr_19186[(10)] = inst_19151);

return statearr_19186;
})();
var statearr_19187_19212 = state_19181__$1;
(statearr_19187_19212[(2)] = null);

(statearr_19187_19212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (4))){
var inst_19151 = (state_19181[(10)]);
var state_19181__$1 = state_19181;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19181__$1,(7),inst_19151);
} else {
if((state_val_19182 === (6))){
var inst_19177 = (state_19181[(2)]);
var state_19181__$1 = state_19181;
var statearr_19188_19213 = state_19181__$1;
(statearr_19188_19213[(2)] = inst_19177);

(statearr_19188_19213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (3))){
var inst_19179 = (state_19181[(2)]);
var state_19181__$1 = state_19181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19181__$1,inst_19179);
} else {
if((state_val_19182 === (2))){
var inst_19151 = (state_19181[(10)]);
var inst_19153 = cljs.core.count.call(null,inst_19151);
var inst_19154 = (inst_19153 > (0));
var state_19181__$1 = state_19181;
if(cljs.core.truth_(inst_19154)){
var statearr_19190_19214 = state_19181__$1;
(statearr_19190_19214[(1)] = (4));

} else {
var statearr_19191_19215 = state_19181__$1;
(statearr_19191_19215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (11))){
var inst_19151 = (state_19181[(10)]);
var inst_19170 = (state_19181[(2)]);
var tmp19189 = inst_19151;
var inst_19151__$1 = tmp19189;
var state_19181__$1 = (function (){var statearr_19192 = state_19181;
(statearr_19192[(11)] = inst_19170);

(statearr_19192[(10)] = inst_19151__$1);

return statearr_19192;
})();
var statearr_19193_19216 = state_19181__$1;
(statearr_19193_19216[(2)] = null);

(statearr_19193_19216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (9))){
var inst_19161 = (state_19181[(8)]);
var state_19181__$1 = state_19181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19181__$1,(11),out,inst_19161);
} else {
if((state_val_19182 === (5))){
var inst_19175 = cljs.core.async.close_BANG_.call(null,out);
var state_19181__$1 = state_19181;
var statearr_19194_19217 = state_19181__$1;
(statearr_19194_19217[(2)] = inst_19175);

(statearr_19194_19217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (10))){
var inst_19173 = (state_19181[(2)]);
var state_19181__$1 = state_19181;
var statearr_19195_19218 = state_19181__$1;
(statearr_19195_19218[(2)] = inst_19173);

(statearr_19195_19218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19182 === (8))){
var inst_19162 = (state_19181[(9)]);
var inst_19151 = (state_19181[(10)]);
var inst_19160 = (state_19181[(7)]);
var inst_19161 = (state_19181[(8)]);
var inst_19165 = (function (){var cs = inst_19151;
var vec__19156 = inst_19160;
var v = inst_19161;
var c = inst_19162;
return ((function (cs,vec__19156,v,c,inst_19162,inst_19151,inst_19160,inst_19161,state_val_19182,c__17055__auto___19209,out){
return (function (p1__19146_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19146_SHARP_);
});
;})(cs,vec__19156,v,c,inst_19162,inst_19151,inst_19160,inst_19161,state_val_19182,c__17055__auto___19209,out))
})();
var inst_19166 = cljs.core.filterv.call(null,inst_19165,inst_19151);
var inst_19151__$1 = inst_19166;
var state_19181__$1 = (function (){var statearr_19196 = state_19181;
(statearr_19196[(10)] = inst_19151__$1);

return statearr_19196;
})();
var statearr_19197_19219 = state_19181__$1;
(statearr_19197_19219[(2)] = null);

(statearr_19197_19219[(1)] = (2));


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
});})(c__17055__auto___19209,out))
;
return ((function (switch__16943__auto__,c__17055__auto___19209,out){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19201[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19201[(1)] = (1));

return statearr_19201;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19181){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19202){if((e19202 instanceof Object)){
var ex__16947__auto__ = e19202;
var statearr_19203_19220 = state_19181;
(statearr_19203_19220[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19221 = state_19181;
state_19181 = G__19221;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19209,out))
})();
var state__17057__auto__ = (function (){var statearr_19204 = f__17056__auto__.call(null);
(statearr_19204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19209);

return statearr_19204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19209,out))
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
var args19222 = [];
var len__11385__auto___19271 = arguments.length;
var i__11386__auto___19272 = (0);
while(true){
if((i__11386__auto___19272 < len__11385__auto___19271)){
args19222.push((arguments[i__11386__auto___19272]));

var G__19273 = (i__11386__auto___19272 + (1));
i__11386__auto___19272 = G__19273;
continue;
} else {
}
break;
}

var G__19224 = args19222.length;
switch (G__19224) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19222.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17055__auto___19275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19275,out){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19275,out){
return (function (state_19248){
var state_val_19249 = (state_19248[(1)]);
if((state_val_19249 === (7))){
var inst_19230 = (state_19248[(7)]);
var inst_19230__$1 = (state_19248[(2)]);
var inst_19231 = (inst_19230__$1 == null);
var inst_19232 = cljs.core.not.call(null,inst_19231);
var state_19248__$1 = (function (){var statearr_19250 = state_19248;
(statearr_19250[(7)] = inst_19230__$1);

return statearr_19250;
})();
if(inst_19232){
var statearr_19251_19276 = state_19248__$1;
(statearr_19251_19276[(1)] = (8));

} else {
var statearr_19252_19277 = state_19248__$1;
(statearr_19252_19277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (1))){
var inst_19225 = (0);
var state_19248__$1 = (function (){var statearr_19253 = state_19248;
(statearr_19253[(8)] = inst_19225);

return statearr_19253;
})();
var statearr_19254_19278 = state_19248__$1;
(statearr_19254_19278[(2)] = null);

(statearr_19254_19278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (4))){
var state_19248__$1 = state_19248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19248__$1,(7),ch);
} else {
if((state_val_19249 === (6))){
var inst_19243 = (state_19248[(2)]);
var state_19248__$1 = state_19248;
var statearr_19255_19279 = state_19248__$1;
(statearr_19255_19279[(2)] = inst_19243);

(statearr_19255_19279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (3))){
var inst_19245 = (state_19248[(2)]);
var inst_19246 = cljs.core.async.close_BANG_.call(null,out);
var state_19248__$1 = (function (){var statearr_19256 = state_19248;
(statearr_19256[(9)] = inst_19245);

return statearr_19256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19248__$1,inst_19246);
} else {
if((state_val_19249 === (2))){
var inst_19225 = (state_19248[(8)]);
var inst_19227 = (inst_19225 < n);
var state_19248__$1 = state_19248;
if(cljs.core.truth_(inst_19227)){
var statearr_19257_19280 = state_19248__$1;
(statearr_19257_19280[(1)] = (4));

} else {
var statearr_19258_19281 = state_19248__$1;
(statearr_19258_19281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (11))){
var inst_19225 = (state_19248[(8)]);
var inst_19235 = (state_19248[(2)]);
var inst_19236 = (inst_19225 + (1));
var inst_19225__$1 = inst_19236;
var state_19248__$1 = (function (){var statearr_19259 = state_19248;
(statearr_19259[(10)] = inst_19235);

(statearr_19259[(8)] = inst_19225__$1);

return statearr_19259;
})();
var statearr_19260_19282 = state_19248__$1;
(statearr_19260_19282[(2)] = null);

(statearr_19260_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (9))){
var state_19248__$1 = state_19248;
var statearr_19261_19283 = state_19248__$1;
(statearr_19261_19283[(2)] = null);

(statearr_19261_19283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (5))){
var state_19248__$1 = state_19248;
var statearr_19262_19284 = state_19248__$1;
(statearr_19262_19284[(2)] = null);

(statearr_19262_19284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (10))){
var inst_19240 = (state_19248[(2)]);
var state_19248__$1 = state_19248;
var statearr_19263_19285 = state_19248__$1;
(statearr_19263_19285[(2)] = inst_19240);

(statearr_19263_19285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19249 === (8))){
var inst_19230 = (state_19248[(7)]);
var state_19248__$1 = state_19248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19248__$1,(11),out,inst_19230);
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
});})(c__17055__auto___19275,out))
;
return ((function (switch__16943__auto__,c__17055__auto___19275,out){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19267[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19267[(1)] = (1));

return statearr_19267;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19248){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19268){if((e19268 instanceof Object)){
var ex__16947__auto__ = e19268;
var statearr_19269_19286 = state_19248;
(statearr_19269_19286[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19287 = state_19248;
state_19248 = G__19287;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19275,out))
})();
var state__17057__auto__ = (function (){var statearr_19270 = f__17056__auto__.call(null);
(statearr_19270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19275);

return statearr_19270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19275,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19295 = (function (f,ch,meta19296){
this.f = f;
this.ch = ch;
this.meta19296 = meta19296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19297,meta19296__$1){
var self__ = this;
var _19297__$1 = this;
return (new cljs.core.async.t_cljs$core$async19295(self__.f,self__.ch,meta19296__$1));
});

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19297){
var self__ = this;
var _19297__$1 = this;
return self__.meta19296;
});

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19298 = (function (f,ch,meta19296,_,fn1,meta19299){
this.f = f;
this.ch = ch;
this.meta19296 = meta19296;
this._ = _;
this.fn1 = fn1;
this.meta19299 = meta19299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19300,meta19299__$1){
var self__ = this;
var _19300__$1 = this;
return (new cljs.core.async.t_cljs$core$async19298(self__.f,self__.ch,self__.meta19296,self__._,self__.fn1,meta19299__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19300){
var self__ = this;
var _19300__$1 = this;
return self__.meta19299;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19298.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19288_SHARP_){
return f1.call(null,(((p1__19288_SHARP_ == null))?null:self__.f.call(null,p1__19288_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19298.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19296","meta19296",1039361376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19295","cljs.core.async/t_cljs$core$async19295",-995255210,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19299","meta19299",-219706738,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19298";

cljs.core.async.t_cljs$core$async19298.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async19298");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19298 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19298(f__$1,ch__$1,meta19296__$1,___$2,fn1__$1,meta19299){
return (new cljs.core.async.t_cljs$core$async19298(f__$1,ch__$1,meta19296__$1,___$2,fn1__$1,meta19299));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19298(self__.f,self__.ch,self__.meta19296,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10265__auto__ = ret;
if(cljs.core.truth_(and__10265__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__10265__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19296","meta19296",1039361376,null)], null);
});

cljs.core.async.t_cljs$core$async19295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19295";

cljs.core.async.t_cljs$core$async19295.cljs$lang$ctorPrWriter = (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async19295");
});

cljs.core.async.__GT_t_cljs$core$async19295 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19295(f__$1,ch__$1,meta19296){
return (new cljs.core.async.t_cljs$core$async19295(f__$1,ch__$1,meta19296));
});

}

return (new cljs.core.async.t_cljs$core$async19295(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19304 = (function (f,ch,meta19305){
this.f = f;
this.ch = ch;
this.meta19305 = meta19305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19306,meta19305__$1){
var self__ = this;
var _19306__$1 = this;
return (new cljs.core.async.t_cljs$core$async19304(self__.f,self__.ch,meta19305__$1));
});

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19306){
var self__ = this;
var _19306__$1 = this;
return self__.meta19305;
});

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19305","meta19305",-456446042,null)], null);
});

cljs.core.async.t_cljs$core$async19304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19304";

cljs.core.async.t_cljs$core$async19304.cljs$lang$ctorPrWriter = (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async19304");
});

cljs.core.async.__GT_t_cljs$core$async19304 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19304(f__$1,ch__$1,meta19305){
return (new cljs.core.async.t_cljs$core$async19304(f__$1,ch__$1,meta19305));
});

}

return (new cljs.core.async.t_cljs$core$async19304(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19310 = (function (p,ch,meta19311){
this.p = p;
this.ch = ch;
this.meta19311 = meta19311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19312,meta19311__$1){
var self__ = this;
var _19312__$1 = this;
return (new cljs.core.async.t_cljs$core$async19310(self__.p,self__.ch,meta19311__$1));
});

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19312){
var self__ = this;
var _19312__$1 = this;
return self__.meta19311;
});

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19311","meta19311",1024339464,null)], null);
});

cljs.core.async.t_cljs$core$async19310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19310";

cljs.core.async.t_cljs$core$async19310.cljs$lang$ctorPrWriter = (function (this__10883__auto__,writer__10884__auto__,opt__10885__auto__){
return cljs.core._write.call(null,writer__10884__auto__,"cljs.core.async/t_cljs$core$async19310");
});

cljs.core.async.__GT_t_cljs$core$async19310 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19310(p__$1,ch__$1,meta19311){
return (new cljs.core.async.t_cljs$core$async19310(p__$1,ch__$1,meta19311));
});

}

return (new cljs.core.async.t_cljs$core$async19310(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19313 = [];
var len__11385__auto___19357 = arguments.length;
var i__11386__auto___19358 = (0);
while(true){
if((i__11386__auto___19358 < len__11385__auto___19357)){
args19313.push((arguments[i__11386__auto___19358]));

var G__19359 = (i__11386__auto___19358 + (1));
i__11386__auto___19358 = G__19359;
continue;
} else {
}
break;
}

var G__19315 = args19313.length;
switch (G__19315) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19313.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17055__auto___19361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19361,out){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19361,out){
return (function (state_19336){
var state_val_19337 = (state_19336[(1)]);
if((state_val_19337 === (7))){
var inst_19332 = (state_19336[(2)]);
var state_19336__$1 = state_19336;
var statearr_19338_19362 = state_19336__$1;
(statearr_19338_19362[(2)] = inst_19332);

(statearr_19338_19362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (1))){
var state_19336__$1 = state_19336;
var statearr_19339_19363 = state_19336__$1;
(statearr_19339_19363[(2)] = null);

(statearr_19339_19363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (4))){
var inst_19318 = (state_19336[(7)]);
var inst_19318__$1 = (state_19336[(2)]);
var inst_19319 = (inst_19318__$1 == null);
var state_19336__$1 = (function (){var statearr_19340 = state_19336;
(statearr_19340[(7)] = inst_19318__$1);

return statearr_19340;
})();
if(cljs.core.truth_(inst_19319)){
var statearr_19341_19364 = state_19336__$1;
(statearr_19341_19364[(1)] = (5));

} else {
var statearr_19342_19365 = state_19336__$1;
(statearr_19342_19365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (6))){
var inst_19318 = (state_19336[(7)]);
var inst_19323 = p.call(null,inst_19318);
var state_19336__$1 = state_19336;
if(cljs.core.truth_(inst_19323)){
var statearr_19343_19366 = state_19336__$1;
(statearr_19343_19366[(1)] = (8));

} else {
var statearr_19344_19367 = state_19336__$1;
(statearr_19344_19367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (3))){
var inst_19334 = (state_19336[(2)]);
var state_19336__$1 = state_19336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19336__$1,inst_19334);
} else {
if((state_val_19337 === (2))){
var state_19336__$1 = state_19336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19336__$1,(4),ch);
} else {
if((state_val_19337 === (11))){
var inst_19326 = (state_19336[(2)]);
var state_19336__$1 = state_19336;
var statearr_19345_19368 = state_19336__$1;
(statearr_19345_19368[(2)] = inst_19326);

(statearr_19345_19368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (9))){
var state_19336__$1 = state_19336;
var statearr_19346_19369 = state_19336__$1;
(statearr_19346_19369[(2)] = null);

(statearr_19346_19369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (5))){
var inst_19321 = cljs.core.async.close_BANG_.call(null,out);
var state_19336__$1 = state_19336;
var statearr_19347_19370 = state_19336__$1;
(statearr_19347_19370[(2)] = inst_19321);

(statearr_19347_19370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (10))){
var inst_19329 = (state_19336[(2)]);
var state_19336__$1 = (function (){var statearr_19348 = state_19336;
(statearr_19348[(8)] = inst_19329);

return statearr_19348;
})();
var statearr_19349_19371 = state_19336__$1;
(statearr_19349_19371[(2)] = null);

(statearr_19349_19371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19337 === (8))){
var inst_19318 = (state_19336[(7)]);
var state_19336__$1 = state_19336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19336__$1,(11),out,inst_19318);
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
});})(c__17055__auto___19361,out))
;
return ((function (switch__16943__auto__,c__17055__auto___19361,out){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19353 = [null,null,null,null,null,null,null,null,null];
(statearr_19353[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19353[(1)] = (1));

return statearr_19353;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19336){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19354){if((e19354 instanceof Object)){
var ex__16947__auto__ = e19354;
var statearr_19355_19372 = state_19336;
(statearr_19355_19372[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19373 = state_19336;
state_19336 = G__19373;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19361,out))
})();
var state__17057__auto__ = (function (){var statearr_19356 = f__17056__auto__.call(null);
(statearr_19356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19361);

return statearr_19356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19361,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19374 = [];
var len__11385__auto___19377 = arguments.length;
var i__11386__auto___19378 = (0);
while(true){
if((i__11386__auto___19378 < len__11385__auto___19377)){
args19374.push((arguments[i__11386__auto___19378]));

var G__19379 = (i__11386__auto___19378 + (1));
i__11386__auto___19378 = G__19379;
continue;
} else {
}
break;
}

var G__19376 = args19374.length;
switch (G__19376) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19374.length)].join('')));

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
var c__17055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto__){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto__){
return (function (state_19546){
var state_val_19547 = (state_19546[(1)]);
if((state_val_19547 === (7))){
var inst_19542 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
var statearr_19548_19589 = state_19546__$1;
(statearr_19548_19589[(2)] = inst_19542);

(statearr_19548_19589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (20))){
var inst_19512 = (state_19546[(7)]);
var inst_19523 = (state_19546[(2)]);
var inst_19524 = cljs.core.next.call(null,inst_19512);
var inst_19498 = inst_19524;
var inst_19499 = null;
var inst_19500 = (0);
var inst_19501 = (0);
var state_19546__$1 = (function (){var statearr_19549 = state_19546;
(statearr_19549[(8)] = inst_19501);

(statearr_19549[(9)] = inst_19523);

(statearr_19549[(10)] = inst_19499);

(statearr_19549[(11)] = inst_19500);

(statearr_19549[(12)] = inst_19498);

return statearr_19549;
})();
var statearr_19550_19590 = state_19546__$1;
(statearr_19550_19590[(2)] = null);

(statearr_19550_19590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (1))){
var state_19546__$1 = state_19546;
var statearr_19551_19591 = state_19546__$1;
(statearr_19551_19591[(2)] = null);

(statearr_19551_19591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (4))){
var inst_19487 = (state_19546[(13)]);
var inst_19487__$1 = (state_19546[(2)]);
var inst_19488 = (inst_19487__$1 == null);
var state_19546__$1 = (function (){var statearr_19552 = state_19546;
(statearr_19552[(13)] = inst_19487__$1);

return statearr_19552;
})();
if(cljs.core.truth_(inst_19488)){
var statearr_19553_19592 = state_19546__$1;
(statearr_19553_19592[(1)] = (5));

} else {
var statearr_19554_19593 = state_19546__$1;
(statearr_19554_19593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (15))){
var state_19546__$1 = state_19546;
var statearr_19558_19594 = state_19546__$1;
(statearr_19558_19594[(2)] = null);

(statearr_19558_19594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (21))){
var state_19546__$1 = state_19546;
var statearr_19559_19595 = state_19546__$1;
(statearr_19559_19595[(2)] = null);

(statearr_19559_19595[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (13))){
var inst_19501 = (state_19546[(8)]);
var inst_19499 = (state_19546[(10)]);
var inst_19500 = (state_19546[(11)]);
var inst_19498 = (state_19546[(12)]);
var inst_19508 = (state_19546[(2)]);
var inst_19509 = (inst_19501 + (1));
var tmp19555 = inst_19499;
var tmp19556 = inst_19500;
var tmp19557 = inst_19498;
var inst_19498__$1 = tmp19557;
var inst_19499__$1 = tmp19555;
var inst_19500__$1 = tmp19556;
var inst_19501__$1 = inst_19509;
var state_19546__$1 = (function (){var statearr_19560 = state_19546;
(statearr_19560[(8)] = inst_19501__$1);

(statearr_19560[(14)] = inst_19508);

(statearr_19560[(10)] = inst_19499__$1);

(statearr_19560[(11)] = inst_19500__$1);

(statearr_19560[(12)] = inst_19498__$1);

return statearr_19560;
})();
var statearr_19561_19596 = state_19546__$1;
(statearr_19561_19596[(2)] = null);

(statearr_19561_19596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (22))){
var state_19546__$1 = state_19546;
var statearr_19562_19597 = state_19546__$1;
(statearr_19562_19597[(2)] = null);

(statearr_19562_19597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (6))){
var inst_19487 = (state_19546[(13)]);
var inst_19496 = f.call(null,inst_19487);
var inst_19497 = cljs.core.seq.call(null,inst_19496);
var inst_19498 = inst_19497;
var inst_19499 = null;
var inst_19500 = (0);
var inst_19501 = (0);
var state_19546__$1 = (function (){var statearr_19563 = state_19546;
(statearr_19563[(8)] = inst_19501);

(statearr_19563[(10)] = inst_19499);

(statearr_19563[(11)] = inst_19500);

(statearr_19563[(12)] = inst_19498);

return statearr_19563;
})();
var statearr_19564_19598 = state_19546__$1;
(statearr_19564_19598[(2)] = null);

(statearr_19564_19598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (17))){
var inst_19512 = (state_19546[(7)]);
var inst_19516 = cljs.core.chunk_first.call(null,inst_19512);
var inst_19517 = cljs.core.chunk_rest.call(null,inst_19512);
var inst_19518 = cljs.core.count.call(null,inst_19516);
var inst_19498 = inst_19517;
var inst_19499 = inst_19516;
var inst_19500 = inst_19518;
var inst_19501 = (0);
var state_19546__$1 = (function (){var statearr_19565 = state_19546;
(statearr_19565[(8)] = inst_19501);

(statearr_19565[(10)] = inst_19499);

(statearr_19565[(11)] = inst_19500);

(statearr_19565[(12)] = inst_19498);

return statearr_19565;
})();
var statearr_19566_19599 = state_19546__$1;
(statearr_19566_19599[(2)] = null);

(statearr_19566_19599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (3))){
var inst_19544 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19546__$1,inst_19544);
} else {
if((state_val_19547 === (12))){
var inst_19532 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
var statearr_19567_19600 = state_19546__$1;
(statearr_19567_19600[(2)] = inst_19532);

(statearr_19567_19600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (2))){
var state_19546__$1 = state_19546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19546__$1,(4),in$);
} else {
if((state_val_19547 === (23))){
var inst_19540 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
var statearr_19568_19601 = state_19546__$1;
(statearr_19568_19601[(2)] = inst_19540);

(statearr_19568_19601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (19))){
var inst_19527 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
var statearr_19569_19602 = state_19546__$1;
(statearr_19569_19602[(2)] = inst_19527);

(statearr_19569_19602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (11))){
var inst_19512 = (state_19546[(7)]);
var inst_19498 = (state_19546[(12)]);
var inst_19512__$1 = cljs.core.seq.call(null,inst_19498);
var state_19546__$1 = (function (){var statearr_19570 = state_19546;
(statearr_19570[(7)] = inst_19512__$1);

return statearr_19570;
})();
if(inst_19512__$1){
var statearr_19571_19603 = state_19546__$1;
(statearr_19571_19603[(1)] = (14));

} else {
var statearr_19572_19604 = state_19546__$1;
(statearr_19572_19604[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (9))){
var inst_19534 = (state_19546[(2)]);
var inst_19535 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19546__$1 = (function (){var statearr_19573 = state_19546;
(statearr_19573[(15)] = inst_19534);

return statearr_19573;
})();
if(cljs.core.truth_(inst_19535)){
var statearr_19574_19605 = state_19546__$1;
(statearr_19574_19605[(1)] = (21));

} else {
var statearr_19575_19606 = state_19546__$1;
(statearr_19575_19606[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (5))){
var inst_19490 = cljs.core.async.close_BANG_.call(null,out);
var state_19546__$1 = state_19546;
var statearr_19576_19607 = state_19546__$1;
(statearr_19576_19607[(2)] = inst_19490);

(statearr_19576_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (14))){
var inst_19512 = (state_19546[(7)]);
var inst_19514 = cljs.core.chunked_seq_QMARK_.call(null,inst_19512);
var state_19546__$1 = state_19546;
if(inst_19514){
var statearr_19577_19608 = state_19546__$1;
(statearr_19577_19608[(1)] = (17));

} else {
var statearr_19578_19609 = state_19546__$1;
(statearr_19578_19609[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (16))){
var inst_19530 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
var statearr_19579_19610 = state_19546__$1;
(statearr_19579_19610[(2)] = inst_19530);

(statearr_19579_19610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (10))){
var inst_19501 = (state_19546[(8)]);
var inst_19499 = (state_19546[(10)]);
var inst_19506 = cljs.core._nth.call(null,inst_19499,inst_19501);
var state_19546__$1 = state_19546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19546__$1,(13),out,inst_19506);
} else {
if((state_val_19547 === (18))){
var inst_19512 = (state_19546[(7)]);
var inst_19521 = cljs.core.first.call(null,inst_19512);
var state_19546__$1 = state_19546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19546__$1,(20),out,inst_19521);
} else {
if((state_val_19547 === (8))){
var inst_19501 = (state_19546[(8)]);
var inst_19500 = (state_19546[(11)]);
var inst_19503 = (inst_19501 < inst_19500);
var inst_19504 = inst_19503;
var state_19546__$1 = state_19546;
if(cljs.core.truth_(inst_19504)){
var statearr_19580_19611 = state_19546__$1;
(statearr_19580_19611[(1)] = (10));

} else {
var statearr_19581_19612 = state_19546__$1;
(statearr_19581_19612[(1)] = (11));

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
});})(c__17055__auto__))
;
return ((function (switch__16943__auto__,c__17055__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16944__auto____0 = (function (){
var statearr_19585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19585[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16944__auto__);

(statearr_19585[(1)] = (1));

return statearr_19585;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16944__auto____1 = (function (state_19546){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19586){if((e19586 instanceof Object)){
var ex__16947__auto__ = e19586;
var statearr_19587_19613 = state_19546;
(statearr_19587_19613[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19614 = state_19546;
state_19546 = G__19614;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16944__auto__ = function(state_19546){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16944__auto____1.call(this,state_19546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto__))
})();
var state__17057__auto__ = (function (){var statearr_19588 = f__17056__auto__.call(null);
(statearr_19588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto__);

return statearr_19588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto__))
);

return c__17055__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19615 = [];
var len__11385__auto___19618 = arguments.length;
var i__11386__auto___19619 = (0);
while(true){
if((i__11386__auto___19619 < len__11385__auto___19618)){
args19615.push((arguments[i__11386__auto___19619]));

var G__19620 = (i__11386__auto___19619 + (1));
i__11386__auto___19619 = G__19620;
continue;
} else {
}
break;
}

var G__19617 = args19615.length;
switch (G__19617) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19615.length)].join('')));

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
var args19622 = [];
var len__11385__auto___19625 = arguments.length;
var i__11386__auto___19626 = (0);
while(true){
if((i__11386__auto___19626 < len__11385__auto___19625)){
args19622.push((arguments[i__11386__auto___19626]));

var G__19627 = (i__11386__auto___19626 + (1));
i__11386__auto___19626 = G__19627;
continue;
} else {
}
break;
}

var G__19624 = args19622.length;
switch (G__19624) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19622.length)].join('')));

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
var args19629 = [];
var len__11385__auto___19680 = arguments.length;
var i__11386__auto___19681 = (0);
while(true){
if((i__11386__auto___19681 < len__11385__auto___19680)){
args19629.push((arguments[i__11386__auto___19681]));

var G__19682 = (i__11386__auto___19681 + (1));
i__11386__auto___19681 = G__19682;
continue;
} else {
}
break;
}

var G__19631 = args19629.length;
switch (G__19631) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19629.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17055__auto___19684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19684,out){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19684,out){
return (function (state_19655){
var state_val_19656 = (state_19655[(1)]);
if((state_val_19656 === (7))){
var inst_19650 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19657_19685 = state_19655__$1;
(statearr_19657_19685[(2)] = inst_19650);

(statearr_19657_19685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (1))){
var inst_19632 = null;
var state_19655__$1 = (function (){var statearr_19658 = state_19655;
(statearr_19658[(7)] = inst_19632);

return statearr_19658;
})();
var statearr_19659_19686 = state_19655__$1;
(statearr_19659_19686[(2)] = null);

(statearr_19659_19686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (4))){
var inst_19635 = (state_19655[(8)]);
var inst_19635__$1 = (state_19655[(2)]);
var inst_19636 = (inst_19635__$1 == null);
var inst_19637 = cljs.core.not.call(null,inst_19636);
var state_19655__$1 = (function (){var statearr_19660 = state_19655;
(statearr_19660[(8)] = inst_19635__$1);

return statearr_19660;
})();
if(inst_19637){
var statearr_19661_19687 = state_19655__$1;
(statearr_19661_19687[(1)] = (5));

} else {
var statearr_19662_19688 = state_19655__$1;
(statearr_19662_19688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (6))){
var state_19655__$1 = state_19655;
var statearr_19663_19689 = state_19655__$1;
(statearr_19663_19689[(2)] = null);

(statearr_19663_19689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (3))){
var inst_19652 = (state_19655[(2)]);
var inst_19653 = cljs.core.async.close_BANG_.call(null,out);
var state_19655__$1 = (function (){var statearr_19664 = state_19655;
(statearr_19664[(9)] = inst_19652);

return statearr_19664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19655__$1,inst_19653);
} else {
if((state_val_19656 === (2))){
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19655__$1,(4),ch);
} else {
if((state_val_19656 === (11))){
var inst_19635 = (state_19655[(8)]);
var inst_19644 = (state_19655[(2)]);
var inst_19632 = inst_19635;
var state_19655__$1 = (function (){var statearr_19665 = state_19655;
(statearr_19665[(7)] = inst_19632);

(statearr_19665[(10)] = inst_19644);

return statearr_19665;
})();
var statearr_19666_19690 = state_19655__$1;
(statearr_19666_19690[(2)] = null);

(statearr_19666_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (9))){
var inst_19635 = (state_19655[(8)]);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19655__$1,(11),out,inst_19635);
} else {
if((state_val_19656 === (5))){
var inst_19632 = (state_19655[(7)]);
var inst_19635 = (state_19655[(8)]);
var inst_19639 = cljs.core._EQ_.call(null,inst_19635,inst_19632);
var state_19655__$1 = state_19655;
if(inst_19639){
var statearr_19668_19691 = state_19655__$1;
(statearr_19668_19691[(1)] = (8));

} else {
var statearr_19669_19692 = state_19655__$1;
(statearr_19669_19692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (10))){
var inst_19647 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19670_19693 = state_19655__$1;
(statearr_19670_19693[(2)] = inst_19647);

(statearr_19670_19693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (8))){
var inst_19632 = (state_19655[(7)]);
var tmp19667 = inst_19632;
var inst_19632__$1 = tmp19667;
var state_19655__$1 = (function (){var statearr_19671 = state_19655;
(statearr_19671[(7)] = inst_19632__$1);

return statearr_19671;
})();
var statearr_19672_19694 = state_19655__$1;
(statearr_19672_19694[(2)] = null);

(statearr_19672_19694[(1)] = (2));


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
});})(c__17055__auto___19684,out))
;
return ((function (switch__16943__auto__,c__17055__auto___19684,out){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19676[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19676[(1)] = (1));

return statearr_19676;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19655){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19677){if((e19677 instanceof Object)){
var ex__16947__auto__ = e19677;
var statearr_19678_19695 = state_19655;
(statearr_19678_19695[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19696 = state_19655;
state_19655 = G__19696;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19684,out))
})();
var state__17057__auto__ = (function (){var statearr_19679 = f__17056__auto__.call(null);
(statearr_19679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19684);

return statearr_19679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19684,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19697 = [];
var len__11385__auto___19767 = arguments.length;
var i__11386__auto___19768 = (0);
while(true){
if((i__11386__auto___19768 < len__11385__auto___19767)){
args19697.push((arguments[i__11386__auto___19768]));

var G__19769 = (i__11386__auto___19768 + (1));
i__11386__auto___19768 = G__19769;
continue;
} else {
}
break;
}

var G__19699 = args19697.length;
switch (G__19699) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19697.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17055__auto___19771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19771,out){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19771,out){
return (function (state_19737){
var state_val_19738 = (state_19737[(1)]);
if((state_val_19738 === (7))){
var inst_19733 = (state_19737[(2)]);
var state_19737__$1 = state_19737;
var statearr_19739_19772 = state_19737__$1;
(statearr_19739_19772[(2)] = inst_19733);

(statearr_19739_19772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (1))){
var inst_19700 = (new Array(n));
var inst_19701 = inst_19700;
var inst_19702 = (0);
var state_19737__$1 = (function (){var statearr_19740 = state_19737;
(statearr_19740[(7)] = inst_19702);

(statearr_19740[(8)] = inst_19701);

return statearr_19740;
})();
var statearr_19741_19773 = state_19737__$1;
(statearr_19741_19773[(2)] = null);

(statearr_19741_19773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (4))){
var inst_19705 = (state_19737[(9)]);
var inst_19705__$1 = (state_19737[(2)]);
var inst_19706 = (inst_19705__$1 == null);
var inst_19707 = cljs.core.not.call(null,inst_19706);
var state_19737__$1 = (function (){var statearr_19742 = state_19737;
(statearr_19742[(9)] = inst_19705__$1);

return statearr_19742;
})();
if(inst_19707){
var statearr_19743_19774 = state_19737__$1;
(statearr_19743_19774[(1)] = (5));

} else {
var statearr_19744_19775 = state_19737__$1;
(statearr_19744_19775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (15))){
var inst_19727 = (state_19737[(2)]);
var state_19737__$1 = state_19737;
var statearr_19745_19776 = state_19737__$1;
(statearr_19745_19776[(2)] = inst_19727);

(statearr_19745_19776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (13))){
var state_19737__$1 = state_19737;
var statearr_19746_19777 = state_19737__$1;
(statearr_19746_19777[(2)] = null);

(statearr_19746_19777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (6))){
var inst_19702 = (state_19737[(7)]);
var inst_19723 = (inst_19702 > (0));
var state_19737__$1 = state_19737;
if(cljs.core.truth_(inst_19723)){
var statearr_19747_19778 = state_19737__$1;
(statearr_19747_19778[(1)] = (12));

} else {
var statearr_19748_19779 = state_19737__$1;
(statearr_19748_19779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (3))){
var inst_19735 = (state_19737[(2)]);
var state_19737__$1 = state_19737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19737__$1,inst_19735);
} else {
if((state_val_19738 === (12))){
var inst_19701 = (state_19737[(8)]);
var inst_19725 = cljs.core.vec.call(null,inst_19701);
var state_19737__$1 = state_19737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19737__$1,(15),out,inst_19725);
} else {
if((state_val_19738 === (2))){
var state_19737__$1 = state_19737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19737__$1,(4),ch);
} else {
if((state_val_19738 === (11))){
var inst_19717 = (state_19737[(2)]);
var inst_19718 = (new Array(n));
var inst_19701 = inst_19718;
var inst_19702 = (0);
var state_19737__$1 = (function (){var statearr_19749 = state_19737;
(statearr_19749[(7)] = inst_19702);

(statearr_19749[(8)] = inst_19701);

(statearr_19749[(10)] = inst_19717);

return statearr_19749;
})();
var statearr_19750_19780 = state_19737__$1;
(statearr_19750_19780[(2)] = null);

(statearr_19750_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (9))){
var inst_19701 = (state_19737[(8)]);
var inst_19715 = cljs.core.vec.call(null,inst_19701);
var state_19737__$1 = state_19737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19737__$1,(11),out,inst_19715);
} else {
if((state_val_19738 === (5))){
var inst_19705 = (state_19737[(9)]);
var inst_19702 = (state_19737[(7)]);
var inst_19701 = (state_19737[(8)]);
var inst_19710 = (state_19737[(11)]);
var inst_19709 = (inst_19701[inst_19702] = inst_19705);
var inst_19710__$1 = (inst_19702 + (1));
var inst_19711 = (inst_19710__$1 < n);
var state_19737__$1 = (function (){var statearr_19751 = state_19737;
(statearr_19751[(12)] = inst_19709);

(statearr_19751[(11)] = inst_19710__$1);

return statearr_19751;
})();
if(cljs.core.truth_(inst_19711)){
var statearr_19752_19781 = state_19737__$1;
(statearr_19752_19781[(1)] = (8));

} else {
var statearr_19753_19782 = state_19737__$1;
(statearr_19753_19782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (14))){
var inst_19730 = (state_19737[(2)]);
var inst_19731 = cljs.core.async.close_BANG_.call(null,out);
var state_19737__$1 = (function (){var statearr_19755 = state_19737;
(statearr_19755[(13)] = inst_19730);

return statearr_19755;
})();
var statearr_19756_19783 = state_19737__$1;
(statearr_19756_19783[(2)] = inst_19731);

(statearr_19756_19783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (10))){
var inst_19721 = (state_19737[(2)]);
var state_19737__$1 = state_19737;
var statearr_19757_19784 = state_19737__$1;
(statearr_19757_19784[(2)] = inst_19721);

(statearr_19757_19784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19738 === (8))){
var inst_19701 = (state_19737[(8)]);
var inst_19710 = (state_19737[(11)]);
var tmp19754 = inst_19701;
var inst_19701__$1 = tmp19754;
var inst_19702 = inst_19710;
var state_19737__$1 = (function (){var statearr_19758 = state_19737;
(statearr_19758[(7)] = inst_19702);

(statearr_19758[(8)] = inst_19701__$1);

return statearr_19758;
})();
var statearr_19759_19785 = state_19737__$1;
(statearr_19759_19785[(2)] = null);

(statearr_19759_19785[(1)] = (2));


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
});})(c__17055__auto___19771,out))
;
return ((function (switch__16943__auto__,c__17055__auto___19771,out){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19763[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19763[(1)] = (1));

return statearr_19763;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19737){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19764){if((e19764 instanceof Object)){
var ex__16947__auto__ = e19764;
var statearr_19765_19786 = state_19737;
(statearr_19765_19786[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19787 = state_19737;
state_19737 = G__19787;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19771,out))
})();
var state__17057__auto__ = (function (){var statearr_19766 = f__17056__auto__.call(null);
(statearr_19766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19771);

return statearr_19766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19771,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19788 = [];
var len__11385__auto___19862 = arguments.length;
var i__11386__auto___19863 = (0);
while(true){
if((i__11386__auto___19863 < len__11385__auto___19862)){
args19788.push((arguments[i__11386__auto___19863]));

var G__19864 = (i__11386__auto___19863 + (1));
i__11386__auto___19863 = G__19864;
continue;
} else {
}
break;
}

var G__19790 = args19788.length;
switch (G__19790) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19788.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17055__auto___19866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto___19866,out){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto___19866,out){
return (function (state_19832){
var state_val_19833 = (state_19832[(1)]);
if((state_val_19833 === (7))){
var inst_19828 = (state_19832[(2)]);
var state_19832__$1 = state_19832;
var statearr_19834_19867 = state_19832__$1;
(statearr_19834_19867[(2)] = inst_19828);

(statearr_19834_19867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (1))){
var inst_19791 = [];
var inst_19792 = inst_19791;
var inst_19793 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19832__$1 = (function (){var statearr_19835 = state_19832;
(statearr_19835[(7)] = inst_19793);

(statearr_19835[(8)] = inst_19792);

return statearr_19835;
})();
var statearr_19836_19868 = state_19832__$1;
(statearr_19836_19868[(2)] = null);

(statearr_19836_19868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (4))){
var inst_19796 = (state_19832[(9)]);
var inst_19796__$1 = (state_19832[(2)]);
var inst_19797 = (inst_19796__$1 == null);
var inst_19798 = cljs.core.not.call(null,inst_19797);
var state_19832__$1 = (function (){var statearr_19837 = state_19832;
(statearr_19837[(9)] = inst_19796__$1);

return statearr_19837;
})();
if(inst_19798){
var statearr_19838_19869 = state_19832__$1;
(statearr_19838_19869[(1)] = (5));

} else {
var statearr_19839_19870 = state_19832__$1;
(statearr_19839_19870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (15))){
var inst_19822 = (state_19832[(2)]);
var state_19832__$1 = state_19832;
var statearr_19840_19871 = state_19832__$1;
(statearr_19840_19871[(2)] = inst_19822);

(statearr_19840_19871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (13))){
var state_19832__$1 = state_19832;
var statearr_19841_19872 = state_19832__$1;
(statearr_19841_19872[(2)] = null);

(statearr_19841_19872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (6))){
var inst_19792 = (state_19832[(8)]);
var inst_19817 = inst_19792.length;
var inst_19818 = (inst_19817 > (0));
var state_19832__$1 = state_19832;
if(cljs.core.truth_(inst_19818)){
var statearr_19842_19873 = state_19832__$1;
(statearr_19842_19873[(1)] = (12));

} else {
var statearr_19843_19874 = state_19832__$1;
(statearr_19843_19874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (3))){
var inst_19830 = (state_19832[(2)]);
var state_19832__$1 = state_19832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19832__$1,inst_19830);
} else {
if((state_val_19833 === (12))){
var inst_19792 = (state_19832[(8)]);
var inst_19820 = cljs.core.vec.call(null,inst_19792);
var state_19832__$1 = state_19832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19832__$1,(15),out,inst_19820);
} else {
if((state_val_19833 === (2))){
var state_19832__$1 = state_19832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19832__$1,(4),ch);
} else {
if((state_val_19833 === (11))){
var inst_19800 = (state_19832[(10)]);
var inst_19796 = (state_19832[(9)]);
var inst_19810 = (state_19832[(2)]);
var inst_19811 = [];
var inst_19812 = inst_19811.push(inst_19796);
var inst_19792 = inst_19811;
var inst_19793 = inst_19800;
var state_19832__$1 = (function (){var statearr_19844 = state_19832;
(statearr_19844[(7)] = inst_19793);

(statearr_19844[(11)] = inst_19810);

(statearr_19844[(12)] = inst_19812);

(statearr_19844[(8)] = inst_19792);

return statearr_19844;
})();
var statearr_19845_19875 = state_19832__$1;
(statearr_19845_19875[(2)] = null);

(statearr_19845_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (9))){
var inst_19792 = (state_19832[(8)]);
var inst_19808 = cljs.core.vec.call(null,inst_19792);
var state_19832__$1 = state_19832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19832__$1,(11),out,inst_19808);
} else {
if((state_val_19833 === (5))){
var inst_19793 = (state_19832[(7)]);
var inst_19800 = (state_19832[(10)]);
var inst_19796 = (state_19832[(9)]);
var inst_19800__$1 = f.call(null,inst_19796);
var inst_19801 = cljs.core._EQ_.call(null,inst_19800__$1,inst_19793);
var inst_19802 = cljs.core.keyword_identical_QMARK_.call(null,inst_19793,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19803 = (inst_19801) || (inst_19802);
var state_19832__$1 = (function (){var statearr_19846 = state_19832;
(statearr_19846[(10)] = inst_19800__$1);

return statearr_19846;
})();
if(cljs.core.truth_(inst_19803)){
var statearr_19847_19876 = state_19832__$1;
(statearr_19847_19876[(1)] = (8));

} else {
var statearr_19848_19877 = state_19832__$1;
(statearr_19848_19877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (14))){
var inst_19825 = (state_19832[(2)]);
var inst_19826 = cljs.core.async.close_BANG_.call(null,out);
var state_19832__$1 = (function (){var statearr_19850 = state_19832;
(statearr_19850[(13)] = inst_19825);

return statearr_19850;
})();
var statearr_19851_19878 = state_19832__$1;
(statearr_19851_19878[(2)] = inst_19826);

(statearr_19851_19878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (10))){
var inst_19815 = (state_19832[(2)]);
var state_19832__$1 = state_19832;
var statearr_19852_19879 = state_19832__$1;
(statearr_19852_19879[(2)] = inst_19815);

(statearr_19852_19879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19833 === (8))){
var inst_19800 = (state_19832[(10)]);
var inst_19796 = (state_19832[(9)]);
var inst_19792 = (state_19832[(8)]);
var inst_19805 = inst_19792.push(inst_19796);
var tmp19849 = inst_19792;
var inst_19792__$1 = tmp19849;
var inst_19793 = inst_19800;
var state_19832__$1 = (function (){var statearr_19853 = state_19832;
(statearr_19853[(7)] = inst_19793);

(statearr_19853[(14)] = inst_19805);

(statearr_19853[(8)] = inst_19792__$1);

return statearr_19853;
})();
var statearr_19854_19880 = state_19832__$1;
(statearr_19854_19880[(2)] = null);

(statearr_19854_19880[(1)] = (2));


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
});})(c__17055__auto___19866,out))
;
return ((function (switch__16943__auto__,c__17055__auto___19866,out){
return (function() {
var cljs$core$async$state_machine__16944__auto__ = null;
var cljs$core$async$state_machine__16944__auto____0 = (function (){
var statearr_19858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19858[(0)] = cljs$core$async$state_machine__16944__auto__);

(statearr_19858[(1)] = (1));

return statearr_19858;
});
var cljs$core$async$state_machine__16944__auto____1 = (function (state_19832){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_19832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e19859){if((e19859 instanceof Object)){
var ex__16947__auto__ = e19859;
var statearr_19860_19881 = state_19832;
(statearr_19860_19881[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19882 = state_19832;
state_19832 = G__19882;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
cljs$core$async$state_machine__16944__auto__ = function(state_19832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16944__auto____1.call(this,state_19832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16944__auto____0;
cljs$core$async$state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16944__auto____1;
return cljs$core$async$state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto___19866,out))
})();
var state__17057__auto__ = (function (){var statearr_19861 = f__17056__auto__.call(null);
(statearr_19861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto___19866);

return statearr_19861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto___19866,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map