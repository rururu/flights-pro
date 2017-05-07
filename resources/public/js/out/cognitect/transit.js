// Compiled by ClojureScript 1.9.521 {}
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
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
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20109_20113 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20110_20114 = null;
var count__20111_20115 = (0);
var i__20112_20116 = (0);
while(true){
if((i__20112_20116 < count__20111_20115)){
var k_20117 = cljs.core._nth.call(null,chunk__20110_20114,i__20112_20116);
var v_20118 = (b[k_20117]);
(a[k_20117] = v_20118);

var G__20119 = seq__20109_20113;
var G__20120 = chunk__20110_20114;
var G__20121 = count__20111_20115;
var G__20122 = (i__20112_20116 + (1));
seq__20109_20113 = G__20119;
chunk__20110_20114 = G__20120;
count__20111_20115 = G__20121;
i__20112_20116 = G__20122;
continue;
} else {
var temp__4657__auto___20123 = cljs.core.seq.call(null,seq__20109_20113);
if(temp__4657__auto___20123){
var seq__20109_20124__$1 = temp__4657__auto___20123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20109_20124__$1)){
var c__9736__auto___20125 = cljs.core.chunk_first.call(null,seq__20109_20124__$1);
var G__20126 = cljs.core.chunk_rest.call(null,seq__20109_20124__$1);
var G__20127 = c__9736__auto___20125;
var G__20128 = cljs.core.count.call(null,c__9736__auto___20125);
var G__20129 = (0);
seq__20109_20113 = G__20126;
chunk__20110_20114 = G__20127;
count__20111_20115 = G__20128;
i__20112_20116 = G__20129;
continue;
} else {
var k_20130 = cljs.core.first.call(null,seq__20109_20124__$1);
var v_20131 = (b[k_20130]);
(a[k_20130] = v_20131);

var G__20132 = cljs.core.next.call(null,seq__20109_20124__$1);
var G__20133 = null;
var G__20134 = (0);
var G__20135 = (0);
seq__20109_20113 = G__20132;
chunk__20110_20114 = G__20133;
count__20111_20115 = G__20134;
i__20112_20116 = G__20135;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/VectorBuilder");
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
var args20136 = [];
var len__10030__auto___20139 = arguments.length;
var i__10031__auto___20140 = (0);
while(true){
if((i__10031__auto___20140 < len__10030__auto___20139)){
args20136.push((arguments[i__10031__auto___20140]));

var G__20141 = (i__10031__auto___20140 + (1));
i__10031__auto___20140 = G__20141;
continue;
} else {
}
break;
}

var G__20138 = args20136.length;
switch (G__20138) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20136.length)].join('')));

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
var G__20143 = (i + (2));
var G__20144 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20143;
ret = G__20144;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/SymbolHandler");
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
var seq__20145_20149 = cljs.core.seq.call(null,v);
var chunk__20146_20150 = null;
var count__20147_20151 = (0);
var i__20148_20152 = (0);
while(true){
if((i__20148_20152 < count__20147_20151)){
var x_20153 = cljs.core._nth.call(null,chunk__20146_20150,i__20148_20152);
ret.push(x_20153);

var G__20154 = seq__20145_20149;
var G__20155 = chunk__20146_20150;
var G__20156 = count__20147_20151;
var G__20157 = (i__20148_20152 + (1));
seq__20145_20149 = G__20154;
chunk__20146_20150 = G__20155;
count__20147_20151 = G__20156;
i__20148_20152 = G__20157;
continue;
} else {
var temp__4657__auto___20158 = cljs.core.seq.call(null,seq__20145_20149);
if(temp__4657__auto___20158){
var seq__20145_20159__$1 = temp__4657__auto___20158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20145_20159__$1)){
var c__9736__auto___20160 = cljs.core.chunk_first.call(null,seq__20145_20159__$1);
var G__20161 = cljs.core.chunk_rest.call(null,seq__20145_20159__$1);
var G__20162 = c__9736__auto___20160;
var G__20163 = cljs.core.count.call(null,c__9736__auto___20160);
var G__20164 = (0);
seq__20145_20149 = G__20161;
chunk__20146_20150 = G__20162;
count__20147_20151 = G__20163;
i__20148_20152 = G__20164;
continue;
} else {
var x_20165 = cljs.core.first.call(null,seq__20145_20159__$1);
ret.push(x_20165);

var G__20166 = cljs.core.next.call(null,seq__20145_20159__$1);
var G__20167 = null;
var G__20168 = (0);
var G__20169 = (0);
seq__20145_20149 = G__20166;
chunk__20146_20150 = G__20167;
count__20147_20151 = G__20168;
i__20148_20152 = G__20169;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/MapHandler");
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
var seq__20170_20174 = cljs.core.seq.call(null,v);
var chunk__20171_20175 = null;
var count__20172_20176 = (0);
var i__20173_20177 = (0);
while(true){
if((i__20173_20177 < count__20172_20176)){
var x_20178 = cljs.core._nth.call(null,chunk__20171_20175,i__20173_20177);
ret.push(x_20178);

var G__20179 = seq__20170_20174;
var G__20180 = chunk__20171_20175;
var G__20181 = count__20172_20176;
var G__20182 = (i__20173_20177 + (1));
seq__20170_20174 = G__20179;
chunk__20171_20175 = G__20180;
count__20172_20176 = G__20181;
i__20173_20177 = G__20182;
continue;
} else {
var temp__4657__auto___20183 = cljs.core.seq.call(null,seq__20170_20174);
if(temp__4657__auto___20183){
var seq__20170_20184__$1 = temp__4657__auto___20183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20170_20184__$1)){
var c__9736__auto___20185 = cljs.core.chunk_first.call(null,seq__20170_20184__$1);
var G__20186 = cljs.core.chunk_rest.call(null,seq__20170_20184__$1);
var G__20187 = c__9736__auto___20185;
var G__20188 = cljs.core.count.call(null,c__9736__auto___20185);
var G__20189 = (0);
seq__20170_20174 = G__20186;
chunk__20171_20175 = G__20187;
count__20172_20176 = G__20188;
i__20173_20177 = G__20189;
continue;
} else {
var x_20190 = cljs.core.first.call(null,seq__20170_20184__$1);
ret.push(x_20190);

var G__20191 = cljs.core.next.call(null,seq__20170_20184__$1);
var G__20192 = null;
var G__20193 = (0);
var G__20194 = (0);
seq__20170_20174 = G__20191;
chunk__20171_20175 = G__20192;
count__20172_20176 = G__20193;
i__20173_20177 = G__20194;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/SetHandler");
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
var seq__20195_20199 = cljs.core.seq.call(null,v);
var chunk__20196_20200 = null;
var count__20197_20201 = (0);
var i__20198_20202 = (0);
while(true){
if((i__20198_20202 < count__20197_20201)){
var x_20203 = cljs.core._nth.call(null,chunk__20196_20200,i__20198_20202);
ret.push(x_20203);

var G__20204 = seq__20195_20199;
var G__20205 = chunk__20196_20200;
var G__20206 = count__20197_20201;
var G__20207 = (i__20198_20202 + (1));
seq__20195_20199 = G__20204;
chunk__20196_20200 = G__20205;
count__20197_20201 = G__20206;
i__20198_20202 = G__20207;
continue;
} else {
var temp__4657__auto___20208 = cljs.core.seq.call(null,seq__20195_20199);
if(temp__4657__auto___20208){
var seq__20195_20209__$1 = temp__4657__auto___20208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20195_20209__$1)){
var c__9736__auto___20210 = cljs.core.chunk_first.call(null,seq__20195_20209__$1);
var G__20211 = cljs.core.chunk_rest.call(null,seq__20195_20209__$1);
var G__20212 = c__9736__auto___20210;
var G__20213 = cljs.core.count.call(null,c__9736__auto___20210);
var G__20214 = (0);
seq__20195_20199 = G__20211;
chunk__20196_20200 = G__20212;
count__20197_20201 = G__20213;
i__20198_20202 = G__20214;
continue;
} else {
var x_20215 = cljs.core.first.call(null,seq__20195_20209__$1);
ret.push(x_20215);

var G__20216 = cljs.core.next.call(null,seq__20195_20209__$1);
var G__20217 = null;
var G__20218 = (0);
var G__20219 = (0);
seq__20195_20199 = G__20216;
chunk__20196_20200 = G__20217;
count__20197_20201 = G__20218;
i__20198_20202 = G__20219;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/UUIDHandler");
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
var args20220 = [];
var len__10030__auto___20235 = arguments.length;
var i__10031__auto___20236 = (0);
while(true){
if((i__10031__auto___20236 < len__10030__auto___20235)){
args20220.push((arguments[i__10031__auto___20236]));

var G__20237 = (i__10031__auto___20236 + (1));
i__10031__auto___20236 = G__20237;
continue;
} else {
}
break;
}

var G__20222 = args20220.length;
switch (G__20222) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20220.length)].join('')));

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
var G__20223 = obj;
G__20223.push(kfn.call(null,k),vfn.call(null,v));

return G__20223;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20224 = cljs.core.clone.call(null,handlers);
x20224.forEach = ((function (x20224,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20225 = cljs.core.seq.call(null,coll);
var chunk__20226 = null;
var count__20227 = (0);
var i__20228 = (0);
while(true){
if((i__20228 < count__20227)){
var vec__20229 = cljs.core._nth.call(null,chunk__20226,i__20228);
var k = cljs.core.nth.call(null,vec__20229,(0),null);
var v = cljs.core.nth.call(null,vec__20229,(1),null);
f.call(null,v,k);

var G__20239 = seq__20225;
var G__20240 = chunk__20226;
var G__20241 = count__20227;
var G__20242 = (i__20228 + (1));
seq__20225 = G__20239;
chunk__20226 = G__20240;
count__20227 = G__20241;
i__20228 = G__20242;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20225);
if(temp__4657__auto__){
var seq__20225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20225__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__20225__$1);
var G__20243 = cljs.core.chunk_rest.call(null,seq__20225__$1);
var G__20244 = c__9736__auto__;
var G__20245 = cljs.core.count.call(null,c__9736__auto__);
var G__20246 = (0);
seq__20225 = G__20243;
chunk__20226 = G__20244;
count__20227 = G__20245;
i__20228 = G__20246;
continue;
} else {
var vec__20232 = cljs.core.first.call(null,seq__20225__$1);
var k = cljs.core.nth.call(null,vec__20232,(0),null);
var v = cljs.core.nth.call(null,vec__20232,(1),null);
f.call(null,v,k);

var G__20247 = cljs.core.next.call(null,seq__20225__$1);
var G__20248 = null;
var G__20249 = (0);
var G__20250 = (0);
seq__20225 = G__20247;
chunk__20226 = G__20248;
count__20227 = G__20249;
i__20228 = G__20250;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20224,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20224;
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
var args20251 = [];
var len__10030__auto___20257 = arguments.length;
var i__10031__auto___20258 = (0);
while(true){
if((i__10031__auto___20258 < len__10030__auto___20257)){
args20251.push((arguments[i__10031__auto___20258]));

var G__20259 = (i__10031__auto___20258 + (1));
i__10031__auto___20258 = G__20259;
continue;
} else {
}
break;
}

var G__20253 = args20251.length;
switch (G__20253) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20251.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20254 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20255){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20255 = meta20255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20256,meta20255__$1){
var self__ = this;
var _20256__$1 = this;
return (new cognitect.transit.t_cognitect$transit20254(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20255__$1));
});

cognitect.transit.t_cognitect$transit20254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20256){
var self__ = this;
var _20256__$1 = this;
return self__.meta20255;
});

cognitect.transit.t_cognitect$transit20254.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20254.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20254.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20254.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20255","meta20255",-509876464,null)], null);
});

cognitect.transit.t_cognitect$transit20254.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20254.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20254";

cognitect.transit.t_cognitect$transit20254.cljs$lang$ctorPrWriter = (function (this__9528__auto__,writer__9529__auto__,opt__9530__auto__){
return cljs.core._write.call(null,writer__9529__auto__,"cognitect.transit/t_cognitect$transit20254");
});

cognitect.transit.__GT_t_cognitect$transit20254 = (function cognitect$transit$__GT_t_cognitect$transit20254(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20255){
return (new cognitect.transit.t_cognitect$transit20254(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20255));
});

}

return (new cognitect.transit.t_cognitect$transit20254(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__8917__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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