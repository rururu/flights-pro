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
var seq__19152_19156 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19153_19157 = null;
var count__19154_19158 = (0);
var i__19155_19159 = (0);
while(true){
if((i__19155_19159 < count__19154_19158)){
var k_19160 = cljs.core._nth.call(null,chunk__19153_19157,i__19155_19159);
var v_19161 = (b[k_19160]);
(a[k_19160] = v_19161);

var G__19162 = seq__19152_19156;
var G__19163 = chunk__19153_19157;
var G__19164 = count__19154_19158;
var G__19165 = (i__19155_19159 + (1));
seq__19152_19156 = G__19162;
chunk__19153_19157 = G__19163;
count__19154_19158 = G__19164;
i__19155_19159 = G__19165;
continue;
} else {
var temp__4657__auto___19166 = cljs.core.seq.call(null,seq__19152_19156);
if(temp__4657__auto___19166){
var seq__19152_19167__$1 = temp__4657__auto___19166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19152_19167__$1)){
var c__10059__auto___19168 = cljs.core.chunk_first.call(null,seq__19152_19167__$1);
var G__19169 = cljs.core.chunk_rest.call(null,seq__19152_19167__$1);
var G__19170 = c__10059__auto___19168;
var G__19171 = cljs.core.count.call(null,c__10059__auto___19168);
var G__19172 = (0);
seq__19152_19156 = G__19169;
chunk__19153_19157 = G__19170;
count__19154_19158 = G__19171;
i__19155_19159 = G__19172;
continue;
} else {
var k_19173 = cljs.core.first.call(null,seq__19152_19167__$1);
var v_19174 = (b[k_19173]);
(a[k_19173] = v_19174);

var G__19175 = cljs.core.next.call(null,seq__19152_19167__$1);
var G__19176 = null;
var G__19177 = (0);
var G__19178 = (0);
seq__19152_19156 = G__19175;
chunk__19153_19157 = G__19176;
count__19154_19158 = G__19177;
i__19155_19159 = G__19178;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/VectorBuilder");
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
var args19179 = [];
var len__10353__auto___19182 = arguments.length;
var i__10354__auto___19183 = (0);
while(true){
if((i__10354__auto___19183 < len__10353__auto___19182)){
args19179.push((arguments[i__10354__auto___19183]));

var G__19184 = (i__10354__auto___19183 + (1));
i__10354__auto___19183 = G__19184;
continue;
} else {
}
break;
}

var G__19181 = args19179.length;
switch (G__19181) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19179.length)].join('')));

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
var G__19186 = (i + (2));
var G__19187 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19186;
ret = G__19187;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/SymbolHandler");
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
var seq__19188_19192 = cljs.core.seq.call(null,v);
var chunk__19189_19193 = null;
var count__19190_19194 = (0);
var i__19191_19195 = (0);
while(true){
if((i__19191_19195 < count__19190_19194)){
var x_19196 = cljs.core._nth.call(null,chunk__19189_19193,i__19191_19195);
ret.push(x_19196);

var G__19197 = seq__19188_19192;
var G__19198 = chunk__19189_19193;
var G__19199 = count__19190_19194;
var G__19200 = (i__19191_19195 + (1));
seq__19188_19192 = G__19197;
chunk__19189_19193 = G__19198;
count__19190_19194 = G__19199;
i__19191_19195 = G__19200;
continue;
} else {
var temp__4657__auto___19201 = cljs.core.seq.call(null,seq__19188_19192);
if(temp__4657__auto___19201){
var seq__19188_19202__$1 = temp__4657__auto___19201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19188_19202__$1)){
var c__10059__auto___19203 = cljs.core.chunk_first.call(null,seq__19188_19202__$1);
var G__19204 = cljs.core.chunk_rest.call(null,seq__19188_19202__$1);
var G__19205 = c__10059__auto___19203;
var G__19206 = cljs.core.count.call(null,c__10059__auto___19203);
var G__19207 = (0);
seq__19188_19192 = G__19204;
chunk__19189_19193 = G__19205;
count__19190_19194 = G__19206;
i__19191_19195 = G__19207;
continue;
} else {
var x_19208 = cljs.core.first.call(null,seq__19188_19202__$1);
ret.push(x_19208);

var G__19209 = cljs.core.next.call(null,seq__19188_19202__$1);
var G__19210 = null;
var G__19211 = (0);
var G__19212 = (0);
seq__19188_19192 = G__19209;
chunk__19189_19193 = G__19210;
count__19190_19194 = G__19211;
i__19191_19195 = G__19212;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/MapHandler");
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
var seq__19213_19217 = cljs.core.seq.call(null,v);
var chunk__19214_19218 = null;
var count__19215_19219 = (0);
var i__19216_19220 = (0);
while(true){
if((i__19216_19220 < count__19215_19219)){
var x_19221 = cljs.core._nth.call(null,chunk__19214_19218,i__19216_19220);
ret.push(x_19221);

var G__19222 = seq__19213_19217;
var G__19223 = chunk__19214_19218;
var G__19224 = count__19215_19219;
var G__19225 = (i__19216_19220 + (1));
seq__19213_19217 = G__19222;
chunk__19214_19218 = G__19223;
count__19215_19219 = G__19224;
i__19216_19220 = G__19225;
continue;
} else {
var temp__4657__auto___19226 = cljs.core.seq.call(null,seq__19213_19217);
if(temp__4657__auto___19226){
var seq__19213_19227__$1 = temp__4657__auto___19226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19213_19227__$1)){
var c__10059__auto___19228 = cljs.core.chunk_first.call(null,seq__19213_19227__$1);
var G__19229 = cljs.core.chunk_rest.call(null,seq__19213_19227__$1);
var G__19230 = c__10059__auto___19228;
var G__19231 = cljs.core.count.call(null,c__10059__auto___19228);
var G__19232 = (0);
seq__19213_19217 = G__19229;
chunk__19214_19218 = G__19230;
count__19215_19219 = G__19231;
i__19216_19220 = G__19232;
continue;
} else {
var x_19233 = cljs.core.first.call(null,seq__19213_19227__$1);
ret.push(x_19233);

var G__19234 = cljs.core.next.call(null,seq__19213_19227__$1);
var G__19235 = null;
var G__19236 = (0);
var G__19237 = (0);
seq__19213_19217 = G__19234;
chunk__19214_19218 = G__19235;
count__19215_19219 = G__19236;
i__19216_19220 = G__19237;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/SetHandler");
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
var seq__19238_19242 = cljs.core.seq.call(null,v);
var chunk__19239_19243 = null;
var count__19240_19244 = (0);
var i__19241_19245 = (0);
while(true){
if((i__19241_19245 < count__19240_19244)){
var x_19246 = cljs.core._nth.call(null,chunk__19239_19243,i__19241_19245);
ret.push(x_19246);

var G__19247 = seq__19238_19242;
var G__19248 = chunk__19239_19243;
var G__19249 = count__19240_19244;
var G__19250 = (i__19241_19245 + (1));
seq__19238_19242 = G__19247;
chunk__19239_19243 = G__19248;
count__19240_19244 = G__19249;
i__19241_19245 = G__19250;
continue;
} else {
var temp__4657__auto___19251 = cljs.core.seq.call(null,seq__19238_19242);
if(temp__4657__auto___19251){
var seq__19238_19252__$1 = temp__4657__auto___19251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19238_19252__$1)){
var c__10059__auto___19253 = cljs.core.chunk_first.call(null,seq__19238_19252__$1);
var G__19254 = cljs.core.chunk_rest.call(null,seq__19238_19252__$1);
var G__19255 = c__10059__auto___19253;
var G__19256 = cljs.core.count.call(null,c__10059__auto___19253);
var G__19257 = (0);
seq__19238_19242 = G__19254;
chunk__19239_19243 = G__19255;
count__19240_19244 = G__19256;
i__19241_19245 = G__19257;
continue;
} else {
var x_19258 = cljs.core.first.call(null,seq__19238_19252__$1);
ret.push(x_19258);

var G__19259 = cljs.core.next.call(null,seq__19238_19252__$1);
var G__19260 = null;
var G__19261 = (0);
var G__19262 = (0);
seq__19238_19242 = G__19259;
chunk__19239_19243 = G__19260;
count__19240_19244 = G__19261;
i__19241_19245 = G__19262;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/UUIDHandler");
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
var args19263 = [];
var len__10353__auto___19278 = arguments.length;
var i__10354__auto___19279 = (0);
while(true){
if((i__10354__auto___19279 < len__10353__auto___19278)){
args19263.push((arguments[i__10354__auto___19279]));

var G__19280 = (i__10354__auto___19279 + (1));
i__10354__auto___19279 = G__19280;
continue;
} else {
}
break;
}

var G__19265 = args19263.length;
switch (G__19265) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19263.length)].join('')));

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
var G__19266 = obj;
G__19266.push(kfn.call(null,k),vfn.call(null,v));

return G__19266;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19267 = cljs.core.clone.call(null,handlers);
x19267.forEach = ((function (x19267,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19268 = cljs.core.seq.call(null,coll);
var chunk__19269 = null;
var count__19270 = (0);
var i__19271 = (0);
while(true){
if((i__19271 < count__19270)){
var vec__19272 = cljs.core._nth.call(null,chunk__19269,i__19271);
var k = cljs.core.nth.call(null,vec__19272,(0),null);
var v = cljs.core.nth.call(null,vec__19272,(1),null);
f.call(null,v,k);

var G__19282 = seq__19268;
var G__19283 = chunk__19269;
var G__19284 = count__19270;
var G__19285 = (i__19271 + (1));
seq__19268 = G__19282;
chunk__19269 = G__19283;
count__19270 = G__19284;
i__19271 = G__19285;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19268);
if(temp__4657__auto__){
var seq__19268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19268__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__19268__$1);
var G__19286 = cljs.core.chunk_rest.call(null,seq__19268__$1);
var G__19287 = c__10059__auto__;
var G__19288 = cljs.core.count.call(null,c__10059__auto__);
var G__19289 = (0);
seq__19268 = G__19286;
chunk__19269 = G__19287;
count__19270 = G__19288;
i__19271 = G__19289;
continue;
} else {
var vec__19275 = cljs.core.first.call(null,seq__19268__$1);
var k = cljs.core.nth.call(null,vec__19275,(0),null);
var v = cljs.core.nth.call(null,vec__19275,(1),null);
f.call(null,v,k);

var G__19290 = cljs.core.next.call(null,seq__19268__$1);
var G__19291 = null;
var G__19292 = (0);
var G__19293 = (0);
seq__19268 = G__19290;
chunk__19269 = G__19291;
count__19270 = G__19292;
i__19271 = G__19293;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19267,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19267;
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
var args19294 = [];
var len__10353__auto___19300 = arguments.length;
var i__10354__auto___19301 = (0);
while(true){
if((i__10354__auto___19301 < len__10353__auto___19300)){
args19294.push((arguments[i__10354__auto___19301]));

var G__19302 = (i__10354__auto___19301 + (1));
i__10354__auto___19301 = G__19302;
continue;
} else {
}
break;
}

var G__19296 = args19294.length;
switch (G__19296) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19294.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19297 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19298){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19298 = meta19298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19299,meta19298__$1){
var self__ = this;
var _19299__$1 = this;
return (new cognitect.transit.t_cognitect$transit19297(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19298__$1));
});

cognitect.transit.t_cognitect$transit19297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19299){
var self__ = this;
var _19299__$1 = this;
return self__.meta19298;
});

cognitect.transit.t_cognitect$transit19297.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19297.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19297.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19297.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19298","meta19298",1104999676,null)], null);
});

cognitect.transit.t_cognitect$transit19297.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19297.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19297";

cognitect.transit.t_cognitect$transit19297.cljs$lang$ctorPrWriter = (function (this__9851__auto__,writer__9852__auto__,opt__9853__auto__){
return cljs.core._write.call(null,writer__9852__auto__,"cognitect.transit/t_cognitect$transit19297");
});

cognitect.transit.__GT_t_cognitect$transit19297 = (function cognitect$transit$__GT_t_cognitect$transit19297(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19298){
return (new cognitect.transit.t_cognitect$transit19297(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19298));
});

}

return (new cognitect.transit.t_cognitect$transit19297(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__9245__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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