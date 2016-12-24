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
var seq__18732_18736 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18733_18737 = null;
var count__18734_18738 = (0);
var i__18735_18739 = (0);
while(true){
if((i__18735_18739 < count__18734_18738)){
var k_18740 = cljs.core._nth.call(null,chunk__18733_18737,i__18735_18739);
var v_18741 = (b[k_18740]);
(a[k_18740] = v_18741);

var G__18742 = seq__18732_18736;
var G__18743 = chunk__18733_18737;
var G__18744 = count__18734_18738;
var G__18745 = (i__18735_18739 + (1));
seq__18732_18736 = G__18742;
chunk__18733_18737 = G__18743;
count__18734_18738 = G__18744;
i__18735_18739 = G__18745;
continue;
} else {
var temp__4657__auto___18746 = cljs.core.seq.call(null,seq__18732_18736);
if(temp__4657__auto___18746){
var seq__18732_18747__$1 = temp__4657__auto___18746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18732_18747__$1)){
var c__9637__auto___18748 = cljs.core.chunk_first.call(null,seq__18732_18747__$1);
var G__18749 = cljs.core.chunk_rest.call(null,seq__18732_18747__$1);
var G__18750 = c__9637__auto___18748;
var G__18751 = cljs.core.count.call(null,c__9637__auto___18748);
var G__18752 = (0);
seq__18732_18736 = G__18749;
chunk__18733_18737 = G__18750;
count__18734_18738 = G__18751;
i__18735_18739 = G__18752;
continue;
} else {
var k_18753 = cljs.core.first.call(null,seq__18732_18747__$1);
var v_18754 = (b[k_18753]);
(a[k_18753] = v_18754);

var G__18755 = cljs.core.next.call(null,seq__18732_18747__$1);
var G__18756 = null;
var G__18757 = (0);
var G__18758 = (0);
seq__18732_18736 = G__18755;
chunk__18733_18737 = G__18756;
count__18734_18738 = G__18757;
i__18735_18739 = G__18758;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/VectorBuilder");
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
var args18759 = [];
var len__9931__auto___18762 = arguments.length;
var i__9932__auto___18763 = (0);
while(true){
if((i__9932__auto___18763 < len__9931__auto___18762)){
args18759.push((arguments[i__9932__auto___18763]));

var G__18764 = (i__9932__auto___18763 + (1));
i__9932__auto___18763 = G__18764;
continue;
} else {
}
break;
}

var G__18761 = args18759.length;
switch (G__18761) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18759.length)].join('')));

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
var G__18766 = (i + (2));
var G__18767 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18766;
ret = G__18767;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/SymbolHandler");
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
var seq__18768_18772 = cljs.core.seq.call(null,v);
var chunk__18769_18773 = null;
var count__18770_18774 = (0);
var i__18771_18775 = (0);
while(true){
if((i__18771_18775 < count__18770_18774)){
var x_18776 = cljs.core._nth.call(null,chunk__18769_18773,i__18771_18775);
ret.push(x_18776);

var G__18777 = seq__18768_18772;
var G__18778 = chunk__18769_18773;
var G__18779 = count__18770_18774;
var G__18780 = (i__18771_18775 + (1));
seq__18768_18772 = G__18777;
chunk__18769_18773 = G__18778;
count__18770_18774 = G__18779;
i__18771_18775 = G__18780;
continue;
} else {
var temp__4657__auto___18781 = cljs.core.seq.call(null,seq__18768_18772);
if(temp__4657__auto___18781){
var seq__18768_18782__$1 = temp__4657__auto___18781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18768_18782__$1)){
var c__9637__auto___18783 = cljs.core.chunk_first.call(null,seq__18768_18782__$1);
var G__18784 = cljs.core.chunk_rest.call(null,seq__18768_18782__$1);
var G__18785 = c__9637__auto___18783;
var G__18786 = cljs.core.count.call(null,c__9637__auto___18783);
var G__18787 = (0);
seq__18768_18772 = G__18784;
chunk__18769_18773 = G__18785;
count__18770_18774 = G__18786;
i__18771_18775 = G__18787;
continue;
} else {
var x_18788 = cljs.core.first.call(null,seq__18768_18782__$1);
ret.push(x_18788);

var G__18789 = cljs.core.next.call(null,seq__18768_18782__$1);
var G__18790 = null;
var G__18791 = (0);
var G__18792 = (0);
seq__18768_18772 = G__18789;
chunk__18769_18773 = G__18790;
count__18770_18774 = G__18791;
i__18771_18775 = G__18792;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/MapHandler");
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
var seq__18793_18797 = cljs.core.seq.call(null,v);
var chunk__18794_18798 = null;
var count__18795_18799 = (0);
var i__18796_18800 = (0);
while(true){
if((i__18796_18800 < count__18795_18799)){
var x_18801 = cljs.core._nth.call(null,chunk__18794_18798,i__18796_18800);
ret.push(x_18801);

var G__18802 = seq__18793_18797;
var G__18803 = chunk__18794_18798;
var G__18804 = count__18795_18799;
var G__18805 = (i__18796_18800 + (1));
seq__18793_18797 = G__18802;
chunk__18794_18798 = G__18803;
count__18795_18799 = G__18804;
i__18796_18800 = G__18805;
continue;
} else {
var temp__4657__auto___18806 = cljs.core.seq.call(null,seq__18793_18797);
if(temp__4657__auto___18806){
var seq__18793_18807__$1 = temp__4657__auto___18806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18793_18807__$1)){
var c__9637__auto___18808 = cljs.core.chunk_first.call(null,seq__18793_18807__$1);
var G__18809 = cljs.core.chunk_rest.call(null,seq__18793_18807__$1);
var G__18810 = c__9637__auto___18808;
var G__18811 = cljs.core.count.call(null,c__9637__auto___18808);
var G__18812 = (0);
seq__18793_18797 = G__18809;
chunk__18794_18798 = G__18810;
count__18795_18799 = G__18811;
i__18796_18800 = G__18812;
continue;
} else {
var x_18813 = cljs.core.first.call(null,seq__18793_18807__$1);
ret.push(x_18813);

var G__18814 = cljs.core.next.call(null,seq__18793_18807__$1);
var G__18815 = null;
var G__18816 = (0);
var G__18817 = (0);
seq__18793_18797 = G__18814;
chunk__18794_18798 = G__18815;
count__18795_18799 = G__18816;
i__18796_18800 = G__18817;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/SetHandler");
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
var seq__18818_18822 = cljs.core.seq.call(null,v);
var chunk__18819_18823 = null;
var count__18820_18824 = (0);
var i__18821_18825 = (0);
while(true){
if((i__18821_18825 < count__18820_18824)){
var x_18826 = cljs.core._nth.call(null,chunk__18819_18823,i__18821_18825);
ret.push(x_18826);

var G__18827 = seq__18818_18822;
var G__18828 = chunk__18819_18823;
var G__18829 = count__18820_18824;
var G__18830 = (i__18821_18825 + (1));
seq__18818_18822 = G__18827;
chunk__18819_18823 = G__18828;
count__18820_18824 = G__18829;
i__18821_18825 = G__18830;
continue;
} else {
var temp__4657__auto___18831 = cljs.core.seq.call(null,seq__18818_18822);
if(temp__4657__auto___18831){
var seq__18818_18832__$1 = temp__4657__auto___18831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18818_18832__$1)){
var c__9637__auto___18833 = cljs.core.chunk_first.call(null,seq__18818_18832__$1);
var G__18834 = cljs.core.chunk_rest.call(null,seq__18818_18832__$1);
var G__18835 = c__9637__auto___18833;
var G__18836 = cljs.core.count.call(null,c__9637__auto___18833);
var G__18837 = (0);
seq__18818_18822 = G__18834;
chunk__18819_18823 = G__18835;
count__18820_18824 = G__18836;
i__18821_18825 = G__18837;
continue;
} else {
var x_18838 = cljs.core.first.call(null,seq__18818_18832__$1);
ret.push(x_18838);

var G__18839 = cljs.core.next.call(null,seq__18818_18832__$1);
var G__18840 = null;
var G__18841 = (0);
var G__18842 = (0);
seq__18818_18822 = G__18839;
chunk__18819_18823 = G__18840;
count__18820_18824 = G__18841;
i__18821_18825 = G__18842;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/UUIDHandler");
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
var args18843 = [];
var len__9931__auto___18858 = arguments.length;
var i__9932__auto___18859 = (0);
while(true){
if((i__9932__auto___18859 < len__9931__auto___18858)){
args18843.push((arguments[i__9932__auto___18859]));

var G__18860 = (i__9932__auto___18859 + (1));
i__9932__auto___18859 = G__18860;
continue;
} else {
}
break;
}

var G__18845 = args18843.length;
switch (G__18845) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18843.length)].join('')));

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
var G__18846 = obj;
G__18846.push(kfn.call(null,k),vfn.call(null,v));

return G__18846;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18847 = cljs.core.clone.call(null,handlers);
x18847.forEach = ((function (x18847,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18848 = cljs.core.seq.call(null,coll);
var chunk__18849 = null;
var count__18850 = (0);
var i__18851 = (0);
while(true){
if((i__18851 < count__18850)){
var vec__18852 = cljs.core._nth.call(null,chunk__18849,i__18851);
var k = cljs.core.nth.call(null,vec__18852,(0),null);
var v = cljs.core.nth.call(null,vec__18852,(1),null);
f.call(null,v,k);

var G__18862 = seq__18848;
var G__18863 = chunk__18849;
var G__18864 = count__18850;
var G__18865 = (i__18851 + (1));
seq__18848 = G__18862;
chunk__18849 = G__18863;
count__18850 = G__18864;
i__18851 = G__18865;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18848);
if(temp__4657__auto__){
var seq__18848__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18848__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__18848__$1);
var G__18866 = cljs.core.chunk_rest.call(null,seq__18848__$1);
var G__18867 = c__9637__auto__;
var G__18868 = cljs.core.count.call(null,c__9637__auto__);
var G__18869 = (0);
seq__18848 = G__18866;
chunk__18849 = G__18867;
count__18850 = G__18868;
i__18851 = G__18869;
continue;
} else {
var vec__18855 = cljs.core.first.call(null,seq__18848__$1);
var k = cljs.core.nth.call(null,vec__18855,(0),null);
var v = cljs.core.nth.call(null,vec__18855,(1),null);
f.call(null,v,k);

var G__18870 = cljs.core.next.call(null,seq__18848__$1);
var G__18871 = null;
var G__18872 = (0);
var G__18873 = (0);
seq__18848 = G__18870;
chunk__18849 = G__18871;
count__18850 = G__18872;
i__18851 = G__18873;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18847,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18847;
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
var args18874 = [];
var len__9931__auto___18880 = arguments.length;
var i__9932__auto___18881 = (0);
while(true){
if((i__9932__auto___18881 < len__9931__auto___18880)){
args18874.push((arguments[i__9932__auto___18881]));

var G__18882 = (i__9932__auto___18881 + (1));
i__9932__auto___18881 = G__18882;
continue;
} else {
}
break;
}

var G__18876 = args18874.length;
switch (G__18876) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18874.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18877 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18878){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18878 = meta18878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18879,meta18878__$1){
var self__ = this;
var _18879__$1 = this;
return (new cognitect.transit.t_cognitect$transit18877(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18878__$1));
});

cognitect.transit.t_cognitect$transit18877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18879){
var self__ = this;
var _18879__$1 = this;
return self__.meta18878;
});

cognitect.transit.t_cognitect$transit18877.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18877.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18877.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18877.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18878","meta18878",232986253,null)], null);
});

cognitect.transit.t_cognitect$transit18877.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18877.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18877";

cognitect.transit.t_cognitect$transit18877.cljs$lang$ctorPrWriter = (function (this__9429__auto__,writer__9430__auto__,opt__9431__auto__){
return cljs.core._write.call(null,writer__9430__auto__,"cognitect.transit/t_cognitect$transit18877");
});

cognitect.transit.__GT_t_cognitect$transit18877 = (function cognitect$transit$__GT_t_cognitect$transit18877(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18878){
return (new cognitect.transit.t_cognitect$transit18877(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18878));
});

}

return (new cognitect.transit.t_cognitect$transit18877(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__8823__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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