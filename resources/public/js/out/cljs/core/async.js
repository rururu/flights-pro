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
var args16233 = [];
var len__10516__auto___16239 = arguments.length;
var i__10517__auto___16240 = (0);
while(true){
if((i__10517__auto___16240 < len__10516__auto___16239)){
args16233.push((arguments[i__10517__auto___16240]));

var G__16241 = (i__10517__auto___16240 + (1));
i__10517__auto___16240 = G__16241;
continue;
} else {
}
break;
}

var G__16235 = args16233.length;
switch (G__16235) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16233.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16236 = (function (f,blockable,meta16237){
this.f = f;
this.blockable = blockable;
this.meta16237 = meta16237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16238,meta16237__$1){
var self__ = this;
var _16238__$1 = this;
return (new cljs.core.async.t_cljs$core$async16236(self__.f,self__.blockable,meta16237__$1));
});

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16238){
var self__ = this;
var _16238__$1 = this;
return self__.meta16237;
});

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16237","meta16237",-1590512593,null)], null);
});

cljs.core.async.t_cljs$core$async16236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16236";

cljs.core.async.t_cljs$core$async16236.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async16236");
});

cljs.core.async.__GT_t_cljs$core$async16236 = (function cljs$core$async$__GT_t_cljs$core$async16236(f__$1,blockable__$1,meta16237){
return (new cljs.core.async.t_cljs$core$async16236(f__$1,blockable__$1,meta16237));
});

}

return (new cljs.core.async.t_cljs$core$async16236(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args16245 = [];
var len__10516__auto___16248 = arguments.length;
var i__10517__auto___16249 = (0);
while(true){
if((i__10517__auto___16249 < len__10516__auto___16248)){
args16245.push((arguments[i__10517__auto___16249]));

var G__16250 = (i__10517__auto___16249 + (1));
i__10517__auto___16249 = G__16250;
continue;
} else {
}
break;
}

var G__16247 = args16245.length;
switch (G__16247) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16245.length)].join('')));

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
var args16252 = [];
var len__10516__auto___16255 = arguments.length;
var i__10517__auto___16256 = (0);
while(true){
if((i__10517__auto___16256 < len__10516__auto___16255)){
args16252.push((arguments[i__10517__auto___16256]));

var G__16257 = (i__10517__auto___16256 + (1));
i__10517__auto___16256 = G__16257;
continue;
} else {
}
break;
}

var G__16254 = args16252.length;
switch (G__16254) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16252.length)].join('')));

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
var args16259 = [];
var len__10516__auto___16262 = arguments.length;
var i__10517__auto___16263 = (0);
while(true){
if((i__10517__auto___16263 < len__10516__auto___16262)){
args16259.push((arguments[i__10517__auto___16263]));

var G__16264 = (i__10517__auto___16263 + (1));
i__10517__auto___16263 = G__16264;
continue;
} else {
}
break;
}

var G__16261 = args16259.length;
switch (G__16261) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16259.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16266 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16266);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16266,ret){
return (function (){
return fn1.call(null,val_16266);
});})(val_16266,ret))
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
var args16267 = [];
var len__10516__auto___16270 = arguments.length;
var i__10517__auto___16271 = (0);
while(true){
if((i__10517__auto___16271 < len__10516__auto___16270)){
args16267.push((arguments[i__10517__auto___16271]));

var G__16272 = (i__10517__auto___16271 + (1));
i__10517__auto___16271 = G__16272;
continue;
} else {
}
break;
}

var G__16269 = args16267.length;
switch (G__16269) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16267.length)].join('')));

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
var n__10326__auto___16274 = n;
var x_16275 = (0);
while(true){
if((x_16275 < n__10326__auto___16274)){
(a[x_16275] = (0));

var G__16276 = (x_16275 + (1));
x_16275 = G__16276;
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

var G__16277 = (i + (1));
i = G__16277;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async16281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16281 = (function (flag,meta16282){
this.flag = flag;
this.meta16282 = meta16282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16283,meta16282__$1){
var self__ = this;
var _16283__$1 = this;
return (new cljs.core.async.t_cljs$core$async16281(self__.flag,meta16282__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16283){
var self__ = this;
var _16283__$1 = this;
return self__.meta16282;
});})(flag))
;

cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16281.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16282","meta16282",-1775097429,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16281";

cljs.core.async.t_cljs$core$async16281.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async16281");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16281 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16281(flag__$1,meta16282){
return (new cljs.core.async.t_cljs$core$async16281(flag__$1,meta16282));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16281(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16287 = (function (flag,cb,meta16288){
this.flag = flag;
this.cb = cb;
this.meta16288 = meta16288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16289,meta16288__$1){
var self__ = this;
var _16289__$1 = this;
return (new cljs.core.async.t_cljs$core$async16287(self__.flag,self__.cb,meta16288__$1));
});

cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16289){
var self__ = this;
var _16289__$1 = this;
return self__.meta16288;
});

cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16288","meta16288",1241431705,null)], null);
});

cljs.core.async.t_cljs$core$async16287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16287";

cljs.core.async.t_cljs$core$async16287.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async16287");
});

cljs.core.async.__GT_t_cljs$core$async16287 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16287(flag__$1,cb__$1,meta16288){
return (new cljs.core.async.t_cljs$core$async16287(flag__$1,cb__$1,meta16288));
});

}

return (new cljs.core.async.t_cljs$core$async16287(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16290_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16291_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16291_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9408__auto__ = wport;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16292 = (i + (1));
i = G__16292;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9408__auto__ = ret;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__9396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9396__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9396__auto__;
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
var args__10523__auto__ = [];
var len__10516__auto___16298 = arguments.length;
var i__10517__auto___16299 = (0);
while(true){
if((i__10517__auto___16299 < len__10516__auto___16298)){
args__10523__auto__.push((arguments[i__10517__auto___16299]));

var G__16300 = (i__10517__auto___16299 + (1));
i__10517__auto___16299 = G__16300;
continue;
} else {
}
break;
}

var argseq__10524__auto__ = ((((1) < args__10523__auto__.length))?(new cljs.core.IndexedSeq(args__10523__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10524__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16295){
var map__16296 = p__16295;
var map__16296__$1 = ((((!((map__16296 == null)))?((((map__16296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16296):map__16296);
var opts = map__16296__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16293){
var G__16294 = cljs.core.first.call(null,seq16293);
var seq16293__$1 = cljs.core.next.call(null,seq16293);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16294,seq16293__$1);
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
var args16301 = [];
var len__10516__auto___16351 = arguments.length;
var i__10517__auto___16352 = (0);
while(true){
if((i__10517__auto___16352 < len__10516__auto___16351)){
args16301.push((arguments[i__10517__auto___16352]));

var G__16353 = (i__10517__auto___16352 + (1));
i__10517__auto___16352 = G__16353;
continue;
} else {
}
break;
}

var G__16303 = args16301.length;
switch (G__16303) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16301.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16188__auto___16355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___16355){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___16355){
return (function (state_16327){
var state_val_16328 = (state_16327[(1)]);
if((state_val_16328 === (7))){
var inst_16323 = (state_16327[(2)]);
var state_16327__$1 = state_16327;
var statearr_16329_16356 = state_16327__$1;
(statearr_16329_16356[(2)] = inst_16323);

(statearr_16329_16356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (1))){
var state_16327__$1 = state_16327;
var statearr_16330_16357 = state_16327__$1;
(statearr_16330_16357[(2)] = null);

(statearr_16330_16357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (4))){
var inst_16306 = (state_16327[(7)]);
var inst_16306__$1 = (state_16327[(2)]);
var inst_16307 = (inst_16306__$1 == null);
var state_16327__$1 = (function (){var statearr_16331 = state_16327;
(statearr_16331[(7)] = inst_16306__$1);

return statearr_16331;
})();
if(cljs.core.truth_(inst_16307)){
var statearr_16332_16358 = state_16327__$1;
(statearr_16332_16358[(1)] = (5));

} else {
var statearr_16333_16359 = state_16327__$1;
(statearr_16333_16359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (13))){
var state_16327__$1 = state_16327;
var statearr_16334_16360 = state_16327__$1;
(statearr_16334_16360[(2)] = null);

(statearr_16334_16360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (6))){
var inst_16306 = (state_16327[(7)]);
var state_16327__$1 = state_16327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16327__$1,(11),to,inst_16306);
} else {
if((state_val_16328 === (3))){
var inst_16325 = (state_16327[(2)]);
var state_16327__$1 = state_16327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16327__$1,inst_16325);
} else {
if((state_val_16328 === (12))){
var state_16327__$1 = state_16327;
var statearr_16335_16361 = state_16327__$1;
(statearr_16335_16361[(2)] = null);

(statearr_16335_16361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (2))){
var state_16327__$1 = state_16327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16327__$1,(4),from);
} else {
if((state_val_16328 === (11))){
var inst_16316 = (state_16327[(2)]);
var state_16327__$1 = state_16327;
if(cljs.core.truth_(inst_16316)){
var statearr_16336_16362 = state_16327__$1;
(statearr_16336_16362[(1)] = (12));

} else {
var statearr_16337_16363 = state_16327__$1;
(statearr_16337_16363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (9))){
var state_16327__$1 = state_16327;
var statearr_16338_16364 = state_16327__$1;
(statearr_16338_16364[(2)] = null);

(statearr_16338_16364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (5))){
var state_16327__$1 = state_16327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16339_16365 = state_16327__$1;
(statearr_16339_16365[(1)] = (8));

} else {
var statearr_16340_16366 = state_16327__$1;
(statearr_16340_16366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (14))){
var inst_16321 = (state_16327[(2)]);
var state_16327__$1 = state_16327;
var statearr_16341_16367 = state_16327__$1;
(statearr_16341_16367[(2)] = inst_16321);

(statearr_16341_16367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (10))){
var inst_16313 = (state_16327[(2)]);
var state_16327__$1 = state_16327;
var statearr_16342_16368 = state_16327__$1;
(statearr_16342_16368[(2)] = inst_16313);

(statearr_16342_16368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16328 === (8))){
var inst_16310 = cljs.core.async.close_BANG_.call(null,to);
var state_16327__$1 = state_16327;
var statearr_16343_16369 = state_16327__$1;
(statearr_16343_16369[(2)] = inst_16310);

(statearr_16343_16369[(1)] = (10));


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
});})(c__16188__auto___16355))
;
return ((function (switch__16076__auto__,c__16188__auto___16355){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_16347 = [null,null,null,null,null,null,null,null];
(statearr_16347[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_16347[(1)] = (1));

return statearr_16347;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_16327){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16348){if((e16348 instanceof Object)){
var ex__16080__auto__ = e16348;
var statearr_16349_16370 = state_16327;
(statearr_16349_16370[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16371 = state_16327;
state_16327 = G__16371;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_16327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_16327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___16355))
})();
var state__16190__auto__ = (function (){var statearr_16350 = f__16189__auto__.call(null);
(statearr_16350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___16355);

return statearr_16350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___16355))
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
return (function (p__16559){
var vec__16560 = p__16559;
var v = cljs.core.nth.call(null,vec__16560,(0),null);
var p = cljs.core.nth.call(null,vec__16560,(1),null);
var job = vec__16560;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16188__auto___16746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___16746,res,vec__16560,v,p,job,jobs,results){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___16746,res,vec__16560,v,p,job,jobs,results){
return (function (state_16567){
var state_val_16568 = (state_16567[(1)]);
if((state_val_16568 === (1))){
var state_16567__$1 = state_16567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16567__$1,(2),res,v);
} else {
if((state_val_16568 === (2))){
var inst_16564 = (state_16567[(2)]);
var inst_16565 = cljs.core.async.close_BANG_.call(null,res);
var state_16567__$1 = (function (){var statearr_16569 = state_16567;
(statearr_16569[(7)] = inst_16564);

return statearr_16569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16567__$1,inst_16565);
} else {
return null;
}
}
});})(c__16188__auto___16746,res,vec__16560,v,p,job,jobs,results))
;
return ((function (switch__16076__auto__,c__16188__auto___16746,res,vec__16560,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0 = (function (){
var statearr_16573 = [null,null,null,null,null,null,null,null];
(statearr_16573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__);

(statearr_16573[(1)] = (1));

return statearr_16573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1 = (function (state_16567){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16574){if((e16574 instanceof Object)){
var ex__16080__auto__ = e16574;
var statearr_16575_16747 = state_16567;
(statearr_16575_16747[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16748 = state_16567;
state_16567 = G__16748;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = function(state_16567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1.call(this,state_16567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___16746,res,vec__16560,v,p,job,jobs,results))
})();
var state__16190__auto__ = (function (){var statearr_16576 = f__16189__auto__.call(null);
(statearr_16576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___16746);

return statearr_16576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___16746,res,vec__16560,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16577){
var vec__16578 = p__16577;
var v = cljs.core.nth.call(null,vec__16578,(0),null);
var p = cljs.core.nth.call(null,vec__16578,(1),null);
var job = vec__16578;
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
var n__10326__auto___16749 = n;
var __16750 = (0);
while(true){
if((__16750 < n__10326__auto___16749)){
var G__16581_16751 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16581_16751) {
case "compute":
var c__16188__auto___16753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16750,c__16188__auto___16753,G__16581_16751,n__10326__auto___16749,jobs,results,process,async){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (__16750,c__16188__auto___16753,G__16581_16751,n__10326__auto___16749,jobs,results,process,async){
return (function (state_16594){
var state_val_16595 = (state_16594[(1)]);
if((state_val_16595 === (1))){
var state_16594__$1 = state_16594;
var statearr_16596_16754 = state_16594__$1;
(statearr_16596_16754[(2)] = null);

(statearr_16596_16754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (2))){
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16594__$1,(4),jobs);
} else {
if((state_val_16595 === (3))){
var inst_16592 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16594__$1,inst_16592);
} else {
if((state_val_16595 === (4))){
var inst_16584 = (state_16594[(2)]);
var inst_16585 = process.call(null,inst_16584);
var state_16594__$1 = state_16594;
if(cljs.core.truth_(inst_16585)){
var statearr_16597_16755 = state_16594__$1;
(statearr_16597_16755[(1)] = (5));

} else {
var statearr_16598_16756 = state_16594__$1;
(statearr_16598_16756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (5))){
var state_16594__$1 = state_16594;
var statearr_16599_16757 = state_16594__$1;
(statearr_16599_16757[(2)] = null);

(statearr_16599_16757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (6))){
var state_16594__$1 = state_16594;
var statearr_16600_16758 = state_16594__$1;
(statearr_16600_16758[(2)] = null);

(statearr_16600_16758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (7))){
var inst_16590 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16601_16759 = state_16594__$1;
(statearr_16601_16759[(2)] = inst_16590);

(statearr_16601_16759[(1)] = (3));


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
});})(__16750,c__16188__auto___16753,G__16581_16751,n__10326__auto___16749,jobs,results,process,async))
;
return ((function (__16750,switch__16076__auto__,c__16188__auto___16753,G__16581_16751,n__10326__auto___16749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0 = (function (){
var statearr_16605 = [null,null,null,null,null,null,null];
(statearr_16605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__);

(statearr_16605[(1)] = (1));

return statearr_16605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1 = (function (state_16594){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16606){if((e16606 instanceof Object)){
var ex__16080__auto__ = e16606;
var statearr_16607_16760 = state_16594;
(statearr_16607_16760[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16761 = state_16594;
state_16594 = G__16761;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = function(state_16594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1.call(this,state_16594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__;
})()
;})(__16750,switch__16076__auto__,c__16188__auto___16753,G__16581_16751,n__10326__auto___16749,jobs,results,process,async))
})();
var state__16190__auto__ = (function (){var statearr_16608 = f__16189__auto__.call(null);
(statearr_16608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___16753);

return statearr_16608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(__16750,c__16188__auto___16753,G__16581_16751,n__10326__auto___16749,jobs,results,process,async))
);


break;
case "async":
var c__16188__auto___16762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16750,c__16188__auto___16762,G__16581_16751,n__10326__auto___16749,jobs,results,process,async){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (__16750,c__16188__auto___16762,G__16581_16751,n__10326__auto___16749,jobs,results,process,async){
return (function (state_16621){
var state_val_16622 = (state_16621[(1)]);
if((state_val_16622 === (1))){
var state_16621__$1 = state_16621;
var statearr_16623_16763 = state_16621__$1;
(statearr_16623_16763[(2)] = null);

(statearr_16623_16763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (2))){
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16621__$1,(4),jobs);
} else {
if((state_val_16622 === (3))){
var inst_16619 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16621__$1,inst_16619);
} else {
if((state_val_16622 === (4))){
var inst_16611 = (state_16621[(2)]);
var inst_16612 = async.call(null,inst_16611);
var state_16621__$1 = state_16621;
if(cljs.core.truth_(inst_16612)){
var statearr_16624_16764 = state_16621__$1;
(statearr_16624_16764[(1)] = (5));

} else {
var statearr_16625_16765 = state_16621__$1;
(statearr_16625_16765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (5))){
var state_16621__$1 = state_16621;
var statearr_16626_16766 = state_16621__$1;
(statearr_16626_16766[(2)] = null);

(statearr_16626_16766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (6))){
var state_16621__$1 = state_16621;
var statearr_16627_16767 = state_16621__$1;
(statearr_16627_16767[(2)] = null);

(statearr_16627_16767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (7))){
var inst_16617 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16628_16768 = state_16621__$1;
(statearr_16628_16768[(2)] = inst_16617);

(statearr_16628_16768[(1)] = (3));


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
});})(__16750,c__16188__auto___16762,G__16581_16751,n__10326__auto___16749,jobs,results,process,async))
;
return ((function (__16750,switch__16076__auto__,c__16188__auto___16762,G__16581_16751,n__10326__auto___16749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0 = (function (){
var statearr_16632 = [null,null,null,null,null,null,null];
(statearr_16632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__);

(statearr_16632[(1)] = (1));

return statearr_16632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1 = (function (state_16621){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16633){if((e16633 instanceof Object)){
var ex__16080__auto__ = e16633;
var statearr_16634_16769 = state_16621;
(statearr_16634_16769[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16770 = state_16621;
state_16621 = G__16770;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = function(state_16621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1.call(this,state_16621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__;
})()
;})(__16750,switch__16076__auto__,c__16188__auto___16762,G__16581_16751,n__10326__auto___16749,jobs,results,process,async))
})();
var state__16190__auto__ = (function (){var statearr_16635 = f__16189__auto__.call(null);
(statearr_16635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___16762);

return statearr_16635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(__16750,c__16188__auto___16762,G__16581_16751,n__10326__auto___16749,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16771 = (__16750 + (1));
__16750 = G__16771;
continue;
} else {
}
break;
}

var c__16188__auto___16772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___16772,jobs,results,process,async){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___16772,jobs,results,process,async){
return (function (state_16657){
var state_val_16658 = (state_16657[(1)]);
if((state_val_16658 === (1))){
var state_16657__$1 = state_16657;
var statearr_16659_16773 = state_16657__$1;
(statearr_16659_16773[(2)] = null);

(statearr_16659_16773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (2))){
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16657__$1,(4),from);
} else {
if((state_val_16658 === (3))){
var inst_16655 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16657__$1,inst_16655);
} else {
if((state_val_16658 === (4))){
var inst_16638 = (state_16657[(7)]);
var inst_16638__$1 = (state_16657[(2)]);
var inst_16639 = (inst_16638__$1 == null);
var state_16657__$1 = (function (){var statearr_16660 = state_16657;
(statearr_16660[(7)] = inst_16638__$1);

return statearr_16660;
})();
if(cljs.core.truth_(inst_16639)){
var statearr_16661_16774 = state_16657__$1;
(statearr_16661_16774[(1)] = (5));

} else {
var statearr_16662_16775 = state_16657__$1;
(statearr_16662_16775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (5))){
var inst_16641 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16657__$1 = state_16657;
var statearr_16663_16776 = state_16657__$1;
(statearr_16663_16776[(2)] = inst_16641);

(statearr_16663_16776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (6))){
var inst_16643 = (state_16657[(8)]);
var inst_16638 = (state_16657[(7)]);
var inst_16643__$1 = cljs.core.async.chan.call(null,(1));
var inst_16644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16645 = [inst_16638,inst_16643__$1];
var inst_16646 = (new cljs.core.PersistentVector(null,2,(5),inst_16644,inst_16645,null));
var state_16657__$1 = (function (){var statearr_16664 = state_16657;
(statearr_16664[(8)] = inst_16643__$1);

return statearr_16664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16657__$1,(8),jobs,inst_16646);
} else {
if((state_val_16658 === (7))){
var inst_16653 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16665_16777 = state_16657__$1;
(statearr_16665_16777[(2)] = inst_16653);

(statearr_16665_16777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (8))){
var inst_16643 = (state_16657[(8)]);
var inst_16648 = (state_16657[(2)]);
var state_16657__$1 = (function (){var statearr_16666 = state_16657;
(statearr_16666[(9)] = inst_16648);

return statearr_16666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16657__$1,(9),results,inst_16643);
} else {
if((state_val_16658 === (9))){
var inst_16650 = (state_16657[(2)]);
var state_16657__$1 = (function (){var statearr_16667 = state_16657;
(statearr_16667[(10)] = inst_16650);

return statearr_16667;
})();
var statearr_16668_16778 = state_16657__$1;
(statearr_16668_16778[(2)] = null);

(statearr_16668_16778[(1)] = (2));


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
});})(c__16188__auto___16772,jobs,results,process,async))
;
return ((function (switch__16076__auto__,c__16188__auto___16772,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0 = (function (){
var statearr_16672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__);

(statearr_16672[(1)] = (1));

return statearr_16672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1 = (function (state_16657){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16673){if((e16673 instanceof Object)){
var ex__16080__auto__ = e16673;
var statearr_16674_16779 = state_16657;
(statearr_16674_16779[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16780 = state_16657;
state_16657 = G__16780;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = function(state_16657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1.call(this,state_16657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___16772,jobs,results,process,async))
})();
var state__16190__auto__ = (function (){var statearr_16675 = f__16189__auto__.call(null);
(statearr_16675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___16772);

return statearr_16675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___16772,jobs,results,process,async))
);


var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__,jobs,results,process,async){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__,jobs,results,process,async){
return (function (state_16713){
var state_val_16714 = (state_16713[(1)]);
if((state_val_16714 === (7))){
var inst_16709 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16715_16781 = state_16713__$1;
(statearr_16715_16781[(2)] = inst_16709);

(statearr_16715_16781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (20))){
var state_16713__$1 = state_16713;
var statearr_16716_16782 = state_16713__$1;
(statearr_16716_16782[(2)] = null);

(statearr_16716_16782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (1))){
var state_16713__$1 = state_16713;
var statearr_16717_16783 = state_16713__$1;
(statearr_16717_16783[(2)] = null);

(statearr_16717_16783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (4))){
var inst_16678 = (state_16713[(7)]);
var inst_16678__$1 = (state_16713[(2)]);
var inst_16679 = (inst_16678__$1 == null);
var state_16713__$1 = (function (){var statearr_16718 = state_16713;
(statearr_16718[(7)] = inst_16678__$1);

return statearr_16718;
})();
if(cljs.core.truth_(inst_16679)){
var statearr_16719_16784 = state_16713__$1;
(statearr_16719_16784[(1)] = (5));

} else {
var statearr_16720_16785 = state_16713__$1;
(statearr_16720_16785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (15))){
var inst_16691 = (state_16713[(8)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16713__$1,(18),to,inst_16691);
} else {
if((state_val_16714 === (21))){
var inst_16704 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16721_16786 = state_16713__$1;
(statearr_16721_16786[(2)] = inst_16704);

(statearr_16721_16786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (13))){
var inst_16706 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16722 = state_16713;
(statearr_16722[(9)] = inst_16706);

return statearr_16722;
})();
var statearr_16723_16787 = state_16713__$1;
(statearr_16723_16787[(2)] = null);

(statearr_16723_16787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (6))){
var inst_16678 = (state_16713[(7)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16713__$1,(11),inst_16678);
} else {
if((state_val_16714 === (17))){
var inst_16699 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
if(cljs.core.truth_(inst_16699)){
var statearr_16724_16788 = state_16713__$1;
(statearr_16724_16788[(1)] = (19));

} else {
var statearr_16725_16789 = state_16713__$1;
(statearr_16725_16789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (3))){
var inst_16711 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16713__$1,inst_16711);
} else {
if((state_val_16714 === (12))){
var inst_16688 = (state_16713[(10)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16713__$1,(14),inst_16688);
} else {
if((state_val_16714 === (2))){
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16713__$1,(4),results);
} else {
if((state_val_16714 === (19))){
var state_16713__$1 = state_16713;
var statearr_16726_16790 = state_16713__$1;
(statearr_16726_16790[(2)] = null);

(statearr_16726_16790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (11))){
var inst_16688 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16727 = state_16713;
(statearr_16727[(10)] = inst_16688);

return statearr_16727;
})();
var statearr_16728_16791 = state_16713__$1;
(statearr_16728_16791[(2)] = null);

(statearr_16728_16791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (9))){
var state_16713__$1 = state_16713;
var statearr_16729_16792 = state_16713__$1;
(statearr_16729_16792[(2)] = null);

(statearr_16729_16792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (5))){
var state_16713__$1 = state_16713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16730_16793 = state_16713__$1;
(statearr_16730_16793[(1)] = (8));

} else {
var statearr_16731_16794 = state_16713__$1;
(statearr_16731_16794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (14))){
var inst_16693 = (state_16713[(11)]);
var inst_16691 = (state_16713[(8)]);
var inst_16691__$1 = (state_16713[(2)]);
var inst_16692 = (inst_16691__$1 == null);
var inst_16693__$1 = cljs.core.not.call(null,inst_16692);
var state_16713__$1 = (function (){var statearr_16732 = state_16713;
(statearr_16732[(11)] = inst_16693__$1);

(statearr_16732[(8)] = inst_16691__$1);

return statearr_16732;
})();
if(inst_16693__$1){
var statearr_16733_16795 = state_16713__$1;
(statearr_16733_16795[(1)] = (15));

} else {
var statearr_16734_16796 = state_16713__$1;
(statearr_16734_16796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (16))){
var inst_16693 = (state_16713[(11)]);
var state_16713__$1 = state_16713;
var statearr_16735_16797 = state_16713__$1;
(statearr_16735_16797[(2)] = inst_16693);

(statearr_16735_16797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (10))){
var inst_16685 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16736_16798 = state_16713__$1;
(statearr_16736_16798[(2)] = inst_16685);

(statearr_16736_16798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (18))){
var inst_16696 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16737_16799 = state_16713__$1;
(statearr_16737_16799[(2)] = inst_16696);

(statearr_16737_16799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (8))){
var inst_16682 = cljs.core.async.close_BANG_.call(null,to);
var state_16713__$1 = state_16713;
var statearr_16738_16800 = state_16713__$1;
(statearr_16738_16800[(2)] = inst_16682);

(statearr_16738_16800[(1)] = (10));


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
});})(c__16188__auto__,jobs,results,process,async))
;
return ((function (switch__16076__auto__,c__16188__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0 = (function (){
var statearr_16742 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__);

(statearr_16742[(1)] = (1));

return statearr_16742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1 = (function (state_16713){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16743){if((e16743 instanceof Object)){
var ex__16080__auto__ = e16743;
var statearr_16744_16801 = state_16713;
(statearr_16744_16801[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16802 = state_16713;
state_16713 = G__16802;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16077__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__,jobs,results,process,async))
})();
var state__16190__auto__ = (function (){var statearr_16745 = f__16189__auto__.call(null);
(statearr_16745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_16745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__,jobs,results,process,async))
);

return c__16188__auto__;
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
var args16803 = [];
var len__10516__auto___16806 = arguments.length;
var i__10517__auto___16807 = (0);
while(true){
if((i__10517__auto___16807 < len__10516__auto___16806)){
args16803.push((arguments[i__10517__auto___16807]));

var G__16808 = (i__10517__auto___16807 + (1));
i__10517__auto___16807 = G__16808;
continue;
} else {
}
break;
}

var G__16805 = args16803.length;
switch (G__16805) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16803.length)].join('')));

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
var args16810 = [];
var len__10516__auto___16813 = arguments.length;
var i__10517__auto___16814 = (0);
while(true){
if((i__10517__auto___16814 < len__10516__auto___16813)){
args16810.push((arguments[i__10517__auto___16814]));

var G__16815 = (i__10517__auto___16814 + (1));
i__10517__auto___16814 = G__16815;
continue;
} else {
}
break;
}

var G__16812 = args16810.length;
switch (G__16812) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16810.length)].join('')));

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
var args16817 = [];
var len__10516__auto___16870 = arguments.length;
var i__10517__auto___16871 = (0);
while(true){
if((i__10517__auto___16871 < len__10516__auto___16870)){
args16817.push((arguments[i__10517__auto___16871]));

var G__16872 = (i__10517__auto___16871 + (1));
i__10517__auto___16871 = G__16872;
continue;
} else {
}
break;
}

var G__16819 = args16817.length;
switch (G__16819) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16817.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16188__auto___16874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___16874,tc,fc){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___16874,tc,fc){
return (function (state_16845){
var state_val_16846 = (state_16845[(1)]);
if((state_val_16846 === (7))){
var inst_16841 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16847_16875 = state_16845__$1;
(statearr_16847_16875[(2)] = inst_16841);

(statearr_16847_16875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (1))){
var state_16845__$1 = state_16845;
var statearr_16848_16876 = state_16845__$1;
(statearr_16848_16876[(2)] = null);

(statearr_16848_16876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (4))){
var inst_16822 = (state_16845[(7)]);
var inst_16822__$1 = (state_16845[(2)]);
var inst_16823 = (inst_16822__$1 == null);
var state_16845__$1 = (function (){var statearr_16849 = state_16845;
(statearr_16849[(7)] = inst_16822__$1);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16823)){
var statearr_16850_16877 = state_16845__$1;
(statearr_16850_16877[(1)] = (5));

} else {
var statearr_16851_16878 = state_16845__$1;
(statearr_16851_16878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (13))){
var state_16845__$1 = state_16845;
var statearr_16852_16879 = state_16845__$1;
(statearr_16852_16879[(2)] = null);

(statearr_16852_16879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (6))){
var inst_16822 = (state_16845[(7)]);
var inst_16828 = p.call(null,inst_16822);
var state_16845__$1 = state_16845;
if(cljs.core.truth_(inst_16828)){
var statearr_16853_16880 = state_16845__$1;
(statearr_16853_16880[(1)] = (9));

} else {
var statearr_16854_16881 = state_16845__$1;
(statearr_16854_16881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (3))){
var inst_16843 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16845__$1,inst_16843);
} else {
if((state_val_16846 === (12))){
var state_16845__$1 = state_16845;
var statearr_16855_16882 = state_16845__$1;
(statearr_16855_16882[(2)] = null);

(statearr_16855_16882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (2))){
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16845__$1,(4),ch);
} else {
if((state_val_16846 === (11))){
var inst_16822 = (state_16845[(7)]);
var inst_16832 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16845__$1,(8),inst_16832,inst_16822);
} else {
if((state_val_16846 === (9))){
var state_16845__$1 = state_16845;
var statearr_16856_16883 = state_16845__$1;
(statearr_16856_16883[(2)] = tc);

(statearr_16856_16883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (5))){
var inst_16825 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16826 = cljs.core.async.close_BANG_.call(null,fc);
var state_16845__$1 = (function (){var statearr_16857 = state_16845;
(statearr_16857[(8)] = inst_16825);

return statearr_16857;
})();
var statearr_16858_16884 = state_16845__$1;
(statearr_16858_16884[(2)] = inst_16826);

(statearr_16858_16884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (14))){
var inst_16839 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16859_16885 = state_16845__$1;
(statearr_16859_16885[(2)] = inst_16839);

(statearr_16859_16885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (10))){
var state_16845__$1 = state_16845;
var statearr_16860_16886 = state_16845__$1;
(statearr_16860_16886[(2)] = fc);

(statearr_16860_16886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (8))){
var inst_16834 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
if(cljs.core.truth_(inst_16834)){
var statearr_16861_16887 = state_16845__$1;
(statearr_16861_16887[(1)] = (12));

} else {
var statearr_16862_16888 = state_16845__$1;
(statearr_16862_16888[(1)] = (13));

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
});})(c__16188__auto___16874,tc,fc))
;
return ((function (switch__16076__auto__,c__16188__auto___16874,tc,fc){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_16866 = [null,null,null,null,null,null,null,null,null];
(statearr_16866[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_16866[(1)] = (1));

return statearr_16866;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_16845){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16867){if((e16867 instanceof Object)){
var ex__16080__auto__ = e16867;
var statearr_16868_16889 = state_16845;
(statearr_16868_16889[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16890 = state_16845;
state_16845 = G__16890;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_16845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_16845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___16874,tc,fc))
})();
var state__16190__auto__ = (function (){var statearr_16869 = f__16189__auto__.call(null);
(statearr_16869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___16874);

return statearr_16869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___16874,tc,fc))
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
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__){
return (function (state_16954){
var state_val_16955 = (state_16954[(1)]);
if((state_val_16955 === (7))){
var inst_16950 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16956_16977 = state_16954__$1;
(statearr_16956_16977[(2)] = inst_16950);

(statearr_16956_16977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (1))){
var inst_16934 = init;
var state_16954__$1 = (function (){var statearr_16957 = state_16954;
(statearr_16957[(7)] = inst_16934);

return statearr_16957;
})();
var statearr_16958_16978 = state_16954__$1;
(statearr_16958_16978[(2)] = null);

(statearr_16958_16978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (4))){
var inst_16937 = (state_16954[(8)]);
var inst_16937__$1 = (state_16954[(2)]);
var inst_16938 = (inst_16937__$1 == null);
var state_16954__$1 = (function (){var statearr_16959 = state_16954;
(statearr_16959[(8)] = inst_16937__$1);

return statearr_16959;
})();
if(cljs.core.truth_(inst_16938)){
var statearr_16960_16979 = state_16954__$1;
(statearr_16960_16979[(1)] = (5));

} else {
var statearr_16961_16980 = state_16954__$1;
(statearr_16961_16980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (6))){
var inst_16937 = (state_16954[(8)]);
var inst_16941 = (state_16954[(9)]);
var inst_16934 = (state_16954[(7)]);
var inst_16941__$1 = f.call(null,inst_16934,inst_16937);
var inst_16942 = cljs.core.reduced_QMARK_.call(null,inst_16941__$1);
var state_16954__$1 = (function (){var statearr_16962 = state_16954;
(statearr_16962[(9)] = inst_16941__$1);

return statearr_16962;
})();
if(inst_16942){
var statearr_16963_16981 = state_16954__$1;
(statearr_16963_16981[(1)] = (8));

} else {
var statearr_16964_16982 = state_16954__$1;
(statearr_16964_16982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (3))){
var inst_16952 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16954__$1,inst_16952);
} else {
if((state_val_16955 === (2))){
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16954__$1,(4),ch);
} else {
if((state_val_16955 === (9))){
var inst_16941 = (state_16954[(9)]);
var inst_16934 = inst_16941;
var state_16954__$1 = (function (){var statearr_16965 = state_16954;
(statearr_16965[(7)] = inst_16934);

return statearr_16965;
})();
var statearr_16966_16983 = state_16954__$1;
(statearr_16966_16983[(2)] = null);

(statearr_16966_16983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (5))){
var inst_16934 = (state_16954[(7)]);
var state_16954__$1 = state_16954;
var statearr_16967_16984 = state_16954__$1;
(statearr_16967_16984[(2)] = inst_16934);

(statearr_16967_16984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (10))){
var inst_16948 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16968_16985 = state_16954__$1;
(statearr_16968_16985[(2)] = inst_16948);

(statearr_16968_16985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (8))){
var inst_16941 = (state_16954[(9)]);
var inst_16944 = cljs.core.deref.call(null,inst_16941);
var state_16954__$1 = state_16954;
var statearr_16969_16986 = state_16954__$1;
(statearr_16969_16986[(2)] = inst_16944);

(statearr_16969_16986[(1)] = (10));


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
});})(c__16188__auto__))
;
return ((function (switch__16076__auto__,c__16188__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16077__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16077__auto____0 = (function (){
var statearr_16973 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16973[(0)] = cljs$core$async$reduce_$_state_machine__16077__auto__);

(statearr_16973[(1)] = (1));

return statearr_16973;
});
var cljs$core$async$reduce_$_state_machine__16077__auto____1 = (function (state_16954){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_16954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e16974){if((e16974 instanceof Object)){
var ex__16080__auto__ = e16974;
var statearr_16975_16987 = state_16954;
(statearr_16975_16987[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16988 = state_16954;
state_16954 = G__16988;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16077__auto__ = function(state_16954){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16077__auto____1.call(this,state_16954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16077__auto____0;
cljs$core$async$reduce_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16077__auto____1;
return cljs$core$async$reduce_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__))
})();
var state__16190__auto__ = (function (){var statearr_16976 = f__16189__auto__.call(null);
(statearr_16976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_16976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__))
);

return c__16188__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__,f__$1){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__,f__$1){
return (function (state_17008){
var state_val_17009 = (state_17008[(1)]);
if((state_val_17009 === (1))){
var inst_17003 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17008__$1 = state_17008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17008__$1,(2),inst_17003);
} else {
if((state_val_17009 === (2))){
var inst_17005 = (state_17008[(2)]);
var inst_17006 = f__$1.call(null,inst_17005);
var state_17008__$1 = state_17008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17008__$1,inst_17006);
} else {
return null;
}
}
});})(c__16188__auto__,f__$1))
;
return ((function (switch__16076__auto__,c__16188__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16077__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16077__auto____0 = (function (){
var statearr_17013 = [null,null,null,null,null,null,null];
(statearr_17013[(0)] = cljs$core$async$transduce_$_state_machine__16077__auto__);

(statearr_17013[(1)] = (1));

return statearr_17013;
});
var cljs$core$async$transduce_$_state_machine__16077__auto____1 = (function (state_17008){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_17008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e17014){if((e17014 instanceof Object)){
var ex__16080__auto__ = e17014;
var statearr_17015_17017 = state_17008;
(statearr_17015_17017[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17018 = state_17008;
state_17008 = G__17018;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16077__auto__ = function(state_17008){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16077__auto____1.call(this,state_17008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16077__auto____0;
cljs$core$async$transduce_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16077__auto____1;
return cljs$core$async$transduce_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__,f__$1))
})();
var state__16190__auto__ = (function (){var statearr_17016 = f__16189__auto__.call(null);
(statearr_17016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_17016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__,f__$1))
);

return c__16188__auto__;
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
var args17019 = [];
var len__10516__auto___17071 = arguments.length;
var i__10517__auto___17072 = (0);
while(true){
if((i__10517__auto___17072 < len__10516__auto___17071)){
args17019.push((arguments[i__10517__auto___17072]));

var G__17073 = (i__10517__auto___17072 + (1));
i__10517__auto___17072 = G__17073;
continue;
} else {
}
break;
}

var G__17021 = args17019.length;
switch (G__17021) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17019.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__){
return (function (state_17046){
var state_val_17047 = (state_17046[(1)]);
if((state_val_17047 === (7))){
var inst_17028 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17048_17075 = state_17046__$1;
(statearr_17048_17075[(2)] = inst_17028);

(statearr_17048_17075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (1))){
var inst_17022 = cljs.core.seq.call(null,coll);
var inst_17023 = inst_17022;
var state_17046__$1 = (function (){var statearr_17049 = state_17046;
(statearr_17049[(7)] = inst_17023);

return statearr_17049;
})();
var statearr_17050_17076 = state_17046__$1;
(statearr_17050_17076[(2)] = null);

(statearr_17050_17076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (4))){
var inst_17023 = (state_17046[(7)]);
var inst_17026 = cljs.core.first.call(null,inst_17023);
var state_17046__$1 = state_17046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17046__$1,(7),ch,inst_17026);
} else {
if((state_val_17047 === (13))){
var inst_17040 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17051_17077 = state_17046__$1;
(statearr_17051_17077[(2)] = inst_17040);

(statearr_17051_17077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (6))){
var inst_17031 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
if(cljs.core.truth_(inst_17031)){
var statearr_17052_17078 = state_17046__$1;
(statearr_17052_17078[(1)] = (8));

} else {
var statearr_17053_17079 = state_17046__$1;
(statearr_17053_17079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (3))){
var inst_17044 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17046__$1,inst_17044);
} else {
if((state_val_17047 === (12))){
var state_17046__$1 = state_17046;
var statearr_17054_17080 = state_17046__$1;
(statearr_17054_17080[(2)] = null);

(statearr_17054_17080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (2))){
var inst_17023 = (state_17046[(7)]);
var state_17046__$1 = state_17046;
if(cljs.core.truth_(inst_17023)){
var statearr_17055_17081 = state_17046__$1;
(statearr_17055_17081[(1)] = (4));

} else {
var statearr_17056_17082 = state_17046__$1;
(statearr_17056_17082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (11))){
var inst_17037 = cljs.core.async.close_BANG_.call(null,ch);
var state_17046__$1 = state_17046;
var statearr_17057_17083 = state_17046__$1;
(statearr_17057_17083[(2)] = inst_17037);

(statearr_17057_17083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (9))){
var state_17046__$1 = state_17046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17058_17084 = state_17046__$1;
(statearr_17058_17084[(1)] = (11));

} else {
var statearr_17059_17085 = state_17046__$1;
(statearr_17059_17085[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (5))){
var inst_17023 = (state_17046[(7)]);
var state_17046__$1 = state_17046;
var statearr_17060_17086 = state_17046__$1;
(statearr_17060_17086[(2)] = inst_17023);

(statearr_17060_17086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (10))){
var inst_17042 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17061_17087 = state_17046__$1;
(statearr_17061_17087[(2)] = inst_17042);

(statearr_17061_17087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (8))){
var inst_17023 = (state_17046[(7)]);
var inst_17033 = cljs.core.next.call(null,inst_17023);
var inst_17023__$1 = inst_17033;
var state_17046__$1 = (function (){var statearr_17062 = state_17046;
(statearr_17062[(7)] = inst_17023__$1);

return statearr_17062;
})();
var statearr_17063_17088 = state_17046__$1;
(statearr_17063_17088[(2)] = null);

(statearr_17063_17088[(1)] = (2));


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
});})(c__16188__auto__))
;
return ((function (switch__16076__auto__,c__16188__auto__){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_17067 = [null,null,null,null,null,null,null,null];
(statearr_17067[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_17067[(1)] = (1));

return statearr_17067;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_17046){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_17046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e17068){if((e17068 instanceof Object)){
var ex__16080__auto__ = e17068;
var statearr_17069_17089 = state_17046;
(statearr_17069_17089[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17090 = state_17046;
state_17046 = G__17090;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_17046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_17046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__))
})();
var state__16190__auto__ = (function (){var statearr_17070 = f__16189__auto__.call(null);
(statearr_17070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_17070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__))
);

return c__16188__auto__;
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
var x__10071__auto__ = (((_ == null))?null:_);
var m__10072__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,_);
} else {
var m__10072__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,_);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10072__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m,ch);
} else {
var m__10072__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m,ch);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m);
} else {
var m__10072__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async17316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17316 = (function (ch,cs,meta17317){
this.ch = ch;
this.cs = cs;
this.meta17317 = meta17317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17318,meta17317__$1){
var self__ = this;
var _17318__$1 = this;
return (new cljs.core.async.t_cljs$core$async17316(self__.ch,self__.cs,meta17317__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17318){
var self__ = this;
var _17318__$1 = this;
return self__.meta17317;
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17317","meta17317",-687560480,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17316";

cljs.core.async.t_cljs$core$async17316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async17316");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17316 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17316(ch__$1,cs__$1,meta17317){
return (new cljs.core.async.t_cljs$core$async17316(ch__$1,cs__$1,meta17317));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17316(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16188__auto___17541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___17541,cs,m,dchan,dctr,done){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___17541,cs,m,dchan,dctr,done){
return (function (state_17453){
var state_val_17454 = (state_17453[(1)]);
if((state_val_17454 === (7))){
var inst_17449 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17455_17542 = state_17453__$1;
(statearr_17455_17542[(2)] = inst_17449);

(statearr_17455_17542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (20))){
var inst_17352 = (state_17453[(7)]);
var inst_17364 = cljs.core.first.call(null,inst_17352);
var inst_17365 = cljs.core.nth.call(null,inst_17364,(0),null);
var inst_17366 = cljs.core.nth.call(null,inst_17364,(1),null);
var state_17453__$1 = (function (){var statearr_17456 = state_17453;
(statearr_17456[(8)] = inst_17365);

return statearr_17456;
})();
if(cljs.core.truth_(inst_17366)){
var statearr_17457_17543 = state_17453__$1;
(statearr_17457_17543[(1)] = (22));

} else {
var statearr_17458_17544 = state_17453__$1;
(statearr_17458_17544[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (27))){
var inst_17321 = (state_17453[(9)]);
var inst_17394 = (state_17453[(10)]);
var inst_17396 = (state_17453[(11)]);
var inst_17401 = (state_17453[(12)]);
var inst_17401__$1 = cljs.core._nth.call(null,inst_17394,inst_17396);
var inst_17402 = cljs.core.async.put_BANG_.call(null,inst_17401__$1,inst_17321,done);
var state_17453__$1 = (function (){var statearr_17459 = state_17453;
(statearr_17459[(12)] = inst_17401__$1);

return statearr_17459;
})();
if(cljs.core.truth_(inst_17402)){
var statearr_17460_17545 = state_17453__$1;
(statearr_17460_17545[(1)] = (30));

} else {
var statearr_17461_17546 = state_17453__$1;
(statearr_17461_17546[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (1))){
var state_17453__$1 = state_17453;
var statearr_17462_17547 = state_17453__$1;
(statearr_17462_17547[(2)] = null);

(statearr_17462_17547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (24))){
var inst_17352 = (state_17453[(7)]);
var inst_17371 = (state_17453[(2)]);
var inst_17372 = cljs.core.next.call(null,inst_17352);
var inst_17330 = inst_17372;
var inst_17331 = null;
var inst_17332 = (0);
var inst_17333 = (0);
var state_17453__$1 = (function (){var statearr_17463 = state_17453;
(statearr_17463[(13)] = inst_17371);

(statearr_17463[(14)] = inst_17333);

(statearr_17463[(15)] = inst_17331);

(statearr_17463[(16)] = inst_17332);

(statearr_17463[(17)] = inst_17330);

return statearr_17463;
})();
var statearr_17464_17548 = state_17453__$1;
(statearr_17464_17548[(2)] = null);

(statearr_17464_17548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (39))){
var state_17453__$1 = state_17453;
var statearr_17468_17549 = state_17453__$1;
(statearr_17468_17549[(2)] = null);

(statearr_17468_17549[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (4))){
var inst_17321 = (state_17453[(9)]);
var inst_17321__$1 = (state_17453[(2)]);
var inst_17322 = (inst_17321__$1 == null);
var state_17453__$1 = (function (){var statearr_17469 = state_17453;
(statearr_17469[(9)] = inst_17321__$1);

return statearr_17469;
})();
if(cljs.core.truth_(inst_17322)){
var statearr_17470_17550 = state_17453__$1;
(statearr_17470_17550[(1)] = (5));

} else {
var statearr_17471_17551 = state_17453__$1;
(statearr_17471_17551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (15))){
var inst_17333 = (state_17453[(14)]);
var inst_17331 = (state_17453[(15)]);
var inst_17332 = (state_17453[(16)]);
var inst_17330 = (state_17453[(17)]);
var inst_17348 = (state_17453[(2)]);
var inst_17349 = (inst_17333 + (1));
var tmp17465 = inst_17331;
var tmp17466 = inst_17332;
var tmp17467 = inst_17330;
var inst_17330__$1 = tmp17467;
var inst_17331__$1 = tmp17465;
var inst_17332__$1 = tmp17466;
var inst_17333__$1 = inst_17349;
var state_17453__$1 = (function (){var statearr_17472 = state_17453;
(statearr_17472[(18)] = inst_17348);

(statearr_17472[(14)] = inst_17333__$1);

(statearr_17472[(15)] = inst_17331__$1);

(statearr_17472[(16)] = inst_17332__$1);

(statearr_17472[(17)] = inst_17330__$1);

return statearr_17472;
})();
var statearr_17473_17552 = state_17453__$1;
(statearr_17473_17552[(2)] = null);

(statearr_17473_17552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (21))){
var inst_17375 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17477_17553 = state_17453__$1;
(statearr_17477_17553[(2)] = inst_17375);

(statearr_17477_17553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (31))){
var inst_17401 = (state_17453[(12)]);
var inst_17405 = done.call(null,null);
var inst_17406 = cljs.core.async.untap_STAR_.call(null,m,inst_17401);
var state_17453__$1 = (function (){var statearr_17478 = state_17453;
(statearr_17478[(19)] = inst_17405);

return statearr_17478;
})();
var statearr_17479_17554 = state_17453__$1;
(statearr_17479_17554[(2)] = inst_17406);

(statearr_17479_17554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (32))){
var inst_17395 = (state_17453[(20)]);
var inst_17394 = (state_17453[(10)]);
var inst_17396 = (state_17453[(11)]);
var inst_17393 = (state_17453[(21)]);
var inst_17408 = (state_17453[(2)]);
var inst_17409 = (inst_17396 + (1));
var tmp17474 = inst_17395;
var tmp17475 = inst_17394;
var tmp17476 = inst_17393;
var inst_17393__$1 = tmp17476;
var inst_17394__$1 = tmp17475;
var inst_17395__$1 = tmp17474;
var inst_17396__$1 = inst_17409;
var state_17453__$1 = (function (){var statearr_17480 = state_17453;
(statearr_17480[(20)] = inst_17395__$1);

(statearr_17480[(22)] = inst_17408);

(statearr_17480[(10)] = inst_17394__$1);

(statearr_17480[(11)] = inst_17396__$1);

(statearr_17480[(21)] = inst_17393__$1);

return statearr_17480;
})();
var statearr_17481_17555 = state_17453__$1;
(statearr_17481_17555[(2)] = null);

(statearr_17481_17555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (40))){
var inst_17421 = (state_17453[(23)]);
var inst_17425 = done.call(null,null);
var inst_17426 = cljs.core.async.untap_STAR_.call(null,m,inst_17421);
var state_17453__$1 = (function (){var statearr_17482 = state_17453;
(statearr_17482[(24)] = inst_17425);

return statearr_17482;
})();
var statearr_17483_17556 = state_17453__$1;
(statearr_17483_17556[(2)] = inst_17426);

(statearr_17483_17556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (33))){
var inst_17412 = (state_17453[(25)]);
var inst_17414 = cljs.core.chunked_seq_QMARK_.call(null,inst_17412);
var state_17453__$1 = state_17453;
if(inst_17414){
var statearr_17484_17557 = state_17453__$1;
(statearr_17484_17557[(1)] = (36));

} else {
var statearr_17485_17558 = state_17453__$1;
(statearr_17485_17558[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (13))){
var inst_17342 = (state_17453[(26)]);
var inst_17345 = cljs.core.async.close_BANG_.call(null,inst_17342);
var state_17453__$1 = state_17453;
var statearr_17486_17559 = state_17453__$1;
(statearr_17486_17559[(2)] = inst_17345);

(statearr_17486_17559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (22))){
var inst_17365 = (state_17453[(8)]);
var inst_17368 = cljs.core.async.close_BANG_.call(null,inst_17365);
var state_17453__$1 = state_17453;
var statearr_17487_17560 = state_17453__$1;
(statearr_17487_17560[(2)] = inst_17368);

(statearr_17487_17560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (36))){
var inst_17412 = (state_17453[(25)]);
var inst_17416 = cljs.core.chunk_first.call(null,inst_17412);
var inst_17417 = cljs.core.chunk_rest.call(null,inst_17412);
var inst_17418 = cljs.core.count.call(null,inst_17416);
var inst_17393 = inst_17417;
var inst_17394 = inst_17416;
var inst_17395 = inst_17418;
var inst_17396 = (0);
var state_17453__$1 = (function (){var statearr_17488 = state_17453;
(statearr_17488[(20)] = inst_17395);

(statearr_17488[(10)] = inst_17394);

(statearr_17488[(11)] = inst_17396);

(statearr_17488[(21)] = inst_17393);

return statearr_17488;
})();
var statearr_17489_17561 = state_17453__$1;
(statearr_17489_17561[(2)] = null);

(statearr_17489_17561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (41))){
var inst_17412 = (state_17453[(25)]);
var inst_17428 = (state_17453[(2)]);
var inst_17429 = cljs.core.next.call(null,inst_17412);
var inst_17393 = inst_17429;
var inst_17394 = null;
var inst_17395 = (0);
var inst_17396 = (0);
var state_17453__$1 = (function (){var statearr_17490 = state_17453;
(statearr_17490[(27)] = inst_17428);

(statearr_17490[(20)] = inst_17395);

(statearr_17490[(10)] = inst_17394);

(statearr_17490[(11)] = inst_17396);

(statearr_17490[(21)] = inst_17393);

return statearr_17490;
})();
var statearr_17491_17562 = state_17453__$1;
(statearr_17491_17562[(2)] = null);

(statearr_17491_17562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (43))){
var state_17453__$1 = state_17453;
var statearr_17492_17563 = state_17453__$1;
(statearr_17492_17563[(2)] = null);

(statearr_17492_17563[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (29))){
var inst_17437 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17493_17564 = state_17453__$1;
(statearr_17493_17564[(2)] = inst_17437);

(statearr_17493_17564[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (44))){
var inst_17446 = (state_17453[(2)]);
var state_17453__$1 = (function (){var statearr_17494 = state_17453;
(statearr_17494[(28)] = inst_17446);

return statearr_17494;
})();
var statearr_17495_17565 = state_17453__$1;
(statearr_17495_17565[(2)] = null);

(statearr_17495_17565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (6))){
var inst_17385 = (state_17453[(29)]);
var inst_17384 = cljs.core.deref.call(null,cs);
var inst_17385__$1 = cljs.core.keys.call(null,inst_17384);
var inst_17386 = cljs.core.count.call(null,inst_17385__$1);
var inst_17387 = cljs.core.reset_BANG_.call(null,dctr,inst_17386);
var inst_17392 = cljs.core.seq.call(null,inst_17385__$1);
var inst_17393 = inst_17392;
var inst_17394 = null;
var inst_17395 = (0);
var inst_17396 = (0);
var state_17453__$1 = (function (){var statearr_17496 = state_17453;
(statearr_17496[(29)] = inst_17385__$1);

(statearr_17496[(30)] = inst_17387);

(statearr_17496[(20)] = inst_17395);

(statearr_17496[(10)] = inst_17394);

(statearr_17496[(11)] = inst_17396);

(statearr_17496[(21)] = inst_17393);

return statearr_17496;
})();
var statearr_17497_17566 = state_17453__$1;
(statearr_17497_17566[(2)] = null);

(statearr_17497_17566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (28))){
var inst_17412 = (state_17453[(25)]);
var inst_17393 = (state_17453[(21)]);
var inst_17412__$1 = cljs.core.seq.call(null,inst_17393);
var state_17453__$1 = (function (){var statearr_17498 = state_17453;
(statearr_17498[(25)] = inst_17412__$1);

return statearr_17498;
})();
if(inst_17412__$1){
var statearr_17499_17567 = state_17453__$1;
(statearr_17499_17567[(1)] = (33));

} else {
var statearr_17500_17568 = state_17453__$1;
(statearr_17500_17568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (25))){
var inst_17395 = (state_17453[(20)]);
var inst_17396 = (state_17453[(11)]);
var inst_17398 = (inst_17396 < inst_17395);
var inst_17399 = inst_17398;
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17399)){
var statearr_17501_17569 = state_17453__$1;
(statearr_17501_17569[(1)] = (27));

} else {
var statearr_17502_17570 = state_17453__$1;
(statearr_17502_17570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (34))){
var state_17453__$1 = state_17453;
var statearr_17503_17571 = state_17453__$1;
(statearr_17503_17571[(2)] = null);

(statearr_17503_17571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (17))){
var state_17453__$1 = state_17453;
var statearr_17504_17572 = state_17453__$1;
(statearr_17504_17572[(2)] = null);

(statearr_17504_17572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (3))){
var inst_17451 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17453__$1,inst_17451);
} else {
if((state_val_17454 === (12))){
var inst_17380 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17505_17573 = state_17453__$1;
(statearr_17505_17573[(2)] = inst_17380);

(statearr_17505_17573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (2))){
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17453__$1,(4),ch);
} else {
if((state_val_17454 === (23))){
var state_17453__$1 = state_17453;
var statearr_17506_17574 = state_17453__$1;
(statearr_17506_17574[(2)] = null);

(statearr_17506_17574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (35))){
var inst_17435 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17507_17575 = state_17453__$1;
(statearr_17507_17575[(2)] = inst_17435);

(statearr_17507_17575[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (19))){
var inst_17352 = (state_17453[(7)]);
var inst_17356 = cljs.core.chunk_first.call(null,inst_17352);
var inst_17357 = cljs.core.chunk_rest.call(null,inst_17352);
var inst_17358 = cljs.core.count.call(null,inst_17356);
var inst_17330 = inst_17357;
var inst_17331 = inst_17356;
var inst_17332 = inst_17358;
var inst_17333 = (0);
var state_17453__$1 = (function (){var statearr_17508 = state_17453;
(statearr_17508[(14)] = inst_17333);

(statearr_17508[(15)] = inst_17331);

(statearr_17508[(16)] = inst_17332);

(statearr_17508[(17)] = inst_17330);

return statearr_17508;
})();
var statearr_17509_17576 = state_17453__$1;
(statearr_17509_17576[(2)] = null);

(statearr_17509_17576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (11))){
var inst_17352 = (state_17453[(7)]);
var inst_17330 = (state_17453[(17)]);
var inst_17352__$1 = cljs.core.seq.call(null,inst_17330);
var state_17453__$1 = (function (){var statearr_17510 = state_17453;
(statearr_17510[(7)] = inst_17352__$1);

return statearr_17510;
})();
if(inst_17352__$1){
var statearr_17511_17577 = state_17453__$1;
(statearr_17511_17577[(1)] = (16));

} else {
var statearr_17512_17578 = state_17453__$1;
(statearr_17512_17578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (9))){
var inst_17382 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17513_17579 = state_17453__$1;
(statearr_17513_17579[(2)] = inst_17382);

(statearr_17513_17579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (5))){
var inst_17328 = cljs.core.deref.call(null,cs);
var inst_17329 = cljs.core.seq.call(null,inst_17328);
var inst_17330 = inst_17329;
var inst_17331 = null;
var inst_17332 = (0);
var inst_17333 = (0);
var state_17453__$1 = (function (){var statearr_17514 = state_17453;
(statearr_17514[(14)] = inst_17333);

(statearr_17514[(15)] = inst_17331);

(statearr_17514[(16)] = inst_17332);

(statearr_17514[(17)] = inst_17330);

return statearr_17514;
})();
var statearr_17515_17580 = state_17453__$1;
(statearr_17515_17580[(2)] = null);

(statearr_17515_17580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (14))){
var state_17453__$1 = state_17453;
var statearr_17516_17581 = state_17453__$1;
(statearr_17516_17581[(2)] = null);

(statearr_17516_17581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (45))){
var inst_17443 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17517_17582 = state_17453__$1;
(statearr_17517_17582[(2)] = inst_17443);

(statearr_17517_17582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (26))){
var inst_17385 = (state_17453[(29)]);
var inst_17439 = (state_17453[(2)]);
var inst_17440 = cljs.core.seq.call(null,inst_17385);
var state_17453__$1 = (function (){var statearr_17518 = state_17453;
(statearr_17518[(31)] = inst_17439);

return statearr_17518;
})();
if(inst_17440){
var statearr_17519_17583 = state_17453__$1;
(statearr_17519_17583[(1)] = (42));

} else {
var statearr_17520_17584 = state_17453__$1;
(statearr_17520_17584[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (16))){
var inst_17352 = (state_17453[(7)]);
var inst_17354 = cljs.core.chunked_seq_QMARK_.call(null,inst_17352);
var state_17453__$1 = state_17453;
if(inst_17354){
var statearr_17521_17585 = state_17453__$1;
(statearr_17521_17585[(1)] = (19));

} else {
var statearr_17522_17586 = state_17453__$1;
(statearr_17522_17586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (38))){
var inst_17432 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17523_17587 = state_17453__$1;
(statearr_17523_17587[(2)] = inst_17432);

(statearr_17523_17587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (30))){
var state_17453__$1 = state_17453;
var statearr_17524_17588 = state_17453__$1;
(statearr_17524_17588[(2)] = null);

(statearr_17524_17588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (10))){
var inst_17333 = (state_17453[(14)]);
var inst_17331 = (state_17453[(15)]);
var inst_17341 = cljs.core._nth.call(null,inst_17331,inst_17333);
var inst_17342 = cljs.core.nth.call(null,inst_17341,(0),null);
var inst_17343 = cljs.core.nth.call(null,inst_17341,(1),null);
var state_17453__$1 = (function (){var statearr_17525 = state_17453;
(statearr_17525[(26)] = inst_17342);

return statearr_17525;
})();
if(cljs.core.truth_(inst_17343)){
var statearr_17526_17589 = state_17453__$1;
(statearr_17526_17589[(1)] = (13));

} else {
var statearr_17527_17590 = state_17453__$1;
(statearr_17527_17590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (18))){
var inst_17378 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17528_17591 = state_17453__$1;
(statearr_17528_17591[(2)] = inst_17378);

(statearr_17528_17591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (42))){
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17453__$1,(45),dchan);
} else {
if((state_val_17454 === (37))){
var inst_17412 = (state_17453[(25)]);
var inst_17321 = (state_17453[(9)]);
var inst_17421 = (state_17453[(23)]);
var inst_17421__$1 = cljs.core.first.call(null,inst_17412);
var inst_17422 = cljs.core.async.put_BANG_.call(null,inst_17421__$1,inst_17321,done);
var state_17453__$1 = (function (){var statearr_17529 = state_17453;
(statearr_17529[(23)] = inst_17421__$1);

return statearr_17529;
})();
if(cljs.core.truth_(inst_17422)){
var statearr_17530_17592 = state_17453__$1;
(statearr_17530_17592[(1)] = (39));

} else {
var statearr_17531_17593 = state_17453__$1;
(statearr_17531_17593[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (8))){
var inst_17333 = (state_17453[(14)]);
var inst_17332 = (state_17453[(16)]);
var inst_17335 = (inst_17333 < inst_17332);
var inst_17336 = inst_17335;
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17336)){
var statearr_17532_17594 = state_17453__$1;
(statearr_17532_17594[(1)] = (10));

} else {
var statearr_17533_17595 = state_17453__$1;
(statearr_17533_17595[(1)] = (11));

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
});})(c__16188__auto___17541,cs,m,dchan,dctr,done))
;
return ((function (switch__16076__auto__,c__16188__auto___17541,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16077__auto__ = null;
var cljs$core$async$mult_$_state_machine__16077__auto____0 = (function (){
var statearr_17537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17537[(0)] = cljs$core$async$mult_$_state_machine__16077__auto__);

(statearr_17537[(1)] = (1));

return statearr_17537;
});
var cljs$core$async$mult_$_state_machine__16077__auto____1 = (function (state_17453){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_17453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e17538){if((e17538 instanceof Object)){
var ex__16080__auto__ = e17538;
var statearr_17539_17596 = state_17453;
(statearr_17539_17596[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17597 = state_17453;
state_17453 = G__17597;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16077__auto__ = function(state_17453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16077__auto____1.call(this,state_17453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16077__auto____0;
cljs$core$async$mult_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16077__auto____1;
return cljs$core$async$mult_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___17541,cs,m,dchan,dctr,done))
})();
var state__16190__auto__ = (function (){var statearr_17540 = f__16189__auto__.call(null);
(statearr_17540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___17541);

return statearr_17540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___17541,cs,m,dchan,dctr,done))
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
var args17598 = [];
var len__10516__auto___17601 = arguments.length;
var i__10517__auto___17602 = (0);
while(true){
if((i__10517__auto___17602 < len__10516__auto___17601)){
args17598.push((arguments[i__10517__auto___17602]));

var G__17603 = (i__10517__auto___17602 + (1));
i__10517__auto___17602 = G__17603;
continue;
} else {
}
break;
}

var G__17600 = args17598.length;
switch (G__17600) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17598.length)].join('')));

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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m,ch);
} else {
var m__10072__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m,ch);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m,ch);
} else {
var m__10072__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m,ch);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m);
} else {
var m__10072__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m,state_map);
} else {
var m__10072__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m,state_map);
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
var x__10071__auto__ = (((m == null))?null:m);
var m__10072__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,m,mode);
} else {
var m__10072__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10523__auto__ = [];
var len__10516__auto___17615 = arguments.length;
var i__10517__auto___17616 = (0);
while(true){
if((i__10517__auto___17616 < len__10516__auto___17615)){
args__10523__auto__.push((arguments[i__10517__auto___17616]));

var G__17617 = (i__10517__auto___17616 + (1));
i__10517__auto___17616 = G__17617;
continue;
} else {
}
break;
}

var argseq__10524__auto__ = ((((3) < args__10523__auto__.length))?(new cljs.core.IndexedSeq(args__10523__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10524__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17609){
var map__17610 = p__17609;
var map__17610__$1 = ((((!((map__17610 == null)))?((((map__17610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17610):map__17610);
var opts = map__17610__$1;
var statearr_17612_17618 = state;
(statearr_17612_17618[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__17610,map__17610__$1,opts){
return (function (val){
var statearr_17613_17619 = state;
(statearr_17613_17619[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17610,map__17610__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17614_17620 = state;
(statearr_17614_17620[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17605){
var G__17606 = cljs.core.first.call(null,seq17605);
var seq17605__$1 = cljs.core.next.call(null,seq17605);
var G__17607 = cljs.core.first.call(null,seq17605__$1);
var seq17605__$2 = cljs.core.next.call(null,seq17605__$1);
var G__17608 = cljs.core.first.call(null,seq17605__$2);
var seq17605__$3 = cljs.core.next.call(null,seq17605__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17606,G__17607,G__17608,seq17605__$3);
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
if(typeof cljs.core.async.t_cljs$core$async17788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17788 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17789){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17789 = meta17789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17790,meta17789__$1){
var self__ = this;
var _17790__$1 = this;
return (new cljs.core.async.t_cljs$core$async17788(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17789__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17790){
var self__ = this;
var _17790__$1 = this;
return self__.meta17789;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17788.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17789","meta17789",-30191407,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17788";

cljs.core.async.t_cljs$core$async17788.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async17788");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17788 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17788(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17789){
return (new cljs.core.async.t_cljs$core$async17788(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17789));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17788(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16188__auto___17955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___17955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___17955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17892){
var state_val_17893 = (state_17892[(1)]);
if((state_val_17893 === (7))){
var inst_17807 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17894_17956 = state_17892__$1;
(statearr_17894_17956[(2)] = inst_17807);

(statearr_17894_17956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (20))){
var inst_17819 = (state_17892[(7)]);
var state_17892__$1 = state_17892;
var statearr_17895_17957 = state_17892__$1;
(statearr_17895_17957[(2)] = inst_17819);

(statearr_17895_17957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (27))){
var state_17892__$1 = state_17892;
var statearr_17896_17958 = state_17892__$1;
(statearr_17896_17958[(2)] = null);

(statearr_17896_17958[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (1))){
var inst_17794 = (state_17892[(8)]);
var inst_17794__$1 = calc_state.call(null);
var inst_17796 = (inst_17794__$1 == null);
var inst_17797 = cljs.core.not.call(null,inst_17796);
var state_17892__$1 = (function (){var statearr_17897 = state_17892;
(statearr_17897[(8)] = inst_17794__$1);

return statearr_17897;
})();
if(inst_17797){
var statearr_17898_17959 = state_17892__$1;
(statearr_17898_17959[(1)] = (2));

} else {
var statearr_17899_17960 = state_17892__$1;
(statearr_17899_17960[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (24))){
var inst_17852 = (state_17892[(9)]);
var inst_17866 = (state_17892[(10)]);
var inst_17843 = (state_17892[(11)]);
var inst_17866__$1 = inst_17843.call(null,inst_17852);
var state_17892__$1 = (function (){var statearr_17900 = state_17892;
(statearr_17900[(10)] = inst_17866__$1);

return statearr_17900;
})();
if(cljs.core.truth_(inst_17866__$1)){
var statearr_17901_17961 = state_17892__$1;
(statearr_17901_17961[(1)] = (29));

} else {
var statearr_17902_17962 = state_17892__$1;
(statearr_17902_17962[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (4))){
var inst_17810 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17810)){
var statearr_17903_17963 = state_17892__$1;
(statearr_17903_17963[(1)] = (8));

} else {
var statearr_17904_17964 = state_17892__$1;
(statearr_17904_17964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (15))){
var inst_17837 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17837)){
var statearr_17905_17965 = state_17892__$1;
(statearr_17905_17965[(1)] = (19));

} else {
var statearr_17906_17966 = state_17892__$1;
(statearr_17906_17966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (21))){
var inst_17842 = (state_17892[(12)]);
var inst_17842__$1 = (state_17892[(2)]);
var inst_17843 = cljs.core.get.call(null,inst_17842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17844 = cljs.core.get.call(null,inst_17842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17845 = cljs.core.get.call(null,inst_17842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17892__$1 = (function (){var statearr_17907 = state_17892;
(statearr_17907[(13)] = inst_17844);

(statearr_17907[(12)] = inst_17842__$1);

(statearr_17907[(11)] = inst_17843);

return statearr_17907;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17892__$1,(22),inst_17845);
} else {
if((state_val_17893 === (31))){
var inst_17874 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17874)){
var statearr_17908_17967 = state_17892__$1;
(statearr_17908_17967[(1)] = (32));

} else {
var statearr_17909_17968 = state_17892__$1;
(statearr_17909_17968[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (32))){
var inst_17851 = (state_17892[(14)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17892__$1,(35),out,inst_17851);
} else {
if((state_val_17893 === (33))){
var inst_17842 = (state_17892[(12)]);
var inst_17819 = inst_17842;
var state_17892__$1 = (function (){var statearr_17910 = state_17892;
(statearr_17910[(7)] = inst_17819);

return statearr_17910;
})();
var statearr_17911_17969 = state_17892__$1;
(statearr_17911_17969[(2)] = null);

(statearr_17911_17969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (13))){
var inst_17819 = (state_17892[(7)]);
var inst_17826 = inst_17819.cljs$lang$protocol_mask$partition0$;
var inst_17827 = (inst_17826 & (64));
var inst_17828 = inst_17819.cljs$core$ISeq$;
var inst_17829 = (cljs.core.PROTOCOL_SENTINEL === inst_17828);
var inst_17830 = (inst_17827) || (inst_17829);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17830)){
var statearr_17912_17970 = state_17892__$1;
(statearr_17912_17970[(1)] = (16));

} else {
var statearr_17913_17971 = state_17892__$1;
(statearr_17913_17971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (22))){
var inst_17851 = (state_17892[(14)]);
var inst_17852 = (state_17892[(9)]);
var inst_17850 = (state_17892[(2)]);
var inst_17851__$1 = cljs.core.nth.call(null,inst_17850,(0),null);
var inst_17852__$1 = cljs.core.nth.call(null,inst_17850,(1),null);
var inst_17853 = (inst_17851__$1 == null);
var inst_17854 = cljs.core._EQ_.call(null,inst_17852__$1,change);
var inst_17855 = (inst_17853) || (inst_17854);
var state_17892__$1 = (function (){var statearr_17914 = state_17892;
(statearr_17914[(14)] = inst_17851__$1);

(statearr_17914[(9)] = inst_17852__$1);

return statearr_17914;
})();
if(cljs.core.truth_(inst_17855)){
var statearr_17915_17972 = state_17892__$1;
(statearr_17915_17972[(1)] = (23));

} else {
var statearr_17916_17973 = state_17892__$1;
(statearr_17916_17973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (36))){
var inst_17842 = (state_17892[(12)]);
var inst_17819 = inst_17842;
var state_17892__$1 = (function (){var statearr_17917 = state_17892;
(statearr_17917[(7)] = inst_17819);

return statearr_17917;
})();
var statearr_17918_17974 = state_17892__$1;
(statearr_17918_17974[(2)] = null);

(statearr_17918_17974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (29))){
var inst_17866 = (state_17892[(10)]);
var state_17892__$1 = state_17892;
var statearr_17919_17975 = state_17892__$1;
(statearr_17919_17975[(2)] = inst_17866);

(statearr_17919_17975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (6))){
var state_17892__$1 = state_17892;
var statearr_17920_17976 = state_17892__$1;
(statearr_17920_17976[(2)] = false);

(statearr_17920_17976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (28))){
var inst_17862 = (state_17892[(2)]);
var inst_17863 = calc_state.call(null);
var inst_17819 = inst_17863;
var state_17892__$1 = (function (){var statearr_17921 = state_17892;
(statearr_17921[(7)] = inst_17819);

(statearr_17921[(15)] = inst_17862);

return statearr_17921;
})();
var statearr_17922_17977 = state_17892__$1;
(statearr_17922_17977[(2)] = null);

(statearr_17922_17977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (25))){
var inst_17888 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17923_17978 = state_17892__$1;
(statearr_17923_17978[(2)] = inst_17888);

(statearr_17923_17978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (34))){
var inst_17886 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17924_17979 = state_17892__$1;
(statearr_17924_17979[(2)] = inst_17886);

(statearr_17924_17979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (17))){
var state_17892__$1 = state_17892;
var statearr_17925_17980 = state_17892__$1;
(statearr_17925_17980[(2)] = false);

(statearr_17925_17980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (3))){
var state_17892__$1 = state_17892;
var statearr_17926_17981 = state_17892__$1;
(statearr_17926_17981[(2)] = false);

(statearr_17926_17981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (12))){
var inst_17890 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17892__$1,inst_17890);
} else {
if((state_val_17893 === (2))){
var inst_17794 = (state_17892[(8)]);
var inst_17799 = inst_17794.cljs$lang$protocol_mask$partition0$;
var inst_17800 = (inst_17799 & (64));
var inst_17801 = inst_17794.cljs$core$ISeq$;
var inst_17802 = (cljs.core.PROTOCOL_SENTINEL === inst_17801);
var inst_17803 = (inst_17800) || (inst_17802);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17803)){
var statearr_17927_17982 = state_17892__$1;
(statearr_17927_17982[(1)] = (5));

} else {
var statearr_17928_17983 = state_17892__$1;
(statearr_17928_17983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (23))){
var inst_17851 = (state_17892[(14)]);
var inst_17857 = (inst_17851 == null);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17857)){
var statearr_17929_17984 = state_17892__$1;
(statearr_17929_17984[(1)] = (26));

} else {
var statearr_17930_17985 = state_17892__$1;
(statearr_17930_17985[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (35))){
var inst_17877 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17877)){
var statearr_17931_17986 = state_17892__$1;
(statearr_17931_17986[(1)] = (36));

} else {
var statearr_17932_17987 = state_17892__$1;
(statearr_17932_17987[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (19))){
var inst_17819 = (state_17892[(7)]);
var inst_17839 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17819);
var state_17892__$1 = state_17892;
var statearr_17933_17988 = state_17892__$1;
(statearr_17933_17988[(2)] = inst_17839);

(statearr_17933_17988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (11))){
var inst_17819 = (state_17892[(7)]);
var inst_17823 = (inst_17819 == null);
var inst_17824 = cljs.core.not.call(null,inst_17823);
var state_17892__$1 = state_17892;
if(inst_17824){
var statearr_17934_17989 = state_17892__$1;
(statearr_17934_17989[(1)] = (13));

} else {
var statearr_17935_17990 = state_17892__$1;
(statearr_17935_17990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (9))){
var inst_17794 = (state_17892[(8)]);
var state_17892__$1 = state_17892;
var statearr_17936_17991 = state_17892__$1;
(statearr_17936_17991[(2)] = inst_17794);

(statearr_17936_17991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (5))){
var state_17892__$1 = state_17892;
var statearr_17937_17992 = state_17892__$1;
(statearr_17937_17992[(2)] = true);

(statearr_17937_17992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (14))){
var state_17892__$1 = state_17892;
var statearr_17938_17993 = state_17892__$1;
(statearr_17938_17993[(2)] = false);

(statearr_17938_17993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (26))){
var inst_17852 = (state_17892[(9)]);
var inst_17859 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17852);
var state_17892__$1 = state_17892;
var statearr_17939_17994 = state_17892__$1;
(statearr_17939_17994[(2)] = inst_17859);

(statearr_17939_17994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (16))){
var state_17892__$1 = state_17892;
var statearr_17940_17995 = state_17892__$1;
(statearr_17940_17995[(2)] = true);

(statearr_17940_17995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (38))){
var inst_17882 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17941_17996 = state_17892__$1;
(statearr_17941_17996[(2)] = inst_17882);

(statearr_17941_17996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (30))){
var inst_17844 = (state_17892[(13)]);
var inst_17852 = (state_17892[(9)]);
var inst_17843 = (state_17892[(11)]);
var inst_17869 = cljs.core.empty_QMARK_.call(null,inst_17843);
var inst_17870 = inst_17844.call(null,inst_17852);
var inst_17871 = cljs.core.not.call(null,inst_17870);
var inst_17872 = (inst_17869) && (inst_17871);
var state_17892__$1 = state_17892;
var statearr_17942_17997 = state_17892__$1;
(statearr_17942_17997[(2)] = inst_17872);

(statearr_17942_17997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (10))){
var inst_17794 = (state_17892[(8)]);
var inst_17815 = (state_17892[(2)]);
var inst_17816 = cljs.core.get.call(null,inst_17815,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17817 = cljs.core.get.call(null,inst_17815,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17818 = cljs.core.get.call(null,inst_17815,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17819 = inst_17794;
var state_17892__$1 = (function (){var statearr_17943 = state_17892;
(statearr_17943[(7)] = inst_17819);

(statearr_17943[(16)] = inst_17817);

(statearr_17943[(17)] = inst_17816);

(statearr_17943[(18)] = inst_17818);

return statearr_17943;
})();
var statearr_17944_17998 = state_17892__$1;
(statearr_17944_17998[(2)] = null);

(statearr_17944_17998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (18))){
var inst_17834 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17945_17999 = state_17892__$1;
(statearr_17945_17999[(2)] = inst_17834);

(statearr_17945_17999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (37))){
var state_17892__$1 = state_17892;
var statearr_17946_18000 = state_17892__$1;
(statearr_17946_18000[(2)] = null);

(statearr_17946_18000[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (8))){
var inst_17794 = (state_17892[(8)]);
var inst_17812 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17794);
var state_17892__$1 = state_17892;
var statearr_17947_18001 = state_17892__$1;
(statearr_17947_18001[(2)] = inst_17812);

(statearr_17947_18001[(1)] = (10));


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
});})(c__16188__auto___17955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16076__auto__,c__16188__auto___17955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16077__auto__ = null;
var cljs$core$async$mix_$_state_machine__16077__auto____0 = (function (){
var statearr_17951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17951[(0)] = cljs$core$async$mix_$_state_machine__16077__auto__);

(statearr_17951[(1)] = (1));

return statearr_17951;
});
var cljs$core$async$mix_$_state_machine__16077__auto____1 = (function (state_17892){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_17892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e17952){if((e17952 instanceof Object)){
var ex__16080__auto__ = e17952;
var statearr_17953_18002 = state_17892;
(statearr_17953_18002[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18003 = state_17892;
state_17892 = G__18003;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16077__auto__ = function(state_17892){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16077__auto____1.call(this,state_17892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16077__auto____0;
cljs$core$async$mix_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16077__auto____1;
return cljs$core$async$mix_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___17955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16190__auto__ = (function (){var statearr_17954 = f__16189__auto__.call(null);
(statearr_17954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___17955);

return statearr_17954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___17955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10071__auto__ = (((p == null))?null:p);
var m__10072__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10072__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10071__auto__ = (((p == null))?null:p);
var m__10072__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,p,v,ch);
} else {
var m__10072__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18004 = [];
var len__10516__auto___18007 = arguments.length;
var i__10517__auto___18008 = (0);
while(true){
if((i__10517__auto___18008 < len__10516__auto___18007)){
args18004.push((arguments[i__10517__auto___18008]));

var G__18009 = (i__10517__auto___18008 + (1));
i__10517__auto___18008 = G__18009;
continue;
} else {
}
break;
}

var G__18006 = args18004.length;
switch (G__18006) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18004.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10071__auto__ = (((p == null))?null:p);
var m__10072__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,p);
} else {
var m__10072__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,p);
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
var x__10071__auto__ = (((p == null))?null:p);
var m__10072__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10071__auto__)]);
if(!((m__10072__auto__ == null))){
return m__10072__auto__.call(null,p,v);
} else {
var m__10072__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10072__auto____$1 == null))){
return m__10072__auto____$1.call(null,p,v);
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
var args18012 = [];
var len__10516__auto___18137 = arguments.length;
var i__10517__auto___18138 = (0);
while(true){
if((i__10517__auto___18138 < len__10516__auto___18137)){
args18012.push((arguments[i__10517__auto___18138]));

var G__18139 = (i__10517__auto___18138 + (1));
i__10517__auto___18138 = G__18139;
continue;
} else {
}
break;
}

var G__18014 = args18012.length;
switch (G__18014) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18012.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9408__auto__,mults){
return (function (p1__18011_SHARP_){
if(cljs.core.truth_(p1__18011_SHARP_.call(null,topic))){
return p1__18011_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18011_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9408__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18016 = meta18016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18017,meta18016__$1){
var self__ = this;
var _18017__$1 = this;
return (new cljs.core.async.t_cljs$core$async18015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18016__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18017){
var self__ = this;
var _18017__$1 = this;
return self__.meta18016;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18016","meta18016",1297160684,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18015";

cljs.core.async.t_cljs$core$async18015.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async18015");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18015 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18016){
return (new cljs.core.async.t_cljs$core$async18015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18016));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16188__auto___18141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18141,mults,ensure_mult,p){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18141,mults,ensure_mult,p){
return (function (state_18089){
var state_val_18090 = (state_18089[(1)]);
if((state_val_18090 === (7))){
var inst_18085 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18091_18142 = state_18089__$1;
(statearr_18091_18142[(2)] = inst_18085);

(statearr_18091_18142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (20))){
var state_18089__$1 = state_18089;
var statearr_18092_18143 = state_18089__$1;
(statearr_18092_18143[(2)] = null);

(statearr_18092_18143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (1))){
var state_18089__$1 = state_18089;
var statearr_18093_18144 = state_18089__$1;
(statearr_18093_18144[(2)] = null);

(statearr_18093_18144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (24))){
var inst_18068 = (state_18089[(7)]);
var inst_18077 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18068);
var state_18089__$1 = state_18089;
var statearr_18094_18145 = state_18089__$1;
(statearr_18094_18145[(2)] = inst_18077);

(statearr_18094_18145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (4))){
var inst_18020 = (state_18089[(8)]);
var inst_18020__$1 = (state_18089[(2)]);
var inst_18021 = (inst_18020__$1 == null);
var state_18089__$1 = (function (){var statearr_18095 = state_18089;
(statearr_18095[(8)] = inst_18020__$1);

return statearr_18095;
})();
if(cljs.core.truth_(inst_18021)){
var statearr_18096_18146 = state_18089__$1;
(statearr_18096_18146[(1)] = (5));

} else {
var statearr_18097_18147 = state_18089__$1;
(statearr_18097_18147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (15))){
var inst_18062 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18098_18148 = state_18089__$1;
(statearr_18098_18148[(2)] = inst_18062);

(statearr_18098_18148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (21))){
var inst_18082 = (state_18089[(2)]);
var state_18089__$1 = (function (){var statearr_18099 = state_18089;
(statearr_18099[(9)] = inst_18082);

return statearr_18099;
})();
var statearr_18100_18149 = state_18089__$1;
(statearr_18100_18149[(2)] = null);

(statearr_18100_18149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (13))){
var inst_18044 = (state_18089[(10)]);
var inst_18046 = cljs.core.chunked_seq_QMARK_.call(null,inst_18044);
var state_18089__$1 = state_18089;
if(inst_18046){
var statearr_18101_18150 = state_18089__$1;
(statearr_18101_18150[(1)] = (16));

} else {
var statearr_18102_18151 = state_18089__$1;
(statearr_18102_18151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (22))){
var inst_18074 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
if(cljs.core.truth_(inst_18074)){
var statearr_18103_18152 = state_18089__$1;
(statearr_18103_18152[(1)] = (23));

} else {
var statearr_18104_18153 = state_18089__$1;
(statearr_18104_18153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (6))){
var inst_18068 = (state_18089[(7)]);
var inst_18020 = (state_18089[(8)]);
var inst_18070 = (state_18089[(11)]);
var inst_18068__$1 = topic_fn.call(null,inst_18020);
var inst_18069 = cljs.core.deref.call(null,mults);
var inst_18070__$1 = cljs.core.get.call(null,inst_18069,inst_18068__$1);
var state_18089__$1 = (function (){var statearr_18105 = state_18089;
(statearr_18105[(7)] = inst_18068__$1);

(statearr_18105[(11)] = inst_18070__$1);

return statearr_18105;
})();
if(cljs.core.truth_(inst_18070__$1)){
var statearr_18106_18154 = state_18089__$1;
(statearr_18106_18154[(1)] = (19));

} else {
var statearr_18107_18155 = state_18089__$1;
(statearr_18107_18155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (25))){
var inst_18079 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18108_18156 = state_18089__$1;
(statearr_18108_18156[(2)] = inst_18079);

(statearr_18108_18156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (17))){
var inst_18044 = (state_18089[(10)]);
var inst_18053 = cljs.core.first.call(null,inst_18044);
var inst_18054 = cljs.core.async.muxch_STAR_.call(null,inst_18053);
var inst_18055 = cljs.core.async.close_BANG_.call(null,inst_18054);
var inst_18056 = cljs.core.next.call(null,inst_18044);
var inst_18030 = inst_18056;
var inst_18031 = null;
var inst_18032 = (0);
var inst_18033 = (0);
var state_18089__$1 = (function (){var statearr_18109 = state_18089;
(statearr_18109[(12)] = inst_18031);

(statearr_18109[(13)] = inst_18030);

(statearr_18109[(14)] = inst_18033);

(statearr_18109[(15)] = inst_18055);

(statearr_18109[(16)] = inst_18032);

return statearr_18109;
})();
var statearr_18110_18157 = state_18089__$1;
(statearr_18110_18157[(2)] = null);

(statearr_18110_18157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (3))){
var inst_18087 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18089__$1,inst_18087);
} else {
if((state_val_18090 === (12))){
var inst_18064 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18111_18158 = state_18089__$1;
(statearr_18111_18158[(2)] = inst_18064);

(statearr_18111_18158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (2))){
var state_18089__$1 = state_18089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18089__$1,(4),ch);
} else {
if((state_val_18090 === (23))){
var state_18089__$1 = state_18089;
var statearr_18112_18159 = state_18089__$1;
(statearr_18112_18159[(2)] = null);

(statearr_18112_18159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (19))){
var inst_18020 = (state_18089[(8)]);
var inst_18070 = (state_18089[(11)]);
var inst_18072 = cljs.core.async.muxch_STAR_.call(null,inst_18070);
var state_18089__$1 = state_18089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18089__$1,(22),inst_18072,inst_18020);
} else {
if((state_val_18090 === (11))){
var inst_18044 = (state_18089[(10)]);
var inst_18030 = (state_18089[(13)]);
var inst_18044__$1 = cljs.core.seq.call(null,inst_18030);
var state_18089__$1 = (function (){var statearr_18113 = state_18089;
(statearr_18113[(10)] = inst_18044__$1);

return statearr_18113;
})();
if(inst_18044__$1){
var statearr_18114_18160 = state_18089__$1;
(statearr_18114_18160[(1)] = (13));

} else {
var statearr_18115_18161 = state_18089__$1;
(statearr_18115_18161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (9))){
var inst_18066 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18116_18162 = state_18089__$1;
(statearr_18116_18162[(2)] = inst_18066);

(statearr_18116_18162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (5))){
var inst_18027 = cljs.core.deref.call(null,mults);
var inst_18028 = cljs.core.vals.call(null,inst_18027);
var inst_18029 = cljs.core.seq.call(null,inst_18028);
var inst_18030 = inst_18029;
var inst_18031 = null;
var inst_18032 = (0);
var inst_18033 = (0);
var state_18089__$1 = (function (){var statearr_18117 = state_18089;
(statearr_18117[(12)] = inst_18031);

(statearr_18117[(13)] = inst_18030);

(statearr_18117[(14)] = inst_18033);

(statearr_18117[(16)] = inst_18032);

return statearr_18117;
})();
var statearr_18118_18163 = state_18089__$1;
(statearr_18118_18163[(2)] = null);

(statearr_18118_18163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (14))){
var state_18089__$1 = state_18089;
var statearr_18122_18164 = state_18089__$1;
(statearr_18122_18164[(2)] = null);

(statearr_18122_18164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (16))){
var inst_18044 = (state_18089[(10)]);
var inst_18048 = cljs.core.chunk_first.call(null,inst_18044);
var inst_18049 = cljs.core.chunk_rest.call(null,inst_18044);
var inst_18050 = cljs.core.count.call(null,inst_18048);
var inst_18030 = inst_18049;
var inst_18031 = inst_18048;
var inst_18032 = inst_18050;
var inst_18033 = (0);
var state_18089__$1 = (function (){var statearr_18123 = state_18089;
(statearr_18123[(12)] = inst_18031);

(statearr_18123[(13)] = inst_18030);

(statearr_18123[(14)] = inst_18033);

(statearr_18123[(16)] = inst_18032);

return statearr_18123;
})();
var statearr_18124_18165 = state_18089__$1;
(statearr_18124_18165[(2)] = null);

(statearr_18124_18165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (10))){
var inst_18031 = (state_18089[(12)]);
var inst_18030 = (state_18089[(13)]);
var inst_18033 = (state_18089[(14)]);
var inst_18032 = (state_18089[(16)]);
var inst_18038 = cljs.core._nth.call(null,inst_18031,inst_18033);
var inst_18039 = cljs.core.async.muxch_STAR_.call(null,inst_18038);
var inst_18040 = cljs.core.async.close_BANG_.call(null,inst_18039);
var inst_18041 = (inst_18033 + (1));
var tmp18119 = inst_18031;
var tmp18120 = inst_18030;
var tmp18121 = inst_18032;
var inst_18030__$1 = tmp18120;
var inst_18031__$1 = tmp18119;
var inst_18032__$1 = tmp18121;
var inst_18033__$1 = inst_18041;
var state_18089__$1 = (function (){var statearr_18125 = state_18089;
(statearr_18125[(12)] = inst_18031__$1);

(statearr_18125[(17)] = inst_18040);

(statearr_18125[(13)] = inst_18030__$1);

(statearr_18125[(14)] = inst_18033__$1);

(statearr_18125[(16)] = inst_18032__$1);

return statearr_18125;
})();
var statearr_18126_18166 = state_18089__$1;
(statearr_18126_18166[(2)] = null);

(statearr_18126_18166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (18))){
var inst_18059 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18127_18167 = state_18089__$1;
(statearr_18127_18167[(2)] = inst_18059);

(statearr_18127_18167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (8))){
var inst_18033 = (state_18089[(14)]);
var inst_18032 = (state_18089[(16)]);
var inst_18035 = (inst_18033 < inst_18032);
var inst_18036 = inst_18035;
var state_18089__$1 = state_18089;
if(cljs.core.truth_(inst_18036)){
var statearr_18128_18168 = state_18089__$1;
(statearr_18128_18168[(1)] = (10));

} else {
var statearr_18129_18169 = state_18089__$1;
(statearr_18129_18169[(1)] = (11));

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
});})(c__16188__auto___18141,mults,ensure_mult,p))
;
return ((function (switch__16076__auto__,c__16188__auto___18141,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18133[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18133[(1)] = (1));

return statearr_18133;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18089){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18134){if((e18134 instanceof Object)){
var ex__16080__auto__ = e18134;
var statearr_18135_18170 = state_18089;
(statearr_18135_18170[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18171 = state_18089;
state_18089 = G__18171;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18141,mults,ensure_mult,p))
})();
var state__16190__auto__ = (function (){var statearr_18136 = f__16189__auto__.call(null);
(statearr_18136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18141);

return statearr_18136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18141,mults,ensure_mult,p))
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
var args18172 = [];
var len__10516__auto___18175 = arguments.length;
var i__10517__auto___18176 = (0);
while(true){
if((i__10517__auto___18176 < len__10516__auto___18175)){
args18172.push((arguments[i__10517__auto___18176]));

var G__18177 = (i__10517__auto___18176 + (1));
i__10517__auto___18176 = G__18177;
continue;
} else {
}
break;
}

var G__18174 = args18172.length;
switch (G__18174) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18172.length)].join('')));

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
var args18179 = [];
var len__10516__auto___18182 = arguments.length;
var i__10517__auto___18183 = (0);
while(true){
if((i__10517__auto___18183 < len__10516__auto___18182)){
args18179.push((arguments[i__10517__auto___18183]));

var G__18184 = (i__10517__auto___18183 + (1));
i__10517__auto___18183 = G__18184;
continue;
} else {
}
break;
}

var G__18181 = args18179.length;
switch (G__18181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18179.length)].join('')));

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
var args18186 = [];
var len__10516__auto___18257 = arguments.length;
var i__10517__auto___18258 = (0);
while(true){
if((i__10517__auto___18258 < len__10516__auto___18257)){
args18186.push((arguments[i__10517__auto___18258]));

var G__18259 = (i__10517__auto___18258 + (1));
i__10517__auto___18258 = G__18259;
continue;
} else {
}
break;
}

var G__18188 = args18186.length;
switch (G__18188) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18186.length)].join('')));

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
var c__16188__auto___18261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18227){
var state_val_18228 = (state_18227[(1)]);
if((state_val_18228 === (7))){
var state_18227__$1 = state_18227;
var statearr_18229_18262 = state_18227__$1;
(statearr_18229_18262[(2)] = null);

(statearr_18229_18262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (1))){
var state_18227__$1 = state_18227;
var statearr_18230_18263 = state_18227__$1;
(statearr_18230_18263[(2)] = null);

(statearr_18230_18263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (4))){
var inst_18191 = (state_18227[(7)]);
var inst_18193 = (inst_18191 < cnt);
var state_18227__$1 = state_18227;
if(cljs.core.truth_(inst_18193)){
var statearr_18231_18264 = state_18227__$1;
(statearr_18231_18264[(1)] = (6));

} else {
var statearr_18232_18265 = state_18227__$1;
(statearr_18232_18265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (15))){
var inst_18223 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18233_18266 = state_18227__$1;
(statearr_18233_18266[(2)] = inst_18223);

(statearr_18233_18266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (13))){
var inst_18216 = cljs.core.async.close_BANG_.call(null,out);
var state_18227__$1 = state_18227;
var statearr_18234_18267 = state_18227__$1;
(statearr_18234_18267[(2)] = inst_18216);

(statearr_18234_18267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (6))){
var state_18227__$1 = state_18227;
var statearr_18235_18268 = state_18227__$1;
(statearr_18235_18268[(2)] = null);

(statearr_18235_18268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (3))){
var inst_18225 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18227__$1,inst_18225);
} else {
if((state_val_18228 === (12))){
var inst_18213 = (state_18227[(8)]);
var inst_18213__$1 = (state_18227[(2)]);
var inst_18214 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18213__$1);
var state_18227__$1 = (function (){var statearr_18236 = state_18227;
(statearr_18236[(8)] = inst_18213__$1);

return statearr_18236;
})();
if(cljs.core.truth_(inst_18214)){
var statearr_18237_18269 = state_18227__$1;
(statearr_18237_18269[(1)] = (13));

} else {
var statearr_18238_18270 = state_18227__$1;
(statearr_18238_18270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (2))){
var inst_18190 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18191 = (0);
var state_18227__$1 = (function (){var statearr_18239 = state_18227;
(statearr_18239[(7)] = inst_18191);

(statearr_18239[(9)] = inst_18190);

return statearr_18239;
})();
var statearr_18240_18271 = state_18227__$1;
(statearr_18240_18271[(2)] = null);

(statearr_18240_18271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (11))){
var inst_18191 = (state_18227[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18227,(10),Object,null,(9));
var inst_18200 = chs__$1.call(null,inst_18191);
var inst_18201 = done.call(null,inst_18191);
var inst_18202 = cljs.core.async.take_BANG_.call(null,inst_18200,inst_18201);
var state_18227__$1 = state_18227;
var statearr_18241_18272 = state_18227__$1;
(statearr_18241_18272[(2)] = inst_18202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (9))){
var inst_18191 = (state_18227[(7)]);
var inst_18204 = (state_18227[(2)]);
var inst_18205 = (inst_18191 + (1));
var inst_18191__$1 = inst_18205;
var state_18227__$1 = (function (){var statearr_18242 = state_18227;
(statearr_18242[(10)] = inst_18204);

(statearr_18242[(7)] = inst_18191__$1);

return statearr_18242;
})();
var statearr_18243_18273 = state_18227__$1;
(statearr_18243_18273[(2)] = null);

(statearr_18243_18273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (5))){
var inst_18211 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18244 = state_18227;
(statearr_18244[(11)] = inst_18211);

return statearr_18244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18227__$1,(12),dchan);
} else {
if((state_val_18228 === (14))){
var inst_18213 = (state_18227[(8)]);
var inst_18218 = cljs.core.apply.call(null,f,inst_18213);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18227__$1,(16),out,inst_18218);
} else {
if((state_val_18228 === (16))){
var inst_18220 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18245 = state_18227;
(statearr_18245[(12)] = inst_18220);

return statearr_18245;
})();
var statearr_18246_18274 = state_18227__$1;
(statearr_18246_18274[(2)] = null);

(statearr_18246_18274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (10))){
var inst_18195 = (state_18227[(2)]);
var inst_18196 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18227__$1 = (function (){var statearr_18247 = state_18227;
(statearr_18247[(13)] = inst_18195);

return statearr_18247;
})();
var statearr_18248_18275 = state_18227__$1;
(statearr_18248_18275[(2)] = inst_18196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (8))){
var inst_18209 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18249_18276 = state_18227__$1;
(statearr_18249_18276[(2)] = inst_18209);

(statearr_18249_18276[(1)] = (5));


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
});})(c__16188__auto___18261,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16076__auto__,c__16188__auto___18261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18253[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18253[(1)] = (1));

return statearr_18253;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18227){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18254){if((e18254 instanceof Object)){
var ex__16080__auto__ = e18254;
var statearr_18255_18277 = state_18227;
(statearr_18255_18277[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18278 = state_18227;
state_18227 = G__18278;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18261,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16190__auto__ = (function (){var statearr_18256 = f__16189__auto__.call(null);
(statearr_18256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18261);

return statearr_18256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18261,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18280 = [];
var len__10516__auto___18338 = arguments.length;
var i__10517__auto___18339 = (0);
while(true){
if((i__10517__auto___18339 < len__10516__auto___18338)){
args18280.push((arguments[i__10517__auto___18339]));

var G__18340 = (i__10517__auto___18339 + (1));
i__10517__auto___18339 = G__18340;
continue;
} else {
}
break;
}

var G__18282 = args18280.length;
switch (G__18282) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18280.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16188__auto___18342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18342,out){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18342,out){
return (function (state_18314){
var state_val_18315 = (state_18314[(1)]);
if((state_val_18315 === (7))){
var inst_18294 = (state_18314[(7)]);
var inst_18293 = (state_18314[(8)]);
var inst_18293__$1 = (state_18314[(2)]);
var inst_18294__$1 = cljs.core.nth.call(null,inst_18293__$1,(0),null);
var inst_18295 = cljs.core.nth.call(null,inst_18293__$1,(1),null);
var inst_18296 = (inst_18294__$1 == null);
var state_18314__$1 = (function (){var statearr_18316 = state_18314;
(statearr_18316[(7)] = inst_18294__$1);

(statearr_18316[(9)] = inst_18295);

(statearr_18316[(8)] = inst_18293__$1);

return statearr_18316;
})();
if(cljs.core.truth_(inst_18296)){
var statearr_18317_18343 = state_18314__$1;
(statearr_18317_18343[(1)] = (8));

} else {
var statearr_18318_18344 = state_18314__$1;
(statearr_18318_18344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (1))){
var inst_18283 = cljs.core.vec.call(null,chs);
var inst_18284 = inst_18283;
var state_18314__$1 = (function (){var statearr_18319 = state_18314;
(statearr_18319[(10)] = inst_18284);

return statearr_18319;
})();
var statearr_18320_18345 = state_18314__$1;
(statearr_18320_18345[(2)] = null);

(statearr_18320_18345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (4))){
var inst_18284 = (state_18314[(10)]);
var state_18314__$1 = state_18314;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18314__$1,(7),inst_18284);
} else {
if((state_val_18315 === (6))){
var inst_18310 = (state_18314[(2)]);
var state_18314__$1 = state_18314;
var statearr_18321_18346 = state_18314__$1;
(statearr_18321_18346[(2)] = inst_18310);

(statearr_18321_18346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (3))){
var inst_18312 = (state_18314[(2)]);
var state_18314__$1 = state_18314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18314__$1,inst_18312);
} else {
if((state_val_18315 === (2))){
var inst_18284 = (state_18314[(10)]);
var inst_18286 = cljs.core.count.call(null,inst_18284);
var inst_18287 = (inst_18286 > (0));
var state_18314__$1 = state_18314;
if(cljs.core.truth_(inst_18287)){
var statearr_18323_18347 = state_18314__$1;
(statearr_18323_18347[(1)] = (4));

} else {
var statearr_18324_18348 = state_18314__$1;
(statearr_18324_18348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (11))){
var inst_18284 = (state_18314[(10)]);
var inst_18303 = (state_18314[(2)]);
var tmp18322 = inst_18284;
var inst_18284__$1 = tmp18322;
var state_18314__$1 = (function (){var statearr_18325 = state_18314;
(statearr_18325[(10)] = inst_18284__$1);

(statearr_18325[(11)] = inst_18303);

return statearr_18325;
})();
var statearr_18326_18349 = state_18314__$1;
(statearr_18326_18349[(2)] = null);

(statearr_18326_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (9))){
var inst_18294 = (state_18314[(7)]);
var state_18314__$1 = state_18314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18314__$1,(11),out,inst_18294);
} else {
if((state_val_18315 === (5))){
var inst_18308 = cljs.core.async.close_BANG_.call(null,out);
var state_18314__$1 = state_18314;
var statearr_18327_18350 = state_18314__$1;
(statearr_18327_18350[(2)] = inst_18308);

(statearr_18327_18350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (10))){
var inst_18306 = (state_18314[(2)]);
var state_18314__$1 = state_18314;
var statearr_18328_18351 = state_18314__$1;
(statearr_18328_18351[(2)] = inst_18306);

(statearr_18328_18351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18315 === (8))){
var inst_18284 = (state_18314[(10)]);
var inst_18294 = (state_18314[(7)]);
var inst_18295 = (state_18314[(9)]);
var inst_18293 = (state_18314[(8)]);
var inst_18298 = (function (){var cs = inst_18284;
var vec__18289 = inst_18293;
var v = inst_18294;
var c = inst_18295;
return ((function (cs,vec__18289,v,c,inst_18284,inst_18294,inst_18295,inst_18293,state_val_18315,c__16188__auto___18342,out){
return (function (p1__18279_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18279_SHARP_);
});
;})(cs,vec__18289,v,c,inst_18284,inst_18294,inst_18295,inst_18293,state_val_18315,c__16188__auto___18342,out))
})();
var inst_18299 = cljs.core.filterv.call(null,inst_18298,inst_18284);
var inst_18284__$1 = inst_18299;
var state_18314__$1 = (function (){var statearr_18329 = state_18314;
(statearr_18329[(10)] = inst_18284__$1);

return statearr_18329;
})();
var statearr_18330_18352 = state_18314__$1;
(statearr_18330_18352[(2)] = null);

(statearr_18330_18352[(1)] = (2));


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
});})(c__16188__auto___18342,out))
;
return ((function (switch__16076__auto__,c__16188__auto___18342,out){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18334[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18334[(1)] = (1));

return statearr_18334;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18314){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18335){if((e18335 instanceof Object)){
var ex__16080__auto__ = e18335;
var statearr_18336_18353 = state_18314;
(statearr_18336_18353[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18354 = state_18314;
state_18314 = G__18354;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18342,out))
})();
var state__16190__auto__ = (function (){var statearr_18337 = f__16189__auto__.call(null);
(statearr_18337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18342);

return statearr_18337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18342,out))
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
var args18355 = [];
var len__10516__auto___18404 = arguments.length;
var i__10517__auto___18405 = (0);
while(true){
if((i__10517__auto___18405 < len__10516__auto___18404)){
args18355.push((arguments[i__10517__auto___18405]));

var G__18406 = (i__10517__auto___18405 + (1));
i__10517__auto___18405 = G__18406;
continue;
} else {
}
break;
}

var G__18357 = args18355.length;
switch (G__18357) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18355.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16188__auto___18408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18408,out){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18408,out){
return (function (state_18381){
var state_val_18382 = (state_18381[(1)]);
if((state_val_18382 === (7))){
var inst_18363 = (state_18381[(7)]);
var inst_18363__$1 = (state_18381[(2)]);
var inst_18364 = (inst_18363__$1 == null);
var inst_18365 = cljs.core.not.call(null,inst_18364);
var state_18381__$1 = (function (){var statearr_18383 = state_18381;
(statearr_18383[(7)] = inst_18363__$1);

return statearr_18383;
})();
if(inst_18365){
var statearr_18384_18409 = state_18381__$1;
(statearr_18384_18409[(1)] = (8));

} else {
var statearr_18385_18410 = state_18381__$1;
(statearr_18385_18410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (1))){
var inst_18358 = (0);
var state_18381__$1 = (function (){var statearr_18386 = state_18381;
(statearr_18386[(8)] = inst_18358);

return statearr_18386;
})();
var statearr_18387_18411 = state_18381__$1;
(statearr_18387_18411[(2)] = null);

(statearr_18387_18411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (4))){
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18381__$1,(7),ch);
} else {
if((state_val_18382 === (6))){
var inst_18376 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18388_18412 = state_18381__$1;
(statearr_18388_18412[(2)] = inst_18376);

(statearr_18388_18412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (3))){
var inst_18378 = (state_18381[(2)]);
var inst_18379 = cljs.core.async.close_BANG_.call(null,out);
var state_18381__$1 = (function (){var statearr_18389 = state_18381;
(statearr_18389[(9)] = inst_18378);

return statearr_18389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18381__$1,inst_18379);
} else {
if((state_val_18382 === (2))){
var inst_18358 = (state_18381[(8)]);
var inst_18360 = (inst_18358 < n);
var state_18381__$1 = state_18381;
if(cljs.core.truth_(inst_18360)){
var statearr_18390_18413 = state_18381__$1;
(statearr_18390_18413[(1)] = (4));

} else {
var statearr_18391_18414 = state_18381__$1;
(statearr_18391_18414[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (11))){
var inst_18358 = (state_18381[(8)]);
var inst_18368 = (state_18381[(2)]);
var inst_18369 = (inst_18358 + (1));
var inst_18358__$1 = inst_18369;
var state_18381__$1 = (function (){var statearr_18392 = state_18381;
(statearr_18392[(8)] = inst_18358__$1);

(statearr_18392[(10)] = inst_18368);

return statearr_18392;
})();
var statearr_18393_18415 = state_18381__$1;
(statearr_18393_18415[(2)] = null);

(statearr_18393_18415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (9))){
var state_18381__$1 = state_18381;
var statearr_18394_18416 = state_18381__$1;
(statearr_18394_18416[(2)] = null);

(statearr_18394_18416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (5))){
var state_18381__$1 = state_18381;
var statearr_18395_18417 = state_18381__$1;
(statearr_18395_18417[(2)] = null);

(statearr_18395_18417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (10))){
var inst_18373 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18396_18418 = state_18381__$1;
(statearr_18396_18418[(2)] = inst_18373);

(statearr_18396_18418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (8))){
var inst_18363 = (state_18381[(7)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18381__$1,(11),out,inst_18363);
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
});})(c__16188__auto___18408,out))
;
return ((function (switch__16076__auto__,c__16188__auto___18408,out){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18400[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18400[(1)] = (1));

return statearr_18400;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18381){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18401){if((e18401 instanceof Object)){
var ex__16080__auto__ = e18401;
var statearr_18402_18419 = state_18381;
(statearr_18402_18419[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18420 = state_18381;
state_18381 = G__18420;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18408,out))
})();
var state__16190__auto__ = (function (){var statearr_18403 = f__16189__auto__.call(null);
(statearr_18403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18408);

return statearr_18403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18408,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18428 = (function (f,ch,meta18429){
this.f = f;
this.ch = ch;
this.meta18429 = meta18429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18430,meta18429__$1){
var self__ = this;
var _18430__$1 = this;
return (new cljs.core.async.t_cljs$core$async18428(self__.f,self__.ch,meta18429__$1));
});

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18430){
var self__ = this;
var _18430__$1 = this;
return self__.meta18429;
});

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18431 = (function (f,ch,meta18429,_,fn1,meta18432){
this.f = f;
this.ch = ch;
this.meta18429 = meta18429;
this._ = _;
this.fn1 = fn1;
this.meta18432 = meta18432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18433,meta18432__$1){
var self__ = this;
var _18433__$1 = this;
return (new cljs.core.async.t_cljs$core$async18431(self__.f,self__.ch,self__.meta18429,self__._,self__.fn1,meta18432__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18433){
var self__ = this;
var _18433__$1 = this;
return self__.meta18432;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18421_SHARP_){
return f1.call(null,(((p1__18421_SHARP_ == null))?null:self__.f.call(null,p1__18421_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18431.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18429","meta18429",-1305376765,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18428","cljs.core.async/t_cljs$core$async18428",-516508487,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18432","meta18432",-1780972233,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18431";

cljs.core.async.t_cljs$core$async18431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async18431");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18431 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18431(f__$1,ch__$1,meta18429__$1,___$2,fn1__$1,meta18432){
return (new cljs.core.async.t_cljs$core$async18431(f__$1,ch__$1,meta18429__$1,___$2,fn1__$1,meta18432));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18431(self__.f,self__.ch,self__.meta18429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9396__auto__ = ret;
if(cljs.core.truth_(and__9396__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9396__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18429","meta18429",-1305376765,null)], null);
});

cljs.core.async.t_cljs$core$async18428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18428";

cljs.core.async.t_cljs$core$async18428.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async18428");
});

cljs.core.async.__GT_t_cljs$core$async18428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18428(f__$1,ch__$1,meta18429){
return (new cljs.core.async.t_cljs$core$async18428(f__$1,ch__$1,meta18429));
});

}

return (new cljs.core.async.t_cljs$core$async18428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18437 = (function (f,ch,meta18438){
this.f = f;
this.ch = ch;
this.meta18438 = meta18438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18439,meta18438__$1){
var self__ = this;
var _18439__$1 = this;
return (new cljs.core.async.t_cljs$core$async18437(self__.f,self__.ch,meta18438__$1));
});

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18439){
var self__ = this;
var _18439__$1 = this;
return self__.meta18438;
});

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18438","meta18438",869847395,null)], null);
});

cljs.core.async.t_cljs$core$async18437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18437";

cljs.core.async.t_cljs$core$async18437.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async18437");
});

cljs.core.async.__GT_t_cljs$core$async18437 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18437(f__$1,ch__$1,meta18438){
return (new cljs.core.async.t_cljs$core$async18437(f__$1,ch__$1,meta18438));
});

}

return (new cljs.core.async.t_cljs$core$async18437(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18443 = (function (p,ch,meta18444){
this.p = p;
this.ch = ch;
this.meta18444 = meta18444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18445,meta18444__$1){
var self__ = this;
var _18445__$1 = this;
return (new cljs.core.async.t_cljs$core$async18443(self__.p,self__.ch,meta18444__$1));
});

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18445){
var self__ = this;
var _18445__$1 = this;
return self__.meta18444;
});

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18444","meta18444",234139913,null)], null);
});

cljs.core.async.t_cljs$core$async18443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18443";

cljs.core.async.t_cljs$core$async18443.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cljs.core.async/t_cljs$core$async18443");
});

cljs.core.async.__GT_t_cljs$core$async18443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18443(p__$1,ch__$1,meta18444){
return (new cljs.core.async.t_cljs$core$async18443(p__$1,ch__$1,meta18444));
});

}

return (new cljs.core.async.t_cljs$core$async18443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18446 = [];
var len__10516__auto___18490 = arguments.length;
var i__10517__auto___18491 = (0);
while(true){
if((i__10517__auto___18491 < len__10516__auto___18490)){
args18446.push((arguments[i__10517__auto___18491]));

var G__18492 = (i__10517__auto___18491 + (1));
i__10517__auto___18491 = G__18492;
continue;
} else {
}
break;
}

var G__18448 = args18446.length;
switch (G__18448) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18446.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16188__auto___18494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18494,out){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18494,out){
return (function (state_18469){
var state_val_18470 = (state_18469[(1)]);
if((state_val_18470 === (7))){
var inst_18465 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18471_18495 = state_18469__$1;
(statearr_18471_18495[(2)] = inst_18465);

(statearr_18471_18495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (1))){
var state_18469__$1 = state_18469;
var statearr_18472_18496 = state_18469__$1;
(statearr_18472_18496[(2)] = null);

(statearr_18472_18496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (4))){
var inst_18451 = (state_18469[(7)]);
var inst_18451__$1 = (state_18469[(2)]);
var inst_18452 = (inst_18451__$1 == null);
var state_18469__$1 = (function (){var statearr_18473 = state_18469;
(statearr_18473[(7)] = inst_18451__$1);

return statearr_18473;
})();
if(cljs.core.truth_(inst_18452)){
var statearr_18474_18497 = state_18469__$1;
(statearr_18474_18497[(1)] = (5));

} else {
var statearr_18475_18498 = state_18469__$1;
(statearr_18475_18498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (6))){
var inst_18451 = (state_18469[(7)]);
var inst_18456 = p.call(null,inst_18451);
var state_18469__$1 = state_18469;
if(cljs.core.truth_(inst_18456)){
var statearr_18476_18499 = state_18469__$1;
(statearr_18476_18499[(1)] = (8));

} else {
var statearr_18477_18500 = state_18469__$1;
(statearr_18477_18500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (3))){
var inst_18467 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18469__$1,inst_18467);
} else {
if((state_val_18470 === (2))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(4),ch);
} else {
if((state_val_18470 === (11))){
var inst_18459 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18478_18501 = state_18469__$1;
(statearr_18478_18501[(2)] = inst_18459);

(statearr_18478_18501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (9))){
var state_18469__$1 = state_18469;
var statearr_18479_18502 = state_18469__$1;
(statearr_18479_18502[(2)] = null);

(statearr_18479_18502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (5))){
var inst_18454 = cljs.core.async.close_BANG_.call(null,out);
var state_18469__$1 = state_18469;
var statearr_18480_18503 = state_18469__$1;
(statearr_18480_18503[(2)] = inst_18454);

(statearr_18480_18503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (10))){
var inst_18462 = (state_18469[(2)]);
var state_18469__$1 = (function (){var statearr_18481 = state_18469;
(statearr_18481[(8)] = inst_18462);

return statearr_18481;
})();
var statearr_18482_18504 = state_18469__$1;
(statearr_18482_18504[(2)] = null);

(statearr_18482_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (8))){
var inst_18451 = (state_18469[(7)]);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18469__$1,(11),out,inst_18451);
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
});})(c__16188__auto___18494,out))
;
return ((function (switch__16076__auto__,c__16188__auto___18494,out){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18486 = [null,null,null,null,null,null,null,null,null];
(statearr_18486[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18486[(1)] = (1));

return statearr_18486;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18469){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18487){if((e18487 instanceof Object)){
var ex__16080__auto__ = e18487;
var statearr_18488_18505 = state_18469;
(statearr_18488_18505[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18506 = state_18469;
state_18469 = G__18506;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18494,out))
})();
var state__16190__auto__ = (function (){var statearr_18489 = f__16189__auto__.call(null);
(statearr_18489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18494);

return statearr_18489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18494,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18507 = [];
var len__10516__auto___18510 = arguments.length;
var i__10517__auto___18511 = (0);
while(true){
if((i__10517__auto___18511 < len__10516__auto___18510)){
args18507.push((arguments[i__10517__auto___18511]));

var G__18512 = (i__10517__auto___18511 + (1));
i__10517__auto___18511 = G__18512;
continue;
} else {
}
break;
}

var G__18509 = args18507.length;
switch (G__18509) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18507.length)].join('')));

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
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__){
return (function (state_18679){
var state_val_18680 = (state_18679[(1)]);
if((state_val_18680 === (7))){
var inst_18675 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18681_18722 = state_18679__$1;
(statearr_18681_18722[(2)] = inst_18675);

(statearr_18681_18722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (20))){
var inst_18645 = (state_18679[(7)]);
var inst_18656 = (state_18679[(2)]);
var inst_18657 = cljs.core.next.call(null,inst_18645);
var inst_18631 = inst_18657;
var inst_18632 = null;
var inst_18633 = (0);
var inst_18634 = (0);
var state_18679__$1 = (function (){var statearr_18682 = state_18679;
(statearr_18682[(8)] = inst_18633);

(statearr_18682[(9)] = inst_18631);

(statearr_18682[(10)] = inst_18632);

(statearr_18682[(11)] = inst_18656);

(statearr_18682[(12)] = inst_18634);

return statearr_18682;
})();
var statearr_18683_18723 = state_18679__$1;
(statearr_18683_18723[(2)] = null);

(statearr_18683_18723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (1))){
var state_18679__$1 = state_18679;
var statearr_18684_18724 = state_18679__$1;
(statearr_18684_18724[(2)] = null);

(statearr_18684_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (4))){
var inst_18620 = (state_18679[(13)]);
var inst_18620__$1 = (state_18679[(2)]);
var inst_18621 = (inst_18620__$1 == null);
var state_18679__$1 = (function (){var statearr_18685 = state_18679;
(statearr_18685[(13)] = inst_18620__$1);

return statearr_18685;
})();
if(cljs.core.truth_(inst_18621)){
var statearr_18686_18725 = state_18679__$1;
(statearr_18686_18725[(1)] = (5));

} else {
var statearr_18687_18726 = state_18679__$1;
(statearr_18687_18726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (15))){
var state_18679__$1 = state_18679;
var statearr_18691_18727 = state_18679__$1;
(statearr_18691_18727[(2)] = null);

(statearr_18691_18727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (21))){
var state_18679__$1 = state_18679;
var statearr_18692_18728 = state_18679__$1;
(statearr_18692_18728[(2)] = null);

(statearr_18692_18728[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (13))){
var inst_18633 = (state_18679[(8)]);
var inst_18631 = (state_18679[(9)]);
var inst_18632 = (state_18679[(10)]);
var inst_18634 = (state_18679[(12)]);
var inst_18641 = (state_18679[(2)]);
var inst_18642 = (inst_18634 + (1));
var tmp18688 = inst_18633;
var tmp18689 = inst_18631;
var tmp18690 = inst_18632;
var inst_18631__$1 = tmp18689;
var inst_18632__$1 = tmp18690;
var inst_18633__$1 = tmp18688;
var inst_18634__$1 = inst_18642;
var state_18679__$1 = (function (){var statearr_18693 = state_18679;
(statearr_18693[(14)] = inst_18641);

(statearr_18693[(8)] = inst_18633__$1);

(statearr_18693[(9)] = inst_18631__$1);

(statearr_18693[(10)] = inst_18632__$1);

(statearr_18693[(12)] = inst_18634__$1);

return statearr_18693;
})();
var statearr_18694_18729 = state_18679__$1;
(statearr_18694_18729[(2)] = null);

(statearr_18694_18729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (22))){
var state_18679__$1 = state_18679;
var statearr_18695_18730 = state_18679__$1;
(statearr_18695_18730[(2)] = null);

(statearr_18695_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (6))){
var inst_18620 = (state_18679[(13)]);
var inst_18629 = f.call(null,inst_18620);
var inst_18630 = cljs.core.seq.call(null,inst_18629);
var inst_18631 = inst_18630;
var inst_18632 = null;
var inst_18633 = (0);
var inst_18634 = (0);
var state_18679__$1 = (function (){var statearr_18696 = state_18679;
(statearr_18696[(8)] = inst_18633);

(statearr_18696[(9)] = inst_18631);

(statearr_18696[(10)] = inst_18632);

(statearr_18696[(12)] = inst_18634);

return statearr_18696;
})();
var statearr_18697_18731 = state_18679__$1;
(statearr_18697_18731[(2)] = null);

(statearr_18697_18731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (17))){
var inst_18645 = (state_18679[(7)]);
var inst_18649 = cljs.core.chunk_first.call(null,inst_18645);
var inst_18650 = cljs.core.chunk_rest.call(null,inst_18645);
var inst_18651 = cljs.core.count.call(null,inst_18649);
var inst_18631 = inst_18650;
var inst_18632 = inst_18649;
var inst_18633 = inst_18651;
var inst_18634 = (0);
var state_18679__$1 = (function (){var statearr_18698 = state_18679;
(statearr_18698[(8)] = inst_18633);

(statearr_18698[(9)] = inst_18631);

(statearr_18698[(10)] = inst_18632);

(statearr_18698[(12)] = inst_18634);

return statearr_18698;
})();
var statearr_18699_18732 = state_18679__$1;
(statearr_18699_18732[(2)] = null);

(statearr_18699_18732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (3))){
var inst_18677 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18679__$1,inst_18677);
} else {
if((state_val_18680 === (12))){
var inst_18665 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18700_18733 = state_18679__$1;
(statearr_18700_18733[(2)] = inst_18665);

(statearr_18700_18733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (2))){
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18679__$1,(4),in$);
} else {
if((state_val_18680 === (23))){
var inst_18673 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18701_18734 = state_18679__$1;
(statearr_18701_18734[(2)] = inst_18673);

(statearr_18701_18734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (19))){
var inst_18660 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18702_18735 = state_18679__$1;
(statearr_18702_18735[(2)] = inst_18660);

(statearr_18702_18735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (11))){
var inst_18631 = (state_18679[(9)]);
var inst_18645 = (state_18679[(7)]);
var inst_18645__$1 = cljs.core.seq.call(null,inst_18631);
var state_18679__$1 = (function (){var statearr_18703 = state_18679;
(statearr_18703[(7)] = inst_18645__$1);

return statearr_18703;
})();
if(inst_18645__$1){
var statearr_18704_18736 = state_18679__$1;
(statearr_18704_18736[(1)] = (14));

} else {
var statearr_18705_18737 = state_18679__$1;
(statearr_18705_18737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (9))){
var inst_18667 = (state_18679[(2)]);
var inst_18668 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18679__$1 = (function (){var statearr_18706 = state_18679;
(statearr_18706[(15)] = inst_18667);

return statearr_18706;
})();
if(cljs.core.truth_(inst_18668)){
var statearr_18707_18738 = state_18679__$1;
(statearr_18707_18738[(1)] = (21));

} else {
var statearr_18708_18739 = state_18679__$1;
(statearr_18708_18739[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (5))){
var inst_18623 = cljs.core.async.close_BANG_.call(null,out);
var state_18679__$1 = state_18679;
var statearr_18709_18740 = state_18679__$1;
(statearr_18709_18740[(2)] = inst_18623);

(statearr_18709_18740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (14))){
var inst_18645 = (state_18679[(7)]);
var inst_18647 = cljs.core.chunked_seq_QMARK_.call(null,inst_18645);
var state_18679__$1 = state_18679;
if(inst_18647){
var statearr_18710_18741 = state_18679__$1;
(statearr_18710_18741[(1)] = (17));

} else {
var statearr_18711_18742 = state_18679__$1;
(statearr_18711_18742[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (16))){
var inst_18663 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18712_18743 = state_18679__$1;
(statearr_18712_18743[(2)] = inst_18663);

(statearr_18712_18743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (10))){
var inst_18632 = (state_18679[(10)]);
var inst_18634 = (state_18679[(12)]);
var inst_18639 = cljs.core._nth.call(null,inst_18632,inst_18634);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18679__$1,(13),out,inst_18639);
} else {
if((state_val_18680 === (18))){
var inst_18645 = (state_18679[(7)]);
var inst_18654 = cljs.core.first.call(null,inst_18645);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18679__$1,(20),out,inst_18654);
} else {
if((state_val_18680 === (8))){
var inst_18633 = (state_18679[(8)]);
var inst_18634 = (state_18679[(12)]);
var inst_18636 = (inst_18634 < inst_18633);
var inst_18637 = inst_18636;
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18637)){
var statearr_18713_18744 = state_18679__$1;
(statearr_18713_18744[(1)] = (10));

} else {
var statearr_18714_18745 = state_18679__$1;
(statearr_18714_18745[(1)] = (11));

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
});})(c__16188__auto__))
;
return ((function (switch__16076__auto__,c__16188__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16077__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16077__auto____0 = (function (){
var statearr_18718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18718[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16077__auto__);

(statearr_18718[(1)] = (1));

return statearr_18718;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16077__auto____1 = (function (state_18679){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18719){if((e18719 instanceof Object)){
var ex__16080__auto__ = e18719;
var statearr_18720_18746 = state_18679;
(statearr_18720_18746[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18747 = state_18679;
state_18679 = G__18747;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16077__auto__ = function(state_18679){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16077__auto____1.call(this,state_18679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16077__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16077__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__))
})();
var state__16190__auto__ = (function (){var statearr_18721 = f__16189__auto__.call(null);
(statearr_18721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_18721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__))
);

return c__16188__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18748 = [];
var len__10516__auto___18751 = arguments.length;
var i__10517__auto___18752 = (0);
while(true){
if((i__10517__auto___18752 < len__10516__auto___18751)){
args18748.push((arguments[i__10517__auto___18752]));

var G__18753 = (i__10517__auto___18752 + (1));
i__10517__auto___18752 = G__18753;
continue;
} else {
}
break;
}

var G__18750 = args18748.length;
switch (G__18750) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18748.length)].join('')));

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
var args18755 = [];
var len__10516__auto___18758 = arguments.length;
var i__10517__auto___18759 = (0);
while(true){
if((i__10517__auto___18759 < len__10516__auto___18758)){
args18755.push((arguments[i__10517__auto___18759]));

var G__18760 = (i__10517__auto___18759 + (1));
i__10517__auto___18759 = G__18760;
continue;
} else {
}
break;
}

var G__18757 = args18755.length;
switch (G__18757) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18755.length)].join('')));

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
var args18762 = [];
var len__10516__auto___18813 = arguments.length;
var i__10517__auto___18814 = (0);
while(true){
if((i__10517__auto___18814 < len__10516__auto___18813)){
args18762.push((arguments[i__10517__auto___18814]));

var G__18815 = (i__10517__auto___18814 + (1));
i__10517__auto___18814 = G__18815;
continue;
} else {
}
break;
}

var G__18764 = args18762.length;
switch (G__18764) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18762.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16188__auto___18817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18817,out){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18817,out){
return (function (state_18788){
var state_val_18789 = (state_18788[(1)]);
if((state_val_18789 === (7))){
var inst_18783 = (state_18788[(2)]);
var state_18788__$1 = state_18788;
var statearr_18790_18818 = state_18788__$1;
(statearr_18790_18818[(2)] = inst_18783);

(statearr_18790_18818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (1))){
var inst_18765 = null;
var state_18788__$1 = (function (){var statearr_18791 = state_18788;
(statearr_18791[(7)] = inst_18765);

return statearr_18791;
})();
var statearr_18792_18819 = state_18788__$1;
(statearr_18792_18819[(2)] = null);

(statearr_18792_18819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (4))){
var inst_18768 = (state_18788[(8)]);
var inst_18768__$1 = (state_18788[(2)]);
var inst_18769 = (inst_18768__$1 == null);
var inst_18770 = cljs.core.not.call(null,inst_18769);
var state_18788__$1 = (function (){var statearr_18793 = state_18788;
(statearr_18793[(8)] = inst_18768__$1);

return statearr_18793;
})();
if(inst_18770){
var statearr_18794_18820 = state_18788__$1;
(statearr_18794_18820[(1)] = (5));

} else {
var statearr_18795_18821 = state_18788__$1;
(statearr_18795_18821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (6))){
var state_18788__$1 = state_18788;
var statearr_18796_18822 = state_18788__$1;
(statearr_18796_18822[(2)] = null);

(statearr_18796_18822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (3))){
var inst_18785 = (state_18788[(2)]);
var inst_18786 = cljs.core.async.close_BANG_.call(null,out);
var state_18788__$1 = (function (){var statearr_18797 = state_18788;
(statearr_18797[(9)] = inst_18785);

return statearr_18797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18788__$1,inst_18786);
} else {
if((state_val_18789 === (2))){
var state_18788__$1 = state_18788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18788__$1,(4),ch);
} else {
if((state_val_18789 === (11))){
var inst_18768 = (state_18788[(8)]);
var inst_18777 = (state_18788[(2)]);
var inst_18765 = inst_18768;
var state_18788__$1 = (function (){var statearr_18798 = state_18788;
(statearr_18798[(10)] = inst_18777);

(statearr_18798[(7)] = inst_18765);

return statearr_18798;
})();
var statearr_18799_18823 = state_18788__$1;
(statearr_18799_18823[(2)] = null);

(statearr_18799_18823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (9))){
var inst_18768 = (state_18788[(8)]);
var state_18788__$1 = state_18788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18788__$1,(11),out,inst_18768);
} else {
if((state_val_18789 === (5))){
var inst_18768 = (state_18788[(8)]);
var inst_18765 = (state_18788[(7)]);
var inst_18772 = cljs.core._EQ_.call(null,inst_18768,inst_18765);
var state_18788__$1 = state_18788;
if(inst_18772){
var statearr_18801_18824 = state_18788__$1;
(statearr_18801_18824[(1)] = (8));

} else {
var statearr_18802_18825 = state_18788__$1;
(statearr_18802_18825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (10))){
var inst_18780 = (state_18788[(2)]);
var state_18788__$1 = state_18788;
var statearr_18803_18826 = state_18788__$1;
(statearr_18803_18826[(2)] = inst_18780);

(statearr_18803_18826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (8))){
var inst_18765 = (state_18788[(7)]);
var tmp18800 = inst_18765;
var inst_18765__$1 = tmp18800;
var state_18788__$1 = (function (){var statearr_18804 = state_18788;
(statearr_18804[(7)] = inst_18765__$1);

return statearr_18804;
})();
var statearr_18805_18827 = state_18788__$1;
(statearr_18805_18827[(2)] = null);

(statearr_18805_18827[(1)] = (2));


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
});})(c__16188__auto___18817,out))
;
return ((function (switch__16076__auto__,c__16188__auto___18817,out){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18809[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18809[(1)] = (1));

return statearr_18809;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18788){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18810){if((e18810 instanceof Object)){
var ex__16080__auto__ = e18810;
var statearr_18811_18828 = state_18788;
(statearr_18811_18828[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18829 = state_18788;
state_18788 = G__18829;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18817,out))
})();
var state__16190__auto__ = (function (){var statearr_18812 = f__16189__auto__.call(null);
(statearr_18812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18817);

return statearr_18812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18817,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18830 = [];
var len__10516__auto___18900 = arguments.length;
var i__10517__auto___18901 = (0);
while(true){
if((i__10517__auto___18901 < len__10516__auto___18900)){
args18830.push((arguments[i__10517__auto___18901]));

var G__18902 = (i__10517__auto___18901 + (1));
i__10517__auto___18901 = G__18902;
continue;
} else {
}
break;
}

var G__18832 = args18830.length;
switch (G__18832) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18830.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16188__auto___18904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18904,out){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18904,out){
return (function (state_18870){
var state_val_18871 = (state_18870[(1)]);
if((state_val_18871 === (7))){
var inst_18866 = (state_18870[(2)]);
var state_18870__$1 = state_18870;
var statearr_18872_18905 = state_18870__$1;
(statearr_18872_18905[(2)] = inst_18866);

(statearr_18872_18905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (1))){
var inst_18833 = (new Array(n));
var inst_18834 = inst_18833;
var inst_18835 = (0);
var state_18870__$1 = (function (){var statearr_18873 = state_18870;
(statearr_18873[(7)] = inst_18834);

(statearr_18873[(8)] = inst_18835);

return statearr_18873;
})();
var statearr_18874_18906 = state_18870__$1;
(statearr_18874_18906[(2)] = null);

(statearr_18874_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (4))){
var inst_18838 = (state_18870[(9)]);
var inst_18838__$1 = (state_18870[(2)]);
var inst_18839 = (inst_18838__$1 == null);
var inst_18840 = cljs.core.not.call(null,inst_18839);
var state_18870__$1 = (function (){var statearr_18875 = state_18870;
(statearr_18875[(9)] = inst_18838__$1);

return statearr_18875;
})();
if(inst_18840){
var statearr_18876_18907 = state_18870__$1;
(statearr_18876_18907[(1)] = (5));

} else {
var statearr_18877_18908 = state_18870__$1;
(statearr_18877_18908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (15))){
var inst_18860 = (state_18870[(2)]);
var state_18870__$1 = state_18870;
var statearr_18878_18909 = state_18870__$1;
(statearr_18878_18909[(2)] = inst_18860);

(statearr_18878_18909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (13))){
var state_18870__$1 = state_18870;
var statearr_18879_18910 = state_18870__$1;
(statearr_18879_18910[(2)] = null);

(statearr_18879_18910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (6))){
var inst_18835 = (state_18870[(8)]);
var inst_18856 = (inst_18835 > (0));
var state_18870__$1 = state_18870;
if(cljs.core.truth_(inst_18856)){
var statearr_18880_18911 = state_18870__$1;
(statearr_18880_18911[(1)] = (12));

} else {
var statearr_18881_18912 = state_18870__$1;
(statearr_18881_18912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (3))){
var inst_18868 = (state_18870[(2)]);
var state_18870__$1 = state_18870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18870__$1,inst_18868);
} else {
if((state_val_18871 === (12))){
var inst_18834 = (state_18870[(7)]);
var inst_18858 = cljs.core.vec.call(null,inst_18834);
var state_18870__$1 = state_18870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18870__$1,(15),out,inst_18858);
} else {
if((state_val_18871 === (2))){
var state_18870__$1 = state_18870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18870__$1,(4),ch);
} else {
if((state_val_18871 === (11))){
var inst_18850 = (state_18870[(2)]);
var inst_18851 = (new Array(n));
var inst_18834 = inst_18851;
var inst_18835 = (0);
var state_18870__$1 = (function (){var statearr_18882 = state_18870;
(statearr_18882[(7)] = inst_18834);

(statearr_18882[(8)] = inst_18835);

(statearr_18882[(10)] = inst_18850);

return statearr_18882;
})();
var statearr_18883_18913 = state_18870__$1;
(statearr_18883_18913[(2)] = null);

(statearr_18883_18913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (9))){
var inst_18834 = (state_18870[(7)]);
var inst_18848 = cljs.core.vec.call(null,inst_18834);
var state_18870__$1 = state_18870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18870__$1,(11),out,inst_18848);
} else {
if((state_val_18871 === (5))){
var inst_18834 = (state_18870[(7)]);
var inst_18838 = (state_18870[(9)]);
var inst_18835 = (state_18870[(8)]);
var inst_18843 = (state_18870[(11)]);
var inst_18842 = (inst_18834[inst_18835] = inst_18838);
var inst_18843__$1 = (inst_18835 + (1));
var inst_18844 = (inst_18843__$1 < n);
var state_18870__$1 = (function (){var statearr_18884 = state_18870;
(statearr_18884[(12)] = inst_18842);

(statearr_18884[(11)] = inst_18843__$1);

return statearr_18884;
})();
if(cljs.core.truth_(inst_18844)){
var statearr_18885_18914 = state_18870__$1;
(statearr_18885_18914[(1)] = (8));

} else {
var statearr_18886_18915 = state_18870__$1;
(statearr_18886_18915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (14))){
var inst_18863 = (state_18870[(2)]);
var inst_18864 = cljs.core.async.close_BANG_.call(null,out);
var state_18870__$1 = (function (){var statearr_18888 = state_18870;
(statearr_18888[(13)] = inst_18863);

return statearr_18888;
})();
var statearr_18889_18916 = state_18870__$1;
(statearr_18889_18916[(2)] = inst_18864);

(statearr_18889_18916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (10))){
var inst_18854 = (state_18870[(2)]);
var state_18870__$1 = state_18870;
var statearr_18890_18917 = state_18870__$1;
(statearr_18890_18917[(2)] = inst_18854);

(statearr_18890_18917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18871 === (8))){
var inst_18834 = (state_18870[(7)]);
var inst_18843 = (state_18870[(11)]);
var tmp18887 = inst_18834;
var inst_18834__$1 = tmp18887;
var inst_18835 = inst_18843;
var state_18870__$1 = (function (){var statearr_18891 = state_18870;
(statearr_18891[(7)] = inst_18834__$1);

(statearr_18891[(8)] = inst_18835);

return statearr_18891;
})();
var statearr_18892_18918 = state_18870__$1;
(statearr_18892_18918[(2)] = null);

(statearr_18892_18918[(1)] = (2));


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
});})(c__16188__auto___18904,out))
;
return ((function (switch__16076__auto__,c__16188__auto___18904,out){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18896[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18896[(1)] = (1));

return statearr_18896;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18870){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18897){if((e18897 instanceof Object)){
var ex__16080__auto__ = e18897;
var statearr_18898_18919 = state_18870;
(statearr_18898_18919[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18920 = state_18870;
state_18870 = G__18920;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18904,out))
})();
var state__16190__auto__ = (function (){var statearr_18899 = f__16189__auto__.call(null);
(statearr_18899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18904);

return statearr_18899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18904,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18921 = [];
var len__10516__auto___18995 = arguments.length;
var i__10517__auto___18996 = (0);
while(true){
if((i__10517__auto___18996 < len__10516__auto___18995)){
args18921.push((arguments[i__10517__auto___18996]));

var G__18997 = (i__10517__auto___18996 + (1));
i__10517__auto___18996 = G__18997;
continue;
} else {
}
break;
}

var G__18923 = args18921.length;
switch (G__18923) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18921.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16188__auto___18999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___18999,out){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___18999,out){
return (function (state_18965){
var state_val_18966 = (state_18965[(1)]);
if((state_val_18966 === (7))){
var inst_18961 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18967_19000 = state_18965__$1;
(statearr_18967_19000[(2)] = inst_18961);

(statearr_18967_19000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (1))){
var inst_18924 = [];
var inst_18925 = inst_18924;
var inst_18926 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18965__$1 = (function (){var statearr_18968 = state_18965;
(statearr_18968[(7)] = inst_18926);

(statearr_18968[(8)] = inst_18925);

return statearr_18968;
})();
var statearr_18969_19001 = state_18965__$1;
(statearr_18969_19001[(2)] = null);

(statearr_18969_19001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (4))){
var inst_18929 = (state_18965[(9)]);
var inst_18929__$1 = (state_18965[(2)]);
var inst_18930 = (inst_18929__$1 == null);
var inst_18931 = cljs.core.not.call(null,inst_18930);
var state_18965__$1 = (function (){var statearr_18970 = state_18965;
(statearr_18970[(9)] = inst_18929__$1);

return statearr_18970;
})();
if(inst_18931){
var statearr_18971_19002 = state_18965__$1;
(statearr_18971_19002[(1)] = (5));

} else {
var statearr_18972_19003 = state_18965__$1;
(statearr_18972_19003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (15))){
var inst_18955 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18973_19004 = state_18965__$1;
(statearr_18973_19004[(2)] = inst_18955);

(statearr_18973_19004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (13))){
var state_18965__$1 = state_18965;
var statearr_18974_19005 = state_18965__$1;
(statearr_18974_19005[(2)] = null);

(statearr_18974_19005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (6))){
var inst_18925 = (state_18965[(8)]);
var inst_18950 = inst_18925.length;
var inst_18951 = (inst_18950 > (0));
var state_18965__$1 = state_18965;
if(cljs.core.truth_(inst_18951)){
var statearr_18975_19006 = state_18965__$1;
(statearr_18975_19006[(1)] = (12));

} else {
var statearr_18976_19007 = state_18965__$1;
(statearr_18976_19007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (3))){
var inst_18963 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18965__$1,inst_18963);
} else {
if((state_val_18966 === (12))){
var inst_18925 = (state_18965[(8)]);
var inst_18953 = cljs.core.vec.call(null,inst_18925);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18965__$1,(15),out,inst_18953);
} else {
if((state_val_18966 === (2))){
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18965__$1,(4),ch);
} else {
if((state_val_18966 === (11))){
var inst_18929 = (state_18965[(9)]);
var inst_18933 = (state_18965[(10)]);
var inst_18943 = (state_18965[(2)]);
var inst_18944 = [];
var inst_18945 = inst_18944.push(inst_18929);
var inst_18925 = inst_18944;
var inst_18926 = inst_18933;
var state_18965__$1 = (function (){var statearr_18977 = state_18965;
(statearr_18977[(7)] = inst_18926);

(statearr_18977[(11)] = inst_18943);

(statearr_18977[(12)] = inst_18945);

(statearr_18977[(8)] = inst_18925);

return statearr_18977;
})();
var statearr_18978_19008 = state_18965__$1;
(statearr_18978_19008[(2)] = null);

(statearr_18978_19008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (9))){
var inst_18925 = (state_18965[(8)]);
var inst_18941 = cljs.core.vec.call(null,inst_18925);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18965__$1,(11),out,inst_18941);
} else {
if((state_val_18966 === (5))){
var inst_18926 = (state_18965[(7)]);
var inst_18929 = (state_18965[(9)]);
var inst_18933 = (state_18965[(10)]);
var inst_18933__$1 = f.call(null,inst_18929);
var inst_18934 = cljs.core._EQ_.call(null,inst_18933__$1,inst_18926);
var inst_18935 = cljs.core.keyword_identical_QMARK_.call(null,inst_18926,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18936 = (inst_18934) || (inst_18935);
var state_18965__$1 = (function (){var statearr_18979 = state_18965;
(statearr_18979[(10)] = inst_18933__$1);

return statearr_18979;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_18980_19009 = state_18965__$1;
(statearr_18980_19009[(1)] = (8));

} else {
var statearr_18981_19010 = state_18965__$1;
(statearr_18981_19010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (14))){
var inst_18958 = (state_18965[(2)]);
var inst_18959 = cljs.core.async.close_BANG_.call(null,out);
var state_18965__$1 = (function (){var statearr_18983 = state_18965;
(statearr_18983[(13)] = inst_18958);

return statearr_18983;
})();
var statearr_18984_19011 = state_18965__$1;
(statearr_18984_19011[(2)] = inst_18959);

(statearr_18984_19011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (10))){
var inst_18948 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18985_19012 = state_18965__$1;
(statearr_18985_19012[(2)] = inst_18948);

(statearr_18985_19012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (8))){
var inst_18925 = (state_18965[(8)]);
var inst_18929 = (state_18965[(9)]);
var inst_18933 = (state_18965[(10)]);
var inst_18938 = inst_18925.push(inst_18929);
var tmp18982 = inst_18925;
var inst_18925__$1 = tmp18982;
var inst_18926 = inst_18933;
var state_18965__$1 = (function (){var statearr_18986 = state_18965;
(statearr_18986[(7)] = inst_18926);

(statearr_18986[(8)] = inst_18925__$1);

(statearr_18986[(14)] = inst_18938);

return statearr_18986;
})();
var statearr_18987_19013 = state_18965__$1;
(statearr_18987_19013[(2)] = null);

(statearr_18987_19013[(1)] = (2));


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
});})(c__16188__auto___18999,out))
;
return ((function (switch__16076__auto__,c__16188__auto___18999,out){
return (function() {
var cljs$core$async$state_machine__16077__auto__ = null;
var cljs$core$async$state_machine__16077__auto____0 = (function (){
var statearr_18991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18991[(0)] = cljs$core$async$state_machine__16077__auto__);

(statearr_18991[(1)] = (1));

return statearr_18991;
});
var cljs$core$async$state_machine__16077__auto____1 = (function (state_18965){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_18965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e18992){if((e18992 instanceof Object)){
var ex__16080__auto__ = e18992;
var statearr_18993_19014 = state_18965;
(statearr_18993_19014[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19015 = state_18965;
state_18965 = G__19015;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
cljs$core$async$state_machine__16077__auto__ = function(state_18965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16077__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16077__auto____1.call(this,state_18965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16077__auto____0;
cljs$core$async$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16077__auto____1;
return cljs$core$async$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___18999,out))
})();
var state__16190__auto__ = (function (){var statearr_18994 = f__16189__auto__.call(null);
(statearr_18994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___18999);

return statearr_18994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___18999,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map