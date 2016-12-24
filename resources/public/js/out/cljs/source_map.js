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
return cljs.core.reduce.call(null,(function (m,p__11828){
var vec__11829 = p__11828;
var i = cljs.core.nth.call(null,vec__11829,(0),null);
var v = cljs.core.nth.call(null,vec__11829,(1),null);
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
var vec__11835 = seg;
var gcol = cljs.core.nth.call(null,vec__11835,(0),null);
var source = cljs.core.nth.call(null,vec__11835,(1),null);
var line = cljs.core.nth.call(null,vec__11835,(2),null);
var col = cljs.core.nth.call(null,vec__11835,(3),null);
var name = cljs.core.nth.call(null,vec__11835,(4),null);
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
var vec__11844 = seg;
var gcol = cljs.core.nth.call(null,vec__11844,(0),null);
var source = cljs.core.nth.call(null,vec__11844,(1),null);
var line = cljs.core.nth.call(null,vec__11844,(2),null);
var col = cljs.core.nth.call(null,vec__11844,(3),null);
var name = cljs.core.nth.call(null,vec__11844,(4),null);
var vec__11847 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11847,(0),null);
var rsource = cljs.core.nth.call(null,vec__11847,(1),null);
var rline = cljs.core.nth.call(null,vec__11847,(2),null);
var rcol = cljs.core.nth.call(null,vec__11847,(3),null);
var rname = cljs.core.nth.call(null,vec__11847,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8823__auto__ = source;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8823__auto__ = line;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8823__auto__ = col;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8823__auto__ = name;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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
var map__11852 = segmap;
var map__11852__$1 = ((((!((map__11852 == null)))?((((map__11852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11852):map__11852);
var gcol = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__11852,map__11852__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__11852,map__11852__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__11852,map__11852__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__11852,map__11852__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11852,map__11852__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__11852,map__11852__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args11854 = [];
var len__9931__auto___11860 = arguments.length;
var i__9932__auto___11861 = (0);
while(true){
if((i__9932__auto___11861 < len__9931__auto___11860)){
args11854.push((arguments[i__9932__auto___11861]));

var G__11862 = (i__9932__auto___11861 + (1));
i__9932__auto___11861 = G__11862;
continue;
} else {
}
break;
}

var G__11856 = args11854.length;
switch (G__11856) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11854.length)].join('')));

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
var vec__11857 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11864 = cljs.core.next.call(null,segs__$1);
var G__11865 = nrelseg;
var G__11866 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11864;
relseg__$1 = G__11865;
result__$1 = G__11866;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11857,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11857,(1),null);
var G__11867 = (gline + (1));
var G__11868 = cljs.core.next.call(null,lines__$1);
var G__11869 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11870 = result__$1;
gline = G__11867;
lines__$1 = G__11868;
relseg = G__11869;
result = G__11870;
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
var map__11874 = segmap;
var map__11874__$1 = ((((!((map__11874 == null)))?((((map__11874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11874):map__11874);
var gcol = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__11874,map__11874__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__11874,map__11874__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11871_SHARP_){
return cljs.core.conj.call(null,p1__11871_SHARP_,d__$1);
});})(map__11874,map__11874__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11874,map__11874__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args11876 = [];
var len__9931__auto___11882 = arguments.length;
var i__9932__auto___11883 = (0);
while(true){
if((i__9932__auto___11883 < len__9931__auto___11882)){
args11876.push((arguments[i__9932__auto___11883]));

var G__11884 = (i__9932__auto___11883 + (1));
i__9932__auto___11883 = G__11884;
continue;
} else {
}
break;
}

var G__11878 = args11876.length;
switch (G__11878) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11876.length)].join('')));

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
var vec__11879 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11886 = cljs.core.next.call(null,segs__$1);
var G__11887 = nrelseg;
var G__11888 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11886;
relseg__$1 = G__11887;
result__$1 = G__11888;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11879,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11879,(1),null);
var G__11889 = (gline + (1));
var G__11890 = cljs.core.next.call(null,lines__$1);
var G__11891 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11892 = result__$1;
gline = G__11889;
lines__$1 = G__11890;
relseg = G__11891;
result = G__11892;
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
return (function (p__11905){
var vec__11906 = p__11905;
var _ = cljs.core.nth.call(null,vec__11906,(0),null);
var source = cljs.core.nth.call(null,vec__11906,(1),null);
var line = cljs.core.nth.call(null,vec__11906,(2),null);
var col = cljs.core.nth.call(null,vec__11906,(3),null);
var name = cljs.core.nth.call(null,vec__11906,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11909){
var vec__11910 = p__11909;
var gcol = cljs.core.nth.call(null,vec__11910,(0),null);
var sidx = cljs.core.nth.call(null,vec__11910,(1),null);
var line = cljs.core.nth.call(null,vec__11910,(2),null);
var col = cljs.core.nth.call(null,vec__11910,(3),null);
var name = cljs.core.nth.call(null,vec__11910,(4),null);
var seg = vec__11910;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11910,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11913){
var vec__11914 = p__11913;
var _ = cljs.core.nth.call(null,vec__11914,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11914,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11914,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11914,(3),null);
var lname = cljs.core.nth.call(null,vec__11914,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8823__auto__ = name;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11910,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__8823__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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
var seq__12002 = cljs.core.seq.call(null,infos);
var chunk__12003 = null;
var count__12004 = (0);
var i__12005 = (0);
while(true){
if((i__12005 < count__12004)){
var info = cljs.core._nth.call(null,chunk__12003,i__12005);
var segv_12084 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12085 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12086 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12085 > (lc_12086 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12002,chunk__12003,count__12004,i__12005,segv_12084,gline_12085,lc_12086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12085 - (lc_12086 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12084], null));
});})(seq__12002,chunk__12003,count__12004,i__12005,segv_12084,gline_12085,lc_12086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12002,chunk__12003,count__12004,i__12005,segv_12084,gline_12085,lc_12086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12085], null),cljs.core.conj,segv_12084);
});})(seq__12002,chunk__12003,count__12004,i__12005,segv_12084,gline_12085,lc_12086,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12087 = seq__12002;
var G__12088 = chunk__12003;
var G__12089 = count__12004;
var G__12090 = (i__12005 + (1));
seq__12002 = G__12087;
chunk__12003 = G__12088;
count__12004 = G__12089;
i__12005 = G__12090;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12002);
if(temp__4657__auto__){
var seq__12002__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12002__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__12002__$1);
var G__12091 = cljs.core.chunk_rest.call(null,seq__12002__$1);
var G__12092 = c__9637__auto__;
var G__12093 = cljs.core.count.call(null,c__9637__auto__);
var G__12094 = (0);
seq__12002 = G__12091;
chunk__12003 = G__12092;
count__12004 = G__12093;
i__12005 = G__12094;
continue;
} else {
var info = cljs.core.first.call(null,seq__12002__$1);
var segv_12095 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12096 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12097 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12096 > (lc_12097 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12002,chunk__12003,count__12004,i__12005,segv_12095,gline_12096,lc_12097,info,seq__12002__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12096 - (lc_12097 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12095], null));
});})(seq__12002,chunk__12003,count__12004,i__12005,segv_12095,gline_12096,lc_12097,info,seq__12002__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12002,chunk__12003,count__12004,i__12005,segv_12095,gline_12096,lc_12097,info,seq__12002__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12096], null),cljs.core.conj,segv_12095);
});})(seq__12002,chunk__12003,count__12004,i__12005,segv_12095,gline_12096,lc_12097,info,seq__12002__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12098 = cljs.core.next.call(null,seq__12002__$1);
var G__12099 = null;
var G__12100 = (0);
var G__12101 = (0);
seq__12002 = G__12098;
chunk__12003 = G__12099;
count__12004 = G__12100;
i__12005 = G__12101;
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
var seq__12006_12102 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12007_12103 = null;
var count__12008_12104 = (0);
var i__12009_12105 = (0);
while(true){
if((i__12009_12105 < count__12008_12104)){
var vec__12010_12106 = cljs.core._nth.call(null,chunk__12007_12103,i__12009_12105);
var source_idx_12107 = cljs.core.nth.call(null,vec__12010_12106,(0),null);
var vec__12013_12108 = cljs.core.nth.call(null,vec__12010_12106,(1),null);
var __12109 = cljs.core.nth.call(null,vec__12013_12108,(0),null);
var lines_12110__$1 = cljs.core.nth.call(null,vec__12013_12108,(1),null);
var seq__12016_12111 = cljs.core.seq.call(null,lines_12110__$1);
var chunk__12017_12112 = null;
var count__12018_12113 = (0);
var i__12019_12114 = (0);
while(true){
if((i__12019_12114 < count__12018_12113)){
var vec__12020_12115 = cljs.core._nth.call(null,chunk__12017_12112,i__12019_12114);
var line_12116 = cljs.core.nth.call(null,vec__12020_12115,(0),null);
var cols_12117 = cljs.core.nth.call(null,vec__12020_12115,(1),null);
var seq__12023_12118 = cljs.core.seq.call(null,cols_12117);
var chunk__12024_12119 = null;
var count__12025_12120 = (0);
var i__12026_12121 = (0);
while(true){
if((i__12026_12121 < count__12025_12120)){
var vec__12027_12122 = cljs.core._nth.call(null,chunk__12024_12119,i__12026_12121);
var col_12123 = cljs.core.nth.call(null,vec__12027_12122,(0),null);
var infos_12124 = cljs.core.nth.call(null,vec__12027_12122,(1),null);
encode_cols.call(null,infos_12124,source_idx_12107,line_12116,col_12123);

var G__12125 = seq__12023_12118;
var G__12126 = chunk__12024_12119;
var G__12127 = count__12025_12120;
var G__12128 = (i__12026_12121 + (1));
seq__12023_12118 = G__12125;
chunk__12024_12119 = G__12126;
count__12025_12120 = G__12127;
i__12026_12121 = G__12128;
continue;
} else {
var temp__4657__auto___12129 = cljs.core.seq.call(null,seq__12023_12118);
if(temp__4657__auto___12129){
var seq__12023_12130__$1 = temp__4657__auto___12129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12023_12130__$1)){
var c__9637__auto___12131 = cljs.core.chunk_first.call(null,seq__12023_12130__$1);
var G__12132 = cljs.core.chunk_rest.call(null,seq__12023_12130__$1);
var G__12133 = c__9637__auto___12131;
var G__12134 = cljs.core.count.call(null,c__9637__auto___12131);
var G__12135 = (0);
seq__12023_12118 = G__12132;
chunk__12024_12119 = G__12133;
count__12025_12120 = G__12134;
i__12026_12121 = G__12135;
continue;
} else {
var vec__12030_12136 = cljs.core.first.call(null,seq__12023_12130__$1);
var col_12137 = cljs.core.nth.call(null,vec__12030_12136,(0),null);
var infos_12138 = cljs.core.nth.call(null,vec__12030_12136,(1),null);
encode_cols.call(null,infos_12138,source_idx_12107,line_12116,col_12137);

var G__12139 = cljs.core.next.call(null,seq__12023_12130__$1);
var G__12140 = null;
var G__12141 = (0);
var G__12142 = (0);
seq__12023_12118 = G__12139;
chunk__12024_12119 = G__12140;
count__12025_12120 = G__12141;
i__12026_12121 = G__12142;
continue;
}
} else {
}
}
break;
}

var G__12143 = seq__12016_12111;
var G__12144 = chunk__12017_12112;
var G__12145 = count__12018_12113;
var G__12146 = (i__12019_12114 + (1));
seq__12016_12111 = G__12143;
chunk__12017_12112 = G__12144;
count__12018_12113 = G__12145;
i__12019_12114 = G__12146;
continue;
} else {
var temp__4657__auto___12147 = cljs.core.seq.call(null,seq__12016_12111);
if(temp__4657__auto___12147){
var seq__12016_12148__$1 = temp__4657__auto___12147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12016_12148__$1)){
var c__9637__auto___12149 = cljs.core.chunk_first.call(null,seq__12016_12148__$1);
var G__12150 = cljs.core.chunk_rest.call(null,seq__12016_12148__$1);
var G__12151 = c__9637__auto___12149;
var G__12152 = cljs.core.count.call(null,c__9637__auto___12149);
var G__12153 = (0);
seq__12016_12111 = G__12150;
chunk__12017_12112 = G__12151;
count__12018_12113 = G__12152;
i__12019_12114 = G__12153;
continue;
} else {
var vec__12033_12154 = cljs.core.first.call(null,seq__12016_12148__$1);
var line_12155 = cljs.core.nth.call(null,vec__12033_12154,(0),null);
var cols_12156 = cljs.core.nth.call(null,vec__12033_12154,(1),null);
var seq__12036_12157 = cljs.core.seq.call(null,cols_12156);
var chunk__12037_12158 = null;
var count__12038_12159 = (0);
var i__12039_12160 = (0);
while(true){
if((i__12039_12160 < count__12038_12159)){
var vec__12040_12161 = cljs.core._nth.call(null,chunk__12037_12158,i__12039_12160);
var col_12162 = cljs.core.nth.call(null,vec__12040_12161,(0),null);
var infos_12163 = cljs.core.nth.call(null,vec__12040_12161,(1),null);
encode_cols.call(null,infos_12163,source_idx_12107,line_12155,col_12162);

var G__12164 = seq__12036_12157;
var G__12165 = chunk__12037_12158;
var G__12166 = count__12038_12159;
var G__12167 = (i__12039_12160 + (1));
seq__12036_12157 = G__12164;
chunk__12037_12158 = G__12165;
count__12038_12159 = G__12166;
i__12039_12160 = G__12167;
continue;
} else {
var temp__4657__auto___12168__$1 = cljs.core.seq.call(null,seq__12036_12157);
if(temp__4657__auto___12168__$1){
var seq__12036_12169__$1 = temp__4657__auto___12168__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12036_12169__$1)){
var c__9637__auto___12170 = cljs.core.chunk_first.call(null,seq__12036_12169__$1);
var G__12171 = cljs.core.chunk_rest.call(null,seq__12036_12169__$1);
var G__12172 = c__9637__auto___12170;
var G__12173 = cljs.core.count.call(null,c__9637__auto___12170);
var G__12174 = (0);
seq__12036_12157 = G__12171;
chunk__12037_12158 = G__12172;
count__12038_12159 = G__12173;
i__12039_12160 = G__12174;
continue;
} else {
var vec__12043_12175 = cljs.core.first.call(null,seq__12036_12169__$1);
var col_12176 = cljs.core.nth.call(null,vec__12043_12175,(0),null);
var infos_12177 = cljs.core.nth.call(null,vec__12043_12175,(1),null);
encode_cols.call(null,infos_12177,source_idx_12107,line_12155,col_12176);

var G__12178 = cljs.core.next.call(null,seq__12036_12169__$1);
var G__12179 = null;
var G__12180 = (0);
var G__12181 = (0);
seq__12036_12157 = G__12178;
chunk__12037_12158 = G__12179;
count__12038_12159 = G__12180;
i__12039_12160 = G__12181;
continue;
}
} else {
}
}
break;
}

var G__12182 = cljs.core.next.call(null,seq__12016_12148__$1);
var G__12183 = null;
var G__12184 = (0);
var G__12185 = (0);
seq__12016_12111 = G__12182;
chunk__12017_12112 = G__12183;
count__12018_12113 = G__12184;
i__12019_12114 = G__12185;
continue;
}
} else {
}
}
break;
}

var G__12186 = seq__12006_12102;
var G__12187 = chunk__12007_12103;
var G__12188 = count__12008_12104;
var G__12189 = (i__12009_12105 + (1));
seq__12006_12102 = G__12186;
chunk__12007_12103 = G__12187;
count__12008_12104 = G__12188;
i__12009_12105 = G__12189;
continue;
} else {
var temp__4657__auto___12190 = cljs.core.seq.call(null,seq__12006_12102);
if(temp__4657__auto___12190){
var seq__12006_12191__$1 = temp__4657__auto___12190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12006_12191__$1)){
var c__9637__auto___12192 = cljs.core.chunk_first.call(null,seq__12006_12191__$1);
var G__12193 = cljs.core.chunk_rest.call(null,seq__12006_12191__$1);
var G__12194 = c__9637__auto___12192;
var G__12195 = cljs.core.count.call(null,c__9637__auto___12192);
var G__12196 = (0);
seq__12006_12102 = G__12193;
chunk__12007_12103 = G__12194;
count__12008_12104 = G__12195;
i__12009_12105 = G__12196;
continue;
} else {
var vec__12046_12197 = cljs.core.first.call(null,seq__12006_12191__$1);
var source_idx_12198 = cljs.core.nth.call(null,vec__12046_12197,(0),null);
var vec__12049_12199 = cljs.core.nth.call(null,vec__12046_12197,(1),null);
var __12200 = cljs.core.nth.call(null,vec__12049_12199,(0),null);
var lines_12201__$1 = cljs.core.nth.call(null,vec__12049_12199,(1),null);
var seq__12052_12202 = cljs.core.seq.call(null,lines_12201__$1);
var chunk__12053_12203 = null;
var count__12054_12204 = (0);
var i__12055_12205 = (0);
while(true){
if((i__12055_12205 < count__12054_12204)){
var vec__12056_12206 = cljs.core._nth.call(null,chunk__12053_12203,i__12055_12205);
var line_12207 = cljs.core.nth.call(null,vec__12056_12206,(0),null);
var cols_12208 = cljs.core.nth.call(null,vec__12056_12206,(1),null);
var seq__12059_12209 = cljs.core.seq.call(null,cols_12208);
var chunk__12060_12210 = null;
var count__12061_12211 = (0);
var i__12062_12212 = (0);
while(true){
if((i__12062_12212 < count__12061_12211)){
var vec__12063_12213 = cljs.core._nth.call(null,chunk__12060_12210,i__12062_12212);
var col_12214 = cljs.core.nth.call(null,vec__12063_12213,(0),null);
var infos_12215 = cljs.core.nth.call(null,vec__12063_12213,(1),null);
encode_cols.call(null,infos_12215,source_idx_12198,line_12207,col_12214);

var G__12216 = seq__12059_12209;
var G__12217 = chunk__12060_12210;
var G__12218 = count__12061_12211;
var G__12219 = (i__12062_12212 + (1));
seq__12059_12209 = G__12216;
chunk__12060_12210 = G__12217;
count__12061_12211 = G__12218;
i__12062_12212 = G__12219;
continue;
} else {
var temp__4657__auto___12220__$1 = cljs.core.seq.call(null,seq__12059_12209);
if(temp__4657__auto___12220__$1){
var seq__12059_12221__$1 = temp__4657__auto___12220__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12059_12221__$1)){
var c__9637__auto___12222 = cljs.core.chunk_first.call(null,seq__12059_12221__$1);
var G__12223 = cljs.core.chunk_rest.call(null,seq__12059_12221__$1);
var G__12224 = c__9637__auto___12222;
var G__12225 = cljs.core.count.call(null,c__9637__auto___12222);
var G__12226 = (0);
seq__12059_12209 = G__12223;
chunk__12060_12210 = G__12224;
count__12061_12211 = G__12225;
i__12062_12212 = G__12226;
continue;
} else {
var vec__12066_12227 = cljs.core.first.call(null,seq__12059_12221__$1);
var col_12228 = cljs.core.nth.call(null,vec__12066_12227,(0),null);
var infos_12229 = cljs.core.nth.call(null,vec__12066_12227,(1),null);
encode_cols.call(null,infos_12229,source_idx_12198,line_12207,col_12228);

var G__12230 = cljs.core.next.call(null,seq__12059_12221__$1);
var G__12231 = null;
var G__12232 = (0);
var G__12233 = (0);
seq__12059_12209 = G__12230;
chunk__12060_12210 = G__12231;
count__12061_12211 = G__12232;
i__12062_12212 = G__12233;
continue;
}
} else {
}
}
break;
}

var G__12234 = seq__12052_12202;
var G__12235 = chunk__12053_12203;
var G__12236 = count__12054_12204;
var G__12237 = (i__12055_12205 + (1));
seq__12052_12202 = G__12234;
chunk__12053_12203 = G__12235;
count__12054_12204 = G__12236;
i__12055_12205 = G__12237;
continue;
} else {
var temp__4657__auto___12238__$1 = cljs.core.seq.call(null,seq__12052_12202);
if(temp__4657__auto___12238__$1){
var seq__12052_12239__$1 = temp__4657__auto___12238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12052_12239__$1)){
var c__9637__auto___12240 = cljs.core.chunk_first.call(null,seq__12052_12239__$1);
var G__12241 = cljs.core.chunk_rest.call(null,seq__12052_12239__$1);
var G__12242 = c__9637__auto___12240;
var G__12243 = cljs.core.count.call(null,c__9637__auto___12240);
var G__12244 = (0);
seq__12052_12202 = G__12241;
chunk__12053_12203 = G__12242;
count__12054_12204 = G__12243;
i__12055_12205 = G__12244;
continue;
} else {
var vec__12069_12245 = cljs.core.first.call(null,seq__12052_12239__$1);
var line_12246 = cljs.core.nth.call(null,vec__12069_12245,(0),null);
var cols_12247 = cljs.core.nth.call(null,vec__12069_12245,(1),null);
var seq__12072_12248 = cljs.core.seq.call(null,cols_12247);
var chunk__12073_12249 = null;
var count__12074_12250 = (0);
var i__12075_12251 = (0);
while(true){
if((i__12075_12251 < count__12074_12250)){
var vec__12076_12252 = cljs.core._nth.call(null,chunk__12073_12249,i__12075_12251);
var col_12253 = cljs.core.nth.call(null,vec__12076_12252,(0),null);
var infos_12254 = cljs.core.nth.call(null,vec__12076_12252,(1),null);
encode_cols.call(null,infos_12254,source_idx_12198,line_12246,col_12253);

var G__12255 = seq__12072_12248;
var G__12256 = chunk__12073_12249;
var G__12257 = count__12074_12250;
var G__12258 = (i__12075_12251 + (1));
seq__12072_12248 = G__12255;
chunk__12073_12249 = G__12256;
count__12074_12250 = G__12257;
i__12075_12251 = G__12258;
continue;
} else {
var temp__4657__auto___12259__$2 = cljs.core.seq.call(null,seq__12072_12248);
if(temp__4657__auto___12259__$2){
var seq__12072_12260__$1 = temp__4657__auto___12259__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12072_12260__$1)){
var c__9637__auto___12261 = cljs.core.chunk_first.call(null,seq__12072_12260__$1);
var G__12262 = cljs.core.chunk_rest.call(null,seq__12072_12260__$1);
var G__12263 = c__9637__auto___12261;
var G__12264 = cljs.core.count.call(null,c__9637__auto___12261);
var G__12265 = (0);
seq__12072_12248 = G__12262;
chunk__12073_12249 = G__12263;
count__12074_12250 = G__12264;
i__12075_12251 = G__12265;
continue;
} else {
var vec__12079_12266 = cljs.core.first.call(null,seq__12072_12260__$1);
var col_12267 = cljs.core.nth.call(null,vec__12079_12266,(0),null);
var infos_12268 = cljs.core.nth.call(null,vec__12079_12266,(1),null);
encode_cols.call(null,infos_12268,source_idx_12198,line_12246,col_12267);

var G__12269 = cljs.core.next.call(null,seq__12072_12260__$1);
var G__12270 = null;
var G__12271 = (0);
var G__12272 = (0);
seq__12072_12248 = G__12269;
chunk__12073_12249 = G__12270;
count__12074_12250 = G__12271;
i__12075_12251 = G__12272;
continue;
}
} else {
}
}
break;
}

var G__12273 = cljs.core.next.call(null,seq__12052_12239__$1);
var G__12274 = null;
var G__12275 = (0);
var G__12276 = (0);
seq__12052_12202 = G__12273;
chunk__12053_12203 = G__12274;
count__12054_12204 = G__12275;
i__12055_12205 = G__12276;
continue;
}
} else {
}
}
break;
}

var G__12277 = cljs.core.next.call(null,seq__12006_12191__$1);
var G__12278 = null;
var G__12279 = (0);
var G__12280 = (0);
seq__12006_12102 = G__12277;
chunk__12007_12103 = G__12278;
count__12008_12104 = G__12279;
i__12009_12105 = G__12280;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12082 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11917_SHARP_){
return [cljs.core.str(p1__11917_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11918_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11918_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11919_SHARP_){
return clojure.string.join.call(null,",",p1__11919_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12083 = G__12082;
goog.object.set(G__12083,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12083;
} else {
return G__12082;
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
var vec__12290 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12290,(0),null);
var col_map = cljs.core.nth.call(null,vec__12290,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12293 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12293,(0),null);
var infos = cljs.core.nth.call(null,vec__12293,(1),null);
var G__12299 = cljs.core.next.call(null,col_map_seq);
var G__12300 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12293,col,infos,vec__12290,line,col_map){
return (function (v,p__12296){
var map__12297 = p__12296;
var map__12297__$1 = ((((!((map__12297 == null)))?((((map__12297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12297):map__12297);
var gline = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12293,col,infos,vec__12290,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12299;
new_cols = G__12300;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12301 = cljs.core.next.call(null,line_map_seq);
var G__12302 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12301;
new_lines = G__12302;
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
var seq__12365_12427 = cljs.core.seq.call(null,reverse_map);
var chunk__12366_12428 = null;
var count__12367_12429 = (0);
var i__12368_12430 = (0);
while(true){
if((i__12368_12430 < count__12367_12429)){
var vec__12369_12431 = cljs.core._nth.call(null,chunk__12366_12428,i__12368_12430);
var line_12432 = cljs.core.nth.call(null,vec__12369_12431,(0),null);
var columns_12433 = cljs.core.nth.call(null,vec__12369_12431,(1),null);
var seq__12372_12434 = cljs.core.seq.call(null,columns_12433);
var chunk__12373_12435 = null;
var count__12374_12436 = (0);
var i__12375_12437 = (0);
while(true){
if((i__12375_12437 < count__12374_12436)){
var vec__12376_12438 = cljs.core._nth.call(null,chunk__12373_12435,i__12375_12437);
var column_12439 = cljs.core.nth.call(null,vec__12376_12438,(0),null);
var column_info_12440 = cljs.core.nth.call(null,vec__12376_12438,(1),null);
var seq__12379_12441 = cljs.core.seq.call(null,column_info_12440);
var chunk__12380_12442 = null;
var count__12381_12443 = (0);
var i__12382_12444 = (0);
while(true){
if((i__12382_12444 < count__12381_12443)){
var map__12383_12445 = cljs.core._nth.call(null,chunk__12380_12442,i__12382_12444);
var map__12383_12446__$1 = ((((!((map__12383_12445 == null)))?((((map__12383_12445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12383_12445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12383_12445):map__12383_12445);
var gline_12447 = cljs.core.get.call(null,map__12383_12446__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12448 = cljs.core.get.call(null,map__12383_12446__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12449 = cljs.core.get.call(null,map__12383_12446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12447], null),cljs.core.fnil.call(null,((function (seq__12379_12441,chunk__12380_12442,count__12381_12443,i__12382_12444,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12383_12445,map__12383_12446__$1,gline_12447,gcol_12448,name_12449,vec__12376_12438,column_12439,column_info_12440,vec__12369_12431,line_12432,columns_12433,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12448], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12432,new cljs.core.Keyword(null,"col","col",-1959363084),column_12439,new cljs.core.Keyword(null,"name","name",1843675177),name_12449], null));
});})(seq__12379_12441,chunk__12380_12442,count__12381_12443,i__12382_12444,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12383_12445,map__12383_12446__$1,gline_12447,gcol_12448,name_12449,vec__12376_12438,column_12439,column_info_12440,vec__12369_12431,line_12432,columns_12433,inverted))
,cljs.core.sorted_map.call(null)));

var G__12450 = seq__12379_12441;
var G__12451 = chunk__12380_12442;
var G__12452 = count__12381_12443;
var G__12453 = (i__12382_12444 + (1));
seq__12379_12441 = G__12450;
chunk__12380_12442 = G__12451;
count__12381_12443 = G__12452;
i__12382_12444 = G__12453;
continue;
} else {
var temp__4657__auto___12454 = cljs.core.seq.call(null,seq__12379_12441);
if(temp__4657__auto___12454){
var seq__12379_12455__$1 = temp__4657__auto___12454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12379_12455__$1)){
var c__9637__auto___12456 = cljs.core.chunk_first.call(null,seq__12379_12455__$1);
var G__12457 = cljs.core.chunk_rest.call(null,seq__12379_12455__$1);
var G__12458 = c__9637__auto___12456;
var G__12459 = cljs.core.count.call(null,c__9637__auto___12456);
var G__12460 = (0);
seq__12379_12441 = G__12457;
chunk__12380_12442 = G__12458;
count__12381_12443 = G__12459;
i__12382_12444 = G__12460;
continue;
} else {
var map__12385_12461 = cljs.core.first.call(null,seq__12379_12455__$1);
var map__12385_12462__$1 = ((((!((map__12385_12461 == null)))?((((map__12385_12461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12385_12461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12385_12461):map__12385_12461);
var gline_12463 = cljs.core.get.call(null,map__12385_12462__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12464 = cljs.core.get.call(null,map__12385_12462__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12465 = cljs.core.get.call(null,map__12385_12462__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12463], null),cljs.core.fnil.call(null,((function (seq__12379_12441,chunk__12380_12442,count__12381_12443,i__12382_12444,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12385_12461,map__12385_12462__$1,gline_12463,gcol_12464,name_12465,seq__12379_12455__$1,temp__4657__auto___12454,vec__12376_12438,column_12439,column_info_12440,vec__12369_12431,line_12432,columns_12433,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12464], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12432,new cljs.core.Keyword(null,"col","col",-1959363084),column_12439,new cljs.core.Keyword(null,"name","name",1843675177),name_12465], null));
});})(seq__12379_12441,chunk__12380_12442,count__12381_12443,i__12382_12444,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12385_12461,map__12385_12462__$1,gline_12463,gcol_12464,name_12465,seq__12379_12455__$1,temp__4657__auto___12454,vec__12376_12438,column_12439,column_info_12440,vec__12369_12431,line_12432,columns_12433,inverted))
,cljs.core.sorted_map.call(null)));

var G__12466 = cljs.core.next.call(null,seq__12379_12455__$1);
var G__12467 = null;
var G__12468 = (0);
var G__12469 = (0);
seq__12379_12441 = G__12466;
chunk__12380_12442 = G__12467;
count__12381_12443 = G__12468;
i__12382_12444 = G__12469;
continue;
}
} else {
}
}
break;
}

var G__12470 = seq__12372_12434;
var G__12471 = chunk__12373_12435;
var G__12472 = count__12374_12436;
var G__12473 = (i__12375_12437 + (1));
seq__12372_12434 = G__12470;
chunk__12373_12435 = G__12471;
count__12374_12436 = G__12472;
i__12375_12437 = G__12473;
continue;
} else {
var temp__4657__auto___12474 = cljs.core.seq.call(null,seq__12372_12434);
if(temp__4657__auto___12474){
var seq__12372_12475__$1 = temp__4657__auto___12474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12372_12475__$1)){
var c__9637__auto___12476 = cljs.core.chunk_first.call(null,seq__12372_12475__$1);
var G__12477 = cljs.core.chunk_rest.call(null,seq__12372_12475__$1);
var G__12478 = c__9637__auto___12476;
var G__12479 = cljs.core.count.call(null,c__9637__auto___12476);
var G__12480 = (0);
seq__12372_12434 = G__12477;
chunk__12373_12435 = G__12478;
count__12374_12436 = G__12479;
i__12375_12437 = G__12480;
continue;
} else {
var vec__12387_12481 = cljs.core.first.call(null,seq__12372_12475__$1);
var column_12482 = cljs.core.nth.call(null,vec__12387_12481,(0),null);
var column_info_12483 = cljs.core.nth.call(null,vec__12387_12481,(1),null);
var seq__12390_12484 = cljs.core.seq.call(null,column_info_12483);
var chunk__12391_12485 = null;
var count__12392_12486 = (0);
var i__12393_12487 = (0);
while(true){
if((i__12393_12487 < count__12392_12486)){
var map__12394_12488 = cljs.core._nth.call(null,chunk__12391_12485,i__12393_12487);
var map__12394_12489__$1 = ((((!((map__12394_12488 == null)))?((((map__12394_12488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12394_12488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12394_12488):map__12394_12488);
var gline_12490 = cljs.core.get.call(null,map__12394_12489__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12491 = cljs.core.get.call(null,map__12394_12489__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12492 = cljs.core.get.call(null,map__12394_12489__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12490], null),cljs.core.fnil.call(null,((function (seq__12390_12484,chunk__12391_12485,count__12392_12486,i__12393_12487,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12394_12488,map__12394_12489__$1,gline_12490,gcol_12491,name_12492,vec__12387_12481,column_12482,column_info_12483,seq__12372_12475__$1,temp__4657__auto___12474,vec__12369_12431,line_12432,columns_12433,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12491], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12432,new cljs.core.Keyword(null,"col","col",-1959363084),column_12482,new cljs.core.Keyword(null,"name","name",1843675177),name_12492], null));
});})(seq__12390_12484,chunk__12391_12485,count__12392_12486,i__12393_12487,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12394_12488,map__12394_12489__$1,gline_12490,gcol_12491,name_12492,vec__12387_12481,column_12482,column_info_12483,seq__12372_12475__$1,temp__4657__auto___12474,vec__12369_12431,line_12432,columns_12433,inverted))
,cljs.core.sorted_map.call(null)));

var G__12493 = seq__12390_12484;
var G__12494 = chunk__12391_12485;
var G__12495 = count__12392_12486;
var G__12496 = (i__12393_12487 + (1));
seq__12390_12484 = G__12493;
chunk__12391_12485 = G__12494;
count__12392_12486 = G__12495;
i__12393_12487 = G__12496;
continue;
} else {
var temp__4657__auto___12497__$1 = cljs.core.seq.call(null,seq__12390_12484);
if(temp__4657__auto___12497__$1){
var seq__12390_12498__$1 = temp__4657__auto___12497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12390_12498__$1)){
var c__9637__auto___12499 = cljs.core.chunk_first.call(null,seq__12390_12498__$1);
var G__12500 = cljs.core.chunk_rest.call(null,seq__12390_12498__$1);
var G__12501 = c__9637__auto___12499;
var G__12502 = cljs.core.count.call(null,c__9637__auto___12499);
var G__12503 = (0);
seq__12390_12484 = G__12500;
chunk__12391_12485 = G__12501;
count__12392_12486 = G__12502;
i__12393_12487 = G__12503;
continue;
} else {
var map__12396_12504 = cljs.core.first.call(null,seq__12390_12498__$1);
var map__12396_12505__$1 = ((((!((map__12396_12504 == null)))?((((map__12396_12504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12396_12504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12396_12504):map__12396_12504);
var gline_12506 = cljs.core.get.call(null,map__12396_12505__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12507 = cljs.core.get.call(null,map__12396_12505__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12508 = cljs.core.get.call(null,map__12396_12505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12506], null),cljs.core.fnil.call(null,((function (seq__12390_12484,chunk__12391_12485,count__12392_12486,i__12393_12487,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12396_12504,map__12396_12505__$1,gline_12506,gcol_12507,name_12508,seq__12390_12498__$1,temp__4657__auto___12497__$1,vec__12387_12481,column_12482,column_info_12483,seq__12372_12475__$1,temp__4657__auto___12474,vec__12369_12431,line_12432,columns_12433,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12507], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12432,new cljs.core.Keyword(null,"col","col",-1959363084),column_12482,new cljs.core.Keyword(null,"name","name",1843675177),name_12508], null));
});})(seq__12390_12484,chunk__12391_12485,count__12392_12486,i__12393_12487,seq__12372_12434,chunk__12373_12435,count__12374_12436,i__12375_12437,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12396_12504,map__12396_12505__$1,gline_12506,gcol_12507,name_12508,seq__12390_12498__$1,temp__4657__auto___12497__$1,vec__12387_12481,column_12482,column_info_12483,seq__12372_12475__$1,temp__4657__auto___12474,vec__12369_12431,line_12432,columns_12433,inverted))
,cljs.core.sorted_map.call(null)));

var G__12509 = cljs.core.next.call(null,seq__12390_12498__$1);
var G__12510 = null;
var G__12511 = (0);
var G__12512 = (0);
seq__12390_12484 = G__12509;
chunk__12391_12485 = G__12510;
count__12392_12486 = G__12511;
i__12393_12487 = G__12512;
continue;
}
} else {
}
}
break;
}

var G__12513 = cljs.core.next.call(null,seq__12372_12475__$1);
var G__12514 = null;
var G__12515 = (0);
var G__12516 = (0);
seq__12372_12434 = G__12513;
chunk__12373_12435 = G__12514;
count__12374_12436 = G__12515;
i__12375_12437 = G__12516;
continue;
}
} else {
}
}
break;
}

var G__12517 = seq__12365_12427;
var G__12518 = chunk__12366_12428;
var G__12519 = count__12367_12429;
var G__12520 = (i__12368_12430 + (1));
seq__12365_12427 = G__12517;
chunk__12366_12428 = G__12518;
count__12367_12429 = G__12519;
i__12368_12430 = G__12520;
continue;
} else {
var temp__4657__auto___12521 = cljs.core.seq.call(null,seq__12365_12427);
if(temp__4657__auto___12521){
var seq__12365_12522__$1 = temp__4657__auto___12521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12365_12522__$1)){
var c__9637__auto___12523 = cljs.core.chunk_first.call(null,seq__12365_12522__$1);
var G__12524 = cljs.core.chunk_rest.call(null,seq__12365_12522__$1);
var G__12525 = c__9637__auto___12523;
var G__12526 = cljs.core.count.call(null,c__9637__auto___12523);
var G__12527 = (0);
seq__12365_12427 = G__12524;
chunk__12366_12428 = G__12525;
count__12367_12429 = G__12526;
i__12368_12430 = G__12527;
continue;
} else {
var vec__12398_12528 = cljs.core.first.call(null,seq__12365_12522__$1);
var line_12529 = cljs.core.nth.call(null,vec__12398_12528,(0),null);
var columns_12530 = cljs.core.nth.call(null,vec__12398_12528,(1),null);
var seq__12401_12531 = cljs.core.seq.call(null,columns_12530);
var chunk__12402_12532 = null;
var count__12403_12533 = (0);
var i__12404_12534 = (0);
while(true){
if((i__12404_12534 < count__12403_12533)){
var vec__12405_12535 = cljs.core._nth.call(null,chunk__12402_12532,i__12404_12534);
var column_12536 = cljs.core.nth.call(null,vec__12405_12535,(0),null);
var column_info_12537 = cljs.core.nth.call(null,vec__12405_12535,(1),null);
var seq__12408_12538 = cljs.core.seq.call(null,column_info_12537);
var chunk__12409_12539 = null;
var count__12410_12540 = (0);
var i__12411_12541 = (0);
while(true){
if((i__12411_12541 < count__12410_12540)){
var map__12412_12542 = cljs.core._nth.call(null,chunk__12409_12539,i__12411_12541);
var map__12412_12543__$1 = ((((!((map__12412_12542 == null)))?((((map__12412_12542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12412_12542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12412_12542):map__12412_12542);
var gline_12544 = cljs.core.get.call(null,map__12412_12543__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12545 = cljs.core.get.call(null,map__12412_12543__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12546 = cljs.core.get.call(null,map__12412_12543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12544], null),cljs.core.fnil.call(null,((function (seq__12408_12538,chunk__12409_12539,count__12410_12540,i__12411_12541,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12412_12542,map__12412_12543__$1,gline_12544,gcol_12545,name_12546,vec__12405_12535,column_12536,column_info_12537,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12545], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12529,new cljs.core.Keyword(null,"col","col",-1959363084),column_12536,new cljs.core.Keyword(null,"name","name",1843675177),name_12546], null));
});})(seq__12408_12538,chunk__12409_12539,count__12410_12540,i__12411_12541,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12412_12542,map__12412_12543__$1,gline_12544,gcol_12545,name_12546,vec__12405_12535,column_12536,column_info_12537,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted))
,cljs.core.sorted_map.call(null)));

var G__12547 = seq__12408_12538;
var G__12548 = chunk__12409_12539;
var G__12549 = count__12410_12540;
var G__12550 = (i__12411_12541 + (1));
seq__12408_12538 = G__12547;
chunk__12409_12539 = G__12548;
count__12410_12540 = G__12549;
i__12411_12541 = G__12550;
continue;
} else {
var temp__4657__auto___12551__$1 = cljs.core.seq.call(null,seq__12408_12538);
if(temp__4657__auto___12551__$1){
var seq__12408_12552__$1 = temp__4657__auto___12551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12408_12552__$1)){
var c__9637__auto___12553 = cljs.core.chunk_first.call(null,seq__12408_12552__$1);
var G__12554 = cljs.core.chunk_rest.call(null,seq__12408_12552__$1);
var G__12555 = c__9637__auto___12553;
var G__12556 = cljs.core.count.call(null,c__9637__auto___12553);
var G__12557 = (0);
seq__12408_12538 = G__12554;
chunk__12409_12539 = G__12555;
count__12410_12540 = G__12556;
i__12411_12541 = G__12557;
continue;
} else {
var map__12414_12558 = cljs.core.first.call(null,seq__12408_12552__$1);
var map__12414_12559__$1 = ((((!((map__12414_12558 == null)))?((((map__12414_12558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12414_12558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12414_12558):map__12414_12558);
var gline_12560 = cljs.core.get.call(null,map__12414_12559__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12561 = cljs.core.get.call(null,map__12414_12559__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12562 = cljs.core.get.call(null,map__12414_12559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12560], null),cljs.core.fnil.call(null,((function (seq__12408_12538,chunk__12409_12539,count__12410_12540,i__12411_12541,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12414_12558,map__12414_12559__$1,gline_12560,gcol_12561,name_12562,seq__12408_12552__$1,temp__4657__auto___12551__$1,vec__12405_12535,column_12536,column_info_12537,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12561], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12529,new cljs.core.Keyword(null,"col","col",-1959363084),column_12536,new cljs.core.Keyword(null,"name","name",1843675177),name_12562], null));
});})(seq__12408_12538,chunk__12409_12539,count__12410_12540,i__12411_12541,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12414_12558,map__12414_12559__$1,gline_12560,gcol_12561,name_12562,seq__12408_12552__$1,temp__4657__auto___12551__$1,vec__12405_12535,column_12536,column_info_12537,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted))
,cljs.core.sorted_map.call(null)));

var G__12563 = cljs.core.next.call(null,seq__12408_12552__$1);
var G__12564 = null;
var G__12565 = (0);
var G__12566 = (0);
seq__12408_12538 = G__12563;
chunk__12409_12539 = G__12564;
count__12410_12540 = G__12565;
i__12411_12541 = G__12566;
continue;
}
} else {
}
}
break;
}

var G__12567 = seq__12401_12531;
var G__12568 = chunk__12402_12532;
var G__12569 = count__12403_12533;
var G__12570 = (i__12404_12534 + (1));
seq__12401_12531 = G__12567;
chunk__12402_12532 = G__12568;
count__12403_12533 = G__12569;
i__12404_12534 = G__12570;
continue;
} else {
var temp__4657__auto___12571__$1 = cljs.core.seq.call(null,seq__12401_12531);
if(temp__4657__auto___12571__$1){
var seq__12401_12572__$1 = temp__4657__auto___12571__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12401_12572__$1)){
var c__9637__auto___12573 = cljs.core.chunk_first.call(null,seq__12401_12572__$1);
var G__12574 = cljs.core.chunk_rest.call(null,seq__12401_12572__$1);
var G__12575 = c__9637__auto___12573;
var G__12576 = cljs.core.count.call(null,c__9637__auto___12573);
var G__12577 = (0);
seq__12401_12531 = G__12574;
chunk__12402_12532 = G__12575;
count__12403_12533 = G__12576;
i__12404_12534 = G__12577;
continue;
} else {
var vec__12416_12578 = cljs.core.first.call(null,seq__12401_12572__$1);
var column_12579 = cljs.core.nth.call(null,vec__12416_12578,(0),null);
var column_info_12580 = cljs.core.nth.call(null,vec__12416_12578,(1),null);
var seq__12419_12581 = cljs.core.seq.call(null,column_info_12580);
var chunk__12420_12582 = null;
var count__12421_12583 = (0);
var i__12422_12584 = (0);
while(true){
if((i__12422_12584 < count__12421_12583)){
var map__12423_12585 = cljs.core._nth.call(null,chunk__12420_12582,i__12422_12584);
var map__12423_12586__$1 = ((((!((map__12423_12585 == null)))?((((map__12423_12585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12423_12585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12423_12585):map__12423_12585);
var gline_12587 = cljs.core.get.call(null,map__12423_12586__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12588 = cljs.core.get.call(null,map__12423_12586__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12589 = cljs.core.get.call(null,map__12423_12586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12587], null),cljs.core.fnil.call(null,((function (seq__12419_12581,chunk__12420_12582,count__12421_12583,i__12422_12584,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12423_12585,map__12423_12586__$1,gline_12587,gcol_12588,name_12589,vec__12416_12578,column_12579,column_info_12580,seq__12401_12572__$1,temp__4657__auto___12571__$1,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12588], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12529,new cljs.core.Keyword(null,"col","col",-1959363084),column_12579,new cljs.core.Keyword(null,"name","name",1843675177),name_12589], null));
});})(seq__12419_12581,chunk__12420_12582,count__12421_12583,i__12422_12584,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12423_12585,map__12423_12586__$1,gline_12587,gcol_12588,name_12589,vec__12416_12578,column_12579,column_info_12580,seq__12401_12572__$1,temp__4657__auto___12571__$1,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted))
,cljs.core.sorted_map.call(null)));

var G__12590 = seq__12419_12581;
var G__12591 = chunk__12420_12582;
var G__12592 = count__12421_12583;
var G__12593 = (i__12422_12584 + (1));
seq__12419_12581 = G__12590;
chunk__12420_12582 = G__12591;
count__12421_12583 = G__12592;
i__12422_12584 = G__12593;
continue;
} else {
var temp__4657__auto___12594__$2 = cljs.core.seq.call(null,seq__12419_12581);
if(temp__4657__auto___12594__$2){
var seq__12419_12595__$1 = temp__4657__auto___12594__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12419_12595__$1)){
var c__9637__auto___12596 = cljs.core.chunk_first.call(null,seq__12419_12595__$1);
var G__12597 = cljs.core.chunk_rest.call(null,seq__12419_12595__$1);
var G__12598 = c__9637__auto___12596;
var G__12599 = cljs.core.count.call(null,c__9637__auto___12596);
var G__12600 = (0);
seq__12419_12581 = G__12597;
chunk__12420_12582 = G__12598;
count__12421_12583 = G__12599;
i__12422_12584 = G__12600;
continue;
} else {
var map__12425_12601 = cljs.core.first.call(null,seq__12419_12595__$1);
var map__12425_12602__$1 = ((((!((map__12425_12601 == null)))?((((map__12425_12601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12425_12601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12425_12601):map__12425_12601);
var gline_12603 = cljs.core.get.call(null,map__12425_12602__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12604 = cljs.core.get.call(null,map__12425_12602__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12605 = cljs.core.get.call(null,map__12425_12602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12603], null),cljs.core.fnil.call(null,((function (seq__12419_12581,chunk__12420_12582,count__12421_12583,i__12422_12584,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12425_12601,map__12425_12602__$1,gline_12603,gcol_12604,name_12605,seq__12419_12595__$1,temp__4657__auto___12594__$2,vec__12416_12578,column_12579,column_info_12580,seq__12401_12572__$1,temp__4657__auto___12571__$1,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12604], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12529,new cljs.core.Keyword(null,"col","col",-1959363084),column_12579,new cljs.core.Keyword(null,"name","name",1843675177),name_12605], null));
});})(seq__12419_12581,chunk__12420_12582,count__12421_12583,i__12422_12584,seq__12401_12531,chunk__12402_12532,count__12403_12533,i__12404_12534,seq__12365_12427,chunk__12366_12428,count__12367_12429,i__12368_12430,map__12425_12601,map__12425_12602__$1,gline_12603,gcol_12604,name_12605,seq__12419_12595__$1,temp__4657__auto___12594__$2,vec__12416_12578,column_12579,column_info_12580,seq__12401_12572__$1,temp__4657__auto___12571__$1,vec__12398_12528,line_12529,columns_12530,seq__12365_12522__$1,temp__4657__auto___12521,inverted))
,cljs.core.sorted_map.call(null)));

var G__12606 = cljs.core.next.call(null,seq__12419_12595__$1);
var G__12607 = null;
var G__12608 = (0);
var G__12609 = (0);
seq__12419_12581 = G__12606;
chunk__12420_12582 = G__12607;
count__12421_12583 = G__12608;
i__12422_12584 = G__12609;
continue;
}
} else {
}
}
break;
}

var G__12610 = cljs.core.next.call(null,seq__12401_12572__$1);
var G__12611 = null;
var G__12612 = (0);
var G__12613 = (0);
seq__12401_12531 = G__12610;
chunk__12402_12532 = G__12611;
count__12403_12533 = G__12612;
i__12404_12534 = G__12613;
continue;
}
} else {
}
}
break;
}

var G__12614 = cljs.core.next.call(null,seq__12365_12522__$1);
var G__12615 = null;
var G__12616 = (0);
var G__12617 = (0);
seq__12365_12427 = G__12614;
chunk__12366_12428 = G__12615;
count__12367_12429 = G__12616;
i__12368_12430 = G__12617;
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