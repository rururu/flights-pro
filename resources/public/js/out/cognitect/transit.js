// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18388_18392 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18389_18393 = null;
var count__18390_18394 = (0);
var i__18391_18395 = (0);
while(true){
if((i__18391_18395 < count__18390_18394)){
var k_18396 = cljs.core._nth.call(null,chunk__18389_18393,i__18391_18395);
var v_18397 = (b[k_18396]);
(a[k_18396] = v_18397);

var G__18398 = seq__18388_18392;
var G__18399 = chunk__18389_18393;
var G__18400 = count__18390_18394;
var G__18401 = (i__18391_18395 + (1));
seq__18388_18392 = G__18398;
chunk__18389_18393 = G__18399;
count__18390_18394 = G__18400;
i__18391_18395 = G__18401;
continue;
} else {
var temp__4657__auto___18402 = cljs.core.seq.call(null,seq__18388_18392);
if(temp__4657__auto___18402){
var seq__18388_18403__$1 = temp__4657__auto___18402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18388_18403__$1)){
var c__9319__auto___18404 = cljs.core.chunk_first.call(null,seq__18388_18403__$1);
var G__18405 = cljs.core.chunk_rest.call(null,seq__18388_18403__$1);
var G__18406 = c__9319__auto___18404;
var G__18407 = cljs.core.count.call(null,c__9319__auto___18404);
var G__18408 = (0);
seq__18388_18392 = G__18405;
chunk__18389_18393 = G__18406;
count__18390_18394 = G__18407;
i__18391_18395 = G__18408;
continue;
} else {
var k_18409 = cljs.core.first.call(null,seq__18388_18403__$1);
var v_18410 = (b[k_18409]);
(a[k_18409] = v_18410);

var G__18411 = cljs.core.next.call(null,seq__18388_18403__$1);
var G__18412 = null;
var G__18413 = (0);
var G__18414 = (0);
seq__18388_18392 = G__18411;
chunk__18389_18393 = G__18412;
count__18390_18394 = G__18413;
i__18391_18395 = G__18414;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18415 = [];
var len__9613__auto___18418 = arguments.length;
var i__9614__auto___18419 = (0);
while(true){
if((i__9614__auto___18419 < len__9613__auto___18418)){
args18415.push((arguments[i__9614__auto___18419]));

var G__18420 = (i__9614__auto___18419 + (1));
i__9614__auto___18419 = G__18420;
continue;
} else {
}
break;
}

var G__18417 = args18415.length;
switch (G__18417) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18415.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18422 = (i + (2));
var G__18423 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18422;
ret = G__18423;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18424_18428 = cljs.core.seq.call(null,v);
var chunk__18425_18429 = null;
var count__18426_18430 = (0);
var i__18427_18431 = (0);
while(true){
if((i__18427_18431 < count__18426_18430)){
var x_18432 = cljs.core._nth.call(null,chunk__18425_18429,i__18427_18431);
ret.push(x_18432);

var G__18433 = seq__18424_18428;
var G__18434 = chunk__18425_18429;
var G__18435 = count__18426_18430;
var G__18436 = (i__18427_18431 + (1));
seq__18424_18428 = G__18433;
chunk__18425_18429 = G__18434;
count__18426_18430 = G__18435;
i__18427_18431 = G__18436;
continue;
} else {
var temp__4657__auto___18437 = cljs.core.seq.call(null,seq__18424_18428);
if(temp__4657__auto___18437){
var seq__18424_18438__$1 = temp__4657__auto___18437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18424_18438__$1)){
var c__9319__auto___18439 = cljs.core.chunk_first.call(null,seq__18424_18438__$1);
var G__18440 = cljs.core.chunk_rest.call(null,seq__18424_18438__$1);
var G__18441 = c__9319__auto___18439;
var G__18442 = cljs.core.count.call(null,c__9319__auto___18439);
var G__18443 = (0);
seq__18424_18428 = G__18440;
chunk__18425_18429 = G__18441;
count__18426_18430 = G__18442;
i__18427_18431 = G__18443;
continue;
} else {
var x_18444 = cljs.core.first.call(null,seq__18424_18438__$1);
ret.push(x_18444);

var G__18445 = cljs.core.next.call(null,seq__18424_18438__$1);
var G__18446 = null;
var G__18447 = (0);
var G__18448 = (0);
seq__18424_18428 = G__18445;
chunk__18425_18429 = G__18446;
count__18426_18430 = G__18447;
i__18427_18431 = G__18448;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18449_18453 = cljs.core.seq.call(null,v);
var chunk__18450_18454 = null;
var count__18451_18455 = (0);
var i__18452_18456 = (0);
while(true){
if((i__18452_18456 < count__18451_18455)){
var x_18457 = cljs.core._nth.call(null,chunk__18450_18454,i__18452_18456);
ret.push(x_18457);

var G__18458 = seq__18449_18453;
var G__18459 = chunk__18450_18454;
var G__18460 = count__18451_18455;
var G__18461 = (i__18452_18456 + (1));
seq__18449_18453 = G__18458;
chunk__18450_18454 = G__18459;
count__18451_18455 = G__18460;
i__18452_18456 = G__18461;
continue;
} else {
var temp__4657__auto___18462 = cljs.core.seq.call(null,seq__18449_18453);
if(temp__4657__auto___18462){
var seq__18449_18463__$1 = temp__4657__auto___18462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18449_18463__$1)){
var c__9319__auto___18464 = cljs.core.chunk_first.call(null,seq__18449_18463__$1);
var G__18465 = cljs.core.chunk_rest.call(null,seq__18449_18463__$1);
var G__18466 = c__9319__auto___18464;
var G__18467 = cljs.core.count.call(null,c__9319__auto___18464);
var G__18468 = (0);
seq__18449_18453 = G__18465;
chunk__18450_18454 = G__18466;
count__18451_18455 = G__18467;
i__18452_18456 = G__18468;
continue;
} else {
var x_18469 = cljs.core.first.call(null,seq__18449_18463__$1);
ret.push(x_18469);

var G__18470 = cljs.core.next.call(null,seq__18449_18463__$1);
var G__18471 = null;
var G__18472 = (0);
var G__18473 = (0);
seq__18449_18453 = G__18470;
chunk__18450_18454 = G__18471;
count__18451_18455 = G__18472;
i__18452_18456 = G__18473;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18474_18478 = cljs.core.seq.call(null,v);
var chunk__18475_18479 = null;
var count__18476_18480 = (0);
var i__18477_18481 = (0);
while(true){
if((i__18477_18481 < count__18476_18480)){
var x_18482 = cljs.core._nth.call(null,chunk__18475_18479,i__18477_18481);
ret.push(x_18482);

var G__18483 = seq__18474_18478;
var G__18484 = chunk__18475_18479;
var G__18485 = count__18476_18480;
var G__18486 = (i__18477_18481 + (1));
seq__18474_18478 = G__18483;
chunk__18475_18479 = G__18484;
count__18476_18480 = G__18485;
i__18477_18481 = G__18486;
continue;
} else {
var temp__4657__auto___18487 = cljs.core.seq.call(null,seq__18474_18478);
if(temp__4657__auto___18487){
var seq__18474_18488__$1 = temp__4657__auto___18487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18474_18488__$1)){
var c__9319__auto___18489 = cljs.core.chunk_first.call(null,seq__18474_18488__$1);
var G__18490 = cljs.core.chunk_rest.call(null,seq__18474_18488__$1);
var G__18491 = c__9319__auto___18489;
var G__18492 = cljs.core.count.call(null,c__9319__auto___18489);
var G__18493 = (0);
seq__18474_18478 = G__18490;
chunk__18475_18479 = G__18491;
count__18476_18480 = G__18492;
i__18477_18481 = G__18493;
continue;
} else {
var x_18494 = cljs.core.first.call(null,seq__18474_18488__$1);
ret.push(x_18494);

var G__18495 = cljs.core.next.call(null,seq__18474_18488__$1);
var G__18496 = null;
var G__18497 = (0);
var G__18498 = (0);
seq__18474_18478 = G__18495;
chunk__18475_18479 = G__18496;
count__18476_18480 = G__18497;
i__18477_18481 = G__18498;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18499 = [];
var len__9613__auto___18514 = arguments.length;
var i__9614__auto___18515 = (0);
while(true){
if((i__9614__auto___18515 < len__9613__auto___18514)){
args18499.push((arguments[i__9614__auto___18515]));

var G__18516 = (i__9614__auto___18515 + (1));
i__9614__auto___18515 = G__18516;
continue;
} else {
}
break;
}

var G__18501 = args18499.length;
switch (G__18501) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18499.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18502 = obj;
G__18502.push(kfn.call(null,k),vfn.call(null,v));

return G__18502;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18503 = cljs.core.clone.call(null,handlers);
x18503.forEach = ((function (x18503,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18504 = cljs.core.seq.call(null,coll);
var chunk__18505 = null;
var count__18506 = (0);
var i__18507 = (0);
while(true){
if((i__18507 < count__18506)){
var vec__18508 = cljs.core._nth.call(null,chunk__18505,i__18507);
var k = cljs.core.nth.call(null,vec__18508,(0),null);
var v = cljs.core.nth.call(null,vec__18508,(1),null);
f.call(null,v,k);

var G__18518 = seq__18504;
var G__18519 = chunk__18505;
var G__18520 = count__18506;
var G__18521 = (i__18507 + (1));
seq__18504 = G__18518;
chunk__18505 = G__18519;
count__18506 = G__18520;
i__18507 = G__18521;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18504);
if(temp__4657__auto__){
var seq__18504__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18504__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__18504__$1);
var G__18522 = cljs.core.chunk_rest.call(null,seq__18504__$1);
var G__18523 = c__9319__auto__;
var G__18524 = cljs.core.count.call(null,c__9319__auto__);
var G__18525 = (0);
seq__18504 = G__18522;
chunk__18505 = G__18523;
count__18506 = G__18524;
i__18507 = G__18525;
continue;
} else {
var vec__18511 = cljs.core.first.call(null,seq__18504__$1);
var k = cljs.core.nth.call(null,vec__18511,(0),null);
var v = cljs.core.nth.call(null,vec__18511,(1),null);
f.call(null,v,k);

var G__18526 = cljs.core.next.call(null,seq__18504__$1);
var G__18527 = null;
var G__18528 = (0);
var G__18529 = (0);
seq__18504 = G__18526;
chunk__18505 = G__18527;
count__18506 = G__18528;
i__18507 = G__18529;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18503,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18503;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18530 = [];
var len__9613__auto___18536 = arguments.length;
var i__9614__auto___18537 = (0);
while(true){
if((i__9614__auto___18537 < len__9613__auto___18536)){
args18530.push((arguments[i__9614__auto___18537]));

var G__18538 = (i__9614__auto___18537 + (1));
i__9614__auto___18537 = G__18538;
continue;
} else {
}
break;
}

var G__18532 = args18530.length;
switch (G__18532) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18530.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18533 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18534){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18534 = meta18534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18535,meta18534__$1){
var self__ = this;
var _18535__$1 = this;
return (new cognitect.transit.t_cognitect$transit18533(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18534__$1));
});

cognitect.transit.t_cognitect$transit18533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18535){
var self__ = this;
var _18535__$1 = this;
return self__.meta18534;
});

cognitect.transit.t_cognitect$transit18533.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18533.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18533.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18533.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18534","meta18534",-1242556807,null)], null);
});

cognitect.transit.t_cognitect$transit18533.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18533.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18533";

cognitect.transit.t_cognitect$transit18533.cljs$lang$ctorPrWriter = (function (this__9111__auto__,writer__9112__auto__,opt__9113__auto__){
return cljs.core._write.call(null,writer__9112__auto__,"cognitect.transit/t_cognitect$transit18533");
});

cognitect.transit.__GT_t_cognitect$transit18533 = (function cognitect$transit$__GT_t_cognitect$transit18533(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18534){
return (new cognitect.transit.t_cognitect$transit18533(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18534));
});

}

return (new cognitect.transit.t_cognitect$transit18533(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__8505__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map