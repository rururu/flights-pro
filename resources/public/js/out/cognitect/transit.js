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
var seq__19317_19321 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19318_19322 = null;
var count__19319_19323 = (0);
var i__19320_19324 = (0);
while(true){
if((i__19320_19324 < count__19319_19323)){
var k_19325 = cljs.core._nth.call(null,chunk__19318_19322,i__19320_19324);
var v_19326 = (b[k_19325]);
(a[k_19325] = v_19326);

var G__19327 = seq__19317_19321;
var G__19328 = chunk__19318_19322;
var G__19329 = count__19319_19323;
var G__19330 = (i__19320_19324 + (1));
seq__19317_19321 = G__19327;
chunk__19318_19322 = G__19328;
count__19319_19323 = G__19329;
i__19320_19324 = G__19330;
continue;
} else {
var temp__4657__auto___19331 = cljs.core.seq.call(null,seq__19317_19321);
if(temp__4657__auto___19331){
var seq__19317_19332__$1 = temp__4657__auto___19331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19317_19332__$1)){
var c__10222__auto___19333 = cljs.core.chunk_first.call(null,seq__19317_19332__$1);
var G__19334 = cljs.core.chunk_rest.call(null,seq__19317_19332__$1);
var G__19335 = c__10222__auto___19333;
var G__19336 = cljs.core.count.call(null,c__10222__auto___19333);
var G__19337 = (0);
seq__19317_19321 = G__19334;
chunk__19318_19322 = G__19335;
count__19319_19323 = G__19336;
i__19320_19324 = G__19337;
continue;
} else {
var k_19338 = cljs.core.first.call(null,seq__19317_19332__$1);
var v_19339 = (b[k_19338]);
(a[k_19338] = v_19339);

var G__19340 = cljs.core.next.call(null,seq__19317_19332__$1);
var G__19341 = null;
var G__19342 = (0);
var G__19343 = (0);
seq__19317_19321 = G__19340;
chunk__19318_19322 = G__19341;
count__19319_19323 = G__19342;
i__19320_19324 = G__19343;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/VectorBuilder");
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
var args19344 = [];
var len__10516__auto___19347 = arguments.length;
var i__10517__auto___19348 = (0);
while(true){
if((i__10517__auto___19348 < len__10516__auto___19347)){
args19344.push((arguments[i__10517__auto___19348]));

var G__19349 = (i__10517__auto___19348 + (1));
i__10517__auto___19348 = G__19349;
continue;
} else {
}
break;
}

var G__19346 = args19344.length;
switch (G__19346) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19344.length)].join('')));

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
var G__19351 = (i + (2));
var G__19352 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19351;
ret = G__19352;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/SymbolHandler");
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
var seq__19353_19357 = cljs.core.seq.call(null,v);
var chunk__19354_19358 = null;
var count__19355_19359 = (0);
var i__19356_19360 = (0);
while(true){
if((i__19356_19360 < count__19355_19359)){
var x_19361 = cljs.core._nth.call(null,chunk__19354_19358,i__19356_19360);
ret.push(x_19361);

var G__19362 = seq__19353_19357;
var G__19363 = chunk__19354_19358;
var G__19364 = count__19355_19359;
var G__19365 = (i__19356_19360 + (1));
seq__19353_19357 = G__19362;
chunk__19354_19358 = G__19363;
count__19355_19359 = G__19364;
i__19356_19360 = G__19365;
continue;
} else {
var temp__4657__auto___19366 = cljs.core.seq.call(null,seq__19353_19357);
if(temp__4657__auto___19366){
var seq__19353_19367__$1 = temp__4657__auto___19366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19353_19367__$1)){
var c__10222__auto___19368 = cljs.core.chunk_first.call(null,seq__19353_19367__$1);
var G__19369 = cljs.core.chunk_rest.call(null,seq__19353_19367__$1);
var G__19370 = c__10222__auto___19368;
var G__19371 = cljs.core.count.call(null,c__10222__auto___19368);
var G__19372 = (0);
seq__19353_19357 = G__19369;
chunk__19354_19358 = G__19370;
count__19355_19359 = G__19371;
i__19356_19360 = G__19372;
continue;
} else {
var x_19373 = cljs.core.first.call(null,seq__19353_19367__$1);
ret.push(x_19373);

var G__19374 = cljs.core.next.call(null,seq__19353_19367__$1);
var G__19375 = null;
var G__19376 = (0);
var G__19377 = (0);
seq__19353_19357 = G__19374;
chunk__19354_19358 = G__19375;
count__19355_19359 = G__19376;
i__19356_19360 = G__19377;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/MapHandler");
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
var seq__19378_19382 = cljs.core.seq.call(null,v);
var chunk__19379_19383 = null;
var count__19380_19384 = (0);
var i__19381_19385 = (0);
while(true){
if((i__19381_19385 < count__19380_19384)){
var x_19386 = cljs.core._nth.call(null,chunk__19379_19383,i__19381_19385);
ret.push(x_19386);

var G__19387 = seq__19378_19382;
var G__19388 = chunk__19379_19383;
var G__19389 = count__19380_19384;
var G__19390 = (i__19381_19385 + (1));
seq__19378_19382 = G__19387;
chunk__19379_19383 = G__19388;
count__19380_19384 = G__19389;
i__19381_19385 = G__19390;
continue;
} else {
var temp__4657__auto___19391 = cljs.core.seq.call(null,seq__19378_19382);
if(temp__4657__auto___19391){
var seq__19378_19392__$1 = temp__4657__auto___19391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19378_19392__$1)){
var c__10222__auto___19393 = cljs.core.chunk_first.call(null,seq__19378_19392__$1);
var G__19394 = cljs.core.chunk_rest.call(null,seq__19378_19392__$1);
var G__19395 = c__10222__auto___19393;
var G__19396 = cljs.core.count.call(null,c__10222__auto___19393);
var G__19397 = (0);
seq__19378_19382 = G__19394;
chunk__19379_19383 = G__19395;
count__19380_19384 = G__19396;
i__19381_19385 = G__19397;
continue;
} else {
var x_19398 = cljs.core.first.call(null,seq__19378_19392__$1);
ret.push(x_19398);

var G__19399 = cljs.core.next.call(null,seq__19378_19392__$1);
var G__19400 = null;
var G__19401 = (0);
var G__19402 = (0);
seq__19378_19382 = G__19399;
chunk__19379_19383 = G__19400;
count__19380_19384 = G__19401;
i__19381_19385 = G__19402;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/SetHandler");
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
var seq__19403_19407 = cljs.core.seq.call(null,v);
var chunk__19404_19408 = null;
var count__19405_19409 = (0);
var i__19406_19410 = (0);
while(true){
if((i__19406_19410 < count__19405_19409)){
var x_19411 = cljs.core._nth.call(null,chunk__19404_19408,i__19406_19410);
ret.push(x_19411);

var G__19412 = seq__19403_19407;
var G__19413 = chunk__19404_19408;
var G__19414 = count__19405_19409;
var G__19415 = (i__19406_19410 + (1));
seq__19403_19407 = G__19412;
chunk__19404_19408 = G__19413;
count__19405_19409 = G__19414;
i__19406_19410 = G__19415;
continue;
} else {
var temp__4657__auto___19416 = cljs.core.seq.call(null,seq__19403_19407);
if(temp__4657__auto___19416){
var seq__19403_19417__$1 = temp__4657__auto___19416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19403_19417__$1)){
var c__10222__auto___19418 = cljs.core.chunk_first.call(null,seq__19403_19417__$1);
var G__19419 = cljs.core.chunk_rest.call(null,seq__19403_19417__$1);
var G__19420 = c__10222__auto___19418;
var G__19421 = cljs.core.count.call(null,c__10222__auto___19418);
var G__19422 = (0);
seq__19403_19407 = G__19419;
chunk__19404_19408 = G__19420;
count__19405_19409 = G__19421;
i__19406_19410 = G__19422;
continue;
} else {
var x_19423 = cljs.core.first.call(null,seq__19403_19417__$1);
ret.push(x_19423);

var G__19424 = cljs.core.next.call(null,seq__19403_19417__$1);
var G__19425 = null;
var G__19426 = (0);
var G__19427 = (0);
seq__19403_19407 = G__19424;
chunk__19404_19408 = G__19425;
count__19405_19409 = G__19426;
i__19406_19410 = G__19427;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/UUIDHandler");
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
var args19428 = [];
var len__10516__auto___19443 = arguments.length;
var i__10517__auto___19444 = (0);
while(true){
if((i__10517__auto___19444 < len__10516__auto___19443)){
args19428.push((arguments[i__10517__auto___19444]));

var G__19445 = (i__10517__auto___19444 + (1));
i__10517__auto___19444 = G__19445;
continue;
} else {
}
break;
}

var G__19430 = args19428.length;
switch (G__19430) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19428.length)].join('')));

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
var G__19431 = obj;
G__19431.push(kfn.call(null,k),vfn.call(null,v));

return G__19431;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19432 = cljs.core.clone.call(null,handlers);
x19432.forEach = ((function (x19432,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19433 = cljs.core.seq.call(null,coll);
var chunk__19434 = null;
var count__19435 = (0);
var i__19436 = (0);
while(true){
if((i__19436 < count__19435)){
var vec__19437 = cljs.core._nth.call(null,chunk__19434,i__19436);
var k = cljs.core.nth.call(null,vec__19437,(0),null);
var v = cljs.core.nth.call(null,vec__19437,(1),null);
f.call(null,v,k);

var G__19447 = seq__19433;
var G__19448 = chunk__19434;
var G__19449 = count__19435;
var G__19450 = (i__19436 + (1));
seq__19433 = G__19447;
chunk__19434 = G__19448;
count__19435 = G__19449;
i__19436 = G__19450;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19433);
if(temp__4657__auto__){
var seq__19433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19433__$1)){
var c__10222__auto__ = cljs.core.chunk_first.call(null,seq__19433__$1);
var G__19451 = cljs.core.chunk_rest.call(null,seq__19433__$1);
var G__19452 = c__10222__auto__;
var G__19453 = cljs.core.count.call(null,c__10222__auto__);
var G__19454 = (0);
seq__19433 = G__19451;
chunk__19434 = G__19452;
count__19435 = G__19453;
i__19436 = G__19454;
continue;
} else {
var vec__19440 = cljs.core.first.call(null,seq__19433__$1);
var k = cljs.core.nth.call(null,vec__19440,(0),null);
var v = cljs.core.nth.call(null,vec__19440,(1),null);
f.call(null,v,k);

var G__19455 = cljs.core.next.call(null,seq__19433__$1);
var G__19456 = null;
var G__19457 = (0);
var G__19458 = (0);
seq__19433 = G__19455;
chunk__19434 = G__19456;
count__19435 = G__19457;
i__19436 = G__19458;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19432,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19432;
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
var args19459 = [];
var len__10516__auto___19465 = arguments.length;
var i__10517__auto___19466 = (0);
while(true){
if((i__10517__auto___19466 < len__10516__auto___19465)){
args19459.push((arguments[i__10517__auto___19466]));

var G__19467 = (i__10517__auto___19466 + (1));
i__10517__auto___19466 = G__19467;
continue;
} else {
}
break;
}

var G__19461 = args19459.length;
switch (G__19461) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19459.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19462 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19463){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19463 = meta19463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19464,meta19463__$1){
var self__ = this;
var _19464__$1 = this;
return (new cognitect.transit.t_cognitect$transit19462(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19463__$1));
});

cognitect.transit.t_cognitect$transit19462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19464){
var self__ = this;
var _19464__$1 = this;
return self__.meta19463;
});

cognitect.transit.t_cognitect$transit19462.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19462.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19462.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19462.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19463","meta19463",172865657,null)], null);
});

cognitect.transit.t_cognitect$transit19462.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19462.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19462";

cognitect.transit.t_cognitect$transit19462.cljs$lang$ctorPrWriter = (function (this__10014__auto__,writer__10015__auto__,opt__10016__auto__){
return cljs.core._write.call(null,writer__10015__auto__,"cognitect.transit/t_cognitect$transit19462");
});

cognitect.transit.__GT_t_cognitect$transit19462 = (function cognitect$transit$__GT_t_cognitect$transit19462(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19463){
return (new cognitect.transit.t_cognitect$transit19462(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19463));
});

}

return (new cognitect.transit.t_cognitect$transit19462(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__9408__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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