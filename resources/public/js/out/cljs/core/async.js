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
var args12588 = [];
var len__11105__auto___12594 = arguments.length;
var i__11106__auto___12595 = (0);
while(true){
if((i__11106__auto___12595 < len__11105__auto___12594)){
args12588.push((arguments[i__11106__auto___12595]));

var G__12596 = (i__11106__auto___12595 + (1));
i__11106__auto___12595 = G__12596;
continue;
} else {
}
break;
}

var G__12590 = args12588.length;
switch (G__12590) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12588.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12591 = (function (f,blockable,meta12592){
this.f = f;
this.blockable = blockable;
this.meta12592 = meta12592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12593,meta12592__$1){
var self__ = this;
var _12593__$1 = this;
return (new cljs.core.async.t_cljs$core$async12591(self__.f,self__.blockable,meta12592__$1));
});

cljs.core.async.t_cljs$core$async12591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12593){
var self__ = this;
var _12593__$1 = this;
return self__.meta12592;
});

cljs.core.async.t_cljs$core$async12591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12592","meta12592",-169071659,null)], null);
});

cljs.core.async.t_cljs$core$async12591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12591";

cljs.core.async.t_cljs$core$async12591.cljs$lang$ctorPrWriter = (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async12591");
});

cljs.core.async.__GT_t_cljs$core$async12591 = (function cljs$core$async$__GT_t_cljs$core$async12591(f__$1,blockable__$1,meta12592){
return (new cljs.core.async.t_cljs$core$async12591(f__$1,blockable__$1,meta12592));
});

}

return (new cljs.core.async.t_cljs$core$async12591(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args12600 = [];
var len__11105__auto___12603 = arguments.length;
var i__11106__auto___12604 = (0);
while(true){
if((i__11106__auto___12604 < len__11105__auto___12603)){
args12600.push((arguments[i__11106__auto___12604]));

var G__12605 = (i__11106__auto___12604 + (1));
i__11106__auto___12604 = G__12605;
continue;
} else {
}
break;
}

var G__12602 = args12600.length;
switch (G__12602) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12600.length)].join('')));

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
var args12607 = [];
var len__11105__auto___12610 = arguments.length;
var i__11106__auto___12611 = (0);
while(true){
if((i__11106__auto___12611 < len__11105__auto___12610)){
args12607.push((arguments[i__11106__auto___12611]));

var G__12612 = (i__11106__auto___12611 + (1));
i__11106__auto___12611 = G__12612;
continue;
} else {
}
break;
}

var G__12609 = args12607.length;
switch (G__12609) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12607.length)].join('')));

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
var args12614 = [];
var len__11105__auto___12617 = arguments.length;
var i__11106__auto___12618 = (0);
while(true){
if((i__11106__auto___12618 < len__11105__auto___12617)){
args12614.push((arguments[i__11106__auto___12618]));

var G__12619 = (i__11106__auto___12618 + (1));
i__11106__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var G__12616 = args12614.length;
switch (G__12616) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12614.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12621 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12621);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12621,ret){
return (function (){
return fn1.call(null,val_12621);
});})(val_12621,ret))
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
var args12622 = [];
var len__11105__auto___12625 = arguments.length;
var i__11106__auto___12626 = (0);
while(true){
if((i__11106__auto___12626 < len__11105__auto___12625)){
args12622.push((arguments[i__11106__auto___12626]));

var G__12627 = (i__11106__auto___12626 + (1));
i__11106__auto___12626 = G__12627;
continue;
} else {
}
break;
}

var G__12624 = args12622.length;
switch (G__12624) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12622.length)].join('')));

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
var n__10915__auto___12629 = n;
var x_12630 = (0);
while(true){
if((x_12630 < n__10915__auto___12629)){
(a[x_12630] = (0));

var G__12631 = (x_12630 + (1));
x_12630 = G__12631;
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

var G__12632 = (i + (1));
i = G__12632;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12636 = (function (flag,meta12637){
this.flag = flag;
this.meta12637 = meta12637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12638,meta12637__$1){
var self__ = this;
var _12638__$1 = this;
return (new cljs.core.async.t_cljs$core$async12636(self__.flag,meta12637__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12638){
var self__ = this;
var _12638__$1 = this;
return self__.meta12637;
});})(flag))
;

cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12636.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12637","meta12637",586688592,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12636";

cljs.core.async.t_cljs$core$async12636.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async12636");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12636 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12636(flag__$1,meta12637){
return (new cljs.core.async.t_cljs$core$async12636(flag__$1,meta12637));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12636(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12642 = (function (flag,cb,meta12643){
this.flag = flag;
this.cb = cb;
this.meta12643 = meta12643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12644,meta12643__$1){
var self__ = this;
var _12644__$1 = this;
return (new cljs.core.async.t_cljs$core$async12642(self__.flag,self__.cb,meta12643__$1));
});

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12644){
var self__ = this;
var _12644__$1 = this;
return self__.meta12643;
});

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12643","meta12643",-960842286,null)], null);
});

cljs.core.async.t_cljs$core$async12642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12642";

cljs.core.async.t_cljs$core$async12642.cljs$lang$ctorPrWriter = (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async12642");
});

cljs.core.async.__GT_t_cljs$core$async12642 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12642(flag__$1,cb__$1,meta12643){
return (new cljs.core.async.t_cljs$core$async12642(flag__$1,cb__$1,meta12643));
});

}

return (new cljs.core.async.t_cljs$core$async12642(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12645_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12645_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12646_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12646_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9992__auto__ = wport;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12647 = (i + (1));
i = G__12647;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9992__auto__ = ret;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__9980__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9980__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9980__auto__;
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
var args__11112__auto__ = [];
var len__11105__auto___12653 = arguments.length;
var i__11106__auto___12654 = (0);
while(true){
if((i__11106__auto___12654 < len__11105__auto___12653)){
args__11112__auto__.push((arguments[i__11106__auto___12654]));

var G__12655 = (i__11106__auto___12654 + (1));
i__11106__auto___12654 = G__12655;
continue;
} else {
}
break;
}

var argseq__11113__auto__ = ((((1) < args__11112__auto__.length))?(new cljs.core.IndexedSeq(args__11112__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11113__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12650){
var map__12651 = p__12650;
var map__12651__$1 = ((((!((map__12651 == null)))?((((map__12651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12651):map__12651);
var opts = map__12651__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12648){
var G__12649 = cljs.core.first.call(null,seq12648);
var seq12648__$1 = cljs.core.next.call(null,seq12648);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12649,seq12648__$1);
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
var args12656 = [];
var len__11105__auto___12706 = arguments.length;
var i__11106__auto___12707 = (0);
while(true){
if((i__11106__auto___12707 < len__11105__auto___12706)){
args12656.push((arguments[i__11106__auto___12707]));

var G__12708 = (i__11106__auto___12707 + (1));
i__11106__auto___12707 = G__12708;
continue;
} else {
}
break;
}

var G__12658 = args12656.length;
switch (G__12658) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12656.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12543__auto___12710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___12710){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___12710){
return (function (state_12682){
var state_val_12683 = (state_12682[(1)]);
if((state_val_12683 === (7))){
var inst_12678 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12684_12711 = state_12682__$1;
(statearr_12684_12711[(2)] = inst_12678);

(statearr_12684_12711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (1))){
var state_12682__$1 = state_12682;
var statearr_12685_12712 = state_12682__$1;
(statearr_12685_12712[(2)] = null);

(statearr_12685_12712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (4))){
var inst_12661 = (state_12682[(7)]);
var inst_12661__$1 = (state_12682[(2)]);
var inst_12662 = (inst_12661__$1 == null);
var state_12682__$1 = (function (){var statearr_12686 = state_12682;
(statearr_12686[(7)] = inst_12661__$1);

return statearr_12686;
})();
if(cljs.core.truth_(inst_12662)){
var statearr_12687_12713 = state_12682__$1;
(statearr_12687_12713[(1)] = (5));

} else {
var statearr_12688_12714 = state_12682__$1;
(statearr_12688_12714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (13))){
var state_12682__$1 = state_12682;
var statearr_12689_12715 = state_12682__$1;
(statearr_12689_12715[(2)] = null);

(statearr_12689_12715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (6))){
var inst_12661 = (state_12682[(7)]);
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12682__$1,(11),to,inst_12661);
} else {
if((state_val_12683 === (3))){
var inst_12680 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12682__$1,inst_12680);
} else {
if((state_val_12683 === (12))){
var state_12682__$1 = state_12682;
var statearr_12690_12716 = state_12682__$1;
(statearr_12690_12716[(2)] = null);

(statearr_12690_12716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (2))){
var state_12682__$1 = state_12682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12682__$1,(4),from);
} else {
if((state_val_12683 === (11))){
var inst_12671 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
if(cljs.core.truth_(inst_12671)){
var statearr_12691_12717 = state_12682__$1;
(statearr_12691_12717[(1)] = (12));

} else {
var statearr_12692_12718 = state_12682__$1;
(statearr_12692_12718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (9))){
var state_12682__$1 = state_12682;
var statearr_12693_12719 = state_12682__$1;
(statearr_12693_12719[(2)] = null);

(statearr_12693_12719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (5))){
var state_12682__$1 = state_12682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12694_12720 = state_12682__$1;
(statearr_12694_12720[(1)] = (8));

} else {
var statearr_12695_12721 = state_12682__$1;
(statearr_12695_12721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (14))){
var inst_12676 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12696_12722 = state_12682__$1;
(statearr_12696_12722[(2)] = inst_12676);

(statearr_12696_12722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (10))){
var inst_12668 = (state_12682[(2)]);
var state_12682__$1 = state_12682;
var statearr_12697_12723 = state_12682__$1;
(statearr_12697_12723[(2)] = inst_12668);

(statearr_12697_12723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12683 === (8))){
var inst_12665 = cljs.core.async.close_BANG_.call(null,to);
var state_12682__$1 = state_12682;
var statearr_12698_12724 = state_12682__$1;
(statearr_12698_12724[(2)] = inst_12665);

(statearr_12698_12724[(1)] = (10));


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
});})(c__12543__auto___12710))
;
return ((function (switch__12431__auto__,c__12543__auto___12710){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_12702 = [null,null,null,null,null,null,null,null];
(statearr_12702[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_12702[(1)] = (1));

return statearr_12702;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_12682){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_12682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e12703){if((e12703 instanceof Object)){
var ex__12435__auto__ = e12703;
var statearr_12704_12725 = state_12682;
(statearr_12704_12725[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12726 = state_12682;
state_12682 = G__12726;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_12682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_12682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___12710))
})();
var state__12545__auto__ = (function (){var statearr_12705 = f__12544__auto__.call(null);
(statearr_12705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___12710);

return statearr_12705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___12710))
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
return (function (p__12914){
var vec__12915 = p__12914;
var v = cljs.core.nth.call(null,vec__12915,(0),null);
var p = cljs.core.nth.call(null,vec__12915,(1),null);
var job = vec__12915;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12543__auto___13101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___13101,res,vec__12915,v,p,job,jobs,results){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___13101,res,vec__12915,v,p,job,jobs,results){
return (function (state_12922){
var state_val_12923 = (state_12922[(1)]);
if((state_val_12923 === (1))){
var state_12922__$1 = state_12922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12922__$1,(2),res,v);
} else {
if((state_val_12923 === (2))){
var inst_12919 = (state_12922[(2)]);
var inst_12920 = cljs.core.async.close_BANG_.call(null,res);
var state_12922__$1 = (function (){var statearr_12924 = state_12922;
(statearr_12924[(7)] = inst_12919);

return statearr_12924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12922__$1,inst_12920);
} else {
return null;
}
}
});})(c__12543__auto___13101,res,vec__12915,v,p,job,jobs,results))
;
return ((function (switch__12431__auto__,c__12543__auto___13101,res,vec__12915,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0 = (function (){
var statearr_12928 = [null,null,null,null,null,null,null,null];
(statearr_12928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__);

(statearr_12928[(1)] = (1));

return statearr_12928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1 = (function (state_12922){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_12922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e12929){if((e12929 instanceof Object)){
var ex__12435__auto__ = e12929;
var statearr_12930_13102 = state_12922;
(statearr_12930_13102[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13103 = state_12922;
state_12922 = G__13103;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = function(state_12922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1.call(this,state_12922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___13101,res,vec__12915,v,p,job,jobs,results))
})();
var state__12545__auto__ = (function (){var statearr_12931 = f__12544__auto__.call(null);
(statearr_12931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___13101);

return statearr_12931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___13101,res,vec__12915,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12932){
var vec__12933 = p__12932;
var v = cljs.core.nth.call(null,vec__12933,(0),null);
var p = cljs.core.nth.call(null,vec__12933,(1),null);
var job = vec__12933;
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
var n__10915__auto___13104 = n;
var __13105 = (0);
while(true){
if((__13105 < n__10915__auto___13104)){
var G__12936_13106 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12936_13106) {
case "compute":
var c__12543__auto___13108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13105,c__12543__auto___13108,G__12936_13106,n__10915__auto___13104,jobs,results,process,async){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (__13105,c__12543__auto___13108,G__12936_13106,n__10915__auto___13104,jobs,results,process,async){
return (function (state_12949){
var state_val_12950 = (state_12949[(1)]);
if((state_val_12950 === (1))){
var state_12949__$1 = state_12949;
var statearr_12951_13109 = state_12949__$1;
(statearr_12951_13109[(2)] = null);

(statearr_12951_13109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (2))){
var state_12949__$1 = state_12949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12949__$1,(4),jobs);
} else {
if((state_val_12950 === (3))){
var inst_12947 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12949__$1,inst_12947);
} else {
if((state_val_12950 === (4))){
var inst_12939 = (state_12949[(2)]);
var inst_12940 = process.call(null,inst_12939);
var state_12949__$1 = state_12949;
if(cljs.core.truth_(inst_12940)){
var statearr_12952_13110 = state_12949__$1;
(statearr_12952_13110[(1)] = (5));

} else {
var statearr_12953_13111 = state_12949__$1;
(statearr_12953_13111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (5))){
var state_12949__$1 = state_12949;
var statearr_12954_13112 = state_12949__$1;
(statearr_12954_13112[(2)] = null);

(statearr_12954_13112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (6))){
var state_12949__$1 = state_12949;
var statearr_12955_13113 = state_12949__$1;
(statearr_12955_13113[(2)] = null);

(statearr_12955_13113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (7))){
var inst_12945 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
var statearr_12956_13114 = state_12949__$1;
(statearr_12956_13114[(2)] = inst_12945);

(statearr_12956_13114[(1)] = (3));


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
});})(__13105,c__12543__auto___13108,G__12936_13106,n__10915__auto___13104,jobs,results,process,async))
;
return ((function (__13105,switch__12431__auto__,c__12543__auto___13108,G__12936_13106,n__10915__auto___13104,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0 = (function (){
var statearr_12960 = [null,null,null,null,null,null,null];
(statearr_12960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__);

(statearr_12960[(1)] = (1));

return statearr_12960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1 = (function (state_12949){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_12949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e12961){if((e12961 instanceof Object)){
var ex__12435__auto__ = e12961;
var statearr_12962_13115 = state_12949;
(statearr_12962_13115[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13116 = state_12949;
state_12949 = G__13116;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = function(state_12949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1.call(this,state_12949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__;
})()
;})(__13105,switch__12431__auto__,c__12543__auto___13108,G__12936_13106,n__10915__auto___13104,jobs,results,process,async))
})();
var state__12545__auto__ = (function (){var statearr_12963 = f__12544__auto__.call(null);
(statearr_12963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___13108);

return statearr_12963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(__13105,c__12543__auto___13108,G__12936_13106,n__10915__auto___13104,jobs,results,process,async))
);


break;
case "async":
var c__12543__auto___13117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13105,c__12543__auto___13117,G__12936_13106,n__10915__auto___13104,jobs,results,process,async){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (__13105,c__12543__auto___13117,G__12936_13106,n__10915__auto___13104,jobs,results,process,async){
return (function (state_12976){
var state_val_12977 = (state_12976[(1)]);
if((state_val_12977 === (1))){
var state_12976__$1 = state_12976;
var statearr_12978_13118 = state_12976__$1;
(statearr_12978_13118[(2)] = null);

(statearr_12978_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12977 === (2))){
var state_12976__$1 = state_12976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12976__$1,(4),jobs);
} else {
if((state_val_12977 === (3))){
var inst_12974 = (state_12976[(2)]);
var state_12976__$1 = state_12976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12976__$1,inst_12974);
} else {
if((state_val_12977 === (4))){
var inst_12966 = (state_12976[(2)]);
var inst_12967 = async.call(null,inst_12966);
var state_12976__$1 = state_12976;
if(cljs.core.truth_(inst_12967)){
var statearr_12979_13119 = state_12976__$1;
(statearr_12979_13119[(1)] = (5));

} else {
var statearr_12980_13120 = state_12976__$1;
(statearr_12980_13120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12977 === (5))){
var state_12976__$1 = state_12976;
var statearr_12981_13121 = state_12976__$1;
(statearr_12981_13121[(2)] = null);

(statearr_12981_13121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12977 === (6))){
var state_12976__$1 = state_12976;
var statearr_12982_13122 = state_12976__$1;
(statearr_12982_13122[(2)] = null);

(statearr_12982_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12977 === (7))){
var inst_12972 = (state_12976[(2)]);
var state_12976__$1 = state_12976;
var statearr_12983_13123 = state_12976__$1;
(statearr_12983_13123[(2)] = inst_12972);

(statearr_12983_13123[(1)] = (3));


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
});})(__13105,c__12543__auto___13117,G__12936_13106,n__10915__auto___13104,jobs,results,process,async))
;
return ((function (__13105,switch__12431__auto__,c__12543__auto___13117,G__12936_13106,n__10915__auto___13104,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0 = (function (){
var statearr_12987 = [null,null,null,null,null,null,null];
(statearr_12987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__);

(statearr_12987[(1)] = (1));

return statearr_12987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1 = (function (state_12976){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_12976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e12988){if((e12988 instanceof Object)){
var ex__12435__auto__ = e12988;
var statearr_12989_13124 = state_12976;
(statearr_12989_13124[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13125 = state_12976;
state_12976 = G__13125;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = function(state_12976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1.call(this,state_12976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__;
})()
;})(__13105,switch__12431__auto__,c__12543__auto___13117,G__12936_13106,n__10915__auto___13104,jobs,results,process,async))
})();
var state__12545__auto__ = (function (){var statearr_12990 = f__12544__auto__.call(null);
(statearr_12990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___13117);

return statearr_12990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(__13105,c__12543__auto___13117,G__12936_13106,n__10915__auto___13104,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__13126 = (__13105 + (1));
__13105 = G__13126;
continue;
} else {
}
break;
}

var c__12543__auto___13127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___13127,jobs,results,process,async){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___13127,jobs,results,process,async){
return (function (state_13012){
var state_val_13013 = (state_13012[(1)]);
if((state_val_13013 === (1))){
var state_13012__$1 = state_13012;
var statearr_13014_13128 = state_13012__$1;
(statearr_13014_13128[(2)] = null);

(statearr_13014_13128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (2))){
var state_13012__$1 = state_13012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13012__$1,(4),from);
} else {
if((state_val_13013 === (3))){
var inst_13010 = (state_13012[(2)]);
var state_13012__$1 = state_13012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13012__$1,inst_13010);
} else {
if((state_val_13013 === (4))){
var inst_12993 = (state_13012[(7)]);
var inst_12993__$1 = (state_13012[(2)]);
var inst_12994 = (inst_12993__$1 == null);
var state_13012__$1 = (function (){var statearr_13015 = state_13012;
(statearr_13015[(7)] = inst_12993__$1);

return statearr_13015;
})();
if(cljs.core.truth_(inst_12994)){
var statearr_13016_13129 = state_13012__$1;
(statearr_13016_13129[(1)] = (5));

} else {
var statearr_13017_13130 = state_13012__$1;
(statearr_13017_13130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (5))){
var inst_12996 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13012__$1 = state_13012;
var statearr_13018_13131 = state_13012__$1;
(statearr_13018_13131[(2)] = inst_12996);

(statearr_13018_13131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (6))){
var inst_12998 = (state_13012[(8)]);
var inst_12993 = (state_13012[(7)]);
var inst_12998__$1 = cljs.core.async.chan.call(null,(1));
var inst_12999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13000 = [inst_12993,inst_12998__$1];
var inst_13001 = (new cljs.core.PersistentVector(null,2,(5),inst_12999,inst_13000,null));
var state_13012__$1 = (function (){var statearr_13019 = state_13012;
(statearr_13019[(8)] = inst_12998__$1);

return statearr_13019;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13012__$1,(8),jobs,inst_13001);
} else {
if((state_val_13013 === (7))){
var inst_13008 = (state_13012[(2)]);
var state_13012__$1 = state_13012;
var statearr_13020_13132 = state_13012__$1;
(statearr_13020_13132[(2)] = inst_13008);

(statearr_13020_13132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (8))){
var inst_12998 = (state_13012[(8)]);
var inst_13003 = (state_13012[(2)]);
var state_13012__$1 = (function (){var statearr_13021 = state_13012;
(statearr_13021[(9)] = inst_13003);

return statearr_13021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13012__$1,(9),results,inst_12998);
} else {
if((state_val_13013 === (9))){
var inst_13005 = (state_13012[(2)]);
var state_13012__$1 = (function (){var statearr_13022 = state_13012;
(statearr_13022[(10)] = inst_13005);

return statearr_13022;
})();
var statearr_13023_13133 = state_13012__$1;
(statearr_13023_13133[(2)] = null);

(statearr_13023_13133[(1)] = (2));


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
});})(c__12543__auto___13127,jobs,results,process,async))
;
return ((function (switch__12431__auto__,c__12543__auto___13127,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0 = (function (){
var statearr_13027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__);

(statearr_13027[(1)] = (1));

return statearr_13027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1 = (function (state_13012){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13028){if((e13028 instanceof Object)){
var ex__12435__auto__ = e13028;
var statearr_13029_13134 = state_13012;
(statearr_13029_13134[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13135 = state_13012;
state_13012 = G__13135;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = function(state_13012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1.call(this,state_13012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___13127,jobs,results,process,async))
})();
var state__12545__auto__ = (function (){var statearr_13030 = f__12544__auto__.call(null);
(statearr_13030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___13127);

return statearr_13030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___13127,jobs,results,process,async))
);


var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__,jobs,results,process,async){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__,jobs,results,process,async){
return (function (state_13068){
var state_val_13069 = (state_13068[(1)]);
if((state_val_13069 === (7))){
var inst_13064 = (state_13068[(2)]);
var state_13068__$1 = state_13068;
var statearr_13070_13136 = state_13068__$1;
(statearr_13070_13136[(2)] = inst_13064);

(statearr_13070_13136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (20))){
var state_13068__$1 = state_13068;
var statearr_13071_13137 = state_13068__$1;
(statearr_13071_13137[(2)] = null);

(statearr_13071_13137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (1))){
var state_13068__$1 = state_13068;
var statearr_13072_13138 = state_13068__$1;
(statearr_13072_13138[(2)] = null);

(statearr_13072_13138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (4))){
var inst_13033 = (state_13068[(7)]);
var inst_13033__$1 = (state_13068[(2)]);
var inst_13034 = (inst_13033__$1 == null);
var state_13068__$1 = (function (){var statearr_13073 = state_13068;
(statearr_13073[(7)] = inst_13033__$1);

return statearr_13073;
})();
if(cljs.core.truth_(inst_13034)){
var statearr_13074_13139 = state_13068__$1;
(statearr_13074_13139[(1)] = (5));

} else {
var statearr_13075_13140 = state_13068__$1;
(statearr_13075_13140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (15))){
var inst_13046 = (state_13068[(8)]);
var state_13068__$1 = state_13068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13068__$1,(18),to,inst_13046);
} else {
if((state_val_13069 === (21))){
var inst_13059 = (state_13068[(2)]);
var state_13068__$1 = state_13068;
var statearr_13076_13141 = state_13068__$1;
(statearr_13076_13141[(2)] = inst_13059);

(statearr_13076_13141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (13))){
var inst_13061 = (state_13068[(2)]);
var state_13068__$1 = (function (){var statearr_13077 = state_13068;
(statearr_13077[(9)] = inst_13061);

return statearr_13077;
})();
var statearr_13078_13142 = state_13068__$1;
(statearr_13078_13142[(2)] = null);

(statearr_13078_13142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (6))){
var inst_13033 = (state_13068[(7)]);
var state_13068__$1 = state_13068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13068__$1,(11),inst_13033);
} else {
if((state_val_13069 === (17))){
var inst_13054 = (state_13068[(2)]);
var state_13068__$1 = state_13068;
if(cljs.core.truth_(inst_13054)){
var statearr_13079_13143 = state_13068__$1;
(statearr_13079_13143[(1)] = (19));

} else {
var statearr_13080_13144 = state_13068__$1;
(statearr_13080_13144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (3))){
var inst_13066 = (state_13068[(2)]);
var state_13068__$1 = state_13068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13068__$1,inst_13066);
} else {
if((state_val_13069 === (12))){
var inst_13043 = (state_13068[(10)]);
var state_13068__$1 = state_13068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13068__$1,(14),inst_13043);
} else {
if((state_val_13069 === (2))){
var state_13068__$1 = state_13068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13068__$1,(4),results);
} else {
if((state_val_13069 === (19))){
var state_13068__$1 = state_13068;
var statearr_13081_13145 = state_13068__$1;
(statearr_13081_13145[(2)] = null);

(statearr_13081_13145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (11))){
var inst_13043 = (state_13068[(2)]);
var state_13068__$1 = (function (){var statearr_13082 = state_13068;
(statearr_13082[(10)] = inst_13043);

return statearr_13082;
})();
var statearr_13083_13146 = state_13068__$1;
(statearr_13083_13146[(2)] = null);

(statearr_13083_13146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (9))){
var state_13068__$1 = state_13068;
var statearr_13084_13147 = state_13068__$1;
(statearr_13084_13147[(2)] = null);

(statearr_13084_13147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (5))){
var state_13068__$1 = state_13068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13085_13148 = state_13068__$1;
(statearr_13085_13148[(1)] = (8));

} else {
var statearr_13086_13149 = state_13068__$1;
(statearr_13086_13149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (14))){
var inst_13048 = (state_13068[(11)]);
var inst_13046 = (state_13068[(8)]);
var inst_13046__$1 = (state_13068[(2)]);
var inst_13047 = (inst_13046__$1 == null);
var inst_13048__$1 = cljs.core.not.call(null,inst_13047);
var state_13068__$1 = (function (){var statearr_13087 = state_13068;
(statearr_13087[(11)] = inst_13048__$1);

(statearr_13087[(8)] = inst_13046__$1);

return statearr_13087;
})();
if(inst_13048__$1){
var statearr_13088_13150 = state_13068__$1;
(statearr_13088_13150[(1)] = (15));

} else {
var statearr_13089_13151 = state_13068__$1;
(statearr_13089_13151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (16))){
var inst_13048 = (state_13068[(11)]);
var state_13068__$1 = state_13068;
var statearr_13090_13152 = state_13068__$1;
(statearr_13090_13152[(2)] = inst_13048);

(statearr_13090_13152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (10))){
var inst_13040 = (state_13068[(2)]);
var state_13068__$1 = state_13068;
var statearr_13091_13153 = state_13068__$1;
(statearr_13091_13153[(2)] = inst_13040);

(statearr_13091_13153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (18))){
var inst_13051 = (state_13068[(2)]);
var state_13068__$1 = state_13068;
var statearr_13092_13154 = state_13068__$1;
(statearr_13092_13154[(2)] = inst_13051);

(statearr_13092_13154[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13069 === (8))){
var inst_13037 = cljs.core.async.close_BANG_.call(null,to);
var state_13068__$1 = state_13068;
var statearr_13093_13155 = state_13068__$1;
(statearr_13093_13155[(2)] = inst_13037);

(statearr_13093_13155[(1)] = (10));


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
});})(c__12543__auto__,jobs,results,process,async))
;
return ((function (switch__12431__auto__,c__12543__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0 = (function (){
var statearr_13097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__);

(statearr_13097[(1)] = (1));

return statearr_13097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1 = (function (state_13068){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13098){if((e13098 instanceof Object)){
var ex__12435__auto__ = e13098;
var statearr_13099_13156 = state_13068;
(statearr_13099_13156[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_13068;
state_13068 = G__13157;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__ = function(state_13068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1.call(this,state_13068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12432__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__,jobs,results,process,async))
})();
var state__12545__auto__ = (function (){var statearr_13100 = f__12544__auto__.call(null);
(statearr_13100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_13100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__,jobs,results,process,async))
);

return c__12543__auto__;
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
var args13158 = [];
var len__11105__auto___13161 = arguments.length;
var i__11106__auto___13162 = (0);
while(true){
if((i__11106__auto___13162 < len__11105__auto___13161)){
args13158.push((arguments[i__11106__auto___13162]));

var G__13163 = (i__11106__auto___13162 + (1));
i__11106__auto___13162 = G__13163;
continue;
} else {
}
break;
}

var G__13160 = args13158.length;
switch (G__13160) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13158.length)].join('')));

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
var args13165 = [];
var len__11105__auto___13168 = arguments.length;
var i__11106__auto___13169 = (0);
while(true){
if((i__11106__auto___13169 < len__11105__auto___13168)){
args13165.push((arguments[i__11106__auto___13169]));

var G__13170 = (i__11106__auto___13169 + (1));
i__11106__auto___13169 = G__13170;
continue;
} else {
}
break;
}

var G__13167 = args13165.length;
switch (G__13167) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13165.length)].join('')));

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
var args13172 = [];
var len__11105__auto___13225 = arguments.length;
var i__11106__auto___13226 = (0);
while(true){
if((i__11106__auto___13226 < len__11105__auto___13225)){
args13172.push((arguments[i__11106__auto___13226]));

var G__13227 = (i__11106__auto___13226 + (1));
i__11106__auto___13226 = G__13227;
continue;
} else {
}
break;
}

var G__13174 = args13172.length;
switch (G__13174) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13172.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12543__auto___13229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___13229,tc,fc){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___13229,tc,fc){
return (function (state_13200){
var state_val_13201 = (state_13200[(1)]);
if((state_val_13201 === (7))){
var inst_13196 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
var statearr_13202_13230 = state_13200__$1;
(statearr_13202_13230[(2)] = inst_13196);

(statearr_13202_13230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (1))){
var state_13200__$1 = state_13200;
var statearr_13203_13231 = state_13200__$1;
(statearr_13203_13231[(2)] = null);

(statearr_13203_13231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (4))){
var inst_13177 = (state_13200[(7)]);
var inst_13177__$1 = (state_13200[(2)]);
var inst_13178 = (inst_13177__$1 == null);
var state_13200__$1 = (function (){var statearr_13204 = state_13200;
(statearr_13204[(7)] = inst_13177__$1);

return statearr_13204;
})();
if(cljs.core.truth_(inst_13178)){
var statearr_13205_13232 = state_13200__$1;
(statearr_13205_13232[(1)] = (5));

} else {
var statearr_13206_13233 = state_13200__$1;
(statearr_13206_13233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (13))){
var state_13200__$1 = state_13200;
var statearr_13207_13234 = state_13200__$1;
(statearr_13207_13234[(2)] = null);

(statearr_13207_13234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (6))){
var inst_13177 = (state_13200[(7)]);
var inst_13183 = p.call(null,inst_13177);
var state_13200__$1 = state_13200;
if(cljs.core.truth_(inst_13183)){
var statearr_13208_13235 = state_13200__$1;
(statearr_13208_13235[(1)] = (9));

} else {
var statearr_13209_13236 = state_13200__$1;
(statearr_13209_13236[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (3))){
var inst_13198 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13200__$1,inst_13198);
} else {
if((state_val_13201 === (12))){
var state_13200__$1 = state_13200;
var statearr_13210_13237 = state_13200__$1;
(statearr_13210_13237[(2)] = null);

(statearr_13210_13237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (2))){
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13200__$1,(4),ch);
} else {
if((state_val_13201 === (11))){
var inst_13177 = (state_13200[(7)]);
var inst_13187 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13200__$1,(8),inst_13187,inst_13177);
} else {
if((state_val_13201 === (9))){
var state_13200__$1 = state_13200;
var statearr_13211_13238 = state_13200__$1;
(statearr_13211_13238[(2)] = tc);

(statearr_13211_13238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (5))){
var inst_13180 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13181 = cljs.core.async.close_BANG_.call(null,fc);
var state_13200__$1 = (function (){var statearr_13212 = state_13200;
(statearr_13212[(8)] = inst_13180);

return statearr_13212;
})();
var statearr_13213_13239 = state_13200__$1;
(statearr_13213_13239[(2)] = inst_13181);

(statearr_13213_13239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (14))){
var inst_13194 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
var statearr_13214_13240 = state_13200__$1;
(statearr_13214_13240[(2)] = inst_13194);

(statearr_13214_13240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (10))){
var state_13200__$1 = state_13200;
var statearr_13215_13241 = state_13200__$1;
(statearr_13215_13241[(2)] = fc);

(statearr_13215_13241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (8))){
var inst_13189 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
if(cljs.core.truth_(inst_13189)){
var statearr_13216_13242 = state_13200__$1;
(statearr_13216_13242[(1)] = (12));

} else {
var statearr_13217_13243 = state_13200__$1;
(statearr_13217_13243[(1)] = (13));

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
});})(c__12543__auto___13229,tc,fc))
;
return ((function (switch__12431__auto__,c__12543__auto___13229,tc,fc){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_13221 = [null,null,null,null,null,null,null,null,null];
(statearr_13221[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_13221[(1)] = (1));

return statearr_13221;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_13200){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13222){if((e13222 instanceof Object)){
var ex__12435__auto__ = e13222;
var statearr_13223_13244 = state_13200;
(statearr_13223_13244[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13245 = state_13200;
state_13200 = G__13245;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_13200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_13200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___13229,tc,fc))
})();
var state__12545__auto__ = (function (){var statearr_13224 = f__12544__auto__.call(null);
(statearr_13224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___13229);

return statearr_13224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___13229,tc,fc))
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
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__){
return (function (state_13309){
var state_val_13310 = (state_13309[(1)]);
if((state_val_13310 === (7))){
var inst_13305 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13311_13332 = state_13309__$1;
(statearr_13311_13332[(2)] = inst_13305);

(statearr_13311_13332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (1))){
var inst_13289 = init;
var state_13309__$1 = (function (){var statearr_13312 = state_13309;
(statearr_13312[(7)] = inst_13289);

return statearr_13312;
})();
var statearr_13313_13333 = state_13309__$1;
(statearr_13313_13333[(2)] = null);

(statearr_13313_13333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (4))){
var inst_13292 = (state_13309[(8)]);
var inst_13292__$1 = (state_13309[(2)]);
var inst_13293 = (inst_13292__$1 == null);
var state_13309__$1 = (function (){var statearr_13314 = state_13309;
(statearr_13314[(8)] = inst_13292__$1);

return statearr_13314;
})();
if(cljs.core.truth_(inst_13293)){
var statearr_13315_13334 = state_13309__$1;
(statearr_13315_13334[(1)] = (5));

} else {
var statearr_13316_13335 = state_13309__$1;
(statearr_13316_13335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (6))){
var inst_13289 = (state_13309[(7)]);
var inst_13296 = (state_13309[(9)]);
var inst_13292 = (state_13309[(8)]);
var inst_13296__$1 = f.call(null,inst_13289,inst_13292);
var inst_13297 = cljs.core.reduced_QMARK_.call(null,inst_13296__$1);
var state_13309__$1 = (function (){var statearr_13317 = state_13309;
(statearr_13317[(9)] = inst_13296__$1);

return statearr_13317;
})();
if(inst_13297){
var statearr_13318_13336 = state_13309__$1;
(statearr_13318_13336[(1)] = (8));

} else {
var statearr_13319_13337 = state_13309__$1;
(statearr_13319_13337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (3))){
var inst_13307 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13309__$1,inst_13307);
} else {
if((state_val_13310 === (2))){
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13309__$1,(4),ch);
} else {
if((state_val_13310 === (9))){
var inst_13296 = (state_13309[(9)]);
var inst_13289 = inst_13296;
var state_13309__$1 = (function (){var statearr_13320 = state_13309;
(statearr_13320[(7)] = inst_13289);

return statearr_13320;
})();
var statearr_13321_13338 = state_13309__$1;
(statearr_13321_13338[(2)] = null);

(statearr_13321_13338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (5))){
var inst_13289 = (state_13309[(7)]);
var state_13309__$1 = state_13309;
var statearr_13322_13339 = state_13309__$1;
(statearr_13322_13339[(2)] = inst_13289);

(statearr_13322_13339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (10))){
var inst_13303 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13323_13340 = state_13309__$1;
(statearr_13323_13340[(2)] = inst_13303);

(statearr_13323_13340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (8))){
var inst_13296 = (state_13309[(9)]);
var inst_13299 = cljs.core.deref.call(null,inst_13296);
var state_13309__$1 = state_13309;
var statearr_13324_13341 = state_13309__$1;
(statearr_13324_13341[(2)] = inst_13299);

(statearr_13324_13341[(1)] = (10));


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
});})(c__12543__auto__))
;
return ((function (switch__12431__auto__,c__12543__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12432__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12432__auto____0 = (function (){
var statearr_13328 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13328[(0)] = cljs$core$async$reduce_$_state_machine__12432__auto__);

(statearr_13328[(1)] = (1));

return statearr_13328;
});
var cljs$core$async$reduce_$_state_machine__12432__auto____1 = (function (state_13309){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13329){if((e13329 instanceof Object)){
var ex__12435__auto__ = e13329;
var statearr_13330_13342 = state_13309;
(statearr_13330_13342[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13343 = state_13309;
state_13309 = G__13343;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12432__auto__ = function(state_13309){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12432__auto____1.call(this,state_13309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12432__auto____0;
cljs$core$async$reduce_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12432__auto____1;
return cljs$core$async$reduce_$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__))
})();
var state__12545__auto__ = (function (){var statearr_13331 = f__12544__auto__.call(null);
(statearr_13331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_13331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__))
);

return c__12543__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__,f__$1){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__,f__$1){
return (function (state_13363){
var state_val_13364 = (state_13363[(1)]);
if((state_val_13364 === (1))){
var inst_13358 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13363__$1 = state_13363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13363__$1,(2),inst_13358);
} else {
if((state_val_13364 === (2))){
var inst_13360 = (state_13363[(2)]);
var inst_13361 = f__$1.call(null,inst_13360);
var state_13363__$1 = state_13363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13363__$1,inst_13361);
} else {
return null;
}
}
});})(c__12543__auto__,f__$1))
;
return ((function (switch__12431__auto__,c__12543__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12432__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12432__auto____0 = (function (){
var statearr_13368 = [null,null,null,null,null,null,null];
(statearr_13368[(0)] = cljs$core$async$transduce_$_state_machine__12432__auto__);

(statearr_13368[(1)] = (1));

return statearr_13368;
});
var cljs$core$async$transduce_$_state_machine__12432__auto____1 = (function (state_13363){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13369){if((e13369 instanceof Object)){
var ex__12435__auto__ = e13369;
var statearr_13370_13372 = state_13363;
(statearr_13370_13372[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13373 = state_13363;
state_13363 = G__13373;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12432__auto__ = function(state_13363){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12432__auto____1.call(this,state_13363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12432__auto____0;
cljs$core$async$transduce_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12432__auto____1;
return cljs$core$async$transduce_$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__,f__$1))
})();
var state__12545__auto__ = (function (){var statearr_13371 = f__12544__auto__.call(null);
(statearr_13371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_13371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__,f__$1))
);

return c__12543__auto__;
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
var args13374 = [];
var len__11105__auto___13426 = arguments.length;
var i__11106__auto___13427 = (0);
while(true){
if((i__11106__auto___13427 < len__11105__auto___13426)){
args13374.push((arguments[i__11106__auto___13427]));

var G__13428 = (i__11106__auto___13427 + (1));
i__11106__auto___13427 = G__13428;
continue;
} else {
}
break;
}

var G__13376 = args13374.length;
switch (G__13376) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13374.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__){
return (function (state_13401){
var state_val_13402 = (state_13401[(1)]);
if((state_val_13402 === (7))){
var inst_13383 = (state_13401[(2)]);
var state_13401__$1 = state_13401;
var statearr_13403_13430 = state_13401__$1;
(statearr_13403_13430[(2)] = inst_13383);

(statearr_13403_13430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (1))){
var inst_13377 = cljs.core.seq.call(null,coll);
var inst_13378 = inst_13377;
var state_13401__$1 = (function (){var statearr_13404 = state_13401;
(statearr_13404[(7)] = inst_13378);

return statearr_13404;
})();
var statearr_13405_13431 = state_13401__$1;
(statearr_13405_13431[(2)] = null);

(statearr_13405_13431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (4))){
var inst_13378 = (state_13401[(7)]);
var inst_13381 = cljs.core.first.call(null,inst_13378);
var state_13401__$1 = state_13401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13401__$1,(7),ch,inst_13381);
} else {
if((state_val_13402 === (13))){
var inst_13395 = (state_13401[(2)]);
var state_13401__$1 = state_13401;
var statearr_13406_13432 = state_13401__$1;
(statearr_13406_13432[(2)] = inst_13395);

(statearr_13406_13432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (6))){
var inst_13386 = (state_13401[(2)]);
var state_13401__$1 = state_13401;
if(cljs.core.truth_(inst_13386)){
var statearr_13407_13433 = state_13401__$1;
(statearr_13407_13433[(1)] = (8));

} else {
var statearr_13408_13434 = state_13401__$1;
(statearr_13408_13434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (3))){
var inst_13399 = (state_13401[(2)]);
var state_13401__$1 = state_13401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13401__$1,inst_13399);
} else {
if((state_val_13402 === (12))){
var state_13401__$1 = state_13401;
var statearr_13409_13435 = state_13401__$1;
(statearr_13409_13435[(2)] = null);

(statearr_13409_13435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (2))){
var inst_13378 = (state_13401[(7)]);
var state_13401__$1 = state_13401;
if(cljs.core.truth_(inst_13378)){
var statearr_13410_13436 = state_13401__$1;
(statearr_13410_13436[(1)] = (4));

} else {
var statearr_13411_13437 = state_13401__$1;
(statearr_13411_13437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (11))){
var inst_13392 = cljs.core.async.close_BANG_.call(null,ch);
var state_13401__$1 = state_13401;
var statearr_13412_13438 = state_13401__$1;
(statearr_13412_13438[(2)] = inst_13392);

(statearr_13412_13438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (9))){
var state_13401__$1 = state_13401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13413_13439 = state_13401__$1;
(statearr_13413_13439[(1)] = (11));

} else {
var statearr_13414_13440 = state_13401__$1;
(statearr_13414_13440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (5))){
var inst_13378 = (state_13401[(7)]);
var state_13401__$1 = state_13401;
var statearr_13415_13441 = state_13401__$1;
(statearr_13415_13441[(2)] = inst_13378);

(statearr_13415_13441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (10))){
var inst_13397 = (state_13401[(2)]);
var state_13401__$1 = state_13401;
var statearr_13416_13442 = state_13401__$1;
(statearr_13416_13442[(2)] = inst_13397);

(statearr_13416_13442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13402 === (8))){
var inst_13378 = (state_13401[(7)]);
var inst_13388 = cljs.core.next.call(null,inst_13378);
var inst_13378__$1 = inst_13388;
var state_13401__$1 = (function (){var statearr_13417 = state_13401;
(statearr_13417[(7)] = inst_13378__$1);

return statearr_13417;
})();
var statearr_13418_13443 = state_13401__$1;
(statearr_13418_13443[(2)] = null);

(statearr_13418_13443[(1)] = (2));


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
});})(c__12543__auto__))
;
return ((function (switch__12431__auto__,c__12543__auto__){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_13422 = [null,null,null,null,null,null,null,null];
(statearr_13422[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_13422[(1)] = (1));

return statearr_13422;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_13401){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13423){if((e13423 instanceof Object)){
var ex__12435__auto__ = e13423;
var statearr_13424_13444 = state_13401;
(statearr_13424_13444[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13445 = state_13401;
state_13401 = G__13445;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_13401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_13401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__))
})();
var state__12545__auto__ = (function (){var statearr_13425 = f__12544__auto__.call(null);
(statearr_13425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_13425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__))
);

return c__12543__auto__;
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
var x__10660__auto__ = (((_ == null))?null:_);
var m__10661__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,_);
} else {
var m__10661__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,_);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10661__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m,ch);
} else {
var m__10661__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m,ch);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m);
} else {
var m__10661__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async13671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13671 = (function (ch,cs,meta13672){
this.ch = ch;
this.cs = cs;
this.meta13672 = meta13672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13673,meta13672__$1){
var self__ = this;
var _13673__$1 = this;
return (new cljs.core.async.t_cljs$core$async13671(self__.ch,self__.cs,meta13672__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13673){
var self__ = this;
var _13673__$1 = this;
return self__.meta13672;
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13672","meta13672",1480998250,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13671";

cljs.core.async.t_cljs$core$async13671.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async13671");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13671 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13671(ch__$1,cs__$1,meta13672){
return (new cljs.core.async.t_cljs$core$async13671(ch__$1,cs__$1,meta13672));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13671(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12543__auto___13896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___13896,cs,m,dchan,dctr,done){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___13896,cs,m,dchan,dctr,done){
return (function (state_13808){
var state_val_13809 = (state_13808[(1)]);
if((state_val_13809 === (7))){
var inst_13804 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13810_13897 = state_13808__$1;
(statearr_13810_13897[(2)] = inst_13804);

(statearr_13810_13897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (20))){
var inst_13707 = (state_13808[(7)]);
var inst_13719 = cljs.core.first.call(null,inst_13707);
var inst_13720 = cljs.core.nth.call(null,inst_13719,(0),null);
var inst_13721 = cljs.core.nth.call(null,inst_13719,(1),null);
var state_13808__$1 = (function (){var statearr_13811 = state_13808;
(statearr_13811[(8)] = inst_13720);

return statearr_13811;
})();
if(cljs.core.truth_(inst_13721)){
var statearr_13812_13898 = state_13808__$1;
(statearr_13812_13898[(1)] = (22));

} else {
var statearr_13813_13899 = state_13808__$1;
(statearr_13813_13899[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (27))){
var inst_13751 = (state_13808[(9)]);
var inst_13756 = (state_13808[(10)]);
var inst_13749 = (state_13808[(11)]);
var inst_13676 = (state_13808[(12)]);
var inst_13756__$1 = cljs.core._nth.call(null,inst_13749,inst_13751);
var inst_13757 = cljs.core.async.put_BANG_.call(null,inst_13756__$1,inst_13676,done);
var state_13808__$1 = (function (){var statearr_13814 = state_13808;
(statearr_13814[(10)] = inst_13756__$1);

return statearr_13814;
})();
if(cljs.core.truth_(inst_13757)){
var statearr_13815_13900 = state_13808__$1;
(statearr_13815_13900[(1)] = (30));

} else {
var statearr_13816_13901 = state_13808__$1;
(statearr_13816_13901[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (1))){
var state_13808__$1 = state_13808;
var statearr_13817_13902 = state_13808__$1;
(statearr_13817_13902[(2)] = null);

(statearr_13817_13902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (24))){
var inst_13707 = (state_13808[(7)]);
var inst_13726 = (state_13808[(2)]);
var inst_13727 = cljs.core.next.call(null,inst_13707);
var inst_13685 = inst_13727;
var inst_13686 = null;
var inst_13687 = (0);
var inst_13688 = (0);
var state_13808__$1 = (function (){var statearr_13818 = state_13808;
(statearr_13818[(13)] = inst_13688);

(statearr_13818[(14)] = inst_13686);

(statearr_13818[(15)] = inst_13726);

(statearr_13818[(16)] = inst_13687);

(statearr_13818[(17)] = inst_13685);

return statearr_13818;
})();
var statearr_13819_13903 = state_13808__$1;
(statearr_13819_13903[(2)] = null);

(statearr_13819_13903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (39))){
var state_13808__$1 = state_13808;
var statearr_13823_13904 = state_13808__$1;
(statearr_13823_13904[(2)] = null);

(statearr_13823_13904[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (4))){
var inst_13676 = (state_13808[(12)]);
var inst_13676__$1 = (state_13808[(2)]);
var inst_13677 = (inst_13676__$1 == null);
var state_13808__$1 = (function (){var statearr_13824 = state_13808;
(statearr_13824[(12)] = inst_13676__$1);

return statearr_13824;
})();
if(cljs.core.truth_(inst_13677)){
var statearr_13825_13905 = state_13808__$1;
(statearr_13825_13905[(1)] = (5));

} else {
var statearr_13826_13906 = state_13808__$1;
(statearr_13826_13906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (15))){
var inst_13688 = (state_13808[(13)]);
var inst_13686 = (state_13808[(14)]);
var inst_13687 = (state_13808[(16)]);
var inst_13685 = (state_13808[(17)]);
var inst_13703 = (state_13808[(2)]);
var inst_13704 = (inst_13688 + (1));
var tmp13820 = inst_13686;
var tmp13821 = inst_13687;
var tmp13822 = inst_13685;
var inst_13685__$1 = tmp13822;
var inst_13686__$1 = tmp13820;
var inst_13687__$1 = tmp13821;
var inst_13688__$1 = inst_13704;
var state_13808__$1 = (function (){var statearr_13827 = state_13808;
(statearr_13827[(13)] = inst_13688__$1);

(statearr_13827[(18)] = inst_13703);

(statearr_13827[(14)] = inst_13686__$1);

(statearr_13827[(16)] = inst_13687__$1);

(statearr_13827[(17)] = inst_13685__$1);

return statearr_13827;
})();
var statearr_13828_13907 = state_13808__$1;
(statearr_13828_13907[(2)] = null);

(statearr_13828_13907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (21))){
var inst_13730 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13832_13908 = state_13808__$1;
(statearr_13832_13908[(2)] = inst_13730);

(statearr_13832_13908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (31))){
var inst_13756 = (state_13808[(10)]);
var inst_13760 = done.call(null,null);
var inst_13761 = cljs.core.async.untap_STAR_.call(null,m,inst_13756);
var state_13808__$1 = (function (){var statearr_13833 = state_13808;
(statearr_13833[(19)] = inst_13760);

return statearr_13833;
})();
var statearr_13834_13909 = state_13808__$1;
(statearr_13834_13909[(2)] = inst_13761);

(statearr_13834_13909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (32))){
var inst_13748 = (state_13808[(20)]);
var inst_13751 = (state_13808[(9)]);
var inst_13750 = (state_13808[(21)]);
var inst_13749 = (state_13808[(11)]);
var inst_13763 = (state_13808[(2)]);
var inst_13764 = (inst_13751 + (1));
var tmp13829 = inst_13748;
var tmp13830 = inst_13750;
var tmp13831 = inst_13749;
var inst_13748__$1 = tmp13829;
var inst_13749__$1 = tmp13831;
var inst_13750__$1 = tmp13830;
var inst_13751__$1 = inst_13764;
var state_13808__$1 = (function (){var statearr_13835 = state_13808;
(statearr_13835[(20)] = inst_13748__$1);

(statearr_13835[(9)] = inst_13751__$1);

(statearr_13835[(21)] = inst_13750__$1);

(statearr_13835[(22)] = inst_13763);

(statearr_13835[(11)] = inst_13749__$1);

return statearr_13835;
})();
var statearr_13836_13910 = state_13808__$1;
(statearr_13836_13910[(2)] = null);

(statearr_13836_13910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (40))){
var inst_13776 = (state_13808[(23)]);
var inst_13780 = done.call(null,null);
var inst_13781 = cljs.core.async.untap_STAR_.call(null,m,inst_13776);
var state_13808__$1 = (function (){var statearr_13837 = state_13808;
(statearr_13837[(24)] = inst_13780);

return statearr_13837;
})();
var statearr_13838_13911 = state_13808__$1;
(statearr_13838_13911[(2)] = inst_13781);

(statearr_13838_13911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (33))){
var inst_13767 = (state_13808[(25)]);
var inst_13769 = cljs.core.chunked_seq_QMARK_.call(null,inst_13767);
var state_13808__$1 = state_13808;
if(inst_13769){
var statearr_13839_13912 = state_13808__$1;
(statearr_13839_13912[(1)] = (36));

} else {
var statearr_13840_13913 = state_13808__$1;
(statearr_13840_13913[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (13))){
var inst_13697 = (state_13808[(26)]);
var inst_13700 = cljs.core.async.close_BANG_.call(null,inst_13697);
var state_13808__$1 = state_13808;
var statearr_13841_13914 = state_13808__$1;
(statearr_13841_13914[(2)] = inst_13700);

(statearr_13841_13914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (22))){
var inst_13720 = (state_13808[(8)]);
var inst_13723 = cljs.core.async.close_BANG_.call(null,inst_13720);
var state_13808__$1 = state_13808;
var statearr_13842_13915 = state_13808__$1;
(statearr_13842_13915[(2)] = inst_13723);

(statearr_13842_13915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (36))){
var inst_13767 = (state_13808[(25)]);
var inst_13771 = cljs.core.chunk_first.call(null,inst_13767);
var inst_13772 = cljs.core.chunk_rest.call(null,inst_13767);
var inst_13773 = cljs.core.count.call(null,inst_13771);
var inst_13748 = inst_13772;
var inst_13749 = inst_13771;
var inst_13750 = inst_13773;
var inst_13751 = (0);
var state_13808__$1 = (function (){var statearr_13843 = state_13808;
(statearr_13843[(20)] = inst_13748);

(statearr_13843[(9)] = inst_13751);

(statearr_13843[(21)] = inst_13750);

(statearr_13843[(11)] = inst_13749);

return statearr_13843;
})();
var statearr_13844_13916 = state_13808__$1;
(statearr_13844_13916[(2)] = null);

(statearr_13844_13916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (41))){
var inst_13767 = (state_13808[(25)]);
var inst_13783 = (state_13808[(2)]);
var inst_13784 = cljs.core.next.call(null,inst_13767);
var inst_13748 = inst_13784;
var inst_13749 = null;
var inst_13750 = (0);
var inst_13751 = (0);
var state_13808__$1 = (function (){var statearr_13845 = state_13808;
(statearr_13845[(20)] = inst_13748);

(statearr_13845[(9)] = inst_13751);

(statearr_13845[(21)] = inst_13750);

(statearr_13845[(27)] = inst_13783);

(statearr_13845[(11)] = inst_13749);

return statearr_13845;
})();
var statearr_13846_13917 = state_13808__$1;
(statearr_13846_13917[(2)] = null);

(statearr_13846_13917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (43))){
var state_13808__$1 = state_13808;
var statearr_13847_13918 = state_13808__$1;
(statearr_13847_13918[(2)] = null);

(statearr_13847_13918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (29))){
var inst_13792 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13848_13919 = state_13808__$1;
(statearr_13848_13919[(2)] = inst_13792);

(statearr_13848_13919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (44))){
var inst_13801 = (state_13808[(2)]);
var state_13808__$1 = (function (){var statearr_13849 = state_13808;
(statearr_13849[(28)] = inst_13801);

return statearr_13849;
})();
var statearr_13850_13920 = state_13808__$1;
(statearr_13850_13920[(2)] = null);

(statearr_13850_13920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (6))){
var inst_13740 = (state_13808[(29)]);
var inst_13739 = cljs.core.deref.call(null,cs);
var inst_13740__$1 = cljs.core.keys.call(null,inst_13739);
var inst_13741 = cljs.core.count.call(null,inst_13740__$1);
var inst_13742 = cljs.core.reset_BANG_.call(null,dctr,inst_13741);
var inst_13747 = cljs.core.seq.call(null,inst_13740__$1);
var inst_13748 = inst_13747;
var inst_13749 = null;
var inst_13750 = (0);
var inst_13751 = (0);
var state_13808__$1 = (function (){var statearr_13851 = state_13808;
(statearr_13851[(30)] = inst_13742);

(statearr_13851[(20)] = inst_13748);

(statearr_13851[(9)] = inst_13751);

(statearr_13851[(21)] = inst_13750);

(statearr_13851[(29)] = inst_13740__$1);

(statearr_13851[(11)] = inst_13749);

return statearr_13851;
})();
var statearr_13852_13921 = state_13808__$1;
(statearr_13852_13921[(2)] = null);

(statearr_13852_13921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (28))){
var inst_13767 = (state_13808[(25)]);
var inst_13748 = (state_13808[(20)]);
var inst_13767__$1 = cljs.core.seq.call(null,inst_13748);
var state_13808__$1 = (function (){var statearr_13853 = state_13808;
(statearr_13853[(25)] = inst_13767__$1);

return statearr_13853;
})();
if(inst_13767__$1){
var statearr_13854_13922 = state_13808__$1;
(statearr_13854_13922[(1)] = (33));

} else {
var statearr_13855_13923 = state_13808__$1;
(statearr_13855_13923[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (25))){
var inst_13751 = (state_13808[(9)]);
var inst_13750 = (state_13808[(21)]);
var inst_13753 = (inst_13751 < inst_13750);
var inst_13754 = inst_13753;
var state_13808__$1 = state_13808;
if(cljs.core.truth_(inst_13754)){
var statearr_13856_13924 = state_13808__$1;
(statearr_13856_13924[(1)] = (27));

} else {
var statearr_13857_13925 = state_13808__$1;
(statearr_13857_13925[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (34))){
var state_13808__$1 = state_13808;
var statearr_13858_13926 = state_13808__$1;
(statearr_13858_13926[(2)] = null);

(statearr_13858_13926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (17))){
var state_13808__$1 = state_13808;
var statearr_13859_13927 = state_13808__$1;
(statearr_13859_13927[(2)] = null);

(statearr_13859_13927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (3))){
var inst_13806 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13808__$1,inst_13806);
} else {
if((state_val_13809 === (12))){
var inst_13735 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13860_13928 = state_13808__$1;
(statearr_13860_13928[(2)] = inst_13735);

(statearr_13860_13928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (2))){
var state_13808__$1 = state_13808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,(4),ch);
} else {
if((state_val_13809 === (23))){
var state_13808__$1 = state_13808;
var statearr_13861_13929 = state_13808__$1;
(statearr_13861_13929[(2)] = null);

(statearr_13861_13929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (35))){
var inst_13790 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13862_13930 = state_13808__$1;
(statearr_13862_13930[(2)] = inst_13790);

(statearr_13862_13930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (19))){
var inst_13707 = (state_13808[(7)]);
var inst_13711 = cljs.core.chunk_first.call(null,inst_13707);
var inst_13712 = cljs.core.chunk_rest.call(null,inst_13707);
var inst_13713 = cljs.core.count.call(null,inst_13711);
var inst_13685 = inst_13712;
var inst_13686 = inst_13711;
var inst_13687 = inst_13713;
var inst_13688 = (0);
var state_13808__$1 = (function (){var statearr_13863 = state_13808;
(statearr_13863[(13)] = inst_13688);

(statearr_13863[(14)] = inst_13686);

(statearr_13863[(16)] = inst_13687);

(statearr_13863[(17)] = inst_13685);

return statearr_13863;
})();
var statearr_13864_13931 = state_13808__$1;
(statearr_13864_13931[(2)] = null);

(statearr_13864_13931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (11))){
var inst_13707 = (state_13808[(7)]);
var inst_13685 = (state_13808[(17)]);
var inst_13707__$1 = cljs.core.seq.call(null,inst_13685);
var state_13808__$1 = (function (){var statearr_13865 = state_13808;
(statearr_13865[(7)] = inst_13707__$1);

return statearr_13865;
})();
if(inst_13707__$1){
var statearr_13866_13932 = state_13808__$1;
(statearr_13866_13932[(1)] = (16));

} else {
var statearr_13867_13933 = state_13808__$1;
(statearr_13867_13933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (9))){
var inst_13737 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13868_13934 = state_13808__$1;
(statearr_13868_13934[(2)] = inst_13737);

(statearr_13868_13934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (5))){
var inst_13683 = cljs.core.deref.call(null,cs);
var inst_13684 = cljs.core.seq.call(null,inst_13683);
var inst_13685 = inst_13684;
var inst_13686 = null;
var inst_13687 = (0);
var inst_13688 = (0);
var state_13808__$1 = (function (){var statearr_13869 = state_13808;
(statearr_13869[(13)] = inst_13688);

(statearr_13869[(14)] = inst_13686);

(statearr_13869[(16)] = inst_13687);

(statearr_13869[(17)] = inst_13685);

return statearr_13869;
})();
var statearr_13870_13935 = state_13808__$1;
(statearr_13870_13935[(2)] = null);

(statearr_13870_13935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (14))){
var state_13808__$1 = state_13808;
var statearr_13871_13936 = state_13808__$1;
(statearr_13871_13936[(2)] = null);

(statearr_13871_13936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (45))){
var inst_13798 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13872_13937 = state_13808__$1;
(statearr_13872_13937[(2)] = inst_13798);

(statearr_13872_13937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (26))){
var inst_13740 = (state_13808[(29)]);
var inst_13794 = (state_13808[(2)]);
var inst_13795 = cljs.core.seq.call(null,inst_13740);
var state_13808__$1 = (function (){var statearr_13873 = state_13808;
(statearr_13873[(31)] = inst_13794);

return statearr_13873;
})();
if(inst_13795){
var statearr_13874_13938 = state_13808__$1;
(statearr_13874_13938[(1)] = (42));

} else {
var statearr_13875_13939 = state_13808__$1;
(statearr_13875_13939[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (16))){
var inst_13707 = (state_13808[(7)]);
var inst_13709 = cljs.core.chunked_seq_QMARK_.call(null,inst_13707);
var state_13808__$1 = state_13808;
if(inst_13709){
var statearr_13876_13940 = state_13808__$1;
(statearr_13876_13940[(1)] = (19));

} else {
var statearr_13877_13941 = state_13808__$1;
(statearr_13877_13941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (38))){
var inst_13787 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13878_13942 = state_13808__$1;
(statearr_13878_13942[(2)] = inst_13787);

(statearr_13878_13942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (30))){
var state_13808__$1 = state_13808;
var statearr_13879_13943 = state_13808__$1;
(statearr_13879_13943[(2)] = null);

(statearr_13879_13943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (10))){
var inst_13688 = (state_13808[(13)]);
var inst_13686 = (state_13808[(14)]);
var inst_13696 = cljs.core._nth.call(null,inst_13686,inst_13688);
var inst_13697 = cljs.core.nth.call(null,inst_13696,(0),null);
var inst_13698 = cljs.core.nth.call(null,inst_13696,(1),null);
var state_13808__$1 = (function (){var statearr_13880 = state_13808;
(statearr_13880[(26)] = inst_13697);

return statearr_13880;
})();
if(cljs.core.truth_(inst_13698)){
var statearr_13881_13944 = state_13808__$1;
(statearr_13881_13944[(1)] = (13));

} else {
var statearr_13882_13945 = state_13808__$1;
(statearr_13882_13945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (18))){
var inst_13733 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13883_13946 = state_13808__$1;
(statearr_13883_13946[(2)] = inst_13733);

(statearr_13883_13946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (42))){
var state_13808__$1 = state_13808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,(45),dchan);
} else {
if((state_val_13809 === (37))){
var inst_13776 = (state_13808[(23)]);
var inst_13767 = (state_13808[(25)]);
var inst_13676 = (state_13808[(12)]);
var inst_13776__$1 = cljs.core.first.call(null,inst_13767);
var inst_13777 = cljs.core.async.put_BANG_.call(null,inst_13776__$1,inst_13676,done);
var state_13808__$1 = (function (){var statearr_13884 = state_13808;
(statearr_13884[(23)] = inst_13776__$1);

return statearr_13884;
})();
if(cljs.core.truth_(inst_13777)){
var statearr_13885_13947 = state_13808__$1;
(statearr_13885_13947[(1)] = (39));

} else {
var statearr_13886_13948 = state_13808__$1;
(statearr_13886_13948[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (8))){
var inst_13688 = (state_13808[(13)]);
var inst_13687 = (state_13808[(16)]);
var inst_13690 = (inst_13688 < inst_13687);
var inst_13691 = inst_13690;
var state_13808__$1 = state_13808;
if(cljs.core.truth_(inst_13691)){
var statearr_13887_13949 = state_13808__$1;
(statearr_13887_13949[(1)] = (10));

} else {
var statearr_13888_13950 = state_13808__$1;
(statearr_13888_13950[(1)] = (11));

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
});})(c__12543__auto___13896,cs,m,dchan,dctr,done))
;
return ((function (switch__12431__auto__,c__12543__auto___13896,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12432__auto__ = null;
var cljs$core$async$mult_$_state_machine__12432__auto____0 = (function (){
var statearr_13892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13892[(0)] = cljs$core$async$mult_$_state_machine__12432__auto__);

(statearr_13892[(1)] = (1));

return statearr_13892;
});
var cljs$core$async$mult_$_state_machine__12432__auto____1 = (function (state_13808){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_13808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e13893){if((e13893 instanceof Object)){
var ex__12435__auto__ = e13893;
var statearr_13894_13951 = state_13808;
(statearr_13894_13951[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13952 = state_13808;
state_13808 = G__13952;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12432__auto__ = function(state_13808){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12432__auto____1.call(this,state_13808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12432__auto____0;
cljs$core$async$mult_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12432__auto____1;
return cljs$core$async$mult_$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___13896,cs,m,dchan,dctr,done))
})();
var state__12545__auto__ = (function (){var statearr_13895 = f__12544__auto__.call(null);
(statearr_13895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___13896);

return statearr_13895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___13896,cs,m,dchan,dctr,done))
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
var args13953 = [];
var len__11105__auto___13956 = arguments.length;
var i__11106__auto___13957 = (0);
while(true){
if((i__11106__auto___13957 < len__11105__auto___13956)){
args13953.push((arguments[i__11106__auto___13957]));

var G__13958 = (i__11106__auto___13957 + (1));
i__11106__auto___13957 = G__13958;
continue;
} else {
}
break;
}

var G__13955 = args13953.length;
switch (G__13955) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13953.length)].join('')));

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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m,ch);
} else {
var m__10661__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m,ch);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m,ch);
} else {
var m__10661__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m,ch);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m);
} else {
var m__10661__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m,state_map);
} else {
var m__10661__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m,state_map);
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
var x__10660__auto__ = (((m == null))?null:m);
var m__10661__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,m,mode);
} else {
var m__10661__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11112__auto__ = [];
var len__11105__auto___13970 = arguments.length;
var i__11106__auto___13971 = (0);
while(true){
if((i__11106__auto___13971 < len__11105__auto___13970)){
args__11112__auto__.push((arguments[i__11106__auto___13971]));

var G__13972 = (i__11106__auto___13971 + (1));
i__11106__auto___13971 = G__13972;
continue;
} else {
}
break;
}

var argseq__11113__auto__ = ((((3) < args__11112__auto__.length))?(new cljs.core.IndexedSeq(args__11112__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11113__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13964){
var map__13965 = p__13964;
var map__13965__$1 = ((((!((map__13965 == null)))?((((map__13965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13965):map__13965);
var opts = map__13965__$1;
var statearr_13967_13973 = state;
(statearr_13967_13973[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13965,map__13965__$1,opts){
return (function (val){
var statearr_13968_13974 = state;
(statearr_13968_13974[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13965,map__13965__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13969_13975 = state;
(statearr_13969_13975[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13960){
var G__13961 = cljs.core.first.call(null,seq13960);
var seq13960__$1 = cljs.core.next.call(null,seq13960);
var G__13962 = cljs.core.first.call(null,seq13960__$1);
var seq13960__$2 = cljs.core.next.call(null,seq13960__$1);
var G__13963 = cljs.core.first.call(null,seq13960__$2);
var seq13960__$3 = cljs.core.next.call(null,seq13960__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13961,G__13962,G__13963,seq13960__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14143 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14144){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14144 = meta14144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14145,meta14144__$1){
var self__ = this;
var _14145__$1 = this;
return (new cljs.core.async.t_cljs$core$async14143(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14145){
var self__ = this;
var _14145__$1 = this;
return self__.meta14144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14143.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14144","meta14144",-2047508998,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14143";

cljs.core.async.t_cljs$core$async14143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async14143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14143(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14144){
return (new cljs.core.async.t_cljs$core$async14143(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14143(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12543__auto___14310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___14310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___14310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14247){
var state_val_14248 = (state_14247[(1)]);
if((state_val_14248 === (7))){
var inst_14162 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14249_14311 = state_14247__$1;
(statearr_14249_14311[(2)] = inst_14162);

(statearr_14249_14311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (20))){
var inst_14174 = (state_14247[(7)]);
var state_14247__$1 = state_14247;
var statearr_14250_14312 = state_14247__$1;
(statearr_14250_14312[(2)] = inst_14174);

(statearr_14250_14312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (27))){
var state_14247__$1 = state_14247;
var statearr_14251_14313 = state_14247__$1;
(statearr_14251_14313[(2)] = null);

(statearr_14251_14313[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (1))){
var inst_14149 = (state_14247[(8)]);
var inst_14149__$1 = calc_state.call(null);
var inst_14151 = (inst_14149__$1 == null);
var inst_14152 = cljs.core.not.call(null,inst_14151);
var state_14247__$1 = (function (){var statearr_14252 = state_14247;
(statearr_14252[(8)] = inst_14149__$1);

return statearr_14252;
})();
if(inst_14152){
var statearr_14253_14314 = state_14247__$1;
(statearr_14253_14314[(1)] = (2));

} else {
var statearr_14254_14315 = state_14247__$1;
(statearr_14254_14315[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (24))){
var inst_14207 = (state_14247[(9)]);
var inst_14198 = (state_14247[(10)]);
var inst_14221 = (state_14247[(11)]);
var inst_14221__$1 = inst_14198.call(null,inst_14207);
var state_14247__$1 = (function (){var statearr_14255 = state_14247;
(statearr_14255[(11)] = inst_14221__$1);

return statearr_14255;
})();
if(cljs.core.truth_(inst_14221__$1)){
var statearr_14256_14316 = state_14247__$1;
(statearr_14256_14316[(1)] = (29));

} else {
var statearr_14257_14317 = state_14247__$1;
(statearr_14257_14317[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (4))){
var inst_14165 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14165)){
var statearr_14258_14318 = state_14247__$1;
(statearr_14258_14318[(1)] = (8));

} else {
var statearr_14259_14319 = state_14247__$1;
(statearr_14259_14319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (15))){
var inst_14192 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14192)){
var statearr_14260_14320 = state_14247__$1;
(statearr_14260_14320[(1)] = (19));

} else {
var statearr_14261_14321 = state_14247__$1;
(statearr_14261_14321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (21))){
var inst_14197 = (state_14247[(12)]);
var inst_14197__$1 = (state_14247[(2)]);
var inst_14198 = cljs.core.get.call(null,inst_14197__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14199 = cljs.core.get.call(null,inst_14197__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14200 = cljs.core.get.call(null,inst_14197__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14247__$1 = (function (){var statearr_14262 = state_14247;
(statearr_14262[(12)] = inst_14197__$1);

(statearr_14262[(13)] = inst_14199);

(statearr_14262[(10)] = inst_14198);

return statearr_14262;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14247__$1,(22),inst_14200);
} else {
if((state_val_14248 === (31))){
var inst_14229 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14229)){
var statearr_14263_14322 = state_14247__$1;
(statearr_14263_14322[(1)] = (32));

} else {
var statearr_14264_14323 = state_14247__$1;
(statearr_14264_14323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (32))){
var inst_14206 = (state_14247[(14)]);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14247__$1,(35),out,inst_14206);
} else {
if((state_val_14248 === (33))){
var inst_14197 = (state_14247[(12)]);
var inst_14174 = inst_14197;
var state_14247__$1 = (function (){var statearr_14265 = state_14247;
(statearr_14265[(7)] = inst_14174);

return statearr_14265;
})();
var statearr_14266_14324 = state_14247__$1;
(statearr_14266_14324[(2)] = null);

(statearr_14266_14324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (13))){
var inst_14174 = (state_14247[(7)]);
var inst_14181 = inst_14174.cljs$lang$protocol_mask$partition0$;
var inst_14182 = (inst_14181 & (64));
var inst_14183 = inst_14174.cljs$core$ISeq$;
var inst_14184 = (cljs.core.PROTOCOL_SENTINEL === inst_14183);
var inst_14185 = (inst_14182) || (inst_14184);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14185)){
var statearr_14267_14325 = state_14247__$1;
(statearr_14267_14325[(1)] = (16));

} else {
var statearr_14268_14326 = state_14247__$1;
(statearr_14268_14326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (22))){
var inst_14207 = (state_14247[(9)]);
var inst_14206 = (state_14247[(14)]);
var inst_14205 = (state_14247[(2)]);
var inst_14206__$1 = cljs.core.nth.call(null,inst_14205,(0),null);
var inst_14207__$1 = cljs.core.nth.call(null,inst_14205,(1),null);
var inst_14208 = (inst_14206__$1 == null);
var inst_14209 = cljs.core._EQ_.call(null,inst_14207__$1,change);
var inst_14210 = (inst_14208) || (inst_14209);
var state_14247__$1 = (function (){var statearr_14269 = state_14247;
(statearr_14269[(9)] = inst_14207__$1);

(statearr_14269[(14)] = inst_14206__$1);

return statearr_14269;
})();
if(cljs.core.truth_(inst_14210)){
var statearr_14270_14327 = state_14247__$1;
(statearr_14270_14327[(1)] = (23));

} else {
var statearr_14271_14328 = state_14247__$1;
(statearr_14271_14328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (36))){
var inst_14197 = (state_14247[(12)]);
var inst_14174 = inst_14197;
var state_14247__$1 = (function (){var statearr_14272 = state_14247;
(statearr_14272[(7)] = inst_14174);

return statearr_14272;
})();
var statearr_14273_14329 = state_14247__$1;
(statearr_14273_14329[(2)] = null);

(statearr_14273_14329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (29))){
var inst_14221 = (state_14247[(11)]);
var state_14247__$1 = state_14247;
var statearr_14274_14330 = state_14247__$1;
(statearr_14274_14330[(2)] = inst_14221);

(statearr_14274_14330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (6))){
var state_14247__$1 = state_14247;
var statearr_14275_14331 = state_14247__$1;
(statearr_14275_14331[(2)] = false);

(statearr_14275_14331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (28))){
var inst_14217 = (state_14247[(2)]);
var inst_14218 = calc_state.call(null);
var inst_14174 = inst_14218;
var state_14247__$1 = (function (){var statearr_14276 = state_14247;
(statearr_14276[(15)] = inst_14217);

(statearr_14276[(7)] = inst_14174);

return statearr_14276;
})();
var statearr_14277_14332 = state_14247__$1;
(statearr_14277_14332[(2)] = null);

(statearr_14277_14332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (25))){
var inst_14243 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14278_14333 = state_14247__$1;
(statearr_14278_14333[(2)] = inst_14243);

(statearr_14278_14333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (34))){
var inst_14241 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14279_14334 = state_14247__$1;
(statearr_14279_14334[(2)] = inst_14241);

(statearr_14279_14334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (17))){
var state_14247__$1 = state_14247;
var statearr_14280_14335 = state_14247__$1;
(statearr_14280_14335[(2)] = false);

(statearr_14280_14335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (3))){
var state_14247__$1 = state_14247;
var statearr_14281_14336 = state_14247__$1;
(statearr_14281_14336[(2)] = false);

(statearr_14281_14336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (12))){
var inst_14245 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14247__$1,inst_14245);
} else {
if((state_val_14248 === (2))){
var inst_14149 = (state_14247[(8)]);
var inst_14154 = inst_14149.cljs$lang$protocol_mask$partition0$;
var inst_14155 = (inst_14154 & (64));
var inst_14156 = inst_14149.cljs$core$ISeq$;
var inst_14157 = (cljs.core.PROTOCOL_SENTINEL === inst_14156);
var inst_14158 = (inst_14155) || (inst_14157);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14158)){
var statearr_14282_14337 = state_14247__$1;
(statearr_14282_14337[(1)] = (5));

} else {
var statearr_14283_14338 = state_14247__$1;
(statearr_14283_14338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (23))){
var inst_14206 = (state_14247[(14)]);
var inst_14212 = (inst_14206 == null);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14212)){
var statearr_14284_14339 = state_14247__$1;
(statearr_14284_14339[(1)] = (26));

} else {
var statearr_14285_14340 = state_14247__$1;
(statearr_14285_14340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (35))){
var inst_14232 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14232)){
var statearr_14286_14341 = state_14247__$1;
(statearr_14286_14341[(1)] = (36));

} else {
var statearr_14287_14342 = state_14247__$1;
(statearr_14287_14342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (19))){
var inst_14174 = (state_14247[(7)]);
var inst_14194 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14174);
var state_14247__$1 = state_14247;
var statearr_14288_14343 = state_14247__$1;
(statearr_14288_14343[(2)] = inst_14194);

(statearr_14288_14343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (11))){
var inst_14174 = (state_14247[(7)]);
var inst_14178 = (inst_14174 == null);
var inst_14179 = cljs.core.not.call(null,inst_14178);
var state_14247__$1 = state_14247;
if(inst_14179){
var statearr_14289_14344 = state_14247__$1;
(statearr_14289_14344[(1)] = (13));

} else {
var statearr_14290_14345 = state_14247__$1;
(statearr_14290_14345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (9))){
var inst_14149 = (state_14247[(8)]);
var state_14247__$1 = state_14247;
var statearr_14291_14346 = state_14247__$1;
(statearr_14291_14346[(2)] = inst_14149);

(statearr_14291_14346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (5))){
var state_14247__$1 = state_14247;
var statearr_14292_14347 = state_14247__$1;
(statearr_14292_14347[(2)] = true);

(statearr_14292_14347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (14))){
var state_14247__$1 = state_14247;
var statearr_14293_14348 = state_14247__$1;
(statearr_14293_14348[(2)] = false);

(statearr_14293_14348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (26))){
var inst_14207 = (state_14247[(9)]);
var inst_14214 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14207);
var state_14247__$1 = state_14247;
var statearr_14294_14349 = state_14247__$1;
(statearr_14294_14349[(2)] = inst_14214);

(statearr_14294_14349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (16))){
var state_14247__$1 = state_14247;
var statearr_14295_14350 = state_14247__$1;
(statearr_14295_14350[(2)] = true);

(statearr_14295_14350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (38))){
var inst_14237 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14296_14351 = state_14247__$1;
(statearr_14296_14351[(2)] = inst_14237);

(statearr_14296_14351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (30))){
var inst_14207 = (state_14247[(9)]);
var inst_14199 = (state_14247[(13)]);
var inst_14198 = (state_14247[(10)]);
var inst_14224 = cljs.core.empty_QMARK_.call(null,inst_14198);
var inst_14225 = inst_14199.call(null,inst_14207);
var inst_14226 = cljs.core.not.call(null,inst_14225);
var inst_14227 = (inst_14224) && (inst_14226);
var state_14247__$1 = state_14247;
var statearr_14297_14352 = state_14247__$1;
(statearr_14297_14352[(2)] = inst_14227);

(statearr_14297_14352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (10))){
var inst_14149 = (state_14247[(8)]);
var inst_14170 = (state_14247[(2)]);
var inst_14171 = cljs.core.get.call(null,inst_14170,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14172 = cljs.core.get.call(null,inst_14170,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14173 = cljs.core.get.call(null,inst_14170,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14174 = inst_14149;
var state_14247__$1 = (function (){var statearr_14298 = state_14247;
(statearr_14298[(16)] = inst_14173);

(statearr_14298[(17)] = inst_14171);

(statearr_14298[(18)] = inst_14172);

(statearr_14298[(7)] = inst_14174);

return statearr_14298;
})();
var statearr_14299_14353 = state_14247__$1;
(statearr_14299_14353[(2)] = null);

(statearr_14299_14353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (18))){
var inst_14189 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14300_14354 = state_14247__$1;
(statearr_14300_14354[(2)] = inst_14189);

(statearr_14300_14354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (37))){
var state_14247__$1 = state_14247;
var statearr_14301_14355 = state_14247__$1;
(statearr_14301_14355[(2)] = null);

(statearr_14301_14355[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (8))){
var inst_14149 = (state_14247[(8)]);
var inst_14167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14149);
var state_14247__$1 = state_14247;
var statearr_14302_14356 = state_14247__$1;
(statearr_14302_14356[(2)] = inst_14167);

(statearr_14302_14356[(1)] = (10));


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
});})(c__12543__auto___14310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12431__auto__,c__12543__auto___14310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12432__auto__ = null;
var cljs$core$async$mix_$_state_machine__12432__auto____0 = (function (){
var statearr_14306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14306[(0)] = cljs$core$async$mix_$_state_machine__12432__auto__);

(statearr_14306[(1)] = (1));

return statearr_14306;
});
var cljs$core$async$mix_$_state_machine__12432__auto____1 = (function (state_14247){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_14247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e14307){if((e14307 instanceof Object)){
var ex__12435__auto__ = e14307;
var statearr_14308_14357 = state_14247;
(statearr_14308_14357[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14358 = state_14247;
state_14247 = G__14358;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12432__auto__ = function(state_14247){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12432__auto____1.call(this,state_14247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12432__auto____0;
cljs$core$async$mix_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12432__auto____1;
return cljs$core$async$mix_$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___14310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12545__auto__ = (function (){var statearr_14309 = f__12544__auto__.call(null);
(statearr_14309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___14310);

return statearr_14309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___14310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10660__auto__ = (((p == null))?null:p);
var m__10661__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10661__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10660__auto__ = (((p == null))?null:p);
var m__10661__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,p,v,ch);
} else {
var m__10661__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14359 = [];
var len__11105__auto___14362 = arguments.length;
var i__11106__auto___14363 = (0);
while(true){
if((i__11106__auto___14363 < len__11105__auto___14362)){
args14359.push((arguments[i__11106__auto___14363]));

var G__14364 = (i__11106__auto___14363 + (1));
i__11106__auto___14363 = G__14364;
continue;
} else {
}
break;
}

var G__14361 = args14359.length;
switch (G__14361) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14359.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10660__auto__ = (((p == null))?null:p);
var m__10661__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,p);
} else {
var m__10661__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,p);
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
var x__10660__auto__ = (((p == null))?null:p);
var m__10661__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10660__auto__)]);
if(!((m__10661__auto__ == null))){
return m__10661__auto__.call(null,p,v);
} else {
var m__10661__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10661__auto____$1 == null))){
return m__10661__auto____$1.call(null,p,v);
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
var args14367 = [];
var len__11105__auto___14492 = arguments.length;
var i__11106__auto___14493 = (0);
while(true){
if((i__11106__auto___14493 < len__11105__auto___14492)){
args14367.push((arguments[i__11106__auto___14493]));

var G__14494 = (i__11106__auto___14493 + (1));
i__11106__auto___14493 = G__14494;
continue;
} else {
}
break;
}

var G__14369 = args14367.length;
switch (G__14369) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14367.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9992__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9992__auto__,mults){
return (function (p1__14366_SHARP_){
if(cljs.core.truth_(p1__14366_SHARP_.call(null,topic))){
return p1__14366_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14366_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9992__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14371 = meta14371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14372,meta14371__$1){
var self__ = this;
var _14372__$1 = this;
return (new cljs.core.async.t_cljs$core$async14370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14371__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14372){
var self__ = this;
var _14372__$1 = this;
return self__.meta14371;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14371","meta14371",1740552408,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14370";

cljs.core.async.t_cljs$core$async14370.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async14370");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14370 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14371){
return (new cljs.core.async.t_cljs$core$async14370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14371));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12543__auto___14496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___14496,mults,ensure_mult,p){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___14496,mults,ensure_mult,p){
return (function (state_14444){
var state_val_14445 = (state_14444[(1)]);
if((state_val_14445 === (7))){
var inst_14440 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14446_14497 = state_14444__$1;
(statearr_14446_14497[(2)] = inst_14440);

(statearr_14446_14497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (20))){
var state_14444__$1 = state_14444;
var statearr_14447_14498 = state_14444__$1;
(statearr_14447_14498[(2)] = null);

(statearr_14447_14498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (1))){
var state_14444__$1 = state_14444;
var statearr_14448_14499 = state_14444__$1;
(statearr_14448_14499[(2)] = null);

(statearr_14448_14499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (24))){
var inst_14423 = (state_14444[(7)]);
var inst_14432 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14423);
var state_14444__$1 = state_14444;
var statearr_14449_14500 = state_14444__$1;
(statearr_14449_14500[(2)] = inst_14432);

(statearr_14449_14500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (4))){
var inst_14375 = (state_14444[(8)]);
var inst_14375__$1 = (state_14444[(2)]);
var inst_14376 = (inst_14375__$1 == null);
var state_14444__$1 = (function (){var statearr_14450 = state_14444;
(statearr_14450[(8)] = inst_14375__$1);

return statearr_14450;
})();
if(cljs.core.truth_(inst_14376)){
var statearr_14451_14501 = state_14444__$1;
(statearr_14451_14501[(1)] = (5));

} else {
var statearr_14452_14502 = state_14444__$1;
(statearr_14452_14502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (15))){
var inst_14417 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14453_14503 = state_14444__$1;
(statearr_14453_14503[(2)] = inst_14417);

(statearr_14453_14503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (21))){
var inst_14437 = (state_14444[(2)]);
var state_14444__$1 = (function (){var statearr_14454 = state_14444;
(statearr_14454[(9)] = inst_14437);

return statearr_14454;
})();
var statearr_14455_14504 = state_14444__$1;
(statearr_14455_14504[(2)] = null);

(statearr_14455_14504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (13))){
var inst_14399 = (state_14444[(10)]);
var inst_14401 = cljs.core.chunked_seq_QMARK_.call(null,inst_14399);
var state_14444__$1 = state_14444;
if(inst_14401){
var statearr_14456_14505 = state_14444__$1;
(statearr_14456_14505[(1)] = (16));

} else {
var statearr_14457_14506 = state_14444__$1;
(statearr_14457_14506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (22))){
var inst_14429 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
if(cljs.core.truth_(inst_14429)){
var statearr_14458_14507 = state_14444__$1;
(statearr_14458_14507[(1)] = (23));

} else {
var statearr_14459_14508 = state_14444__$1;
(statearr_14459_14508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (6))){
var inst_14423 = (state_14444[(7)]);
var inst_14425 = (state_14444[(11)]);
var inst_14375 = (state_14444[(8)]);
var inst_14423__$1 = topic_fn.call(null,inst_14375);
var inst_14424 = cljs.core.deref.call(null,mults);
var inst_14425__$1 = cljs.core.get.call(null,inst_14424,inst_14423__$1);
var state_14444__$1 = (function (){var statearr_14460 = state_14444;
(statearr_14460[(7)] = inst_14423__$1);

(statearr_14460[(11)] = inst_14425__$1);

return statearr_14460;
})();
if(cljs.core.truth_(inst_14425__$1)){
var statearr_14461_14509 = state_14444__$1;
(statearr_14461_14509[(1)] = (19));

} else {
var statearr_14462_14510 = state_14444__$1;
(statearr_14462_14510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (25))){
var inst_14434 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14463_14511 = state_14444__$1;
(statearr_14463_14511[(2)] = inst_14434);

(statearr_14463_14511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (17))){
var inst_14399 = (state_14444[(10)]);
var inst_14408 = cljs.core.first.call(null,inst_14399);
var inst_14409 = cljs.core.async.muxch_STAR_.call(null,inst_14408);
var inst_14410 = cljs.core.async.close_BANG_.call(null,inst_14409);
var inst_14411 = cljs.core.next.call(null,inst_14399);
var inst_14385 = inst_14411;
var inst_14386 = null;
var inst_14387 = (0);
var inst_14388 = (0);
var state_14444__$1 = (function (){var statearr_14464 = state_14444;
(statearr_14464[(12)] = inst_14387);

(statearr_14464[(13)] = inst_14410);

(statearr_14464[(14)] = inst_14386);

(statearr_14464[(15)] = inst_14388);

(statearr_14464[(16)] = inst_14385);

return statearr_14464;
})();
var statearr_14465_14512 = state_14444__$1;
(statearr_14465_14512[(2)] = null);

(statearr_14465_14512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (3))){
var inst_14442 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14444__$1,inst_14442);
} else {
if((state_val_14445 === (12))){
var inst_14419 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14466_14513 = state_14444__$1;
(statearr_14466_14513[(2)] = inst_14419);

(statearr_14466_14513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (2))){
var state_14444__$1 = state_14444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14444__$1,(4),ch);
} else {
if((state_val_14445 === (23))){
var state_14444__$1 = state_14444;
var statearr_14467_14514 = state_14444__$1;
(statearr_14467_14514[(2)] = null);

(statearr_14467_14514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (19))){
var inst_14425 = (state_14444[(11)]);
var inst_14375 = (state_14444[(8)]);
var inst_14427 = cljs.core.async.muxch_STAR_.call(null,inst_14425);
var state_14444__$1 = state_14444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14444__$1,(22),inst_14427,inst_14375);
} else {
if((state_val_14445 === (11))){
var inst_14385 = (state_14444[(16)]);
var inst_14399 = (state_14444[(10)]);
var inst_14399__$1 = cljs.core.seq.call(null,inst_14385);
var state_14444__$1 = (function (){var statearr_14468 = state_14444;
(statearr_14468[(10)] = inst_14399__$1);

return statearr_14468;
})();
if(inst_14399__$1){
var statearr_14469_14515 = state_14444__$1;
(statearr_14469_14515[(1)] = (13));

} else {
var statearr_14470_14516 = state_14444__$1;
(statearr_14470_14516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (9))){
var inst_14421 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14471_14517 = state_14444__$1;
(statearr_14471_14517[(2)] = inst_14421);

(statearr_14471_14517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (5))){
var inst_14382 = cljs.core.deref.call(null,mults);
var inst_14383 = cljs.core.vals.call(null,inst_14382);
var inst_14384 = cljs.core.seq.call(null,inst_14383);
var inst_14385 = inst_14384;
var inst_14386 = null;
var inst_14387 = (0);
var inst_14388 = (0);
var state_14444__$1 = (function (){var statearr_14472 = state_14444;
(statearr_14472[(12)] = inst_14387);

(statearr_14472[(14)] = inst_14386);

(statearr_14472[(15)] = inst_14388);

(statearr_14472[(16)] = inst_14385);

return statearr_14472;
})();
var statearr_14473_14518 = state_14444__$1;
(statearr_14473_14518[(2)] = null);

(statearr_14473_14518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (14))){
var state_14444__$1 = state_14444;
var statearr_14477_14519 = state_14444__$1;
(statearr_14477_14519[(2)] = null);

(statearr_14477_14519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (16))){
var inst_14399 = (state_14444[(10)]);
var inst_14403 = cljs.core.chunk_first.call(null,inst_14399);
var inst_14404 = cljs.core.chunk_rest.call(null,inst_14399);
var inst_14405 = cljs.core.count.call(null,inst_14403);
var inst_14385 = inst_14404;
var inst_14386 = inst_14403;
var inst_14387 = inst_14405;
var inst_14388 = (0);
var state_14444__$1 = (function (){var statearr_14478 = state_14444;
(statearr_14478[(12)] = inst_14387);

(statearr_14478[(14)] = inst_14386);

(statearr_14478[(15)] = inst_14388);

(statearr_14478[(16)] = inst_14385);

return statearr_14478;
})();
var statearr_14479_14520 = state_14444__$1;
(statearr_14479_14520[(2)] = null);

(statearr_14479_14520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (10))){
var inst_14387 = (state_14444[(12)]);
var inst_14386 = (state_14444[(14)]);
var inst_14388 = (state_14444[(15)]);
var inst_14385 = (state_14444[(16)]);
var inst_14393 = cljs.core._nth.call(null,inst_14386,inst_14388);
var inst_14394 = cljs.core.async.muxch_STAR_.call(null,inst_14393);
var inst_14395 = cljs.core.async.close_BANG_.call(null,inst_14394);
var inst_14396 = (inst_14388 + (1));
var tmp14474 = inst_14387;
var tmp14475 = inst_14386;
var tmp14476 = inst_14385;
var inst_14385__$1 = tmp14476;
var inst_14386__$1 = tmp14475;
var inst_14387__$1 = tmp14474;
var inst_14388__$1 = inst_14396;
var state_14444__$1 = (function (){var statearr_14480 = state_14444;
(statearr_14480[(12)] = inst_14387__$1);

(statearr_14480[(17)] = inst_14395);

(statearr_14480[(14)] = inst_14386__$1);

(statearr_14480[(15)] = inst_14388__$1);

(statearr_14480[(16)] = inst_14385__$1);

return statearr_14480;
})();
var statearr_14481_14521 = state_14444__$1;
(statearr_14481_14521[(2)] = null);

(statearr_14481_14521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (18))){
var inst_14414 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14482_14522 = state_14444__$1;
(statearr_14482_14522[(2)] = inst_14414);

(statearr_14482_14522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (8))){
var inst_14387 = (state_14444[(12)]);
var inst_14388 = (state_14444[(15)]);
var inst_14390 = (inst_14388 < inst_14387);
var inst_14391 = inst_14390;
var state_14444__$1 = state_14444;
if(cljs.core.truth_(inst_14391)){
var statearr_14483_14523 = state_14444__$1;
(statearr_14483_14523[(1)] = (10));

} else {
var statearr_14484_14524 = state_14444__$1;
(statearr_14484_14524[(1)] = (11));

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
});})(c__12543__auto___14496,mults,ensure_mult,p))
;
return ((function (switch__12431__auto__,c__12543__auto___14496,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_14488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14488[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_14488[(1)] = (1));

return statearr_14488;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_14444){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_14444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e14489){if((e14489 instanceof Object)){
var ex__12435__auto__ = e14489;
var statearr_14490_14525 = state_14444;
(statearr_14490_14525[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14526 = state_14444;
state_14444 = G__14526;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_14444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_14444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___14496,mults,ensure_mult,p))
})();
var state__12545__auto__ = (function (){var statearr_14491 = f__12544__auto__.call(null);
(statearr_14491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___14496);

return statearr_14491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___14496,mults,ensure_mult,p))
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
var args14527 = [];
var len__11105__auto___14530 = arguments.length;
var i__11106__auto___14531 = (0);
while(true){
if((i__11106__auto___14531 < len__11105__auto___14530)){
args14527.push((arguments[i__11106__auto___14531]));

var G__14532 = (i__11106__auto___14531 + (1));
i__11106__auto___14531 = G__14532;
continue;
} else {
}
break;
}

var G__14529 = args14527.length;
switch (G__14529) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14527.length)].join('')));

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
var args14534 = [];
var len__11105__auto___14537 = arguments.length;
var i__11106__auto___14538 = (0);
while(true){
if((i__11106__auto___14538 < len__11105__auto___14537)){
args14534.push((arguments[i__11106__auto___14538]));

var G__14539 = (i__11106__auto___14538 + (1));
i__11106__auto___14538 = G__14539;
continue;
} else {
}
break;
}

var G__14536 = args14534.length;
switch (G__14536) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14534.length)].join('')));

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
var args14541 = [];
var len__11105__auto___14612 = arguments.length;
var i__11106__auto___14613 = (0);
while(true){
if((i__11106__auto___14613 < len__11105__auto___14612)){
args14541.push((arguments[i__11106__auto___14613]));

var G__14614 = (i__11106__auto___14613 + (1));
i__11106__auto___14613 = G__14614;
continue;
} else {
}
break;
}

var G__14543 = args14541.length;
switch (G__14543) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14541.length)].join('')));

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
var c__12543__auto___14616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___14616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___14616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14582){
var state_val_14583 = (state_14582[(1)]);
if((state_val_14583 === (7))){
var state_14582__$1 = state_14582;
var statearr_14584_14617 = state_14582__$1;
(statearr_14584_14617[(2)] = null);

(statearr_14584_14617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (1))){
var state_14582__$1 = state_14582;
var statearr_14585_14618 = state_14582__$1;
(statearr_14585_14618[(2)] = null);

(statearr_14585_14618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (4))){
var inst_14546 = (state_14582[(7)]);
var inst_14548 = (inst_14546 < cnt);
var state_14582__$1 = state_14582;
if(cljs.core.truth_(inst_14548)){
var statearr_14586_14619 = state_14582__$1;
(statearr_14586_14619[(1)] = (6));

} else {
var statearr_14587_14620 = state_14582__$1;
(statearr_14587_14620[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (15))){
var inst_14578 = (state_14582[(2)]);
var state_14582__$1 = state_14582;
var statearr_14588_14621 = state_14582__$1;
(statearr_14588_14621[(2)] = inst_14578);

(statearr_14588_14621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (13))){
var inst_14571 = cljs.core.async.close_BANG_.call(null,out);
var state_14582__$1 = state_14582;
var statearr_14589_14622 = state_14582__$1;
(statearr_14589_14622[(2)] = inst_14571);

(statearr_14589_14622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (6))){
var state_14582__$1 = state_14582;
var statearr_14590_14623 = state_14582__$1;
(statearr_14590_14623[(2)] = null);

(statearr_14590_14623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (3))){
var inst_14580 = (state_14582[(2)]);
var state_14582__$1 = state_14582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14582__$1,inst_14580);
} else {
if((state_val_14583 === (12))){
var inst_14568 = (state_14582[(8)]);
var inst_14568__$1 = (state_14582[(2)]);
var inst_14569 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14568__$1);
var state_14582__$1 = (function (){var statearr_14591 = state_14582;
(statearr_14591[(8)] = inst_14568__$1);

return statearr_14591;
})();
if(cljs.core.truth_(inst_14569)){
var statearr_14592_14624 = state_14582__$1;
(statearr_14592_14624[(1)] = (13));

} else {
var statearr_14593_14625 = state_14582__$1;
(statearr_14593_14625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (2))){
var inst_14545 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14546 = (0);
var state_14582__$1 = (function (){var statearr_14594 = state_14582;
(statearr_14594[(9)] = inst_14545);

(statearr_14594[(7)] = inst_14546);

return statearr_14594;
})();
var statearr_14595_14626 = state_14582__$1;
(statearr_14595_14626[(2)] = null);

(statearr_14595_14626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (11))){
var inst_14546 = (state_14582[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14582,(10),Object,null,(9));
var inst_14555 = chs__$1.call(null,inst_14546);
var inst_14556 = done.call(null,inst_14546);
var inst_14557 = cljs.core.async.take_BANG_.call(null,inst_14555,inst_14556);
var state_14582__$1 = state_14582;
var statearr_14596_14627 = state_14582__$1;
(statearr_14596_14627[(2)] = inst_14557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (9))){
var inst_14546 = (state_14582[(7)]);
var inst_14559 = (state_14582[(2)]);
var inst_14560 = (inst_14546 + (1));
var inst_14546__$1 = inst_14560;
var state_14582__$1 = (function (){var statearr_14597 = state_14582;
(statearr_14597[(10)] = inst_14559);

(statearr_14597[(7)] = inst_14546__$1);

return statearr_14597;
})();
var statearr_14598_14628 = state_14582__$1;
(statearr_14598_14628[(2)] = null);

(statearr_14598_14628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (5))){
var inst_14566 = (state_14582[(2)]);
var state_14582__$1 = (function (){var statearr_14599 = state_14582;
(statearr_14599[(11)] = inst_14566);

return statearr_14599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14582__$1,(12),dchan);
} else {
if((state_val_14583 === (14))){
var inst_14568 = (state_14582[(8)]);
var inst_14573 = cljs.core.apply.call(null,f,inst_14568);
var state_14582__$1 = state_14582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14582__$1,(16),out,inst_14573);
} else {
if((state_val_14583 === (16))){
var inst_14575 = (state_14582[(2)]);
var state_14582__$1 = (function (){var statearr_14600 = state_14582;
(statearr_14600[(12)] = inst_14575);

return statearr_14600;
})();
var statearr_14601_14629 = state_14582__$1;
(statearr_14601_14629[(2)] = null);

(statearr_14601_14629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (10))){
var inst_14550 = (state_14582[(2)]);
var inst_14551 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14582__$1 = (function (){var statearr_14602 = state_14582;
(statearr_14602[(13)] = inst_14550);

return statearr_14602;
})();
var statearr_14603_14630 = state_14582__$1;
(statearr_14603_14630[(2)] = inst_14551);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14583 === (8))){
var inst_14564 = (state_14582[(2)]);
var state_14582__$1 = state_14582;
var statearr_14604_14631 = state_14582__$1;
(statearr_14604_14631[(2)] = inst_14564);

(statearr_14604_14631[(1)] = (5));


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
});})(c__12543__auto___14616,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12431__auto__,c__12543__auto___14616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_14608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14608[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_14608[(1)] = (1));

return statearr_14608;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_14582){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_14582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e14609){if((e14609 instanceof Object)){
var ex__12435__auto__ = e14609;
var statearr_14610_14632 = state_14582;
(statearr_14610_14632[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14633 = state_14582;
state_14582 = G__14633;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_14582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_14582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___14616,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12545__auto__ = (function (){var statearr_14611 = f__12544__auto__.call(null);
(statearr_14611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___14616);

return statearr_14611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___14616,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14635 = [];
var len__11105__auto___14693 = arguments.length;
var i__11106__auto___14694 = (0);
while(true){
if((i__11106__auto___14694 < len__11105__auto___14693)){
args14635.push((arguments[i__11106__auto___14694]));

var G__14695 = (i__11106__auto___14694 + (1));
i__11106__auto___14694 = G__14695;
continue;
} else {
}
break;
}

var G__14637 = args14635.length;
switch (G__14637) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14635.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12543__auto___14697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___14697,out){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___14697,out){
return (function (state_14669){
var state_val_14670 = (state_14669[(1)]);
if((state_val_14670 === (7))){
var inst_14649 = (state_14669[(7)]);
var inst_14648 = (state_14669[(8)]);
var inst_14648__$1 = (state_14669[(2)]);
var inst_14649__$1 = cljs.core.nth.call(null,inst_14648__$1,(0),null);
var inst_14650 = cljs.core.nth.call(null,inst_14648__$1,(1),null);
var inst_14651 = (inst_14649__$1 == null);
var state_14669__$1 = (function (){var statearr_14671 = state_14669;
(statearr_14671[(9)] = inst_14650);

(statearr_14671[(7)] = inst_14649__$1);

(statearr_14671[(8)] = inst_14648__$1);

return statearr_14671;
})();
if(cljs.core.truth_(inst_14651)){
var statearr_14672_14698 = state_14669__$1;
(statearr_14672_14698[(1)] = (8));

} else {
var statearr_14673_14699 = state_14669__$1;
(statearr_14673_14699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (1))){
var inst_14638 = cljs.core.vec.call(null,chs);
var inst_14639 = inst_14638;
var state_14669__$1 = (function (){var statearr_14674 = state_14669;
(statearr_14674[(10)] = inst_14639);

return statearr_14674;
})();
var statearr_14675_14700 = state_14669__$1;
(statearr_14675_14700[(2)] = null);

(statearr_14675_14700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (4))){
var inst_14639 = (state_14669[(10)]);
var state_14669__$1 = state_14669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14669__$1,(7),inst_14639);
} else {
if((state_val_14670 === (6))){
var inst_14665 = (state_14669[(2)]);
var state_14669__$1 = state_14669;
var statearr_14676_14701 = state_14669__$1;
(statearr_14676_14701[(2)] = inst_14665);

(statearr_14676_14701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (3))){
var inst_14667 = (state_14669[(2)]);
var state_14669__$1 = state_14669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14669__$1,inst_14667);
} else {
if((state_val_14670 === (2))){
var inst_14639 = (state_14669[(10)]);
var inst_14641 = cljs.core.count.call(null,inst_14639);
var inst_14642 = (inst_14641 > (0));
var state_14669__$1 = state_14669;
if(cljs.core.truth_(inst_14642)){
var statearr_14678_14702 = state_14669__$1;
(statearr_14678_14702[(1)] = (4));

} else {
var statearr_14679_14703 = state_14669__$1;
(statearr_14679_14703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (11))){
var inst_14639 = (state_14669[(10)]);
var inst_14658 = (state_14669[(2)]);
var tmp14677 = inst_14639;
var inst_14639__$1 = tmp14677;
var state_14669__$1 = (function (){var statearr_14680 = state_14669;
(statearr_14680[(11)] = inst_14658);

(statearr_14680[(10)] = inst_14639__$1);

return statearr_14680;
})();
var statearr_14681_14704 = state_14669__$1;
(statearr_14681_14704[(2)] = null);

(statearr_14681_14704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (9))){
var inst_14649 = (state_14669[(7)]);
var state_14669__$1 = state_14669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14669__$1,(11),out,inst_14649);
} else {
if((state_val_14670 === (5))){
var inst_14663 = cljs.core.async.close_BANG_.call(null,out);
var state_14669__$1 = state_14669;
var statearr_14682_14705 = state_14669__$1;
(statearr_14682_14705[(2)] = inst_14663);

(statearr_14682_14705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (10))){
var inst_14661 = (state_14669[(2)]);
var state_14669__$1 = state_14669;
var statearr_14683_14706 = state_14669__$1;
(statearr_14683_14706[(2)] = inst_14661);

(statearr_14683_14706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14670 === (8))){
var inst_14650 = (state_14669[(9)]);
var inst_14649 = (state_14669[(7)]);
var inst_14639 = (state_14669[(10)]);
var inst_14648 = (state_14669[(8)]);
var inst_14653 = (function (){var cs = inst_14639;
var vec__14644 = inst_14648;
var v = inst_14649;
var c = inst_14650;
return ((function (cs,vec__14644,v,c,inst_14650,inst_14649,inst_14639,inst_14648,state_val_14670,c__12543__auto___14697,out){
return (function (p1__14634_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14634_SHARP_);
});
;})(cs,vec__14644,v,c,inst_14650,inst_14649,inst_14639,inst_14648,state_val_14670,c__12543__auto___14697,out))
})();
var inst_14654 = cljs.core.filterv.call(null,inst_14653,inst_14639);
var inst_14639__$1 = inst_14654;
var state_14669__$1 = (function (){var statearr_14684 = state_14669;
(statearr_14684[(10)] = inst_14639__$1);

return statearr_14684;
})();
var statearr_14685_14707 = state_14669__$1;
(statearr_14685_14707[(2)] = null);

(statearr_14685_14707[(1)] = (2));


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
});})(c__12543__auto___14697,out))
;
return ((function (switch__12431__auto__,c__12543__auto___14697,out){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_14689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14689[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_14689[(1)] = (1));

return statearr_14689;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_14669){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_14669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e14690){if((e14690 instanceof Object)){
var ex__12435__auto__ = e14690;
var statearr_14691_14708 = state_14669;
(statearr_14691_14708[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14709 = state_14669;
state_14669 = G__14709;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_14669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_14669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___14697,out))
})();
var state__12545__auto__ = (function (){var statearr_14692 = f__12544__auto__.call(null);
(statearr_14692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___14697);

return statearr_14692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___14697,out))
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
var args14710 = [];
var len__11105__auto___14759 = arguments.length;
var i__11106__auto___14760 = (0);
while(true){
if((i__11106__auto___14760 < len__11105__auto___14759)){
args14710.push((arguments[i__11106__auto___14760]));

var G__14761 = (i__11106__auto___14760 + (1));
i__11106__auto___14760 = G__14761;
continue;
} else {
}
break;
}

var G__14712 = args14710.length;
switch (G__14712) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14710.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12543__auto___14763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___14763,out){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___14763,out){
return (function (state_14736){
var state_val_14737 = (state_14736[(1)]);
if((state_val_14737 === (7))){
var inst_14718 = (state_14736[(7)]);
var inst_14718__$1 = (state_14736[(2)]);
var inst_14719 = (inst_14718__$1 == null);
var inst_14720 = cljs.core.not.call(null,inst_14719);
var state_14736__$1 = (function (){var statearr_14738 = state_14736;
(statearr_14738[(7)] = inst_14718__$1);

return statearr_14738;
})();
if(inst_14720){
var statearr_14739_14764 = state_14736__$1;
(statearr_14739_14764[(1)] = (8));

} else {
var statearr_14740_14765 = state_14736__$1;
(statearr_14740_14765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (1))){
var inst_14713 = (0);
var state_14736__$1 = (function (){var statearr_14741 = state_14736;
(statearr_14741[(8)] = inst_14713);

return statearr_14741;
})();
var statearr_14742_14766 = state_14736__$1;
(statearr_14742_14766[(2)] = null);

(statearr_14742_14766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (4))){
var state_14736__$1 = state_14736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14736__$1,(7),ch);
} else {
if((state_val_14737 === (6))){
var inst_14731 = (state_14736[(2)]);
var state_14736__$1 = state_14736;
var statearr_14743_14767 = state_14736__$1;
(statearr_14743_14767[(2)] = inst_14731);

(statearr_14743_14767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (3))){
var inst_14733 = (state_14736[(2)]);
var inst_14734 = cljs.core.async.close_BANG_.call(null,out);
var state_14736__$1 = (function (){var statearr_14744 = state_14736;
(statearr_14744[(9)] = inst_14733);

return statearr_14744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14736__$1,inst_14734);
} else {
if((state_val_14737 === (2))){
var inst_14713 = (state_14736[(8)]);
var inst_14715 = (inst_14713 < n);
var state_14736__$1 = state_14736;
if(cljs.core.truth_(inst_14715)){
var statearr_14745_14768 = state_14736__$1;
(statearr_14745_14768[(1)] = (4));

} else {
var statearr_14746_14769 = state_14736__$1;
(statearr_14746_14769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (11))){
var inst_14713 = (state_14736[(8)]);
var inst_14723 = (state_14736[(2)]);
var inst_14724 = (inst_14713 + (1));
var inst_14713__$1 = inst_14724;
var state_14736__$1 = (function (){var statearr_14747 = state_14736;
(statearr_14747[(10)] = inst_14723);

(statearr_14747[(8)] = inst_14713__$1);

return statearr_14747;
})();
var statearr_14748_14770 = state_14736__$1;
(statearr_14748_14770[(2)] = null);

(statearr_14748_14770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (9))){
var state_14736__$1 = state_14736;
var statearr_14749_14771 = state_14736__$1;
(statearr_14749_14771[(2)] = null);

(statearr_14749_14771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (5))){
var state_14736__$1 = state_14736;
var statearr_14750_14772 = state_14736__$1;
(statearr_14750_14772[(2)] = null);

(statearr_14750_14772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (10))){
var inst_14728 = (state_14736[(2)]);
var state_14736__$1 = state_14736;
var statearr_14751_14773 = state_14736__$1;
(statearr_14751_14773[(2)] = inst_14728);

(statearr_14751_14773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (8))){
var inst_14718 = (state_14736[(7)]);
var state_14736__$1 = state_14736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14736__$1,(11),out,inst_14718);
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
});})(c__12543__auto___14763,out))
;
return ((function (switch__12431__auto__,c__12543__auto___14763,out){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_14755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14755[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_14755[(1)] = (1));

return statearr_14755;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_14736){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_14736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e14756){if((e14756 instanceof Object)){
var ex__12435__auto__ = e14756;
var statearr_14757_14774 = state_14736;
(statearr_14757_14774[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14775 = state_14736;
state_14736 = G__14775;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_14736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_14736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___14763,out))
})();
var state__12545__auto__ = (function (){var statearr_14758 = f__12544__auto__.call(null);
(statearr_14758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___14763);

return statearr_14758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___14763,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14783 = (function (f,ch,meta14784){
this.f = f;
this.ch = ch;
this.meta14784 = meta14784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14785,meta14784__$1){
var self__ = this;
var _14785__$1 = this;
return (new cljs.core.async.t_cljs$core$async14783(self__.f,self__.ch,meta14784__$1));
});

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14785){
var self__ = this;
var _14785__$1 = this;
return self__.meta14784;
});

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14786 = (function (f,ch,meta14784,_,fn1,meta14787){
this.f = f;
this.ch = ch;
this.meta14784 = meta14784;
this._ = _;
this.fn1 = fn1;
this.meta14787 = meta14787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14788,meta14787__$1){
var self__ = this;
var _14788__$1 = this;
return (new cljs.core.async.t_cljs$core$async14786(self__.f,self__.ch,self__.meta14784,self__._,self__.fn1,meta14787__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14788){
var self__ = this;
var _14788__$1 = this;
return self__.meta14787;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14776_SHARP_){
return f1.call(null,(((p1__14776_SHARP_ == null))?null:self__.f.call(null,p1__14776_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14786.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14784","meta14784",269382024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14783","cljs.core.async/t_cljs$core$async14783",-549828263,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14787","meta14787",854640505,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14786";

cljs.core.async.t_cljs$core$async14786.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async14786");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14786 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14786(f__$1,ch__$1,meta14784__$1,___$2,fn1__$1,meta14787){
return (new cljs.core.async.t_cljs$core$async14786(f__$1,ch__$1,meta14784__$1,___$2,fn1__$1,meta14787));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14786(self__.f,self__.ch,self__.meta14784,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9980__auto__ = ret;
if(cljs.core.truth_(and__9980__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9980__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14784","meta14784",269382024,null)], null);
});

cljs.core.async.t_cljs$core$async14783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14783";

cljs.core.async.t_cljs$core$async14783.cljs$lang$ctorPrWriter = (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async14783");
});

cljs.core.async.__GT_t_cljs$core$async14783 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14783(f__$1,ch__$1,meta14784){
return (new cljs.core.async.t_cljs$core$async14783(f__$1,ch__$1,meta14784));
});

}

return (new cljs.core.async.t_cljs$core$async14783(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14792 = (function (f,ch,meta14793){
this.f = f;
this.ch = ch;
this.meta14793 = meta14793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14794,meta14793__$1){
var self__ = this;
var _14794__$1 = this;
return (new cljs.core.async.t_cljs$core$async14792(self__.f,self__.ch,meta14793__$1));
});

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14794){
var self__ = this;
var _14794__$1 = this;
return self__.meta14793;
});

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14793","meta14793",636813912,null)], null);
});

cljs.core.async.t_cljs$core$async14792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14792";

cljs.core.async.t_cljs$core$async14792.cljs$lang$ctorPrWriter = (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async14792");
});

cljs.core.async.__GT_t_cljs$core$async14792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14792(f__$1,ch__$1,meta14793){
return (new cljs.core.async.t_cljs$core$async14792(f__$1,ch__$1,meta14793));
});

}

return (new cljs.core.async.t_cljs$core$async14792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14798 = (function (p,ch,meta14799){
this.p = p;
this.ch = ch;
this.meta14799 = meta14799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14800,meta14799__$1){
var self__ = this;
var _14800__$1 = this;
return (new cljs.core.async.t_cljs$core$async14798(self__.p,self__.ch,meta14799__$1));
});

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14800){
var self__ = this;
var _14800__$1 = this;
return self__.meta14799;
});

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14799","meta14799",163230885,null)], null);
});

cljs.core.async.t_cljs$core$async14798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14798";

cljs.core.async.t_cljs$core$async14798.cljs$lang$ctorPrWriter = (function (this__10603__auto__,writer__10604__auto__,opt__10605__auto__){
return cljs.core._write.call(null,writer__10604__auto__,"cljs.core.async/t_cljs$core$async14798");
});

cljs.core.async.__GT_t_cljs$core$async14798 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14798(p__$1,ch__$1,meta14799){
return (new cljs.core.async.t_cljs$core$async14798(p__$1,ch__$1,meta14799));
});

}

return (new cljs.core.async.t_cljs$core$async14798(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14801 = [];
var len__11105__auto___14845 = arguments.length;
var i__11106__auto___14846 = (0);
while(true){
if((i__11106__auto___14846 < len__11105__auto___14845)){
args14801.push((arguments[i__11106__auto___14846]));

var G__14847 = (i__11106__auto___14846 + (1));
i__11106__auto___14846 = G__14847;
continue;
} else {
}
break;
}

var G__14803 = args14801.length;
switch (G__14803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14801.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12543__auto___14849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___14849,out){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___14849,out){
return (function (state_14824){
var state_val_14825 = (state_14824[(1)]);
if((state_val_14825 === (7))){
var inst_14820 = (state_14824[(2)]);
var state_14824__$1 = state_14824;
var statearr_14826_14850 = state_14824__$1;
(statearr_14826_14850[(2)] = inst_14820);

(statearr_14826_14850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (1))){
var state_14824__$1 = state_14824;
var statearr_14827_14851 = state_14824__$1;
(statearr_14827_14851[(2)] = null);

(statearr_14827_14851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (4))){
var inst_14806 = (state_14824[(7)]);
var inst_14806__$1 = (state_14824[(2)]);
var inst_14807 = (inst_14806__$1 == null);
var state_14824__$1 = (function (){var statearr_14828 = state_14824;
(statearr_14828[(7)] = inst_14806__$1);

return statearr_14828;
})();
if(cljs.core.truth_(inst_14807)){
var statearr_14829_14852 = state_14824__$1;
(statearr_14829_14852[(1)] = (5));

} else {
var statearr_14830_14853 = state_14824__$1;
(statearr_14830_14853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (6))){
var inst_14806 = (state_14824[(7)]);
var inst_14811 = p.call(null,inst_14806);
var state_14824__$1 = state_14824;
if(cljs.core.truth_(inst_14811)){
var statearr_14831_14854 = state_14824__$1;
(statearr_14831_14854[(1)] = (8));

} else {
var statearr_14832_14855 = state_14824__$1;
(statearr_14832_14855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (3))){
var inst_14822 = (state_14824[(2)]);
var state_14824__$1 = state_14824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14824__$1,inst_14822);
} else {
if((state_val_14825 === (2))){
var state_14824__$1 = state_14824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14824__$1,(4),ch);
} else {
if((state_val_14825 === (11))){
var inst_14814 = (state_14824[(2)]);
var state_14824__$1 = state_14824;
var statearr_14833_14856 = state_14824__$1;
(statearr_14833_14856[(2)] = inst_14814);

(statearr_14833_14856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (9))){
var state_14824__$1 = state_14824;
var statearr_14834_14857 = state_14824__$1;
(statearr_14834_14857[(2)] = null);

(statearr_14834_14857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (5))){
var inst_14809 = cljs.core.async.close_BANG_.call(null,out);
var state_14824__$1 = state_14824;
var statearr_14835_14858 = state_14824__$1;
(statearr_14835_14858[(2)] = inst_14809);

(statearr_14835_14858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (10))){
var inst_14817 = (state_14824[(2)]);
var state_14824__$1 = (function (){var statearr_14836 = state_14824;
(statearr_14836[(8)] = inst_14817);

return statearr_14836;
})();
var statearr_14837_14859 = state_14824__$1;
(statearr_14837_14859[(2)] = null);

(statearr_14837_14859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14825 === (8))){
var inst_14806 = (state_14824[(7)]);
var state_14824__$1 = state_14824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14824__$1,(11),out,inst_14806);
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
});})(c__12543__auto___14849,out))
;
return ((function (switch__12431__auto__,c__12543__auto___14849,out){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_14841 = [null,null,null,null,null,null,null,null,null];
(statearr_14841[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_14841[(1)] = (1));

return statearr_14841;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_14824){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_14824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e14842){if((e14842 instanceof Object)){
var ex__12435__auto__ = e14842;
var statearr_14843_14860 = state_14824;
(statearr_14843_14860[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14861 = state_14824;
state_14824 = G__14861;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_14824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_14824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___14849,out))
})();
var state__12545__auto__ = (function (){var statearr_14844 = f__12544__auto__.call(null);
(statearr_14844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___14849);

return statearr_14844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___14849,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14862 = [];
var len__11105__auto___14865 = arguments.length;
var i__11106__auto___14866 = (0);
while(true){
if((i__11106__auto___14866 < len__11105__auto___14865)){
args14862.push((arguments[i__11106__auto___14866]));

var G__14867 = (i__11106__auto___14866 + (1));
i__11106__auto___14866 = G__14867;
continue;
} else {
}
break;
}

var G__14864 = args14862.length;
switch (G__14864) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14862.length)].join('')));

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
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__){
return (function (state_15034){
var state_val_15035 = (state_15034[(1)]);
if((state_val_15035 === (7))){
var inst_15030 = (state_15034[(2)]);
var state_15034__$1 = state_15034;
var statearr_15036_15077 = state_15034__$1;
(statearr_15036_15077[(2)] = inst_15030);

(statearr_15036_15077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (20))){
var inst_15000 = (state_15034[(7)]);
var inst_15011 = (state_15034[(2)]);
var inst_15012 = cljs.core.next.call(null,inst_15000);
var inst_14986 = inst_15012;
var inst_14987 = null;
var inst_14988 = (0);
var inst_14989 = (0);
var state_15034__$1 = (function (){var statearr_15037 = state_15034;
(statearr_15037[(8)] = inst_14987);

(statearr_15037[(9)] = inst_14989);

(statearr_15037[(10)] = inst_14988);

(statearr_15037[(11)] = inst_15011);

(statearr_15037[(12)] = inst_14986);

return statearr_15037;
})();
var statearr_15038_15078 = state_15034__$1;
(statearr_15038_15078[(2)] = null);

(statearr_15038_15078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (1))){
var state_15034__$1 = state_15034;
var statearr_15039_15079 = state_15034__$1;
(statearr_15039_15079[(2)] = null);

(statearr_15039_15079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (4))){
var inst_14975 = (state_15034[(13)]);
var inst_14975__$1 = (state_15034[(2)]);
var inst_14976 = (inst_14975__$1 == null);
var state_15034__$1 = (function (){var statearr_15040 = state_15034;
(statearr_15040[(13)] = inst_14975__$1);

return statearr_15040;
})();
if(cljs.core.truth_(inst_14976)){
var statearr_15041_15080 = state_15034__$1;
(statearr_15041_15080[(1)] = (5));

} else {
var statearr_15042_15081 = state_15034__$1;
(statearr_15042_15081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (15))){
var state_15034__$1 = state_15034;
var statearr_15046_15082 = state_15034__$1;
(statearr_15046_15082[(2)] = null);

(statearr_15046_15082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (21))){
var state_15034__$1 = state_15034;
var statearr_15047_15083 = state_15034__$1;
(statearr_15047_15083[(2)] = null);

(statearr_15047_15083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (13))){
var inst_14987 = (state_15034[(8)]);
var inst_14989 = (state_15034[(9)]);
var inst_14988 = (state_15034[(10)]);
var inst_14986 = (state_15034[(12)]);
var inst_14996 = (state_15034[(2)]);
var inst_14997 = (inst_14989 + (1));
var tmp15043 = inst_14987;
var tmp15044 = inst_14988;
var tmp15045 = inst_14986;
var inst_14986__$1 = tmp15045;
var inst_14987__$1 = tmp15043;
var inst_14988__$1 = tmp15044;
var inst_14989__$1 = inst_14997;
var state_15034__$1 = (function (){var statearr_15048 = state_15034;
(statearr_15048[(8)] = inst_14987__$1);

(statearr_15048[(9)] = inst_14989__$1);

(statearr_15048[(10)] = inst_14988__$1);

(statearr_15048[(14)] = inst_14996);

(statearr_15048[(12)] = inst_14986__$1);

return statearr_15048;
})();
var statearr_15049_15084 = state_15034__$1;
(statearr_15049_15084[(2)] = null);

(statearr_15049_15084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (22))){
var state_15034__$1 = state_15034;
var statearr_15050_15085 = state_15034__$1;
(statearr_15050_15085[(2)] = null);

(statearr_15050_15085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (6))){
var inst_14975 = (state_15034[(13)]);
var inst_14984 = f.call(null,inst_14975);
var inst_14985 = cljs.core.seq.call(null,inst_14984);
var inst_14986 = inst_14985;
var inst_14987 = null;
var inst_14988 = (0);
var inst_14989 = (0);
var state_15034__$1 = (function (){var statearr_15051 = state_15034;
(statearr_15051[(8)] = inst_14987);

(statearr_15051[(9)] = inst_14989);

(statearr_15051[(10)] = inst_14988);

(statearr_15051[(12)] = inst_14986);

return statearr_15051;
})();
var statearr_15052_15086 = state_15034__$1;
(statearr_15052_15086[(2)] = null);

(statearr_15052_15086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (17))){
var inst_15000 = (state_15034[(7)]);
var inst_15004 = cljs.core.chunk_first.call(null,inst_15000);
var inst_15005 = cljs.core.chunk_rest.call(null,inst_15000);
var inst_15006 = cljs.core.count.call(null,inst_15004);
var inst_14986 = inst_15005;
var inst_14987 = inst_15004;
var inst_14988 = inst_15006;
var inst_14989 = (0);
var state_15034__$1 = (function (){var statearr_15053 = state_15034;
(statearr_15053[(8)] = inst_14987);

(statearr_15053[(9)] = inst_14989);

(statearr_15053[(10)] = inst_14988);

(statearr_15053[(12)] = inst_14986);

return statearr_15053;
})();
var statearr_15054_15087 = state_15034__$1;
(statearr_15054_15087[(2)] = null);

(statearr_15054_15087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (3))){
var inst_15032 = (state_15034[(2)]);
var state_15034__$1 = state_15034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15034__$1,inst_15032);
} else {
if((state_val_15035 === (12))){
var inst_15020 = (state_15034[(2)]);
var state_15034__$1 = state_15034;
var statearr_15055_15088 = state_15034__$1;
(statearr_15055_15088[(2)] = inst_15020);

(statearr_15055_15088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (2))){
var state_15034__$1 = state_15034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15034__$1,(4),in$);
} else {
if((state_val_15035 === (23))){
var inst_15028 = (state_15034[(2)]);
var state_15034__$1 = state_15034;
var statearr_15056_15089 = state_15034__$1;
(statearr_15056_15089[(2)] = inst_15028);

(statearr_15056_15089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (19))){
var inst_15015 = (state_15034[(2)]);
var state_15034__$1 = state_15034;
var statearr_15057_15090 = state_15034__$1;
(statearr_15057_15090[(2)] = inst_15015);

(statearr_15057_15090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (11))){
var inst_15000 = (state_15034[(7)]);
var inst_14986 = (state_15034[(12)]);
var inst_15000__$1 = cljs.core.seq.call(null,inst_14986);
var state_15034__$1 = (function (){var statearr_15058 = state_15034;
(statearr_15058[(7)] = inst_15000__$1);

return statearr_15058;
})();
if(inst_15000__$1){
var statearr_15059_15091 = state_15034__$1;
(statearr_15059_15091[(1)] = (14));

} else {
var statearr_15060_15092 = state_15034__$1;
(statearr_15060_15092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (9))){
var inst_15022 = (state_15034[(2)]);
var inst_15023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15034__$1 = (function (){var statearr_15061 = state_15034;
(statearr_15061[(15)] = inst_15022);

return statearr_15061;
})();
if(cljs.core.truth_(inst_15023)){
var statearr_15062_15093 = state_15034__$1;
(statearr_15062_15093[(1)] = (21));

} else {
var statearr_15063_15094 = state_15034__$1;
(statearr_15063_15094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (5))){
var inst_14978 = cljs.core.async.close_BANG_.call(null,out);
var state_15034__$1 = state_15034;
var statearr_15064_15095 = state_15034__$1;
(statearr_15064_15095[(2)] = inst_14978);

(statearr_15064_15095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (14))){
var inst_15000 = (state_15034[(7)]);
var inst_15002 = cljs.core.chunked_seq_QMARK_.call(null,inst_15000);
var state_15034__$1 = state_15034;
if(inst_15002){
var statearr_15065_15096 = state_15034__$1;
(statearr_15065_15096[(1)] = (17));

} else {
var statearr_15066_15097 = state_15034__$1;
(statearr_15066_15097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (16))){
var inst_15018 = (state_15034[(2)]);
var state_15034__$1 = state_15034;
var statearr_15067_15098 = state_15034__$1;
(statearr_15067_15098[(2)] = inst_15018);

(statearr_15067_15098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15035 === (10))){
var inst_14987 = (state_15034[(8)]);
var inst_14989 = (state_15034[(9)]);
var inst_14994 = cljs.core._nth.call(null,inst_14987,inst_14989);
var state_15034__$1 = state_15034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15034__$1,(13),out,inst_14994);
} else {
if((state_val_15035 === (18))){
var inst_15000 = (state_15034[(7)]);
var inst_15009 = cljs.core.first.call(null,inst_15000);
var state_15034__$1 = state_15034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15034__$1,(20),out,inst_15009);
} else {
if((state_val_15035 === (8))){
var inst_14989 = (state_15034[(9)]);
var inst_14988 = (state_15034[(10)]);
var inst_14991 = (inst_14989 < inst_14988);
var inst_14992 = inst_14991;
var state_15034__$1 = state_15034;
if(cljs.core.truth_(inst_14992)){
var statearr_15068_15099 = state_15034__$1;
(statearr_15068_15099[(1)] = (10));

} else {
var statearr_15069_15100 = state_15034__$1;
(statearr_15069_15100[(1)] = (11));

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
});})(c__12543__auto__))
;
return ((function (switch__12431__auto__,c__12543__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12432__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12432__auto____0 = (function (){
var statearr_15073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12432__auto__);

(statearr_15073[(1)] = (1));

return statearr_15073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12432__auto____1 = (function (state_15034){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_15034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e15074){if((e15074 instanceof Object)){
var ex__12435__auto__ = e15074;
var statearr_15075_15101 = state_15034;
(statearr_15075_15101[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15102 = state_15034;
state_15034 = G__15102;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12432__auto__ = function(state_15034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12432__auto____1.call(this,state_15034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12432__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12432__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__))
})();
var state__12545__auto__ = (function (){var statearr_15076 = f__12544__auto__.call(null);
(statearr_15076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_15076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__))
);

return c__12543__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15103 = [];
var len__11105__auto___15106 = arguments.length;
var i__11106__auto___15107 = (0);
while(true){
if((i__11106__auto___15107 < len__11105__auto___15106)){
args15103.push((arguments[i__11106__auto___15107]));

var G__15108 = (i__11106__auto___15107 + (1));
i__11106__auto___15107 = G__15108;
continue;
} else {
}
break;
}

var G__15105 = args15103.length;
switch (G__15105) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15103.length)].join('')));

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
var args15110 = [];
var len__11105__auto___15113 = arguments.length;
var i__11106__auto___15114 = (0);
while(true){
if((i__11106__auto___15114 < len__11105__auto___15113)){
args15110.push((arguments[i__11106__auto___15114]));

var G__15115 = (i__11106__auto___15114 + (1));
i__11106__auto___15114 = G__15115;
continue;
} else {
}
break;
}

var G__15112 = args15110.length;
switch (G__15112) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15110.length)].join('')));

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
var args15117 = [];
var len__11105__auto___15168 = arguments.length;
var i__11106__auto___15169 = (0);
while(true){
if((i__11106__auto___15169 < len__11105__auto___15168)){
args15117.push((arguments[i__11106__auto___15169]));

var G__15170 = (i__11106__auto___15169 + (1));
i__11106__auto___15169 = G__15170;
continue;
} else {
}
break;
}

var G__15119 = args15117.length;
switch (G__15119) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15117.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12543__auto___15172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___15172,out){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___15172,out){
return (function (state_15143){
var state_val_15144 = (state_15143[(1)]);
if((state_val_15144 === (7))){
var inst_15138 = (state_15143[(2)]);
var state_15143__$1 = state_15143;
var statearr_15145_15173 = state_15143__$1;
(statearr_15145_15173[(2)] = inst_15138);

(statearr_15145_15173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (1))){
var inst_15120 = null;
var state_15143__$1 = (function (){var statearr_15146 = state_15143;
(statearr_15146[(7)] = inst_15120);

return statearr_15146;
})();
var statearr_15147_15174 = state_15143__$1;
(statearr_15147_15174[(2)] = null);

(statearr_15147_15174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (4))){
var inst_15123 = (state_15143[(8)]);
var inst_15123__$1 = (state_15143[(2)]);
var inst_15124 = (inst_15123__$1 == null);
var inst_15125 = cljs.core.not.call(null,inst_15124);
var state_15143__$1 = (function (){var statearr_15148 = state_15143;
(statearr_15148[(8)] = inst_15123__$1);

return statearr_15148;
})();
if(inst_15125){
var statearr_15149_15175 = state_15143__$1;
(statearr_15149_15175[(1)] = (5));

} else {
var statearr_15150_15176 = state_15143__$1;
(statearr_15150_15176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (6))){
var state_15143__$1 = state_15143;
var statearr_15151_15177 = state_15143__$1;
(statearr_15151_15177[(2)] = null);

(statearr_15151_15177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (3))){
var inst_15140 = (state_15143[(2)]);
var inst_15141 = cljs.core.async.close_BANG_.call(null,out);
var state_15143__$1 = (function (){var statearr_15152 = state_15143;
(statearr_15152[(9)] = inst_15140);

return statearr_15152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15143__$1,inst_15141);
} else {
if((state_val_15144 === (2))){
var state_15143__$1 = state_15143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15143__$1,(4),ch);
} else {
if((state_val_15144 === (11))){
var inst_15123 = (state_15143[(8)]);
var inst_15132 = (state_15143[(2)]);
var inst_15120 = inst_15123;
var state_15143__$1 = (function (){var statearr_15153 = state_15143;
(statearr_15153[(7)] = inst_15120);

(statearr_15153[(10)] = inst_15132);

return statearr_15153;
})();
var statearr_15154_15178 = state_15143__$1;
(statearr_15154_15178[(2)] = null);

(statearr_15154_15178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (9))){
var inst_15123 = (state_15143[(8)]);
var state_15143__$1 = state_15143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15143__$1,(11),out,inst_15123);
} else {
if((state_val_15144 === (5))){
var inst_15120 = (state_15143[(7)]);
var inst_15123 = (state_15143[(8)]);
var inst_15127 = cljs.core._EQ_.call(null,inst_15123,inst_15120);
var state_15143__$1 = state_15143;
if(inst_15127){
var statearr_15156_15179 = state_15143__$1;
(statearr_15156_15179[(1)] = (8));

} else {
var statearr_15157_15180 = state_15143__$1;
(statearr_15157_15180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (10))){
var inst_15135 = (state_15143[(2)]);
var state_15143__$1 = state_15143;
var statearr_15158_15181 = state_15143__$1;
(statearr_15158_15181[(2)] = inst_15135);

(statearr_15158_15181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (8))){
var inst_15120 = (state_15143[(7)]);
var tmp15155 = inst_15120;
var inst_15120__$1 = tmp15155;
var state_15143__$1 = (function (){var statearr_15159 = state_15143;
(statearr_15159[(7)] = inst_15120__$1);

return statearr_15159;
})();
var statearr_15160_15182 = state_15143__$1;
(statearr_15160_15182[(2)] = null);

(statearr_15160_15182[(1)] = (2));


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
});})(c__12543__auto___15172,out))
;
return ((function (switch__12431__auto__,c__12543__auto___15172,out){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_15164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15164[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_15164[(1)] = (1));

return statearr_15164;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_15143){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_15143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e15165){if((e15165 instanceof Object)){
var ex__12435__auto__ = e15165;
var statearr_15166_15183 = state_15143;
(statearr_15166_15183[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15184 = state_15143;
state_15143 = G__15184;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_15143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_15143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___15172,out))
})();
var state__12545__auto__ = (function (){var statearr_15167 = f__12544__auto__.call(null);
(statearr_15167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___15172);

return statearr_15167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___15172,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15185 = [];
var len__11105__auto___15255 = arguments.length;
var i__11106__auto___15256 = (0);
while(true){
if((i__11106__auto___15256 < len__11105__auto___15255)){
args15185.push((arguments[i__11106__auto___15256]));

var G__15257 = (i__11106__auto___15256 + (1));
i__11106__auto___15256 = G__15257;
continue;
} else {
}
break;
}

var G__15187 = args15185.length;
switch (G__15187) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15185.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12543__auto___15259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___15259,out){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___15259,out){
return (function (state_15225){
var state_val_15226 = (state_15225[(1)]);
if((state_val_15226 === (7))){
var inst_15221 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15227_15260 = state_15225__$1;
(statearr_15227_15260[(2)] = inst_15221);

(statearr_15227_15260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (1))){
var inst_15188 = (new Array(n));
var inst_15189 = inst_15188;
var inst_15190 = (0);
var state_15225__$1 = (function (){var statearr_15228 = state_15225;
(statearr_15228[(7)] = inst_15189);

(statearr_15228[(8)] = inst_15190);

return statearr_15228;
})();
var statearr_15229_15261 = state_15225__$1;
(statearr_15229_15261[(2)] = null);

(statearr_15229_15261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (4))){
var inst_15193 = (state_15225[(9)]);
var inst_15193__$1 = (state_15225[(2)]);
var inst_15194 = (inst_15193__$1 == null);
var inst_15195 = cljs.core.not.call(null,inst_15194);
var state_15225__$1 = (function (){var statearr_15230 = state_15225;
(statearr_15230[(9)] = inst_15193__$1);

return statearr_15230;
})();
if(inst_15195){
var statearr_15231_15262 = state_15225__$1;
(statearr_15231_15262[(1)] = (5));

} else {
var statearr_15232_15263 = state_15225__$1;
(statearr_15232_15263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (15))){
var inst_15215 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15233_15264 = state_15225__$1;
(statearr_15233_15264[(2)] = inst_15215);

(statearr_15233_15264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (13))){
var state_15225__$1 = state_15225;
var statearr_15234_15265 = state_15225__$1;
(statearr_15234_15265[(2)] = null);

(statearr_15234_15265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (6))){
var inst_15190 = (state_15225[(8)]);
var inst_15211 = (inst_15190 > (0));
var state_15225__$1 = state_15225;
if(cljs.core.truth_(inst_15211)){
var statearr_15235_15266 = state_15225__$1;
(statearr_15235_15266[(1)] = (12));

} else {
var statearr_15236_15267 = state_15225__$1;
(statearr_15236_15267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (3))){
var inst_15223 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15225__$1,inst_15223);
} else {
if((state_val_15226 === (12))){
var inst_15189 = (state_15225[(7)]);
var inst_15213 = cljs.core.vec.call(null,inst_15189);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15225__$1,(15),out,inst_15213);
} else {
if((state_val_15226 === (2))){
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15225__$1,(4),ch);
} else {
if((state_val_15226 === (11))){
var inst_15205 = (state_15225[(2)]);
var inst_15206 = (new Array(n));
var inst_15189 = inst_15206;
var inst_15190 = (0);
var state_15225__$1 = (function (){var statearr_15237 = state_15225;
(statearr_15237[(10)] = inst_15205);

(statearr_15237[(7)] = inst_15189);

(statearr_15237[(8)] = inst_15190);

return statearr_15237;
})();
var statearr_15238_15268 = state_15225__$1;
(statearr_15238_15268[(2)] = null);

(statearr_15238_15268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (9))){
var inst_15189 = (state_15225[(7)]);
var inst_15203 = cljs.core.vec.call(null,inst_15189);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15225__$1,(11),out,inst_15203);
} else {
if((state_val_15226 === (5))){
var inst_15198 = (state_15225[(11)]);
var inst_15189 = (state_15225[(7)]);
var inst_15190 = (state_15225[(8)]);
var inst_15193 = (state_15225[(9)]);
var inst_15197 = (inst_15189[inst_15190] = inst_15193);
var inst_15198__$1 = (inst_15190 + (1));
var inst_15199 = (inst_15198__$1 < n);
var state_15225__$1 = (function (){var statearr_15239 = state_15225;
(statearr_15239[(11)] = inst_15198__$1);

(statearr_15239[(12)] = inst_15197);

return statearr_15239;
})();
if(cljs.core.truth_(inst_15199)){
var statearr_15240_15269 = state_15225__$1;
(statearr_15240_15269[(1)] = (8));

} else {
var statearr_15241_15270 = state_15225__$1;
(statearr_15241_15270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (14))){
var inst_15218 = (state_15225[(2)]);
var inst_15219 = cljs.core.async.close_BANG_.call(null,out);
var state_15225__$1 = (function (){var statearr_15243 = state_15225;
(statearr_15243[(13)] = inst_15218);

return statearr_15243;
})();
var statearr_15244_15271 = state_15225__$1;
(statearr_15244_15271[(2)] = inst_15219);

(statearr_15244_15271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (10))){
var inst_15209 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15245_15272 = state_15225__$1;
(statearr_15245_15272[(2)] = inst_15209);

(statearr_15245_15272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (8))){
var inst_15198 = (state_15225[(11)]);
var inst_15189 = (state_15225[(7)]);
var tmp15242 = inst_15189;
var inst_15189__$1 = tmp15242;
var inst_15190 = inst_15198;
var state_15225__$1 = (function (){var statearr_15246 = state_15225;
(statearr_15246[(7)] = inst_15189__$1);

(statearr_15246[(8)] = inst_15190);

return statearr_15246;
})();
var statearr_15247_15273 = state_15225__$1;
(statearr_15247_15273[(2)] = null);

(statearr_15247_15273[(1)] = (2));


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
});})(c__12543__auto___15259,out))
;
return ((function (switch__12431__auto__,c__12543__auto___15259,out){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_15251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15251[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_15251[(1)] = (1));

return statearr_15251;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_15225){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_15225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e15252){if((e15252 instanceof Object)){
var ex__12435__auto__ = e15252;
var statearr_15253_15274 = state_15225;
(statearr_15253_15274[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15275 = state_15225;
state_15225 = G__15275;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_15225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_15225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___15259,out))
})();
var state__12545__auto__ = (function (){var statearr_15254 = f__12544__auto__.call(null);
(statearr_15254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___15259);

return statearr_15254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___15259,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15276 = [];
var len__11105__auto___15350 = arguments.length;
var i__11106__auto___15351 = (0);
while(true){
if((i__11106__auto___15351 < len__11105__auto___15350)){
args15276.push((arguments[i__11106__auto___15351]));

var G__15352 = (i__11106__auto___15351 + (1));
i__11106__auto___15351 = G__15352;
continue;
} else {
}
break;
}

var G__15278 = args15276.length;
switch (G__15278) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15276.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12543__auto___15354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___15354,out){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___15354,out){
return (function (state_15320){
var state_val_15321 = (state_15320[(1)]);
if((state_val_15321 === (7))){
var inst_15316 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
var statearr_15322_15355 = state_15320__$1;
(statearr_15322_15355[(2)] = inst_15316);

(statearr_15322_15355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (1))){
var inst_15279 = [];
var inst_15280 = inst_15279;
var inst_15281 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15320__$1 = (function (){var statearr_15323 = state_15320;
(statearr_15323[(7)] = inst_15280);

(statearr_15323[(8)] = inst_15281);

return statearr_15323;
})();
var statearr_15324_15356 = state_15320__$1;
(statearr_15324_15356[(2)] = null);

(statearr_15324_15356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (4))){
var inst_15284 = (state_15320[(9)]);
var inst_15284__$1 = (state_15320[(2)]);
var inst_15285 = (inst_15284__$1 == null);
var inst_15286 = cljs.core.not.call(null,inst_15285);
var state_15320__$1 = (function (){var statearr_15325 = state_15320;
(statearr_15325[(9)] = inst_15284__$1);

return statearr_15325;
})();
if(inst_15286){
var statearr_15326_15357 = state_15320__$1;
(statearr_15326_15357[(1)] = (5));

} else {
var statearr_15327_15358 = state_15320__$1;
(statearr_15327_15358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (15))){
var inst_15310 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
var statearr_15328_15359 = state_15320__$1;
(statearr_15328_15359[(2)] = inst_15310);

(statearr_15328_15359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (13))){
var state_15320__$1 = state_15320;
var statearr_15329_15360 = state_15320__$1;
(statearr_15329_15360[(2)] = null);

(statearr_15329_15360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (6))){
var inst_15280 = (state_15320[(7)]);
var inst_15305 = inst_15280.length;
var inst_15306 = (inst_15305 > (0));
var state_15320__$1 = state_15320;
if(cljs.core.truth_(inst_15306)){
var statearr_15330_15361 = state_15320__$1;
(statearr_15330_15361[(1)] = (12));

} else {
var statearr_15331_15362 = state_15320__$1;
(statearr_15331_15362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (3))){
var inst_15318 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15320__$1,inst_15318);
} else {
if((state_val_15321 === (12))){
var inst_15280 = (state_15320[(7)]);
var inst_15308 = cljs.core.vec.call(null,inst_15280);
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15320__$1,(15),out,inst_15308);
} else {
if((state_val_15321 === (2))){
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15320__$1,(4),ch);
} else {
if((state_val_15321 === (11))){
var inst_15288 = (state_15320[(10)]);
var inst_15284 = (state_15320[(9)]);
var inst_15298 = (state_15320[(2)]);
var inst_15299 = [];
var inst_15300 = inst_15299.push(inst_15284);
var inst_15280 = inst_15299;
var inst_15281 = inst_15288;
var state_15320__$1 = (function (){var statearr_15332 = state_15320;
(statearr_15332[(7)] = inst_15280);

(statearr_15332[(11)] = inst_15298);

(statearr_15332[(12)] = inst_15300);

(statearr_15332[(8)] = inst_15281);

return statearr_15332;
})();
var statearr_15333_15363 = state_15320__$1;
(statearr_15333_15363[(2)] = null);

(statearr_15333_15363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (9))){
var inst_15280 = (state_15320[(7)]);
var inst_15296 = cljs.core.vec.call(null,inst_15280);
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15320__$1,(11),out,inst_15296);
} else {
if((state_val_15321 === (5))){
var inst_15288 = (state_15320[(10)]);
var inst_15281 = (state_15320[(8)]);
var inst_15284 = (state_15320[(9)]);
var inst_15288__$1 = f.call(null,inst_15284);
var inst_15289 = cljs.core._EQ_.call(null,inst_15288__$1,inst_15281);
var inst_15290 = cljs.core.keyword_identical_QMARK_.call(null,inst_15281,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15291 = (inst_15289) || (inst_15290);
var state_15320__$1 = (function (){var statearr_15334 = state_15320;
(statearr_15334[(10)] = inst_15288__$1);

return statearr_15334;
})();
if(cljs.core.truth_(inst_15291)){
var statearr_15335_15364 = state_15320__$1;
(statearr_15335_15364[(1)] = (8));

} else {
var statearr_15336_15365 = state_15320__$1;
(statearr_15336_15365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (14))){
var inst_15313 = (state_15320[(2)]);
var inst_15314 = cljs.core.async.close_BANG_.call(null,out);
var state_15320__$1 = (function (){var statearr_15338 = state_15320;
(statearr_15338[(13)] = inst_15313);

return statearr_15338;
})();
var statearr_15339_15366 = state_15320__$1;
(statearr_15339_15366[(2)] = inst_15314);

(statearr_15339_15366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (10))){
var inst_15303 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
var statearr_15340_15367 = state_15320__$1;
(statearr_15340_15367[(2)] = inst_15303);

(statearr_15340_15367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (8))){
var inst_15288 = (state_15320[(10)]);
var inst_15280 = (state_15320[(7)]);
var inst_15284 = (state_15320[(9)]);
var inst_15293 = inst_15280.push(inst_15284);
var tmp15337 = inst_15280;
var inst_15280__$1 = tmp15337;
var inst_15281 = inst_15288;
var state_15320__$1 = (function (){var statearr_15341 = state_15320;
(statearr_15341[(7)] = inst_15280__$1);

(statearr_15341[(14)] = inst_15293);

(statearr_15341[(8)] = inst_15281);

return statearr_15341;
})();
var statearr_15342_15368 = state_15320__$1;
(statearr_15342_15368[(2)] = null);

(statearr_15342_15368[(1)] = (2));


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
});})(c__12543__auto___15354,out))
;
return ((function (switch__12431__auto__,c__12543__auto___15354,out){
return (function() {
var cljs$core$async$state_machine__12432__auto__ = null;
var cljs$core$async$state_machine__12432__auto____0 = (function (){
var statearr_15346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15346[(0)] = cljs$core$async$state_machine__12432__auto__);

(statearr_15346[(1)] = (1));

return statearr_15346;
});
var cljs$core$async$state_machine__12432__auto____1 = (function (state_15320){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_15320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e15347){if((e15347 instanceof Object)){
var ex__12435__auto__ = e15347;
var statearr_15348_15369 = state_15320;
(statearr_15348_15369[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15370 = state_15320;
state_15320 = G__15370;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
cljs$core$async$state_machine__12432__auto__ = function(state_15320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12432__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12432__auto____1.call(this,state_15320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12432__auto____0;
cljs$core$async$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12432__auto____1;
return cljs$core$async$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___15354,out))
})();
var state__12545__auto__ = (function (){var statearr_15349 = f__12544__auto__.call(null);
(statearr_15349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___15354);

return statearr_15349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___15354,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map