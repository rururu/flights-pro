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
return cljs.core.reduce.call(null,(function (m,p__11484){
var vec__11485 = p__11484;
var i = cljs.core.nth.call(null,vec__11485,(0),null);
var v = cljs.core.nth.call(null,vec__11485,(1),null);
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
var vec__11491 = seg;
var gcol = cljs.core.nth.call(null,vec__11491,(0),null);
var source = cljs.core.nth.call(null,vec__11491,(1),null);
var line = cljs.core.nth.call(null,vec__11491,(2),null);
var col = cljs.core.nth.call(null,vec__11491,(3),null);
var name = cljs.core.nth.call(null,vec__11491,(4),null);
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
var vec__11500 = seg;
var gcol = cljs.core.nth.call(null,vec__11500,(0),null);
var source = cljs.core.nth.call(null,vec__11500,(1),null);
var line = cljs.core.nth.call(null,vec__11500,(2),null);
var col = cljs.core.nth.call(null,vec__11500,(3),null);
var name = cljs.core.nth.call(null,vec__11500,(4),null);
var vec__11503 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11503,(0),null);
var rsource = cljs.core.nth.call(null,vec__11503,(1),null);
var rline = cljs.core.nth.call(null,vec__11503,(2),null);
var rcol = cljs.core.nth.call(null,vec__11503,(3),null);
var rname = cljs.core.nth.call(null,vec__11503,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8505__auto__ = source;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8505__auto__ = line;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8505__auto__ = col;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8505__auto__ = name;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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
var map__11508 = segmap;
var map__11508__$1 = ((((!((map__11508 == null)))?((((map__11508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11508):map__11508);
var gcol = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__11508,map__11508__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__11508,map__11508__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__11508,map__11508__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__11508,map__11508__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11508,map__11508__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__11508,map__11508__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args11510 = [];
var len__9613__auto___11516 = arguments.length;
var i__9614__auto___11517 = (0);
while(true){
if((i__9614__auto___11517 < len__9613__auto___11516)){
args11510.push((arguments[i__9614__auto___11517]));

var G__11518 = (i__9614__auto___11517 + (1));
i__9614__auto___11517 = G__11518;
continue;
} else {
}
break;
}

var G__11512 = args11510.length;
switch (G__11512) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11510.length)].join('')));

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
var vec__11513 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11520 = cljs.core.next.call(null,segs__$1);
var G__11521 = nrelseg;
var G__11522 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11520;
relseg__$1 = G__11521;
result__$1 = G__11522;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11513,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11513,(1),null);
var G__11523 = (gline + (1));
var G__11524 = cljs.core.next.call(null,lines__$1);
var G__11525 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11526 = result__$1;
gline = G__11523;
lines__$1 = G__11524;
relseg = G__11525;
result = G__11526;
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
var map__11530 = segmap;
var map__11530__$1 = ((((!((map__11530 == null)))?((((map__11530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11530):map__11530);
var gcol = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__11530,map__11530__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__11530,map__11530__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11527_SHARP_){
return cljs.core.conj.call(null,p1__11527_SHARP_,d__$1);
});})(map__11530,map__11530__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11530,map__11530__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args11532 = [];
var len__9613__auto___11538 = arguments.length;
var i__9614__auto___11539 = (0);
while(true){
if((i__9614__auto___11539 < len__9613__auto___11538)){
args11532.push((arguments[i__9614__auto___11539]));

var G__11540 = (i__9614__auto___11539 + (1));
i__9614__auto___11539 = G__11540;
continue;
} else {
}
break;
}

var G__11534 = args11532.length;
switch (G__11534) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11532.length)].join('')));

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
var vec__11535 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11542 = cljs.core.next.call(null,segs__$1);
var G__11543 = nrelseg;
var G__11544 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11542;
relseg__$1 = G__11543;
result__$1 = G__11544;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11535,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11535,(1),null);
var G__11545 = (gline + (1));
var G__11546 = cljs.core.next.call(null,lines__$1);
var G__11547 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11548 = result__$1;
gline = G__11545;
lines__$1 = G__11546;
relseg = G__11547;
result = G__11548;
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
return (function (p__11561){
var vec__11562 = p__11561;
var _ = cljs.core.nth.call(null,vec__11562,(0),null);
var source = cljs.core.nth.call(null,vec__11562,(1),null);
var line = cljs.core.nth.call(null,vec__11562,(2),null);
var col = cljs.core.nth.call(null,vec__11562,(3),null);
var name = cljs.core.nth.call(null,vec__11562,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11565){
var vec__11566 = p__11565;
var gcol = cljs.core.nth.call(null,vec__11566,(0),null);
var sidx = cljs.core.nth.call(null,vec__11566,(1),null);
var line = cljs.core.nth.call(null,vec__11566,(2),null);
var col = cljs.core.nth.call(null,vec__11566,(3),null);
var name = cljs.core.nth.call(null,vec__11566,(4),null);
var seg = vec__11566;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11566,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11569){
var vec__11570 = p__11569;
var _ = cljs.core.nth.call(null,vec__11570,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11570,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11570,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11570,(3),null);
var lname = cljs.core.nth.call(null,vec__11570,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8505__auto__ = name;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11566,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__8505__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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
var seq__11658 = cljs.core.seq.call(null,infos);
var chunk__11659 = null;
var count__11660 = (0);
var i__11661 = (0);
while(true){
if((i__11661 < count__11660)){
var info = cljs.core._nth.call(null,chunk__11659,i__11661);
var segv_11740 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11741 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11742 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11741 > (lc_11742 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11658,chunk__11659,count__11660,i__11661,segv_11740,gline_11741,lc_11742,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11741 - (lc_11742 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11740], null));
});})(seq__11658,chunk__11659,count__11660,i__11661,segv_11740,gline_11741,lc_11742,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11658,chunk__11659,count__11660,i__11661,segv_11740,gline_11741,lc_11742,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11741], null),cljs.core.conj,segv_11740);
});})(seq__11658,chunk__11659,count__11660,i__11661,segv_11740,gline_11741,lc_11742,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11743 = seq__11658;
var G__11744 = chunk__11659;
var G__11745 = count__11660;
var G__11746 = (i__11661 + (1));
seq__11658 = G__11743;
chunk__11659 = G__11744;
count__11660 = G__11745;
i__11661 = G__11746;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11658);
if(temp__4657__auto__){
var seq__11658__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11658__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__11658__$1);
var G__11747 = cljs.core.chunk_rest.call(null,seq__11658__$1);
var G__11748 = c__9319__auto__;
var G__11749 = cljs.core.count.call(null,c__9319__auto__);
var G__11750 = (0);
seq__11658 = G__11747;
chunk__11659 = G__11748;
count__11660 = G__11749;
i__11661 = G__11750;
continue;
} else {
var info = cljs.core.first.call(null,seq__11658__$1);
var segv_11751 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11752 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11753 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11752 > (lc_11753 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11658,chunk__11659,count__11660,i__11661,segv_11751,gline_11752,lc_11753,info,seq__11658__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11752 - (lc_11753 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11751], null));
});})(seq__11658,chunk__11659,count__11660,i__11661,segv_11751,gline_11752,lc_11753,info,seq__11658__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11658,chunk__11659,count__11660,i__11661,segv_11751,gline_11752,lc_11753,info,seq__11658__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11752], null),cljs.core.conj,segv_11751);
});})(seq__11658,chunk__11659,count__11660,i__11661,segv_11751,gline_11752,lc_11753,info,seq__11658__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11754 = cljs.core.next.call(null,seq__11658__$1);
var G__11755 = null;
var G__11756 = (0);
var G__11757 = (0);
seq__11658 = G__11754;
chunk__11659 = G__11755;
count__11660 = G__11756;
i__11661 = G__11757;
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
var seq__11662_11758 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11663_11759 = null;
var count__11664_11760 = (0);
var i__11665_11761 = (0);
while(true){
if((i__11665_11761 < count__11664_11760)){
var vec__11666_11762 = cljs.core._nth.call(null,chunk__11663_11759,i__11665_11761);
var source_idx_11763 = cljs.core.nth.call(null,vec__11666_11762,(0),null);
var vec__11669_11764 = cljs.core.nth.call(null,vec__11666_11762,(1),null);
var __11765 = cljs.core.nth.call(null,vec__11669_11764,(0),null);
var lines_11766__$1 = cljs.core.nth.call(null,vec__11669_11764,(1),null);
var seq__11672_11767 = cljs.core.seq.call(null,lines_11766__$1);
var chunk__11673_11768 = null;
var count__11674_11769 = (0);
var i__11675_11770 = (0);
while(true){
if((i__11675_11770 < count__11674_11769)){
var vec__11676_11771 = cljs.core._nth.call(null,chunk__11673_11768,i__11675_11770);
var line_11772 = cljs.core.nth.call(null,vec__11676_11771,(0),null);
var cols_11773 = cljs.core.nth.call(null,vec__11676_11771,(1),null);
var seq__11679_11774 = cljs.core.seq.call(null,cols_11773);
var chunk__11680_11775 = null;
var count__11681_11776 = (0);
var i__11682_11777 = (0);
while(true){
if((i__11682_11777 < count__11681_11776)){
var vec__11683_11778 = cljs.core._nth.call(null,chunk__11680_11775,i__11682_11777);
var col_11779 = cljs.core.nth.call(null,vec__11683_11778,(0),null);
var infos_11780 = cljs.core.nth.call(null,vec__11683_11778,(1),null);
encode_cols.call(null,infos_11780,source_idx_11763,line_11772,col_11779);

var G__11781 = seq__11679_11774;
var G__11782 = chunk__11680_11775;
var G__11783 = count__11681_11776;
var G__11784 = (i__11682_11777 + (1));
seq__11679_11774 = G__11781;
chunk__11680_11775 = G__11782;
count__11681_11776 = G__11783;
i__11682_11777 = G__11784;
continue;
} else {
var temp__4657__auto___11785 = cljs.core.seq.call(null,seq__11679_11774);
if(temp__4657__auto___11785){
var seq__11679_11786__$1 = temp__4657__auto___11785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11679_11786__$1)){
var c__9319__auto___11787 = cljs.core.chunk_first.call(null,seq__11679_11786__$1);
var G__11788 = cljs.core.chunk_rest.call(null,seq__11679_11786__$1);
var G__11789 = c__9319__auto___11787;
var G__11790 = cljs.core.count.call(null,c__9319__auto___11787);
var G__11791 = (0);
seq__11679_11774 = G__11788;
chunk__11680_11775 = G__11789;
count__11681_11776 = G__11790;
i__11682_11777 = G__11791;
continue;
} else {
var vec__11686_11792 = cljs.core.first.call(null,seq__11679_11786__$1);
var col_11793 = cljs.core.nth.call(null,vec__11686_11792,(0),null);
var infos_11794 = cljs.core.nth.call(null,vec__11686_11792,(1),null);
encode_cols.call(null,infos_11794,source_idx_11763,line_11772,col_11793);

var G__11795 = cljs.core.next.call(null,seq__11679_11786__$1);
var G__11796 = null;
var G__11797 = (0);
var G__11798 = (0);
seq__11679_11774 = G__11795;
chunk__11680_11775 = G__11796;
count__11681_11776 = G__11797;
i__11682_11777 = G__11798;
continue;
}
} else {
}
}
break;
}

var G__11799 = seq__11672_11767;
var G__11800 = chunk__11673_11768;
var G__11801 = count__11674_11769;
var G__11802 = (i__11675_11770 + (1));
seq__11672_11767 = G__11799;
chunk__11673_11768 = G__11800;
count__11674_11769 = G__11801;
i__11675_11770 = G__11802;
continue;
} else {
var temp__4657__auto___11803 = cljs.core.seq.call(null,seq__11672_11767);
if(temp__4657__auto___11803){
var seq__11672_11804__$1 = temp__4657__auto___11803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11672_11804__$1)){
var c__9319__auto___11805 = cljs.core.chunk_first.call(null,seq__11672_11804__$1);
var G__11806 = cljs.core.chunk_rest.call(null,seq__11672_11804__$1);
var G__11807 = c__9319__auto___11805;
var G__11808 = cljs.core.count.call(null,c__9319__auto___11805);
var G__11809 = (0);
seq__11672_11767 = G__11806;
chunk__11673_11768 = G__11807;
count__11674_11769 = G__11808;
i__11675_11770 = G__11809;
continue;
} else {
var vec__11689_11810 = cljs.core.first.call(null,seq__11672_11804__$1);
var line_11811 = cljs.core.nth.call(null,vec__11689_11810,(0),null);
var cols_11812 = cljs.core.nth.call(null,vec__11689_11810,(1),null);
var seq__11692_11813 = cljs.core.seq.call(null,cols_11812);
var chunk__11693_11814 = null;
var count__11694_11815 = (0);
var i__11695_11816 = (0);
while(true){
if((i__11695_11816 < count__11694_11815)){
var vec__11696_11817 = cljs.core._nth.call(null,chunk__11693_11814,i__11695_11816);
var col_11818 = cljs.core.nth.call(null,vec__11696_11817,(0),null);
var infos_11819 = cljs.core.nth.call(null,vec__11696_11817,(1),null);
encode_cols.call(null,infos_11819,source_idx_11763,line_11811,col_11818);

var G__11820 = seq__11692_11813;
var G__11821 = chunk__11693_11814;
var G__11822 = count__11694_11815;
var G__11823 = (i__11695_11816 + (1));
seq__11692_11813 = G__11820;
chunk__11693_11814 = G__11821;
count__11694_11815 = G__11822;
i__11695_11816 = G__11823;
continue;
} else {
var temp__4657__auto___11824__$1 = cljs.core.seq.call(null,seq__11692_11813);
if(temp__4657__auto___11824__$1){
var seq__11692_11825__$1 = temp__4657__auto___11824__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11692_11825__$1)){
var c__9319__auto___11826 = cljs.core.chunk_first.call(null,seq__11692_11825__$1);
var G__11827 = cljs.core.chunk_rest.call(null,seq__11692_11825__$1);
var G__11828 = c__9319__auto___11826;
var G__11829 = cljs.core.count.call(null,c__9319__auto___11826);
var G__11830 = (0);
seq__11692_11813 = G__11827;
chunk__11693_11814 = G__11828;
count__11694_11815 = G__11829;
i__11695_11816 = G__11830;
continue;
} else {
var vec__11699_11831 = cljs.core.first.call(null,seq__11692_11825__$1);
var col_11832 = cljs.core.nth.call(null,vec__11699_11831,(0),null);
var infos_11833 = cljs.core.nth.call(null,vec__11699_11831,(1),null);
encode_cols.call(null,infos_11833,source_idx_11763,line_11811,col_11832);

var G__11834 = cljs.core.next.call(null,seq__11692_11825__$1);
var G__11835 = null;
var G__11836 = (0);
var G__11837 = (0);
seq__11692_11813 = G__11834;
chunk__11693_11814 = G__11835;
count__11694_11815 = G__11836;
i__11695_11816 = G__11837;
continue;
}
} else {
}
}
break;
}

var G__11838 = cljs.core.next.call(null,seq__11672_11804__$1);
var G__11839 = null;
var G__11840 = (0);
var G__11841 = (0);
seq__11672_11767 = G__11838;
chunk__11673_11768 = G__11839;
count__11674_11769 = G__11840;
i__11675_11770 = G__11841;
continue;
}
} else {
}
}
break;
}

var G__11842 = seq__11662_11758;
var G__11843 = chunk__11663_11759;
var G__11844 = count__11664_11760;
var G__11845 = (i__11665_11761 + (1));
seq__11662_11758 = G__11842;
chunk__11663_11759 = G__11843;
count__11664_11760 = G__11844;
i__11665_11761 = G__11845;
continue;
} else {
var temp__4657__auto___11846 = cljs.core.seq.call(null,seq__11662_11758);
if(temp__4657__auto___11846){
var seq__11662_11847__$1 = temp__4657__auto___11846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11662_11847__$1)){
var c__9319__auto___11848 = cljs.core.chunk_first.call(null,seq__11662_11847__$1);
var G__11849 = cljs.core.chunk_rest.call(null,seq__11662_11847__$1);
var G__11850 = c__9319__auto___11848;
var G__11851 = cljs.core.count.call(null,c__9319__auto___11848);
var G__11852 = (0);
seq__11662_11758 = G__11849;
chunk__11663_11759 = G__11850;
count__11664_11760 = G__11851;
i__11665_11761 = G__11852;
continue;
} else {
var vec__11702_11853 = cljs.core.first.call(null,seq__11662_11847__$1);
var source_idx_11854 = cljs.core.nth.call(null,vec__11702_11853,(0),null);
var vec__11705_11855 = cljs.core.nth.call(null,vec__11702_11853,(1),null);
var __11856 = cljs.core.nth.call(null,vec__11705_11855,(0),null);
var lines_11857__$1 = cljs.core.nth.call(null,vec__11705_11855,(1),null);
var seq__11708_11858 = cljs.core.seq.call(null,lines_11857__$1);
var chunk__11709_11859 = null;
var count__11710_11860 = (0);
var i__11711_11861 = (0);
while(true){
if((i__11711_11861 < count__11710_11860)){
var vec__11712_11862 = cljs.core._nth.call(null,chunk__11709_11859,i__11711_11861);
var line_11863 = cljs.core.nth.call(null,vec__11712_11862,(0),null);
var cols_11864 = cljs.core.nth.call(null,vec__11712_11862,(1),null);
var seq__11715_11865 = cljs.core.seq.call(null,cols_11864);
var chunk__11716_11866 = null;
var count__11717_11867 = (0);
var i__11718_11868 = (0);
while(true){
if((i__11718_11868 < count__11717_11867)){
var vec__11719_11869 = cljs.core._nth.call(null,chunk__11716_11866,i__11718_11868);
var col_11870 = cljs.core.nth.call(null,vec__11719_11869,(0),null);
var infos_11871 = cljs.core.nth.call(null,vec__11719_11869,(1),null);
encode_cols.call(null,infos_11871,source_idx_11854,line_11863,col_11870);

var G__11872 = seq__11715_11865;
var G__11873 = chunk__11716_11866;
var G__11874 = count__11717_11867;
var G__11875 = (i__11718_11868 + (1));
seq__11715_11865 = G__11872;
chunk__11716_11866 = G__11873;
count__11717_11867 = G__11874;
i__11718_11868 = G__11875;
continue;
} else {
var temp__4657__auto___11876__$1 = cljs.core.seq.call(null,seq__11715_11865);
if(temp__4657__auto___11876__$1){
var seq__11715_11877__$1 = temp__4657__auto___11876__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11715_11877__$1)){
var c__9319__auto___11878 = cljs.core.chunk_first.call(null,seq__11715_11877__$1);
var G__11879 = cljs.core.chunk_rest.call(null,seq__11715_11877__$1);
var G__11880 = c__9319__auto___11878;
var G__11881 = cljs.core.count.call(null,c__9319__auto___11878);
var G__11882 = (0);
seq__11715_11865 = G__11879;
chunk__11716_11866 = G__11880;
count__11717_11867 = G__11881;
i__11718_11868 = G__11882;
continue;
} else {
var vec__11722_11883 = cljs.core.first.call(null,seq__11715_11877__$1);
var col_11884 = cljs.core.nth.call(null,vec__11722_11883,(0),null);
var infos_11885 = cljs.core.nth.call(null,vec__11722_11883,(1),null);
encode_cols.call(null,infos_11885,source_idx_11854,line_11863,col_11884);

var G__11886 = cljs.core.next.call(null,seq__11715_11877__$1);
var G__11887 = null;
var G__11888 = (0);
var G__11889 = (0);
seq__11715_11865 = G__11886;
chunk__11716_11866 = G__11887;
count__11717_11867 = G__11888;
i__11718_11868 = G__11889;
continue;
}
} else {
}
}
break;
}

var G__11890 = seq__11708_11858;
var G__11891 = chunk__11709_11859;
var G__11892 = count__11710_11860;
var G__11893 = (i__11711_11861 + (1));
seq__11708_11858 = G__11890;
chunk__11709_11859 = G__11891;
count__11710_11860 = G__11892;
i__11711_11861 = G__11893;
continue;
} else {
var temp__4657__auto___11894__$1 = cljs.core.seq.call(null,seq__11708_11858);
if(temp__4657__auto___11894__$1){
var seq__11708_11895__$1 = temp__4657__auto___11894__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11708_11895__$1)){
var c__9319__auto___11896 = cljs.core.chunk_first.call(null,seq__11708_11895__$1);
var G__11897 = cljs.core.chunk_rest.call(null,seq__11708_11895__$1);
var G__11898 = c__9319__auto___11896;
var G__11899 = cljs.core.count.call(null,c__9319__auto___11896);
var G__11900 = (0);
seq__11708_11858 = G__11897;
chunk__11709_11859 = G__11898;
count__11710_11860 = G__11899;
i__11711_11861 = G__11900;
continue;
} else {
var vec__11725_11901 = cljs.core.first.call(null,seq__11708_11895__$1);
var line_11902 = cljs.core.nth.call(null,vec__11725_11901,(0),null);
var cols_11903 = cljs.core.nth.call(null,vec__11725_11901,(1),null);
var seq__11728_11904 = cljs.core.seq.call(null,cols_11903);
var chunk__11729_11905 = null;
var count__11730_11906 = (0);
var i__11731_11907 = (0);
while(true){
if((i__11731_11907 < count__11730_11906)){
var vec__11732_11908 = cljs.core._nth.call(null,chunk__11729_11905,i__11731_11907);
var col_11909 = cljs.core.nth.call(null,vec__11732_11908,(0),null);
var infos_11910 = cljs.core.nth.call(null,vec__11732_11908,(1),null);
encode_cols.call(null,infos_11910,source_idx_11854,line_11902,col_11909);

var G__11911 = seq__11728_11904;
var G__11912 = chunk__11729_11905;
var G__11913 = count__11730_11906;
var G__11914 = (i__11731_11907 + (1));
seq__11728_11904 = G__11911;
chunk__11729_11905 = G__11912;
count__11730_11906 = G__11913;
i__11731_11907 = G__11914;
continue;
} else {
var temp__4657__auto___11915__$2 = cljs.core.seq.call(null,seq__11728_11904);
if(temp__4657__auto___11915__$2){
var seq__11728_11916__$1 = temp__4657__auto___11915__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11728_11916__$1)){
var c__9319__auto___11917 = cljs.core.chunk_first.call(null,seq__11728_11916__$1);
var G__11918 = cljs.core.chunk_rest.call(null,seq__11728_11916__$1);
var G__11919 = c__9319__auto___11917;
var G__11920 = cljs.core.count.call(null,c__9319__auto___11917);
var G__11921 = (0);
seq__11728_11904 = G__11918;
chunk__11729_11905 = G__11919;
count__11730_11906 = G__11920;
i__11731_11907 = G__11921;
continue;
} else {
var vec__11735_11922 = cljs.core.first.call(null,seq__11728_11916__$1);
var col_11923 = cljs.core.nth.call(null,vec__11735_11922,(0),null);
var infos_11924 = cljs.core.nth.call(null,vec__11735_11922,(1),null);
encode_cols.call(null,infos_11924,source_idx_11854,line_11902,col_11923);

var G__11925 = cljs.core.next.call(null,seq__11728_11916__$1);
var G__11926 = null;
var G__11927 = (0);
var G__11928 = (0);
seq__11728_11904 = G__11925;
chunk__11729_11905 = G__11926;
count__11730_11906 = G__11927;
i__11731_11907 = G__11928;
continue;
}
} else {
}
}
break;
}

var G__11929 = cljs.core.next.call(null,seq__11708_11895__$1);
var G__11930 = null;
var G__11931 = (0);
var G__11932 = (0);
seq__11708_11858 = G__11929;
chunk__11709_11859 = G__11930;
count__11710_11860 = G__11931;
i__11711_11861 = G__11932;
continue;
}
} else {
}
}
break;
}

var G__11933 = cljs.core.next.call(null,seq__11662_11847__$1);
var G__11934 = null;
var G__11935 = (0);
var G__11936 = (0);
seq__11662_11758 = G__11933;
chunk__11663_11759 = G__11934;
count__11664_11760 = G__11935;
i__11665_11761 = G__11936;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11738 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11573_SHARP_){
return [cljs.core.str(p1__11573_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11574_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11574_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11575_SHARP_){
return clojure.string.join.call(null,",",p1__11575_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11739 = G__11738;
goog.object.set(G__11739,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11739;
} else {
return G__11738;
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
var vec__11946 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__11946,(0),null);
var col_map = cljs.core.nth.call(null,vec__11946,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__11949 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__11949,(0),null);
var infos = cljs.core.nth.call(null,vec__11949,(1),null);
var G__11955 = cljs.core.next.call(null,col_map_seq);
var G__11956 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11949,col,infos,vec__11946,line,col_map){
return (function (v,p__11952){
var map__11953 = p__11952;
var map__11953__$1 = ((((!((map__11953 == null)))?((((map__11953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11953):map__11953);
var gline = cljs.core.get.call(null,map__11953__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__11953__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11949,col,infos,vec__11946,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11955;
new_cols = G__11956;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11957 = cljs.core.next.call(null,line_map_seq);
var G__11958 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__11957;
new_lines = G__11958;
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
var seq__12021_12083 = cljs.core.seq.call(null,reverse_map);
var chunk__12022_12084 = null;
var count__12023_12085 = (0);
var i__12024_12086 = (0);
while(true){
if((i__12024_12086 < count__12023_12085)){
var vec__12025_12087 = cljs.core._nth.call(null,chunk__12022_12084,i__12024_12086);
var line_12088 = cljs.core.nth.call(null,vec__12025_12087,(0),null);
var columns_12089 = cljs.core.nth.call(null,vec__12025_12087,(1),null);
var seq__12028_12090 = cljs.core.seq.call(null,columns_12089);
var chunk__12029_12091 = null;
var count__12030_12092 = (0);
var i__12031_12093 = (0);
while(true){
if((i__12031_12093 < count__12030_12092)){
var vec__12032_12094 = cljs.core._nth.call(null,chunk__12029_12091,i__12031_12093);
var column_12095 = cljs.core.nth.call(null,vec__12032_12094,(0),null);
var column_info_12096 = cljs.core.nth.call(null,vec__12032_12094,(1),null);
var seq__12035_12097 = cljs.core.seq.call(null,column_info_12096);
var chunk__12036_12098 = null;
var count__12037_12099 = (0);
var i__12038_12100 = (0);
while(true){
if((i__12038_12100 < count__12037_12099)){
var map__12039_12101 = cljs.core._nth.call(null,chunk__12036_12098,i__12038_12100);
var map__12039_12102__$1 = ((((!((map__12039_12101 == null)))?((((map__12039_12101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12039_12101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12039_12101):map__12039_12101);
var gline_12103 = cljs.core.get.call(null,map__12039_12102__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12104 = cljs.core.get.call(null,map__12039_12102__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12105 = cljs.core.get.call(null,map__12039_12102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12103], null),cljs.core.fnil.call(null,((function (seq__12035_12097,chunk__12036_12098,count__12037_12099,i__12038_12100,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12039_12101,map__12039_12102__$1,gline_12103,gcol_12104,name_12105,vec__12032_12094,column_12095,column_info_12096,vec__12025_12087,line_12088,columns_12089,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12104], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12088,new cljs.core.Keyword(null,"col","col",-1959363084),column_12095,new cljs.core.Keyword(null,"name","name",1843675177),name_12105], null));
});})(seq__12035_12097,chunk__12036_12098,count__12037_12099,i__12038_12100,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12039_12101,map__12039_12102__$1,gline_12103,gcol_12104,name_12105,vec__12032_12094,column_12095,column_info_12096,vec__12025_12087,line_12088,columns_12089,inverted))
,cljs.core.sorted_map.call(null)));

var G__12106 = seq__12035_12097;
var G__12107 = chunk__12036_12098;
var G__12108 = count__12037_12099;
var G__12109 = (i__12038_12100 + (1));
seq__12035_12097 = G__12106;
chunk__12036_12098 = G__12107;
count__12037_12099 = G__12108;
i__12038_12100 = G__12109;
continue;
} else {
var temp__4657__auto___12110 = cljs.core.seq.call(null,seq__12035_12097);
if(temp__4657__auto___12110){
var seq__12035_12111__$1 = temp__4657__auto___12110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12035_12111__$1)){
var c__9319__auto___12112 = cljs.core.chunk_first.call(null,seq__12035_12111__$1);
var G__12113 = cljs.core.chunk_rest.call(null,seq__12035_12111__$1);
var G__12114 = c__9319__auto___12112;
var G__12115 = cljs.core.count.call(null,c__9319__auto___12112);
var G__12116 = (0);
seq__12035_12097 = G__12113;
chunk__12036_12098 = G__12114;
count__12037_12099 = G__12115;
i__12038_12100 = G__12116;
continue;
} else {
var map__12041_12117 = cljs.core.first.call(null,seq__12035_12111__$1);
var map__12041_12118__$1 = ((((!((map__12041_12117 == null)))?((((map__12041_12117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12041_12117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12041_12117):map__12041_12117);
var gline_12119 = cljs.core.get.call(null,map__12041_12118__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12120 = cljs.core.get.call(null,map__12041_12118__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12121 = cljs.core.get.call(null,map__12041_12118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12119], null),cljs.core.fnil.call(null,((function (seq__12035_12097,chunk__12036_12098,count__12037_12099,i__12038_12100,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12041_12117,map__12041_12118__$1,gline_12119,gcol_12120,name_12121,seq__12035_12111__$1,temp__4657__auto___12110,vec__12032_12094,column_12095,column_info_12096,vec__12025_12087,line_12088,columns_12089,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12120], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12088,new cljs.core.Keyword(null,"col","col",-1959363084),column_12095,new cljs.core.Keyword(null,"name","name",1843675177),name_12121], null));
});})(seq__12035_12097,chunk__12036_12098,count__12037_12099,i__12038_12100,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12041_12117,map__12041_12118__$1,gline_12119,gcol_12120,name_12121,seq__12035_12111__$1,temp__4657__auto___12110,vec__12032_12094,column_12095,column_info_12096,vec__12025_12087,line_12088,columns_12089,inverted))
,cljs.core.sorted_map.call(null)));

var G__12122 = cljs.core.next.call(null,seq__12035_12111__$1);
var G__12123 = null;
var G__12124 = (0);
var G__12125 = (0);
seq__12035_12097 = G__12122;
chunk__12036_12098 = G__12123;
count__12037_12099 = G__12124;
i__12038_12100 = G__12125;
continue;
}
} else {
}
}
break;
}

var G__12126 = seq__12028_12090;
var G__12127 = chunk__12029_12091;
var G__12128 = count__12030_12092;
var G__12129 = (i__12031_12093 + (1));
seq__12028_12090 = G__12126;
chunk__12029_12091 = G__12127;
count__12030_12092 = G__12128;
i__12031_12093 = G__12129;
continue;
} else {
var temp__4657__auto___12130 = cljs.core.seq.call(null,seq__12028_12090);
if(temp__4657__auto___12130){
var seq__12028_12131__$1 = temp__4657__auto___12130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12028_12131__$1)){
var c__9319__auto___12132 = cljs.core.chunk_first.call(null,seq__12028_12131__$1);
var G__12133 = cljs.core.chunk_rest.call(null,seq__12028_12131__$1);
var G__12134 = c__9319__auto___12132;
var G__12135 = cljs.core.count.call(null,c__9319__auto___12132);
var G__12136 = (0);
seq__12028_12090 = G__12133;
chunk__12029_12091 = G__12134;
count__12030_12092 = G__12135;
i__12031_12093 = G__12136;
continue;
} else {
var vec__12043_12137 = cljs.core.first.call(null,seq__12028_12131__$1);
var column_12138 = cljs.core.nth.call(null,vec__12043_12137,(0),null);
var column_info_12139 = cljs.core.nth.call(null,vec__12043_12137,(1),null);
var seq__12046_12140 = cljs.core.seq.call(null,column_info_12139);
var chunk__12047_12141 = null;
var count__12048_12142 = (0);
var i__12049_12143 = (0);
while(true){
if((i__12049_12143 < count__12048_12142)){
var map__12050_12144 = cljs.core._nth.call(null,chunk__12047_12141,i__12049_12143);
var map__12050_12145__$1 = ((((!((map__12050_12144 == null)))?((((map__12050_12144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12050_12144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12050_12144):map__12050_12144);
var gline_12146 = cljs.core.get.call(null,map__12050_12145__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12147 = cljs.core.get.call(null,map__12050_12145__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12148 = cljs.core.get.call(null,map__12050_12145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12146], null),cljs.core.fnil.call(null,((function (seq__12046_12140,chunk__12047_12141,count__12048_12142,i__12049_12143,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12050_12144,map__12050_12145__$1,gline_12146,gcol_12147,name_12148,vec__12043_12137,column_12138,column_info_12139,seq__12028_12131__$1,temp__4657__auto___12130,vec__12025_12087,line_12088,columns_12089,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12147], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12088,new cljs.core.Keyword(null,"col","col",-1959363084),column_12138,new cljs.core.Keyword(null,"name","name",1843675177),name_12148], null));
});})(seq__12046_12140,chunk__12047_12141,count__12048_12142,i__12049_12143,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12050_12144,map__12050_12145__$1,gline_12146,gcol_12147,name_12148,vec__12043_12137,column_12138,column_info_12139,seq__12028_12131__$1,temp__4657__auto___12130,vec__12025_12087,line_12088,columns_12089,inverted))
,cljs.core.sorted_map.call(null)));

var G__12149 = seq__12046_12140;
var G__12150 = chunk__12047_12141;
var G__12151 = count__12048_12142;
var G__12152 = (i__12049_12143 + (1));
seq__12046_12140 = G__12149;
chunk__12047_12141 = G__12150;
count__12048_12142 = G__12151;
i__12049_12143 = G__12152;
continue;
} else {
var temp__4657__auto___12153__$1 = cljs.core.seq.call(null,seq__12046_12140);
if(temp__4657__auto___12153__$1){
var seq__12046_12154__$1 = temp__4657__auto___12153__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12046_12154__$1)){
var c__9319__auto___12155 = cljs.core.chunk_first.call(null,seq__12046_12154__$1);
var G__12156 = cljs.core.chunk_rest.call(null,seq__12046_12154__$1);
var G__12157 = c__9319__auto___12155;
var G__12158 = cljs.core.count.call(null,c__9319__auto___12155);
var G__12159 = (0);
seq__12046_12140 = G__12156;
chunk__12047_12141 = G__12157;
count__12048_12142 = G__12158;
i__12049_12143 = G__12159;
continue;
} else {
var map__12052_12160 = cljs.core.first.call(null,seq__12046_12154__$1);
var map__12052_12161__$1 = ((((!((map__12052_12160 == null)))?((((map__12052_12160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12052_12160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12052_12160):map__12052_12160);
var gline_12162 = cljs.core.get.call(null,map__12052_12161__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12163 = cljs.core.get.call(null,map__12052_12161__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12164 = cljs.core.get.call(null,map__12052_12161__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12162], null),cljs.core.fnil.call(null,((function (seq__12046_12140,chunk__12047_12141,count__12048_12142,i__12049_12143,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12052_12160,map__12052_12161__$1,gline_12162,gcol_12163,name_12164,seq__12046_12154__$1,temp__4657__auto___12153__$1,vec__12043_12137,column_12138,column_info_12139,seq__12028_12131__$1,temp__4657__auto___12130,vec__12025_12087,line_12088,columns_12089,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12163], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12088,new cljs.core.Keyword(null,"col","col",-1959363084),column_12138,new cljs.core.Keyword(null,"name","name",1843675177),name_12164], null));
});})(seq__12046_12140,chunk__12047_12141,count__12048_12142,i__12049_12143,seq__12028_12090,chunk__12029_12091,count__12030_12092,i__12031_12093,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12052_12160,map__12052_12161__$1,gline_12162,gcol_12163,name_12164,seq__12046_12154__$1,temp__4657__auto___12153__$1,vec__12043_12137,column_12138,column_info_12139,seq__12028_12131__$1,temp__4657__auto___12130,vec__12025_12087,line_12088,columns_12089,inverted))
,cljs.core.sorted_map.call(null)));

var G__12165 = cljs.core.next.call(null,seq__12046_12154__$1);
var G__12166 = null;
var G__12167 = (0);
var G__12168 = (0);
seq__12046_12140 = G__12165;
chunk__12047_12141 = G__12166;
count__12048_12142 = G__12167;
i__12049_12143 = G__12168;
continue;
}
} else {
}
}
break;
}

var G__12169 = cljs.core.next.call(null,seq__12028_12131__$1);
var G__12170 = null;
var G__12171 = (0);
var G__12172 = (0);
seq__12028_12090 = G__12169;
chunk__12029_12091 = G__12170;
count__12030_12092 = G__12171;
i__12031_12093 = G__12172;
continue;
}
} else {
}
}
break;
}

var G__12173 = seq__12021_12083;
var G__12174 = chunk__12022_12084;
var G__12175 = count__12023_12085;
var G__12176 = (i__12024_12086 + (1));
seq__12021_12083 = G__12173;
chunk__12022_12084 = G__12174;
count__12023_12085 = G__12175;
i__12024_12086 = G__12176;
continue;
} else {
var temp__4657__auto___12177 = cljs.core.seq.call(null,seq__12021_12083);
if(temp__4657__auto___12177){
var seq__12021_12178__$1 = temp__4657__auto___12177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12021_12178__$1)){
var c__9319__auto___12179 = cljs.core.chunk_first.call(null,seq__12021_12178__$1);
var G__12180 = cljs.core.chunk_rest.call(null,seq__12021_12178__$1);
var G__12181 = c__9319__auto___12179;
var G__12182 = cljs.core.count.call(null,c__9319__auto___12179);
var G__12183 = (0);
seq__12021_12083 = G__12180;
chunk__12022_12084 = G__12181;
count__12023_12085 = G__12182;
i__12024_12086 = G__12183;
continue;
} else {
var vec__12054_12184 = cljs.core.first.call(null,seq__12021_12178__$1);
var line_12185 = cljs.core.nth.call(null,vec__12054_12184,(0),null);
var columns_12186 = cljs.core.nth.call(null,vec__12054_12184,(1),null);
var seq__12057_12187 = cljs.core.seq.call(null,columns_12186);
var chunk__12058_12188 = null;
var count__12059_12189 = (0);
var i__12060_12190 = (0);
while(true){
if((i__12060_12190 < count__12059_12189)){
var vec__12061_12191 = cljs.core._nth.call(null,chunk__12058_12188,i__12060_12190);
var column_12192 = cljs.core.nth.call(null,vec__12061_12191,(0),null);
var column_info_12193 = cljs.core.nth.call(null,vec__12061_12191,(1),null);
var seq__12064_12194 = cljs.core.seq.call(null,column_info_12193);
var chunk__12065_12195 = null;
var count__12066_12196 = (0);
var i__12067_12197 = (0);
while(true){
if((i__12067_12197 < count__12066_12196)){
var map__12068_12198 = cljs.core._nth.call(null,chunk__12065_12195,i__12067_12197);
var map__12068_12199__$1 = ((((!((map__12068_12198 == null)))?((((map__12068_12198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12068_12198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12068_12198):map__12068_12198);
var gline_12200 = cljs.core.get.call(null,map__12068_12199__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12201 = cljs.core.get.call(null,map__12068_12199__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12202 = cljs.core.get.call(null,map__12068_12199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12200], null),cljs.core.fnil.call(null,((function (seq__12064_12194,chunk__12065_12195,count__12066_12196,i__12067_12197,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12068_12198,map__12068_12199__$1,gline_12200,gcol_12201,name_12202,vec__12061_12191,column_12192,column_info_12193,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12201], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12185,new cljs.core.Keyword(null,"col","col",-1959363084),column_12192,new cljs.core.Keyword(null,"name","name",1843675177),name_12202], null));
});})(seq__12064_12194,chunk__12065_12195,count__12066_12196,i__12067_12197,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12068_12198,map__12068_12199__$1,gline_12200,gcol_12201,name_12202,vec__12061_12191,column_12192,column_info_12193,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted))
,cljs.core.sorted_map.call(null)));

var G__12203 = seq__12064_12194;
var G__12204 = chunk__12065_12195;
var G__12205 = count__12066_12196;
var G__12206 = (i__12067_12197 + (1));
seq__12064_12194 = G__12203;
chunk__12065_12195 = G__12204;
count__12066_12196 = G__12205;
i__12067_12197 = G__12206;
continue;
} else {
var temp__4657__auto___12207__$1 = cljs.core.seq.call(null,seq__12064_12194);
if(temp__4657__auto___12207__$1){
var seq__12064_12208__$1 = temp__4657__auto___12207__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12064_12208__$1)){
var c__9319__auto___12209 = cljs.core.chunk_first.call(null,seq__12064_12208__$1);
var G__12210 = cljs.core.chunk_rest.call(null,seq__12064_12208__$1);
var G__12211 = c__9319__auto___12209;
var G__12212 = cljs.core.count.call(null,c__9319__auto___12209);
var G__12213 = (0);
seq__12064_12194 = G__12210;
chunk__12065_12195 = G__12211;
count__12066_12196 = G__12212;
i__12067_12197 = G__12213;
continue;
} else {
var map__12070_12214 = cljs.core.first.call(null,seq__12064_12208__$1);
var map__12070_12215__$1 = ((((!((map__12070_12214 == null)))?((((map__12070_12214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12070_12214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12070_12214):map__12070_12214);
var gline_12216 = cljs.core.get.call(null,map__12070_12215__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12217 = cljs.core.get.call(null,map__12070_12215__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12218 = cljs.core.get.call(null,map__12070_12215__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12216], null),cljs.core.fnil.call(null,((function (seq__12064_12194,chunk__12065_12195,count__12066_12196,i__12067_12197,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12070_12214,map__12070_12215__$1,gline_12216,gcol_12217,name_12218,seq__12064_12208__$1,temp__4657__auto___12207__$1,vec__12061_12191,column_12192,column_info_12193,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12217], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12185,new cljs.core.Keyword(null,"col","col",-1959363084),column_12192,new cljs.core.Keyword(null,"name","name",1843675177),name_12218], null));
});})(seq__12064_12194,chunk__12065_12195,count__12066_12196,i__12067_12197,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12070_12214,map__12070_12215__$1,gline_12216,gcol_12217,name_12218,seq__12064_12208__$1,temp__4657__auto___12207__$1,vec__12061_12191,column_12192,column_info_12193,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted))
,cljs.core.sorted_map.call(null)));

var G__12219 = cljs.core.next.call(null,seq__12064_12208__$1);
var G__12220 = null;
var G__12221 = (0);
var G__12222 = (0);
seq__12064_12194 = G__12219;
chunk__12065_12195 = G__12220;
count__12066_12196 = G__12221;
i__12067_12197 = G__12222;
continue;
}
} else {
}
}
break;
}

var G__12223 = seq__12057_12187;
var G__12224 = chunk__12058_12188;
var G__12225 = count__12059_12189;
var G__12226 = (i__12060_12190 + (1));
seq__12057_12187 = G__12223;
chunk__12058_12188 = G__12224;
count__12059_12189 = G__12225;
i__12060_12190 = G__12226;
continue;
} else {
var temp__4657__auto___12227__$1 = cljs.core.seq.call(null,seq__12057_12187);
if(temp__4657__auto___12227__$1){
var seq__12057_12228__$1 = temp__4657__auto___12227__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12057_12228__$1)){
var c__9319__auto___12229 = cljs.core.chunk_first.call(null,seq__12057_12228__$1);
var G__12230 = cljs.core.chunk_rest.call(null,seq__12057_12228__$1);
var G__12231 = c__9319__auto___12229;
var G__12232 = cljs.core.count.call(null,c__9319__auto___12229);
var G__12233 = (0);
seq__12057_12187 = G__12230;
chunk__12058_12188 = G__12231;
count__12059_12189 = G__12232;
i__12060_12190 = G__12233;
continue;
} else {
var vec__12072_12234 = cljs.core.first.call(null,seq__12057_12228__$1);
var column_12235 = cljs.core.nth.call(null,vec__12072_12234,(0),null);
var column_info_12236 = cljs.core.nth.call(null,vec__12072_12234,(1),null);
var seq__12075_12237 = cljs.core.seq.call(null,column_info_12236);
var chunk__12076_12238 = null;
var count__12077_12239 = (0);
var i__12078_12240 = (0);
while(true){
if((i__12078_12240 < count__12077_12239)){
var map__12079_12241 = cljs.core._nth.call(null,chunk__12076_12238,i__12078_12240);
var map__12079_12242__$1 = ((((!((map__12079_12241 == null)))?((((map__12079_12241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12079_12241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12079_12241):map__12079_12241);
var gline_12243 = cljs.core.get.call(null,map__12079_12242__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12244 = cljs.core.get.call(null,map__12079_12242__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12245 = cljs.core.get.call(null,map__12079_12242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12243], null),cljs.core.fnil.call(null,((function (seq__12075_12237,chunk__12076_12238,count__12077_12239,i__12078_12240,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12079_12241,map__12079_12242__$1,gline_12243,gcol_12244,name_12245,vec__12072_12234,column_12235,column_info_12236,seq__12057_12228__$1,temp__4657__auto___12227__$1,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12244], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12185,new cljs.core.Keyword(null,"col","col",-1959363084),column_12235,new cljs.core.Keyword(null,"name","name",1843675177),name_12245], null));
});})(seq__12075_12237,chunk__12076_12238,count__12077_12239,i__12078_12240,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12079_12241,map__12079_12242__$1,gline_12243,gcol_12244,name_12245,vec__12072_12234,column_12235,column_info_12236,seq__12057_12228__$1,temp__4657__auto___12227__$1,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted))
,cljs.core.sorted_map.call(null)));

var G__12246 = seq__12075_12237;
var G__12247 = chunk__12076_12238;
var G__12248 = count__12077_12239;
var G__12249 = (i__12078_12240 + (1));
seq__12075_12237 = G__12246;
chunk__12076_12238 = G__12247;
count__12077_12239 = G__12248;
i__12078_12240 = G__12249;
continue;
} else {
var temp__4657__auto___12250__$2 = cljs.core.seq.call(null,seq__12075_12237);
if(temp__4657__auto___12250__$2){
var seq__12075_12251__$1 = temp__4657__auto___12250__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12075_12251__$1)){
var c__9319__auto___12252 = cljs.core.chunk_first.call(null,seq__12075_12251__$1);
var G__12253 = cljs.core.chunk_rest.call(null,seq__12075_12251__$1);
var G__12254 = c__9319__auto___12252;
var G__12255 = cljs.core.count.call(null,c__9319__auto___12252);
var G__12256 = (0);
seq__12075_12237 = G__12253;
chunk__12076_12238 = G__12254;
count__12077_12239 = G__12255;
i__12078_12240 = G__12256;
continue;
} else {
var map__12081_12257 = cljs.core.first.call(null,seq__12075_12251__$1);
var map__12081_12258__$1 = ((((!((map__12081_12257 == null)))?((((map__12081_12257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12081_12257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12081_12257):map__12081_12257);
var gline_12259 = cljs.core.get.call(null,map__12081_12258__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12260 = cljs.core.get.call(null,map__12081_12258__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12261 = cljs.core.get.call(null,map__12081_12258__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12259], null),cljs.core.fnil.call(null,((function (seq__12075_12237,chunk__12076_12238,count__12077_12239,i__12078_12240,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12081_12257,map__12081_12258__$1,gline_12259,gcol_12260,name_12261,seq__12075_12251__$1,temp__4657__auto___12250__$2,vec__12072_12234,column_12235,column_info_12236,seq__12057_12228__$1,temp__4657__auto___12227__$1,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12260], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12185,new cljs.core.Keyword(null,"col","col",-1959363084),column_12235,new cljs.core.Keyword(null,"name","name",1843675177),name_12261], null));
});})(seq__12075_12237,chunk__12076_12238,count__12077_12239,i__12078_12240,seq__12057_12187,chunk__12058_12188,count__12059_12189,i__12060_12190,seq__12021_12083,chunk__12022_12084,count__12023_12085,i__12024_12086,map__12081_12257,map__12081_12258__$1,gline_12259,gcol_12260,name_12261,seq__12075_12251__$1,temp__4657__auto___12250__$2,vec__12072_12234,column_12235,column_info_12236,seq__12057_12228__$1,temp__4657__auto___12227__$1,vec__12054_12184,line_12185,columns_12186,seq__12021_12178__$1,temp__4657__auto___12177,inverted))
,cljs.core.sorted_map.call(null)));

var G__12262 = cljs.core.next.call(null,seq__12075_12251__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__12075_12237 = G__12262;
chunk__12076_12238 = G__12263;
count__12077_12239 = G__12264;
i__12078_12240 = G__12265;
continue;
}
} else {
}
}
break;
}

var G__12266 = cljs.core.next.call(null,seq__12057_12228__$1);
var G__12267 = null;
var G__12268 = (0);
var G__12269 = (0);
seq__12057_12187 = G__12266;
chunk__12058_12188 = G__12267;
count__12059_12189 = G__12268;
i__12060_12190 = G__12269;
continue;
}
} else {
}
}
break;
}

var G__12270 = cljs.core.next.call(null,seq__12021_12178__$1);
var G__12271 = null;
var G__12272 = (0);
var G__12273 = (0);
seq__12021_12083 = G__12270;
chunk__12022_12084 = G__12271;
count__12023_12085 = G__12272;
i__12024_12086 = G__12273;
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