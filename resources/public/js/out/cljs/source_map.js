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
return cljs.core.reduce.call(null,(function (m,p__50134){
var vec__50135 = p__50134;
var i = cljs.core.nth.call(null,vec__50135,(0),null);
var v = cljs.core.nth.call(null,vec__50135,(1),null);
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
var vec__50141 = seg;
var gcol = cljs.core.nth.call(null,vec__50141,(0),null);
var source = cljs.core.nth.call(null,vec__50141,(1),null);
var line = cljs.core.nth.call(null,vec__50141,(2),null);
var col = cljs.core.nth.call(null,vec__50141,(3),null);
var name = cljs.core.nth.call(null,vec__50141,(4),null);
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
var vec__50150 = seg;
var gcol = cljs.core.nth.call(null,vec__50150,(0),null);
var source = cljs.core.nth.call(null,vec__50150,(1),null);
var line = cljs.core.nth.call(null,vec__50150,(2),null);
var col = cljs.core.nth.call(null,vec__50150,(3),null);
var name = cljs.core.nth.call(null,vec__50150,(4),null);
var vec__50153 = relseg;
var rgcol = cljs.core.nth.call(null,vec__50153,(0),null);
var rsource = cljs.core.nth.call(null,vec__50153,(1),null);
var rline = cljs.core.nth.call(null,vec__50153,(2),null);
var rcol = cljs.core.nth.call(null,vec__50153,(3),null);
var rname = cljs.core.nth.call(null,vec__50153,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__47131__auto__ = source;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__47131__auto__ = line;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__47131__auto__ = col;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__47131__auto__ = name;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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
var map__50158 = segmap;
var map__50158__$1 = ((((!((map__50158 == null)))?((((map__50158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50158):map__50158);
var gcol = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__50158,map__50158__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__50158,map__50158__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__50158,map__50158__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__50158,map__50158__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__50158,map__50158__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__50158,map__50158__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args50160 = [];
var len__48239__auto___50166 = arguments.length;
var i__48240__auto___50167 = (0);
while(true){
if((i__48240__auto___50167 < len__48239__auto___50166)){
args50160.push((arguments[i__48240__auto___50167]));

var G__50168 = (i__48240__auto___50167 + (1));
i__48240__auto___50167 = G__50168;
continue;
} else {
}
break;
}

var G__50162 = args50160.length;
switch (G__50162) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50160.length)].join('')));

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
var vec__50163 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__50170 = cljs.core.next.call(null,segs__$1);
var G__50171 = nrelseg;
var G__50172 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__50170;
relseg__$1 = G__50171;
result__$1 = G__50172;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__50163,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__50163,(1),null);
var G__50173 = (gline + (1));
var G__50174 = cljs.core.next.call(null,lines__$1);
var G__50175 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__50176 = result__$1;
gline = G__50173;
lines__$1 = G__50174;
relseg = G__50175;
result = G__50176;
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
var map__50180 = segmap;
var map__50180__$1 = ((((!((map__50180 == null)))?((((map__50180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50180):map__50180);
var gcol = cljs.core.get.call(null,map__50180__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__50180__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__50180__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__50180__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__50180__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__50180,map__50180__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__50180,map__50180__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__50177_SHARP_){
return cljs.core.conj.call(null,p1__50177_SHARP_,d__$1);
});})(map__50180,map__50180__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__50180,map__50180__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args50182 = [];
var len__48239__auto___50188 = arguments.length;
var i__48240__auto___50189 = (0);
while(true){
if((i__48240__auto___50189 < len__48239__auto___50188)){
args50182.push((arguments[i__48240__auto___50189]));

var G__50190 = (i__48240__auto___50189 + (1));
i__48240__auto___50189 = G__50190;
continue;
} else {
}
break;
}

var G__50184 = args50182.length;
switch (G__50184) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50182.length)].join('')));

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
var vec__50185 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__50192 = cljs.core.next.call(null,segs__$1);
var G__50193 = nrelseg;
var G__50194 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__50192;
relseg__$1 = G__50193;
result__$1 = G__50194;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__50185,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__50185,(1),null);
var G__50195 = (gline + (1));
var G__50196 = cljs.core.next.call(null,lines__$1);
var G__50197 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__50198 = result__$1;
gline = G__50195;
lines__$1 = G__50196;
relseg = G__50197;
result = G__50198;
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
return (function (p__50211){
var vec__50212 = p__50211;
var _ = cljs.core.nth.call(null,vec__50212,(0),null);
var source = cljs.core.nth.call(null,vec__50212,(1),null);
var line = cljs.core.nth.call(null,vec__50212,(2),null);
var col = cljs.core.nth.call(null,vec__50212,(3),null);
var name = cljs.core.nth.call(null,vec__50212,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__50215){
var vec__50216 = p__50215;
var gcol = cljs.core.nth.call(null,vec__50216,(0),null);
var sidx = cljs.core.nth.call(null,vec__50216,(1),null);
var line = cljs.core.nth.call(null,vec__50216,(2),null);
var col = cljs.core.nth.call(null,vec__50216,(3),null);
var name = cljs.core.nth.call(null,vec__50216,(4),null);
var seg = vec__50216;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__50216,gcol,sidx,line,col,name,seg,relseg){
return (function (p__50219){
var vec__50220 = p__50219;
var _ = cljs.core.nth.call(null,vec__50220,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__50220,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__50220,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__50220,(3),null);
var lname = cljs.core.nth.call(null,vec__50220,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__47131__auto__ = name;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__50216,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__47131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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
var seq__50308 = cljs.core.seq.call(null,infos);
var chunk__50309 = null;
var count__50310 = (0);
var i__50311 = (0);
while(true){
if((i__50311 < count__50310)){
var info = cljs.core._nth.call(null,chunk__50309,i__50311);
var segv_50390 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_50391 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50392 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_50391 > (lc_50392 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__50308,chunk__50309,count__50310,i__50311,segv_50390,gline_50391,lc_50392,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_50391 - (lc_50392 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50390], null));
});})(seq__50308,chunk__50309,count__50310,i__50311,segv_50390,gline_50391,lc_50392,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__50308,chunk__50309,count__50310,i__50311,segv_50390,gline_50391,lc_50392,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50391], null),cljs.core.conj,segv_50390);
});})(seq__50308,chunk__50309,count__50310,i__50311,segv_50390,gline_50391,lc_50392,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__50393 = seq__50308;
var G__50394 = chunk__50309;
var G__50395 = count__50310;
var G__50396 = (i__50311 + (1));
seq__50308 = G__50393;
chunk__50309 = G__50394;
count__50310 = G__50395;
i__50311 = G__50396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50308);
if(temp__4657__auto__){
var seq__50308__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50308__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__50308__$1);
var G__50397 = cljs.core.chunk_rest.call(null,seq__50308__$1);
var G__50398 = c__47945__auto__;
var G__50399 = cljs.core.count.call(null,c__47945__auto__);
var G__50400 = (0);
seq__50308 = G__50397;
chunk__50309 = G__50398;
count__50310 = G__50399;
i__50311 = G__50400;
continue;
} else {
var info = cljs.core.first.call(null,seq__50308__$1);
var segv_50401 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_50402 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50403 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_50402 > (lc_50403 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__50308,chunk__50309,count__50310,i__50311,segv_50401,gline_50402,lc_50403,info,seq__50308__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_50402 - (lc_50403 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50401], null));
});})(seq__50308,chunk__50309,count__50310,i__50311,segv_50401,gline_50402,lc_50403,info,seq__50308__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__50308,chunk__50309,count__50310,i__50311,segv_50401,gline_50402,lc_50403,info,seq__50308__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50402], null),cljs.core.conj,segv_50401);
});})(seq__50308,chunk__50309,count__50310,i__50311,segv_50401,gline_50402,lc_50403,info,seq__50308__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__50404 = cljs.core.next.call(null,seq__50308__$1);
var G__50405 = null;
var G__50406 = (0);
var G__50407 = (0);
seq__50308 = G__50404;
chunk__50309 = G__50405;
count__50310 = G__50406;
i__50311 = G__50407;
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
var seq__50312_50408 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__50313_50409 = null;
var count__50314_50410 = (0);
var i__50315_50411 = (0);
while(true){
if((i__50315_50411 < count__50314_50410)){
var vec__50316_50412 = cljs.core._nth.call(null,chunk__50313_50409,i__50315_50411);
var source_idx_50413 = cljs.core.nth.call(null,vec__50316_50412,(0),null);
var vec__50319_50414 = cljs.core.nth.call(null,vec__50316_50412,(1),null);
var __50415 = cljs.core.nth.call(null,vec__50319_50414,(0),null);
var lines_50416__$1 = cljs.core.nth.call(null,vec__50319_50414,(1),null);
var seq__50322_50417 = cljs.core.seq.call(null,lines_50416__$1);
var chunk__50323_50418 = null;
var count__50324_50419 = (0);
var i__50325_50420 = (0);
while(true){
if((i__50325_50420 < count__50324_50419)){
var vec__50326_50421 = cljs.core._nth.call(null,chunk__50323_50418,i__50325_50420);
var line_50422 = cljs.core.nth.call(null,vec__50326_50421,(0),null);
var cols_50423 = cljs.core.nth.call(null,vec__50326_50421,(1),null);
var seq__50329_50424 = cljs.core.seq.call(null,cols_50423);
var chunk__50330_50425 = null;
var count__50331_50426 = (0);
var i__50332_50427 = (0);
while(true){
if((i__50332_50427 < count__50331_50426)){
var vec__50333_50428 = cljs.core._nth.call(null,chunk__50330_50425,i__50332_50427);
var col_50429 = cljs.core.nth.call(null,vec__50333_50428,(0),null);
var infos_50430 = cljs.core.nth.call(null,vec__50333_50428,(1),null);
encode_cols.call(null,infos_50430,source_idx_50413,line_50422,col_50429);

var G__50431 = seq__50329_50424;
var G__50432 = chunk__50330_50425;
var G__50433 = count__50331_50426;
var G__50434 = (i__50332_50427 + (1));
seq__50329_50424 = G__50431;
chunk__50330_50425 = G__50432;
count__50331_50426 = G__50433;
i__50332_50427 = G__50434;
continue;
} else {
var temp__4657__auto___50435 = cljs.core.seq.call(null,seq__50329_50424);
if(temp__4657__auto___50435){
var seq__50329_50436__$1 = temp__4657__auto___50435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50329_50436__$1)){
var c__47945__auto___50437 = cljs.core.chunk_first.call(null,seq__50329_50436__$1);
var G__50438 = cljs.core.chunk_rest.call(null,seq__50329_50436__$1);
var G__50439 = c__47945__auto___50437;
var G__50440 = cljs.core.count.call(null,c__47945__auto___50437);
var G__50441 = (0);
seq__50329_50424 = G__50438;
chunk__50330_50425 = G__50439;
count__50331_50426 = G__50440;
i__50332_50427 = G__50441;
continue;
} else {
var vec__50336_50442 = cljs.core.first.call(null,seq__50329_50436__$1);
var col_50443 = cljs.core.nth.call(null,vec__50336_50442,(0),null);
var infos_50444 = cljs.core.nth.call(null,vec__50336_50442,(1),null);
encode_cols.call(null,infos_50444,source_idx_50413,line_50422,col_50443);

var G__50445 = cljs.core.next.call(null,seq__50329_50436__$1);
var G__50446 = null;
var G__50447 = (0);
var G__50448 = (0);
seq__50329_50424 = G__50445;
chunk__50330_50425 = G__50446;
count__50331_50426 = G__50447;
i__50332_50427 = G__50448;
continue;
}
} else {
}
}
break;
}

var G__50449 = seq__50322_50417;
var G__50450 = chunk__50323_50418;
var G__50451 = count__50324_50419;
var G__50452 = (i__50325_50420 + (1));
seq__50322_50417 = G__50449;
chunk__50323_50418 = G__50450;
count__50324_50419 = G__50451;
i__50325_50420 = G__50452;
continue;
} else {
var temp__4657__auto___50453 = cljs.core.seq.call(null,seq__50322_50417);
if(temp__4657__auto___50453){
var seq__50322_50454__$1 = temp__4657__auto___50453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50322_50454__$1)){
var c__47945__auto___50455 = cljs.core.chunk_first.call(null,seq__50322_50454__$1);
var G__50456 = cljs.core.chunk_rest.call(null,seq__50322_50454__$1);
var G__50457 = c__47945__auto___50455;
var G__50458 = cljs.core.count.call(null,c__47945__auto___50455);
var G__50459 = (0);
seq__50322_50417 = G__50456;
chunk__50323_50418 = G__50457;
count__50324_50419 = G__50458;
i__50325_50420 = G__50459;
continue;
} else {
var vec__50339_50460 = cljs.core.first.call(null,seq__50322_50454__$1);
var line_50461 = cljs.core.nth.call(null,vec__50339_50460,(0),null);
var cols_50462 = cljs.core.nth.call(null,vec__50339_50460,(1),null);
var seq__50342_50463 = cljs.core.seq.call(null,cols_50462);
var chunk__50343_50464 = null;
var count__50344_50465 = (0);
var i__50345_50466 = (0);
while(true){
if((i__50345_50466 < count__50344_50465)){
var vec__50346_50467 = cljs.core._nth.call(null,chunk__50343_50464,i__50345_50466);
var col_50468 = cljs.core.nth.call(null,vec__50346_50467,(0),null);
var infos_50469 = cljs.core.nth.call(null,vec__50346_50467,(1),null);
encode_cols.call(null,infos_50469,source_idx_50413,line_50461,col_50468);

var G__50470 = seq__50342_50463;
var G__50471 = chunk__50343_50464;
var G__50472 = count__50344_50465;
var G__50473 = (i__50345_50466 + (1));
seq__50342_50463 = G__50470;
chunk__50343_50464 = G__50471;
count__50344_50465 = G__50472;
i__50345_50466 = G__50473;
continue;
} else {
var temp__4657__auto___50474__$1 = cljs.core.seq.call(null,seq__50342_50463);
if(temp__4657__auto___50474__$1){
var seq__50342_50475__$1 = temp__4657__auto___50474__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50342_50475__$1)){
var c__47945__auto___50476 = cljs.core.chunk_first.call(null,seq__50342_50475__$1);
var G__50477 = cljs.core.chunk_rest.call(null,seq__50342_50475__$1);
var G__50478 = c__47945__auto___50476;
var G__50479 = cljs.core.count.call(null,c__47945__auto___50476);
var G__50480 = (0);
seq__50342_50463 = G__50477;
chunk__50343_50464 = G__50478;
count__50344_50465 = G__50479;
i__50345_50466 = G__50480;
continue;
} else {
var vec__50349_50481 = cljs.core.first.call(null,seq__50342_50475__$1);
var col_50482 = cljs.core.nth.call(null,vec__50349_50481,(0),null);
var infos_50483 = cljs.core.nth.call(null,vec__50349_50481,(1),null);
encode_cols.call(null,infos_50483,source_idx_50413,line_50461,col_50482);

var G__50484 = cljs.core.next.call(null,seq__50342_50475__$1);
var G__50485 = null;
var G__50486 = (0);
var G__50487 = (0);
seq__50342_50463 = G__50484;
chunk__50343_50464 = G__50485;
count__50344_50465 = G__50486;
i__50345_50466 = G__50487;
continue;
}
} else {
}
}
break;
}

var G__50488 = cljs.core.next.call(null,seq__50322_50454__$1);
var G__50489 = null;
var G__50490 = (0);
var G__50491 = (0);
seq__50322_50417 = G__50488;
chunk__50323_50418 = G__50489;
count__50324_50419 = G__50490;
i__50325_50420 = G__50491;
continue;
}
} else {
}
}
break;
}

var G__50492 = seq__50312_50408;
var G__50493 = chunk__50313_50409;
var G__50494 = count__50314_50410;
var G__50495 = (i__50315_50411 + (1));
seq__50312_50408 = G__50492;
chunk__50313_50409 = G__50493;
count__50314_50410 = G__50494;
i__50315_50411 = G__50495;
continue;
} else {
var temp__4657__auto___50496 = cljs.core.seq.call(null,seq__50312_50408);
if(temp__4657__auto___50496){
var seq__50312_50497__$1 = temp__4657__auto___50496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50312_50497__$1)){
var c__47945__auto___50498 = cljs.core.chunk_first.call(null,seq__50312_50497__$1);
var G__50499 = cljs.core.chunk_rest.call(null,seq__50312_50497__$1);
var G__50500 = c__47945__auto___50498;
var G__50501 = cljs.core.count.call(null,c__47945__auto___50498);
var G__50502 = (0);
seq__50312_50408 = G__50499;
chunk__50313_50409 = G__50500;
count__50314_50410 = G__50501;
i__50315_50411 = G__50502;
continue;
} else {
var vec__50352_50503 = cljs.core.first.call(null,seq__50312_50497__$1);
var source_idx_50504 = cljs.core.nth.call(null,vec__50352_50503,(0),null);
var vec__50355_50505 = cljs.core.nth.call(null,vec__50352_50503,(1),null);
var __50506 = cljs.core.nth.call(null,vec__50355_50505,(0),null);
var lines_50507__$1 = cljs.core.nth.call(null,vec__50355_50505,(1),null);
var seq__50358_50508 = cljs.core.seq.call(null,lines_50507__$1);
var chunk__50359_50509 = null;
var count__50360_50510 = (0);
var i__50361_50511 = (0);
while(true){
if((i__50361_50511 < count__50360_50510)){
var vec__50362_50512 = cljs.core._nth.call(null,chunk__50359_50509,i__50361_50511);
var line_50513 = cljs.core.nth.call(null,vec__50362_50512,(0),null);
var cols_50514 = cljs.core.nth.call(null,vec__50362_50512,(1),null);
var seq__50365_50515 = cljs.core.seq.call(null,cols_50514);
var chunk__50366_50516 = null;
var count__50367_50517 = (0);
var i__50368_50518 = (0);
while(true){
if((i__50368_50518 < count__50367_50517)){
var vec__50369_50519 = cljs.core._nth.call(null,chunk__50366_50516,i__50368_50518);
var col_50520 = cljs.core.nth.call(null,vec__50369_50519,(0),null);
var infos_50521 = cljs.core.nth.call(null,vec__50369_50519,(1),null);
encode_cols.call(null,infos_50521,source_idx_50504,line_50513,col_50520);

var G__50522 = seq__50365_50515;
var G__50523 = chunk__50366_50516;
var G__50524 = count__50367_50517;
var G__50525 = (i__50368_50518 + (1));
seq__50365_50515 = G__50522;
chunk__50366_50516 = G__50523;
count__50367_50517 = G__50524;
i__50368_50518 = G__50525;
continue;
} else {
var temp__4657__auto___50526__$1 = cljs.core.seq.call(null,seq__50365_50515);
if(temp__4657__auto___50526__$1){
var seq__50365_50527__$1 = temp__4657__auto___50526__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50365_50527__$1)){
var c__47945__auto___50528 = cljs.core.chunk_first.call(null,seq__50365_50527__$1);
var G__50529 = cljs.core.chunk_rest.call(null,seq__50365_50527__$1);
var G__50530 = c__47945__auto___50528;
var G__50531 = cljs.core.count.call(null,c__47945__auto___50528);
var G__50532 = (0);
seq__50365_50515 = G__50529;
chunk__50366_50516 = G__50530;
count__50367_50517 = G__50531;
i__50368_50518 = G__50532;
continue;
} else {
var vec__50372_50533 = cljs.core.first.call(null,seq__50365_50527__$1);
var col_50534 = cljs.core.nth.call(null,vec__50372_50533,(0),null);
var infos_50535 = cljs.core.nth.call(null,vec__50372_50533,(1),null);
encode_cols.call(null,infos_50535,source_idx_50504,line_50513,col_50534);

var G__50536 = cljs.core.next.call(null,seq__50365_50527__$1);
var G__50537 = null;
var G__50538 = (0);
var G__50539 = (0);
seq__50365_50515 = G__50536;
chunk__50366_50516 = G__50537;
count__50367_50517 = G__50538;
i__50368_50518 = G__50539;
continue;
}
} else {
}
}
break;
}

var G__50540 = seq__50358_50508;
var G__50541 = chunk__50359_50509;
var G__50542 = count__50360_50510;
var G__50543 = (i__50361_50511 + (1));
seq__50358_50508 = G__50540;
chunk__50359_50509 = G__50541;
count__50360_50510 = G__50542;
i__50361_50511 = G__50543;
continue;
} else {
var temp__4657__auto___50544__$1 = cljs.core.seq.call(null,seq__50358_50508);
if(temp__4657__auto___50544__$1){
var seq__50358_50545__$1 = temp__4657__auto___50544__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50358_50545__$1)){
var c__47945__auto___50546 = cljs.core.chunk_first.call(null,seq__50358_50545__$1);
var G__50547 = cljs.core.chunk_rest.call(null,seq__50358_50545__$1);
var G__50548 = c__47945__auto___50546;
var G__50549 = cljs.core.count.call(null,c__47945__auto___50546);
var G__50550 = (0);
seq__50358_50508 = G__50547;
chunk__50359_50509 = G__50548;
count__50360_50510 = G__50549;
i__50361_50511 = G__50550;
continue;
} else {
var vec__50375_50551 = cljs.core.first.call(null,seq__50358_50545__$1);
var line_50552 = cljs.core.nth.call(null,vec__50375_50551,(0),null);
var cols_50553 = cljs.core.nth.call(null,vec__50375_50551,(1),null);
var seq__50378_50554 = cljs.core.seq.call(null,cols_50553);
var chunk__50379_50555 = null;
var count__50380_50556 = (0);
var i__50381_50557 = (0);
while(true){
if((i__50381_50557 < count__50380_50556)){
var vec__50382_50558 = cljs.core._nth.call(null,chunk__50379_50555,i__50381_50557);
var col_50559 = cljs.core.nth.call(null,vec__50382_50558,(0),null);
var infos_50560 = cljs.core.nth.call(null,vec__50382_50558,(1),null);
encode_cols.call(null,infos_50560,source_idx_50504,line_50552,col_50559);

var G__50561 = seq__50378_50554;
var G__50562 = chunk__50379_50555;
var G__50563 = count__50380_50556;
var G__50564 = (i__50381_50557 + (1));
seq__50378_50554 = G__50561;
chunk__50379_50555 = G__50562;
count__50380_50556 = G__50563;
i__50381_50557 = G__50564;
continue;
} else {
var temp__4657__auto___50565__$2 = cljs.core.seq.call(null,seq__50378_50554);
if(temp__4657__auto___50565__$2){
var seq__50378_50566__$1 = temp__4657__auto___50565__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50378_50566__$1)){
var c__47945__auto___50567 = cljs.core.chunk_first.call(null,seq__50378_50566__$1);
var G__50568 = cljs.core.chunk_rest.call(null,seq__50378_50566__$1);
var G__50569 = c__47945__auto___50567;
var G__50570 = cljs.core.count.call(null,c__47945__auto___50567);
var G__50571 = (0);
seq__50378_50554 = G__50568;
chunk__50379_50555 = G__50569;
count__50380_50556 = G__50570;
i__50381_50557 = G__50571;
continue;
} else {
var vec__50385_50572 = cljs.core.first.call(null,seq__50378_50566__$1);
var col_50573 = cljs.core.nth.call(null,vec__50385_50572,(0),null);
var infos_50574 = cljs.core.nth.call(null,vec__50385_50572,(1),null);
encode_cols.call(null,infos_50574,source_idx_50504,line_50552,col_50573);

var G__50575 = cljs.core.next.call(null,seq__50378_50566__$1);
var G__50576 = null;
var G__50577 = (0);
var G__50578 = (0);
seq__50378_50554 = G__50575;
chunk__50379_50555 = G__50576;
count__50380_50556 = G__50577;
i__50381_50557 = G__50578;
continue;
}
} else {
}
}
break;
}

var G__50579 = cljs.core.next.call(null,seq__50358_50545__$1);
var G__50580 = null;
var G__50581 = (0);
var G__50582 = (0);
seq__50358_50508 = G__50579;
chunk__50359_50509 = G__50580;
count__50360_50510 = G__50581;
i__50361_50511 = G__50582;
continue;
}
} else {
}
}
break;
}

var G__50583 = cljs.core.next.call(null,seq__50312_50497__$1);
var G__50584 = null;
var G__50585 = (0);
var G__50586 = (0);
seq__50312_50408 = G__50583;
chunk__50313_50409 = G__50584;
count__50314_50410 = G__50585;
i__50315_50411 = G__50586;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__50388 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__50223_SHARP_){
return [cljs.core.str(p1__50223_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__50224_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__50224_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__50225_SHARP_){
return clojure.string.join.call(null,",",p1__50225_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__50389 = G__50388;
goog.object.set(G__50389,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__50389;
} else {
return G__50388;
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
var vec__50596 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__50596,(0),null);
var col_map = cljs.core.nth.call(null,vec__50596,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__50599 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__50599,(0),null);
var infos = cljs.core.nth.call(null,vec__50599,(1),null);
var G__50605 = cljs.core.next.call(null,col_map_seq);
var G__50606 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__50599,col,infos,vec__50596,line,col_map){
return (function (v,p__50602){
var map__50603 = p__50602;
var map__50603__$1 = ((((!((map__50603 == null)))?((((map__50603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50603):map__50603);
var gline = cljs.core.get.call(null,map__50603__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__50603__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__50599,col,infos,vec__50596,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__50605;
new_cols = G__50606;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__50607 = cljs.core.next.call(null,line_map_seq);
var G__50608 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__50607;
new_lines = G__50608;
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
var seq__50671_50733 = cljs.core.seq.call(null,reverse_map);
var chunk__50672_50734 = null;
var count__50673_50735 = (0);
var i__50674_50736 = (0);
while(true){
if((i__50674_50736 < count__50673_50735)){
var vec__50675_50737 = cljs.core._nth.call(null,chunk__50672_50734,i__50674_50736);
var line_50738 = cljs.core.nth.call(null,vec__50675_50737,(0),null);
var columns_50739 = cljs.core.nth.call(null,vec__50675_50737,(1),null);
var seq__50678_50740 = cljs.core.seq.call(null,columns_50739);
var chunk__50679_50741 = null;
var count__50680_50742 = (0);
var i__50681_50743 = (0);
while(true){
if((i__50681_50743 < count__50680_50742)){
var vec__50682_50744 = cljs.core._nth.call(null,chunk__50679_50741,i__50681_50743);
var column_50745 = cljs.core.nth.call(null,vec__50682_50744,(0),null);
var column_info_50746 = cljs.core.nth.call(null,vec__50682_50744,(1),null);
var seq__50685_50747 = cljs.core.seq.call(null,column_info_50746);
var chunk__50686_50748 = null;
var count__50687_50749 = (0);
var i__50688_50750 = (0);
while(true){
if((i__50688_50750 < count__50687_50749)){
var map__50689_50751 = cljs.core._nth.call(null,chunk__50686_50748,i__50688_50750);
var map__50689_50752__$1 = ((((!((map__50689_50751 == null)))?((((map__50689_50751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50689_50751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50689_50751):map__50689_50751);
var gline_50753 = cljs.core.get.call(null,map__50689_50752__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50754 = cljs.core.get.call(null,map__50689_50752__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50755 = cljs.core.get.call(null,map__50689_50752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50753], null),cljs.core.fnil.call(null,((function (seq__50685_50747,chunk__50686_50748,count__50687_50749,i__50688_50750,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50689_50751,map__50689_50752__$1,gline_50753,gcol_50754,name_50755,vec__50682_50744,column_50745,column_info_50746,vec__50675_50737,line_50738,columns_50739,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50754], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50738,new cljs.core.Keyword(null,"col","col",-1959363084),column_50745,new cljs.core.Keyword(null,"name","name",1843675177),name_50755], null));
});})(seq__50685_50747,chunk__50686_50748,count__50687_50749,i__50688_50750,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50689_50751,map__50689_50752__$1,gline_50753,gcol_50754,name_50755,vec__50682_50744,column_50745,column_info_50746,vec__50675_50737,line_50738,columns_50739,inverted))
,cljs.core.sorted_map.call(null)));

var G__50756 = seq__50685_50747;
var G__50757 = chunk__50686_50748;
var G__50758 = count__50687_50749;
var G__50759 = (i__50688_50750 + (1));
seq__50685_50747 = G__50756;
chunk__50686_50748 = G__50757;
count__50687_50749 = G__50758;
i__50688_50750 = G__50759;
continue;
} else {
var temp__4657__auto___50760 = cljs.core.seq.call(null,seq__50685_50747);
if(temp__4657__auto___50760){
var seq__50685_50761__$1 = temp__4657__auto___50760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50685_50761__$1)){
var c__47945__auto___50762 = cljs.core.chunk_first.call(null,seq__50685_50761__$1);
var G__50763 = cljs.core.chunk_rest.call(null,seq__50685_50761__$1);
var G__50764 = c__47945__auto___50762;
var G__50765 = cljs.core.count.call(null,c__47945__auto___50762);
var G__50766 = (0);
seq__50685_50747 = G__50763;
chunk__50686_50748 = G__50764;
count__50687_50749 = G__50765;
i__50688_50750 = G__50766;
continue;
} else {
var map__50691_50767 = cljs.core.first.call(null,seq__50685_50761__$1);
var map__50691_50768__$1 = ((((!((map__50691_50767 == null)))?((((map__50691_50767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50691_50767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50691_50767):map__50691_50767);
var gline_50769 = cljs.core.get.call(null,map__50691_50768__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50770 = cljs.core.get.call(null,map__50691_50768__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50771 = cljs.core.get.call(null,map__50691_50768__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50769], null),cljs.core.fnil.call(null,((function (seq__50685_50747,chunk__50686_50748,count__50687_50749,i__50688_50750,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50691_50767,map__50691_50768__$1,gline_50769,gcol_50770,name_50771,seq__50685_50761__$1,temp__4657__auto___50760,vec__50682_50744,column_50745,column_info_50746,vec__50675_50737,line_50738,columns_50739,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50770], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50738,new cljs.core.Keyword(null,"col","col",-1959363084),column_50745,new cljs.core.Keyword(null,"name","name",1843675177),name_50771], null));
});})(seq__50685_50747,chunk__50686_50748,count__50687_50749,i__50688_50750,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50691_50767,map__50691_50768__$1,gline_50769,gcol_50770,name_50771,seq__50685_50761__$1,temp__4657__auto___50760,vec__50682_50744,column_50745,column_info_50746,vec__50675_50737,line_50738,columns_50739,inverted))
,cljs.core.sorted_map.call(null)));

var G__50772 = cljs.core.next.call(null,seq__50685_50761__$1);
var G__50773 = null;
var G__50774 = (0);
var G__50775 = (0);
seq__50685_50747 = G__50772;
chunk__50686_50748 = G__50773;
count__50687_50749 = G__50774;
i__50688_50750 = G__50775;
continue;
}
} else {
}
}
break;
}

var G__50776 = seq__50678_50740;
var G__50777 = chunk__50679_50741;
var G__50778 = count__50680_50742;
var G__50779 = (i__50681_50743 + (1));
seq__50678_50740 = G__50776;
chunk__50679_50741 = G__50777;
count__50680_50742 = G__50778;
i__50681_50743 = G__50779;
continue;
} else {
var temp__4657__auto___50780 = cljs.core.seq.call(null,seq__50678_50740);
if(temp__4657__auto___50780){
var seq__50678_50781__$1 = temp__4657__auto___50780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50678_50781__$1)){
var c__47945__auto___50782 = cljs.core.chunk_first.call(null,seq__50678_50781__$1);
var G__50783 = cljs.core.chunk_rest.call(null,seq__50678_50781__$1);
var G__50784 = c__47945__auto___50782;
var G__50785 = cljs.core.count.call(null,c__47945__auto___50782);
var G__50786 = (0);
seq__50678_50740 = G__50783;
chunk__50679_50741 = G__50784;
count__50680_50742 = G__50785;
i__50681_50743 = G__50786;
continue;
} else {
var vec__50693_50787 = cljs.core.first.call(null,seq__50678_50781__$1);
var column_50788 = cljs.core.nth.call(null,vec__50693_50787,(0),null);
var column_info_50789 = cljs.core.nth.call(null,vec__50693_50787,(1),null);
var seq__50696_50790 = cljs.core.seq.call(null,column_info_50789);
var chunk__50697_50791 = null;
var count__50698_50792 = (0);
var i__50699_50793 = (0);
while(true){
if((i__50699_50793 < count__50698_50792)){
var map__50700_50794 = cljs.core._nth.call(null,chunk__50697_50791,i__50699_50793);
var map__50700_50795__$1 = ((((!((map__50700_50794 == null)))?((((map__50700_50794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50700_50794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50700_50794):map__50700_50794);
var gline_50796 = cljs.core.get.call(null,map__50700_50795__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50797 = cljs.core.get.call(null,map__50700_50795__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50798 = cljs.core.get.call(null,map__50700_50795__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50796], null),cljs.core.fnil.call(null,((function (seq__50696_50790,chunk__50697_50791,count__50698_50792,i__50699_50793,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50700_50794,map__50700_50795__$1,gline_50796,gcol_50797,name_50798,vec__50693_50787,column_50788,column_info_50789,seq__50678_50781__$1,temp__4657__auto___50780,vec__50675_50737,line_50738,columns_50739,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50797], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50738,new cljs.core.Keyword(null,"col","col",-1959363084),column_50788,new cljs.core.Keyword(null,"name","name",1843675177),name_50798], null));
});})(seq__50696_50790,chunk__50697_50791,count__50698_50792,i__50699_50793,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50700_50794,map__50700_50795__$1,gline_50796,gcol_50797,name_50798,vec__50693_50787,column_50788,column_info_50789,seq__50678_50781__$1,temp__4657__auto___50780,vec__50675_50737,line_50738,columns_50739,inverted))
,cljs.core.sorted_map.call(null)));

var G__50799 = seq__50696_50790;
var G__50800 = chunk__50697_50791;
var G__50801 = count__50698_50792;
var G__50802 = (i__50699_50793 + (1));
seq__50696_50790 = G__50799;
chunk__50697_50791 = G__50800;
count__50698_50792 = G__50801;
i__50699_50793 = G__50802;
continue;
} else {
var temp__4657__auto___50803__$1 = cljs.core.seq.call(null,seq__50696_50790);
if(temp__4657__auto___50803__$1){
var seq__50696_50804__$1 = temp__4657__auto___50803__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50696_50804__$1)){
var c__47945__auto___50805 = cljs.core.chunk_first.call(null,seq__50696_50804__$1);
var G__50806 = cljs.core.chunk_rest.call(null,seq__50696_50804__$1);
var G__50807 = c__47945__auto___50805;
var G__50808 = cljs.core.count.call(null,c__47945__auto___50805);
var G__50809 = (0);
seq__50696_50790 = G__50806;
chunk__50697_50791 = G__50807;
count__50698_50792 = G__50808;
i__50699_50793 = G__50809;
continue;
} else {
var map__50702_50810 = cljs.core.first.call(null,seq__50696_50804__$1);
var map__50702_50811__$1 = ((((!((map__50702_50810 == null)))?((((map__50702_50810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50702_50810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50702_50810):map__50702_50810);
var gline_50812 = cljs.core.get.call(null,map__50702_50811__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50813 = cljs.core.get.call(null,map__50702_50811__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50814 = cljs.core.get.call(null,map__50702_50811__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50812], null),cljs.core.fnil.call(null,((function (seq__50696_50790,chunk__50697_50791,count__50698_50792,i__50699_50793,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50702_50810,map__50702_50811__$1,gline_50812,gcol_50813,name_50814,seq__50696_50804__$1,temp__4657__auto___50803__$1,vec__50693_50787,column_50788,column_info_50789,seq__50678_50781__$1,temp__4657__auto___50780,vec__50675_50737,line_50738,columns_50739,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50813], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50738,new cljs.core.Keyword(null,"col","col",-1959363084),column_50788,new cljs.core.Keyword(null,"name","name",1843675177),name_50814], null));
});})(seq__50696_50790,chunk__50697_50791,count__50698_50792,i__50699_50793,seq__50678_50740,chunk__50679_50741,count__50680_50742,i__50681_50743,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50702_50810,map__50702_50811__$1,gline_50812,gcol_50813,name_50814,seq__50696_50804__$1,temp__4657__auto___50803__$1,vec__50693_50787,column_50788,column_info_50789,seq__50678_50781__$1,temp__4657__auto___50780,vec__50675_50737,line_50738,columns_50739,inverted))
,cljs.core.sorted_map.call(null)));

var G__50815 = cljs.core.next.call(null,seq__50696_50804__$1);
var G__50816 = null;
var G__50817 = (0);
var G__50818 = (0);
seq__50696_50790 = G__50815;
chunk__50697_50791 = G__50816;
count__50698_50792 = G__50817;
i__50699_50793 = G__50818;
continue;
}
} else {
}
}
break;
}

var G__50819 = cljs.core.next.call(null,seq__50678_50781__$1);
var G__50820 = null;
var G__50821 = (0);
var G__50822 = (0);
seq__50678_50740 = G__50819;
chunk__50679_50741 = G__50820;
count__50680_50742 = G__50821;
i__50681_50743 = G__50822;
continue;
}
} else {
}
}
break;
}

var G__50823 = seq__50671_50733;
var G__50824 = chunk__50672_50734;
var G__50825 = count__50673_50735;
var G__50826 = (i__50674_50736 + (1));
seq__50671_50733 = G__50823;
chunk__50672_50734 = G__50824;
count__50673_50735 = G__50825;
i__50674_50736 = G__50826;
continue;
} else {
var temp__4657__auto___50827 = cljs.core.seq.call(null,seq__50671_50733);
if(temp__4657__auto___50827){
var seq__50671_50828__$1 = temp__4657__auto___50827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50671_50828__$1)){
var c__47945__auto___50829 = cljs.core.chunk_first.call(null,seq__50671_50828__$1);
var G__50830 = cljs.core.chunk_rest.call(null,seq__50671_50828__$1);
var G__50831 = c__47945__auto___50829;
var G__50832 = cljs.core.count.call(null,c__47945__auto___50829);
var G__50833 = (0);
seq__50671_50733 = G__50830;
chunk__50672_50734 = G__50831;
count__50673_50735 = G__50832;
i__50674_50736 = G__50833;
continue;
} else {
var vec__50704_50834 = cljs.core.first.call(null,seq__50671_50828__$1);
var line_50835 = cljs.core.nth.call(null,vec__50704_50834,(0),null);
var columns_50836 = cljs.core.nth.call(null,vec__50704_50834,(1),null);
var seq__50707_50837 = cljs.core.seq.call(null,columns_50836);
var chunk__50708_50838 = null;
var count__50709_50839 = (0);
var i__50710_50840 = (0);
while(true){
if((i__50710_50840 < count__50709_50839)){
var vec__50711_50841 = cljs.core._nth.call(null,chunk__50708_50838,i__50710_50840);
var column_50842 = cljs.core.nth.call(null,vec__50711_50841,(0),null);
var column_info_50843 = cljs.core.nth.call(null,vec__50711_50841,(1),null);
var seq__50714_50844 = cljs.core.seq.call(null,column_info_50843);
var chunk__50715_50845 = null;
var count__50716_50846 = (0);
var i__50717_50847 = (0);
while(true){
if((i__50717_50847 < count__50716_50846)){
var map__50718_50848 = cljs.core._nth.call(null,chunk__50715_50845,i__50717_50847);
var map__50718_50849__$1 = ((((!((map__50718_50848 == null)))?((((map__50718_50848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50718_50848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50718_50848):map__50718_50848);
var gline_50850 = cljs.core.get.call(null,map__50718_50849__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50851 = cljs.core.get.call(null,map__50718_50849__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50852 = cljs.core.get.call(null,map__50718_50849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50850], null),cljs.core.fnil.call(null,((function (seq__50714_50844,chunk__50715_50845,count__50716_50846,i__50717_50847,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50718_50848,map__50718_50849__$1,gline_50850,gcol_50851,name_50852,vec__50711_50841,column_50842,column_info_50843,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50851], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50835,new cljs.core.Keyword(null,"col","col",-1959363084),column_50842,new cljs.core.Keyword(null,"name","name",1843675177),name_50852], null));
});})(seq__50714_50844,chunk__50715_50845,count__50716_50846,i__50717_50847,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50718_50848,map__50718_50849__$1,gline_50850,gcol_50851,name_50852,vec__50711_50841,column_50842,column_info_50843,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted))
,cljs.core.sorted_map.call(null)));

var G__50853 = seq__50714_50844;
var G__50854 = chunk__50715_50845;
var G__50855 = count__50716_50846;
var G__50856 = (i__50717_50847 + (1));
seq__50714_50844 = G__50853;
chunk__50715_50845 = G__50854;
count__50716_50846 = G__50855;
i__50717_50847 = G__50856;
continue;
} else {
var temp__4657__auto___50857__$1 = cljs.core.seq.call(null,seq__50714_50844);
if(temp__4657__auto___50857__$1){
var seq__50714_50858__$1 = temp__4657__auto___50857__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50714_50858__$1)){
var c__47945__auto___50859 = cljs.core.chunk_first.call(null,seq__50714_50858__$1);
var G__50860 = cljs.core.chunk_rest.call(null,seq__50714_50858__$1);
var G__50861 = c__47945__auto___50859;
var G__50862 = cljs.core.count.call(null,c__47945__auto___50859);
var G__50863 = (0);
seq__50714_50844 = G__50860;
chunk__50715_50845 = G__50861;
count__50716_50846 = G__50862;
i__50717_50847 = G__50863;
continue;
} else {
var map__50720_50864 = cljs.core.first.call(null,seq__50714_50858__$1);
var map__50720_50865__$1 = ((((!((map__50720_50864 == null)))?((((map__50720_50864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50720_50864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50720_50864):map__50720_50864);
var gline_50866 = cljs.core.get.call(null,map__50720_50865__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50867 = cljs.core.get.call(null,map__50720_50865__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50868 = cljs.core.get.call(null,map__50720_50865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50866], null),cljs.core.fnil.call(null,((function (seq__50714_50844,chunk__50715_50845,count__50716_50846,i__50717_50847,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50720_50864,map__50720_50865__$1,gline_50866,gcol_50867,name_50868,seq__50714_50858__$1,temp__4657__auto___50857__$1,vec__50711_50841,column_50842,column_info_50843,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50867], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50835,new cljs.core.Keyword(null,"col","col",-1959363084),column_50842,new cljs.core.Keyword(null,"name","name",1843675177),name_50868], null));
});})(seq__50714_50844,chunk__50715_50845,count__50716_50846,i__50717_50847,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50720_50864,map__50720_50865__$1,gline_50866,gcol_50867,name_50868,seq__50714_50858__$1,temp__4657__auto___50857__$1,vec__50711_50841,column_50842,column_info_50843,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted))
,cljs.core.sorted_map.call(null)));

var G__50869 = cljs.core.next.call(null,seq__50714_50858__$1);
var G__50870 = null;
var G__50871 = (0);
var G__50872 = (0);
seq__50714_50844 = G__50869;
chunk__50715_50845 = G__50870;
count__50716_50846 = G__50871;
i__50717_50847 = G__50872;
continue;
}
} else {
}
}
break;
}

var G__50873 = seq__50707_50837;
var G__50874 = chunk__50708_50838;
var G__50875 = count__50709_50839;
var G__50876 = (i__50710_50840 + (1));
seq__50707_50837 = G__50873;
chunk__50708_50838 = G__50874;
count__50709_50839 = G__50875;
i__50710_50840 = G__50876;
continue;
} else {
var temp__4657__auto___50877__$1 = cljs.core.seq.call(null,seq__50707_50837);
if(temp__4657__auto___50877__$1){
var seq__50707_50878__$1 = temp__4657__auto___50877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50707_50878__$1)){
var c__47945__auto___50879 = cljs.core.chunk_first.call(null,seq__50707_50878__$1);
var G__50880 = cljs.core.chunk_rest.call(null,seq__50707_50878__$1);
var G__50881 = c__47945__auto___50879;
var G__50882 = cljs.core.count.call(null,c__47945__auto___50879);
var G__50883 = (0);
seq__50707_50837 = G__50880;
chunk__50708_50838 = G__50881;
count__50709_50839 = G__50882;
i__50710_50840 = G__50883;
continue;
} else {
var vec__50722_50884 = cljs.core.first.call(null,seq__50707_50878__$1);
var column_50885 = cljs.core.nth.call(null,vec__50722_50884,(0),null);
var column_info_50886 = cljs.core.nth.call(null,vec__50722_50884,(1),null);
var seq__50725_50887 = cljs.core.seq.call(null,column_info_50886);
var chunk__50726_50888 = null;
var count__50727_50889 = (0);
var i__50728_50890 = (0);
while(true){
if((i__50728_50890 < count__50727_50889)){
var map__50729_50891 = cljs.core._nth.call(null,chunk__50726_50888,i__50728_50890);
var map__50729_50892__$1 = ((((!((map__50729_50891 == null)))?((((map__50729_50891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50729_50891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50729_50891):map__50729_50891);
var gline_50893 = cljs.core.get.call(null,map__50729_50892__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50894 = cljs.core.get.call(null,map__50729_50892__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50895 = cljs.core.get.call(null,map__50729_50892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50893], null),cljs.core.fnil.call(null,((function (seq__50725_50887,chunk__50726_50888,count__50727_50889,i__50728_50890,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50729_50891,map__50729_50892__$1,gline_50893,gcol_50894,name_50895,vec__50722_50884,column_50885,column_info_50886,seq__50707_50878__$1,temp__4657__auto___50877__$1,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50894], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50835,new cljs.core.Keyword(null,"col","col",-1959363084),column_50885,new cljs.core.Keyword(null,"name","name",1843675177),name_50895], null));
});})(seq__50725_50887,chunk__50726_50888,count__50727_50889,i__50728_50890,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50729_50891,map__50729_50892__$1,gline_50893,gcol_50894,name_50895,vec__50722_50884,column_50885,column_info_50886,seq__50707_50878__$1,temp__4657__auto___50877__$1,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted))
,cljs.core.sorted_map.call(null)));

var G__50896 = seq__50725_50887;
var G__50897 = chunk__50726_50888;
var G__50898 = count__50727_50889;
var G__50899 = (i__50728_50890 + (1));
seq__50725_50887 = G__50896;
chunk__50726_50888 = G__50897;
count__50727_50889 = G__50898;
i__50728_50890 = G__50899;
continue;
} else {
var temp__4657__auto___50900__$2 = cljs.core.seq.call(null,seq__50725_50887);
if(temp__4657__auto___50900__$2){
var seq__50725_50901__$1 = temp__4657__auto___50900__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50725_50901__$1)){
var c__47945__auto___50902 = cljs.core.chunk_first.call(null,seq__50725_50901__$1);
var G__50903 = cljs.core.chunk_rest.call(null,seq__50725_50901__$1);
var G__50904 = c__47945__auto___50902;
var G__50905 = cljs.core.count.call(null,c__47945__auto___50902);
var G__50906 = (0);
seq__50725_50887 = G__50903;
chunk__50726_50888 = G__50904;
count__50727_50889 = G__50905;
i__50728_50890 = G__50906;
continue;
} else {
var map__50731_50907 = cljs.core.first.call(null,seq__50725_50901__$1);
var map__50731_50908__$1 = ((((!((map__50731_50907 == null)))?((((map__50731_50907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50731_50907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50731_50907):map__50731_50907);
var gline_50909 = cljs.core.get.call(null,map__50731_50908__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50910 = cljs.core.get.call(null,map__50731_50908__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50911 = cljs.core.get.call(null,map__50731_50908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50909], null),cljs.core.fnil.call(null,((function (seq__50725_50887,chunk__50726_50888,count__50727_50889,i__50728_50890,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50731_50907,map__50731_50908__$1,gline_50909,gcol_50910,name_50911,seq__50725_50901__$1,temp__4657__auto___50900__$2,vec__50722_50884,column_50885,column_info_50886,seq__50707_50878__$1,temp__4657__auto___50877__$1,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50910], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50835,new cljs.core.Keyword(null,"col","col",-1959363084),column_50885,new cljs.core.Keyword(null,"name","name",1843675177),name_50911], null));
});})(seq__50725_50887,chunk__50726_50888,count__50727_50889,i__50728_50890,seq__50707_50837,chunk__50708_50838,count__50709_50839,i__50710_50840,seq__50671_50733,chunk__50672_50734,count__50673_50735,i__50674_50736,map__50731_50907,map__50731_50908__$1,gline_50909,gcol_50910,name_50911,seq__50725_50901__$1,temp__4657__auto___50900__$2,vec__50722_50884,column_50885,column_info_50886,seq__50707_50878__$1,temp__4657__auto___50877__$1,vec__50704_50834,line_50835,columns_50836,seq__50671_50828__$1,temp__4657__auto___50827,inverted))
,cljs.core.sorted_map.call(null)));

var G__50912 = cljs.core.next.call(null,seq__50725_50901__$1);
var G__50913 = null;
var G__50914 = (0);
var G__50915 = (0);
seq__50725_50887 = G__50912;
chunk__50726_50888 = G__50913;
count__50727_50889 = G__50914;
i__50728_50890 = G__50915;
continue;
}
} else {
}
}
break;
}

var G__50916 = cljs.core.next.call(null,seq__50707_50878__$1);
var G__50917 = null;
var G__50918 = (0);
var G__50919 = (0);
seq__50707_50837 = G__50916;
chunk__50708_50838 = G__50917;
count__50709_50839 = G__50918;
i__50710_50840 = G__50919;
continue;
}
} else {
}
}
break;
}

var G__50920 = cljs.core.next.call(null,seq__50671_50828__$1);
var G__50921 = null;
var G__50922 = (0);
var G__50923 = (0);
seq__50671_50733 = G__50920;
chunk__50672_50734 = G__50921;
count__50673_50735 = G__50922;
i__50674_50736 = G__50923;
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