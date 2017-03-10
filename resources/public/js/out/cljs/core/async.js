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
var args53613 = [];
var len__48239__auto___53619 = arguments.length;
var i__48240__auto___53620 = (0);
while(true){
if((i__48240__auto___53620 < len__48239__auto___53619)){
args53613.push((arguments[i__48240__auto___53620]));

var G__53621 = (i__48240__auto___53620 + (1));
i__48240__auto___53620 = G__53621;
continue;
} else {
}
break;
}

var G__53615 = args53613.length;
switch (G__53615) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53613.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async53616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53616 = (function (f,blockable,meta53617){
this.f = f;
this.blockable = blockable;
this.meta53617 = meta53617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53618,meta53617__$1){
var self__ = this;
var _53618__$1 = this;
return (new cljs.core.async.t_cljs$core$async53616(self__.f,self__.blockable,meta53617__$1));
});

cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53618){
var self__ = this;
var _53618__$1 = this;
return self__.meta53617;
});

cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async53616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53617","meta53617",-625764503,null)], null);
});

cljs.core.async.t_cljs$core$async53616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53616";

cljs.core.async.t_cljs$core$async53616.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async53616");
});

cljs.core.async.__GT_t_cljs$core$async53616 = (function cljs$core$async$__GT_t_cljs$core$async53616(f__$1,blockable__$1,meta53617){
return (new cljs.core.async.t_cljs$core$async53616(f__$1,blockable__$1,meta53617));
});

}

return (new cljs.core.async.t_cljs$core$async53616(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args53625 = [];
var len__48239__auto___53628 = arguments.length;
var i__48240__auto___53629 = (0);
while(true){
if((i__48240__auto___53629 < len__48239__auto___53628)){
args53625.push((arguments[i__48240__auto___53629]));

var G__53630 = (i__48240__auto___53629 + (1));
i__48240__auto___53629 = G__53630;
continue;
} else {
}
break;
}

var G__53627 = args53625.length;
switch (G__53627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53625.length)].join('')));

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
var args53632 = [];
var len__48239__auto___53635 = arguments.length;
var i__48240__auto___53636 = (0);
while(true){
if((i__48240__auto___53636 < len__48239__auto___53635)){
args53632.push((arguments[i__48240__auto___53636]));

var G__53637 = (i__48240__auto___53636 + (1));
i__48240__auto___53636 = G__53637;
continue;
} else {
}
break;
}

var G__53634 = args53632.length;
switch (G__53634) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53632.length)].join('')));

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
var args53639 = [];
var len__48239__auto___53642 = arguments.length;
var i__48240__auto___53643 = (0);
while(true){
if((i__48240__auto___53643 < len__48239__auto___53642)){
args53639.push((arguments[i__48240__auto___53643]));

var G__53644 = (i__48240__auto___53643 + (1));
i__48240__auto___53643 = G__53644;
continue;
} else {
}
break;
}

var G__53641 = args53639.length;
switch (G__53641) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53639.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_53646 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_53646);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_53646,ret){
return (function (){
return fn1.call(null,val_53646);
});})(val_53646,ret))
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
var args53647 = [];
var len__48239__auto___53650 = arguments.length;
var i__48240__auto___53651 = (0);
while(true){
if((i__48240__auto___53651 < len__48239__auto___53650)){
args53647.push((arguments[i__48240__auto___53651]));

var G__53652 = (i__48240__auto___53651 + (1));
i__48240__auto___53651 = G__53652;
continue;
} else {
}
break;
}

var G__53649 = args53647.length;
switch (G__53649) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53647.length)].join('')));

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
var n__48049__auto___53654 = n;
var x_53655 = (0);
while(true){
if((x_53655 < n__48049__auto___53654)){
(a[x_53655] = (0));

var G__53656 = (x_53655 + (1));
x_53655 = G__53656;
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

var G__53657 = (i + (1));
i = G__53657;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async53661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53661 = (function (flag,meta53662){
this.flag = flag;
this.meta53662 = meta53662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53663,meta53662__$1){
var self__ = this;
var _53663__$1 = this;
return (new cljs.core.async.t_cljs$core$async53661(self__.flag,meta53662__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async53661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53663){
var self__ = this;
var _53663__$1 = this;
return self__.meta53662;
});})(flag))
;

cljs.core.async.t_cljs$core$async53661.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async53661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async53661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async53661.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53662","meta53662",-1167817580,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async53661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53661";

cljs.core.async.t_cljs$core$async53661.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async53661");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async53661 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53661(flag__$1,meta53662){
return (new cljs.core.async.t_cljs$core$async53661(flag__$1,meta53662));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async53661(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async53667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53667 = (function (flag,cb,meta53668){
this.flag = flag;
this.cb = cb;
this.meta53668 = meta53668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53669,meta53668__$1){
var self__ = this;
var _53669__$1 = this;
return (new cljs.core.async.t_cljs$core$async53667(self__.flag,self__.cb,meta53668__$1));
});

cljs.core.async.t_cljs$core$async53667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53669){
var self__ = this;
var _53669__$1 = this;
return self__.meta53668;
});

cljs.core.async.t_cljs$core$async53667.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async53667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async53667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async53667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53668","meta53668",1802047978,null)], null);
});

cljs.core.async.t_cljs$core$async53667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53667";

cljs.core.async.t_cljs$core$async53667.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async53667");
});

cljs.core.async.__GT_t_cljs$core$async53667 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53667(flag__$1,cb__$1,meta53668){
return (new cljs.core.async.t_cljs$core$async53667(flag__$1,cb__$1,meta53668));
});

}

return (new cljs.core.async.t_cljs$core$async53667(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__53670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53670_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53671_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53671_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__47131__auto__ = wport;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53672 = (i + (1));
i = G__53672;
continue;
}
} else {
return null;
}
break;
}
})();
var or__47131__auto__ = ret;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__47119__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__47119__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__47119__auto__;
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
var args__48246__auto__ = [];
var len__48239__auto___53678 = arguments.length;
var i__48240__auto___53679 = (0);
while(true){
if((i__48240__auto___53679 < len__48239__auto___53678)){
args__48246__auto__.push((arguments[i__48240__auto___53679]));

var G__53680 = (i__48240__auto___53679 + (1));
i__48240__auto___53679 = G__53680;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((1) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48247__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53675){
var map__53676 = p__53675;
var map__53676__$1 = ((((!((map__53676 == null)))?((((map__53676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53676):map__53676);
var opts = map__53676__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53673){
var G__53674 = cljs.core.first.call(null,seq53673);
var seq53673__$1 = cljs.core.next.call(null,seq53673);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53674,seq53673__$1);
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
var args53681 = [];
var len__48239__auto___53731 = arguments.length;
var i__48240__auto___53732 = (0);
while(true){
if((i__48240__auto___53732 < len__48239__auto___53731)){
args53681.push((arguments[i__48240__auto___53732]));

var G__53733 = (i__48240__auto___53732 + (1));
i__48240__auto___53732 = G__53733;
continue;
} else {
}
break;
}

var G__53683 = args53681.length;
switch (G__53683) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53681.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53568__auto___53735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___53735){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___53735){
return (function (state_53707){
var state_val_53708 = (state_53707[(1)]);
if((state_val_53708 === (7))){
var inst_53703 = (state_53707[(2)]);
var state_53707__$1 = state_53707;
var statearr_53709_53736 = state_53707__$1;
(statearr_53709_53736[(2)] = inst_53703);

(statearr_53709_53736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (1))){
var state_53707__$1 = state_53707;
var statearr_53710_53737 = state_53707__$1;
(statearr_53710_53737[(2)] = null);

(statearr_53710_53737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (4))){
var inst_53686 = (state_53707[(7)]);
var inst_53686__$1 = (state_53707[(2)]);
var inst_53687 = (inst_53686__$1 == null);
var state_53707__$1 = (function (){var statearr_53711 = state_53707;
(statearr_53711[(7)] = inst_53686__$1);

return statearr_53711;
})();
if(cljs.core.truth_(inst_53687)){
var statearr_53712_53738 = state_53707__$1;
(statearr_53712_53738[(1)] = (5));

} else {
var statearr_53713_53739 = state_53707__$1;
(statearr_53713_53739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (13))){
var state_53707__$1 = state_53707;
var statearr_53714_53740 = state_53707__$1;
(statearr_53714_53740[(2)] = null);

(statearr_53714_53740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (6))){
var inst_53686 = (state_53707[(7)]);
var state_53707__$1 = state_53707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53707__$1,(11),to,inst_53686);
} else {
if((state_val_53708 === (3))){
var inst_53705 = (state_53707[(2)]);
var state_53707__$1 = state_53707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53707__$1,inst_53705);
} else {
if((state_val_53708 === (12))){
var state_53707__$1 = state_53707;
var statearr_53715_53741 = state_53707__$1;
(statearr_53715_53741[(2)] = null);

(statearr_53715_53741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (2))){
var state_53707__$1 = state_53707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53707__$1,(4),from);
} else {
if((state_val_53708 === (11))){
var inst_53696 = (state_53707[(2)]);
var state_53707__$1 = state_53707;
if(cljs.core.truth_(inst_53696)){
var statearr_53716_53742 = state_53707__$1;
(statearr_53716_53742[(1)] = (12));

} else {
var statearr_53717_53743 = state_53707__$1;
(statearr_53717_53743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (9))){
var state_53707__$1 = state_53707;
var statearr_53718_53744 = state_53707__$1;
(statearr_53718_53744[(2)] = null);

(statearr_53718_53744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (5))){
var state_53707__$1 = state_53707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53719_53745 = state_53707__$1;
(statearr_53719_53745[(1)] = (8));

} else {
var statearr_53720_53746 = state_53707__$1;
(statearr_53720_53746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (14))){
var inst_53701 = (state_53707[(2)]);
var state_53707__$1 = state_53707;
var statearr_53721_53747 = state_53707__$1;
(statearr_53721_53747[(2)] = inst_53701);

(statearr_53721_53747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (10))){
var inst_53693 = (state_53707[(2)]);
var state_53707__$1 = state_53707;
var statearr_53722_53748 = state_53707__$1;
(statearr_53722_53748[(2)] = inst_53693);

(statearr_53722_53748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53708 === (8))){
var inst_53690 = cljs.core.async.close_BANG_.call(null,to);
var state_53707__$1 = state_53707;
var statearr_53723_53749 = state_53707__$1;
(statearr_53723_53749[(2)] = inst_53690);

(statearr_53723_53749[(1)] = (10));


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
});})(c__53568__auto___53735))
;
return ((function (switch__53456__auto__,c__53568__auto___53735){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_53727 = [null,null,null,null,null,null,null,null];
(statearr_53727[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_53727[(1)] = (1));

return statearr_53727;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_53707){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_53707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e53728){if((e53728 instanceof Object)){
var ex__53460__auto__ = e53728;
var statearr_53729_53750 = state_53707;
(statearr_53729_53750[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53751 = state_53707;
state_53707 = G__53751;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_53707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_53707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___53735))
})();
var state__53570__auto__ = (function (){var statearr_53730 = f__53569__auto__.call(null);
(statearr_53730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___53735);

return statearr_53730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___53735))
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
return (function (p__53939){
var vec__53940 = p__53939;
var v = cljs.core.nth.call(null,vec__53940,(0),null);
var p = cljs.core.nth.call(null,vec__53940,(1),null);
var job = vec__53940;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__53568__auto___54126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___54126,res,vec__53940,v,p,job,jobs,results){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___54126,res,vec__53940,v,p,job,jobs,results){
return (function (state_53947){
var state_val_53948 = (state_53947[(1)]);
if((state_val_53948 === (1))){
var state_53947__$1 = state_53947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53947__$1,(2),res,v);
} else {
if((state_val_53948 === (2))){
var inst_53944 = (state_53947[(2)]);
var inst_53945 = cljs.core.async.close_BANG_.call(null,res);
var state_53947__$1 = (function (){var statearr_53949 = state_53947;
(statearr_53949[(7)] = inst_53944);

return statearr_53949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53947__$1,inst_53945);
} else {
return null;
}
}
});})(c__53568__auto___54126,res,vec__53940,v,p,job,jobs,results))
;
return ((function (switch__53456__auto__,c__53568__auto___54126,res,vec__53940,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0 = (function (){
var statearr_53953 = [null,null,null,null,null,null,null,null];
(statearr_53953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__);

(statearr_53953[(1)] = (1));

return statearr_53953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1 = (function (state_53947){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_53947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e53954){if((e53954 instanceof Object)){
var ex__53460__auto__ = e53954;
var statearr_53955_54127 = state_53947;
(statearr_53955_54127[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54128 = state_53947;
state_53947 = G__54128;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = function(state_53947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1.call(this,state_53947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___54126,res,vec__53940,v,p,job,jobs,results))
})();
var state__53570__auto__ = (function (){var statearr_53956 = f__53569__auto__.call(null);
(statearr_53956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___54126);

return statearr_53956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___54126,res,vec__53940,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__53957){
var vec__53958 = p__53957;
var v = cljs.core.nth.call(null,vec__53958,(0),null);
var p = cljs.core.nth.call(null,vec__53958,(1),null);
var job = vec__53958;
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
var n__48049__auto___54129 = n;
var __54130 = (0);
while(true){
if((__54130 < n__48049__auto___54129)){
var G__53961_54131 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__53961_54131) {
case "compute":
var c__53568__auto___54133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54130,c__53568__auto___54133,G__53961_54131,n__48049__auto___54129,jobs,results,process,async){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (__54130,c__53568__auto___54133,G__53961_54131,n__48049__auto___54129,jobs,results,process,async){
return (function (state_53974){
var state_val_53975 = (state_53974[(1)]);
if((state_val_53975 === (1))){
var state_53974__$1 = state_53974;
var statearr_53976_54134 = state_53974__$1;
(statearr_53976_54134[(2)] = null);

(statearr_53976_54134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53975 === (2))){
var state_53974__$1 = state_53974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53974__$1,(4),jobs);
} else {
if((state_val_53975 === (3))){
var inst_53972 = (state_53974[(2)]);
var state_53974__$1 = state_53974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53974__$1,inst_53972);
} else {
if((state_val_53975 === (4))){
var inst_53964 = (state_53974[(2)]);
var inst_53965 = process.call(null,inst_53964);
var state_53974__$1 = state_53974;
if(cljs.core.truth_(inst_53965)){
var statearr_53977_54135 = state_53974__$1;
(statearr_53977_54135[(1)] = (5));

} else {
var statearr_53978_54136 = state_53974__$1;
(statearr_53978_54136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53975 === (5))){
var state_53974__$1 = state_53974;
var statearr_53979_54137 = state_53974__$1;
(statearr_53979_54137[(2)] = null);

(statearr_53979_54137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53975 === (6))){
var state_53974__$1 = state_53974;
var statearr_53980_54138 = state_53974__$1;
(statearr_53980_54138[(2)] = null);

(statearr_53980_54138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53975 === (7))){
var inst_53970 = (state_53974[(2)]);
var state_53974__$1 = state_53974;
var statearr_53981_54139 = state_53974__$1;
(statearr_53981_54139[(2)] = inst_53970);

(statearr_53981_54139[(1)] = (3));


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
});})(__54130,c__53568__auto___54133,G__53961_54131,n__48049__auto___54129,jobs,results,process,async))
;
return ((function (__54130,switch__53456__auto__,c__53568__auto___54133,G__53961_54131,n__48049__auto___54129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0 = (function (){
var statearr_53985 = [null,null,null,null,null,null,null];
(statearr_53985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__);

(statearr_53985[(1)] = (1));

return statearr_53985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1 = (function (state_53974){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_53974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e53986){if((e53986 instanceof Object)){
var ex__53460__auto__ = e53986;
var statearr_53987_54140 = state_53974;
(statearr_53987_54140[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54141 = state_53974;
state_53974 = G__54141;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = function(state_53974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1.call(this,state_53974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__;
})()
;})(__54130,switch__53456__auto__,c__53568__auto___54133,G__53961_54131,n__48049__auto___54129,jobs,results,process,async))
})();
var state__53570__auto__ = (function (){var statearr_53988 = f__53569__auto__.call(null);
(statearr_53988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___54133);

return statearr_53988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(__54130,c__53568__auto___54133,G__53961_54131,n__48049__auto___54129,jobs,results,process,async))
);


break;
case "async":
var c__53568__auto___54142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54130,c__53568__auto___54142,G__53961_54131,n__48049__auto___54129,jobs,results,process,async){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (__54130,c__53568__auto___54142,G__53961_54131,n__48049__auto___54129,jobs,results,process,async){
return (function (state_54001){
var state_val_54002 = (state_54001[(1)]);
if((state_val_54002 === (1))){
var state_54001__$1 = state_54001;
var statearr_54003_54143 = state_54001__$1;
(statearr_54003_54143[(2)] = null);

(statearr_54003_54143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54002 === (2))){
var state_54001__$1 = state_54001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54001__$1,(4),jobs);
} else {
if((state_val_54002 === (3))){
var inst_53999 = (state_54001[(2)]);
var state_54001__$1 = state_54001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54001__$1,inst_53999);
} else {
if((state_val_54002 === (4))){
var inst_53991 = (state_54001[(2)]);
var inst_53992 = async.call(null,inst_53991);
var state_54001__$1 = state_54001;
if(cljs.core.truth_(inst_53992)){
var statearr_54004_54144 = state_54001__$1;
(statearr_54004_54144[(1)] = (5));

} else {
var statearr_54005_54145 = state_54001__$1;
(statearr_54005_54145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54002 === (5))){
var state_54001__$1 = state_54001;
var statearr_54006_54146 = state_54001__$1;
(statearr_54006_54146[(2)] = null);

(statearr_54006_54146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54002 === (6))){
var state_54001__$1 = state_54001;
var statearr_54007_54147 = state_54001__$1;
(statearr_54007_54147[(2)] = null);

(statearr_54007_54147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54002 === (7))){
var inst_53997 = (state_54001[(2)]);
var state_54001__$1 = state_54001;
var statearr_54008_54148 = state_54001__$1;
(statearr_54008_54148[(2)] = inst_53997);

(statearr_54008_54148[(1)] = (3));


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
});})(__54130,c__53568__auto___54142,G__53961_54131,n__48049__auto___54129,jobs,results,process,async))
;
return ((function (__54130,switch__53456__auto__,c__53568__auto___54142,G__53961_54131,n__48049__auto___54129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0 = (function (){
var statearr_54012 = [null,null,null,null,null,null,null];
(statearr_54012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__);

(statearr_54012[(1)] = (1));

return statearr_54012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1 = (function (state_54001){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54013){if((e54013 instanceof Object)){
var ex__53460__auto__ = e54013;
var statearr_54014_54149 = state_54001;
(statearr_54014_54149[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54150 = state_54001;
state_54001 = G__54150;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = function(state_54001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1.call(this,state_54001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__;
})()
;})(__54130,switch__53456__auto__,c__53568__auto___54142,G__53961_54131,n__48049__auto___54129,jobs,results,process,async))
})();
var state__53570__auto__ = (function (){var statearr_54015 = f__53569__auto__.call(null);
(statearr_54015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___54142);

return statearr_54015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(__54130,c__53568__auto___54142,G__53961_54131,n__48049__auto___54129,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__54151 = (__54130 + (1));
__54130 = G__54151;
continue;
} else {
}
break;
}

var c__53568__auto___54152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___54152,jobs,results,process,async){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___54152,jobs,results,process,async){
return (function (state_54037){
var state_val_54038 = (state_54037[(1)]);
if((state_val_54038 === (1))){
var state_54037__$1 = state_54037;
var statearr_54039_54153 = state_54037__$1;
(statearr_54039_54153[(2)] = null);

(statearr_54039_54153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54038 === (2))){
var state_54037__$1 = state_54037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54037__$1,(4),from);
} else {
if((state_val_54038 === (3))){
var inst_54035 = (state_54037[(2)]);
var state_54037__$1 = state_54037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54037__$1,inst_54035);
} else {
if((state_val_54038 === (4))){
var inst_54018 = (state_54037[(7)]);
var inst_54018__$1 = (state_54037[(2)]);
var inst_54019 = (inst_54018__$1 == null);
var state_54037__$1 = (function (){var statearr_54040 = state_54037;
(statearr_54040[(7)] = inst_54018__$1);

return statearr_54040;
})();
if(cljs.core.truth_(inst_54019)){
var statearr_54041_54154 = state_54037__$1;
(statearr_54041_54154[(1)] = (5));

} else {
var statearr_54042_54155 = state_54037__$1;
(statearr_54042_54155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54038 === (5))){
var inst_54021 = cljs.core.async.close_BANG_.call(null,jobs);
var state_54037__$1 = state_54037;
var statearr_54043_54156 = state_54037__$1;
(statearr_54043_54156[(2)] = inst_54021);

(statearr_54043_54156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54038 === (6))){
var inst_54023 = (state_54037[(8)]);
var inst_54018 = (state_54037[(7)]);
var inst_54023__$1 = cljs.core.async.chan.call(null,(1));
var inst_54024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54025 = [inst_54018,inst_54023__$1];
var inst_54026 = (new cljs.core.PersistentVector(null,2,(5),inst_54024,inst_54025,null));
var state_54037__$1 = (function (){var statearr_54044 = state_54037;
(statearr_54044[(8)] = inst_54023__$1);

return statearr_54044;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54037__$1,(8),jobs,inst_54026);
} else {
if((state_val_54038 === (7))){
var inst_54033 = (state_54037[(2)]);
var state_54037__$1 = state_54037;
var statearr_54045_54157 = state_54037__$1;
(statearr_54045_54157[(2)] = inst_54033);

(statearr_54045_54157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54038 === (8))){
var inst_54023 = (state_54037[(8)]);
var inst_54028 = (state_54037[(2)]);
var state_54037__$1 = (function (){var statearr_54046 = state_54037;
(statearr_54046[(9)] = inst_54028);

return statearr_54046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54037__$1,(9),results,inst_54023);
} else {
if((state_val_54038 === (9))){
var inst_54030 = (state_54037[(2)]);
var state_54037__$1 = (function (){var statearr_54047 = state_54037;
(statearr_54047[(10)] = inst_54030);

return statearr_54047;
})();
var statearr_54048_54158 = state_54037__$1;
(statearr_54048_54158[(2)] = null);

(statearr_54048_54158[(1)] = (2));


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
});})(c__53568__auto___54152,jobs,results,process,async))
;
return ((function (switch__53456__auto__,c__53568__auto___54152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0 = (function (){
var statearr_54052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__);

(statearr_54052[(1)] = (1));

return statearr_54052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1 = (function (state_54037){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54053){if((e54053 instanceof Object)){
var ex__53460__auto__ = e54053;
var statearr_54054_54159 = state_54037;
(statearr_54054_54159[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54160 = state_54037;
state_54037 = G__54160;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = function(state_54037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1.call(this,state_54037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___54152,jobs,results,process,async))
})();
var state__53570__auto__ = (function (){var statearr_54055 = f__53569__auto__.call(null);
(statearr_54055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___54152);

return statearr_54055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___54152,jobs,results,process,async))
);


var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__,jobs,results,process,async){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__,jobs,results,process,async){
return (function (state_54093){
var state_val_54094 = (state_54093[(1)]);
if((state_val_54094 === (7))){
var inst_54089 = (state_54093[(2)]);
var state_54093__$1 = state_54093;
var statearr_54095_54161 = state_54093__$1;
(statearr_54095_54161[(2)] = inst_54089);

(statearr_54095_54161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (20))){
var state_54093__$1 = state_54093;
var statearr_54096_54162 = state_54093__$1;
(statearr_54096_54162[(2)] = null);

(statearr_54096_54162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (1))){
var state_54093__$1 = state_54093;
var statearr_54097_54163 = state_54093__$1;
(statearr_54097_54163[(2)] = null);

(statearr_54097_54163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (4))){
var inst_54058 = (state_54093[(7)]);
var inst_54058__$1 = (state_54093[(2)]);
var inst_54059 = (inst_54058__$1 == null);
var state_54093__$1 = (function (){var statearr_54098 = state_54093;
(statearr_54098[(7)] = inst_54058__$1);

return statearr_54098;
})();
if(cljs.core.truth_(inst_54059)){
var statearr_54099_54164 = state_54093__$1;
(statearr_54099_54164[(1)] = (5));

} else {
var statearr_54100_54165 = state_54093__$1;
(statearr_54100_54165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (15))){
var inst_54071 = (state_54093[(8)]);
var state_54093__$1 = state_54093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54093__$1,(18),to,inst_54071);
} else {
if((state_val_54094 === (21))){
var inst_54084 = (state_54093[(2)]);
var state_54093__$1 = state_54093;
var statearr_54101_54166 = state_54093__$1;
(statearr_54101_54166[(2)] = inst_54084);

(statearr_54101_54166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (13))){
var inst_54086 = (state_54093[(2)]);
var state_54093__$1 = (function (){var statearr_54102 = state_54093;
(statearr_54102[(9)] = inst_54086);

return statearr_54102;
})();
var statearr_54103_54167 = state_54093__$1;
(statearr_54103_54167[(2)] = null);

(statearr_54103_54167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (6))){
var inst_54058 = (state_54093[(7)]);
var state_54093__$1 = state_54093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54093__$1,(11),inst_54058);
} else {
if((state_val_54094 === (17))){
var inst_54079 = (state_54093[(2)]);
var state_54093__$1 = state_54093;
if(cljs.core.truth_(inst_54079)){
var statearr_54104_54168 = state_54093__$1;
(statearr_54104_54168[(1)] = (19));

} else {
var statearr_54105_54169 = state_54093__$1;
(statearr_54105_54169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (3))){
var inst_54091 = (state_54093[(2)]);
var state_54093__$1 = state_54093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54093__$1,inst_54091);
} else {
if((state_val_54094 === (12))){
var inst_54068 = (state_54093[(10)]);
var state_54093__$1 = state_54093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54093__$1,(14),inst_54068);
} else {
if((state_val_54094 === (2))){
var state_54093__$1 = state_54093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54093__$1,(4),results);
} else {
if((state_val_54094 === (19))){
var state_54093__$1 = state_54093;
var statearr_54106_54170 = state_54093__$1;
(statearr_54106_54170[(2)] = null);

(statearr_54106_54170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (11))){
var inst_54068 = (state_54093[(2)]);
var state_54093__$1 = (function (){var statearr_54107 = state_54093;
(statearr_54107[(10)] = inst_54068);

return statearr_54107;
})();
var statearr_54108_54171 = state_54093__$1;
(statearr_54108_54171[(2)] = null);

(statearr_54108_54171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (9))){
var state_54093__$1 = state_54093;
var statearr_54109_54172 = state_54093__$1;
(statearr_54109_54172[(2)] = null);

(statearr_54109_54172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (5))){
var state_54093__$1 = state_54093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54110_54173 = state_54093__$1;
(statearr_54110_54173[(1)] = (8));

} else {
var statearr_54111_54174 = state_54093__$1;
(statearr_54111_54174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (14))){
var inst_54073 = (state_54093[(11)]);
var inst_54071 = (state_54093[(8)]);
var inst_54071__$1 = (state_54093[(2)]);
var inst_54072 = (inst_54071__$1 == null);
var inst_54073__$1 = cljs.core.not.call(null,inst_54072);
var state_54093__$1 = (function (){var statearr_54112 = state_54093;
(statearr_54112[(11)] = inst_54073__$1);

(statearr_54112[(8)] = inst_54071__$1);

return statearr_54112;
})();
if(inst_54073__$1){
var statearr_54113_54175 = state_54093__$1;
(statearr_54113_54175[(1)] = (15));

} else {
var statearr_54114_54176 = state_54093__$1;
(statearr_54114_54176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (16))){
var inst_54073 = (state_54093[(11)]);
var state_54093__$1 = state_54093;
var statearr_54115_54177 = state_54093__$1;
(statearr_54115_54177[(2)] = inst_54073);

(statearr_54115_54177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (10))){
var inst_54065 = (state_54093[(2)]);
var state_54093__$1 = state_54093;
var statearr_54116_54178 = state_54093__$1;
(statearr_54116_54178[(2)] = inst_54065);

(statearr_54116_54178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (18))){
var inst_54076 = (state_54093[(2)]);
var state_54093__$1 = state_54093;
var statearr_54117_54179 = state_54093__$1;
(statearr_54117_54179[(2)] = inst_54076);

(statearr_54117_54179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54094 === (8))){
var inst_54062 = cljs.core.async.close_BANG_.call(null,to);
var state_54093__$1 = state_54093;
var statearr_54118_54180 = state_54093__$1;
(statearr_54118_54180[(2)] = inst_54062);

(statearr_54118_54180[(1)] = (10));


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
});})(c__53568__auto__,jobs,results,process,async))
;
return ((function (switch__53456__auto__,c__53568__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0 = (function (){
var statearr_54122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__);

(statearr_54122[(1)] = (1));

return statearr_54122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1 = (function (state_54093){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54123){if((e54123 instanceof Object)){
var ex__53460__auto__ = e54123;
var statearr_54124_54181 = state_54093;
(statearr_54124_54181[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54182 = state_54093;
state_54093 = G__54182;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__ = function(state_54093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1.call(this,state_54093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__,jobs,results,process,async))
})();
var state__53570__auto__ = (function (){var statearr_54125 = f__53569__auto__.call(null);
(statearr_54125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_54125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__,jobs,results,process,async))
);

return c__53568__auto__;
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
var args54183 = [];
var len__48239__auto___54186 = arguments.length;
var i__48240__auto___54187 = (0);
while(true){
if((i__48240__auto___54187 < len__48239__auto___54186)){
args54183.push((arguments[i__48240__auto___54187]));

var G__54188 = (i__48240__auto___54187 + (1));
i__48240__auto___54187 = G__54188;
continue;
} else {
}
break;
}

var G__54185 = args54183.length;
switch (G__54185) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54183.length)].join('')));

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
var args54190 = [];
var len__48239__auto___54193 = arguments.length;
var i__48240__auto___54194 = (0);
while(true){
if((i__48240__auto___54194 < len__48239__auto___54193)){
args54190.push((arguments[i__48240__auto___54194]));

var G__54195 = (i__48240__auto___54194 + (1));
i__48240__auto___54194 = G__54195;
continue;
} else {
}
break;
}

var G__54192 = args54190.length;
switch (G__54192) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54190.length)].join('')));

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
var args54197 = [];
var len__48239__auto___54250 = arguments.length;
var i__48240__auto___54251 = (0);
while(true){
if((i__48240__auto___54251 < len__48239__auto___54250)){
args54197.push((arguments[i__48240__auto___54251]));

var G__54252 = (i__48240__auto___54251 + (1));
i__48240__auto___54251 = G__54252;
continue;
} else {
}
break;
}

var G__54199 = args54197.length;
switch (G__54199) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54197.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__53568__auto___54254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___54254,tc,fc){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___54254,tc,fc){
return (function (state_54225){
var state_val_54226 = (state_54225[(1)]);
if((state_val_54226 === (7))){
var inst_54221 = (state_54225[(2)]);
var state_54225__$1 = state_54225;
var statearr_54227_54255 = state_54225__$1;
(statearr_54227_54255[(2)] = inst_54221);

(statearr_54227_54255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (1))){
var state_54225__$1 = state_54225;
var statearr_54228_54256 = state_54225__$1;
(statearr_54228_54256[(2)] = null);

(statearr_54228_54256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (4))){
var inst_54202 = (state_54225[(7)]);
var inst_54202__$1 = (state_54225[(2)]);
var inst_54203 = (inst_54202__$1 == null);
var state_54225__$1 = (function (){var statearr_54229 = state_54225;
(statearr_54229[(7)] = inst_54202__$1);

return statearr_54229;
})();
if(cljs.core.truth_(inst_54203)){
var statearr_54230_54257 = state_54225__$1;
(statearr_54230_54257[(1)] = (5));

} else {
var statearr_54231_54258 = state_54225__$1;
(statearr_54231_54258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (13))){
var state_54225__$1 = state_54225;
var statearr_54232_54259 = state_54225__$1;
(statearr_54232_54259[(2)] = null);

(statearr_54232_54259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (6))){
var inst_54202 = (state_54225[(7)]);
var inst_54208 = p.call(null,inst_54202);
var state_54225__$1 = state_54225;
if(cljs.core.truth_(inst_54208)){
var statearr_54233_54260 = state_54225__$1;
(statearr_54233_54260[(1)] = (9));

} else {
var statearr_54234_54261 = state_54225__$1;
(statearr_54234_54261[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (3))){
var inst_54223 = (state_54225[(2)]);
var state_54225__$1 = state_54225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54225__$1,inst_54223);
} else {
if((state_val_54226 === (12))){
var state_54225__$1 = state_54225;
var statearr_54235_54262 = state_54225__$1;
(statearr_54235_54262[(2)] = null);

(statearr_54235_54262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (2))){
var state_54225__$1 = state_54225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54225__$1,(4),ch);
} else {
if((state_val_54226 === (11))){
var inst_54202 = (state_54225[(7)]);
var inst_54212 = (state_54225[(2)]);
var state_54225__$1 = state_54225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54225__$1,(8),inst_54212,inst_54202);
} else {
if((state_val_54226 === (9))){
var state_54225__$1 = state_54225;
var statearr_54236_54263 = state_54225__$1;
(statearr_54236_54263[(2)] = tc);

(statearr_54236_54263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (5))){
var inst_54205 = cljs.core.async.close_BANG_.call(null,tc);
var inst_54206 = cljs.core.async.close_BANG_.call(null,fc);
var state_54225__$1 = (function (){var statearr_54237 = state_54225;
(statearr_54237[(8)] = inst_54205);

return statearr_54237;
})();
var statearr_54238_54264 = state_54225__$1;
(statearr_54238_54264[(2)] = inst_54206);

(statearr_54238_54264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (14))){
var inst_54219 = (state_54225[(2)]);
var state_54225__$1 = state_54225;
var statearr_54239_54265 = state_54225__$1;
(statearr_54239_54265[(2)] = inst_54219);

(statearr_54239_54265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (10))){
var state_54225__$1 = state_54225;
var statearr_54240_54266 = state_54225__$1;
(statearr_54240_54266[(2)] = fc);

(statearr_54240_54266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54226 === (8))){
var inst_54214 = (state_54225[(2)]);
var state_54225__$1 = state_54225;
if(cljs.core.truth_(inst_54214)){
var statearr_54241_54267 = state_54225__$1;
(statearr_54241_54267[(1)] = (12));

} else {
var statearr_54242_54268 = state_54225__$1;
(statearr_54242_54268[(1)] = (13));

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
});})(c__53568__auto___54254,tc,fc))
;
return ((function (switch__53456__auto__,c__53568__auto___54254,tc,fc){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_54246 = [null,null,null,null,null,null,null,null,null];
(statearr_54246[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_54246[(1)] = (1));

return statearr_54246;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_54225){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54247){if((e54247 instanceof Object)){
var ex__53460__auto__ = e54247;
var statearr_54248_54269 = state_54225;
(statearr_54248_54269[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54270 = state_54225;
state_54225 = G__54270;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_54225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_54225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___54254,tc,fc))
})();
var state__53570__auto__ = (function (){var statearr_54249 = f__53569__auto__.call(null);
(statearr_54249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___54254);

return statearr_54249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___54254,tc,fc))
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
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__){
return (function (state_54334){
var state_val_54335 = (state_54334[(1)]);
if((state_val_54335 === (7))){
var inst_54330 = (state_54334[(2)]);
var state_54334__$1 = state_54334;
var statearr_54336_54357 = state_54334__$1;
(statearr_54336_54357[(2)] = inst_54330);

(statearr_54336_54357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (1))){
var inst_54314 = init;
var state_54334__$1 = (function (){var statearr_54337 = state_54334;
(statearr_54337[(7)] = inst_54314);

return statearr_54337;
})();
var statearr_54338_54358 = state_54334__$1;
(statearr_54338_54358[(2)] = null);

(statearr_54338_54358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (4))){
var inst_54317 = (state_54334[(8)]);
var inst_54317__$1 = (state_54334[(2)]);
var inst_54318 = (inst_54317__$1 == null);
var state_54334__$1 = (function (){var statearr_54339 = state_54334;
(statearr_54339[(8)] = inst_54317__$1);

return statearr_54339;
})();
if(cljs.core.truth_(inst_54318)){
var statearr_54340_54359 = state_54334__$1;
(statearr_54340_54359[(1)] = (5));

} else {
var statearr_54341_54360 = state_54334__$1;
(statearr_54341_54360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (6))){
var inst_54314 = (state_54334[(7)]);
var inst_54321 = (state_54334[(9)]);
var inst_54317 = (state_54334[(8)]);
var inst_54321__$1 = f.call(null,inst_54314,inst_54317);
var inst_54322 = cljs.core.reduced_QMARK_.call(null,inst_54321__$1);
var state_54334__$1 = (function (){var statearr_54342 = state_54334;
(statearr_54342[(9)] = inst_54321__$1);

return statearr_54342;
})();
if(inst_54322){
var statearr_54343_54361 = state_54334__$1;
(statearr_54343_54361[(1)] = (8));

} else {
var statearr_54344_54362 = state_54334__$1;
(statearr_54344_54362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (3))){
var inst_54332 = (state_54334[(2)]);
var state_54334__$1 = state_54334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54334__$1,inst_54332);
} else {
if((state_val_54335 === (2))){
var state_54334__$1 = state_54334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54334__$1,(4),ch);
} else {
if((state_val_54335 === (9))){
var inst_54321 = (state_54334[(9)]);
var inst_54314 = inst_54321;
var state_54334__$1 = (function (){var statearr_54345 = state_54334;
(statearr_54345[(7)] = inst_54314);

return statearr_54345;
})();
var statearr_54346_54363 = state_54334__$1;
(statearr_54346_54363[(2)] = null);

(statearr_54346_54363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (5))){
var inst_54314 = (state_54334[(7)]);
var state_54334__$1 = state_54334;
var statearr_54347_54364 = state_54334__$1;
(statearr_54347_54364[(2)] = inst_54314);

(statearr_54347_54364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (10))){
var inst_54328 = (state_54334[(2)]);
var state_54334__$1 = state_54334;
var statearr_54348_54365 = state_54334__$1;
(statearr_54348_54365[(2)] = inst_54328);

(statearr_54348_54365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54335 === (8))){
var inst_54321 = (state_54334[(9)]);
var inst_54324 = cljs.core.deref.call(null,inst_54321);
var state_54334__$1 = state_54334;
var statearr_54349_54366 = state_54334__$1;
(statearr_54349_54366[(2)] = inst_54324);

(statearr_54349_54366[(1)] = (10));


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
});})(c__53568__auto__))
;
return ((function (switch__53456__auto__,c__53568__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__53457__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53457__auto____0 = (function (){
var statearr_54353 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54353[(0)] = cljs$core$async$reduce_$_state_machine__53457__auto__);

(statearr_54353[(1)] = (1));

return statearr_54353;
});
var cljs$core$async$reduce_$_state_machine__53457__auto____1 = (function (state_54334){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54354){if((e54354 instanceof Object)){
var ex__53460__auto__ = e54354;
var statearr_54355_54367 = state_54334;
(statearr_54355_54367[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54368 = state_54334;
state_54334 = G__54368;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53457__auto__ = function(state_54334){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53457__auto____1.call(this,state_54334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53457__auto____0;
cljs$core$async$reduce_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53457__auto____1;
return cljs$core$async$reduce_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__))
})();
var state__53570__auto__ = (function (){var statearr_54356 = f__53569__auto__.call(null);
(statearr_54356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_54356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__))
);

return c__53568__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__,f__$1){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__,f__$1){
return (function (state_54388){
var state_val_54389 = (state_54388[(1)]);
if((state_val_54389 === (1))){
var inst_54383 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_54388__$1 = state_54388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54388__$1,(2),inst_54383);
} else {
if((state_val_54389 === (2))){
var inst_54385 = (state_54388[(2)]);
var inst_54386 = f__$1.call(null,inst_54385);
var state_54388__$1 = state_54388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54388__$1,inst_54386);
} else {
return null;
}
}
});})(c__53568__auto__,f__$1))
;
return ((function (switch__53456__auto__,c__53568__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__53457__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53457__auto____0 = (function (){
var statearr_54393 = [null,null,null,null,null,null,null];
(statearr_54393[(0)] = cljs$core$async$transduce_$_state_machine__53457__auto__);

(statearr_54393[(1)] = (1));

return statearr_54393;
});
var cljs$core$async$transduce_$_state_machine__53457__auto____1 = (function (state_54388){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54394){if((e54394 instanceof Object)){
var ex__53460__auto__ = e54394;
var statearr_54395_54397 = state_54388;
(statearr_54395_54397[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54398 = state_54388;
state_54388 = G__54398;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53457__auto__ = function(state_54388){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53457__auto____1.call(this,state_54388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53457__auto____0;
cljs$core$async$transduce_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53457__auto____1;
return cljs$core$async$transduce_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__,f__$1))
})();
var state__53570__auto__ = (function (){var statearr_54396 = f__53569__auto__.call(null);
(statearr_54396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_54396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__,f__$1))
);

return c__53568__auto__;
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
var args54399 = [];
var len__48239__auto___54451 = arguments.length;
var i__48240__auto___54452 = (0);
while(true){
if((i__48240__auto___54452 < len__48239__auto___54451)){
args54399.push((arguments[i__48240__auto___54452]));

var G__54453 = (i__48240__auto___54452 + (1));
i__48240__auto___54452 = G__54453;
continue;
} else {
}
break;
}

var G__54401 = args54399.length;
switch (G__54401) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54399.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__){
return (function (state_54426){
var state_val_54427 = (state_54426[(1)]);
if((state_val_54427 === (7))){
var inst_54408 = (state_54426[(2)]);
var state_54426__$1 = state_54426;
var statearr_54428_54455 = state_54426__$1;
(statearr_54428_54455[(2)] = inst_54408);

(statearr_54428_54455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (1))){
var inst_54402 = cljs.core.seq.call(null,coll);
var inst_54403 = inst_54402;
var state_54426__$1 = (function (){var statearr_54429 = state_54426;
(statearr_54429[(7)] = inst_54403);

return statearr_54429;
})();
var statearr_54430_54456 = state_54426__$1;
(statearr_54430_54456[(2)] = null);

(statearr_54430_54456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (4))){
var inst_54403 = (state_54426[(7)]);
var inst_54406 = cljs.core.first.call(null,inst_54403);
var state_54426__$1 = state_54426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54426__$1,(7),ch,inst_54406);
} else {
if((state_val_54427 === (13))){
var inst_54420 = (state_54426[(2)]);
var state_54426__$1 = state_54426;
var statearr_54431_54457 = state_54426__$1;
(statearr_54431_54457[(2)] = inst_54420);

(statearr_54431_54457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (6))){
var inst_54411 = (state_54426[(2)]);
var state_54426__$1 = state_54426;
if(cljs.core.truth_(inst_54411)){
var statearr_54432_54458 = state_54426__$1;
(statearr_54432_54458[(1)] = (8));

} else {
var statearr_54433_54459 = state_54426__$1;
(statearr_54433_54459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (3))){
var inst_54424 = (state_54426[(2)]);
var state_54426__$1 = state_54426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54426__$1,inst_54424);
} else {
if((state_val_54427 === (12))){
var state_54426__$1 = state_54426;
var statearr_54434_54460 = state_54426__$1;
(statearr_54434_54460[(2)] = null);

(statearr_54434_54460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (2))){
var inst_54403 = (state_54426[(7)]);
var state_54426__$1 = state_54426;
if(cljs.core.truth_(inst_54403)){
var statearr_54435_54461 = state_54426__$1;
(statearr_54435_54461[(1)] = (4));

} else {
var statearr_54436_54462 = state_54426__$1;
(statearr_54436_54462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (11))){
var inst_54417 = cljs.core.async.close_BANG_.call(null,ch);
var state_54426__$1 = state_54426;
var statearr_54437_54463 = state_54426__$1;
(statearr_54437_54463[(2)] = inst_54417);

(statearr_54437_54463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (9))){
var state_54426__$1 = state_54426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54438_54464 = state_54426__$1;
(statearr_54438_54464[(1)] = (11));

} else {
var statearr_54439_54465 = state_54426__$1;
(statearr_54439_54465[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (5))){
var inst_54403 = (state_54426[(7)]);
var state_54426__$1 = state_54426;
var statearr_54440_54466 = state_54426__$1;
(statearr_54440_54466[(2)] = inst_54403);

(statearr_54440_54466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (10))){
var inst_54422 = (state_54426[(2)]);
var state_54426__$1 = state_54426;
var statearr_54441_54467 = state_54426__$1;
(statearr_54441_54467[(2)] = inst_54422);

(statearr_54441_54467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54427 === (8))){
var inst_54403 = (state_54426[(7)]);
var inst_54413 = cljs.core.next.call(null,inst_54403);
var inst_54403__$1 = inst_54413;
var state_54426__$1 = (function (){var statearr_54442 = state_54426;
(statearr_54442[(7)] = inst_54403__$1);

return statearr_54442;
})();
var statearr_54443_54468 = state_54426__$1;
(statearr_54443_54468[(2)] = null);

(statearr_54443_54468[(1)] = (2));


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
});})(c__53568__auto__))
;
return ((function (switch__53456__auto__,c__53568__auto__){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_54447 = [null,null,null,null,null,null,null,null];
(statearr_54447[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_54447[(1)] = (1));

return statearr_54447;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_54426){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54448){if((e54448 instanceof Object)){
var ex__53460__auto__ = e54448;
var statearr_54449_54469 = state_54426;
(statearr_54449_54469[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54470 = state_54426;
state_54426 = G__54470;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_54426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_54426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__))
})();
var state__53570__auto__ = (function (){var statearr_54450 = f__53569__auto__.call(null);
(statearr_54450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_54450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__))
);

return c__53568__auto__;
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
var x__47794__auto__ = (((_ == null))?null:_);
var m__47795__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,_);
} else {
var m__47795__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,_);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__47795__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m,ch);
} else {
var m__47795__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m,ch);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m);
} else {
var m__47795__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async54696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54696 = (function (ch,cs,meta54697){
this.ch = ch;
this.cs = cs;
this.meta54697 = meta54697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54698,meta54697__$1){
var self__ = this;
var _54698__$1 = this;
return (new cljs.core.async.t_cljs$core$async54696(self__.ch,self__.cs,meta54697__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54698){
var self__ = this;
var _54698__$1 = this;
return self__.meta54697;
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54697","meta54697",-607939933,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async54696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54696";

cljs.core.async.t_cljs$core$async54696.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async54696");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async54696 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async54696(ch__$1,cs__$1,meta54697){
return (new cljs.core.async.t_cljs$core$async54696(ch__$1,cs__$1,meta54697));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async54696(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__53568__auto___54921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___54921,cs,m,dchan,dctr,done){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___54921,cs,m,dchan,dctr,done){
return (function (state_54833){
var state_val_54834 = (state_54833[(1)]);
if((state_val_54834 === (7))){
var inst_54829 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54835_54922 = state_54833__$1;
(statearr_54835_54922[(2)] = inst_54829);

(statearr_54835_54922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (20))){
var inst_54732 = (state_54833[(7)]);
var inst_54744 = cljs.core.first.call(null,inst_54732);
var inst_54745 = cljs.core.nth.call(null,inst_54744,(0),null);
var inst_54746 = cljs.core.nth.call(null,inst_54744,(1),null);
var state_54833__$1 = (function (){var statearr_54836 = state_54833;
(statearr_54836[(8)] = inst_54745);

return statearr_54836;
})();
if(cljs.core.truth_(inst_54746)){
var statearr_54837_54923 = state_54833__$1;
(statearr_54837_54923[(1)] = (22));

} else {
var statearr_54838_54924 = state_54833__$1;
(statearr_54838_54924[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (27))){
var inst_54774 = (state_54833[(9)]);
var inst_54776 = (state_54833[(10)]);
var inst_54781 = (state_54833[(11)]);
var inst_54701 = (state_54833[(12)]);
var inst_54781__$1 = cljs.core._nth.call(null,inst_54774,inst_54776);
var inst_54782 = cljs.core.async.put_BANG_.call(null,inst_54781__$1,inst_54701,done);
var state_54833__$1 = (function (){var statearr_54839 = state_54833;
(statearr_54839[(11)] = inst_54781__$1);

return statearr_54839;
})();
if(cljs.core.truth_(inst_54782)){
var statearr_54840_54925 = state_54833__$1;
(statearr_54840_54925[(1)] = (30));

} else {
var statearr_54841_54926 = state_54833__$1;
(statearr_54841_54926[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (1))){
var state_54833__$1 = state_54833;
var statearr_54842_54927 = state_54833__$1;
(statearr_54842_54927[(2)] = null);

(statearr_54842_54927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (24))){
var inst_54732 = (state_54833[(7)]);
var inst_54751 = (state_54833[(2)]);
var inst_54752 = cljs.core.next.call(null,inst_54732);
var inst_54710 = inst_54752;
var inst_54711 = null;
var inst_54712 = (0);
var inst_54713 = (0);
var state_54833__$1 = (function (){var statearr_54843 = state_54833;
(statearr_54843[(13)] = inst_54711);

(statearr_54843[(14)] = inst_54712);

(statearr_54843[(15)] = inst_54713);

(statearr_54843[(16)] = inst_54710);

(statearr_54843[(17)] = inst_54751);

return statearr_54843;
})();
var statearr_54844_54928 = state_54833__$1;
(statearr_54844_54928[(2)] = null);

(statearr_54844_54928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (39))){
var state_54833__$1 = state_54833;
var statearr_54848_54929 = state_54833__$1;
(statearr_54848_54929[(2)] = null);

(statearr_54848_54929[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (4))){
var inst_54701 = (state_54833[(12)]);
var inst_54701__$1 = (state_54833[(2)]);
var inst_54702 = (inst_54701__$1 == null);
var state_54833__$1 = (function (){var statearr_54849 = state_54833;
(statearr_54849[(12)] = inst_54701__$1);

return statearr_54849;
})();
if(cljs.core.truth_(inst_54702)){
var statearr_54850_54930 = state_54833__$1;
(statearr_54850_54930[(1)] = (5));

} else {
var statearr_54851_54931 = state_54833__$1;
(statearr_54851_54931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (15))){
var inst_54711 = (state_54833[(13)]);
var inst_54712 = (state_54833[(14)]);
var inst_54713 = (state_54833[(15)]);
var inst_54710 = (state_54833[(16)]);
var inst_54728 = (state_54833[(2)]);
var inst_54729 = (inst_54713 + (1));
var tmp54845 = inst_54711;
var tmp54846 = inst_54712;
var tmp54847 = inst_54710;
var inst_54710__$1 = tmp54847;
var inst_54711__$1 = tmp54845;
var inst_54712__$1 = tmp54846;
var inst_54713__$1 = inst_54729;
var state_54833__$1 = (function (){var statearr_54852 = state_54833;
(statearr_54852[(13)] = inst_54711__$1);

(statearr_54852[(14)] = inst_54712__$1);

(statearr_54852[(15)] = inst_54713__$1);

(statearr_54852[(16)] = inst_54710__$1);

(statearr_54852[(18)] = inst_54728);

return statearr_54852;
})();
var statearr_54853_54932 = state_54833__$1;
(statearr_54853_54932[(2)] = null);

(statearr_54853_54932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (21))){
var inst_54755 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54857_54933 = state_54833__$1;
(statearr_54857_54933[(2)] = inst_54755);

(statearr_54857_54933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (31))){
var inst_54781 = (state_54833[(11)]);
var inst_54785 = done.call(null,null);
var inst_54786 = cljs.core.async.untap_STAR_.call(null,m,inst_54781);
var state_54833__$1 = (function (){var statearr_54858 = state_54833;
(statearr_54858[(19)] = inst_54785);

return statearr_54858;
})();
var statearr_54859_54934 = state_54833__$1;
(statearr_54859_54934[(2)] = inst_54786);

(statearr_54859_54934[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (32))){
var inst_54774 = (state_54833[(9)]);
var inst_54775 = (state_54833[(20)]);
var inst_54773 = (state_54833[(21)]);
var inst_54776 = (state_54833[(10)]);
var inst_54788 = (state_54833[(2)]);
var inst_54789 = (inst_54776 + (1));
var tmp54854 = inst_54774;
var tmp54855 = inst_54775;
var tmp54856 = inst_54773;
var inst_54773__$1 = tmp54856;
var inst_54774__$1 = tmp54854;
var inst_54775__$1 = tmp54855;
var inst_54776__$1 = inst_54789;
var state_54833__$1 = (function (){var statearr_54860 = state_54833;
(statearr_54860[(9)] = inst_54774__$1);

(statearr_54860[(20)] = inst_54775__$1);

(statearr_54860[(21)] = inst_54773__$1);

(statearr_54860[(22)] = inst_54788);

(statearr_54860[(10)] = inst_54776__$1);

return statearr_54860;
})();
var statearr_54861_54935 = state_54833__$1;
(statearr_54861_54935[(2)] = null);

(statearr_54861_54935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (40))){
var inst_54801 = (state_54833[(23)]);
var inst_54805 = done.call(null,null);
var inst_54806 = cljs.core.async.untap_STAR_.call(null,m,inst_54801);
var state_54833__$1 = (function (){var statearr_54862 = state_54833;
(statearr_54862[(24)] = inst_54805);

return statearr_54862;
})();
var statearr_54863_54936 = state_54833__$1;
(statearr_54863_54936[(2)] = inst_54806);

(statearr_54863_54936[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (33))){
var inst_54792 = (state_54833[(25)]);
var inst_54794 = cljs.core.chunked_seq_QMARK_.call(null,inst_54792);
var state_54833__$1 = state_54833;
if(inst_54794){
var statearr_54864_54937 = state_54833__$1;
(statearr_54864_54937[(1)] = (36));

} else {
var statearr_54865_54938 = state_54833__$1;
(statearr_54865_54938[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (13))){
var inst_54722 = (state_54833[(26)]);
var inst_54725 = cljs.core.async.close_BANG_.call(null,inst_54722);
var state_54833__$1 = state_54833;
var statearr_54866_54939 = state_54833__$1;
(statearr_54866_54939[(2)] = inst_54725);

(statearr_54866_54939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (22))){
var inst_54745 = (state_54833[(8)]);
var inst_54748 = cljs.core.async.close_BANG_.call(null,inst_54745);
var state_54833__$1 = state_54833;
var statearr_54867_54940 = state_54833__$1;
(statearr_54867_54940[(2)] = inst_54748);

(statearr_54867_54940[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (36))){
var inst_54792 = (state_54833[(25)]);
var inst_54796 = cljs.core.chunk_first.call(null,inst_54792);
var inst_54797 = cljs.core.chunk_rest.call(null,inst_54792);
var inst_54798 = cljs.core.count.call(null,inst_54796);
var inst_54773 = inst_54797;
var inst_54774 = inst_54796;
var inst_54775 = inst_54798;
var inst_54776 = (0);
var state_54833__$1 = (function (){var statearr_54868 = state_54833;
(statearr_54868[(9)] = inst_54774);

(statearr_54868[(20)] = inst_54775);

(statearr_54868[(21)] = inst_54773);

(statearr_54868[(10)] = inst_54776);

return statearr_54868;
})();
var statearr_54869_54941 = state_54833__$1;
(statearr_54869_54941[(2)] = null);

(statearr_54869_54941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (41))){
var inst_54792 = (state_54833[(25)]);
var inst_54808 = (state_54833[(2)]);
var inst_54809 = cljs.core.next.call(null,inst_54792);
var inst_54773 = inst_54809;
var inst_54774 = null;
var inst_54775 = (0);
var inst_54776 = (0);
var state_54833__$1 = (function (){var statearr_54870 = state_54833;
(statearr_54870[(9)] = inst_54774);

(statearr_54870[(20)] = inst_54775);

(statearr_54870[(21)] = inst_54773);

(statearr_54870[(27)] = inst_54808);

(statearr_54870[(10)] = inst_54776);

return statearr_54870;
})();
var statearr_54871_54942 = state_54833__$1;
(statearr_54871_54942[(2)] = null);

(statearr_54871_54942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (43))){
var state_54833__$1 = state_54833;
var statearr_54872_54943 = state_54833__$1;
(statearr_54872_54943[(2)] = null);

(statearr_54872_54943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (29))){
var inst_54817 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54873_54944 = state_54833__$1;
(statearr_54873_54944[(2)] = inst_54817);

(statearr_54873_54944[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (44))){
var inst_54826 = (state_54833[(2)]);
var state_54833__$1 = (function (){var statearr_54874 = state_54833;
(statearr_54874[(28)] = inst_54826);

return statearr_54874;
})();
var statearr_54875_54945 = state_54833__$1;
(statearr_54875_54945[(2)] = null);

(statearr_54875_54945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (6))){
var inst_54765 = (state_54833[(29)]);
var inst_54764 = cljs.core.deref.call(null,cs);
var inst_54765__$1 = cljs.core.keys.call(null,inst_54764);
var inst_54766 = cljs.core.count.call(null,inst_54765__$1);
var inst_54767 = cljs.core.reset_BANG_.call(null,dctr,inst_54766);
var inst_54772 = cljs.core.seq.call(null,inst_54765__$1);
var inst_54773 = inst_54772;
var inst_54774 = null;
var inst_54775 = (0);
var inst_54776 = (0);
var state_54833__$1 = (function (){var statearr_54876 = state_54833;
(statearr_54876[(30)] = inst_54767);

(statearr_54876[(9)] = inst_54774);

(statearr_54876[(20)] = inst_54775);

(statearr_54876[(21)] = inst_54773);

(statearr_54876[(29)] = inst_54765__$1);

(statearr_54876[(10)] = inst_54776);

return statearr_54876;
})();
var statearr_54877_54946 = state_54833__$1;
(statearr_54877_54946[(2)] = null);

(statearr_54877_54946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (28))){
var inst_54773 = (state_54833[(21)]);
var inst_54792 = (state_54833[(25)]);
var inst_54792__$1 = cljs.core.seq.call(null,inst_54773);
var state_54833__$1 = (function (){var statearr_54878 = state_54833;
(statearr_54878[(25)] = inst_54792__$1);

return statearr_54878;
})();
if(inst_54792__$1){
var statearr_54879_54947 = state_54833__$1;
(statearr_54879_54947[(1)] = (33));

} else {
var statearr_54880_54948 = state_54833__$1;
(statearr_54880_54948[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (25))){
var inst_54775 = (state_54833[(20)]);
var inst_54776 = (state_54833[(10)]);
var inst_54778 = (inst_54776 < inst_54775);
var inst_54779 = inst_54778;
var state_54833__$1 = state_54833;
if(cljs.core.truth_(inst_54779)){
var statearr_54881_54949 = state_54833__$1;
(statearr_54881_54949[(1)] = (27));

} else {
var statearr_54882_54950 = state_54833__$1;
(statearr_54882_54950[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (34))){
var state_54833__$1 = state_54833;
var statearr_54883_54951 = state_54833__$1;
(statearr_54883_54951[(2)] = null);

(statearr_54883_54951[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (17))){
var state_54833__$1 = state_54833;
var statearr_54884_54952 = state_54833__$1;
(statearr_54884_54952[(2)] = null);

(statearr_54884_54952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (3))){
var inst_54831 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54833__$1,inst_54831);
} else {
if((state_val_54834 === (12))){
var inst_54760 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54885_54953 = state_54833__$1;
(statearr_54885_54953[(2)] = inst_54760);

(statearr_54885_54953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (2))){
var state_54833__$1 = state_54833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54833__$1,(4),ch);
} else {
if((state_val_54834 === (23))){
var state_54833__$1 = state_54833;
var statearr_54886_54954 = state_54833__$1;
(statearr_54886_54954[(2)] = null);

(statearr_54886_54954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (35))){
var inst_54815 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54887_54955 = state_54833__$1;
(statearr_54887_54955[(2)] = inst_54815);

(statearr_54887_54955[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (19))){
var inst_54732 = (state_54833[(7)]);
var inst_54736 = cljs.core.chunk_first.call(null,inst_54732);
var inst_54737 = cljs.core.chunk_rest.call(null,inst_54732);
var inst_54738 = cljs.core.count.call(null,inst_54736);
var inst_54710 = inst_54737;
var inst_54711 = inst_54736;
var inst_54712 = inst_54738;
var inst_54713 = (0);
var state_54833__$1 = (function (){var statearr_54888 = state_54833;
(statearr_54888[(13)] = inst_54711);

(statearr_54888[(14)] = inst_54712);

(statearr_54888[(15)] = inst_54713);

(statearr_54888[(16)] = inst_54710);

return statearr_54888;
})();
var statearr_54889_54956 = state_54833__$1;
(statearr_54889_54956[(2)] = null);

(statearr_54889_54956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (11))){
var inst_54732 = (state_54833[(7)]);
var inst_54710 = (state_54833[(16)]);
var inst_54732__$1 = cljs.core.seq.call(null,inst_54710);
var state_54833__$1 = (function (){var statearr_54890 = state_54833;
(statearr_54890[(7)] = inst_54732__$1);

return statearr_54890;
})();
if(inst_54732__$1){
var statearr_54891_54957 = state_54833__$1;
(statearr_54891_54957[(1)] = (16));

} else {
var statearr_54892_54958 = state_54833__$1;
(statearr_54892_54958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (9))){
var inst_54762 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54893_54959 = state_54833__$1;
(statearr_54893_54959[(2)] = inst_54762);

(statearr_54893_54959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (5))){
var inst_54708 = cljs.core.deref.call(null,cs);
var inst_54709 = cljs.core.seq.call(null,inst_54708);
var inst_54710 = inst_54709;
var inst_54711 = null;
var inst_54712 = (0);
var inst_54713 = (0);
var state_54833__$1 = (function (){var statearr_54894 = state_54833;
(statearr_54894[(13)] = inst_54711);

(statearr_54894[(14)] = inst_54712);

(statearr_54894[(15)] = inst_54713);

(statearr_54894[(16)] = inst_54710);

return statearr_54894;
})();
var statearr_54895_54960 = state_54833__$1;
(statearr_54895_54960[(2)] = null);

(statearr_54895_54960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (14))){
var state_54833__$1 = state_54833;
var statearr_54896_54961 = state_54833__$1;
(statearr_54896_54961[(2)] = null);

(statearr_54896_54961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (45))){
var inst_54823 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54897_54962 = state_54833__$1;
(statearr_54897_54962[(2)] = inst_54823);

(statearr_54897_54962[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (26))){
var inst_54765 = (state_54833[(29)]);
var inst_54819 = (state_54833[(2)]);
var inst_54820 = cljs.core.seq.call(null,inst_54765);
var state_54833__$1 = (function (){var statearr_54898 = state_54833;
(statearr_54898[(31)] = inst_54819);

return statearr_54898;
})();
if(inst_54820){
var statearr_54899_54963 = state_54833__$1;
(statearr_54899_54963[(1)] = (42));

} else {
var statearr_54900_54964 = state_54833__$1;
(statearr_54900_54964[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (16))){
var inst_54732 = (state_54833[(7)]);
var inst_54734 = cljs.core.chunked_seq_QMARK_.call(null,inst_54732);
var state_54833__$1 = state_54833;
if(inst_54734){
var statearr_54901_54965 = state_54833__$1;
(statearr_54901_54965[(1)] = (19));

} else {
var statearr_54902_54966 = state_54833__$1;
(statearr_54902_54966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (38))){
var inst_54812 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54903_54967 = state_54833__$1;
(statearr_54903_54967[(2)] = inst_54812);

(statearr_54903_54967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (30))){
var state_54833__$1 = state_54833;
var statearr_54904_54968 = state_54833__$1;
(statearr_54904_54968[(2)] = null);

(statearr_54904_54968[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (10))){
var inst_54711 = (state_54833[(13)]);
var inst_54713 = (state_54833[(15)]);
var inst_54721 = cljs.core._nth.call(null,inst_54711,inst_54713);
var inst_54722 = cljs.core.nth.call(null,inst_54721,(0),null);
var inst_54723 = cljs.core.nth.call(null,inst_54721,(1),null);
var state_54833__$1 = (function (){var statearr_54905 = state_54833;
(statearr_54905[(26)] = inst_54722);

return statearr_54905;
})();
if(cljs.core.truth_(inst_54723)){
var statearr_54906_54969 = state_54833__$1;
(statearr_54906_54969[(1)] = (13));

} else {
var statearr_54907_54970 = state_54833__$1;
(statearr_54907_54970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (18))){
var inst_54758 = (state_54833[(2)]);
var state_54833__$1 = state_54833;
var statearr_54908_54971 = state_54833__$1;
(statearr_54908_54971[(2)] = inst_54758);

(statearr_54908_54971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (42))){
var state_54833__$1 = state_54833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54833__$1,(45),dchan);
} else {
if((state_val_54834 === (37))){
var inst_54801 = (state_54833[(23)]);
var inst_54792 = (state_54833[(25)]);
var inst_54701 = (state_54833[(12)]);
var inst_54801__$1 = cljs.core.first.call(null,inst_54792);
var inst_54802 = cljs.core.async.put_BANG_.call(null,inst_54801__$1,inst_54701,done);
var state_54833__$1 = (function (){var statearr_54909 = state_54833;
(statearr_54909[(23)] = inst_54801__$1);

return statearr_54909;
})();
if(cljs.core.truth_(inst_54802)){
var statearr_54910_54972 = state_54833__$1;
(statearr_54910_54972[(1)] = (39));

} else {
var statearr_54911_54973 = state_54833__$1;
(statearr_54911_54973[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54834 === (8))){
var inst_54712 = (state_54833[(14)]);
var inst_54713 = (state_54833[(15)]);
var inst_54715 = (inst_54713 < inst_54712);
var inst_54716 = inst_54715;
var state_54833__$1 = state_54833;
if(cljs.core.truth_(inst_54716)){
var statearr_54912_54974 = state_54833__$1;
(statearr_54912_54974[(1)] = (10));

} else {
var statearr_54913_54975 = state_54833__$1;
(statearr_54913_54975[(1)] = (11));

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
});})(c__53568__auto___54921,cs,m,dchan,dctr,done))
;
return ((function (switch__53456__auto__,c__53568__auto___54921,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__53457__auto__ = null;
var cljs$core$async$mult_$_state_machine__53457__auto____0 = (function (){
var statearr_54917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54917[(0)] = cljs$core$async$mult_$_state_machine__53457__auto__);

(statearr_54917[(1)] = (1));

return statearr_54917;
});
var cljs$core$async$mult_$_state_machine__53457__auto____1 = (function (state_54833){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_54833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e54918){if((e54918 instanceof Object)){
var ex__53460__auto__ = e54918;
var statearr_54919_54976 = state_54833;
(statearr_54919_54976[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54977 = state_54833;
state_54833 = G__54977;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53457__auto__ = function(state_54833){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53457__auto____1.call(this,state_54833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53457__auto____0;
cljs$core$async$mult_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53457__auto____1;
return cljs$core$async$mult_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___54921,cs,m,dchan,dctr,done))
})();
var state__53570__auto__ = (function (){var statearr_54920 = f__53569__auto__.call(null);
(statearr_54920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___54921);

return statearr_54920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___54921,cs,m,dchan,dctr,done))
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
var args54978 = [];
var len__48239__auto___54981 = arguments.length;
var i__48240__auto___54982 = (0);
while(true){
if((i__48240__auto___54982 < len__48239__auto___54981)){
args54978.push((arguments[i__48240__auto___54982]));

var G__54983 = (i__48240__auto___54982 + (1));
i__48240__auto___54982 = G__54983;
continue;
} else {
}
break;
}

var G__54980 = args54978.length;
switch (G__54980) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54978.length)].join('')));

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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m,ch);
} else {
var m__47795__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m,ch);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m,ch);
} else {
var m__47795__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m,ch);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m);
} else {
var m__47795__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m,state_map);
} else {
var m__47795__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m,state_map);
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
var x__47794__auto__ = (((m == null))?null:m);
var m__47795__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,m,mode);
} else {
var m__47795__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___54995 = arguments.length;
var i__48240__auto___54996 = (0);
while(true){
if((i__48240__auto___54996 < len__48239__auto___54995)){
args__48246__auto__.push((arguments[i__48240__auto___54996]));

var G__54997 = (i__48240__auto___54996 + (1));
i__48240__auto___54996 = G__54997;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54989){
var map__54990 = p__54989;
var map__54990__$1 = ((((!((map__54990 == null)))?((((map__54990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54990):map__54990);
var opts = map__54990__$1;
var statearr_54992_54998 = state;
(statearr_54992_54998[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__54990,map__54990__$1,opts){
return (function (val){
var statearr_54993_54999 = state;
(statearr_54993_54999[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__54990,map__54990__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_54994_55000 = state;
(statearr_54994_55000[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54985){
var G__54986 = cljs.core.first.call(null,seq54985);
var seq54985__$1 = cljs.core.next.call(null,seq54985);
var G__54987 = cljs.core.first.call(null,seq54985__$1);
var seq54985__$2 = cljs.core.next.call(null,seq54985__$1);
var G__54988 = cljs.core.first.call(null,seq54985__$2);
var seq54985__$3 = cljs.core.next.call(null,seq54985__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54986,G__54987,G__54988,seq54985__$3);
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
if(typeof cljs.core.async.t_cljs$core$async55168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55168 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta55169){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta55169 = meta55169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55170,meta55169__$1){
var self__ = this;
var _55170__$1 = this;
return (new cljs.core.async.t_cljs$core$async55168(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta55169__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55170){
var self__ = this;
var _55170__$1 = this;
return self__.meta55169;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async55168.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta55169","meta55169",-484960718,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55168";

cljs.core.async.t_cljs$core$async55168.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async55168");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async55168 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async55168(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta55169){
return (new cljs.core.async.t_cljs$core$async55168(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta55169));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async55168(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53568__auto___55335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___55335,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___55335,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55272){
var state_val_55273 = (state_55272[(1)]);
if((state_val_55273 === (7))){
var inst_55187 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
var statearr_55274_55336 = state_55272__$1;
(statearr_55274_55336[(2)] = inst_55187);

(statearr_55274_55336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (20))){
var inst_55199 = (state_55272[(7)]);
var state_55272__$1 = state_55272;
var statearr_55275_55337 = state_55272__$1;
(statearr_55275_55337[(2)] = inst_55199);

(statearr_55275_55337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (27))){
var state_55272__$1 = state_55272;
var statearr_55276_55338 = state_55272__$1;
(statearr_55276_55338[(2)] = null);

(statearr_55276_55338[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (1))){
var inst_55174 = (state_55272[(8)]);
var inst_55174__$1 = calc_state.call(null);
var inst_55176 = (inst_55174__$1 == null);
var inst_55177 = cljs.core.not.call(null,inst_55176);
var state_55272__$1 = (function (){var statearr_55277 = state_55272;
(statearr_55277[(8)] = inst_55174__$1);

return statearr_55277;
})();
if(inst_55177){
var statearr_55278_55339 = state_55272__$1;
(statearr_55278_55339[(1)] = (2));

} else {
var statearr_55279_55340 = state_55272__$1;
(statearr_55279_55340[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (24))){
var inst_55246 = (state_55272[(9)]);
var inst_55232 = (state_55272[(10)]);
var inst_55223 = (state_55272[(11)]);
var inst_55246__$1 = inst_55223.call(null,inst_55232);
var state_55272__$1 = (function (){var statearr_55280 = state_55272;
(statearr_55280[(9)] = inst_55246__$1);

return statearr_55280;
})();
if(cljs.core.truth_(inst_55246__$1)){
var statearr_55281_55341 = state_55272__$1;
(statearr_55281_55341[(1)] = (29));

} else {
var statearr_55282_55342 = state_55272__$1;
(statearr_55282_55342[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (4))){
var inst_55190 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55190)){
var statearr_55283_55343 = state_55272__$1;
(statearr_55283_55343[(1)] = (8));

} else {
var statearr_55284_55344 = state_55272__$1;
(statearr_55284_55344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (15))){
var inst_55217 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55217)){
var statearr_55285_55345 = state_55272__$1;
(statearr_55285_55345[(1)] = (19));

} else {
var statearr_55286_55346 = state_55272__$1;
(statearr_55286_55346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (21))){
var inst_55222 = (state_55272[(12)]);
var inst_55222__$1 = (state_55272[(2)]);
var inst_55223 = cljs.core.get.call(null,inst_55222__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55224 = cljs.core.get.call(null,inst_55222__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55225 = cljs.core.get.call(null,inst_55222__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55272__$1 = (function (){var statearr_55287 = state_55272;
(statearr_55287[(13)] = inst_55224);

(statearr_55287[(12)] = inst_55222__$1);

(statearr_55287[(11)] = inst_55223);

return statearr_55287;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_55272__$1,(22),inst_55225);
} else {
if((state_val_55273 === (31))){
var inst_55254 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55254)){
var statearr_55288_55347 = state_55272__$1;
(statearr_55288_55347[(1)] = (32));

} else {
var statearr_55289_55348 = state_55272__$1;
(statearr_55289_55348[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (32))){
var inst_55231 = (state_55272[(14)]);
var state_55272__$1 = state_55272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55272__$1,(35),out,inst_55231);
} else {
if((state_val_55273 === (33))){
var inst_55222 = (state_55272[(12)]);
var inst_55199 = inst_55222;
var state_55272__$1 = (function (){var statearr_55290 = state_55272;
(statearr_55290[(7)] = inst_55199);

return statearr_55290;
})();
var statearr_55291_55349 = state_55272__$1;
(statearr_55291_55349[(2)] = null);

(statearr_55291_55349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (13))){
var inst_55199 = (state_55272[(7)]);
var inst_55206 = inst_55199.cljs$lang$protocol_mask$partition0$;
var inst_55207 = (inst_55206 & (64));
var inst_55208 = inst_55199.cljs$core$ISeq$;
var inst_55209 = (cljs.core.PROTOCOL_SENTINEL === inst_55208);
var inst_55210 = (inst_55207) || (inst_55209);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55210)){
var statearr_55292_55350 = state_55272__$1;
(statearr_55292_55350[(1)] = (16));

} else {
var statearr_55293_55351 = state_55272__$1;
(statearr_55293_55351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (22))){
var inst_55232 = (state_55272[(10)]);
var inst_55231 = (state_55272[(14)]);
var inst_55230 = (state_55272[(2)]);
var inst_55231__$1 = cljs.core.nth.call(null,inst_55230,(0),null);
var inst_55232__$1 = cljs.core.nth.call(null,inst_55230,(1),null);
var inst_55233 = (inst_55231__$1 == null);
var inst_55234 = cljs.core._EQ_.call(null,inst_55232__$1,change);
var inst_55235 = (inst_55233) || (inst_55234);
var state_55272__$1 = (function (){var statearr_55294 = state_55272;
(statearr_55294[(10)] = inst_55232__$1);

(statearr_55294[(14)] = inst_55231__$1);

return statearr_55294;
})();
if(cljs.core.truth_(inst_55235)){
var statearr_55295_55352 = state_55272__$1;
(statearr_55295_55352[(1)] = (23));

} else {
var statearr_55296_55353 = state_55272__$1;
(statearr_55296_55353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (36))){
var inst_55222 = (state_55272[(12)]);
var inst_55199 = inst_55222;
var state_55272__$1 = (function (){var statearr_55297 = state_55272;
(statearr_55297[(7)] = inst_55199);

return statearr_55297;
})();
var statearr_55298_55354 = state_55272__$1;
(statearr_55298_55354[(2)] = null);

(statearr_55298_55354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (29))){
var inst_55246 = (state_55272[(9)]);
var state_55272__$1 = state_55272;
var statearr_55299_55355 = state_55272__$1;
(statearr_55299_55355[(2)] = inst_55246);

(statearr_55299_55355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (6))){
var state_55272__$1 = state_55272;
var statearr_55300_55356 = state_55272__$1;
(statearr_55300_55356[(2)] = false);

(statearr_55300_55356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (28))){
var inst_55242 = (state_55272[(2)]);
var inst_55243 = calc_state.call(null);
var inst_55199 = inst_55243;
var state_55272__$1 = (function (){var statearr_55301 = state_55272;
(statearr_55301[(15)] = inst_55242);

(statearr_55301[(7)] = inst_55199);

return statearr_55301;
})();
var statearr_55302_55357 = state_55272__$1;
(statearr_55302_55357[(2)] = null);

(statearr_55302_55357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (25))){
var inst_55268 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
var statearr_55303_55358 = state_55272__$1;
(statearr_55303_55358[(2)] = inst_55268);

(statearr_55303_55358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (34))){
var inst_55266 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
var statearr_55304_55359 = state_55272__$1;
(statearr_55304_55359[(2)] = inst_55266);

(statearr_55304_55359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (17))){
var state_55272__$1 = state_55272;
var statearr_55305_55360 = state_55272__$1;
(statearr_55305_55360[(2)] = false);

(statearr_55305_55360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (3))){
var state_55272__$1 = state_55272;
var statearr_55306_55361 = state_55272__$1;
(statearr_55306_55361[(2)] = false);

(statearr_55306_55361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (12))){
var inst_55270 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55272__$1,inst_55270);
} else {
if((state_val_55273 === (2))){
var inst_55174 = (state_55272[(8)]);
var inst_55179 = inst_55174.cljs$lang$protocol_mask$partition0$;
var inst_55180 = (inst_55179 & (64));
var inst_55181 = inst_55174.cljs$core$ISeq$;
var inst_55182 = (cljs.core.PROTOCOL_SENTINEL === inst_55181);
var inst_55183 = (inst_55180) || (inst_55182);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55183)){
var statearr_55307_55362 = state_55272__$1;
(statearr_55307_55362[(1)] = (5));

} else {
var statearr_55308_55363 = state_55272__$1;
(statearr_55308_55363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (23))){
var inst_55231 = (state_55272[(14)]);
var inst_55237 = (inst_55231 == null);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55237)){
var statearr_55309_55364 = state_55272__$1;
(statearr_55309_55364[(1)] = (26));

} else {
var statearr_55310_55365 = state_55272__$1;
(statearr_55310_55365[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (35))){
var inst_55257 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
if(cljs.core.truth_(inst_55257)){
var statearr_55311_55366 = state_55272__$1;
(statearr_55311_55366[(1)] = (36));

} else {
var statearr_55312_55367 = state_55272__$1;
(statearr_55312_55367[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (19))){
var inst_55199 = (state_55272[(7)]);
var inst_55219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55199);
var state_55272__$1 = state_55272;
var statearr_55313_55368 = state_55272__$1;
(statearr_55313_55368[(2)] = inst_55219);

(statearr_55313_55368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (11))){
var inst_55199 = (state_55272[(7)]);
var inst_55203 = (inst_55199 == null);
var inst_55204 = cljs.core.not.call(null,inst_55203);
var state_55272__$1 = state_55272;
if(inst_55204){
var statearr_55314_55369 = state_55272__$1;
(statearr_55314_55369[(1)] = (13));

} else {
var statearr_55315_55370 = state_55272__$1;
(statearr_55315_55370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (9))){
var inst_55174 = (state_55272[(8)]);
var state_55272__$1 = state_55272;
var statearr_55316_55371 = state_55272__$1;
(statearr_55316_55371[(2)] = inst_55174);

(statearr_55316_55371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (5))){
var state_55272__$1 = state_55272;
var statearr_55317_55372 = state_55272__$1;
(statearr_55317_55372[(2)] = true);

(statearr_55317_55372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (14))){
var state_55272__$1 = state_55272;
var statearr_55318_55373 = state_55272__$1;
(statearr_55318_55373[(2)] = false);

(statearr_55318_55373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (26))){
var inst_55232 = (state_55272[(10)]);
var inst_55239 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_55232);
var state_55272__$1 = state_55272;
var statearr_55319_55374 = state_55272__$1;
(statearr_55319_55374[(2)] = inst_55239);

(statearr_55319_55374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (16))){
var state_55272__$1 = state_55272;
var statearr_55320_55375 = state_55272__$1;
(statearr_55320_55375[(2)] = true);

(statearr_55320_55375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (38))){
var inst_55262 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
var statearr_55321_55376 = state_55272__$1;
(statearr_55321_55376[(2)] = inst_55262);

(statearr_55321_55376[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (30))){
var inst_55224 = (state_55272[(13)]);
var inst_55232 = (state_55272[(10)]);
var inst_55223 = (state_55272[(11)]);
var inst_55249 = cljs.core.empty_QMARK_.call(null,inst_55223);
var inst_55250 = inst_55224.call(null,inst_55232);
var inst_55251 = cljs.core.not.call(null,inst_55250);
var inst_55252 = (inst_55249) && (inst_55251);
var state_55272__$1 = state_55272;
var statearr_55322_55377 = state_55272__$1;
(statearr_55322_55377[(2)] = inst_55252);

(statearr_55322_55377[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (10))){
var inst_55174 = (state_55272[(8)]);
var inst_55195 = (state_55272[(2)]);
var inst_55196 = cljs.core.get.call(null,inst_55195,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55197 = cljs.core.get.call(null,inst_55195,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55198 = cljs.core.get.call(null,inst_55195,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55199 = inst_55174;
var state_55272__$1 = (function (){var statearr_55323 = state_55272;
(statearr_55323[(16)] = inst_55198);

(statearr_55323[(17)] = inst_55196);

(statearr_55323[(18)] = inst_55197);

(statearr_55323[(7)] = inst_55199);

return statearr_55323;
})();
var statearr_55324_55378 = state_55272__$1;
(statearr_55324_55378[(2)] = null);

(statearr_55324_55378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (18))){
var inst_55214 = (state_55272[(2)]);
var state_55272__$1 = state_55272;
var statearr_55325_55379 = state_55272__$1;
(statearr_55325_55379[(2)] = inst_55214);

(statearr_55325_55379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (37))){
var state_55272__$1 = state_55272;
var statearr_55326_55380 = state_55272__$1;
(statearr_55326_55380[(2)] = null);

(statearr_55326_55380[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55273 === (8))){
var inst_55174 = (state_55272[(8)]);
var inst_55192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55174);
var state_55272__$1 = state_55272;
var statearr_55327_55381 = state_55272__$1;
(statearr_55327_55381[(2)] = inst_55192);

(statearr_55327_55381[(1)] = (10));


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
});})(c__53568__auto___55335,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__53456__auto__,c__53568__auto___55335,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__53457__auto__ = null;
var cljs$core$async$mix_$_state_machine__53457__auto____0 = (function (){
var statearr_55331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55331[(0)] = cljs$core$async$mix_$_state_machine__53457__auto__);

(statearr_55331[(1)] = (1));

return statearr_55331;
});
var cljs$core$async$mix_$_state_machine__53457__auto____1 = (function (state_55272){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_55272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e55332){if((e55332 instanceof Object)){
var ex__53460__auto__ = e55332;
var statearr_55333_55382 = state_55272;
(statearr_55333_55382[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55383 = state_55272;
state_55272 = G__55383;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53457__auto__ = function(state_55272){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53457__auto____1.call(this,state_55272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53457__auto____0;
cljs$core$async$mix_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53457__auto____1;
return cljs$core$async$mix_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___55335,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__53570__auto__ = (function (){var statearr_55334 = f__53569__auto__.call(null);
(statearr_55334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___55335);

return statearr_55334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___55335,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__47794__auto__ = (((p == null))?null:p);
var m__47795__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__47795__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__47794__auto__ = (((p == null))?null:p);
var m__47795__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,p,v,ch);
} else {
var m__47795__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args55384 = [];
var len__48239__auto___55387 = arguments.length;
var i__48240__auto___55388 = (0);
while(true){
if((i__48240__auto___55388 < len__48239__auto___55387)){
args55384.push((arguments[i__48240__auto___55388]));

var G__55389 = (i__48240__auto___55388 + (1));
i__48240__auto___55388 = G__55389;
continue;
} else {
}
break;
}

var G__55386 = args55384.length;
switch (G__55386) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55384.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__47794__auto__ = (((p == null))?null:p);
var m__47795__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,p);
} else {
var m__47795__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,p);
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
var x__47794__auto__ = (((p == null))?null:p);
var m__47795__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__47794__auto__)]);
if(!((m__47795__auto__ == null))){
return m__47795__auto__.call(null,p,v);
} else {
var m__47795__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__47795__auto____$1 == null))){
return m__47795__auto____$1.call(null,p,v);
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
var args55392 = [];
var len__48239__auto___55517 = arguments.length;
var i__48240__auto___55518 = (0);
while(true){
if((i__48240__auto___55518 < len__48239__auto___55517)){
args55392.push((arguments[i__48240__auto___55518]));

var G__55519 = (i__48240__auto___55518 + (1));
i__48240__auto___55518 = G__55519;
continue;
} else {
}
break;
}

var G__55394 = args55392.length;
switch (G__55394) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55392.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__47131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__47131__auto__,mults){
return (function (p1__55391_SHARP_){
if(cljs.core.truth_(p1__55391_SHARP_.call(null,topic))){
return p1__55391_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__55391_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__47131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async55395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55395 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55396){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55396 = meta55396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_55397,meta55396__$1){
var self__ = this;
var _55397__$1 = this;
return (new cljs.core.async.t_cljs$core$async55395(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55396__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_55397){
var self__ = this;
var _55397__$1 = this;
return self__.meta55396;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55396","meta55396",1309418018,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55395";

cljs.core.async.t_cljs$core$async55395.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async55395");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async55395 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async55395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55396){
return (new cljs.core.async.t_cljs$core$async55395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55396));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async55395(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53568__auto___55521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___55521,mults,ensure_mult,p){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___55521,mults,ensure_mult,p){
return (function (state_55469){
var state_val_55470 = (state_55469[(1)]);
if((state_val_55470 === (7))){
var inst_55465 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
var statearr_55471_55522 = state_55469__$1;
(statearr_55471_55522[(2)] = inst_55465);

(statearr_55471_55522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (20))){
var state_55469__$1 = state_55469;
var statearr_55472_55523 = state_55469__$1;
(statearr_55472_55523[(2)] = null);

(statearr_55472_55523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (1))){
var state_55469__$1 = state_55469;
var statearr_55473_55524 = state_55469__$1;
(statearr_55473_55524[(2)] = null);

(statearr_55473_55524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (24))){
var inst_55448 = (state_55469[(7)]);
var inst_55457 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55448);
var state_55469__$1 = state_55469;
var statearr_55474_55525 = state_55469__$1;
(statearr_55474_55525[(2)] = inst_55457);

(statearr_55474_55525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (4))){
var inst_55400 = (state_55469[(8)]);
var inst_55400__$1 = (state_55469[(2)]);
var inst_55401 = (inst_55400__$1 == null);
var state_55469__$1 = (function (){var statearr_55475 = state_55469;
(statearr_55475[(8)] = inst_55400__$1);

return statearr_55475;
})();
if(cljs.core.truth_(inst_55401)){
var statearr_55476_55526 = state_55469__$1;
(statearr_55476_55526[(1)] = (5));

} else {
var statearr_55477_55527 = state_55469__$1;
(statearr_55477_55527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (15))){
var inst_55442 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
var statearr_55478_55528 = state_55469__$1;
(statearr_55478_55528[(2)] = inst_55442);

(statearr_55478_55528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (21))){
var inst_55462 = (state_55469[(2)]);
var state_55469__$1 = (function (){var statearr_55479 = state_55469;
(statearr_55479[(9)] = inst_55462);

return statearr_55479;
})();
var statearr_55480_55529 = state_55469__$1;
(statearr_55480_55529[(2)] = null);

(statearr_55480_55529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (13))){
var inst_55424 = (state_55469[(10)]);
var inst_55426 = cljs.core.chunked_seq_QMARK_.call(null,inst_55424);
var state_55469__$1 = state_55469;
if(inst_55426){
var statearr_55481_55530 = state_55469__$1;
(statearr_55481_55530[(1)] = (16));

} else {
var statearr_55482_55531 = state_55469__$1;
(statearr_55482_55531[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (22))){
var inst_55454 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
if(cljs.core.truth_(inst_55454)){
var statearr_55483_55532 = state_55469__$1;
(statearr_55483_55532[(1)] = (23));

} else {
var statearr_55484_55533 = state_55469__$1;
(statearr_55484_55533[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (6))){
var inst_55450 = (state_55469[(11)]);
var inst_55448 = (state_55469[(7)]);
var inst_55400 = (state_55469[(8)]);
var inst_55448__$1 = topic_fn.call(null,inst_55400);
var inst_55449 = cljs.core.deref.call(null,mults);
var inst_55450__$1 = cljs.core.get.call(null,inst_55449,inst_55448__$1);
var state_55469__$1 = (function (){var statearr_55485 = state_55469;
(statearr_55485[(11)] = inst_55450__$1);

(statearr_55485[(7)] = inst_55448__$1);

return statearr_55485;
})();
if(cljs.core.truth_(inst_55450__$1)){
var statearr_55486_55534 = state_55469__$1;
(statearr_55486_55534[(1)] = (19));

} else {
var statearr_55487_55535 = state_55469__$1;
(statearr_55487_55535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (25))){
var inst_55459 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
var statearr_55488_55536 = state_55469__$1;
(statearr_55488_55536[(2)] = inst_55459);

(statearr_55488_55536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (17))){
var inst_55424 = (state_55469[(10)]);
var inst_55433 = cljs.core.first.call(null,inst_55424);
var inst_55434 = cljs.core.async.muxch_STAR_.call(null,inst_55433);
var inst_55435 = cljs.core.async.close_BANG_.call(null,inst_55434);
var inst_55436 = cljs.core.next.call(null,inst_55424);
var inst_55410 = inst_55436;
var inst_55411 = null;
var inst_55412 = (0);
var inst_55413 = (0);
var state_55469__$1 = (function (){var statearr_55489 = state_55469;
(statearr_55489[(12)] = inst_55435);

(statearr_55489[(13)] = inst_55412);

(statearr_55489[(14)] = inst_55411);

(statearr_55489[(15)] = inst_55413);

(statearr_55489[(16)] = inst_55410);

return statearr_55489;
})();
var statearr_55490_55537 = state_55469__$1;
(statearr_55490_55537[(2)] = null);

(statearr_55490_55537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (3))){
var inst_55467 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55469__$1,inst_55467);
} else {
if((state_val_55470 === (12))){
var inst_55444 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
var statearr_55491_55538 = state_55469__$1;
(statearr_55491_55538[(2)] = inst_55444);

(statearr_55491_55538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (2))){
var state_55469__$1 = state_55469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55469__$1,(4),ch);
} else {
if((state_val_55470 === (23))){
var state_55469__$1 = state_55469;
var statearr_55492_55539 = state_55469__$1;
(statearr_55492_55539[(2)] = null);

(statearr_55492_55539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (19))){
var inst_55450 = (state_55469[(11)]);
var inst_55400 = (state_55469[(8)]);
var inst_55452 = cljs.core.async.muxch_STAR_.call(null,inst_55450);
var state_55469__$1 = state_55469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55469__$1,(22),inst_55452,inst_55400);
} else {
if((state_val_55470 === (11))){
var inst_55424 = (state_55469[(10)]);
var inst_55410 = (state_55469[(16)]);
var inst_55424__$1 = cljs.core.seq.call(null,inst_55410);
var state_55469__$1 = (function (){var statearr_55493 = state_55469;
(statearr_55493[(10)] = inst_55424__$1);

return statearr_55493;
})();
if(inst_55424__$1){
var statearr_55494_55540 = state_55469__$1;
(statearr_55494_55540[(1)] = (13));

} else {
var statearr_55495_55541 = state_55469__$1;
(statearr_55495_55541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (9))){
var inst_55446 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
var statearr_55496_55542 = state_55469__$1;
(statearr_55496_55542[(2)] = inst_55446);

(statearr_55496_55542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (5))){
var inst_55407 = cljs.core.deref.call(null,mults);
var inst_55408 = cljs.core.vals.call(null,inst_55407);
var inst_55409 = cljs.core.seq.call(null,inst_55408);
var inst_55410 = inst_55409;
var inst_55411 = null;
var inst_55412 = (0);
var inst_55413 = (0);
var state_55469__$1 = (function (){var statearr_55497 = state_55469;
(statearr_55497[(13)] = inst_55412);

(statearr_55497[(14)] = inst_55411);

(statearr_55497[(15)] = inst_55413);

(statearr_55497[(16)] = inst_55410);

return statearr_55497;
})();
var statearr_55498_55543 = state_55469__$1;
(statearr_55498_55543[(2)] = null);

(statearr_55498_55543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (14))){
var state_55469__$1 = state_55469;
var statearr_55502_55544 = state_55469__$1;
(statearr_55502_55544[(2)] = null);

(statearr_55502_55544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (16))){
var inst_55424 = (state_55469[(10)]);
var inst_55428 = cljs.core.chunk_first.call(null,inst_55424);
var inst_55429 = cljs.core.chunk_rest.call(null,inst_55424);
var inst_55430 = cljs.core.count.call(null,inst_55428);
var inst_55410 = inst_55429;
var inst_55411 = inst_55428;
var inst_55412 = inst_55430;
var inst_55413 = (0);
var state_55469__$1 = (function (){var statearr_55503 = state_55469;
(statearr_55503[(13)] = inst_55412);

(statearr_55503[(14)] = inst_55411);

(statearr_55503[(15)] = inst_55413);

(statearr_55503[(16)] = inst_55410);

return statearr_55503;
})();
var statearr_55504_55545 = state_55469__$1;
(statearr_55504_55545[(2)] = null);

(statearr_55504_55545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (10))){
var inst_55412 = (state_55469[(13)]);
var inst_55411 = (state_55469[(14)]);
var inst_55413 = (state_55469[(15)]);
var inst_55410 = (state_55469[(16)]);
var inst_55418 = cljs.core._nth.call(null,inst_55411,inst_55413);
var inst_55419 = cljs.core.async.muxch_STAR_.call(null,inst_55418);
var inst_55420 = cljs.core.async.close_BANG_.call(null,inst_55419);
var inst_55421 = (inst_55413 + (1));
var tmp55499 = inst_55412;
var tmp55500 = inst_55411;
var tmp55501 = inst_55410;
var inst_55410__$1 = tmp55501;
var inst_55411__$1 = tmp55500;
var inst_55412__$1 = tmp55499;
var inst_55413__$1 = inst_55421;
var state_55469__$1 = (function (){var statearr_55505 = state_55469;
(statearr_55505[(13)] = inst_55412__$1);

(statearr_55505[(14)] = inst_55411__$1);

(statearr_55505[(15)] = inst_55413__$1);

(statearr_55505[(16)] = inst_55410__$1);

(statearr_55505[(17)] = inst_55420);

return statearr_55505;
})();
var statearr_55506_55546 = state_55469__$1;
(statearr_55506_55546[(2)] = null);

(statearr_55506_55546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (18))){
var inst_55439 = (state_55469[(2)]);
var state_55469__$1 = state_55469;
var statearr_55507_55547 = state_55469__$1;
(statearr_55507_55547[(2)] = inst_55439);

(statearr_55507_55547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55470 === (8))){
var inst_55412 = (state_55469[(13)]);
var inst_55413 = (state_55469[(15)]);
var inst_55415 = (inst_55413 < inst_55412);
var inst_55416 = inst_55415;
var state_55469__$1 = state_55469;
if(cljs.core.truth_(inst_55416)){
var statearr_55508_55548 = state_55469__$1;
(statearr_55508_55548[(1)] = (10));

} else {
var statearr_55509_55549 = state_55469__$1;
(statearr_55509_55549[(1)] = (11));

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
});})(c__53568__auto___55521,mults,ensure_mult,p))
;
return ((function (switch__53456__auto__,c__53568__auto___55521,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_55513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55513[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_55513[(1)] = (1));

return statearr_55513;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_55469){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_55469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e55514){if((e55514 instanceof Object)){
var ex__53460__auto__ = e55514;
var statearr_55515_55550 = state_55469;
(statearr_55515_55550[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55551 = state_55469;
state_55469 = G__55551;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_55469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_55469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___55521,mults,ensure_mult,p))
})();
var state__53570__auto__ = (function (){var statearr_55516 = f__53569__auto__.call(null);
(statearr_55516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___55521);

return statearr_55516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___55521,mults,ensure_mult,p))
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
var args55552 = [];
var len__48239__auto___55555 = arguments.length;
var i__48240__auto___55556 = (0);
while(true){
if((i__48240__auto___55556 < len__48239__auto___55555)){
args55552.push((arguments[i__48240__auto___55556]));

var G__55557 = (i__48240__auto___55556 + (1));
i__48240__auto___55556 = G__55557;
continue;
} else {
}
break;
}

var G__55554 = args55552.length;
switch (G__55554) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55552.length)].join('')));

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
var args55559 = [];
var len__48239__auto___55562 = arguments.length;
var i__48240__auto___55563 = (0);
while(true){
if((i__48240__auto___55563 < len__48239__auto___55562)){
args55559.push((arguments[i__48240__auto___55563]));

var G__55564 = (i__48240__auto___55563 + (1));
i__48240__auto___55563 = G__55564;
continue;
} else {
}
break;
}

var G__55561 = args55559.length;
switch (G__55561) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55559.length)].join('')));

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
var args55566 = [];
var len__48239__auto___55637 = arguments.length;
var i__48240__auto___55638 = (0);
while(true){
if((i__48240__auto___55638 < len__48239__auto___55637)){
args55566.push((arguments[i__48240__auto___55638]));

var G__55639 = (i__48240__auto___55638 + (1));
i__48240__auto___55638 = G__55639;
continue;
} else {
}
break;
}

var G__55568 = args55566.length;
switch (G__55568) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55566.length)].join('')));

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
var c__53568__auto___55641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___55641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___55641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55607){
var state_val_55608 = (state_55607[(1)]);
if((state_val_55608 === (7))){
var state_55607__$1 = state_55607;
var statearr_55609_55642 = state_55607__$1;
(statearr_55609_55642[(2)] = null);

(statearr_55609_55642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (1))){
var state_55607__$1 = state_55607;
var statearr_55610_55643 = state_55607__$1;
(statearr_55610_55643[(2)] = null);

(statearr_55610_55643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (4))){
var inst_55571 = (state_55607[(7)]);
var inst_55573 = (inst_55571 < cnt);
var state_55607__$1 = state_55607;
if(cljs.core.truth_(inst_55573)){
var statearr_55611_55644 = state_55607__$1;
(statearr_55611_55644[(1)] = (6));

} else {
var statearr_55612_55645 = state_55607__$1;
(statearr_55612_55645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (15))){
var inst_55603 = (state_55607[(2)]);
var state_55607__$1 = state_55607;
var statearr_55613_55646 = state_55607__$1;
(statearr_55613_55646[(2)] = inst_55603);

(statearr_55613_55646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (13))){
var inst_55596 = cljs.core.async.close_BANG_.call(null,out);
var state_55607__$1 = state_55607;
var statearr_55614_55647 = state_55607__$1;
(statearr_55614_55647[(2)] = inst_55596);

(statearr_55614_55647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (6))){
var state_55607__$1 = state_55607;
var statearr_55615_55648 = state_55607__$1;
(statearr_55615_55648[(2)] = null);

(statearr_55615_55648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (3))){
var inst_55605 = (state_55607[(2)]);
var state_55607__$1 = state_55607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55607__$1,inst_55605);
} else {
if((state_val_55608 === (12))){
var inst_55593 = (state_55607[(8)]);
var inst_55593__$1 = (state_55607[(2)]);
var inst_55594 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55593__$1);
var state_55607__$1 = (function (){var statearr_55616 = state_55607;
(statearr_55616[(8)] = inst_55593__$1);

return statearr_55616;
})();
if(cljs.core.truth_(inst_55594)){
var statearr_55617_55649 = state_55607__$1;
(statearr_55617_55649[(1)] = (13));

} else {
var statearr_55618_55650 = state_55607__$1;
(statearr_55618_55650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (2))){
var inst_55570 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_55571 = (0);
var state_55607__$1 = (function (){var statearr_55619 = state_55607;
(statearr_55619[(7)] = inst_55571);

(statearr_55619[(9)] = inst_55570);

return statearr_55619;
})();
var statearr_55620_55651 = state_55607__$1;
(statearr_55620_55651[(2)] = null);

(statearr_55620_55651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (11))){
var inst_55571 = (state_55607[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55607,(10),Object,null,(9));
var inst_55580 = chs__$1.call(null,inst_55571);
var inst_55581 = done.call(null,inst_55571);
var inst_55582 = cljs.core.async.take_BANG_.call(null,inst_55580,inst_55581);
var state_55607__$1 = state_55607;
var statearr_55621_55652 = state_55607__$1;
(statearr_55621_55652[(2)] = inst_55582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55607__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (9))){
var inst_55571 = (state_55607[(7)]);
var inst_55584 = (state_55607[(2)]);
var inst_55585 = (inst_55571 + (1));
var inst_55571__$1 = inst_55585;
var state_55607__$1 = (function (){var statearr_55622 = state_55607;
(statearr_55622[(7)] = inst_55571__$1);

(statearr_55622[(10)] = inst_55584);

return statearr_55622;
})();
var statearr_55623_55653 = state_55607__$1;
(statearr_55623_55653[(2)] = null);

(statearr_55623_55653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (5))){
var inst_55591 = (state_55607[(2)]);
var state_55607__$1 = (function (){var statearr_55624 = state_55607;
(statearr_55624[(11)] = inst_55591);

return statearr_55624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55607__$1,(12),dchan);
} else {
if((state_val_55608 === (14))){
var inst_55593 = (state_55607[(8)]);
var inst_55598 = cljs.core.apply.call(null,f,inst_55593);
var state_55607__$1 = state_55607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55607__$1,(16),out,inst_55598);
} else {
if((state_val_55608 === (16))){
var inst_55600 = (state_55607[(2)]);
var state_55607__$1 = (function (){var statearr_55625 = state_55607;
(statearr_55625[(12)] = inst_55600);

return statearr_55625;
})();
var statearr_55626_55654 = state_55607__$1;
(statearr_55626_55654[(2)] = null);

(statearr_55626_55654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (10))){
var inst_55575 = (state_55607[(2)]);
var inst_55576 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_55607__$1 = (function (){var statearr_55627 = state_55607;
(statearr_55627[(13)] = inst_55575);

return statearr_55627;
})();
var statearr_55628_55655 = state_55607__$1;
(statearr_55628_55655[(2)] = inst_55576);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55607__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55608 === (8))){
var inst_55589 = (state_55607[(2)]);
var state_55607__$1 = state_55607;
var statearr_55629_55656 = state_55607__$1;
(statearr_55629_55656[(2)] = inst_55589);

(statearr_55629_55656[(1)] = (5));


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
});})(c__53568__auto___55641,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__53456__auto__,c__53568__auto___55641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_55633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55633[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_55633[(1)] = (1));

return statearr_55633;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_55607){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_55607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e55634){if((e55634 instanceof Object)){
var ex__53460__auto__ = e55634;
var statearr_55635_55657 = state_55607;
(statearr_55635_55657[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55658 = state_55607;
state_55607 = G__55658;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_55607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_55607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___55641,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__53570__auto__ = (function (){var statearr_55636 = f__53569__auto__.call(null);
(statearr_55636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___55641);

return statearr_55636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___55641,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args55660 = [];
var len__48239__auto___55718 = arguments.length;
var i__48240__auto___55719 = (0);
while(true){
if((i__48240__auto___55719 < len__48239__auto___55718)){
args55660.push((arguments[i__48240__auto___55719]));

var G__55720 = (i__48240__auto___55719 + (1));
i__48240__auto___55719 = G__55720;
continue;
} else {
}
break;
}

var G__55662 = args55660.length;
switch (G__55662) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55660.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53568__auto___55722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___55722,out){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___55722,out){
return (function (state_55694){
var state_val_55695 = (state_55694[(1)]);
if((state_val_55695 === (7))){
var inst_55674 = (state_55694[(7)]);
var inst_55673 = (state_55694[(8)]);
var inst_55673__$1 = (state_55694[(2)]);
var inst_55674__$1 = cljs.core.nth.call(null,inst_55673__$1,(0),null);
var inst_55675 = cljs.core.nth.call(null,inst_55673__$1,(1),null);
var inst_55676 = (inst_55674__$1 == null);
var state_55694__$1 = (function (){var statearr_55696 = state_55694;
(statearr_55696[(9)] = inst_55675);

(statearr_55696[(7)] = inst_55674__$1);

(statearr_55696[(8)] = inst_55673__$1);

return statearr_55696;
})();
if(cljs.core.truth_(inst_55676)){
var statearr_55697_55723 = state_55694__$1;
(statearr_55697_55723[(1)] = (8));

} else {
var statearr_55698_55724 = state_55694__$1;
(statearr_55698_55724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (1))){
var inst_55663 = cljs.core.vec.call(null,chs);
var inst_55664 = inst_55663;
var state_55694__$1 = (function (){var statearr_55699 = state_55694;
(statearr_55699[(10)] = inst_55664);

return statearr_55699;
})();
var statearr_55700_55725 = state_55694__$1;
(statearr_55700_55725[(2)] = null);

(statearr_55700_55725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (4))){
var inst_55664 = (state_55694[(10)]);
var state_55694__$1 = state_55694;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55694__$1,(7),inst_55664);
} else {
if((state_val_55695 === (6))){
var inst_55690 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
var statearr_55701_55726 = state_55694__$1;
(statearr_55701_55726[(2)] = inst_55690);

(statearr_55701_55726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (3))){
var inst_55692 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55694__$1,inst_55692);
} else {
if((state_val_55695 === (2))){
var inst_55664 = (state_55694[(10)]);
var inst_55666 = cljs.core.count.call(null,inst_55664);
var inst_55667 = (inst_55666 > (0));
var state_55694__$1 = state_55694;
if(cljs.core.truth_(inst_55667)){
var statearr_55703_55727 = state_55694__$1;
(statearr_55703_55727[(1)] = (4));

} else {
var statearr_55704_55728 = state_55694__$1;
(statearr_55704_55728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (11))){
var inst_55664 = (state_55694[(10)]);
var inst_55683 = (state_55694[(2)]);
var tmp55702 = inst_55664;
var inst_55664__$1 = tmp55702;
var state_55694__$1 = (function (){var statearr_55705 = state_55694;
(statearr_55705[(10)] = inst_55664__$1);

(statearr_55705[(11)] = inst_55683);

return statearr_55705;
})();
var statearr_55706_55729 = state_55694__$1;
(statearr_55706_55729[(2)] = null);

(statearr_55706_55729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (9))){
var inst_55674 = (state_55694[(7)]);
var state_55694__$1 = state_55694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55694__$1,(11),out,inst_55674);
} else {
if((state_val_55695 === (5))){
var inst_55688 = cljs.core.async.close_BANG_.call(null,out);
var state_55694__$1 = state_55694;
var statearr_55707_55730 = state_55694__$1;
(statearr_55707_55730[(2)] = inst_55688);

(statearr_55707_55730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (10))){
var inst_55686 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
var statearr_55708_55731 = state_55694__$1;
(statearr_55708_55731[(2)] = inst_55686);

(statearr_55708_55731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (8))){
var inst_55675 = (state_55694[(9)]);
var inst_55664 = (state_55694[(10)]);
var inst_55674 = (state_55694[(7)]);
var inst_55673 = (state_55694[(8)]);
var inst_55678 = (function (){var cs = inst_55664;
var vec__55669 = inst_55673;
var v = inst_55674;
var c = inst_55675;
return ((function (cs,vec__55669,v,c,inst_55675,inst_55664,inst_55674,inst_55673,state_val_55695,c__53568__auto___55722,out){
return (function (p1__55659_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__55659_SHARP_);
});
;})(cs,vec__55669,v,c,inst_55675,inst_55664,inst_55674,inst_55673,state_val_55695,c__53568__auto___55722,out))
})();
var inst_55679 = cljs.core.filterv.call(null,inst_55678,inst_55664);
var inst_55664__$1 = inst_55679;
var state_55694__$1 = (function (){var statearr_55709 = state_55694;
(statearr_55709[(10)] = inst_55664__$1);

return statearr_55709;
})();
var statearr_55710_55732 = state_55694__$1;
(statearr_55710_55732[(2)] = null);

(statearr_55710_55732[(1)] = (2));


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
});})(c__53568__auto___55722,out))
;
return ((function (switch__53456__auto__,c__53568__auto___55722,out){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_55714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55714[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_55714[(1)] = (1));

return statearr_55714;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_55694){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_55694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e55715){if((e55715 instanceof Object)){
var ex__53460__auto__ = e55715;
var statearr_55716_55733 = state_55694;
(statearr_55716_55733[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55734 = state_55694;
state_55694 = G__55734;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_55694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_55694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___55722,out))
})();
var state__53570__auto__ = (function (){var statearr_55717 = f__53569__auto__.call(null);
(statearr_55717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___55722);

return statearr_55717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___55722,out))
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
var args55735 = [];
var len__48239__auto___55784 = arguments.length;
var i__48240__auto___55785 = (0);
while(true){
if((i__48240__auto___55785 < len__48239__auto___55784)){
args55735.push((arguments[i__48240__auto___55785]));

var G__55786 = (i__48240__auto___55785 + (1));
i__48240__auto___55785 = G__55786;
continue;
} else {
}
break;
}

var G__55737 = args55735.length;
switch (G__55737) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55735.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53568__auto___55788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___55788,out){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___55788,out){
return (function (state_55761){
var state_val_55762 = (state_55761[(1)]);
if((state_val_55762 === (7))){
var inst_55743 = (state_55761[(7)]);
var inst_55743__$1 = (state_55761[(2)]);
var inst_55744 = (inst_55743__$1 == null);
var inst_55745 = cljs.core.not.call(null,inst_55744);
var state_55761__$1 = (function (){var statearr_55763 = state_55761;
(statearr_55763[(7)] = inst_55743__$1);

return statearr_55763;
})();
if(inst_55745){
var statearr_55764_55789 = state_55761__$1;
(statearr_55764_55789[(1)] = (8));

} else {
var statearr_55765_55790 = state_55761__$1;
(statearr_55765_55790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (1))){
var inst_55738 = (0);
var state_55761__$1 = (function (){var statearr_55766 = state_55761;
(statearr_55766[(8)] = inst_55738);

return statearr_55766;
})();
var statearr_55767_55791 = state_55761__$1;
(statearr_55767_55791[(2)] = null);

(statearr_55767_55791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (4))){
var state_55761__$1 = state_55761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55761__$1,(7),ch);
} else {
if((state_val_55762 === (6))){
var inst_55756 = (state_55761[(2)]);
var state_55761__$1 = state_55761;
var statearr_55768_55792 = state_55761__$1;
(statearr_55768_55792[(2)] = inst_55756);

(statearr_55768_55792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (3))){
var inst_55758 = (state_55761[(2)]);
var inst_55759 = cljs.core.async.close_BANG_.call(null,out);
var state_55761__$1 = (function (){var statearr_55769 = state_55761;
(statearr_55769[(9)] = inst_55758);

return statearr_55769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55761__$1,inst_55759);
} else {
if((state_val_55762 === (2))){
var inst_55738 = (state_55761[(8)]);
var inst_55740 = (inst_55738 < n);
var state_55761__$1 = state_55761;
if(cljs.core.truth_(inst_55740)){
var statearr_55770_55793 = state_55761__$1;
(statearr_55770_55793[(1)] = (4));

} else {
var statearr_55771_55794 = state_55761__$1;
(statearr_55771_55794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (11))){
var inst_55738 = (state_55761[(8)]);
var inst_55748 = (state_55761[(2)]);
var inst_55749 = (inst_55738 + (1));
var inst_55738__$1 = inst_55749;
var state_55761__$1 = (function (){var statearr_55772 = state_55761;
(statearr_55772[(8)] = inst_55738__$1);

(statearr_55772[(10)] = inst_55748);

return statearr_55772;
})();
var statearr_55773_55795 = state_55761__$1;
(statearr_55773_55795[(2)] = null);

(statearr_55773_55795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (9))){
var state_55761__$1 = state_55761;
var statearr_55774_55796 = state_55761__$1;
(statearr_55774_55796[(2)] = null);

(statearr_55774_55796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (5))){
var state_55761__$1 = state_55761;
var statearr_55775_55797 = state_55761__$1;
(statearr_55775_55797[(2)] = null);

(statearr_55775_55797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (10))){
var inst_55753 = (state_55761[(2)]);
var state_55761__$1 = state_55761;
var statearr_55776_55798 = state_55761__$1;
(statearr_55776_55798[(2)] = inst_55753);

(statearr_55776_55798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55762 === (8))){
var inst_55743 = (state_55761[(7)]);
var state_55761__$1 = state_55761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55761__$1,(11),out,inst_55743);
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
});})(c__53568__auto___55788,out))
;
return ((function (switch__53456__auto__,c__53568__auto___55788,out){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_55780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55780[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_55780[(1)] = (1));

return statearr_55780;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_55761){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_55761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e55781){if((e55781 instanceof Object)){
var ex__53460__auto__ = e55781;
var statearr_55782_55799 = state_55761;
(statearr_55782_55799[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55800 = state_55761;
state_55761 = G__55800;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_55761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_55761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___55788,out))
})();
var state__53570__auto__ = (function (){var statearr_55783 = f__53569__auto__.call(null);
(statearr_55783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___55788);

return statearr_55783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___55788,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55808 = (function (f,ch,meta55809){
this.f = f;
this.ch = ch;
this.meta55809 = meta55809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55810,meta55809__$1){
var self__ = this;
var _55810__$1 = this;
return (new cljs.core.async.t_cljs$core$async55808(self__.f,self__.ch,meta55809__$1));
});

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55810){
var self__ = this;
var _55810__$1 = this;
return self__.meta55809;
});

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async55811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55811 = (function (f,ch,meta55809,_,fn1,meta55812){
this.f = f;
this.ch = ch;
this.meta55809 = meta55809;
this._ = _;
this.fn1 = fn1;
this.meta55812 = meta55812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55813,meta55812__$1){
var self__ = this;
var _55813__$1 = this;
return (new cljs.core.async.t_cljs$core$async55811(self__.f,self__.ch,self__.meta55809,self__._,self__.fn1,meta55812__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async55811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55813){
var self__ = this;
var _55813__$1 = this;
return self__.meta55812;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55811.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__55801_SHARP_){
return f1.call(null,(((p1__55801_SHARP_ == null))?null:self__.f.call(null,p1__55801_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async55811.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55809","meta55809",1672199980,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55808","cljs.core.async/t_cljs$core$async55808",-507175990,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55812","meta55812",-1497915894,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55811";

cljs.core.async.t_cljs$core$async55811.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async55811");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async55811 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55811(f__$1,ch__$1,meta55809__$1,___$2,fn1__$1,meta55812){
return (new cljs.core.async.t_cljs$core$async55811(f__$1,ch__$1,meta55809__$1,___$2,fn1__$1,meta55812));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async55811(self__.f,self__.ch,self__.meta55809,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__47119__auto__ = ret;
if(cljs.core.truth_(and__47119__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__47119__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async55808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55809","meta55809",1672199980,null)], null);
});

cljs.core.async.t_cljs$core$async55808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55808";

cljs.core.async.t_cljs$core$async55808.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async55808");
});

cljs.core.async.__GT_t_cljs$core$async55808 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55808(f__$1,ch__$1,meta55809){
return (new cljs.core.async.t_cljs$core$async55808(f__$1,ch__$1,meta55809));
});

}

return (new cljs.core.async.t_cljs$core$async55808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55817 = (function (f,ch,meta55818){
this.f = f;
this.ch = ch;
this.meta55818 = meta55818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55819,meta55818__$1){
var self__ = this;
var _55819__$1 = this;
return (new cljs.core.async.t_cljs$core$async55817(self__.f,self__.ch,meta55818__$1));
});

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55819){
var self__ = this;
var _55819__$1 = this;
return self__.meta55818;
});

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async55817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55818","meta55818",-1983586998,null)], null);
});

cljs.core.async.t_cljs$core$async55817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55817";

cljs.core.async.t_cljs$core$async55817.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async55817");
});

cljs.core.async.__GT_t_cljs$core$async55817 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55817(f__$1,ch__$1,meta55818){
return (new cljs.core.async.t_cljs$core$async55817(f__$1,ch__$1,meta55818));
});

}

return (new cljs.core.async.t_cljs$core$async55817(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async55823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55823 = (function (p,ch,meta55824){
this.p = p;
this.ch = ch;
this.meta55824 = meta55824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55825,meta55824__$1){
var self__ = this;
var _55825__$1 = this;
return (new cljs.core.async.t_cljs$core$async55823(self__.p,self__.ch,meta55824__$1));
});

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55825){
var self__ = this;
var _55825__$1 = this;
return self__.meta55824;
});

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async55823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55824","meta55824",442652688,null)], null);
});

cljs.core.async.t_cljs$core$async55823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55823";

cljs.core.async.t_cljs$core$async55823.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cljs.core.async/t_cljs$core$async55823");
});

cljs.core.async.__GT_t_cljs$core$async55823 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55823(p__$1,ch__$1,meta55824){
return (new cljs.core.async.t_cljs$core$async55823(p__$1,ch__$1,meta55824));
});

}

return (new cljs.core.async.t_cljs$core$async55823(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args55826 = [];
var len__48239__auto___55870 = arguments.length;
var i__48240__auto___55871 = (0);
while(true){
if((i__48240__auto___55871 < len__48239__auto___55870)){
args55826.push((arguments[i__48240__auto___55871]));

var G__55872 = (i__48240__auto___55871 + (1));
i__48240__auto___55871 = G__55872;
continue;
} else {
}
break;
}

var G__55828 = args55826.length;
switch (G__55828) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55826.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53568__auto___55874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___55874,out){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___55874,out){
return (function (state_55849){
var state_val_55850 = (state_55849[(1)]);
if((state_val_55850 === (7))){
var inst_55845 = (state_55849[(2)]);
var state_55849__$1 = state_55849;
var statearr_55851_55875 = state_55849__$1;
(statearr_55851_55875[(2)] = inst_55845);

(statearr_55851_55875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (1))){
var state_55849__$1 = state_55849;
var statearr_55852_55876 = state_55849__$1;
(statearr_55852_55876[(2)] = null);

(statearr_55852_55876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (4))){
var inst_55831 = (state_55849[(7)]);
var inst_55831__$1 = (state_55849[(2)]);
var inst_55832 = (inst_55831__$1 == null);
var state_55849__$1 = (function (){var statearr_55853 = state_55849;
(statearr_55853[(7)] = inst_55831__$1);

return statearr_55853;
})();
if(cljs.core.truth_(inst_55832)){
var statearr_55854_55877 = state_55849__$1;
(statearr_55854_55877[(1)] = (5));

} else {
var statearr_55855_55878 = state_55849__$1;
(statearr_55855_55878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (6))){
var inst_55831 = (state_55849[(7)]);
var inst_55836 = p.call(null,inst_55831);
var state_55849__$1 = state_55849;
if(cljs.core.truth_(inst_55836)){
var statearr_55856_55879 = state_55849__$1;
(statearr_55856_55879[(1)] = (8));

} else {
var statearr_55857_55880 = state_55849__$1;
(statearr_55857_55880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (3))){
var inst_55847 = (state_55849[(2)]);
var state_55849__$1 = state_55849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55849__$1,inst_55847);
} else {
if((state_val_55850 === (2))){
var state_55849__$1 = state_55849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55849__$1,(4),ch);
} else {
if((state_val_55850 === (11))){
var inst_55839 = (state_55849[(2)]);
var state_55849__$1 = state_55849;
var statearr_55858_55881 = state_55849__$1;
(statearr_55858_55881[(2)] = inst_55839);

(statearr_55858_55881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (9))){
var state_55849__$1 = state_55849;
var statearr_55859_55882 = state_55849__$1;
(statearr_55859_55882[(2)] = null);

(statearr_55859_55882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (5))){
var inst_55834 = cljs.core.async.close_BANG_.call(null,out);
var state_55849__$1 = state_55849;
var statearr_55860_55883 = state_55849__$1;
(statearr_55860_55883[(2)] = inst_55834);

(statearr_55860_55883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (10))){
var inst_55842 = (state_55849[(2)]);
var state_55849__$1 = (function (){var statearr_55861 = state_55849;
(statearr_55861[(8)] = inst_55842);

return statearr_55861;
})();
var statearr_55862_55884 = state_55849__$1;
(statearr_55862_55884[(2)] = null);

(statearr_55862_55884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55850 === (8))){
var inst_55831 = (state_55849[(7)]);
var state_55849__$1 = state_55849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55849__$1,(11),out,inst_55831);
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
});})(c__53568__auto___55874,out))
;
return ((function (switch__53456__auto__,c__53568__auto___55874,out){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_55866 = [null,null,null,null,null,null,null,null,null];
(statearr_55866[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_55866[(1)] = (1));

return statearr_55866;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_55849){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_55849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e55867){if((e55867 instanceof Object)){
var ex__53460__auto__ = e55867;
var statearr_55868_55885 = state_55849;
(statearr_55868_55885[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55886 = state_55849;
state_55849 = G__55886;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_55849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_55849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___55874,out))
})();
var state__53570__auto__ = (function (){var statearr_55869 = f__53569__auto__.call(null);
(statearr_55869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___55874);

return statearr_55869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___55874,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args55887 = [];
var len__48239__auto___55890 = arguments.length;
var i__48240__auto___55891 = (0);
while(true){
if((i__48240__auto___55891 < len__48239__auto___55890)){
args55887.push((arguments[i__48240__auto___55891]));

var G__55892 = (i__48240__auto___55891 + (1));
i__48240__auto___55891 = G__55892;
continue;
} else {
}
break;
}

var G__55889 = args55887.length;
switch (G__55889) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55887.length)].join('')));

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
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__){
return (function (state_56059){
var state_val_56060 = (state_56059[(1)]);
if((state_val_56060 === (7))){
var inst_56055 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56061_56102 = state_56059__$1;
(statearr_56061_56102[(2)] = inst_56055);

(statearr_56061_56102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (20))){
var inst_56025 = (state_56059[(7)]);
var inst_56036 = (state_56059[(2)]);
var inst_56037 = cljs.core.next.call(null,inst_56025);
var inst_56011 = inst_56037;
var inst_56012 = null;
var inst_56013 = (0);
var inst_56014 = (0);
var state_56059__$1 = (function (){var statearr_56062 = state_56059;
(statearr_56062[(8)] = inst_56036);

(statearr_56062[(9)] = inst_56014);

(statearr_56062[(10)] = inst_56013);

(statearr_56062[(11)] = inst_56012);

(statearr_56062[(12)] = inst_56011);

return statearr_56062;
})();
var statearr_56063_56103 = state_56059__$1;
(statearr_56063_56103[(2)] = null);

(statearr_56063_56103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (1))){
var state_56059__$1 = state_56059;
var statearr_56064_56104 = state_56059__$1;
(statearr_56064_56104[(2)] = null);

(statearr_56064_56104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (4))){
var inst_56000 = (state_56059[(13)]);
var inst_56000__$1 = (state_56059[(2)]);
var inst_56001 = (inst_56000__$1 == null);
var state_56059__$1 = (function (){var statearr_56065 = state_56059;
(statearr_56065[(13)] = inst_56000__$1);

return statearr_56065;
})();
if(cljs.core.truth_(inst_56001)){
var statearr_56066_56105 = state_56059__$1;
(statearr_56066_56105[(1)] = (5));

} else {
var statearr_56067_56106 = state_56059__$1;
(statearr_56067_56106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (15))){
var state_56059__$1 = state_56059;
var statearr_56071_56107 = state_56059__$1;
(statearr_56071_56107[(2)] = null);

(statearr_56071_56107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (21))){
var state_56059__$1 = state_56059;
var statearr_56072_56108 = state_56059__$1;
(statearr_56072_56108[(2)] = null);

(statearr_56072_56108[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (13))){
var inst_56014 = (state_56059[(9)]);
var inst_56013 = (state_56059[(10)]);
var inst_56012 = (state_56059[(11)]);
var inst_56011 = (state_56059[(12)]);
var inst_56021 = (state_56059[(2)]);
var inst_56022 = (inst_56014 + (1));
var tmp56068 = inst_56013;
var tmp56069 = inst_56012;
var tmp56070 = inst_56011;
var inst_56011__$1 = tmp56070;
var inst_56012__$1 = tmp56069;
var inst_56013__$1 = tmp56068;
var inst_56014__$1 = inst_56022;
var state_56059__$1 = (function (){var statearr_56073 = state_56059;
(statearr_56073[(9)] = inst_56014__$1);

(statearr_56073[(14)] = inst_56021);

(statearr_56073[(10)] = inst_56013__$1);

(statearr_56073[(11)] = inst_56012__$1);

(statearr_56073[(12)] = inst_56011__$1);

return statearr_56073;
})();
var statearr_56074_56109 = state_56059__$1;
(statearr_56074_56109[(2)] = null);

(statearr_56074_56109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (22))){
var state_56059__$1 = state_56059;
var statearr_56075_56110 = state_56059__$1;
(statearr_56075_56110[(2)] = null);

(statearr_56075_56110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (6))){
var inst_56000 = (state_56059[(13)]);
var inst_56009 = f.call(null,inst_56000);
var inst_56010 = cljs.core.seq.call(null,inst_56009);
var inst_56011 = inst_56010;
var inst_56012 = null;
var inst_56013 = (0);
var inst_56014 = (0);
var state_56059__$1 = (function (){var statearr_56076 = state_56059;
(statearr_56076[(9)] = inst_56014);

(statearr_56076[(10)] = inst_56013);

(statearr_56076[(11)] = inst_56012);

(statearr_56076[(12)] = inst_56011);

return statearr_56076;
})();
var statearr_56077_56111 = state_56059__$1;
(statearr_56077_56111[(2)] = null);

(statearr_56077_56111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (17))){
var inst_56025 = (state_56059[(7)]);
var inst_56029 = cljs.core.chunk_first.call(null,inst_56025);
var inst_56030 = cljs.core.chunk_rest.call(null,inst_56025);
var inst_56031 = cljs.core.count.call(null,inst_56029);
var inst_56011 = inst_56030;
var inst_56012 = inst_56029;
var inst_56013 = inst_56031;
var inst_56014 = (0);
var state_56059__$1 = (function (){var statearr_56078 = state_56059;
(statearr_56078[(9)] = inst_56014);

(statearr_56078[(10)] = inst_56013);

(statearr_56078[(11)] = inst_56012);

(statearr_56078[(12)] = inst_56011);

return statearr_56078;
})();
var statearr_56079_56112 = state_56059__$1;
(statearr_56079_56112[(2)] = null);

(statearr_56079_56112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (3))){
var inst_56057 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56059__$1,inst_56057);
} else {
if((state_val_56060 === (12))){
var inst_56045 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56080_56113 = state_56059__$1;
(statearr_56080_56113[(2)] = inst_56045);

(statearr_56080_56113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (2))){
var state_56059__$1 = state_56059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56059__$1,(4),in$);
} else {
if((state_val_56060 === (23))){
var inst_56053 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56081_56114 = state_56059__$1;
(statearr_56081_56114[(2)] = inst_56053);

(statearr_56081_56114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (19))){
var inst_56040 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56082_56115 = state_56059__$1;
(statearr_56082_56115[(2)] = inst_56040);

(statearr_56082_56115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (11))){
var inst_56025 = (state_56059[(7)]);
var inst_56011 = (state_56059[(12)]);
var inst_56025__$1 = cljs.core.seq.call(null,inst_56011);
var state_56059__$1 = (function (){var statearr_56083 = state_56059;
(statearr_56083[(7)] = inst_56025__$1);

return statearr_56083;
})();
if(inst_56025__$1){
var statearr_56084_56116 = state_56059__$1;
(statearr_56084_56116[(1)] = (14));

} else {
var statearr_56085_56117 = state_56059__$1;
(statearr_56085_56117[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (9))){
var inst_56047 = (state_56059[(2)]);
var inst_56048 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_56059__$1 = (function (){var statearr_56086 = state_56059;
(statearr_56086[(15)] = inst_56047);

return statearr_56086;
})();
if(cljs.core.truth_(inst_56048)){
var statearr_56087_56118 = state_56059__$1;
(statearr_56087_56118[(1)] = (21));

} else {
var statearr_56088_56119 = state_56059__$1;
(statearr_56088_56119[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (5))){
var inst_56003 = cljs.core.async.close_BANG_.call(null,out);
var state_56059__$1 = state_56059;
var statearr_56089_56120 = state_56059__$1;
(statearr_56089_56120[(2)] = inst_56003);

(statearr_56089_56120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (14))){
var inst_56025 = (state_56059[(7)]);
var inst_56027 = cljs.core.chunked_seq_QMARK_.call(null,inst_56025);
var state_56059__$1 = state_56059;
if(inst_56027){
var statearr_56090_56121 = state_56059__$1;
(statearr_56090_56121[(1)] = (17));

} else {
var statearr_56091_56122 = state_56059__$1;
(statearr_56091_56122[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (16))){
var inst_56043 = (state_56059[(2)]);
var state_56059__$1 = state_56059;
var statearr_56092_56123 = state_56059__$1;
(statearr_56092_56123[(2)] = inst_56043);

(statearr_56092_56123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56060 === (10))){
var inst_56014 = (state_56059[(9)]);
var inst_56012 = (state_56059[(11)]);
var inst_56019 = cljs.core._nth.call(null,inst_56012,inst_56014);
var state_56059__$1 = state_56059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56059__$1,(13),out,inst_56019);
} else {
if((state_val_56060 === (18))){
var inst_56025 = (state_56059[(7)]);
var inst_56034 = cljs.core.first.call(null,inst_56025);
var state_56059__$1 = state_56059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56059__$1,(20),out,inst_56034);
} else {
if((state_val_56060 === (8))){
var inst_56014 = (state_56059[(9)]);
var inst_56013 = (state_56059[(10)]);
var inst_56016 = (inst_56014 < inst_56013);
var inst_56017 = inst_56016;
var state_56059__$1 = state_56059;
if(cljs.core.truth_(inst_56017)){
var statearr_56093_56124 = state_56059__$1;
(statearr_56093_56124[(1)] = (10));

} else {
var statearr_56094_56125 = state_56059__$1;
(statearr_56094_56125[(1)] = (11));

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
});})(c__53568__auto__))
;
return ((function (switch__53456__auto__,c__53568__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__53457__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53457__auto____0 = (function (){
var statearr_56098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56098[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53457__auto__);

(statearr_56098[(1)] = (1));

return statearr_56098;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53457__auto____1 = (function (state_56059){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_56059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e56099){if((e56099 instanceof Object)){
var ex__53460__auto__ = e56099;
var statearr_56100_56126 = state_56059;
(statearr_56100_56126[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56127 = state_56059;
state_56059 = G__56127;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53457__auto__ = function(state_56059){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53457__auto____1.call(this,state_56059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53457__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53457__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__))
})();
var state__53570__auto__ = (function (){var statearr_56101 = f__53569__auto__.call(null);
(statearr_56101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_56101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__))
);

return c__53568__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args56128 = [];
var len__48239__auto___56131 = arguments.length;
var i__48240__auto___56132 = (0);
while(true){
if((i__48240__auto___56132 < len__48239__auto___56131)){
args56128.push((arguments[i__48240__auto___56132]));

var G__56133 = (i__48240__auto___56132 + (1));
i__48240__auto___56132 = G__56133;
continue;
} else {
}
break;
}

var G__56130 = args56128.length;
switch (G__56130) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56128.length)].join('')));

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
var args56135 = [];
var len__48239__auto___56138 = arguments.length;
var i__48240__auto___56139 = (0);
while(true){
if((i__48240__auto___56139 < len__48239__auto___56138)){
args56135.push((arguments[i__48240__auto___56139]));

var G__56140 = (i__48240__auto___56139 + (1));
i__48240__auto___56139 = G__56140;
continue;
} else {
}
break;
}

var G__56137 = args56135.length;
switch (G__56137) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56135.length)].join('')));

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
var args56142 = [];
var len__48239__auto___56193 = arguments.length;
var i__48240__auto___56194 = (0);
while(true){
if((i__48240__auto___56194 < len__48239__auto___56193)){
args56142.push((arguments[i__48240__auto___56194]));

var G__56195 = (i__48240__auto___56194 + (1));
i__48240__auto___56194 = G__56195;
continue;
} else {
}
break;
}

var G__56144 = args56142.length;
switch (G__56144) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56142.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53568__auto___56197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___56197,out){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___56197,out){
return (function (state_56168){
var state_val_56169 = (state_56168[(1)]);
if((state_val_56169 === (7))){
var inst_56163 = (state_56168[(2)]);
var state_56168__$1 = state_56168;
var statearr_56170_56198 = state_56168__$1;
(statearr_56170_56198[(2)] = inst_56163);

(statearr_56170_56198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (1))){
var inst_56145 = null;
var state_56168__$1 = (function (){var statearr_56171 = state_56168;
(statearr_56171[(7)] = inst_56145);

return statearr_56171;
})();
var statearr_56172_56199 = state_56168__$1;
(statearr_56172_56199[(2)] = null);

(statearr_56172_56199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (4))){
var inst_56148 = (state_56168[(8)]);
var inst_56148__$1 = (state_56168[(2)]);
var inst_56149 = (inst_56148__$1 == null);
var inst_56150 = cljs.core.not.call(null,inst_56149);
var state_56168__$1 = (function (){var statearr_56173 = state_56168;
(statearr_56173[(8)] = inst_56148__$1);

return statearr_56173;
})();
if(inst_56150){
var statearr_56174_56200 = state_56168__$1;
(statearr_56174_56200[(1)] = (5));

} else {
var statearr_56175_56201 = state_56168__$1;
(statearr_56175_56201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (6))){
var state_56168__$1 = state_56168;
var statearr_56176_56202 = state_56168__$1;
(statearr_56176_56202[(2)] = null);

(statearr_56176_56202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (3))){
var inst_56165 = (state_56168[(2)]);
var inst_56166 = cljs.core.async.close_BANG_.call(null,out);
var state_56168__$1 = (function (){var statearr_56177 = state_56168;
(statearr_56177[(9)] = inst_56165);

return statearr_56177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56168__$1,inst_56166);
} else {
if((state_val_56169 === (2))){
var state_56168__$1 = state_56168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56168__$1,(4),ch);
} else {
if((state_val_56169 === (11))){
var inst_56148 = (state_56168[(8)]);
var inst_56157 = (state_56168[(2)]);
var inst_56145 = inst_56148;
var state_56168__$1 = (function (){var statearr_56178 = state_56168;
(statearr_56178[(10)] = inst_56157);

(statearr_56178[(7)] = inst_56145);

return statearr_56178;
})();
var statearr_56179_56203 = state_56168__$1;
(statearr_56179_56203[(2)] = null);

(statearr_56179_56203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (9))){
var inst_56148 = (state_56168[(8)]);
var state_56168__$1 = state_56168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56168__$1,(11),out,inst_56148);
} else {
if((state_val_56169 === (5))){
var inst_56145 = (state_56168[(7)]);
var inst_56148 = (state_56168[(8)]);
var inst_56152 = cljs.core._EQ_.call(null,inst_56148,inst_56145);
var state_56168__$1 = state_56168;
if(inst_56152){
var statearr_56181_56204 = state_56168__$1;
(statearr_56181_56204[(1)] = (8));

} else {
var statearr_56182_56205 = state_56168__$1;
(statearr_56182_56205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (10))){
var inst_56160 = (state_56168[(2)]);
var state_56168__$1 = state_56168;
var statearr_56183_56206 = state_56168__$1;
(statearr_56183_56206[(2)] = inst_56160);

(statearr_56183_56206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56169 === (8))){
var inst_56145 = (state_56168[(7)]);
var tmp56180 = inst_56145;
var inst_56145__$1 = tmp56180;
var state_56168__$1 = (function (){var statearr_56184 = state_56168;
(statearr_56184[(7)] = inst_56145__$1);

return statearr_56184;
})();
var statearr_56185_56207 = state_56168__$1;
(statearr_56185_56207[(2)] = null);

(statearr_56185_56207[(1)] = (2));


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
});})(c__53568__auto___56197,out))
;
return ((function (switch__53456__auto__,c__53568__auto___56197,out){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_56189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56189[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_56189[(1)] = (1));

return statearr_56189;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_56168){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_56168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e56190){if((e56190 instanceof Object)){
var ex__53460__auto__ = e56190;
var statearr_56191_56208 = state_56168;
(statearr_56191_56208[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56209 = state_56168;
state_56168 = G__56209;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_56168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_56168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___56197,out))
})();
var state__53570__auto__ = (function (){var statearr_56192 = f__53569__auto__.call(null);
(statearr_56192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___56197);

return statearr_56192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___56197,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args56210 = [];
var len__48239__auto___56280 = arguments.length;
var i__48240__auto___56281 = (0);
while(true){
if((i__48240__auto___56281 < len__48239__auto___56280)){
args56210.push((arguments[i__48240__auto___56281]));

var G__56282 = (i__48240__auto___56281 + (1));
i__48240__auto___56281 = G__56282;
continue;
} else {
}
break;
}

var G__56212 = args56210.length;
switch (G__56212) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56210.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53568__auto___56284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___56284,out){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___56284,out){
return (function (state_56250){
var state_val_56251 = (state_56250[(1)]);
if((state_val_56251 === (7))){
var inst_56246 = (state_56250[(2)]);
var state_56250__$1 = state_56250;
var statearr_56252_56285 = state_56250__$1;
(statearr_56252_56285[(2)] = inst_56246);

(statearr_56252_56285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (1))){
var inst_56213 = (new Array(n));
var inst_56214 = inst_56213;
var inst_56215 = (0);
var state_56250__$1 = (function (){var statearr_56253 = state_56250;
(statearr_56253[(7)] = inst_56214);

(statearr_56253[(8)] = inst_56215);

return statearr_56253;
})();
var statearr_56254_56286 = state_56250__$1;
(statearr_56254_56286[(2)] = null);

(statearr_56254_56286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (4))){
var inst_56218 = (state_56250[(9)]);
var inst_56218__$1 = (state_56250[(2)]);
var inst_56219 = (inst_56218__$1 == null);
var inst_56220 = cljs.core.not.call(null,inst_56219);
var state_56250__$1 = (function (){var statearr_56255 = state_56250;
(statearr_56255[(9)] = inst_56218__$1);

return statearr_56255;
})();
if(inst_56220){
var statearr_56256_56287 = state_56250__$1;
(statearr_56256_56287[(1)] = (5));

} else {
var statearr_56257_56288 = state_56250__$1;
(statearr_56257_56288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (15))){
var inst_56240 = (state_56250[(2)]);
var state_56250__$1 = state_56250;
var statearr_56258_56289 = state_56250__$1;
(statearr_56258_56289[(2)] = inst_56240);

(statearr_56258_56289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (13))){
var state_56250__$1 = state_56250;
var statearr_56259_56290 = state_56250__$1;
(statearr_56259_56290[(2)] = null);

(statearr_56259_56290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (6))){
var inst_56215 = (state_56250[(8)]);
var inst_56236 = (inst_56215 > (0));
var state_56250__$1 = state_56250;
if(cljs.core.truth_(inst_56236)){
var statearr_56260_56291 = state_56250__$1;
(statearr_56260_56291[(1)] = (12));

} else {
var statearr_56261_56292 = state_56250__$1;
(statearr_56261_56292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (3))){
var inst_56248 = (state_56250[(2)]);
var state_56250__$1 = state_56250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56250__$1,inst_56248);
} else {
if((state_val_56251 === (12))){
var inst_56214 = (state_56250[(7)]);
var inst_56238 = cljs.core.vec.call(null,inst_56214);
var state_56250__$1 = state_56250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56250__$1,(15),out,inst_56238);
} else {
if((state_val_56251 === (2))){
var state_56250__$1 = state_56250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56250__$1,(4),ch);
} else {
if((state_val_56251 === (11))){
var inst_56230 = (state_56250[(2)]);
var inst_56231 = (new Array(n));
var inst_56214 = inst_56231;
var inst_56215 = (0);
var state_56250__$1 = (function (){var statearr_56262 = state_56250;
(statearr_56262[(7)] = inst_56214);

(statearr_56262[(8)] = inst_56215);

(statearr_56262[(10)] = inst_56230);

return statearr_56262;
})();
var statearr_56263_56293 = state_56250__$1;
(statearr_56263_56293[(2)] = null);

(statearr_56263_56293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (9))){
var inst_56214 = (state_56250[(7)]);
var inst_56228 = cljs.core.vec.call(null,inst_56214);
var state_56250__$1 = state_56250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56250__$1,(11),out,inst_56228);
} else {
if((state_val_56251 === (5))){
var inst_56223 = (state_56250[(11)]);
var inst_56214 = (state_56250[(7)]);
var inst_56215 = (state_56250[(8)]);
var inst_56218 = (state_56250[(9)]);
var inst_56222 = (inst_56214[inst_56215] = inst_56218);
var inst_56223__$1 = (inst_56215 + (1));
var inst_56224 = (inst_56223__$1 < n);
var state_56250__$1 = (function (){var statearr_56264 = state_56250;
(statearr_56264[(11)] = inst_56223__$1);

(statearr_56264[(12)] = inst_56222);

return statearr_56264;
})();
if(cljs.core.truth_(inst_56224)){
var statearr_56265_56294 = state_56250__$1;
(statearr_56265_56294[(1)] = (8));

} else {
var statearr_56266_56295 = state_56250__$1;
(statearr_56266_56295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (14))){
var inst_56243 = (state_56250[(2)]);
var inst_56244 = cljs.core.async.close_BANG_.call(null,out);
var state_56250__$1 = (function (){var statearr_56268 = state_56250;
(statearr_56268[(13)] = inst_56243);

return statearr_56268;
})();
var statearr_56269_56296 = state_56250__$1;
(statearr_56269_56296[(2)] = inst_56244);

(statearr_56269_56296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (10))){
var inst_56234 = (state_56250[(2)]);
var state_56250__$1 = state_56250;
var statearr_56270_56297 = state_56250__$1;
(statearr_56270_56297[(2)] = inst_56234);

(statearr_56270_56297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56251 === (8))){
var inst_56223 = (state_56250[(11)]);
var inst_56214 = (state_56250[(7)]);
var tmp56267 = inst_56214;
var inst_56214__$1 = tmp56267;
var inst_56215 = inst_56223;
var state_56250__$1 = (function (){var statearr_56271 = state_56250;
(statearr_56271[(7)] = inst_56214__$1);

(statearr_56271[(8)] = inst_56215);

return statearr_56271;
})();
var statearr_56272_56298 = state_56250__$1;
(statearr_56272_56298[(2)] = null);

(statearr_56272_56298[(1)] = (2));


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
});})(c__53568__auto___56284,out))
;
return ((function (switch__53456__auto__,c__53568__auto___56284,out){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_56276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56276[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_56276[(1)] = (1));

return statearr_56276;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_56250){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_56250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e56277){if((e56277 instanceof Object)){
var ex__53460__auto__ = e56277;
var statearr_56278_56299 = state_56250;
(statearr_56278_56299[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56300 = state_56250;
state_56250 = G__56300;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_56250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_56250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___56284,out))
})();
var state__53570__auto__ = (function (){var statearr_56279 = f__53569__auto__.call(null);
(statearr_56279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___56284);

return statearr_56279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___56284,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args56301 = [];
var len__48239__auto___56375 = arguments.length;
var i__48240__auto___56376 = (0);
while(true){
if((i__48240__auto___56376 < len__48239__auto___56375)){
args56301.push((arguments[i__48240__auto___56376]));

var G__56377 = (i__48240__auto___56376 + (1));
i__48240__auto___56376 = G__56377;
continue;
} else {
}
break;
}

var G__56303 = args56301.length;
switch (G__56303) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56301.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53568__auto___56379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___56379,out){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___56379,out){
return (function (state_56345){
var state_val_56346 = (state_56345[(1)]);
if((state_val_56346 === (7))){
var inst_56341 = (state_56345[(2)]);
var state_56345__$1 = state_56345;
var statearr_56347_56380 = state_56345__$1;
(statearr_56347_56380[(2)] = inst_56341);

(statearr_56347_56380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (1))){
var inst_56304 = [];
var inst_56305 = inst_56304;
var inst_56306 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56345__$1 = (function (){var statearr_56348 = state_56345;
(statearr_56348[(7)] = inst_56305);

(statearr_56348[(8)] = inst_56306);

return statearr_56348;
})();
var statearr_56349_56381 = state_56345__$1;
(statearr_56349_56381[(2)] = null);

(statearr_56349_56381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (4))){
var inst_56309 = (state_56345[(9)]);
var inst_56309__$1 = (state_56345[(2)]);
var inst_56310 = (inst_56309__$1 == null);
var inst_56311 = cljs.core.not.call(null,inst_56310);
var state_56345__$1 = (function (){var statearr_56350 = state_56345;
(statearr_56350[(9)] = inst_56309__$1);

return statearr_56350;
})();
if(inst_56311){
var statearr_56351_56382 = state_56345__$1;
(statearr_56351_56382[(1)] = (5));

} else {
var statearr_56352_56383 = state_56345__$1;
(statearr_56352_56383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (15))){
var inst_56335 = (state_56345[(2)]);
var state_56345__$1 = state_56345;
var statearr_56353_56384 = state_56345__$1;
(statearr_56353_56384[(2)] = inst_56335);

(statearr_56353_56384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (13))){
var state_56345__$1 = state_56345;
var statearr_56354_56385 = state_56345__$1;
(statearr_56354_56385[(2)] = null);

(statearr_56354_56385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (6))){
var inst_56305 = (state_56345[(7)]);
var inst_56330 = inst_56305.length;
var inst_56331 = (inst_56330 > (0));
var state_56345__$1 = state_56345;
if(cljs.core.truth_(inst_56331)){
var statearr_56355_56386 = state_56345__$1;
(statearr_56355_56386[(1)] = (12));

} else {
var statearr_56356_56387 = state_56345__$1;
(statearr_56356_56387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (3))){
var inst_56343 = (state_56345[(2)]);
var state_56345__$1 = state_56345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56345__$1,inst_56343);
} else {
if((state_val_56346 === (12))){
var inst_56305 = (state_56345[(7)]);
var inst_56333 = cljs.core.vec.call(null,inst_56305);
var state_56345__$1 = state_56345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56345__$1,(15),out,inst_56333);
} else {
if((state_val_56346 === (2))){
var state_56345__$1 = state_56345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56345__$1,(4),ch);
} else {
if((state_val_56346 === (11))){
var inst_56309 = (state_56345[(9)]);
var inst_56313 = (state_56345[(10)]);
var inst_56323 = (state_56345[(2)]);
var inst_56324 = [];
var inst_56325 = inst_56324.push(inst_56309);
var inst_56305 = inst_56324;
var inst_56306 = inst_56313;
var state_56345__$1 = (function (){var statearr_56357 = state_56345;
(statearr_56357[(11)] = inst_56323);

(statearr_56357[(7)] = inst_56305);

(statearr_56357[(12)] = inst_56325);

(statearr_56357[(8)] = inst_56306);

return statearr_56357;
})();
var statearr_56358_56388 = state_56345__$1;
(statearr_56358_56388[(2)] = null);

(statearr_56358_56388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (9))){
var inst_56305 = (state_56345[(7)]);
var inst_56321 = cljs.core.vec.call(null,inst_56305);
var state_56345__$1 = state_56345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56345__$1,(11),out,inst_56321);
} else {
if((state_val_56346 === (5))){
var inst_56309 = (state_56345[(9)]);
var inst_56313 = (state_56345[(10)]);
var inst_56306 = (state_56345[(8)]);
var inst_56313__$1 = f.call(null,inst_56309);
var inst_56314 = cljs.core._EQ_.call(null,inst_56313__$1,inst_56306);
var inst_56315 = cljs.core.keyword_identical_QMARK_.call(null,inst_56306,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56316 = (inst_56314) || (inst_56315);
var state_56345__$1 = (function (){var statearr_56359 = state_56345;
(statearr_56359[(10)] = inst_56313__$1);

return statearr_56359;
})();
if(cljs.core.truth_(inst_56316)){
var statearr_56360_56389 = state_56345__$1;
(statearr_56360_56389[(1)] = (8));

} else {
var statearr_56361_56390 = state_56345__$1;
(statearr_56361_56390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (14))){
var inst_56338 = (state_56345[(2)]);
var inst_56339 = cljs.core.async.close_BANG_.call(null,out);
var state_56345__$1 = (function (){var statearr_56363 = state_56345;
(statearr_56363[(13)] = inst_56338);

return statearr_56363;
})();
var statearr_56364_56391 = state_56345__$1;
(statearr_56364_56391[(2)] = inst_56339);

(statearr_56364_56391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (10))){
var inst_56328 = (state_56345[(2)]);
var state_56345__$1 = state_56345;
var statearr_56365_56392 = state_56345__$1;
(statearr_56365_56392[(2)] = inst_56328);

(statearr_56365_56392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56346 === (8))){
var inst_56309 = (state_56345[(9)]);
var inst_56305 = (state_56345[(7)]);
var inst_56313 = (state_56345[(10)]);
var inst_56318 = inst_56305.push(inst_56309);
var tmp56362 = inst_56305;
var inst_56305__$1 = tmp56362;
var inst_56306 = inst_56313;
var state_56345__$1 = (function (){var statearr_56366 = state_56345;
(statearr_56366[(14)] = inst_56318);

(statearr_56366[(7)] = inst_56305__$1);

(statearr_56366[(8)] = inst_56306);

return statearr_56366;
})();
var statearr_56367_56393 = state_56345__$1;
(statearr_56367_56393[(2)] = null);

(statearr_56367_56393[(1)] = (2));


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
});})(c__53568__auto___56379,out))
;
return ((function (switch__53456__auto__,c__53568__auto___56379,out){
return (function() {
var cljs$core$async$state_machine__53457__auto__ = null;
var cljs$core$async$state_machine__53457__auto____0 = (function (){
var statearr_56371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56371[(0)] = cljs$core$async$state_machine__53457__auto__);

(statearr_56371[(1)] = (1));

return statearr_56371;
});
var cljs$core$async$state_machine__53457__auto____1 = (function (state_56345){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_56345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e56372){if((e56372 instanceof Object)){
var ex__53460__auto__ = e56372;
var statearr_56373_56394 = state_56345;
(statearr_56373_56394[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56395 = state_56345;
state_56345 = G__56395;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
cljs$core$async$state_machine__53457__auto__ = function(state_56345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53457__auto____1.call(this,state_56345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53457__auto____0;
cljs$core$async$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53457__auto____1;
return cljs$core$async$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___56379,out))
})();
var state__53570__auto__ = (function (){var statearr_56374 = f__53569__auto__.call(null);
(statearr_56374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___56379);

return statearr_56374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___56379,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map