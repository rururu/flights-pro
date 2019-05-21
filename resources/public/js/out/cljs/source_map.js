// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__18793){
var vec__18794 = p__18793;
var i = cljs.core.nth.call(null,vec__18794,(0),null);
var v = cljs.core.nth.call(null,vec__18794,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__18800 = seg;
var gcol = cljs.core.nth.call(null,vec__18800,(0),null);
var source = cljs.core.nth.call(null,vec__18800,(1),null);
var line = cljs.core.nth.call(null,vec__18800,(2),null);
var col = cljs.core.nth.call(null,vec__18800,(3),null);
var name = cljs.core.nth.call(null,vec__18800,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__18809 = seg;
var gcol = cljs.core.nth.call(null,vec__18809,(0),null);
var source = cljs.core.nth.call(null,vec__18809,(1),null);
var line = cljs.core.nth.call(null,vec__18809,(2),null);
var col = cljs.core.nth.call(null,vec__18809,(3),null);
var name = cljs.core.nth.call(null,vec__18809,(4),null);
var vec__18812 = relseg;
var rgcol = cljs.core.nth.call(null,vec__18812,(0),null);
var rsource = cljs.core.nth.call(null,vec__18812,(1),null);
var rline = cljs.core.nth.call(null,vec__18812,(2),null);
var rcol = cljs.core.nth.call(null,vec__18812,(3),null);
var rname = cljs.core.nth.call(null,vec__18812,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__10336__auto__ = source;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__10336__auto__ = line;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__10336__auto__ = col;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__10336__auto__ = name;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__18817 = segmap;
var map__18817__$1 = ((((!((map__18817 == null)))?((((map__18817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18817):map__18817);
var gcol = cljs.core.get.call(null,map__18817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__18817__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__18817__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__18817__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__18817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__18817,map__18817__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__18817,map__18817__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__18817,map__18817__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__18817,map__18817__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__18817,map__18817__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__18817,map__18817__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args18819 = [];
var len__11449__auto___18825 = arguments.length;
var i__11450__auto___18826 = (0);
while(true){
if((i__11450__auto___18826 < len__11449__auto___18825)){
args18819.push((arguments[i__11450__auto___18826]));

var G__18827 = (i__11450__auto___18826 + (1));
i__11450__auto___18826 = G__18827;
continue;
} else {
}
break;
}

var G__18821 = args18819.length;
switch (G__18821) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18819.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__18822 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__18829 = cljs.core.next.call(null,segs__$1);
var G__18830 = nrelseg;
var G__18831 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__18829;
relseg__$1 = G__18830;
result__$1 = G__18831;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__18822,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__18822,(1),null);
var G__18832 = (gline + (1));
var G__18833 = cljs.core.next.call(null,lines__$1);
var G__18834 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__18835 = result__$1;
gline = G__18832;
lines__$1 = G__18833;
relseg = G__18834;
result = G__18835;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__18839 = segmap;
var map__18839__$1 = ((((!((map__18839 == null)))?((((map__18839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18839):map__18839);
var gcol = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__18839,map__18839__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__18839,map__18839__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__18836_SHARP_){
return cljs.core.conj.call(null,p1__18836_SHARP_,d__$1);
});})(map__18839,map__18839__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__18839,map__18839__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args18841 = [];
var len__11449__auto___18847 = arguments.length;
var i__11450__auto___18848 = (0);
while(true){
if((i__11450__auto___18848 < len__11449__auto___18847)){
args18841.push((arguments[i__11450__auto___18848]));

var G__18849 = (i__11450__auto___18848 + (1));
i__11450__auto___18848 = G__18849;
continue;
} else {
}
break;
}

var G__18843 = args18841.length;
switch (G__18843) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18841.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__18844 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__18851 = cljs.core.next.call(null,segs__$1);
var G__18852 = nrelseg;
var G__18853 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__18851;
relseg__$1 = G__18852;
result__$1 = G__18853;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__18844,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__18844,(1),null);
var G__18854 = (gline + (1));
var G__18855 = cljs.core.next.call(null,lines__$1);
var G__18856 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__18857 = result__$1;
gline = G__18854;
lines__$1 = G__18855;
relseg = G__18856;
result = G__18857;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__18870){
var vec__18871 = p__18870;
var _ = cljs.core.nth.call(null,vec__18871,(0),null);
var source = cljs.core.nth.call(null,vec__18871,(1),null);
var line = cljs.core.nth.call(null,vec__18871,(2),null);
var col = cljs.core.nth.call(null,vec__18871,(3),null);
var name = cljs.core.nth.call(null,vec__18871,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__18874){
var vec__18875 = p__18874;
var gcol = cljs.core.nth.call(null,vec__18875,(0),null);
var sidx = cljs.core.nth.call(null,vec__18875,(1),null);
var line = cljs.core.nth.call(null,vec__18875,(2),null);
var col = cljs.core.nth.call(null,vec__18875,(3),null);
var name = cljs.core.nth.call(null,vec__18875,(4),null);
var seg = vec__18875;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__18875,gcol,sidx,line,col,name,seg,relseg){
return (function (p__18878){
var vec__18879 = p__18878;
var _ = cljs.core.nth.call(null,vec__18879,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18879,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__18879,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__18879,(3),null);
var lname = cljs.core.nth.call(null,vec__18879,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__10336__auto__ = name;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__18875,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__10336__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__18967 = cljs.core.seq.call(null,infos);
var chunk__18968 = null;
var count__18969 = (0);
var i__18970 = (0);
while(true){
if((i__18970 < count__18969)){
var info = cljs.core._nth.call(null,chunk__18968,i__18970);
var segv_19049 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19050 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19051 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19050 > (lc_19051 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__18967,chunk__18968,count__18969,i__18970,segv_19049,gline_19050,lc_19051,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19050 - (lc_19051 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19049], null));
});})(seq__18967,chunk__18968,count__18969,i__18970,segv_19049,gline_19050,lc_19051,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__18967,chunk__18968,count__18969,i__18970,segv_19049,gline_19050,lc_19051,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19050], null),cljs.core.conj,segv_19049);
});})(seq__18967,chunk__18968,count__18969,i__18970,segv_19049,gline_19050,lc_19051,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19052 = seq__18967;
var G__19053 = chunk__18968;
var G__19054 = count__18969;
var G__19055 = (i__18970 + (1));
seq__18967 = G__19052;
chunk__18968 = G__19053;
count__18969 = G__19054;
i__18970 = G__19055;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18967);
if(temp__4657__auto__){
var seq__18967__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18967__$1)){
var c__11155__auto__ = cljs.core.chunk_first.call(null,seq__18967__$1);
var G__19056 = cljs.core.chunk_rest.call(null,seq__18967__$1);
var G__19057 = c__11155__auto__;
var G__19058 = cljs.core.count.call(null,c__11155__auto__);
var G__19059 = (0);
seq__18967 = G__19056;
chunk__18968 = G__19057;
count__18969 = G__19058;
i__18970 = G__19059;
continue;
} else {
var info = cljs.core.first.call(null,seq__18967__$1);
var segv_19060 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19061 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19062 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19061 > (lc_19062 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__18967,chunk__18968,count__18969,i__18970,segv_19060,gline_19061,lc_19062,info,seq__18967__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19061 - (lc_19062 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19060], null));
});})(seq__18967,chunk__18968,count__18969,i__18970,segv_19060,gline_19061,lc_19062,info,seq__18967__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__18967,chunk__18968,count__18969,i__18970,segv_19060,gline_19061,lc_19062,info,seq__18967__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19061], null),cljs.core.conj,segv_19060);
});})(seq__18967,chunk__18968,count__18969,i__18970,segv_19060,gline_19061,lc_19062,info,seq__18967__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19063 = cljs.core.next.call(null,seq__18967__$1);
var G__19064 = null;
var G__19065 = (0);
var G__19066 = (0);
seq__18967 = G__19063;
chunk__18968 = G__19064;
count__18969 = G__19065;
i__18970 = G__19066;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__18971_19067 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__18972_19068 = null;
var count__18973_19069 = (0);
var i__18974_19070 = (0);
while(true){
if((i__18974_19070 < count__18973_19069)){
var vec__18975_19071 = cljs.core._nth.call(null,chunk__18972_19068,i__18974_19070);
var source_idx_19072 = cljs.core.nth.call(null,vec__18975_19071,(0),null);
var vec__18978_19073 = cljs.core.nth.call(null,vec__18975_19071,(1),null);
var __19074 = cljs.core.nth.call(null,vec__18978_19073,(0),null);
var lines_19075__$1 = cljs.core.nth.call(null,vec__18978_19073,(1),null);
var seq__18981_19076 = cljs.core.seq.call(null,lines_19075__$1);
var chunk__18982_19077 = null;
var count__18983_19078 = (0);
var i__18984_19079 = (0);
while(true){
if((i__18984_19079 < count__18983_19078)){
var vec__18985_19080 = cljs.core._nth.call(null,chunk__18982_19077,i__18984_19079);
var line_19081 = cljs.core.nth.call(null,vec__18985_19080,(0),null);
var cols_19082 = cljs.core.nth.call(null,vec__18985_19080,(1),null);
var seq__18988_19083 = cljs.core.seq.call(null,cols_19082);
var chunk__18989_19084 = null;
var count__18990_19085 = (0);
var i__18991_19086 = (0);
while(true){
if((i__18991_19086 < count__18990_19085)){
var vec__18992_19087 = cljs.core._nth.call(null,chunk__18989_19084,i__18991_19086);
var col_19088 = cljs.core.nth.call(null,vec__18992_19087,(0),null);
var infos_19089 = cljs.core.nth.call(null,vec__18992_19087,(1),null);
encode_cols.call(null,infos_19089,source_idx_19072,line_19081,col_19088);

var G__19090 = seq__18988_19083;
var G__19091 = chunk__18989_19084;
var G__19092 = count__18990_19085;
var G__19093 = (i__18991_19086 + (1));
seq__18988_19083 = G__19090;
chunk__18989_19084 = G__19091;
count__18990_19085 = G__19092;
i__18991_19086 = G__19093;
continue;
} else {
var temp__4657__auto___19094 = cljs.core.seq.call(null,seq__18988_19083);
if(temp__4657__auto___19094){
var seq__18988_19095__$1 = temp__4657__auto___19094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18988_19095__$1)){
var c__11155__auto___19096 = cljs.core.chunk_first.call(null,seq__18988_19095__$1);
var G__19097 = cljs.core.chunk_rest.call(null,seq__18988_19095__$1);
var G__19098 = c__11155__auto___19096;
var G__19099 = cljs.core.count.call(null,c__11155__auto___19096);
var G__19100 = (0);
seq__18988_19083 = G__19097;
chunk__18989_19084 = G__19098;
count__18990_19085 = G__19099;
i__18991_19086 = G__19100;
continue;
} else {
var vec__18995_19101 = cljs.core.first.call(null,seq__18988_19095__$1);
var col_19102 = cljs.core.nth.call(null,vec__18995_19101,(0),null);
var infos_19103 = cljs.core.nth.call(null,vec__18995_19101,(1),null);
encode_cols.call(null,infos_19103,source_idx_19072,line_19081,col_19102);

var G__19104 = cljs.core.next.call(null,seq__18988_19095__$1);
var G__19105 = null;
var G__19106 = (0);
var G__19107 = (0);
seq__18988_19083 = G__19104;
chunk__18989_19084 = G__19105;
count__18990_19085 = G__19106;
i__18991_19086 = G__19107;
continue;
}
} else {
}
}
break;
}

var G__19108 = seq__18981_19076;
var G__19109 = chunk__18982_19077;
var G__19110 = count__18983_19078;
var G__19111 = (i__18984_19079 + (1));
seq__18981_19076 = G__19108;
chunk__18982_19077 = G__19109;
count__18983_19078 = G__19110;
i__18984_19079 = G__19111;
continue;
} else {
var temp__4657__auto___19112 = cljs.core.seq.call(null,seq__18981_19076);
if(temp__4657__auto___19112){
var seq__18981_19113__$1 = temp__4657__auto___19112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18981_19113__$1)){
var c__11155__auto___19114 = cljs.core.chunk_first.call(null,seq__18981_19113__$1);
var G__19115 = cljs.core.chunk_rest.call(null,seq__18981_19113__$1);
var G__19116 = c__11155__auto___19114;
var G__19117 = cljs.core.count.call(null,c__11155__auto___19114);
var G__19118 = (0);
seq__18981_19076 = G__19115;
chunk__18982_19077 = G__19116;
count__18983_19078 = G__19117;
i__18984_19079 = G__19118;
continue;
} else {
var vec__18998_19119 = cljs.core.first.call(null,seq__18981_19113__$1);
var line_19120 = cljs.core.nth.call(null,vec__18998_19119,(0),null);
var cols_19121 = cljs.core.nth.call(null,vec__18998_19119,(1),null);
var seq__19001_19122 = cljs.core.seq.call(null,cols_19121);
var chunk__19002_19123 = null;
var count__19003_19124 = (0);
var i__19004_19125 = (0);
while(true){
if((i__19004_19125 < count__19003_19124)){
var vec__19005_19126 = cljs.core._nth.call(null,chunk__19002_19123,i__19004_19125);
var col_19127 = cljs.core.nth.call(null,vec__19005_19126,(0),null);
var infos_19128 = cljs.core.nth.call(null,vec__19005_19126,(1),null);
encode_cols.call(null,infos_19128,source_idx_19072,line_19120,col_19127);

var G__19129 = seq__19001_19122;
var G__19130 = chunk__19002_19123;
var G__19131 = count__19003_19124;
var G__19132 = (i__19004_19125 + (1));
seq__19001_19122 = G__19129;
chunk__19002_19123 = G__19130;
count__19003_19124 = G__19131;
i__19004_19125 = G__19132;
continue;
} else {
var temp__4657__auto___19133__$1 = cljs.core.seq.call(null,seq__19001_19122);
if(temp__4657__auto___19133__$1){
var seq__19001_19134__$1 = temp__4657__auto___19133__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19001_19134__$1)){
var c__11155__auto___19135 = cljs.core.chunk_first.call(null,seq__19001_19134__$1);
var G__19136 = cljs.core.chunk_rest.call(null,seq__19001_19134__$1);
var G__19137 = c__11155__auto___19135;
var G__19138 = cljs.core.count.call(null,c__11155__auto___19135);
var G__19139 = (0);
seq__19001_19122 = G__19136;
chunk__19002_19123 = G__19137;
count__19003_19124 = G__19138;
i__19004_19125 = G__19139;
continue;
} else {
var vec__19008_19140 = cljs.core.first.call(null,seq__19001_19134__$1);
var col_19141 = cljs.core.nth.call(null,vec__19008_19140,(0),null);
var infos_19142 = cljs.core.nth.call(null,vec__19008_19140,(1),null);
encode_cols.call(null,infos_19142,source_idx_19072,line_19120,col_19141);

var G__19143 = cljs.core.next.call(null,seq__19001_19134__$1);
var G__19144 = null;
var G__19145 = (0);
var G__19146 = (0);
seq__19001_19122 = G__19143;
chunk__19002_19123 = G__19144;
count__19003_19124 = G__19145;
i__19004_19125 = G__19146;
continue;
}
} else {
}
}
break;
}

var G__19147 = cljs.core.next.call(null,seq__18981_19113__$1);
var G__19148 = null;
var G__19149 = (0);
var G__19150 = (0);
seq__18981_19076 = G__19147;
chunk__18982_19077 = G__19148;
count__18983_19078 = G__19149;
i__18984_19079 = G__19150;
continue;
}
} else {
}
}
break;
}

var G__19151 = seq__18971_19067;
var G__19152 = chunk__18972_19068;
var G__19153 = count__18973_19069;
var G__19154 = (i__18974_19070 + (1));
seq__18971_19067 = G__19151;
chunk__18972_19068 = G__19152;
count__18973_19069 = G__19153;
i__18974_19070 = G__19154;
continue;
} else {
var temp__4657__auto___19155 = cljs.core.seq.call(null,seq__18971_19067);
if(temp__4657__auto___19155){
var seq__18971_19156__$1 = temp__4657__auto___19155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18971_19156__$1)){
var c__11155__auto___19157 = cljs.core.chunk_first.call(null,seq__18971_19156__$1);
var G__19158 = cljs.core.chunk_rest.call(null,seq__18971_19156__$1);
var G__19159 = c__11155__auto___19157;
var G__19160 = cljs.core.count.call(null,c__11155__auto___19157);
var G__19161 = (0);
seq__18971_19067 = G__19158;
chunk__18972_19068 = G__19159;
count__18973_19069 = G__19160;
i__18974_19070 = G__19161;
continue;
} else {
var vec__19011_19162 = cljs.core.first.call(null,seq__18971_19156__$1);
var source_idx_19163 = cljs.core.nth.call(null,vec__19011_19162,(0),null);
var vec__19014_19164 = cljs.core.nth.call(null,vec__19011_19162,(1),null);
var __19165 = cljs.core.nth.call(null,vec__19014_19164,(0),null);
var lines_19166__$1 = cljs.core.nth.call(null,vec__19014_19164,(1),null);
var seq__19017_19167 = cljs.core.seq.call(null,lines_19166__$1);
var chunk__19018_19168 = null;
var count__19019_19169 = (0);
var i__19020_19170 = (0);
while(true){
if((i__19020_19170 < count__19019_19169)){
var vec__19021_19171 = cljs.core._nth.call(null,chunk__19018_19168,i__19020_19170);
var line_19172 = cljs.core.nth.call(null,vec__19021_19171,(0),null);
var cols_19173 = cljs.core.nth.call(null,vec__19021_19171,(1),null);
var seq__19024_19174 = cljs.core.seq.call(null,cols_19173);
var chunk__19025_19175 = null;
var count__19026_19176 = (0);
var i__19027_19177 = (0);
while(true){
if((i__19027_19177 < count__19026_19176)){
var vec__19028_19178 = cljs.core._nth.call(null,chunk__19025_19175,i__19027_19177);
var col_19179 = cljs.core.nth.call(null,vec__19028_19178,(0),null);
var infos_19180 = cljs.core.nth.call(null,vec__19028_19178,(1),null);
encode_cols.call(null,infos_19180,source_idx_19163,line_19172,col_19179);

var G__19181 = seq__19024_19174;
var G__19182 = chunk__19025_19175;
var G__19183 = count__19026_19176;
var G__19184 = (i__19027_19177 + (1));
seq__19024_19174 = G__19181;
chunk__19025_19175 = G__19182;
count__19026_19176 = G__19183;
i__19027_19177 = G__19184;
continue;
} else {
var temp__4657__auto___19185__$1 = cljs.core.seq.call(null,seq__19024_19174);
if(temp__4657__auto___19185__$1){
var seq__19024_19186__$1 = temp__4657__auto___19185__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19024_19186__$1)){
var c__11155__auto___19187 = cljs.core.chunk_first.call(null,seq__19024_19186__$1);
var G__19188 = cljs.core.chunk_rest.call(null,seq__19024_19186__$1);
var G__19189 = c__11155__auto___19187;
var G__19190 = cljs.core.count.call(null,c__11155__auto___19187);
var G__19191 = (0);
seq__19024_19174 = G__19188;
chunk__19025_19175 = G__19189;
count__19026_19176 = G__19190;
i__19027_19177 = G__19191;
continue;
} else {
var vec__19031_19192 = cljs.core.first.call(null,seq__19024_19186__$1);
var col_19193 = cljs.core.nth.call(null,vec__19031_19192,(0),null);
var infos_19194 = cljs.core.nth.call(null,vec__19031_19192,(1),null);
encode_cols.call(null,infos_19194,source_idx_19163,line_19172,col_19193);

var G__19195 = cljs.core.next.call(null,seq__19024_19186__$1);
var G__19196 = null;
var G__19197 = (0);
var G__19198 = (0);
seq__19024_19174 = G__19195;
chunk__19025_19175 = G__19196;
count__19026_19176 = G__19197;
i__19027_19177 = G__19198;
continue;
}
} else {
}
}
break;
}

var G__19199 = seq__19017_19167;
var G__19200 = chunk__19018_19168;
var G__19201 = count__19019_19169;
var G__19202 = (i__19020_19170 + (1));
seq__19017_19167 = G__19199;
chunk__19018_19168 = G__19200;
count__19019_19169 = G__19201;
i__19020_19170 = G__19202;
continue;
} else {
var temp__4657__auto___19203__$1 = cljs.core.seq.call(null,seq__19017_19167);
if(temp__4657__auto___19203__$1){
var seq__19017_19204__$1 = temp__4657__auto___19203__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19017_19204__$1)){
var c__11155__auto___19205 = cljs.core.chunk_first.call(null,seq__19017_19204__$1);
var G__19206 = cljs.core.chunk_rest.call(null,seq__19017_19204__$1);
var G__19207 = c__11155__auto___19205;
var G__19208 = cljs.core.count.call(null,c__11155__auto___19205);
var G__19209 = (0);
seq__19017_19167 = G__19206;
chunk__19018_19168 = G__19207;
count__19019_19169 = G__19208;
i__19020_19170 = G__19209;
continue;
} else {
var vec__19034_19210 = cljs.core.first.call(null,seq__19017_19204__$1);
var line_19211 = cljs.core.nth.call(null,vec__19034_19210,(0),null);
var cols_19212 = cljs.core.nth.call(null,vec__19034_19210,(1),null);
var seq__19037_19213 = cljs.core.seq.call(null,cols_19212);
var chunk__19038_19214 = null;
var count__19039_19215 = (0);
var i__19040_19216 = (0);
while(true){
if((i__19040_19216 < count__19039_19215)){
var vec__19041_19217 = cljs.core._nth.call(null,chunk__19038_19214,i__19040_19216);
var col_19218 = cljs.core.nth.call(null,vec__19041_19217,(0),null);
var infos_19219 = cljs.core.nth.call(null,vec__19041_19217,(1),null);
encode_cols.call(null,infos_19219,source_idx_19163,line_19211,col_19218);

var G__19220 = seq__19037_19213;
var G__19221 = chunk__19038_19214;
var G__19222 = count__19039_19215;
var G__19223 = (i__19040_19216 + (1));
seq__19037_19213 = G__19220;
chunk__19038_19214 = G__19221;
count__19039_19215 = G__19222;
i__19040_19216 = G__19223;
continue;
} else {
var temp__4657__auto___19224__$2 = cljs.core.seq.call(null,seq__19037_19213);
if(temp__4657__auto___19224__$2){
var seq__19037_19225__$1 = temp__4657__auto___19224__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19037_19225__$1)){
var c__11155__auto___19226 = cljs.core.chunk_first.call(null,seq__19037_19225__$1);
var G__19227 = cljs.core.chunk_rest.call(null,seq__19037_19225__$1);
var G__19228 = c__11155__auto___19226;
var G__19229 = cljs.core.count.call(null,c__11155__auto___19226);
var G__19230 = (0);
seq__19037_19213 = G__19227;
chunk__19038_19214 = G__19228;
count__19039_19215 = G__19229;
i__19040_19216 = G__19230;
continue;
} else {
var vec__19044_19231 = cljs.core.first.call(null,seq__19037_19225__$1);
var col_19232 = cljs.core.nth.call(null,vec__19044_19231,(0),null);
var infos_19233 = cljs.core.nth.call(null,vec__19044_19231,(1),null);
encode_cols.call(null,infos_19233,source_idx_19163,line_19211,col_19232);

var G__19234 = cljs.core.next.call(null,seq__19037_19225__$1);
var G__19235 = null;
var G__19236 = (0);
var G__19237 = (0);
seq__19037_19213 = G__19234;
chunk__19038_19214 = G__19235;
count__19039_19215 = G__19236;
i__19040_19216 = G__19237;
continue;
}
} else {
}
}
break;
}

var G__19238 = cljs.core.next.call(null,seq__19017_19204__$1);
var G__19239 = null;
var G__19240 = (0);
var G__19241 = (0);
seq__19017_19167 = G__19238;
chunk__19018_19168 = G__19239;
count__19019_19169 = G__19240;
i__19020_19170 = G__19241;
continue;
}
} else {
}
}
break;
}

var G__19242 = cljs.core.next.call(null,seq__18971_19156__$1);
var G__19243 = null;
var G__19244 = (0);
var G__19245 = (0);
seq__18971_19067 = G__19242;
chunk__18972_19068 = G__19243;
count__18973_19069 = G__19244;
i__18974_19070 = G__19245;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__19047 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__18882_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18882_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__18883_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__18883_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__18884_SHARP_){
return clojure.string.join.call(null,",",p1__18884_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__19048 = G__19047;
goog.object.set(G__19048,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__19048;
} else {
return G__19047;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__19255 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__19255,(0),null);
var col_map = cljs.core.nth.call(null,vec__19255,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__19258 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__19258,(0),null);
var infos = cljs.core.nth.call(null,vec__19258,(1),null);
var G__19264 = cljs.core.next.call(null,col_map_seq);
var G__19265 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__19258,col,infos,vec__19255,line,col_map){
return (function (v,p__19261){
var map__19262 = p__19261;
var map__19262__$1 = ((((!((map__19262 == null)))?((((map__19262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19262):map__19262);
var gline = cljs.core.get.call(null,map__19262__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__19262__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__19258,col,infos,vec__19255,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__19264;
new_cols = G__19265;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__19266 = cljs.core.next.call(null,line_map_seq);
var G__19267 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__19266;
new_lines = G__19267;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__19330_19392 = cljs.core.seq.call(null,reverse_map);
var chunk__19331_19393 = null;
var count__19332_19394 = (0);
var i__19333_19395 = (0);
while(true){
if((i__19333_19395 < count__19332_19394)){
var vec__19334_19396 = cljs.core._nth.call(null,chunk__19331_19393,i__19333_19395);
var line_19397 = cljs.core.nth.call(null,vec__19334_19396,(0),null);
var columns_19398 = cljs.core.nth.call(null,vec__19334_19396,(1),null);
var seq__19337_19399 = cljs.core.seq.call(null,columns_19398);
var chunk__19338_19400 = null;
var count__19339_19401 = (0);
var i__19340_19402 = (0);
while(true){
if((i__19340_19402 < count__19339_19401)){
var vec__19341_19403 = cljs.core._nth.call(null,chunk__19338_19400,i__19340_19402);
var column_19404 = cljs.core.nth.call(null,vec__19341_19403,(0),null);
var column_info_19405 = cljs.core.nth.call(null,vec__19341_19403,(1),null);
var seq__19344_19406 = cljs.core.seq.call(null,column_info_19405);
var chunk__19345_19407 = null;
var count__19346_19408 = (0);
var i__19347_19409 = (0);
while(true){
if((i__19347_19409 < count__19346_19408)){
var map__19348_19410 = cljs.core._nth.call(null,chunk__19345_19407,i__19347_19409);
var map__19348_19411__$1 = ((((!((map__19348_19410 == null)))?((((map__19348_19410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19348_19410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19348_19410):map__19348_19410);
var gline_19412 = cljs.core.get.call(null,map__19348_19411__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19413 = cljs.core.get.call(null,map__19348_19411__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19414 = cljs.core.get.call(null,map__19348_19411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19412], null),cljs.core.fnil.call(null,((function (seq__19344_19406,chunk__19345_19407,count__19346_19408,i__19347_19409,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19348_19410,map__19348_19411__$1,gline_19412,gcol_19413,name_19414,vec__19341_19403,column_19404,column_info_19405,vec__19334_19396,line_19397,columns_19398,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19413], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19397,new cljs.core.Keyword(null,"col","col",-1959363084),column_19404,new cljs.core.Keyword(null,"name","name",1843675177),name_19414], null));
});})(seq__19344_19406,chunk__19345_19407,count__19346_19408,i__19347_19409,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19348_19410,map__19348_19411__$1,gline_19412,gcol_19413,name_19414,vec__19341_19403,column_19404,column_info_19405,vec__19334_19396,line_19397,columns_19398,inverted))
,cljs.core.sorted_map.call(null)));

var G__19415 = seq__19344_19406;
var G__19416 = chunk__19345_19407;
var G__19417 = count__19346_19408;
var G__19418 = (i__19347_19409 + (1));
seq__19344_19406 = G__19415;
chunk__19345_19407 = G__19416;
count__19346_19408 = G__19417;
i__19347_19409 = G__19418;
continue;
} else {
var temp__4657__auto___19419 = cljs.core.seq.call(null,seq__19344_19406);
if(temp__4657__auto___19419){
var seq__19344_19420__$1 = temp__4657__auto___19419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19344_19420__$1)){
var c__11155__auto___19421 = cljs.core.chunk_first.call(null,seq__19344_19420__$1);
var G__19422 = cljs.core.chunk_rest.call(null,seq__19344_19420__$1);
var G__19423 = c__11155__auto___19421;
var G__19424 = cljs.core.count.call(null,c__11155__auto___19421);
var G__19425 = (0);
seq__19344_19406 = G__19422;
chunk__19345_19407 = G__19423;
count__19346_19408 = G__19424;
i__19347_19409 = G__19425;
continue;
} else {
var map__19350_19426 = cljs.core.first.call(null,seq__19344_19420__$1);
var map__19350_19427__$1 = ((((!((map__19350_19426 == null)))?((((map__19350_19426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19350_19426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19350_19426):map__19350_19426);
var gline_19428 = cljs.core.get.call(null,map__19350_19427__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19429 = cljs.core.get.call(null,map__19350_19427__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19430 = cljs.core.get.call(null,map__19350_19427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19428], null),cljs.core.fnil.call(null,((function (seq__19344_19406,chunk__19345_19407,count__19346_19408,i__19347_19409,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19350_19426,map__19350_19427__$1,gline_19428,gcol_19429,name_19430,seq__19344_19420__$1,temp__4657__auto___19419,vec__19341_19403,column_19404,column_info_19405,vec__19334_19396,line_19397,columns_19398,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19429], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19397,new cljs.core.Keyword(null,"col","col",-1959363084),column_19404,new cljs.core.Keyword(null,"name","name",1843675177),name_19430], null));
});})(seq__19344_19406,chunk__19345_19407,count__19346_19408,i__19347_19409,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19350_19426,map__19350_19427__$1,gline_19428,gcol_19429,name_19430,seq__19344_19420__$1,temp__4657__auto___19419,vec__19341_19403,column_19404,column_info_19405,vec__19334_19396,line_19397,columns_19398,inverted))
,cljs.core.sorted_map.call(null)));

var G__19431 = cljs.core.next.call(null,seq__19344_19420__$1);
var G__19432 = null;
var G__19433 = (0);
var G__19434 = (0);
seq__19344_19406 = G__19431;
chunk__19345_19407 = G__19432;
count__19346_19408 = G__19433;
i__19347_19409 = G__19434;
continue;
}
} else {
}
}
break;
}

var G__19435 = seq__19337_19399;
var G__19436 = chunk__19338_19400;
var G__19437 = count__19339_19401;
var G__19438 = (i__19340_19402 + (1));
seq__19337_19399 = G__19435;
chunk__19338_19400 = G__19436;
count__19339_19401 = G__19437;
i__19340_19402 = G__19438;
continue;
} else {
var temp__4657__auto___19439 = cljs.core.seq.call(null,seq__19337_19399);
if(temp__4657__auto___19439){
var seq__19337_19440__$1 = temp__4657__auto___19439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19337_19440__$1)){
var c__11155__auto___19441 = cljs.core.chunk_first.call(null,seq__19337_19440__$1);
var G__19442 = cljs.core.chunk_rest.call(null,seq__19337_19440__$1);
var G__19443 = c__11155__auto___19441;
var G__19444 = cljs.core.count.call(null,c__11155__auto___19441);
var G__19445 = (0);
seq__19337_19399 = G__19442;
chunk__19338_19400 = G__19443;
count__19339_19401 = G__19444;
i__19340_19402 = G__19445;
continue;
} else {
var vec__19352_19446 = cljs.core.first.call(null,seq__19337_19440__$1);
var column_19447 = cljs.core.nth.call(null,vec__19352_19446,(0),null);
var column_info_19448 = cljs.core.nth.call(null,vec__19352_19446,(1),null);
var seq__19355_19449 = cljs.core.seq.call(null,column_info_19448);
var chunk__19356_19450 = null;
var count__19357_19451 = (0);
var i__19358_19452 = (0);
while(true){
if((i__19358_19452 < count__19357_19451)){
var map__19359_19453 = cljs.core._nth.call(null,chunk__19356_19450,i__19358_19452);
var map__19359_19454__$1 = ((((!((map__19359_19453 == null)))?((((map__19359_19453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19359_19453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19359_19453):map__19359_19453);
var gline_19455 = cljs.core.get.call(null,map__19359_19454__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19456 = cljs.core.get.call(null,map__19359_19454__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19457 = cljs.core.get.call(null,map__19359_19454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19455], null),cljs.core.fnil.call(null,((function (seq__19355_19449,chunk__19356_19450,count__19357_19451,i__19358_19452,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19359_19453,map__19359_19454__$1,gline_19455,gcol_19456,name_19457,vec__19352_19446,column_19447,column_info_19448,seq__19337_19440__$1,temp__4657__auto___19439,vec__19334_19396,line_19397,columns_19398,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19456], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19397,new cljs.core.Keyword(null,"col","col",-1959363084),column_19447,new cljs.core.Keyword(null,"name","name",1843675177),name_19457], null));
});})(seq__19355_19449,chunk__19356_19450,count__19357_19451,i__19358_19452,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19359_19453,map__19359_19454__$1,gline_19455,gcol_19456,name_19457,vec__19352_19446,column_19447,column_info_19448,seq__19337_19440__$1,temp__4657__auto___19439,vec__19334_19396,line_19397,columns_19398,inverted))
,cljs.core.sorted_map.call(null)));

var G__19458 = seq__19355_19449;
var G__19459 = chunk__19356_19450;
var G__19460 = count__19357_19451;
var G__19461 = (i__19358_19452 + (1));
seq__19355_19449 = G__19458;
chunk__19356_19450 = G__19459;
count__19357_19451 = G__19460;
i__19358_19452 = G__19461;
continue;
} else {
var temp__4657__auto___19462__$1 = cljs.core.seq.call(null,seq__19355_19449);
if(temp__4657__auto___19462__$1){
var seq__19355_19463__$1 = temp__4657__auto___19462__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19355_19463__$1)){
var c__11155__auto___19464 = cljs.core.chunk_first.call(null,seq__19355_19463__$1);
var G__19465 = cljs.core.chunk_rest.call(null,seq__19355_19463__$1);
var G__19466 = c__11155__auto___19464;
var G__19467 = cljs.core.count.call(null,c__11155__auto___19464);
var G__19468 = (0);
seq__19355_19449 = G__19465;
chunk__19356_19450 = G__19466;
count__19357_19451 = G__19467;
i__19358_19452 = G__19468;
continue;
} else {
var map__19361_19469 = cljs.core.first.call(null,seq__19355_19463__$1);
var map__19361_19470__$1 = ((((!((map__19361_19469 == null)))?((((map__19361_19469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19361_19469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19361_19469):map__19361_19469);
var gline_19471 = cljs.core.get.call(null,map__19361_19470__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19472 = cljs.core.get.call(null,map__19361_19470__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19473 = cljs.core.get.call(null,map__19361_19470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19471], null),cljs.core.fnil.call(null,((function (seq__19355_19449,chunk__19356_19450,count__19357_19451,i__19358_19452,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19361_19469,map__19361_19470__$1,gline_19471,gcol_19472,name_19473,seq__19355_19463__$1,temp__4657__auto___19462__$1,vec__19352_19446,column_19447,column_info_19448,seq__19337_19440__$1,temp__4657__auto___19439,vec__19334_19396,line_19397,columns_19398,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19472], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19397,new cljs.core.Keyword(null,"col","col",-1959363084),column_19447,new cljs.core.Keyword(null,"name","name",1843675177),name_19473], null));
});})(seq__19355_19449,chunk__19356_19450,count__19357_19451,i__19358_19452,seq__19337_19399,chunk__19338_19400,count__19339_19401,i__19340_19402,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19361_19469,map__19361_19470__$1,gline_19471,gcol_19472,name_19473,seq__19355_19463__$1,temp__4657__auto___19462__$1,vec__19352_19446,column_19447,column_info_19448,seq__19337_19440__$1,temp__4657__auto___19439,vec__19334_19396,line_19397,columns_19398,inverted))
,cljs.core.sorted_map.call(null)));

var G__19474 = cljs.core.next.call(null,seq__19355_19463__$1);
var G__19475 = null;
var G__19476 = (0);
var G__19477 = (0);
seq__19355_19449 = G__19474;
chunk__19356_19450 = G__19475;
count__19357_19451 = G__19476;
i__19358_19452 = G__19477;
continue;
}
} else {
}
}
break;
}

var G__19478 = cljs.core.next.call(null,seq__19337_19440__$1);
var G__19479 = null;
var G__19480 = (0);
var G__19481 = (0);
seq__19337_19399 = G__19478;
chunk__19338_19400 = G__19479;
count__19339_19401 = G__19480;
i__19340_19402 = G__19481;
continue;
}
} else {
}
}
break;
}

var G__19482 = seq__19330_19392;
var G__19483 = chunk__19331_19393;
var G__19484 = count__19332_19394;
var G__19485 = (i__19333_19395 + (1));
seq__19330_19392 = G__19482;
chunk__19331_19393 = G__19483;
count__19332_19394 = G__19484;
i__19333_19395 = G__19485;
continue;
} else {
var temp__4657__auto___19486 = cljs.core.seq.call(null,seq__19330_19392);
if(temp__4657__auto___19486){
var seq__19330_19487__$1 = temp__4657__auto___19486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19330_19487__$1)){
var c__11155__auto___19488 = cljs.core.chunk_first.call(null,seq__19330_19487__$1);
var G__19489 = cljs.core.chunk_rest.call(null,seq__19330_19487__$1);
var G__19490 = c__11155__auto___19488;
var G__19491 = cljs.core.count.call(null,c__11155__auto___19488);
var G__19492 = (0);
seq__19330_19392 = G__19489;
chunk__19331_19393 = G__19490;
count__19332_19394 = G__19491;
i__19333_19395 = G__19492;
continue;
} else {
var vec__19363_19493 = cljs.core.first.call(null,seq__19330_19487__$1);
var line_19494 = cljs.core.nth.call(null,vec__19363_19493,(0),null);
var columns_19495 = cljs.core.nth.call(null,vec__19363_19493,(1),null);
var seq__19366_19496 = cljs.core.seq.call(null,columns_19495);
var chunk__19367_19497 = null;
var count__19368_19498 = (0);
var i__19369_19499 = (0);
while(true){
if((i__19369_19499 < count__19368_19498)){
var vec__19370_19500 = cljs.core._nth.call(null,chunk__19367_19497,i__19369_19499);
var column_19501 = cljs.core.nth.call(null,vec__19370_19500,(0),null);
var column_info_19502 = cljs.core.nth.call(null,vec__19370_19500,(1),null);
var seq__19373_19503 = cljs.core.seq.call(null,column_info_19502);
var chunk__19374_19504 = null;
var count__19375_19505 = (0);
var i__19376_19506 = (0);
while(true){
if((i__19376_19506 < count__19375_19505)){
var map__19377_19507 = cljs.core._nth.call(null,chunk__19374_19504,i__19376_19506);
var map__19377_19508__$1 = ((((!((map__19377_19507 == null)))?((((map__19377_19507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19377_19507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19377_19507):map__19377_19507);
var gline_19509 = cljs.core.get.call(null,map__19377_19508__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19510 = cljs.core.get.call(null,map__19377_19508__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19511 = cljs.core.get.call(null,map__19377_19508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19509], null),cljs.core.fnil.call(null,((function (seq__19373_19503,chunk__19374_19504,count__19375_19505,i__19376_19506,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19377_19507,map__19377_19508__$1,gline_19509,gcol_19510,name_19511,vec__19370_19500,column_19501,column_info_19502,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19510], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19494,new cljs.core.Keyword(null,"col","col",-1959363084),column_19501,new cljs.core.Keyword(null,"name","name",1843675177),name_19511], null));
});})(seq__19373_19503,chunk__19374_19504,count__19375_19505,i__19376_19506,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19377_19507,map__19377_19508__$1,gline_19509,gcol_19510,name_19511,vec__19370_19500,column_19501,column_info_19502,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted))
,cljs.core.sorted_map.call(null)));

var G__19512 = seq__19373_19503;
var G__19513 = chunk__19374_19504;
var G__19514 = count__19375_19505;
var G__19515 = (i__19376_19506 + (1));
seq__19373_19503 = G__19512;
chunk__19374_19504 = G__19513;
count__19375_19505 = G__19514;
i__19376_19506 = G__19515;
continue;
} else {
var temp__4657__auto___19516__$1 = cljs.core.seq.call(null,seq__19373_19503);
if(temp__4657__auto___19516__$1){
var seq__19373_19517__$1 = temp__4657__auto___19516__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19373_19517__$1)){
var c__11155__auto___19518 = cljs.core.chunk_first.call(null,seq__19373_19517__$1);
var G__19519 = cljs.core.chunk_rest.call(null,seq__19373_19517__$1);
var G__19520 = c__11155__auto___19518;
var G__19521 = cljs.core.count.call(null,c__11155__auto___19518);
var G__19522 = (0);
seq__19373_19503 = G__19519;
chunk__19374_19504 = G__19520;
count__19375_19505 = G__19521;
i__19376_19506 = G__19522;
continue;
} else {
var map__19379_19523 = cljs.core.first.call(null,seq__19373_19517__$1);
var map__19379_19524__$1 = ((((!((map__19379_19523 == null)))?((((map__19379_19523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19379_19523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19379_19523):map__19379_19523);
var gline_19525 = cljs.core.get.call(null,map__19379_19524__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19526 = cljs.core.get.call(null,map__19379_19524__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19527 = cljs.core.get.call(null,map__19379_19524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19525], null),cljs.core.fnil.call(null,((function (seq__19373_19503,chunk__19374_19504,count__19375_19505,i__19376_19506,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19379_19523,map__19379_19524__$1,gline_19525,gcol_19526,name_19527,seq__19373_19517__$1,temp__4657__auto___19516__$1,vec__19370_19500,column_19501,column_info_19502,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19526], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19494,new cljs.core.Keyword(null,"col","col",-1959363084),column_19501,new cljs.core.Keyword(null,"name","name",1843675177),name_19527], null));
});})(seq__19373_19503,chunk__19374_19504,count__19375_19505,i__19376_19506,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19379_19523,map__19379_19524__$1,gline_19525,gcol_19526,name_19527,seq__19373_19517__$1,temp__4657__auto___19516__$1,vec__19370_19500,column_19501,column_info_19502,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted))
,cljs.core.sorted_map.call(null)));

var G__19528 = cljs.core.next.call(null,seq__19373_19517__$1);
var G__19529 = null;
var G__19530 = (0);
var G__19531 = (0);
seq__19373_19503 = G__19528;
chunk__19374_19504 = G__19529;
count__19375_19505 = G__19530;
i__19376_19506 = G__19531;
continue;
}
} else {
}
}
break;
}

var G__19532 = seq__19366_19496;
var G__19533 = chunk__19367_19497;
var G__19534 = count__19368_19498;
var G__19535 = (i__19369_19499 + (1));
seq__19366_19496 = G__19532;
chunk__19367_19497 = G__19533;
count__19368_19498 = G__19534;
i__19369_19499 = G__19535;
continue;
} else {
var temp__4657__auto___19536__$1 = cljs.core.seq.call(null,seq__19366_19496);
if(temp__4657__auto___19536__$1){
var seq__19366_19537__$1 = temp__4657__auto___19536__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19366_19537__$1)){
var c__11155__auto___19538 = cljs.core.chunk_first.call(null,seq__19366_19537__$1);
var G__19539 = cljs.core.chunk_rest.call(null,seq__19366_19537__$1);
var G__19540 = c__11155__auto___19538;
var G__19541 = cljs.core.count.call(null,c__11155__auto___19538);
var G__19542 = (0);
seq__19366_19496 = G__19539;
chunk__19367_19497 = G__19540;
count__19368_19498 = G__19541;
i__19369_19499 = G__19542;
continue;
} else {
var vec__19381_19543 = cljs.core.first.call(null,seq__19366_19537__$1);
var column_19544 = cljs.core.nth.call(null,vec__19381_19543,(0),null);
var column_info_19545 = cljs.core.nth.call(null,vec__19381_19543,(1),null);
var seq__19384_19546 = cljs.core.seq.call(null,column_info_19545);
var chunk__19385_19547 = null;
var count__19386_19548 = (0);
var i__19387_19549 = (0);
while(true){
if((i__19387_19549 < count__19386_19548)){
var map__19388_19550 = cljs.core._nth.call(null,chunk__19385_19547,i__19387_19549);
var map__19388_19551__$1 = ((((!((map__19388_19550 == null)))?((((map__19388_19550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19388_19550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19388_19550):map__19388_19550);
var gline_19552 = cljs.core.get.call(null,map__19388_19551__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19553 = cljs.core.get.call(null,map__19388_19551__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19554 = cljs.core.get.call(null,map__19388_19551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19552], null),cljs.core.fnil.call(null,((function (seq__19384_19546,chunk__19385_19547,count__19386_19548,i__19387_19549,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19388_19550,map__19388_19551__$1,gline_19552,gcol_19553,name_19554,vec__19381_19543,column_19544,column_info_19545,seq__19366_19537__$1,temp__4657__auto___19536__$1,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19553], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19494,new cljs.core.Keyword(null,"col","col",-1959363084),column_19544,new cljs.core.Keyword(null,"name","name",1843675177),name_19554], null));
});})(seq__19384_19546,chunk__19385_19547,count__19386_19548,i__19387_19549,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19388_19550,map__19388_19551__$1,gline_19552,gcol_19553,name_19554,vec__19381_19543,column_19544,column_info_19545,seq__19366_19537__$1,temp__4657__auto___19536__$1,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted))
,cljs.core.sorted_map.call(null)));

var G__19555 = seq__19384_19546;
var G__19556 = chunk__19385_19547;
var G__19557 = count__19386_19548;
var G__19558 = (i__19387_19549 + (1));
seq__19384_19546 = G__19555;
chunk__19385_19547 = G__19556;
count__19386_19548 = G__19557;
i__19387_19549 = G__19558;
continue;
} else {
var temp__4657__auto___19559__$2 = cljs.core.seq.call(null,seq__19384_19546);
if(temp__4657__auto___19559__$2){
var seq__19384_19560__$1 = temp__4657__auto___19559__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19384_19560__$1)){
var c__11155__auto___19561 = cljs.core.chunk_first.call(null,seq__19384_19560__$1);
var G__19562 = cljs.core.chunk_rest.call(null,seq__19384_19560__$1);
var G__19563 = c__11155__auto___19561;
var G__19564 = cljs.core.count.call(null,c__11155__auto___19561);
var G__19565 = (0);
seq__19384_19546 = G__19562;
chunk__19385_19547 = G__19563;
count__19386_19548 = G__19564;
i__19387_19549 = G__19565;
continue;
} else {
var map__19390_19566 = cljs.core.first.call(null,seq__19384_19560__$1);
var map__19390_19567__$1 = ((((!((map__19390_19566 == null)))?((((map__19390_19566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19390_19566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19390_19566):map__19390_19566);
var gline_19568 = cljs.core.get.call(null,map__19390_19567__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19569 = cljs.core.get.call(null,map__19390_19567__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19570 = cljs.core.get.call(null,map__19390_19567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19568], null),cljs.core.fnil.call(null,((function (seq__19384_19546,chunk__19385_19547,count__19386_19548,i__19387_19549,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19390_19566,map__19390_19567__$1,gline_19568,gcol_19569,name_19570,seq__19384_19560__$1,temp__4657__auto___19559__$2,vec__19381_19543,column_19544,column_info_19545,seq__19366_19537__$1,temp__4657__auto___19536__$1,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19569], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19494,new cljs.core.Keyword(null,"col","col",-1959363084),column_19544,new cljs.core.Keyword(null,"name","name",1843675177),name_19570], null));
});})(seq__19384_19546,chunk__19385_19547,count__19386_19548,i__19387_19549,seq__19366_19496,chunk__19367_19497,count__19368_19498,i__19369_19499,seq__19330_19392,chunk__19331_19393,count__19332_19394,i__19333_19395,map__19390_19566,map__19390_19567__$1,gline_19568,gcol_19569,name_19570,seq__19384_19560__$1,temp__4657__auto___19559__$2,vec__19381_19543,column_19544,column_info_19545,seq__19366_19537__$1,temp__4657__auto___19536__$1,vec__19363_19493,line_19494,columns_19495,seq__19330_19487__$1,temp__4657__auto___19486,inverted))
,cljs.core.sorted_map.call(null)));

var G__19571 = cljs.core.next.call(null,seq__19384_19560__$1);
var G__19572 = null;
var G__19573 = (0);
var G__19574 = (0);
seq__19384_19546 = G__19571;
chunk__19385_19547 = G__19572;
count__19386_19548 = G__19573;
i__19387_19549 = G__19574;
continue;
}
} else {
}
}
break;
}

var G__19575 = cljs.core.next.call(null,seq__19366_19537__$1);
var G__19576 = null;
var G__19577 = (0);
var G__19578 = (0);
seq__19366_19496 = G__19575;
chunk__19367_19497 = G__19576;
count__19368_19498 = G__19577;
i__19369_19499 = G__19578;
continue;
}
} else {
}
}
break;
}

var G__19579 = cljs.core.next.call(null,seq__19330_19487__$1);
var G__19580 = null;
var G__19581 = (0);
var G__19582 = (0);
seq__19330_19392 = G__19579;
chunk__19331_19393 = G__19580;
count__19332_19394 = G__19581;
i__19333_19395 = G__19582;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map