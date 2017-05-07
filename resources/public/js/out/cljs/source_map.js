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
return cljs.core.reduce.call(null,(function (m,p__13160){
var vec__13161 = p__13160;
var i = cljs.core.nth.call(null,vec__13161,(0),null);
var v = cljs.core.nth.call(null,vec__13161,(1),null);
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
var vec__13167 = seg;
var gcol = cljs.core.nth.call(null,vec__13167,(0),null);
var source = cljs.core.nth.call(null,vec__13167,(1),null);
var line = cljs.core.nth.call(null,vec__13167,(2),null);
var col = cljs.core.nth.call(null,vec__13167,(3),null);
var name = cljs.core.nth.call(null,vec__13167,(4),null);
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
var vec__13176 = seg;
var gcol = cljs.core.nth.call(null,vec__13176,(0),null);
var source = cljs.core.nth.call(null,vec__13176,(1),null);
var line = cljs.core.nth.call(null,vec__13176,(2),null);
var col = cljs.core.nth.call(null,vec__13176,(3),null);
var name = cljs.core.nth.call(null,vec__13176,(4),null);
var vec__13179 = relseg;
var rgcol = cljs.core.nth.call(null,vec__13179,(0),null);
var rsource = cljs.core.nth.call(null,vec__13179,(1),null);
var rline = cljs.core.nth.call(null,vec__13179,(2),null);
var rcol = cljs.core.nth.call(null,vec__13179,(3),null);
var rname = cljs.core.nth.call(null,vec__13179,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8917__auto__ = source;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8917__auto__ = line;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8917__auto__ = col;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8917__auto__ = name;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
var map__13184 = segmap;
var map__13184__$1 = ((((!((map__13184 == null)))?((((map__13184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13184):map__13184);
var gcol = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__13184,map__13184__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__13184,map__13184__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__13184,map__13184__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__13184,map__13184__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13184,map__13184__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__13184,map__13184__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args13186 = [];
var len__10030__auto___13192 = arguments.length;
var i__10031__auto___13193 = (0);
while(true){
if((i__10031__auto___13193 < len__10030__auto___13192)){
args13186.push((arguments[i__10031__auto___13193]));

var G__13194 = (i__10031__auto___13193 + (1));
i__10031__auto___13193 = G__13194;
continue;
} else {
}
break;
}

var G__13188 = args13186.length;
switch (G__13188) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13186.length)].join('')));

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
var vec__13189 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13196 = cljs.core.next.call(null,segs__$1);
var G__13197 = nrelseg;
var G__13198 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13196;
relseg__$1 = G__13197;
result__$1 = G__13198;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13189,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13189,(1),null);
var G__13199 = (gline + (1));
var G__13200 = cljs.core.next.call(null,lines__$1);
var G__13201 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13202 = result__$1;
gline = G__13199;
lines__$1 = G__13200;
relseg = G__13201;
result = G__13202;
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
var map__13206 = segmap;
var map__13206__$1 = ((((!((map__13206 == null)))?((((map__13206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13206):map__13206);
var gcol = cljs.core.get.call(null,map__13206__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13206__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13206__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13206__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__13206,map__13206__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__13206,map__13206__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__13203_SHARP_){
return cljs.core.conj.call(null,p1__13203_SHARP_,d__$1);
});})(map__13206,map__13206__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13206,map__13206__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args13208 = [];
var len__10030__auto___13214 = arguments.length;
var i__10031__auto___13215 = (0);
while(true){
if((i__10031__auto___13215 < len__10030__auto___13214)){
args13208.push((arguments[i__10031__auto___13215]));

var G__13216 = (i__10031__auto___13215 + (1));
i__10031__auto___13215 = G__13216;
continue;
} else {
}
break;
}

var G__13210 = args13208.length;
switch (G__13210) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13208.length)].join('')));

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
var vec__13211 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13218 = cljs.core.next.call(null,segs__$1);
var G__13219 = nrelseg;
var G__13220 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13218;
relseg__$1 = G__13219;
result__$1 = G__13220;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13211,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13211,(1),null);
var G__13221 = (gline + (1));
var G__13222 = cljs.core.next.call(null,lines__$1);
var G__13223 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13224 = result__$1;
gline = G__13221;
lines__$1 = G__13222;
relseg = G__13223;
result = G__13224;
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
return (function (p__13237){
var vec__13238 = p__13237;
var _ = cljs.core.nth.call(null,vec__13238,(0),null);
var source = cljs.core.nth.call(null,vec__13238,(1),null);
var line = cljs.core.nth.call(null,vec__13238,(2),null);
var col = cljs.core.nth.call(null,vec__13238,(3),null);
var name = cljs.core.nth.call(null,vec__13238,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__13241){
var vec__13242 = p__13241;
var gcol = cljs.core.nth.call(null,vec__13242,(0),null);
var sidx = cljs.core.nth.call(null,vec__13242,(1),null);
var line = cljs.core.nth.call(null,vec__13242,(2),null);
var col = cljs.core.nth.call(null,vec__13242,(3),null);
var name = cljs.core.nth.call(null,vec__13242,(4),null);
var seg = vec__13242;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__13242,gcol,sidx,line,col,name,seg,relseg){
return (function (p__13245){
var vec__13246 = p__13245;
var _ = cljs.core.nth.call(null,vec__13246,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13246,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__13246,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__13246,(3),null);
var lname = cljs.core.nth.call(null,vec__13246,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8917__auto__ = name;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__13242,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__8917__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
var seq__13334 = cljs.core.seq.call(null,infos);
var chunk__13335 = null;
var count__13336 = (0);
var i__13337 = (0);
while(true){
if((i__13337 < count__13336)){
var info = cljs.core._nth.call(null,chunk__13335,i__13337);
var segv_13416 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13417 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13418 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13417 > (lc_13418 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13334,chunk__13335,count__13336,i__13337,segv_13416,gline_13417,lc_13418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13417 - (lc_13418 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13416], null));
});})(seq__13334,chunk__13335,count__13336,i__13337,segv_13416,gline_13417,lc_13418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13334,chunk__13335,count__13336,i__13337,segv_13416,gline_13417,lc_13418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13417], null),cljs.core.conj,segv_13416);
});})(seq__13334,chunk__13335,count__13336,i__13337,segv_13416,gline_13417,lc_13418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13419 = seq__13334;
var G__13420 = chunk__13335;
var G__13421 = count__13336;
var G__13422 = (i__13337 + (1));
seq__13334 = G__13419;
chunk__13335 = G__13420;
count__13336 = G__13421;
i__13337 = G__13422;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13334);
if(temp__4657__auto__){
var seq__13334__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13334__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__13334__$1);
var G__13423 = cljs.core.chunk_rest.call(null,seq__13334__$1);
var G__13424 = c__9736__auto__;
var G__13425 = cljs.core.count.call(null,c__9736__auto__);
var G__13426 = (0);
seq__13334 = G__13423;
chunk__13335 = G__13424;
count__13336 = G__13425;
i__13337 = G__13426;
continue;
} else {
var info = cljs.core.first.call(null,seq__13334__$1);
var segv_13427 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13428 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13429 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13428 > (lc_13429 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13334,chunk__13335,count__13336,i__13337,segv_13427,gline_13428,lc_13429,info,seq__13334__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13428 - (lc_13429 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13427], null));
});})(seq__13334,chunk__13335,count__13336,i__13337,segv_13427,gline_13428,lc_13429,info,seq__13334__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13334,chunk__13335,count__13336,i__13337,segv_13427,gline_13428,lc_13429,info,seq__13334__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13428], null),cljs.core.conj,segv_13427);
});})(seq__13334,chunk__13335,count__13336,i__13337,segv_13427,gline_13428,lc_13429,info,seq__13334__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13430 = cljs.core.next.call(null,seq__13334__$1);
var G__13431 = null;
var G__13432 = (0);
var G__13433 = (0);
seq__13334 = G__13430;
chunk__13335 = G__13431;
count__13336 = G__13432;
i__13337 = G__13433;
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
var seq__13338_13434 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13339_13435 = null;
var count__13340_13436 = (0);
var i__13341_13437 = (0);
while(true){
if((i__13341_13437 < count__13340_13436)){
var vec__13342_13438 = cljs.core._nth.call(null,chunk__13339_13435,i__13341_13437);
var source_idx_13439 = cljs.core.nth.call(null,vec__13342_13438,(0),null);
var vec__13345_13440 = cljs.core.nth.call(null,vec__13342_13438,(1),null);
var __13441 = cljs.core.nth.call(null,vec__13345_13440,(0),null);
var lines_13442__$1 = cljs.core.nth.call(null,vec__13345_13440,(1),null);
var seq__13348_13443 = cljs.core.seq.call(null,lines_13442__$1);
var chunk__13349_13444 = null;
var count__13350_13445 = (0);
var i__13351_13446 = (0);
while(true){
if((i__13351_13446 < count__13350_13445)){
var vec__13352_13447 = cljs.core._nth.call(null,chunk__13349_13444,i__13351_13446);
var line_13448 = cljs.core.nth.call(null,vec__13352_13447,(0),null);
var cols_13449 = cljs.core.nth.call(null,vec__13352_13447,(1),null);
var seq__13355_13450 = cljs.core.seq.call(null,cols_13449);
var chunk__13356_13451 = null;
var count__13357_13452 = (0);
var i__13358_13453 = (0);
while(true){
if((i__13358_13453 < count__13357_13452)){
var vec__13359_13454 = cljs.core._nth.call(null,chunk__13356_13451,i__13358_13453);
var col_13455 = cljs.core.nth.call(null,vec__13359_13454,(0),null);
var infos_13456 = cljs.core.nth.call(null,vec__13359_13454,(1),null);
encode_cols.call(null,infos_13456,source_idx_13439,line_13448,col_13455);

var G__13457 = seq__13355_13450;
var G__13458 = chunk__13356_13451;
var G__13459 = count__13357_13452;
var G__13460 = (i__13358_13453 + (1));
seq__13355_13450 = G__13457;
chunk__13356_13451 = G__13458;
count__13357_13452 = G__13459;
i__13358_13453 = G__13460;
continue;
} else {
var temp__4657__auto___13461 = cljs.core.seq.call(null,seq__13355_13450);
if(temp__4657__auto___13461){
var seq__13355_13462__$1 = temp__4657__auto___13461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13355_13462__$1)){
var c__9736__auto___13463 = cljs.core.chunk_first.call(null,seq__13355_13462__$1);
var G__13464 = cljs.core.chunk_rest.call(null,seq__13355_13462__$1);
var G__13465 = c__9736__auto___13463;
var G__13466 = cljs.core.count.call(null,c__9736__auto___13463);
var G__13467 = (0);
seq__13355_13450 = G__13464;
chunk__13356_13451 = G__13465;
count__13357_13452 = G__13466;
i__13358_13453 = G__13467;
continue;
} else {
var vec__13362_13468 = cljs.core.first.call(null,seq__13355_13462__$1);
var col_13469 = cljs.core.nth.call(null,vec__13362_13468,(0),null);
var infos_13470 = cljs.core.nth.call(null,vec__13362_13468,(1),null);
encode_cols.call(null,infos_13470,source_idx_13439,line_13448,col_13469);

var G__13471 = cljs.core.next.call(null,seq__13355_13462__$1);
var G__13472 = null;
var G__13473 = (0);
var G__13474 = (0);
seq__13355_13450 = G__13471;
chunk__13356_13451 = G__13472;
count__13357_13452 = G__13473;
i__13358_13453 = G__13474;
continue;
}
} else {
}
}
break;
}

var G__13475 = seq__13348_13443;
var G__13476 = chunk__13349_13444;
var G__13477 = count__13350_13445;
var G__13478 = (i__13351_13446 + (1));
seq__13348_13443 = G__13475;
chunk__13349_13444 = G__13476;
count__13350_13445 = G__13477;
i__13351_13446 = G__13478;
continue;
} else {
var temp__4657__auto___13479 = cljs.core.seq.call(null,seq__13348_13443);
if(temp__4657__auto___13479){
var seq__13348_13480__$1 = temp__4657__auto___13479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13348_13480__$1)){
var c__9736__auto___13481 = cljs.core.chunk_first.call(null,seq__13348_13480__$1);
var G__13482 = cljs.core.chunk_rest.call(null,seq__13348_13480__$1);
var G__13483 = c__9736__auto___13481;
var G__13484 = cljs.core.count.call(null,c__9736__auto___13481);
var G__13485 = (0);
seq__13348_13443 = G__13482;
chunk__13349_13444 = G__13483;
count__13350_13445 = G__13484;
i__13351_13446 = G__13485;
continue;
} else {
var vec__13365_13486 = cljs.core.first.call(null,seq__13348_13480__$1);
var line_13487 = cljs.core.nth.call(null,vec__13365_13486,(0),null);
var cols_13488 = cljs.core.nth.call(null,vec__13365_13486,(1),null);
var seq__13368_13489 = cljs.core.seq.call(null,cols_13488);
var chunk__13369_13490 = null;
var count__13370_13491 = (0);
var i__13371_13492 = (0);
while(true){
if((i__13371_13492 < count__13370_13491)){
var vec__13372_13493 = cljs.core._nth.call(null,chunk__13369_13490,i__13371_13492);
var col_13494 = cljs.core.nth.call(null,vec__13372_13493,(0),null);
var infos_13495 = cljs.core.nth.call(null,vec__13372_13493,(1),null);
encode_cols.call(null,infos_13495,source_idx_13439,line_13487,col_13494);

var G__13496 = seq__13368_13489;
var G__13497 = chunk__13369_13490;
var G__13498 = count__13370_13491;
var G__13499 = (i__13371_13492 + (1));
seq__13368_13489 = G__13496;
chunk__13369_13490 = G__13497;
count__13370_13491 = G__13498;
i__13371_13492 = G__13499;
continue;
} else {
var temp__4657__auto___13500__$1 = cljs.core.seq.call(null,seq__13368_13489);
if(temp__4657__auto___13500__$1){
var seq__13368_13501__$1 = temp__4657__auto___13500__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13368_13501__$1)){
var c__9736__auto___13502 = cljs.core.chunk_first.call(null,seq__13368_13501__$1);
var G__13503 = cljs.core.chunk_rest.call(null,seq__13368_13501__$1);
var G__13504 = c__9736__auto___13502;
var G__13505 = cljs.core.count.call(null,c__9736__auto___13502);
var G__13506 = (0);
seq__13368_13489 = G__13503;
chunk__13369_13490 = G__13504;
count__13370_13491 = G__13505;
i__13371_13492 = G__13506;
continue;
} else {
var vec__13375_13507 = cljs.core.first.call(null,seq__13368_13501__$1);
var col_13508 = cljs.core.nth.call(null,vec__13375_13507,(0),null);
var infos_13509 = cljs.core.nth.call(null,vec__13375_13507,(1),null);
encode_cols.call(null,infos_13509,source_idx_13439,line_13487,col_13508);

var G__13510 = cljs.core.next.call(null,seq__13368_13501__$1);
var G__13511 = null;
var G__13512 = (0);
var G__13513 = (0);
seq__13368_13489 = G__13510;
chunk__13369_13490 = G__13511;
count__13370_13491 = G__13512;
i__13371_13492 = G__13513;
continue;
}
} else {
}
}
break;
}

var G__13514 = cljs.core.next.call(null,seq__13348_13480__$1);
var G__13515 = null;
var G__13516 = (0);
var G__13517 = (0);
seq__13348_13443 = G__13514;
chunk__13349_13444 = G__13515;
count__13350_13445 = G__13516;
i__13351_13446 = G__13517;
continue;
}
} else {
}
}
break;
}

var G__13518 = seq__13338_13434;
var G__13519 = chunk__13339_13435;
var G__13520 = count__13340_13436;
var G__13521 = (i__13341_13437 + (1));
seq__13338_13434 = G__13518;
chunk__13339_13435 = G__13519;
count__13340_13436 = G__13520;
i__13341_13437 = G__13521;
continue;
} else {
var temp__4657__auto___13522 = cljs.core.seq.call(null,seq__13338_13434);
if(temp__4657__auto___13522){
var seq__13338_13523__$1 = temp__4657__auto___13522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13338_13523__$1)){
var c__9736__auto___13524 = cljs.core.chunk_first.call(null,seq__13338_13523__$1);
var G__13525 = cljs.core.chunk_rest.call(null,seq__13338_13523__$1);
var G__13526 = c__9736__auto___13524;
var G__13527 = cljs.core.count.call(null,c__9736__auto___13524);
var G__13528 = (0);
seq__13338_13434 = G__13525;
chunk__13339_13435 = G__13526;
count__13340_13436 = G__13527;
i__13341_13437 = G__13528;
continue;
} else {
var vec__13378_13529 = cljs.core.first.call(null,seq__13338_13523__$1);
var source_idx_13530 = cljs.core.nth.call(null,vec__13378_13529,(0),null);
var vec__13381_13531 = cljs.core.nth.call(null,vec__13378_13529,(1),null);
var __13532 = cljs.core.nth.call(null,vec__13381_13531,(0),null);
var lines_13533__$1 = cljs.core.nth.call(null,vec__13381_13531,(1),null);
var seq__13384_13534 = cljs.core.seq.call(null,lines_13533__$1);
var chunk__13385_13535 = null;
var count__13386_13536 = (0);
var i__13387_13537 = (0);
while(true){
if((i__13387_13537 < count__13386_13536)){
var vec__13388_13538 = cljs.core._nth.call(null,chunk__13385_13535,i__13387_13537);
var line_13539 = cljs.core.nth.call(null,vec__13388_13538,(0),null);
var cols_13540 = cljs.core.nth.call(null,vec__13388_13538,(1),null);
var seq__13391_13541 = cljs.core.seq.call(null,cols_13540);
var chunk__13392_13542 = null;
var count__13393_13543 = (0);
var i__13394_13544 = (0);
while(true){
if((i__13394_13544 < count__13393_13543)){
var vec__13395_13545 = cljs.core._nth.call(null,chunk__13392_13542,i__13394_13544);
var col_13546 = cljs.core.nth.call(null,vec__13395_13545,(0),null);
var infos_13547 = cljs.core.nth.call(null,vec__13395_13545,(1),null);
encode_cols.call(null,infos_13547,source_idx_13530,line_13539,col_13546);

var G__13548 = seq__13391_13541;
var G__13549 = chunk__13392_13542;
var G__13550 = count__13393_13543;
var G__13551 = (i__13394_13544 + (1));
seq__13391_13541 = G__13548;
chunk__13392_13542 = G__13549;
count__13393_13543 = G__13550;
i__13394_13544 = G__13551;
continue;
} else {
var temp__4657__auto___13552__$1 = cljs.core.seq.call(null,seq__13391_13541);
if(temp__4657__auto___13552__$1){
var seq__13391_13553__$1 = temp__4657__auto___13552__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13391_13553__$1)){
var c__9736__auto___13554 = cljs.core.chunk_first.call(null,seq__13391_13553__$1);
var G__13555 = cljs.core.chunk_rest.call(null,seq__13391_13553__$1);
var G__13556 = c__9736__auto___13554;
var G__13557 = cljs.core.count.call(null,c__9736__auto___13554);
var G__13558 = (0);
seq__13391_13541 = G__13555;
chunk__13392_13542 = G__13556;
count__13393_13543 = G__13557;
i__13394_13544 = G__13558;
continue;
} else {
var vec__13398_13559 = cljs.core.first.call(null,seq__13391_13553__$1);
var col_13560 = cljs.core.nth.call(null,vec__13398_13559,(0),null);
var infos_13561 = cljs.core.nth.call(null,vec__13398_13559,(1),null);
encode_cols.call(null,infos_13561,source_idx_13530,line_13539,col_13560);

var G__13562 = cljs.core.next.call(null,seq__13391_13553__$1);
var G__13563 = null;
var G__13564 = (0);
var G__13565 = (0);
seq__13391_13541 = G__13562;
chunk__13392_13542 = G__13563;
count__13393_13543 = G__13564;
i__13394_13544 = G__13565;
continue;
}
} else {
}
}
break;
}

var G__13566 = seq__13384_13534;
var G__13567 = chunk__13385_13535;
var G__13568 = count__13386_13536;
var G__13569 = (i__13387_13537 + (1));
seq__13384_13534 = G__13566;
chunk__13385_13535 = G__13567;
count__13386_13536 = G__13568;
i__13387_13537 = G__13569;
continue;
} else {
var temp__4657__auto___13570__$1 = cljs.core.seq.call(null,seq__13384_13534);
if(temp__4657__auto___13570__$1){
var seq__13384_13571__$1 = temp__4657__auto___13570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13384_13571__$1)){
var c__9736__auto___13572 = cljs.core.chunk_first.call(null,seq__13384_13571__$1);
var G__13573 = cljs.core.chunk_rest.call(null,seq__13384_13571__$1);
var G__13574 = c__9736__auto___13572;
var G__13575 = cljs.core.count.call(null,c__9736__auto___13572);
var G__13576 = (0);
seq__13384_13534 = G__13573;
chunk__13385_13535 = G__13574;
count__13386_13536 = G__13575;
i__13387_13537 = G__13576;
continue;
} else {
var vec__13401_13577 = cljs.core.first.call(null,seq__13384_13571__$1);
var line_13578 = cljs.core.nth.call(null,vec__13401_13577,(0),null);
var cols_13579 = cljs.core.nth.call(null,vec__13401_13577,(1),null);
var seq__13404_13580 = cljs.core.seq.call(null,cols_13579);
var chunk__13405_13581 = null;
var count__13406_13582 = (0);
var i__13407_13583 = (0);
while(true){
if((i__13407_13583 < count__13406_13582)){
var vec__13408_13584 = cljs.core._nth.call(null,chunk__13405_13581,i__13407_13583);
var col_13585 = cljs.core.nth.call(null,vec__13408_13584,(0),null);
var infos_13586 = cljs.core.nth.call(null,vec__13408_13584,(1),null);
encode_cols.call(null,infos_13586,source_idx_13530,line_13578,col_13585);

var G__13587 = seq__13404_13580;
var G__13588 = chunk__13405_13581;
var G__13589 = count__13406_13582;
var G__13590 = (i__13407_13583 + (1));
seq__13404_13580 = G__13587;
chunk__13405_13581 = G__13588;
count__13406_13582 = G__13589;
i__13407_13583 = G__13590;
continue;
} else {
var temp__4657__auto___13591__$2 = cljs.core.seq.call(null,seq__13404_13580);
if(temp__4657__auto___13591__$2){
var seq__13404_13592__$1 = temp__4657__auto___13591__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13404_13592__$1)){
var c__9736__auto___13593 = cljs.core.chunk_first.call(null,seq__13404_13592__$1);
var G__13594 = cljs.core.chunk_rest.call(null,seq__13404_13592__$1);
var G__13595 = c__9736__auto___13593;
var G__13596 = cljs.core.count.call(null,c__9736__auto___13593);
var G__13597 = (0);
seq__13404_13580 = G__13594;
chunk__13405_13581 = G__13595;
count__13406_13582 = G__13596;
i__13407_13583 = G__13597;
continue;
} else {
var vec__13411_13598 = cljs.core.first.call(null,seq__13404_13592__$1);
var col_13599 = cljs.core.nth.call(null,vec__13411_13598,(0),null);
var infos_13600 = cljs.core.nth.call(null,vec__13411_13598,(1),null);
encode_cols.call(null,infos_13600,source_idx_13530,line_13578,col_13599);

var G__13601 = cljs.core.next.call(null,seq__13404_13592__$1);
var G__13602 = null;
var G__13603 = (0);
var G__13604 = (0);
seq__13404_13580 = G__13601;
chunk__13405_13581 = G__13602;
count__13406_13582 = G__13603;
i__13407_13583 = G__13604;
continue;
}
} else {
}
}
break;
}

var G__13605 = cljs.core.next.call(null,seq__13384_13571__$1);
var G__13606 = null;
var G__13607 = (0);
var G__13608 = (0);
seq__13384_13534 = G__13605;
chunk__13385_13535 = G__13606;
count__13386_13536 = G__13607;
i__13387_13537 = G__13608;
continue;
}
} else {
}
}
break;
}

var G__13609 = cljs.core.next.call(null,seq__13338_13523__$1);
var G__13610 = null;
var G__13611 = (0);
var G__13612 = (0);
seq__13338_13434 = G__13609;
chunk__13339_13435 = G__13610;
count__13340_13436 = G__13611;
i__13341_13437 = G__13612;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13414 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13249_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13249_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13250_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__13250_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13251_SHARP_){
return clojure.string.join.call(null,",",p1__13251_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__13415 = G__13414;
goog.object.set(G__13415,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__13415;
} else {
return G__13414;
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
var vec__13622 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13622,(0),null);
var col_map = cljs.core.nth.call(null,vec__13622,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13625 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13625,(0),null);
var infos = cljs.core.nth.call(null,vec__13625,(1),null);
var G__13631 = cljs.core.next.call(null,col_map_seq);
var G__13632 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13625,col,infos,vec__13622,line,col_map){
return (function (v,p__13628){
var map__13629 = p__13628;
var map__13629__$1 = ((((!((map__13629 == null)))?((((map__13629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13629):map__13629);
var gline = cljs.core.get.call(null,map__13629__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13629__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13625,col,infos,vec__13622,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13631;
new_cols = G__13632;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13633 = cljs.core.next.call(null,line_map_seq);
var G__13634 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13633;
new_lines = G__13634;
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
var seq__13697_13759 = cljs.core.seq.call(null,reverse_map);
var chunk__13698_13760 = null;
var count__13699_13761 = (0);
var i__13700_13762 = (0);
while(true){
if((i__13700_13762 < count__13699_13761)){
var vec__13701_13763 = cljs.core._nth.call(null,chunk__13698_13760,i__13700_13762);
var line_13764 = cljs.core.nth.call(null,vec__13701_13763,(0),null);
var columns_13765 = cljs.core.nth.call(null,vec__13701_13763,(1),null);
var seq__13704_13766 = cljs.core.seq.call(null,columns_13765);
var chunk__13705_13767 = null;
var count__13706_13768 = (0);
var i__13707_13769 = (0);
while(true){
if((i__13707_13769 < count__13706_13768)){
var vec__13708_13770 = cljs.core._nth.call(null,chunk__13705_13767,i__13707_13769);
var column_13771 = cljs.core.nth.call(null,vec__13708_13770,(0),null);
var column_info_13772 = cljs.core.nth.call(null,vec__13708_13770,(1),null);
var seq__13711_13773 = cljs.core.seq.call(null,column_info_13772);
var chunk__13712_13774 = null;
var count__13713_13775 = (0);
var i__13714_13776 = (0);
while(true){
if((i__13714_13776 < count__13713_13775)){
var map__13715_13777 = cljs.core._nth.call(null,chunk__13712_13774,i__13714_13776);
var map__13715_13778__$1 = ((((!((map__13715_13777 == null)))?((((map__13715_13777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13715_13777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13715_13777):map__13715_13777);
var gline_13779 = cljs.core.get.call(null,map__13715_13778__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13780 = cljs.core.get.call(null,map__13715_13778__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13781 = cljs.core.get.call(null,map__13715_13778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13779], null),cljs.core.fnil.call(null,((function (seq__13711_13773,chunk__13712_13774,count__13713_13775,i__13714_13776,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13715_13777,map__13715_13778__$1,gline_13779,gcol_13780,name_13781,vec__13708_13770,column_13771,column_info_13772,vec__13701_13763,line_13764,columns_13765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13780], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13764,new cljs.core.Keyword(null,"col","col",-1959363084),column_13771,new cljs.core.Keyword(null,"name","name",1843675177),name_13781], null));
});})(seq__13711_13773,chunk__13712_13774,count__13713_13775,i__13714_13776,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13715_13777,map__13715_13778__$1,gline_13779,gcol_13780,name_13781,vec__13708_13770,column_13771,column_info_13772,vec__13701_13763,line_13764,columns_13765,inverted))
,cljs.core.sorted_map.call(null)));

var G__13782 = seq__13711_13773;
var G__13783 = chunk__13712_13774;
var G__13784 = count__13713_13775;
var G__13785 = (i__13714_13776 + (1));
seq__13711_13773 = G__13782;
chunk__13712_13774 = G__13783;
count__13713_13775 = G__13784;
i__13714_13776 = G__13785;
continue;
} else {
var temp__4657__auto___13786 = cljs.core.seq.call(null,seq__13711_13773);
if(temp__4657__auto___13786){
var seq__13711_13787__$1 = temp__4657__auto___13786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13711_13787__$1)){
var c__9736__auto___13788 = cljs.core.chunk_first.call(null,seq__13711_13787__$1);
var G__13789 = cljs.core.chunk_rest.call(null,seq__13711_13787__$1);
var G__13790 = c__9736__auto___13788;
var G__13791 = cljs.core.count.call(null,c__9736__auto___13788);
var G__13792 = (0);
seq__13711_13773 = G__13789;
chunk__13712_13774 = G__13790;
count__13713_13775 = G__13791;
i__13714_13776 = G__13792;
continue;
} else {
var map__13717_13793 = cljs.core.first.call(null,seq__13711_13787__$1);
var map__13717_13794__$1 = ((((!((map__13717_13793 == null)))?((((map__13717_13793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13717_13793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13717_13793):map__13717_13793);
var gline_13795 = cljs.core.get.call(null,map__13717_13794__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13796 = cljs.core.get.call(null,map__13717_13794__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13797 = cljs.core.get.call(null,map__13717_13794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13795], null),cljs.core.fnil.call(null,((function (seq__13711_13773,chunk__13712_13774,count__13713_13775,i__13714_13776,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13717_13793,map__13717_13794__$1,gline_13795,gcol_13796,name_13797,seq__13711_13787__$1,temp__4657__auto___13786,vec__13708_13770,column_13771,column_info_13772,vec__13701_13763,line_13764,columns_13765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13796], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13764,new cljs.core.Keyword(null,"col","col",-1959363084),column_13771,new cljs.core.Keyword(null,"name","name",1843675177),name_13797], null));
});})(seq__13711_13773,chunk__13712_13774,count__13713_13775,i__13714_13776,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13717_13793,map__13717_13794__$1,gline_13795,gcol_13796,name_13797,seq__13711_13787__$1,temp__4657__auto___13786,vec__13708_13770,column_13771,column_info_13772,vec__13701_13763,line_13764,columns_13765,inverted))
,cljs.core.sorted_map.call(null)));

var G__13798 = cljs.core.next.call(null,seq__13711_13787__$1);
var G__13799 = null;
var G__13800 = (0);
var G__13801 = (0);
seq__13711_13773 = G__13798;
chunk__13712_13774 = G__13799;
count__13713_13775 = G__13800;
i__13714_13776 = G__13801;
continue;
}
} else {
}
}
break;
}

var G__13802 = seq__13704_13766;
var G__13803 = chunk__13705_13767;
var G__13804 = count__13706_13768;
var G__13805 = (i__13707_13769 + (1));
seq__13704_13766 = G__13802;
chunk__13705_13767 = G__13803;
count__13706_13768 = G__13804;
i__13707_13769 = G__13805;
continue;
} else {
var temp__4657__auto___13806 = cljs.core.seq.call(null,seq__13704_13766);
if(temp__4657__auto___13806){
var seq__13704_13807__$1 = temp__4657__auto___13806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13704_13807__$1)){
var c__9736__auto___13808 = cljs.core.chunk_first.call(null,seq__13704_13807__$1);
var G__13809 = cljs.core.chunk_rest.call(null,seq__13704_13807__$1);
var G__13810 = c__9736__auto___13808;
var G__13811 = cljs.core.count.call(null,c__9736__auto___13808);
var G__13812 = (0);
seq__13704_13766 = G__13809;
chunk__13705_13767 = G__13810;
count__13706_13768 = G__13811;
i__13707_13769 = G__13812;
continue;
} else {
var vec__13719_13813 = cljs.core.first.call(null,seq__13704_13807__$1);
var column_13814 = cljs.core.nth.call(null,vec__13719_13813,(0),null);
var column_info_13815 = cljs.core.nth.call(null,vec__13719_13813,(1),null);
var seq__13722_13816 = cljs.core.seq.call(null,column_info_13815);
var chunk__13723_13817 = null;
var count__13724_13818 = (0);
var i__13725_13819 = (0);
while(true){
if((i__13725_13819 < count__13724_13818)){
var map__13726_13820 = cljs.core._nth.call(null,chunk__13723_13817,i__13725_13819);
var map__13726_13821__$1 = ((((!((map__13726_13820 == null)))?((((map__13726_13820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13726_13820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13726_13820):map__13726_13820);
var gline_13822 = cljs.core.get.call(null,map__13726_13821__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13823 = cljs.core.get.call(null,map__13726_13821__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13824 = cljs.core.get.call(null,map__13726_13821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13822], null),cljs.core.fnil.call(null,((function (seq__13722_13816,chunk__13723_13817,count__13724_13818,i__13725_13819,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13726_13820,map__13726_13821__$1,gline_13822,gcol_13823,name_13824,vec__13719_13813,column_13814,column_info_13815,seq__13704_13807__$1,temp__4657__auto___13806,vec__13701_13763,line_13764,columns_13765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13823], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13764,new cljs.core.Keyword(null,"col","col",-1959363084),column_13814,new cljs.core.Keyword(null,"name","name",1843675177),name_13824], null));
});})(seq__13722_13816,chunk__13723_13817,count__13724_13818,i__13725_13819,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13726_13820,map__13726_13821__$1,gline_13822,gcol_13823,name_13824,vec__13719_13813,column_13814,column_info_13815,seq__13704_13807__$1,temp__4657__auto___13806,vec__13701_13763,line_13764,columns_13765,inverted))
,cljs.core.sorted_map.call(null)));

var G__13825 = seq__13722_13816;
var G__13826 = chunk__13723_13817;
var G__13827 = count__13724_13818;
var G__13828 = (i__13725_13819 + (1));
seq__13722_13816 = G__13825;
chunk__13723_13817 = G__13826;
count__13724_13818 = G__13827;
i__13725_13819 = G__13828;
continue;
} else {
var temp__4657__auto___13829__$1 = cljs.core.seq.call(null,seq__13722_13816);
if(temp__4657__auto___13829__$1){
var seq__13722_13830__$1 = temp__4657__auto___13829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13722_13830__$1)){
var c__9736__auto___13831 = cljs.core.chunk_first.call(null,seq__13722_13830__$1);
var G__13832 = cljs.core.chunk_rest.call(null,seq__13722_13830__$1);
var G__13833 = c__9736__auto___13831;
var G__13834 = cljs.core.count.call(null,c__9736__auto___13831);
var G__13835 = (0);
seq__13722_13816 = G__13832;
chunk__13723_13817 = G__13833;
count__13724_13818 = G__13834;
i__13725_13819 = G__13835;
continue;
} else {
var map__13728_13836 = cljs.core.first.call(null,seq__13722_13830__$1);
var map__13728_13837__$1 = ((((!((map__13728_13836 == null)))?((((map__13728_13836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13728_13836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13728_13836):map__13728_13836);
var gline_13838 = cljs.core.get.call(null,map__13728_13837__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13839 = cljs.core.get.call(null,map__13728_13837__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13840 = cljs.core.get.call(null,map__13728_13837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13838], null),cljs.core.fnil.call(null,((function (seq__13722_13816,chunk__13723_13817,count__13724_13818,i__13725_13819,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13728_13836,map__13728_13837__$1,gline_13838,gcol_13839,name_13840,seq__13722_13830__$1,temp__4657__auto___13829__$1,vec__13719_13813,column_13814,column_info_13815,seq__13704_13807__$1,temp__4657__auto___13806,vec__13701_13763,line_13764,columns_13765,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13839], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13764,new cljs.core.Keyword(null,"col","col",-1959363084),column_13814,new cljs.core.Keyword(null,"name","name",1843675177),name_13840], null));
});})(seq__13722_13816,chunk__13723_13817,count__13724_13818,i__13725_13819,seq__13704_13766,chunk__13705_13767,count__13706_13768,i__13707_13769,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13728_13836,map__13728_13837__$1,gline_13838,gcol_13839,name_13840,seq__13722_13830__$1,temp__4657__auto___13829__$1,vec__13719_13813,column_13814,column_info_13815,seq__13704_13807__$1,temp__4657__auto___13806,vec__13701_13763,line_13764,columns_13765,inverted))
,cljs.core.sorted_map.call(null)));

var G__13841 = cljs.core.next.call(null,seq__13722_13830__$1);
var G__13842 = null;
var G__13843 = (0);
var G__13844 = (0);
seq__13722_13816 = G__13841;
chunk__13723_13817 = G__13842;
count__13724_13818 = G__13843;
i__13725_13819 = G__13844;
continue;
}
} else {
}
}
break;
}

var G__13845 = cljs.core.next.call(null,seq__13704_13807__$1);
var G__13846 = null;
var G__13847 = (0);
var G__13848 = (0);
seq__13704_13766 = G__13845;
chunk__13705_13767 = G__13846;
count__13706_13768 = G__13847;
i__13707_13769 = G__13848;
continue;
}
} else {
}
}
break;
}

var G__13849 = seq__13697_13759;
var G__13850 = chunk__13698_13760;
var G__13851 = count__13699_13761;
var G__13852 = (i__13700_13762 + (1));
seq__13697_13759 = G__13849;
chunk__13698_13760 = G__13850;
count__13699_13761 = G__13851;
i__13700_13762 = G__13852;
continue;
} else {
var temp__4657__auto___13853 = cljs.core.seq.call(null,seq__13697_13759);
if(temp__4657__auto___13853){
var seq__13697_13854__$1 = temp__4657__auto___13853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13697_13854__$1)){
var c__9736__auto___13855 = cljs.core.chunk_first.call(null,seq__13697_13854__$1);
var G__13856 = cljs.core.chunk_rest.call(null,seq__13697_13854__$1);
var G__13857 = c__9736__auto___13855;
var G__13858 = cljs.core.count.call(null,c__9736__auto___13855);
var G__13859 = (0);
seq__13697_13759 = G__13856;
chunk__13698_13760 = G__13857;
count__13699_13761 = G__13858;
i__13700_13762 = G__13859;
continue;
} else {
var vec__13730_13860 = cljs.core.first.call(null,seq__13697_13854__$1);
var line_13861 = cljs.core.nth.call(null,vec__13730_13860,(0),null);
var columns_13862 = cljs.core.nth.call(null,vec__13730_13860,(1),null);
var seq__13733_13863 = cljs.core.seq.call(null,columns_13862);
var chunk__13734_13864 = null;
var count__13735_13865 = (0);
var i__13736_13866 = (0);
while(true){
if((i__13736_13866 < count__13735_13865)){
var vec__13737_13867 = cljs.core._nth.call(null,chunk__13734_13864,i__13736_13866);
var column_13868 = cljs.core.nth.call(null,vec__13737_13867,(0),null);
var column_info_13869 = cljs.core.nth.call(null,vec__13737_13867,(1),null);
var seq__13740_13870 = cljs.core.seq.call(null,column_info_13869);
var chunk__13741_13871 = null;
var count__13742_13872 = (0);
var i__13743_13873 = (0);
while(true){
if((i__13743_13873 < count__13742_13872)){
var map__13744_13874 = cljs.core._nth.call(null,chunk__13741_13871,i__13743_13873);
var map__13744_13875__$1 = ((((!((map__13744_13874 == null)))?((((map__13744_13874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13744_13874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13744_13874):map__13744_13874);
var gline_13876 = cljs.core.get.call(null,map__13744_13875__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13877 = cljs.core.get.call(null,map__13744_13875__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13878 = cljs.core.get.call(null,map__13744_13875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13876], null),cljs.core.fnil.call(null,((function (seq__13740_13870,chunk__13741_13871,count__13742_13872,i__13743_13873,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13744_13874,map__13744_13875__$1,gline_13876,gcol_13877,name_13878,vec__13737_13867,column_13868,column_info_13869,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13877], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13861,new cljs.core.Keyword(null,"col","col",-1959363084),column_13868,new cljs.core.Keyword(null,"name","name",1843675177),name_13878], null));
});})(seq__13740_13870,chunk__13741_13871,count__13742_13872,i__13743_13873,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13744_13874,map__13744_13875__$1,gline_13876,gcol_13877,name_13878,vec__13737_13867,column_13868,column_info_13869,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted))
,cljs.core.sorted_map.call(null)));

var G__13879 = seq__13740_13870;
var G__13880 = chunk__13741_13871;
var G__13881 = count__13742_13872;
var G__13882 = (i__13743_13873 + (1));
seq__13740_13870 = G__13879;
chunk__13741_13871 = G__13880;
count__13742_13872 = G__13881;
i__13743_13873 = G__13882;
continue;
} else {
var temp__4657__auto___13883__$1 = cljs.core.seq.call(null,seq__13740_13870);
if(temp__4657__auto___13883__$1){
var seq__13740_13884__$1 = temp__4657__auto___13883__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13740_13884__$1)){
var c__9736__auto___13885 = cljs.core.chunk_first.call(null,seq__13740_13884__$1);
var G__13886 = cljs.core.chunk_rest.call(null,seq__13740_13884__$1);
var G__13887 = c__9736__auto___13885;
var G__13888 = cljs.core.count.call(null,c__9736__auto___13885);
var G__13889 = (0);
seq__13740_13870 = G__13886;
chunk__13741_13871 = G__13887;
count__13742_13872 = G__13888;
i__13743_13873 = G__13889;
continue;
} else {
var map__13746_13890 = cljs.core.first.call(null,seq__13740_13884__$1);
var map__13746_13891__$1 = ((((!((map__13746_13890 == null)))?((((map__13746_13890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13746_13890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13746_13890):map__13746_13890);
var gline_13892 = cljs.core.get.call(null,map__13746_13891__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13893 = cljs.core.get.call(null,map__13746_13891__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13894 = cljs.core.get.call(null,map__13746_13891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13892], null),cljs.core.fnil.call(null,((function (seq__13740_13870,chunk__13741_13871,count__13742_13872,i__13743_13873,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13746_13890,map__13746_13891__$1,gline_13892,gcol_13893,name_13894,seq__13740_13884__$1,temp__4657__auto___13883__$1,vec__13737_13867,column_13868,column_info_13869,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13893], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13861,new cljs.core.Keyword(null,"col","col",-1959363084),column_13868,new cljs.core.Keyword(null,"name","name",1843675177),name_13894], null));
});})(seq__13740_13870,chunk__13741_13871,count__13742_13872,i__13743_13873,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13746_13890,map__13746_13891__$1,gline_13892,gcol_13893,name_13894,seq__13740_13884__$1,temp__4657__auto___13883__$1,vec__13737_13867,column_13868,column_info_13869,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted))
,cljs.core.sorted_map.call(null)));

var G__13895 = cljs.core.next.call(null,seq__13740_13884__$1);
var G__13896 = null;
var G__13897 = (0);
var G__13898 = (0);
seq__13740_13870 = G__13895;
chunk__13741_13871 = G__13896;
count__13742_13872 = G__13897;
i__13743_13873 = G__13898;
continue;
}
} else {
}
}
break;
}

var G__13899 = seq__13733_13863;
var G__13900 = chunk__13734_13864;
var G__13901 = count__13735_13865;
var G__13902 = (i__13736_13866 + (1));
seq__13733_13863 = G__13899;
chunk__13734_13864 = G__13900;
count__13735_13865 = G__13901;
i__13736_13866 = G__13902;
continue;
} else {
var temp__4657__auto___13903__$1 = cljs.core.seq.call(null,seq__13733_13863);
if(temp__4657__auto___13903__$1){
var seq__13733_13904__$1 = temp__4657__auto___13903__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13733_13904__$1)){
var c__9736__auto___13905 = cljs.core.chunk_first.call(null,seq__13733_13904__$1);
var G__13906 = cljs.core.chunk_rest.call(null,seq__13733_13904__$1);
var G__13907 = c__9736__auto___13905;
var G__13908 = cljs.core.count.call(null,c__9736__auto___13905);
var G__13909 = (0);
seq__13733_13863 = G__13906;
chunk__13734_13864 = G__13907;
count__13735_13865 = G__13908;
i__13736_13866 = G__13909;
continue;
} else {
var vec__13748_13910 = cljs.core.first.call(null,seq__13733_13904__$1);
var column_13911 = cljs.core.nth.call(null,vec__13748_13910,(0),null);
var column_info_13912 = cljs.core.nth.call(null,vec__13748_13910,(1),null);
var seq__13751_13913 = cljs.core.seq.call(null,column_info_13912);
var chunk__13752_13914 = null;
var count__13753_13915 = (0);
var i__13754_13916 = (0);
while(true){
if((i__13754_13916 < count__13753_13915)){
var map__13755_13917 = cljs.core._nth.call(null,chunk__13752_13914,i__13754_13916);
var map__13755_13918__$1 = ((((!((map__13755_13917 == null)))?((((map__13755_13917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13755_13917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13755_13917):map__13755_13917);
var gline_13919 = cljs.core.get.call(null,map__13755_13918__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13920 = cljs.core.get.call(null,map__13755_13918__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13921 = cljs.core.get.call(null,map__13755_13918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13919], null),cljs.core.fnil.call(null,((function (seq__13751_13913,chunk__13752_13914,count__13753_13915,i__13754_13916,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13755_13917,map__13755_13918__$1,gline_13919,gcol_13920,name_13921,vec__13748_13910,column_13911,column_info_13912,seq__13733_13904__$1,temp__4657__auto___13903__$1,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13920], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13861,new cljs.core.Keyword(null,"col","col",-1959363084),column_13911,new cljs.core.Keyword(null,"name","name",1843675177),name_13921], null));
});})(seq__13751_13913,chunk__13752_13914,count__13753_13915,i__13754_13916,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13755_13917,map__13755_13918__$1,gline_13919,gcol_13920,name_13921,vec__13748_13910,column_13911,column_info_13912,seq__13733_13904__$1,temp__4657__auto___13903__$1,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted))
,cljs.core.sorted_map.call(null)));

var G__13922 = seq__13751_13913;
var G__13923 = chunk__13752_13914;
var G__13924 = count__13753_13915;
var G__13925 = (i__13754_13916 + (1));
seq__13751_13913 = G__13922;
chunk__13752_13914 = G__13923;
count__13753_13915 = G__13924;
i__13754_13916 = G__13925;
continue;
} else {
var temp__4657__auto___13926__$2 = cljs.core.seq.call(null,seq__13751_13913);
if(temp__4657__auto___13926__$2){
var seq__13751_13927__$1 = temp__4657__auto___13926__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13751_13927__$1)){
var c__9736__auto___13928 = cljs.core.chunk_first.call(null,seq__13751_13927__$1);
var G__13929 = cljs.core.chunk_rest.call(null,seq__13751_13927__$1);
var G__13930 = c__9736__auto___13928;
var G__13931 = cljs.core.count.call(null,c__9736__auto___13928);
var G__13932 = (0);
seq__13751_13913 = G__13929;
chunk__13752_13914 = G__13930;
count__13753_13915 = G__13931;
i__13754_13916 = G__13932;
continue;
} else {
var map__13757_13933 = cljs.core.first.call(null,seq__13751_13927__$1);
var map__13757_13934__$1 = ((((!((map__13757_13933 == null)))?((((map__13757_13933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13757_13933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13757_13933):map__13757_13933);
var gline_13935 = cljs.core.get.call(null,map__13757_13934__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13936 = cljs.core.get.call(null,map__13757_13934__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13937 = cljs.core.get.call(null,map__13757_13934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13935], null),cljs.core.fnil.call(null,((function (seq__13751_13913,chunk__13752_13914,count__13753_13915,i__13754_13916,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13757_13933,map__13757_13934__$1,gline_13935,gcol_13936,name_13937,seq__13751_13927__$1,temp__4657__auto___13926__$2,vec__13748_13910,column_13911,column_info_13912,seq__13733_13904__$1,temp__4657__auto___13903__$1,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13936], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13861,new cljs.core.Keyword(null,"col","col",-1959363084),column_13911,new cljs.core.Keyword(null,"name","name",1843675177),name_13937], null));
});})(seq__13751_13913,chunk__13752_13914,count__13753_13915,i__13754_13916,seq__13733_13863,chunk__13734_13864,count__13735_13865,i__13736_13866,seq__13697_13759,chunk__13698_13760,count__13699_13761,i__13700_13762,map__13757_13933,map__13757_13934__$1,gline_13935,gcol_13936,name_13937,seq__13751_13927__$1,temp__4657__auto___13926__$2,vec__13748_13910,column_13911,column_info_13912,seq__13733_13904__$1,temp__4657__auto___13903__$1,vec__13730_13860,line_13861,columns_13862,seq__13697_13854__$1,temp__4657__auto___13853,inverted))
,cljs.core.sorted_map.call(null)));

var G__13938 = cljs.core.next.call(null,seq__13751_13927__$1);
var G__13939 = null;
var G__13940 = (0);
var G__13941 = (0);
seq__13751_13913 = G__13938;
chunk__13752_13914 = G__13939;
count__13753_13915 = G__13940;
i__13754_13916 = G__13941;
continue;
}
} else {
}
}
break;
}

var G__13942 = cljs.core.next.call(null,seq__13733_13904__$1);
var G__13943 = null;
var G__13944 = (0);
var G__13945 = (0);
seq__13733_13863 = G__13942;
chunk__13734_13864 = G__13943;
count__13735_13865 = G__13944;
i__13736_13866 = G__13945;
continue;
}
} else {
}
}
break;
}

var G__13946 = cljs.core.next.call(null,seq__13697_13854__$1);
var G__13947 = null;
var G__13948 = (0);
var G__13949 = (0);
seq__13697_13759 = G__13946;
chunk__13698_13760 = G__13947;
count__13699_13761 = G__13948;
i__13700_13762 = G__13949;
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