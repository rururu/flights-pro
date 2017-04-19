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
return cljs.core.reduce.call(null,(function (m,p__13280){
var vec__13281 = p__13280;
var i = cljs.core.nth.call(null,vec__13281,(0),null);
var v = cljs.core.nth.call(null,vec__13281,(1),null);
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
var vec__13287 = seg;
var gcol = cljs.core.nth.call(null,vec__13287,(0),null);
var source = cljs.core.nth.call(null,vec__13287,(1),null);
var line = cljs.core.nth.call(null,vec__13287,(2),null);
var col = cljs.core.nth.call(null,vec__13287,(3),null);
var name = cljs.core.nth.call(null,vec__13287,(4),null);
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
var vec__13296 = seg;
var gcol = cljs.core.nth.call(null,vec__13296,(0),null);
var source = cljs.core.nth.call(null,vec__13296,(1),null);
var line = cljs.core.nth.call(null,vec__13296,(2),null);
var col = cljs.core.nth.call(null,vec__13296,(3),null);
var name = cljs.core.nth.call(null,vec__13296,(4),null);
var vec__13299 = relseg;
var rgcol = cljs.core.nth.call(null,vec__13299,(0),null);
var rsource = cljs.core.nth.call(null,vec__13299,(1),null);
var rline = cljs.core.nth.call(null,vec__13299,(2),null);
var rcol = cljs.core.nth.call(null,vec__13299,(3),null);
var rname = cljs.core.nth.call(null,vec__13299,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__10277__auto__ = source;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__10277__auto__ = line;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__10277__auto__ = col;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__10277__auto__ = name;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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
var map__13304 = segmap;
var map__13304__$1 = ((((!((map__13304 == null)))?((((map__13304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13304):map__13304);
var gcol = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__13304,map__13304__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__13304,map__13304__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__13304,map__13304__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__13304,map__13304__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13304,map__13304__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__13304,map__13304__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args13306 = [];
var len__11385__auto___13312 = arguments.length;
var i__11386__auto___13313 = (0);
while(true){
if((i__11386__auto___13313 < len__11385__auto___13312)){
args13306.push((arguments[i__11386__auto___13313]));

var G__13314 = (i__11386__auto___13313 + (1));
i__11386__auto___13313 = G__13314;
continue;
} else {
}
break;
}

var G__13308 = args13306.length;
switch (G__13308) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13306.length)].join('')));

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
var vec__13309 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13316 = cljs.core.next.call(null,segs__$1);
var G__13317 = nrelseg;
var G__13318 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13316;
relseg__$1 = G__13317;
result__$1 = G__13318;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13309,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13309,(1),null);
var G__13319 = (gline + (1));
var G__13320 = cljs.core.next.call(null,lines__$1);
var G__13321 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13322 = result__$1;
gline = G__13319;
lines__$1 = G__13320;
relseg = G__13321;
result = G__13322;
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
var map__13326 = segmap;
var map__13326__$1 = ((((!((map__13326 == null)))?((((map__13326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13326):map__13326);
var gcol = cljs.core.get.call(null,map__13326__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13326__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13326__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13326__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13326__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__13326,map__13326__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__13326,map__13326__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__13323_SHARP_){
return cljs.core.conj.call(null,p1__13323_SHARP_,d__$1);
});})(map__13326,map__13326__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13326,map__13326__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args13328 = [];
var len__11385__auto___13334 = arguments.length;
var i__11386__auto___13335 = (0);
while(true){
if((i__11386__auto___13335 < len__11385__auto___13334)){
args13328.push((arguments[i__11386__auto___13335]));

var G__13336 = (i__11386__auto___13335 + (1));
i__11386__auto___13335 = G__13336;
continue;
} else {
}
break;
}

var G__13330 = args13328.length;
switch (G__13330) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13328.length)].join('')));

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
var vec__13331 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13338 = cljs.core.next.call(null,segs__$1);
var G__13339 = nrelseg;
var G__13340 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13338;
relseg__$1 = G__13339;
result__$1 = G__13340;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13331,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13331,(1),null);
var G__13341 = (gline + (1));
var G__13342 = cljs.core.next.call(null,lines__$1);
var G__13343 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13344 = result__$1;
gline = G__13341;
lines__$1 = G__13342;
relseg = G__13343;
result = G__13344;
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
return (function (p__13357){
var vec__13358 = p__13357;
var _ = cljs.core.nth.call(null,vec__13358,(0),null);
var source = cljs.core.nth.call(null,vec__13358,(1),null);
var line = cljs.core.nth.call(null,vec__13358,(2),null);
var col = cljs.core.nth.call(null,vec__13358,(3),null);
var name = cljs.core.nth.call(null,vec__13358,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__13361){
var vec__13362 = p__13361;
var gcol = cljs.core.nth.call(null,vec__13362,(0),null);
var sidx = cljs.core.nth.call(null,vec__13362,(1),null);
var line = cljs.core.nth.call(null,vec__13362,(2),null);
var col = cljs.core.nth.call(null,vec__13362,(3),null);
var name = cljs.core.nth.call(null,vec__13362,(4),null);
var seg = vec__13362;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__13362,gcol,sidx,line,col,name,seg,relseg){
return (function (p__13365){
var vec__13366 = p__13365;
var _ = cljs.core.nth.call(null,vec__13366,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13366,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__13366,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__13366,(3),null);
var lname = cljs.core.nth.call(null,vec__13366,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__10277__auto__ = name;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__13362,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__10277__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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
var seq__13454 = cljs.core.seq.call(null,infos);
var chunk__13455 = null;
var count__13456 = (0);
var i__13457 = (0);
while(true){
if((i__13457 < count__13456)){
var info = cljs.core._nth.call(null,chunk__13455,i__13457);
var segv_13536 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13537 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13538 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13537 > (lc_13538 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13454,chunk__13455,count__13456,i__13457,segv_13536,gline_13537,lc_13538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13537 - (lc_13538 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13536], null));
});})(seq__13454,chunk__13455,count__13456,i__13457,segv_13536,gline_13537,lc_13538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13454,chunk__13455,count__13456,i__13457,segv_13536,gline_13537,lc_13538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13537], null),cljs.core.conj,segv_13536);
});})(seq__13454,chunk__13455,count__13456,i__13457,segv_13536,gline_13537,lc_13538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13539 = seq__13454;
var G__13540 = chunk__13455;
var G__13541 = count__13456;
var G__13542 = (i__13457 + (1));
seq__13454 = G__13539;
chunk__13455 = G__13540;
count__13456 = G__13541;
i__13457 = G__13542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13454);
if(temp__4657__auto__){
var seq__13454__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13454__$1)){
var c__11091__auto__ = cljs.core.chunk_first.call(null,seq__13454__$1);
var G__13543 = cljs.core.chunk_rest.call(null,seq__13454__$1);
var G__13544 = c__11091__auto__;
var G__13545 = cljs.core.count.call(null,c__11091__auto__);
var G__13546 = (0);
seq__13454 = G__13543;
chunk__13455 = G__13544;
count__13456 = G__13545;
i__13457 = G__13546;
continue;
} else {
var info = cljs.core.first.call(null,seq__13454__$1);
var segv_13547 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13548 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13549 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13548 > (lc_13549 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13454,chunk__13455,count__13456,i__13457,segv_13547,gline_13548,lc_13549,info,seq__13454__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13548 - (lc_13549 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13547], null));
});})(seq__13454,chunk__13455,count__13456,i__13457,segv_13547,gline_13548,lc_13549,info,seq__13454__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13454,chunk__13455,count__13456,i__13457,segv_13547,gline_13548,lc_13549,info,seq__13454__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13548], null),cljs.core.conj,segv_13547);
});})(seq__13454,chunk__13455,count__13456,i__13457,segv_13547,gline_13548,lc_13549,info,seq__13454__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13550 = cljs.core.next.call(null,seq__13454__$1);
var G__13551 = null;
var G__13552 = (0);
var G__13553 = (0);
seq__13454 = G__13550;
chunk__13455 = G__13551;
count__13456 = G__13552;
i__13457 = G__13553;
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
var seq__13458_13554 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13459_13555 = null;
var count__13460_13556 = (0);
var i__13461_13557 = (0);
while(true){
if((i__13461_13557 < count__13460_13556)){
var vec__13462_13558 = cljs.core._nth.call(null,chunk__13459_13555,i__13461_13557);
var source_idx_13559 = cljs.core.nth.call(null,vec__13462_13558,(0),null);
var vec__13465_13560 = cljs.core.nth.call(null,vec__13462_13558,(1),null);
var __13561 = cljs.core.nth.call(null,vec__13465_13560,(0),null);
var lines_13562__$1 = cljs.core.nth.call(null,vec__13465_13560,(1),null);
var seq__13468_13563 = cljs.core.seq.call(null,lines_13562__$1);
var chunk__13469_13564 = null;
var count__13470_13565 = (0);
var i__13471_13566 = (0);
while(true){
if((i__13471_13566 < count__13470_13565)){
var vec__13472_13567 = cljs.core._nth.call(null,chunk__13469_13564,i__13471_13566);
var line_13568 = cljs.core.nth.call(null,vec__13472_13567,(0),null);
var cols_13569 = cljs.core.nth.call(null,vec__13472_13567,(1),null);
var seq__13475_13570 = cljs.core.seq.call(null,cols_13569);
var chunk__13476_13571 = null;
var count__13477_13572 = (0);
var i__13478_13573 = (0);
while(true){
if((i__13478_13573 < count__13477_13572)){
var vec__13479_13574 = cljs.core._nth.call(null,chunk__13476_13571,i__13478_13573);
var col_13575 = cljs.core.nth.call(null,vec__13479_13574,(0),null);
var infos_13576 = cljs.core.nth.call(null,vec__13479_13574,(1),null);
encode_cols.call(null,infos_13576,source_idx_13559,line_13568,col_13575);

var G__13577 = seq__13475_13570;
var G__13578 = chunk__13476_13571;
var G__13579 = count__13477_13572;
var G__13580 = (i__13478_13573 + (1));
seq__13475_13570 = G__13577;
chunk__13476_13571 = G__13578;
count__13477_13572 = G__13579;
i__13478_13573 = G__13580;
continue;
} else {
var temp__4657__auto___13581 = cljs.core.seq.call(null,seq__13475_13570);
if(temp__4657__auto___13581){
var seq__13475_13582__$1 = temp__4657__auto___13581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13475_13582__$1)){
var c__11091__auto___13583 = cljs.core.chunk_first.call(null,seq__13475_13582__$1);
var G__13584 = cljs.core.chunk_rest.call(null,seq__13475_13582__$1);
var G__13585 = c__11091__auto___13583;
var G__13586 = cljs.core.count.call(null,c__11091__auto___13583);
var G__13587 = (0);
seq__13475_13570 = G__13584;
chunk__13476_13571 = G__13585;
count__13477_13572 = G__13586;
i__13478_13573 = G__13587;
continue;
} else {
var vec__13482_13588 = cljs.core.first.call(null,seq__13475_13582__$1);
var col_13589 = cljs.core.nth.call(null,vec__13482_13588,(0),null);
var infos_13590 = cljs.core.nth.call(null,vec__13482_13588,(1),null);
encode_cols.call(null,infos_13590,source_idx_13559,line_13568,col_13589);

var G__13591 = cljs.core.next.call(null,seq__13475_13582__$1);
var G__13592 = null;
var G__13593 = (0);
var G__13594 = (0);
seq__13475_13570 = G__13591;
chunk__13476_13571 = G__13592;
count__13477_13572 = G__13593;
i__13478_13573 = G__13594;
continue;
}
} else {
}
}
break;
}

var G__13595 = seq__13468_13563;
var G__13596 = chunk__13469_13564;
var G__13597 = count__13470_13565;
var G__13598 = (i__13471_13566 + (1));
seq__13468_13563 = G__13595;
chunk__13469_13564 = G__13596;
count__13470_13565 = G__13597;
i__13471_13566 = G__13598;
continue;
} else {
var temp__4657__auto___13599 = cljs.core.seq.call(null,seq__13468_13563);
if(temp__4657__auto___13599){
var seq__13468_13600__$1 = temp__4657__auto___13599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13468_13600__$1)){
var c__11091__auto___13601 = cljs.core.chunk_first.call(null,seq__13468_13600__$1);
var G__13602 = cljs.core.chunk_rest.call(null,seq__13468_13600__$1);
var G__13603 = c__11091__auto___13601;
var G__13604 = cljs.core.count.call(null,c__11091__auto___13601);
var G__13605 = (0);
seq__13468_13563 = G__13602;
chunk__13469_13564 = G__13603;
count__13470_13565 = G__13604;
i__13471_13566 = G__13605;
continue;
} else {
var vec__13485_13606 = cljs.core.first.call(null,seq__13468_13600__$1);
var line_13607 = cljs.core.nth.call(null,vec__13485_13606,(0),null);
var cols_13608 = cljs.core.nth.call(null,vec__13485_13606,(1),null);
var seq__13488_13609 = cljs.core.seq.call(null,cols_13608);
var chunk__13489_13610 = null;
var count__13490_13611 = (0);
var i__13491_13612 = (0);
while(true){
if((i__13491_13612 < count__13490_13611)){
var vec__13492_13613 = cljs.core._nth.call(null,chunk__13489_13610,i__13491_13612);
var col_13614 = cljs.core.nth.call(null,vec__13492_13613,(0),null);
var infos_13615 = cljs.core.nth.call(null,vec__13492_13613,(1),null);
encode_cols.call(null,infos_13615,source_idx_13559,line_13607,col_13614);

var G__13616 = seq__13488_13609;
var G__13617 = chunk__13489_13610;
var G__13618 = count__13490_13611;
var G__13619 = (i__13491_13612 + (1));
seq__13488_13609 = G__13616;
chunk__13489_13610 = G__13617;
count__13490_13611 = G__13618;
i__13491_13612 = G__13619;
continue;
} else {
var temp__4657__auto___13620__$1 = cljs.core.seq.call(null,seq__13488_13609);
if(temp__4657__auto___13620__$1){
var seq__13488_13621__$1 = temp__4657__auto___13620__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13488_13621__$1)){
var c__11091__auto___13622 = cljs.core.chunk_first.call(null,seq__13488_13621__$1);
var G__13623 = cljs.core.chunk_rest.call(null,seq__13488_13621__$1);
var G__13624 = c__11091__auto___13622;
var G__13625 = cljs.core.count.call(null,c__11091__auto___13622);
var G__13626 = (0);
seq__13488_13609 = G__13623;
chunk__13489_13610 = G__13624;
count__13490_13611 = G__13625;
i__13491_13612 = G__13626;
continue;
} else {
var vec__13495_13627 = cljs.core.first.call(null,seq__13488_13621__$1);
var col_13628 = cljs.core.nth.call(null,vec__13495_13627,(0),null);
var infos_13629 = cljs.core.nth.call(null,vec__13495_13627,(1),null);
encode_cols.call(null,infos_13629,source_idx_13559,line_13607,col_13628);

var G__13630 = cljs.core.next.call(null,seq__13488_13621__$1);
var G__13631 = null;
var G__13632 = (0);
var G__13633 = (0);
seq__13488_13609 = G__13630;
chunk__13489_13610 = G__13631;
count__13490_13611 = G__13632;
i__13491_13612 = G__13633;
continue;
}
} else {
}
}
break;
}

var G__13634 = cljs.core.next.call(null,seq__13468_13600__$1);
var G__13635 = null;
var G__13636 = (0);
var G__13637 = (0);
seq__13468_13563 = G__13634;
chunk__13469_13564 = G__13635;
count__13470_13565 = G__13636;
i__13471_13566 = G__13637;
continue;
}
} else {
}
}
break;
}

var G__13638 = seq__13458_13554;
var G__13639 = chunk__13459_13555;
var G__13640 = count__13460_13556;
var G__13641 = (i__13461_13557 + (1));
seq__13458_13554 = G__13638;
chunk__13459_13555 = G__13639;
count__13460_13556 = G__13640;
i__13461_13557 = G__13641;
continue;
} else {
var temp__4657__auto___13642 = cljs.core.seq.call(null,seq__13458_13554);
if(temp__4657__auto___13642){
var seq__13458_13643__$1 = temp__4657__auto___13642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13458_13643__$1)){
var c__11091__auto___13644 = cljs.core.chunk_first.call(null,seq__13458_13643__$1);
var G__13645 = cljs.core.chunk_rest.call(null,seq__13458_13643__$1);
var G__13646 = c__11091__auto___13644;
var G__13647 = cljs.core.count.call(null,c__11091__auto___13644);
var G__13648 = (0);
seq__13458_13554 = G__13645;
chunk__13459_13555 = G__13646;
count__13460_13556 = G__13647;
i__13461_13557 = G__13648;
continue;
} else {
var vec__13498_13649 = cljs.core.first.call(null,seq__13458_13643__$1);
var source_idx_13650 = cljs.core.nth.call(null,vec__13498_13649,(0),null);
var vec__13501_13651 = cljs.core.nth.call(null,vec__13498_13649,(1),null);
var __13652 = cljs.core.nth.call(null,vec__13501_13651,(0),null);
var lines_13653__$1 = cljs.core.nth.call(null,vec__13501_13651,(1),null);
var seq__13504_13654 = cljs.core.seq.call(null,lines_13653__$1);
var chunk__13505_13655 = null;
var count__13506_13656 = (0);
var i__13507_13657 = (0);
while(true){
if((i__13507_13657 < count__13506_13656)){
var vec__13508_13658 = cljs.core._nth.call(null,chunk__13505_13655,i__13507_13657);
var line_13659 = cljs.core.nth.call(null,vec__13508_13658,(0),null);
var cols_13660 = cljs.core.nth.call(null,vec__13508_13658,(1),null);
var seq__13511_13661 = cljs.core.seq.call(null,cols_13660);
var chunk__13512_13662 = null;
var count__13513_13663 = (0);
var i__13514_13664 = (0);
while(true){
if((i__13514_13664 < count__13513_13663)){
var vec__13515_13665 = cljs.core._nth.call(null,chunk__13512_13662,i__13514_13664);
var col_13666 = cljs.core.nth.call(null,vec__13515_13665,(0),null);
var infos_13667 = cljs.core.nth.call(null,vec__13515_13665,(1),null);
encode_cols.call(null,infos_13667,source_idx_13650,line_13659,col_13666);

var G__13668 = seq__13511_13661;
var G__13669 = chunk__13512_13662;
var G__13670 = count__13513_13663;
var G__13671 = (i__13514_13664 + (1));
seq__13511_13661 = G__13668;
chunk__13512_13662 = G__13669;
count__13513_13663 = G__13670;
i__13514_13664 = G__13671;
continue;
} else {
var temp__4657__auto___13672__$1 = cljs.core.seq.call(null,seq__13511_13661);
if(temp__4657__auto___13672__$1){
var seq__13511_13673__$1 = temp__4657__auto___13672__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13511_13673__$1)){
var c__11091__auto___13674 = cljs.core.chunk_first.call(null,seq__13511_13673__$1);
var G__13675 = cljs.core.chunk_rest.call(null,seq__13511_13673__$1);
var G__13676 = c__11091__auto___13674;
var G__13677 = cljs.core.count.call(null,c__11091__auto___13674);
var G__13678 = (0);
seq__13511_13661 = G__13675;
chunk__13512_13662 = G__13676;
count__13513_13663 = G__13677;
i__13514_13664 = G__13678;
continue;
} else {
var vec__13518_13679 = cljs.core.first.call(null,seq__13511_13673__$1);
var col_13680 = cljs.core.nth.call(null,vec__13518_13679,(0),null);
var infos_13681 = cljs.core.nth.call(null,vec__13518_13679,(1),null);
encode_cols.call(null,infos_13681,source_idx_13650,line_13659,col_13680);

var G__13682 = cljs.core.next.call(null,seq__13511_13673__$1);
var G__13683 = null;
var G__13684 = (0);
var G__13685 = (0);
seq__13511_13661 = G__13682;
chunk__13512_13662 = G__13683;
count__13513_13663 = G__13684;
i__13514_13664 = G__13685;
continue;
}
} else {
}
}
break;
}

var G__13686 = seq__13504_13654;
var G__13687 = chunk__13505_13655;
var G__13688 = count__13506_13656;
var G__13689 = (i__13507_13657 + (1));
seq__13504_13654 = G__13686;
chunk__13505_13655 = G__13687;
count__13506_13656 = G__13688;
i__13507_13657 = G__13689;
continue;
} else {
var temp__4657__auto___13690__$1 = cljs.core.seq.call(null,seq__13504_13654);
if(temp__4657__auto___13690__$1){
var seq__13504_13691__$1 = temp__4657__auto___13690__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13504_13691__$1)){
var c__11091__auto___13692 = cljs.core.chunk_first.call(null,seq__13504_13691__$1);
var G__13693 = cljs.core.chunk_rest.call(null,seq__13504_13691__$1);
var G__13694 = c__11091__auto___13692;
var G__13695 = cljs.core.count.call(null,c__11091__auto___13692);
var G__13696 = (0);
seq__13504_13654 = G__13693;
chunk__13505_13655 = G__13694;
count__13506_13656 = G__13695;
i__13507_13657 = G__13696;
continue;
} else {
var vec__13521_13697 = cljs.core.first.call(null,seq__13504_13691__$1);
var line_13698 = cljs.core.nth.call(null,vec__13521_13697,(0),null);
var cols_13699 = cljs.core.nth.call(null,vec__13521_13697,(1),null);
var seq__13524_13700 = cljs.core.seq.call(null,cols_13699);
var chunk__13525_13701 = null;
var count__13526_13702 = (0);
var i__13527_13703 = (0);
while(true){
if((i__13527_13703 < count__13526_13702)){
var vec__13528_13704 = cljs.core._nth.call(null,chunk__13525_13701,i__13527_13703);
var col_13705 = cljs.core.nth.call(null,vec__13528_13704,(0),null);
var infos_13706 = cljs.core.nth.call(null,vec__13528_13704,(1),null);
encode_cols.call(null,infos_13706,source_idx_13650,line_13698,col_13705);

var G__13707 = seq__13524_13700;
var G__13708 = chunk__13525_13701;
var G__13709 = count__13526_13702;
var G__13710 = (i__13527_13703 + (1));
seq__13524_13700 = G__13707;
chunk__13525_13701 = G__13708;
count__13526_13702 = G__13709;
i__13527_13703 = G__13710;
continue;
} else {
var temp__4657__auto___13711__$2 = cljs.core.seq.call(null,seq__13524_13700);
if(temp__4657__auto___13711__$2){
var seq__13524_13712__$1 = temp__4657__auto___13711__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13524_13712__$1)){
var c__11091__auto___13713 = cljs.core.chunk_first.call(null,seq__13524_13712__$1);
var G__13714 = cljs.core.chunk_rest.call(null,seq__13524_13712__$1);
var G__13715 = c__11091__auto___13713;
var G__13716 = cljs.core.count.call(null,c__11091__auto___13713);
var G__13717 = (0);
seq__13524_13700 = G__13714;
chunk__13525_13701 = G__13715;
count__13526_13702 = G__13716;
i__13527_13703 = G__13717;
continue;
} else {
var vec__13531_13718 = cljs.core.first.call(null,seq__13524_13712__$1);
var col_13719 = cljs.core.nth.call(null,vec__13531_13718,(0),null);
var infos_13720 = cljs.core.nth.call(null,vec__13531_13718,(1),null);
encode_cols.call(null,infos_13720,source_idx_13650,line_13698,col_13719);

var G__13721 = cljs.core.next.call(null,seq__13524_13712__$1);
var G__13722 = null;
var G__13723 = (0);
var G__13724 = (0);
seq__13524_13700 = G__13721;
chunk__13525_13701 = G__13722;
count__13526_13702 = G__13723;
i__13527_13703 = G__13724;
continue;
}
} else {
}
}
break;
}

var G__13725 = cljs.core.next.call(null,seq__13504_13691__$1);
var G__13726 = null;
var G__13727 = (0);
var G__13728 = (0);
seq__13504_13654 = G__13725;
chunk__13505_13655 = G__13726;
count__13506_13656 = G__13727;
i__13507_13657 = G__13728;
continue;
}
} else {
}
}
break;
}

var G__13729 = cljs.core.next.call(null,seq__13458_13643__$1);
var G__13730 = null;
var G__13731 = (0);
var G__13732 = (0);
seq__13458_13554 = G__13729;
chunk__13459_13555 = G__13730;
count__13460_13556 = G__13731;
i__13461_13557 = G__13732;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13534 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13369_SHARP_){
return [cljs.core.str(p1__13369_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13370_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__13370_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13371_SHARP_){
return clojure.string.join.call(null,",",p1__13371_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__13535 = G__13534;
goog.object.set(G__13535,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__13535;
} else {
return G__13534;
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
var vec__13742 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13742,(0),null);
var col_map = cljs.core.nth.call(null,vec__13742,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13745 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13745,(0),null);
var infos = cljs.core.nth.call(null,vec__13745,(1),null);
var G__13751 = cljs.core.next.call(null,col_map_seq);
var G__13752 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13745,col,infos,vec__13742,line,col_map){
return (function (v,p__13748){
var map__13749 = p__13748;
var map__13749__$1 = ((((!((map__13749 == null)))?((((map__13749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13749):map__13749);
var gline = cljs.core.get.call(null,map__13749__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13749__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13745,col,infos,vec__13742,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13751;
new_cols = G__13752;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13753 = cljs.core.next.call(null,line_map_seq);
var G__13754 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13753;
new_lines = G__13754;
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
var seq__13817_13879 = cljs.core.seq.call(null,reverse_map);
var chunk__13818_13880 = null;
var count__13819_13881 = (0);
var i__13820_13882 = (0);
while(true){
if((i__13820_13882 < count__13819_13881)){
var vec__13821_13883 = cljs.core._nth.call(null,chunk__13818_13880,i__13820_13882);
var line_13884 = cljs.core.nth.call(null,vec__13821_13883,(0),null);
var columns_13885 = cljs.core.nth.call(null,vec__13821_13883,(1),null);
var seq__13824_13886 = cljs.core.seq.call(null,columns_13885);
var chunk__13825_13887 = null;
var count__13826_13888 = (0);
var i__13827_13889 = (0);
while(true){
if((i__13827_13889 < count__13826_13888)){
var vec__13828_13890 = cljs.core._nth.call(null,chunk__13825_13887,i__13827_13889);
var column_13891 = cljs.core.nth.call(null,vec__13828_13890,(0),null);
var column_info_13892 = cljs.core.nth.call(null,vec__13828_13890,(1),null);
var seq__13831_13893 = cljs.core.seq.call(null,column_info_13892);
var chunk__13832_13894 = null;
var count__13833_13895 = (0);
var i__13834_13896 = (0);
while(true){
if((i__13834_13896 < count__13833_13895)){
var map__13835_13897 = cljs.core._nth.call(null,chunk__13832_13894,i__13834_13896);
var map__13835_13898__$1 = ((((!((map__13835_13897 == null)))?((((map__13835_13897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13835_13897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13835_13897):map__13835_13897);
var gline_13899 = cljs.core.get.call(null,map__13835_13898__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13900 = cljs.core.get.call(null,map__13835_13898__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13901 = cljs.core.get.call(null,map__13835_13898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13899], null),cljs.core.fnil.call(null,((function (seq__13831_13893,chunk__13832_13894,count__13833_13895,i__13834_13896,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13835_13897,map__13835_13898__$1,gline_13899,gcol_13900,name_13901,vec__13828_13890,column_13891,column_info_13892,vec__13821_13883,line_13884,columns_13885,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13900], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13884,new cljs.core.Keyword(null,"col","col",-1959363084),column_13891,new cljs.core.Keyword(null,"name","name",1843675177),name_13901], null));
});})(seq__13831_13893,chunk__13832_13894,count__13833_13895,i__13834_13896,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13835_13897,map__13835_13898__$1,gline_13899,gcol_13900,name_13901,vec__13828_13890,column_13891,column_info_13892,vec__13821_13883,line_13884,columns_13885,inverted))
,cljs.core.sorted_map.call(null)));

var G__13902 = seq__13831_13893;
var G__13903 = chunk__13832_13894;
var G__13904 = count__13833_13895;
var G__13905 = (i__13834_13896 + (1));
seq__13831_13893 = G__13902;
chunk__13832_13894 = G__13903;
count__13833_13895 = G__13904;
i__13834_13896 = G__13905;
continue;
} else {
var temp__4657__auto___13906 = cljs.core.seq.call(null,seq__13831_13893);
if(temp__4657__auto___13906){
var seq__13831_13907__$1 = temp__4657__auto___13906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13831_13907__$1)){
var c__11091__auto___13908 = cljs.core.chunk_first.call(null,seq__13831_13907__$1);
var G__13909 = cljs.core.chunk_rest.call(null,seq__13831_13907__$1);
var G__13910 = c__11091__auto___13908;
var G__13911 = cljs.core.count.call(null,c__11091__auto___13908);
var G__13912 = (0);
seq__13831_13893 = G__13909;
chunk__13832_13894 = G__13910;
count__13833_13895 = G__13911;
i__13834_13896 = G__13912;
continue;
} else {
var map__13837_13913 = cljs.core.first.call(null,seq__13831_13907__$1);
var map__13837_13914__$1 = ((((!((map__13837_13913 == null)))?((((map__13837_13913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13837_13913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13837_13913):map__13837_13913);
var gline_13915 = cljs.core.get.call(null,map__13837_13914__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13916 = cljs.core.get.call(null,map__13837_13914__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13917 = cljs.core.get.call(null,map__13837_13914__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13915], null),cljs.core.fnil.call(null,((function (seq__13831_13893,chunk__13832_13894,count__13833_13895,i__13834_13896,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13837_13913,map__13837_13914__$1,gline_13915,gcol_13916,name_13917,seq__13831_13907__$1,temp__4657__auto___13906,vec__13828_13890,column_13891,column_info_13892,vec__13821_13883,line_13884,columns_13885,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13916], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13884,new cljs.core.Keyword(null,"col","col",-1959363084),column_13891,new cljs.core.Keyword(null,"name","name",1843675177),name_13917], null));
});})(seq__13831_13893,chunk__13832_13894,count__13833_13895,i__13834_13896,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13837_13913,map__13837_13914__$1,gline_13915,gcol_13916,name_13917,seq__13831_13907__$1,temp__4657__auto___13906,vec__13828_13890,column_13891,column_info_13892,vec__13821_13883,line_13884,columns_13885,inverted))
,cljs.core.sorted_map.call(null)));

var G__13918 = cljs.core.next.call(null,seq__13831_13907__$1);
var G__13919 = null;
var G__13920 = (0);
var G__13921 = (0);
seq__13831_13893 = G__13918;
chunk__13832_13894 = G__13919;
count__13833_13895 = G__13920;
i__13834_13896 = G__13921;
continue;
}
} else {
}
}
break;
}

var G__13922 = seq__13824_13886;
var G__13923 = chunk__13825_13887;
var G__13924 = count__13826_13888;
var G__13925 = (i__13827_13889 + (1));
seq__13824_13886 = G__13922;
chunk__13825_13887 = G__13923;
count__13826_13888 = G__13924;
i__13827_13889 = G__13925;
continue;
} else {
var temp__4657__auto___13926 = cljs.core.seq.call(null,seq__13824_13886);
if(temp__4657__auto___13926){
var seq__13824_13927__$1 = temp__4657__auto___13926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13824_13927__$1)){
var c__11091__auto___13928 = cljs.core.chunk_first.call(null,seq__13824_13927__$1);
var G__13929 = cljs.core.chunk_rest.call(null,seq__13824_13927__$1);
var G__13930 = c__11091__auto___13928;
var G__13931 = cljs.core.count.call(null,c__11091__auto___13928);
var G__13932 = (0);
seq__13824_13886 = G__13929;
chunk__13825_13887 = G__13930;
count__13826_13888 = G__13931;
i__13827_13889 = G__13932;
continue;
} else {
var vec__13839_13933 = cljs.core.first.call(null,seq__13824_13927__$1);
var column_13934 = cljs.core.nth.call(null,vec__13839_13933,(0),null);
var column_info_13935 = cljs.core.nth.call(null,vec__13839_13933,(1),null);
var seq__13842_13936 = cljs.core.seq.call(null,column_info_13935);
var chunk__13843_13937 = null;
var count__13844_13938 = (0);
var i__13845_13939 = (0);
while(true){
if((i__13845_13939 < count__13844_13938)){
var map__13846_13940 = cljs.core._nth.call(null,chunk__13843_13937,i__13845_13939);
var map__13846_13941__$1 = ((((!((map__13846_13940 == null)))?((((map__13846_13940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13846_13940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13846_13940):map__13846_13940);
var gline_13942 = cljs.core.get.call(null,map__13846_13941__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13943 = cljs.core.get.call(null,map__13846_13941__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13944 = cljs.core.get.call(null,map__13846_13941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13942], null),cljs.core.fnil.call(null,((function (seq__13842_13936,chunk__13843_13937,count__13844_13938,i__13845_13939,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13846_13940,map__13846_13941__$1,gline_13942,gcol_13943,name_13944,vec__13839_13933,column_13934,column_info_13935,seq__13824_13927__$1,temp__4657__auto___13926,vec__13821_13883,line_13884,columns_13885,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13943], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13884,new cljs.core.Keyword(null,"col","col",-1959363084),column_13934,new cljs.core.Keyword(null,"name","name",1843675177),name_13944], null));
});})(seq__13842_13936,chunk__13843_13937,count__13844_13938,i__13845_13939,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13846_13940,map__13846_13941__$1,gline_13942,gcol_13943,name_13944,vec__13839_13933,column_13934,column_info_13935,seq__13824_13927__$1,temp__4657__auto___13926,vec__13821_13883,line_13884,columns_13885,inverted))
,cljs.core.sorted_map.call(null)));

var G__13945 = seq__13842_13936;
var G__13946 = chunk__13843_13937;
var G__13947 = count__13844_13938;
var G__13948 = (i__13845_13939 + (1));
seq__13842_13936 = G__13945;
chunk__13843_13937 = G__13946;
count__13844_13938 = G__13947;
i__13845_13939 = G__13948;
continue;
} else {
var temp__4657__auto___13949__$1 = cljs.core.seq.call(null,seq__13842_13936);
if(temp__4657__auto___13949__$1){
var seq__13842_13950__$1 = temp__4657__auto___13949__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13842_13950__$1)){
var c__11091__auto___13951 = cljs.core.chunk_first.call(null,seq__13842_13950__$1);
var G__13952 = cljs.core.chunk_rest.call(null,seq__13842_13950__$1);
var G__13953 = c__11091__auto___13951;
var G__13954 = cljs.core.count.call(null,c__11091__auto___13951);
var G__13955 = (0);
seq__13842_13936 = G__13952;
chunk__13843_13937 = G__13953;
count__13844_13938 = G__13954;
i__13845_13939 = G__13955;
continue;
} else {
var map__13848_13956 = cljs.core.first.call(null,seq__13842_13950__$1);
var map__13848_13957__$1 = ((((!((map__13848_13956 == null)))?((((map__13848_13956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13848_13956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13848_13956):map__13848_13956);
var gline_13958 = cljs.core.get.call(null,map__13848_13957__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13959 = cljs.core.get.call(null,map__13848_13957__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13960 = cljs.core.get.call(null,map__13848_13957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13958], null),cljs.core.fnil.call(null,((function (seq__13842_13936,chunk__13843_13937,count__13844_13938,i__13845_13939,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13848_13956,map__13848_13957__$1,gline_13958,gcol_13959,name_13960,seq__13842_13950__$1,temp__4657__auto___13949__$1,vec__13839_13933,column_13934,column_info_13935,seq__13824_13927__$1,temp__4657__auto___13926,vec__13821_13883,line_13884,columns_13885,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13959], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13884,new cljs.core.Keyword(null,"col","col",-1959363084),column_13934,new cljs.core.Keyword(null,"name","name",1843675177),name_13960], null));
});})(seq__13842_13936,chunk__13843_13937,count__13844_13938,i__13845_13939,seq__13824_13886,chunk__13825_13887,count__13826_13888,i__13827_13889,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13848_13956,map__13848_13957__$1,gline_13958,gcol_13959,name_13960,seq__13842_13950__$1,temp__4657__auto___13949__$1,vec__13839_13933,column_13934,column_info_13935,seq__13824_13927__$1,temp__4657__auto___13926,vec__13821_13883,line_13884,columns_13885,inverted))
,cljs.core.sorted_map.call(null)));

var G__13961 = cljs.core.next.call(null,seq__13842_13950__$1);
var G__13962 = null;
var G__13963 = (0);
var G__13964 = (0);
seq__13842_13936 = G__13961;
chunk__13843_13937 = G__13962;
count__13844_13938 = G__13963;
i__13845_13939 = G__13964;
continue;
}
} else {
}
}
break;
}

var G__13965 = cljs.core.next.call(null,seq__13824_13927__$1);
var G__13966 = null;
var G__13967 = (0);
var G__13968 = (0);
seq__13824_13886 = G__13965;
chunk__13825_13887 = G__13966;
count__13826_13888 = G__13967;
i__13827_13889 = G__13968;
continue;
}
} else {
}
}
break;
}

var G__13969 = seq__13817_13879;
var G__13970 = chunk__13818_13880;
var G__13971 = count__13819_13881;
var G__13972 = (i__13820_13882 + (1));
seq__13817_13879 = G__13969;
chunk__13818_13880 = G__13970;
count__13819_13881 = G__13971;
i__13820_13882 = G__13972;
continue;
} else {
var temp__4657__auto___13973 = cljs.core.seq.call(null,seq__13817_13879);
if(temp__4657__auto___13973){
var seq__13817_13974__$1 = temp__4657__auto___13973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13817_13974__$1)){
var c__11091__auto___13975 = cljs.core.chunk_first.call(null,seq__13817_13974__$1);
var G__13976 = cljs.core.chunk_rest.call(null,seq__13817_13974__$1);
var G__13977 = c__11091__auto___13975;
var G__13978 = cljs.core.count.call(null,c__11091__auto___13975);
var G__13979 = (0);
seq__13817_13879 = G__13976;
chunk__13818_13880 = G__13977;
count__13819_13881 = G__13978;
i__13820_13882 = G__13979;
continue;
} else {
var vec__13850_13980 = cljs.core.first.call(null,seq__13817_13974__$1);
var line_13981 = cljs.core.nth.call(null,vec__13850_13980,(0),null);
var columns_13982 = cljs.core.nth.call(null,vec__13850_13980,(1),null);
var seq__13853_13983 = cljs.core.seq.call(null,columns_13982);
var chunk__13854_13984 = null;
var count__13855_13985 = (0);
var i__13856_13986 = (0);
while(true){
if((i__13856_13986 < count__13855_13985)){
var vec__13857_13987 = cljs.core._nth.call(null,chunk__13854_13984,i__13856_13986);
var column_13988 = cljs.core.nth.call(null,vec__13857_13987,(0),null);
var column_info_13989 = cljs.core.nth.call(null,vec__13857_13987,(1),null);
var seq__13860_13990 = cljs.core.seq.call(null,column_info_13989);
var chunk__13861_13991 = null;
var count__13862_13992 = (0);
var i__13863_13993 = (0);
while(true){
if((i__13863_13993 < count__13862_13992)){
var map__13864_13994 = cljs.core._nth.call(null,chunk__13861_13991,i__13863_13993);
var map__13864_13995__$1 = ((((!((map__13864_13994 == null)))?((((map__13864_13994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13864_13994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13864_13994):map__13864_13994);
var gline_13996 = cljs.core.get.call(null,map__13864_13995__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13997 = cljs.core.get.call(null,map__13864_13995__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13998 = cljs.core.get.call(null,map__13864_13995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13996], null),cljs.core.fnil.call(null,((function (seq__13860_13990,chunk__13861_13991,count__13862_13992,i__13863_13993,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13864_13994,map__13864_13995__$1,gline_13996,gcol_13997,name_13998,vec__13857_13987,column_13988,column_info_13989,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13997], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13981,new cljs.core.Keyword(null,"col","col",-1959363084),column_13988,new cljs.core.Keyword(null,"name","name",1843675177),name_13998], null));
});})(seq__13860_13990,chunk__13861_13991,count__13862_13992,i__13863_13993,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13864_13994,map__13864_13995__$1,gline_13996,gcol_13997,name_13998,vec__13857_13987,column_13988,column_info_13989,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted))
,cljs.core.sorted_map.call(null)));

var G__13999 = seq__13860_13990;
var G__14000 = chunk__13861_13991;
var G__14001 = count__13862_13992;
var G__14002 = (i__13863_13993 + (1));
seq__13860_13990 = G__13999;
chunk__13861_13991 = G__14000;
count__13862_13992 = G__14001;
i__13863_13993 = G__14002;
continue;
} else {
var temp__4657__auto___14003__$1 = cljs.core.seq.call(null,seq__13860_13990);
if(temp__4657__auto___14003__$1){
var seq__13860_14004__$1 = temp__4657__auto___14003__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13860_14004__$1)){
var c__11091__auto___14005 = cljs.core.chunk_first.call(null,seq__13860_14004__$1);
var G__14006 = cljs.core.chunk_rest.call(null,seq__13860_14004__$1);
var G__14007 = c__11091__auto___14005;
var G__14008 = cljs.core.count.call(null,c__11091__auto___14005);
var G__14009 = (0);
seq__13860_13990 = G__14006;
chunk__13861_13991 = G__14007;
count__13862_13992 = G__14008;
i__13863_13993 = G__14009;
continue;
} else {
var map__13866_14010 = cljs.core.first.call(null,seq__13860_14004__$1);
var map__13866_14011__$1 = ((((!((map__13866_14010 == null)))?((((map__13866_14010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13866_14010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13866_14010):map__13866_14010);
var gline_14012 = cljs.core.get.call(null,map__13866_14011__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14013 = cljs.core.get.call(null,map__13866_14011__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14014 = cljs.core.get.call(null,map__13866_14011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14012], null),cljs.core.fnil.call(null,((function (seq__13860_13990,chunk__13861_13991,count__13862_13992,i__13863_13993,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13866_14010,map__13866_14011__$1,gline_14012,gcol_14013,name_14014,seq__13860_14004__$1,temp__4657__auto___14003__$1,vec__13857_13987,column_13988,column_info_13989,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14013], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13981,new cljs.core.Keyword(null,"col","col",-1959363084),column_13988,new cljs.core.Keyword(null,"name","name",1843675177),name_14014], null));
});})(seq__13860_13990,chunk__13861_13991,count__13862_13992,i__13863_13993,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13866_14010,map__13866_14011__$1,gline_14012,gcol_14013,name_14014,seq__13860_14004__$1,temp__4657__auto___14003__$1,vec__13857_13987,column_13988,column_info_13989,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted))
,cljs.core.sorted_map.call(null)));

var G__14015 = cljs.core.next.call(null,seq__13860_14004__$1);
var G__14016 = null;
var G__14017 = (0);
var G__14018 = (0);
seq__13860_13990 = G__14015;
chunk__13861_13991 = G__14016;
count__13862_13992 = G__14017;
i__13863_13993 = G__14018;
continue;
}
} else {
}
}
break;
}

var G__14019 = seq__13853_13983;
var G__14020 = chunk__13854_13984;
var G__14021 = count__13855_13985;
var G__14022 = (i__13856_13986 + (1));
seq__13853_13983 = G__14019;
chunk__13854_13984 = G__14020;
count__13855_13985 = G__14021;
i__13856_13986 = G__14022;
continue;
} else {
var temp__4657__auto___14023__$1 = cljs.core.seq.call(null,seq__13853_13983);
if(temp__4657__auto___14023__$1){
var seq__13853_14024__$1 = temp__4657__auto___14023__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13853_14024__$1)){
var c__11091__auto___14025 = cljs.core.chunk_first.call(null,seq__13853_14024__$1);
var G__14026 = cljs.core.chunk_rest.call(null,seq__13853_14024__$1);
var G__14027 = c__11091__auto___14025;
var G__14028 = cljs.core.count.call(null,c__11091__auto___14025);
var G__14029 = (0);
seq__13853_13983 = G__14026;
chunk__13854_13984 = G__14027;
count__13855_13985 = G__14028;
i__13856_13986 = G__14029;
continue;
} else {
var vec__13868_14030 = cljs.core.first.call(null,seq__13853_14024__$1);
var column_14031 = cljs.core.nth.call(null,vec__13868_14030,(0),null);
var column_info_14032 = cljs.core.nth.call(null,vec__13868_14030,(1),null);
var seq__13871_14033 = cljs.core.seq.call(null,column_info_14032);
var chunk__13872_14034 = null;
var count__13873_14035 = (0);
var i__13874_14036 = (0);
while(true){
if((i__13874_14036 < count__13873_14035)){
var map__13875_14037 = cljs.core._nth.call(null,chunk__13872_14034,i__13874_14036);
var map__13875_14038__$1 = ((((!((map__13875_14037 == null)))?((((map__13875_14037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13875_14037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13875_14037):map__13875_14037);
var gline_14039 = cljs.core.get.call(null,map__13875_14038__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14040 = cljs.core.get.call(null,map__13875_14038__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14041 = cljs.core.get.call(null,map__13875_14038__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14039], null),cljs.core.fnil.call(null,((function (seq__13871_14033,chunk__13872_14034,count__13873_14035,i__13874_14036,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13875_14037,map__13875_14038__$1,gline_14039,gcol_14040,name_14041,vec__13868_14030,column_14031,column_info_14032,seq__13853_14024__$1,temp__4657__auto___14023__$1,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14040], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13981,new cljs.core.Keyword(null,"col","col",-1959363084),column_14031,new cljs.core.Keyword(null,"name","name",1843675177),name_14041], null));
});})(seq__13871_14033,chunk__13872_14034,count__13873_14035,i__13874_14036,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13875_14037,map__13875_14038__$1,gline_14039,gcol_14040,name_14041,vec__13868_14030,column_14031,column_info_14032,seq__13853_14024__$1,temp__4657__auto___14023__$1,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted))
,cljs.core.sorted_map.call(null)));

var G__14042 = seq__13871_14033;
var G__14043 = chunk__13872_14034;
var G__14044 = count__13873_14035;
var G__14045 = (i__13874_14036 + (1));
seq__13871_14033 = G__14042;
chunk__13872_14034 = G__14043;
count__13873_14035 = G__14044;
i__13874_14036 = G__14045;
continue;
} else {
var temp__4657__auto___14046__$2 = cljs.core.seq.call(null,seq__13871_14033);
if(temp__4657__auto___14046__$2){
var seq__13871_14047__$1 = temp__4657__auto___14046__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13871_14047__$1)){
var c__11091__auto___14048 = cljs.core.chunk_first.call(null,seq__13871_14047__$1);
var G__14049 = cljs.core.chunk_rest.call(null,seq__13871_14047__$1);
var G__14050 = c__11091__auto___14048;
var G__14051 = cljs.core.count.call(null,c__11091__auto___14048);
var G__14052 = (0);
seq__13871_14033 = G__14049;
chunk__13872_14034 = G__14050;
count__13873_14035 = G__14051;
i__13874_14036 = G__14052;
continue;
} else {
var map__13877_14053 = cljs.core.first.call(null,seq__13871_14047__$1);
var map__13877_14054__$1 = ((((!((map__13877_14053 == null)))?((((map__13877_14053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13877_14053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13877_14053):map__13877_14053);
var gline_14055 = cljs.core.get.call(null,map__13877_14054__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14056 = cljs.core.get.call(null,map__13877_14054__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14057 = cljs.core.get.call(null,map__13877_14054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14055], null),cljs.core.fnil.call(null,((function (seq__13871_14033,chunk__13872_14034,count__13873_14035,i__13874_14036,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13877_14053,map__13877_14054__$1,gline_14055,gcol_14056,name_14057,seq__13871_14047__$1,temp__4657__auto___14046__$2,vec__13868_14030,column_14031,column_info_14032,seq__13853_14024__$1,temp__4657__auto___14023__$1,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14056], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13981,new cljs.core.Keyword(null,"col","col",-1959363084),column_14031,new cljs.core.Keyword(null,"name","name",1843675177),name_14057], null));
});})(seq__13871_14033,chunk__13872_14034,count__13873_14035,i__13874_14036,seq__13853_13983,chunk__13854_13984,count__13855_13985,i__13856_13986,seq__13817_13879,chunk__13818_13880,count__13819_13881,i__13820_13882,map__13877_14053,map__13877_14054__$1,gline_14055,gcol_14056,name_14057,seq__13871_14047__$1,temp__4657__auto___14046__$2,vec__13868_14030,column_14031,column_info_14032,seq__13853_14024__$1,temp__4657__auto___14023__$1,vec__13850_13980,line_13981,columns_13982,seq__13817_13974__$1,temp__4657__auto___13973,inverted))
,cljs.core.sorted_map.call(null)));

var G__14058 = cljs.core.next.call(null,seq__13871_14047__$1);
var G__14059 = null;
var G__14060 = (0);
var G__14061 = (0);
seq__13871_14033 = G__14058;
chunk__13872_14034 = G__14059;
count__13873_14035 = G__14060;
i__13874_14036 = G__14061;
continue;
}
} else {
}
}
break;
}

var G__14062 = cljs.core.next.call(null,seq__13853_14024__$1);
var G__14063 = null;
var G__14064 = (0);
var G__14065 = (0);
seq__13853_13983 = G__14062;
chunk__13854_13984 = G__14063;
count__13855_13985 = G__14064;
i__13856_13986 = G__14065;
continue;
}
} else {
}
}
break;
}

var G__14066 = cljs.core.next.call(null,seq__13817_13974__$1);
var G__14067 = null;
var G__14068 = (0);
var G__14069 = (0);
seq__13817_13879 = G__14066;
chunk__13818_13880 = G__14067;
count__13819_13881 = G__14068;
i__13820_13882 = G__14069;
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