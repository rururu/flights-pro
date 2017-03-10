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
var seq__56697_56701 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__56698_56702 = null;
var count__56699_56703 = (0);
var i__56700_56704 = (0);
while(true){
if((i__56700_56704 < count__56699_56703)){
var k_56705 = cljs.core._nth.call(null,chunk__56698_56702,i__56700_56704);
var v_56706 = (b[k_56705]);
(a[k_56705] = v_56706);

var G__56707 = seq__56697_56701;
var G__56708 = chunk__56698_56702;
var G__56709 = count__56699_56703;
var G__56710 = (i__56700_56704 + (1));
seq__56697_56701 = G__56707;
chunk__56698_56702 = G__56708;
count__56699_56703 = G__56709;
i__56700_56704 = G__56710;
continue;
} else {
var temp__4657__auto___56711 = cljs.core.seq.call(null,seq__56697_56701);
if(temp__4657__auto___56711){
var seq__56697_56712__$1 = temp__4657__auto___56711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56697_56712__$1)){
var c__47945__auto___56713 = cljs.core.chunk_first.call(null,seq__56697_56712__$1);
var G__56714 = cljs.core.chunk_rest.call(null,seq__56697_56712__$1);
var G__56715 = c__47945__auto___56713;
var G__56716 = cljs.core.count.call(null,c__47945__auto___56713);
var G__56717 = (0);
seq__56697_56701 = G__56714;
chunk__56698_56702 = G__56715;
count__56699_56703 = G__56716;
i__56700_56704 = G__56717;
continue;
} else {
var k_56718 = cljs.core.first.call(null,seq__56697_56712__$1);
var v_56719 = (b[k_56718]);
(a[k_56718] = v_56719);

var G__56720 = cljs.core.next.call(null,seq__56697_56712__$1);
var G__56721 = null;
var G__56722 = (0);
var G__56723 = (0);
seq__56697_56701 = G__56720;
chunk__56698_56702 = G__56721;
count__56699_56703 = G__56722;
i__56700_56704 = G__56723;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/VectorBuilder");
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
var args56724 = [];
var len__48239__auto___56727 = arguments.length;
var i__48240__auto___56728 = (0);
while(true){
if((i__48240__auto___56728 < len__48239__auto___56727)){
args56724.push((arguments[i__48240__auto___56728]));

var G__56729 = (i__48240__auto___56728 + (1));
i__48240__auto___56728 = G__56729;
continue;
} else {
}
break;
}

var G__56726 = args56724.length;
switch (G__56726) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56724.length)].join('')));

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
var G__56731 = (i + (2));
var G__56732 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__56731;
ret = G__56732;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/SymbolHandler");
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
var seq__56733_56737 = cljs.core.seq.call(null,v);
var chunk__56734_56738 = null;
var count__56735_56739 = (0);
var i__56736_56740 = (0);
while(true){
if((i__56736_56740 < count__56735_56739)){
var x_56741 = cljs.core._nth.call(null,chunk__56734_56738,i__56736_56740);
ret.push(x_56741);

var G__56742 = seq__56733_56737;
var G__56743 = chunk__56734_56738;
var G__56744 = count__56735_56739;
var G__56745 = (i__56736_56740 + (1));
seq__56733_56737 = G__56742;
chunk__56734_56738 = G__56743;
count__56735_56739 = G__56744;
i__56736_56740 = G__56745;
continue;
} else {
var temp__4657__auto___56746 = cljs.core.seq.call(null,seq__56733_56737);
if(temp__4657__auto___56746){
var seq__56733_56747__$1 = temp__4657__auto___56746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56733_56747__$1)){
var c__47945__auto___56748 = cljs.core.chunk_first.call(null,seq__56733_56747__$1);
var G__56749 = cljs.core.chunk_rest.call(null,seq__56733_56747__$1);
var G__56750 = c__47945__auto___56748;
var G__56751 = cljs.core.count.call(null,c__47945__auto___56748);
var G__56752 = (0);
seq__56733_56737 = G__56749;
chunk__56734_56738 = G__56750;
count__56735_56739 = G__56751;
i__56736_56740 = G__56752;
continue;
} else {
var x_56753 = cljs.core.first.call(null,seq__56733_56747__$1);
ret.push(x_56753);

var G__56754 = cljs.core.next.call(null,seq__56733_56747__$1);
var G__56755 = null;
var G__56756 = (0);
var G__56757 = (0);
seq__56733_56737 = G__56754;
chunk__56734_56738 = G__56755;
count__56735_56739 = G__56756;
i__56736_56740 = G__56757;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/MapHandler");
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
var seq__56758_56762 = cljs.core.seq.call(null,v);
var chunk__56759_56763 = null;
var count__56760_56764 = (0);
var i__56761_56765 = (0);
while(true){
if((i__56761_56765 < count__56760_56764)){
var x_56766 = cljs.core._nth.call(null,chunk__56759_56763,i__56761_56765);
ret.push(x_56766);

var G__56767 = seq__56758_56762;
var G__56768 = chunk__56759_56763;
var G__56769 = count__56760_56764;
var G__56770 = (i__56761_56765 + (1));
seq__56758_56762 = G__56767;
chunk__56759_56763 = G__56768;
count__56760_56764 = G__56769;
i__56761_56765 = G__56770;
continue;
} else {
var temp__4657__auto___56771 = cljs.core.seq.call(null,seq__56758_56762);
if(temp__4657__auto___56771){
var seq__56758_56772__$1 = temp__4657__auto___56771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56758_56772__$1)){
var c__47945__auto___56773 = cljs.core.chunk_first.call(null,seq__56758_56772__$1);
var G__56774 = cljs.core.chunk_rest.call(null,seq__56758_56772__$1);
var G__56775 = c__47945__auto___56773;
var G__56776 = cljs.core.count.call(null,c__47945__auto___56773);
var G__56777 = (0);
seq__56758_56762 = G__56774;
chunk__56759_56763 = G__56775;
count__56760_56764 = G__56776;
i__56761_56765 = G__56777;
continue;
} else {
var x_56778 = cljs.core.first.call(null,seq__56758_56772__$1);
ret.push(x_56778);

var G__56779 = cljs.core.next.call(null,seq__56758_56772__$1);
var G__56780 = null;
var G__56781 = (0);
var G__56782 = (0);
seq__56758_56762 = G__56779;
chunk__56759_56763 = G__56780;
count__56760_56764 = G__56781;
i__56761_56765 = G__56782;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/SetHandler");
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
var seq__56783_56787 = cljs.core.seq.call(null,v);
var chunk__56784_56788 = null;
var count__56785_56789 = (0);
var i__56786_56790 = (0);
while(true){
if((i__56786_56790 < count__56785_56789)){
var x_56791 = cljs.core._nth.call(null,chunk__56784_56788,i__56786_56790);
ret.push(x_56791);

var G__56792 = seq__56783_56787;
var G__56793 = chunk__56784_56788;
var G__56794 = count__56785_56789;
var G__56795 = (i__56786_56790 + (1));
seq__56783_56787 = G__56792;
chunk__56784_56788 = G__56793;
count__56785_56789 = G__56794;
i__56786_56790 = G__56795;
continue;
} else {
var temp__4657__auto___56796 = cljs.core.seq.call(null,seq__56783_56787);
if(temp__4657__auto___56796){
var seq__56783_56797__$1 = temp__4657__auto___56796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56783_56797__$1)){
var c__47945__auto___56798 = cljs.core.chunk_first.call(null,seq__56783_56797__$1);
var G__56799 = cljs.core.chunk_rest.call(null,seq__56783_56797__$1);
var G__56800 = c__47945__auto___56798;
var G__56801 = cljs.core.count.call(null,c__47945__auto___56798);
var G__56802 = (0);
seq__56783_56787 = G__56799;
chunk__56784_56788 = G__56800;
count__56785_56789 = G__56801;
i__56786_56790 = G__56802;
continue;
} else {
var x_56803 = cljs.core.first.call(null,seq__56783_56797__$1);
ret.push(x_56803);

var G__56804 = cljs.core.next.call(null,seq__56783_56797__$1);
var G__56805 = null;
var G__56806 = (0);
var G__56807 = (0);
seq__56783_56787 = G__56804;
chunk__56784_56788 = G__56805;
count__56785_56789 = G__56806;
i__56786_56790 = G__56807;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/UUIDHandler");
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
var args56808 = [];
var len__48239__auto___56823 = arguments.length;
var i__48240__auto___56824 = (0);
while(true){
if((i__48240__auto___56824 < len__48239__auto___56823)){
args56808.push((arguments[i__48240__auto___56824]));

var G__56825 = (i__48240__auto___56824 + (1));
i__48240__auto___56824 = G__56825;
continue;
} else {
}
break;
}

var G__56810 = args56808.length;
switch (G__56810) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56808.length)].join('')));

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
var G__56811 = obj;
G__56811.push(kfn.call(null,k),vfn.call(null,v));

return G__56811;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x56812 = cljs.core.clone.call(null,handlers);
x56812.forEach = ((function (x56812,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__56813 = cljs.core.seq.call(null,coll);
var chunk__56814 = null;
var count__56815 = (0);
var i__56816 = (0);
while(true){
if((i__56816 < count__56815)){
var vec__56817 = cljs.core._nth.call(null,chunk__56814,i__56816);
var k = cljs.core.nth.call(null,vec__56817,(0),null);
var v = cljs.core.nth.call(null,vec__56817,(1),null);
f.call(null,v,k);

var G__56827 = seq__56813;
var G__56828 = chunk__56814;
var G__56829 = count__56815;
var G__56830 = (i__56816 + (1));
seq__56813 = G__56827;
chunk__56814 = G__56828;
count__56815 = G__56829;
i__56816 = G__56830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56813);
if(temp__4657__auto__){
var seq__56813__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56813__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__56813__$1);
var G__56831 = cljs.core.chunk_rest.call(null,seq__56813__$1);
var G__56832 = c__47945__auto__;
var G__56833 = cljs.core.count.call(null,c__47945__auto__);
var G__56834 = (0);
seq__56813 = G__56831;
chunk__56814 = G__56832;
count__56815 = G__56833;
i__56816 = G__56834;
continue;
} else {
var vec__56820 = cljs.core.first.call(null,seq__56813__$1);
var k = cljs.core.nth.call(null,vec__56820,(0),null);
var v = cljs.core.nth.call(null,vec__56820,(1),null);
f.call(null,v,k);

var G__56835 = cljs.core.next.call(null,seq__56813__$1);
var G__56836 = null;
var G__56837 = (0);
var G__56838 = (0);
seq__56813 = G__56835;
chunk__56814 = G__56836;
count__56815 = G__56837;
i__56816 = G__56838;
continue;
}
} else {
return null;
}
}
break;
}
});})(x56812,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x56812;
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
var args56839 = [];
var len__48239__auto___56845 = arguments.length;
var i__48240__auto___56846 = (0);
while(true){
if((i__48240__auto___56846 < len__48239__auto___56845)){
args56839.push((arguments[i__48240__auto___56846]));

var G__56847 = (i__48240__auto___56846 + (1));
i__48240__auto___56846 = G__56847;
continue;
} else {
}
break;
}

var G__56841 = args56839.length;
switch (G__56841) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56839.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit56842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit56842 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta56843){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta56843 = meta56843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit56842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56844,meta56843__$1){
var self__ = this;
var _56844__$1 = this;
return (new cognitect.transit.t_cognitect$transit56842(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta56843__$1));
});

cognitect.transit.t_cognitect$transit56842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56844){
var self__ = this;
var _56844__$1 = this;
return self__.meta56843;
});

cognitect.transit.t_cognitect$transit56842.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit56842.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit56842.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit56842.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit56842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta56843","meta56843",-964314217,null)], null);
});

cognitect.transit.t_cognitect$transit56842.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit56842.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit56842";

cognitect.transit.t_cognitect$transit56842.cljs$lang$ctorPrWriter = (function (this__47737__auto__,writer__47738__auto__,opt__47739__auto__){
return cljs.core._write.call(null,writer__47738__auto__,"cognitect.transit/t_cognitect$transit56842");
});

cognitect.transit.__GT_t_cognitect$transit56842 = (function cognitect$transit$__GT_t_cognitect$transit56842(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta56843){
return (new cognitect.transit.t_cognitect$transit56842(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta56843));
});

}

return (new cognitect.transit.t_cognitect$transit56842(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__47131__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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