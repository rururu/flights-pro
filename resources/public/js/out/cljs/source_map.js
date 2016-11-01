// Compiled by ClojureScript 1.9.293 {}
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
return cljs.core.reduce.call(null,(function (m,p__11750){
var vec__11751 = p__11750;
var i = cljs.core.nth.call(null,vec__11751,(0),null);
var v = cljs.core.nth.call(null,vec__11751,(1),null);
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
var vec__11757 = seg;
var gcol = cljs.core.nth.call(null,vec__11757,(0),null);
var source = cljs.core.nth.call(null,vec__11757,(1),null);
var line = cljs.core.nth.call(null,vec__11757,(2),null);
var col = cljs.core.nth.call(null,vec__11757,(3),null);
var name = cljs.core.nth.call(null,vec__11757,(4),null);
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
var vec__11766 = seg;
var gcol = cljs.core.nth.call(null,vec__11766,(0),null);
var source = cljs.core.nth.call(null,vec__11766,(1),null);
var line = cljs.core.nth.call(null,vec__11766,(2),null);
var col = cljs.core.nth.call(null,vec__11766,(3),null);
var name = cljs.core.nth.call(null,vec__11766,(4),null);
var vec__11769 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11769,(0),null);
var rsource = cljs.core.nth.call(null,vec__11769,(1),null);
var rline = cljs.core.nth.call(null,vec__11769,(2),null);
var rcol = cljs.core.nth.call(null,vec__11769,(3),null);
var rname = cljs.core.nth.call(null,vec__11769,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8818__auto__ = source;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8818__auto__ = line;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8818__auto__ = col;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8818__auto__ = name;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
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
var map__11774 = segmap;
var map__11774__$1 = ((((!((map__11774 == null)))?((((map__11774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11774):map__11774);
var gcol = cljs.core.get.call(null,map__11774__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11774__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11774__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11774__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11774__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__11774,map__11774__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__11774,map__11774__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__11774,map__11774__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__11774,map__11774__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11774,map__11774__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__11774,map__11774__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args11776 = [];
var len__9926__auto___11782 = arguments.length;
var i__9927__auto___11783 = (0);
while(true){
if((i__9927__auto___11783 < len__9926__auto___11782)){
args11776.push((arguments[i__9927__auto___11783]));

var G__11784 = (i__9927__auto___11783 + (1));
i__9927__auto___11783 = G__11784;
continue;
} else {
}
break;
}

var G__11778 = args11776.length;
switch (G__11778) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11776.length)].join('')));

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
var vec__11779 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11786 = cljs.core.next.call(null,segs__$1);
var G__11787 = nrelseg;
var G__11788 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11786;
relseg__$1 = G__11787;
result__$1 = G__11788;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11779,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11779,(1),null);
var G__11789 = (gline + (1));
var G__11790 = cljs.core.next.call(null,lines__$1);
var G__11791 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11792 = result__$1;
gline = G__11789;
lines__$1 = G__11790;
relseg = G__11791;
result = G__11792;
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
var map__11796 = segmap;
var map__11796__$1 = ((((!((map__11796 == null)))?((((map__11796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11796):map__11796);
var gcol = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__11796,map__11796__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__11796,map__11796__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11793_SHARP_){
return cljs.core.conj.call(null,p1__11793_SHARP_,d__$1);
});})(map__11796,map__11796__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11796,map__11796__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args11798 = [];
var len__9926__auto___11804 = arguments.length;
var i__9927__auto___11805 = (0);
while(true){
if((i__9927__auto___11805 < len__9926__auto___11804)){
args11798.push((arguments[i__9927__auto___11805]));

var G__11806 = (i__9927__auto___11805 + (1));
i__9927__auto___11805 = G__11806;
continue;
} else {
}
break;
}

var G__11800 = args11798.length;
switch (G__11800) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11798.length)].join('')));

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
var vec__11801 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11808 = cljs.core.next.call(null,segs__$1);
var G__11809 = nrelseg;
var G__11810 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11808;
relseg__$1 = G__11809;
result__$1 = G__11810;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11801,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11801,(1),null);
var G__11811 = (gline + (1));
var G__11812 = cljs.core.next.call(null,lines__$1);
var G__11813 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11814 = result__$1;
gline = G__11811;
lines__$1 = G__11812;
relseg = G__11813;
result = G__11814;
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
return (function (p__11827){
var vec__11828 = p__11827;
var _ = cljs.core.nth.call(null,vec__11828,(0),null);
var source = cljs.core.nth.call(null,vec__11828,(1),null);
var line = cljs.core.nth.call(null,vec__11828,(2),null);
var col = cljs.core.nth.call(null,vec__11828,(3),null);
var name = cljs.core.nth.call(null,vec__11828,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11831){
var vec__11832 = p__11831;
var gcol = cljs.core.nth.call(null,vec__11832,(0),null);
var sidx = cljs.core.nth.call(null,vec__11832,(1),null);
var line = cljs.core.nth.call(null,vec__11832,(2),null);
var col = cljs.core.nth.call(null,vec__11832,(3),null);
var name = cljs.core.nth.call(null,vec__11832,(4),null);
var seg = vec__11832;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11832,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11835){
var vec__11836 = p__11835;
var _ = cljs.core.nth.call(null,vec__11836,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11836,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11836,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11836,(3),null);
var lname = cljs.core.nth.call(null,vec__11836,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8818__auto__ = name;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11832,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__8818__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
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
var seq__11924 = cljs.core.seq.call(null,infos);
var chunk__11925 = null;
var count__11926 = (0);
var i__11927 = (0);
while(true){
if((i__11927 < count__11926)){
var info = cljs.core._nth.call(null,chunk__11925,i__11927);
var segv_12006 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12007 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12008 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12007 > (lc_12008 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11924,chunk__11925,count__11926,i__11927,segv_12006,gline_12007,lc_12008,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12007 - (lc_12008 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12006], null));
});})(seq__11924,chunk__11925,count__11926,i__11927,segv_12006,gline_12007,lc_12008,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11924,chunk__11925,count__11926,i__11927,segv_12006,gline_12007,lc_12008,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12007], null),cljs.core.conj,segv_12006);
});})(seq__11924,chunk__11925,count__11926,i__11927,segv_12006,gline_12007,lc_12008,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12009 = seq__11924;
var G__12010 = chunk__11925;
var G__12011 = count__11926;
var G__12012 = (i__11927 + (1));
seq__11924 = G__12009;
chunk__11925 = G__12010;
count__11926 = G__12011;
i__11927 = G__12012;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11924);
if(temp__4657__auto__){
var seq__11924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11924__$1)){
var c__9632__auto__ = cljs.core.chunk_first.call(null,seq__11924__$1);
var G__12013 = cljs.core.chunk_rest.call(null,seq__11924__$1);
var G__12014 = c__9632__auto__;
var G__12015 = cljs.core.count.call(null,c__9632__auto__);
var G__12016 = (0);
seq__11924 = G__12013;
chunk__11925 = G__12014;
count__11926 = G__12015;
i__11927 = G__12016;
continue;
} else {
var info = cljs.core.first.call(null,seq__11924__$1);
var segv_12017 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12018 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12019 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12018 > (lc_12019 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11924,chunk__11925,count__11926,i__11927,segv_12017,gline_12018,lc_12019,info,seq__11924__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12018 - (lc_12019 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12017], null));
});})(seq__11924,chunk__11925,count__11926,i__11927,segv_12017,gline_12018,lc_12019,info,seq__11924__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11924,chunk__11925,count__11926,i__11927,segv_12017,gline_12018,lc_12019,info,seq__11924__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12018], null),cljs.core.conj,segv_12017);
});})(seq__11924,chunk__11925,count__11926,i__11927,segv_12017,gline_12018,lc_12019,info,seq__11924__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12020 = cljs.core.next.call(null,seq__11924__$1);
var G__12021 = null;
var G__12022 = (0);
var G__12023 = (0);
seq__11924 = G__12020;
chunk__11925 = G__12021;
count__11926 = G__12022;
i__11927 = G__12023;
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
var seq__11928_12024 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11929_12025 = null;
var count__11930_12026 = (0);
var i__11931_12027 = (0);
while(true){
if((i__11931_12027 < count__11930_12026)){
var vec__11932_12028 = cljs.core._nth.call(null,chunk__11929_12025,i__11931_12027);
var source_idx_12029 = cljs.core.nth.call(null,vec__11932_12028,(0),null);
var vec__11935_12030 = cljs.core.nth.call(null,vec__11932_12028,(1),null);
var __12031 = cljs.core.nth.call(null,vec__11935_12030,(0),null);
var lines_12032__$1 = cljs.core.nth.call(null,vec__11935_12030,(1),null);
var seq__11938_12033 = cljs.core.seq.call(null,lines_12032__$1);
var chunk__11939_12034 = null;
var count__11940_12035 = (0);
var i__11941_12036 = (0);
while(true){
if((i__11941_12036 < count__11940_12035)){
var vec__11942_12037 = cljs.core._nth.call(null,chunk__11939_12034,i__11941_12036);
var line_12038 = cljs.core.nth.call(null,vec__11942_12037,(0),null);
var cols_12039 = cljs.core.nth.call(null,vec__11942_12037,(1),null);
var seq__11945_12040 = cljs.core.seq.call(null,cols_12039);
var chunk__11946_12041 = null;
var count__11947_12042 = (0);
var i__11948_12043 = (0);
while(true){
if((i__11948_12043 < count__11947_12042)){
var vec__11949_12044 = cljs.core._nth.call(null,chunk__11946_12041,i__11948_12043);
var col_12045 = cljs.core.nth.call(null,vec__11949_12044,(0),null);
var infos_12046 = cljs.core.nth.call(null,vec__11949_12044,(1),null);
encode_cols.call(null,infos_12046,source_idx_12029,line_12038,col_12045);

var G__12047 = seq__11945_12040;
var G__12048 = chunk__11946_12041;
var G__12049 = count__11947_12042;
var G__12050 = (i__11948_12043 + (1));
seq__11945_12040 = G__12047;
chunk__11946_12041 = G__12048;
count__11947_12042 = G__12049;
i__11948_12043 = G__12050;
continue;
} else {
var temp__4657__auto___12051 = cljs.core.seq.call(null,seq__11945_12040);
if(temp__4657__auto___12051){
var seq__11945_12052__$1 = temp__4657__auto___12051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11945_12052__$1)){
var c__9632__auto___12053 = cljs.core.chunk_first.call(null,seq__11945_12052__$1);
var G__12054 = cljs.core.chunk_rest.call(null,seq__11945_12052__$1);
var G__12055 = c__9632__auto___12053;
var G__12056 = cljs.core.count.call(null,c__9632__auto___12053);
var G__12057 = (0);
seq__11945_12040 = G__12054;
chunk__11946_12041 = G__12055;
count__11947_12042 = G__12056;
i__11948_12043 = G__12057;
continue;
} else {
var vec__11952_12058 = cljs.core.first.call(null,seq__11945_12052__$1);
var col_12059 = cljs.core.nth.call(null,vec__11952_12058,(0),null);
var infos_12060 = cljs.core.nth.call(null,vec__11952_12058,(1),null);
encode_cols.call(null,infos_12060,source_idx_12029,line_12038,col_12059);

var G__12061 = cljs.core.next.call(null,seq__11945_12052__$1);
var G__12062 = null;
var G__12063 = (0);
var G__12064 = (0);
seq__11945_12040 = G__12061;
chunk__11946_12041 = G__12062;
count__11947_12042 = G__12063;
i__11948_12043 = G__12064;
continue;
}
} else {
}
}
break;
}

var G__12065 = seq__11938_12033;
var G__12066 = chunk__11939_12034;
var G__12067 = count__11940_12035;
var G__12068 = (i__11941_12036 + (1));
seq__11938_12033 = G__12065;
chunk__11939_12034 = G__12066;
count__11940_12035 = G__12067;
i__11941_12036 = G__12068;
continue;
} else {
var temp__4657__auto___12069 = cljs.core.seq.call(null,seq__11938_12033);
if(temp__4657__auto___12069){
var seq__11938_12070__$1 = temp__4657__auto___12069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11938_12070__$1)){
var c__9632__auto___12071 = cljs.core.chunk_first.call(null,seq__11938_12070__$1);
var G__12072 = cljs.core.chunk_rest.call(null,seq__11938_12070__$1);
var G__12073 = c__9632__auto___12071;
var G__12074 = cljs.core.count.call(null,c__9632__auto___12071);
var G__12075 = (0);
seq__11938_12033 = G__12072;
chunk__11939_12034 = G__12073;
count__11940_12035 = G__12074;
i__11941_12036 = G__12075;
continue;
} else {
var vec__11955_12076 = cljs.core.first.call(null,seq__11938_12070__$1);
var line_12077 = cljs.core.nth.call(null,vec__11955_12076,(0),null);
var cols_12078 = cljs.core.nth.call(null,vec__11955_12076,(1),null);
var seq__11958_12079 = cljs.core.seq.call(null,cols_12078);
var chunk__11959_12080 = null;
var count__11960_12081 = (0);
var i__11961_12082 = (0);
while(true){
if((i__11961_12082 < count__11960_12081)){
var vec__11962_12083 = cljs.core._nth.call(null,chunk__11959_12080,i__11961_12082);
var col_12084 = cljs.core.nth.call(null,vec__11962_12083,(0),null);
var infos_12085 = cljs.core.nth.call(null,vec__11962_12083,(1),null);
encode_cols.call(null,infos_12085,source_idx_12029,line_12077,col_12084);

var G__12086 = seq__11958_12079;
var G__12087 = chunk__11959_12080;
var G__12088 = count__11960_12081;
var G__12089 = (i__11961_12082 + (1));
seq__11958_12079 = G__12086;
chunk__11959_12080 = G__12087;
count__11960_12081 = G__12088;
i__11961_12082 = G__12089;
continue;
} else {
var temp__4657__auto___12090__$1 = cljs.core.seq.call(null,seq__11958_12079);
if(temp__4657__auto___12090__$1){
var seq__11958_12091__$1 = temp__4657__auto___12090__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11958_12091__$1)){
var c__9632__auto___12092 = cljs.core.chunk_first.call(null,seq__11958_12091__$1);
var G__12093 = cljs.core.chunk_rest.call(null,seq__11958_12091__$1);
var G__12094 = c__9632__auto___12092;
var G__12095 = cljs.core.count.call(null,c__9632__auto___12092);
var G__12096 = (0);
seq__11958_12079 = G__12093;
chunk__11959_12080 = G__12094;
count__11960_12081 = G__12095;
i__11961_12082 = G__12096;
continue;
} else {
var vec__11965_12097 = cljs.core.first.call(null,seq__11958_12091__$1);
var col_12098 = cljs.core.nth.call(null,vec__11965_12097,(0),null);
var infos_12099 = cljs.core.nth.call(null,vec__11965_12097,(1),null);
encode_cols.call(null,infos_12099,source_idx_12029,line_12077,col_12098);

var G__12100 = cljs.core.next.call(null,seq__11958_12091__$1);
var G__12101 = null;
var G__12102 = (0);
var G__12103 = (0);
seq__11958_12079 = G__12100;
chunk__11959_12080 = G__12101;
count__11960_12081 = G__12102;
i__11961_12082 = G__12103;
continue;
}
} else {
}
}
break;
}

var G__12104 = cljs.core.next.call(null,seq__11938_12070__$1);
var G__12105 = null;
var G__12106 = (0);
var G__12107 = (0);
seq__11938_12033 = G__12104;
chunk__11939_12034 = G__12105;
count__11940_12035 = G__12106;
i__11941_12036 = G__12107;
continue;
}
} else {
}
}
break;
}

var G__12108 = seq__11928_12024;
var G__12109 = chunk__11929_12025;
var G__12110 = count__11930_12026;
var G__12111 = (i__11931_12027 + (1));
seq__11928_12024 = G__12108;
chunk__11929_12025 = G__12109;
count__11930_12026 = G__12110;
i__11931_12027 = G__12111;
continue;
} else {
var temp__4657__auto___12112 = cljs.core.seq.call(null,seq__11928_12024);
if(temp__4657__auto___12112){
var seq__11928_12113__$1 = temp__4657__auto___12112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11928_12113__$1)){
var c__9632__auto___12114 = cljs.core.chunk_first.call(null,seq__11928_12113__$1);
var G__12115 = cljs.core.chunk_rest.call(null,seq__11928_12113__$1);
var G__12116 = c__9632__auto___12114;
var G__12117 = cljs.core.count.call(null,c__9632__auto___12114);
var G__12118 = (0);
seq__11928_12024 = G__12115;
chunk__11929_12025 = G__12116;
count__11930_12026 = G__12117;
i__11931_12027 = G__12118;
continue;
} else {
var vec__11968_12119 = cljs.core.first.call(null,seq__11928_12113__$1);
var source_idx_12120 = cljs.core.nth.call(null,vec__11968_12119,(0),null);
var vec__11971_12121 = cljs.core.nth.call(null,vec__11968_12119,(1),null);
var __12122 = cljs.core.nth.call(null,vec__11971_12121,(0),null);
var lines_12123__$1 = cljs.core.nth.call(null,vec__11971_12121,(1),null);
var seq__11974_12124 = cljs.core.seq.call(null,lines_12123__$1);
var chunk__11975_12125 = null;
var count__11976_12126 = (0);
var i__11977_12127 = (0);
while(true){
if((i__11977_12127 < count__11976_12126)){
var vec__11978_12128 = cljs.core._nth.call(null,chunk__11975_12125,i__11977_12127);
var line_12129 = cljs.core.nth.call(null,vec__11978_12128,(0),null);
var cols_12130 = cljs.core.nth.call(null,vec__11978_12128,(1),null);
var seq__11981_12131 = cljs.core.seq.call(null,cols_12130);
var chunk__11982_12132 = null;
var count__11983_12133 = (0);
var i__11984_12134 = (0);
while(true){
if((i__11984_12134 < count__11983_12133)){
var vec__11985_12135 = cljs.core._nth.call(null,chunk__11982_12132,i__11984_12134);
var col_12136 = cljs.core.nth.call(null,vec__11985_12135,(0),null);
var infos_12137 = cljs.core.nth.call(null,vec__11985_12135,(1),null);
encode_cols.call(null,infos_12137,source_idx_12120,line_12129,col_12136);

var G__12138 = seq__11981_12131;
var G__12139 = chunk__11982_12132;
var G__12140 = count__11983_12133;
var G__12141 = (i__11984_12134 + (1));
seq__11981_12131 = G__12138;
chunk__11982_12132 = G__12139;
count__11983_12133 = G__12140;
i__11984_12134 = G__12141;
continue;
} else {
var temp__4657__auto___12142__$1 = cljs.core.seq.call(null,seq__11981_12131);
if(temp__4657__auto___12142__$1){
var seq__11981_12143__$1 = temp__4657__auto___12142__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11981_12143__$1)){
var c__9632__auto___12144 = cljs.core.chunk_first.call(null,seq__11981_12143__$1);
var G__12145 = cljs.core.chunk_rest.call(null,seq__11981_12143__$1);
var G__12146 = c__9632__auto___12144;
var G__12147 = cljs.core.count.call(null,c__9632__auto___12144);
var G__12148 = (0);
seq__11981_12131 = G__12145;
chunk__11982_12132 = G__12146;
count__11983_12133 = G__12147;
i__11984_12134 = G__12148;
continue;
} else {
var vec__11988_12149 = cljs.core.first.call(null,seq__11981_12143__$1);
var col_12150 = cljs.core.nth.call(null,vec__11988_12149,(0),null);
var infos_12151 = cljs.core.nth.call(null,vec__11988_12149,(1),null);
encode_cols.call(null,infos_12151,source_idx_12120,line_12129,col_12150);

var G__12152 = cljs.core.next.call(null,seq__11981_12143__$1);
var G__12153 = null;
var G__12154 = (0);
var G__12155 = (0);
seq__11981_12131 = G__12152;
chunk__11982_12132 = G__12153;
count__11983_12133 = G__12154;
i__11984_12134 = G__12155;
continue;
}
} else {
}
}
break;
}

var G__12156 = seq__11974_12124;
var G__12157 = chunk__11975_12125;
var G__12158 = count__11976_12126;
var G__12159 = (i__11977_12127 + (1));
seq__11974_12124 = G__12156;
chunk__11975_12125 = G__12157;
count__11976_12126 = G__12158;
i__11977_12127 = G__12159;
continue;
} else {
var temp__4657__auto___12160__$1 = cljs.core.seq.call(null,seq__11974_12124);
if(temp__4657__auto___12160__$1){
var seq__11974_12161__$1 = temp__4657__auto___12160__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11974_12161__$1)){
var c__9632__auto___12162 = cljs.core.chunk_first.call(null,seq__11974_12161__$1);
var G__12163 = cljs.core.chunk_rest.call(null,seq__11974_12161__$1);
var G__12164 = c__9632__auto___12162;
var G__12165 = cljs.core.count.call(null,c__9632__auto___12162);
var G__12166 = (0);
seq__11974_12124 = G__12163;
chunk__11975_12125 = G__12164;
count__11976_12126 = G__12165;
i__11977_12127 = G__12166;
continue;
} else {
var vec__11991_12167 = cljs.core.first.call(null,seq__11974_12161__$1);
var line_12168 = cljs.core.nth.call(null,vec__11991_12167,(0),null);
var cols_12169 = cljs.core.nth.call(null,vec__11991_12167,(1),null);
var seq__11994_12170 = cljs.core.seq.call(null,cols_12169);
var chunk__11995_12171 = null;
var count__11996_12172 = (0);
var i__11997_12173 = (0);
while(true){
if((i__11997_12173 < count__11996_12172)){
var vec__11998_12174 = cljs.core._nth.call(null,chunk__11995_12171,i__11997_12173);
var col_12175 = cljs.core.nth.call(null,vec__11998_12174,(0),null);
var infos_12176 = cljs.core.nth.call(null,vec__11998_12174,(1),null);
encode_cols.call(null,infos_12176,source_idx_12120,line_12168,col_12175);

var G__12177 = seq__11994_12170;
var G__12178 = chunk__11995_12171;
var G__12179 = count__11996_12172;
var G__12180 = (i__11997_12173 + (1));
seq__11994_12170 = G__12177;
chunk__11995_12171 = G__12178;
count__11996_12172 = G__12179;
i__11997_12173 = G__12180;
continue;
} else {
var temp__4657__auto___12181__$2 = cljs.core.seq.call(null,seq__11994_12170);
if(temp__4657__auto___12181__$2){
var seq__11994_12182__$1 = temp__4657__auto___12181__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11994_12182__$1)){
var c__9632__auto___12183 = cljs.core.chunk_first.call(null,seq__11994_12182__$1);
var G__12184 = cljs.core.chunk_rest.call(null,seq__11994_12182__$1);
var G__12185 = c__9632__auto___12183;
var G__12186 = cljs.core.count.call(null,c__9632__auto___12183);
var G__12187 = (0);
seq__11994_12170 = G__12184;
chunk__11995_12171 = G__12185;
count__11996_12172 = G__12186;
i__11997_12173 = G__12187;
continue;
} else {
var vec__12001_12188 = cljs.core.first.call(null,seq__11994_12182__$1);
var col_12189 = cljs.core.nth.call(null,vec__12001_12188,(0),null);
var infos_12190 = cljs.core.nth.call(null,vec__12001_12188,(1),null);
encode_cols.call(null,infos_12190,source_idx_12120,line_12168,col_12189);

var G__12191 = cljs.core.next.call(null,seq__11994_12182__$1);
var G__12192 = null;
var G__12193 = (0);
var G__12194 = (0);
seq__11994_12170 = G__12191;
chunk__11995_12171 = G__12192;
count__11996_12172 = G__12193;
i__11997_12173 = G__12194;
continue;
}
} else {
}
}
break;
}

var G__12195 = cljs.core.next.call(null,seq__11974_12161__$1);
var G__12196 = null;
var G__12197 = (0);
var G__12198 = (0);
seq__11974_12124 = G__12195;
chunk__11975_12125 = G__12196;
count__11976_12126 = G__12197;
i__11977_12127 = G__12198;
continue;
}
} else {
}
}
break;
}

var G__12199 = cljs.core.next.call(null,seq__11928_12113__$1);
var G__12200 = null;
var G__12201 = (0);
var G__12202 = (0);
seq__11928_12024 = G__12199;
chunk__11929_12025 = G__12200;
count__11930_12026 = G__12201;
i__11931_12027 = G__12202;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12004 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11839_SHARP_){
return [cljs.core.str(p1__11839_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11840_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11840_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11841_SHARP_){
return clojure.string.join.call(null,",",p1__11841_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12005 = G__12004;
goog.object.set(G__12005,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12005;
} else {
return G__12004;
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
var vec__12212 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12212,(0),null);
var col_map = cljs.core.nth.call(null,vec__12212,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12215 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12215,(0),null);
var infos = cljs.core.nth.call(null,vec__12215,(1),null);
var G__12221 = cljs.core.next.call(null,col_map_seq);
var G__12222 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12215,col,infos,vec__12212,line,col_map){
return (function (v,p__12218){
var map__12219 = p__12218;
var map__12219__$1 = ((((!((map__12219 == null)))?((((map__12219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12219):map__12219);
var gline = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12215,col,infos,vec__12212,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12221;
new_cols = G__12222;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12223 = cljs.core.next.call(null,line_map_seq);
var G__12224 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12223;
new_lines = G__12224;
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
var seq__12287_12349 = cljs.core.seq.call(null,reverse_map);
var chunk__12288_12350 = null;
var count__12289_12351 = (0);
var i__12290_12352 = (0);
while(true){
if((i__12290_12352 < count__12289_12351)){
var vec__12291_12353 = cljs.core._nth.call(null,chunk__12288_12350,i__12290_12352);
var line_12354 = cljs.core.nth.call(null,vec__12291_12353,(0),null);
var columns_12355 = cljs.core.nth.call(null,vec__12291_12353,(1),null);
var seq__12294_12356 = cljs.core.seq.call(null,columns_12355);
var chunk__12295_12357 = null;
var count__12296_12358 = (0);
var i__12297_12359 = (0);
while(true){
if((i__12297_12359 < count__12296_12358)){
var vec__12298_12360 = cljs.core._nth.call(null,chunk__12295_12357,i__12297_12359);
var column_12361 = cljs.core.nth.call(null,vec__12298_12360,(0),null);
var column_info_12362 = cljs.core.nth.call(null,vec__12298_12360,(1),null);
var seq__12301_12363 = cljs.core.seq.call(null,column_info_12362);
var chunk__12302_12364 = null;
var count__12303_12365 = (0);
var i__12304_12366 = (0);
while(true){
if((i__12304_12366 < count__12303_12365)){
var map__12305_12367 = cljs.core._nth.call(null,chunk__12302_12364,i__12304_12366);
var map__12305_12368__$1 = ((((!((map__12305_12367 == null)))?((((map__12305_12367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12305_12367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12305_12367):map__12305_12367);
var gline_12369 = cljs.core.get.call(null,map__12305_12368__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12370 = cljs.core.get.call(null,map__12305_12368__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12371 = cljs.core.get.call(null,map__12305_12368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12369], null),cljs.core.fnil.call(null,((function (seq__12301_12363,chunk__12302_12364,count__12303_12365,i__12304_12366,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12305_12367,map__12305_12368__$1,gline_12369,gcol_12370,name_12371,vec__12298_12360,column_12361,column_info_12362,vec__12291_12353,line_12354,columns_12355,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12370], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12354,new cljs.core.Keyword(null,"col","col",-1959363084),column_12361,new cljs.core.Keyword(null,"name","name",1843675177),name_12371], null));
});})(seq__12301_12363,chunk__12302_12364,count__12303_12365,i__12304_12366,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12305_12367,map__12305_12368__$1,gline_12369,gcol_12370,name_12371,vec__12298_12360,column_12361,column_info_12362,vec__12291_12353,line_12354,columns_12355,inverted))
,cljs.core.sorted_map.call(null)));

var G__12372 = seq__12301_12363;
var G__12373 = chunk__12302_12364;
var G__12374 = count__12303_12365;
var G__12375 = (i__12304_12366 + (1));
seq__12301_12363 = G__12372;
chunk__12302_12364 = G__12373;
count__12303_12365 = G__12374;
i__12304_12366 = G__12375;
continue;
} else {
var temp__4657__auto___12376 = cljs.core.seq.call(null,seq__12301_12363);
if(temp__4657__auto___12376){
var seq__12301_12377__$1 = temp__4657__auto___12376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12301_12377__$1)){
var c__9632__auto___12378 = cljs.core.chunk_first.call(null,seq__12301_12377__$1);
var G__12379 = cljs.core.chunk_rest.call(null,seq__12301_12377__$1);
var G__12380 = c__9632__auto___12378;
var G__12381 = cljs.core.count.call(null,c__9632__auto___12378);
var G__12382 = (0);
seq__12301_12363 = G__12379;
chunk__12302_12364 = G__12380;
count__12303_12365 = G__12381;
i__12304_12366 = G__12382;
continue;
} else {
var map__12307_12383 = cljs.core.first.call(null,seq__12301_12377__$1);
var map__12307_12384__$1 = ((((!((map__12307_12383 == null)))?((((map__12307_12383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12307_12383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12307_12383):map__12307_12383);
var gline_12385 = cljs.core.get.call(null,map__12307_12384__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12386 = cljs.core.get.call(null,map__12307_12384__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12387 = cljs.core.get.call(null,map__12307_12384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12385], null),cljs.core.fnil.call(null,((function (seq__12301_12363,chunk__12302_12364,count__12303_12365,i__12304_12366,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12307_12383,map__12307_12384__$1,gline_12385,gcol_12386,name_12387,seq__12301_12377__$1,temp__4657__auto___12376,vec__12298_12360,column_12361,column_info_12362,vec__12291_12353,line_12354,columns_12355,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12386], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12354,new cljs.core.Keyword(null,"col","col",-1959363084),column_12361,new cljs.core.Keyword(null,"name","name",1843675177),name_12387], null));
});})(seq__12301_12363,chunk__12302_12364,count__12303_12365,i__12304_12366,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12307_12383,map__12307_12384__$1,gline_12385,gcol_12386,name_12387,seq__12301_12377__$1,temp__4657__auto___12376,vec__12298_12360,column_12361,column_info_12362,vec__12291_12353,line_12354,columns_12355,inverted))
,cljs.core.sorted_map.call(null)));

var G__12388 = cljs.core.next.call(null,seq__12301_12377__$1);
var G__12389 = null;
var G__12390 = (0);
var G__12391 = (0);
seq__12301_12363 = G__12388;
chunk__12302_12364 = G__12389;
count__12303_12365 = G__12390;
i__12304_12366 = G__12391;
continue;
}
} else {
}
}
break;
}

var G__12392 = seq__12294_12356;
var G__12393 = chunk__12295_12357;
var G__12394 = count__12296_12358;
var G__12395 = (i__12297_12359 + (1));
seq__12294_12356 = G__12392;
chunk__12295_12357 = G__12393;
count__12296_12358 = G__12394;
i__12297_12359 = G__12395;
continue;
} else {
var temp__4657__auto___12396 = cljs.core.seq.call(null,seq__12294_12356);
if(temp__4657__auto___12396){
var seq__12294_12397__$1 = temp__4657__auto___12396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12294_12397__$1)){
var c__9632__auto___12398 = cljs.core.chunk_first.call(null,seq__12294_12397__$1);
var G__12399 = cljs.core.chunk_rest.call(null,seq__12294_12397__$1);
var G__12400 = c__9632__auto___12398;
var G__12401 = cljs.core.count.call(null,c__9632__auto___12398);
var G__12402 = (0);
seq__12294_12356 = G__12399;
chunk__12295_12357 = G__12400;
count__12296_12358 = G__12401;
i__12297_12359 = G__12402;
continue;
} else {
var vec__12309_12403 = cljs.core.first.call(null,seq__12294_12397__$1);
var column_12404 = cljs.core.nth.call(null,vec__12309_12403,(0),null);
var column_info_12405 = cljs.core.nth.call(null,vec__12309_12403,(1),null);
var seq__12312_12406 = cljs.core.seq.call(null,column_info_12405);
var chunk__12313_12407 = null;
var count__12314_12408 = (0);
var i__12315_12409 = (0);
while(true){
if((i__12315_12409 < count__12314_12408)){
var map__12316_12410 = cljs.core._nth.call(null,chunk__12313_12407,i__12315_12409);
var map__12316_12411__$1 = ((((!((map__12316_12410 == null)))?((((map__12316_12410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12316_12410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12316_12410):map__12316_12410);
var gline_12412 = cljs.core.get.call(null,map__12316_12411__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12413 = cljs.core.get.call(null,map__12316_12411__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12414 = cljs.core.get.call(null,map__12316_12411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12412], null),cljs.core.fnil.call(null,((function (seq__12312_12406,chunk__12313_12407,count__12314_12408,i__12315_12409,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12316_12410,map__12316_12411__$1,gline_12412,gcol_12413,name_12414,vec__12309_12403,column_12404,column_info_12405,seq__12294_12397__$1,temp__4657__auto___12396,vec__12291_12353,line_12354,columns_12355,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12413], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12354,new cljs.core.Keyword(null,"col","col",-1959363084),column_12404,new cljs.core.Keyword(null,"name","name",1843675177),name_12414], null));
});})(seq__12312_12406,chunk__12313_12407,count__12314_12408,i__12315_12409,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12316_12410,map__12316_12411__$1,gline_12412,gcol_12413,name_12414,vec__12309_12403,column_12404,column_info_12405,seq__12294_12397__$1,temp__4657__auto___12396,vec__12291_12353,line_12354,columns_12355,inverted))
,cljs.core.sorted_map.call(null)));

var G__12415 = seq__12312_12406;
var G__12416 = chunk__12313_12407;
var G__12417 = count__12314_12408;
var G__12418 = (i__12315_12409 + (1));
seq__12312_12406 = G__12415;
chunk__12313_12407 = G__12416;
count__12314_12408 = G__12417;
i__12315_12409 = G__12418;
continue;
} else {
var temp__4657__auto___12419__$1 = cljs.core.seq.call(null,seq__12312_12406);
if(temp__4657__auto___12419__$1){
var seq__12312_12420__$1 = temp__4657__auto___12419__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12312_12420__$1)){
var c__9632__auto___12421 = cljs.core.chunk_first.call(null,seq__12312_12420__$1);
var G__12422 = cljs.core.chunk_rest.call(null,seq__12312_12420__$1);
var G__12423 = c__9632__auto___12421;
var G__12424 = cljs.core.count.call(null,c__9632__auto___12421);
var G__12425 = (0);
seq__12312_12406 = G__12422;
chunk__12313_12407 = G__12423;
count__12314_12408 = G__12424;
i__12315_12409 = G__12425;
continue;
} else {
var map__12318_12426 = cljs.core.first.call(null,seq__12312_12420__$1);
var map__12318_12427__$1 = ((((!((map__12318_12426 == null)))?((((map__12318_12426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12318_12426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12318_12426):map__12318_12426);
var gline_12428 = cljs.core.get.call(null,map__12318_12427__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12429 = cljs.core.get.call(null,map__12318_12427__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12430 = cljs.core.get.call(null,map__12318_12427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12428], null),cljs.core.fnil.call(null,((function (seq__12312_12406,chunk__12313_12407,count__12314_12408,i__12315_12409,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12318_12426,map__12318_12427__$1,gline_12428,gcol_12429,name_12430,seq__12312_12420__$1,temp__4657__auto___12419__$1,vec__12309_12403,column_12404,column_info_12405,seq__12294_12397__$1,temp__4657__auto___12396,vec__12291_12353,line_12354,columns_12355,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12429], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12354,new cljs.core.Keyword(null,"col","col",-1959363084),column_12404,new cljs.core.Keyword(null,"name","name",1843675177),name_12430], null));
});})(seq__12312_12406,chunk__12313_12407,count__12314_12408,i__12315_12409,seq__12294_12356,chunk__12295_12357,count__12296_12358,i__12297_12359,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12318_12426,map__12318_12427__$1,gline_12428,gcol_12429,name_12430,seq__12312_12420__$1,temp__4657__auto___12419__$1,vec__12309_12403,column_12404,column_info_12405,seq__12294_12397__$1,temp__4657__auto___12396,vec__12291_12353,line_12354,columns_12355,inverted))
,cljs.core.sorted_map.call(null)));

var G__12431 = cljs.core.next.call(null,seq__12312_12420__$1);
var G__12432 = null;
var G__12433 = (0);
var G__12434 = (0);
seq__12312_12406 = G__12431;
chunk__12313_12407 = G__12432;
count__12314_12408 = G__12433;
i__12315_12409 = G__12434;
continue;
}
} else {
}
}
break;
}

var G__12435 = cljs.core.next.call(null,seq__12294_12397__$1);
var G__12436 = null;
var G__12437 = (0);
var G__12438 = (0);
seq__12294_12356 = G__12435;
chunk__12295_12357 = G__12436;
count__12296_12358 = G__12437;
i__12297_12359 = G__12438;
continue;
}
} else {
}
}
break;
}

var G__12439 = seq__12287_12349;
var G__12440 = chunk__12288_12350;
var G__12441 = count__12289_12351;
var G__12442 = (i__12290_12352 + (1));
seq__12287_12349 = G__12439;
chunk__12288_12350 = G__12440;
count__12289_12351 = G__12441;
i__12290_12352 = G__12442;
continue;
} else {
var temp__4657__auto___12443 = cljs.core.seq.call(null,seq__12287_12349);
if(temp__4657__auto___12443){
var seq__12287_12444__$1 = temp__4657__auto___12443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12287_12444__$1)){
var c__9632__auto___12445 = cljs.core.chunk_first.call(null,seq__12287_12444__$1);
var G__12446 = cljs.core.chunk_rest.call(null,seq__12287_12444__$1);
var G__12447 = c__9632__auto___12445;
var G__12448 = cljs.core.count.call(null,c__9632__auto___12445);
var G__12449 = (0);
seq__12287_12349 = G__12446;
chunk__12288_12350 = G__12447;
count__12289_12351 = G__12448;
i__12290_12352 = G__12449;
continue;
} else {
var vec__12320_12450 = cljs.core.first.call(null,seq__12287_12444__$1);
var line_12451 = cljs.core.nth.call(null,vec__12320_12450,(0),null);
var columns_12452 = cljs.core.nth.call(null,vec__12320_12450,(1),null);
var seq__12323_12453 = cljs.core.seq.call(null,columns_12452);
var chunk__12324_12454 = null;
var count__12325_12455 = (0);
var i__12326_12456 = (0);
while(true){
if((i__12326_12456 < count__12325_12455)){
var vec__12327_12457 = cljs.core._nth.call(null,chunk__12324_12454,i__12326_12456);
var column_12458 = cljs.core.nth.call(null,vec__12327_12457,(0),null);
var column_info_12459 = cljs.core.nth.call(null,vec__12327_12457,(1),null);
var seq__12330_12460 = cljs.core.seq.call(null,column_info_12459);
var chunk__12331_12461 = null;
var count__12332_12462 = (0);
var i__12333_12463 = (0);
while(true){
if((i__12333_12463 < count__12332_12462)){
var map__12334_12464 = cljs.core._nth.call(null,chunk__12331_12461,i__12333_12463);
var map__12334_12465__$1 = ((((!((map__12334_12464 == null)))?((((map__12334_12464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12334_12464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12334_12464):map__12334_12464);
var gline_12466 = cljs.core.get.call(null,map__12334_12465__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12467 = cljs.core.get.call(null,map__12334_12465__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12468 = cljs.core.get.call(null,map__12334_12465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12466], null),cljs.core.fnil.call(null,((function (seq__12330_12460,chunk__12331_12461,count__12332_12462,i__12333_12463,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12334_12464,map__12334_12465__$1,gline_12466,gcol_12467,name_12468,vec__12327_12457,column_12458,column_info_12459,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12467], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12451,new cljs.core.Keyword(null,"col","col",-1959363084),column_12458,new cljs.core.Keyword(null,"name","name",1843675177),name_12468], null));
});})(seq__12330_12460,chunk__12331_12461,count__12332_12462,i__12333_12463,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12334_12464,map__12334_12465__$1,gline_12466,gcol_12467,name_12468,vec__12327_12457,column_12458,column_info_12459,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted))
,cljs.core.sorted_map.call(null)));

var G__12469 = seq__12330_12460;
var G__12470 = chunk__12331_12461;
var G__12471 = count__12332_12462;
var G__12472 = (i__12333_12463 + (1));
seq__12330_12460 = G__12469;
chunk__12331_12461 = G__12470;
count__12332_12462 = G__12471;
i__12333_12463 = G__12472;
continue;
} else {
var temp__4657__auto___12473__$1 = cljs.core.seq.call(null,seq__12330_12460);
if(temp__4657__auto___12473__$1){
var seq__12330_12474__$1 = temp__4657__auto___12473__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12330_12474__$1)){
var c__9632__auto___12475 = cljs.core.chunk_first.call(null,seq__12330_12474__$1);
var G__12476 = cljs.core.chunk_rest.call(null,seq__12330_12474__$1);
var G__12477 = c__9632__auto___12475;
var G__12478 = cljs.core.count.call(null,c__9632__auto___12475);
var G__12479 = (0);
seq__12330_12460 = G__12476;
chunk__12331_12461 = G__12477;
count__12332_12462 = G__12478;
i__12333_12463 = G__12479;
continue;
} else {
var map__12336_12480 = cljs.core.first.call(null,seq__12330_12474__$1);
var map__12336_12481__$1 = ((((!((map__12336_12480 == null)))?((((map__12336_12480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12336_12480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12336_12480):map__12336_12480);
var gline_12482 = cljs.core.get.call(null,map__12336_12481__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12483 = cljs.core.get.call(null,map__12336_12481__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12484 = cljs.core.get.call(null,map__12336_12481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12482], null),cljs.core.fnil.call(null,((function (seq__12330_12460,chunk__12331_12461,count__12332_12462,i__12333_12463,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12336_12480,map__12336_12481__$1,gline_12482,gcol_12483,name_12484,seq__12330_12474__$1,temp__4657__auto___12473__$1,vec__12327_12457,column_12458,column_info_12459,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12483], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12451,new cljs.core.Keyword(null,"col","col",-1959363084),column_12458,new cljs.core.Keyword(null,"name","name",1843675177),name_12484], null));
});})(seq__12330_12460,chunk__12331_12461,count__12332_12462,i__12333_12463,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12336_12480,map__12336_12481__$1,gline_12482,gcol_12483,name_12484,seq__12330_12474__$1,temp__4657__auto___12473__$1,vec__12327_12457,column_12458,column_info_12459,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted))
,cljs.core.sorted_map.call(null)));

var G__12485 = cljs.core.next.call(null,seq__12330_12474__$1);
var G__12486 = null;
var G__12487 = (0);
var G__12488 = (0);
seq__12330_12460 = G__12485;
chunk__12331_12461 = G__12486;
count__12332_12462 = G__12487;
i__12333_12463 = G__12488;
continue;
}
} else {
}
}
break;
}

var G__12489 = seq__12323_12453;
var G__12490 = chunk__12324_12454;
var G__12491 = count__12325_12455;
var G__12492 = (i__12326_12456 + (1));
seq__12323_12453 = G__12489;
chunk__12324_12454 = G__12490;
count__12325_12455 = G__12491;
i__12326_12456 = G__12492;
continue;
} else {
var temp__4657__auto___12493__$1 = cljs.core.seq.call(null,seq__12323_12453);
if(temp__4657__auto___12493__$1){
var seq__12323_12494__$1 = temp__4657__auto___12493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12323_12494__$1)){
var c__9632__auto___12495 = cljs.core.chunk_first.call(null,seq__12323_12494__$1);
var G__12496 = cljs.core.chunk_rest.call(null,seq__12323_12494__$1);
var G__12497 = c__9632__auto___12495;
var G__12498 = cljs.core.count.call(null,c__9632__auto___12495);
var G__12499 = (0);
seq__12323_12453 = G__12496;
chunk__12324_12454 = G__12497;
count__12325_12455 = G__12498;
i__12326_12456 = G__12499;
continue;
} else {
var vec__12338_12500 = cljs.core.first.call(null,seq__12323_12494__$1);
var column_12501 = cljs.core.nth.call(null,vec__12338_12500,(0),null);
var column_info_12502 = cljs.core.nth.call(null,vec__12338_12500,(1),null);
var seq__12341_12503 = cljs.core.seq.call(null,column_info_12502);
var chunk__12342_12504 = null;
var count__12343_12505 = (0);
var i__12344_12506 = (0);
while(true){
if((i__12344_12506 < count__12343_12505)){
var map__12345_12507 = cljs.core._nth.call(null,chunk__12342_12504,i__12344_12506);
var map__12345_12508__$1 = ((((!((map__12345_12507 == null)))?((((map__12345_12507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12345_12507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12345_12507):map__12345_12507);
var gline_12509 = cljs.core.get.call(null,map__12345_12508__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12510 = cljs.core.get.call(null,map__12345_12508__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12511 = cljs.core.get.call(null,map__12345_12508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12509], null),cljs.core.fnil.call(null,((function (seq__12341_12503,chunk__12342_12504,count__12343_12505,i__12344_12506,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12345_12507,map__12345_12508__$1,gline_12509,gcol_12510,name_12511,vec__12338_12500,column_12501,column_info_12502,seq__12323_12494__$1,temp__4657__auto___12493__$1,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12510], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12451,new cljs.core.Keyword(null,"col","col",-1959363084),column_12501,new cljs.core.Keyword(null,"name","name",1843675177),name_12511], null));
});})(seq__12341_12503,chunk__12342_12504,count__12343_12505,i__12344_12506,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12345_12507,map__12345_12508__$1,gline_12509,gcol_12510,name_12511,vec__12338_12500,column_12501,column_info_12502,seq__12323_12494__$1,temp__4657__auto___12493__$1,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted))
,cljs.core.sorted_map.call(null)));

var G__12512 = seq__12341_12503;
var G__12513 = chunk__12342_12504;
var G__12514 = count__12343_12505;
var G__12515 = (i__12344_12506 + (1));
seq__12341_12503 = G__12512;
chunk__12342_12504 = G__12513;
count__12343_12505 = G__12514;
i__12344_12506 = G__12515;
continue;
} else {
var temp__4657__auto___12516__$2 = cljs.core.seq.call(null,seq__12341_12503);
if(temp__4657__auto___12516__$2){
var seq__12341_12517__$1 = temp__4657__auto___12516__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12341_12517__$1)){
var c__9632__auto___12518 = cljs.core.chunk_first.call(null,seq__12341_12517__$1);
var G__12519 = cljs.core.chunk_rest.call(null,seq__12341_12517__$1);
var G__12520 = c__9632__auto___12518;
var G__12521 = cljs.core.count.call(null,c__9632__auto___12518);
var G__12522 = (0);
seq__12341_12503 = G__12519;
chunk__12342_12504 = G__12520;
count__12343_12505 = G__12521;
i__12344_12506 = G__12522;
continue;
} else {
var map__12347_12523 = cljs.core.first.call(null,seq__12341_12517__$1);
var map__12347_12524__$1 = ((((!((map__12347_12523 == null)))?((((map__12347_12523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12347_12523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12347_12523):map__12347_12523);
var gline_12525 = cljs.core.get.call(null,map__12347_12524__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12526 = cljs.core.get.call(null,map__12347_12524__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12527 = cljs.core.get.call(null,map__12347_12524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12525], null),cljs.core.fnil.call(null,((function (seq__12341_12503,chunk__12342_12504,count__12343_12505,i__12344_12506,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12347_12523,map__12347_12524__$1,gline_12525,gcol_12526,name_12527,seq__12341_12517__$1,temp__4657__auto___12516__$2,vec__12338_12500,column_12501,column_info_12502,seq__12323_12494__$1,temp__4657__auto___12493__$1,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12526], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12451,new cljs.core.Keyword(null,"col","col",-1959363084),column_12501,new cljs.core.Keyword(null,"name","name",1843675177),name_12527], null));
});})(seq__12341_12503,chunk__12342_12504,count__12343_12505,i__12344_12506,seq__12323_12453,chunk__12324_12454,count__12325_12455,i__12326_12456,seq__12287_12349,chunk__12288_12350,count__12289_12351,i__12290_12352,map__12347_12523,map__12347_12524__$1,gline_12525,gcol_12526,name_12527,seq__12341_12517__$1,temp__4657__auto___12516__$2,vec__12338_12500,column_12501,column_info_12502,seq__12323_12494__$1,temp__4657__auto___12493__$1,vec__12320_12450,line_12451,columns_12452,seq__12287_12444__$1,temp__4657__auto___12443,inverted))
,cljs.core.sorted_map.call(null)));

var G__12528 = cljs.core.next.call(null,seq__12341_12517__$1);
var G__12529 = null;
var G__12530 = (0);
var G__12531 = (0);
seq__12341_12503 = G__12528;
chunk__12342_12504 = G__12529;
count__12343_12505 = G__12530;
i__12344_12506 = G__12531;
continue;
}
} else {
}
}
break;
}

var G__12532 = cljs.core.next.call(null,seq__12323_12494__$1);
var G__12533 = null;
var G__12534 = (0);
var G__12535 = (0);
seq__12323_12453 = G__12532;
chunk__12324_12454 = G__12533;
count__12325_12455 = G__12534;
i__12326_12456 = G__12535;
continue;
}
} else {
}
}
break;
}

var G__12536 = cljs.core.next.call(null,seq__12287_12444__$1);
var G__12537 = null;
var G__12538 = (0);
var G__12539 = (0);
seq__12287_12349 = G__12536;
chunk__12288_12350 = G__12537;
count__12289_12351 = G__12538;
i__12290_12352 = G__12539;
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