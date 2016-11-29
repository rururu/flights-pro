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
var args15304 = [];
var len__9613__auto___15310 = arguments.length;
var i__9614__auto___15311 = (0);
while(true){
if((i__9614__auto___15311 < len__9613__auto___15310)){
args15304.push((arguments[i__9614__auto___15311]));

var G__15312 = (i__9614__auto___15311 + (1));
i__9614__auto___15311 = G__15312;
continue;
} else {
}
break;
}

var G__15306 = args15304.length;
switch (G__15306) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15304.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15307 = (function (f,blockable,meta15308){
this.f = f;
this.blockable = blockable;
this.meta15308 = meta15308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15309,meta15308__$1){
var self__ = this;
var _15309__$1 = this;
return (new cljs.core.async.t_cljs$core$async15307(self__.f,self__.blockable,meta15308__$1));
});

cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15309){
var self__ = this;
var _15309__$1 = this;
return self__.meta15308;
});

cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15308","meta15308",-581842711,null)], null);
});

cljs.core.async.t_cljs$core$async15307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15307";

cljs.core.async.t_cljs$core$async15307.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async15307");
});

cljs.core.async.__GT_t_cljs$core$async15307 = (function cljs$core$async$__GT_t_cljs$core$async15307(f__$1,blockable__$1,meta15308){
return (new cljs.core.async.t_cljs$core$async15307(f__$1,blockable__$1,meta15308));
});

}

return (new cljs.core.async.t_cljs$core$async15307(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15316 = [];
var len__9613__auto___15319 = arguments.length;
var i__9614__auto___15320 = (0);
while(true){
if((i__9614__auto___15320 < len__9613__auto___15319)){
args15316.push((arguments[i__9614__auto___15320]));

var G__15321 = (i__9614__auto___15320 + (1));
i__9614__auto___15320 = G__15321;
continue;
} else {
}
break;
}

var G__15318 = args15316.length;
switch (G__15318) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15316.length)].join('')));

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
var args15323 = [];
var len__9613__auto___15326 = arguments.length;
var i__9614__auto___15327 = (0);
while(true){
if((i__9614__auto___15327 < len__9613__auto___15326)){
args15323.push((arguments[i__9614__auto___15327]));

var G__15328 = (i__9614__auto___15327 + (1));
i__9614__auto___15327 = G__15328;
continue;
} else {
}
break;
}

var G__15325 = args15323.length;
switch (G__15325) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15323.length)].join('')));

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
var args15330 = [];
var len__9613__auto___15333 = arguments.length;
var i__9614__auto___15334 = (0);
while(true){
if((i__9614__auto___15334 < len__9613__auto___15333)){
args15330.push((arguments[i__9614__auto___15334]));

var G__15335 = (i__9614__auto___15334 + (1));
i__9614__auto___15334 = G__15335;
continue;
} else {
}
break;
}

var G__15332 = args15330.length;
switch (G__15332) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15330.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15337 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15337);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15337,ret){
return (function (){
return fn1.call(null,val_15337);
});})(val_15337,ret))
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
var args15338 = [];
var len__9613__auto___15341 = arguments.length;
var i__9614__auto___15342 = (0);
while(true){
if((i__9614__auto___15342 < len__9613__auto___15341)){
args15338.push((arguments[i__9614__auto___15342]));

var G__15343 = (i__9614__auto___15342 + (1));
i__9614__auto___15342 = G__15343;
continue;
} else {
}
break;
}

var G__15340 = args15338.length;
switch (G__15340) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15338.length)].join('')));

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
var n__9423__auto___15345 = n;
var x_15346 = (0);
while(true){
if((x_15346 < n__9423__auto___15345)){
(a[x_15346] = (0));

var G__15347 = (x_15346 + (1));
x_15346 = G__15347;
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

var G__15348 = (i + (1));
i = G__15348;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15352 = (function (flag,meta15353){
this.flag = flag;
this.meta15353 = meta15353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15354,meta15353__$1){
var self__ = this;
var _15354__$1 = this;
return (new cljs.core.async.t_cljs$core$async15352(self__.flag,meta15353__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15354){
var self__ = this;
var _15354__$1 = this;
return self__.meta15353;
});})(flag))
;

cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15352.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15353","meta15353",1560710785,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15352";

cljs.core.async.t_cljs$core$async15352.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async15352");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15352 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15352(flag__$1,meta15353){
return (new cljs.core.async.t_cljs$core$async15352(flag__$1,meta15353));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15352(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15358 = (function (flag,cb,meta15359){
this.flag = flag;
this.cb = cb;
this.meta15359 = meta15359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15360,meta15359__$1){
var self__ = this;
var _15360__$1 = this;
return (new cljs.core.async.t_cljs$core$async15358(self__.flag,self__.cb,meta15359__$1));
});

cljs.core.async.t_cljs$core$async15358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15360){
var self__ = this;
var _15360__$1 = this;
return self__.meta15359;
});

cljs.core.async.t_cljs$core$async15358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15359","meta15359",-1921723312,null)], null);
});

cljs.core.async.t_cljs$core$async15358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15358";

cljs.core.async.t_cljs$core$async15358.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async15358");
});

cljs.core.async.__GT_t_cljs$core$async15358 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15358(flag__$1,cb__$1,meta15359){
return (new cljs.core.async.t_cljs$core$async15358(flag__$1,cb__$1,meta15359));
});

}

return (new cljs.core.async.t_cljs$core$async15358(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15361_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15361_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15362_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15362_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8505__auto__ = wport;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15363 = (i + (1));
i = G__15363;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8505__auto__ = ret;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8493__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8493__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8493__auto__;
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
var args__9620__auto__ = [];
var len__9613__auto___15369 = arguments.length;
var i__9614__auto___15370 = (0);
while(true){
if((i__9614__auto___15370 < len__9613__auto___15369)){
args__9620__auto__.push((arguments[i__9614__auto___15370]));

var G__15371 = (i__9614__auto___15370 + (1));
i__9614__auto___15370 = G__15371;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((1) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9621__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15366){
var map__15367 = p__15366;
var map__15367__$1 = ((((!((map__15367 == null)))?((((map__15367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15367):map__15367);
var opts = map__15367__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15364){
var G__15365 = cljs.core.first.call(null,seq15364);
var seq15364__$1 = cljs.core.next.call(null,seq15364);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15365,seq15364__$1);
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
var args15372 = [];
var len__9613__auto___15422 = arguments.length;
var i__9614__auto___15423 = (0);
while(true){
if((i__9614__auto___15423 < len__9613__auto___15422)){
args15372.push((arguments[i__9614__auto___15423]));

var G__15424 = (i__9614__auto___15423 + (1));
i__9614__auto___15423 = G__15424;
continue;
} else {
}
break;
}

var G__15374 = args15372.length;
switch (G__15374) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15372.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15259__auto___15426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___15426){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___15426){
return (function (state_15398){
var state_val_15399 = (state_15398[(1)]);
if((state_val_15399 === (7))){
var inst_15394 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15400_15427 = state_15398__$1;
(statearr_15400_15427[(2)] = inst_15394);

(statearr_15400_15427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (1))){
var state_15398__$1 = state_15398;
var statearr_15401_15428 = state_15398__$1;
(statearr_15401_15428[(2)] = null);

(statearr_15401_15428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (4))){
var inst_15377 = (state_15398[(7)]);
var inst_15377__$1 = (state_15398[(2)]);
var inst_15378 = (inst_15377__$1 == null);
var state_15398__$1 = (function (){var statearr_15402 = state_15398;
(statearr_15402[(7)] = inst_15377__$1);

return statearr_15402;
})();
if(cljs.core.truth_(inst_15378)){
var statearr_15403_15429 = state_15398__$1;
(statearr_15403_15429[(1)] = (5));

} else {
var statearr_15404_15430 = state_15398__$1;
(statearr_15404_15430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (13))){
var state_15398__$1 = state_15398;
var statearr_15405_15431 = state_15398__$1;
(statearr_15405_15431[(2)] = null);

(statearr_15405_15431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (6))){
var inst_15377 = (state_15398[(7)]);
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15398__$1,(11),to,inst_15377);
} else {
if((state_val_15399 === (3))){
var inst_15396 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15398__$1,inst_15396);
} else {
if((state_val_15399 === (12))){
var state_15398__$1 = state_15398;
var statearr_15406_15432 = state_15398__$1;
(statearr_15406_15432[(2)] = null);

(statearr_15406_15432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (2))){
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15398__$1,(4),from);
} else {
if((state_val_15399 === (11))){
var inst_15387 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
if(cljs.core.truth_(inst_15387)){
var statearr_15407_15433 = state_15398__$1;
(statearr_15407_15433[(1)] = (12));

} else {
var statearr_15408_15434 = state_15398__$1;
(statearr_15408_15434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (9))){
var state_15398__$1 = state_15398;
var statearr_15409_15435 = state_15398__$1;
(statearr_15409_15435[(2)] = null);

(statearr_15409_15435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (5))){
var state_15398__$1 = state_15398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15410_15436 = state_15398__$1;
(statearr_15410_15436[(1)] = (8));

} else {
var statearr_15411_15437 = state_15398__$1;
(statearr_15411_15437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (14))){
var inst_15392 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15412_15438 = state_15398__$1;
(statearr_15412_15438[(2)] = inst_15392);

(statearr_15412_15438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (10))){
var inst_15384 = (state_15398[(2)]);
var state_15398__$1 = state_15398;
var statearr_15413_15439 = state_15398__$1;
(statearr_15413_15439[(2)] = inst_15384);

(statearr_15413_15439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15399 === (8))){
var inst_15381 = cljs.core.async.close_BANG_.call(null,to);
var state_15398__$1 = state_15398;
var statearr_15414_15440 = state_15398__$1;
(statearr_15414_15440[(2)] = inst_15381);

(statearr_15414_15440[(1)] = (10));


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
});})(c__15259__auto___15426))
;
return ((function (switch__15147__auto__,c__15259__auto___15426){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_15418 = [null,null,null,null,null,null,null,null];
(statearr_15418[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_15418[(1)] = (1));

return statearr_15418;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_15398){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15419){if((e15419 instanceof Object)){
var ex__15151__auto__ = e15419;
var statearr_15420_15441 = state_15398;
(statearr_15420_15441[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15442 = state_15398;
state_15398 = G__15442;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_15398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_15398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___15426))
})();
var state__15261__auto__ = (function (){var statearr_15421 = f__15260__auto__.call(null);
(statearr_15421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___15426);

return statearr_15421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___15426))
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
return (function (p__15630){
var vec__15631 = p__15630;
var v = cljs.core.nth.call(null,vec__15631,(0),null);
var p = cljs.core.nth.call(null,vec__15631,(1),null);
var job = vec__15631;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15259__auto___15817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___15817,res,vec__15631,v,p,job,jobs,results){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___15817,res,vec__15631,v,p,job,jobs,results){
return (function (state_15638){
var state_val_15639 = (state_15638[(1)]);
if((state_val_15639 === (1))){
var state_15638__$1 = state_15638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15638__$1,(2),res,v);
} else {
if((state_val_15639 === (2))){
var inst_15635 = (state_15638[(2)]);
var inst_15636 = cljs.core.async.close_BANG_.call(null,res);
var state_15638__$1 = (function (){var statearr_15640 = state_15638;
(statearr_15640[(7)] = inst_15635);

return statearr_15640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15638__$1,inst_15636);
} else {
return null;
}
}
});})(c__15259__auto___15817,res,vec__15631,v,p,job,jobs,results))
;
return ((function (switch__15147__auto__,c__15259__auto___15817,res,vec__15631,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0 = (function (){
var statearr_15644 = [null,null,null,null,null,null,null,null];
(statearr_15644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__);

(statearr_15644[(1)] = (1));

return statearr_15644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1 = (function (state_15638){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15645){if((e15645 instanceof Object)){
var ex__15151__auto__ = e15645;
var statearr_15646_15818 = state_15638;
(statearr_15646_15818[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15819 = state_15638;
state_15638 = G__15819;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = function(state_15638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1.call(this,state_15638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___15817,res,vec__15631,v,p,job,jobs,results))
})();
var state__15261__auto__ = (function (){var statearr_15647 = f__15260__auto__.call(null);
(statearr_15647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___15817);

return statearr_15647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___15817,res,vec__15631,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15648){
var vec__15649 = p__15648;
var v = cljs.core.nth.call(null,vec__15649,(0),null);
var p = cljs.core.nth.call(null,vec__15649,(1),null);
var job = vec__15649;
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
var n__9423__auto___15820 = n;
var __15821 = (0);
while(true){
if((__15821 < n__9423__auto___15820)){
var G__15652_15822 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15652_15822) {
case "compute":
var c__15259__auto___15824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15821,c__15259__auto___15824,G__15652_15822,n__9423__auto___15820,jobs,results,process,async){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (__15821,c__15259__auto___15824,G__15652_15822,n__9423__auto___15820,jobs,results,process,async){
return (function (state_15665){
var state_val_15666 = (state_15665[(1)]);
if((state_val_15666 === (1))){
var state_15665__$1 = state_15665;
var statearr_15667_15825 = state_15665__$1;
(statearr_15667_15825[(2)] = null);

(statearr_15667_15825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (2))){
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15665__$1,(4),jobs);
} else {
if((state_val_15666 === (3))){
var inst_15663 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15665__$1,inst_15663);
} else {
if((state_val_15666 === (4))){
var inst_15655 = (state_15665[(2)]);
var inst_15656 = process.call(null,inst_15655);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15656)){
var statearr_15668_15826 = state_15665__$1;
(statearr_15668_15826[(1)] = (5));

} else {
var statearr_15669_15827 = state_15665__$1;
(statearr_15669_15827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (5))){
var state_15665__$1 = state_15665;
var statearr_15670_15828 = state_15665__$1;
(statearr_15670_15828[(2)] = null);

(statearr_15670_15828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (6))){
var state_15665__$1 = state_15665;
var statearr_15671_15829 = state_15665__$1;
(statearr_15671_15829[(2)] = null);

(statearr_15671_15829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15666 === (7))){
var inst_15661 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15672_15830 = state_15665__$1;
(statearr_15672_15830[(2)] = inst_15661);

(statearr_15672_15830[(1)] = (3));


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
});})(__15821,c__15259__auto___15824,G__15652_15822,n__9423__auto___15820,jobs,results,process,async))
;
return ((function (__15821,switch__15147__auto__,c__15259__auto___15824,G__15652_15822,n__9423__auto___15820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0 = (function (){
var statearr_15676 = [null,null,null,null,null,null,null];
(statearr_15676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__);

(statearr_15676[(1)] = (1));

return statearr_15676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1 = (function (state_15665){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15677){if((e15677 instanceof Object)){
var ex__15151__auto__ = e15677;
var statearr_15678_15831 = state_15665;
(statearr_15678_15831[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15832 = state_15665;
state_15665 = G__15832;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = function(state_15665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1.call(this,state_15665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__;
})()
;})(__15821,switch__15147__auto__,c__15259__auto___15824,G__15652_15822,n__9423__auto___15820,jobs,results,process,async))
})();
var state__15261__auto__ = (function (){var statearr_15679 = f__15260__auto__.call(null);
(statearr_15679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___15824);

return statearr_15679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(__15821,c__15259__auto___15824,G__15652_15822,n__9423__auto___15820,jobs,results,process,async))
);


break;
case "async":
var c__15259__auto___15833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15821,c__15259__auto___15833,G__15652_15822,n__9423__auto___15820,jobs,results,process,async){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (__15821,c__15259__auto___15833,G__15652_15822,n__9423__auto___15820,jobs,results,process,async){
return (function (state_15692){
var state_val_15693 = (state_15692[(1)]);
if((state_val_15693 === (1))){
var state_15692__$1 = state_15692;
var statearr_15694_15834 = state_15692__$1;
(statearr_15694_15834[(2)] = null);

(statearr_15694_15834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (2))){
var state_15692__$1 = state_15692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15692__$1,(4),jobs);
} else {
if((state_val_15693 === (3))){
var inst_15690 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15692__$1,inst_15690);
} else {
if((state_val_15693 === (4))){
var inst_15682 = (state_15692[(2)]);
var inst_15683 = async.call(null,inst_15682);
var state_15692__$1 = state_15692;
if(cljs.core.truth_(inst_15683)){
var statearr_15695_15835 = state_15692__$1;
(statearr_15695_15835[(1)] = (5));

} else {
var statearr_15696_15836 = state_15692__$1;
(statearr_15696_15836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (5))){
var state_15692__$1 = state_15692;
var statearr_15697_15837 = state_15692__$1;
(statearr_15697_15837[(2)] = null);

(statearr_15697_15837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (6))){
var state_15692__$1 = state_15692;
var statearr_15698_15838 = state_15692__$1;
(statearr_15698_15838[(2)] = null);

(statearr_15698_15838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (7))){
var inst_15688 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
var statearr_15699_15839 = state_15692__$1;
(statearr_15699_15839[(2)] = inst_15688);

(statearr_15699_15839[(1)] = (3));


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
});})(__15821,c__15259__auto___15833,G__15652_15822,n__9423__auto___15820,jobs,results,process,async))
;
return ((function (__15821,switch__15147__auto__,c__15259__auto___15833,G__15652_15822,n__9423__auto___15820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0 = (function (){
var statearr_15703 = [null,null,null,null,null,null,null];
(statearr_15703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__);

(statearr_15703[(1)] = (1));

return statearr_15703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1 = (function (state_15692){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15704){if((e15704 instanceof Object)){
var ex__15151__auto__ = e15704;
var statearr_15705_15840 = state_15692;
(statearr_15705_15840[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15841 = state_15692;
state_15692 = G__15841;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = function(state_15692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1.call(this,state_15692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__;
})()
;})(__15821,switch__15147__auto__,c__15259__auto___15833,G__15652_15822,n__9423__auto___15820,jobs,results,process,async))
})();
var state__15261__auto__ = (function (){var statearr_15706 = f__15260__auto__.call(null);
(statearr_15706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___15833);

return statearr_15706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(__15821,c__15259__auto___15833,G__15652_15822,n__9423__auto___15820,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15842 = (__15821 + (1));
__15821 = G__15842;
continue;
} else {
}
break;
}

var c__15259__auto___15843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___15843,jobs,results,process,async){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___15843,jobs,results,process,async){
return (function (state_15728){
var state_val_15729 = (state_15728[(1)]);
if((state_val_15729 === (1))){
var state_15728__$1 = state_15728;
var statearr_15730_15844 = state_15728__$1;
(statearr_15730_15844[(2)] = null);

(statearr_15730_15844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (2))){
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15728__$1,(4),from);
} else {
if((state_val_15729 === (3))){
var inst_15726 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15728__$1,inst_15726);
} else {
if((state_val_15729 === (4))){
var inst_15709 = (state_15728[(7)]);
var inst_15709__$1 = (state_15728[(2)]);
var inst_15710 = (inst_15709__$1 == null);
var state_15728__$1 = (function (){var statearr_15731 = state_15728;
(statearr_15731[(7)] = inst_15709__$1);

return statearr_15731;
})();
if(cljs.core.truth_(inst_15710)){
var statearr_15732_15845 = state_15728__$1;
(statearr_15732_15845[(1)] = (5));

} else {
var statearr_15733_15846 = state_15728__$1;
(statearr_15733_15846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var inst_15712 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15728__$1 = state_15728;
var statearr_15734_15847 = state_15728__$1;
(statearr_15734_15847[(2)] = inst_15712);

(statearr_15734_15847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (6))){
var inst_15714 = (state_15728[(8)]);
var inst_15709 = (state_15728[(7)]);
var inst_15714__$1 = cljs.core.async.chan.call(null,(1));
var inst_15715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15716 = [inst_15709,inst_15714__$1];
var inst_15717 = (new cljs.core.PersistentVector(null,2,(5),inst_15715,inst_15716,null));
var state_15728__$1 = (function (){var statearr_15735 = state_15728;
(statearr_15735[(8)] = inst_15714__$1);

return statearr_15735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15728__$1,(8),jobs,inst_15717);
} else {
if((state_val_15729 === (7))){
var inst_15724 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15736_15848 = state_15728__$1;
(statearr_15736_15848[(2)] = inst_15724);

(statearr_15736_15848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15714 = (state_15728[(8)]);
var inst_15719 = (state_15728[(2)]);
var state_15728__$1 = (function (){var statearr_15737 = state_15728;
(statearr_15737[(9)] = inst_15719);

return statearr_15737;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15728__$1,(9),results,inst_15714);
} else {
if((state_val_15729 === (9))){
var inst_15721 = (state_15728[(2)]);
var state_15728__$1 = (function (){var statearr_15738 = state_15728;
(statearr_15738[(10)] = inst_15721);

return statearr_15738;
})();
var statearr_15739_15849 = state_15728__$1;
(statearr_15739_15849[(2)] = null);

(statearr_15739_15849[(1)] = (2));


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
});})(c__15259__auto___15843,jobs,results,process,async))
;
return ((function (switch__15147__auto__,c__15259__auto___15843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0 = (function (){
var statearr_15743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__);

(statearr_15743[(1)] = (1));

return statearr_15743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1 = (function (state_15728){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15744){if((e15744 instanceof Object)){
var ex__15151__auto__ = e15744;
var statearr_15745_15850 = state_15728;
(statearr_15745_15850[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15851 = state_15728;
state_15728 = G__15851;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = function(state_15728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1.call(this,state_15728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___15843,jobs,results,process,async))
})();
var state__15261__auto__ = (function (){var statearr_15746 = f__15260__auto__.call(null);
(statearr_15746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___15843);

return statearr_15746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___15843,jobs,results,process,async))
);


var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__,jobs,results,process,async){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__,jobs,results,process,async){
return (function (state_15784){
var state_val_15785 = (state_15784[(1)]);
if((state_val_15785 === (7))){
var inst_15780 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15786_15852 = state_15784__$1;
(statearr_15786_15852[(2)] = inst_15780);

(statearr_15786_15852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (20))){
var state_15784__$1 = state_15784;
var statearr_15787_15853 = state_15784__$1;
(statearr_15787_15853[(2)] = null);

(statearr_15787_15853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (1))){
var state_15784__$1 = state_15784;
var statearr_15788_15854 = state_15784__$1;
(statearr_15788_15854[(2)] = null);

(statearr_15788_15854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (4))){
var inst_15749 = (state_15784[(7)]);
var inst_15749__$1 = (state_15784[(2)]);
var inst_15750 = (inst_15749__$1 == null);
var state_15784__$1 = (function (){var statearr_15789 = state_15784;
(statearr_15789[(7)] = inst_15749__$1);

return statearr_15789;
})();
if(cljs.core.truth_(inst_15750)){
var statearr_15790_15855 = state_15784__$1;
(statearr_15790_15855[(1)] = (5));

} else {
var statearr_15791_15856 = state_15784__$1;
(statearr_15791_15856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (15))){
var inst_15762 = (state_15784[(8)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15784__$1,(18),to,inst_15762);
} else {
if((state_val_15785 === (21))){
var inst_15775 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15792_15857 = state_15784__$1;
(statearr_15792_15857[(2)] = inst_15775);

(statearr_15792_15857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (13))){
var inst_15777 = (state_15784[(2)]);
var state_15784__$1 = (function (){var statearr_15793 = state_15784;
(statearr_15793[(9)] = inst_15777);

return statearr_15793;
})();
var statearr_15794_15858 = state_15784__$1;
(statearr_15794_15858[(2)] = null);

(statearr_15794_15858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (6))){
var inst_15749 = (state_15784[(7)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15784__$1,(11),inst_15749);
} else {
if((state_val_15785 === (17))){
var inst_15770 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
if(cljs.core.truth_(inst_15770)){
var statearr_15795_15859 = state_15784__$1;
(statearr_15795_15859[(1)] = (19));

} else {
var statearr_15796_15860 = state_15784__$1;
(statearr_15796_15860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (3))){
var inst_15782 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15784__$1,inst_15782);
} else {
if((state_val_15785 === (12))){
var inst_15759 = (state_15784[(10)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15784__$1,(14),inst_15759);
} else {
if((state_val_15785 === (2))){
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15784__$1,(4),results);
} else {
if((state_val_15785 === (19))){
var state_15784__$1 = state_15784;
var statearr_15797_15861 = state_15784__$1;
(statearr_15797_15861[(2)] = null);

(statearr_15797_15861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (11))){
var inst_15759 = (state_15784[(2)]);
var state_15784__$1 = (function (){var statearr_15798 = state_15784;
(statearr_15798[(10)] = inst_15759);

return statearr_15798;
})();
var statearr_15799_15862 = state_15784__$1;
(statearr_15799_15862[(2)] = null);

(statearr_15799_15862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (9))){
var state_15784__$1 = state_15784;
var statearr_15800_15863 = state_15784__$1;
(statearr_15800_15863[(2)] = null);

(statearr_15800_15863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (5))){
var state_15784__$1 = state_15784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15801_15864 = state_15784__$1;
(statearr_15801_15864[(1)] = (8));

} else {
var statearr_15802_15865 = state_15784__$1;
(statearr_15802_15865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (14))){
var inst_15762 = (state_15784[(8)]);
var inst_15764 = (state_15784[(11)]);
var inst_15762__$1 = (state_15784[(2)]);
var inst_15763 = (inst_15762__$1 == null);
var inst_15764__$1 = cljs.core.not.call(null,inst_15763);
var state_15784__$1 = (function (){var statearr_15803 = state_15784;
(statearr_15803[(8)] = inst_15762__$1);

(statearr_15803[(11)] = inst_15764__$1);

return statearr_15803;
})();
if(inst_15764__$1){
var statearr_15804_15866 = state_15784__$1;
(statearr_15804_15866[(1)] = (15));

} else {
var statearr_15805_15867 = state_15784__$1;
(statearr_15805_15867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (16))){
var inst_15764 = (state_15784[(11)]);
var state_15784__$1 = state_15784;
var statearr_15806_15868 = state_15784__$1;
(statearr_15806_15868[(2)] = inst_15764);

(statearr_15806_15868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (10))){
var inst_15756 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15807_15869 = state_15784__$1;
(statearr_15807_15869[(2)] = inst_15756);

(statearr_15807_15869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (18))){
var inst_15767 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15808_15870 = state_15784__$1;
(statearr_15808_15870[(2)] = inst_15767);

(statearr_15808_15870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (8))){
var inst_15753 = cljs.core.async.close_BANG_.call(null,to);
var state_15784__$1 = state_15784;
var statearr_15809_15871 = state_15784__$1;
(statearr_15809_15871[(2)] = inst_15753);

(statearr_15809_15871[(1)] = (10));


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
});})(c__15259__auto__,jobs,results,process,async))
;
return ((function (switch__15147__auto__,c__15259__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0 = (function (){
var statearr_15813 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__);

(statearr_15813[(1)] = (1));

return statearr_15813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1 = (function (state_15784){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15814){if((e15814 instanceof Object)){
var ex__15151__auto__ = e15814;
var statearr_15815_15872 = state_15784;
(statearr_15815_15872[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15873 = state_15784;
state_15784 = G__15873;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__ = function(state_15784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1.call(this,state_15784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__,jobs,results,process,async))
})();
var state__15261__auto__ = (function (){var statearr_15816 = f__15260__auto__.call(null);
(statearr_15816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_15816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__,jobs,results,process,async))
);

return c__15259__auto__;
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
var args15874 = [];
var len__9613__auto___15877 = arguments.length;
var i__9614__auto___15878 = (0);
while(true){
if((i__9614__auto___15878 < len__9613__auto___15877)){
args15874.push((arguments[i__9614__auto___15878]));

var G__15879 = (i__9614__auto___15878 + (1));
i__9614__auto___15878 = G__15879;
continue;
} else {
}
break;
}

var G__15876 = args15874.length;
switch (G__15876) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15874.length)].join('')));

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
var args15881 = [];
var len__9613__auto___15884 = arguments.length;
var i__9614__auto___15885 = (0);
while(true){
if((i__9614__auto___15885 < len__9613__auto___15884)){
args15881.push((arguments[i__9614__auto___15885]));

var G__15886 = (i__9614__auto___15885 + (1));
i__9614__auto___15885 = G__15886;
continue;
} else {
}
break;
}

var G__15883 = args15881.length;
switch (G__15883) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15881.length)].join('')));

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
var args15888 = [];
var len__9613__auto___15941 = arguments.length;
var i__9614__auto___15942 = (0);
while(true){
if((i__9614__auto___15942 < len__9613__auto___15941)){
args15888.push((arguments[i__9614__auto___15942]));

var G__15943 = (i__9614__auto___15942 + (1));
i__9614__auto___15942 = G__15943;
continue;
} else {
}
break;
}

var G__15890 = args15888.length;
switch (G__15890) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15888.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15259__auto___15945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___15945,tc,fc){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___15945,tc,fc){
return (function (state_15916){
var state_val_15917 = (state_15916[(1)]);
if((state_val_15917 === (7))){
var inst_15912 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15918_15946 = state_15916__$1;
(statearr_15918_15946[(2)] = inst_15912);

(statearr_15918_15946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (1))){
var state_15916__$1 = state_15916;
var statearr_15919_15947 = state_15916__$1;
(statearr_15919_15947[(2)] = null);

(statearr_15919_15947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (4))){
var inst_15893 = (state_15916[(7)]);
var inst_15893__$1 = (state_15916[(2)]);
var inst_15894 = (inst_15893__$1 == null);
var state_15916__$1 = (function (){var statearr_15920 = state_15916;
(statearr_15920[(7)] = inst_15893__$1);

return statearr_15920;
})();
if(cljs.core.truth_(inst_15894)){
var statearr_15921_15948 = state_15916__$1;
(statearr_15921_15948[(1)] = (5));

} else {
var statearr_15922_15949 = state_15916__$1;
(statearr_15922_15949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (13))){
var state_15916__$1 = state_15916;
var statearr_15923_15950 = state_15916__$1;
(statearr_15923_15950[(2)] = null);

(statearr_15923_15950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (6))){
var inst_15893 = (state_15916[(7)]);
var inst_15899 = p.call(null,inst_15893);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15899)){
var statearr_15924_15951 = state_15916__$1;
(statearr_15924_15951[(1)] = (9));

} else {
var statearr_15925_15952 = state_15916__$1;
(statearr_15925_15952[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (3))){
var inst_15914 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15916__$1,inst_15914);
} else {
if((state_val_15917 === (12))){
var state_15916__$1 = state_15916;
var statearr_15926_15953 = state_15916__$1;
(statearr_15926_15953[(2)] = null);

(statearr_15926_15953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (2))){
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15916__$1,(4),ch);
} else {
if((state_val_15917 === (11))){
var inst_15893 = (state_15916[(7)]);
var inst_15903 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15916__$1,(8),inst_15903,inst_15893);
} else {
if((state_val_15917 === (9))){
var state_15916__$1 = state_15916;
var statearr_15927_15954 = state_15916__$1;
(statearr_15927_15954[(2)] = tc);

(statearr_15927_15954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (5))){
var inst_15896 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15897 = cljs.core.async.close_BANG_.call(null,fc);
var state_15916__$1 = (function (){var statearr_15928 = state_15916;
(statearr_15928[(8)] = inst_15896);

return statearr_15928;
})();
var statearr_15929_15955 = state_15916__$1;
(statearr_15929_15955[(2)] = inst_15897);

(statearr_15929_15955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (14))){
var inst_15910 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15930_15956 = state_15916__$1;
(statearr_15930_15956[(2)] = inst_15910);

(statearr_15930_15956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (10))){
var state_15916__$1 = state_15916;
var statearr_15931_15957 = state_15916__$1;
(statearr_15931_15957[(2)] = fc);

(statearr_15931_15957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (8))){
var inst_15905 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15905)){
var statearr_15932_15958 = state_15916__$1;
(statearr_15932_15958[(1)] = (12));

} else {
var statearr_15933_15959 = state_15916__$1;
(statearr_15933_15959[(1)] = (13));

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
});})(c__15259__auto___15945,tc,fc))
;
return ((function (switch__15147__auto__,c__15259__auto___15945,tc,fc){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_15937 = [null,null,null,null,null,null,null,null,null];
(statearr_15937[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_15937[(1)] = (1));

return statearr_15937;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_15916){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_15916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e15938){if((e15938 instanceof Object)){
var ex__15151__auto__ = e15938;
var statearr_15939_15960 = state_15916;
(statearr_15939_15960[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15961 = state_15916;
state_15916 = G__15961;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_15916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_15916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___15945,tc,fc))
})();
var state__15261__auto__ = (function (){var statearr_15940 = f__15260__auto__.call(null);
(statearr_15940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___15945);

return statearr_15940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___15945,tc,fc))
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
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__){
return (function (state_16025){
var state_val_16026 = (state_16025[(1)]);
if((state_val_16026 === (7))){
var inst_16021 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16027_16048 = state_16025__$1;
(statearr_16027_16048[(2)] = inst_16021);

(statearr_16027_16048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (1))){
var inst_16005 = init;
var state_16025__$1 = (function (){var statearr_16028 = state_16025;
(statearr_16028[(7)] = inst_16005);

return statearr_16028;
})();
var statearr_16029_16049 = state_16025__$1;
(statearr_16029_16049[(2)] = null);

(statearr_16029_16049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (4))){
var inst_16008 = (state_16025[(8)]);
var inst_16008__$1 = (state_16025[(2)]);
var inst_16009 = (inst_16008__$1 == null);
var state_16025__$1 = (function (){var statearr_16030 = state_16025;
(statearr_16030[(8)] = inst_16008__$1);

return statearr_16030;
})();
if(cljs.core.truth_(inst_16009)){
var statearr_16031_16050 = state_16025__$1;
(statearr_16031_16050[(1)] = (5));

} else {
var statearr_16032_16051 = state_16025__$1;
(statearr_16032_16051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (6))){
var inst_16012 = (state_16025[(9)]);
var inst_16005 = (state_16025[(7)]);
var inst_16008 = (state_16025[(8)]);
var inst_16012__$1 = f.call(null,inst_16005,inst_16008);
var inst_16013 = cljs.core.reduced_QMARK_.call(null,inst_16012__$1);
var state_16025__$1 = (function (){var statearr_16033 = state_16025;
(statearr_16033[(9)] = inst_16012__$1);

return statearr_16033;
})();
if(inst_16013){
var statearr_16034_16052 = state_16025__$1;
(statearr_16034_16052[(1)] = (8));

} else {
var statearr_16035_16053 = state_16025__$1;
(statearr_16035_16053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (3))){
var inst_16023 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16025__$1,inst_16023);
} else {
if((state_val_16026 === (2))){
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16025__$1,(4),ch);
} else {
if((state_val_16026 === (9))){
var inst_16012 = (state_16025[(9)]);
var inst_16005 = inst_16012;
var state_16025__$1 = (function (){var statearr_16036 = state_16025;
(statearr_16036[(7)] = inst_16005);

return statearr_16036;
})();
var statearr_16037_16054 = state_16025__$1;
(statearr_16037_16054[(2)] = null);

(statearr_16037_16054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (5))){
var inst_16005 = (state_16025[(7)]);
var state_16025__$1 = state_16025;
var statearr_16038_16055 = state_16025__$1;
(statearr_16038_16055[(2)] = inst_16005);

(statearr_16038_16055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (10))){
var inst_16019 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16039_16056 = state_16025__$1;
(statearr_16039_16056[(2)] = inst_16019);

(statearr_16039_16056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (8))){
var inst_16012 = (state_16025[(9)]);
var inst_16015 = cljs.core.deref.call(null,inst_16012);
var state_16025__$1 = state_16025;
var statearr_16040_16057 = state_16025__$1;
(statearr_16040_16057[(2)] = inst_16015);

(statearr_16040_16057[(1)] = (10));


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
});})(c__15259__auto__))
;
return ((function (switch__15147__auto__,c__15259__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15148__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15148__auto____0 = (function (){
var statearr_16044 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16044[(0)] = cljs$core$async$reduce_$_state_machine__15148__auto__);

(statearr_16044[(1)] = (1));

return statearr_16044;
});
var cljs$core$async$reduce_$_state_machine__15148__auto____1 = (function (state_16025){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_16025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e16045){if((e16045 instanceof Object)){
var ex__15151__auto__ = e16045;
var statearr_16046_16058 = state_16025;
(statearr_16046_16058[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16059 = state_16025;
state_16025 = G__16059;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15148__auto__ = function(state_16025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15148__auto____1.call(this,state_16025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15148__auto____0;
cljs$core$async$reduce_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15148__auto____1;
return cljs$core$async$reduce_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__))
})();
var state__15261__auto__ = (function (){var statearr_16047 = f__15260__auto__.call(null);
(statearr_16047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_16047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__))
);

return c__15259__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__,f__$1){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__,f__$1){
return (function (state_16079){
var state_val_16080 = (state_16079[(1)]);
if((state_val_16080 === (1))){
var inst_16074 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16079__$1 = state_16079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16079__$1,(2),inst_16074);
} else {
if((state_val_16080 === (2))){
var inst_16076 = (state_16079[(2)]);
var inst_16077 = f__$1.call(null,inst_16076);
var state_16079__$1 = state_16079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16079__$1,inst_16077);
} else {
return null;
}
}
});})(c__15259__auto__,f__$1))
;
return ((function (switch__15147__auto__,c__15259__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15148__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15148__auto____0 = (function (){
var statearr_16084 = [null,null,null,null,null,null,null];
(statearr_16084[(0)] = cljs$core$async$transduce_$_state_machine__15148__auto__);

(statearr_16084[(1)] = (1));

return statearr_16084;
});
var cljs$core$async$transduce_$_state_machine__15148__auto____1 = (function (state_16079){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_16079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e16085){if((e16085 instanceof Object)){
var ex__15151__auto__ = e16085;
var statearr_16086_16088 = state_16079;
(statearr_16086_16088[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16089 = state_16079;
state_16079 = G__16089;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15148__auto__ = function(state_16079){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15148__auto____1.call(this,state_16079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15148__auto____0;
cljs$core$async$transduce_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15148__auto____1;
return cljs$core$async$transduce_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__,f__$1))
})();
var state__15261__auto__ = (function (){var statearr_16087 = f__15260__auto__.call(null);
(statearr_16087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_16087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__,f__$1))
);

return c__15259__auto__;
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
var args16090 = [];
var len__9613__auto___16142 = arguments.length;
var i__9614__auto___16143 = (0);
while(true){
if((i__9614__auto___16143 < len__9613__auto___16142)){
args16090.push((arguments[i__9614__auto___16143]));

var G__16144 = (i__9614__auto___16143 + (1));
i__9614__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var G__16092 = args16090.length;
switch (G__16092) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16090.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__){
return (function (state_16117){
var state_val_16118 = (state_16117[(1)]);
if((state_val_16118 === (7))){
var inst_16099 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16119_16146 = state_16117__$1;
(statearr_16119_16146[(2)] = inst_16099);

(statearr_16119_16146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (1))){
var inst_16093 = cljs.core.seq.call(null,coll);
var inst_16094 = inst_16093;
var state_16117__$1 = (function (){var statearr_16120 = state_16117;
(statearr_16120[(7)] = inst_16094);

return statearr_16120;
})();
var statearr_16121_16147 = state_16117__$1;
(statearr_16121_16147[(2)] = null);

(statearr_16121_16147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (4))){
var inst_16094 = (state_16117[(7)]);
var inst_16097 = cljs.core.first.call(null,inst_16094);
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16117__$1,(7),ch,inst_16097);
} else {
if((state_val_16118 === (13))){
var inst_16111 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16122_16148 = state_16117__$1;
(statearr_16122_16148[(2)] = inst_16111);

(statearr_16122_16148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (6))){
var inst_16102 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
if(cljs.core.truth_(inst_16102)){
var statearr_16123_16149 = state_16117__$1;
(statearr_16123_16149[(1)] = (8));

} else {
var statearr_16124_16150 = state_16117__$1;
(statearr_16124_16150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (3))){
var inst_16115 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16117__$1,inst_16115);
} else {
if((state_val_16118 === (12))){
var state_16117__$1 = state_16117;
var statearr_16125_16151 = state_16117__$1;
(statearr_16125_16151[(2)] = null);

(statearr_16125_16151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (2))){
var inst_16094 = (state_16117[(7)]);
var state_16117__$1 = state_16117;
if(cljs.core.truth_(inst_16094)){
var statearr_16126_16152 = state_16117__$1;
(statearr_16126_16152[(1)] = (4));

} else {
var statearr_16127_16153 = state_16117__$1;
(statearr_16127_16153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (11))){
var inst_16108 = cljs.core.async.close_BANG_.call(null,ch);
var state_16117__$1 = state_16117;
var statearr_16128_16154 = state_16117__$1;
(statearr_16128_16154[(2)] = inst_16108);

(statearr_16128_16154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (9))){
var state_16117__$1 = state_16117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16129_16155 = state_16117__$1;
(statearr_16129_16155[(1)] = (11));

} else {
var statearr_16130_16156 = state_16117__$1;
(statearr_16130_16156[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (5))){
var inst_16094 = (state_16117[(7)]);
var state_16117__$1 = state_16117;
var statearr_16131_16157 = state_16117__$1;
(statearr_16131_16157[(2)] = inst_16094);

(statearr_16131_16157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (10))){
var inst_16113 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16132_16158 = state_16117__$1;
(statearr_16132_16158[(2)] = inst_16113);

(statearr_16132_16158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (8))){
var inst_16094 = (state_16117[(7)]);
var inst_16104 = cljs.core.next.call(null,inst_16094);
var inst_16094__$1 = inst_16104;
var state_16117__$1 = (function (){var statearr_16133 = state_16117;
(statearr_16133[(7)] = inst_16094__$1);

return statearr_16133;
})();
var statearr_16134_16159 = state_16117__$1;
(statearr_16134_16159[(2)] = null);

(statearr_16134_16159[(1)] = (2));


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
});})(c__15259__auto__))
;
return ((function (switch__15147__auto__,c__15259__auto__){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null,null];
(statearr_16138[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_16117){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_16117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e16139){if((e16139 instanceof Object)){
var ex__15151__auto__ = e16139;
var statearr_16140_16160 = state_16117;
(statearr_16140_16160[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16161 = state_16117;
state_16117 = G__16161;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_16117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_16117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__))
})();
var state__15261__auto__ = (function (){var statearr_16141 = f__15260__auto__.call(null);
(statearr_16141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__))
);

return c__15259__auto__;
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
var x__9168__auto__ = (((_ == null))?null:_);
var m__9169__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,_);
} else {
var m__9169__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,_);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9169__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m,ch);
} else {
var m__9169__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m,ch);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m);
} else {
var m__9169__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async16387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16387 = (function (ch,cs,meta16388){
this.ch = ch;
this.cs = cs;
this.meta16388 = meta16388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16389,meta16388__$1){
var self__ = this;
var _16389__$1 = this;
return (new cljs.core.async.t_cljs$core$async16387(self__.ch,self__.cs,meta16388__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16389){
var self__ = this;
var _16389__$1 = this;
return self__.meta16388;
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16388","meta16388",40958386,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16387";

cljs.core.async.t_cljs$core$async16387.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async16387");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16387 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16387(ch__$1,cs__$1,meta16388){
return (new cljs.core.async.t_cljs$core$async16387(ch__$1,cs__$1,meta16388));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16387(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15259__auto___16612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___16612,cs,m,dchan,dctr,done){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___16612,cs,m,dchan,dctr,done){
return (function (state_16524){
var state_val_16525 = (state_16524[(1)]);
if((state_val_16525 === (7))){
var inst_16520 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16526_16613 = state_16524__$1;
(statearr_16526_16613[(2)] = inst_16520);

(statearr_16526_16613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (20))){
var inst_16423 = (state_16524[(7)]);
var inst_16435 = cljs.core.first.call(null,inst_16423);
var inst_16436 = cljs.core.nth.call(null,inst_16435,(0),null);
var inst_16437 = cljs.core.nth.call(null,inst_16435,(1),null);
var state_16524__$1 = (function (){var statearr_16527 = state_16524;
(statearr_16527[(8)] = inst_16436);

return statearr_16527;
})();
if(cljs.core.truth_(inst_16437)){
var statearr_16528_16614 = state_16524__$1;
(statearr_16528_16614[(1)] = (22));

} else {
var statearr_16529_16615 = state_16524__$1;
(statearr_16529_16615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (27))){
var inst_16392 = (state_16524[(9)]);
var inst_16467 = (state_16524[(10)]);
var inst_16465 = (state_16524[(11)]);
var inst_16472 = (state_16524[(12)]);
var inst_16472__$1 = cljs.core._nth.call(null,inst_16465,inst_16467);
var inst_16473 = cljs.core.async.put_BANG_.call(null,inst_16472__$1,inst_16392,done);
var state_16524__$1 = (function (){var statearr_16530 = state_16524;
(statearr_16530[(12)] = inst_16472__$1);

return statearr_16530;
})();
if(cljs.core.truth_(inst_16473)){
var statearr_16531_16616 = state_16524__$1;
(statearr_16531_16616[(1)] = (30));

} else {
var statearr_16532_16617 = state_16524__$1;
(statearr_16532_16617[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (1))){
var state_16524__$1 = state_16524;
var statearr_16533_16618 = state_16524__$1;
(statearr_16533_16618[(2)] = null);

(statearr_16533_16618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (24))){
var inst_16423 = (state_16524[(7)]);
var inst_16442 = (state_16524[(2)]);
var inst_16443 = cljs.core.next.call(null,inst_16423);
var inst_16401 = inst_16443;
var inst_16402 = null;
var inst_16403 = (0);
var inst_16404 = (0);
var state_16524__$1 = (function (){var statearr_16534 = state_16524;
(statearr_16534[(13)] = inst_16402);

(statearr_16534[(14)] = inst_16442);

(statearr_16534[(15)] = inst_16401);

(statearr_16534[(16)] = inst_16403);

(statearr_16534[(17)] = inst_16404);

return statearr_16534;
})();
var statearr_16535_16619 = state_16524__$1;
(statearr_16535_16619[(2)] = null);

(statearr_16535_16619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (39))){
var state_16524__$1 = state_16524;
var statearr_16539_16620 = state_16524__$1;
(statearr_16539_16620[(2)] = null);

(statearr_16539_16620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (4))){
var inst_16392 = (state_16524[(9)]);
var inst_16392__$1 = (state_16524[(2)]);
var inst_16393 = (inst_16392__$1 == null);
var state_16524__$1 = (function (){var statearr_16540 = state_16524;
(statearr_16540[(9)] = inst_16392__$1);

return statearr_16540;
})();
if(cljs.core.truth_(inst_16393)){
var statearr_16541_16621 = state_16524__$1;
(statearr_16541_16621[(1)] = (5));

} else {
var statearr_16542_16622 = state_16524__$1;
(statearr_16542_16622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (15))){
var inst_16402 = (state_16524[(13)]);
var inst_16401 = (state_16524[(15)]);
var inst_16403 = (state_16524[(16)]);
var inst_16404 = (state_16524[(17)]);
var inst_16419 = (state_16524[(2)]);
var inst_16420 = (inst_16404 + (1));
var tmp16536 = inst_16402;
var tmp16537 = inst_16401;
var tmp16538 = inst_16403;
var inst_16401__$1 = tmp16537;
var inst_16402__$1 = tmp16536;
var inst_16403__$1 = tmp16538;
var inst_16404__$1 = inst_16420;
var state_16524__$1 = (function (){var statearr_16543 = state_16524;
(statearr_16543[(13)] = inst_16402__$1);

(statearr_16543[(15)] = inst_16401__$1);

(statearr_16543[(16)] = inst_16403__$1);

(statearr_16543[(17)] = inst_16404__$1);

(statearr_16543[(18)] = inst_16419);

return statearr_16543;
})();
var statearr_16544_16623 = state_16524__$1;
(statearr_16544_16623[(2)] = null);

(statearr_16544_16623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (21))){
var inst_16446 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16548_16624 = state_16524__$1;
(statearr_16548_16624[(2)] = inst_16446);

(statearr_16548_16624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (31))){
var inst_16472 = (state_16524[(12)]);
var inst_16476 = done.call(null,null);
var inst_16477 = cljs.core.async.untap_STAR_.call(null,m,inst_16472);
var state_16524__$1 = (function (){var statearr_16549 = state_16524;
(statearr_16549[(19)] = inst_16476);

return statearr_16549;
})();
var statearr_16550_16625 = state_16524__$1;
(statearr_16550_16625[(2)] = inst_16477);

(statearr_16550_16625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (32))){
var inst_16466 = (state_16524[(20)]);
var inst_16467 = (state_16524[(10)]);
var inst_16464 = (state_16524[(21)]);
var inst_16465 = (state_16524[(11)]);
var inst_16479 = (state_16524[(2)]);
var inst_16480 = (inst_16467 + (1));
var tmp16545 = inst_16466;
var tmp16546 = inst_16464;
var tmp16547 = inst_16465;
var inst_16464__$1 = tmp16546;
var inst_16465__$1 = tmp16547;
var inst_16466__$1 = tmp16545;
var inst_16467__$1 = inst_16480;
var state_16524__$1 = (function (){var statearr_16551 = state_16524;
(statearr_16551[(20)] = inst_16466__$1);

(statearr_16551[(10)] = inst_16467__$1);

(statearr_16551[(22)] = inst_16479);

(statearr_16551[(21)] = inst_16464__$1);

(statearr_16551[(11)] = inst_16465__$1);

return statearr_16551;
})();
var statearr_16552_16626 = state_16524__$1;
(statearr_16552_16626[(2)] = null);

(statearr_16552_16626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (40))){
var inst_16492 = (state_16524[(23)]);
var inst_16496 = done.call(null,null);
var inst_16497 = cljs.core.async.untap_STAR_.call(null,m,inst_16492);
var state_16524__$1 = (function (){var statearr_16553 = state_16524;
(statearr_16553[(24)] = inst_16496);

return statearr_16553;
})();
var statearr_16554_16627 = state_16524__$1;
(statearr_16554_16627[(2)] = inst_16497);

(statearr_16554_16627[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (33))){
var inst_16483 = (state_16524[(25)]);
var inst_16485 = cljs.core.chunked_seq_QMARK_.call(null,inst_16483);
var state_16524__$1 = state_16524;
if(inst_16485){
var statearr_16555_16628 = state_16524__$1;
(statearr_16555_16628[(1)] = (36));

} else {
var statearr_16556_16629 = state_16524__$1;
(statearr_16556_16629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (13))){
var inst_16413 = (state_16524[(26)]);
var inst_16416 = cljs.core.async.close_BANG_.call(null,inst_16413);
var state_16524__$1 = state_16524;
var statearr_16557_16630 = state_16524__$1;
(statearr_16557_16630[(2)] = inst_16416);

(statearr_16557_16630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (22))){
var inst_16436 = (state_16524[(8)]);
var inst_16439 = cljs.core.async.close_BANG_.call(null,inst_16436);
var state_16524__$1 = state_16524;
var statearr_16558_16631 = state_16524__$1;
(statearr_16558_16631[(2)] = inst_16439);

(statearr_16558_16631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (36))){
var inst_16483 = (state_16524[(25)]);
var inst_16487 = cljs.core.chunk_first.call(null,inst_16483);
var inst_16488 = cljs.core.chunk_rest.call(null,inst_16483);
var inst_16489 = cljs.core.count.call(null,inst_16487);
var inst_16464 = inst_16488;
var inst_16465 = inst_16487;
var inst_16466 = inst_16489;
var inst_16467 = (0);
var state_16524__$1 = (function (){var statearr_16559 = state_16524;
(statearr_16559[(20)] = inst_16466);

(statearr_16559[(10)] = inst_16467);

(statearr_16559[(21)] = inst_16464);

(statearr_16559[(11)] = inst_16465);

return statearr_16559;
})();
var statearr_16560_16632 = state_16524__$1;
(statearr_16560_16632[(2)] = null);

(statearr_16560_16632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (41))){
var inst_16483 = (state_16524[(25)]);
var inst_16499 = (state_16524[(2)]);
var inst_16500 = cljs.core.next.call(null,inst_16483);
var inst_16464 = inst_16500;
var inst_16465 = null;
var inst_16466 = (0);
var inst_16467 = (0);
var state_16524__$1 = (function (){var statearr_16561 = state_16524;
(statearr_16561[(20)] = inst_16466);

(statearr_16561[(10)] = inst_16467);

(statearr_16561[(27)] = inst_16499);

(statearr_16561[(21)] = inst_16464);

(statearr_16561[(11)] = inst_16465);

return statearr_16561;
})();
var statearr_16562_16633 = state_16524__$1;
(statearr_16562_16633[(2)] = null);

(statearr_16562_16633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (43))){
var state_16524__$1 = state_16524;
var statearr_16563_16634 = state_16524__$1;
(statearr_16563_16634[(2)] = null);

(statearr_16563_16634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (29))){
var inst_16508 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16564_16635 = state_16524__$1;
(statearr_16564_16635[(2)] = inst_16508);

(statearr_16564_16635[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (44))){
var inst_16517 = (state_16524[(2)]);
var state_16524__$1 = (function (){var statearr_16565 = state_16524;
(statearr_16565[(28)] = inst_16517);

return statearr_16565;
})();
var statearr_16566_16636 = state_16524__$1;
(statearr_16566_16636[(2)] = null);

(statearr_16566_16636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (6))){
var inst_16456 = (state_16524[(29)]);
var inst_16455 = cljs.core.deref.call(null,cs);
var inst_16456__$1 = cljs.core.keys.call(null,inst_16455);
var inst_16457 = cljs.core.count.call(null,inst_16456__$1);
var inst_16458 = cljs.core.reset_BANG_.call(null,dctr,inst_16457);
var inst_16463 = cljs.core.seq.call(null,inst_16456__$1);
var inst_16464 = inst_16463;
var inst_16465 = null;
var inst_16466 = (0);
var inst_16467 = (0);
var state_16524__$1 = (function (){var statearr_16567 = state_16524;
(statearr_16567[(20)] = inst_16466);

(statearr_16567[(10)] = inst_16467);

(statearr_16567[(30)] = inst_16458);

(statearr_16567[(21)] = inst_16464);

(statearr_16567[(11)] = inst_16465);

(statearr_16567[(29)] = inst_16456__$1);

return statearr_16567;
})();
var statearr_16568_16637 = state_16524__$1;
(statearr_16568_16637[(2)] = null);

(statearr_16568_16637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (28))){
var inst_16464 = (state_16524[(21)]);
var inst_16483 = (state_16524[(25)]);
var inst_16483__$1 = cljs.core.seq.call(null,inst_16464);
var state_16524__$1 = (function (){var statearr_16569 = state_16524;
(statearr_16569[(25)] = inst_16483__$1);

return statearr_16569;
})();
if(inst_16483__$1){
var statearr_16570_16638 = state_16524__$1;
(statearr_16570_16638[(1)] = (33));

} else {
var statearr_16571_16639 = state_16524__$1;
(statearr_16571_16639[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (25))){
var inst_16466 = (state_16524[(20)]);
var inst_16467 = (state_16524[(10)]);
var inst_16469 = (inst_16467 < inst_16466);
var inst_16470 = inst_16469;
var state_16524__$1 = state_16524;
if(cljs.core.truth_(inst_16470)){
var statearr_16572_16640 = state_16524__$1;
(statearr_16572_16640[(1)] = (27));

} else {
var statearr_16573_16641 = state_16524__$1;
(statearr_16573_16641[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (34))){
var state_16524__$1 = state_16524;
var statearr_16574_16642 = state_16524__$1;
(statearr_16574_16642[(2)] = null);

(statearr_16574_16642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (17))){
var state_16524__$1 = state_16524;
var statearr_16575_16643 = state_16524__$1;
(statearr_16575_16643[(2)] = null);

(statearr_16575_16643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (3))){
var inst_16522 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16524__$1,inst_16522);
} else {
if((state_val_16525 === (12))){
var inst_16451 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16576_16644 = state_16524__$1;
(statearr_16576_16644[(2)] = inst_16451);

(statearr_16576_16644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (2))){
var state_16524__$1 = state_16524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16524__$1,(4),ch);
} else {
if((state_val_16525 === (23))){
var state_16524__$1 = state_16524;
var statearr_16577_16645 = state_16524__$1;
(statearr_16577_16645[(2)] = null);

(statearr_16577_16645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (35))){
var inst_16506 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16578_16646 = state_16524__$1;
(statearr_16578_16646[(2)] = inst_16506);

(statearr_16578_16646[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (19))){
var inst_16423 = (state_16524[(7)]);
var inst_16427 = cljs.core.chunk_first.call(null,inst_16423);
var inst_16428 = cljs.core.chunk_rest.call(null,inst_16423);
var inst_16429 = cljs.core.count.call(null,inst_16427);
var inst_16401 = inst_16428;
var inst_16402 = inst_16427;
var inst_16403 = inst_16429;
var inst_16404 = (0);
var state_16524__$1 = (function (){var statearr_16579 = state_16524;
(statearr_16579[(13)] = inst_16402);

(statearr_16579[(15)] = inst_16401);

(statearr_16579[(16)] = inst_16403);

(statearr_16579[(17)] = inst_16404);

return statearr_16579;
})();
var statearr_16580_16647 = state_16524__$1;
(statearr_16580_16647[(2)] = null);

(statearr_16580_16647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (11))){
var inst_16401 = (state_16524[(15)]);
var inst_16423 = (state_16524[(7)]);
var inst_16423__$1 = cljs.core.seq.call(null,inst_16401);
var state_16524__$1 = (function (){var statearr_16581 = state_16524;
(statearr_16581[(7)] = inst_16423__$1);

return statearr_16581;
})();
if(inst_16423__$1){
var statearr_16582_16648 = state_16524__$1;
(statearr_16582_16648[(1)] = (16));

} else {
var statearr_16583_16649 = state_16524__$1;
(statearr_16583_16649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (9))){
var inst_16453 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16584_16650 = state_16524__$1;
(statearr_16584_16650[(2)] = inst_16453);

(statearr_16584_16650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (5))){
var inst_16399 = cljs.core.deref.call(null,cs);
var inst_16400 = cljs.core.seq.call(null,inst_16399);
var inst_16401 = inst_16400;
var inst_16402 = null;
var inst_16403 = (0);
var inst_16404 = (0);
var state_16524__$1 = (function (){var statearr_16585 = state_16524;
(statearr_16585[(13)] = inst_16402);

(statearr_16585[(15)] = inst_16401);

(statearr_16585[(16)] = inst_16403);

(statearr_16585[(17)] = inst_16404);

return statearr_16585;
})();
var statearr_16586_16651 = state_16524__$1;
(statearr_16586_16651[(2)] = null);

(statearr_16586_16651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (14))){
var state_16524__$1 = state_16524;
var statearr_16587_16652 = state_16524__$1;
(statearr_16587_16652[(2)] = null);

(statearr_16587_16652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (45))){
var inst_16514 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16588_16653 = state_16524__$1;
(statearr_16588_16653[(2)] = inst_16514);

(statearr_16588_16653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (26))){
var inst_16456 = (state_16524[(29)]);
var inst_16510 = (state_16524[(2)]);
var inst_16511 = cljs.core.seq.call(null,inst_16456);
var state_16524__$1 = (function (){var statearr_16589 = state_16524;
(statearr_16589[(31)] = inst_16510);

return statearr_16589;
})();
if(inst_16511){
var statearr_16590_16654 = state_16524__$1;
(statearr_16590_16654[(1)] = (42));

} else {
var statearr_16591_16655 = state_16524__$1;
(statearr_16591_16655[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (16))){
var inst_16423 = (state_16524[(7)]);
var inst_16425 = cljs.core.chunked_seq_QMARK_.call(null,inst_16423);
var state_16524__$1 = state_16524;
if(inst_16425){
var statearr_16592_16656 = state_16524__$1;
(statearr_16592_16656[(1)] = (19));

} else {
var statearr_16593_16657 = state_16524__$1;
(statearr_16593_16657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (38))){
var inst_16503 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16594_16658 = state_16524__$1;
(statearr_16594_16658[(2)] = inst_16503);

(statearr_16594_16658[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (30))){
var state_16524__$1 = state_16524;
var statearr_16595_16659 = state_16524__$1;
(statearr_16595_16659[(2)] = null);

(statearr_16595_16659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (10))){
var inst_16402 = (state_16524[(13)]);
var inst_16404 = (state_16524[(17)]);
var inst_16412 = cljs.core._nth.call(null,inst_16402,inst_16404);
var inst_16413 = cljs.core.nth.call(null,inst_16412,(0),null);
var inst_16414 = cljs.core.nth.call(null,inst_16412,(1),null);
var state_16524__$1 = (function (){var statearr_16596 = state_16524;
(statearr_16596[(26)] = inst_16413);

return statearr_16596;
})();
if(cljs.core.truth_(inst_16414)){
var statearr_16597_16660 = state_16524__$1;
(statearr_16597_16660[(1)] = (13));

} else {
var statearr_16598_16661 = state_16524__$1;
(statearr_16598_16661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (18))){
var inst_16449 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16599_16662 = state_16524__$1;
(statearr_16599_16662[(2)] = inst_16449);

(statearr_16599_16662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (42))){
var state_16524__$1 = state_16524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16524__$1,(45),dchan);
} else {
if((state_val_16525 === (37))){
var inst_16492 = (state_16524[(23)]);
var inst_16392 = (state_16524[(9)]);
var inst_16483 = (state_16524[(25)]);
var inst_16492__$1 = cljs.core.first.call(null,inst_16483);
var inst_16493 = cljs.core.async.put_BANG_.call(null,inst_16492__$1,inst_16392,done);
var state_16524__$1 = (function (){var statearr_16600 = state_16524;
(statearr_16600[(23)] = inst_16492__$1);

return statearr_16600;
})();
if(cljs.core.truth_(inst_16493)){
var statearr_16601_16663 = state_16524__$1;
(statearr_16601_16663[(1)] = (39));

} else {
var statearr_16602_16664 = state_16524__$1;
(statearr_16602_16664[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16525 === (8))){
var inst_16403 = (state_16524[(16)]);
var inst_16404 = (state_16524[(17)]);
var inst_16406 = (inst_16404 < inst_16403);
var inst_16407 = inst_16406;
var state_16524__$1 = state_16524;
if(cljs.core.truth_(inst_16407)){
var statearr_16603_16665 = state_16524__$1;
(statearr_16603_16665[(1)] = (10));

} else {
var statearr_16604_16666 = state_16524__$1;
(statearr_16604_16666[(1)] = (11));

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
});})(c__15259__auto___16612,cs,m,dchan,dctr,done))
;
return ((function (switch__15147__auto__,c__15259__auto___16612,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15148__auto__ = null;
var cljs$core$async$mult_$_state_machine__15148__auto____0 = (function (){
var statearr_16608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16608[(0)] = cljs$core$async$mult_$_state_machine__15148__auto__);

(statearr_16608[(1)] = (1));

return statearr_16608;
});
var cljs$core$async$mult_$_state_machine__15148__auto____1 = (function (state_16524){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_16524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e16609){if((e16609 instanceof Object)){
var ex__15151__auto__ = e16609;
var statearr_16610_16667 = state_16524;
(statearr_16610_16667[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16668 = state_16524;
state_16524 = G__16668;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15148__auto__ = function(state_16524){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15148__auto____1.call(this,state_16524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15148__auto____0;
cljs$core$async$mult_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15148__auto____1;
return cljs$core$async$mult_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___16612,cs,m,dchan,dctr,done))
})();
var state__15261__auto__ = (function (){var statearr_16611 = f__15260__auto__.call(null);
(statearr_16611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___16612);

return statearr_16611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___16612,cs,m,dchan,dctr,done))
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
var args16669 = [];
var len__9613__auto___16672 = arguments.length;
var i__9614__auto___16673 = (0);
while(true){
if((i__9614__auto___16673 < len__9613__auto___16672)){
args16669.push((arguments[i__9614__auto___16673]));

var G__16674 = (i__9614__auto___16673 + (1));
i__9614__auto___16673 = G__16674;
continue;
} else {
}
break;
}

var G__16671 = args16669.length;
switch (G__16671) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16669.length)].join('')));

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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m,ch);
} else {
var m__9169__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m,ch);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m,ch);
} else {
var m__9169__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m,ch);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m);
} else {
var m__9169__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m,state_map);
} else {
var m__9169__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m,state_map);
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
var x__9168__auto__ = (((m == null))?null:m);
var m__9169__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,m,mode);
} else {
var m__9169__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___16686 = arguments.length;
var i__9614__auto___16687 = (0);
while(true){
if((i__9614__auto___16687 < len__9613__auto___16686)){
args__9620__auto__.push((arguments[i__9614__auto___16687]));

var G__16688 = (i__9614__auto___16687 + (1));
i__9614__auto___16687 = G__16688;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16680){
var map__16681 = p__16680;
var map__16681__$1 = ((((!((map__16681 == null)))?((((map__16681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16681):map__16681);
var opts = map__16681__$1;
var statearr_16683_16689 = state;
(statearr_16683_16689[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__16681,map__16681__$1,opts){
return (function (val){
var statearr_16684_16690 = state;
(statearr_16684_16690[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16681,map__16681__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16685_16691 = state;
(statearr_16685_16691[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16676){
var G__16677 = cljs.core.first.call(null,seq16676);
var seq16676__$1 = cljs.core.next.call(null,seq16676);
var G__16678 = cljs.core.first.call(null,seq16676__$1);
var seq16676__$2 = cljs.core.next.call(null,seq16676__$1);
var G__16679 = cljs.core.first.call(null,seq16676__$2);
var seq16676__$3 = cljs.core.next.call(null,seq16676__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16677,G__16678,G__16679,seq16676__$3);
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
if(typeof cljs.core.async.t_cljs$core$async16859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16859 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16860){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16860 = meta16860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16861,meta16860__$1){
var self__ = this;
var _16861__$1 = this;
return (new cljs.core.async.t_cljs$core$async16859(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16860__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16861){
var self__ = this;
var _16861__$1 = this;
return self__.meta16860;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16859.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16860","meta16860",-1694448863,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16859";

cljs.core.async.t_cljs$core$async16859.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async16859");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16859 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16859(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16860){
return (new cljs.core.async.t_cljs$core$async16859(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16860));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16859(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15259__auto___17026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16963){
var state_val_16964 = (state_16963[(1)]);
if((state_val_16964 === (7))){
var inst_16878 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16965_17027 = state_16963__$1;
(statearr_16965_17027[(2)] = inst_16878);

(statearr_16965_17027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (20))){
var inst_16890 = (state_16963[(7)]);
var state_16963__$1 = state_16963;
var statearr_16966_17028 = state_16963__$1;
(statearr_16966_17028[(2)] = inst_16890);

(statearr_16966_17028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (27))){
var state_16963__$1 = state_16963;
var statearr_16967_17029 = state_16963__$1;
(statearr_16967_17029[(2)] = null);

(statearr_16967_17029[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (1))){
var inst_16865 = (state_16963[(8)]);
var inst_16865__$1 = calc_state.call(null);
var inst_16867 = (inst_16865__$1 == null);
var inst_16868 = cljs.core.not.call(null,inst_16867);
var state_16963__$1 = (function (){var statearr_16968 = state_16963;
(statearr_16968[(8)] = inst_16865__$1);

return statearr_16968;
})();
if(inst_16868){
var statearr_16969_17030 = state_16963__$1;
(statearr_16969_17030[(1)] = (2));

} else {
var statearr_16970_17031 = state_16963__$1;
(statearr_16970_17031[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (24))){
var inst_16937 = (state_16963[(9)]);
var inst_16923 = (state_16963[(10)]);
var inst_16914 = (state_16963[(11)]);
var inst_16937__$1 = inst_16914.call(null,inst_16923);
var state_16963__$1 = (function (){var statearr_16971 = state_16963;
(statearr_16971[(9)] = inst_16937__$1);

return statearr_16971;
})();
if(cljs.core.truth_(inst_16937__$1)){
var statearr_16972_17032 = state_16963__$1;
(statearr_16972_17032[(1)] = (29));

} else {
var statearr_16973_17033 = state_16963__$1;
(statearr_16973_17033[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (4))){
var inst_16881 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16881)){
var statearr_16974_17034 = state_16963__$1;
(statearr_16974_17034[(1)] = (8));

} else {
var statearr_16975_17035 = state_16963__$1;
(statearr_16975_17035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (15))){
var inst_16908 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16908)){
var statearr_16976_17036 = state_16963__$1;
(statearr_16976_17036[(1)] = (19));

} else {
var statearr_16977_17037 = state_16963__$1;
(statearr_16977_17037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (21))){
var inst_16913 = (state_16963[(12)]);
var inst_16913__$1 = (state_16963[(2)]);
var inst_16914 = cljs.core.get.call(null,inst_16913__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16915 = cljs.core.get.call(null,inst_16913__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16916 = cljs.core.get.call(null,inst_16913__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16963__$1 = (function (){var statearr_16978 = state_16963;
(statearr_16978[(12)] = inst_16913__$1);

(statearr_16978[(13)] = inst_16915);

(statearr_16978[(11)] = inst_16914);

return statearr_16978;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16963__$1,(22),inst_16916);
} else {
if((state_val_16964 === (31))){
var inst_16945 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16945)){
var statearr_16979_17038 = state_16963__$1;
(statearr_16979_17038[(1)] = (32));

} else {
var statearr_16980_17039 = state_16963__$1;
(statearr_16980_17039[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (32))){
var inst_16922 = (state_16963[(14)]);
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16963__$1,(35),out,inst_16922);
} else {
if((state_val_16964 === (33))){
var inst_16913 = (state_16963[(12)]);
var inst_16890 = inst_16913;
var state_16963__$1 = (function (){var statearr_16981 = state_16963;
(statearr_16981[(7)] = inst_16890);

return statearr_16981;
})();
var statearr_16982_17040 = state_16963__$1;
(statearr_16982_17040[(2)] = null);

(statearr_16982_17040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (13))){
var inst_16890 = (state_16963[(7)]);
var inst_16897 = inst_16890.cljs$lang$protocol_mask$partition0$;
var inst_16898 = (inst_16897 & (64));
var inst_16899 = inst_16890.cljs$core$ISeq$;
var inst_16900 = (cljs.core.PROTOCOL_SENTINEL === inst_16899);
var inst_16901 = (inst_16898) || (inst_16900);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16901)){
var statearr_16983_17041 = state_16963__$1;
(statearr_16983_17041[(1)] = (16));

} else {
var statearr_16984_17042 = state_16963__$1;
(statearr_16984_17042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (22))){
var inst_16923 = (state_16963[(10)]);
var inst_16922 = (state_16963[(14)]);
var inst_16921 = (state_16963[(2)]);
var inst_16922__$1 = cljs.core.nth.call(null,inst_16921,(0),null);
var inst_16923__$1 = cljs.core.nth.call(null,inst_16921,(1),null);
var inst_16924 = (inst_16922__$1 == null);
var inst_16925 = cljs.core._EQ_.call(null,inst_16923__$1,change);
var inst_16926 = (inst_16924) || (inst_16925);
var state_16963__$1 = (function (){var statearr_16985 = state_16963;
(statearr_16985[(10)] = inst_16923__$1);

(statearr_16985[(14)] = inst_16922__$1);

return statearr_16985;
})();
if(cljs.core.truth_(inst_16926)){
var statearr_16986_17043 = state_16963__$1;
(statearr_16986_17043[(1)] = (23));

} else {
var statearr_16987_17044 = state_16963__$1;
(statearr_16987_17044[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (36))){
var inst_16913 = (state_16963[(12)]);
var inst_16890 = inst_16913;
var state_16963__$1 = (function (){var statearr_16988 = state_16963;
(statearr_16988[(7)] = inst_16890);

return statearr_16988;
})();
var statearr_16989_17045 = state_16963__$1;
(statearr_16989_17045[(2)] = null);

(statearr_16989_17045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (29))){
var inst_16937 = (state_16963[(9)]);
var state_16963__$1 = state_16963;
var statearr_16990_17046 = state_16963__$1;
(statearr_16990_17046[(2)] = inst_16937);

(statearr_16990_17046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (6))){
var state_16963__$1 = state_16963;
var statearr_16991_17047 = state_16963__$1;
(statearr_16991_17047[(2)] = false);

(statearr_16991_17047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (28))){
var inst_16933 = (state_16963[(2)]);
var inst_16934 = calc_state.call(null);
var inst_16890 = inst_16934;
var state_16963__$1 = (function (){var statearr_16992 = state_16963;
(statearr_16992[(15)] = inst_16933);

(statearr_16992[(7)] = inst_16890);

return statearr_16992;
})();
var statearr_16993_17048 = state_16963__$1;
(statearr_16993_17048[(2)] = null);

(statearr_16993_17048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (25))){
var inst_16959 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16994_17049 = state_16963__$1;
(statearr_16994_17049[(2)] = inst_16959);

(statearr_16994_17049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (34))){
var inst_16957 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16995_17050 = state_16963__$1;
(statearr_16995_17050[(2)] = inst_16957);

(statearr_16995_17050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (17))){
var state_16963__$1 = state_16963;
var statearr_16996_17051 = state_16963__$1;
(statearr_16996_17051[(2)] = false);

(statearr_16996_17051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (3))){
var state_16963__$1 = state_16963;
var statearr_16997_17052 = state_16963__$1;
(statearr_16997_17052[(2)] = false);

(statearr_16997_17052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (12))){
var inst_16961 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16963__$1,inst_16961);
} else {
if((state_val_16964 === (2))){
var inst_16865 = (state_16963[(8)]);
var inst_16870 = inst_16865.cljs$lang$protocol_mask$partition0$;
var inst_16871 = (inst_16870 & (64));
var inst_16872 = inst_16865.cljs$core$ISeq$;
var inst_16873 = (cljs.core.PROTOCOL_SENTINEL === inst_16872);
var inst_16874 = (inst_16871) || (inst_16873);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16874)){
var statearr_16998_17053 = state_16963__$1;
(statearr_16998_17053[(1)] = (5));

} else {
var statearr_16999_17054 = state_16963__$1;
(statearr_16999_17054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (23))){
var inst_16922 = (state_16963[(14)]);
var inst_16928 = (inst_16922 == null);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16928)){
var statearr_17000_17055 = state_16963__$1;
(statearr_17000_17055[(1)] = (26));

} else {
var statearr_17001_17056 = state_16963__$1;
(statearr_17001_17056[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (35))){
var inst_16948 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16948)){
var statearr_17002_17057 = state_16963__$1;
(statearr_17002_17057[(1)] = (36));

} else {
var statearr_17003_17058 = state_16963__$1;
(statearr_17003_17058[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (19))){
var inst_16890 = (state_16963[(7)]);
var inst_16910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16890);
var state_16963__$1 = state_16963;
var statearr_17004_17059 = state_16963__$1;
(statearr_17004_17059[(2)] = inst_16910);

(statearr_17004_17059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (11))){
var inst_16890 = (state_16963[(7)]);
var inst_16894 = (inst_16890 == null);
var inst_16895 = cljs.core.not.call(null,inst_16894);
var state_16963__$1 = state_16963;
if(inst_16895){
var statearr_17005_17060 = state_16963__$1;
(statearr_17005_17060[(1)] = (13));

} else {
var statearr_17006_17061 = state_16963__$1;
(statearr_17006_17061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (9))){
var inst_16865 = (state_16963[(8)]);
var state_16963__$1 = state_16963;
var statearr_17007_17062 = state_16963__$1;
(statearr_17007_17062[(2)] = inst_16865);

(statearr_17007_17062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (5))){
var state_16963__$1 = state_16963;
var statearr_17008_17063 = state_16963__$1;
(statearr_17008_17063[(2)] = true);

(statearr_17008_17063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (14))){
var state_16963__$1 = state_16963;
var statearr_17009_17064 = state_16963__$1;
(statearr_17009_17064[(2)] = false);

(statearr_17009_17064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (26))){
var inst_16923 = (state_16963[(10)]);
var inst_16930 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16923);
var state_16963__$1 = state_16963;
var statearr_17010_17065 = state_16963__$1;
(statearr_17010_17065[(2)] = inst_16930);

(statearr_17010_17065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (16))){
var state_16963__$1 = state_16963;
var statearr_17011_17066 = state_16963__$1;
(statearr_17011_17066[(2)] = true);

(statearr_17011_17066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (38))){
var inst_16953 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_17012_17067 = state_16963__$1;
(statearr_17012_17067[(2)] = inst_16953);

(statearr_17012_17067[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (30))){
var inst_16923 = (state_16963[(10)]);
var inst_16915 = (state_16963[(13)]);
var inst_16914 = (state_16963[(11)]);
var inst_16940 = cljs.core.empty_QMARK_.call(null,inst_16914);
var inst_16941 = inst_16915.call(null,inst_16923);
var inst_16942 = cljs.core.not.call(null,inst_16941);
var inst_16943 = (inst_16940) && (inst_16942);
var state_16963__$1 = state_16963;
var statearr_17013_17068 = state_16963__$1;
(statearr_17013_17068[(2)] = inst_16943);

(statearr_17013_17068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (10))){
var inst_16865 = (state_16963[(8)]);
var inst_16886 = (state_16963[(2)]);
var inst_16887 = cljs.core.get.call(null,inst_16886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16888 = cljs.core.get.call(null,inst_16886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16889 = cljs.core.get.call(null,inst_16886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16890 = inst_16865;
var state_16963__$1 = (function (){var statearr_17014 = state_16963;
(statearr_17014[(16)] = inst_16889);

(statearr_17014[(7)] = inst_16890);

(statearr_17014[(17)] = inst_16887);

(statearr_17014[(18)] = inst_16888);

return statearr_17014;
})();
var statearr_17015_17069 = state_16963__$1;
(statearr_17015_17069[(2)] = null);

(statearr_17015_17069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (18))){
var inst_16905 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_17016_17070 = state_16963__$1;
(statearr_17016_17070[(2)] = inst_16905);

(statearr_17016_17070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (37))){
var state_16963__$1 = state_16963;
var statearr_17017_17071 = state_16963__$1;
(statearr_17017_17071[(2)] = null);

(statearr_17017_17071[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16964 === (8))){
var inst_16865 = (state_16963[(8)]);
var inst_16883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16865);
var state_16963__$1 = state_16963;
var statearr_17018_17072 = state_16963__$1;
(statearr_17018_17072[(2)] = inst_16883);

(statearr_17018_17072[(1)] = (10));


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
});})(c__15259__auto___17026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15147__auto__,c__15259__auto___17026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15148__auto__ = null;
var cljs$core$async$mix_$_state_machine__15148__auto____0 = (function (){
var statearr_17022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17022[(0)] = cljs$core$async$mix_$_state_machine__15148__auto__);

(statearr_17022[(1)] = (1));

return statearr_17022;
});
var cljs$core$async$mix_$_state_machine__15148__auto____1 = (function (state_16963){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_16963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17023){if((e17023 instanceof Object)){
var ex__15151__auto__ = e17023;
var statearr_17024_17073 = state_16963;
(statearr_17024_17073[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17074 = state_16963;
state_16963 = G__17074;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15148__auto__ = function(state_16963){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15148__auto____1.call(this,state_16963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15148__auto____0;
cljs$core$async$mix_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15148__auto____1;
return cljs$core$async$mix_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15261__auto__ = (function (){var statearr_17025 = f__15260__auto__.call(null);
(statearr_17025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17026);

return statearr_17025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9168__auto__ = (((p == null))?null:p);
var m__9169__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9169__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9168__auto__ = (((p == null))?null:p);
var m__9169__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,p,v,ch);
} else {
var m__9169__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17075 = [];
var len__9613__auto___17078 = arguments.length;
var i__9614__auto___17079 = (0);
while(true){
if((i__9614__auto___17079 < len__9613__auto___17078)){
args17075.push((arguments[i__9614__auto___17079]));

var G__17080 = (i__9614__auto___17079 + (1));
i__9614__auto___17079 = G__17080;
continue;
} else {
}
break;
}

var G__17077 = args17075.length;
switch (G__17077) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17075.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9168__auto__ = (((p == null))?null:p);
var m__9169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,p);
} else {
var m__9169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,p);
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
var x__9168__auto__ = (((p == null))?null:p);
var m__9169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9168__auto__)]);
if(!((m__9169__auto__ == null))){
return m__9169__auto__.call(null,p,v);
} else {
var m__9169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9169__auto____$1 == null))){
return m__9169__auto____$1.call(null,p,v);
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
var args17083 = [];
var len__9613__auto___17208 = arguments.length;
var i__9614__auto___17209 = (0);
while(true){
if((i__9614__auto___17209 < len__9613__auto___17208)){
args17083.push((arguments[i__9614__auto___17209]));

var G__17210 = (i__9614__auto___17209 + (1));
i__9614__auto___17209 = G__17210;
continue;
} else {
}
break;
}

var G__17085 = args17083.length;
switch (G__17085) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17083.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8505__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8505__auto__,mults){
return (function (p1__17082_SHARP_){
if(cljs.core.truth_(p1__17082_SHARP_.call(null,topic))){
return p1__17082_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17082_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8505__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17086 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17087){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17087 = meta17087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17088,meta17087__$1){
var self__ = this;
var _17088__$1 = this;
return (new cljs.core.async.t_cljs$core$async17086(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17087__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17088){
var self__ = this;
var _17088__$1 = this;
return self__.meta17087;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17087","meta17087",1431911283,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17086";

cljs.core.async.t_cljs$core$async17086.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async17086");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17086 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17086(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17087){
return (new cljs.core.async.t_cljs$core$async17086(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17087));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17086(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15259__auto___17212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17212,mults,ensure_mult,p){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17212,mults,ensure_mult,p){
return (function (state_17160){
var state_val_17161 = (state_17160[(1)]);
if((state_val_17161 === (7))){
var inst_17156 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
var statearr_17162_17213 = state_17160__$1;
(statearr_17162_17213[(2)] = inst_17156);

(statearr_17162_17213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (20))){
var state_17160__$1 = state_17160;
var statearr_17163_17214 = state_17160__$1;
(statearr_17163_17214[(2)] = null);

(statearr_17163_17214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (1))){
var state_17160__$1 = state_17160;
var statearr_17164_17215 = state_17160__$1;
(statearr_17164_17215[(2)] = null);

(statearr_17164_17215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (24))){
var inst_17139 = (state_17160[(7)]);
var inst_17148 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17139);
var state_17160__$1 = state_17160;
var statearr_17165_17216 = state_17160__$1;
(statearr_17165_17216[(2)] = inst_17148);

(statearr_17165_17216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (4))){
var inst_17091 = (state_17160[(8)]);
var inst_17091__$1 = (state_17160[(2)]);
var inst_17092 = (inst_17091__$1 == null);
var state_17160__$1 = (function (){var statearr_17166 = state_17160;
(statearr_17166[(8)] = inst_17091__$1);

return statearr_17166;
})();
if(cljs.core.truth_(inst_17092)){
var statearr_17167_17217 = state_17160__$1;
(statearr_17167_17217[(1)] = (5));

} else {
var statearr_17168_17218 = state_17160__$1;
(statearr_17168_17218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (15))){
var inst_17133 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
var statearr_17169_17219 = state_17160__$1;
(statearr_17169_17219[(2)] = inst_17133);

(statearr_17169_17219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (21))){
var inst_17153 = (state_17160[(2)]);
var state_17160__$1 = (function (){var statearr_17170 = state_17160;
(statearr_17170[(9)] = inst_17153);

return statearr_17170;
})();
var statearr_17171_17220 = state_17160__$1;
(statearr_17171_17220[(2)] = null);

(statearr_17171_17220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (13))){
var inst_17115 = (state_17160[(10)]);
var inst_17117 = cljs.core.chunked_seq_QMARK_.call(null,inst_17115);
var state_17160__$1 = state_17160;
if(inst_17117){
var statearr_17172_17221 = state_17160__$1;
(statearr_17172_17221[(1)] = (16));

} else {
var statearr_17173_17222 = state_17160__$1;
(statearr_17173_17222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (22))){
var inst_17145 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
if(cljs.core.truth_(inst_17145)){
var statearr_17174_17223 = state_17160__$1;
(statearr_17174_17223[(1)] = (23));

} else {
var statearr_17175_17224 = state_17160__$1;
(statearr_17175_17224[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (6))){
var inst_17139 = (state_17160[(7)]);
var inst_17091 = (state_17160[(8)]);
var inst_17141 = (state_17160[(11)]);
var inst_17139__$1 = topic_fn.call(null,inst_17091);
var inst_17140 = cljs.core.deref.call(null,mults);
var inst_17141__$1 = cljs.core.get.call(null,inst_17140,inst_17139__$1);
var state_17160__$1 = (function (){var statearr_17176 = state_17160;
(statearr_17176[(7)] = inst_17139__$1);

(statearr_17176[(11)] = inst_17141__$1);

return statearr_17176;
})();
if(cljs.core.truth_(inst_17141__$1)){
var statearr_17177_17225 = state_17160__$1;
(statearr_17177_17225[(1)] = (19));

} else {
var statearr_17178_17226 = state_17160__$1;
(statearr_17178_17226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (25))){
var inst_17150 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
var statearr_17179_17227 = state_17160__$1;
(statearr_17179_17227[(2)] = inst_17150);

(statearr_17179_17227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (17))){
var inst_17115 = (state_17160[(10)]);
var inst_17124 = cljs.core.first.call(null,inst_17115);
var inst_17125 = cljs.core.async.muxch_STAR_.call(null,inst_17124);
var inst_17126 = cljs.core.async.close_BANG_.call(null,inst_17125);
var inst_17127 = cljs.core.next.call(null,inst_17115);
var inst_17101 = inst_17127;
var inst_17102 = null;
var inst_17103 = (0);
var inst_17104 = (0);
var state_17160__$1 = (function (){var statearr_17180 = state_17160;
(statearr_17180[(12)] = inst_17104);

(statearr_17180[(13)] = inst_17126);

(statearr_17180[(14)] = inst_17101);

(statearr_17180[(15)] = inst_17102);

(statearr_17180[(16)] = inst_17103);

return statearr_17180;
})();
var statearr_17181_17228 = state_17160__$1;
(statearr_17181_17228[(2)] = null);

(statearr_17181_17228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (3))){
var inst_17158 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17160__$1,inst_17158);
} else {
if((state_val_17161 === (12))){
var inst_17135 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
var statearr_17182_17229 = state_17160__$1;
(statearr_17182_17229[(2)] = inst_17135);

(statearr_17182_17229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (2))){
var state_17160__$1 = state_17160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17160__$1,(4),ch);
} else {
if((state_val_17161 === (23))){
var state_17160__$1 = state_17160;
var statearr_17183_17230 = state_17160__$1;
(statearr_17183_17230[(2)] = null);

(statearr_17183_17230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (19))){
var inst_17091 = (state_17160[(8)]);
var inst_17141 = (state_17160[(11)]);
var inst_17143 = cljs.core.async.muxch_STAR_.call(null,inst_17141);
var state_17160__$1 = state_17160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17160__$1,(22),inst_17143,inst_17091);
} else {
if((state_val_17161 === (11))){
var inst_17115 = (state_17160[(10)]);
var inst_17101 = (state_17160[(14)]);
var inst_17115__$1 = cljs.core.seq.call(null,inst_17101);
var state_17160__$1 = (function (){var statearr_17184 = state_17160;
(statearr_17184[(10)] = inst_17115__$1);

return statearr_17184;
})();
if(inst_17115__$1){
var statearr_17185_17231 = state_17160__$1;
(statearr_17185_17231[(1)] = (13));

} else {
var statearr_17186_17232 = state_17160__$1;
(statearr_17186_17232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (9))){
var inst_17137 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
var statearr_17187_17233 = state_17160__$1;
(statearr_17187_17233[(2)] = inst_17137);

(statearr_17187_17233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (5))){
var inst_17098 = cljs.core.deref.call(null,mults);
var inst_17099 = cljs.core.vals.call(null,inst_17098);
var inst_17100 = cljs.core.seq.call(null,inst_17099);
var inst_17101 = inst_17100;
var inst_17102 = null;
var inst_17103 = (0);
var inst_17104 = (0);
var state_17160__$1 = (function (){var statearr_17188 = state_17160;
(statearr_17188[(12)] = inst_17104);

(statearr_17188[(14)] = inst_17101);

(statearr_17188[(15)] = inst_17102);

(statearr_17188[(16)] = inst_17103);

return statearr_17188;
})();
var statearr_17189_17234 = state_17160__$1;
(statearr_17189_17234[(2)] = null);

(statearr_17189_17234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (14))){
var state_17160__$1 = state_17160;
var statearr_17193_17235 = state_17160__$1;
(statearr_17193_17235[(2)] = null);

(statearr_17193_17235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (16))){
var inst_17115 = (state_17160[(10)]);
var inst_17119 = cljs.core.chunk_first.call(null,inst_17115);
var inst_17120 = cljs.core.chunk_rest.call(null,inst_17115);
var inst_17121 = cljs.core.count.call(null,inst_17119);
var inst_17101 = inst_17120;
var inst_17102 = inst_17119;
var inst_17103 = inst_17121;
var inst_17104 = (0);
var state_17160__$1 = (function (){var statearr_17194 = state_17160;
(statearr_17194[(12)] = inst_17104);

(statearr_17194[(14)] = inst_17101);

(statearr_17194[(15)] = inst_17102);

(statearr_17194[(16)] = inst_17103);

return statearr_17194;
})();
var statearr_17195_17236 = state_17160__$1;
(statearr_17195_17236[(2)] = null);

(statearr_17195_17236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (10))){
var inst_17104 = (state_17160[(12)]);
var inst_17101 = (state_17160[(14)]);
var inst_17102 = (state_17160[(15)]);
var inst_17103 = (state_17160[(16)]);
var inst_17109 = cljs.core._nth.call(null,inst_17102,inst_17104);
var inst_17110 = cljs.core.async.muxch_STAR_.call(null,inst_17109);
var inst_17111 = cljs.core.async.close_BANG_.call(null,inst_17110);
var inst_17112 = (inst_17104 + (1));
var tmp17190 = inst_17101;
var tmp17191 = inst_17102;
var tmp17192 = inst_17103;
var inst_17101__$1 = tmp17190;
var inst_17102__$1 = tmp17191;
var inst_17103__$1 = tmp17192;
var inst_17104__$1 = inst_17112;
var state_17160__$1 = (function (){var statearr_17196 = state_17160;
(statearr_17196[(12)] = inst_17104__$1);

(statearr_17196[(17)] = inst_17111);

(statearr_17196[(14)] = inst_17101__$1);

(statearr_17196[(15)] = inst_17102__$1);

(statearr_17196[(16)] = inst_17103__$1);

return statearr_17196;
})();
var statearr_17197_17237 = state_17160__$1;
(statearr_17197_17237[(2)] = null);

(statearr_17197_17237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (18))){
var inst_17130 = (state_17160[(2)]);
var state_17160__$1 = state_17160;
var statearr_17198_17238 = state_17160__$1;
(statearr_17198_17238[(2)] = inst_17130);

(statearr_17198_17238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17161 === (8))){
var inst_17104 = (state_17160[(12)]);
var inst_17103 = (state_17160[(16)]);
var inst_17106 = (inst_17104 < inst_17103);
var inst_17107 = inst_17106;
var state_17160__$1 = state_17160;
if(cljs.core.truth_(inst_17107)){
var statearr_17199_17239 = state_17160__$1;
(statearr_17199_17239[(1)] = (10));

} else {
var statearr_17200_17240 = state_17160__$1;
(statearr_17200_17240[(1)] = (11));

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
});})(c__15259__auto___17212,mults,ensure_mult,p))
;
return ((function (switch__15147__auto__,c__15259__auto___17212,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17204[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17204[(1)] = (1));

return statearr_17204;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17160){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17205){if((e17205 instanceof Object)){
var ex__15151__auto__ = e17205;
var statearr_17206_17241 = state_17160;
(statearr_17206_17241[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17242 = state_17160;
state_17160 = G__17242;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17212,mults,ensure_mult,p))
})();
var state__15261__auto__ = (function (){var statearr_17207 = f__15260__auto__.call(null);
(statearr_17207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17212);

return statearr_17207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17212,mults,ensure_mult,p))
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
var args17243 = [];
var len__9613__auto___17246 = arguments.length;
var i__9614__auto___17247 = (0);
while(true){
if((i__9614__auto___17247 < len__9613__auto___17246)){
args17243.push((arguments[i__9614__auto___17247]));

var G__17248 = (i__9614__auto___17247 + (1));
i__9614__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var G__17245 = args17243.length;
switch (G__17245) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17243.length)].join('')));

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
var args17250 = [];
var len__9613__auto___17253 = arguments.length;
var i__9614__auto___17254 = (0);
while(true){
if((i__9614__auto___17254 < len__9613__auto___17253)){
args17250.push((arguments[i__9614__auto___17254]));

var G__17255 = (i__9614__auto___17254 + (1));
i__9614__auto___17254 = G__17255;
continue;
} else {
}
break;
}

var G__17252 = args17250.length;
switch (G__17252) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17250.length)].join('')));

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
var args17257 = [];
var len__9613__auto___17328 = arguments.length;
var i__9614__auto___17329 = (0);
while(true){
if((i__9614__auto___17329 < len__9613__auto___17328)){
args17257.push((arguments[i__9614__auto___17329]));

var G__17330 = (i__9614__auto___17329 + (1));
i__9614__auto___17329 = G__17330;
continue;
} else {
}
break;
}

var G__17259 = args17257.length;
switch (G__17259) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17257.length)].join('')));

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
var c__15259__auto___17332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17298){
var state_val_17299 = (state_17298[(1)]);
if((state_val_17299 === (7))){
var state_17298__$1 = state_17298;
var statearr_17300_17333 = state_17298__$1;
(statearr_17300_17333[(2)] = null);

(statearr_17300_17333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (1))){
var state_17298__$1 = state_17298;
var statearr_17301_17334 = state_17298__$1;
(statearr_17301_17334[(2)] = null);

(statearr_17301_17334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (4))){
var inst_17262 = (state_17298[(7)]);
var inst_17264 = (inst_17262 < cnt);
var state_17298__$1 = state_17298;
if(cljs.core.truth_(inst_17264)){
var statearr_17302_17335 = state_17298__$1;
(statearr_17302_17335[(1)] = (6));

} else {
var statearr_17303_17336 = state_17298__$1;
(statearr_17303_17336[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (15))){
var inst_17294 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17304_17337 = state_17298__$1;
(statearr_17304_17337[(2)] = inst_17294);

(statearr_17304_17337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (13))){
var inst_17287 = cljs.core.async.close_BANG_.call(null,out);
var state_17298__$1 = state_17298;
var statearr_17305_17338 = state_17298__$1;
(statearr_17305_17338[(2)] = inst_17287);

(statearr_17305_17338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (6))){
var state_17298__$1 = state_17298;
var statearr_17306_17339 = state_17298__$1;
(statearr_17306_17339[(2)] = null);

(statearr_17306_17339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (3))){
var inst_17296 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17298__$1,inst_17296);
} else {
if((state_val_17299 === (12))){
var inst_17284 = (state_17298[(8)]);
var inst_17284__$1 = (state_17298[(2)]);
var inst_17285 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17284__$1);
var state_17298__$1 = (function (){var statearr_17307 = state_17298;
(statearr_17307[(8)] = inst_17284__$1);

return statearr_17307;
})();
if(cljs.core.truth_(inst_17285)){
var statearr_17308_17340 = state_17298__$1;
(statearr_17308_17340[(1)] = (13));

} else {
var statearr_17309_17341 = state_17298__$1;
(statearr_17309_17341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (2))){
var inst_17261 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17262 = (0);
var state_17298__$1 = (function (){var statearr_17310 = state_17298;
(statearr_17310[(9)] = inst_17261);

(statearr_17310[(7)] = inst_17262);

return statearr_17310;
})();
var statearr_17311_17342 = state_17298__$1;
(statearr_17311_17342[(2)] = null);

(statearr_17311_17342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (11))){
var inst_17262 = (state_17298[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17298,(10),Object,null,(9));
var inst_17271 = chs__$1.call(null,inst_17262);
var inst_17272 = done.call(null,inst_17262);
var inst_17273 = cljs.core.async.take_BANG_.call(null,inst_17271,inst_17272);
var state_17298__$1 = state_17298;
var statearr_17312_17343 = state_17298__$1;
(statearr_17312_17343[(2)] = inst_17273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (9))){
var inst_17262 = (state_17298[(7)]);
var inst_17275 = (state_17298[(2)]);
var inst_17276 = (inst_17262 + (1));
var inst_17262__$1 = inst_17276;
var state_17298__$1 = (function (){var statearr_17313 = state_17298;
(statearr_17313[(10)] = inst_17275);

(statearr_17313[(7)] = inst_17262__$1);

return statearr_17313;
})();
var statearr_17314_17344 = state_17298__$1;
(statearr_17314_17344[(2)] = null);

(statearr_17314_17344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (5))){
var inst_17282 = (state_17298[(2)]);
var state_17298__$1 = (function (){var statearr_17315 = state_17298;
(statearr_17315[(11)] = inst_17282);

return statearr_17315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17298__$1,(12),dchan);
} else {
if((state_val_17299 === (14))){
var inst_17284 = (state_17298[(8)]);
var inst_17289 = cljs.core.apply.call(null,f,inst_17284);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17298__$1,(16),out,inst_17289);
} else {
if((state_val_17299 === (16))){
var inst_17291 = (state_17298[(2)]);
var state_17298__$1 = (function (){var statearr_17316 = state_17298;
(statearr_17316[(12)] = inst_17291);

return statearr_17316;
})();
var statearr_17317_17345 = state_17298__$1;
(statearr_17317_17345[(2)] = null);

(statearr_17317_17345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (10))){
var inst_17266 = (state_17298[(2)]);
var inst_17267 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17298__$1 = (function (){var statearr_17318 = state_17298;
(statearr_17318[(13)] = inst_17266);

return statearr_17318;
})();
var statearr_17319_17346 = state_17298__$1;
(statearr_17319_17346[(2)] = inst_17267);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (8))){
var inst_17280 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17320_17347 = state_17298__$1;
(statearr_17320_17347[(2)] = inst_17280);

(statearr_17320_17347[(1)] = (5));


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
});})(c__15259__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15147__auto__,c__15259__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17324[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17324[(1)] = (1));

return statearr_17324;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17298){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17325){if((e17325 instanceof Object)){
var ex__15151__auto__ = e17325;
var statearr_17326_17348 = state_17298;
(statearr_17326_17348[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17349 = state_17298;
state_17298 = G__17349;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15261__auto__ = (function (){var statearr_17327 = f__15260__auto__.call(null);
(statearr_17327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17332);

return statearr_17327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17351 = [];
var len__9613__auto___17409 = arguments.length;
var i__9614__auto___17410 = (0);
while(true){
if((i__9614__auto___17410 < len__9613__auto___17409)){
args17351.push((arguments[i__9614__auto___17410]));

var G__17411 = (i__9614__auto___17410 + (1));
i__9614__auto___17410 = G__17411;
continue;
} else {
}
break;
}

var G__17353 = args17351.length;
switch (G__17353) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17351.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15259__auto___17413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17413,out){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17413,out){
return (function (state_17385){
var state_val_17386 = (state_17385[(1)]);
if((state_val_17386 === (7))){
var inst_17364 = (state_17385[(7)]);
var inst_17365 = (state_17385[(8)]);
var inst_17364__$1 = (state_17385[(2)]);
var inst_17365__$1 = cljs.core.nth.call(null,inst_17364__$1,(0),null);
var inst_17366 = cljs.core.nth.call(null,inst_17364__$1,(1),null);
var inst_17367 = (inst_17365__$1 == null);
var state_17385__$1 = (function (){var statearr_17387 = state_17385;
(statearr_17387[(9)] = inst_17366);

(statearr_17387[(7)] = inst_17364__$1);

(statearr_17387[(8)] = inst_17365__$1);

return statearr_17387;
})();
if(cljs.core.truth_(inst_17367)){
var statearr_17388_17414 = state_17385__$1;
(statearr_17388_17414[(1)] = (8));

} else {
var statearr_17389_17415 = state_17385__$1;
(statearr_17389_17415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (1))){
var inst_17354 = cljs.core.vec.call(null,chs);
var inst_17355 = inst_17354;
var state_17385__$1 = (function (){var statearr_17390 = state_17385;
(statearr_17390[(10)] = inst_17355);

return statearr_17390;
})();
var statearr_17391_17416 = state_17385__$1;
(statearr_17391_17416[(2)] = null);

(statearr_17391_17416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (4))){
var inst_17355 = (state_17385[(10)]);
var state_17385__$1 = state_17385;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17385__$1,(7),inst_17355);
} else {
if((state_val_17386 === (6))){
var inst_17381 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17392_17417 = state_17385__$1;
(statearr_17392_17417[(2)] = inst_17381);

(statearr_17392_17417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (3))){
var inst_17383 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17385__$1,inst_17383);
} else {
if((state_val_17386 === (2))){
var inst_17355 = (state_17385[(10)]);
var inst_17357 = cljs.core.count.call(null,inst_17355);
var inst_17358 = (inst_17357 > (0));
var state_17385__$1 = state_17385;
if(cljs.core.truth_(inst_17358)){
var statearr_17394_17418 = state_17385__$1;
(statearr_17394_17418[(1)] = (4));

} else {
var statearr_17395_17419 = state_17385__$1;
(statearr_17395_17419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (11))){
var inst_17355 = (state_17385[(10)]);
var inst_17374 = (state_17385[(2)]);
var tmp17393 = inst_17355;
var inst_17355__$1 = tmp17393;
var state_17385__$1 = (function (){var statearr_17396 = state_17385;
(statearr_17396[(11)] = inst_17374);

(statearr_17396[(10)] = inst_17355__$1);

return statearr_17396;
})();
var statearr_17397_17420 = state_17385__$1;
(statearr_17397_17420[(2)] = null);

(statearr_17397_17420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (9))){
var inst_17365 = (state_17385[(8)]);
var state_17385__$1 = state_17385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17385__$1,(11),out,inst_17365);
} else {
if((state_val_17386 === (5))){
var inst_17379 = cljs.core.async.close_BANG_.call(null,out);
var state_17385__$1 = state_17385;
var statearr_17398_17421 = state_17385__$1;
(statearr_17398_17421[(2)] = inst_17379);

(statearr_17398_17421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (10))){
var inst_17377 = (state_17385[(2)]);
var state_17385__$1 = state_17385;
var statearr_17399_17422 = state_17385__$1;
(statearr_17399_17422[(2)] = inst_17377);

(statearr_17399_17422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17386 === (8))){
var inst_17366 = (state_17385[(9)]);
var inst_17355 = (state_17385[(10)]);
var inst_17364 = (state_17385[(7)]);
var inst_17365 = (state_17385[(8)]);
var inst_17369 = (function (){var cs = inst_17355;
var vec__17360 = inst_17364;
var v = inst_17365;
var c = inst_17366;
return ((function (cs,vec__17360,v,c,inst_17366,inst_17355,inst_17364,inst_17365,state_val_17386,c__15259__auto___17413,out){
return (function (p1__17350_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17350_SHARP_);
});
;})(cs,vec__17360,v,c,inst_17366,inst_17355,inst_17364,inst_17365,state_val_17386,c__15259__auto___17413,out))
})();
var inst_17370 = cljs.core.filterv.call(null,inst_17369,inst_17355);
var inst_17355__$1 = inst_17370;
var state_17385__$1 = (function (){var statearr_17400 = state_17385;
(statearr_17400[(10)] = inst_17355__$1);

return statearr_17400;
})();
var statearr_17401_17423 = state_17385__$1;
(statearr_17401_17423[(2)] = null);

(statearr_17401_17423[(1)] = (2));


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
});})(c__15259__auto___17413,out))
;
return ((function (switch__15147__auto__,c__15259__auto___17413,out){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17405[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17405[(1)] = (1));

return statearr_17405;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17385){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17406){if((e17406 instanceof Object)){
var ex__15151__auto__ = e17406;
var statearr_17407_17424 = state_17385;
(statearr_17407_17424[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17425 = state_17385;
state_17385 = G__17425;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17413,out))
})();
var state__15261__auto__ = (function (){var statearr_17408 = f__15260__auto__.call(null);
(statearr_17408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17413);

return statearr_17408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17413,out))
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
var args17426 = [];
var len__9613__auto___17475 = arguments.length;
var i__9614__auto___17476 = (0);
while(true){
if((i__9614__auto___17476 < len__9613__auto___17475)){
args17426.push((arguments[i__9614__auto___17476]));

var G__17477 = (i__9614__auto___17476 + (1));
i__9614__auto___17476 = G__17477;
continue;
} else {
}
break;
}

var G__17428 = args17426.length;
switch (G__17428) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17426.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15259__auto___17479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17479,out){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17479,out){
return (function (state_17452){
var state_val_17453 = (state_17452[(1)]);
if((state_val_17453 === (7))){
var inst_17434 = (state_17452[(7)]);
var inst_17434__$1 = (state_17452[(2)]);
var inst_17435 = (inst_17434__$1 == null);
var inst_17436 = cljs.core.not.call(null,inst_17435);
var state_17452__$1 = (function (){var statearr_17454 = state_17452;
(statearr_17454[(7)] = inst_17434__$1);

return statearr_17454;
})();
if(inst_17436){
var statearr_17455_17480 = state_17452__$1;
(statearr_17455_17480[(1)] = (8));

} else {
var statearr_17456_17481 = state_17452__$1;
(statearr_17456_17481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (1))){
var inst_17429 = (0);
var state_17452__$1 = (function (){var statearr_17457 = state_17452;
(statearr_17457[(8)] = inst_17429);

return statearr_17457;
})();
var statearr_17458_17482 = state_17452__$1;
(statearr_17458_17482[(2)] = null);

(statearr_17458_17482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (4))){
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17452__$1,(7),ch);
} else {
if((state_val_17453 === (6))){
var inst_17447 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
var statearr_17459_17483 = state_17452__$1;
(statearr_17459_17483[(2)] = inst_17447);

(statearr_17459_17483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (3))){
var inst_17449 = (state_17452[(2)]);
var inst_17450 = cljs.core.async.close_BANG_.call(null,out);
var state_17452__$1 = (function (){var statearr_17460 = state_17452;
(statearr_17460[(9)] = inst_17449);

return statearr_17460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17452__$1,inst_17450);
} else {
if((state_val_17453 === (2))){
var inst_17429 = (state_17452[(8)]);
var inst_17431 = (inst_17429 < n);
var state_17452__$1 = state_17452;
if(cljs.core.truth_(inst_17431)){
var statearr_17461_17484 = state_17452__$1;
(statearr_17461_17484[(1)] = (4));

} else {
var statearr_17462_17485 = state_17452__$1;
(statearr_17462_17485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (11))){
var inst_17429 = (state_17452[(8)]);
var inst_17439 = (state_17452[(2)]);
var inst_17440 = (inst_17429 + (1));
var inst_17429__$1 = inst_17440;
var state_17452__$1 = (function (){var statearr_17463 = state_17452;
(statearr_17463[(8)] = inst_17429__$1);

(statearr_17463[(10)] = inst_17439);

return statearr_17463;
})();
var statearr_17464_17486 = state_17452__$1;
(statearr_17464_17486[(2)] = null);

(statearr_17464_17486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (9))){
var state_17452__$1 = state_17452;
var statearr_17465_17487 = state_17452__$1;
(statearr_17465_17487[(2)] = null);

(statearr_17465_17487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (5))){
var state_17452__$1 = state_17452;
var statearr_17466_17488 = state_17452__$1;
(statearr_17466_17488[(2)] = null);

(statearr_17466_17488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (10))){
var inst_17444 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
var statearr_17467_17489 = state_17452__$1;
(statearr_17467_17489[(2)] = inst_17444);

(statearr_17467_17489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (8))){
var inst_17434 = (state_17452[(7)]);
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17452__$1,(11),out,inst_17434);
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
});})(c__15259__auto___17479,out))
;
return ((function (switch__15147__auto__,c__15259__auto___17479,out){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17471[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17471[(1)] = (1));

return statearr_17471;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17452){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17472){if((e17472 instanceof Object)){
var ex__15151__auto__ = e17472;
var statearr_17473_17490 = state_17452;
(statearr_17473_17490[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17491 = state_17452;
state_17452 = G__17491;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17479,out))
})();
var state__15261__auto__ = (function (){var statearr_17474 = f__15260__auto__.call(null);
(statearr_17474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17479);

return statearr_17474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17479,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17499 = (function (f,ch,meta17500){
this.f = f;
this.ch = ch;
this.meta17500 = meta17500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17501,meta17500__$1){
var self__ = this;
var _17501__$1 = this;
return (new cljs.core.async.t_cljs$core$async17499(self__.f,self__.ch,meta17500__$1));
});

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17501){
var self__ = this;
var _17501__$1 = this;
return self__.meta17500;
});

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17502 = (function (f,ch,meta17500,_,fn1,meta17503){
this.f = f;
this.ch = ch;
this.meta17500 = meta17500;
this._ = _;
this.fn1 = fn1;
this.meta17503 = meta17503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17504,meta17503__$1){
var self__ = this;
var _17504__$1 = this;
return (new cljs.core.async.t_cljs$core$async17502(self__.f,self__.ch,self__.meta17500,self__._,self__.fn1,meta17503__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17504){
var self__ = this;
var _17504__$1 = this;
return self__.meta17503;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17492_SHARP_){
return f1.call(null,(((p1__17492_SHARP_ == null))?null:self__.f.call(null,p1__17492_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17502.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17500","meta17500",263525712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17499","cljs.core.async/t_cljs$core$async17499",2125793297,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17503","meta17503",-498050657,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17502";

cljs.core.async.t_cljs$core$async17502.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async17502");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17502 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17502(f__$1,ch__$1,meta17500__$1,___$2,fn1__$1,meta17503){
return (new cljs.core.async.t_cljs$core$async17502(f__$1,ch__$1,meta17500__$1,___$2,fn1__$1,meta17503));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17502(self__.f,self__.ch,self__.meta17500,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8493__auto__ = ret;
if(cljs.core.truth_(and__8493__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8493__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17500","meta17500",263525712,null)], null);
});

cljs.core.async.t_cljs$core$async17499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17499";

cljs.core.async.t_cljs$core$async17499.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async17499");
});

cljs.core.async.__GT_t_cljs$core$async17499 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17499(f__$1,ch__$1,meta17500){
return (new cljs.core.async.t_cljs$core$async17499(f__$1,ch__$1,meta17500));
});

}

return (new cljs.core.async.t_cljs$core$async17499(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17508 = (function (f,ch,meta17509){
this.f = f;
this.ch = ch;
this.meta17509 = meta17509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17510,meta17509__$1){
var self__ = this;
var _17510__$1 = this;
return (new cljs.core.async.t_cljs$core$async17508(self__.f,self__.ch,meta17509__$1));
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17510){
var self__ = this;
var _17510__$1 = this;
return self__.meta17509;
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17509","meta17509",-1117772147,null)], null);
});

cljs.core.async.t_cljs$core$async17508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17508";

cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async17508");
});

cljs.core.async.__GT_t_cljs$core$async17508 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17508(f__$1,ch__$1,meta17509){
return (new cljs.core.async.t_cljs$core$async17508(f__$1,ch__$1,meta17509));
});

}

return (new cljs.core.async.t_cljs$core$async17508(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17514 = (function (p,ch,meta17515){
this.p = p;
this.ch = ch;
this.meta17515 = meta17515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17516,meta17515__$1){
var self__ = this;
var _17516__$1 = this;
return (new cljs.core.async.t_cljs$core$async17514(self__.p,self__.ch,meta17515__$1));
});

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17516){
var self__ = this;
var _17516__$1 = this;
return self__.meta17515;
});

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17515","meta17515",-1892099156,null)], null);
});

cljs.core.async.t_cljs$core$async17514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17514";

cljs.core.async.t_cljs$core$async17514.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cljs.core.async/t_cljs$core$async17514");
});

cljs.core.async.__GT_t_cljs$core$async17514 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17514(p__$1,ch__$1,meta17515){
return (new cljs.core.async.t_cljs$core$async17514(p__$1,ch__$1,meta17515));
});

}

return (new cljs.core.async.t_cljs$core$async17514(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17517 = [];
var len__9613__auto___17561 = arguments.length;
var i__9614__auto___17562 = (0);
while(true){
if((i__9614__auto___17562 < len__9613__auto___17561)){
args17517.push((arguments[i__9614__auto___17562]));

var G__17563 = (i__9614__auto___17562 + (1));
i__9614__auto___17562 = G__17563;
continue;
} else {
}
break;
}

var G__17519 = args17517.length;
switch (G__17519) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17517.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15259__auto___17565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17565,out){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17565,out){
return (function (state_17540){
var state_val_17541 = (state_17540[(1)]);
if((state_val_17541 === (7))){
var inst_17536 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17542_17566 = state_17540__$1;
(statearr_17542_17566[(2)] = inst_17536);

(statearr_17542_17566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (1))){
var state_17540__$1 = state_17540;
var statearr_17543_17567 = state_17540__$1;
(statearr_17543_17567[(2)] = null);

(statearr_17543_17567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (4))){
var inst_17522 = (state_17540[(7)]);
var inst_17522__$1 = (state_17540[(2)]);
var inst_17523 = (inst_17522__$1 == null);
var state_17540__$1 = (function (){var statearr_17544 = state_17540;
(statearr_17544[(7)] = inst_17522__$1);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17523)){
var statearr_17545_17568 = state_17540__$1;
(statearr_17545_17568[(1)] = (5));

} else {
var statearr_17546_17569 = state_17540__$1;
(statearr_17546_17569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (6))){
var inst_17522 = (state_17540[(7)]);
var inst_17527 = p.call(null,inst_17522);
var state_17540__$1 = state_17540;
if(cljs.core.truth_(inst_17527)){
var statearr_17547_17570 = state_17540__$1;
(statearr_17547_17570[(1)] = (8));

} else {
var statearr_17548_17571 = state_17540__$1;
(statearr_17548_17571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (3))){
var inst_17538 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17540__$1,inst_17538);
} else {
if((state_val_17541 === (2))){
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17540__$1,(4),ch);
} else {
if((state_val_17541 === (11))){
var inst_17530 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17549_17572 = state_17540__$1;
(statearr_17549_17572[(2)] = inst_17530);

(statearr_17549_17572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (9))){
var state_17540__$1 = state_17540;
var statearr_17550_17573 = state_17540__$1;
(statearr_17550_17573[(2)] = null);

(statearr_17550_17573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (5))){
var inst_17525 = cljs.core.async.close_BANG_.call(null,out);
var state_17540__$1 = state_17540;
var statearr_17551_17574 = state_17540__$1;
(statearr_17551_17574[(2)] = inst_17525);

(statearr_17551_17574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (10))){
var inst_17533 = (state_17540[(2)]);
var state_17540__$1 = (function (){var statearr_17552 = state_17540;
(statearr_17552[(8)] = inst_17533);

return statearr_17552;
})();
var statearr_17553_17575 = state_17540__$1;
(statearr_17553_17575[(2)] = null);

(statearr_17553_17575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (8))){
var inst_17522 = (state_17540[(7)]);
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17540__$1,(11),out,inst_17522);
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
});})(c__15259__auto___17565,out))
;
return ((function (switch__15147__auto__,c__15259__auto___17565,out){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17557 = [null,null,null,null,null,null,null,null,null];
(statearr_17557[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17557[(1)] = (1));

return statearr_17557;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17540){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17558){if((e17558 instanceof Object)){
var ex__15151__auto__ = e17558;
var statearr_17559_17576 = state_17540;
(statearr_17559_17576[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17577 = state_17540;
state_17540 = G__17577;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17565,out))
})();
var state__15261__auto__ = (function (){var statearr_17560 = f__15260__auto__.call(null);
(statearr_17560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17565);

return statearr_17560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17565,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17578 = [];
var len__9613__auto___17581 = arguments.length;
var i__9614__auto___17582 = (0);
while(true){
if((i__9614__auto___17582 < len__9613__auto___17581)){
args17578.push((arguments[i__9614__auto___17582]));

var G__17583 = (i__9614__auto___17582 + (1));
i__9614__auto___17582 = G__17583;
continue;
} else {
}
break;
}

var G__17580 = args17578.length;
switch (G__17580) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17578.length)].join('')));

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
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__){
return (function (state_17750){
var state_val_17751 = (state_17750[(1)]);
if((state_val_17751 === (7))){
var inst_17746 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17752_17793 = state_17750__$1;
(statearr_17752_17793[(2)] = inst_17746);

(statearr_17752_17793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (20))){
var inst_17716 = (state_17750[(7)]);
var inst_17727 = (state_17750[(2)]);
var inst_17728 = cljs.core.next.call(null,inst_17716);
var inst_17702 = inst_17728;
var inst_17703 = null;
var inst_17704 = (0);
var inst_17705 = (0);
var state_17750__$1 = (function (){var statearr_17753 = state_17750;
(statearr_17753[(8)] = inst_17702);

(statearr_17753[(9)] = inst_17727);

(statearr_17753[(10)] = inst_17704);

(statearr_17753[(11)] = inst_17703);

(statearr_17753[(12)] = inst_17705);

return statearr_17753;
})();
var statearr_17754_17794 = state_17750__$1;
(statearr_17754_17794[(2)] = null);

(statearr_17754_17794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (1))){
var state_17750__$1 = state_17750;
var statearr_17755_17795 = state_17750__$1;
(statearr_17755_17795[(2)] = null);

(statearr_17755_17795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (4))){
var inst_17691 = (state_17750[(13)]);
var inst_17691__$1 = (state_17750[(2)]);
var inst_17692 = (inst_17691__$1 == null);
var state_17750__$1 = (function (){var statearr_17756 = state_17750;
(statearr_17756[(13)] = inst_17691__$1);

return statearr_17756;
})();
if(cljs.core.truth_(inst_17692)){
var statearr_17757_17796 = state_17750__$1;
(statearr_17757_17796[(1)] = (5));

} else {
var statearr_17758_17797 = state_17750__$1;
(statearr_17758_17797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (15))){
var state_17750__$1 = state_17750;
var statearr_17762_17798 = state_17750__$1;
(statearr_17762_17798[(2)] = null);

(statearr_17762_17798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (21))){
var state_17750__$1 = state_17750;
var statearr_17763_17799 = state_17750__$1;
(statearr_17763_17799[(2)] = null);

(statearr_17763_17799[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (13))){
var inst_17702 = (state_17750[(8)]);
var inst_17704 = (state_17750[(10)]);
var inst_17703 = (state_17750[(11)]);
var inst_17705 = (state_17750[(12)]);
var inst_17712 = (state_17750[(2)]);
var inst_17713 = (inst_17705 + (1));
var tmp17759 = inst_17702;
var tmp17760 = inst_17704;
var tmp17761 = inst_17703;
var inst_17702__$1 = tmp17759;
var inst_17703__$1 = tmp17761;
var inst_17704__$1 = tmp17760;
var inst_17705__$1 = inst_17713;
var state_17750__$1 = (function (){var statearr_17764 = state_17750;
(statearr_17764[(8)] = inst_17702__$1);

(statearr_17764[(10)] = inst_17704__$1);

(statearr_17764[(11)] = inst_17703__$1);

(statearr_17764[(12)] = inst_17705__$1);

(statearr_17764[(14)] = inst_17712);

return statearr_17764;
})();
var statearr_17765_17800 = state_17750__$1;
(statearr_17765_17800[(2)] = null);

(statearr_17765_17800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (22))){
var state_17750__$1 = state_17750;
var statearr_17766_17801 = state_17750__$1;
(statearr_17766_17801[(2)] = null);

(statearr_17766_17801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (6))){
var inst_17691 = (state_17750[(13)]);
var inst_17700 = f.call(null,inst_17691);
var inst_17701 = cljs.core.seq.call(null,inst_17700);
var inst_17702 = inst_17701;
var inst_17703 = null;
var inst_17704 = (0);
var inst_17705 = (0);
var state_17750__$1 = (function (){var statearr_17767 = state_17750;
(statearr_17767[(8)] = inst_17702);

(statearr_17767[(10)] = inst_17704);

(statearr_17767[(11)] = inst_17703);

(statearr_17767[(12)] = inst_17705);

return statearr_17767;
})();
var statearr_17768_17802 = state_17750__$1;
(statearr_17768_17802[(2)] = null);

(statearr_17768_17802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (17))){
var inst_17716 = (state_17750[(7)]);
var inst_17720 = cljs.core.chunk_first.call(null,inst_17716);
var inst_17721 = cljs.core.chunk_rest.call(null,inst_17716);
var inst_17722 = cljs.core.count.call(null,inst_17720);
var inst_17702 = inst_17721;
var inst_17703 = inst_17720;
var inst_17704 = inst_17722;
var inst_17705 = (0);
var state_17750__$1 = (function (){var statearr_17769 = state_17750;
(statearr_17769[(8)] = inst_17702);

(statearr_17769[(10)] = inst_17704);

(statearr_17769[(11)] = inst_17703);

(statearr_17769[(12)] = inst_17705);

return statearr_17769;
})();
var statearr_17770_17803 = state_17750__$1;
(statearr_17770_17803[(2)] = null);

(statearr_17770_17803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (3))){
var inst_17748 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17750__$1,inst_17748);
} else {
if((state_val_17751 === (12))){
var inst_17736 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17771_17804 = state_17750__$1;
(statearr_17771_17804[(2)] = inst_17736);

(statearr_17771_17804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (2))){
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17750__$1,(4),in$);
} else {
if((state_val_17751 === (23))){
var inst_17744 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17772_17805 = state_17750__$1;
(statearr_17772_17805[(2)] = inst_17744);

(statearr_17772_17805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (19))){
var inst_17731 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17773_17806 = state_17750__$1;
(statearr_17773_17806[(2)] = inst_17731);

(statearr_17773_17806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (11))){
var inst_17702 = (state_17750[(8)]);
var inst_17716 = (state_17750[(7)]);
var inst_17716__$1 = cljs.core.seq.call(null,inst_17702);
var state_17750__$1 = (function (){var statearr_17774 = state_17750;
(statearr_17774[(7)] = inst_17716__$1);

return statearr_17774;
})();
if(inst_17716__$1){
var statearr_17775_17807 = state_17750__$1;
(statearr_17775_17807[(1)] = (14));

} else {
var statearr_17776_17808 = state_17750__$1;
(statearr_17776_17808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (9))){
var inst_17738 = (state_17750[(2)]);
var inst_17739 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17750__$1 = (function (){var statearr_17777 = state_17750;
(statearr_17777[(15)] = inst_17738);

return statearr_17777;
})();
if(cljs.core.truth_(inst_17739)){
var statearr_17778_17809 = state_17750__$1;
(statearr_17778_17809[(1)] = (21));

} else {
var statearr_17779_17810 = state_17750__$1;
(statearr_17779_17810[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (5))){
var inst_17694 = cljs.core.async.close_BANG_.call(null,out);
var state_17750__$1 = state_17750;
var statearr_17780_17811 = state_17750__$1;
(statearr_17780_17811[(2)] = inst_17694);

(statearr_17780_17811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (14))){
var inst_17716 = (state_17750[(7)]);
var inst_17718 = cljs.core.chunked_seq_QMARK_.call(null,inst_17716);
var state_17750__$1 = state_17750;
if(inst_17718){
var statearr_17781_17812 = state_17750__$1;
(statearr_17781_17812[(1)] = (17));

} else {
var statearr_17782_17813 = state_17750__$1;
(statearr_17782_17813[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (16))){
var inst_17734 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17783_17814 = state_17750__$1;
(statearr_17783_17814[(2)] = inst_17734);

(statearr_17783_17814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (10))){
var inst_17703 = (state_17750[(11)]);
var inst_17705 = (state_17750[(12)]);
var inst_17710 = cljs.core._nth.call(null,inst_17703,inst_17705);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17750__$1,(13),out,inst_17710);
} else {
if((state_val_17751 === (18))){
var inst_17716 = (state_17750[(7)]);
var inst_17725 = cljs.core.first.call(null,inst_17716);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17750__$1,(20),out,inst_17725);
} else {
if((state_val_17751 === (8))){
var inst_17704 = (state_17750[(10)]);
var inst_17705 = (state_17750[(12)]);
var inst_17707 = (inst_17705 < inst_17704);
var inst_17708 = inst_17707;
var state_17750__$1 = state_17750;
if(cljs.core.truth_(inst_17708)){
var statearr_17784_17815 = state_17750__$1;
(statearr_17784_17815[(1)] = (10));

} else {
var statearr_17785_17816 = state_17750__$1;
(statearr_17785_17816[(1)] = (11));

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
});})(c__15259__auto__))
;
return ((function (switch__15147__auto__,c__15259__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15148__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15148__auto____0 = (function (){
var statearr_17789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17789[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15148__auto__);

(statearr_17789[(1)] = (1));

return statearr_17789;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15148__auto____1 = (function (state_17750){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17790){if((e17790 instanceof Object)){
var ex__15151__auto__ = e17790;
var statearr_17791_17817 = state_17750;
(statearr_17791_17817[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17818 = state_17750;
state_17750 = G__17818;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15148__auto__ = function(state_17750){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15148__auto____1.call(this,state_17750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15148__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15148__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__))
})();
var state__15261__auto__ = (function (){var statearr_17792 = f__15260__auto__.call(null);
(statearr_17792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_17792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__))
);

return c__15259__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17819 = [];
var len__9613__auto___17822 = arguments.length;
var i__9614__auto___17823 = (0);
while(true){
if((i__9614__auto___17823 < len__9613__auto___17822)){
args17819.push((arguments[i__9614__auto___17823]));

var G__17824 = (i__9614__auto___17823 + (1));
i__9614__auto___17823 = G__17824;
continue;
} else {
}
break;
}

var G__17821 = args17819.length;
switch (G__17821) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17819.length)].join('')));

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
var args17826 = [];
var len__9613__auto___17829 = arguments.length;
var i__9614__auto___17830 = (0);
while(true){
if((i__9614__auto___17830 < len__9613__auto___17829)){
args17826.push((arguments[i__9614__auto___17830]));

var G__17831 = (i__9614__auto___17830 + (1));
i__9614__auto___17830 = G__17831;
continue;
} else {
}
break;
}

var G__17828 = args17826.length;
switch (G__17828) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17826.length)].join('')));

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
var args17833 = [];
var len__9613__auto___17884 = arguments.length;
var i__9614__auto___17885 = (0);
while(true){
if((i__9614__auto___17885 < len__9613__auto___17884)){
args17833.push((arguments[i__9614__auto___17885]));

var G__17886 = (i__9614__auto___17885 + (1));
i__9614__auto___17885 = G__17886;
continue;
} else {
}
break;
}

var G__17835 = args17833.length;
switch (G__17835) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17833.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15259__auto___17888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17888,out){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17888,out){
return (function (state_17859){
var state_val_17860 = (state_17859[(1)]);
if((state_val_17860 === (7))){
var inst_17854 = (state_17859[(2)]);
var state_17859__$1 = state_17859;
var statearr_17861_17889 = state_17859__$1;
(statearr_17861_17889[(2)] = inst_17854);

(statearr_17861_17889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (1))){
var inst_17836 = null;
var state_17859__$1 = (function (){var statearr_17862 = state_17859;
(statearr_17862[(7)] = inst_17836);

return statearr_17862;
})();
var statearr_17863_17890 = state_17859__$1;
(statearr_17863_17890[(2)] = null);

(statearr_17863_17890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (4))){
var inst_17839 = (state_17859[(8)]);
var inst_17839__$1 = (state_17859[(2)]);
var inst_17840 = (inst_17839__$1 == null);
var inst_17841 = cljs.core.not.call(null,inst_17840);
var state_17859__$1 = (function (){var statearr_17864 = state_17859;
(statearr_17864[(8)] = inst_17839__$1);

return statearr_17864;
})();
if(inst_17841){
var statearr_17865_17891 = state_17859__$1;
(statearr_17865_17891[(1)] = (5));

} else {
var statearr_17866_17892 = state_17859__$1;
(statearr_17866_17892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (6))){
var state_17859__$1 = state_17859;
var statearr_17867_17893 = state_17859__$1;
(statearr_17867_17893[(2)] = null);

(statearr_17867_17893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (3))){
var inst_17856 = (state_17859[(2)]);
var inst_17857 = cljs.core.async.close_BANG_.call(null,out);
var state_17859__$1 = (function (){var statearr_17868 = state_17859;
(statearr_17868[(9)] = inst_17856);

return statearr_17868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17859__$1,inst_17857);
} else {
if((state_val_17860 === (2))){
var state_17859__$1 = state_17859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17859__$1,(4),ch);
} else {
if((state_val_17860 === (11))){
var inst_17839 = (state_17859[(8)]);
var inst_17848 = (state_17859[(2)]);
var inst_17836 = inst_17839;
var state_17859__$1 = (function (){var statearr_17869 = state_17859;
(statearr_17869[(7)] = inst_17836);

(statearr_17869[(10)] = inst_17848);

return statearr_17869;
})();
var statearr_17870_17894 = state_17859__$1;
(statearr_17870_17894[(2)] = null);

(statearr_17870_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (9))){
var inst_17839 = (state_17859[(8)]);
var state_17859__$1 = state_17859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17859__$1,(11),out,inst_17839);
} else {
if((state_val_17860 === (5))){
var inst_17836 = (state_17859[(7)]);
var inst_17839 = (state_17859[(8)]);
var inst_17843 = cljs.core._EQ_.call(null,inst_17839,inst_17836);
var state_17859__$1 = state_17859;
if(inst_17843){
var statearr_17872_17895 = state_17859__$1;
(statearr_17872_17895[(1)] = (8));

} else {
var statearr_17873_17896 = state_17859__$1;
(statearr_17873_17896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (10))){
var inst_17851 = (state_17859[(2)]);
var state_17859__$1 = state_17859;
var statearr_17874_17897 = state_17859__$1;
(statearr_17874_17897[(2)] = inst_17851);

(statearr_17874_17897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (8))){
var inst_17836 = (state_17859[(7)]);
var tmp17871 = inst_17836;
var inst_17836__$1 = tmp17871;
var state_17859__$1 = (function (){var statearr_17875 = state_17859;
(statearr_17875[(7)] = inst_17836__$1);

return statearr_17875;
})();
var statearr_17876_17898 = state_17859__$1;
(statearr_17876_17898[(2)] = null);

(statearr_17876_17898[(1)] = (2));


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
});})(c__15259__auto___17888,out))
;
return ((function (switch__15147__auto__,c__15259__auto___17888,out){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17880[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17880[(1)] = (1));

return statearr_17880;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17859){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17881){if((e17881 instanceof Object)){
var ex__15151__auto__ = e17881;
var statearr_17882_17899 = state_17859;
(statearr_17882_17899[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17900 = state_17859;
state_17859 = G__17900;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17888,out))
})();
var state__15261__auto__ = (function (){var statearr_17883 = f__15260__auto__.call(null);
(statearr_17883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17888);

return statearr_17883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17888,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17901 = [];
var len__9613__auto___17971 = arguments.length;
var i__9614__auto___17972 = (0);
while(true){
if((i__9614__auto___17972 < len__9613__auto___17971)){
args17901.push((arguments[i__9614__auto___17972]));

var G__17973 = (i__9614__auto___17972 + (1));
i__9614__auto___17972 = G__17973;
continue;
} else {
}
break;
}

var G__17903 = args17901.length;
switch (G__17903) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17901.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15259__auto___17975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___17975,out){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___17975,out){
return (function (state_17941){
var state_val_17942 = (state_17941[(1)]);
if((state_val_17942 === (7))){
var inst_17937 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17943_17976 = state_17941__$1;
(statearr_17943_17976[(2)] = inst_17937);

(statearr_17943_17976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (1))){
var inst_17904 = (new Array(n));
var inst_17905 = inst_17904;
var inst_17906 = (0);
var state_17941__$1 = (function (){var statearr_17944 = state_17941;
(statearr_17944[(7)] = inst_17906);

(statearr_17944[(8)] = inst_17905);

return statearr_17944;
})();
var statearr_17945_17977 = state_17941__$1;
(statearr_17945_17977[(2)] = null);

(statearr_17945_17977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (4))){
var inst_17909 = (state_17941[(9)]);
var inst_17909__$1 = (state_17941[(2)]);
var inst_17910 = (inst_17909__$1 == null);
var inst_17911 = cljs.core.not.call(null,inst_17910);
var state_17941__$1 = (function (){var statearr_17946 = state_17941;
(statearr_17946[(9)] = inst_17909__$1);

return statearr_17946;
})();
if(inst_17911){
var statearr_17947_17978 = state_17941__$1;
(statearr_17947_17978[(1)] = (5));

} else {
var statearr_17948_17979 = state_17941__$1;
(statearr_17948_17979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (15))){
var inst_17931 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17949_17980 = state_17941__$1;
(statearr_17949_17980[(2)] = inst_17931);

(statearr_17949_17980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (13))){
var state_17941__$1 = state_17941;
var statearr_17950_17981 = state_17941__$1;
(statearr_17950_17981[(2)] = null);

(statearr_17950_17981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (6))){
var inst_17906 = (state_17941[(7)]);
var inst_17927 = (inst_17906 > (0));
var state_17941__$1 = state_17941;
if(cljs.core.truth_(inst_17927)){
var statearr_17951_17982 = state_17941__$1;
(statearr_17951_17982[(1)] = (12));

} else {
var statearr_17952_17983 = state_17941__$1;
(statearr_17952_17983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (3))){
var inst_17939 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17941__$1,inst_17939);
} else {
if((state_val_17942 === (12))){
var inst_17905 = (state_17941[(8)]);
var inst_17929 = cljs.core.vec.call(null,inst_17905);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17941__$1,(15),out,inst_17929);
} else {
if((state_val_17942 === (2))){
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17941__$1,(4),ch);
} else {
if((state_val_17942 === (11))){
var inst_17921 = (state_17941[(2)]);
var inst_17922 = (new Array(n));
var inst_17905 = inst_17922;
var inst_17906 = (0);
var state_17941__$1 = (function (){var statearr_17953 = state_17941;
(statearr_17953[(7)] = inst_17906);

(statearr_17953[(10)] = inst_17921);

(statearr_17953[(8)] = inst_17905);

return statearr_17953;
})();
var statearr_17954_17984 = state_17941__$1;
(statearr_17954_17984[(2)] = null);

(statearr_17954_17984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (9))){
var inst_17905 = (state_17941[(8)]);
var inst_17919 = cljs.core.vec.call(null,inst_17905);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17941__$1,(11),out,inst_17919);
} else {
if((state_val_17942 === (5))){
var inst_17906 = (state_17941[(7)]);
var inst_17905 = (state_17941[(8)]);
var inst_17909 = (state_17941[(9)]);
var inst_17914 = (state_17941[(11)]);
var inst_17913 = (inst_17905[inst_17906] = inst_17909);
var inst_17914__$1 = (inst_17906 + (1));
var inst_17915 = (inst_17914__$1 < n);
var state_17941__$1 = (function (){var statearr_17955 = state_17941;
(statearr_17955[(12)] = inst_17913);

(statearr_17955[(11)] = inst_17914__$1);

return statearr_17955;
})();
if(cljs.core.truth_(inst_17915)){
var statearr_17956_17985 = state_17941__$1;
(statearr_17956_17985[(1)] = (8));

} else {
var statearr_17957_17986 = state_17941__$1;
(statearr_17957_17986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (14))){
var inst_17934 = (state_17941[(2)]);
var inst_17935 = cljs.core.async.close_BANG_.call(null,out);
var state_17941__$1 = (function (){var statearr_17959 = state_17941;
(statearr_17959[(13)] = inst_17934);

return statearr_17959;
})();
var statearr_17960_17987 = state_17941__$1;
(statearr_17960_17987[(2)] = inst_17935);

(statearr_17960_17987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (10))){
var inst_17925 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17961_17988 = state_17941__$1;
(statearr_17961_17988[(2)] = inst_17925);

(statearr_17961_17988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (8))){
var inst_17905 = (state_17941[(8)]);
var inst_17914 = (state_17941[(11)]);
var tmp17958 = inst_17905;
var inst_17905__$1 = tmp17958;
var inst_17906 = inst_17914;
var state_17941__$1 = (function (){var statearr_17962 = state_17941;
(statearr_17962[(7)] = inst_17906);

(statearr_17962[(8)] = inst_17905__$1);

return statearr_17962;
})();
var statearr_17963_17989 = state_17941__$1;
(statearr_17963_17989[(2)] = null);

(statearr_17963_17989[(1)] = (2));


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
});})(c__15259__auto___17975,out))
;
return ((function (switch__15147__auto__,c__15259__auto___17975,out){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_17967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17967[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_17967[(1)] = (1));

return statearr_17967;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_17941){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_17941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e17968){if((e17968 instanceof Object)){
var ex__15151__auto__ = e17968;
var statearr_17969_17990 = state_17941;
(statearr_17969_17990[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17991 = state_17941;
state_17941 = G__17991;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_17941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_17941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___17975,out))
})();
var state__15261__auto__ = (function (){var statearr_17970 = f__15260__auto__.call(null);
(statearr_17970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___17975);

return statearr_17970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___17975,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17992 = [];
var len__9613__auto___18066 = arguments.length;
var i__9614__auto___18067 = (0);
while(true){
if((i__9614__auto___18067 < len__9613__auto___18066)){
args17992.push((arguments[i__9614__auto___18067]));

var G__18068 = (i__9614__auto___18067 + (1));
i__9614__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var G__17994 = args17992.length;
switch (G__17994) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17992.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15259__auto___18070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___18070,out){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___18070,out){
return (function (state_18036){
var state_val_18037 = (state_18036[(1)]);
if((state_val_18037 === (7))){
var inst_18032 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18038_18071 = state_18036__$1;
(statearr_18038_18071[(2)] = inst_18032);

(statearr_18038_18071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (1))){
var inst_17995 = [];
var inst_17996 = inst_17995;
var inst_17997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18036__$1 = (function (){var statearr_18039 = state_18036;
(statearr_18039[(7)] = inst_17997);

(statearr_18039[(8)] = inst_17996);

return statearr_18039;
})();
var statearr_18040_18072 = state_18036__$1;
(statearr_18040_18072[(2)] = null);

(statearr_18040_18072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (4))){
var inst_18000 = (state_18036[(9)]);
var inst_18000__$1 = (state_18036[(2)]);
var inst_18001 = (inst_18000__$1 == null);
var inst_18002 = cljs.core.not.call(null,inst_18001);
var state_18036__$1 = (function (){var statearr_18041 = state_18036;
(statearr_18041[(9)] = inst_18000__$1);

return statearr_18041;
})();
if(inst_18002){
var statearr_18042_18073 = state_18036__$1;
(statearr_18042_18073[(1)] = (5));

} else {
var statearr_18043_18074 = state_18036__$1;
(statearr_18043_18074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (15))){
var inst_18026 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18044_18075 = state_18036__$1;
(statearr_18044_18075[(2)] = inst_18026);

(statearr_18044_18075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (13))){
var state_18036__$1 = state_18036;
var statearr_18045_18076 = state_18036__$1;
(statearr_18045_18076[(2)] = null);

(statearr_18045_18076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (6))){
var inst_17996 = (state_18036[(8)]);
var inst_18021 = inst_17996.length;
var inst_18022 = (inst_18021 > (0));
var state_18036__$1 = state_18036;
if(cljs.core.truth_(inst_18022)){
var statearr_18046_18077 = state_18036__$1;
(statearr_18046_18077[(1)] = (12));

} else {
var statearr_18047_18078 = state_18036__$1;
(statearr_18047_18078[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (3))){
var inst_18034 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18036__$1,inst_18034);
} else {
if((state_val_18037 === (12))){
var inst_17996 = (state_18036[(8)]);
var inst_18024 = cljs.core.vec.call(null,inst_17996);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18036__$1,(15),out,inst_18024);
} else {
if((state_val_18037 === (2))){
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18036__$1,(4),ch);
} else {
if((state_val_18037 === (11))){
var inst_18000 = (state_18036[(9)]);
var inst_18004 = (state_18036[(10)]);
var inst_18014 = (state_18036[(2)]);
var inst_18015 = [];
var inst_18016 = inst_18015.push(inst_18000);
var inst_17996 = inst_18015;
var inst_17997 = inst_18004;
var state_18036__$1 = (function (){var statearr_18048 = state_18036;
(statearr_18048[(7)] = inst_17997);

(statearr_18048[(8)] = inst_17996);

(statearr_18048[(11)] = inst_18014);

(statearr_18048[(12)] = inst_18016);

return statearr_18048;
})();
var statearr_18049_18079 = state_18036__$1;
(statearr_18049_18079[(2)] = null);

(statearr_18049_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (9))){
var inst_17996 = (state_18036[(8)]);
var inst_18012 = cljs.core.vec.call(null,inst_17996);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18036__$1,(11),out,inst_18012);
} else {
if((state_val_18037 === (5))){
var inst_17997 = (state_18036[(7)]);
var inst_18000 = (state_18036[(9)]);
var inst_18004 = (state_18036[(10)]);
var inst_18004__$1 = f.call(null,inst_18000);
var inst_18005 = cljs.core._EQ_.call(null,inst_18004__$1,inst_17997);
var inst_18006 = cljs.core.keyword_identical_QMARK_.call(null,inst_17997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18007 = (inst_18005) || (inst_18006);
var state_18036__$1 = (function (){var statearr_18050 = state_18036;
(statearr_18050[(10)] = inst_18004__$1);

return statearr_18050;
})();
if(cljs.core.truth_(inst_18007)){
var statearr_18051_18080 = state_18036__$1;
(statearr_18051_18080[(1)] = (8));

} else {
var statearr_18052_18081 = state_18036__$1;
(statearr_18052_18081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (14))){
var inst_18029 = (state_18036[(2)]);
var inst_18030 = cljs.core.async.close_BANG_.call(null,out);
var state_18036__$1 = (function (){var statearr_18054 = state_18036;
(statearr_18054[(13)] = inst_18029);

return statearr_18054;
})();
var statearr_18055_18082 = state_18036__$1;
(statearr_18055_18082[(2)] = inst_18030);

(statearr_18055_18082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (10))){
var inst_18019 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18056_18083 = state_18036__$1;
(statearr_18056_18083[(2)] = inst_18019);

(statearr_18056_18083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (8))){
var inst_17996 = (state_18036[(8)]);
var inst_18000 = (state_18036[(9)]);
var inst_18004 = (state_18036[(10)]);
var inst_18009 = inst_17996.push(inst_18000);
var tmp18053 = inst_17996;
var inst_17996__$1 = tmp18053;
var inst_17997 = inst_18004;
var state_18036__$1 = (function (){var statearr_18057 = state_18036;
(statearr_18057[(7)] = inst_17997);

(statearr_18057[(8)] = inst_17996__$1);

(statearr_18057[(14)] = inst_18009);

return statearr_18057;
})();
var statearr_18058_18084 = state_18036__$1;
(statearr_18058_18084[(2)] = null);

(statearr_18058_18084[(1)] = (2));


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
});})(c__15259__auto___18070,out))
;
return ((function (switch__15147__auto__,c__15259__auto___18070,out){
return (function() {
var cljs$core$async$state_machine__15148__auto__ = null;
var cljs$core$async$state_machine__15148__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = cljs$core$async$state_machine__15148__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var cljs$core$async$state_machine__15148__auto____1 = (function (state_18036){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_18036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__15151__auto__ = e18063;
var statearr_18064_18085 = state_18036;
(statearr_18064_18085[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18086 = state_18036;
state_18036 = G__18086;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
cljs$core$async$state_machine__15148__auto__ = function(state_18036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15148__auto____1.call(this,state_18036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15148__auto____0;
cljs$core$async$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15148__auto____1;
return cljs$core$async$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___18070,out))
})();
var state__15261__auto__ = (function (){var statearr_18065 = f__15260__auto__.call(null);
(statearr_18065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___18070);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___18070,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map