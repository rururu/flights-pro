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
return cljs.core.reduce.call(null,(function (m,p__22605){
var vec__22606 = p__22605;
var i = cljs.core.nth.call(null,vec__22606,(0),null);
var v = cljs.core.nth.call(null,vec__22606,(1),null);
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
var vec__22612 = seg;
var gcol = cljs.core.nth.call(null,vec__22612,(0),null);
var source = cljs.core.nth.call(null,vec__22612,(1),null);
var line = cljs.core.nth.call(null,vec__22612,(2),null);
var col = cljs.core.nth.call(null,vec__22612,(3),null);
var name = cljs.core.nth.call(null,vec__22612,(4),null);
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
var vec__22621 = seg;
var gcol = cljs.core.nth.call(null,vec__22621,(0),null);
var source = cljs.core.nth.call(null,vec__22621,(1),null);
var line = cljs.core.nth.call(null,vec__22621,(2),null);
var col = cljs.core.nth.call(null,vec__22621,(3),null);
var name = cljs.core.nth.call(null,vec__22621,(4),null);
var vec__22624 = relseg;
var rgcol = cljs.core.nth.call(null,vec__22624,(0),null);
var rsource = cljs.core.nth.call(null,vec__22624,(1),null);
var rline = cljs.core.nth.call(null,vec__22624,(2),null);
var rcol = cljs.core.nth.call(null,vec__22624,(3),null);
var rname = cljs.core.nth.call(null,vec__22624,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__19624__auto__ = source;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__19624__auto__ = line;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__19624__auto__ = col;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__19624__auto__ = name;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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
var map__22629 = segmap;
var map__22629__$1 = ((((!((map__22629 == null)))?((((map__22629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22629):map__22629);
var gcol = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__22629,map__22629__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__22629,map__22629__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__22629,map__22629__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__22629,map__22629__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__22629,map__22629__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__22629,map__22629__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args22631 = [];
var len__20732__auto___22637 = arguments.length;
var i__20733__auto___22638 = (0);
while(true){
if((i__20733__auto___22638 < len__20732__auto___22637)){
args22631.push((arguments[i__20733__auto___22638]));

var G__22639 = (i__20733__auto___22638 + (1));
i__20733__auto___22638 = G__22639;
continue;
} else {
}
break;
}

var G__22633 = args22631.length;
switch (G__22633) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22631.length)].join('')));

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
var vec__22634 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22641 = cljs.core.next.call(null,segs__$1);
var G__22642 = nrelseg;
var G__22643 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22641;
relseg__$1 = G__22642;
result__$1 = G__22643;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22634,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22634,(1),null);
var G__22644 = (gline + (1));
var G__22645 = cljs.core.next.call(null,lines__$1);
var G__22646 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22647 = result__$1;
gline = G__22644;
lines__$1 = G__22645;
relseg = G__22646;
result = G__22647;
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
var map__22651 = segmap;
var map__22651__$1 = ((((!((map__22651 == null)))?((((map__22651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22651):map__22651);
var gcol = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__22651,map__22651__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__22651,map__22651__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__22648_SHARP_){
return cljs.core.conj.call(null,p1__22648_SHARP_,d__$1);
});})(map__22651,map__22651__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__22651,map__22651__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args22653 = [];
var len__20732__auto___22659 = arguments.length;
var i__20733__auto___22660 = (0);
while(true){
if((i__20733__auto___22660 < len__20732__auto___22659)){
args22653.push((arguments[i__20733__auto___22660]));

var G__22661 = (i__20733__auto___22660 + (1));
i__20733__auto___22660 = G__22661;
continue;
} else {
}
break;
}

var G__22655 = args22653.length;
switch (G__22655) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22653.length)].join('')));

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
var vec__22656 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22663 = cljs.core.next.call(null,segs__$1);
var G__22664 = nrelseg;
var G__22665 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22663;
relseg__$1 = G__22664;
result__$1 = G__22665;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22656,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22656,(1),null);
var G__22666 = (gline + (1));
var G__22667 = cljs.core.next.call(null,lines__$1);
var G__22668 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22669 = result__$1;
gline = G__22666;
lines__$1 = G__22667;
relseg = G__22668;
result = G__22669;
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
return (function (p__22682){
var vec__22683 = p__22682;
var _ = cljs.core.nth.call(null,vec__22683,(0),null);
var source = cljs.core.nth.call(null,vec__22683,(1),null);
var line = cljs.core.nth.call(null,vec__22683,(2),null);
var col = cljs.core.nth.call(null,vec__22683,(3),null);
var name = cljs.core.nth.call(null,vec__22683,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__22686){
var vec__22687 = p__22686;
var gcol = cljs.core.nth.call(null,vec__22687,(0),null);
var sidx = cljs.core.nth.call(null,vec__22687,(1),null);
var line = cljs.core.nth.call(null,vec__22687,(2),null);
var col = cljs.core.nth.call(null,vec__22687,(3),null);
var name = cljs.core.nth.call(null,vec__22687,(4),null);
var seg = vec__22687;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__22687,gcol,sidx,line,col,name,seg,relseg){
return (function (p__22690){
var vec__22691 = p__22690;
var _ = cljs.core.nth.call(null,vec__22691,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22691,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22691,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22691,(3),null);
var lname = cljs.core.nth.call(null,vec__22691,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__19624__auto__ = name;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__22687,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__19624__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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
var seq__22779 = cljs.core.seq.call(null,infos);
var chunk__22780 = null;
var count__22781 = (0);
var i__22782 = (0);
while(true){
if((i__22782 < count__22781)){
var info = cljs.core._nth.call(null,chunk__22780,i__22782);
var segv_22861 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22862 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22863 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22862 > (lc_22863 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22779,chunk__22780,count__22781,i__22782,segv_22861,gline_22862,lc_22863,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22862 - (lc_22863 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22861], null));
});})(seq__22779,chunk__22780,count__22781,i__22782,segv_22861,gline_22862,lc_22863,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22779,chunk__22780,count__22781,i__22782,segv_22861,gline_22862,lc_22863,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22862], null),cljs.core.conj,segv_22861);
});})(seq__22779,chunk__22780,count__22781,i__22782,segv_22861,gline_22862,lc_22863,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22864 = seq__22779;
var G__22865 = chunk__22780;
var G__22866 = count__22781;
var G__22867 = (i__22782 + (1));
seq__22779 = G__22864;
chunk__22780 = G__22865;
count__22781 = G__22866;
i__22782 = G__22867;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22779);
if(temp__4657__auto__){
var seq__22779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22779__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__22779__$1);
var G__22868 = cljs.core.chunk_rest.call(null,seq__22779__$1);
var G__22869 = c__20438__auto__;
var G__22870 = cljs.core.count.call(null,c__20438__auto__);
var G__22871 = (0);
seq__22779 = G__22868;
chunk__22780 = G__22869;
count__22781 = G__22870;
i__22782 = G__22871;
continue;
} else {
var info = cljs.core.first.call(null,seq__22779__$1);
var segv_22872 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22873 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22874 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22873 > (lc_22874 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22779,chunk__22780,count__22781,i__22782,segv_22872,gline_22873,lc_22874,info,seq__22779__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22873 - (lc_22874 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22872], null));
});})(seq__22779,chunk__22780,count__22781,i__22782,segv_22872,gline_22873,lc_22874,info,seq__22779__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22779,chunk__22780,count__22781,i__22782,segv_22872,gline_22873,lc_22874,info,seq__22779__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22873], null),cljs.core.conj,segv_22872);
});})(seq__22779,chunk__22780,count__22781,i__22782,segv_22872,gline_22873,lc_22874,info,seq__22779__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22875 = cljs.core.next.call(null,seq__22779__$1);
var G__22876 = null;
var G__22877 = (0);
var G__22878 = (0);
seq__22779 = G__22875;
chunk__22780 = G__22876;
count__22781 = G__22877;
i__22782 = G__22878;
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
var seq__22783_22879 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22784_22880 = null;
var count__22785_22881 = (0);
var i__22786_22882 = (0);
while(true){
if((i__22786_22882 < count__22785_22881)){
var vec__22787_22883 = cljs.core._nth.call(null,chunk__22784_22880,i__22786_22882);
var source_idx_22884 = cljs.core.nth.call(null,vec__22787_22883,(0),null);
var vec__22790_22885 = cljs.core.nth.call(null,vec__22787_22883,(1),null);
var __22886 = cljs.core.nth.call(null,vec__22790_22885,(0),null);
var lines_22887__$1 = cljs.core.nth.call(null,vec__22790_22885,(1),null);
var seq__22793_22888 = cljs.core.seq.call(null,lines_22887__$1);
var chunk__22794_22889 = null;
var count__22795_22890 = (0);
var i__22796_22891 = (0);
while(true){
if((i__22796_22891 < count__22795_22890)){
var vec__22797_22892 = cljs.core._nth.call(null,chunk__22794_22889,i__22796_22891);
var line_22893 = cljs.core.nth.call(null,vec__22797_22892,(0),null);
var cols_22894 = cljs.core.nth.call(null,vec__22797_22892,(1),null);
var seq__22800_22895 = cljs.core.seq.call(null,cols_22894);
var chunk__22801_22896 = null;
var count__22802_22897 = (0);
var i__22803_22898 = (0);
while(true){
if((i__22803_22898 < count__22802_22897)){
var vec__22804_22899 = cljs.core._nth.call(null,chunk__22801_22896,i__22803_22898);
var col_22900 = cljs.core.nth.call(null,vec__22804_22899,(0),null);
var infos_22901 = cljs.core.nth.call(null,vec__22804_22899,(1),null);
encode_cols.call(null,infos_22901,source_idx_22884,line_22893,col_22900);

var G__22902 = seq__22800_22895;
var G__22903 = chunk__22801_22896;
var G__22904 = count__22802_22897;
var G__22905 = (i__22803_22898 + (1));
seq__22800_22895 = G__22902;
chunk__22801_22896 = G__22903;
count__22802_22897 = G__22904;
i__22803_22898 = G__22905;
continue;
} else {
var temp__4657__auto___22906 = cljs.core.seq.call(null,seq__22800_22895);
if(temp__4657__auto___22906){
var seq__22800_22907__$1 = temp__4657__auto___22906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22800_22907__$1)){
var c__20438__auto___22908 = cljs.core.chunk_first.call(null,seq__22800_22907__$1);
var G__22909 = cljs.core.chunk_rest.call(null,seq__22800_22907__$1);
var G__22910 = c__20438__auto___22908;
var G__22911 = cljs.core.count.call(null,c__20438__auto___22908);
var G__22912 = (0);
seq__22800_22895 = G__22909;
chunk__22801_22896 = G__22910;
count__22802_22897 = G__22911;
i__22803_22898 = G__22912;
continue;
} else {
var vec__22807_22913 = cljs.core.first.call(null,seq__22800_22907__$1);
var col_22914 = cljs.core.nth.call(null,vec__22807_22913,(0),null);
var infos_22915 = cljs.core.nth.call(null,vec__22807_22913,(1),null);
encode_cols.call(null,infos_22915,source_idx_22884,line_22893,col_22914);

var G__22916 = cljs.core.next.call(null,seq__22800_22907__$1);
var G__22917 = null;
var G__22918 = (0);
var G__22919 = (0);
seq__22800_22895 = G__22916;
chunk__22801_22896 = G__22917;
count__22802_22897 = G__22918;
i__22803_22898 = G__22919;
continue;
}
} else {
}
}
break;
}

var G__22920 = seq__22793_22888;
var G__22921 = chunk__22794_22889;
var G__22922 = count__22795_22890;
var G__22923 = (i__22796_22891 + (1));
seq__22793_22888 = G__22920;
chunk__22794_22889 = G__22921;
count__22795_22890 = G__22922;
i__22796_22891 = G__22923;
continue;
} else {
var temp__4657__auto___22924 = cljs.core.seq.call(null,seq__22793_22888);
if(temp__4657__auto___22924){
var seq__22793_22925__$1 = temp__4657__auto___22924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22793_22925__$1)){
var c__20438__auto___22926 = cljs.core.chunk_first.call(null,seq__22793_22925__$1);
var G__22927 = cljs.core.chunk_rest.call(null,seq__22793_22925__$1);
var G__22928 = c__20438__auto___22926;
var G__22929 = cljs.core.count.call(null,c__20438__auto___22926);
var G__22930 = (0);
seq__22793_22888 = G__22927;
chunk__22794_22889 = G__22928;
count__22795_22890 = G__22929;
i__22796_22891 = G__22930;
continue;
} else {
var vec__22810_22931 = cljs.core.first.call(null,seq__22793_22925__$1);
var line_22932 = cljs.core.nth.call(null,vec__22810_22931,(0),null);
var cols_22933 = cljs.core.nth.call(null,vec__22810_22931,(1),null);
var seq__22813_22934 = cljs.core.seq.call(null,cols_22933);
var chunk__22814_22935 = null;
var count__22815_22936 = (0);
var i__22816_22937 = (0);
while(true){
if((i__22816_22937 < count__22815_22936)){
var vec__22817_22938 = cljs.core._nth.call(null,chunk__22814_22935,i__22816_22937);
var col_22939 = cljs.core.nth.call(null,vec__22817_22938,(0),null);
var infos_22940 = cljs.core.nth.call(null,vec__22817_22938,(1),null);
encode_cols.call(null,infos_22940,source_idx_22884,line_22932,col_22939);

var G__22941 = seq__22813_22934;
var G__22942 = chunk__22814_22935;
var G__22943 = count__22815_22936;
var G__22944 = (i__22816_22937 + (1));
seq__22813_22934 = G__22941;
chunk__22814_22935 = G__22942;
count__22815_22936 = G__22943;
i__22816_22937 = G__22944;
continue;
} else {
var temp__4657__auto___22945__$1 = cljs.core.seq.call(null,seq__22813_22934);
if(temp__4657__auto___22945__$1){
var seq__22813_22946__$1 = temp__4657__auto___22945__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22813_22946__$1)){
var c__20438__auto___22947 = cljs.core.chunk_first.call(null,seq__22813_22946__$1);
var G__22948 = cljs.core.chunk_rest.call(null,seq__22813_22946__$1);
var G__22949 = c__20438__auto___22947;
var G__22950 = cljs.core.count.call(null,c__20438__auto___22947);
var G__22951 = (0);
seq__22813_22934 = G__22948;
chunk__22814_22935 = G__22949;
count__22815_22936 = G__22950;
i__22816_22937 = G__22951;
continue;
} else {
var vec__22820_22952 = cljs.core.first.call(null,seq__22813_22946__$1);
var col_22953 = cljs.core.nth.call(null,vec__22820_22952,(0),null);
var infos_22954 = cljs.core.nth.call(null,vec__22820_22952,(1),null);
encode_cols.call(null,infos_22954,source_idx_22884,line_22932,col_22953);

var G__22955 = cljs.core.next.call(null,seq__22813_22946__$1);
var G__22956 = null;
var G__22957 = (0);
var G__22958 = (0);
seq__22813_22934 = G__22955;
chunk__22814_22935 = G__22956;
count__22815_22936 = G__22957;
i__22816_22937 = G__22958;
continue;
}
} else {
}
}
break;
}

var G__22959 = cljs.core.next.call(null,seq__22793_22925__$1);
var G__22960 = null;
var G__22961 = (0);
var G__22962 = (0);
seq__22793_22888 = G__22959;
chunk__22794_22889 = G__22960;
count__22795_22890 = G__22961;
i__22796_22891 = G__22962;
continue;
}
} else {
}
}
break;
}

var G__22963 = seq__22783_22879;
var G__22964 = chunk__22784_22880;
var G__22965 = count__22785_22881;
var G__22966 = (i__22786_22882 + (1));
seq__22783_22879 = G__22963;
chunk__22784_22880 = G__22964;
count__22785_22881 = G__22965;
i__22786_22882 = G__22966;
continue;
} else {
var temp__4657__auto___22967 = cljs.core.seq.call(null,seq__22783_22879);
if(temp__4657__auto___22967){
var seq__22783_22968__$1 = temp__4657__auto___22967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22783_22968__$1)){
var c__20438__auto___22969 = cljs.core.chunk_first.call(null,seq__22783_22968__$1);
var G__22970 = cljs.core.chunk_rest.call(null,seq__22783_22968__$1);
var G__22971 = c__20438__auto___22969;
var G__22972 = cljs.core.count.call(null,c__20438__auto___22969);
var G__22973 = (0);
seq__22783_22879 = G__22970;
chunk__22784_22880 = G__22971;
count__22785_22881 = G__22972;
i__22786_22882 = G__22973;
continue;
} else {
var vec__22823_22974 = cljs.core.first.call(null,seq__22783_22968__$1);
var source_idx_22975 = cljs.core.nth.call(null,vec__22823_22974,(0),null);
var vec__22826_22976 = cljs.core.nth.call(null,vec__22823_22974,(1),null);
var __22977 = cljs.core.nth.call(null,vec__22826_22976,(0),null);
var lines_22978__$1 = cljs.core.nth.call(null,vec__22826_22976,(1),null);
var seq__22829_22979 = cljs.core.seq.call(null,lines_22978__$1);
var chunk__22830_22980 = null;
var count__22831_22981 = (0);
var i__22832_22982 = (0);
while(true){
if((i__22832_22982 < count__22831_22981)){
var vec__22833_22983 = cljs.core._nth.call(null,chunk__22830_22980,i__22832_22982);
var line_22984 = cljs.core.nth.call(null,vec__22833_22983,(0),null);
var cols_22985 = cljs.core.nth.call(null,vec__22833_22983,(1),null);
var seq__22836_22986 = cljs.core.seq.call(null,cols_22985);
var chunk__22837_22987 = null;
var count__22838_22988 = (0);
var i__22839_22989 = (0);
while(true){
if((i__22839_22989 < count__22838_22988)){
var vec__22840_22990 = cljs.core._nth.call(null,chunk__22837_22987,i__22839_22989);
var col_22991 = cljs.core.nth.call(null,vec__22840_22990,(0),null);
var infos_22992 = cljs.core.nth.call(null,vec__22840_22990,(1),null);
encode_cols.call(null,infos_22992,source_idx_22975,line_22984,col_22991);

var G__22993 = seq__22836_22986;
var G__22994 = chunk__22837_22987;
var G__22995 = count__22838_22988;
var G__22996 = (i__22839_22989 + (1));
seq__22836_22986 = G__22993;
chunk__22837_22987 = G__22994;
count__22838_22988 = G__22995;
i__22839_22989 = G__22996;
continue;
} else {
var temp__4657__auto___22997__$1 = cljs.core.seq.call(null,seq__22836_22986);
if(temp__4657__auto___22997__$1){
var seq__22836_22998__$1 = temp__4657__auto___22997__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22836_22998__$1)){
var c__20438__auto___22999 = cljs.core.chunk_first.call(null,seq__22836_22998__$1);
var G__23000 = cljs.core.chunk_rest.call(null,seq__22836_22998__$1);
var G__23001 = c__20438__auto___22999;
var G__23002 = cljs.core.count.call(null,c__20438__auto___22999);
var G__23003 = (0);
seq__22836_22986 = G__23000;
chunk__22837_22987 = G__23001;
count__22838_22988 = G__23002;
i__22839_22989 = G__23003;
continue;
} else {
var vec__22843_23004 = cljs.core.first.call(null,seq__22836_22998__$1);
var col_23005 = cljs.core.nth.call(null,vec__22843_23004,(0),null);
var infos_23006 = cljs.core.nth.call(null,vec__22843_23004,(1),null);
encode_cols.call(null,infos_23006,source_idx_22975,line_22984,col_23005);

var G__23007 = cljs.core.next.call(null,seq__22836_22998__$1);
var G__23008 = null;
var G__23009 = (0);
var G__23010 = (0);
seq__22836_22986 = G__23007;
chunk__22837_22987 = G__23008;
count__22838_22988 = G__23009;
i__22839_22989 = G__23010;
continue;
}
} else {
}
}
break;
}

var G__23011 = seq__22829_22979;
var G__23012 = chunk__22830_22980;
var G__23013 = count__22831_22981;
var G__23014 = (i__22832_22982 + (1));
seq__22829_22979 = G__23011;
chunk__22830_22980 = G__23012;
count__22831_22981 = G__23013;
i__22832_22982 = G__23014;
continue;
} else {
var temp__4657__auto___23015__$1 = cljs.core.seq.call(null,seq__22829_22979);
if(temp__4657__auto___23015__$1){
var seq__22829_23016__$1 = temp__4657__auto___23015__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22829_23016__$1)){
var c__20438__auto___23017 = cljs.core.chunk_first.call(null,seq__22829_23016__$1);
var G__23018 = cljs.core.chunk_rest.call(null,seq__22829_23016__$1);
var G__23019 = c__20438__auto___23017;
var G__23020 = cljs.core.count.call(null,c__20438__auto___23017);
var G__23021 = (0);
seq__22829_22979 = G__23018;
chunk__22830_22980 = G__23019;
count__22831_22981 = G__23020;
i__22832_22982 = G__23021;
continue;
} else {
var vec__22846_23022 = cljs.core.first.call(null,seq__22829_23016__$1);
var line_23023 = cljs.core.nth.call(null,vec__22846_23022,(0),null);
var cols_23024 = cljs.core.nth.call(null,vec__22846_23022,(1),null);
var seq__22849_23025 = cljs.core.seq.call(null,cols_23024);
var chunk__22850_23026 = null;
var count__22851_23027 = (0);
var i__22852_23028 = (0);
while(true){
if((i__22852_23028 < count__22851_23027)){
var vec__22853_23029 = cljs.core._nth.call(null,chunk__22850_23026,i__22852_23028);
var col_23030 = cljs.core.nth.call(null,vec__22853_23029,(0),null);
var infos_23031 = cljs.core.nth.call(null,vec__22853_23029,(1),null);
encode_cols.call(null,infos_23031,source_idx_22975,line_23023,col_23030);

var G__23032 = seq__22849_23025;
var G__23033 = chunk__22850_23026;
var G__23034 = count__22851_23027;
var G__23035 = (i__22852_23028 + (1));
seq__22849_23025 = G__23032;
chunk__22850_23026 = G__23033;
count__22851_23027 = G__23034;
i__22852_23028 = G__23035;
continue;
} else {
var temp__4657__auto___23036__$2 = cljs.core.seq.call(null,seq__22849_23025);
if(temp__4657__auto___23036__$2){
var seq__22849_23037__$1 = temp__4657__auto___23036__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22849_23037__$1)){
var c__20438__auto___23038 = cljs.core.chunk_first.call(null,seq__22849_23037__$1);
var G__23039 = cljs.core.chunk_rest.call(null,seq__22849_23037__$1);
var G__23040 = c__20438__auto___23038;
var G__23041 = cljs.core.count.call(null,c__20438__auto___23038);
var G__23042 = (0);
seq__22849_23025 = G__23039;
chunk__22850_23026 = G__23040;
count__22851_23027 = G__23041;
i__22852_23028 = G__23042;
continue;
} else {
var vec__22856_23043 = cljs.core.first.call(null,seq__22849_23037__$1);
var col_23044 = cljs.core.nth.call(null,vec__22856_23043,(0),null);
var infos_23045 = cljs.core.nth.call(null,vec__22856_23043,(1),null);
encode_cols.call(null,infos_23045,source_idx_22975,line_23023,col_23044);

var G__23046 = cljs.core.next.call(null,seq__22849_23037__$1);
var G__23047 = null;
var G__23048 = (0);
var G__23049 = (0);
seq__22849_23025 = G__23046;
chunk__22850_23026 = G__23047;
count__22851_23027 = G__23048;
i__22852_23028 = G__23049;
continue;
}
} else {
}
}
break;
}

var G__23050 = cljs.core.next.call(null,seq__22829_23016__$1);
var G__23051 = null;
var G__23052 = (0);
var G__23053 = (0);
seq__22829_22979 = G__23050;
chunk__22830_22980 = G__23051;
count__22831_22981 = G__23052;
i__22832_22982 = G__23053;
continue;
}
} else {
}
}
break;
}

var G__23054 = cljs.core.next.call(null,seq__22783_22968__$1);
var G__23055 = null;
var G__23056 = (0);
var G__23057 = (0);
seq__22783_22879 = G__23054;
chunk__22784_22880 = G__23055;
count__22785_22881 = G__23056;
i__22786_22882 = G__23057;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22859 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22694_SHARP_){
return [cljs.core.str(p1__22694_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22695_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__22695_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22696_SHARP_){
return clojure.string.join.call(null,",",p1__22696_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22860 = G__22859;
goog.object.set(G__22860,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22860;
} else {
return G__22859;
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
var vec__23067 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__23067,(0),null);
var col_map = cljs.core.nth.call(null,vec__23067,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__23070 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__23070,(0),null);
var infos = cljs.core.nth.call(null,vec__23070,(1),null);
var G__23076 = cljs.core.next.call(null,col_map_seq);
var G__23077 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23070,col,infos,vec__23067,line,col_map){
return (function (v,p__23073){
var map__23074 = p__23073;
var map__23074__$1 = ((((!((map__23074 == null)))?((((map__23074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23074):map__23074);
var gline = cljs.core.get.call(null,map__23074__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__23074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23070,col,infos,vec__23067,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23076;
new_cols = G__23077;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23078 = cljs.core.next.call(null,line_map_seq);
var G__23079 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__23078;
new_lines = G__23079;
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
var seq__23142_23204 = cljs.core.seq.call(null,reverse_map);
var chunk__23143_23205 = null;
var count__23144_23206 = (0);
var i__23145_23207 = (0);
while(true){
if((i__23145_23207 < count__23144_23206)){
var vec__23146_23208 = cljs.core._nth.call(null,chunk__23143_23205,i__23145_23207);
var line_23209 = cljs.core.nth.call(null,vec__23146_23208,(0),null);
var columns_23210 = cljs.core.nth.call(null,vec__23146_23208,(1),null);
var seq__23149_23211 = cljs.core.seq.call(null,columns_23210);
var chunk__23150_23212 = null;
var count__23151_23213 = (0);
var i__23152_23214 = (0);
while(true){
if((i__23152_23214 < count__23151_23213)){
var vec__23153_23215 = cljs.core._nth.call(null,chunk__23150_23212,i__23152_23214);
var column_23216 = cljs.core.nth.call(null,vec__23153_23215,(0),null);
var column_info_23217 = cljs.core.nth.call(null,vec__23153_23215,(1),null);
var seq__23156_23218 = cljs.core.seq.call(null,column_info_23217);
var chunk__23157_23219 = null;
var count__23158_23220 = (0);
var i__23159_23221 = (0);
while(true){
if((i__23159_23221 < count__23158_23220)){
var map__23160_23222 = cljs.core._nth.call(null,chunk__23157_23219,i__23159_23221);
var map__23160_23223__$1 = ((((!((map__23160_23222 == null)))?((((map__23160_23222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23160_23222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23160_23222):map__23160_23222);
var gline_23224 = cljs.core.get.call(null,map__23160_23223__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23225 = cljs.core.get.call(null,map__23160_23223__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23226 = cljs.core.get.call(null,map__23160_23223__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23224], null),cljs.core.fnil.call(null,((function (seq__23156_23218,chunk__23157_23219,count__23158_23220,i__23159_23221,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23160_23222,map__23160_23223__$1,gline_23224,gcol_23225,name_23226,vec__23153_23215,column_23216,column_info_23217,vec__23146_23208,line_23209,columns_23210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23225], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23209,new cljs.core.Keyword(null,"col","col",-1959363084),column_23216,new cljs.core.Keyword(null,"name","name",1843675177),name_23226], null));
});})(seq__23156_23218,chunk__23157_23219,count__23158_23220,i__23159_23221,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23160_23222,map__23160_23223__$1,gline_23224,gcol_23225,name_23226,vec__23153_23215,column_23216,column_info_23217,vec__23146_23208,line_23209,columns_23210,inverted))
,cljs.core.sorted_map.call(null)));

var G__23227 = seq__23156_23218;
var G__23228 = chunk__23157_23219;
var G__23229 = count__23158_23220;
var G__23230 = (i__23159_23221 + (1));
seq__23156_23218 = G__23227;
chunk__23157_23219 = G__23228;
count__23158_23220 = G__23229;
i__23159_23221 = G__23230;
continue;
} else {
var temp__4657__auto___23231 = cljs.core.seq.call(null,seq__23156_23218);
if(temp__4657__auto___23231){
var seq__23156_23232__$1 = temp__4657__auto___23231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23156_23232__$1)){
var c__20438__auto___23233 = cljs.core.chunk_first.call(null,seq__23156_23232__$1);
var G__23234 = cljs.core.chunk_rest.call(null,seq__23156_23232__$1);
var G__23235 = c__20438__auto___23233;
var G__23236 = cljs.core.count.call(null,c__20438__auto___23233);
var G__23237 = (0);
seq__23156_23218 = G__23234;
chunk__23157_23219 = G__23235;
count__23158_23220 = G__23236;
i__23159_23221 = G__23237;
continue;
} else {
var map__23162_23238 = cljs.core.first.call(null,seq__23156_23232__$1);
var map__23162_23239__$1 = ((((!((map__23162_23238 == null)))?((((map__23162_23238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23162_23238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23162_23238):map__23162_23238);
var gline_23240 = cljs.core.get.call(null,map__23162_23239__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23241 = cljs.core.get.call(null,map__23162_23239__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23242 = cljs.core.get.call(null,map__23162_23239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23240], null),cljs.core.fnil.call(null,((function (seq__23156_23218,chunk__23157_23219,count__23158_23220,i__23159_23221,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23162_23238,map__23162_23239__$1,gline_23240,gcol_23241,name_23242,seq__23156_23232__$1,temp__4657__auto___23231,vec__23153_23215,column_23216,column_info_23217,vec__23146_23208,line_23209,columns_23210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23241], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23209,new cljs.core.Keyword(null,"col","col",-1959363084),column_23216,new cljs.core.Keyword(null,"name","name",1843675177),name_23242], null));
});})(seq__23156_23218,chunk__23157_23219,count__23158_23220,i__23159_23221,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23162_23238,map__23162_23239__$1,gline_23240,gcol_23241,name_23242,seq__23156_23232__$1,temp__4657__auto___23231,vec__23153_23215,column_23216,column_info_23217,vec__23146_23208,line_23209,columns_23210,inverted))
,cljs.core.sorted_map.call(null)));

var G__23243 = cljs.core.next.call(null,seq__23156_23232__$1);
var G__23244 = null;
var G__23245 = (0);
var G__23246 = (0);
seq__23156_23218 = G__23243;
chunk__23157_23219 = G__23244;
count__23158_23220 = G__23245;
i__23159_23221 = G__23246;
continue;
}
} else {
}
}
break;
}

var G__23247 = seq__23149_23211;
var G__23248 = chunk__23150_23212;
var G__23249 = count__23151_23213;
var G__23250 = (i__23152_23214 + (1));
seq__23149_23211 = G__23247;
chunk__23150_23212 = G__23248;
count__23151_23213 = G__23249;
i__23152_23214 = G__23250;
continue;
} else {
var temp__4657__auto___23251 = cljs.core.seq.call(null,seq__23149_23211);
if(temp__4657__auto___23251){
var seq__23149_23252__$1 = temp__4657__auto___23251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23149_23252__$1)){
var c__20438__auto___23253 = cljs.core.chunk_first.call(null,seq__23149_23252__$1);
var G__23254 = cljs.core.chunk_rest.call(null,seq__23149_23252__$1);
var G__23255 = c__20438__auto___23253;
var G__23256 = cljs.core.count.call(null,c__20438__auto___23253);
var G__23257 = (0);
seq__23149_23211 = G__23254;
chunk__23150_23212 = G__23255;
count__23151_23213 = G__23256;
i__23152_23214 = G__23257;
continue;
} else {
var vec__23164_23258 = cljs.core.first.call(null,seq__23149_23252__$1);
var column_23259 = cljs.core.nth.call(null,vec__23164_23258,(0),null);
var column_info_23260 = cljs.core.nth.call(null,vec__23164_23258,(1),null);
var seq__23167_23261 = cljs.core.seq.call(null,column_info_23260);
var chunk__23168_23262 = null;
var count__23169_23263 = (0);
var i__23170_23264 = (0);
while(true){
if((i__23170_23264 < count__23169_23263)){
var map__23171_23265 = cljs.core._nth.call(null,chunk__23168_23262,i__23170_23264);
var map__23171_23266__$1 = ((((!((map__23171_23265 == null)))?((((map__23171_23265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23171_23265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23171_23265):map__23171_23265);
var gline_23267 = cljs.core.get.call(null,map__23171_23266__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23268 = cljs.core.get.call(null,map__23171_23266__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23269 = cljs.core.get.call(null,map__23171_23266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23267], null),cljs.core.fnil.call(null,((function (seq__23167_23261,chunk__23168_23262,count__23169_23263,i__23170_23264,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23171_23265,map__23171_23266__$1,gline_23267,gcol_23268,name_23269,vec__23164_23258,column_23259,column_info_23260,seq__23149_23252__$1,temp__4657__auto___23251,vec__23146_23208,line_23209,columns_23210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23268], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23209,new cljs.core.Keyword(null,"col","col",-1959363084),column_23259,new cljs.core.Keyword(null,"name","name",1843675177),name_23269], null));
});})(seq__23167_23261,chunk__23168_23262,count__23169_23263,i__23170_23264,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23171_23265,map__23171_23266__$1,gline_23267,gcol_23268,name_23269,vec__23164_23258,column_23259,column_info_23260,seq__23149_23252__$1,temp__4657__auto___23251,vec__23146_23208,line_23209,columns_23210,inverted))
,cljs.core.sorted_map.call(null)));

var G__23270 = seq__23167_23261;
var G__23271 = chunk__23168_23262;
var G__23272 = count__23169_23263;
var G__23273 = (i__23170_23264 + (1));
seq__23167_23261 = G__23270;
chunk__23168_23262 = G__23271;
count__23169_23263 = G__23272;
i__23170_23264 = G__23273;
continue;
} else {
var temp__4657__auto___23274__$1 = cljs.core.seq.call(null,seq__23167_23261);
if(temp__4657__auto___23274__$1){
var seq__23167_23275__$1 = temp__4657__auto___23274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23167_23275__$1)){
var c__20438__auto___23276 = cljs.core.chunk_first.call(null,seq__23167_23275__$1);
var G__23277 = cljs.core.chunk_rest.call(null,seq__23167_23275__$1);
var G__23278 = c__20438__auto___23276;
var G__23279 = cljs.core.count.call(null,c__20438__auto___23276);
var G__23280 = (0);
seq__23167_23261 = G__23277;
chunk__23168_23262 = G__23278;
count__23169_23263 = G__23279;
i__23170_23264 = G__23280;
continue;
} else {
var map__23173_23281 = cljs.core.first.call(null,seq__23167_23275__$1);
var map__23173_23282__$1 = ((((!((map__23173_23281 == null)))?((((map__23173_23281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23173_23281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23173_23281):map__23173_23281);
var gline_23283 = cljs.core.get.call(null,map__23173_23282__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23284 = cljs.core.get.call(null,map__23173_23282__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23285 = cljs.core.get.call(null,map__23173_23282__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23283], null),cljs.core.fnil.call(null,((function (seq__23167_23261,chunk__23168_23262,count__23169_23263,i__23170_23264,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23173_23281,map__23173_23282__$1,gline_23283,gcol_23284,name_23285,seq__23167_23275__$1,temp__4657__auto___23274__$1,vec__23164_23258,column_23259,column_info_23260,seq__23149_23252__$1,temp__4657__auto___23251,vec__23146_23208,line_23209,columns_23210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23284], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23209,new cljs.core.Keyword(null,"col","col",-1959363084),column_23259,new cljs.core.Keyword(null,"name","name",1843675177),name_23285], null));
});})(seq__23167_23261,chunk__23168_23262,count__23169_23263,i__23170_23264,seq__23149_23211,chunk__23150_23212,count__23151_23213,i__23152_23214,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23173_23281,map__23173_23282__$1,gline_23283,gcol_23284,name_23285,seq__23167_23275__$1,temp__4657__auto___23274__$1,vec__23164_23258,column_23259,column_info_23260,seq__23149_23252__$1,temp__4657__auto___23251,vec__23146_23208,line_23209,columns_23210,inverted))
,cljs.core.sorted_map.call(null)));

var G__23286 = cljs.core.next.call(null,seq__23167_23275__$1);
var G__23287 = null;
var G__23288 = (0);
var G__23289 = (0);
seq__23167_23261 = G__23286;
chunk__23168_23262 = G__23287;
count__23169_23263 = G__23288;
i__23170_23264 = G__23289;
continue;
}
} else {
}
}
break;
}

var G__23290 = cljs.core.next.call(null,seq__23149_23252__$1);
var G__23291 = null;
var G__23292 = (0);
var G__23293 = (0);
seq__23149_23211 = G__23290;
chunk__23150_23212 = G__23291;
count__23151_23213 = G__23292;
i__23152_23214 = G__23293;
continue;
}
} else {
}
}
break;
}

var G__23294 = seq__23142_23204;
var G__23295 = chunk__23143_23205;
var G__23296 = count__23144_23206;
var G__23297 = (i__23145_23207 + (1));
seq__23142_23204 = G__23294;
chunk__23143_23205 = G__23295;
count__23144_23206 = G__23296;
i__23145_23207 = G__23297;
continue;
} else {
var temp__4657__auto___23298 = cljs.core.seq.call(null,seq__23142_23204);
if(temp__4657__auto___23298){
var seq__23142_23299__$1 = temp__4657__auto___23298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23142_23299__$1)){
var c__20438__auto___23300 = cljs.core.chunk_first.call(null,seq__23142_23299__$1);
var G__23301 = cljs.core.chunk_rest.call(null,seq__23142_23299__$1);
var G__23302 = c__20438__auto___23300;
var G__23303 = cljs.core.count.call(null,c__20438__auto___23300);
var G__23304 = (0);
seq__23142_23204 = G__23301;
chunk__23143_23205 = G__23302;
count__23144_23206 = G__23303;
i__23145_23207 = G__23304;
continue;
} else {
var vec__23175_23305 = cljs.core.first.call(null,seq__23142_23299__$1);
var line_23306 = cljs.core.nth.call(null,vec__23175_23305,(0),null);
var columns_23307 = cljs.core.nth.call(null,vec__23175_23305,(1),null);
var seq__23178_23308 = cljs.core.seq.call(null,columns_23307);
var chunk__23179_23309 = null;
var count__23180_23310 = (0);
var i__23181_23311 = (0);
while(true){
if((i__23181_23311 < count__23180_23310)){
var vec__23182_23312 = cljs.core._nth.call(null,chunk__23179_23309,i__23181_23311);
var column_23313 = cljs.core.nth.call(null,vec__23182_23312,(0),null);
var column_info_23314 = cljs.core.nth.call(null,vec__23182_23312,(1),null);
var seq__23185_23315 = cljs.core.seq.call(null,column_info_23314);
var chunk__23186_23316 = null;
var count__23187_23317 = (0);
var i__23188_23318 = (0);
while(true){
if((i__23188_23318 < count__23187_23317)){
var map__23189_23319 = cljs.core._nth.call(null,chunk__23186_23316,i__23188_23318);
var map__23189_23320__$1 = ((((!((map__23189_23319 == null)))?((((map__23189_23319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23189_23319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23189_23319):map__23189_23319);
var gline_23321 = cljs.core.get.call(null,map__23189_23320__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23322 = cljs.core.get.call(null,map__23189_23320__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23323 = cljs.core.get.call(null,map__23189_23320__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23321], null),cljs.core.fnil.call(null,((function (seq__23185_23315,chunk__23186_23316,count__23187_23317,i__23188_23318,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23189_23319,map__23189_23320__$1,gline_23321,gcol_23322,name_23323,vec__23182_23312,column_23313,column_info_23314,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23322], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23306,new cljs.core.Keyword(null,"col","col",-1959363084),column_23313,new cljs.core.Keyword(null,"name","name",1843675177),name_23323], null));
});})(seq__23185_23315,chunk__23186_23316,count__23187_23317,i__23188_23318,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23189_23319,map__23189_23320__$1,gline_23321,gcol_23322,name_23323,vec__23182_23312,column_23313,column_info_23314,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted))
,cljs.core.sorted_map.call(null)));

var G__23324 = seq__23185_23315;
var G__23325 = chunk__23186_23316;
var G__23326 = count__23187_23317;
var G__23327 = (i__23188_23318 + (1));
seq__23185_23315 = G__23324;
chunk__23186_23316 = G__23325;
count__23187_23317 = G__23326;
i__23188_23318 = G__23327;
continue;
} else {
var temp__4657__auto___23328__$1 = cljs.core.seq.call(null,seq__23185_23315);
if(temp__4657__auto___23328__$1){
var seq__23185_23329__$1 = temp__4657__auto___23328__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23185_23329__$1)){
var c__20438__auto___23330 = cljs.core.chunk_first.call(null,seq__23185_23329__$1);
var G__23331 = cljs.core.chunk_rest.call(null,seq__23185_23329__$1);
var G__23332 = c__20438__auto___23330;
var G__23333 = cljs.core.count.call(null,c__20438__auto___23330);
var G__23334 = (0);
seq__23185_23315 = G__23331;
chunk__23186_23316 = G__23332;
count__23187_23317 = G__23333;
i__23188_23318 = G__23334;
continue;
} else {
var map__23191_23335 = cljs.core.first.call(null,seq__23185_23329__$1);
var map__23191_23336__$1 = ((((!((map__23191_23335 == null)))?((((map__23191_23335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23191_23335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23191_23335):map__23191_23335);
var gline_23337 = cljs.core.get.call(null,map__23191_23336__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23338 = cljs.core.get.call(null,map__23191_23336__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23339 = cljs.core.get.call(null,map__23191_23336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23337], null),cljs.core.fnil.call(null,((function (seq__23185_23315,chunk__23186_23316,count__23187_23317,i__23188_23318,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23191_23335,map__23191_23336__$1,gline_23337,gcol_23338,name_23339,seq__23185_23329__$1,temp__4657__auto___23328__$1,vec__23182_23312,column_23313,column_info_23314,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23338], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23306,new cljs.core.Keyword(null,"col","col",-1959363084),column_23313,new cljs.core.Keyword(null,"name","name",1843675177),name_23339], null));
});})(seq__23185_23315,chunk__23186_23316,count__23187_23317,i__23188_23318,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23191_23335,map__23191_23336__$1,gline_23337,gcol_23338,name_23339,seq__23185_23329__$1,temp__4657__auto___23328__$1,vec__23182_23312,column_23313,column_info_23314,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted))
,cljs.core.sorted_map.call(null)));

var G__23340 = cljs.core.next.call(null,seq__23185_23329__$1);
var G__23341 = null;
var G__23342 = (0);
var G__23343 = (0);
seq__23185_23315 = G__23340;
chunk__23186_23316 = G__23341;
count__23187_23317 = G__23342;
i__23188_23318 = G__23343;
continue;
}
} else {
}
}
break;
}

var G__23344 = seq__23178_23308;
var G__23345 = chunk__23179_23309;
var G__23346 = count__23180_23310;
var G__23347 = (i__23181_23311 + (1));
seq__23178_23308 = G__23344;
chunk__23179_23309 = G__23345;
count__23180_23310 = G__23346;
i__23181_23311 = G__23347;
continue;
} else {
var temp__4657__auto___23348__$1 = cljs.core.seq.call(null,seq__23178_23308);
if(temp__4657__auto___23348__$1){
var seq__23178_23349__$1 = temp__4657__auto___23348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23178_23349__$1)){
var c__20438__auto___23350 = cljs.core.chunk_first.call(null,seq__23178_23349__$1);
var G__23351 = cljs.core.chunk_rest.call(null,seq__23178_23349__$1);
var G__23352 = c__20438__auto___23350;
var G__23353 = cljs.core.count.call(null,c__20438__auto___23350);
var G__23354 = (0);
seq__23178_23308 = G__23351;
chunk__23179_23309 = G__23352;
count__23180_23310 = G__23353;
i__23181_23311 = G__23354;
continue;
} else {
var vec__23193_23355 = cljs.core.first.call(null,seq__23178_23349__$1);
var column_23356 = cljs.core.nth.call(null,vec__23193_23355,(0),null);
var column_info_23357 = cljs.core.nth.call(null,vec__23193_23355,(1),null);
var seq__23196_23358 = cljs.core.seq.call(null,column_info_23357);
var chunk__23197_23359 = null;
var count__23198_23360 = (0);
var i__23199_23361 = (0);
while(true){
if((i__23199_23361 < count__23198_23360)){
var map__23200_23362 = cljs.core._nth.call(null,chunk__23197_23359,i__23199_23361);
var map__23200_23363__$1 = ((((!((map__23200_23362 == null)))?((((map__23200_23362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23200_23362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23200_23362):map__23200_23362);
var gline_23364 = cljs.core.get.call(null,map__23200_23363__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23365 = cljs.core.get.call(null,map__23200_23363__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23366 = cljs.core.get.call(null,map__23200_23363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23364], null),cljs.core.fnil.call(null,((function (seq__23196_23358,chunk__23197_23359,count__23198_23360,i__23199_23361,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23200_23362,map__23200_23363__$1,gline_23364,gcol_23365,name_23366,vec__23193_23355,column_23356,column_info_23357,seq__23178_23349__$1,temp__4657__auto___23348__$1,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23365], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23306,new cljs.core.Keyword(null,"col","col",-1959363084),column_23356,new cljs.core.Keyword(null,"name","name",1843675177),name_23366], null));
});})(seq__23196_23358,chunk__23197_23359,count__23198_23360,i__23199_23361,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23200_23362,map__23200_23363__$1,gline_23364,gcol_23365,name_23366,vec__23193_23355,column_23356,column_info_23357,seq__23178_23349__$1,temp__4657__auto___23348__$1,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted))
,cljs.core.sorted_map.call(null)));

var G__23367 = seq__23196_23358;
var G__23368 = chunk__23197_23359;
var G__23369 = count__23198_23360;
var G__23370 = (i__23199_23361 + (1));
seq__23196_23358 = G__23367;
chunk__23197_23359 = G__23368;
count__23198_23360 = G__23369;
i__23199_23361 = G__23370;
continue;
} else {
var temp__4657__auto___23371__$2 = cljs.core.seq.call(null,seq__23196_23358);
if(temp__4657__auto___23371__$2){
var seq__23196_23372__$1 = temp__4657__auto___23371__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23196_23372__$1)){
var c__20438__auto___23373 = cljs.core.chunk_first.call(null,seq__23196_23372__$1);
var G__23374 = cljs.core.chunk_rest.call(null,seq__23196_23372__$1);
var G__23375 = c__20438__auto___23373;
var G__23376 = cljs.core.count.call(null,c__20438__auto___23373);
var G__23377 = (0);
seq__23196_23358 = G__23374;
chunk__23197_23359 = G__23375;
count__23198_23360 = G__23376;
i__23199_23361 = G__23377;
continue;
} else {
var map__23202_23378 = cljs.core.first.call(null,seq__23196_23372__$1);
var map__23202_23379__$1 = ((((!((map__23202_23378 == null)))?((((map__23202_23378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23202_23378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23202_23378):map__23202_23378);
var gline_23380 = cljs.core.get.call(null,map__23202_23379__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23381 = cljs.core.get.call(null,map__23202_23379__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23382 = cljs.core.get.call(null,map__23202_23379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23380], null),cljs.core.fnil.call(null,((function (seq__23196_23358,chunk__23197_23359,count__23198_23360,i__23199_23361,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23202_23378,map__23202_23379__$1,gline_23380,gcol_23381,name_23382,seq__23196_23372__$1,temp__4657__auto___23371__$2,vec__23193_23355,column_23356,column_info_23357,seq__23178_23349__$1,temp__4657__auto___23348__$1,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23381], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23306,new cljs.core.Keyword(null,"col","col",-1959363084),column_23356,new cljs.core.Keyword(null,"name","name",1843675177),name_23382], null));
});})(seq__23196_23358,chunk__23197_23359,count__23198_23360,i__23199_23361,seq__23178_23308,chunk__23179_23309,count__23180_23310,i__23181_23311,seq__23142_23204,chunk__23143_23205,count__23144_23206,i__23145_23207,map__23202_23378,map__23202_23379__$1,gline_23380,gcol_23381,name_23382,seq__23196_23372__$1,temp__4657__auto___23371__$2,vec__23193_23355,column_23356,column_info_23357,seq__23178_23349__$1,temp__4657__auto___23348__$1,vec__23175_23305,line_23306,columns_23307,seq__23142_23299__$1,temp__4657__auto___23298,inverted))
,cljs.core.sorted_map.call(null)));

var G__23383 = cljs.core.next.call(null,seq__23196_23372__$1);
var G__23384 = null;
var G__23385 = (0);
var G__23386 = (0);
seq__23196_23358 = G__23383;
chunk__23197_23359 = G__23384;
count__23198_23360 = G__23385;
i__23199_23361 = G__23386;
continue;
}
} else {
}
}
break;
}

var G__23387 = cljs.core.next.call(null,seq__23178_23349__$1);
var G__23388 = null;
var G__23389 = (0);
var G__23390 = (0);
seq__23178_23308 = G__23387;
chunk__23179_23309 = G__23388;
count__23180_23310 = G__23389;
i__23181_23311 = G__23390;
continue;
}
} else {
}
}
break;
}

var G__23391 = cljs.core.next.call(null,seq__23142_23299__$1);
var G__23392 = null;
var G__23393 = (0);
var G__23394 = (0);
seq__23142_23204 = G__23391;
chunk__23143_23205 = G__23392;
count__23144_23206 = G__23393;
i__23145_23207 = G__23394;
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