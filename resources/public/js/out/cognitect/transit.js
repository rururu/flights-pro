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
var seq__29168_29172 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29169_29173 = null;
var count__29170_29174 = (0);
var i__29171_29175 = (0);
while(true){
if((i__29171_29175 < count__29170_29174)){
var k_29176 = cljs.core._nth.call(null,chunk__29169_29173,i__29171_29175);
var v_29177 = (b[k_29176]);
(a[k_29176] = v_29177);

var G__29178 = seq__29168_29172;
var G__29179 = chunk__29169_29173;
var G__29180 = count__29170_29174;
var G__29181 = (i__29171_29175 + (1));
seq__29168_29172 = G__29178;
chunk__29169_29173 = G__29179;
count__29170_29174 = G__29180;
i__29171_29175 = G__29181;
continue;
} else {
var temp__4657__auto___29182 = cljs.core.seq.call(null,seq__29168_29172);
if(temp__4657__auto___29182){
var seq__29168_29183__$1 = temp__4657__auto___29182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29168_29183__$1)){
var c__20438__auto___29184 = cljs.core.chunk_first.call(null,seq__29168_29183__$1);
var G__29185 = cljs.core.chunk_rest.call(null,seq__29168_29183__$1);
var G__29186 = c__20438__auto___29184;
var G__29187 = cljs.core.count.call(null,c__20438__auto___29184);
var G__29188 = (0);
seq__29168_29172 = G__29185;
chunk__29169_29173 = G__29186;
count__29170_29174 = G__29187;
i__29171_29175 = G__29188;
continue;
} else {
var k_29189 = cljs.core.first.call(null,seq__29168_29183__$1);
var v_29190 = (b[k_29189]);
(a[k_29189] = v_29190);

var G__29191 = cljs.core.next.call(null,seq__29168_29183__$1);
var G__29192 = null;
var G__29193 = (0);
var G__29194 = (0);
seq__29168_29172 = G__29191;
chunk__29169_29173 = G__29192;
count__29170_29174 = G__29193;
i__29171_29175 = G__29194;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/VectorBuilder");
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
var args29195 = [];
var len__20732__auto___29198 = arguments.length;
var i__20733__auto___29199 = (0);
while(true){
if((i__20733__auto___29199 < len__20732__auto___29198)){
args29195.push((arguments[i__20733__auto___29199]));

var G__29200 = (i__20733__auto___29199 + (1));
i__20733__auto___29199 = G__29200;
continue;
} else {
}
break;
}

var G__29197 = args29195.length;
switch (G__29197) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29195.length)].join('')));

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
var G__29202 = (i + (2));
var G__29203 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29202;
ret = G__29203;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/SymbolHandler");
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
var seq__29204_29208 = cljs.core.seq.call(null,v);
var chunk__29205_29209 = null;
var count__29206_29210 = (0);
var i__29207_29211 = (0);
while(true){
if((i__29207_29211 < count__29206_29210)){
var x_29212 = cljs.core._nth.call(null,chunk__29205_29209,i__29207_29211);
ret.push(x_29212);

var G__29213 = seq__29204_29208;
var G__29214 = chunk__29205_29209;
var G__29215 = count__29206_29210;
var G__29216 = (i__29207_29211 + (1));
seq__29204_29208 = G__29213;
chunk__29205_29209 = G__29214;
count__29206_29210 = G__29215;
i__29207_29211 = G__29216;
continue;
} else {
var temp__4657__auto___29217 = cljs.core.seq.call(null,seq__29204_29208);
if(temp__4657__auto___29217){
var seq__29204_29218__$1 = temp__4657__auto___29217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29204_29218__$1)){
var c__20438__auto___29219 = cljs.core.chunk_first.call(null,seq__29204_29218__$1);
var G__29220 = cljs.core.chunk_rest.call(null,seq__29204_29218__$1);
var G__29221 = c__20438__auto___29219;
var G__29222 = cljs.core.count.call(null,c__20438__auto___29219);
var G__29223 = (0);
seq__29204_29208 = G__29220;
chunk__29205_29209 = G__29221;
count__29206_29210 = G__29222;
i__29207_29211 = G__29223;
continue;
} else {
var x_29224 = cljs.core.first.call(null,seq__29204_29218__$1);
ret.push(x_29224);

var G__29225 = cljs.core.next.call(null,seq__29204_29218__$1);
var G__29226 = null;
var G__29227 = (0);
var G__29228 = (0);
seq__29204_29208 = G__29225;
chunk__29205_29209 = G__29226;
count__29206_29210 = G__29227;
i__29207_29211 = G__29228;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/MapHandler");
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
var seq__29229_29233 = cljs.core.seq.call(null,v);
var chunk__29230_29234 = null;
var count__29231_29235 = (0);
var i__29232_29236 = (0);
while(true){
if((i__29232_29236 < count__29231_29235)){
var x_29237 = cljs.core._nth.call(null,chunk__29230_29234,i__29232_29236);
ret.push(x_29237);

var G__29238 = seq__29229_29233;
var G__29239 = chunk__29230_29234;
var G__29240 = count__29231_29235;
var G__29241 = (i__29232_29236 + (1));
seq__29229_29233 = G__29238;
chunk__29230_29234 = G__29239;
count__29231_29235 = G__29240;
i__29232_29236 = G__29241;
continue;
} else {
var temp__4657__auto___29242 = cljs.core.seq.call(null,seq__29229_29233);
if(temp__4657__auto___29242){
var seq__29229_29243__$1 = temp__4657__auto___29242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29229_29243__$1)){
var c__20438__auto___29244 = cljs.core.chunk_first.call(null,seq__29229_29243__$1);
var G__29245 = cljs.core.chunk_rest.call(null,seq__29229_29243__$1);
var G__29246 = c__20438__auto___29244;
var G__29247 = cljs.core.count.call(null,c__20438__auto___29244);
var G__29248 = (0);
seq__29229_29233 = G__29245;
chunk__29230_29234 = G__29246;
count__29231_29235 = G__29247;
i__29232_29236 = G__29248;
continue;
} else {
var x_29249 = cljs.core.first.call(null,seq__29229_29243__$1);
ret.push(x_29249);

var G__29250 = cljs.core.next.call(null,seq__29229_29243__$1);
var G__29251 = null;
var G__29252 = (0);
var G__29253 = (0);
seq__29229_29233 = G__29250;
chunk__29230_29234 = G__29251;
count__29231_29235 = G__29252;
i__29232_29236 = G__29253;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/SetHandler");
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
var seq__29254_29258 = cljs.core.seq.call(null,v);
var chunk__29255_29259 = null;
var count__29256_29260 = (0);
var i__29257_29261 = (0);
while(true){
if((i__29257_29261 < count__29256_29260)){
var x_29262 = cljs.core._nth.call(null,chunk__29255_29259,i__29257_29261);
ret.push(x_29262);

var G__29263 = seq__29254_29258;
var G__29264 = chunk__29255_29259;
var G__29265 = count__29256_29260;
var G__29266 = (i__29257_29261 + (1));
seq__29254_29258 = G__29263;
chunk__29255_29259 = G__29264;
count__29256_29260 = G__29265;
i__29257_29261 = G__29266;
continue;
} else {
var temp__4657__auto___29267 = cljs.core.seq.call(null,seq__29254_29258);
if(temp__4657__auto___29267){
var seq__29254_29268__$1 = temp__4657__auto___29267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29254_29268__$1)){
var c__20438__auto___29269 = cljs.core.chunk_first.call(null,seq__29254_29268__$1);
var G__29270 = cljs.core.chunk_rest.call(null,seq__29254_29268__$1);
var G__29271 = c__20438__auto___29269;
var G__29272 = cljs.core.count.call(null,c__20438__auto___29269);
var G__29273 = (0);
seq__29254_29258 = G__29270;
chunk__29255_29259 = G__29271;
count__29256_29260 = G__29272;
i__29257_29261 = G__29273;
continue;
} else {
var x_29274 = cljs.core.first.call(null,seq__29254_29268__$1);
ret.push(x_29274);

var G__29275 = cljs.core.next.call(null,seq__29254_29268__$1);
var G__29276 = null;
var G__29277 = (0);
var G__29278 = (0);
seq__29254_29258 = G__29275;
chunk__29255_29259 = G__29276;
count__29256_29260 = G__29277;
i__29257_29261 = G__29278;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/UUIDHandler");
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
var args29279 = [];
var len__20732__auto___29294 = arguments.length;
var i__20733__auto___29295 = (0);
while(true){
if((i__20733__auto___29295 < len__20732__auto___29294)){
args29279.push((arguments[i__20733__auto___29295]));

var G__29296 = (i__20733__auto___29295 + (1));
i__20733__auto___29295 = G__29296;
continue;
} else {
}
break;
}

var G__29281 = args29279.length;
switch (G__29281) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29279.length)].join('')));

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
var G__29282 = obj;
G__29282.push(kfn.call(null,k),vfn.call(null,v));

return G__29282;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29283 = cljs.core.clone.call(null,handlers);
x29283.forEach = ((function (x29283,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29284 = cljs.core.seq.call(null,coll);
var chunk__29285 = null;
var count__29286 = (0);
var i__29287 = (0);
while(true){
if((i__29287 < count__29286)){
var vec__29288 = cljs.core._nth.call(null,chunk__29285,i__29287);
var k = cljs.core.nth.call(null,vec__29288,(0),null);
var v = cljs.core.nth.call(null,vec__29288,(1),null);
f.call(null,v,k);

var G__29298 = seq__29284;
var G__29299 = chunk__29285;
var G__29300 = count__29286;
var G__29301 = (i__29287 + (1));
seq__29284 = G__29298;
chunk__29285 = G__29299;
count__29286 = G__29300;
i__29287 = G__29301;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29284);
if(temp__4657__auto__){
var seq__29284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29284__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__29284__$1);
var G__29302 = cljs.core.chunk_rest.call(null,seq__29284__$1);
var G__29303 = c__20438__auto__;
var G__29304 = cljs.core.count.call(null,c__20438__auto__);
var G__29305 = (0);
seq__29284 = G__29302;
chunk__29285 = G__29303;
count__29286 = G__29304;
i__29287 = G__29305;
continue;
} else {
var vec__29291 = cljs.core.first.call(null,seq__29284__$1);
var k = cljs.core.nth.call(null,vec__29291,(0),null);
var v = cljs.core.nth.call(null,vec__29291,(1),null);
f.call(null,v,k);

var G__29306 = cljs.core.next.call(null,seq__29284__$1);
var G__29307 = null;
var G__29308 = (0);
var G__29309 = (0);
seq__29284 = G__29306;
chunk__29285 = G__29307;
count__29286 = G__29308;
i__29287 = G__29309;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29283,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29283;
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
var args29310 = [];
var len__20732__auto___29316 = arguments.length;
var i__20733__auto___29317 = (0);
while(true){
if((i__20733__auto___29317 < len__20732__auto___29316)){
args29310.push((arguments[i__20733__auto___29317]));

var G__29318 = (i__20733__auto___29317 + (1));
i__20733__auto___29317 = G__29318;
continue;
} else {
}
break;
}

var G__29312 = args29310.length;
switch (G__29312) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29310.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit29313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit29313 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta29314){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta29314 = meta29314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit29313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29315,meta29314__$1){
var self__ = this;
var _29315__$1 = this;
return (new cognitect.transit.t_cognitect$transit29313(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta29314__$1));
});

cognitect.transit.t_cognitect$transit29313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29315){
var self__ = this;
var _29315__$1 = this;
return self__.meta29314;
});

cognitect.transit.t_cognitect$transit29313.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29313.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29313.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29313.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta29314","meta29314",1393730148,null)], null);
});

cognitect.transit.t_cognitect$transit29313.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit29313.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit29313";

cognitect.transit.t_cognitect$transit29313.cljs$lang$ctorPrWriter = (function (this__20230__auto__,writer__20231__auto__,opt__20232__auto__){
return cljs.core._write.call(null,writer__20231__auto__,"cognitect.transit/t_cognitect$transit29313");
});

cognitect.transit.__GT_t_cognitect$transit29313 = (function cognitect$transit$__GT_t_cognitect$transit29313(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29314){
return (new cognitect.transit.t_cognitect$transit29313(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29314));
});

}

return (new cognitect.transit.t_cognitect$transit29313(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__19624__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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