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
var args26084 = [];
var len__20732__auto___26090 = arguments.length;
var i__20733__auto___26091 = (0);
while(true){
if((i__20733__auto___26091 < len__20732__auto___26090)){
args26084.push((arguments[i__20733__auto___26091]));

var G__26092 = (i__20733__auto___26091 + (1));
i__20733__auto___26091 = G__26092;
continue;
} else {
}
break;
}

var G__26086 = args26084.length;
switch (G__26086) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26084.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26087 = (function (f,blockable,meta26088){
this.f = f;
this.blockable = blockable;
this.meta26088 = meta26088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26089,meta26088__$1){
var self__ = this;
var _26089__$1 = this;
return (new cljs.core.async.t_cljs$core$async26087(self__.f,self__.blockable,meta26088__$1));
});

cljs.core.async.t_cljs$core$async26087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26089){
var self__ = this;
var _26089__$1 = this;
return self__.meta26088;
});

cljs.core.async.t_cljs$core$async26087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26088","meta26088",1703786740,null)], null);
});

cljs.core.async.t_cljs$core$async26087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26087";

cljs.core.async.t_cljs$core$async26087.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async26087");
});

cljs.core.async.__GT_t_cljs$core$async26087 = (function cljs$core$async$__GT_t_cljs$core$async26087(f__$1,blockable__$1,meta26088){
return (new cljs.core.async.t_cljs$core$async26087(f__$1,blockable__$1,meta26088));
});

}

return (new cljs.core.async.t_cljs$core$async26087(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26096 = [];
var len__20732__auto___26099 = arguments.length;
var i__20733__auto___26100 = (0);
while(true){
if((i__20733__auto___26100 < len__20732__auto___26099)){
args26096.push((arguments[i__20733__auto___26100]));

var G__26101 = (i__20733__auto___26100 + (1));
i__20733__auto___26100 = G__26101;
continue;
} else {
}
break;
}

var G__26098 = args26096.length;
switch (G__26098) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26096.length)].join('')));

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
var args26103 = [];
var len__20732__auto___26106 = arguments.length;
var i__20733__auto___26107 = (0);
while(true){
if((i__20733__auto___26107 < len__20732__auto___26106)){
args26103.push((arguments[i__20733__auto___26107]));

var G__26108 = (i__20733__auto___26107 + (1));
i__20733__auto___26107 = G__26108;
continue;
} else {
}
break;
}

var G__26105 = args26103.length;
switch (G__26105) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26103.length)].join('')));

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
var args26110 = [];
var len__20732__auto___26113 = arguments.length;
var i__20733__auto___26114 = (0);
while(true){
if((i__20733__auto___26114 < len__20732__auto___26113)){
args26110.push((arguments[i__20733__auto___26114]));

var G__26115 = (i__20733__auto___26114 + (1));
i__20733__auto___26114 = G__26115;
continue;
} else {
}
break;
}

var G__26112 = args26110.length;
switch (G__26112) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26110.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26117 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26117);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26117,ret){
return (function (){
return fn1.call(null,val_26117);
});})(val_26117,ret))
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
var args26118 = [];
var len__20732__auto___26121 = arguments.length;
var i__20733__auto___26122 = (0);
while(true){
if((i__20733__auto___26122 < len__20732__auto___26121)){
args26118.push((arguments[i__20733__auto___26122]));

var G__26123 = (i__20733__auto___26122 + (1));
i__20733__auto___26122 = G__26123;
continue;
} else {
}
break;
}

var G__26120 = args26118.length;
switch (G__26120) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26118.length)].join('')));

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
var n__20542__auto___26125 = n;
var x_26126 = (0);
while(true){
if((x_26126 < n__20542__auto___26125)){
(a[x_26126] = (0));

var G__26127 = (x_26126 + (1));
x_26126 = G__26127;
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

var G__26128 = (i + (1));
i = G__26128;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26132 = (function (flag,meta26133){
this.flag = flag;
this.meta26133 = meta26133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26134,meta26133__$1){
var self__ = this;
var _26134__$1 = this;
return (new cljs.core.async.t_cljs$core$async26132(self__.flag,meta26133__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26134){
var self__ = this;
var _26134__$1 = this;
return self__.meta26133;
});})(flag))
;

cljs.core.async.t_cljs$core$async26132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26132.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26133","meta26133",1871976892,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26132";

cljs.core.async.t_cljs$core$async26132.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async26132");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26132 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26132(flag__$1,meta26133){
return (new cljs.core.async.t_cljs$core$async26132(flag__$1,meta26133));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26132(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26138 = (function (flag,cb,meta26139){
this.flag = flag;
this.cb = cb;
this.meta26139 = meta26139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26140,meta26139__$1){
var self__ = this;
var _26140__$1 = this;
return (new cljs.core.async.t_cljs$core$async26138(self__.flag,self__.cb,meta26139__$1));
});

cljs.core.async.t_cljs$core$async26138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26140){
var self__ = this;
var _26140__$1 = this;
return self__.meta26139;
});

cljs.core.async.t_cljs$core$async26138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26139","meta26139",208371649,null)], null);
});

cljs.core.async.t_cljs$core$async26138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26138";

cljs.core.async.t_cljs$core$async26138.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async26138");
});

cljs.core.async.__GT_t_cljs$core$async26138 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26138(flag__$1,cb__$1,meta26139){
return (new cljs.core.async.t_cljs$core$async26138(flag__$1,cb__$1,meta26139));
});

}

return (new cljs.core.async.t_cljs$core$async26138(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26141_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26141_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26142_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26142_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19624__auto__ = wport;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26143 = (i + (1));
i = G__26143;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19624__auto__ = ret;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19612__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19612__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19612__auto__;
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
var args__20739__auto__ = [];
var len__20732__auto___26149 = arguments.length;
var i__20733__auto___26150 = (0);
while(true){
if((i__20733__auto___26150 < len__20732__auto___26149)){
args__20739__auto__.push((arguments[i__20733__auto___26150]));

var G__26151 = (i__20733__auto___26150 + (1));
i__20733__auto___26150 = G__26151;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((1) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20740__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26146){
var map__26147 = p__26146;
var map__26147__$1 = ((((!((map__26147 == null)))?((((map__26147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26147):map__26147);
var opts = map__26147__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26144){
var G__26145 = cljs.core.first.call(null,seq26144);
var seq26144__$1 = cljs.core.next.call(null,seq26144);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26145,seq26144__$1);
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
var args26152 = [];
var len__20732__auto___26202 = arguments.length;
var i__20733__auto___26203 = (0);
while(true){
if((i__20733__auto___26203 < len__20732__auto___26202)){
args26152.push((arguments[i__20733__auto___26203]));

var G__26204 = (i__20733__auto___26203 + (1));
i__20733__auto___26203 = G__26204;
continue;
} else {
}
break;
}

var G__26154 = args26152.length;
switch (G__26154) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26152.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26039__auto___26206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___26206){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___26206){
return (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26180_26207 = state_26178__$1;
(statearr_26180_26207[(2)] = inst_26174);

(statearr_26180_26207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (1))){
var state_26178__$1 = state_26178;
var statearr_26181_26208 = state_26178__$1;
(statearr_26181_26208[(2)] = null);

(statearr_26181_26208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (4))){
var inst_26157 = (state_26178[(7)]);
var inst_26157__$1 = (state_26178[(2)]);
var inst_26158 = (inst_26157__$1 == null);
var state_26178__$1 = (function (){var statearr_26182 = state_26178;
(statearr_26182[(7)] = inst_26157__$1);

return statearr_26182;
})();
if(cljs.core.truth_(inst_26158)){
var statearr_26183_26209 = state_26178__$1;
(statearr_26183_26209[(1)] = (5));

} else {
var statearr_26184_26210 = state_26178__$1;
(statearr_26184_26210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (13))){
var state_26178__$1 = state_26178;
var statearr_26185_26211 = state_26178__$1;
(statearr_26185_26211[(2)] = null);

(statearr_26185_26211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (6))){
var inst_26157 = (state_26178[(7)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26178__$1,(11),to,inst_26157);
} else {
if((state_val_26179 === (3))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (12))){
var state_26178__$1 = state_26178;
var statearr_26186_26212 = state_26178__$1;
(statearr_26186_26212[(2)] = null);

(statearr_26186_26212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (2))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,(4),from);
} else {
if((state_val_26179 === (11))){
var inst_26167 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26167)){
var statearr_26187_26213 = state_26178__$1;
(statearr_26187_26213[(1)] = (12));

} else {
var statearr_26188_26214 = state_26178__$1;
(statearr_26188_26214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (9))){
var state_26178__$1 = state_26178;
var statearr_26189_26215 = state_26178__$1;
(statearr_26189_26215[(2)] = null);

(statearr_26189_26215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (5))){
var state_26178__$1 = state_26178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26190_26216 = state_26178__$1;
(statearr_26190_26216[(1)] = (8));

} else {
var statearr_26191_26217 = state_26178__$1;
(statearr_26191_26217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (14))){
var inst_26172 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26192_26218 = state_26178__$1;
(statearr_26192_26218[(2)] = inst_26172);

(statearr_26192_26218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (10))){
var inst_26164 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26193_26219 = state_26178__$1;
(statearr_26193_26219[(2)] = inst_26164);

(statearr_26193_26219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (8))){
var inst_26161 = cljs.core.async.close_BANG_.call(null,to);
var state_26178__$1 = state_26178;
var statearr_26194_26220 = state_26178__$1;
(statearr_26194_26220[(2)] = inst_26161);

(statearr_26194_26220[(1)] = (10));


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
});})(c__26039__auto___26206))
;
return ((function (switch__25927__auto__,c__26039__auto___26206){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_26198 = [null,null,null,null,null,null,null,null];
(statearr_26198[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_26198[(1)] = (1));

return statearr_26198;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_26178){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26199){if((e26199 instanceof Object)){
var ex__25931__auto__ = e26199;
var statearr_26200_26221 = state_26178;
(statearr_26200_26221[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26222 = state_26178;
state_26178 = G__26222;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___26206))
})();
var state__26041__auto__ = (function (){var statearr_26201 = f__26040__auto__.call(null);
(statearr_26201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___26206);

return statearr_26201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___26206))
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
return (function (p__26410){
var vec__26411 = p__26410;
var v = cljs.core.nth.call(null,vec__26411,(0),null);
var p = cljs.core.nth.call(null,vec__26411,(1),null);
var job = vec__26411;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26039__auto___26597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___26597,res,vec__26411,v,p,job,jobs,results){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___26597,res,vec__26411,v,p,job,jobs,results){
return (function (state_26418){
var state_val_26419 = (state_26418[(1)]);
if((state_val_26419 === (1))){
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26418__$1,(2),res,v);
} else {
if((state_val_26419 === (2))){
var inst_26415 = (state_26418[(2)]);
var inst_26416 = cljs.core.async.close_BANG_.call(null,res);
var state_26418__$1 = (function (){var statearr_26420 = state_26418;
(statearr_26420[(7)] = inst_26415);

return statearr_26420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26418__$1,inst_26416);
} else {
return null;
}
}
});})(c__26039__auto___26597,res,vec__26411,v,p,job,jobs,results))
;
return ((function (switch__25927__auto__,c__26039__auto___26597,res,vec__26411,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0 = (function (){
var statearr_26424 = [null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1 = (function (state_26418){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26425){if((e26425 instanceof Object)){
var ex__25931__auto__ = e26425;
var statearr_26426_26598 = state_26418;
(statearr_26426_26598[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26599 = state_26418;
state_26418 = G__26599;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = function(state_26418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1.call(this,state_26418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___26597,res,vec__26411,v,p,job,jobs,results))
})();
var state__26041__auto__ = (function (){var statearr_26427 = f__26040__auto__.call(null);
(statearr_26427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___26597);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___26597,res,vec__26411,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26428){
var vec__26429 = p__26428;
var v = cljs.core.nth.call(null,vec__26429,(0),null);
var p = cljs.core.nth.call(null,vec__26429,(1),null);
var job = vec__26429;
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
var n__20542__auto___26600 = n;
var __26601 = (0);
while(true){
if((__26601 < n__20542__auto___26600)){
var G__26432_26602 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26432_26602) {
case "compute":
var c__26039__auto___26604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26601,c__26039__auto___26604,G__26432_26602,n__20542__auto___26600,jobs,results,process,async){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (__26601,c__26039__auto___26604,G__26432_26602,n__20542__auto___26600,jobs,results,process,async){
return (function (state_26445){
var state_val_26446 = (state_26445[(1)]);
if((state_val_26446 === (1))){
var state_26445__$1 = state_26445;
var statearr_26447_26605 = state_26445__$1;
(statearr_26447_26605[(2)] = null);

(statearr_26447_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (2))){
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(4),jobs);
} else {
if((state_val_26446 === (3))){
var inst_26443 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26445__$1,inst_26443);
} else {
if((state_val_26446 === (4))){
var inst_26435 = (state_26445[(2)]);
var inst_26436 = process.call(null,inst_26435);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26436)){
var statearr_26448_26606 = state_26445__$1;
(statearr_26448_26606[(1)] = (5));

} else {
var statearr_26449_26607 = state_26445__$1;
(statearr_26449_26607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (5))){
var state_26445__$1 = state_26445;
var statearr_26450_26608 = state_26445__$1;
(statearr_26450_26608[(2)] = null);

(statearr_26450_26608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (6))){
var state_26445__$1 = state_26445;
var statearr_26451_26609 = state_26445__$1;
(statearr_26451_26609[(2)] = null);

(statearr_26451_26609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (7))){
var inst_26441 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26452_26610 = state_26445__$1;
(statearr_26452_26610[(2)] = inst_26441);

(statearr_26452_26610[(1)] = (3));


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
});})(__26601,c__26039__auto___26604,G__26432_26602,n__20542__auto___26600,jobs,results,process,async))
;
return ((function (__26601,switch__25927__auto__,c__26039__auto___26604,G__26432_26602,n__20542__auto___26600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0 = (function (){
var statearr_26456 = [null,null,null,null,null,null,null];
(statearr_26456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__);

(statearr_26456[(1)] = (1));

return statearr_26456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1 = (function (state_26445){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26457){if((e26457 instanceof Object)){
var ex__25931__auto__ = e26457;
var statearr_26458_26611 = state_26445;
(statearr_26458_26611[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26612 = state_26445;
state_26445 = G__26612;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = function(state_26445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1.call(this,state_26445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__;
})()
;})(__26601,switch__25927__auto__,c__26039__auto___26604,G__26432_26602,n__20542__auto___26600,jobs,results,process,async))
})();
var state__26041__auto__ = (function (){var statearr_26459 = f__26040__auto__.call(null);
(statearr_26459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___26604);

return statearr_26459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(__26601,c__26039__auto___26604,G__26432_26602,n__20542__auto___26600,jobs,results,process,async))
);


break;
case "async":
var c__26039__auto___26613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26601,c__26039__auto___26613,G__26432_26602,n__20542__auto___26600,jobs,results,process,async){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (__26601,c__26039__auto___26613,G__26432_26602,n__20542__auto___26600,jobs,results,process,async){
return (function (state_26472){
var state_val_26473 = (state_26472[(1)]);
if((state_val_26473 === (1))){
var state_26472__$1 = state_26472;
var statearr_26474_26614 = state_26472__$1;
(statearr_26474_26614[(2)] = null);

(statearr_26474_26614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (2))){
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26472__$1,(4),jobs);
} else {
if((state_val_26473 === (3))){
var inst_26470 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26472__$1,inst_26470);
} else {
if((state_val_26473 === (4))){
var inst_26462 = (state_26472[(2)]);
var inst_26463 = async.call(null,inst_26462);
var state_26472__$1 = state_26472;
if(cljs.core.truth_(inst_26463)){
var statearr_26475_26615 = state_26472__$1;
(statearr_26475_26615[(1)] = (5));

} else {
var statearr_26476_26616 = state_26472__$1;
(statearr_26476_26616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (5))){
var state_26472__$1 = state_26472;
var statearr_26477_26617 = state_26472__$1;
(statearr_26477_26617[(2)] = null);

(statearr_26477_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (6))){
var state_26472__$1 = state_26472;
var statearr_26478_26618 = state_26472__$1;
(statearr_26478_26618[(2)] = null);

(statearr_26478_26618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (7))){
var inst_26468 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
var statearr_26479_26619 = state_26472__$1;
(statearr_26479_26619[(2)] = inst_26468);

(statearr_26479_26619[(1)] = (3));


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
});})(__26601,c__26039__auto___26613,G__26432_26602,n__20542__auto___26600,jobs,results,process,async))
;
return ((function (__26601,switch__25927__auto__,c__26039__auto___26613,G__26432_26602,n__20542__auto___26600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0 = (function (){
var statearr_26483 = [null,null,null,null,null,null,null];
(statearr_26483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__);

(statearr_26483[(1)] = (1));

return statearr_26483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1 = (function (state_26472){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object)){
var ex__25931__auto__ = e26484;
var statearr_26485_26620 = state_26472;
(statearr_26485_26620[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26621 = state_26472;
state_26472 = G__26621;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__;
})()
;})(__26601,switch__25927__auto__,c__26039__auto___26613,G__26432_26602,n__20542__auto___26600,jobs,results,process,async))
})();
var state__26041__auto__ = (function (){var statearr_26486 = f__26040__auto__.call(null);
(statearr_26486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___26613);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(__26601,c__26039__auto___26613,G__26432_26602,n__20542__auto___26600,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26622 = (__26601 + (1));
__26601 = G__26622;
continue;
} else {
}
break;
}

var c__26039__auto___26623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___26623,jobs,results,process,async){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___26623,jobs,results,process,async){
return (function (state_26508){
var state_val_26509 = (state_26508[(1)]);
if((state_val_26509 === (1))){
var state_26508__$1 = state_26508;
var statearr_26510_26624 = state_26508__$1;
(statearr_26510_26624[(2)] = null);

(statearr_26510_26624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (2))){
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(4),from);
} else {
if((state_val_26509 === (3))){
var inst_26506 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26508__$1,inst_26506);
} else {
if((state_val_26509 === (4))){
var inst_26489 = (state_26508[(7)]);
var inst_26489__$1 = (state_26508[(2)]);
var inst_26490 = (inst_26489__$1 == null);
var state_26508__$1 = (function (){var statearr_26511 = state_26508;
(statearr_26511[(7)] = inst_26489__$1);

return statearr_26511;
})();
if(cljs.core.truth_(inst_26490)){
var statearr_26512_26625 = state_26508__$1;
(statearr_26512_26625[(1)] = (5));

} else {
var statearr_26513_26626 = state_26508__$1;
(statearr_26513_26626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (5))){
var inst_26492 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26508__$1 = state_26508;
var statearr_26514_26627 = state_26508__$1;
(statearr_26514_26627[(2)] = inst_26492);

(statearr_26514_26627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (6))){
var inst_26494 = (state_26508[(8)]);
var inst_26489 = (state_26508[(7)]);
var inst_26494__$1 = cljs.core.async.chan.call(null,(1));
var inst_26495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26496 = [inst_26489,inst_26494__$1];
var inst_26497 = (new cljs.core.PersistentVector(null,2,(5),inst_26495,inst_26496,null));
var state_26508__$1 = (function (){var statearr_26515 = state_26508;
(statearr_26515[(8)] = inst_26494__$1);

return statearr_26515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26508__$1,(8),jobs,inst_26497);
} else {
if((state_val_26509 === (7))){
var inst_26504 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26516_26628 = state_26508__$1;
(statearr_26516_26628[(2)] = inst_26504);

(statearr_26516_26628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (8))){
var inst_26494 = (state_26508[(8)]);
var inst_26499 = (state_26508[(2)]);
var state_26508__$1 = (function (){var statearr_26517 = state_26508;
(statearr_26517[(9)] = inst_26499);

return statearr_26517;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26508__$1,(9),results,inst_26494);
} else {
if((state_val_26509 === (9))){
var inst_26501 = (state_26508[(2)]);
var state_26508__$1 = (function (){var statearr_26518 = state_26508;
(statearr_26518[(10)] = inst_26501);

return statearr_26518;
})();
var statearr_26519_26629 = state_26508__$1;
(statearr_26519_26629[(2)] = null);

(statearr_26519_26629[(1)] = (2));


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
});})(c__26039__auto___26623,jobs,results,process,async))
;
return ((function (switch__25927__auto__,c__26039__auto___26623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0 = (function (){
var statearr_26523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__);

(statearr_26523[(1)] = (1));

return statearr_26523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1 = (function (state_26508){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26524){if((e26524 instanceof Object)){
var ex__25931__auto__ = e26524;
var statearr_26525_26630 = state_26508;
(statearr_26525_26630[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26631 = state_26508;
state_26508 = G__26631;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = function(state_26508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1.call(this,state_26508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___26623,jobs,results,process,async))
})();
var state__26041__auto__ = (function (){var statearr_26526 = f__26040__auto__.call(null);
(statearr_26526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___26623);

return statearr_26526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___26623,jobs,results,process,async))
);


var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__,jobs,results,process,async){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__,jobs,results,process,async){
return (function (state_26564){
var state_val_26565 = (state_26564[(1)]);
if((state_val_26565 === (7))){
var inst_26560 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26566_26632 = state_26564__$1;
(statearr_26566_26632[(2)] = inst_26560);

(statearr_26566_26632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (20))){
var state_26564__$1 = state_26564;
var statearr_26567_26633 = state_26564__$1;
(statearr_26567_26633[(2)] = null);

(statearr_26567_26633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (1))){
var state_26564__$1 = state_26564;
var statearr_26568_26634 = state_26564__$1;
(statearr_26568_26634[(2)] = null);

(statearr_26568_26634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (4))){
var inst_26529 = (state_26564[(7)]);
var inst_26529__$1 = (state_26564[(2)]);
var inst_26530 = (inst_26529__$1 == null);
var state_26564__$1 = (function (){var statearr_26569 = state_26564;
(statearr_26569[(7)] = inst_26529__$1);

return statearr_26569;
})();
if(cljs.core.truth_(inst_26530)){
var statearr_26570_26635 = state_26564__$1;
(statearr_26570_26635[(1)] = (5));

} else {
var statearr_26571_26636 = state_26564__$1;
(statearr_26571_26636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (15))){
var inst_26542 = (state_26564[(8)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26564__$1,(18),to,inst_26542);
} else {
if((state_val_26565 === (21))){
var inst_26555 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26572_26637 = state_26564__$1;
(statearr_26572_26637[(2)] = inst_26555);

(statearr_26572_26637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (13))){
var inst_26557 = (state_26564[(2)]);
var state_26564__$1 = (function (){var statearr_26573 = state_26564;
(statearr_26573[(9)] = inst_26557);

return statearr_26573;
})();
var statearr_26574_26638 = state_26564__$1;
(statearr_26574_26638[(2)] = null);

(statearr_26574_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (6))){
var inst_26529 = (state_26564[(7)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(11),inst_26529);
} else {
if((state_val_26565 === (17))){
var inst_26550 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
if(cljs.core.truth_(inst_26550)){
var statearr_26575_26639 = state_26564__$1;
(statearr_26575_26639[(1)] = (19));

} else {
var statearr_26576_26640 = state_26564__$1;
(statearr_26576_26640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (3))){
var inst_26562 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26564__$1,inst_26562);
} else {
if((state_val_26565 === (12))){
var inst_26539 = (state_26564[(10)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(14),inst_26539);
} else {
if((state_val_26565 === (2))){
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(4),results);
} else {
if((state_val_26565 === (19))){
var state_26564__$1 = state_26564;
var statearr_26577_26641 = state_26564__$1;
(statearr_26577_26641[(2)] = null);

(statearr_26577_26641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (11))){
var inst_26539 = (state_26564[(2)]);
var state_26564__$1 = (function (){var statearr_26578 = state_26564;
(statearr_26578[(10)] = inst_26539);

return statearr_26578;
})();
var statearr_26579_26642 = state_26564__$1;
(statearr_26579_26642[(2)] = null);

(statearr_26579_26642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (9))){
var state_26564__$1 = state_26564;
var statearr_26580_26643 = state_26564__$1;
(statearr_26580_26643[(2)] = null);

(statearr_26580_26643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (5))){
var state_26564__$1 = state_26564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26581_26644 = state_26564__$1;
(statearr_26581_26644[(1)] = (8));

} else {
var statearr_26582_26645 = state_26564__$1;
(statearr_26582_26645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (14))){
var inst_26542 = (state_26564[(8)]);
var inst_26544 = (state_26564[(11)]);
var inst_26542__$1 = (state_26564[(2)]);
var inst_26543 = (inst_26542__$1 == null);
var inst_26544__$1 = cljs.core.not.call(null,inst_26543);
var state_26564__$1 = (function (){var statearr_26583 = state_26564;
(statearr_26583[(8)] = inst_26542__$1);

(statearr_26583[(11)] = inst_26544__$1);

return statearr_26583;
})();
if(inst_26544__$1){
var statearr_26584_26646 = state_26564__$1;
(statearr_26584_26646[(1)] = (15));

} else {
var statearr_26585_26647 = state_26564__$1;
(statearr_26585_26647[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (16))){
var inst_26544 = (state_26564[(11)]);
var state_26564__$1 = state_26564;
var statearr_26586_26648 = state_26564__$1;
(statearr_26586_26648[(2)] = inst_26544);

(statearr_26586_26648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (10))){
var inst_26536 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26587_26649 = state_26564__$1;
(statearr_26587_26649[(2)] = inst_26536);

(statearr_26587_26649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (18))){
var inst_26547 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26588_26650 = state_26564__$1;
(statearr_26588_26650[(2)] = inst_26547);

(statearr_26588_26650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (8))){
var inst_26533 = cljs.core.async.close_BANG_.call(null,to);
var state_26564__$1 = state_26564;
var statearr_26589_26651 = state_26564__$1;
(statearr_26589_26651[(2)] = inst_26533);

(statearr_26589_26651[(1)] = (10));


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
});})(c__26039__auto__,jobs,results,process,async))
;
return ((function (switch__25927__auto__,c__26039__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0 = (function (){
var statearr_26593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__);

(statearr_26593[(1)] = (1));

return statearr_26593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1 = (function (state_26564){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26594){if((e26594 instanceof Object)){
var ex__25931__auto__ = e26594;
var statearr_26595_26652 = state_26564;
(statearr_26595_26652[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26653 = state_26564;
state_26564 = G__26653;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__ = function(state_26564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1.call(this,state_26564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__,jobs,results,process,async))
})();
var state__26041__auto__ = (function (){var statearr_26596 = f__26040__auto__.call(null);
(statearr_26596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_26596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__,jobs,results,process,async))
);

return c__26039__auto__;
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
var args26654 = [];
var len__20732__auto___26657 = arguments.length;
var i__20733__auto___26658 = (0);
while(true){
if((i__20733__auto___26658 < len__20732__auto___26657)){
args26654.push((arguments[i__20733__auto___26658]));

var G__26659 = (i__20733__auto___26658 + (1));
i__20733__auto___26658 = G__26659;
continue;
} else {
}
break;
}

var G__26656 = args26654.length;
switch (G__26656) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26654.length)].join('')));

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
var args26661 = [];
var len__20732__auto___26664 = arguments.length;
var i__20733__auto___26665 = (0);
while(true){
if((i__20733__auto___26665 < len__20732__auto___26664)){
args26661.push((arguments[i__20733__auto___26665]));

var G__26666 = (i__20733__auto___26665 + (1));
i__20733__auto___26665 = G__26666;
continue;
} else {
}
break;
}

var G__26663 = args26661.length;
switch (G__26663) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26661.length)].join('')));

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
var args26668 = [];
var len__20732__auto___26721 = arguments.length;
var i__20733__auto___26722 = (0);
while(true){
if((i__20733__auto___26722 < len__20732__auto___26721)){
args26668.push((arguments[i__20733__auto___26722]));

var G__26723 = (i__20733__auto___26722 + (1));
i__20733__auto___26722 = G__26723;
continue;
} else {
}
break;
}

var G__26670 = args26668.length;
switch (G__26670) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26668.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26039__auto___26725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___26725,tc,fc){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___26725,tc,fc){
return (function (state_26696){
var state_val_26697 = (state_26696[(1)]);
if((state_val_26697 === (7))){
var inst_26692 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26698_26726 = state_26696__$1;
(statearr_26698_26726[(2)] = inst_26692);

(statearr_26698_26726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (1))){
var state_26696__$1 = state_26696;
var statearr_26699_26727 = state_26696__$1;
(statearr_26699_26727[(2)] = null);

(statearr_26699_26727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (4))){
var inst_26673 = (state_26696[(7)]);
var inst_26673__$1 = (state_26696[(2)]);
var inst_26674 = (inst_26673__$1 == null);
var state_26696__$1 = (function (){var statearr_26700 = state_26696;
(statearr_26700[(7)] = inst_26673__$1);

return statearr_26700;
})();
if(cljs.core.truth_(inst_26674)){
var statearr_26701_26728 = state_26696__$1;
(statearr_26701_26728[(1)] = (5));

} else {
var statearr_26702_26729 = state_26696__$1;
(statearr_26702_26729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (13))){
var state_26696__$1 = state_26696;
var statearr_26703_26730 = state_26696__$1;
(statearr_26703_26730[(2)] = null);

(statearr_26703_26730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (6))){
var inst_26673 = (state_26696[(7)]);
var inst_26679 = p.call(null,inst_26673);
var state_26696__$1 = state_26696;
if(cljs.core.truth_(inst_26679)){
var statearr_26704_26731 = state_26696__$1;
(statearr_26704_26731[(1)] = (9));

} else {
var statearr_26705_26732 = state_26696__$1;
(statearr_26705_26732[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (3))){
var inst_26694 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26696__$1,inst_26694);
} else {
if((state_val_26697 === (12))){
var state_26696__$1 = state_26696;
var statearr_26706_26733 = state_26696__$1;
(statearr_26706_26733[(2)] = null);

(statearr_26706_26733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (2))){
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26696__$1,(4),ch);
} else {
if((state_val_26697 === (11))){
var inst_26673 = (state_26696[(7)]);
var inst_26683 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26696__$1,(8),inst_26683,inst_26673);
} else {
if((state_val_26697 === (9))){
var state_26696__$1 = state_26696;
var statearr_26707_26734 = state_26696__$1;
(statearr_26707_26734[(2)] = tc);

(statearr_26707_26734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (5))){
var inst_26676 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26677 = cljs.core.async.close_BANG_.call(null,fc);
var state_26696__$1 = (function (){var statearr_26708 = state_26696;
(statearr_26708[(8)] = inst_26676);

return statearr_26708;
})();
var statearr_26709_26735 = state_26696__$1;
(statearr_26709_26735[(2)] = inst_26677);

(statearr_26709_26735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (14))){
var inst_26690 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
var statearr_26710_26736 = state_26696__$1;
(statearr_26710_26736[(2)] = inst_26690);

(statearr_26710_26736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (10))){
var state_26696__$1 = state_26696;
var statearr_26711_26737 = state_26696__$1;
(statearr_26711_26737[(2)] = fc);

(statearr_26711_26737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26697 === (8))){
var inst_26685 = (state_26696[(2)]);
var state_26696__$1 = state_26696;
if(cljs.core.truth_(inst_26685)){
var statearr_26712_26738 = state_26696__$1;
(statearr_26712_26738[(1)] = (12));

} else {
var statearr_26713_26739 = state_26696__$1;
(statearr_26713_26739[(1)] = (13));

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
});})(c__26039__auto___26725,tc,fc))
;
return ((function (switch__25927__auto__,c__26039__auto___26725,tc,fc){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_26717 = [null,null,null,null,null,null,null,null,null];
(statearr_26717[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_26717[(1)] = (1));

return statearr_26717;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_26696){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26718){if((e26718 instanceof Object)){
var ex__25931__auto__ = e26718;
var statearr_26719_26740 = state_26696;
(statearr_26719_26740[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26741 = state_26696;
state_26696 = G__26741;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_26696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_26696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___26725,tc,fc))
})();
var state__26041__auto__ = (function (){var statearr_26720 = f__26040__auto__.call(null);
(statearr_26720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___26725);

return statearr_26720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___26725,tc,fc))
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
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__){
return (function (state_26805){
var state_val_26806 = (state_26805[(1)]);
if((state_val_26806 === (7))){
var inst_26801 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
var statearr_26807_26828 = state_26805__$1;
(statearr_26807_26828[(2)] = inst_26801);

(statearr_26807_26828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (1))){
var inst_26785 = init;
var state_26805__$1 = (function (){var statearr_26808 = state_26805;
(statearr_26808[(7)] = inst_26785);

return statearr_26808;
})();
var statearr_26809_26829 = state_26805__$1;
(statearr_26809_26829[(2)] = null);

(statearr_26809_26829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (4))){
var inst_26788 = (state_26805[(8)]);
var inst_26788__$1 = (state_26805[(2)]);
var inst_26789 = (inst_26788__$1 == null);
var state_26805__$1 = (function (){var statearr_26810 = state_26805;
(statearr_26810[(8)] = inst_26788__$1);

return statearr_26810;
})();
if(cljs.core.truth_(inst_26789)){
var statearr_26811_26830 = state_26805__$1;
(statearr_26811_26830[(1)] = (5));

} else {
var statearr_26812_26831 = state_26805__$1;
(statearr_26812_26831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (6))){
var inst_26792 = (state_26805[(9)]);
var inst_26788 = (state_26805[(8)]);
var inst_26785 = (state_26805[(7)]);
var inst_26792__$1 = f.call(null,inst_26785,inst_26788);
var inst_26793 = cljs.core.reduced_QMARK_.call(null,inst_26792__$1);
var state_26805__$1 = (function (){var statearr_26813 = state_26805;
(statearr_26813[(9)] = inst_26792__$1);

return statearr_26813;
})();
if(inst_26793){
var statearr_26814_26832 = state_26805__$1;
(statearr_26814_26832[(1)] = (8));

} else {
var statearr_26815_26833 = state_26805__$1;
(statearr_26815_26833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (3))){
var inst_26803 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26805__$1,inst_26803);
} else {
if((state_val_26806 === (2))){
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26805__$1,(4),ch);
} else {
if((state_val_26806 === (9))){
var inst_26792 = (state_26805[(9)]);
var inst_26785 = inst_26792;
var state_26805__$1 = (function (){var statearr_26816 = state_26805;
(statearr_26816[(7)] = inst_26785);

return statearr_26816;
})();
var statearr_26817_26834 = state_26805__$1;
(statearr_26817_26834[(2)] = null);

(statearr_26817_26834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (5))){
var inst_26785 = (state_26805[(7)]);
var state_26805__$1 = state_26805;
var statearr_26818_26835 = state_26805__$1;
(statearr_26818_26835[(2)] = inst_26785);

(statearr_26818_26835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (10))){
var inst_26799 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
var statearr_26819_26836 = state_26805__$1;
(statearr_26819_26836[(2)] = inst_26799);

(statearr_26819_26836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (8))){
var inst_26792 = (state_26805[(9)]);
var inst_26795 = cljs.core.deref.call(null,inst_26792);
var state_26805__$1 = state_26805;
var statearr_26820_26837 = state_26805__$1;
(statearr_26820_26837[(2)] = inst_26795);

(statearr_26820_26837[(1)] = (10));


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
});})(c__26039__auto__))
;
return ((function (switch__25927__auto__,c__26039__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25928__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25928__auto____0 = (function (){
var statearr_26824 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26824[(0)] = cljs$core$async$reduce_$_state_machine__25928__auto__);

(statearr_26824[(1)] = (1));

return statearr_26824;
});
var cljs$core$async$reduce_$_state_machine__25928__auto____1 = (function (state_26805){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26825){if((e26825 instanceof Object)){
var ex__25931__auto__ = e26825;
var statearr_26826_26838 = state_26805;
(statearr_26826_26838[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26839 = state_26805;
state_26805 = G__26839;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25928__auto__ = function(state_26805){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25928__auto____1.call(this,state_26805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25928__auto____0;
cljs$core$async$reduce_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25928__auto____1;
return cljs$core$async$reduce_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__))
})();
var state__26041__auto__ = (function (){var statearr_26827 = f__26040__auto__.call(null);
(statearr_26827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_26827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__))
);

return c__26039__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__,f__$1){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__,f__$1){
return (function (state_26859){
var state_val_26860 = (state_26859[(1)]);
if((state_val_26860 === (1))){
var inst_26854 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26859__$1,(2),inst_26854);
} else {
if((state_val_26860 === (2))){
var inst_26856 = (state_26859[(2)]);
var inst_26857 = f__$1.call(null,inst_26856);
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26859__$1,inst_26857);
} else {
return null;
}
}
});})(c__26039__auto__,f__$1))
;
return ((function (switch__25927__auto__,c__26039__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25928__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25928__auto____0 = (function (){
var statearr_26864 = [null,null,null,null,null,null,null];
(statearr_26864[(0)] = cljs$core$async$transduce_$_state_machine__25928__auto__);

(statearr_26864[(1)] = (1));

return statearr_26864;
});
var cljs$core$async$transduce_$_state_machine__25928__auto____1 = (function (state_26859){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26865){if((e26865 instanceof Object)){
var ex__25931__auto__ = e26865;
var statearr_26866_26868 = state_26859;
(statearr_26866_26868[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26869 = state_26859;
state_26859 = G__26869;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25928__auto__ = function(state_26859){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25928__auto____1.call(this,state_26859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25928__auto____0;
cljs$core$async$transduce_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25928__auto____1;
return cljs$core$async$transduce_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__,f__$1))
})();
var state__26041__auto__ = (function (){var statearr_26867 = f__26040__auto__.call(null);
(statearr_26867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_26867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__,f__$1))
);

return c__26039__auto__;
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
var args26870 = [];
var len__20732__auto___26922 = arguments.length;
var i__20733__auto___26923 = (0);
while(true){
if((i__20733__auto___26923 < len__20732__auto___26922)){
args26870.push((arguments[i__20733__auto___26923]));

var G__26924 = (i__20733__auto___26923 + (1));
i__20733__auto___26923 = G__26924;
continue;
} else {
}
break;
}

var G__26872 = args26870.length;
switch (G__26872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26870.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__){
return (function (state_26897){
var state_val_26898 = (state_26897[(1)]);
if((state_val_26898 === (7))){
var inst_26879 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26899_26926 = state_26897__$1;
(statearr_26899_26926[(2)] = inst_26879);

(statearr_26899_26926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (1))){
var inst_26873 = cljs.core.seq.call(null,coll);
var inst_26874 = inst_26873;
var state_26897__$1 = (function (){var statearr_26900 = state_26897;
(statearr_26900[(7)] = inst_26874);

return statearr_26900;
})();
var statearr_26901_26927 = state_26897__$1;
(statearr_26901_26927[(2)] = null);

(statearr_26901_26927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (4))){
var inst_26874 = (state_26897[(7)]);
var inst_26877 = cljs.core.first.call(null,inst_26874);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26897__$1,(7),ch,inst_26877);
} else {
if((state_val_26898 === (13))){
var inst_26891 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26902_26928 = state_26897__$1;
(statearr_26902_26928[(2)] = inst_26891);

(statearr_26902_26928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (6))){
var inst_26882 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
if(cljs.core.truth_(inst_26882)){
var statearr_26903_26929 = state_26897__$1;
(statearr_26903_26929[(1)] = (8));

} else {
var statearr_26904_26930 = state_26897__$1;
(statearr_26904_26930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (3))){
var inst_26895 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26897__$1,inst_26895);
} else {
if((state_val_26898 === (12))){
var state_26897__$1 = state_26897;
var statearr_26905_26931 = state_26897__$1;
(statearr_26905_26931[(2)] = null);

(statearr_26905_26931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (2))){
var inst_26874 = (state_26897[(7)]);
var state_26897__$1 = state_26897;
if(cljs.core.truth_(inst_26874)){
var statearr_26906_26932 = state_26897__$1;
(statearr_26906_26932[(1)] = (4));

} else {
var statearr_26907_26933 = state_26897__$1;
(statearr_26907_26933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (11))){
var inst_26888 = cljs.core.async.close_BANG_.call(null,ch);
var state_26897__$1 = state_26897;
var statearr_26908_26934 = state_26897__$1;
(statearr_26908_26934[(2)] = inst_26888);

(statearr_26908_26934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (9))){
var state_26897__$1 = state_26897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26909_26935 = state_26897__$1;
(statearr_26909_26935[(1)] = (11));

} else {
var statearr_26910_26936 = state_26897__$1;
(statearr_26910_26936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (5))){
var inst_26874 = (state_26897[(7)]);
var state_26897__$1 = state_26897;
var statearr_26911_26937 = state_26897__$1;
(statearr_26911_26937[(2)] = inst_26874);

(statearr_26911_26937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (10))){
var inst_26893 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26912_26938 = state_26897__$1;
(statearr_26912_26938[(2)] = inst_26893);

(statearr_26912_26938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (8))){
var inst_26874 = (state_26897[(7)]);
var inst_26884 = cljs.core.next.call(null,inst_26874);
var inst_26874__$1 = inst_26884;
var state_26897__$1 = (function (){var statearr_26913 = state_26897;
(statearr_26913[(7)] = inst_26874__$1);

return statearr_26913;
})();
var statearr_26914_26939 = state_26897__$1;
(statearr_26914_26939[(2)] = null);

(statearr_26914_26939[(1)] = (2));


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
});})(c__26039__auto__))
;
return ((function (switch__25927__auto__,c__26039__auto__){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_26918 = [null,null,null,null,null,null,null,null];
(statearr_26918[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_26918[(1)] = (1));

return statearr_26918;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_26897){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_26897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e26919){if((e26919 instanceof Object)){
var ex__25931__auto__ = e26919;
var statearr_26920_26940 = state_26897;
(statearr_26920_26940[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26941 = state_26897;
state_26897 = G__26941;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__))
})();
var state__26041__auto__ = (function (){var statearr_26921 = f__26040__auto__.call(null);
(statearr_26921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_26921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__))
);

return c__26039__auto__;
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
var x__20287__auto__ = (((_ == null))?null:_);
var m__20288__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,_);
} else {
var m__20288__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,_);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20288__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m,ch);
} else {
var m__20288__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m,ch);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m);
} else {
var m__20288__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27167 = (function (ch,cs,meta27168){
this.ch = ch;
this.cs = cs;
this.meta27168 = meta27168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27169,meta27168__$1){
var self__ = this;
var _27169__$1 = this;
return (new cljs.core.async.t_cljs$core$async27167(self__.ch,self__.cs,meta27168__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27169){
var self__ = this;
var _27169__$1 = this;
return self__.meta27168;
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27168","meta27168",-610819016,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27167";

cljs.core.async.t_cljs$core$async27167.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async27167");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27167 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27167(ch__$1,cs__$1,meta27168){
return (new cljs.core.async.t_cljs$core$async27167(ch__$1,cs__$1,meta27168));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27167(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26039__auto___27392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___27392,cs,m,dchan,dctr,done){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___27392,cs,m,dchan,dctr,done){
return (function (state_27304){
var state_val_27305 = (state_27304[(1)]);
if((state_val_27305 === (7))){
var inst_27300 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27306_27393 = state_27304__$1;
(statearr_27306_27393[(2)] = inst_27300);

(statearr_27306_27393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (20))){
var inst_27203 = (state_27304[(7)]);
var inst_27215 = cljs.core.first.call(null,inst_27203);
var inst_27216 = cljs.core.nth.call(null,inst_27215,(0),null);
var inst_27217 = cljs.core.nth.call(null,inst_27215,(1),null);
var state_27304__$1 = (function (){var statearr_27307 = state_27304;
(statearr_27307[(8)] = inst_27216);

return statearr_27307;
})();
if(cljs.core.truth_(inst_27217)){
var statearr_27308_27394 = state_27304__$1;
(statearr_27308_27394[(1)] = (22));

} else {
var statearr_27309_27395 = state_27304__$1;
(statearr_27309_27395[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (27))){
var inst_27252 = (state_27304[(9)]);
var inst_27245 = (state_27304[(10)]);
var inst_27172 = (state_27304[(11)]);
var inst_27247 = (state_27304[(12)]);
var inst_27252__$1 = cljs.core._nth.call(null,inst_27245,inst_27247);
var inst_27253 = cljs.core.async.put_BANG_.call(null,inst_27252__$1,inst_27172,done);
var state_27304__$1 = (function (){var statearr_27310 = state_27304;
(statearr_27310[(9)] = inst_27252__$1);

return statearr_27310;
})();
if(cljs.core.truth_(inst_27253)){
var statearr_27311_27396 = state_27304__$1;
(statearr_27311_27396[(1)] = (30));

} else {
var statearr_27312_27397 = state_27304__$1;
(statearr_27312_27397[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (1))){
var state_27304__$1 = state_27304;
var statearr_27313_27398 = state_27304__$1;
(statearr_27313_27398[(2)] = null);

(statearr_27313_27398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (24))){
var inst_27203 = (state_27304[(7)]);
var inst_27222 = (state_27304[(2)]);
var inst_27223 = cljs.core.next.call(null,inst_27203);
var inst_27181 = inst_27223;
var inst_27182 = null;
var inst_27183 = (0);
var inst_27184 = (0);
var state_27304__$1 = (function (){var statearr_27314 = state_27304;
(statearr_27314[(13)] = inst_27182);

(statearr_27314[(14)] = inst_27222);

(statearr_27314[(15)] = inst_27184);

(statearr_27314[(16)] = inst_27181);

(statearr_27314[(17)] = inst_27183);

return statearr_27314;
})();
var statearr_27315_27399 = state_27304__$1;
(statearr_27315_27399[(2)] = null);

(statearr_27315_27399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (39))){
var state_27304__$1 = state_27304;
var statearr_27319_27400 = state_27304__$1;
(statearr_27319_27400[(2)] = null);

(statearr_27319_27400[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (4))){
var inst_27172 = (state_27304[(11)]);
var inst_27172__$1 = (state_27304[(2)]);
var inst_27173 = (inst_27172__$1 == null);
var state_27304__$1 = (function (){var statearr_27320 = state_27304;
(statearr_27320[(11)] = inst_27172__$1);

return statearr_27320;
})();
if(cljs.core.truth_(inst_27173)){
var statearr_27321_27401 = state_27304__$1;
(statearr_27321_27401[(1)] = (5));

} else {
var statearr_27322_27402 = state_27304__$1;
(statearr_27322_27402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (15))){
var inst_27182 = (state_27304[(13)]);
var inst_27184 = (state_27304[(15)]);
var inst_27181 = (state_27304[(16)]);
var inst_27183 = (state_27304[(17)]);
var inst_27199 = (state_27304[(2)]);
var inst_27200 = (inst_27184 + (1));
var tmp27316 = inst_27182;
var tmp27317 = inst_27181;
var tmp27318 = inst_27183;
var inst_27181__$1 = tmp27317;
var inst_27182__$1 = tmp27316;
var inst_27183__$1 = tmp27318;
var inst_27184__$1 = inst_27200;
var state_27304__$1 = (function (){var statearr_27323 = state_27304;
(statearr_27323[(18)] = inst_27199);

(statearr_27323[(13)] = inst_27182__$1);

(statearr_27323[(15)] = inst_27184__$1);

(statearr_27323[(16)] = inst_27181__$1);

(statearr_27323[(17)] = inst_27183__$1);

return statearr_27323;
})();
var statearr_27324_27403 = state_27304__$1;
(statearr_27324_27403[(2)] = null);

(statearr_27324_27403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (21))){
var inst_27226 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27328_27404 = state_27304__$1;
(statearr_27328_27404[(2)] = inst_27226);

(statearr_27328_27404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (31))){
var inst_27252 = (state_27304[(9)]);
var inst_27256 = done.call(null,null);
var inst_27257 = cljs.core.async.untap_STAR_.call(null,m,inst_27252);
var state_27304__$1 = (function (){var statearr_27329 = state_27304;
(statearr_27329[(19)] = inst_27256);

return statearr_27329;
})();
var statearr_27330_27405 = state_27304__$1;
(statearr_27330_27405[(2)] = inst_27257);

(statearr_27330_27405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (32))){
var inst_27244 = (state_27304[(20)]);
var inst_27245 = (state_27304[(10)]);
var inst_27246 = (state_27304[(21)]);
var inst_27247 = (state_27304[(12)]);
var inst_27259 = (state_27304[(2)]);
var inst_27260 = (inst_27247 + (1));
var tmp27325 = inst_27244;
var tmp27326 = inst_27245;
var tmp27327 = inst_27246;
var inst_27244__$1 = tmp27325;
var inst_27245__$1 = tmp27326;
var inst_27246__$1 = tmp27327;
var inst_27247__$1 = inst_27260;
var state_27304__$1 = (function (){var statearr_27331 = state_27304;
(statearr_27331[(22)] = inst_27259);

(statearr_27331[(20)] = inst_27244__$1);

(statearr_27331[(10)] = inst_27245__$1);

(statearr_27331[(21)] = inst_27246__$1);

(statearr_27331[(12)] = inst_27247__$1);

return statearr_27331;
})();
var statearr_27332_27406 = state_27304__$1;
(statearr_27332_27406[(2)] = null);

(statearr_27332_27406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (40))){
var inst_27272 = (state_27304[(23)]);
var inst_27276 = done.call(null,null);
var inst_27277 = cljs.core.async.untap_STAR_.call(null,m,inst_27272);
var state_27304__$1 = (function (){var statearr_27333 = state_27304;
(statearr_27333[(24)] = inst_27276);

return statearr_27333;
})();
var statearr_27334_27407 = state_27304__$1;
(statearr_27334_27407[(2)] = inst_27277);

(statearr_27334_27407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (33))){
var inst_27263 = (state_27304[(25)]);
var inst_27265 = cljs.core.chunked_seq_QMARK_.call(null,inst_27263);
var state_27304__$1 = state_27304;
if(inst_27265){
var statearr_27335_27408 = state_27304__$1;
(statearr_27335_27408[(1)] = (36));

} else {
var statearr_27336_27409 = state_27304__$1;
(statearr_27336_27409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (13))){
var inst_27193 = (state_27304[(26)]);
var inst_27196 = cljs.core.async.close_BANG_.call(null,inst_27193);
var state_27304__$1 = state_27304;
var statearr_27337_27410 = state_27304__$1;
(statearr_27337_27410[(2)] = inst_27196);

(statearr_27337_27410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (22))){
var inst_27216 = (state_27304[(8)]);
var inst_27219 = cljs.core.async.close_BANG_.call(null,inst_27216);
var state_27304__$1 = state_27304;
var statearr_27338_27411 = state_27304__$1;
(statearr_27338_27411[(2)] = inst_27219);

(statearr_27338_27411[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (36))){
var inst_27263 = (state_27304[(25)]);
var inst_27267 = cljs.core.chunk_first.call(null,inst_27263);
var inst_27268 = cljs.core.chunk_rest.call(null,inst_27263);
var inst_27269 = cljs.core.count.call(null,inst_27267);
var inst_27244 = inst_27268;
var inst_27245 = inst_27267;
var inst_27246 = inst_27269;
var inst_27247 = (0);
var state_27304__$1 = (function (){var statearr_27339 = state_27304;
(statearr_27339[(20)] = inst_27244);

(statearr_27339[(10)] = inst_27245);

(statearr_27339[(21)] = inst_27246);

(statearr_27339[(12)] = inst_27247);

return statearr_27339;
})();
var statearr_27340_27412 = state_27304__$1;
(statearr_27340_27412[(2)] = null);

(statearr_27340_27412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (41))){
var inst_27263 = (state_27304[(25)]);
var inst_27279 = (state_27304[(2)]);
var inst_27280 = cljs.core.next.call(null,inst_27263);
var inst_27244 = inst_27280;
var inst_27245 = null;
var inst_27246 = (0);
var inst_27247 = (0);
var state_27304__$1 = (function (){var statearr_27341 = state_27304;
(statearr_27341[(20)] = inst_27244);

(statearr_27341[(10)] = inst_27245);

(statearr_27341[(21)] = inst_27246);

(statearr_27341[(27)] = inst_27279);

(statearr_27341[(12)] = inst_27247);

return statearr_27341;
})();
var statearr_27342_27413 = state_27304__$1;
(statearr_27342_27413[(2)] = null);

(statearr_27342_27413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (43))){
var state_27304__$1 = state_27304;
var statearr_27343_27414 = state_27304__$1;
(statearr_27343_27414[(2)] = null);

(statearr_27343_27414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (29))){
var inst_27288 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27344_27415 = state_27304__$1;
(statearr_27344_27415[(2)] = inst_27288);

(statearr_27344_27415[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (44))){
var inst_27297 = (state_27304[(2)]);
var state_27304__$1 = (function (){var statearr_27345 = state_27304;
(statearr_27345[(28)] = inst_27297);

return statearr_27345;
})();
var statearr_27346_27416 = state_27304__$1;
(statearr_27346_27416[(2)] = null);

(statearr_27346_27416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (6))){
var inst_27236 = (state_27304[(29)]);
var inst_27235 = cljs.core.deref.call(null,cs);
var inst_27236__$1 = cljs.core.keys.call(null,inst_27235);
var inst_27237 = cljs.core.count.call(null,inst_27236__$1);
var inst_27238 = cljs.core.reset_BANG_.call(null,dctr,inst_27237);
var inst_27243 = cljs.core.seq.call(null,inst_27236__$1);
var inst_27244 = inst_27243;
var inst_27245 = null;
var inst_27246 = (0);
var inst_27247 = (0);
var state_27304__$1 = (function (){var statearr_27347 = state_27304;
(statearr_27347[(30)] = inst_27238);

(statearr_27347[(29)] = inst_27236__$1);

(statearr_27347[(20)] = inst_27244);

(statearr_27347[(10)] = inst_27245);

(statearr_27347[(21)] = inst_27246);

(statearr_27347[(12)] = inst_27247);

return statearr_27347;
})();
var statearr_27348_27417 = state_27304__$1;
(statearr_27348_27417[(2)] = null);

(statearr_27348_27417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (28))){
var inst_27263 = (state_27304[(25)]);
var inst_27244 = (state_27304[(20)]);
var inst_27263__$1 = cljs.core.seq.call(null,inst_27244);
var state_27304__$1 = (function (){var statearr_27349 = state_27304;
(statearr_27349[(25)] = inst_27263__$1);

return statearr_27349;
})();
if(inst_27263__$1){
var statearr_27350_27418 = state_27304__$1;
(statearr_27350_27418[(1)] = (33));

} else {
var statearr_27351_27419 = state_27304__$1;
(statearr_27351_27419[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (25))){
var inst_27246 = (state_27304[(21)]);
var inst_27247 = (state_27304[(12)]);
var inst_27249 = (inst_27247 < inst_27246);
var inst_27250 = inst_27249;
var state_27304__$1 = state_27304;
if(cljs.core.truth_(inst_27250)){
var statearr_27352_27420 = state_27304__$1;
(statearr_27352_27420[(1)] = (27));

} else {
var statearr_27353_27421 = state_27304__$1;
(statearr_27353_27421[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (34))){
var state_27304__$1 = state_27304;
var statearr_27354_27422 = state_27304__$1;
(statearr_27354_27422[(2)] = null);

(statearr_27354_27422[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (17))){
var state_27304__$1 = state_27304;
var statearr_27355_27423 = state_27304__$1;
(statearr_27355_27423[(2)] = null);

(statearr_27355_27423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (3))){
var inst_27302 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27304__$1,inst_27302);
} else {
if((state_val_27305 === (12))){
var inst_27231 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27356_27424 = state_27304__$1;
(statearr_27356_27424[(2)] = inst_27231);

(statearr_27356_27424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (2))){
var state_27304__$1 = state_27304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27304__$1,(4),ch);
} else {
if((state_val_27305 === (23))){
var state_27304__$1 = state_27304;
var statearr_27357_27425 = state_27304__$1;
(statearr_27357_27425[(2)] = null);

(statearr_27357_27425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (35))){
var inst_27286 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27358_27426 = state_27304__$1;
(statearr_27358_27426[(2)] = inst_27286);

(statearr_27358_27426[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (19))){
var inst_27203 = (state_27304[(7)]);
var inst_27207 = cljs.core.chunk_first.call(null,inst_27203);
var inst_27208 = cljs.core.chunk_rest.call(null,inst_27203);
var inst_27209 = cljs.core.count.call(null,inst_27207);
var inst_27181 = inst_27208;
var inst_27182 = inst_27207;
var inst_27183 = inst_27209;
var inst_27184 = (0);
var state_27304__$1 = (function (){var statearr_27359 = state_27304;
(statearr_27359[(13)] = inst_27182);

(statearr_27359[(15)] = inst_27184);

(statearr_27359[(16)] = inst_27181);

(statearr_27359[(17)] = inst_27183);

return statearr_27359;
})();
var statearr_27360_27427 = state_27304__$1;
(statearr_27360_27427[(2)] = null);

(statearr_27360_27427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (11))){
var inst_27203 = (state_27304[(7)]);
var inst_27181 = (state_27304[(16)]);
var inst_27203__$1 = cljs.core.seq.call(null,inst_27181);
var state_27304__$1 = (function (){var statearr_27361 = state_27304;
(statearr_27361[(7)] = inst_27203__$1);

return statearr_27361;
})();
if(inst_27203__$1){
var statearr_27362_27428 = state_27304__$1;
(statearr_27362_27428[(1)] = (16));

} else {
var statearr_27363_27429 = state_27304__$1;
(statearr_27363_27429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (9))){
var inst_27233 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27364_27430 = state_27304__$1;
(statearr_27364_27430[(2)] = inst_27233);

(statearr_27364_27430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (5))){
var inst_27179 = cljs.core.deref.call(null,cs);
var inst_27180 = cljs.core.seq.call(null,inst_27179);
var inst_27181 = inst_27180;
var inst_27182 = null;
var inst_27183 = (0);
var inst_27184 = (0);
var state_27304__$1 = (function (){var statearr_27365 = state_27304;
(statearr_27365[(13)] = inst_27182);

(statearr_27365[(15)] = inst_27184);

(statearr_27365[(16)] = inst_27181);

(statearr_27365[(17)] = inst_27183);

return statearr_27365;
})();
var statearr_27366_27431 = state_27304__$1;
(statearr_27366_27431[(2)] = null);

(statearr_27366_27431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (14))){
var state_27304__$1 = state_27304;
var statearr_27367_27432 = state_27304__$1;
(statearr_27367_27432[(2)] = null);

(statearr_27367_27432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (45))){
var inst_27294 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27368_27433 = state_27304__$1;
(statearr_27368_27433[(2)] = inst_27294);

(statearr_27368_27433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (26))){
var inst_27236 = (state_27304[(29)]);
var inst_27290 = (state_27304[(2)]);
var inst_27291 = cljs.core.seq.call(null,inst_27236);
var state_27304__$1 = (function (){var statearr_27369 = state_27304;
(statearr_27369[(31)] = inst_27290);

return statearr_27369;
})();
if(inst_27291){
var statearr_27370_27434 = state_27304__$1;
(statearr_27370_27434[(1)] = (42));

} else {
var statearr_27371_27435 = state_27304__$1;
(statearr_27371_27435[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (16))){
var inst_27203 = (state_27304[(7)]);
var inst_27205 = cljs.core.chunked_seq_QMARK_.call(null,inst_27203);
var state_27304__$1 = state_27304;
if(inst_27205){
var statearr_27372_27436 = state_27304__$1;
(statearr_27372_27436[(1)] = (19));

} else {
var statearr_27373_27437 = state_27304__$1;
(statearr_27373_27437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (38))){
var inst_27283 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27374_27438 = state_27304__$1;
(statearr_27374_27438[(2)] = inst_27283);

(statearr_27374_27438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (30))){
var state_27304__$1 = state_27304;
var statearr_27375_27439 = state_27304__$1;
(statearr_27375_27439[(2)] = null);

(statearr_27375_27439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (10))){
var inst_27182 = (state_27304[(13)]);
var inst_27184 = (state_27304[(15)]);
var inst_27192 = cljs.core._nth.call(null,inst_27182,inst_27184);
var inst_27193 = cljs.core.nth.call(null,inst_27192,(0),null);
var inst_27194 = cljs.core.nth.call(null,inst_27192,(1),null);
var state_27304__$1 = (function (){var statearr_27376 = state_27304;
(statearr_27376[(26)] = inst_27193);

return statearr_27376;
})();
if(cljs.core.truth_(inst_27194)){
var statearr_27377_27440 = state_27304__$1;
(statearr_27377_27440[(1)] = (13));

} else {
var statearr_27378_27441 = state_27304__$1;
(statearr_27378_27441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (18))){
var inst_27229 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27379_27442 = state_27304__$1;
(statearr_27379_27442[(2)] = inst_27229);

(statearr_27379_27442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (42))){
var state_27304__$1 = state_27304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27304__$1,(45),dchan);
} else {
if((state_val_27305 === (37))){
var inst_27272 = (state_27304[(23)]);
var inst_27263 = (state_27304[(25)]);
var inst_27172 = (state_27304[(11)]);
var inst_27272__$1 = cljs.core.first.call(null,inst_27263);
var inst_27273 = cljs.core.async.put_BANG_.call(null,inst_27272__$1,inst_27172,done);
var state_27304__$1 = (function (){var statearr_27380 = state_27304;
(statearr_27380[(23)] = inst_27272__$1);

return statearr_27380;
})();
if(cljs.core.truth_(inst_27273)){
var statearr_27381_27443 = state_27304__$1;
(statearr_27381_27443[(1)] = (39));

} else {
var statearr_27382_27444 = state_27304__$1;
(statearr_27382_27444[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (8))){
var inst_27184 = (state_27304[(15)]);
var inst_27183 = (state_27304[(17)]);
var inst_27186 = (inst_27184 < inst_27183);
var inst_27187 = inst_27186;
var state_27304__$1 = state_27304;
if(cljs.core.truth_(inst_27187)){
var statearr_27383_27445 = state_27304__$1;
(statearr_27383_27445[(1)] = (10));

} else {
var statearr_27384_27446 = state_27304__$1;
(statearr_27384_27446[(1)] = (11));

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
});})(c__26039__auto___27392,cs,m,dchan,dctr,done))
;
return ((function (switch__25927__auto__,c__26039__auto___27392,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25928__auto__ = null;
var cljs$core$async$mult_$_state_machine__25928__auto____0 = (function (){
var statearr_27388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27388[(0)] = cljs$core$async$mult_$_state_machine__25928__auto__);

(statearr_27388[(1)] = (1));

return statearr_27388;
});
var cljs$core$async$mult_$_state_machine__25928__auto____1 = (function (state_27304){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_27304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e27389){if((e27389 instanceof Object)){
var ex__25931__auto__ = e27389;
var statearr_27390_27447 = state_27304;
(statearr_27390_27447[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27448 = state_27304;
state_27304 = G__27448;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25928__auto__ = function(state_27304){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25928__auto____1.call(this,state_27304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25928__auto____0;
cljs$core$async$mult_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25928__auto____1;
return cljs$core$async$mult_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___27392,cs,m,dchan,dctr,done))
})();
var state__26041__auto__ = (function (){var statearr_27391 = f__26040__auto__.call(null);
(statearr_27391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___27392);

return statearr_27391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___27392,cs,m,dchan,dctr,done))
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
var args27449 = [];
var len__20732__auto___27452 = arguments.length;
var i__20733__auto___27453 = (0);
while(true){
if((i__20733__auto___27453 < len__20732__auto___27452)){
args27449.push((arguments[i__20733__auto___27453]));

var G__27454 = (i__20733__auto___27453 + (1));
i__20733__auto___27453 = G__27454;
continue;
} else {
}
break;
}

var G__27451 = args27449.length;
switch (G__27451) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27449.length)].join('')));

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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m,ch);
} else {
var m__20288__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m,ch);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m,ch);
} else {
var m__20288__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m,ch);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m);
} else {
var m__20288__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m,state_map);
} else {
var m__20288__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m,state_map);
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
var x__20287__auto__ = (((m == null))?null:m);
var m__20288__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,m,mode);
} else {
var m__20288__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___27466 = arguments.length;
var i__20733__auto___27467 = (0);
while(true){
if((i__20733__auto___27467 < len__20732__auto___27466)){
args__20739__auto__.push((arguments[i__20733__auto___27467]));

var G__27468 = (i__20733__auto___27467 + (1));
i__20733__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27460){
var map__27461 = p__27460;
var map__27461__$1 = ((((!((map__27461 == null)))?((((map__27461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27461):map__27461);
var opts = map__27461__$1;
var statearr_27463_27469 = state;
(statearr_27463_27469[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27461,map__27461__$1,opts){
return (function (val){
var statearr_27464_27470 = state;
(statearr_27464_27470[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27461,map__27461__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27465_27471 = state;
(statearr_27465_27471[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27456){
var G__27457 = cljs.core.first.call(null,seq27456);
var seq27456__$1 = cljs.core.next.call(null,seq27456);
var G__27458 = cljs.core.first.call(null,seq27456__$1);
var seq27456__$2 = cljs.core.next.call(null,seq27456__$1);
var G__27459 = cljs.core.first.call(null,seq27456__$2);
var seq27456__$3 = cljs.core.next.call(null,seq27456__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27457,G__27458,G__27459,seq27456__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27639 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27640){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27640 = meta27640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27641,meta27640__$1){
var self__ = this;
var _27641__$1 = this;
return (new cljs.core.async.t_cljs$core$async27639(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27640__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27641){
var self__ = this;
var _27641__$1 = this;
return self__.meta27640;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27639.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27640","meta27640",-523178069,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27639";

cljs.core.async.t_cljs$core$async27639.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async27639");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27639 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27639(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27640){
return (new cljs.core.async.t_cljs$core$async27639(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27640));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27639(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26039__auto___27806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___27806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___27806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27743){
var state_val_27744 = (state_27743[(1)]);
if((state_val_27744 === (7))){
var inst_27658 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27745_27807 = state_27743__$1;
(statearr_27745_27807[(2)] = inst_27658);

(statearr_27745_27807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (20))){
var inst_27670 = (state_27743[(7)]);
var state_27743__$1 = state_27743;
var statearr_27746_27808 = state_27743__$1;
(statearr_27746_27808[(2)] = inst_27670);

(statearr_27746_27808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (27))){
var state_27743__$1 = state_27743;
var statearr_27747_27809 = state_27743__$1;
(statearr_27747_27809[(2)] = null);

(statearr_27747_27809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (1))){
var inst_27645 = (state_27743[(8)]);
var inst_27645__$1 = calc_state.call(null);
var inst_27647 = (inst_27645__$1 == null);
var inst_27648 = cljs.core.not.call(null,inst_27647);
var state_27743__$1 = (function (){var statearr_27748 = state_27743;
(statearr_27748[(8)] = inst_27645__$1);

return statearr_27748;
})();
if(inst_27648){
var statearr_27749_27810 = state_27743__$1;
(statearr_27749_27810[(1)] = (2));

} else {
var statearr_27750_27811 = state_27743__$1;
(statearr_27750_27811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (24))){
var inst_27694 = (state_27743[(9)]);
var inst_27703 = (state_27743[(10)]);
var inst_27717 = (state_27743[(11)]);
var inst_27717__$1 = inst_27694.call(null,inst_27703);
var state_27743__$1 = (function (){var statearr_27751 = state_27743;
(statearr_27751[(11)] = inst_27717__$1);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27717__$1)){
var statearr_27752_27812 = state_27743__$1;
(statearr_27752_27812[(1)] = (29));

} else {
var statearr_27753_27813 = state_27743__$1;
(statearr_27753_27813[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (4))){
var inst_27661 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27661)){
var statearr_27754_27814 = state_27743__$1;
(statearr_27754_27814[(1)] = (8));

} else {
var statearr_27755_27815 = state_27743__$1;
(statearr_27755_27815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (15))){
var inst_27688 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27688)){
var statearr_27756_27816 = state_27743__$1;
(statearr_27756_27816[(1)] = (19));

} else {
var statearr_27757_27817 = state_27743__$1;
(statearr_27757_27817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (21))){
var inst_27693 = (state_27743[(12)]);
var inst_27693__$1 = (state_27743[(2)]);
var inst_27694 = cljs.core.get.call(null,inst_27693__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27695 = cljs.core.get.call(null,inst_27693__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27696 = cljs.core.get.call(null,inst_27693__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27743__$1 = (function (){var statearr_27758 = state_27743;
(statearr_27758[(9)] = inst_27694);

(statearr_27758[(12)] = inst_27693__$1);

(statearr_27758[(13)] = inst_27695);

return statearr_27758;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27743__$1,(22),inst_27696);
} else {
if((state_val_27744 === (31))){
var inst_27725 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27725)){
var statearr_27759_27818 = state_27743__$1;
(statearr_27759_27818[(1)] = (32));

} else {
var statearr_27760_27819 = state_27743__$1;
(statearr_27760_27819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (32))){
var inst_27702 = (state_27743[(14)]);
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27743__$1,(35),out,inst_27702);
} else {
if((state_val_27744 === (33))){
var inst_27693 = (state_27743[(12)]);
var inst_27670 = inst_27693;
var state_27743__$1 = (function (){var statearr_27761 = state_27743;
(statearr_27761[(7)] = inst_27670);

return statearr_27761;
})();
var statearr_27762_27820 = state_27743__$1;
(statearr_27762_27820[(2)] = null);

(statearr_27762_27820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (13))){
var inst_27670 = (state_27743[(7)]);
var inst_27677 = inst_27670.cljs$lang$protocol_mask$partition0$;
var inst_27678 = (inst_27677 & (64));
var inst_27679 = inst_27670.cljs$core$ISeq$;
var inst_27680 = (cljs.core.PROTOCOL_SENTINEL === inst_27679);
var inst_27681 = (inst_27678) || (inst_27680);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27681)){
var statearr_27763_27821 = state_27743__$1;
(statearr_27763_27821[(1)] = (16));

} else {
var statearr_27764_27822 = state_27743__$1;
(statearr_27764_27822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (22))){
var inst_27702 = (state_27743[(14)]);
var inst_27703 = (state_27743[(10)]);
var inst_27701 = (state_27743[(2)]);
var inst_27702__$1 = cljs.core.nth.call(null,inst_27701,(0),null);
var inst_27703__$1 = cljs.core.nth.call(null,inst_27701,(1),null);
var inst_27704 = (inst_27702__$1 == null);
var inst_27705 = cljs.core._EQ_.call(null,inst_27703__$1,change);
var inst_27706 = (inst_27704) || (inst_27705);
var state_27743__$1 = (function (){var statearr_27765 = state_27743;
(statearr_27765[(14)] = inst_27702__$1);

(statearr_27765[(10)] = inst_27703__$1);

return statearr_27765;
})();
if(cljs.core.truth_(inst_27706)){
var statearr_27766_27823 = state_27743__$1;
(statearr_27766_27823[(1)] = (23));

} else {
var statearr_27767_27824 = state_27743__$1;
(statearr_27767_27824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (36))){
var inst_27693 = (state_27743[(12)]);
var inst_27670 = inst_27693;
var state_27743__$1 = (function (){var statearr_27768 = state_27743;
(statearr_27768[(7)] = inst_27670);

return statearr_27768;
})();
var statearr_27769_27825 = state_27743__$1;
(statearr_27769_27825[(2)] = null);

(statearr_27769_27825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (29))){
var inst_27717 = (state_27743[(11)]);
var state_27743__$1 = state_27743;
var statearr_27770_27826 = state_27743__$1;
(statearr_27770_27826[(2)] = inst_27717);

(statearr_27770_27826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (6))){
var state_27743__$1 = state_27743;
var statearr_27771_27827 = state_27743__$1;
(statearr_27771_27827[(2)] = false);

(statearr_27771_27827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (28))){
var inst_27713 = (state_27743[(2)]);
var inst_27714 = calc_state.call(null);
var inst_27670 = inst_27714;
var state_27743__$1 = (function (){var statearr_27772 = state_27743;
(statearr_27772[(15)] = inst_27713);

(statearr_27772[(7)] = inst_27670);

return statearr_27772;
})();
var statearr_27773_27828 = state_27743__$1;
(statearr_27773_27828[(2)] = null);

(statearr_27773_27828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (25))){
var inst_27739 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27774_27829 = state_27743__$1;
(statearr_27774_27829[(2)] = inst_27739);

(statearr_27774_27829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (34))){
var inst_27737 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27775_27830 = state_27743__$1;
(statearr_27775_27830[(2)] = inst_27737);

(statearr_27775_27830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (17))){
var state_27743__$1 = state_27743;
var statearr_27776_27831 = state_27743__$1;
(statearr_27776_27831[(2)] = false);

(statearr_27776_27831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (3))){
var state_27743__$1 = state_27743;
var statearr_27777_27832 = state_27743__$1;
(statearr_27777_27832[(2)] = false);

(statearr_27777_27832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (12))){
var inst_27741 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27743__$1,inst_27741);
} else {
if((state_val_27744 === (2))){
var inst_27645 = (state_27743[(8)]);
var inst_27650 = inst_27645.cljs$lang$protocol_mask$partition0$;
var inst_27651 = (inst_27650 & (64));
var inst_27652 = inst_27645.cljs$core$ISeq$;
var inst_27653 = (cljs.core.PROTOCOL_SENTINEL === inst_27652);
var inst_27654 = (inst_27651) || (inst_27653);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27654)){
var statearr_27778_27833 = state_27743__$1;
(statearr_27778_27833[(1)] = (5));

} else {
var statearr_27779_27834 = state_27743__$1;
(statearr_27779_27834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (23))){
var inst_27702 = (state_27743[(14)]);
var inst_27708 = (inst_27702 == null);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27708)){
var statearr_27780_27835 = state_27743__$1;
(statearr_27780_27835[(1)] = (26));

} else {
var statearr_27781_27836 = state_27743__$1;
(statearr_27781_27836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (35))){
var inst_27728 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27728)){
var statearr_27782_27837 = state_27743__$1;
(statearr_27782_27837[(1)] = (36));

} else {
var statearr_27783_27838 = state_27743__$1;
(statearr_27783_27838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (19))){
var inst_27670 = (state_27743[(7)]);
var inst_27690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27670);
var state_27743__$1 = state_27743;
var statearr_27784_27839 = state_27743__$1;
(statearr_27784_27839[(2)] = inst_27690);

(statearr_27784_27839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (11))){
var inst_27670 = (state_27743[(7)]);
var inst_27674 = (inst_27670 == null);
var inst_27675 = cljs.core.not.call(null,inst_27674);
var state_27743__$1 = state_27743;
if(inst_27675){
var statearr_27785_27840 = state_27743__$1;
(statearr_27785_27840[(1)] = (13));

} else {
var statearr_27786_27841 = state_27743__$1;
(statearr_27786_27841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (9))){
var inst_27645 = (state_27743[(8)]);
var state_27743__$1 = state_27743;
var statearr_27787_27842 = state_27743__$1;
(statearr_27787_27842[(2)] = inst_27645);

(statearr_27787_27842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (5))){
var state_27743__$1 = state_27743;
var statearr_27788_27843 = state_27743__$1;
(statearr_27788_27843[(2)] = true);

(statearr_27788_27843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (14))){
var state_27743__$1 = state_27743;
var statearr_27789_27844 = state_27743__$1;
(statearr_27789_27844[(2)] = false);

(statearr_27789_27844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (26))){
var inst_27703 = (state_27743[(10)]);
var inst_27710 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27703);
var state_27743__$1 = state_27743;
var statearr_27790_27845 = state_27743__$1;
(statearr_27790_27845[(2)] = inst_27710);

(statearr_27790_27845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (16))){
var state_27743__$1 = state_27743;
var statearr_27791_27846 = state_27743__$1;
(statearr_27791_27846[(2)] = true);

(statearr_27791_27846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (38))){
var inst_27733 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27792_27847 = state_27743__$1;
(statearr_27792_27847[(2)] = inst_27733);

(statearr_27792_27847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (30))){
var inst_27694 = (state_27743[(9)]);
var inst_27703 = (state_27743[(10)]);
var inst_27695 = (state_27743[(13)]);
var inst_27720 = cljs.core.empty_QMARK_.call(null,inst_27694);
var inst_27721 = inst_27695.call(null,inst_27703);
var inst_27722 = cljs.core.not.call(null,inst_27721);
var inst_27723 = (inst_27720) && (inst_27722);
var state_27743__$1 = state_27743;
var statearr_27793_27848 = state_27743__$1;
(statearr_27793_27848[(2)] = inst_27723);

(statearr_27793_27848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (10))){
var inst_27645 = (state_27743[(8)]);
var inst_27666 = (state_27743[(2)]);
var inst_27667 = cljs.core.get.call(null,inst_27666,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27668 = cljs.core.get.call(null,inst_27666,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27669 = cljs.core.get.call(null,inst_27666,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27670 = inst_27645;
var state_27743__$1 = (function (){var statearr_27794 = state_27743;
(statearr_27794[(7)] = inst_27670);

(statearr_27794[(16)] = inst_27667);

(statearr_27794[(17)] = inst_27669);

(statearr_27794[(18)] = inst_27668);

return statearr_27794;
})();
var statearr_27795_27849 = state_27743__$1;
(statearr_27795_27849[(2)] = null);

(statearr_27795_27849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (18))){
var inst_27685 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27796_27850 = state_27743__$1;
(statearr_27796_27850[(2)] = inst_27685);

(statearr_27796_27850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (37))){
var state_27743__$1 = state_27743;
var statearr_27797_27851 = state_27743__$1;
(statearr_27797_27851[(2)] = null);

(statearr_27797_27851[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (8))){
var inst_27645 = (state_27743[(8)]);
var inst_27663 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27645);
var state_27743__$1 = state_27743;
var statearr_27798_27852 = state_27743__$1;
(statearr_27798_27852[(2)] = inst_27663);

(statearr_27798_27852[(1)] = (10));


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
});})(c__26039__auto___27806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25927__auto__,c__26039__auto___27806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25928__auto__ = null;
var cljs$core$async$mix_$_state_machine__25928__auto____0 = (function (){
var statearr_27802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27802[(0)] = cljs$core$async$mix_$_state_machine__25928__auto__);

(statearr_27802[(1)] = (1));

return statearr_27802;
});
var cljs$core$async$mix_$_state_machine__25928__auto____1 = (function (state_27743){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_27743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e27803){if((e27803 instanceof Object)){
var ex__25931__auto__ = e27803;
var statearr_27804_27853 = state_27743;
(statearr_27804_27853[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27854 = state_27743;
state_27743 = G__27854;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25928__auto__ = function(state_27743){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25928__auto____1.call(this,state_27743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25928__auto____0;
cljs$core$async$mix_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25928__auto____1;
return cljs$core$async$mix_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___27806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26041__auto__ = (function (){var statearr_27805 = f__26040__auto__.call(null);
(statearr_27805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___27806);

return statearr_27805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___27806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20287__auto__ = (((p == null))?null:p);
var m__20288__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20288__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20287__auto__ = (((p == null))?null:p);
var m__20288__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,p,v,ch);
} else {
var m__20288__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27855 = [];
var len__20732__auto___27858 = arguments.length;
var i__20733__auto___27859 = (0);
while(true){
if((i__20733__auto___27859 < len__20732__auto___27858)){
args27855.push((arguments[i__20733__auto___27859]));

var G__27860 = (i__20733__auto___27859 + (1));
i__20733__auto___27859 = G__27860;
continue;
} else {
}
break;
}

var G__27857 = args27855.length;
switch (G__27857) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27855.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20287__auto__ = (((p == null))?null:p);
var m__20288__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,p);
} else {
var m__20288__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,p);
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
var x__20287__auto__ = (((p == null))?null:p);
var m__20288__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20287__auto__)]);
if(!((m__20288__auto__ == null))){
return m__20288__auto__.call(null,p,v);
} else {
var m__20288__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20288__auto____$1 == null))){
return m__20288__auto____$1.call(null,p,v);
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
var args27863 = [];
var len__20732__auto___27988 = arguments.length;
var i__20733__auto___27989 = (0);
while(true){
if((i__20733__auto___27989 < len__20732__auto___27988)){
args27863.push((arguments[i__20733__auto___27989]));

var G__27990 = (i__20733__auto___27989 + (1));
i__20733__auto___27989 = G__27990;
continue;
} else {
}
break;
}

var G__27865 = args27863.length;
switch (G__27865) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27863.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19624__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19624__auto__,mults){
return (function (p1__27862_SHARP_){
if(cljs.core.truth_(p1__27862_SHARP_.call(null,topic))){
return p1__27862_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27862_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19624__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27866 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27867){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27867 = meta27867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27868,meta27867__$1){
var self__ = this;
var _27868__$1 = this;
return (new cljs.core.async.t_cljs$core$async27866(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27867__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27868){
var self__ = this;
var _27868__$1 = this;
return self__.meta27867;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27867","meta27867",1688935428,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27866";

cljs.core.async.t_cljs$core$async27866.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async27866");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27866 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27867){
return (new cljs.core.async.t_cljs$core$async27866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27867));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27866(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26039__auto___27992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___27992,mults,ensure_mult,p){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___27992,mults,ensure_mult,p){
return (function (state_27940){
var state_val_27941 = (state_27940[(1)]);
if((state_val_27941 === (7))){
var inst_27936 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27942_27993 = state_27940__$1;
(statearr_27942_27993[(2)] = inst_27936);

(statearr_27942_27993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (20))){
var state_27940__$1 = state_27940;
var statearr_27943_27994 = state_27940__$1;
(statearr_27943_27994[(2)] = null);

(statearr_27943_27994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (1))){
var state_27940__$1 = state_27940;
var statearr_27944_27995 = state_27940__$1;
(statearr_27944_27995[(2)] = null);

(statearr_27944_27995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (24))){
var inst_27919 = (state_27940[(7)]);
var inst_27928 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27919);
var state_27940__$1 = state_27940;
var statearr_27945_27996 = state_27940__$1;
(statearr_27945_27996[(2)] = inst_27928);

(statearr_27945_27996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (4))){
var inst_27871 = (state_27940[(8)]);
var inst_27871__$1 = (state_27940[(2)]);
var inst_27872 = (inst_27871__$1 == null);
var state_27940__$1 = (function (){var statearr_27946 = state_27940;
(statearr_27946[(8)] = inst_27871__$1);

return statearr_27946;
})();
if(cljs.core.truth_(inst_27872)){
var statearr_27947_27997 = state_27940__$1;
(statearr_27947_27997[(1)] = (5));

} else {
var statearr_27948_27998 = state_27940__$1;
(statearr_27948_27998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (15))){
var inst_27913 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27949_27999 = state_27940__$1;
(statearr_27949_27999[(2)] = inst_27913);

(statearr_27949_27999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (21))){
var inst_27933 = (state_27940[(2)]);
var state_27940__$1 = (function (){var statearr_27950 = state_27940;
(statearr_27950[(9)] = inst_27933);

return statearr_27950;
})();
var statearr_27951_28000 = state_27940__$1;
(statearr_27951_28000[(2)] = null);

(statearr_27951_28000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (13))){
var inst_27895 = (state_27940[(10)]);
var inst_27897 = cljs.core.chunked_seq_QMARK_.call(null,inst_27895);
var state_27940__$1 = state_27940;
if(inst_27897){
var statearr_27952_28001 = state_27940__$1;
(statearr_27952_28001[(1)] = (16));

} else {
var statearr_27953_28002 = state_27940__$1;
(statearr_27953_28002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (22))){
var inst_27925 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27925)){
var statearr_27954_28003 = state_27940__$1;
(statearr_27954_28003[(1)] = (23));

} else {
var statearr_27955_28004 = state_27940__$1;
(statearr_27955_28004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (6))){
var inst_27921 = (state_27940[(11)]);
var inst_27919 = (state_27940[(7)]);
var inst_27871 = (state_27940[(8)]);
var inst_27919__$1 = topic_fn.call(null,inst_27871);
var inst_27920 = cljs.core.deref.call(null,mults);
var inst_27921__$1 = cljs.core.get.call(null,inst_27920,inst_27919__$1);
var state_27940__$1 = (function (){var statearr_27956 = state_27940;
(statearr_27956[(11)] = inst_27921__$1);

(statearr_27956[(7)] = inst_27919__$1);

return statearr_27956;
})();
if(cljs.core.truth_(inst_27921__$1)){
var statearr_27957_28005 = state_27940__$1;
(statearr_27957_28005[(1)] = (19));

} else {
var statearr_27958_28006 = state_27940__$1;
(statearr_27958_28006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (25))){
var inst_27930 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27959_28007 = state_27940__$1;
(statearr_27959_28007[(2)] = inst_27930);

(statearr_27959_28007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (17))){
var inst_27895 = (state_27940[(10)]);
var inst_27904 = cljs.core.first.call(null,inst_27895);
var inst_27905 = cljs.core.async.muxch_STAR_.call(null,inst_27904);
var inst_27906 = cljs.core.async.close_BANG_.call(null,inst_27905);
var inst_27907 = cljs.core.next.call(null,inst_27895);
var inst_27881 = inst_27907;
var inst_27882 = null;
var inst_27883 = (0);
var inst_27884 = (0);
var state_27940__$1 = (function (){var statearr_27960 = state_27940;
(statearr_27960[(12)] = inst_27882);

(statearr_27960[(13)] = inst_27881);

(statearr_27960[(14)] = inst_27884);

(statearr_27960[(15)] = inst_27883);

(statearr_27960[(16)] = inst_27906);

return statearr_27960;
})();
var statearr_27961_28008 = state_27940__$1;
(statearr_27961_28008[(2)] = null);

(statearr_27961_28008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (3))){
var inst_27938 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27940__$1,inst_27938);
} else {
if((state_val_27941 === (12))){
var inst_27915 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27962_28009 = state_27940__$1;
(statearr_27962_28009[(2)] = inst_27915);

(statearr_27962_28009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (2))){
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27940__$1,(4),ch);
} else {
if((state_val_27941 === (23))){
var state_27940__$1 = state_27940;
var statearr_27963_28010 = state_27940__$1;
(statearr_27963_28010[(2)] = null);

(statearr_27963_28010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (19))){
var inst_27921 = (state_27940[(11)]);
var inst_27871 = (state_27940[(8)]);
var inst_27923 = cljs.core.async.muxch_STAR_.call(null,inst_27921);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27940__$1,(22),inst_27923,inst_27871);
} else {
if((state_val_27941 === (11))){
var inst_27895 = (state_27940[(10)]);
var inst_27881 = (state_27940[(13)]);
var inst_27895__$1 = cljs.core.seq.call(null,inst_27881);
var state_27940__$1 = (function (){var statearr_27964 = state_27940;
(statearr_27964[(10)] = inst_27895__$1);

return statearr_27964;
})();
if(inst_27895__$1){
var statearr_27965_28011 = state_27940__$1;
(statearr_27965_28011[(1)] = (13));

} else {
var statearr_27966_28012 = state_27940__$1;
(statearr_27966_28012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (9))){
var inst_27917 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27967_28013 = state_27940__$1;
(statearr_27967_28013[(2)] = inst_27917);

(statearr_27967_28013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (5))){
var inst_27878 = cljs.core.deref.call(null,mults);
var inst_27879 = cljs.core.vals.call(null,inst_27878);
var inst_27880 = cljs.core.seq.call(null,inst_27879);
var inst_27881 = inst_27880;
var inst_27882 = null;
var inst_27883 = (0);
var inst_27884 = (0);
var state_27940__$1 = (function (){var statearr_27968 = state_27940;
(statearr_27968[(12)] = inst_27882);

(statearr_27968[(13)] = inst_27881);

(statearr_27968[(14)] = inst_27884);

(statearr_27968[(15)] = inst_27883);

return statearr_27968;
})();
var statearr_27969_28014 = state_27940__$1;
(statearr_27969_28014[(2)] = null);

(statearr_27969_28014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (14))){
var state_27940__$1 = state_27940;
var statearr_27973_28015 = state_27940__$1;
(statearr_27973_28015[(2)] = null);

(statearr_27973_28015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (16))){
var inst_27895 = (state_27940[(10)]);
var inst_27899 = cljs.core.chunk_first.call(null,inst_27895);
var inst_27900 = cljs.core.chunk_rest.call(null,inst_27895);
var inst_27901 = cljs.core.count.call(null,inst_27899);
var inst_27881 = inst_27900;
var inst_27882 = inst_27899;
var inst_27883 = inst_27901;
var inst_27884 = (0);
var state_27940__$1 = (function (){var statearr_27974 = state_27940;
(statearr_27974[(12)] = inst_27882);

(statearr_27974[(13)] = inst_27881);

(statearr_27974[(14)] = inst_27884);

(statearr_27974[(15)] = inst_27883);

return statearr_27974;
})();
var statearr_27975_28016 = state_27940__$1;
(statearr_27975_28016[(2)] = null);

(statearr_27975_28016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (10))){
var inst_27882 = (state_27940[(12)]);
var inst_27881 = (state_27940[(13)]);
var inst_27884 = (state_27940[(14)]);
var inst_27883 = (state_27940[(15)]);
var inst_27889 = cljs.core._nth.call(null,inst_27882,inst_27884);
var inst_27890 = cljs.core.async.muxch_STAR_.call(null,inst_27889);
var inst_27891 = cljs.core.async.close_BANG_.call(null,inst_27890);
var inst_27892 = (inst_27884 + (1));
var tmp27970 = inst_27882;
var tmp27971 = inst_27881;
var tmp27972 = inst_27883;
var inst_27881__$1 = tmp27971;
var inst_27882__$1 = tmp27970;
var inst_27883__$1 = tmp27972;
var inst_27884__$1 = inst_27892;
var state_27940__$1 = (function (){var statearr_27976 = state_27940;
(statearr_27976[(12)] = inst_27882__$1);

(statearr_27976[(13)] = inst_27881__$1);

(statearr_27976[(14)] = inst_27884__$1);

(statearr_27976[(15)] = inst_27883__$1);

(statearr_27976[(17)] = inst_27891);

return statearr_27976;
})();
var statearr_27977_28017 = state_27940__$1;
(statearr_27977_28017[(2)] = null);

(statearr_27977_28017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (18))){
var inst_27910 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27978_28018 = state_27940__$1;
(statearr_27978_28018[(2)] = inst_27910);

(statearr_27978_28018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (8))){
var inst_27884 = (state_27940[(14)]);
var inst_27883 = (state_27940[(15)]);
var inst_27886 = (inst_27884 < inst_27883);
var inst_27887 = inst_27886;
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27887)){
var statearr_27979_28019 = state_27940__$1;
(statearr_27979_28019[(1)] = (10));

} else {
var statearr_27980_28020 = state_27940__$1;
(statearr_27980_28020[(1)] = (11));

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
});})(c__26039__auto___27992,mults,ensure_mult,p))
;
return ((function (switch__25927__auto__,c__26039__auto___27992,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_27984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27984[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_27984[(1)] = (1));

return statearr_27984;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_27940){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_27940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e27985){if((e27985 instanceof Object)){
var ex__25931__auto__ = e27985;
var statearr_27986_28021 = state_27940;
(statearr_27986_28021[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28022 = state_27940;
state_27940 = G__28022;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_27940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_27940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___27992,mults,ensure_mult,p))
})();
var state__26041__auto__ = (function (){var statearr_27987 = f__26040__auto__.call(null);
(statearr_27987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___27992);

return statearr_27987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___27992,mults,ensure_mult,p))
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
var args28023 = [];
var len__20732__auto___28026 = arguments.length;
var i__20733__auto___28027 = (0);
while(true){
if((i__20733__auto___28027 < len__20732__auto___28026)){
args28023.push((arguments[i__20733__auto___28027]));

var G__28028 = (i__20733__auto___28027 + (1));
i__20733__auto___28027 = G__28028;
continue;
} else {
}
break;
}

var G__28025 = args28023.length;
switch (G__28025) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28023.length)].join('')));

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
var args28030 = [];
var len__20732__auto___28033 = arguments.length;
var i__20733__auto___28034 = (0);
while(true){
if((i__20733__auto___28034 < len__20732__auto___28033)){
args28030.push((arguments[i__20733__auto___28034]));

var G__28035 = (i__20733__auto___28034 + (1));
i__20733__auto___28034 = G__28035;
continue;
} else {
}
break;
}

var G__28032 = args28030.length;
switch (G__28032) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28030.length)].join('')));

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
var args28037 = [];
var len__20732__auto___28108 = arguments.length;
var i__20733__auto___28109 = (0);
while(true){
if((i__20733__auto___28109 < len__20732__auto___28108)){
args28037.push((arguments[i__20733__auto___28109]));

var G__28110 = (i__20733__auto___28109 + (1));
i__20733__auto___28109 = G__28110;
continue;
} else {
}
break;
}

var G__28039 = args28037.length;
switch (G__28039) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28037.length)].join('')));

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
var c__26039__auto___28112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28078){
var state_val_28079 = (state_28078[(1)]);
if((state_val_28079 === (7))){
var state_28078__$1 = state_28078;
var statearr_28080_28113 = state_28078__$1;
(statearr_28080_28113[(2)] = null);

(statearr_28080_28113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (1))){
var state_28078__$1 = state_28078;
var statearr_28081_28114 = state_28078__$1;
(statearr_28081_28114[(2)] = null);

(statearr_28081_28114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (4))){
var inst_28042 = (state_28078[(7)]);
var inst_28044 = (inst_28042 < cnt);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28044)){
var statearr_28082_28115 = state_28078__$1;
(statearr_28082_28115[(1)] = (6));

} else {
var statearr_28083_28116 = state_28078__$1;
(statearr_28083_28116[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (15))){
var inst_28074 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28084_28117 = state_28078__$1;
(statearr_28084_28117[(2)] = inst_28074);

(statearr_28084_28117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (13))){
var inst_28067 = cljs.core.async.close_BANG_.call(null,out);
var state_28078__$1 = state_28078;
var statearr_28085_28118 = state_28078__$1;
(statearr_28085_28118[(2)] = inst_28067);

(statearr_28085_28118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (6))){
var state_28078__$1 = state_28078;
var statearr_28086_28119 = state_28078__$1;
(statearr_28086_28119[(2)] = null);

(statearr_28086_28119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (3))){
var inst_28076 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28078__$1,inst_28076);
} else {
if((state_val_28079 === (12))){
var inst_28064 = (state_28078[(8)]);
var inst_28064__$1 = (state_28078[(2)]);
var inst_28065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28064__$1);
var state_28078__$1 = (function (){var statearr_28087 = state_28078;
(statearr_28087[(8)] = inst_28064__$1);

return statearr_28087;
})();
if(cljs.core.truth_(inst_28065)){
var statearr_28088_28120 = state_28078__$1;
(statearr_28088_28120[(1)] = (13));

} else {
var statearr_28089_28121 = state_28078__$1;
(statearr_28089_28121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (2))){
var inst_28041 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28042 = (0);
var state_28078__$1 = (function (){var statearr_28090 = state_28078;
(statearr_28090[(9)] = inst_28041);

(statearr_28090[(7)] = inst_28042);

return statearr_28090;
})();
var statearr_28091_28122 = state_28078__$1;
(statearr_28091_28122[(2)] = null);

(statearr_28091_28122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (11))){
var inst_28042 = (state_28078[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28078,(10),Object,null,(9));
var inst_28051 = chs__$1.call(null,inst_28042);
var inst_28052 = done.call(null,inst_28042);
var inst_28053 = cljs.core.async.take_BANG_.call(null,inst_28051,inst_28052);
var state_28078__$1 = state_28078;
var statearr_28092_28123 = state_28078__$1;
(statearr_28092_28123[(2)] = inst_28053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (9))){
var inst_28042 = (state_28078[(7)]);
var inst_28055 = (state_28078[(2)]);
var inst_28056 = (inst_28042 + (1));
var inst_28042__$1 = inst_28056;
var state_28078__$1 = (function (){var statearr_28093 = state_28078;
(statearr_28093[(7)] = inst_28042__$1);

(statearr_28093[(10)] = inst_28055);

return statearr_28093;
})();
var statearr_28094_28124 = state_28078__$1;
(statearr_28094_28124[(2)] = null);

(statearr_28094_28124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (5))){
var inst_28062 = (state_28078[(2)]);
var state_28078__$1 = (function (){var statearr_28095 = state_28078;
(statearr_28095[(11)] = inst_28062);

return statearr_28095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28078__$1,(12),dchan);
} else {
if((state_val_28079 === (14))){
var inst_28064 = (state_28078[(8)]);
var inst_28069 = cljs.core.apply.call(null,f,inst_28064);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28078__$1,(16),out,inst_28069);
} else {
if((state_val_28079 === (16))){
var inst_28071 = (state_28078[(2)]);
var state_28078__$1 = (function (){var statearr_28096 = state_28078;
(statearr_28096[(12)] = inst_28071);

return statearr_28096;
})();
var statearr_28097_28125 = state_28078__$1;
(statearr_28097_28125[(2)] = null);

(statearr_28097_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (10))){
var inst_28046 = (state_28078[(2)]);
var inst_28047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28078__$1 = (function (){var statearr_28098 = state_28078;
(statearr_28098[(13)] = inst_28046);

return statearr_28098;
})();
var statearr_28099_28126 = state_28078__$1;
(statearr_28099_28126[(2)] = inst_28047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (8))){
var inst_28060 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28100_28127 = state_28078__$1;
(statearr_28100_28127[(2)] = inst_28060);

(statearr_28100_28127[(1)] = (5));


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
});})(c__26039__auto___28112,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25927__auto__,c__26039__auto___28112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28104[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28104[(1)] = (1));

return statearr_28104;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28078){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28105){if((e28105 instanceof Object)){
var ex__25931__auto__ = e28105;
var statearr_28106_28128 = state_28078;
(statearr_28106_28128[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28129 = state_28078;
state_28078 = G__28129;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28112,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26041__auto__ = (function (){var statearr_28107 = f__26040__auto__.call(null);
(statearr_28107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28112);

return statearr_28107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28112,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28131 = [];
var len__20732__auto___28189 = arguments.length;
var i__20733__auto___28190 = (0);
while(true){
if((i__20733__auto___28190 < len__20732__auto___28189)){
args28131.push((arguments[i__20733__auto___28190]));

var G__28191 = (i__20733__auto___28190 + (1));
i__20733__auto___28190 = G__28191;
continue;
} else {
}
break;
}

var G__28133 = args28131.length;
switch (G__28133) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28131.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26039__auto___28193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28193,out){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28193,out){
return (function (state_28165){
var state_val_28166 = (state_28165[(1)]);
if((state_val_28166 === (7))){
var inst_28144 = (state_28165[(7)]);
var inst_28145 = (state_28165[(8)]);
var inst_28144__$1 = (state_28165[(2)]);
var inst_28145__$1 = cljs.core.nth.call(null,inst_28144__$1,(0),null);
var inst_28146 = cljs.core.nth.call(null,inst_28144__$1,(1),null);
var inst_28147 = (inst_28145__$1 == null);
var state_28165__$1 = (function (){var statearr_28167 = state_28165;
(statearr_28167[(9)] = inst_28146);

(statearr_28167[(7)] = inst_28144__$1);

(statearr_28167[(8)] = inst_28145__$1);

return statearr_28167;
})();
if(cljs.core.truth_(inst_28147)){
var statearr_28168_28194 = state_28165__$1;
(statearr_28168_28194[(1)] = (8));

} else {
var statearr_28169_28195 = state_28165__$1;
(statearr_28169_28195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (1))){
var inst_28134 = cljs.core.vec.call(null,chs);
var inst_28135 = inst_28134;
var state_28165__$1 = (function (){var statearr_28170 = state_28165;
(statearr_28170[(10)] = inst_28135);

return statearr_28170;
})();
var statearr_28171_28196 = state_28165__$1;
(statearr_28171_28196[(2)] = null);

(statearr_28171_28196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (4))){
var inst_28135 = (state_28165[(10)]);
var state_28165__$1 = state_28165;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28165__$1,(7),inst_28135);
} else {
if((state_val_28166 === (6))){
var inst_28161 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28172_28197 = state_28165__$1;
(statearr_28172_28197[(2)] = inst_28161);

(statearr_28172_28197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (3))){
var inst_28163 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28165__$1,inst_28163);
} else {
if((state_val_28166 === (2))){
var inst_28135 = (state_28165[(10)]);
var inst_28137 = cljs.core.count.call(null,inst_28135);
var inst_28138 = (inst_28137 > (0));
var state_28165__$1 = state_28165;
if(cljs.core.truth_(inst_28138)){
var statearr_28174_28198 = state_28165__$1;
(statearr_28174_28198[(1)] = (4));

} else {
var statearr_28175_28199 = state_28165__$1;
(statearr_28175_28199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (11))){
var inst_28135 = (state_28165[(10)]);
var inst_28154 = (state_28165[(2)]);
var tmp28173 = inst_28135;
var inst_28135__$1 = tmp28173;
var state_28165__$1 = (function (){var statearr_28176 = state_28165;
(statearr_28176[(11)] = inst_28154);

(statearr_28176[(10)] = inst_28135__$1);

return statearr_28176;
})();
var statearr_28177_28200 = state_28165__$1;
(statearr_28177_28200[(2)] = null);

(statearr_28177_28200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (9))){
var inst_28145 = (state_28165[(8)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28165__$1,(11),out,inst_28145);
} else {
if((state_val_28166 === (5))){
var inst_28159 = cljs.core.async.close_BANG_.call(null,out);
var state_28165__$1 = state_28165;
var statearr_28178_28201 = state_28165__$1;
(statearr_28178_28201[(2)] = inst_28159);

(statearr_28178_28201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (10))){
var inst_28157 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28179_28202 = state_28165__$1;
(statearr_28179_28202[(2)] = inst_28157);

(statearr_28179_28202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (8))){
var inst_28135 = (state_28165[(10)]);
var inst_28146 = (state_28165[(9)]);
var inst_28144 = (state_28165[(7)]);
var inst_28145 = (state_28165[(8)]);
var inst_28149 = (function (){var cs = inst_28135;
var vec__28140 = inst_28144;
var v = inst_28145;
var c = inst_28146;
return ((function (cs,vec__28140,v,c,inst_28135,inst_28146,inst_28144,inst_28145,state_val_28166,c__26039__auto___28193,out){
return (function (p1__28130_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28130_SHARP_);
});
;})(cs,vec__28140,v,c,inst_28135,inst_28146,inst_28144,inst_28145,state_val_28166,c__26039__auto___28193,out))
})();
var inst_28150 = cljs.core.filterv.call(null,inst_28149,inst_28135);
var inst_28135__$1 = inst_28150;
var state_28165__$1 = (function (){var statearr_28180 = state_28165;
(statearr_28180[(10)] = inst_28135__$1);

return statearr_28180;
})();
var statearr_28181_28203 = state_28165__$1;
(statearr_28181_28203[(2)] = null);

(statearr_28181_28203[(1)] = (2));


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
});})(c__26039__auto___28193,out))
;
return ((function (switch__25927__auto__,c__26039__auto___28193,out){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28185[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28185[(1)] = (1));

return statearr_28185;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28165){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28186){if((e28186 instanceof Object)){
var ex__25931__auto__ = e28186;
var statearr_28187_28204 = state_28165;
(statearr_28187_28204[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28205 = state_28165;
state_28165 = G__28205;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28193,out))
})();
var state__26041__auto__ = (function (){var statearr_28188 = f__26040__auto__.call(null);
(statearr_28188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28193);

return statearr_28188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28193,out))
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
var args28206 = [];
var len__20732__auto___28255 = arguments.length;
var i__20733__auto___28256 = (0);
while(true){
if((i__20733__auto___28256 < len__20732__auto___28255)){
args28206.push((arguments[i__20733__auto___28256]));

var G__28257 = (i__20733__auto___28256 + (1));
i__20733__auto___28256 = G__28257;
continue;
} else {
}
break;
}

var G__28208 = args28206.length;
switch (G__28208) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28206.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26039__auto___28259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28259,out){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28259,out){
return (function (state_28232){
var state_val_28233 = (state_28232[(1)]);
if((state_val_28233 === (7))){
var inst_28214 = (state_28232[(7)]);
var inst_28214__$1 = (state_28232[(2)]);
var inst_28215 = (inst_28214__$1 == null);
var inst_28216 = cljs.core.not.call(null,inst_28215);
var state_28232__$1 = (function (){var statearr_28234 = state_28232;
(statearr_28234[(7)] = inst_28214__$1);

return statearr_28234;
})();
if(inst_28216){
var statearr_28235_28260 = state_28232__$1;
(statearr_28235_28260[(1)] = (8));

} else {
var statearr_28236_28261 = state_28232__$1;
(statearr_28236_28261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (1))){
var inst_28209 = (0);
var state_28232__$1 = (function (){var statearr_28237 = state_28232;
(statearr_28237[(8)] = inst_28209);

return statearr_28237;
})();
var statearr_28238_28262 = state_28232__$1;
(statearr_28238_28262[(2)] = null);

(statearr_28238_28262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (4))){
var state_28232__$1 = state_28232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28232__$1,(7),ch);
} else {
if((state_val_28233 === (6))){
var inst_28227 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
var statearr_28239_28263 = state_28232__$1;
(statearr_28239_28263[(2)] = inst_28227);

(statearr_28239_28263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (3))){
var inst_28229 = (state_28232[(2)]);
var inst_28230 = cljs.core.async.close_BANG_.call(null,out);
var state_28232__$1 = (function (){var statearr_28240 = state_28232;
(statearr_28240[(9)] = inst_28229);

return statearr_28240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28232__$1,inst_28230);
} else {
if((state_val_28233 === (2))){
var inst_28209 = (state_28232[(8)]);
var inst_28211 = (inst_28209 < n);
var state_28232__$1 = state_28232;
if(cljs.core.truth_(inst_28211)){
var statearr_28241_28264 = state_28232__$1;
(statearr_28241_28264[(1)] = (4));

} else {
var statearr_28242_28265 = state_28232__$1;
(statearr_28242_28265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (11))){
var inst_28209 = (state_28232[(8)]);
var inst_28219 = (state_28232[(2)]);
var inst_28220 = (inst_28209 + (1));
var inst_28209__$1 = inst_28220;
var state_28232__$1 = (function (){var statearr_28243 = state_28232;
(statearr_28243[(10)] = inst_28219);

(statearr_28243[(8)] = inst_28209__$1);

return statearr_28243;
})();
var statearr_28244_28266 = state_28232__$1;
(statearr_28244_28266[(2)] = null);

(statearr_28244_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (9))){
var state_28232__$1 = state_28232;
var statearr_28245_28267 = state_28232__$1;
(statearr_28245_28267[(2)] = null);

(statearr_28245_28267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (5))){
var state_28232__$1 = state_28232;
var statearr_28246_28268 = state_28232__$1;
(statearr_28246_28268[(2)] = null);

(statearr_28246_28268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (10))){
var inst_28224 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
var statearr_28247_28269 = state_28232__$1;
(statearr_28247_28269[(2)] = inst_28224);

(statearr_28247_28269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (8))){
var inst_28214 = (state_28232[(7)]);
var state_28232__$1 = state_28232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28232__$1,(11),out,inst_28214);
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
});})(c__26039__auto___28259,out))
;
return ((function (switch__25927__auto__,c__26039__auto___28259,out){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28251[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28251[(1)] = (1));

return statearr_28251;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28232){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28252){if((e28252 instanceof Object)){
var ex__25931__auto__ = e28252;
var statearr_28253_28270 = state_28232;
(statearr_28253_28270[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28232;
state_28232 = G__28271;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28259,out))
})();
var state__26041__auto__ = (function (){var statearr_28254 = f__26040__auto__.call(null);
(statearr_28254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28259);

return statearr_28254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28259,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28279 = (function (f,ch,meta28280){
this.f = f;
this.ch = ch;
this.meta28280 = meta28280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28281,meta28280__$1){
var self__ = this;
var _28281__$1 = this;
return (new cljs.core.async.t_cljs$core$async28279(self__.f,self__.ch,meta28280__$1));
});

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28281){
var self__ = this;
var _28281__$1 = this;
return self__.meta28280;
});

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28282 = (function (f,ch,meta28280,_,fn1,meta28283){
this.f = f;
this.ch = ch;
this.meta28280 = meta28280;
this._ = _;
this.fn1 = fn1;
this.meta28283 = meta28283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28284,meta28283__$1){
var self__ = this;
var _28284__$1 = this;
return (new cljs.core.async.t_cljs$core$async28282(self__.f,self__.ch,self__.meta28280,self__._,self__.fn1,meta28283__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28284){
var self__ = this;
var _28284__$1 = this;
return self__.meta28283;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28282.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28272_SHARP_){
return f1.call(null,(((p1__28272_SHARP_ == null))?null:self__.f.call(null,p1__28272_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28282.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28280","meta28280",-1797654565,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28279","cljs.core.async/t_cljs$core$async28279",-206304488,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28283","meta28283",1285775323,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28282";

cljs.core.async.t_cljs$core$async28282.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async28282");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28282 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28282(f__$1,ch__$1,meta28280__$1,___$2,fn1__$1,meta28283){
return (new cljs.core.async.t_cljs$core$async28282(f__$1,ch__$1,meta28280__$1,___$2,fn1__$1,meta28283));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28282(self__.f,self__.ch,self__.meta28280,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19612__auto__ = ret;
if(cljs.core.truth_(and__19612__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19612__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28280","meta28280",-1797654565,null)], null);
});

cljs.core.async.t_cljs$core$async28279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28279";

cljs.core.async.t_cljs$core$async28279.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async28279");
});

cljs.core.async.__GT_t_cljs$core$async28279 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28279(f__$1,ch__$1,meta28280){
return (new cljs.core.async.t_cljs$core$async28279(f__$1,ch__$1,meta28280));
});

}

return (new cljs.core.async.t_cljs$core$async28279(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28288 = (function (f,ch,meta28289){
this.f = f;
this.ch = ch;
this.meta28289 = meta28289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28290,meta28289__$1){
var self__ = this;
var _28290__$1 = this;
return (new cljs.core.async.t_cljs$core$async28288(self__.f,self__.ch,meta28289__$1));
});

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28290){
var self__ = this;
var _28290__$1 = this;
return self__.meta28289;
});

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28289","meta28289",-954000455,null)], null);
});

cljs.core.async.t_cljs$core$async28288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28288";

cljs.core.async.t_cljs$core$async28288.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async28288");
});

cljs.core.async.__GT_t_cljs$core$async28288 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28288(f__$1,ch__$1,meta28289){
return (new cljs.core.async.t_cljs$core$async28288(f__$1,ch__$1,meta28289));
});

}

return (new cljs.core.async.t_cljs$core$async28288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28294 = (function (p,ch,meta28295){
this.p = p;
this.ch = ch;
this.meta28295 = meta28295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28296,meta28295__$1){
var self__ = this;
var _28296__$1 = this;
return (new cljs.core.async.t_cljs$core$async28294(self__.p,self__.ch,meta28295__$1));
});

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28296){
var self__ = this;
var _28296__$1 = this;
return self__.meta28295;
});

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28295","meta28295",165194092,null)], null);
});

cljs.core.async.t_cljs$core$async28294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28294";

cljs.core.async.t_cljs$core$async28294.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cljs.core.async/t_cljs$core$async28294");
});

cljs.core.async.__GT_t_cljs$core$async28294 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28294(p__$1,ch__$1,meta28295){
return (new cljs.core.async.t_cljs$core$async28294(p__$1,ch__$1,meta28295));
});

}

return (new cljs.core.async.t_cljs$core$async28294(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28297 = [];
var len__20732__auto___28341 = arguments.length;
var i__20733__auto___28342 = (0);
while(true){
if((i__20733__auto___28342 < len__20732__auto___28341)){
args28297.push((arguments[i__20733__auto___28342]));

var G__28343 = (i__20733__auto___28342 + (1));
i__20733__auto___28342 = G__28343;
continue;
} else {
}
break;
}

var G__28299 = args28297.length;
switch (G__28299) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28297.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26039__auto___28345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28345,out){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28345,out){
return (function (state_28320){
var state_val_28321 = (state_28320[(1)]);
if((state_val_28321 === (7))){
var inst_28316 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28322_28346 = state_28320__$1;
(statearr_28322_28346[(2)] = inst_28316);

(statearr_28322_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (1))){
var state_28320__$1 = state_28320;
var statearr_28323_28347 = state_28320__$1;
(statearr_28323_28347[(2)] = null);

(statearr_28323_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (4))){
var inst_28302 = (state_28320[(7)]);
var inst_28302__$1 = (state_28320[(2)]);
var inst_28303 = (inst_28302__$1 == null);
var state_28320__$1 = (function (){var statearr_28324 = state_28320;
(statearr_28324[(7)] = inst_28302__$1);

return statearr_28324;
})();
if(cljs.core.truth_(inst_28303)){
var statearr_28325_28348 = state_28320__$1;
(statearr_28325_28348[(1)] = (5));

} else {
var statearr_28326_28349 = state_28320__$1;
(statearr_28326_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (6))){
var inst_28302 = (state_28320[(7)]);
var inst_28307 = p.call(null,inst_28302);
var state_28320__$1 = state_28320;
if(cljs.core.truth_(inst_28307)){
var statearr_28327_28350 = state_28320__$1;
(statearr_28327_28350[(1)] = (8));

} else {
var statearr_28328_28351 = state_28320__$1;
(statearr_28328_28351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (3))){
var inst_28318 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28320__$1,inst_28318);
} else {
if((state_val_28321 === (2))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(4),ch);
} else {
if((state_val_28321 === (11))){
var inst_28310 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28329_28352 = state_28320__$1;
(statearr_28329_28352[(2)] = inst_28310);

(statearr_28329_28352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (9))){
var state_28320__$1 = state_28320;
var statearr_28330_28353 = state_28320__$1;
(statearr_28330_28353[(2)] = null);

(statearr_28330_28353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (5))){
var inst_28305 = cljs.core.async.close_BANG_.call(null,out);
var state_28320__$1 = state_28320;
var statearr_28331_28354 = state_28320__$1;
(statearr_28331_28354[(2)] = inst_28305);

(statearr_28331_28354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (10))){
var inst_28313 = (state_28320[(2)]);
var state_28320__$1 = (function (){var statearr_28332 = state_28320;
(statearr_28332[(8)] = inst_28313);

return statearr_28332;
})();
var statearr_28333_28355 = state_28320__$1;
(statearr_28333_28355[(2)] = null);

(statearr_28333_28355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (8))){
var inst_28302 = (state_28320[(7)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28320__$1,(11),out,inst_28302);
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
});})(c__26039__auto___28345,out))
;
return ((function (switch__25927__auto__,c__26039__auto___28345,out){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28337 = [null,null,null,null,null,null,null,null,null];
(statearr_28337[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28337[(1)] = (1));

return statearr_28337;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28320){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28338){if((e28338 instanceof Object)){
var ex__25931__auto__ = e28338;
var statearr_28339_28356 = state_28320;
(statearr_28339_28356[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28357 = state_28320;
state_28320 = G__28357;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28345,out))
})();
var state__26041__auto__ = (function (){var statearr_28340 = f__26040__auto__.call(null);
(statearr_28340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28345);

return statearr_28340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28345,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28358 = [];
var len__20732__auto___28361 = arguments.length;
var i__20733__auto___28362 = (0);
while(true){
if((i__20733__auto___28362 < len__20732__auto___28361)){
args28358.push((arguments[i__20733__auto___28362]));

var G__28363 = (i__20733__auto___28362 + (1));
i__20733__auto___28362 = G__28363;
continue;
} else {
}
break;
}

var G__28360 = args28358.length;
switch (G__28360) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28358.length)].join('')));

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
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__){
return (function (state_28530){
var state_val_28531 = (state_28530[(1)]);
if((state_val_28531 === (7))){
var inst_28526 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28532_28573 = state_28530__$1;
(statearr_28532_28573[(2)] = inst_28526);

(statearr_28532_28573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (20))){
var inst_28496 = (state_28530[(7)]);
var inst_28507 = (state_28530[(2)]);
var inst_28508 = cljs.core.next.call(null,inst_28496);
var inst_28482 = inst_28508;
var inst_28483 = null;
var inst_28484 = (0);
var inst_28485 = (0);
var state_28530__$1 = (function (){var statearr_28533 = state_28530;
(statearr_28533[(8)] = inst_28507);

(statearr_28533[(9)] = inst_28484);

(statearr_28533[(10)] = inst_28485);

(statearr_28533[(11)] = inst_28483);

(statearr_28533[(12)] = inst_28482);

return statearr_28533;
})();
var statearr_28534_28574 = state_28530__$1;
(statearr_28534_28574[(2)] = null);

(statearr_28534_28574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (1))){
var state_28530__$1 = state_28530;
var statearr_28535_28575 = state_28530__$1;
(statearr_28535_28575[(2)] = null);

(statearr_28535_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (4))){
var inst_28471 = (state_28530[(13)]);
var inst_28471__$1 = (state_28530[(2)]);
var inst_28472 = (inst_28471__$1 == null);
var state_28530__$1 = (function (){var statearr_28536 = state_28530;
(statearr_28536[(13)] = inst_28471__$1);

return statearr_28536;
})();
if(cljs.core.truth_(inst_28472)){
var statearr_28537_28576 = state_28530__$1;
(statearr_28537_28576[(1)] = (5));

} else {
var statearr_28538_28577 = state_28530__$1;
(statearr_28538_28577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (15))){
var state_28530__$1 = state_28530;
var statearr_28542_28578 = state_28530__$1;
(statearr_28542_28578[(2)] = null);

(statearr_28542_28578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (21))){
var state_28530__$1 = state_28530;
var statearr_28543_28579 = state_28530__$1;
(statearr_28543_28579[(2)] = null);

(statearr_28543_28579[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (13))){
var inst_28484 = (state_28530[(9)]);
var inst_28485 = (state_28530[(10)]);
var inst_28483 = (state_28530[(11)]);
var inst_28482 = (state_28530[(12)]);
var inst_28492 = (state_28530[(2)]);
var inst_28493 = (inst_28485 + (1));
var tmp28539 = inst_28484;
var tmp28540 = inst_28483;
var tmp28541 = inst_28482;
var inst_28482__$1 = tmp28541;
var inst_28483__$1 = tmp28540;
var inst_28484__$1 = tmp28539;
var inst_28485__$1 = inst_28493;
var state_28530__$1 = (function (){var statearr_28544 = state_28530;
(statearr_28544[(9)] = inst_28484__$1);

(statearr_28544[(10)] = inst_28485__$1);

(statearr_28544[(11)] = inst_28483__$1);

(statearr_28544[(12)] = inst_28482__$1);

(statearr_28544[(14)] = inst_28492);

return statearr_28544;
})();
var statearr_28545_28580 = state_28530__$1;
(statearr_28545_28580[(2)] = null);

(statearr_28545_28580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (22))){
var state_28530__$1 = state_28530;
var statearr_28546_28581 = state_28530__$1;
(statearr_28546_28581[(2)] = null);

(statearr_28546_28581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (6))){
var inst_28471 = (state_28530[(13)]);
var inst_28480 = f.call(null,inst_28471);
var inst_28481 = cljs.core.seq.call(null,inst_28480);
var inst_28482 = inst_28481;
var inst_28483 = null;
var inst_28484 = (0);
var inst_28485 = (0);
var state_28530__$1 = (function (){var statearr_28547 = state_28530;
(statearr_28547[(9)] = inst_28484);

(statearr_28547[(10)] = inst_28485);

(statearr_28547[(11)] = inst_28483);

(statearr_28547[(12)] = inst_28482);

return statearr_28547;
})();
var statearr_28548_28582 = state_28530__$1;
(statearr_28548_28582[(2)] = null);

(statearr_28548_28582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (17))){
var inst_28496 = (state_28530[(7)]);
var inst_28500 = cljs.core.chunk_first.call(null,inst_28496);
var inst_28501 = cljs.core.chunk_rest.call(null,inst_28496);
var inst_28502 = cljs.core.count.call(null,inst_28500);
var inst_28482 = inst_28501;
var inst_28483 = inst_28500;
var inst_28484 = inst_28502;
var inst_28485 = (0);
var state_28530__$1 = (function (){var statearr_28549 = state_28530;
(statearr_28549[(9)] = inst_28484);

(statearr_28549[(10)] = inst_28485);

(statearr_28549[(11)] = inst_28483);

(statearr_28549[(12)] = inst_28482);

return statearr_28549;
})();
var statearr_28550_28583 = state_28530__$1;
(statearr_28550_28583[(2)] = null);

(statearr_28550_28583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (3))){
var inst_28528 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28530__$1,inst_28528);
} else {
if((state_val_28531 === (12))){
var inst_28516 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28551_28584 = state_28530__$1;
(statearr_28551_28584[(2)] = inst_28516);

(statearr_28551_28584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (2))){
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28530__$1,(4),in$);
} else {
if((state_val_28531 === (23))){
var inst_28524 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28552_28585 = state_28530__$1;
(statearr_28552_28585[(2)] = inst_28524);

(statearr_28552_28585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (19))){
var inst_28511 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28553_28586 = state_28530__$1;
(statearr_28553_28586[(2)] = inst_28511);

(statearr_28553_28586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (11))){
var inst_28482 = (state_28530[(12)]);
var inst_28496 = (state_28530[(7)]);
var inst_28496__$1 = cljs.core.seq.call(null,inst_28482);
var state_28530__$1 = (function (){var statearr_28554 = state_28530;
(statearr_28554[(7)] = inst_28496__$1);

return statearr_28554;
})();
if(inst_28496__$1){
var statearr_28555_28587 = state_28530__$1;
(statearr_28555_28587[(1)] = (14));

} else {
var statearr_28556_28588 = state_28530__$1;
(statearr_28556_28588[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (9))){
var inst_28518 = (state_28530[(2)]);
var inst_28519 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28530__$1 = (function (){var statearr_28557 = state_28530;
(statearr_28557[(15)] = inst_28518);

return statearr_28557;
})();
if(cljs.core.truth_(inst_28519)){
var statearr_28558_28589 = state_28530__$1;
(statearr_28558_28589[(1)] = (21));

} else {
var statearr_28559_28590 = state_28530__$1;
(statearr_28559_28590[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (5))){
var inst_28474 = cljs.core.async.close_BANG_.call(null,out);
var state_28530__$1 = state_28530;
var statearr_28560_28591 = state_28530__$1;
(statearr_28560_28591[(2)] = inst_28474);

(statearr_28560_28591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (14))){
var inst_28496 = (state_28530[(7)]);
var inst_28498 = cljs.core.chunked_seq_QMARK_.call(null,inst_28496);
var state_28530__$1 = state_28530;
if(inst_28498){
var statearr_28561_28592 = state_28530__$1;
(statearr_28561_28592[(1)] = (17));

} else {
var statearr_28562_28593 = state_28530__$1;
(statearr_28562_28593[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (16))){
var inst_28514 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28563_28594 = state_28530__$1;
(statearr_28563_28594[(2)] = inst_28514);

(statearr_28563_28594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (10))){
var inst_28485 = (state_28530[(10)]);
var inst_28483 = (state_28530[(11)]);
var inst_28490 = cljs.core._nth.call(null,inst_28483,inst_28485);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28530__$1,(13),out,inst_28490);
} else {
if((state_val_28531 === (18))){
var inst_28496 = (state_28530[(7)]);
var inst_28505 = cljs.core.first.call(null,inst_28496);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28530__$1,(20),out,inst_28505);
} else {
if((state_val_28531 === (8))){
var inst_28484 = (state_28530[(9)]);
var inst_28485 = (state_28530[(10)]);
var inst_28487 = (inst_28485 < inst_28484);
var inst_28488 = inst_28487;
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28488)){
var statearr_28564_28595 = state_28530__$1;
(statearr_28564_28595[(1)] = (10));

} else {
var statearr_28565_28596 = state_28530__$1;
(statearr_28565_28596[(1)] = (11));

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
});})(c__26039__auto__))
;
return ((function (switch__25927__auto__,c__26039__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25928__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25928__auto____0 = (function (){
var statearr_28569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28569[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25928__auto__);

(statearr_28569[(1)] = (1));

return statearr_28569;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25928__auto____1 = (function (state_28530){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28570){if((e28570 instanceof Object)){
var ex__25931__auto__ = e28570;
var statearr_28571_28597 = state_28530;
(statearr_28571_28597[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28598 = state_28530;
state_28530 = G__28598;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25928__auto__ = function(state_28530){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25928__auto____1.call(this,state_28530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25928__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25928__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__))
})();
var state__26041__auto__ = (function (){var statearr_28572 = f__26040__auto__.call(null);
(statearr_28572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_28572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__))
);

return c__26039__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28599 = [];
var len__20732__auto___28602 = arguments.length;
var i__20733__auto___28603 = (0);
while(true){
if((i__20733__auto___28603 < len__20732__auto___28602)){
args28599.push((arguments[i__20733__auto___28603]));

var G__28604 = (i__20733__auto___28603 + (1));
i__20733__auto___28603 = G__28604;
continue;
} else {
}
break;
}

var G__28601 = args28599.length;
switch (G__28601) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28599.length)].join('')));

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
var args28606 = [];
var len__20732__auto___28609 = arguments.length;
var i__20733__auto___28610 = (0);
while(true){
if((i__20733__auto___28610 < len__20732__auto___28609)){
args28606.push((arguments[i__20733__auto___28610]));

var G__28611 = (i__20733__auto___28610 + (1));
i__20733__auto___28610 = G__28611;
continue;
} else {
}
break;
}

var G__28608 = args28606.length;
switch (G__28608) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28606.length)].join('')));

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
var args28613 = [];
var len__20732__auto___28664 = arguments.length;
var i__20733__auto___28665 = (0);
while(true){
if((i__20733__auto___28665 < len__20732__auto___28664)){
args28613.push((arguments[i__20733__auto___28665]));

var G__28666 = (i__20733__auto___28665 + (1));
i__20733__auto___28665 = G__28666;
continue;
} else {
}
break;
}

var G__28615 = args28613.length;
switch (G__28615) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28613.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26039__auto___28668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28668,out){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28668,out){
return (function (state_28639){
var state_val_28640 = (state_28639[(1)]);
if((state_val_28640 === (7))){
var inst_28634 = (state_28639[(2)]);
var state_28639__$1 = state_28639;
var statearr_28641_28669 = state_28639__$1;
(statearr_28641_28669[(2)] = inst_28634);

(statearr_28641_28669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (1))){
var inst_28616 = null;
var state_28639__$1 = (function (){var statearr_28642 = state_28639;
(statearr_28642[(7)] = inst_28616);

return statearr_28642;
})();
var statearr_28643_28670 = state_28639__$1;
(statearr_28643_28670[(2)] = null);

(statearr_28643_28670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (4))){
var inst_28619 = (state_28639[(8)]);
var inst_28619__$1 = (state_28639[(2)]);
var inst_28620 = (inst_28619__$1 == null);
var inst_28621 = cljs.core.not.call(null,inst_28620);
var state_28639__$1 = (function (){var statearr_28644 = state_28639;
(statearr_28644[(8)] = inst_28619__$1);

return statearr_28644;
})();
if(inst_28621){
var statearr_28645_28671 = state_28639__$1;
(statearr_28645_28671[(1)] = (5));

} else {
var statearr_28646_28672 = state_28639__$1;
(statearr_28646_28672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (6))){
var state_28639__$1 = state_28639;
var statearr_28647_28673 = state_28639__$1;
(statearr_28647_28673[(2)] = null);

(statearr_28647_28673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (3))){
var inst_28636 = (state_28639[(2)]);
var inst_28637 = cljs.core.async.close_BANG_.call(null,out);
var state_28639__$1 = (function (){var statearr_28648 = state_28639;
(statearr_28648[(9)] = inst_28636);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28639__$1,inst_28637);
} else {
if((state_val_28640 === (2))){
var state_28639__$1 = state_28639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28639__$1,(4),ch);
} else {
if((state_val_28640 === (11))){
var inst_28619 = (state_28639[(8)]);
var inst_28628 = (state_28639[(2)]);
var inst_28616 = inst_28619;
var state_28639__$1 = (function (){var statearr_28649 = state_28639;
(statearr_28649[(10)] = inst_28628);

(statearr_28649[(7)] = inst_28616);

return statearr_28649;
})();
var statearr_28650_28674 = state_28639__$1;
(statearr_28650_28674[(2)] = null);

(statearr_28650_28674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (9))){
var inst_28619 = (state_28639[(8)]);
var state_28639__$1 = state_28639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28639__$1,(11),out,inst_28619);
} else {
if((state_val_28640 === (5))){
var inst_28616 = (state_28639[(7)]);
var inst_28619 = (state_28639[(8)]);
var inst_28623 = cljs.core._EQ_.call(null,inst_28619,inst_28616);
var state_28639__$1 = state_28639;
if(inst_28623){
var statearr_28652_28675 = state_28639__$1;
(statearr_28652_28675[(1)] = (8));

} else {
var statearr_28653_28676 = state_28639__$1;
(statearr_28653_28676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (10))){
var inst_28631 = (state_28639[(2)]);
var state_28639__$1 = state_28639;
var statearr_28654_28677 = state_28639__$1;
(statearr_28654_28677[(2)] = inst_28631);

(statearr_28654_28677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (8))){
var inst_28616 = (state_28639[(7)]);
var tmp28651 = inst_28616;
var inst_28616__$1 = tmp28651;
var state_28639__$1 = (function (){var statearr_28655 = state_28639;
(statearr_28655[(7)] = inst_28616__$1);

return statearr_28655;
})();
var statearr_28656_28678 = state_28639__$1;
(statearr_28656_28678[(2)] = null);

(statearr_28656_28678[(1)] = (2));


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
});})(c__26039__auto___28668,out))
;
return ((function (switch__25927__auto__,c__26039__auto___28668,out){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28660 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28660[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28660[(1)] = (1));

return statearr_28660;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28639){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28661){if((e28661 instanceof Object)){
var ex__25931__auto__ = e28661;
var statearr_28662_28679 = state_28639;
(statearr_28662_28679[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28680 = state_28639;
state_28639 = G__28680;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28668,out))
})();
var state__26041__auto__ = (function (){var statearr_28663 = f__26040__auto__.call(null);
(statearr_28663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28668);

return statearr_28663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28668,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28681 = [];
var len__20732__auto___28751 = arguments.length;
var i__20733__auto___28752 = (0);
while(true){
if((i__20733__auto___28752 < len__20732__auto___28751)){
args28681.push((arguments[i__20733__auto___28752]));

var G__28753 = (i__20733__auto___28752 + (1));
i__20733__auto___28752 = G__28753;
continue;
} else {
}
break;
}

var G__28683 = args28681.length;
switch (G__28683) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28681.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26039__auto___28755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28755,out){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28755,out){
return (function (state_28721){
var state_val_28722 = (state_28721[(1)]);
if((state_val_28722 === (7))){
var inst_28717 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28723_28756 = state_28721__$1;
(statearr_28723_28756[(2)] = inst_28717);

(statearr_28723_28756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (1))){
var inst_28684 = (new Array(n));
var inst_28685 = inst_28684;
var inst_28686 = (0);
var state_28721__$1 = (function (){var statearr_28724 = state_28721;
(statearr_28724[(7)] = inst_28686);

(statearr_28724[(8)] = inst_28685);

return statearr_28724;
})();
var statearr_28725_28757 = state_28721__$1;
(statearr_28725_28757[(2)] = null);

(statearr_28725_28757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (4))){
var inst_28689 = (state_28721[(9)]);
var inst_28689__$1 = (state_28721[(2)]);
var inst_28690 = (inst_28689__$1 == null);
var inst_28691 = cljs.core.not.call(null,inst_28690);
var state_28721__$1 = (function (){var statearr_28726 = state_28721;
(statearr_28726[(9)] = inst_28689__$1);

return statearr_28726;
})();
if(inst_28691){
var statearr_28727_28758 = state_28721__$1;
(statearr_28727_28758[(1)] = (5));

} else {
var statearr_28728_28759 = state_28721__$1;
(statearr_28728_28759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (15))){
var inst_28711 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28729_28760 = state_28721__$1;
(statearr_28729_28760[(2)] = inst_28711);

(statearr_28729_28760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (13))){
var state_28721__$1 = state_28721;
var statearr_28730_28761 = state_28721__$1;
(statearr_28730_28761[(2)] = null);

(statearr_28730_28761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (6))){
var inst_28686 = (state_28721[(7)]);
var inst_28707 = (inst_28686 > (0));
var state_28721__$1 = state_28721;
if(cljs.core.truth_(inst_28707)){
var statearr_28731_28762 = state_28721__$1;
(statearr_28731_28762[(1)] = (12));

} else {
var statearr_28732_28763 = state_28721__$1;
(statearr_28732_28763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (3))){
var inst_28719 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28721__$1,inst_28719);
} else {
if((state_val_28722 === (12))){
var inst_28685 = (state_28721[(8)]);
var inst_28709 = cljs.core.vec.call(null,inst_28685);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28721__$1,(15),out,inst_28709);
} else {
if((state_val_28722 === (2))){
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28721__$1,(4),ch);
} else {
if((state_val_28722 === (11))){
var inst_28701 = (state_28721[(2)]);
var inst_28702 = (new Array(n));
var inst_28685 = inst_28702;
var inst_28686 = (0);
var state_28721__$1 = (function (){var statearr_28733 = state_28721;
(statearr_28733[(7)] = inst_28686);

(statearr_28733[(10)] = inst_28701);

(statearr_28733[(8)] = inst_28685);

return statearr_28733;
})();
var statearr_28734_28764 = state_28721__$1;
(statearr_28734_28764[(2)] = null);

(statearr_28734_28764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (9))){
var inst_28685 = (state_28721[(8)]);
var inst_28699 = cljs.core.vec.call(null,inst_28685);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28721__$1,(11),out,inst_28699);
} else {
if((state_val_28722 === (5))){
var inst_28694 = (state_28721[(11)]);
var inst_28686 = (state_28721[(7)]);
var inst_28689 = (state_28721[(9)]);
var inst_28685 = (state_28721[(8)]);
var inst_28693 = (inst_28685[inst_28686] = inst_28689);
var inst_28694__$1 = (inst_28686 + (1));
var inst_28695 = (inst_28694__$1 < n);
var state_28721__$1 = (function (){var statearr_28735 = state_28721;
(statearr_28735[(11)] = inst_28694__$1);

(statearr_28735[(12)] = inst_28693);

return statearr_28735;
})();
if(cljs.core.truth_(inst_28695)){
var statearr_28736_28765 = state_28721__$1;
(statearr_28736_28765[(1)] = (8));

} else {
var statearr_28737_28766 = state_28721__$1;
(statearr_28737_28766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (14))){
var inst_28714 = (state_28721[(2)]);
var inst_28715 = cljs.core.async.close_BANG_.call(null,out);
var state_28721__$1 = (function (){var statearr_28739 = state_28721;
(statearr_28739[(13)] = inst_28714);

return statearr_28739;
})();
var statearr_28740_28767 = state_28721__$1;
(statearr_28740_28767[(2)] = inst_28715);

(statearr_28740_28767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (10))){
var inst_28705 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28741_28768 = state_28721__$1;
(statearr_28741_28768[(2)] = inst_28705);

(statearr_28741_28768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (8))){
var inst_28694 = (state_28721[(11)]);
var inst_28685 = (state_28721[(8)]);
var tmp28738 = inst_28685;
var inst_28685__$1 = tmp28738;
var inst_28686 = inst_28694;
var state_28721__$1 = (function (){var statearr_28742 = state_28721;
(statearr_28742[(7)] = inst_28686);

(statearr_28742[(8)] = inst_28685__$1);

return statearr_28742;
})();
var statearr_28743_28769 = state_28721__$1;
(statearr_28743_28769[(2)] = null);

(statearr_28743_28769[(1)] = (2));


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
});})(c__26039__auto___28755,out))
;
return ((function (switch__25927__auto__,c__26039__auto___28755,out){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28747[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28747[(1)] = (1));

return statearr_28747;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28721){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28748){if((e28748 instanceof Object)){
var ex__25931__auto__ = e28748;
var statearr_28749_28770 = state_28721;
(statearr_28749_28770[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28771 = state_28721;
state_28721 = G__28771;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28755,out))
})();
var state__26041__auto__ = (function (){var statearr_28750 = f__26040__auto__.call(null);
(statearr_28750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28755);

return statearr_28750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28755,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28772 = [];
var len__20732__auto___28846 = arguments.length;
var i__20733__auto___28847 = (0);
while(true){
if((i__20733__auto___28847 < len__20732__auto___28846)){
args28772.push((arguments[i__20733__auto___28847]));

var G__28848 = (i__20733__auto___28847 + (1));
i__20733__auto___28847 = G__28848;
continue;
} else {
}
break;
}

var G__28774 = args28772.length;
switch (G__28774) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28772.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26039__auto___28850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___28850,out){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___28850,out){
return (function (state_28816){
var state_val_28817 = (state_28816[(1)]);
if((state_val_28817 === (7))){
var inst_28812 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
var statearr_28818_28851 = state_28816__$1;
(statearr_28818_28851[(2)] = inst_28812);

(statearr_28818_28851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (1))){
var inst_28775 = [];
var inst_28776 = inst_28775;
var inst_28777 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28816__$1 = (function (){var statearr_28819 = state_28816;
(statearr_28819[(7)] = inst_28776);

(statearr_28819[(8)] = inst_28777);

return statearr_28819;
})();
var statearr_28820_28852 = state_28816__$1;
(statearr_28820_28852[(2)] = null);

(statearr_28820_28852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (4))){
var inst_28780 = (state_28816[(9)]);
var inst_28780__$1 = (state_28816[(2)]);
var inst_28781 = (inst_28780__$1 == null);
var inst_28782 = cljs.core.not.call(null,inst_28781);
var state_28816__$1 = (function (){var statearr_28821 = state_28816;
(statearr_28821[(9)] = inst_28780__$1);

return statearr_28821;
})();
if(inst_28782){
var statearr_28822_28853 = state_28816__$1;
(statearr_28822_28853[(1)] = (5));

} else {
var statearr_28823_28854 = state_28816__$1;
(statearr_28823_28854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (15))){
var inst_28806 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
var statearr_28824_28855 = state_28816__$1;
(statearr_28824_28855[(2)] = inst_28806);

(statearr_28824_28855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (13))){
var state_28816__$1 = state_28816;
var statearr_28825_28856 = state_28816__$1;
(statearr_28825_28856[(2)] = null);

(statearr_28825_28856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (6))){
var inst_28776 = (state_28816[(7)]);
var inst_28801 = inst_28776.length;
var inst_28802 = (inst_28801 > (0));
var state_28816__$1 = state_28816;
if(cljs.core.truth_(inst_28802)){
var statearr_28826_28857 = state_28816__$1;
(statearr_28826_28857[(1)] = (12));

} else {
var statearr_28827_28858 = state_28816__$1;
(statearr_28827_28858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (3))){
var inst_28814 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28816__$1,inst_28814);
} else {
if((state_val_28817 === (12))){
var inst_28776 = (state_28816[(7)]);
var inst_28804 = cljs.core.vec.call(null,inst_28776);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28816__$1,(15),out,inst_28804);
} else {
if((state_val_28817 === (2))){
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28816__$1,(4),ch);
} else {
if((state_val_28817 === (11))){
var inst_28784 = (state_28816[(10)]);
var inst_28780 = (state_28816[(9)]);
var inst_28794 = (state_28816[(2)]);
var inst_28795 = [];
var inst_28796 = inst_28795.push(inst_28780);
var inst_28776 = inst_28795;
var inst_28777 = inst_28784;
var state_28816__$1 = (function (){var statearr_28828 = state_28816;
(statearr_28828[(11)] = inst_28796);

(statearr_28828[(7)] = inst_28776);

(statearr_28828[(8)] = inst_28777);

(statearr_28828[(12)] = inst_28794);

return statearr_28828;
})();
var statearr_28829_28859 = state_28816__$1;
(statearr_28829_28859[(2)] = null);

(statearr_28829_28859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (9))){
var inst_28776 = (state_28816[(7)]);
var inst_28792 = cljs.core.vec.call(null,inst_28776);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28816__$1,(11),out,inst_28792);
} else {
if((state_val_28817 === (5))){
var inst_28784 = (state_28816[(10)]);
var inst_28780 = (state_28816[(9)]);
var inst_28777 = (state_28816[(8)]);
var inst_28784__$1 = f.call(null,inst_28780);
var inst_28785 = cljs.core._EQ_.call(null,inst_28784__$1,inst_28777);
var inst_28786 = cljs.core.keyword_identical_QMARK_.call(null,inst_28777,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28787 = (inst_28785) || (inst_28786);
var state_28816__$1 = (function (){var statearr_28830 = state_28816;
(statearr_28830[(10)] = inst_28784__$1);

return statearr_28830;
})();
if(cljs.core.truth_(inst_28787)){
var statearr_28831_28860 = state_28816__$1;
(statearr_28831_28860[(1)] = (8));

} else {
var statearr_28832_28861 = state_28816__$1;
(statearr_28832_28861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (14))){
var inst_28809 = (state_28816[(2)]);
var inst_28810 = cljs.core.async.close_BANG_.call(null,out);
var state_28816__$1 = (function (){var statearr_28834 = state_28816;
(statearr_28834[(13)] = inst_28809);

return statearr_28834;
})();
var statearr_28835_28862 = state_28816__$1;
(statearr_28835_28862[(2)] = inst_28810);

(statearr_28835_28862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (10))){
var inst_28799 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
var statearr_28836_28863 = state_28816__$1;
(statearr_28836_28863[(2)] = inst_28799);

(statearr_28836_28863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (8))){
var inst_28784 = (state_28816[(10)]);
var inst_28780 = (state_28816[(9)]);
var inst_28776 = (state_28816[(7)]);
var inst_28789 = inst_28776.push(inst_28780);
var tmp28833 = inst_28776;
var inst_28776__$1 = tmp28833;
var inst_28777 = inst_28784;
var state_28816__$1 = (function (){var statearr_28837 = state_28816;
(statearr_28837[(7)] = inst_28776__$1);

(statearr_28837[(8)] = inst_28777);

(statearr_28837[(14)] = inst_28789);

return statearr_28837;
})();
var statearr_28838_28864 = state_28816__$1;
(statearr_28838_28864[(2)] = null);

(statearr_28838_28864[(1)] = (2));


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
});})(c__26039__auto___28850,out))
;
return ((function (switch__25927__auto__,c__26039__auto___28850,out){
return (function() {
var cljs$core$async$state_machine__25928__auto__ = null;
var cljs$core$async$state_machine__25928__auto____0 = (function (){
var statearr_28842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28842[(0)] = cljs$core$async$state_machine__25928__auto__);

(statearr_28842[(1)] = (1));

return statearr_28842;
});
var cljs$core$async$state_machine__25928__auto____1 = (function (state_28816){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_28816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e28843){if((e28843 instanceof Object)){
var ex__25931__auto__ = e28843;
var statearr_28844_28865 = state_28816;
(statearr_28844_28865[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28866 = state_28816;
state_28816 = G__28866;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
cljs$core$async$state_machine__25928__auto__ = function(state_28816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25928__auto____1.call(this,state_28816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25928__auto____0;
cljs$core$async$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25928__auto____1;
return cljs$core$async$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___28850,out))
})();
var state__26041__auto__ = (function (){var statearr_28845 = f__26040__auto__.call(null);
(statearr_28845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___28850);

return statearr_28845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___28850,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map