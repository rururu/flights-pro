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
var args15648 = [];
var len__9931__auto___15654 = arguments.length;
var i__9932__auto___15655 = (0);
while(true){
if((i__9932__auto___15655 < len__9931__auto___15654)){
args15648.push((arguments[i__9932__auto___15655]));

var G__15656 = (i__9932__auto___15655 + (1));
i__9932__auto___15655 = G__15656;
continue;
} else {
}
break;
}

var G__15650 = args15648.length;
switch (G__15650) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15648.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15651 = (function (f,blockable,meta15652){
this.f = f;
this.blockable = blockable;
this.meta15652 = meta15652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15653,meta15652__$1){
var self__ = this;
var _15653__$1 = this;
return (new cljs.core.async.t_cljs$core$async15651(self__.f,self__.blockable,meta15652__$1));
});

cljs.core.async.t_cljs$core$async15651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15653){
var self__ = this;
var _15653__$1 = this;
return self__.meta15652;
});

cljs.core.async.t_cljs$core$async15651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15652","meta15652",-1479071446,null)], null);
});

cljs.core.async.t_cljs$core$async15651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15651";

cljs.core.async.t_cljs$core$async15651.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async15651");
});

cljs.core.async.__GT_t_cljs$core$async15651 = (function cljs$core$async$__GT_t_cljs$core$async15651(f__$1,blockable__$1,meta15652){
return (new cljs.core.async.t_cljs$core$async15651(f__$1,blockable__$1,meta15652));
});

}

return (new cljs.core.async.t_cljs$core$async15651(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15660 = [];
var len__9931__auto___15663 = arguments.length;
var i__9932__auto___15664 = (0);
while(true){
if((i__9932__auto___15664 < len__9931__auto___15663)){
args15660.push((arguments[i__9932__auto___15664]));

var G__15665 = (i__9932__auto___15664 + (1));
i__9932__auto___15664 = G__15665;
continue;
} else {
}
break;
}

var G__15662 = args15660.length;
switch (G__15662) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15660.length)].join('')));

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
var args15667 = [];
var len__9931__auto___15670 = arguments.length;
var i__9932__auto___15671 = (0);
while(true){
if((i__9932__auto___15671 < len__9931__auto___15670)){
args15667.push((arguments[i__9932__auto___15671]));

var G__15672 = (i__9932__auto___15671 + (1));
i__9932__auto___15671 = G__15672;
continue;
} else {
}
break;
}

var G__15669 = args15667.length;
switch (G__15669) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15667.length)].join('')));

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
var args15674 = [];
var len__9931__auto___15677 = arguments.length;
var i__9932__auto___15678 = (0);
while(true){
if((i__9932__auto___15678 < len__9931__auto___15677)){
args15674.push((arguments[i__9932__auto___15678]));

var G__15679 = (i__9932__auto___15678 + (1));
i__9932__auto___15678 = G__15679;
continue;
} else {
}
break;
}

var G__15676 = args15674.length;
switch (G__15676) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15674.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15681 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15681);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15681,ret){
return (function (){
return fn1.call(null,val_15681);
});})(val_15681,ret))
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
var args15682 = [];
var len__9931__auto___15685 = arguments.length;
var i__9932__auto___15686 = (0);
while(true){
if((i__9932__auto___15686 < len__9931__auto___15685)){
args15682.push((arguments[i__9932__auto___15686]));

var G__15687 = (i__9932__auto___15686 + (1));
i__9932__auto___15686 = G__15687;
continue;
} else {
}
break;
}

var G__15684 = args15682.length;
switch (G__15684) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15682.length)].join('')));

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
var n__9741__auto___15689 = n;
var x_15690 = (0);
while(true){
if((x_15690 < n__9741__auto___15689)){
(a[x_15690] = (0));

var G__15691 = (x_15690 + (1));
x_15690 = G__15691;
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

var G__15692 = (i + (1));
i = G__15692;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15696 = (function (flag,meta15697){
this.flag = flag;
this.meta15697 = meta15697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15698,meta15697__$1){
var self__ = this;
var _15698__$1 = this;
return (new cljs.core.async.t_cljs$core$async15696(self__.flag,meta15697__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15698){
var self__ = this;
var _15698__$1 = this;
return self__.meta15697;
});})(flag))
;

cljs.core.async.t_cljs$core$async15696.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15696.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15697","meta15697",109526275,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15696";

cljs.core.async.t_cljs$core$async15696.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async15696");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15696 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15696(flag__$1,meta15697){
return (new cljs.core.async.t_cljs$core$async15696(flag__$1,meta15697));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15696(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15702 = (function (flag,cb,meta15703){
this.flag = flag;
this.cb = cb;
this.meta15703 = meta15703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15704,meta15703__$1){
var self__ = this;
var _15704__$1 = this;
return (new cljs.core.async.t_cljs$core$async15702(self__.flag,self__.cb,meta15703__$1));
});

cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15704){
var self__ = this;
var _15704__$1 = this;
return self__.meta15703;
});

cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15703","meta15703",-183966086,null)], null);
});

cljs.core.async.t_cljs$core$async15702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15702";

cljs.core.async.t_cljs$core$async15702.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async15702");
});

cljs.core.async.__GT_t_cljs$core$async15702 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15702(flag__$1,cb__$1,meta15703){
return (new cljs.core.async.t_cljs$core$async15702(flag__$1,cb__$1,meta15703));
});

}

return (new cljs.core.async.t_cljs$core$async15702(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15705_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15705_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15706_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15706_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8823__auto__ = wport;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15707 = (i + (1));
i = G__15707;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8823__auto__ = ret;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8811__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8811__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8811__auto__;
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
var args__9938__auto__ = [];
var len__9931__auto___15713 = arguments.length;
var i__9932__auto___15714 = (0);
while(true){
if((i__9932__auto___15714 < len__9931__auto___15713)){
args__9938__auto__.push((arguments[i__9932__auto___15714]));

var G__15715 = (i__9932__auto___15714 + (1));
i__9932__auto___15714 = G__15715;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((1) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9939__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15710){
var map__15711 = p__15710;
var map__15711__$1 = ((((!((map__15711 == null)))?((((map__15711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15711):map__15711);
var opts = map__15711__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15708){
var G__15709 = cljs.core.first.call(null,seq15708);
var seq15708__$1 = cljs.core.next.call(null,seq15708);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15709,seq15708__$1);
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
var args15716 = [];
var len__9931__auto___15766 = arguments.length;
var i__9932__auto___15767 = (0);
while(true){
if((i__9932__auto___15767 < len__9931__auto___15766)){
args15716.push((arguments[i__9932__auto___15767]));

var G__15768 = (i__9932__auto___15767 + (1));
i__9932__auto___15767 = G__15768;
continue;
} else {
}
break;
}

var G__15718 = args15716.length;
switch (G__15718) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15716.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15603__auto___15770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___15770){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___15770){
return (function (state_15742){
var state_val_15743 = (state_15742[(1)]);
if((state_val_15743 === (7))){
var inst_15738 = (state_15742[(2)]);
var state_15742__$1 = state_15742;
var statearr_15744_15771 = state_15742__$1;
(statearr_15744_15771[(2)] = inst_15738);

(statearr_15744_15771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (1))){
var state_15742__$1 = state_15742;
var statearr_15745_15772 = state_15742__$1;
(statearr_15745_15772[(2)] = null);

(statearr_15745_15772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (4))){
var inst_15721 = (state_15742[(7)]);
var inst_15721__$1 = (state_15742[(2)]);
var inst_15722 = (inst_15721__$1 == null);
var state_15742__$1 = (function (){var statearr_15746 = state_15742;
(statearr_15746[(7)] = inst_15721__$1);

return statearr_15746;
})();
if(cljs.core.truth_(inst_15722)){
var statearr_15747_15773 = state_15742__$1;
(statearr_15747_15773[(1)] = (5));

} else {
var statearr_15748_15774 = state_15742__$1;
(statearr_15748_15774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (13))){
var state_15742__$1 = state_15742;
var statearr_15749_15775 = state_15742__$1;
(statearr_15749_15775[(2)] = null);

(statearr_15749_15775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (6))){
var inst_15721 = (state_15742[(7)]);
var state_15742__$1 = state_15742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15742__$1,(11),to,inst_15721);
} else {
if((state_val_15743 === (3))){
var inst_15740 = (state_15742[(2)]);
var state_15742__$1 = state_15742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15742__$1,inst_15740);
} else {
if((state_val_15743 === (12))){
var state_15742__$1 = state_15742;
var statearr_15750_15776 = state_15742__$1;
(statearr_15750_15776[(2)] = null);

(statearr_15750_15776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (2))){
var state_15742__$1 = state_15742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15742__$1,(4),from);
} else {
if((state_val_15743 === (11))){
var inst_15731 = (state_15742[(2)]);
var state_15742__$1 = state_15742;
if(cljs.core.truth_(inst_15731)){
var statearr_15751_15777 = state_15742__$1;
(statearr_15751_15777[(1)] = (12));

} else {
var statearr_15752_15778 = state_15742__$1;
(statearr_15752_15778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (9))){
var state_15742__$1 = state_15742;
var statearr_15753_15779 = state_15742__$1;
(statearr_15753_15779[(2)] = null);

(statearr_15753_15779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (5))){
var state_15742__$1 = state_15742;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15754_15780 = state_15742__$1;
(statearr_15754_15780[(1)] = (8));

} else {
var statearr_15755_15781 = state_15742__$1;
(statearr_15755_15781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (14))){
var inst_15736 = (state_15742[(2)]);
var state_15742__$1 = state_15742;
var statearr_15756_15782 = state_15742__$1;
(statearr_15756_15782[(2)] = inst_15736);

(statearr_15756_15782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (10))){
var inst_15728 = (state_15742[(2)]);
var state_15742__$1 = state_15742;
var statearr_15757_15783 = state_15742__$1;
(statearr_15757_15783[(2)] = inst_15728);

(statearr_15757_15783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15743 === (8))){
var inst_15725 = cljs.core.async.close_BANG_.call(null,to);
var state_15742__$1 = state_15742;
var statearr_15758_15784 = state_15742__$1;
(statearr_15758_15784[(2)] = inst_15725);

(statearr_15758_15784[(1)] = (10));


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
});})(c__15603__auto___15770))
;
return ((function (switch__15491__auto__,c__15603__auto___15770){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_15762 = [null,null,null,null,null,null,null,null];
(statearr_15762[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_15762[(1)] = (1));

return statearr_15762;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_15742){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_15742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e15763){if((e15763 instanceof Object)){
var ex__15495__auto__ = e15763;
var statearr_15764_15785 = state_15742;
(statearr_15764_15785[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15786 = state_15742;
state_15742 = G__15786;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_15742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_15742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___15770))
})();
var state__15605__auto__ = (function (){var statearr_15765 = f__15604__auto__.call(null);
(statearr_15765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___15770);

return statearr_15765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___15770))
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
return (function (p__15974){
var vec__15975 = p__15974;
var v = cljs.core.nth.call(null,vec__15975,(0),null);
var p = cljs.core.nth.call(null,vec__15975,(1),null);
var job = vec__15975;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15603__auto___16161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___16161,res,vec__15975,v,p,job,jobs,results){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___16161,res,vec__15975,v,p,job,jobs,results){
return (function (state_15982){
var state_val_15983 = (state_15982[(1)]);
if((state_val_15983 === (1))){
var state_15982__$1 = state_15982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15982__$1,(2),res,v);
} else {
if((state_val_15983 === (2))){
var inst_15979 = (state_15982[(2)]);
var inst_15980 = cljs.core.async.close_BANG_.call(null,res);
var state_15982__$1 = (function (){var statearr_15984 = state_15982;
(statearr_15984[(7)] = inst_15979);

return statearr_15984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15982__$1,inst_15980);
} else {
return null;
}
}
});})(c__15603__auto___16161,res,vec__15975,v,p,job,jobs,results))
;
return ((function (switch__15491__auto__,c__15603__auto___16161,res,vec__15975,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0 = (function (){
var statearr_15988 = [null,null,null,null,null,null,null,null];
(statearr_15988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__);

(statearr_15988[(1)] = (1));

return statearr_15988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1 = (function (state_15982){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_15982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e15989){if((e15989 instanceof Object)){
var ex__15495__auto__ = e15989;
var statearr_15990_16162 = state_15982;
(statearr_15990_16162[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16163 = state_15982;
state_15982 = G__16163;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = function(state_15982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1.call(this,state_15982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___16161,res,vec__15975,v,p,job,jobs,results))
})();
var state__15605__auto__ = (function (){var statearr_15991 = f__15604__auto__.call(null);
(statearr_15991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___16161);

return statearr_15991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___16161,res,vec__15975,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15992){
var vec__15993 = p__15992;
var v = cljs.core.nth.call(null,vec__15993,(0),null);
var p = cljs.core.nth.call(null,vec__15993,(1),null);
var job = vec__15993;
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
var n__9741__auto___16164 = n;
var __16165 = (0);
while(true){
if((__16165 < n__9741__auto___16164)){
var G__15996_16166 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15996_16166) {
case "compute":
var c__15603__auto___16168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16165,c__15603__auto___16168,G__15996_16166,n__9741__auto___16164,jobs,results,process,async){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (__16165,c__15603__auto___16168,G__15996_16166,n__9741__auto___16164,jobs,results,process,async){
return (function (state_16009){
var state_val_16010 = (state_16009[(1)]);
if((state_val_16010 === (1))){
var state_16009__$1 = state_16009;
var statearr_16011_16169 = state_16009__$1;
(statearr_16011_16169[(2)] = null);

(statearr_16011_16169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (2))){
var state_16009__$1 = state_16009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16009__$1,(4),jobs);
} else {
if((state_val_16010 === (3))){
var inst_16007 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16009__$1,inst_16007);
} else {
if((state_val_16010 === (4))){
var inst_15999 = (state_16009[(2)]);
var inst_16000 = process.call(null,inst_15999);
var state_16009__$1 = state_16009;
if(cljs.core.truth_(inst_16000)){
var statearr_16012_16170 = state_16009__$1;
(statearr_16012_16170[(1)] = (5));

} else {
var statearr_16013_16171 = state_16009__$1;
(statearr_16013_16171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (5))){
var state_16009__$1 = state_16009;
var statearr_16014_16172 = state_16009__$1;
(statearr_16014_16172[(2)] = null);

(statearr_16014_16172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (6))){
var state_16009__$1 = state_16009;
var statearr_16015_16173 = state_16009__$1;
(statearr_16015_16173[(2)] = null);

(statearr_16015_16173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (7))){
var inst_16005 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16016_16174 = state_16009__$1;
(statearr_16016_16174[(2)] = inst_16005);

(statearr_16016_16174[(1)] = (3));


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
});})(__16165,c__15603__auto___16168,G__15996_16166,n__9741__auto___16164,jobs,results,process,async))
;
return ((function (__16165,switch__15491__auto__,c__15603__auto___16168,G__15996_16166,n__9741__auto___16164,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0 = (function (){
var statearr_16020 = [null,null,null,null,null,null,null];
(statearr_16020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__);

(statearr_16020[(1)] = (1));

return statearr_16020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1 = (function (state_16009){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16021){if((e16021 instanceof Object)){
var ex__15495__auto__ = e16021;
var statearr_16022_16175 = state_16009;
(statearr_16022_16175[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16176 = state_16009;
state_16009 = G__16176;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = function(state_16009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1.call(this,state_16009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__;
})()
;})(__16165,switch__15491__auto__,c__15603__auto___16168,G__15996_16166,n__9741__auto___16164,jobs,results,process,async))
})();
var state__15605__auto__ = (function (){var statearr_16023 = f__15604__auto__.call(null);
(statearr_16023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___16168);

return statearr_16023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(__16165,c__15603__auto___16168,G__15996_16166,n__9741__auto___16164,jobs,results,process,async))
);


break;
case "async":
var c__15603__auto___16177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16165,c__15603__auto___16177,G__15996_16166,n__9741__auto___16164,jobs,results,process,async){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (__16165,c__15603__auto___16177,G__15996_16166,n__9741__auto___16164,jobs,results,process,async){
return (function (state_16036){
var state_val_16037 = (state_16036[(1)]);
if((state_val_16037 === (1))){
var state_16036__$1 = state_16036;
var statearr_16038_16178 = state_16036__$1;
(statearr_16038_16178[(2)] = null);

(statearr_16038_16178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16037 === (2))){
var state_16036__$1 = state_16036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16036__$1,(4),jobs);
} else {
if((state_val_16037 === (3))){
var inst_16034 = (state_16036[(2)]);
var state_16036__$1 = state_16036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16036__$1,inst_16034);
} else {
if((state_val_16037 === (4))){
var inst_16026 = (state_16036[(2)]);
var inst_16027 = async.call(null,inst_16026);
var state_16036__$1 = state_16036;
if(cljs.core.truth_(inst_16027)){
var statearr_16039_16179 = state_16036__$1;
(statearr_16039_16179[(1)] = (5));

} else {
var statearr_16040_16180 = state_16036__$1;
(statearr_16040_16180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16037 === (5))){
var state_16036__$1 = state_16036;
var statearr_16041_16181 = state_16036__$1;
(statearr_16041_16181[(2)] = null);

(statearr_16041_16181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16037 === (6))){
var state_16036__$1 = state_16036;
var statearr_16042_16182 = state_16036__$1;
(statearr_16042_16182[(2)] = null);

(statearr_16042_16182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16037 === (7))){
var inst_16032 = (state_16036[(2)]);
var state_16036__$1 = state_16036;
var statearr_16043_16183 = state_16036__$1;
(statearr_16043_16183[(2)] = inst_16032);

(statearr_16043_16183[(1)] = (3));


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
});})(__16165,c__15603__auto___16177,G__15996_16166,n__9741__auto___16164,jobs,results,process,async))
;
return ((function (__16165,switch__15491__auto__,c__15603__auto___16177,G__15996_16166,n__9741__auto___16164,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0 = (function (){
var statearr_16047 = [null,null,null,null,null,null,null];
(statearr_16047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__);

(statearr_16047[(1)] = (1));

return statearr_16047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1 = (function (state_16036){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16048){if((e16048 instanceof Object)){
var ex__15495__auto__ = e16048;
var statearr_16049_16184 = state_16036;
(statearr_16049_16184[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16185 = state_16036;
state_16036 = G__16185;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = function(state_16036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1.call(this,state_16036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__;
})()
;})(__16165,switch__15491__auto__,c__15603__auto___16177,G__15996_16166,n__9741__auto___16164,jobs,results,process,async))
})();
var state__15605__auto__ = (function (){var statearr_16050 = f__15604__auto__.call(null);
(statearr_16050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___16177);

return statearr_16050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(__16165,c__15603__auto___16177,G__15996_16166,n__9741__auto___16164,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16186 = (__16165 + (1));
__16165 = G__16186;
continue;
} else {
}
break;
}

var c__15603__auto___16187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___16187,jobs,results,process,async){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___16187,jobs,results,process,async){
return (function (state_16072){
var state_val_16073 = (state_16072[(1)]);
if((state_val_16073 === (1))){
var state_16072__$1 = state_16072;
var statearr_16074_16188 = state_16072__$1;
(statearr_16074_16188[(2)] = null);

(statearr_16074_16188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (2))){
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16072__$1,(4),from);
} else {
if((state_val_16073 === (3))){
var inst_16070 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16072__$1,inst_16070);
} else {
if((state_val_16073 === (4))){
var inst_16053 = (state_16072[(7)]);
var inst_16053__$1 = (state_16072[(2)]);
var inst_16054 = (inst_16053__$1 == null);
var state_16072__$1 = (function (){var statearr_16075 = state_16072;
(statearr_16075[(7)] = inst_16053__$1);

return statearr_16075;
})();
if(cljs.core.truth_(inst_16054)){
var statearr_16076_16189 = state_16072__$1;
(statearr_16076_16189[(1)] = (5));

} else {
var statearr_16077_16190 = state_16072__$1;
(statearr_16077_16190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (5))){
var inst_16056 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16072__$1 = state_16072;
var statearr_16078_16191 = state_16072__$1;
(statearr_16078_16191[(2)] = inst_16056);

(statearr_16078_16191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (6))){
var inst_16058 = (state_16072[(8)]);
var inst_16053 = (state_16072[(7)]);
var inst_16058__$1 = cljs.core.async.chan.call(null,(1));
var inst_16059 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16060 = [inst_16053,inst_16058__$1];
var inst_16061 = (new cljs.core.PersistentVector(null,2,(5),inst_16059,inst_16060,null));
var state_16072__$1 = (function (){var statearr_16079 = state_16072;
(statearr_16079[(8)] = inst_16058__$1);

return statearr_16079;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16072__$1,(8),jobs,inst_16061);
} else {
if((state_val_16073 === (7))){
var inst_16068 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
var statearr_16080_16192 = state_16072__$1;
(statearr_16080_16192[(2)] = inst_16068);

(statearr_16080_16192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (8))){
var inst_16058 = (state_16072[(8)]);
var inst_16063 = (state_16072[(2)]);
var state_16072__$1 = (function (){var statearr_16081 = state_16072;
(statearr_16081[(9)] = inst_16063);

return statearr_16081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16072__$1,(9),results,inst_16058);
} else {
if((state_val_16073 === (9))){
var inst_16065 = (state_16072[(2)]);
var state_16072__$1 = (function (){var statearr_16082 = state_16072;
(statearr_16082[(10)] = inst_16065);

return statearr_16082;
})();
var statearr_16083_16193 = state_16072__$1;
(statearr_16083_16193[(2)] = null);

(statearr_16083_16193[(1)] = (2));


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
});})(c__15603__auto___16187,jobs,results,process,async))
;
return ((function (switch__15491__auto__,c__15603__auto___16187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0 = (function (){
var statearr_16087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__);

(statearr_16087[(1)] = (1));

return statearr_16087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1 = (function (state_16072){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16088){if((e16088 instanceof Object)){
var ex__15495__auto__ = e16088;
var statearr_16089_16194 = state_16072;
(statearr_16089_16194[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16195 = state_16072;
state_16072 = G__16195;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = function(state_16072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1.call(this,state_16072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___16187,jobs,results,process,async))
})();
var state__15605__auto__ = (function (){var statearr_16090 = f__15604__auto__.call(null);
(statearr_16090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___16187);

return statearr_16090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___16187,jobs,results,process,async))
);


var c__15603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto__,jobs,results,process,async){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto__,jobs,results,process,async){
return (function (state_16128){
var state_val_16129 = (state_16128[(1)]);
if((state_val_16129 === (7))){
var inst_16124 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16130_16196 = state_16128__$1;
(statearr_16130_16196[(2)] = inst_16124);

(statearr_16130_16196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (20))){
var state_16128__$1 = state_16128;
var statearr_16131_16197 = state_16128__$1;
(statearr_16131_16197[(2)] = null);

(statearr_16131_16197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (1))){
var state_16128__$1 = state_16128;
var statearr_16132_16198 = state_16128__$1;
(statearr_16132_16198[(2)] = null);

(statearr_16132_16198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (4))){
var inst_16093 = (state_16128[(7)]);
var inst_16093__$1 = (state_16128[(2)]);
var inst_16094 = (inst_16093__$1 == null);
var state_16128__$1 = (function (){var statearr_16133 = state_16128;
(statearr_16133[(7)] = inst_16093__$1);

return statearr_16133;
})();
if(cljs.core.truth_(inst_16094)){
var statearr_16134_16199 = state_16128__$1;
(statearr_16134_16199[(1)] = (5));

} else {
var statearr_16135_16200 = state_16128__$1;
(statearr_16135_16200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (15))){
var inst_16106 = (state_16128[(8)]);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16128__$1,(18),to,inst_16106);
} else {
if((state_val_16129 === (21))){
var inst_16119 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16136_16201 = state_16128__$1;
(statearr_16136_16201[(2)] = inst_16119);

(statearr_16136_16201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (13))){
var inst_16121 = (state_16128[(2)]);
var state_16128__$1 = (function (){var statearr_16137 = state_16128;
(statearr_16137[(9)] = inst_16121);

return statearr_16137;
})();
var statearr_16138_16202 = state_16128__$1;
(statearr_16138_16202[(2)] = null);

(statearr_16138_16202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (6))){
var inst_16093 = (state_16128[(7)]);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16128__$1,(11),inst_16093);
} else {
if((state_val_16129 === (17))){
var inst_16114 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
if(cljs.core.truth_(inst_16114)){
var statearr_16139_16203 = state_16128__$1;
(statearr_16139_16203[(1)] = (19));

} else {
var statearr_16140_16204 = state_16128__$1;
(statearr_16140_16204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (3))){
var inst_16126 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16128__$1,inst_16126);
} else {
if((state_val_16129 === (12))){
var inst_16103 = (state_16128[(10)]);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16128__$1,(14),inst_16103);
} else {
if((state_val_16129 === (2))){
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16128__$1,(4),results);
} else {
if((state_val_16129 === (19))){
var state_16128__$1 = state_16128;
var statearr_16141_16205 = state_16128__$1;
(statearr_16141_16205[(2)] = null);

(statearr_16141_16205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (11))){
var inst_16103 = (state_16128[(2)]);
var state_16128__$1 = (function (){var statearr_16142 = state_16128;
(statearr_16142[(10)] = inst_16103);

return statearr_16142;
})();
var statearr_16143_16206 = state_16128__$1;
(statearr_16143_16206[(2)] = null);

(statearr_16143_16206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (9))){
var state_16128__$1 = state_16128;
var statearr_16144_16207 = state_16128__$1;
(statearr_16144_16207[(2)] = null);

(statearr_16144_16207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (5))){
var state_16128__$1 = state_16128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16145_16208 = state_16128__$1;
(statearr_16145_16208[(1)] = (8));

} else {
var statearr_16146_16209 = state_16128__$1;
(statearr_16146_16209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (14))){
var inst_16106 = (state_16128[(8)]);
var inst_16108 = (state_16128[(11)]);
var inst_16106__$1 = (state_16128[(2)]);
var inst_16107 = (inst_16106__$1 == null);
var inst_16108__$1 = cljs.core.not.call(null,inst_16107);
var state_16128__$1 = (function (){var statearr_16147 = state_16128;
(statearr_16147[(8)] = inst_16106__$1);

(statearr_16147[(11)] = inst_16108__$1);

return statearr_16147;
})();
if(inst_16108__$1){
var statearr_16148_16210 = state_16128__$1;
(statearr_16148_16210[(1)] = (15));

} else {
var statearr_16149_16211 = state_16128__$1;
(statearr_16149_16211[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (16))){
var inst_16108 = (state_16128[(11)]);
var state_16128__$1 = state_16128;
var statearr_16150_16212 = state_16128__$1;
(statearr_16150_16212[(2)] = inst_16108);

(statearr_16150_16212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (10))){
var inst_16100 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16151_16213 = state_16128__$1;
(statearr_16151_16213[(2)] = inst_16100);

(statearr_16151_16213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (18))){
var inst_16111 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16152_16214 = state_16128__$1;
(statearr_16152_16214[(2)] = inst_16111);

(statearr_16152_16214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (8))){
var inst_16097 = cljs.core.async.close_BANG_.call(null,to);
var state_16128__$1 = state_16128;
var statearr_16153_16215 = state_16128__$1;
(statearr_16153_16215[(2)] = inst_16097);

(statearr_16153_16215[(1)] = (10));


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
});})(c__15603__auto__,jobs,results,process,async))
;
return ((function (switch__15491__auto__,c__15603__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0 = (function (){
var statearr_16157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__);

(statearr_16157[(1)] = (1));

return statearr_16157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1 = (function (state_16128){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16158){if((e16158 instanceof Object)){
var ex__15495__auto__ = e16158;
var statearr_16159_16216 = state_16128;
(statearr_16159_16216[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16217 = state_16128;
state_16128 = G__16217;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__ = function(state_16128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1.call(this,state_16128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15492__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto__,jobs,results,process,async))
})();
var state__15605__auto__ = (function (){var statearr_16160 = f__15604__auto__.call(null);
(statearr_16160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto__);

return statearr_16160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto__,jobs,results,process,async))
);

return c__15603__auto__;
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
var args16218 = [];
var len__9931__auto___16221 = arguments.length;
var i__9932__auto___16222 = (0);
while(true){
if((i__9932__auto___16222 < len__9931__auto___16221)){
args16218.push((arguments[i__9932__auto___16222]));

var G__16223 = (i__9932__auto___16222 + (1));
i__9932__auto___16222 = G__16223;
continue;
} else {
}
break;
}

var G__16220 = args16218.length;
switch (G__16220) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16218.length)].join('')));

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
var args16225 = [];
var len__9931__auto___16228 = arguments.length;
var i__9932__auto___16229 = (0);
while(true){
if((i__9932__auto___16229 < len__9931__auto___16228)){
args16225.push((arguments[i__9932__auto___16229]));

var G__16230 = (i__9932__auto___16229 + (1));
i__9932__auto___16229 = G__16230;
continue;
} else {
}
break;
}

var G__16227 = args16225.length;
switch (G__16227) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16225.length)].join('')));

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
var args16232 = [];
var len__9931__auto___16285 = arguments.length;
var i__9932__auto___16286 = (0);
while(true){
if((i__9932__auto___16286 < len__9931__auto___16285)){
args16232.push((arguments[i__9932__auto___16286]));

var G__16287 = (i__9932__auto___16286 + (1));
i__9932__auto___16286 = G__16287;
continue;
} else {
}
break;
}

var G__16234 = args16232.length;
switch (G__16234) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16232.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15603__auto___16289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___16289,tc,fc){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___16289,tc,fc){
return (function (state_16260){
var state_val_16261 = (state_16260[(1)]);
if((state_val_16261 === (7))){
var inst_16256 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
var statearr_16262_16290 = state_16260__$1;
(statearr_16262_16290[(2)] = inst_16256);

(statearr_16262_16290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (1))){
var state_16260__$1 = state_16260;
var statearr_16263_16291 = state_16260__$1;
(statearr_16263_16291[(2)] = null);

(statearr_16263_16291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (4))){
var inst_16237 = (state_16260[(7)]);
var inst_16237__$1 = (state_16260[(2)]);
var inst_16238 = (inst_16237__$1 == null);
var state_16260__$1 = (function (){var statearr_16264 = state_16260;
(statearr_16264[(7)] = inst_16237__$1);

return statearr_16264;
})();
if(cljs.core.truth_(inst_16238)){
var statearr_16265_16292 = state_16260__$1;
(statearr_16265_16292[(1)] = (5));

} else {
var statearr_16266_16293 = state_16260__$1;
(statearr_16266_16293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (13))){
var state_16260__$1 = state_16260;
var statearr_16267_16294 = state_16260__$1;
(statearr_16267_16294[(2)] = null);

(statearr_16267_16294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (6))){
var inst_16237 = (state_16260[(7)]);
var inst_16243 = p.call(null,inst_16237);
var state_16260__$1 = state_16260;
if(cljs.core.truth_(inst_16243)){
var statearr_16268_16295 = state_16260__$1;
(statearr_16268_16295[(1)] = (9));

} else {
var statearr_16269_16296 = state_16260__$1;
(statearr_16269_16296[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (3))){
var inst_16258 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16260__$1,inst_16258);
} else {
if((state_val_16261 === (12))){
var state_16260__$1 = state_16260;
var statearr_16270_16297 = state_16260__$1;
(statearr_16270_16297[(2)] = null);

(statearr_16270_16297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (2))){
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16260__$1,(4),ch);
} else {
if((state_val_16261 === (11))){
var inst_16237 = (state_16260[(7)]);
var inst_16247 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16260__$1,(8),inst_16247,inst_16237);
} else {
if((state_val_16261 === (9))){
var state_16260__$1 = state_16260;
var statearr_16271_16298 = state_16260__$1;
(statearr_16271_16298[(2)] = tc);

(statearr_16271_16298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (5))){
var inst_16240 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16241 = cljs.core.async.close_BANG_.call(null,fc);
var state_16260__$1 = (function (){var statearr_16272 = state_16260;
(statearr_16272[(8)] = inst_16240);

return statearr_16272;
})();
var statearr_16273_16299 = state_16260__$1;
(statearr_16273_16299[(2)] = inst_16241);

(statearr_16273_16299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (14))){
var inst_16254 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
var statearr_16274_16300 = state_16260__$1;
(statearr_16274_16300[(2)] = inst_16254);

(statearr_16274_16300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (10))){
var state_16260__$1 = state_16260;
var statearr_16275_16301 = state_16260__$1;
(statearr_16275_16301[(2)] = fc);

(statearr_16275_16301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (8))){
var inst_16249 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
if(cljs.core.truth_(inst_16249)){
var statearr_16276_16302 = state_16260__$1;
(statearr_16276_16302[(1)] = (12));

} else {
var statearr_16277_16303 = state_16260__$1;
(statearr_16277_16303[(1)] = (13));

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
});})(c__15603__auto___16289,tc,fc))
;
return ((function (switch__15491__auto__,c__15603__auto___16289,tc,fc){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_16281 = [null,null,null,null,null,null,null,null,null];
(statearr_16281[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_16281[(1)] = (1));

return statearr_16281;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_16260){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16282){if((e16282 instanceof Object)){
var ex__15495__auto__ = e16282;
var statearr_16283_16304 = state_16260;
(statearr_16283_16304[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16305 = state_16260;
state_16260 = G__16305;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_16260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_16260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___16289,tc,fc))
})();
var state__15605__auto__ = (function (){var statearr_16284 = f__15604__auto__.call(null);
(statearr_16284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___16289);

return statearr_16284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___16289,tc,fc))
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
var c__15603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto__){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto__){
return (function (state_16369){
var state_val_16370 = (state_16369[(1)]);
if((state_val_16370 === (7))){
var inst_16365 = (state_16369[(2)]);
var state_16369__$1 = state_16369;
var statearr_16371_16392 = state_16369__$1;
(statearr_16371_16392[(2)] = inst_16365);

(statearr_16371_16392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (1))){
var inst_16349 = init;
var state_16369__$1 = (function (){var statearr_16372 = state_16369;
(statearr_16372[(7)] = inst_16349);

return statearr_16372;
})();
var statearr_16373_16393 = state_16369__$1;
(statearr_16373_16393[(2)] = null);

(statearr_16373_16393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (4))){
var inst_16352 = (state_16369[(8)]);
var inst_16352__$1 = (state_16369[(2)]);
var inst_16353 = (inst_16352__$1 == null);
var state_16369__$1 = (function (){var statearr_16374 = state_16369;
(statearr_16374[(8)] = inst_16352__$1);

return statearr_16374;
})();
if(cljs.core.truth_(inst_16353)){
var statearr_16375_16394 = state_16369__$1;
(statearr_16375_16394[(1)] = (5));

} else {
var statearr_16376_16395 = state_16369__$1;
(statearr_16376_16395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (6))){
var inst_16349 = (state_16369[(7)]);
var inst_16356 = (state_16369[(9)]);
var inst_16352 = (state_16369[(8)]);
var inst_16356__$1 = f.call(null,inst_16349,inst_16352);
var inst_16357 = cljs.core.reduced_QMARK_.call(null,inst_16356__$1);
var state_16369__$1 = (function (){var statearr_16377 = state_16369;
(statearr_16377[(9)] = inst_16356__$1);

return statearr_16377;
})();
if(inst_16357){
var statearr_16378_16396 = state_16369__$1;
(statearr_16378_16396[(1)] = (8));

} else {
var statearr_16379_16397 = state_16369__$1;
(statearr_16379_16397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (3))){
var inst_16367 = (state_16369[(2)]);
var state_16369__$1 = state_16369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16369__$1,inst_16367);
} else {
if((state_val_16370 === (2))){
var state_16369__$1 = state_16369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16369__$1,(4),ch);
} else {
if((state_val_16370 === (9))){
var inst_16356 = (state_16369[(9)]);
var inst_16349 = inst_16356;
var state_16369__$1 = (function (){var statearr_16380 = state_16369;
(statearr_16380[(7)] = inst_16349);

return statearr_16380;
})();
var statearr_16381_16398 = state_16369__$1;
(statearr_16381_16398[(2)] = null);

(statearr_16381_16398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (5))){
var inst_16349 = (state_16369[(7)]);
var state_16369__$1 = state_16369;
var statearr_16382_16399 = state_16369__$1;
(statearr_16382_16399[(2)] = inst_16349);

(statearr_16382_16399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (10))){
var inst_16363 = (state_16369[(2)]);
var state_16369__$1 = state_16369;
var statearr_16383_16400 = state_16369__$1;
(statearr_16383_16400[(2)] = inst_16363);

(statearr_16383_16400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16370 === (8))){
var inst_16356 = (state_16369[(9)]);
var inst_16359 = cljs.core.deref.call(null,inst_16356);
var state_16369__$1 = state_16369;
var statearr_16384_16401 = state_16369__$1;
(statearr_16384_16401[(2)] = inst_16359);

(statearr_16384_16401[(1)] = (10));


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
});})(c__15603__auto__))
;
return ((function (switch__15491__auto__,c__15603__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15492__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15492__auto____0 = (function (){
var statearr_16388 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16388[(0)] = cljs$core$async$reduce_$_state_machine__15492__auto__);

(statearr_16388[(1)] = (1));

return statearr_16388;
});
var cljs$core$async$reduce_$_state_machine__15492__auto____1 = (function (state_16369){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16389){if((e16389 instanceof Object)){
var ex__15495__auto__ = e16389;
var statearr_16390_16402 = state_16369;
(statearr_16390_16402[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16403 = state_16369;
state_16369 = G__16403;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15492__auto__ = function(state_16369){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15492__auto____1.call(this,state_16369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15492__auto____0;
cljs$core$async$reduce_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15492__auto____1;
return cljs$core$async$reduce_$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto__))
})();
var state__15605__auto__ = (function (){var statearr_16391 = f__15604__auto__.call(null);
(statearr_16391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto__);

return statearr_16391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto__))
);

return c__15603__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto__,f__$1){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto__,f__$1){
return (function (state_16423){
var state_val_16424 = (state_16423[(1)]);
if((state_val_16424 === (1))){
var inst_16418 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16423__$1 = state_16423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16423__$1,(2),inst_16418);
} else {
if((state_val_16424 === (2))){
var inst_16420 = (state_16423[(2)]);
var inst_16421 = f__$1.call(null,inst_16420);
var state_16423__$1 = state_16423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16423__$1,inst_16421);
} else {
return null;
}
}
});})(c__15603__auto__,f__$1))
;
return ((function (switch__15491__auto__,c__15603__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15492__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15492__auto____0 = (function (){
var statearr_16428 = [null,null,null,null,null,null,null];
(statearr_16428[(0)] = cljs$core$async$transduce_$_state_machine__15492__auto__);

(statearr_16428[(1)] = (1));

return statearr_16428;
});
var cljs$core$async$transduce_$_state_machine__15492__auto____1 = (function (state_16423){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16429){if((e16429 instanceof Object)){
var ex__15495__auto__ = e16429;
var statearr_16430_16432 = state_16423;
(statearr_16430_16432[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16433 = state_16423;
state_16423 = G__16433;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15492__auto__ = function(state_16423){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15492__auto____1.call(this,state_16423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15492__auto____0;
cljs$core$async$transduce_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15492__auto____1;
return cljs$core$async$transduce_$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto__,f__$1))
})();
var state__15605__auto__ = (function (){var statearr_16431 = f__15604__auto__.call(null);
(statearr_16431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto__);

return statearr_16431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto__,f__$1))
);

return c__15603__auto__;
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
var args16434 = [];
var len__9931__auto___16486 = arguments.length;
var i__9932__auto___16487 = (0);
while(true){
if((i__9932__auto___16487 < len__9931__auto___16486)){
args16434.push((arguments[i__9932__auto___16487]));

var G__16488 = (i__9932__auto___16487 + (1));
i__9932__auto___16487 = G__16488;
continue;
} else {
}
break;
}

var G__16436 = args16434.length;
switch (G__16436) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16434.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto__){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto__){
return (function (state_16461){
var state_val_16462 = (state_16461[(1)]);
if((state_val_16462 === (7))){
var inst_16443 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
var statearr_16463_16490 = state_16461__$1;
(statearr_16463_16490[(2)] = inst_16443);

(statearr_16463_16490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (1))){
var inst_16437 = cljs.core.seq.call(null,coll);
var inst_16438 = inst_16437;
var state_16461__$1 = (function (){var statearr_16464 = state_16461;
(statearr_16464[(7)] = inst_16438);

return statearr_16464;
})();
var statearr_16465_16491 = state_16461__$1;
(statearr_16465_16491[(2)] = null);

(statearr_16465_16491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (4))){
var inst_16438 = (state_16461[(7)]);
var inst_16441 = cljs.core.first.call(null,inst_16438);
var state_16461__$1 = state_16461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16461__$1,(7),ch,inst_16441);
} else {
if((state_val_16462 === (13))){
var inst_16455 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
var statearr_16466_16492 = state_16461__$1;
(statearr_16466_16492[(2)] = inst_16455);

(statearr_16466_16492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (6))){
var inst_16446 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
if(cljs.core.truth_(inst_16446)){
var statearr_16467_16493 = state_16461__$1;
(statearr_16467_16493[(1)] = (8));

} else {
var statearr_16468_16494 = state_16461__$1;
(statearr_16468_16494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (3))){
var inst_16459 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16461__$1,inst_16459);
} else {
if((state_val_16462 === (12))){
var state_16461__$1 = state_16461;
var statearr_16469_16495 = state_16461__$1;
(statearr_16469_16495[(2)] = null);

(statearr_16469_16495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (2))){
var inst_16438 = (state_16461[(7)]);
var state_16461__$1 = state_16461;
if(cljs.core.truth_(inst_16438)){
var statearr_16470_16496 = state_16461__$1;
(statearr_16470_16496[(1)] = (4));

} else {
var statearr_16471_16497 = state_16461__$1;
(statearr_16471_16497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (11))){
var inst_16452 = cljs.core.async.close_BANG_.call(null,ch);
var state_16461__$1 = state_16461;
var statearr_16472_16498 = state_16461__$1;
(statearr_16472_16498[(2)] = inst_16452);

(statearr_16472_16498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (9))){
var state_16461__$1 = state_16461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16473_16499 = state_16461__$1;
(statearr_16473_16499[(1)] = (11));

} else {
var statearr_16474_16500 = state_16461__$1;
(statearr_16474_16500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (5))){
var inst_16438 = (state_16461[(7)]);
var state_16461__$1 = state_16461;
var statearr_16475_16501 = state_16461__$1;
(statearr_16475_16501[(2)] = inst_16438);

(statearr_16475_16501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (10))){
var inst_16457 = (state_16461[(2)]);
var state_16461__$1 = state_16461;
var statearr_16476_16502 = state_16461__$1;
(statearr_16476_16502[(2)] = inst_16457);

(statearr_16476_16502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16462 === (8))){
var inst_16438 = (state_16461[(7)]);
var inst_16448 = cljs.core.next.call(null,inst_16438);
var inst_16438__$1 = inst_16448;
var state_16461__$1 = (function (){var statearr_16477 = state_16461;
(statearr_16477[(7)] = inst_16438__$1);

return statearr_16477;
})();
var statearr_16478_16503 = state_16461__$1;
(statearr_16478_16503[(2)] = null);

(statearr_16478_16503[(1)] = (2));


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
});})(c__15603__auto__))
;
return ((function (switch__15491__auto__,c__15603__auto__){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_16482 = [null,null,null,null,null,null,null,null];
(statearr_16482[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_16482[(1)] = (1));

return statearr_16482;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_16461){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16483){if((e16483 instanceof Object)){
var ex__15495__auto__ = e16483;
var statearr_16484_16504 = state_16461;
(statearr_16484_16504[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16505 = state_16461;
state_16461 = G__16505;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_16461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_16461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto__))
})();
var state__15605__auto__ = (function (){var statearr_16485 = f__15604__auto__.call(null);
(statearr_16485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto__);

return statearr_16485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto__))
);

return c__15603__auto__;
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
var x__9486__auto__ = (((_ == null))?null:_);
var m__9487__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,_);
} else {
var m__9487__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,_);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9487__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m,ch);
} else {
var m__9487__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m,ch);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m);
} else {
var m__9487__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async16731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16731 = (function (ch,cs,meta16732){
this.ch = ch;
this.cs = cs;
this.meta16732 = meta16732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16733,meta16732__$1){
var self__ = this;
var _16733__$1 = this;
return (new cljs.core.async.t_cljs$core$async16731(self__.ch,self__.cs,meta16732__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16733){
var self__ = this;
var _16733__$1 = this;
return self__.meta16732;
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16732","meta16732",957930052,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16731";

cljs.core.async.t_cljs$core$async16731.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async16731");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16731 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16731(ch__$1,cs__$1,meta16732){
return (new cljs.core.async.t_cljs$core$async16731(ch__$1,cs__$1,meta16732));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16731(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15603__auto___16956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___16956,cs,m,dchan,dctr,done){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___16956,cs,m,dchan,dctr,done){
return (function (state_16868){
var state_val_16869 = (state_16868[(1)]);
if((state_val_16869 === (7))){
var inst_16864 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16870_16957 = state_16868__$1;
(statearr_16870_16957[(2)] = inst_16864);

(statearr_16870_16957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (20))){
var inst_16767 = (state_16868[(7)]);
var inst_16779 = cljs.core.first.call(null,inst_16767);
var inst_16780 = cljs.core.nth.call(null,inst_16779,(0),null);
var inst_16781 = cljs.core.nth.call(null,inst_16779,(1),null);
var state_16868__$1 = (function (){var statearr_16871 = state_16868;
(statearr_16871[(8)] = inst_16780);

return statearr_16871;
})();
if(cljs.core.truth_(inst_16781)){
var statearr_16872_16958 = state_16868__$1;
(statearr_16872_16958[(1)] = (22));

} else {
var statearr_16873_16959 = state_16868__$1;
(statearr_16873_16959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (27))){
var inst_16809 = (state_16868[(9)]);
var inst_16736 = (state_16868[(10)]);
var inst_16816 = (state_16868[(11)]);
var inst_16811 = (state_16868[(12)]);
var inst_16816__$1 = cljs.core._nth.call(null,inst_16809,inst_16811);
var inst_16817 = cljs.core.async.put_BANG_.call(null,inst_16816__$1,inst_16736,done);
var state_16868__$1 = (function (){var statearr_16874 = state_16868;
(statearr_16874[(11)] = inst_16816__$1);

return statearr_16874;
})();
if(cljs.core.truth_(inst_16817)){
var statearr_16875_16960 = state_16868__$1;
(statearr_16875_16960[(1)] = (30));

} else {
var statearr_16876_16961 = state_16868__$1;
(statearr_16876_16961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (1))){
var state_16868__$1 = state_16868;
var statearr_16877_16962 = state_16868__$1;
(statearr_16877_16962[(2)] = null);

(statearr_16877_16962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (24))){
var inst_16767 = (state_16868[(7)]);
var inst_16786 = (state_16868[(2)]);
var inst_16787 = cljs.core.next.call(null,inst_16767);
var inst_16745 = inst_16787;
var inst_16746 = null;
var inst_16747 = (0);
var inst_16748 = (0);
var state_16868__$1 = (function (){var statearr_16878 = state_16868;
(statearr_16878[(13)] = inst_16746);

(statearr_16878[(14)] = inst_16745);

(statearr_16878[(15)] = inst_16747);

(statearr_16878[(16)] = inst_16786);

(statearr_16878[(17)] = inst_16748);

return statearr_16878;
})();
var statearr_16879_16963 = state_16868__$1;
(statearr_16879_16963[(2)] = null);

(statearr_16879_16963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (39))){
var state_16868__$1 = state_16868;
var statearr_16883_16964 = state_16868__$1;
(statearr_16883_16964[(2)] = null);

(statearr_16883_16964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (4))){
var inst_16736 = (state_16868[(10)]);
var inst_16736__$1 = (state_16868[(2)]);
var inst_16737 = (inst_16736__$1 == null);
var state_16868__$1 = (function (){var statearr_16884 = state_16868;
(statearr_16884[(10)] = inst_16736__$1);

return statearr_16884;
})();
if(cljs.core.truth_(inst_16737)){
var statearr_16885_16965 = state_16868__$1;
(statearr_16885_16965[(1)] = (5));

} else {
var statearr_16886_16966 = state_16868__$1;
(statearr_16886_16966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (15))){
var inst_16746 = (state_16868[(13)]);
var inst_16745 = (state_16868[(14)]);
var inst_16747 = (state_16868[(15)]);
var inst_16748 = (state_16868[(17)]);
var inst_16763 = (state_16868[(2)]);
var inst_16764 = (inst_16748 + (1));
var tmp16880 = inst_16746;
var tmp16881 = inst_16745;
var tmp16882 = inst_16747;
var inst_16745__$1 = tmp16881;
var inst_16746__$1 = tmp16880;
var inst_16747__$1 = tmp16882;
var inst_16748__$1 = inst_16764;
var state_16868__$1 = (function (){var statearr_16887 = state_16868;
(statearr_16887[(13)] = inst_16746__$1);

(statearr_16887[(14)] = inst_16745__$1);

(statearr_16887[(15)] = inst_16747__$1);

(statearr_16887[(18)] = inst_16763);

(statearr_16887[(17)] = inst_16748__$1);

return statearr_16887;
})();
var statearr_16888_16967 = state_16868__$1;
(statearr_16888_16967[(2)] = null);

(statearr_16888_16967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (21))){
var inst_16790 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16892_16968 = state_16868__$1;
(statearr_16892_16968[(2)] = inst_16790);

(statearr_16892_16968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (31))){
var inst_16816 = (state_16868[(11)]);
var inst_16820 = done.call(null,null);
var inst_16821 = cljs.core.async.untap_STAR_.call(null,m,inst_16816);
var state_16868__$1 = (function (){var statearr_16893 = state_16868;
(statearr_16893[(19)] = inst_16820);

return statearr_16893;
})();
var statearr_16894_16969 = state_16868__$1;
(statearr_16894_16969[(2)] = inst_16821);

(statearr_16894_16969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (32))){
var inst_16809 = (state_16868[(9)]);
var inst_16808 = (state_16868[(20)]);
var inst_16811 = (state_16868[(12)]);
var inst_16810 = (state_16868[(21)]);
var inst_16823 = (state_16868[(2)]);
var inst_16824 = (inst_16811 + (1));
var tmp16889 = inst_16809;
var tmp16890 = inst_16808;
var tmp16891 = inst_16810;
var inst_16808__$1 = tmp16890;
var inst_16809__$1 = tmp16889;
var inst_16810__$1 = tmp16891;
var inst_16811__$1 = inst_16824;
var state_16868__$1 = (function (){var statearr_16895 = state_16868;
(statearr_16895[(9)] = inst_16809__$1);

(statearr_16895[(22)] = inst_16823);

(statearr_16895[(20)] = inst_16808__$1);

(statearr_16895[(12)] = inst_16811__$1);

(statearr_16895[(21)] = inst_16810__$1);

return statearr_16895;
})();
var statearr_16896_16970 = state_16868__$1;
(statearr_16896_16970[(2)] = null);

(statearr_16896_16970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (40))){
var inst_16836 = (state_16868[(23)]);
var inst_16840 = done.call(null,null);
var inst_16841 = cljs.core.async.untap_STAR_.call(null,m,inst_16836);
var state_16868__$1 = (function (){var statearr_16897 = state_16868;
(statearr_16897[(24)] = inst_16840);

return statearr_16897;
})();
var statearr_16898_16971 = state_16868__$1;
(statearr_16898_16971[(2)] = inst_16841);

(statearr_16898_16971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (33))){
var inst_16827 = (state_16868[(25)]);
var inst_16829 = cljs.core.chunked_seq_QMARK_.call(null,inst_16827);
var state_16868__$1 = state_16868;
if(inst_16829){
var statearr_16899_16972 = state_16868__$1;
(statearr_16899_16972[(1)] = (36));

} else {
var statearr_16900_16973 = state_16868__$1;
(statearr_16900_16973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (13))){
var inst_16757 = (state_16868[(26)]);
var inst_16760 = cljs.core.async.close_BANG_.call(null,inst_16757);
var state_16868__$1 = state_16868;
var statearr_16901_16974 = state_16868__$1;
(statearr_16901_16974[(2)] = inst_16760);

(statearr_16901_16974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (22))){
var inst_16780 = (state_16868[(8)]);
var inst_16783 = cljs.core.async.close_BANG_.call(null,inst_16780);
var state_16868__$1 = state_16868;
var statearr_16902_16975 = state_16868__$1;
(statearr_16902_16975[(2)] = inst_16783);

(statearr_16902_16975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (36))){
var inst_16827 = (state_16868[(25)]);
var inst_16831 = cljs.core.chunk_first.call(null,inst_16827);
var inst_16832 = cljs.core.chunk_rest.call(null,inst_16827);
var inst_16833 = cljs.core.count.call(null,inst_16831);
var inst_16808 = inst_16832;
var inst_16809 = inst_16831;
var inst_16810 = inst_16833;
var inst_16811 = (0);
var state_16868__$1 = (function (){var statearr_16903 = state_16868;
(statearr_16903[(9)] = inst_16809);

(statearr_16903[(20)] = inst_16808);

(statearr_16903[(12)] = inst_16811);

(statearr_16903[(21)] = inst_16810);

return statearr_16903;
})();
var statearr_16904_16976 = state_16868__$1;
(statearr_16904_16976[(2)] = null);

(statearr_16904_16976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (41))){
var inst_16827 = (state_16868[(25)]);
var inst_16843 = (state_16868[(2)]);
var inst_16844 = cljs.core.next.call(null,inst_16827);
var inst_16808 = inst_16844;
var inst_16809 = null;
var inst_16810 = (0);
var inst_16811 = (0);
var state_16868__$1 = (function (){var statearr_16905 = state_16868;
(statearr_16905[(9)] = inst_16809);

(statearr_16905[(20)] = inst_16808);

(statearr_16905[(27)] = inst_16843);

(statearr_16905[(12)] = inst_16811);

(statearr_16905[(21)] = inst_16810);

return statearr_16905;
})();
var statearr_16906_16977 = state_16868__$1;
(statearr_16906_16977[(2)] = null);

(statearr_16906_16977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (43))){
var state_16868__$1 = state_16868;
var statearr_16907_16978 = state_16868__$1;
(statearr_16907_16978[(2)] = null);

(statearr_16907_16978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (29))){
var inst_16852 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16908_16979 = state_16868__$1;
(statearr_16908_16979[(2)] = inst_16852);

(statearr_16908_16979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (44))){
var inst_16861 = (state_16868[(2)]);
var state_16868__$1 = (function (){var statearr_16909 = state_16868;
(statearr_16909[(28)] = inst_16861);

return statearr_16909;
})();
var statearr_16910_16980 = state_16868__$1;
(statearr_16910_16980[(2)] = null);

(statearr_16910_16980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (6))){
var inst_16800 = (state_16868[(29)]);
var inst_16799 = cljs.core.deref.call(null,cs);
var inst_16800__$1 = cljs.core.keys.call(null,inst_16799);
var inst_16801 = cljs.core.count.call(null,inst_16800__$1);
var inst_16802 = cljs.core.reset_BANG_.call(null,dctr,inst_16801);
var inst_16807 = cljs.core.seq.call(null,inst_16800__$1);
var inst_16808 = inst_16807;
var inst_16809 = null;
var inst_16810 = (0);
var inst_16811 = (0);
var state_16868__$1 = (function (){var statearr_16911 = state_16868;
(statearr_16911[(9)] = inst_16809);

(statearr_16911[(30)] = inst_16802);

(statearr_16911[(29)] = inst_16800__$1);

(statearr_16911[(20)] = inst_16808);

(statearr_16911[(12)] = inst_16811);

(statearr_16911[(21)] = inst_16810);

return statearr_16911;
})();
var statearr_16912_16981 = state_16868__$1;
(statearr_16912_16981[(2)] = null);

(statearr_16912_16981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (28))){
var inst_16808 = (state_16868[(20)]);
var inst_16827 = (state_16868[(25)]);
var inst_16827__$1 = cljs.core.seq.call(null,inst_16808);
var state_16868__$1 = (function (){var statearr_16913 = state_16868;
(statearr_16913[(25)] = inst_16827__$1);

return statearr_16913;
})();
if(inst_16827__$1){
var statearr_16914_16982 = state_16868__$1;
(statearr_16914_16982[(1)] = (33));

} else {
var statearr_16915_16983 = state_16868__$1;
(statearr_16915_16983[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (25))){
var inst_16811 = (state_16868[(12)]);
var inst_16810 = (state_16868[(21)]);
var inst_16813 = (inst_16811 < inst_16810);
var inst_16814 = inst_16813;
var state_16868__$1 = state_16868;
if(cljs.core.truth_(inst_16814)){
var statearr_16916_16984 = state_16868__$1;
(statearr_16916_16984[(1)] = (27));

} else {
var statearr_16917_16985 = state_16868__$1;
(statearr_16917_16985[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (34))){
var state_16868__$1 = state_16868;
var statearr_16918_16986 = state_16868__$1;
(statearr_16918_16986[(2)] = null);

(statearr_16918_16986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (17))){
var state_16868__$1 = state_16868;
var statearr_16919_16987 = state_16868__$1;
(statearr_16919_16987[(2)] = null);

(statearr_16919_16987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (3))){
var inst_16866 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16868__$1,inst_16866);
} else {
if((state_val_16869 === (12))){
var inst_16795 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16920_16988 = state_16868__$1;
(statearr_16920_16988[(2)] = inst_16795);

(statearr_16920_16988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (2))){
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16868__$1,(4),ch);
} else {
if((state_val_16869 === (23))){
var state_16868__$1 = state_16868;
var statearr_16921_16989 = state_16868__$1;
(statearr_16921_16989[(2)] = null);

(statearr_16921_16989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (35))){
var inst_16850 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16922_16990 = state_16868__$1;
(statearr_16922_16990[(2)] = inst_16850);

(statearr_16922_16990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (19))){
var inst_16767 = (state_16868[(7)]);
var inst_16771 = cljs.core.chunk_first.call(null,inst_16767);
var inst_16772 = cljs.core.chunk_rest.call(null,inst_16767);
var inst_16773 = cljs.core.count.call(null,inst_16771);
var inst_16745 = inst_16772;
var inst_16746 = inst_16771;
var inst_16747 = inst_16773;
var inst_16748 = (0);
var state_16868__$1 = (function (){var statearr_16923 = state_16868;
(statearr_16923[(13)] = inst_16746);

(statearr_16923[(14)] = inst_16745);

(statearr_16923[(15)] = inst_16747);

(statearr_16923[(17)] = inst_16748);

return statearr_16923;
})();
var statearr_16924_16991 = state_16868__$1;
(statearr_16924_16991[(2)] = null);

(statearr_16924_16991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (11))){
var inst_16767 = (state_16868[(7)]);
var inst_16745 = (state_16868[(14)]);
var inst_16767__$1 = cljs.core.seq.call(null,inst_16745);
var state_16868__$1 = (function (){var statearr_16925 = state_16868;
(statearr_16925[(7)] = inst_16767__$1);

return statearr_16925;
})();
if(inst_16767__$1){
var statearr_16926_16992 = state_16868__$1;
(statearr_16926_16992[(1)] = (16));

} else {
var statearr_16927_16993 = state_16868__$1;
(statearr_16927_16993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (9))){
var inst_16797 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16928_16994 = state_16868__$1;
(statearr_16928_16994[(2)] = inst_16797);

(statearr_16928_16994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (5))){
var inst_16743 = cljs.core.deref.call(null,cs);
var inst_16744 = cljs.core.seq.call(null,inst_16743);
var inst_16745 = inst_16744;
var inst_16746 = null;
var inst_16747 = (0);
var inst_16748 = (0);
var state_16868__$1 = (function (){var statearr_16929 = state_16868;
(statearr_16929[(13)] = inst_16746);

(statearr_16929[(14)] = inst_16745);

(statearr_16929[(15)] = inst_16747);

(statearr_16929[(17)] = inst_16748);

return statearr_16929;
})();
var statearr_16930_16995 = state_16868__$1;
(statearr_16930_16995[(2)] = null);

(statearr_16930_16995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (14))){
var state_16868__$1 = state_16868;
var statearr_16931_16996 = state_16868__$1;
(statearr_16931_16996[(2)] = null);

(statearr_16931_16996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (45))){
var inst_16858 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16932_16997 = state_16868__$1;
(statearr_16932_16997[(2)] = inst_16858);

(statearr_16932_16997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (26))){
var inst_16800 = (state_16868[(29)]);
var inst_16854 = (state_16868[(2)]);
var inst_16855 = cljs.core.seq.call(null,inst_16800);
var state_16868__$1 = (function (){var statearr_16933 = state_16868;
(statearr_16933[(31)] = inst_16854);

return statearr_16933;
})();
if(inst_16855){
var statearr_16934_16998 = state_16868__$1;
(statearr_16934_16998[(1)] = (42));

} else {
var statearr_16935_16999 = state_16868__$1;
(statearr_16935_16999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (16))){
var inst_16767 = (state_16868[(7)]);
var inst_16769 = cljs.core.chunked_seq_QMARK_.call(null,inst_16767);
var state_16868__$1 = state_16868;
if(inst_16769){
var statearr_16936_17000 = state_16868__$1;
(statearr_16936_17000[(1)] = (19));

} else {
var statearr_16937_17001 = state_16868__$1;
(statearr_16937_17001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (38))){
var inst_16847 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16938_17002 = state_16868__$1;
(statearr_16938_17002[(2)] = inst_16847);

(statearr_16938_17002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (30))){
var state_16868__$1 = state_16868;
var statearr_16939_17003 = state_16868__$1;
(statearr_16939_17003[(2)] = null);

(statearr_16939_17003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (10))){
var inst_16746 = (state_16868[(13)]);
var inst_16748 = (state_16868[(17)]);
var inst_16756 = cljs.core._nth.call(null,inst_16746,inst_16748);
var inst_16757 = cljs.core.nth.call(null,inst_16756,(0),null);
var inst_16758 = cljs.core.nth.call(null,inst_16756,(1),null);
var state_16868__$1 = (function (){var statearr_16940 = state_16868;
(statearr_16940[(26)] = inst_16757);

return statearr_16940;
})();
if(cljs.core.truth_(inst_16758)){
var statearr_16941_17004 = state_16868__$1;
(statearr_16941_17004[(1)] = (13));

} else {
var statearr_16942_17005 = state_16868__$1;
(statearr_16942_17005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (18))){
var inst_16793 = (state_16868[(2)]);
var state_16868__$1 = state_16868;
var statearr_16943_17006 = state_16868__$1;
(statearr_16943_17006[(2)] = inst_16793);

(statearr_16943_17006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (42))){
var state_16868__$1 = state_16868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16868__$1,(45),dchan);
} else {
if((state_val_16869 === (37))){
var inst_16736 = (state_16868[(10)]);
var inst_16836 = (state_16868[(23)]);
var inst_16827 = (state_16868[(25)]);
var inst_16836__$1 = cljs.core.first.call(null,inst_16827);
var inst_16837 = cljs.core.async.put_BANG_.call(null,inst_16836__$1,inst_16736,done);
var state_16868__$1 = (function (){var statearr_16944 = state_16868;
(statearr_16944[(23)] = inst_16836__$1);

return statearr_16944;
})();
if(cljs.core.truth_(inst_16837)){
var statearr_16945_17007 = state_16868__$1;
(statearr_16945_17007[(1)] = (39));

} else {
var statearr_16946_17008 = state_16868__$1;
(statearr_16946_17008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16869 === (8))){
var inst_16747 = (state_16868[(15)]);
var inst_16748 = (state_16868[(17)]);
var inst_16750 = (inst_16748 < inst_16747);
var inst_16751 = inst_16750;
var state_16868__$1 = state_16868;
if(cljs.core.truth_(inst_16751)){
var statearr_16947_17009 = state_16868__$1;
(statearr_16947_17009[(1)] = (10));

} else {
var statearr_16948_17010 = state_16868__$1;
(statearr_16948_17010[(1)] = (11));

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
});})(c__15603__auto___16956,cs,m,dchan,dctr,done))
;
return ((function (switch__15491__auto__,c__15603__auto___16956,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15492__auto__ = null;
var cljs$core$async$mult_$_state_machine__15492__auto____0 = (function (){
var statearr_16952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16952[(0)] = cljs$core$async$mult_$_state_machine__15492__auto__);

(statearr_16952[(1)] = (1));

return statearr_16952;
});
var cljs$core$async$mult_$_state_machine__15492__auto____1 = (function (state_16868){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_16868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e16953){if((e16953 instanceof Object)){
var ex__15495__auto__ = e16953;
var statearr_16954_17011 = state_16868;
(statearr_16954_17011[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17012 = state_16868;
state_16868 = G__17012;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15492__auto__ = function(state_16868){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15492__auto____1.call(this,state_16868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15492__auto____0;
cljs$core$async$mult_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15492__auto____1;
return cljs$core$async$mult_$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___16956,cs,m,dchan,dctr,done))
})();
var state__15605__auto__ = (function (){var statearr_16955 = f__15604__auto__.call(null);
(statearr_16955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___16956);

return statearr_16955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___16956,cs,m,dchan,dctr,done))
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
var args17013 = [];
var len__9931__auto___17016 = arguments.length;
var i__9932__auto___17017 = (0);
while(true){
if((i__9932__auto___17017 < len__9931__auto___17016)){
args17013.push((arguments[i__9932__auto___17017]));

var G__17018 = (i__9932__auto___17017 + (1));
i__9932__auto___17017 = G__17018;
continue;
} else {
}
break;
}

var G__17015 = args17013.length;
switch (G__17015) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17013.length)].join('')));

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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m,ch);
} else {
var m__9487__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m,ch);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m,ch);
} else {
var m__9487__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m,ch);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m);
} else {
var m__9487__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m,state_map);
} else {
var m__9487__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m,state_map);
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
var x__9486__auto__ = (((m == null))?null:m);
var m__9487__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,m,mode);
} else {
var m__9487__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___17030 = arguments.length;
var i__9932__auto___17031 = (0);
while(true){
if((i__9932__auto___17031 < len__9931__auto___17030)){
args__9938__auto__.push((arguments[i__9932__auto___17031]));

var G__17032 = (i__9932__auto___17031 + (1));
i__9932__auto___17031 = G__17032;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17024){
var map__17025 = p__17024;
var map__17025__$1 = ((((!((map__17025 == null)))?((((map__17025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17025):map__17025);
var opts = map__17025__$1;
var statearr_17027_17033 = state;
(statearr_17027_17033[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__17025,map__17025__$1,opts){
return (function (val){
var statearr_17028_17034 = state;
(statearr_17028_17034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17025,map__17025__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17029_17035 = state;
(statearr_17029_17035[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17020){
var G__17021 = cljs.core.first.call(null,seq17020);
var seq17020__$1 = cljs.core.next.call(null,seq17020);
var G__17022 = cljs.core.first.call(null,seq17020__$1);
var seq17020__$2 = cljs.core.next.call(null,seq17020__$1);
var G__17023 = cljs.core.first.call(null,seq17020__$2);
var seq17020__$3 = cljs.core.next.call(null,seq17020__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17021,G__17022,G__17023,seq17020__$3);
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
if(typeof cljs.core.async.t_cljs$core$async17203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17203 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17204){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17204 = meta17204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17205,meta17204__$1){
var self__ = this;
var _17205__$1 = this;
return (new cljs.core.async.t_cljs$core$async17203(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17204__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17205){
var self__ = this;
var _17205__$1 = this;
return self__.meta17204;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17203.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17204","meta17204",2007362306,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17203";

cljs.core.async.t_cljs$core$async17203.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async17203");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17203 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17203(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17204){
return (new cljs.core.async.t_cljs$core$async17203(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17204));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17203(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15603__auto___17370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___17370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___17370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17307){
var state_val_17308 = (state_17307[(1)]);
if((state_val_17308 === (7))){
var inst_17222 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17309_17371 = state_17307__$1;
(statearr_17309_17371[(2)] = inst_17222);

(statearr_17309_17371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (20))){
var inst_17234 = (state_17307[(7)]);
var state_17307__$1 = state_17307;
var statearr_17310_17372 = state_17307__$1;
(statearr_17310_17372[(2)] = inst_17234);

(statearr_17310_17372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (27))){
var state_17307__$1 = state_17307;
var statearr_17311_17373 = state_17307__$1;
(statearr_17311_17373[(2)] = null);

(statearr_17311_17373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (1))){
var inst_17209 = (state_17307[(8)]);
var inst_17209__$1 = calc_state.call(null);
var inst_17211 = (inst_17209__$1 == null);
var inst_17212 = cljs.core.not.call(null,inst_17211);
var state_17307__$1 = (function (){var statearr_17312 = state_17307;
(statearr_17312[(8)] = inst_17209__$1);

return statearr_17312;
})();
if(inst_17212){
var statearr_17313_17374 = state_17307__$1;
(statearr_17313_17374[(1)] = (2));

} else {
var statearr_17314_17375 = state_17307__$1;
(statearr_17314_17375[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (24))){
var inst_17258 = (state_17307[(9)]);
var inst_17281 = (state_17307[(10)]);
var inst_17267 = (state_17307[(11)]);
var inst_17281__$1 = inst_17258.call(null,inst_17267);
var state_17307__$1 = (function (){var statearr_17315 = state_17307;
(statearr_17315[(10)] = inst_17281__$1);

return statearr_17315;
})();
if(cljs.core.truth_(inst_17281__$1)){
var statearr_17316_17376 = state_17307__$1;
(statearr_17316_17376[(1)] = (29));

} else {
var statearr_17317_17377 = state_17307__$1;
(statearr_17317_17377[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (4))){
var inst_17225 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17225)){
var statearr_17318_17378 = state_17307__$1;
(statearr_17318_17378[(1)] = (8));

} else {
var statearr_17319_17379 = state_17307__$1;
(statearr_17319_17379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (15))){
var inst_17252 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17252)){
var statearr_17320_17380 = state_17307__$1;
(statearr_17320_17380[(1)] = (19));

} else {
var statearr_17321_17381 = state_17307__$1;
(statearr_17321_17381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (21))){
var inst_17257 = (state_17307[(12)]);
var inst_17257__$1 = (state_17307[(2)]);
var inst_17258 = cljs.core.get.call(null,inst_17257__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17259 = cljs.core.get.call(null,inst_17257__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17260 = cljs.core.get.call(null,inst_17257__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17307__$1 = (function (){var statearr_17322 = state_17307;
(statearr_17322[(13)] = inst_17259);

(statearr_17322[(9)] = inst_17258);

(statearr_17322[(12)] = inst_17257__$1);

return statearr_17322;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17307__$1,(22),inst_17260);
} else {
if((state_val_17308 === (31))){
var inst_17289 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17289)){
var statearr_17323_17382 = state_17307__$1;
(statearr_17323_17382[(1)] = (32));

} else {
var statearr_17324_17383 = state_17307__$1;
(statearr_17324_17383[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (32))){
var inst_17266 = (state_17307[(14)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17307__$1,(35),out,inst_17266);
} else {
if((state_val_17308 === (33))){
var inst_17257 = (state_17307[(12)]);
var inst_17234 = inst_17257;
var state_17307__$1 = (function (){var statearr_17325 = state_17307;
(statearr_17325[(7)] = inst_17234);

return statearr_17325;
})();
var statearr_17326_17384 = state_17307__$1;
(statearr_17326_17384[(2)] = null);

(statearr_17326_17384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (13))){
var inst_17234 = (state_17307[(7)]);
var inst_17241 = inst_17234.cljs$lang$protocol_mask$partition0$;
var inst_17242 = (inst_17241 & (64));
var inst_17243 = inst_17234.cljs$core$ISeq$;
var inst_17244 = (cljs.core.PROTOCOL_SENTINEL === inst_17243);
var inst_17245 = (inst_17242) || (inst_17244);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17245)){
var statearr_17327_17385 = state_17307__$1;
(statearr_17327_17385[(1)] = (16));

} else {
var statearr_17328_17386 = state_17307__$1;
(statearr_17328_17386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (22))){
var inst_17266 = (state_17307[(14)]);
var inst_17267 = (state_17307[(11)]);
var inst_17265 = (state_17307[(2)]);
var inst_17266__$1 = cljs.core.nth.call(null,inst_17265,(0),null);
var inst_17267__$1 = cljs.core.nth.call(null,inst_17265,(1),null);
var inst_17268 = (inst_17266__$1 == null);
var inst_17269 = cljs.core._EQ_.call(null,inst_17267__$1,change);
var inst_17270 = (inst_17268) || (inst_17269);
var state_17307__$1 = (function (){var statearr_17329 = state_17307;
(statearr_17329[(14)] = inst_17266__$1);

(statearr_17329[(11)] = inst_17267__$1);

return statearr_17329;
})();
if(cljs.core.truth_(inst_17270)){
var statearr_17330_17387 = state_17307__$1;
(statearr_17330_17387[(1)] = (23));

} else {
var statearr_17331_17388 = state_17307__$1;
(statearr_17331_17388[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (36))){
var inst_17257 = (state_17307[(12)]);
var inst_17234 = inst_17257;
var state_17307__$1 = (function (){var statearr_17332 = state_17307;
(statearr_17332[(7)] = inst_17234);

return statearr_17332;
})();
var statearr_17333_17389 = state_17307__$1;
(statearr_17333_17389[(2)] = null);

(statearr_17333_17389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (29))){
var inst_17281 = (state_17307[(10)]);
var state_17307__$1 = state_17307;
var statearr_17334_17390 = state_17307__$1;
(statearr_17334_17390[(2)] = inst_17281);

(statearr_17334_17390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (6))){
var state_17307__$1 = state_17307;
var statearr_17335_17391 = state_17307__$1;
(statearr_17335_17391[(2)] = false);

(statearr_17335_17391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (28))){
var inst_17277 = (state_17307[(2)]);
var inst_17278 = calc_state.call(null);
var inst_17234 = inst_17278;
var state_17307__$1 = (function (){var statearr_17336 = state_17307;
(statearr_17336[(15)] = inst_17277);

(statearr_17336[(7)] = inst_17234);

return statearr_17336;
})();
var statearr_17337_17392 = state_17307__$1;
(statearr_17337_17392[(2)] = null);

(statearr_17337_17392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (25))){
var inst_17303 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17338_17393 = state_17307__$1;
(statearr_17338_17393[(2)] = inst_17303);

(statearr_17338_17393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (34))){
var inst_17301 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17339_17394 = state_17307__$1;
(statearr_17339_17394[(2)] = inst_17301);

(statearr_17339_17394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (17))){
var state_17307__$1 = state_17307;
var statearr_17340_17395 = state_17307__$1;
(statearr_17340_17395[(2)] = false);

(statearr_17340_17395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (3))){
var state_17307__$1 = state_17307;
var statearr_17341_17396 = state_17307__$1;
(statearr_17341_17396[(2)] = false);

(statearr_17341_17396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (12))){
var inst_17305 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17307__$1,inst_17305);
} else {
if((state_val_17308 === (2))){
var inst_17209 = (state_17307[(8)]);
var inst_17214 = inst_17209.cljs$lang$protocol_mask$partition0$;
var inst_17215 = (inst_17214 & (64));
var inst_17216 = inst_17209.cljs$core$ISeq$;
var inst_17217 = (cljs.core.PROTOCOL_SENTINEL === inst_17216);
var inst_17218 = (inst_17215) || (inst_17217);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17218)){
var statearr_17342_17397 = state_17307__$1;
(statearr_17342_17397[(1)] = (5));

} else {
var statearr_17343_17398 = state_17307__$1;
(statearr_17343_17398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (23))){
var inst_17266 = (state_17307[(14)]);
var inst_17272 = (inst_17266 == null);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17272)){
var statearr_17344_17399 = state_17307__$1;
(statearr_17344_17399[(1)] = (26));

} else {
var statearr_17345_17400 = state_17307__$1;
(statearr_17345_17400[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (35))){
var inst_17292 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17292)){
var statearr_17346_17401 = state_17307__$1;
(statearr_17346_17401[(1)] = (36));

} else {
var statearr_17347_17402 = state_17307__$1;
(statearr_17347_17402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (19))){
var inst_17234 = (state_17307[(7)]);
var inst_17254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17234);
var state_17307__$1 = state_17307;
var statearr_17348_17403 = state_17307__$1;
(statearr_17348_17403[(2)] = inst_17254);

(statearr_17348_17403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (11))){
var inst_17234 = (state_17307[(7)]);
var inst_17238 = (inst_17234 == null);
var inst_17239 = cljs.core.not.call(null,inst_17238);
var state_17307__$1 = state_17307;
if(inst_17239){
var statearr_17349_17404 = state_17307__$1;
(statearr_17349_17404[(1)] = (13));

} else {
var statearr_17350_17405 = state_17307__$1;
(statearr_17350_17405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (9))){
var inst_17209 = (state_17307[(8)]);
var state_17307__$1 = state_17307;
var statearr_17351_17406 = state_17307__$1;
(statearr_17351_17406[(2)] = inst_17209);

(statearr_17351_17406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (5))){
var state_17307__$1 = state_17307;
var statearr_17352_17407 = state_17307__$1;
(statearr_17352_17407[(2)] = true);

(statearr_17352_17407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (14))){
var state_17307__$1 = state_17307;
var statearr_17353_17408 = state_17307__$1;
(statearr_17353_17408[(2)] = false);

(statearr_17353_17408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (26))){
var inst_17267 = (state_17307[(11)]);
var inst_17274 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17267);
var state_17307__$1 = state_17307;
var statearr_17354_17409 = state_17307__$1;
(statearr_17354_17409[(2)] = inst_17274);

(statearr_17354_17409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (16))){
var state_17307__$1 = state_17307;
var statearr_17355_17410 = state_17307__$1;
(statearr_17355_17410[(2)] = true);

(statearr_17355_17410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (38))){
var inst_17297 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17356_17411 = state_17307__$1;
(statearr_17356_17411[(2)] = inst_17297);

(statearr_17356_17411[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (30))){
var inst_17259 = (state_17307[(13)]);
var inst_17258 = (state_17307[(9)]);
var inst_17267 = (state_17307[(11)]);
var inst_17284 = cljs.core.empty_QMARK_.call(null,inst_17258);
var inst_17285 = inst_17259.call(null,inst_17267);
var inst_17286 = cljs.core.not.call(null,inst_17285);
var inst_17287 = (inst_17284) && (inst_17286);
var state_17307__$1 = state_17307;
var statearr_17357_17412 = state_17307__$1;
(statearr_17357_17412[(2)] = inst_17287);

(statearr_17357_17412[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (10))){
var inst_17209 = (state_17307[(8)]);
var inst_17230 = (state_17307[(2)]);
var inst_17231 = cljs.core.get.call(null,inst_17230,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17232 = cljs.core.get.call(null,inst_17230,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17233 = cljs.core.get.call(null,inst_17230,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17234 = inst_17209;
var state_17307__$1 = (function (){var statearr_17358 = state_17307;
(statearr_17358[(16)] = inst_17231);

(statearr_17358[(17)] = inst_17233);

(statearr_17358[(18)] = inst_17232);

(statearr_17358[(7)] = inst_17234);

return statearr_17358;
})();
var statearr_17359_17413 = state_17307__$1;
(statearr_17359_17413[(2)] = null);

(statearr_17359_17413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (18))){
var inst_17249 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17360_17414 = state_17307__$1;
(statearr_17360_17414[(2)] = inst_17249);

(statearr_17360_17414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (37))){
var state_17307__$1 = state_17307;
var statearr_17361_17415 = state_17307__$1;
(statearr_17361_17415[(2)] = null);

(statearr_17361_17415[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (8))){
var inst_17209 = (state_17307[(8)]);
var inst_17227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17209);
var state_17307__$1 = state_17307;
var statearr_17362_17416 = state_17307__$1;
(statearr_17362_17416[(2)] = inst_17227);

(statearr_17362_17416[(1)] = (10));


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
});})(c__15603__auto___17370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15491__auto__,c__15603__auto___17370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15492__auto__ = null;
var cljs$core$async$mix_$_state_machine__15492__auto____0 = (function (){
var statearr_17366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17366[(0)] = cljs$core$async$mix_$_state_machine__15492__auto__);

(statearr_17366[(1)] = (1));

return statearr_17366;
});
var cljs$core$async$mix_$_state_machine__15492__auto____1 = (function (state_17307){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_17307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e17367){if((e17367 instanceof Object)){
var ex__15495__auto__ = e17367;
var statearr_17368_17417 = state_17307;
(statearr_17368_17417[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17418 = state_17307;
state_17307 = G__17418;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15492__auto__ = function(state_17307){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15492__auto____1.call(this,state_17307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15492__auto____0;
cljs$core$async$mix_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15492__auto____1;
return cljs$core$async$mix_$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___17370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15605__auto__ = (function (){var statearr_17369 = f__15604__auto__.call(null);
(statearr_17369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___17370);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___17370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9486__auto__ = (((p == null))?null:p);
var m__9487__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9487__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9486__auto__ = (((p == null))?null:p);
var m__9487__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,p,v,ch);
} else {
var m__9487__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17419 = [];
var len__9931__auto___17422 = arguments.length;
var i__9932__auto___17423 = (0);
while(true){
if((i__9932__auto___17423 < len__9931__auto___17422)){
args17419.push((arguments[i__9932__auto___17423]));

var G__17424 = (i__9932__auto___17423 + (1));
i__9932__auto___17423 = G__17424;
continue;
} else {
}
break;
}

var G__17421 = args17419.length;
switch (G__17421) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17419.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9486__auto__ = (((p == null))?null:p);
var m__9487__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,p);
} else {
var m__9487__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,p);
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
var x__9486__auto__ = (((p == null))?null:p);
var m__9487__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9486__auto__)]);
if(!((m__9487__auto__ == null))){
return m__9487__auto__.call(null,p,v);
} else {
var m__9487__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9487__auto____$1 == null))){
return m__9487__auto____$1.call(null,p,v);
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
var args17427 = [];
var len__9931__auto___17552 = arguments.length;
var i__9932__auto___17553 = (0);
while(true){
if((i__9932__auto___17553 < len__9931__auto___17552)){
args17427.push((arguments[i__9932__auto___17553]));

var G__17554 = (i__9932__auto___17553 + (1));
i__9932__auto___17553 = G__17554;
continue;
} else {
}
break;
}

var G__17429 = args17427.length;
switch (G__17429) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17427.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8823__auto__,mults){
return (function (p1__17426_SHARP_){
if(cljs.core.truth_(p1__17426_SHARP_.call(null,topic))){
return p1__17426_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17426_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8823__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17430 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17431){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17431 = meta17431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17432,meta17431__$1){
var self__ = this;
var _17432__$1 = this;
return (new cljs.core.async.t_cljs$core$async17430(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17431__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17432){
var self__ = this;
var _17432__$1 = this;
return self__.meta17431;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17431","meta17431",1471251109,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17430";

cljs.core.async.t_cljs$core$async17430.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async17430");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17430 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17431){
return (new cljs.core.async.t_cljs$core$async17430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17431));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17430(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15603__auto___17556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___17556,mults,ensure_mult,p){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___17556,mults,ensure_mult,p){
return (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (7))){
var inst_17500 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17506_17557 = state_17504__$1;
(statearr_17506_17557[(2)] = inst_17500);

(statearr_17506_17557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (20))){
var state_17504__$1 = state_17504;
var statearr_17507_17558 = state_17504__$1;
(statearr_17507_17558[(2)] = null);

(statearr_17507_17558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (1))){
var state_17504__$1 = state_17504;
var statearr_17508_17559 = state_17504__$1;
(statearr_17508_17559[(2)] = null);

(statearr_17508_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (24))){
var inst_17483 = (state_17504[(7)]);
var inst_17492 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17483);
var state_17504__$1 = state_17504;
var statearr_17509_17560 = state_17504__$1;
(statearr_17509_17560[(2)] = inst_17492);

(statearr_17509_17560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (4))){
var inst_17435 = (state_17504[(8)]);
var inst_17435__$1 = (state_17504[(2)]);
var inst_17436 = (inst_17435__$1 == null);
var state_17504__$1 = (function (){var statearr_17510 = state_17504;
(statearr_17510[(8)] = inst_17435__$1);

return statearr_17510;
})();
if(cljs.core.truth_(inst_17436)){
var statearr_17511_17561 = state_17504__$1;
(statearr_17511_17561[(1)] = (5));

} else {
var statearr_17512_17562 = state_17504__$1;
(statearr_17512_17562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (15))){
var inst_17477 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17513_17563 = state_17504__$1;
(statearr_17513_17563[(2)] = inst_17477);

(statearr_17513_17563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (21))){
var inst_17497 = (state_17504[(2)]);
var state_17504__$1 = (function (){var statearr_17514 = state_17504;
(statearr_17514[(9)] = inst_17497);

return statearr_17514;
})();
var statearr_17515_17564 = state_17504__$1;
(statearr_17515_17564[(2)] = null);

(statearr_17515_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (13))){
var inst_17459 = (state_17504[(10)]);
var inst_17461 = cljs.core.chunked_seq_QMARK_.call(null,inst_17459);
var state_17504__$1 = state_17504;
if(inst_17461){
var statearr_17516_17565 = state_17504__$1;
(statearr_17516_17565[(1)] = (16));

} else {
var statearr_17517_17566 = state_17504__$1;
(statearr_17517_17566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (22))){
var inst_17489 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
if(cljs.core.truth_(inst_17489)){
var statearr_17518_17567 = state_17504__$1;
(statearr_17518_17567[(1)] = (23));

} else {
var statearr_17519_17568 = state_17504__$1;
(statearr_17519_17568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (6))){
var inst_17435 = (state_17504[(8)]);
var inst_17483 = (state_17504[(7)]);
var inst_17485 = (state_17504[(11)]);
var inst_17483__$1 = topic_fn.call(null,inst_17435);
var inst_17484 = cljs.core.deref.call(null,mults);
var inst_17485__$1 = cljs.core.get.call(null,inst_17484,inst_17483__$1);
var state_17504__$1 = (function (){var statearr_17520 = state_17504;
(statearr_17520[(7)] = inst_17483__$1);

(statearr_17520[(11)] = inst_17485__$1);

return statearr_17520;
})();
if(cljs.core.truth_(inst_17485__$1)){
var statearr_17521_17569 = state_17504__$1;
(statearr_17521_17569[(1)] = (19));

} else {
var statearr_17522_17570 = state_17504__$1;
(statearr_17522_17570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (25))){
var inst_17494 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17523_17571 = state_17504__$1;
(statearr_17523_17571[(2)] = inst_17494);

(statearr_17523_17571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (17))){
var inst_17459 = (state_17504[(10)]);
var inst_17468 = cljs.core.first.call(null,inst_17459);
var inst_17469 = cljs.core.async.muxch_STAR_.call(null,inst_17468);
var inst_17470 = cljs.core.async.close_BANG_.call(null,inst_17469);
var inst_17471 = cljs.core.next.call(null,inst_17459);
var inst_17445 = inst_17471;
var inst_17446 = null;
var inst_17447 = (0);
var inst_17448 = (0);
var state_17504__$1 = (function (){var statearr_17524 = state_17504;
(statearr_17524[(12)] = inst_17470);

(statearr_17524[(13)] = inst_17447);

(statearr_17524[(14)] = inst_17448);

(statearr_17524[(15)] = inst_17446);

(statearr_17524[(16)] = inst_17445);

return statearr_17524;
})();
var statearr_17525_17572 = state_17504__$1;
(statearr_17525_17572[(2)] = null);

(statearr_17525_17572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (3))){
var inst_17502 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17504__$1,inst_17502);
} else {
if((state_val_17505 === (12))){
var inst_17479 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17526_17573 = state_17504__$1;
(statearr_17526_17573[(2)] = inst_17479);

(statearr_17526_17573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (2))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17504__$1,(4),ch);
} else {
if((state_val_17505 === (23))){
var state_17504__$1 = state_17504;
var statearr_17527_17574 = state_17504__$1;
(statearr_17527_17574[(2)] = null);

(statearr_17527_17574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (19))){
var inst_17435 = (state_17504[(8)]);
var inst_17485 = (state_17504[(11)]);
var inst_17487 = cljs.core.async.muxch_STAR_.call(null,inst_17485);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17504__$1,(22),inst_17487,inst_17435);
} else {
if((state_val_17505 === (11))){
var inst_17459 = (state_17504[(10)]);
var inst_17445 = (state_17504[(16)]);
var inst_17459__$1 = cljs.core.seq.call(null,inst_17445);
var state_17504__$1 = (function (){var statearr_17528 = state_17504;
(statearr_17528[(10)] = inst_17459__$1);

return statearr_17528;
})();
if(inst_17459__$1){
var statearr_17529_17575 = state_17504__$1;
(statearr_17529_17575[(1)] = (13));

} else {
var statearr_17530_17576 = state_17504__$1;
(statearr_17530_17576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (9))){
var inst_17481 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17531_17577 = state_17504__$1;
(statearr_17531_17577[(2)] = inst_17481);

(statearr_17531_17577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (5))){
var inst_17442 = cljs.core.deref.call(null,mults);
var inst_17443 = cljs.core.vals.call(null,inst_17442);
var inst_17444 = cljs.core.seq.call(null,inst_17443);
var inst_17445 = inst_17444;
var inst_17446 = null;
var inst_17447 = (0);
var inst_17448 = (0);
var state_17504__$1 = (function (){var statearr_17532 = state_17504;
(statearr_17532[(13)] = inst_17447);

(statearr_17532[(14)] = inst_17448);

(statearr_17532[(15)] = inst_17446);

(statearr_17532[(16)] = inst_17445);

return statearr_17532;
})();
var statearr_17533_17578 = state_17504__$1;
(statearr_17533_17578[(2)] = null);

(statearr_17533_17578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (14))){
var state_17504__$1 = state_17504;
var statearr_17537_17579 = state_17504__$1;
(statearr_17537_17579[(2)] = null);

(statearr_17537_17579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (16))){
var inst_17459 = (state_17504[(10)]);
var inst_17463 = cljs.core.chunk_first.call(null,inst_17459);
var inst_17464 = cljs.core.chunk_rest.call(null,inst_17459);
var inst_17465 = cljs.core.count.call(null,inst_17463);
var inst_17445 = inst_17464;
var inst_17446 = inst_17463;
var inst_17447 = inst_17465;
var inst_17448 = (0);
var state_17504__$1 = (function (){var statearr_17538 = state_17504;
(statearr_17538[(13)] = inst_17447);

(statearr_17538[(14)] = inst_17448);

(statearr_17538[(15)] = inst_17446);

(statearr_17538[(16)] = inst_17445);

return statearr_17538;
})();
var statearr_17539_17580 = state_17504__$1;
(statearr_17539_17580[(2)] = null);

(statearr_17539_17580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (10))){
var inst_17447 = (state_17504[(13)]);
var inst_17448 = (state_17504[(14)]);
var inst_17446 = (state_17504[(15)]);
var inst_17445 = (state_17504[(16)]);
var inst_17453 = cljs.core._nth.call(null,inst_17446,inst_17448);
var inst_17454 = cljs.core.async.muxch_STAR_.call(null,inst_17453);
var inst_17455 = cljs.core.async.close_BANG_.call(null,inst_17454);
var inst_17456 = (inst_17448 + (1));
var tmp17534 = inst_17447;
var tmp17535 = inst_17446;
var tmp17536 = inst_17445;
var inst_17445__$1 = tmp17536;
var inst_17446__$1 = tmp17535;
var inst_17447__$1 = tmp17534;
var inst_17448__$1 = inst_17456;
var state_17504__$1 = (function (){var statearr_17540 = state_17504;
(statearr_17540[(13)] = inst_17447__$1);

(statearr_17540[(14)] = inst_17448__$1);

(statearr_17540[(15)] = inst_17446__$1);

(statearr_17540[(16)] = inst_17445__$1);

(statearr_17540[(17)] = inst_17455);

return statearr_17540;
})();
var statearr_17541_17581 = state_17504__$1;
(statearr_17541_17581[(2)] = null);

(statearr_17541_17581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (18))){
var inst_17474 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17542_17582 = state_17504__$1;
(statearr_17542_17582[(2)] = inst_17474);

(statearr_17542_17582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (8))){
var inst_17447 = (state_17504[(13)]);
var inst_17448 = (state_17504[(14)]);
var inst_17450 = (inst_17448 < inst_17447);
var inst_17451 = inst_17450;
var state_17504__$1 = state_17504;
if(cljs.core.truth_(inst_17451)){
var statearr_17543_17583 = state_17504__$1;
(statearr_17543_17583[(1)] = (10));

} else {
var statearr_17544_17584 = state_17504__$1;
(statearr_17544_17584[(1)] = (11));

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
});})(c__15603__auto___17556,mults,ensure_mult,p))
;
return ((function (switch__15491__auto__,c__15603__auto___17556,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_17548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17548[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_17548[(1)] = (1));

return statearr_17548;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_17504){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_17504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e17549){if((e17549 instanceof Object)){
var ex__15495__auto__ = e17549;
var statearr_17550_17585 = state_17504;
(statearr_17550_17585[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17586 = state_17504;
state_17504 = G__17586;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___17556,mults,ensure_mult,p))
})();
var state__15605__auto__ = (function (){var statearr_17551 = f__15604__auto__.call(null);
(statearr_17551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___17556);

return statearr_17551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___17556,mults,ensure_mult,p))
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
var args17587 = [];
var len__9931__auto___17590 = arguments.length;
var i__9932__auto___17591 = (0);
while(true){
if((i__9932__auto___17591 < len__9931__auto___17590)){
args17587.push((arguments[i__9932__auto___17591]));

var G__17592 = (i__9932__auto___17591 + (1));
i__9932__auto___17591 = G__17592;
continue;
} else {
}
break;
}

var G__17589 = args17587.length;
switch (G__17589) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17587.length)].join('')));

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
var args17594 = [];
var len__9931__auto___17597 = arguments.length;
var i__9932__auto___17598 = (0);
while(true){
if((i__9932__auto___17598 < len__9931__auto___17597)){
args17594.push((arguments[i__9932__auto___17598]));

var G__17599 = (i__9932__auto___17598 + (1));
i__9932__auto___17598 = G__17599;
continue;
} else {
}
break;
}

var G__17596 = args17594.length;
switch (G__17596) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17594.length)].join('')));

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
var args17601 = [];
var len__9931__auto___17672 = arguments.length;
var i__9932__auto___17673 = (0);
while(true){
if((i__9932__auto___17673 < len__9931__auto___17672)){
args17601.push((arguments[i__9932__auto___17673]));

var G__17674 = (i__9932__auto___17673 + (1));
i__9932__auto___17673 = G__17674;
continue;
} else {
}
break;
}

var G__17603 = args17601.length;
switch (G__17603) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17601.length)].join('')));

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
var c__15603__auto___17676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___17676,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___17676,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17642){
var state_val_17643 = (state_17642[(1)]);
if((state_val_17643 === (7))){
var state_17642__$1 = state_17642;
var statearr_17644_17677 = state_17642__$1;
(statearr_17644_17677[(2)] = null);

(statearr_17644_17677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (1))){
var state_17642__$1 = state_17642;
var statearr_17645_17678 = state_17642__$1;
(statearr_17645_17678[(2)] = null);

(statearr_17645_17678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (4))){
var inst_17606 = (state_17642[(7)]);
var inst_17608 = (inst_17606 < cnt);
var state_17642__$1 = state_17642;
if(cljs.core.truth_(inst_17608)){
var statearr_17646_17679 = state_17642__$1;
(statearr_17646_17679[(1)] = (6));

} else {
var statearr_17647_17680 = state_17642__$1;
(statearr_17647_17680[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (15))){
var inst_17638 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17648_17681 = state_17642__$1;
(statearr_17648_17681[(2)] = inst_17638);

(statearr_17648_17681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (13))){
var inst_17631 = cljs.core.async.close_BANG_.call(null,out);
var state_17642__$1 = state_17642;
var statearr_17649_17682 = state_17642__$1;
(statearr_17649_17682[(2)] = inst_17631);

(statearr_17649_17682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (6))){
var state_17642__$1 = state_17642;
var statearr_17650_17683 = state_17642__$1;
(statearr_17650_17683[(2)] = null);

(statearr_17650_17683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (3))){
var inst_17640 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17642__$1,inst_17640);
} else {
if((state_val_17643 === (12))){
var inst_17628 = (state_17642[(8)]);
var inst_17628__$1 = (state_17642[(2)]);
var inst_17629 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17628__$1);
var state_17642__$1 = (function (){var statearr_17651 = state_17642;
(statearr_17651[(8)] = inst_17628__$1);

return statearr_17651;
})();
if(cljs.core.truth_(inst_17629)){
var statearr_17652_17684 = state_17642__$1;
(statearr_17652_17684[(1)] = (13));

} else {
var statearr_17653_17685 = state_17642__$1;
(statearr_17653_17685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (2))){
var inst_17605 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17606 = (0);
var state_17642__$1 = (function (){var statearr_17654 = state_17642;
(statearr_17654[(9)] = inst_17605);

(statearr_17654[(7)] = inst_17606);

return statearr_17654;
})();
var statearr_17655_17686 = state_17642__$1;
(statearr_17655_17686[(2)] = null);

(statearr_17655_17686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (11))){
var inst_17606 = (state_17642[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17642,(10),Object,null,(9));
var inst_17615 = chs__$1.call(null,inst_17606);
var inst_17616 = done.call(null,inst_17606);
var inst_17617 = cljs.core.async.take_BANG_.call(null,inst_17615,inst_17616);
var state_17642__$1 = state_17642;
var statearr_17656_17687 = state_17642__$1;
(statearr_17656_17687[(2)] = inst_17617);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17642__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (9))){
var inst_17606 = (state_17642[(7)]);
var inst_17619 = (state_17642[(2)]);
var inst_17620 = (inst_17606 + (1));
var inst_17606__$1 = inst_17620;
var state_17642__$1 = (function (){var statearr_17657 = state_17642;
(statearr_17657[(10)] = inst_17619);

(statearr_17657[(7)] = inst_17606__$1);

return statearr_17657;
})();
var statearr_17658_17688 = state_17642__$1;
(statearr_17658_17688[(2)] = null);

(statearr_17658_17688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (5))){
var inst_17626 = (state_17642[(2)]);
var state_17642__$1 = (function (){var statearr_17659 = state_17642;
(statearr_17659[(11)] = inst_17626);

return statearr_17659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17642__$1,(12),dchan);
} else {
if((state_val_17643 === (14))){
var inst_17628 = (state_17642[(8)]);
var inst_17633 = cljs.core.apply.call(null,f,inst_17628);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17642__$1,(16),out,inst_17633);
} else {
if((state_val_17643 === (16))){
var inst_17635 = (state_17642[(2)]);
var state_17642__$1 = (function (){var statearr_17660 = state_17642;
(statearr_17660[(12)] = inst_17635);

return statearr_17660;
})();
var statearr_17661_17689 = state_17642__$1;
(statearr_17661_17689[(2)] = null);

(statearr_17661_17689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (10))){
var inst_17610 = (state_17642[(2)]);
var inst_17611 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17642__$1 = (function (){var statearr_17662 = state_17642;
(statearr_17662[(13)] = inst_17610);

return statearr_17662;
})();
var statearr_17663_17690 = state_17642__$1;
(statearr_17663_17690[(2)] = inst_17611);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17642__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (8))){
var inst_17624 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17664_17691 = state_17642__$1;
(statearr_17664_17691[(2)] = inst_17624);

(statearr_17664_17691[(1)] = (5));


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
});})(c__15603__auto___17676,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15491__auto__,c__15603__auto___17676,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_17668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17668[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_17668[(1)] = (1));

return statearr_17668;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_17642){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_17642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e17669){if((e17669 instanceof Object)){
var ex__15495__auto__ = e17669;
var statearr_17670_17692 = state_17642;
(statearr_17670_17692[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17693 = state_17642;
state_17642 = G__17693;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_17642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_17642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___17676,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15605__auto__ = (function (){var statearr_17671 = f__15604__auto__.call(null);
(statearr_17671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___17676);

return statearr_17671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___17676,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17695 = [];
var len__9931__auto___17753 = arguments.length;
var i__9932__auto___17754 = (0);
while(true){
if((i__9932__auto___17754 < len__9931__auto___17753)){
args17695.push((arguments[i__9932__auto___17754]));

var G__17755 = (i__9932__auto___17754 + (1));
i__9932__auto___17754 = G__17755;
continue;
} else {
}
break;
}

var G__17697 = args17695.length;
switch (G__17697) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17695.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15603__auto___17757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___17757,out){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___17757,out){
return (function (state_17729){
var state_val_17730 = (state_17729[(1)]);
if((state_val_17730 === (7))){
var inst_17708 = (state_17729[(7)]);
var inst_17709 = (state_17729[(8)]);
var inst_17708__$1 = (state_17729[(2)]);
var inst_17709__$1 = cljs.core.nth.call(null,inst_17708__$1,(0),null);
var inst_17710 = cljs.core.nth.call(null,inst_17708__$1,(1),null);
var inst_17711 = (inst_17709__$1 == null);
var state_17729__$1 = (function (){var statearr_17731 = state_17729;
(statearr_17731[(7)] = inst_17708__$1);

(statearr_17731[(8)] = inst_17709__$1);

(statearr_17731[(9)] = inst_17710);

return statearr_17731;
})();
if(cljs.core.truth_(inst_17711)){
var statearr_17732_17758 = state_17729__$1;
(statearr_17732_17758[(1)] = (8));

} else {
var statearr_17733_17759 = state_17729__$1;
(statearr_17733_17759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (1))){
var inst_17698 = cljs.core.vec.call(null,chs);
var inst_17699 = inst_17698;
var state_17729__$1 = (function (){var statearr_17734 = state_17729;
(statearr_17734[(10)] = inst_17699);

return statearr_17734;
})();
var statearr_17735_17760 = state_17729__$1;
(statearr_17735_17760[(2)] = null);

(statearr_17735_17760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (4))){
var inst_17699 = (state_17729[(10)]);
var state_17729__$1 = state_17729;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17729__$1,(7),inst_17699);
} else {
if((state_val_17730 === (6))){
var inst_17725 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17736_17761 = state_17729__$1;
(statearr_17736_17761[(2)] = inst_17725);

(statearr_17736_17761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (3))){
var inst_17727 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17729__$1,inst_17727);
} else {
if((state_val_17730 === (2))){
var inst_17699 = (state_17729[(10)]);
var inst_17701 = cljs.core.count.call(null,inst_17699);
var inst_17702 = (inst_17701 > (0));
var state_17729__$1 = state_17729;
if(cljs.core.truth_(inst_17702)){
var statearr_17738_17762 = state_17729__$1;
(statearr_17738_17762[(1)] = (4));

} else {
var statearr_17739_17763 = state_17729__$1;
(statearr_17739_17763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (11))){
var inst_17699 = (state_17729[(10)]);
var inst_17718 = (state_17729[(2)]);
var tmp17737 = inst_17699;
var inst_17699__$1 = tmp17737;
var state_17729__$1 = (function (){var statearr_17740 = state_17729;
(statearr_17740[(10)] = inst_17699__$1);

(statearr_17740[(11)] = inst_17718);

return statearr_17740;
})();
var statearr_17741_17764 = state_17729__$1;
(statearr_17741_17764[(2)] = null);

(statearr_17741_17764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (9))){
var inst_17709 = (state_17729[(8)]);
var state_17729__$1 = state_17729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17729__$1,(11),out,inst_17709);
} else {
if((state_val_17730 === (5))){
var inst_17723 = cljs.core.async.close_BANG_.call(null,out);
var state_17729__$1 = state_17729;
var statearr_17742_17765 = state_17729__$1;
(statearr_17742_17765[(2)] = inst_17723);

(statearr_17742_17765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (10))){
var inst_17721 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17743_17766 = state_17729__$1;
(statearr_17743_17766[(2)] = inst_17721);

(statearr_17743_17766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (8))){
var inst_17708 = (state_17729[(7)]);
var inst_17699 = (state_17729[(10)]);
var inst_17709 = (state_17729[(8)]);
var inst_17710 = (state_17729[(9)]);
var inst_17713 = (function (){var cs = inst_17699;
var vec__17704 = inst_17708;
var v = inst_17709;
var c = inst_17710;
return ((function (cs,vec__17704,v,c,inst_17708,inst_17699,inst_17709,inst_17710,state_val_17730,c__15603__auto___17757,out){
return (function (p1__17694_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17694_SHARP_);
});
;})(cs,vec__17704,v,c,inst_17708,inst_17699,inst_17709,inst_17710,state_val_17730,c__15603__auto___17757,out))
})();
var inst_17714 = cljs.core.filterv.call(null,inst_17713,inst_17699);
var inst_17699__$1 = inst_17714;
var state_17729__$1 = (function (){var statearr_17744 = state_17729;
(statearr_17744[(10)] = inst_17699__$1);

return statearr_17744;
})();
var statearr_17745_17767 = state_17729__$1;
(statearr_17745_17767[(2)] = null);

(statearr_17745_17767[(1)] = (2));


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
});})(c__15603__auto___17757,out))
;
return ((function (switch__15491__auto__,c__15603__auto___17757,out){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_17749 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17749[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_17749[(1)] = (1));

return statearr_17749;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_17729){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_17729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e17750){if((e17750 instanceof Object)){
var ex__15495__auto__ = e17750;
var statearr_17751_17768 = state_17729;
(statearr_17751_17768[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17769 = state_17729;
state_17729 = G__17769;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_17729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_17729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___17757,out))
})();
var state__15605__auto__ = (function (){var statearr_17752 = f__15604__auto__.call(null);
(statearr_17752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___17757);

return statearr_17752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___17757,out))
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
var args17770 = [];
var len__9931__auto___17819 = arguments.length;
var i__9932__auto___17820 = (0);
while(true){
if((i__9932__auto___17820 < len__9931__auto___17819)){
args17770.push((arguments[i__9932__auto___17820]));

var G__17821 = (i__9932__auto___17820 + (1));
i__9932__auto___17820 = G__17821;
continue;
} else {
}
break;
}

var G__17772 = args17770.length;
switch (G__17772) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17770.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15603__auto___17823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___17823,out){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___17823,out){
return (function (state_17796){
var state_val_17797 = (state_17796[(1)]);
if((state_val_17797 === (7))){
var inst_17778 = (state_17796[(7)]);
var inst_17778__$1 = (state_17796[(2)]);
var inst_17779 = (inst_17778__$1 == null);
var inst_17780 = cljs.core.not.call(null,inst_17779);
var state_17796__$1 = (function (){var statearr_17798 = state_17796;
(statearr_17798[(7)] = inst_17778__$1);

return statearr_17798;
})();
if(inst_17780){
var statearr_17799_17824 = state_17796__$1;
(statearr_17799_17824[(1)] = (8));

} else {
var statearr_17800_17825 = state_17796__$1;
(statearr_17800_17825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (1))){
var inst_17773 = (0);
var state_17796__$1 = (function (){var statearr_17801 = state_17796;
(statearr_17801[(8)] = inst_17773);

return statearr_17801;
})();
var statearr_17802_17826 = state_17796__$1;
(statearr_17802_17826[(2)] = null);

(statearr_17802_17826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (4))){
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17796__$1,(7),ch);
} else {
if((state_val_17797 === (6))){
var inst_17791 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
var statearr_17803_17827 = state_17796__$1;
(statearr_17803_17827[(2)] = inst_17791);

(statearr_17803_17827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (3))){
var inst_17793 = (state_17796[(2)]);
var inst_17794 = cljs.core.async.close_BANG_.call(null,out);
var state_17796__$1 = (function (){var statearr_17804 = state_17796;
(statearr_17804[(9)] = inst_17793);

return statearr_17804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17796__$1,inst_17794);
} else {
if((state_val_17797 === (2))){
var inst_17773 = (state_17796[(8)]);
var inst_17775 = (inst_17773 < n);
var state_17796__$1 = state_17796;
if(cljs.core.truth_(inst_17775)){
var statearr_17805_17828 = state_17796__$1;
(statearr_17805_17828[(1)] = (4));

} else {
var statearr_17806_17829 = state_17796__$1;
(statearr_17806_17829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (11))){
var inst_17773 = (state_17796[(8)]);
var inst_17783 = (state_17796[(2)]);
var inst_17784 = (inst_17773 + (1));
var inst_17773__$1 = inst_17784;
var state_17796__$1 = (function (){var statearr_17807 = state_17796;
(statearr_17807[(10)] = inst_17783);

(statearr_17807[(8)] = inst_17773__$1);

return statearr_17807;
})();
var statearr_17808_17830 = state_17796__$1;
(statearr_17808_17830[(2)] = null);

(statearr_17808_17830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (9))){
var state_17796__$1 = state_17796;
var statearr_17809_17831 = state_17796__$1;
(statearr_17809_17831[(2)] = null);

(statearr_17809_17831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (5))){
var state_17796__$1 = state_17796;
var statearr_17810_17832 = state_17796__$1;
(statearr_17810_17832[(2)] = null);

(statearr_17810_17832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (10))){
var inst_17788 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
var statearr_17811_17833 = state_17796__$1;
(statearr_17811_17833[(2)] = inst_17788);

(statearr_17811_17833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (8))){
var inst_17778 = (state_17796[(7)]);
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17796__$1,(11),out,inst_17778);
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
});})(c__15603__auto___17823,out))
;
return ((function (switch__15491__auto__,c__15603__auto___17823,out){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_17815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17815[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_17815[(1)] = (1));

return statearr_17815;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_17796){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_17796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e17816){if((e17816 instanceof Object)){
var ex__15495__auto__ = e17816;
var statearr_17817_17834 = state_17796;
(statearr_17817_17834[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17835 = state_17796;
state_17796 = G__17835;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_17796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_17796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___17823,out))
})();
var state__15605__auto__ = (function (){var statearr_17818 = f__15604__auto__.call(null);
(statearr_17818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___17823);

return statearr_17818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___17823,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17843 = (function (f,ch,meta17844){
this.f = f;
this.ch = ch;
this.meta17844 = meta17844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17845,meta17844__$1){
var self__ = this;
var _17845__$1 = this;
return (new cljs.core.async.t_cljs$core$async17843(self__.f,self__.ch,meta17844__$1));
});

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17845){
var self__ = this;
var _17845__$1 = this;
return self__.meta17844;
});

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17846 = (function (f,ch,meta17844,_,fn1,meta17847){
this.f = f;
this.ch = ch;
this.meta17844 = meta17844;
this._ = _;
this.fn1 = fn1;
this.meta17847 = meta17847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17848,meta17847__$1){
var self__ = this;
var _17848__$1 = this;
return (new cljs.core.async.t_cljs$core$async17846(self__.f,self__.ch,self__.meta17844,self__._,self__.fn1,meta17847__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17848){
var self__ = this;
var _17848__$1 = this;
return self__.meta17847;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17846.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17836_SHARP_){
return f1.call(null,(((p1__17836_SHARP_ == null))?null:self__.f.call(null,p1__17836_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17846.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17844","meta17844",-475768663,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17843","cljs.core.async/t_cljs$core$async17843",1737324827,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17847","meta17847",-1714156945,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17846";

cljs.core.async.t_cljs$core$async17846.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async17846");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17846 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17846(f__$1,ch__$1,meta17844__$1,___$2,fn1__$1,meta17847){
return (new cljs.core.async.t_cljs$core$async17846(f__$1,ch__$1,meta17844__$1,___$2,fn1__$1,meta17847));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17846(self__.f,self__.ch,self__.meta17844,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8811__auto__ = ret;
if(cljs.core.truth_(and__8811__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8811__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17844","meta17844",-475768663,null)], null);
});

cljs.core.async.t_cljs$core$async17843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17843";

cljs.core.async.t_cljs$core$async17843.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async17843");
});

cljs.core.async.__GT_t_cljs$core$async17843 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17843(f__$1,ch__$1,meta17844){
return (new cljs.core.async.t_cljs$core$async17843(f__$1,ch__$1,meta17844));
});

}

return (new cljs.core.async.t_cljs$core$async17843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17852 = (function (f,ch,meta17853){
this.f = f;
this.ch = ch;
this.meta17853 = meta17853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17854,meta17853__$1){
var self__ = this;
var _17854__$1 = this;
return (new cljs.core.async.t_cljs$core$async17852(self__.f,self__.ch,meta17853__$1));
});

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17854){
var self__ = this;
var _17854__$1 = this;
return self__.meta17853;
});

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17853","meta17853",1195669260,null)], null);
});

cljs.core.async.t_cljs$core$async17852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17852";

cljs.core.async.t_cljs$core$async17852.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async17852");
});

cljs.core.async.__GT_t_cljs$core$async17852 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17852(f__$1,ch__$1,meta17853){
return (new cljs.core.async.t_cljs$core$async17852(f__$1,ch__$1,meta17853));
});

}

return (new cljs.core.async.t_cljs$core$async17852(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17858 = (function (p,ch,meta17859){
this.p = p;
this.ch = ch;
this.meta17859 = meta17859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17860,meta17859__$1){
var self__ = this;
var _17860__$1 = this;
return (new cljs.core.async.t_cljs$core$async17858(self__.p,self__.ch,meta17859__$1));
});

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17860){
var self__ = this;
var _17860__$1 = this;
return self__.meta17859;
});

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17859","meta17859",-1385803910,null)], null);
});

cljs.core.async.t_cljs$core$async17858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17858";

cljs.core.async.t_cljs$core$async17858.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cljs.core.async/t_cljs$core$async17858");
});

cljs.core.async.__GT_t_cljs$core$async17858 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17858(p__$1,ch__$1,meta17859){
return (new cljs.core.async.t_cljs$core$async17858(p__$1,ch__$1,meta17859));
});

}

return (new cljs.core.async.t_cljs$core$async17858(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17861 = [];
var len__9931__auto___17905 = arguments.length;
var i__9932__auto___17906 = (0);
while(true){
if((i__9932__auto___17906 < len__9931__auto___17905)){
args17861.push((arguments[i__9932__auto___17906]));

var G__17907 = (i__9932__auto___17906 + (1));
i__9932__auto___17906 = G__17907;
continue;
} else {
}
break;
}

var G__17863 = args17861.length;
switch (G__17863) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17861.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15603__auto___17909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___17909,out){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___17909,out){
return (function (state_17884){
var state_val_17885 = (state_17884[(1)]);
if((state_val_17885 === (7))){
var inst_17880 = (state_17884[(2)]);
var state_17884__$1 = state_17884;
var statearr_17886_17910 = state_17884__$1;
(statearr_17886_17910[(2)] = inst_17880);

(statearr_17886_17910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (1))){
var state_17884__$1 = state_17884;
var statearr_17887_17911 = state_17884__$1;
(statearr_17887_17911[(2)] = null);

(statearr_17887_17911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (4))){
var inst_17866 = (state_17884[(7)]);
var inst_17866__$1 = (state_17884[(2)]);
var inst_17867 = (inst_17866__$1 == null);
var state_17884__$1 = (function (){var statearr_17888 = state_17884;
(statearr_17888[(7)] = inst_17866__$1);

return statearr_17888;
})();
if(cljs.core.truth_(inst_17867)){
var statearr_17889_17912 = state_17884__$1;
(statearr_17889_17912[(1)] = (5));

} else {
var statearr_17890_17913 = state_17884__$1;
(statearr_17890_17913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (6))){
var inst_17866 = (state_17884[(7)]);
var inst_17871 = p.call(null,inst_17866);
var state_17884__$1 = state_17884;
if(cljs.core.truth_(inst_17871)){
var statearr_17891_17914 = state_17884__$1;
(statearr_17891_17914[(1)] = (8));

} else {
var statearr_17892_17915 = state_17884__$1;
(statearr_17892_17915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (3))){
var inst_17882 = (state_17884[(2)]);
var state_17884__$1 = state_17884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17884__$1,inst_17882);
} else {
if((state_val_17885 === (2))){
var state_17884__$1 = state_17884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17884__$1,(4),ch);
} else {
if((state_val_17885 === (11))){
var inst_17874 = (state_17884[(2)]);
var state_17884__$1 = state_17884;
var statearr_17893_17916 = state_17884__$1;
(statearr_17893_17916[(2)] = inst_17874);

(statearr_17893_17916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (9))){
var state_17884__$1 = state_17884;
var statearr_17894_17917 = state_17884__$1;
(statearr_17894_17917[(2)] = null);

(statearr_17894_17917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (5))){
var inst_17869 = cljs.core.async.close_BANG_.call(null,out);
var state_17884__$1 = state_17884;
var statearr_17895_17918 = state_17884__$1;
(statearr_17895_17918[(2)] = inst_17869);

(statearr_17895_17918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (10))){
var inst_17877 = (state_17884[(2)]);
var state_17884__$1 = (function (){var statearr_17896 = state_17884;
(statearr_17896[(8)] = inst_17877);

return statearr_17896;
})();
var statearr_17897_17919 = state_17884__$1;
(statearr_17897_17919[(2)] = null);

(statearr_17897_17919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17885 === (8))){
var inst_17866 = (state_17884[(7)]);
var state_17884__$1 = state_17884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17884__$1,(11),out,inst_17866);
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
});})(c__15603__auto___17909,out))
;
return ((function (switch__15491__auto__,c__15603__auto___17909,out){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_17901 = [null,null,null,null,null,null,null,null,null];
(statearr_17901[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_17901[(1)] = (1));

return statearr_17901;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_17884){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_17884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e17902){if((e17902 instanceof Object)){
var ex__15495__auto__ = e17902;
var statearr_17903_17920 = state_17884;
(statearr_17903_17920[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17921 = state_17884;
state_17884 = G__17921;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_17884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_17884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___17909,out))
})();
var state__15605__auto__ = (function (){var statearr_17904 = f__15604__auto__.call(null);
(statearr_17904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___17909);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___17909,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17922 = [];
var len__9931__auto___17925 = arguments.length;
var i__9932__auto___17926 = (0);
while(true){
if((i__9932__auto___17926 < len__9931__auto___17925)){
args17922.push((arguments[i__9932__auto___17926]));

var G__17927 = (i__9932__auto___17926 + (1));
i__9932__auto___17926 = G__17927;
continue;
} else {
}
break;
}

var G__17924 = args17922.length;
switch (G__17924) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17922.length)].join('')));

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
var c__15603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto__){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto__){
return (function (state_18094){
var state_val_18095 = (state_18094[(1)]);
if((state_val_18095 === (7))){
var inst_18090 = (state_18094[(2)]);
var state_18094__$1 = state_18094;
var statearr_18096_18137 = state_18094__$1;
(statearr_18096_18137[(2)] = inst_18090);

(statearr_18096_18137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (20))){
var inst_18060 = (state_18094[(7)]);
var inst_18071 = (state_18094[(2)]);
var inst_18072 = cljs.core.next.call(null,inst_18060);
var inst_18046 = inst_18072;
var inst_18047 = null;
var inst_18048 = (0);
var inst_18049 = (0);
var state_18094__$1 = (function (){var statearr_18097 = state_18094;
(statearr_18097[(8)] = inst_18047);

(statearr_18097[(9)] = inst_18048);

(statearr_18097[(10)] = inst_18046);

(statearr_18097[(11)] = inst_18071);

(statearr_18097[(12)] = inst_18049);

return statearr_18097;
})();
var statearr_18098_18138 = state_18094__$1;
(statearr_18098_18138[(2)] = null);

(statearr_18098_18138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (1))){
var state_18094__$1 = state_18094;
var statearr_18099_18139 = state_18094__$1;
(statearr_18099_18139[(2)] = null);

(statearr_18099_18139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (4))){
var inst_18035 = (state_18094[(13)]);
var inst_18035__$1 = (state_18094[(2)]);
var inst_18036 = (inst_18035__$1 == null);
var state_18094__$1 = (function (){var statearr_18100 = state_18094;
(statearr_18100[(13)] = inst_18035__$1);

return statearr_18100;
})();
if(cljs.core.truth_(inst_18036)){
var statearr_18101_18140 = state_18094__$1;
(statearr_18101_18140[(1)] = (5));

} else {
var statearr_18102_18141 = state_18094__$1;
(statearr_18102_18141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (15))){
var state_18094__$1 = state_18094;
var statearr_18106_18142 = state_18094__$1;
(statearr_18106_18142[(2)] = null);

(statearr_18106_18142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (21))){
var state_18094__$1 = state_18094;
var statearr_18107_18143 = state_18094__$1;
(statearr_18107_18143[(2)] = null);

(statearr_18107_18143[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (13))){
var inst_18047 = (state_18094[(8)]);
var inst_18048 = (state_18094[(9)]);
var inst_18046 = (state_18094[(10)]);
var inst_18049 = (state_18094[(12)]);
var inst_18056 = (state_18094[(2)]);
var inst_18057 = (inst_18049 + (1));
var tmp18103 = inst_18047;
var tmp18104 = inst_18048;
var tmp18105 = inst_18046;
var inst_18046__$1 = tmp18105;
var inst_18047__$1 = tmp18103;
var inst_18048__$1 = tmp18104;
var inst_18049__$1 = inst_18057;
var state_18094__$1 = (function (){var statearr_18108 = state_18094;
(statearr_18108[(8)] = inst_18047__$1);

(statearr_18108[(9)] = inst_18048__$1);

(statearr_18108[(10)] = inst_18046__$1);

(statearr_18108[(14)] = inst_18056);

(statearr_18108[(12)] = inst_18049__$1);

return statearr_18108;
})();
var statearr_18109_18144 = state_18094__$1;
(statearr_18109_18144[(2)] = null);

(statearr_18109_18144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (22))){
var state_18094__$1 = state_18094;
var statearr_18110_18145 = state_18094__$1;
(statearr_18110_18145[(2)] = null);

(statearr_18110_18145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (6))){
var inst_18035 = (state_18094[(13)]);
var inst_18044 = f.call(null,inst_18035);
var inst_18045 = cljs.core.seq.call(null,inst_18044);
var inst_18046 = inst_18045;
var inst_18047 = null;
var inst_18048 = (0);
var inst_18049 = (0);
var state_18094__$1 = (function (){var statearr_18111 = state_18094;
(statearr_18111[(8)] = inst_18047);

(statearr_18111[(9)] = inst_18048);

(statearr_18111[(10)] = inst_18046);

(statearr_18111[(12)] = inst_18049);

return statearr_18111;
})();
var statearr_18112_18146 = state_18094__$1;
(statearr_18112_18146[(2)] = null);

(statearr_18112_18146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (17))){
var inst_18060 = (state_18094[(7)]);
var inst_18064 = cljs.core.chunk_first.call(null,inst_18060);
var inst_18065 = cljs.core.chunk_rest.call(null,inst_18060);
var inst_18066 = cljs.core.count.call(null,inst_18064);
var inst_18046 = inst_18065;
var inst_18047 = inst_18064;
var inst_18048 = inst_18066;
var inst_18049 = (0);
var state_18094__$1 = (function (){var statearr_18113 = state_18094;
(statearr_18113[(8)] = inst_18047);

(statearr_18113[(9)] = inst_18048);

(statearr_18113[(10)] = inst_18046);

(statearr_18113[(12)] = inst_18049);

return statearr_18113;
})();
var statearr_18114_18147 = state_18094__$1;
(statearr_18114_18147[(2)] = null);

(statearr_18114_18147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (3))){
var inst_18092 = (state_18094[(2)]);
var state_18094__$1 = state_18094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18094__$1,inst_18092);
} else {
if((state_val_18095 === (12))){
var inst_18080 = (state_18094[(2)]);
var state_18094__$1 = state_18094;
var statearr_18115_18148 = state_18094__$1;
(statearr_18115_18148[(2)] = inst_18080);

(statearr_18115_18148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (2))){
var state_18094__$1 = state_18094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18094__$1,(4),in$);
} else {
if((state_val_18095 === (23))){
var inst_18088 = (state_18094[(2)]);
var state_18094__$1 = state_18094;
var statearr_18116_18149 = state_18094__$1;
(statearr_18116_18149[(2)] = inst_18088);

(statearr_18116_18149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (19))){
var inst_18075 = (state_18094[(2)]);
var state_18094__$1 = state_18094;
var statearr_18117_18150 = state_18094__$1;
(statearr_18117_18150[(2)] = inst_18075);

(statearr_18117_18150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (11))){
var inst_18046 = (state_18094[(10)]);
var inst_18060 = (state_18094[(7)]);
var inst_18060__$1 = cljs.core.seq.call(null,inst_18046);
var state_18094__$1 = (function (){var statearr_18118 = state_18094;
(statearr_18118[(7)] = inst_18060__$1);

return statearr_18118;
})();
if(inst_18060__$1){
var statearr_18119_18151 = state_18094__$1;
(statearr_18119_18151[(1)] = (14));

} else {
var statearr_18120_18152 = state_18094__$1;
(statearr_18120_18152[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (9))){
var inst_18082 = (state_18094[(2)]);
var inst_18083 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18094__$1 = (function (){var statearr_18121 = state_18094;
(statearr_18121[(15)] = inst_18082);

return statearr_18121;
})();
if(cljs.core.truth_(inst_18083)){
var statearr_18122_18153 = state_18094__$1;
(statearr_18122_18153[(1)] = (21));

} else {
var statearr_18123_18154 = state_18094__$1;
(statearr_18123_18154[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (5))){
var inst_18038 = cljs.core.async.close_BANG_.call(null,out);
var state_18094__$1 = state_18094;
var statearr_18124_18155 = state_18094__$1;
(statearr_18124_18155[(2)] = inst_18038);

(statearr_18124_18155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (14))){
var inst_18060 = (state_18094[(7)]);
var inst_18062 = cljs.core.chunked_seq_QMARK_.call(null,inst_18060);
var state_18094__$1 = state_18094;
if(inst_18062){
var statearr_18125_18156 = state_18094__$1;
(statearr_18125_18156[(1)] = (17));

} else {
var statearr_18126_18157 = state_18094__$1;
(statearr_18126_18157[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (16))){
var inst_18078 = (state_18094[(2)]);
var state_18094__$1 = state_18094;
var statearr_18127_18158 = state_18094__$1;
(statearr_18127_18158[(2)] = inst_18078);

(statearr_18127_18158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18095 === (10))){
var inst_18047 = (state_18094[(8)]);
var inst_18049 = (state_18094[(12)]);
var inst_18054 = cljs.core._nth.call(null,inst_18047,inst_18049);
var state_18094__$1 = state_18094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18094__$1,(13),out,inst_18054);
} else {
if((state_val_18095 === (18))){
var inst_18060 = (state_18094[(7)]);
var inst_18069 = cljs.core.first.call(null,inst_18060);
var state_18094__$1 = state_18094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18094__$1,(20),out,inst_18069);
} else {
if((state_val_18095 === (8))){
var inst_18048 = (state_18094[(9)]);
var inst_18049 = (state_18094[(12)]);
var inst_18051 = (inst_18049 < inst_18048);
var inst_18052 = inst_18051;
var state_18094__$1 = state_18094;
if(cljs.core.truth_(inst_18052)){
var statearr_18128_18159 = state_18094__$1;
(statearr_18128_18159[(1)] = (10));

} else {
var statearr_18129_18160 = state_18094__$1;
(statearr_18129_18160[(1)] = (11));

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
});})(c__15603__auto__))
;
return ((function (switch__15491__auto__,c__15603__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15492__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15492__auto____0 = (function (){
var statearr_18133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18133[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15492__auto__);

(statearr_18133[(1)] = (1));

return statearr_18133;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15492__auto____1 = (function (state_18094){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_18094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e18134){if((e18134 instanceof Object)){
var ex__15495__auto__ = e18134;
var statearr_18135_18161 = state_18094;
(statearr_18135_18161[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18162 = state_18094;
state_18094 = G__18162;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15492__auto__ = function(state_18094){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15492__auto____1.call(this,state_18094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15492__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15492__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto__))
})();
var state__15605__auto__ = (function (){var statearr_18136 = f__15604__auto__.call(null);
(statearr_18136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto__);

return statearr_18136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto__))
);

return c__15603__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18163 = [];
var len__9931__auto___18166 = arguments.length;
var i__9932__auto___18167 = (0);
while(true){
if((i__9932__auto___18167 < len__9931__auto___18166)){
args18163.push((arguments[i__9932__auto___18167]));

var G__18168 = (i__9932__auto___18167 + (1));
i__9932__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var G__18165 = args18163.length;
switch (G__18165) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18163.length)].join('')));

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
var args18170 = [];
var len__9931__auto___18173 = arguments.length;
var i__9932__auto___18174 = (0);
while(true){
if((i__9932__auto___18174 < len__9931__auto___18173)){
args18170.push((arguments[i__9932__auto___18174]));

var G__18175 = (i__9932__auto___18174 + (1));
i__9932__auto___18174 = G__18175;
continue;
} else {
}
break;
}

var G__18172 = args18170.length;
switch (G__18172) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18170.length)].join('')));

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
var args18177 = [];
var len__9931__auto___18228 = arguments.length;
var i__9932__auto___18229 = (0);
while(true){
if((i__9932__auto___18229 < len__9931__auto___18228)){
args18177.push((arguments[i__9932__auto___18229]));

var G__18230 = (i__9932__auto___18229 + (1));
i__9932__auto___18229 = G__18230;
continue;
} else {
}
break;
}

var G__18179 = args18177.length;
switch (G__18179) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18177.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15603__auto___18232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___18232,out){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___18232,out){
return (function (state_18203){
var state_val_18204 = (state_18203[(1)]);
if((state_val_18204 === (7))){
var inst_18198 = (state_18203[(2)]);
var state_18203__$1 = state_18203;
var statearr_18205_18233 = state_18203__$1;
(statearr_18205_18233[(2)] = inst_18198);

(statearr_18205_18233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (1))){
var inst_18180 = null;
var state_18203__$1 = (function (){var statearr_18206 = state_18203;
(statearr_18206[(7)] = inst_18180);

return statearr_18206;
})();
var statearr_18207_18234 = state_18203__$1;
(statearr_18207_18234[(2)] = null);

(statearr_18207_18234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (4))){
var inst_18183 = (state_18203[(8)]);
var inst_18183__$1 = (state_18203[(2)]);
var inst_18184 = (inst_18183__$1 == null);
var inst_18185 = cljs.core.not.call(null,inst_18184);
var state_18203__$1 = (function (){var statearr_18208 = state_18203;
(statearr_18208[(8)] = inst_18183__$1);

return statearr_18208;
})();
if(inst_18185){
var statearr_18209_18235 = state_18203__$1;
(statearr_18209_18235[(1)] = (5));

} else {
var statearr_18210_18236 = state_18203__$1;
(statearr_18210_18236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (6))){
var state_18203__$1 = state_18203;
var statearr_18211_18237 = state_18203__$1;
(statearr_18211_18237[(2)] = null);

(statearr_18211_18237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (3))){
var inst_18200 = (state_18203[(2)]);
var inst_18201 = cljs.core.async.close_BANG_.call(null,out);
var state_18203__$1 = (function (){var statearr_18212 = state_18203;
(statearr_18212[(9)] = inst_18200);

return statearr_18212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18203__$1,inst_18201);
} else {
if((state_val_18204 === (2))){
var state_18203__$1 = state_18203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18203__$1,(4),ch);
} else {
if((state_val_18204 === (11))){
var inst_18183 = (state_18203[(8)]);
var inst_18192 = (state_18203[(2)]);
var inst_18180 = inst_18183;
var state_18203__$1 = (function (){var statearr_18213 = state_18203;
(statearr_18213[(7)] = inst_18180);

(statearr_18213[(10)] = inst_18192);

return statearr_18213;
})();
var statearr_18214_18238 = state_18203__$1;
(statearr_18214_18238[(2)] = null);

(statearr_18214_18238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (9))){
var inst_18183 = (state_18203[(8)]);
var state_18203__$1 = state_18203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18203__$1,(11),out,inst_18183);
} else {
if((state_val_18204 === (5))){
var inst_18183 = (state_18203[(8)]);
var inst_18180 = (state_18203[(7)]);
var inst_18187 = cljs.core._EQ_.call(null,inst_18183,inst_18180);
var state_18203__$1 = state_18203;
if(inst_18187){
var statearr_18216_18239 = state_18203__$1;
(statearr_18216_18239[(1)] = (8));

} else {
var statearr_18217_18240 = state_18203__$1;
(statearr_18217_18240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (10))){
var inst_18195 = (state_18203[(2)]);
var state_18203__$1 = state_18203;
var statearr_18218_18241 = state_18203__$1;
(statearr_18218_18241[(2)] = inst_18195);

(statearr_18218_18241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (8))){
var inst_18180 = (state_18203[(7)]);
var tmp18215 = inst_18180;
var inst_18180__$1 = tmp18215;
var state_18203__$1 = (function (){var statearr_18219 = state_18203;
(statearr_18219[(7)] = inst_18180__$1);

return statearr_18219;
})();
var statearr_18220_18242 = state_18203__$1;
(statearr_18220_18242[(2)] = null);

(statearr_18220_18242[(1)] = (2));


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
});})(c__15603__auto___18232,out))
;
return ((function (switch__15491__auto__,c__15603__auto___18232,out){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_18224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18224[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_18224[(1)] = (1));

return statearr_18224;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_18203){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_18203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e18225){if((e18225 instanceof Object)){
var ex__15495__auto__ = e18225;
var statearr_18226_18243 = state_18203;
(statearr_18226_18243[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18244 = state_18203;
state_18203 = G__18244;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_18203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_18203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___18232,out))
})();
var state__15605__auto__ = (function (){var statearr_18227 = f__15604__auto__.call(null);
(statearr_18227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___18232);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___18232,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18245 = [];
var len__9931__auto___18315 = arguments.length;
var i__9932__auto___18316 = (0);
while(true){
if((i__9932__auto___18316 < len__9931__auto___18315)){
args18245.push((arguments[i__9932__auto___18316]));

var G__18317 = (i__9932__auto___18316 + (1));
i__9932__auto___18316 = G__18317;
continue;
} else {
}
break;
}

var G__18247 = args18245.length;
switch (G__18247) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18245.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15603__auto___18319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___18319,out){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___18319,out){
return (function (state_18285){
var state_val_18286 = (state_18285[(1)]);
if((state_val_18286 === (7))){
var inst_18281 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18287_18320 = state_18285__$1;
(statearr_18287_18320[(2)] = inst_18281);

(statearr_18287_18320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (1))){
var inst_18248 = (new Array(n));
var inst_18249 = inst_18248;
var inst_18250 = (0);
var state_18285__$1 = (function (){var statearr_18288 = state_18285;
(statearr_18288[(7)] = inst_18250);

(statearr_18288[(8)] = inst_18249);

return statearr_18288;
})();
var statearr_18289_18321 = state_18285__$1;
(statearr_18289_18321[(2)] = null);

(statearr_18289_18321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (4))){
var inst_18253 = (state_18285[(9)]);
var inst_18253__$1 = (state_18285[(2)]);
var inst_18254 = (inst_18253__$1 == null);
var inst_18255 = cljs.core.not.call(null,inst_18254);
var state_18285__$1 = (function (){var statearr_18290 = state_18285;
(statearr_18290[(9)] = inst_18253__$1);

return statearr_18290;
})();
if(inst_18255){
var statearr_18291_18322 = state_18285__$1;
(statearr_18291_18322[(1)] = (5));

} else {
var statearr_18292_18323 = state_18285__$1;
(statearr_18292_18323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (15))){
var inst_18275 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18293_18324 = state_18285__$1;
(statearr_18293_18324[(2)] = inst_18275);

(statearr_18293_18324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (13))){
var state_18285__$1 = state_18285;
var statearr_18294_18325 = state_18285__$1;
(statearr_18294_18325[(2)] = null);

(statearr_18294_18325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (6))){
var inst_18250 = (state_18285[(7)]);
var inst_18271 = (inst_18250 > (0));
var state_18285__$1 = state_18285;
if(cljs.core.truth_(inst_18271)){
var statearr_18295_18326 = state_18285__$1;
(statearr_18295_18326[(1)] = (12));

} else {
var statearr_18296_18327 = state_18285__$1;
(statearr_18296_18327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (3))){
var inst_18283 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18285__$1,inst_18283);
} else {
if((state_val_18286 === (12))){
var inst_18249 = (state_18285[(8)]);
var inst_18273 = cljs.core.vec.call(null,inst_18249);
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18285__$1,(15),out,inst_18273);
} else {
if((state_val_18286 === (2))){
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18285__$1,(4),ch);
} else {
if((state_val_18286 === (11))){
var inst_18265 = (state_18285[(2)]);
var inst_18266 = (new Array(n));
var inst_18249 = inst_18266;
var inst_18250 = (0);
var state_18285__$1 = (function (){var statearr_18297 = state_18285;
(statearr_18297[(7)] = inst_18250);

(statearr_18297[(8)] = inst_18249);

(statearr_18297[(10)] = inst_18265);

return statearr_18297;
})();
var statearr_18298_18328 = state_18285__$1;
(statearr_18298_18328[(2)] = null);

(statearr_18298_18328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (9))){
var inst_18249 = (state_18285[(8)]);
var inst_18263 = cljs.core.vec.call(null,inst_18249);
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18285__$1,(11),out,inst_18263);
} else {
if((state_val_18286 === (5))){
var inst_18250 = (state_18285[(7)]);
var inst_18249 = (state_18285[(8)]);
var inst_18253 = (state_18285[(9)]);
var inst_18258 = (state_18285[(11)]);
var inst_18257 = (inst_18249[inst_18250] = inst_18253);
var inst_18258__$1 = (inst_18250 + (1));
var inst_18259 = (inst_18258__$1 < n);
var state_18285__$1 = (function (){var statearr_18299 = state_18285;
(statearr_18299[(11)] = inst_18258__$1);

(statearr_18299[(12)] = inst_18257);

return statearr_18299;
})();
if(cljs.core.truth_(inst_18259)){
var statearr_18300_18329 = state_18285__$1;
(statearr_18300_18329[(1)] = (8));

} else {
var statearr_18301_18330 = state_18285__$1;
(statearr_18301_18330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (14))){
var inst_18278 = (state_18285[(2)]);
var inst_18279 = cljs.core.async.close_BANG_.call(null,out);
var state_18285__$1 = (function (){var statearr_18303 = state_18285;
(statearr_18303[(13)] = inst_18278);

return statearr_18303;
})();
var statearr_18304_18331 = state_18285__$1;
(statearr_18304_18331[(2)] = inst_18279);

(statearr_18304_18331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (10))){
var inst_18269 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18305_18332 = state_18285__$1;
(statearr_18305_18332[(2)] = inst_18269);

(statearr_18305_18332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (8))){
var inst_18249 = (state_18285[(8)]);
var inst_18258 = (state_18285[(11)]);
var tmp18302 = inst_18249;
var inst_18249__$1 = tmp18302;
var inst_18250 = inst_18258;
var state_18285__$1 = (function (){var statearr_18306 = state_18285;
(statearr_18306[(7)] = inst_18250);

(statearr_18306[(8)] = inst_18249__$1);

return statearr_18306;
})();
var statearr_18307_18333 = state_18285__$1;
(statearr_18307_18333[(2)] = null);

(statearr_18307_18333[(1)] = (2));


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
});})(c__15603__auto___18319,out))
;
return ((function (switch__15491__auto__,c__15603__auto___18319,out){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_18311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18311[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_18311[(1)] = (1));

return statearr_18311;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_18285){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_18285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e18312){if((e18312 instanceof Object)){
var ex__15495__auto__ = e18312;
var statearr_18313_18334 = state_18285;
(statearr_18313_18334[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18335 = state_18285;
state_18285 = G__18335;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_18285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_18285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___18319,out))
})();
var state__15605__auto__ = (function (){var statearr_18314 = f__15604__auto__.call(null);
(statearr_18314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___18319);

return statearr_18314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___18319,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18336 = [];
var len__9931__auto___18410 = arguments.length;
var i__9932__auto___18411 = (0);
while(true){
if((i__9932__auto___18411 < len__9931__auto___18410)){
args18336.push((arguments[i__9932__auto___18411]));

var G__18412 = (i__9932__auto___18411 + (1));
i__9932__auto___18411 = G__18412;
continue;
} else {
}
break;
}

var G__18338 = args18336.length;
switch (G__18338) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18336.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15603__auto___18414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto___18414,out){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto___18414,out){
return (function (state_18380){
var state_val_18381 = (state_18380[(1)]);
if((state_val_18381 === (7))){
var inst_18376 = (state_18380[(2)]);
var state_18380__$1 = state_18380;
var statearr_18382_18415 = state_18380__$1;
(statearr_18382_18415[(2)] = inst_18376);

(statearr_18382_18415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (1))){
var inst_18339 = [];
var inst_18340 = inst_18339;
var inst_18341 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18380__$1 = (function (){var statearr_18383 = state_18380;
(statearr_18383[(7)] = inst_18340);

(statearr_18383[(8)] = inst_18341);

return statearr_18383;
})();
var statearr_18384_18416 = state_18380__$1;
(statearr_18384_18416[(2)] = null);

(statearr_18384_18416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (4))){
var inst_18344 = (state_18380[(9)]);
var inst_18344__$1 = (state_18380[(2)]);
var inst_18345 = (inst_18344__$1 == null);
var inst_18346 = cljs.core.not.call(null,inst_18345);
var state_18380__$1 = (function (){var statearr_18385 = state_18380;
(statearr_18385[(9)] = inst_18344__$1);

return statearr_18385;
})();
if(inst_18346){
var statearr_18386_18417 = state_18380__$1;
(statearr_18386_18417[(1)] = (5));

} else {
var statearr_18387_18418 = state_18380__$1;
(statearr_18387_18418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (15))){
var inst_18370 = (state_18380[(2)]);
var state_18380__$1 = state_18380;
var statearr_18388_18419 = state_18380__$1;
(statearr_18388_18419[(2)] = inst_18370);

(statearr_18388_18419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (13))){
var state_18380__$1 = state_18380;
var statearr_18389_18420 = state_18380__$1;
(statearr_18389_18420[(2)] = null);

(statearr_18389_18420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (6))){
var inst_18340 = (state_18380[(7)]);
var inst_18365 = inst_18340.length;
var inst_18366 = (inst_18365 > (0));
var state_18380__$1 = state_18380;
if(cljs.core.truth_(inst_18366)){
var statearr_18390_18421 = state_18380__$1;
(statearr_18390_18421[(1)] = (12));

} else {
var statearr_18391_18422 = state_18380__$1;
(statearr_18391_18422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (3))){
var inst_18378 = (state_18380[(2)]);
var state_18380__$1 = state_18380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18380__$1,inst_18378);
} else {
if((state_val_18381 === (12))){
var inst_18340 = (state_18380[(7)]);
var inst_18368 = cljs.core.vec.call(null,inst_18340);
var state_18380__$1 = state_18380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18380__$1,(15),out,inst_18368);
} else {
if((state_val_18381 === (2))){
var state_18380__$1 = state_18380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18380__$1,(4),ch);
} else {
if((state_val_18381 === (11))){
var inst_18344 = (state_18380[(9)]);
var inst_18348 = (state_18380[(10)]);
var inst_18358 = (state_18380[(2)]);
var inst_18359 = [];
var inst_18360 = inst_18359.push(inst_18344);
var inst_18340 = inst_18359;
var inst_18341 = inst_18348;
var state_18380__$1 = (function (){var statearr_18392 = state_18380;
(statearr_18392[(11)] = inst_18358);

(statearr_18392[(12)] = inst_18360);

(statearr_18392[(7)] = inst_18340);

(statearr_18392[(8)] = inst_18341);

return statearr_18392;
})();
var statearr_18393_18423 = state_18380__$1;
(statearr_18393_18423[(2)] = null);

(statearr_18393_18423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (9))){
var inst_18340 = (state_18380[(7)]);
var inst_18356 = cljs.core.vec.call(null,inst_18340);
var state_18380__$1 = state_18380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18380__$1,(11),out,inst_18356);
} else {
if((state_val_18381 === (5))){
var inst_18344 = (state_18380[(9)]);
var inst_18348 = (state_18380[(10)]);
var inst_18341 = (state_18380[(8)]);
var inst_18348__$1 = f.call(null,inst_18344);
var inst_18349 = cljs.core._EQ_.call(null,inst_18348__$1,inst_18341);
var inst_18350 = cljs.core.keyword_identical_QMARK_.call(null,inst_18341,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18351 = (inst_18349) || (inst_18350);
var state_18380__$1 = (function (){var statearr_18394 = state_18380;
(statearr_18394[(10)] = inst_18348__$1);

return statearr_18394;
})();
if(cljs.core.truth_(inst_18351)){
var statearr_18395_18424 = state_18380__$1;
(statearr_18395_18424[(1)] = (8));

} else {
var statearr_18396_18425 = state_18380__$1;
(statearr_18396_18425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (14))){
var inst_18373 = (state_18380[(2)]);
var inst_18374 = cljs.core.async.close_BANG_.call(null,out);
var state_18380__$1 = (function (){var statearr_18398 = state_18380;
(statearr_18398[(13)] = inst_18373);

return statearr_18398;
})();
var statearr_18399_18426 = state_18380__$1;
(statearr_18399_18426[(2)] = inst_18374);

(statearr_18399_18426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (10))){
var inst_18363 = (state_18380[(2)]);
var state_18380__$1 = state_18380;
var statearr_18400_18427 = state_18380__$1;
(statearr_18400_18427[(2)] = inst_18363);

(statearr_18400_18427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18381 === (8))){
var inst_18344 = (state_18380[(9)]);
var inst_18340 = (state_18380[(7)]);
var inst_18348 = (state_18380[(10)]);
var inst_18353 = inst_18340.push(inst_18344);
var tmp18397 = inst_18340;
var inst_18340__$1 = tmp18397;
var inst_18341 = inst_18348;
var state_18380__$1 = (function (){var statearr_18401 = state_18380;
(statearr_18401[(14)] = inst_18353);

(statearr_18401[(7)] = inst_18340__$1);

(statearr_18401[(8)] = inst_18341);

return statearr_18401;
})();
var statearr_18402_18428 = state_18380__$1;
(statearr_18402_18428[(2)] = null);

(statearr_18402_18428[(1)] = (2));


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
});})(c__15603__auto___18414,out))
;
return ((function (switch__15491__auto__,c__15603__auto___18414,out){
return (function() {
var cljs$core$async$state_machine__15492__auto__ = null;
var cljs$core$async$state_machine__15492__auto____0 = (function (){
var statearr_18406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18406[(0)] = cljs$core$async$state_machine__15492__auto__);

(statearr_18406[(1)] = (1));

return statearr_18406;
});
var cljs$core$async$state_machine__15492__auto____1 = (function (state_18380){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_18380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e18407){if((e18407 instanceof Object)){
var ex__15495__auto__ = e18407;
var statearr_18408_18429 = state_18380;
(statearr_18408_18429[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18430 = state_18380;
state_18380 = G__18430;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
cljs$core$async$state_machine__15492__auto__ = function(state_18380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15492__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15492__auto____1.call(this,state_18380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15492__auto____0;
cljs$core$async$state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15492__auto____1;
return cljs$core$async$state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto___18414,out))
})();
var state__15605__auto__ = (function (){var statearr_18409 = f__15604__auto__.call(null);
(statearr_18409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto___18414);

return statearr_18409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto___18414,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map