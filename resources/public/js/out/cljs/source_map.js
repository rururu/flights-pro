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
return cljs.core.reduce.call(null,(function (m,p__12248){
var vec__12249 = p__12248;
var i = cljs.core.nth.call(null,vec__12249,(0),null);
var v = cljs.core.nth.call(null,vec__12249,(1),null);
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
var vec__12255 = seg;
var gcol = cljs.core.nth.call(null,vec__12255,(0),null);
var source = cljs.core.nth.call(null,vec__12255,(1),null);
var line = cljs.core.nth.call(null,vec__12255,(2),null);
var col = cljs.core.nth.call(null,vec__12255,(3),null);
var name = cljs.core.nth.call(null,vec__12255,(4),null);
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
var vec__12264 = seg;
var gcol = cljs.core.nth.call(null,vec__12264,(0),null);
var source = cljs.core.nth.call(null,vec__12264,(1),null);
var line = cljs.core.nth.call(null,vec__12264,(2),null);
var col = cljs.core.nth.call(null,vec__12264,(3),null);
var name = cljs.core.nth.call(null,vec__12264,(4),null);
var vec__12267 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12267,(0),null);
var rsource = cljs.core.nth.call(null,vec__12267,(1),null);
var rline = cljs.core.nth.call(null,vec__12267,(2),null);
var rcol = cljs.core.nth.call(null,vec__12267,(3),null);
var rname = cljs.core.nth.call(null,vec__12267,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__9245__auto__ = source;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__9245__auto__ = line;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__9245__auto__ = col;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__9245__auto__ = name;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
var map__12272 = segmap;
var map__12272__$1 = ((((!((map__12272 == null)))?((((map__12272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12272):map__12272);
var gcol = cljs.core.get.call(null,map__12272__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12272__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12272__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12272__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12272,map__12272__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12272,map__12272__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12272,map__12272__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12272,map__12272__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12272,map__12272__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12272,map__12272__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args12274 = [];
var len__10353__auto___12280 = arguments.length;
var i__10354__auto___12281 = (0);
while(true){
if((i__10354__auto___12281 < len__10353__auto___12280)){
args12274.push((arguments[i__10354__auto___12281]));

var G__12282 = (i__10354__auto___12281 + (1));
i__10354__auto___12281 = G__12282;
continue;
} else {
}
break;
}

var G__12276 = args12274.length;
switch (G__12276) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12274.length)].join('')));

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
var vec__12277 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12284 = cljs.core.next.call(null,segs__$1);
var G__12285 = nrelseg;
var G__12286 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12284;
relseg__$1 = G__12285;
result__$1 = G__12286;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12277,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12277,(1),null);
var G__12287 = (gline + (1));
var G__12288 = cljs.core.next.call(null,lines__$1);
var G__12289 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12290 = result__$1;
gline = G__12287;
lines__$1 = G__12288;
relseg = G__12289;
result = G__12290;
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
var map__12294 = segmap;
var map__12294__$1 = ((((!((map__12294 == null)))?((((map__12294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12294):map__12294);
var gcol = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12294,map__12294__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12294,map__12294__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12291_SHARP_){
return cljs.core.conj.call(null,p1__12291_SHARP_,d__$1);
});})(map__12294,map__12294__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12294,map__12294__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args12296 = [];
var len__10353__auto___12302 = arguments.length;
var i__10354__auto___12303 = (0);
while(true){
if((i__10354__auto___12303 < len__10353__auto___12302)){
args12296.push((arguments[i__10354__auto___12303]));

var G__12304 = (i__10354__auto___12303 + (1));
i__10354__auto___12303 = G__12304;
continue;
} else {
}
break;
}

var G__12298 = args12296.length;
switch (G__12298) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12296.length)].join('')));

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
var vec__12299 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12306 = cljs.core.next.call(null,segs__$1);
var G__12307 = nrelseg;
var G__12308 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12306;
relseg__$1 = G__12307;
result__$1 = G__12308;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12299,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12299,(1),null);
var G__12309 = (gline + (1));
var G__12310 = cljs.core.next.call(null,lines__$1);
var G__12311 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12312 = result__$1;
gline = G__12309;
lines__$1 = G__12310;
relseg = G__12311;
result = G__12312;
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
return (function (p__12325){
var vec__12326 = p__12325;
var _ = cljs.core.nth.call(null,vec__12326,(0),null);
var source = cljs.core.nth.call(null,vec__12326,(1),null);
var line = cljs.core.nth.call(null,vec__12326,(2),null);
var col = cljs.core.nth.call(null,vec__12326,(3),null);
var name = cljs.core.nth.call(null,vec__12326,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12329){
var vec__12330 = p__12329;
var gcol = cljs.core.nth.call(null,vec__12330,(0),null);
var sidx = cljs.core.nth.call(null,vec__12330,(1),null);
var line = cljs.core.nth.call(null,vec__12330,(2),null);
var col = cljs.core.nth.call(null,vec__12330,(3),null);
var name = cljs.core.nth.call(null,vec__12330,(4),null);
var seg = vec__12330;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12330,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12333){
var vec__12334 = p__12333;
var _ = cljs.core.nth.call(null,vec__12334,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12334,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12334,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12334,(3),null);
var lname = cljs.core.nth.call(null,vec__12334,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__9245__auto__ = name;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12330,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__9245__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
var seq__12422 = cljs.core.seq.call(null,infos);
var chunk__12423 = null;
var count__12424 = (0);
var i__12425 = (0);
while(true){
if((i__12425 < count__12424)){
var info = cljs.core._nth.call(null,chunk__12423,i__12425);
var segv_12504 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12505 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12506 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12505 > (lc_12506 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12422,chunk__12423,count__12424,i__12425,segv_12504,gline_12505,lc_12506,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12505 - (lc_12506 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12504], null));
});})(seq__12422,chunk__12423,count__12424,i__12425,segv_12504,gline_12505,lc_12506,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12422,chunk__12423,count__12424,i__12425,segv_12504,gline_12505,lc_12506,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12505], null),cljs.core.conj,segv_12504);
});})(seq__12422,chunk__12423,count__12424,i__12425,segv_12504,gline_12505,lc_12506,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12507 = seq__12422;
var G__12508 = chunk__12423;
var G__12509 = count__12424;
var G__12510 = (i__12425 + (1));
seq__12422 = G__12507;
chunk__12423 = G__12508;
count__12424 = G__12509;
i__12425 = G__12510;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12422);
if(temp__4657__auto__){
var seq__12422__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12422__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__12422__$1);
var G__12511 = cljs.core.chunk_rest.call(null,seq__12422__$1);
var G__12512 = c__10059__auto__;
var G__12513 = cljs.core.count.call(null,c__10059__auto__);
var G__12514 = (0);
seq__12422 = G__12511;
chunk__12423 = G__12512;
count__12424 = G__12513;
i__12425 = G__12514;
continue;
} else {
var info = cljs.core.first.call(null,seq__12422__$1);
var segv_12515 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12516 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12517 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12516 > (lc_12517 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12422,chunk__12423,count__12424,i__12425,segv_12515,gline_12516,lc_12517,info,seq__12422__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12516 - (lc_12517 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12515], null));
});})(seq__12422,chunk__12423,count__12424,i__12425,segv_12515,gline_12516,lc_12517,info,seq__12422__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12422,chunk__12423,count__12424,i__12425,segv_12515,gline_12516,lc_12517,info,seq__12422__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12516], null),cljs.core.conj,segv_12515);
});})(seq__12422,chunk__12423,count__12424,i__12425,segv_12515,gline_12516,lc_12517,info,seq__12422__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12518 = cljs.core.next.call(null,seq__12422__$1);
var G__12519 = null;
var G__12520 = (0);
var G__12521 = (0);
seq__12422 = G__12518;
chunk__12423 = G__12519;
count__12424 = G__12520;
i__12425 = G__12521;
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
var seq__12426_12522 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12427_12523 = null;
var count__12428_12524 = (0);
var i__12429_12525 = (0);
while(true){
if((i__12429_12525 < count__12428_12524)){
var vec__12430_12526 = cljs.core._nth.call(null,chunk__12427_12523,i__12429_12525);
var source_idx_12527 = cljs.core.nth.call(null,vec__12430_12526,(0),null);
var vec__12433_12528 = cljs.core.nth.call(null,vec__12430_12526,(1),null);
var __12529 = cljs.core.nth.call(null,vec__12433_12528,(0),null);
var lines_12530__$1 = cljs.core.nth.call(null,vec__12433_12528,(1),null);
var seq__12436_12531 = cljs.core.seq.call(null,lines_12530__$1);
var chunk__12437_12532 = null;
var count__12438_12533 = (0);
var i__12439_12534 = (0);
while(true){
if((i__12439_12534 < count__12438_12533)){
var vec__12440_12535 = cljs.core._nth.call(null,chunk__12437_12532,i__12439_12534);
var line_12536 = cljs.core.nth.call(null,vec__12440_12535,(0),null);
var cols_12537 = cljs.core.nth.call(null,vec__12440_12535,(1),null);
var seq__12443_12538 = cljs.core.seq.call(null,cols_12537);
var chunk__12444_12539 = null;
var count__12445_12540 = (0);
var i__12446_12541 = (0);
while(true){
if((i__12446_12541 < count__12445_12540)){
var vec__12447_12542 = cljs.core._nth.call(null,chunk__12444_12539,i__12446_12541);
var col_12543 = cljs.core.nth.call(null,vec__12447_12542,(0),null);
var infos_12544 = cljs.core.nth.call(null,vec__12447_12542,(1),null);
encode_cols.call(null,infos_12544,source_idx_12527,line_12536,col_12543);

var G__12545 = seq__12443_12538;
var G__12546 = chunk__12444_12539;
var G__12547 = count__12445_12540;
var G__12548 = (i__12446_12541 + (1));
seq__12443_12538 = G__12545;
chunk__12444_12539 = G__12546;
count__12445_12540 = G__12547;
i__12446_12541 = G__12548;
continue;
} else {
var temp__4657__auto___12549 = cljs.core.seq.call(null,seq__12443_12538);
if(temp__4657__auto___12549){
var seq__12443_12550__$1 = temp__4657__auto___12549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12443_12550__$1)){
var c__10059__auto___12551 = cljs.core.chunk_first.call(null,seq__12443_12550__$1);
var G__12552 = cljs.core.chunk_rest.call(null,seq__12443_12550__$1);
var G__12553 = c__10059__auto___12551;
var G__12554 = cljs.core.count.call(null,c__10059__auto___12551);
var G__12555 = (0);
seq__12443_12538 = G__12552;
chunk__12444_12539 = G__12553;
count__12445_12540 = G__12554;
i__12446_12541 = G__12555;
continue;
} else {
var vec__12450_12556 = cljs.core.first.call(null,seq__12443_12550__$1);
var col_12557 = cljs.core.nth.call(null,vec__12450_12556,(0),null);
var infos_12558 = cljs.core.nth.call(null,vec__12450_12556,(1),null);
encode_cols.call(null,infos_12558,source_idx_12527,line_12536,col_12557);

var G__12559 = cljs.core.next.call(null,seq__12443_12550__$1);
var G__12560 = null;
var G__12561 = (0);
var G__12562 = (0);
seq__12443_12538 = G__12559;
chunk__12444_12539 = G__12560;
count__12445_12540 = G__12561;
i__12446_12541 = G__12562;
continue;
}
} else {
}
}
break;
}

var G__12563 = seq__12436_12531;
var G__12564 = chunk__12437_12532;
var G__12565 = count__12438_12533;
var G__12566 = (i__12439_12534 + (1));
seq__12436_12531 = G__12563;
chunk__12437_12532 = G__12564;
count__12438_12533 = G__12565;
i__12439_12534 = G__12566;
continue;
} else {
var temp__4657__auto___12567 = cljs.core.seq.call(null,seq__12436_12531);
if(temp__4657__auto___12567){
var seq__12436_12568__$1 = temp__4657__auto___12567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12436_12568__$1)){
var c__10059__auto___12569 = cljs.core.chunk_first.call(null,seq__12436_12568__$1);
var G__12570 = cljs.core.chunk_rest.call(null,seq__12436_12568__$1);
var G__12571 = c__10059__auto___12569;
var G__12572 = cljs.core.count.call(null,c__10059__auto___12569);
var G__12573 = (0);
seq__12436_12531 = G__12570;
chunk__12437_12532 = G__12571;
count__12438_12533 = G__12572;
i__12439_12534 = G__12573;
continue;
} else {
var vec__12453_12574 = cljs.core.first.call(null,seq__12436_12568__$1);
var line_12575 = cljs.core.nth.call(null,vec__12453_12574,(0),null);
var cols_12576 = cljs.core.nth.call(null,vec__12453_12574,(1),null);
var seq__12456_12577 = cljs.core.seq.call(null,cols_12576);
var chunk__12457_12578 = null;
var count__12458_12579 = (0);
var i__12459_12580 = (0);
while(true){
if((i__12459_12580 < count__12458_12579)){
var vec__12460_12581 = cljs.core._nth.call(null,chunk__12457_12578,i__12459_12580);
var col_12582 = cljs.core.nth.call(null,vec__12460_12581,(0),null);
var infos_12583 = cljs.core.nth.call(null,vec__12460_12581,(1),null);
encode_cols.call(null,infos_12583,source_idx_12527,line_12575,col_12582);

var G__12584 = seq__12456_12577;
var G__12585 = chunk__12457_12578;
var G__12586 = count__12458_12579;
var G__12587 = (i__12459_12580 + (1));
seq__12456_12577 = G__12584;
chunk__12457_12578 = G__12585;
count__12458_12579 = G__12586;
i__12459_12580 = G__12587;
continue;
} else {
var temp__4657__auto___12588__$1 = cljs.core.seq.call(null,seq__12456_12577);
if(temp__4657__auto___12588__$1){
var seq__12456_12589__$1 = temp__4657__auto___12588__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12456_12589__$1)){
var c__10059__auto___12590 = cljs.core.chunk_first.call(null,seq__12456_12589__$1);
var G__12591 = cljs.core.chunk_rest.call(null,seq__12456_12589__$1);
var G__12592 = c__10059__auto___12590;
var G__12593 = cljs.core.count.call(null,c__10059__auto___12590);
var G__12594 = (0);
seq__12456_12577 = G__12591;
chunk__12457_12578 = G__12592;
count__12458_12579 = G__12593;
i__12459_12580 = G__12594;
continue;
} else {
var vec__12463_12595 = cljs.core.first.call(null,seq__12456_12589__$1);
var col_12596 = cljs.core.nth.call(null,vec__12463_12595,(0),null);
var infos_12597 = cljs.core.nth.call(null,vec__12463_12595,(1),null);
encode_cols.call(null,infos_12597,source_idx_12527,line_12575,col_12596);

var G__12598 = cljs.core.next.call(null,seq__12456_12589__$1);
var G__12599 = null;
var G__12600 = (0);
var G__12601 = (0);
seq__12456_12577 = G__12598;
chunk__12457_12578 = G__12599;
count__12458_12579 = G__12600;
i__12459_12580 = G__12601;
continue;
}
} else {
}
}
break;
}

var G__12602 = cljs.core.next.call(null,seq__12436_12568__$1);
var G__12603 = null;
var G__12604 = (0);
var G__12605 = (0);
seq__12436_12531 = G__12602;
chunk__12437_12532 = G__12603;
count__12438_12533 = G__12604;
i__12439_12534 = G__12605;
continue;
}
} else {
}
}
break;
}

var G__12606 = seq__12426_12522;
var G__12607 = chunk__12427_12523;
var G__12608 = count__12428_12524;
var G__12609 = (i__12429_12525 + (1));
seq__12426_12522 = G__12606;
chunk__12427_12523 = G__12607;
count__12428_12524 = G__12608;
i__12429_12525 = G__12609;
continue;
} else {
var temp__4657__auto___12610 = cljs.core.seq.call(null,seq__12426_12522);
if(temp__4657__auto___12610){
var seq__12426_12611__$1 = temp__4657__auto___12610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12426_12611__$1)){
var c__10059__auto___12612 = cljs.core.chunk_first.call(null,seq__12426_12611__$1);
var G__12613 = cljs.core.chunk_rest.call(null,seq__12426_12611__$1);
var G__12614 = c__10059__auto___12612;
var G__12615 = cljs.core.count.call(null,c__10059__auto___12612);
var G__12616 = (0);
seq__12426_12522 = G__12613;
chunk__12427_12523 = G__12614;
count__12428_12524 = G__12615;
i__12429_12525 = G__12616;
continue;
} else {
var vec__12466_12617 = cljs.core.first.call(null,seq__12426_12611__$1);
var source_idx_12618 = cljs.core.nth.call(null,vec__12466_12617,(0),null);
var vec__12469_12619 = cljs.core.nth.call(null,vec__12466_12617,(1),null);
var __12620 = cljs.core.nth.call(null,vec__12469_12619,(0),null);
var lines_12621__$1 = cljs.core.nth.call(null,vec__12469_12619,(1),null);
var seq__12472_12622 = cljs.core.seq.call(null,lines_12621__$1);
var chunk__12473_12623 = null;
var count__12474_12624 = (0);
var i__12475_12625 = (0);
while(true){
if((i__12475_12625 < count__12474_12624)){
var vec__12476_12626 = cljs.core._nth.call(null,chunk__12473_12623,i__12475_12625);
var line_12627 = cljs.core.nth.call(null,vec__12476_12626,(0),null);
var cols_12628 = cljs.core.nth.call(null,vec__12476_12626,(1),null);
var seq__12479_12629 = cljs.core.seq.call(null,cols_12628);
var chunk__12480_12630 = null;
var count__12481_12631 = (0);
var i__12482_12632 = (0);
while(true){
if((i__12482_12632 < count__12481_12631)){
var vec__12483_12633 = cljs.core._nth.call(null,chunk__12480_12630,i__12482_12632);
var col_12634 = cljs.core.nth.call(null,vec__12483_12633,(0),null);
var infos_12635 = cljs.core.nth.call(null,vec__12483_12633,(1),null);
encode_cols.call(null,infos_12635,source_idx_12618,line_12627,col_12634);

var G__12636 = seq__12479_12629;
var G__12637 = chunk__12480_12630;
var G__12638 = count__12481_12631;
var G__12639 = (i__12482_12632 + (1));
seq__12479_12629 = G__12636;
chunk__12480_12630 = G__12637;
count__12481_12631 = G__12638;
i__12482_12632 = G__12639;
continue;
} else {
var temp__4657__auto___12640__$1 = cljs.core.seq.call(null,seq__12479_12629);
if(temp__4657__auto___12640__$1){
var seq__12479_12641__$1 = temp__4657__auto___12640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12479_12641__$1)){
var c__10059__auto___12642 = cljs.core.chunk_first.call(null,seq__12479_12641__$1);
var G__12643 = cljs.core.chunk_rest.call(null,seq__12479_12641__$1);
var G__12644 = c__10059__auto___12642;
var G__12645 = cljs.core.count.call(null,c__10059__auto___12642);
var G__12646 = (0);
seq__12479_12629 = G__12643;
chunk__12480_12630 = G__12644;
count__12481_12631 = G__12645;
i__12482_12632 = G__12646;
continue;
} else {
var vec__12486_12647 = cljs.core.first.call(null,seq__12479_12641__$1);
var col_12648 = cljs.core.nth.call(null,vec__12486_12647,(0),null);
var infos_12649 = cljs.core.nth.call(null,vec__12486_12647,(1),null);
encode_cols.call(null,infos_12649,source_idx_12618,line_12627,col_12648);

var G__12650 = cljs.core.next.call(null,seq__12479_12641__$1);
var G__12651 = null;
var G__12652 = (0);
var G__12653 = (0);
seq__12479_12629 = G__12650;
chunk__12480_12630 = G__12651;
count__12481_12631 = G__12652;
i__12482_12632 = G__12653;
continue;
}
} else {
}
}
break;
}

var G__12654 = seq__12472_12622;
var G__12655 = chunk__12473_12623;
var G__12656 = count__12474_12624;
var G__12657 = (i__12475_12625 + (1));
seq__12472_12622 = G__12654;
chunk__12473_12623 = G__12655;
count__12474_12624 = G__12656;
i__12475_12625 = G__12657;
continue;
} else {
var temp__4657__auto___12658__$1 = cljs.core.seq.call(null,seq__12472_12622);
if(temp__4657__auto___12658__$1){
var seq__12472_12659__$1 = temp__4657__auto___12658__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12472_12659__$1)){
var c__10059__auto___12660 = cljs.core.chunk_first.call(null,seq__12472_12659__$1);
var G__12661 = cljs.core.chunk_rest.call(null,seq__12472_12659__$1);
var G__12662 = c__10059__auto___12660;
var G__12663 = cljs.core.count.call(null,c__10059__auto___12660);
var G__12664 = (0);
seq__12472_12622 = G__12661;
chunk__12473_12623 = G__12662;
count__12474_12624 = G__12663;
i__12475_12625 = G__12664;
continue;
} else {
var vec__12489_12665 = cljs.core.first.call(null,seq__12472_12659__$1);
var line_12666 = cljs.core.nth.call(null,vec__12489_12665,(0),null);
var cols_12667 = cljs.core.nth.call(null,vec__12489_12665,(1),null);
var seq__12492_12668 = cljs.core.seq.call(null,cols_12667);
var chunk__12493_12669 = null;
var count__12494_12670 = (0);
var i__12495_12671 = (0);
while(true){
if((i__12495_12671 < count__12494_12670)){
var vec__12496_12672 = cljs.core._nth.call(null,chunk__12493_12669,i__12495_12671);
var col_12673 = cljs.core.nth.call(null,vec__12496_12672,(0),null);
var infos_12674 = cljs.core.nth.call(null,vec__12496_12672,(1),null);
encode_cols.call(null,infos_12674,source_idx_12618,line_12666,col_12673);

var G__12675 = seq__12492_12668;
var G__12676 = chunk__12493_12669;
var G__12677 = count__12494_12670;
var G__12678 = (i__12495_12671 + (1));
seq__12492_12668 = G__12675;
chunk__12493_12669 = G__12676;
count__12494_12670 = G__12677;
i__12495_12671 = G__12678;
continue;
} else {
var temp__4657__auto___12679__$2 = cljs.core.seq.call(null,seq__12492_12668);
if(temp__4657__auto___12679__$2){
var seq__12492_12680__$1 = temp__4657__auto___12679__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12492_12680__$1)){
var c__10059__auto___12681 = cljs.core.chunk_first.call(null,seq__12492_12680__$1);
var G__12682 = cljs.core.chunk_rest.call(null,seq__12492_12680__$1);
var G__12683 = c__10059__auto___12681;
var G__12684 = cljs.core.count.call(null,c__10059__auto___12681);
var G__12685 = (0);
seq__12492_12668 = G__12682;
chunk__12493_12669 = G__12683;
count__12494_12670 = G__12684;
i__12495_12671 = G__12685;
continue;
} else {
var vec__12499_12686 = cljs.core.first.call(null,seq__12492_12680__$1);
var col_12687 = cljs.core.nth.call(null,vec__12499_12686,(0),null);
var infos_12688 = cljs.core.nth.call(null,vec__12499_12686,(1),null);
encode_cols.call(null,infos_12688,source_idx_12618,line_12666,col_12687);

var G__12689 = cljs.core.next.call(null,seq__12492_12680__$1);
var G__12690 = null;
var G__12691 = (0);
var G__12692 = (0);
seq__12492_12668 = G__12689;
chunk__12493_12669 = G__12690;
count__12494_12670 = G__12691;
i__12495_12671 = G__12692;
continue;
}
} else {
}
}
break;
}

var G__12693 = cljs.core.next.call(null,seq__12472_12659__$1);
var G__12694 = null;
var G__12695 = (0);
var G__12696 = (0);
seq__12472_12622 = G__12693;
chunk__12473_12623 = G__12694;
count__12474_12624 = G__12695;
i__12475_12625 = G__12696;
continue;
}
} else {
}
}
break;
}

var G__12697 = cljs.core.next.call(null,seq__12426_12611__$1);
var G__12698 = null;
var G__12699 = (0);
var G__12700 = (0);
seq__12426_12522 = G__12697;
chunk__12427_12523 = G__12698;
count__12428_12524 = G__12699;
i__12429_12525 = G__12700;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12502 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12337_SHARP_){
return [cljs.core.str(p1__12337_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12338_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12338_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12339_SHARP_){
return clojure.string.join.call(null,",",p1__12339_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12503 = G__12502;
goog.object.set(G__12503,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12503;
} else {
return G__12502;
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
var vec__12710 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12710,(0),null);
var col_map = cljs.core.nth.call(null,vec__12710,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12713 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12713,(0),null);
var infos = cljs.core.nth.call(null,vec__12713,(1),null);
var G__12719 = cljs.core.next.call(null,col_map_seq);
var G__12720 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12713,col,infos,vec__12710,line,col_map){
return (function (v,p__12716){
var map__12717 = p__12716;
var map__12717__$1 = ((((!((map__12717 == null)))?((((map__12717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12717):map__12717);
var gline = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12713,col,infos,vec__12710,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12719;
new_cols = G__12720;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12721 = cljs.core.next.call(null,line_map_seq);
var G__12722 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12721;
new_lines = G__12722;
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
var seq__12785_12847 = cljs.core.seq.call(null,reverse_map);
var chunk__12786_12848 = null;
var count__12787_12849 = (0);
var i__12788_12850 = (0);
while(true){
if((i__12788_12850 < count__12787_12849)){
var vec__12789_12851 = cljs.core._nth.call(null,chunk__12786_12848,i__12788_12850);
var line_12852 = cljs.core.nth.call(null,vec__12789_12851,(0),null);
var columns_12853 = cljs.core.nth.call(null,vec__12789_12851,(1),null);
var seq__12792_12854 = cljs.core.seq.call(null,columns_12853);
var chunk__12793_12855 = null;
var count__12794_12856 = (0);
var i__12795_12857 = (0);
while(true){
if((i__12795_12857 < count__12794_12856)){
var vec__12796_12858 = cljs.core._nth.call(null,chunk__12793_12855,i__12795_12857);
var column_12859 = cljs.core.nth.call(null,vec__12796_12858,(0),null);
var column_info_12860 = cljs.core.nth.call(null,vec__12796_12858,(1),null);
var seq__12799_12861 = cljs.core.seq.call(null,column_info_12860);
var chunk__12800_12862 = null;
var count__12801_12863 = (0);
var i__12802_12864 = (0);
while(true){
if((i__12802_12864 < count__12801_12863)){
var map__12803_12865 = cljs.core._nth.call(null,chunk__12800_12862,i__12802_12864);
var map__12803_12866__$1 = ((((!((map__12803_12865 == null)))?((((map__12803_12865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12803_12865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12803_12865):map__12803_12865);
var gline_12867 = cljs.core.get.call(null,map__12803_12866__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12868 = cljs.core.get.call(null,map__12803_12866__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12869 = cljs.core.get.call(null,map__12803_12866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12867], null),cljs.core.fnil.call(null,((function (seq__12799_12861,chunk__12800_12862,count__12801_12863,i__12802_12864,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12803_12865,map__12803_12866__$1,gline_12867,gcol_12868,name_12869,vec__12796_12858,column_12859,column_info_12860,vec__12789_12851,line_12852,columns_12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12868], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12852,new cljs.core.Keyword(null,"col","col",-1959363084),column_12859,new cljs.core.Keyword(null,"name","name",1843675177),name_12869], null));
});})(seq__12799_12861,chunk__12800_12862,count__12801_12863,i__12802_12864,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12803_12865,map__12803_12866__$1,gline_12867,gcol_12868,name_12869,vec__12796_12858,column_12859,column_info_12860,vec__12789_12851,line_12852,columns_12853,inverted))
,cljs.core.sorted_map.call(null)));

var G__12870 = seq__12799_12861;
var G__12871 = chunk__12800_12862;
var G__12872 = count__12801_12863;
var G__12873 = (i__12802_12864 + (1));
seq__12799_12861 = G__12870;
chunk__12800_12862 = G__12871;
count__12801_12863 = G__12872;
i__12802_12864 = G__12873;
continue;
} else {
var temp__4657__auto___12874 = cljs.core.seq.call(null,seq__12799_12861);
if(temp__4657__auto___12874){
var seq__12799_12875__$1 = temp__4657__auto___12874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12799_12875__$1)){
var c__10059__auto___12876 = cljs.core.chunk_first.call(null,seq__12799_12875__$1);
var G__12877 = cljs.core.chunk_rest.call(null,seq__12799_12875__$1);
var G__12878 = c__10059__auto___12876;
var G__12879 = cljs.core.count.call(null,c__10059__auto___12876);
var G__12880 = (0);
seq__12799_12861 = G__12877;
chunk__12800_12862 = G__12878;
count__12801_12863 = G__12879;
i__12802_12864 = G__12880;
continue;
} else {
var map__12805_12881 = cljs.core.first.call(null,seq__12799_12875__$1);
var map__12805_12882__$1 = ((((!((map__12805_12881 == null)))?((((map__12805_12881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12805_12881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12805_12881):map__12805_12881);
var gline_12883 = cljs.core.get.call(null,map__12805_12882__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12884 = cljs.core.get.call(null,map__12805_12882__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12885 = cljs.core.get.call(null,map__12805_12882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12883], null),cljs.core.fnil.call(null,((function (seq__12799_12861,chunk__12800_12862,count__12801_12863,i__12802_12864,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12805_12881,map__12805_12882__$1,gline_12883,gcol_12884,name_12885,seq__12799_12875__$1,temp__4657__auto___12874,vec__12796_12858,column_12859,column_info_12860,vec__12789_12851,line_12852,columns_12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12884], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12852,new cljs.core.Keyword(null,"col","col",-1959363084),column_12859,new cljs.core.Keyword(null,"name","name",1843675177),name_12885], null));
});})(seq__12799_12861,chunk__12800_12862,count__12801_12863,i__12802_12864,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12805_12881,map__12805_12882__$1,gline_12883,gcol_12884,name_12885,seq__12799_12875__$1,temp__4657__auto___12874,vec__12796_12858,column_12859,column_info_12860,vec__12789_12851,line_12852,columns_12853,inverted))
,cljs.core.sorted_map.call(null)));

var G__12886 = cljs.core.next.call(null,seq__12799_12875__$1);
var G__12887 = null;
var G__12888 = (0);
var G__12889 = (0);
seq__12799_12861 = G__12886;
chunk__12800_12862 = G__12887;
count__12801_12863 = G__12888;
i__12802_12864 = G__12889;
continue;
}
} else {
}
}
break;
}

var G__12890 = seq__12792_12854;
var G__12891 = chunk__12793_12855;
var G__12892 = count__12794_12856;
var G__12893 = (i__12795_12857 + (1));
seq__12792_12854 = G__12890;
chunk__12793_12855 = G__12891;
count__12794_12856 = G__12892;
i__12795_12857 = G__12893;
continue;
} else {
var temp__4657__auto___12894 = cljs.core.seq.call(null,seq__12792_12854);
if(temp__4657__auto___12894){
var seq__12792_12895__$1 = temp__4657__auto___12894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12792_12895__$1)){
var c__10059__auto___12896 = cljs.core.chunk_first.call(null,seq__12792_12895__$1);
var G__12897 = cljs.core.chunk_rest.call(null,seq__12792_12895__$1);
var G__12898 = c__10059__auto___12896;
var G__12899 = cljs.core.count.call(null,c__10059__auto___12896);
var G__12900 = (0);
seq__12792_12854 = G__12897;
chunk__12793_12855 = G__12898;
count__12794_12856 = G__12899;
i__12795_12857 = G__12900;
continue;
} else {
var vec__12807_12901 = cljs.core.first.call(null,seq__12792_12895__$1);
var column_12902 = cljs.core.nth.call(null,vec__12807_12901,(0),null);
var column_info_12903 = cljs.core.nth.call(null,vec__12807_12901,(1),null);
var seq__12810_12904 = cljs.core.seq.call(null,column_info_12903);
var chunk__12811_12905 = null;
var count__12812_12906 = (0);
var i__12813_12907 = (0);
while(true){
if((i__12813_12907 < count__12812_12906)){
var map__12814_12908 = cljs.core._nth.call(null,chunk__12811_12905,i__12813_12907);
var map__12814_12909__$1 = ((((!((map__12814_12908 == null)))?((((map__12814_12908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12814_12908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12814_12908):map__12814_12908);
var gline_12910 = cljs.core.get.call(null,map__12814_12909__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12911 = cljs.core.get.call(null,map__12814_12909__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12912 = cljs.core.get.call(null,map__12814_12909__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12910], null),cljs.core.fnil.call(null,((function (seq__12810_12904,chunk__12811_12905,count__12812_12906,i__12813_12907,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12814_12908,map__12814_12909__$1,gline_12910,gcol_12911,name_12912,vec__12807_12901,column_12902,column_info_12903,seq__12792_12895__$1,temp__4657__auto___12894,vec__12789_12851,line_12852,columns_12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12911], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12852,new cljs.core.Keyword(null,"col","col",-1959363084),column_12902,new cljs.core.Keyword(null,"name","name",1843675177),name_12912], null));
});})(seq__12810_12904,chunk__12811_12905,count__12812_12906,i__12813_12907,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12814_12908,map__12814_12909__$1,gline_12910,gcol_12911,name_12912,vec__12807_12901,column_12902,column_info_12903,seq__12792_12895__$1,temp__4657__auto___12894,vec__12789_12851,line_12852,columns_12853,inverted))
,cljs.core.sorted_map.call(null)));

var G__12913 = seq__12810_12904;
var G__12914 = chunk__12811_12905;
var G__12915 = count__12812_12906;
var G__12916 = (i__12813_12907 + (1));
seq__12810_12904 = G__12913;
chunk__12811_12905 = G__12914;
count__12812_12906 = G__12915;
i__12813_12907 = G__12916;
continue;
} else {
var temp__4657__auto___12917__$1 = cljs.core.seq.call(null,seq__12810_12904);
if(temp__4657__auto___12917__$1){
var seq__12810_12918__$1 = temp__4657__auto___12917__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12810_12918__$1)){
var c__10059__auto___12919 = cljs.core.chunk_first.call(null,seq__12810_12918__$1);
var G__12920 = cljs.core.chunk_rest.call(null,seq__12810_12918__$1);
var G__12921 = c__10059__auto___12919;
var G__12922 = cljs.core.count.call(null,c__10059__auto___12919);
var G__12923 = (0);
seq__12810_12904 = G__12920;
chunk__12811_12905 = G__12921;
count__12812_12906 = G__12922;
i__12813_12907 = G__12923;
continue;
} else {
var map__12816_12924 = cljs.core.first.call(null,seq__12810_12918__$1);
var map__12816_12925__$1 = ((((!((map__12816_12924 == null)))?((((map__12816_12924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12816_12924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12816_12924):map__12816_12924);
var gline_12926 = cljs.core.get.call(null,map__12816_12925__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12927 = cljs.core.get.call(null,map__12816_12925__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12928 = cljs.core.get.call(null,map__12816_12925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12926], null),cljs.core.fnil.call(null,((function (seq__12810_12904,chunk__12811_12905,count__12812_12906,i__12813_12907,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12816_12924,map__12816_12925__$1,gline_12926,gcol_12927,name_12928,seq__12810_12918__$1,temp__4657__auto___12917__$1,vec__12807_12901,column_12902,column_info_12903,seq__12792_12895__$1,temp__4657__auto___12894,vec__12789_12851,line_12852,columns_12853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12927], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12852,new cljs.core.Keyword(null,"col","col",-1959363084),column_12902,new cljs.core.Keyword(null,"name","name",1843675177),name_12928], null));
});})(seq__12810_12904,chunk__12811_12905,count__12812_12906,i__12813_12907,seq__12792_12854,chunk__12793_12855,count__12794_12856,i__12795_12857,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12816_12924,map__12816_12925__$1,gline_12926,gcol_12927,name_12928,seq__12810_12918__$1,temp__4657__auto___12917__$1,vec__12807_12901,column_12902,column_info_12903,seq__12792_12895__$1,temp__4657__auto___12894,vec__12789_12851,line_12852,columns_12853,inverted))
,cljs.core.sorted_map.call(null)));

var G__12929 = cljs.core.next.call(null,seq__12810_12918__$1);
var G__12930 = null;
var G__12931 = (0);
var G__12932 = (0);
seq__12810_12904 = G__12929;
chunk__12811_12905 = G__12930;
count__12812_12906 = G__12931;
i__12813_12907 = G__12932;
continue;
}
} else {
}
}
break;
}

var G__12933 = cljs.core.next.call(null,seq__12792_12895__$1);
var G__12934 = null;
var G__12935 = (0);
var G__12936 = (0);
seq__12792_12854 = G__12933;
chunk__12793_12855 = G__12934;
count__12794_12856 = G__12935;
i__12795_12857 = G__12936;
continue;
}
} else {
}
}
break;
}

var G__12937 = seq__12785_12847;
var G__12938 = chunk__12786_12848;
var G__12939 = count__12787_12849;
var G__12940 = (i__12788_12850 + (1));
seq__12785_12847 = G__12937;
chunk__12786_12848 = G__12938;
count__12787_12849 = G__12939;
i__12788_12850 = G__12940;
continue;
} else {
var temp__4657__auto___12941 = cljs.core.seq.call(null,seq__12785_12847);
if(temp__4657__auto___12941){
var seq__12785_12942__$1 = temp__4657__auto___12941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12785_12942__$1)){
var c__10059__auto___12943 = cljs.core.chunk_first.call(null,seq__12785_12942__$1);
var G__12944 = cljs.core.chunk_rest.call(null,seq__12785_12942__$1);
var G__12945 = c__10059__auto___12943;
var G__12946 = cljs.core.count.call(null,c__10059__auto___12943);
var G__12947 = (0);
seq__12785_12847 = G__12944;
chunk__12786_12848 = G__12945;
count__12787_12849 = G__12946;
i__12788_12850 = G__12947;
continue;
} else {
var vec__12818_12948 = cljs.core.first.call(null,seq__12785_12942__$1);
var line_12949 = cljs.core.nth.call(null,vec__12818_12948,(0),null);
var columns_12950 = cljs.core.nth.call(null,vec__12818_12948,(1),null);
var seq__12821_12951 = cljs.core.seq.call(null,columns_12950);
var chunk__12822_12952 = null;
var count__12823_12953 = (0);
var i__12824_12954 = (0);
while(true){
if((i__12824_12954 < count__12823_12953)){
var vec__12825_12955 = cljs.core._nth.call(null,chunk__12822_12952,i__12824_12954);
var column_12956 = cljs.core.nth.call(null,vec__12825_12955,(0),null);
var column_info_12957 = cljs.core.nth.call(null,vec__12825_12955,(1),null);
var seq__12828_12958 = cljs.core.seq.call(null,column_info_12957);
var chunk__12829_12959 = null;
var count__12830_12960 = (0);
var i__12831_12961 = (0);
while(true){
if((i__12831_12961 < count__12830_12960)){
var map__12832_12962 = cljs.core._nth.call(null,chunk__12829_12959,i__12831_12961);
var map__12832_12963__$1 = ((((!((map__12832_12962 == null)))?((((map__12832_12962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12832_12962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12832_12962):map__12832_12962);
var gline_12964 = cljs.core.get.call(null,map__12832_12963__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12965 = cljs.core.get.call(null,map__12832_12963__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12966 = cljs.core.get.call(null,map__12832_12963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12964], null),cljs.core.fnil.call(null,((function (seq__12828_12958,chunk__12829_12959,count__12830_12960,i__12831_12961,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12832_12962,map__12832_12963__$1,gline_12964,gcol_12965,name_12966,vec__12825_12955,column_12956,column_info_12957,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12965], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12949,new cljs.core.Keyword(null,"col","col",-1959363084),column_12956,new cljs.core.Keyword(null,"name","name",1843675177),name_12966], null));
});})(seq__12828_12958,chunk__12829_12959,count__12830_12960,i__12831_12961,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12832_12962,map__12832_12963__$1,gline_12964,gcol_12965,name_12966,vec__12825_12955,column_12956,column_info_12957,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted))
,cljs.core.sorted_map.call(null)));

var G__12967 = seq__12828_12958;
var G__12968 = chunk__12829_12959;
var G__12969 = count__12830_12960;
var G__12970 = (i__12831_12961 + (1));
seq__12828_12958 = G__12967;
chunk__12829_12959 = G__12968;
count__12830_12960 = G__12969;
i__12831_12961 = G__12970;
continue;
} else {
var temp__4657__auto___12971__$1 = cljs.core.seq.call(null,seq__12828_12958);
if(temp__4657__auto___12971__$1){
var seq__12828_12972__$1 = temp__4657__auto___12971__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12828_12972__$1)){
var c__10059__auto___12973 = cljs.core.chunk_first.call(null,seq__12828_12972__$1);
var G__12974 = cljs.core.chunk_rest.call(null,seq__12828_12972__$1);
var G__12975 = c__10059__auto___12973;
var G__12976 = cljs.core.count.call(null,c__10059__auto___12973);
var G__12977 = (0);
seq__12828_12958 = G__12974;
chunk__12829_12959 = G__12975;
count__12830_12960 = G__12976;
i__12831_12961 = G__12977;
continue;
} else {
var map__12834_12978 = cljs.core.first.call(null,seq__12828_12972__$1);
var map__12834_12979__$1 = ((((!((map__12834_12978 == null)))?((((map__12834_12978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12834_12978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12834_12978):map__12834_12978);
var gline_12980 = cljs.core.get.call(null,map__12834_12979__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12981 = cljs.core.get.call(null,map__12834_12979__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12982 = cljs.core.get.call(null,map__12834_12979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12980], null),cljs.core.fnil.call(null,((function (seq__12828_12958,chunk__12829_12959,count__12830_12960,i__12831_12961,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12834_12978,map__12834_12979__$1,gline_12980,gcol_12981,name_12982,seq__12828_12972__$1,temp__4657__auto___12971__$1,vec__12825_12955,column_12956,column_info_12957,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12981], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12949,new cljs.core.Keyword(null,"col","col",-1959363084),column_12956,new cljs.core.Keyword(null,"name","name",1843675177),name_12982], null));
});})(seq__12828_12958,chunk__12829_12959,count__12830_12960,i__12831_12961,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12834_12978,map__12834_12979__$1,gline_12980,gcol_12981,name_12982,seq__12828_12972__$1,temp__4657__auto___12971__$1,vec__12825_12955,column_12956,column_info_12957,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted))
,cljs.core.sorted_map.call(null)));

var G__12983 = cljs.core.next.call(null,seq__12828_12972__$1);
var G__12984 = null;
var G__12985 = (0);
var G__12986 = (0);
seq__12828_12958 = G__12983;
chunk__12829_12959 = G__12984;
count__12830_12960 = G__12985;
i__12831_12961 = G__12986;
continue;
}
} else {
}
}
break;
}

var G__12987 = seq__12821_12951;
var G__12988 = chunk__12822_12952;
var G__12989 = count__12823_12953;
var G__12990 = (i__12824_12954 + (1));
seq__12821_12951 = G__12987;
chunk__12822_12952 = G__12988;
count__12823_12953 = G__12989;
i__12824_12954 = G__12990;
continue;
} else {
var temp__4657__auto___12991__$1 = cljs.core.seq.call(null,seq__12821_12951);
if(temp__4657__auto___12991__$1){
var seq__12821_12992__$1 = temp__4657__auto___12991__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12821_12992__$1)){
var c__10059__auto___12993 = cljs.core.chunk_first.call(null,seq__12821_12992__$1);
var G__12994 = cljs.core.chunk_rest.call(null,seq__12821_12992__$1);
var G__12995 = c__10059__auto___12993;
var G__12996 = cljs.core.count.call(null,c__10059__auto___12993);
var G__12997 = (0);
seq__12821_12951 = G__12994;
chunk__12822_12952 = G__12995;
count__12823_12953 = G__12996;
i__12824_12954 = G__12997;
continue;
} else {
var vec__12836_12998 = cljs.core.first.call(null,seq__12821_12992__$1);
var column_12999 = cljs.core.nth.call(null,vec__12836_12998,(0),null);
var column_info_13000 = cljs.core.nth.call(null,vec__12836_12998,(1),null);
var seq__12839_13001 = cljs.core.seq.call(null,column_info_13000);
var chunk__12840_13002 = null;
var count__12841_13003 = (0);
var i__12842_13004 = (0);
while(true){
if((i__12842_13004 < count__12841_13003)){
var map__12843_13005 = cljs.core._nth.call(null,chunk__12840_13002,i__12842_13004);
var map__12843_13006__$1 = ((((!((map__12843_13005 == null)))?((((map__12843_13005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12843_13005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12843_13005):map__12843_13005);
var gline_13007 = cljs.core.get.call(null,map__12843_13006__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13008 = cljs.core.get.call(null,map__12843_13006__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13009 = cljs.core.get.call(null,map__12843_13006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13007], null),cljs.core.fnil.call(null,((function (seq__12839_13001,chunk__12840_13002,count__12841_13003,i__12842_13004,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12843_13005,map__12843_13006__$1,gline_13007,gcol_13008,name_13009,vec__12836_12998,column_12999,column_info_13000,seq__12821_12992__$1,temp__4657__auto___12991__$1,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13008], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12949,new cljs.core.Keyword(null,"col","col",-1959363084),column_12999,new cljs.core.Keyword(null,"name","name",1843675177),name_13009], null));
});})(seq__12839_13001,chunk__12840_13002,count__12841_13003,i__12842_13004,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12843_13005,map__12843_13006__$1,gline_13007,gcol_13008,name_13009,vec__12836_12998,column_12999,column_info_13000,seq__12821_12992__$1,temp__4657__auto___12991__$1,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted))
,cljs.core.sorted_map.call(null)));

var G__13010 = seq__12839_13001;
var G__13011 = chunk__12840_13002;
var G__13012 = count__12841_13003;
var G__13013 = (i__12842_13004 + (1));
seq__12839_13001 = G__13010;
chunk__12840_13002 = G__13011;
count__12841_13003 = G__13012;
i__12842_13004 = G__13013;
continue;
} else {
var temp__4657__auto___13014__$2 = cljs.core.seq.call(null,seq__12839_13001);
if(temp__4657__auto___13014__$2){
var seq__12839_13015__$1 = temp__4657__auto___13014__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12839_13015__$1)){
var c__10059__auto___13016 = cljs.core.chunk_first.call(null,seq__12839_13015__$1);
var G__13017 = cljs.core.chunk_rest.call(null,seq__12839_13015__$1);
var G__13018 = c__10059__auto___13016;
var G__13019 = cljs.core.count.call(null,c__10059__auto___13016);
var G__13020 = (0);
seq__12839_13001 = G__13017;
chunk__12840_13002 = G__13018;
count__12841_13003 = G__13019;
i__12842_13004 = G__13020;
continue;
} else {
var map__12845_13021 = cljs.core.first.call(null,seq__12839_13015__$1);
var map__12845_13022__$1 = ((((!((map__12845_13021 == null)))?((((map__12845_13021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12845_13021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12845_13021):map__12845_13021);
var gline_13023 = cljs.core.get.call(null,map__12845_13022__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13024 = cljs.core.get.call(null,map__12845_13022__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13025 = cljs.core.get.call(null,map__12845_13022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13023], null),cljs.core.fnil.call(null,((function (seq__12839_13001,chunk__12840_13002,count__12841_13003,i__12842_13004,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12845_13021,map__12845_13022__$1,gline_13023,gcol_13024,name_13025,seq__12839_13015__$1,temp__4657__auto___13014__$2,vec__12836_12998,column_12999,column_info_13000,seq__12821_12992__$1,temp__4657__auto___12991__$1,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13024], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12949,new cljs.core.Keyword(null,"col","col",-1959363084),column_12999,new cljs.core.Keyword(null,"name","name",1843675177),name_13025], null));
});})(seq__12839_13001,chunk__12840_13002,count__12841_13003,i__12842_13004,seq__12821_12951,chunk__12822_12952,count__12823_12953,i__12824_12954,seq__12785_12847,chunk__12786_12848,count__12787_12849,i__12788_12850,map__12845_13021,map__12845_13022__$1,gline_13023,gcol_13024,name_13025,seq__12839_13015__$1,temp__4657__auto___13014__$2,vec__12836_12998,column_12999,column_info_13000,seq__12821_12992__$1,temp__4657__auto___12991__$1,vec__12818_12948,line_12949,columns_12950,seq__12785_12942__$1,temp__4657__auto___12941,inverted))
,cljs.core.sorted_map.call(null)));

var G__13026 = cljs.core.next.call(null,seq__12839_13015__$1);
var G__13027 = null;
var G__13028 = (0);
var G__13029 = (0);
seq__12839_13001 = G__13026;
chunk__12840_13002 = G__13027;
count__12841_13003 = G__13028;
i__12842_13004 = G__13029;
continue;
}
} else {
}
}
break;
}

var G__13030 = cljs.core.next.call(null,seq__12821_12992__$1);
var G__13031 = null;
var G__13032 = (0);
var G__13033 = (0);
seq__12821_12951 = G__13030;
chunk__12822_12952 = G__13031;
count__12823_12953 = G__13032;
i__12824_12954 = G__13033;
continue;
}
} else {
}
}
break;
}

var G__13034 = cljs.core.next.call(null,seq__12785_12942__$1);
var G__13035 = null;
var G__13036 = (0);
var G__13037 = (0);
seq__12785_12847 = G__13034;
chunk__12786_12848 = G__13035;
count__12787_12849 = G__13036;
i__12788_12850 = G__13037;
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