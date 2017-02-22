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
return cljs.core.reduce.call(null,(function (m,p__12413){
var vec__12414 = p__12413;
var i = cljs.core.nth.call(null,vec__12414,(0),null);
var v = cljs.core.nth.call(null,vec__12414,(1),null);
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
var vec__12420 = seg;
var gcol = cljs.core.nth.call(null,vec__12420,(0),null);
var source = cljs.core.nth.call(null,vec__12420,(1),null);
var line = cljs.core.nth.call(null,vec__12420,(2),null);
var col = cljs.core.nth.call(null,vec__12420,(3),null);
var name = cljs.core.nth.call(null,vec__12420,(4),null);
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
var vec__12429 = seg;
var gcol = cljs.core.nth.call(null,vec__12429,(0),null);
var source = cljs.core.nth.call(null,vec__12429,(1),null);
var line = cljs.core.nth.call(null,vec__12429,(2),null);
var col = cljs.core.nth.call(null,vec__12429,(3),null);
var name = cljs.core.nth.call(null,vec__12429,(4),null);
var vec__12432 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12432,(0),null);
var rsource = cljs.core.nth.call(null,vec__12432,(1),null);
var rline = cljs.core.nth.call(null,vec__12432,(2),null);
var rcol = cljs.core.nth.call(null,vec__12432,(3),null);
var rname = cljs.core.nth.call(null,vec__12432,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__9408__auto__ = source;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__9408__auto__ = line;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__9408__auto__ = col;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__9408__auto__ = name;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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
var map__12437 = segmap;
var map__12437__$1 = ((((!((map__12437 == null)))?((((map__12437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12437):map__12437);
var gcol = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12437,map__12437__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12437,map__12437__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12437,map__12437__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12437,map__12437__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12437,map__12437__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12437,map__12437__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args12439 = [];
var len__10516__auto___12445 = arguments.length;
var i__10517__auto___12446 = (0);
while(true){
if((i__10517__auto___12446 < len__10516__auto___12445)){
args12439.push((arguments[i__10517__auto___12446]));

var G__12447 = (i__10517__auto___12446 + (1));
i__10517__auto___12446 = G__12447;
continue;
} else {
}
break;
}

var G__12441 = args12439.length;
switch (G__12441) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12439.length)].join('')));

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
var vec__12442 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12449 = cljs.core.next.call(null,segs__$1);
var G__12450 = nrelseg;
var G__12451 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12449;
relseg__$1 = G__12450;
result__$1 = G__12451;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12442,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12442,(1),null);
var G__12452 = (gline + (1));
var G__12453 = cljs.core.next.call(null,lines__$1);
var G__12454 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12455 = result__$1;
gline = G__12452;
lines__$1 = G__12453;
relseg = G__12454;
result = G__12455;
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
var map__12459 = segmap;
var map__12459__$1 = ((((!((map__12459 == null)))?((((map__12459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12459):map__12459);
var gcol = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12459,map__12459__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12459,map__12459__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12456_SHARP_){
return cljs.core.conj.call(null,p1__12456_SHARP_,d__$1);
});})(map__12459,map__12459__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12459,map__12459__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args12461 = [];
var len__10516__auto___12467 = arguments.length;
var i__10517__auto___12468 = (0);
while(true){
if((i__10517__auto___12468 < len__10516__auto___12467)){
args12461.push((arguments[i__10517__auto___12468]));

var G__12469 = (i__10517__auto___12468 + (1));
i__10517__auto___12468 = G__12469;
continue;
} else {
}
break;
}

var G__12463 = args12461.length;
switch (G__12463) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12461.length)].join('')));

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
var vec__12464 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12471 = cljs.core.next.call(null,segs__$1);
var G__12472 = nrelseg;
var G__12473 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12471;
relseg__$1 = G__12472;
result__$1 = G__12473;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12464,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12464,(1),null);
var G__12474 = (gline + (1));
var G__12475 = cljs.core.next.call(null,lines__$1);
var G__12476 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12477 = result__$1;
gline = G__12474;
lines__$1 = G__12475;
relseg = G__12476;
result = G__12477;
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
return (function (p__12490){
var vec__12491 = p__12490;
var _ = cljs.core.nth.call(null,vec__12491,(0),null);
var source = cljs.core.nth.call(null,vec__12491,(1),null);
var line = cljs.core.nth.call(null,vec__12491,(2),null);
var col = cljs.core.nth.call(null,vec__12491,(3),null);
var name = cljs.core.nth.call(null,vec__12491,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12494){
var vec__12495 = p__12494;
var gcol = cljs.core.nth.call(null,vec__12495,(0),null);
var sidx = cljs.core.nth.call(null,vec__12495,(1),null);
var line = cljs.core.nth.call(null,vec__12495,(2),null);
var col = cljs.core.nth.call(null,vec__12495,(3),null);
var name = cljs.core.nth.call(null,vec__12495,(4),null);
var seg = vec__12495;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12495,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12498){
var vec__12499 = p__12498;
var _ = cljs.core.nth.call(null,vec__12499,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12499,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12499,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12499,(3),null);
var lname = cljs.core.nth.call(null,vec__12499,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__9408__auto__ = name;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12495,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__9408__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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
var seq__12587 = cljs.core.seq.call(null,infos);
var chunk__12588 = null;
var count__12589 = (0);
var i__12590 = (0);
while(true){
if((i__12590 < count__12589)){
var info = cljs.core._nth.call(null,chunk__12588,i__12590);
var segv_12669 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12670 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12671 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12670 > (lc_12671 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12587,chunk__12588,count__12589,i__12590,segv_12669,gline_12670,lc_12671,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12670 - (lc_12671 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12669], null));
});})(seq__12587,chunk__12588,count__12589,i__12590,segv_12669,gline_12670,lc_12671,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12587,chunk__12588,count__12589,i__12590,segv_12669,gline_12670,lc_12671,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12670], null),cljs.core.conj,segv_12669);
});})(seq__12587,chunk__12588,count__12589,i__12590,segv_12669,gline_12670,lc_12671,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12672 = seq__12587;
var G__12673 = chunk__12588;
var G__12674 = count__12589;
var G__12675 = (i__12590 + (1));
seq__12587 = G__12672;
chunk__12588 = G__12673;
count__12589 = G__12674;
i__12590 = G__12675;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12587);
if(temp__4657__auto__){
var seq__12587__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12587__$1)){
var c__10222__auto__ = cljs.core.chunk_first.call(null,seq__12587__$1);
var G__12676 = cljs.core.chunk_rest.call(null,seq__12587__$1);
var G__12677 = c__10222__auto__;
var G__12678 = cljs.core.count.call(null,c__10222__auto__);
var G__12679 = (0);
seq__12587 = G__12676;
chunk__12588 = G__12677;
count__12589 = G__12678;
i__12590 = G__12679;
continue;
} else {
var info = cljs.core.first.call(null,seq__12587__$1);
var segv_12680 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12681 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12682 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12681 > (lc_12682 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12587,chunk__12588,count__12589,i__12590,segv_12680,gline_12681,lc_12682,info,seq__12587__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12681 - (lc_12682 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12680], null));
});})(seq__12587,chunk__12588,count__12589,i__12590,segv_12680,gline_12681,lc_12682,info,seq__12587__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12587,chunk__12588,count__12589,i__12590,segv_12680,gline_12681,lc_12682,info,seq__12587__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12681], null),cljs.core.conj,segv_12680);
});})(seq__12587,chunk__12588,count__12589,i__12590,segv_12680,gline_12681,lc_12682,info,seq__12587__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12683 = cljs.core.next.call(null,seq__12587__$1);
var G__12684 = null;
var G__12685 = (0);
var G__12686 = (0);
seq__12587 = G__12683;
chunk__12588 = G__12684;
count__12589 = G__12685;
i__12590 = G__12686;
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
var seq__12591_12687 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12592_12688 = null;
var count__12593_12689 = (0);
var i__12594_12690 = (0);
while(true){
if((i__12594_12690 < count__12593_12689)){
var vec__12595_12691 = cljs.core._nth.call(null,chunk__12592_12688,i__12594_12690);
var source_idx_12692 = cljs.core.nth.call(null,vec__12595_12691,(0),null);
var vec__12598_12693 = cljs.core.nth.call(null,vec__12595_12691,(1),null);
var __12694 = cljs.core.nth.call(null,vec__12598_12693,(0),null);
var lines_12695__$1 = cljs.core.nth.call(null,vec__12598_12693,(1),null);
var seq__12601_12696 = cljs.core.seq.call(null,lines_12695__$1);
var chunk__12602_12697 = null;
var count__12603_12698 = (0);
var i__12604_12699 = (0);
while(true){
if((i__12604_12699 < count__12603_12698)){
var vec__12605_12700 = cljs.core._nth.call(null,chunk__12602_12697,i__12604_12699);
var line_12701 = cljs.core.nth.call(null,vec__12605_12700,(0),null);
var cols_12702 = cljs.core.nth.call(null,vec__12605_12700,(1),null);
var seq__12608_12703 = cljs.core.seq.call(null,cols_12702);
var chunk__12609_12704 = null;
var count__12610_12705 = (0);
var i__12611_12706 = (0);
while(true){
if((i__12611_12706 < count__12610_12705)){
var vec__12612_12707 = cljs.core._nth.call(null,chunk__12609_12704,i__12611_12706);
var col_12708 = cljs.core.nth.call(null,vec__12612_12707,(0),null);
var infos_12709 = cljs.core.nth.call(null,vec__12612_12707,(1),null);
encode_cols.call(null,infos_12709,source_idx_12692,line_12701,col_12708);

var G__12710 = seq__12608_12703;
var G__12711 = chunk__12609_12704;
var G__12712 = count__12610_12705;
var G__12713 = (i__12611_12706 + (1));
seq__12608_12703 = G__12710;
chunk__12609_12704 = G__12711;
count__12610_12705 = G__12712;
i__12611_12706 = G__12713;
continue;
} else {
var temp__4657__auto___12714 = cljs.core.seq.call(null,seq__12608_12703);
if(temp__4657__auto___12714){
var seq__12608_12715__$1 = temp__4657__auto___12714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12608_12715__$1)){
var c__10222__auto___12716 = cljs.core.chunk_first.call(null,seq__12608_12715__$1);
var G__12717 = cljs.core.chunk_rest.call(null,seq__12608_12715__$1);
var G__12718 = c__10222__auto___12716;
var G__12719 = cljs.core.count.call(null,c__10222__auto___12716);
var G__12720 = (0);
seq__12608_12703 = G__12717;
chunk__12609_12704 = G__12718;
count__12610_12705 = G__12719;
i__12611_12706 = G__12720;
continue;
} else {
var vec__12615_12721 = cljs.core.first.call(null,seq__12608_12715__$1);
var col_12722 = cljs.core.nth.call(null,vec__12615_12721,(0),null);
var infos_12723 = cljs.core.nth.call(null,vec__12615_12721,(1),null);
encode_cols.call(null,infos_12723,source_idx_12692,line_12701,col_12722);

var G__12724 = cljs.core.next.call(null,seq__12608_12715__$1);
var G__12725 = null;
var G__12726 = (0);
var G__12727 = (0);
seq__12608_12703 = G__12724;
chunk__12609_12704 = G__12725;
count__12610_12705 = G__12726;
i__12611_12706 = G__12727;
continue;
}
} else {
}
}
break;
}

var G__12728 = seq__12601_12696;
var G__12729 = chunk__12602_12697;
var G__12730 = count__12603_12698;
var G__12731 = (i__12604_12699 + (1));
seq__12601_12696 = G__12728;
chunk__12602_12697 = G__12729;
count__12603_12698 = G__12730;
i__12604_12699 = G__12731;
continue;
} else {
var temp__4657__auto___12732 = cljs.core.seq.call(null,seq__12601_12696);
if(temp__4657__auto___12732){
var seq__12601_12733__$1 = temp__4657__auto___12732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12601_12733__$1)){
var c__10222__auto___12734 = cljs.core.chunk_first.call(null,seq__12601_12733__$1);
var G__12735 = cljs.core.chunk_rest.call(null,seq__12601_12733__$1);
var G__12736 = c__10222__auto___12734;
var G__12737 = cljs.core.count.call(null,c__10222__auto___12734);
var G__12738 = (0);
seq__12601_12696 = G__12735;
chunk__12602_12697 = G__12736;
count__12603_12698 = G__12737;
i__12604_12699 = G__12738;
continue;
} else {
var vec__12618_12739 = cljs.core.first.call(null,seq__12601_12733__$1);
var line_12740 = cljs.core.nth.call(null,vec__12618_12739,(0),null);
var cols_12741 = cljs.core.nth.call(null,vec__12618_12739,(1),null);
var seq__12621_12742 = cljs.core.seq.call(null,cols_12741);
var chunk__12622_12743 = null;
var count__12623_12744 = (0);
var i__12624_12745 = (0);
while(true){
if((i__12624_12745 < count__12623_12744)){
var vec__12625_12746 = cljs.core._nth.call(null,chunk__12622_12743,i__12624_12745);
var col_12747 = cljs.core.nth.call(null,vec__12625_12746,(0),null);
var infos_12748 = cljs.core.nth.call(null,vec__12625_12746,(1),null);
encode_cols.call(null,infos_12748,source_idx_12692,line_12740,col_12747);

var G__12749 = seq__12621_12742;
var G__12750 = chunk__12622_12743;
var G__12751 = count__12623_12744;
var G__12752 = (i__12624_12745 + (1));
seq__12621_12742 = G__12749;
chunk__12622_12743 = G__12750;
count__12623_12744 = G__12751;
i__12624_12745 = G__12752;
continue;
} else {
var temp__4657__auto___12753__$1 = cljs.core.seq.call(null,seq__12621_12742);
if(temp__4657__auto___12753__$1){
var seq__12621_12754__$1 = temp__4657__auto___12753__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12621_12754__$1)){
var c__10222__auto___12755 = cljs.core.chunk_first.call(null,seq__12621_12754__$1);
var G__12756 = cljs.core.chunk_rest.call(null,seq__12621_12754__$1);
var G__12757 = c__10222__auto___12755;
var G__12758 = cljs.core.count.call(null,c__10222__auto___12755);
var G__12759 = (0);
seq__12621_12742 = G__12756;
chunk__12622_12743 = G__12757;
count__12623_12744 = G__12758;
i__12624_12745 = G__12759;
continue;
} else {
var vec__12628_12760 = cljs.core.first.call(null,seq__12621_12754__$1);
var col_12761 = cljs.core.nth.call(null,vec__12628_12760,(0),null);
var infos_12762 = cljs.core.nth.call(null,vec__12628_12760,(1),null);
encode_cols.call(null,infos_12762,source_idx_12692,line_12740,col_12761);

var G__12763 = cljs.core.next.call(null,seq__12621_12754__$1);
var G__12764 = null;
var G__12765 = (0);
var G__12766 = (0);
seq__12621_12742 = G__12763;
chunk__12622_12743 = G__12764;
count__12623_12744 = G__12765;
i__12624_12745 = G__12766;
continue;
}
} else {
}
}
break;
}

var G__12767 = cljs.core.next.call(null,seq__12601_12733__$1);
var G__12768 = null;
var G__12769 = (0);
var G__12770 = (0);
seq__12601_12696 = G__12767;
chunk__12602_12697 = G__12768;
count__12603_12698 = G__12769;
i__12604_12699 = G__12770;
continue;
}
} else {
}
}
break;
}

var G__12771 = seq__12591_12687;
var G__12772 = chunk__12592_12688;
var G__12773 = count__12593_12689;
var G__12774 = (i__12594_12690 + (1));
seq__12591_12687 = G__12771;
chunk__12592_12688 = G__12772;
count__12593_12689 = G__12773;
i__12594_12690 = G__12774;
continue;
} else {
var temp__4657__auto___12775 = cljs.core.seq.call(null,seq__12591_12687);
if(temp__4657__auto___12775){
var seq__12591_12776__$1 = temp__4657__auto___12775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12591_12776__$1)){
var c__10222__auto___12777 = cljs.core.chunk_first.call(null,seq__12591_12776__$1);
var G__12778 = cljs.core.chunk_rest.call(null,seq__12591_12776__$1);
var G__12779 = c__10222__auto___12777;
var G__12780 = cljs.core.count.call(null,c__10222__auto___12777);
var G__12781 = (0);
seq__12591_12687 = G__12778;
chunk__12592_12688 = G__12779;
count__12593_12689 = G__12780;
i__12594_12690 = G__12781;
continue;
} else {
var vec__12631_12782 = cljs.core.first.call(null,seq__12591_12776__$1);
var source_idx_12783 = cljs.core.nth.call(null,vec__12631_12782,(0),null);
var vec__12634_12784 = cljs.core.nth.call(null,vec__12631_12782,(1),null);
var __12785 = cljs.core.nth.call(null,vec__12634_12784,(0),null);
var lines_12786__$1 = cljs.core.nth.call(null,vec__12634_12784,(1),null);
var seq__12637_12787 = cljs.core.seq.call(null,lines_12786__$1);
var chunk__12638_12788 = null;
var count__12639_12789 = (0);
var i__12640_12790 = (0);
while(true){
if((i__12640_12790 < count__12639_12789)){
var vec__12641_12791 = cljs.core._nth.call(null,chunk__12638_12788,i__12640_12790);
var line_12792 = cljs.core.nth.call(null,vec__12641_12791,(0),null);
var cols_12793 = cljs.core.nth.call(null,vec__12641_12791,(1),null);
var seq__12644_12794 = cljs.core.seq.call(null,cols_12793);
var chunk__12645_12795 = null;
var count__12646_12796 = (0);
var i__12647_12797 = (0);
while(true){
if((i__12647_12797 < count__12646_12796)){
var vec__12648_12798 = cljs.core._nth.call(null,chunk__12645_12795,i__12647_12797);
var col_12799 = cljs.core.nth.call(null,vec__12648_12798,(0),null);
var infos_12800 = cljs.core.nth.call(null,vec__12648_12798,(1),null);
encode_cols.call(null,infos_12800,source_idx_12783,line_12792,col_12799);

var G__12801 = seq__12644_12794;
var G__12802 = chunk__12645_12795;
var G__12803 = count__12646_12796;
var G__12804 = (i__12647_12797 + (1));
seq__12644_12794 = G__12801;
chunk__12645_12795 = G__12802;
count__12646_12796 = G__12803;
i__12647_12797 = G__12804;
continue;
} else {
var temp__4657__auto___12805__$1 = cljs.core.seq.call(null,seq__12644_12794);
if(temp__4657__auto___12805__$1){
var seq__12644_12806__$1 = temp__4657__auto___12805__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12644_12806__$1)){
var c__10222__auto___12807 = cljs.core.chunk_first.call(null,seq__12644_12806__$1);
var G__12808 = cljs.core.chunk_rest.call(null,seq__12644_12806__$1);
var G__12809 = c__10222__auto___12807;
var G__12810 = cljs.core.count.call(null,c__10222__auto___12807);
var G__12811 = (0);
seq__12644_12794 = G__12808;
chunk__12645_12795 = G__12809;
count__12646_12796 = G__12810;
i__12647_12797 = G__12811;
continue;
} else {
var vec__12651_12812 = cljs.core.first.call(null,seq__12644_12806__$1);
var col_12813 = cljs.core.nth.call(null,vec__12651_12812,(0),null);
var infos_12814 = cljs.core.nth.call(null,vec__12651_12812,(1),null);
encode_cols.call(null,infos_12814,source_idx_12783,line_12792,col_12813);

var G__12815 = cljs.core.next.call(null,seq__12644_12806__$1);
var G__12816 = null;
var G__12817 = (0);
var G__12818 = (0);
seq__12644_12794 = G__12815;
chunk__12645_12795 = G__12816;
count__12646_12796 = G__12817;
i__12647_12797 = G__12818;
continue;
}
} else {
}
}
break;
}

var G__12819 = seq__12637_12787;
var G__12820 = chunk__12638_12788;
var G__12821 = count__12639_12789;
var G__12822 = (i__12640_12790 + (1));
seq__12637_12787 = G__12819;
chunk__12638_12788 = G__12820;
count__12639_12789 = G__12821;
i__12640_12790 = G__12822;
continue;
} else {
var temp__4657__auto___12823__$1 = cljs.core.seq.call(null,seq__12637_12787);
if(temp__4657__auto___12823__$1){
var seq__12637_12824__$1 = temp__4657__auto___12823__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12637_12824__$1)){
var c__10222__auto___12825 = cljs.core.chunk_first.call(null,seq__12637_12824__$1);
var G__12826 = cljs.core.chunk_rest.call(null,seq__12637_12824__$1);
var G__12827 = c__10222__auto___12825;
var G__12828 = cljs.core.count.call(null,c__10222__auto___12825);
var G__12829 = (0);
seq__12637_12787 = G__12826;
chunk__12638_12788 = G__12827;
count__12639_12789 = G__12828;
i__12640_12790 = G__12829;
continue;
} else {
var vec__12654_12830 = cljs.core.first.call(null,seq__12637_12824__$1);
var line_12831 = cljs.core.nth.call(null,vec__12654_12830,(0),null);
var cols_12832 = cljs.core.nth.call(null,vec__12654_12830,(1),null);
var seq__12657_12833 = cljs.core.seq.call(null,cols_12832);
var chunk__12658_12834 = null;
var count__12659_12835 = (0);
var i__12660_12836 = (0);
while(true){
if((i__12660_12836 < count__12659_12835)){
var vec__12661_12837 = cljs.core._nth.call(null,chunk__12658_12834,i__12660_12836);
var col_12838 = cljs.core.nth.call(null,vec__12661_12837,(0),null);
var infos_12839 = cljs.core.nth.call(null,vec__12661_12837,(1),null);
encode_cols.call(null,infos_12839,source_idx_12783,line_12831,col_12838);

var G__12840 = seq__12657_12833;
var G__12841 = chunk__12658_12834;
var G__12842 = count__12659_12835;
var G__12843 = (i__12660_12836 + (1));
seq__12657_12833 = G__12840;
chunk__12658_12834 = G__12841;
count__12659_12835 = G__12842;
i__12660_12836 = G__12843;
continue;
} else {
var temp__4657__auto___12844__$2 = cljs.core.seq.call(null,seq__12657_12833);
if(temp__4657__auto___12844__$2){
var seq__12657_12845__$1 = temp__4657__auto___12844__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12657_12845__$1)){
var c__10222__auto___12846 = cljs.core.chunk_first.call(null,seq__12657_12845__$1);
var G__12847 = cljs.core.chunk_rest.call(null,seq__12657_12845__$1);
var G__12848 = c__10222__auto___12846;
var G__12849 = cljs.core.count.call(null,c__10222__auto___12846);
var G__12850 = (0);
seq__12657_12833 = G__12847;
chunk__12658_12834 = G__12848;
count__12659_12835 = G__12849;
i__12660_12836 = G__12850;
continue;
} else {
var vec__12664_12851 = cljs.core.first.call(null,seq__12657_12845__$1);
var col_12852 = cljs.core.nth.call(null,vec__12664_12851,(0),null);
var infos_12853 = cljs.core.nth.call(null,vec__12664_12851,(1),null);
encode_cols.call(null,infos_12853,source_idx_12783,line_12831,col_12852);

var G__12854 = cljs.core.next.call(null,seq__12657_12845__$1);
var G__12855 = null;
var G__12856 = (0);
var G__12857 = (0);
seq__12657_12833 = G__12854;
chunk__12658_12834 = G__12855;
count__12659_12835 = G__12856;
i__12660_12836 = G__12857;
continue;
}
} else {
}
}
break;
}

var G__12858 = cljs.core.next.call(null,seq__12637_12824__$1);
var G__12859 = null;
var G__12860 = (0);
var G__12861 = (0);
seq__12637_12787 = G__12858;
chunk__12638_12788 = G__12859;
count__12639_12789 = G__12860;
i__12640_12790 = G__12861;
continue;
}
} else {
}
}
break;
}

var G__12862 = cljs.core.next.call(null,seq__12591_12776__$1);
var G__12863 = null;
var G__12864 = (0);
var G__12865 = (0);
seq__12591_12687 = G__12862;
chunk__12592_12688 = G__12863;
count__12593_12689 = G__12864;
i__12594_12690 = G__12865;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12667 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12502_SHARP_){
return [cljs.core.str(p1__12502_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12503_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12503_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12504_SHARP_){
return clojure.string.join.call(null,",",p1__12504_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12668 = G__12667;
goog.object.set(G__12668,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12668;
} else {
return G__12667;
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
var vec__12875 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12875,(0),null);
var col_map = cljs.core.nth.call(null,vec__12875,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12878 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12878,(0),null);
var infos = cljs.core.nth.call(null,vec__12878,(1),null);
var G__12884 = cljs.core.next.call(null,col_map_seq);
var G__12885 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12878,col,infos,vec__12875,line,col_map){
return (function (v,p__12881){
var map__12882 = p__12881;
var map__12882__$1 = ((((!((map__12882 == null)))?((((map__12882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12882):map__12882);
var gline = cljs.core.get.call(null,map__12882__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12882__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12878,col,infos,vec__12875,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12884;
new_cols = G__12885;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12886 = cljs.core.next.call(null,line_map_seq);
var G__12887 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12886;
new_lines = G__12887;
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
var seq__12950_13012 = cljs.core.seq.call(null,reverse_map);
var chunk__12951_13013 = null;
var count__12952_13014 = (0);
var i__12953_13015 = (0);
while(true){
if((i__12953_13015 < count__12952_13014)){
var vec__12954_13016 = cljs.core._nth.call(null,chunk__12951_13013,i__12953_13015);
var line_13017 = cljs.core.nth.call(null,vec__12954_13016,(0),null);
var columns_13018 = cljs.core.nth.call(null,vec__12954_13016,(1),null);
var seq__12957_13019 = cljs.core.seq.call(null,columns_13018);
var chunk__12958_13020 = null;
var count__12959_13021 = (0);
var i__12960_13022 = (0);
while(true){
if((i__12960_13022 < count__12959_13021)){
var vec__12961_13023 = cljs.core._nth.call(null,chunk__12958_13020,i__12960_13022);
var column_13024 = cljs.core.nth.call(null,vec__12961_13023,(0),null);
var column_info_13025 = cljs.core.nth.call(null,vec__12961_13023,(1),null);
var seq__12964_13026 = cljs.core.seq.call(null,column_info_13025);
var chunk__12965_13027 = null;
var count__12966_13028 = (0);
var i__12967_13029 = (0);
while(true){
if((i__12967_13029 < count__12966_13028)){
var map__12968_13030 = cljs.core._nth.call(null,chunk__12965_13027,i__12967_13029);
var map__12968_13031__$1 = ((((!((map__12968_13030 == null)))?((((map__12968_13030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12968_13030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12968_13030):map__12968_13030);
var gline_13032 = cljs.core.get.call(null,map__12968_13031__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13033 = cljs.core.get.call(null,map__12968_13031__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13034 = cljs.core.get.call(null,map__12968_13031__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13032], null),cljs.core.fnil.call(null,((function (seq__12964_13026,chunk__12965_13027,count__12966_13028,i__12967_13029,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12968_13030,map__12968_13031__$1,gline_13032,gcol_13033,name_13034,vec__12961_13023,column_13024,column_info_13025,vec__12954_13016,line_13017,columns_13018,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13033], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13017,new cljs.core.Keyword(null,"col","col",-1959363084),column_13024,new cljs.core.Keyword(null,"name","name",1843675177),name_13034], null));
});})(seq__12964_13026,chunk__12965_13027,count__12966_13028,i__12967_13029,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12968_13030,map__12968_13031__$1,gline_13032,gcol_13033,name_13034,vec__12961_13023,column_13024,column_info_13025,vec__12954_13016,line_13017,columns_13018,inverted))
,cljs.core.sorted_map.call(null)));

var G__13035 = seq__12964_13026;
var G__13036 = chunk__12965_13027;
var G__13037 = count__12966_13028;
var G__13038 = (i__12967_13029 + (1));
seq__12964_13026 = G__13035;
chunk__12965_13027 = G__13036;
count__12966_13028 = G__13037;
i__12967_13029 = G__13038;
continue;
} else {
var temp__4657__auto___13039 = cljs.core.seq.call(null,seq__12964_13026);
if(temp__4657__auto___13039){
var seq__12964_13040__$1 = temp__4657__auto___13039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12964_13040__$1)){
var c__10222__auto___13041 = cljs.core.chunk_first.call(null,seq__12964_13040__$1);
var G__13042 = cljs.core.chunk_rest.call(null,seq__12964_13040__$1);
var G__13043 = c__10222__auto___13041;
var G__13044 = cljs.core.count.call(null,c__10222__auto___13041);
var G__13045 = (0);
seq__12964_13026 = G__13042;
chunk__12965_13027 = G__13043;
count__12966_13028 = G__13044;
i__12967_13029 = G__13045;
continue;
} else {
var map__12970_13046 = cljs.core.first.call(null,seq__12964_13040__$1);
var map__12970_13047__$1 = ((((!((map__12970_13046 == null)))?((((map__12970_13046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12970_13046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12970_13046):map__12970_13046);
var gline_13048 = cljs.core.get.call(null,map__12970_13047__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13049 = cljs.core.get.call(null,map__12970_13047__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13050 = cljs.core.get.call(null,map__12970_13047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13048], null),cljs.core.fnil.call(null,((function (seq__12964_13026,chunk__12965_13027,count__12966_13028,i__12967_13029,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12970_13046,map__12970_13047__$1,gline_13048,gcol_13049,name_13050,seq__12964_13040__$1,temp__4657__auto___13039,vec__12961_13023,column_13024,column_info_13025,vec__12954_13016,line_13017,columns_13018,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13049], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13017,new cljs.core.Keyword(null,"col","col",-1959363084),column_13024,new cljs.core.Keyword(null,"name","name",1843675177),name_13050], null));
});})(seq__12964_13026,chunk__12965_13027,count__12966_13028,i__12967_13029,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12970_13046,map__12970_13047__$1,gline_13048,gcol_13049,name_13050,seq__12964_13040__$1,temp__4657__auto___13039,vec__12961_13023,column_13024,column_info_13025,vec__12954_13016,line_13017,columns_13018,inverted))
,cljs.core.sorted_map.call(null)));

var G__13051 = cljs.core.next.call(null,seq__12964_13040__$1);
var G__13052 = null;
var G__13053 = (0);
var G__13054 = (0);
seq__12964_13026 = G__13051;
chunk__12965_13027 = G__13052;
count__12966_13028 = G__13053;
i__12967_13029 = G__13054;
continue;
}
} else {
}
}
break;
}

var G__13055 = seq__12957_13019;
var G__13056 = chunk__12958_13020;
var G__13057 = count__12959_13021;
var G__13058 = (i__12960_13022 + (1));
seq__12957_13019 = G__13055;
chunk__12958_13020 = G__13056;
count__12959_13021 = G__13057;
i__12960_13022 = G__13058;
continue;
} else {
var temp__4657__auto___13059 = cljs.core.seq.call(null,seq__12957_13019);
if(temp__4657__auto___13059){
var seq__12957_13060__$1 = temp__4657__auto___13059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12957_13060__$1)){
var c__10222__auto___13061 = cljs.core.chunk_first.call(null,seq__12957_13060__$1);
var G__13062 = cljs.core.chunk_rest.call(null,seq__12957_13060__$1);
var G__13063 = c__10222__auto___13061;
var G__13064 = cljs.core.count.call(null,c__10222__auto___13061);
var G__13065 = (0);
seq__12957_13019 = G__13062;
chunk__12958_13020 = G__13063;
count__12959_13021 = G__13064;
i__12960_13022 = G__13065;
continue;
} else {
var vec__12972_13066 = cljs.core.first.call(null,seq__12957_13060__$1);
var column_13067 = cljs.core.nth.call(null,vec__12972_13066,(0),null);
var column_info_13068 = cljs.core.nth.call(null,vec__12972_13066,(1),null);
var seq__12975_13069 = cljs.core.seq.call(null,column_info_13068);
var chunk__12976_13070 = null;
var count__12977_13071 = (0);
var i__12978_13072 = (0);
while(true){
if((i__12978_13072 < count__12977_13071)){
var map__12979_13073 = cljs.core._nth.call(null,chunk__12976_13070,i__12978_13072);
var map__12979_13074__$1 = ((((!((map__12979_13073 == null)))?((((map__12979_13073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12979_13073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12979_13073):map__12979_13073);
var gline_13075 = cljs.core.get.call(null,map__12979_13074__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13076 = cljs.core.get.call(null,map__12979_13074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13077 = cljs.core.get.call(null,map__12979_13074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13075], null),cljs.core.fnil.call(null,((function (seq__12975_13069,chunk__12976_13070,count__12977_13071,i__12978_13072,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12979_13073,map__12979_13074__$1,gline_13075,gcol_13076,name_13077,vec__12972_13066,column_13067,column_info_13068,seq__12957_13060__$1,temp__4657__auto___13059,vec__12954_13016,line_13017,columns_13018,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13076], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13017,new cljs.core.Keyword(null,"col","col",-1959363084),column_13067,new cljs.core.Keyword(null,"name","name",1843675177),name_13077], null));
});})(seq__12975_13069,chunk__12976_13070,count__12977_13071,i__12978_13072,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12979_13073,map__12979_13074__$1,gline_13075,gcol_13076,name_13077,vec__12972_13066,column_13067,column_info_13068,seq__12957_13060__$1,temp__4657__auto___13059,vec__12954_13016,line_13017,columns_13018,inverted))
,cljs.core.sorted_map.call(null)));

var G__13078 = seq__12975_13069;
var G__13079 = chunk__12976_13070;
var G__13080 = count__12977_13071;
var G__13081 = (i__12978_13072 + (1));
seq__12975_13069 = G__13078;
chunk__12976_13070 = G__13079;
count__12977_13071 = G__13080;
i__12978_13072 = G__13081;
continue;
} else {
var temp__4657__auto___13082__$1 = cljs.core.seq.call(null,seq__12975_13069);
if(temp__4657__auto___13082__$1){
var seq__12975_13083__$1 = temp__4657__auto___13082__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12975_13083__$1)){
var c__10222__auto___13084 = cljs.core.chunk_first.call(null,seq__12975_13083__$1);
var G__13085 = cljs.core.chunk_rest.call(null,seq__12975_13083__$1);
var G__13086 = c__10222__auto___13084;
var G__13087 = cljs.core.count.call(null,c__10222__auto___13084);
var G__13088 = (0);
seq__12975_13069 = G__13085;
chunk__12976_13070 = G__13086;
count__12977_13071 = G__13087;
i__12978_13072 = G__13088;
continue;
} else {
var map__12981_13089 = cljs.core.first.call(null,seq__12975_13083__$1);
var map__12981_13090__$1 = ((((!((map__12981_13089 == null)))?((((map__12981_13089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12981_13089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12981_13089):map__12981_13089);
var gline_13091 = cljs.core.get.call(null,map__12981_13090__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13092 = cljs.core.get.call(null,map__12981_13090__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13093 = cljs.core.get.call(null,map__12981_13090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13091], null),cljs.core.fnil.call(null,((function (seq__12975_13069,chunk__12976_13070,count__12977_13071,i__12978_13072,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12981_13089,map__12981_13090__$1,gline_13091,gcol_13092,name_13093,seq__12975_13083__$1,temp__4657__auto___13082__$1,vec__12972_13066,column_13067,column_info_13068,seq__12957_13060__$1,temp__4657__auto___13059,vec__12954_13016,line_13017,columns_13018,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13092], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13017,new cljs.core.Keyword(null,"col","col",-1959363084),column_13067,new cljs.core.Keyword(null,"name","name",1843675177),name_13093], null));
});})(seq__12975_13069,chunk__12976_13070,count__12977_13071,i__12978_13072,seq__12957_13019,chunk__12958_13020,count__12959_13021,i__12960_13022,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12981_13089,map__12981_13090__$1,gline_13091,gcol_13092,name_13093,seq__12975_13083__$1,temp__4657__auto___13082__$1,vec__12972_13066,column_13067,column_info_13068,seq__12957_13060__$1,temp__4657__auto___13059,vec__12954_13016,line_13017,columns_13018,inverted))
,cljs.core.sorted_map.call(null)));

var G__13094 = cljs.core.next.call(null,seq__12975_13083__$1);
var G__13095 = null;
var G__13096 = (0);
var G__13097 = (0);
seq__12975_13069 = G__13094;
chunk__12976_13070 = G__13095;
count__12977_13071 = G__13096;
i__12978_13072 = G__13097;
continue;
}
} else {
}
}
break;
}

var G__13098 = cljs.core.next.call(null,seq__12957_13060__$1);
var G__13099 = null;
var G__13100 = (0);
var G__13101 = (0);
seq__12957_13019 = G__13098;
chunk__12958_13020 = G__13099;
count__12959_13021 = G__13100;
i__12960_13022 = G__13101;
continue;
}
} else {
}
}
break;
}

var G__13102 = seq__12950_13012;
var G__13103 = chunk__12951_13013;
var G__13104 = count__12952_13014;
var G__13105 = (i__12953_13015 + (1));
seq__12950_13012 = G__13102;
chunk__12951_13013 = G__13103;
count__12952_13014 = G__13104;
i__12953_13015 = G__13105;
continue;
} else {
var temp__4657__auto___13106 = cljs.core.seq.call(null,seq__12950_13012);
if(temp__4657__auto___13106){
var seq__12950_13107__$1 = temp__4657__auto___13106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12950_13107__$1)){
var c__10222__auto___13108 = cljs.core.chunk_first.call(null,seq__12950_13107__$1);
var G__13109 = cljs.core.chunk_rest.call(null,seq__12950_13107__$1);
var G__13110 = c__10222__auto___13108;
var G__13111 = cljs.core.count.call(null,c__10222__auto___13108);
var G__13112 = (0);
seq__12950_13012 = G__13109;
chunk__12951_13013 = G__13110;
count__12952_13014 = G__13111;
i__12953_13015 = G__13112;
continue;
} else {
var vec__12983_13113 = cljs.core.first.call(null,seq__12950_13107__$1);
var line_13114 = cljs.core.nth.call(null,vec__12983_13113,(0),null);
var columns_13115 = cljs.core.nth.call(null,vec__12983_13113,(1),null);
var seq__12986_13116 = cljs.core.seq.call(null,columns_13115);
var chunk__12987_13117 = null;
var count__12988_13118 = (0);
var i__12989_13119 = (0);
while(true){
if((i__12989_13119 < count__12988_13118)){
var vec__12990_13120 = cljs.core._nth.call(null,chunk__12987_13117,i__12989_13119);
var column_13121 = cljs.core.nth.call(null,vec__12990_13120,(0),null);
var column_info_13122 = cljs.core.nth.call(null,vec__12990_13120,(1),null);
var seq__12993_13123 = cljs.core.seq.call(null,column_info_13122);
var chunk__12994_13124 = null;
var count__12995_13125 = (0);
var i__12996_13126 = (0);
while(true){
if((i__12996_13126 < count__12995_13125)){
var map__12997_13127 = cljs.core._nth.call(null,chunk__12994_13124,i__12996_13126);
var map__12997_13128__$1 = ((((!((map__12997_13127 == null)))?((((map__12997_13127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12997_13127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12997_13127):map__12997_13127);
var gline_13129 = cljs.core.get.call(null,map__12997_13128__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13130 = cljs.core.get.call(null,map__12997_13128__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13131 = cljs.core.get.call(null,map__12997_13128__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13129], null),cljs.core.fnil.call(null,((function (seq__12993_13123,chunk__12994_13124,count__12995_13125,i__12996_13126,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12997_13127,map__12997_13128__$1,gline_13129,gcol_13130,name_13131,vec__12990_13120,column_13121,column_info_13122,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13130], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13114,new cljs.core.Keyword(null,"col","col",-1959363084),column_13121,new cljs.core.Keyword(null,"name","name",1843675177),name_13131], null));
});})(seq__12993_13123,chunk__12994_13124,count__12995_13125,i__12996_13126,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12997_13127,map__12997_13128__$1,gline_13129,gcol_13130,name_13131,vec__12990_13120,column_13121,column_info_13122,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted))
,cljs.core.sorted_map.call(null)));

var G__13132 = seq__12993_13123;
var G__13133 = chunk__12994_13124;
var G__13134 = count__12995_13125;
var G__13135 = (i__12996_13126 + (1));
seq__12993_13123 = G__13132;
chunk__12994_13124 = G__13133;
count__12995_13125 = G__13134;
i__12996_13126 = G__13135;
continue;
} else {
var temp__4657__auto___13136__$1 = cljs.core.seq.call(null,seq__12993_13123);
if(temp__4657__auto___13136__$1){
var seq__12993_13137__$1 = temp__4657__auto___13136__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12993_13137__$1)){
var c__10222__auto___13138 = cljs.core.chunk_first.call(null,seq__12993_13137__$1);
var G__13139 = cljs.core.chunk_rest.call(null,seq__12993_13137__$1);
var G__13140 = c__10222__auto___13138;
var G__13141 = cljs.core.count.call(null,c__10222__auto___13138);
var G__13142 = (0);
seq__12993_13123 = G__13139;
chunk__12994_13124 = G__13140;
count__12995_13125 = G__13141;
i__12996_13126 = G__13142;
continue;
} else {
var map__12999_13143 = cljs.core.first.call(null,seq__12993_13137__$1);
var map__12999_13144__$1 = ((((!((map__12999_13143 == null)))?((((map__12999_13143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12999_13143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12999_13143):map__12999_13143);
var gline_13145 = cljs.core.get.call(null,map__12999_13144__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13146 = cljs.core.get.call(null,map__12999_13144__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13147 = cljs.core.get.call(null,map__12999_13144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13145], null),cljs.core.fnil.call(null,((function (seq__12993_13123,chunk__12994_13124,count__12995_13125,i__12996_13126,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12999_13143,map__12999_13144__$1,gline_13145,gcol_13146,name_13147,seq__12993_13137__$1,temp__4657__auto___13136__$1,vec__12990_13120,column_13121,column_info_13122,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13146], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13114,new cljs.core.Keyword(null,"col","col",-1959363084),column_13121,new cljs.core.Keyword(null,"name","name",1843675177),name_13147], null));
});})(seq__12993_13123,chunk__12994_13124,count__12995_13125,i__12996_13126,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__12999_13143,map__12999_13144__$1,gline_13145,gcol_13146,name_13147,seq__12993_13137__$1,temp__4657__auto___13136__$1,vec__12990_13120,column_13121,column_info_13122,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted))
,cljs.core.sorted_map.call(null)));

var G__13148 = cljs.core.next.call(null,seq__12993_13137__$1);
var G__13149 = null;
var G__13150 = (0);
var G__13151 = (0);
seq__12993_13123 = G__13148;
chunk__12994_13124 = G__13149;
count__12995_13125 = G__13150;
i__12996_13126 = G__13151;
continue;
}
} else {
}
}
break;
}

var G__13152 = seq__12986_13116;
var G__13153 = chunk__12987_13117;
var G__13154 = count__12988_13118;
var G__13155 = (i__12989_13119 + (1));
seq__12986_13116 = G__13152;
chunk__12987_13117 = G__13153;
count__12988_13118 = G__13154;
i__12989_13119 = G__13155;
continue;
} else {
var temp__4657__auto___13156__$1 = cljs.core.seq.call(null,seq__12986_13116);
if(temp__4657__auto___13156__$1){
var seq__12986_13157__$1 = temp__4657__auto___13156__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12986_13157__$1)){
var c__10222__auto___13158 = cljs.core.chunk_first.call(null,seq__12986_13157__$1);
var G__13159 = cljs.core.chunk_rest.call(null,seq__12986_13157__$1);
var G__13160 = c__10222__auto___13158;
var G__13161 = cljs.core.count.call(null,c__10222__auto___13158);
var G__13162 = (0);
seq__12986_13116 = G__13159;
chunk__12987_13117 = G__13160;
count__12988_13118 = G__13161;
i__12989_13119 = G__13162;
continue;
} else {
var vec__13001_13163 = cljs.core.first.call(null,seq__12986_13157__$1);
var column_13164 = cljs.core.nth.call(null,vec__13001_13163,(0),null);
var column_info_13165 = cljs.core.nth.call(null,vec__13001_13163,(1),null);
var seq__13004_13166 = cljs.core.seq.call(null,column_info_13165);
var chunk__13005_13167 = null;
var count__13006_13168 = (0);
var i__13007_13169 = (0);
while(true){
if((i__13007_13169 < count__13006_13168)){
var map__13008_13170 = cljs.core._nth.call(null,chunk__13005_13167,i__13007_13169);
var map__13008_13171__$1 = ((((!((map__13008_13170 == null)))?((((map__13008_13170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13008_13170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13008_13170):map__13008_13170);
var gline_13172 = cljs.core.get.call(null,map__13008_13171__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13173 = cljs.core.get.call(null,map__13008_13171__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13174 = cljs.core.get.call(null,map__13008_13171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13172], null),cljs.core.fnil.call(null,((function (seq__13004_13166,chunk__13005_13167,count__13006_13168,i__13007_13169,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__13008_13170,map__13008_13171__$1,gline_13172,gcol_13173,name_13174,vec__13001_13163,column_13164,column_info_13165,seq__12986_13157__$1,temp__4657__auto___13156__$1,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13173], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13114,new cljs.core.Keyword(null,"col","col",-1959363084),column_13164,new cljs.core.Keyword(null,"name","name",1843675177),name_13174], null));
});})(seq__13004_13166,chunk__13005_13167,count__13006_13168,i__13007_13169,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__13008_13170,map__13008_13171__$1,gline_13172,gcol_13173,name_13174,vec__13001_13163,column_13164,column_info_13165,seq__12986_13157__$1,temp__4657__auto___13156__$1,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted))
,cljs.core.sorted_map.call(null)));

var G__13175 = seq__13004_13166;
var G__13176 = chunk__13005_13167;
var G__13177 = count__13006_13168;
var G__13178 = (i__13007_13169 + (1));
seq__13004_13166 = G__13175;
chunk__13005_13167 = G__13176;
count__13006_13168 = G__13177;
i__13007_13169 = G__13178;
continue;
} else {
var temp__4657__auto___13179__$2 = cljs.core.seq.call(null,seq__13004_13166);
if(temp__4657__auto___13179__$2){
var seq__13004_13180__$1 = temp__4657__auto___13179__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13004_13180__$1)){
var c__10222__auto___13181 = cljs.core.chunk_first.call(null,seq__13004_13180__$1);
var G__13182 = cljs.core.chunk_rest.call(null,seq__13004_13180__$1);
var G__13183 = c__10222__auto___13181;
var G__13184 = cljs.core.count.call(null,c__10222__auto___13181);
var G__13185 = (0);
seq__13004_13166 = G__13182;
chunk__13005_13167 = G__13183;
count__13006_13168 = G__13184;
i__13007_13169 = G__13185;
continue;
} else {
var map__13010_13186 = cljs.core.first.call(null,seq__13004_13180__$1);
var map__13010_13187__$1 = ((((!((map__13010_13186 == null)))?((((map__13010_13186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13010_13186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13010_13186):map__13010_13186);
var gline_13188 = cljs.core.get.call(null,map__13010_13187__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13189 = cljs.core.get.call(null,map__13010_13187__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13190 = cljs.core.get.call(null,map__13010_13187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13188], null),cljs.core.fnil.call(null,((function (seq__13004_13166,chunk__13005_13167,count__13006_13168,i__13007_13169,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__13010_13186,map__13010_13187__$1,gline_13188,gcol_13189,name_13190,seq__13004_13180__$1,temp__4657__auto___13179__$2,vec__13001_13163,column_13164,column_info_13165,seq__12986_13157__$1,temp__4657__auto___13156__$1,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13189], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13114,new cljs.core.Keyword(null,"col","col",-1959363084),column_13164,new cljs.core.Keyword(null,"name","name",1843675177),name_13190], null));
});})(seq__13004_13166,chunk__13005_13167,count__13006_13168,i__13007_13169,seq__12986_13116,chunk__12987_13117,count__12988_13118,i__12989_13119,seq__12950_13012,chunk__12951_13013,count__12952_13014,i__12953_13015,map__13010_13186,map__13010_13187__$1,gline_13188,gcol_13189,name_13190,seq__13004_13180__$1,temp__4657__auto___13179__$2,vec__13001_13163,column_13164,column_info_13165,seq__12986_13157__$1,temp__4657__auto___13156__$1,vec__12983_13113,line_13114,columns_13115,seq__12950_13107__$1,temp__4657__auto___13106,inverted))
,cljs.core.sorted_map.call(null)));

var G__13191 = cljs.core.next.call(null,seq__13004_13180__$1);
var G__13192 = null;
var G__13193 = (0);
var G__13194 = (0);
seq__13004_13166 = G__13191;
chunk__13005_13167 = G__13192;
count__13006_13168 = G__13193;
i__13007_13169 = G__13194;
continue;
}
} else {
}
}
break;
}

var G__13195 = cljs.core.next.call(null,seq__12986_13157__$1);
var G__13196 = null;
var G__13197 = (0);
var G__13198 = (0);
seq__12986_13116 = G__13195;
chunk__12987_13117 = G__13196;
count__12988_13118 = G__13197;
i__12989_13119 = G__13198;
continue;
}
} else {
}
}
break;
}

var G__13199 = cljs.core.next.call(null,seq__12950_13107__$1);
var G__13200 = null;
var G__13201 = (0);
var G__13202 = (0);
seq__12950_13012 = G__13199;
chunk__12951_13013 = G__13200;
count__12952_13014 = G__13201;
i__12953_13015 = G__13202;
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