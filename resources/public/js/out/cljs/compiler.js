// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__19609 = s;
var map__19609__$1 = ((((!((map__19609 == null)))?((((map__19609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19609):map__19609);
var name = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__19612 = info;
var map__19613 = G__19612;
var map__19613__$1 = ((((!((map__19613 == null)))?((((map__19613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19613):map__19613);
var shadow = cljs.core.get.call(null,map__19613__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__19612__$1 = G__19612;
while(true){
var d__$2 = d__$1;
var map__19615 = G__19612__$1;
var map__19615__$1 = ((((!((map__19615 == null)))?((((map__19615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19615):map__19615);
var shadow__$1 = cljs.core.get.call(null,map__19615__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__19617 = (d__$2 + (1));
var G__19618 = shadow__$1;
d__$1 = G__19617;
G__19612__$1 = G__19618;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__19619){
var map__19624 = p__19619;
var map__19624__$1 = ((((!((map__19624 == null)))?((((map__19624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19624):map__19624);
var name_var = map__19624__$1;
var name = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__19626 = info;
var map__19626__$1 = ((((!((map__19626 == null)))?((((map__19626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19626):map__19626);
var ns = cljs.core.get.call(null,map__19626__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__19626__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args19628 = [];
var len__11449__auto___19631 = arguments.length;
var i__11450__auto___19632 = (0);
while(true){
if((i__11450__auto___19632 < len__11449__auto___19631)){
args19628.push((arguments[i__11450__auto___19632]));

var G__19633 = (i__11450__auto___19632 + (1));
i__11450__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var G__19630 = args19628.length;
switch (G__19630) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19628.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("self__."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__19636 = cp;
switch (G__19636) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\u"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__19642_19646 = cljs.core.seq.call(null,s);
var chunk__19643_19647 = null;
var count__19644_19648 = (0);
var i__19645_19649 = (0);
while(true){
if((i__19645_19649 < count__19644_19648)){
var c_19650 = cljs.core._nth.call(null,chunk__19643_19647,i__19645_19649);
sb.append(cljs.compiler.escape_char.call(null,c_19650));

var G__19651 = seq__19642_19646;
var G__19652 = chunk__19643_19647;
var G__19653 = count__19644_19648;
var G__19654 = (i__19645_19649 + (1));
seq__19642_19646 = G__19651;
chunk__19643_19647 = G__19652;
count__19644_19648 = G__19653;
i__19645_19649 = G__19654;
continue;
} else {
var temp__4657__auto___19655 = cljs.core.seq.call(null,seq__19642_19646);
if(temp__4657__auto___19655){
var seq__19642_19656__$1 = temp__4657__auto___19655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19642_19656__$1)){
var c__11155__auto___19657 = cljs.core.chunk_first.call(null,seq__19642_19656__$1);
var G__19658 = cljs.core.chunk_rest.call(null,seq__19642_19656__$1);
var G__19659 = c__11155__auto___19657;
var G__19660 = cljs.core.count.call(null,c__11155__auto___19657);
var G__19661 = (0);
seq__19642_19646 = G__19658;
chunk__19643_19647 = G__19659;
count__19644_19648 = G__19660;
i__19645_19649 = G__19661;
continue;
} else {
var c_19662 = cljs.core.first.call(null,seq__19642_19656__$1);
sb.append(cljs.compiler.escape_char.call(null,c_19662));

var G__19663 = cljs.core.next.call(null,seq__19642_19656__$1);
var G__19664 = null;
var G__19665 = (0);
var G__19666 = (0);
seq__19642_19646 = G__19663;
chunk__19643_19647 = G__19664;
count__19644_19648 = G__19665;
i__19645_19649 = G__19666;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__11269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11273__auto__,method_table__11269__auto__,prefer_table__11270__auto__,method_cache__11271__auto__,cached_hierarchy__11272__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__17640__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17640__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__19672_19677 = ast;
var map__19672_19678__$1 = ((((!((map__19672_19677 == null)))?((((map__19672_19677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19672_19677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19672_19677):map__19672_19677);
var env_19679 = cljs.core.get.call(null,map__19672_19678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_19679))){
var map__19674_19680 = env_19679;
var map__19674_19681__$1 = ((((!((map__19674_19680 == null)))?((((map__19674_19680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19674_19680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19674_19680):map__19674_19680);
var line_19682 = cljs.core.get.call(null,map__19674_19681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19683 = cljs.core.get.call(null,map__19674_19681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__19674_19680,map__19674_19681__$1,line_19682,column_19683,map__19672_19677,map__19672_19678__$1,env_19679,val__17640__auto__){
return (function (m){
var minfo = (function (){var G__19676 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__19676,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__19676;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_19682 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__19674_19680,map__19674_19681__$1,line_19682,column_19683,map__19672_19677,map__19672_19678__$1,env_19679,val__17640__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19683)?(column_19683 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__19674_19680,map__19674_19681__$1,line_19682,column_19683,map__19672_19677,map__19672_19678__$1,env_19679,val__17640__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__19674_19680,map__19674_19681__$1,line_19682,column_19683,map__19672_19677,map__19672_19678__$1,env_19679,val__17640__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__19674_19680,map__19674_19681__$1,line_19682,column_19683,map__19672_19677,map__19672_19678__$1,env_19679,val__17640__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__19674_19680,map__19674_19681__$1,line_19682,column_19683,map__19672_19677,map__19672_19678__$1,env_19679,val__17640__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__17640__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__11456__auto__ = [];
var len__11449__auto___19690 = arguments.length;
var i__11450__auto___19691 = (0);
while(true){
if((i__11450__auto___19691 < len__11449__auto___19690)){
args__11456__auto__.push((arguments[i__11450__auto___19691]));

var G__19692 = (i__11450__auto___19691 + (1));
i__11450__auto___19691 = G__19692;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((0) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__11457__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__19686_19693 = cljs.core.seq.call(null,xs);
var chunk__19687_19694 = null;
var count__19688_19695 = (0);
var i__19689_19696 = (0);
while(true){
if((i__19689_19696 < count__19688_19695)){
var x_19697 = cljs.core._nth.call(null,chunk__19687_19694,i__19689_19696);
if((x_19697 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_19697)){
cljs.compiler.emit.call(null,x_19697);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_19697)){
cljs.core.apply.call(null,cljs.compiler.emits,x_19697);
} else {
if(goog.isFunction(x_19697)){
x_19697.call(null);
} else {
var s_19698 = cljs.core.print_str.call(null,x_19697);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19686_19693,chunk__19687_19694,count__19688_19695,i__19689_19696,s_19698,x_19697){
return (function (p1__19684_SHARP_){
return (p1__19684_SHARP_ + cljs.core.count.call(null,s_19698));
});})(seq__19686_19693,chunk__19687_19694,count__19688_19695,i__19689_19696,s_19698,x_19697))
);
}

cljs.core.print.call(null,s_19698);

}
}
}
}

var G__19699 = seq__19686_19693;
var G__19700 = chunk__19687_19694;
var G__19701 = count__19688_19695;
var G__19702 = (i__19689_19696 + (1));
seq__19686_19693 = G__19699;
chunk__19687_19694 = G__19700;
count__19688_19695 = G__19701;
i__19689_19696 = G__19702;
continue;
} else {
var temp__4657__auto___19703 = cljs.core.seq.call(null,seq__19686_19693);
if(temp__4657__auto___19703){
var seq__19686_19704__$1 = temp__4657__auto___19703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19686_19704__$1)){
var c__11155__auto___19705 = cljs.core.chunk_first.call(null,seq__19686_19704__$1);
var G__19706 = cljs.core.chunk_rest.call(null,seq__19686_19704__$1);
var G__19707 = c__11155__auto___19705;
var G__19708 = cljs.core.count.call(null,c__11155__auto___19705);
var G__19709 = (0);
seq__19686_19693 = G__19706;
chunk__19687_19694 = G__19707;
count__19688_19695 = G__19708;
i__19689_19696 = G__19709;
continue;
} else {
var x_19710 = cljs.core.first.call(null,seq__19686_19704__$1);
if((x_19710 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_19710)){
cljs.compiler.emit.call(null,x_19710);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_19710)){
cljs.core.apply.call(null,cljs.compiler.emits,x_19710);
} else {
if(goog.isFunction(x_19710)){
x_19710.call(null);
} else {
var s_19711 = cljs.core.print_str.call(null,x_19710);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19686_19693,chunk__19687_19694,count__19688_19695,i__19689_19696,s_19711,x_19710,seq__19686_19704__$1,temp__4657__auto___19703){
return (function (p1__19684_SHARP_){
return (p1__19684_SHARP_ + cljs.core.count.call(null,s_19711));
});})(seq__19686_19693,chunk__19687_19694,count__19688_19695,i__19689_19696,s_19711,x_19710,seq__19686_19704__$1,temp__4657__auto___19703))
);
}

cljs.core.print.call(null,s_19711);

}
}
}
}

var G__19712 = cljs.core.next.call(null,seq__19686_19704__$1);
var G__19713 = null;
var G__19714 = (0);
var G__19715 = (0);
seq__19686_19693 = G__19712;
chunk__19687_19694 = G__19713;
count__19688_19695 = G__19714;
i__19689_19696 = G__19715;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq19685){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19685));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__11456__auto__ = [];
var len__11449__auto___19720 = arguments.length;
var i__11450__auto___19721 = (0);
while(true){
if((i__11450__auto___19721 < len__11449__auto___19720)){
args__11456__auto__.push((arguments[i__11450__auto___19721]));

var G__19722 = (i__11450__auto___19721 + (1));
i__11450__auto___19721 = G__19722;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((0) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__11457__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__19717){
var map__19718 = p__19717;
var map__19718__$1 = ((((!((map__19718 == null)))?((((map__19718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19718):map__19718);
var m = map__19718__$1;
var gen_line = cljs.core.get.call(null,map__19718__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq19716){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19716));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__11330__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19725_19727 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19726_19728 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19725_19727,_STAR_print_fn_STAR_19726_19728,sb__11330__auto__){
return (function (x__11331__auto__){
return sb__11330__auto__.append(x__11331__auto__);
});})(_STAR_print_newline_STAR_19725_19727,_STAR_print_fn_STAR_19726_19728,sb__11330__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19726_19728;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19725_19727;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11330__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__11269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11273__auto__,method_table__11269__auto__,prefer_table__11270__auto__,method_cache__11271__auto__,cached_hierarchy__11272__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("failed compiling constant: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a valid ClojureScript constant.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__19729 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__19729,(0),null);
var flags = cljs.core.nth.call(null,vec__19729,(1),null);
var pattern = cljs.core.nth.call(null,vec__19729,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__19733){
var map__19734 = p__19733;
var map__19734__$1 = ((((!((map__19734 == null)))?((((map__19734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19734):map__19734);
var arg = map__19734__$1;
var info = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__10336__auto__ = js_module_name;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__19736 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__19736);
} else {
return G__19736;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__19737){
var map__19738 = p__19737;
var map__19738__$1 = ((((!((map__19738 == null)))?((((map__19738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19738):map__19738);
var arg = map__19738__$1;
var env = cljs.core.get.call(null,map__19738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__19738__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__19738__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__19738__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__19740 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__19740__$1 = ((((!((map__19740 == null)))?((((map__19740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19740):map__19740);
var name = cljs.core.get.call(null,map__19740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__19742){
var map__19743 = p__19742;
var map__19743__$1 = ((((!((map__19743 == null)))?((((map__19743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19743):map__19743);
var expr = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__19745_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19745_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__19746){
var map__19747 = p__19746;
var map__19747__$1 = ((((!((map__19747 == null)))?((((map__19747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19747):map__19747);
var env = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__19749){
var map__19750 = p__19749;
var map__19750__$1 = ((((!((map__19750 == null)))?((((map__19750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19750):map__19750);
var items = cljs.core.get.call(null,map__19750__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__19752){
var map__19753 = p__19752;
var map__19753__$1 = ((((!((map__19753 == null)))?((((map__19753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19753):map__19753);
var items = cljs.core.get.call(null,map__19753__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19753__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_19755 = cljs.core.count.call(null,items);
if((cnt_19755 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_19755,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__19756_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19756_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__19757){
var map__19758 = p__19757;
var map__19758__$1 = ((((!((map__19758 == null)))?((((map__19758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19758):map__19758);
var items = cljs.core.get.call(null,map__19758__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__19760){
var map__19761 = p__19760;
var map__19761__$1 = ((((!((map__19761 == null)))?((((map__19761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19761):map__19761);
var items = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___19779 = cljs.core.seq.call(null,items);
if(temp__4657__auto___19779){
var items_19780__$1 = temp__4657__auto___19779;
var vec__19763_19781 = items_19780__$1;
var seq__19764_19782 = cljs.core.seq.call(null,vec__19763_19781);
var first__19765_19783 = cljs.core.first.call(null,seq__19764_19782);
var seq__19764_19784__$1 = cljs.core.next.call(null,seq__19764_19782);
var vec__19766_19785 = first__19765_19783;
var k_19786 = cljs.core.nth.call(null,vec__19766_19785,(0),null);
var v_19787 = cljs.core.nth.call(null,vec__19766_19785,(1),null);
var r_19788 = seq__19764_19784__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_19786),"\": ",v_19787);

var seq__19769_19789 = cljs.core.seq.call(null,r_19788);
var chunk__19770_19790 = null;
var count__19771_19791 = (0);
var i__19772_19792 = (0);
while(true){
if((i__19772_19792 < count__19771_19791)){
var vec__19773_19793 = cljs.core._nth.call(null,chunk__19770_19790,i__19772_19792);
var k_19794__$1 = cljs.core.nth.call(null,vec__19773_19793,(0),null);
var v_19795__$1 = cljs.core.nth.call(null,vec__19773_19793,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_19794__$1),"\": ",v_19795__$1);

var G__19796 = seq__19769_19789;
var G__19797 = chunk__19770_19790;
var G__19798 = count__19771_19791;
var G__19799 = (i__19772_19792 + (1));
seq__19769_19789 = G__19796;
chunk__19770_19790 = G__19797;
count__19771_19791 = G__19798;
i__19772_19792 = G__19799;
continue;
} else {
var temp__4657__auto___19800__$1 = cljs.core.seq.call(null,seq__19769_19789);
if(temp__4657__auto___19800__$1){
var seq__19769_19801__$1 = temp__4657__auto___19800__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19769_19801__$1)){
var c__11155__auto___19802 = cljs.core.chunk_first.call(null,seq__19769_19801__$1);
var G__19803 = cljs.core.chunk_rest.call(null,seq__19769_19801__$1);
var G__19804 = c__11155__auto___19802;
var G__19805 = cljs.core.count.call(null,c__11155__auto___19802);
var G__19806 = (0);
seq__19769_19789 = G__19803;
chunk__19770_19790 = G__19804;
count__19771_19791 = G__19805;
i__19772_19792 = G__19806;
continue;
} else {
var vec__19776_19807 = cljs.core.first.call(null,seq__19769_19801__$1);
var k_19808__$1 = cljs.core.nth.call(null,vec__19776_19807,(0),null);
var v_19809__$1 = cljs.core.nth.call(null,vec__19776_19807,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_19808__$1),"\": ",v_19809__$1);

var G__19810 = cljs.core.next.call(null,seq__19769_19801__$1);
var G__19811 = null;
var G__19812 = (0);
var G__19813 = (0);
seq__19769_19789 = G__19810;
chunk__19770_19790 = G__19811;
count__19771_19791 = G__19812;
i__19772_19792 = G__19813;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__19814){
var map__19815 = p__19814;
var map__19815__$1 = ((((!((map__19815 == null)))?((((map__19815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19815):map__19815);
var form = cljs.core.get.call(null,map__19815__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__19815__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__19817){
var map__19820 = p__19817;
var map__19820__$1 = ((((!((map__19820 == null)))?((((map__19820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19820):map__19820);
var op = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__10324__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__10324__auto__){
var and__10324__auto____$1 = form;
if(cljs.core.truth_(and__10324__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__19822){
var map__19825 = p__19822;
var map__19825__$1 = ((((!((map__19825 == null)))?((((map__19825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19825):map__19825);
var op = cljs.core.get.call(null,map__19825__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__19825__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__10336__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__19827){
var map__19828 = p__19827;
var map__19828__$1 = ((((!((map__19828 == null)))?((((map__19828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19828):map__19828);
var test = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__10336__auto__ = unchecked;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__19830){
var map__19831 = p__19830;
var map__19831__$1 = ((((!((map__19831 == null)))?((((map__19831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19831):map__19831);
var v = cljs.core.get.call(null,map__19831__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__19831__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__19831__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__19831__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__19831__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__19833_19851 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__19834_19852 = null;
var count__19835_19853 = (0);
var i__19836_19854 = (0);
while(true){
if((i__19836_19854 < count__19835_19853)){
var vec__19837_19855 = cljs.core._nth.call(null,chunk__19834_19852,i__19836_19854);
var ts_19856 = cljs.core.nth.call(null,vec__19837_19855,(0),null);
var then_19857 = cljs.core.nth.call(null,vec__19837_19855,(1),null);
var seq__19840_19858 = cljs.core.seq.call(null,ts_19856);
var chunk__19841_19859 = null;
var count__19842_19860 = (0);
var i__19843_19861 = (0);
while(true){
if((i__19843_19861 < count__19842_19860)){
var test_19862 = cljs.core._nth.call(null,chunk__19841_19859,i__19843_19861);
cljs.compiler.emitln.call(null,"case ",test_19862,":");

var G__19863 = seq__19840_19858;
var G__19864 = chunk__19841_19859;
var G__19865 = count__19842_19860;
var G__19866 = (i__19843_19861 + (1));
seq__19840_19858 = G__19863;
chunk__19841_19859 = G__19864;
count__19842_19860 = G__19865;
i__19843_19861 = G__19866;
continue;
} else {
var temp__4657__auto___19867 = cljs.core.seq.call(null,seq__19840_19858);
if(temp__4657__auto___19867){
var seq__19840_19868__$1 = temp__4657__auto___19867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19840_19868__$1)){
var c__11155__auto___19869 = cljs.core.chunk_first.call(null,seq__19840_19868__$1);
var G__19870 = cljs.core.chunk_rest.call(null,seq__19840_19868__$1);
var G__19871 = c__11155__auto___19869;
var G__19872 = cljs.core.count.call(null,c__11155__auto___19869);
var G__19873 = (0);
seq__19840_19858 = G__19870;
chunk__19841_19859 = G__19871;
count__19842_19860 = G__19872;
i__19843_19861 = G__19873;
continue;
} else {
var test_19874 = cljs.core.first.call(null,seq__19840_19868__$1);
cljs.compiler.emitln.call(null,"case ",test_19874,":");

var G__19875 = cljs.core.next.call(null,seq__19840_19868__$1);
var G__19876 = null;
var G__19877 = (0);
var G__19878 = (0);
seq__19840_19858 = G__19875;
chunk__19841_19859 = G__19876;
count__19842_19860 = G__19877;
i__19843_19861 = G__19878;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_19857);
} else {
cljs.compiler.emitln.call(null,then_19857);
}

cljs.compiler.emitln.call(null,"break;");

var G__19879 = seq__19833_19851;
var G__19880 = chunk__19834_19852;
var G__19881 = count__19835_19853;
var G__19882 = (i__19836_19854 + (1));
seq__19833_19851 = G__19879;
chunk__19834_19852 = G__19880;
count__19835_19853 = G__19881;
i__19836_19854 = G__19882;
continue;
} else {
var temp__4657__auto___19883 = cljs.core.seq.call(null,seq__19833_19851);
if(temp__4657__auto___19883){
var seq__19833_19884__$1 = temp__4657__auto___19883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19833_19884__$1)){
var c__11155__auto___19885 = cljs.core.chunk_first.call(null,seq__19833_19884__$1);
var G__19886 = cljs.core.chunk_rest.call(null,seq__19833_19884__$1);
var G__19887 = c__11155__auto___19885;
var G__19888 = cljs.core.count.call(null,c__11155__auto___19885);
var G__19889 = (0);
seq__19833_19851 = G__19886;
chunk__19834_19852 = G__19887;
count__19835_19853 = G__19888;
i__19836_19854 = G__19889;
continue;
} else {
var vec__19844_19890 = cljs.core.first.call(null,seq__19833_19884__$1);
var ts_19891 = cljs.core.nth.call(null,vec__19844_19890,(0),null);
var then_19892 = cljs.core.nth.call(null,vec__19844_19890,(1),null);
var seq__19847_19893 = cljs.core.seq.call(null,ts_19891);
var chunk__19848_19894 = null;
var count__19849_19895 = (0);
var i__19850_19896 = (0);
while(true){
if((i__19850_19896 < count__19849_19895)){
var test_19897 = cljs.core._nth.call(null,chunk__19848_19894,i__19850_19896);
cljs.compiler.emitln.call(null,"case ",test_19897,":");

var G__19898 = seq__19847_19893;
var G__19899 = chunk__19848_19894;
var G__19900 = count__19849_19895;
var G__19901 = (i__19850_19896 + (1));
seq__19847_19893 = G__19898;
chunk__19848_19894 = G__19899;
count__19849_19895 = G__19900;
i__19850_19896 = G__19901;
continue;
} else {
var temp__4657__auto___19902__$1 = cljs.core.seq.call(null,seq__19847_19893);
if(temp__4657__auto___19902__$1){
var seq__19847_19903__$1 = temp__4657__auto___19902__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19847_19903__$1)){
var c__11155__auto___19904 = cljs.core.chunk_first.call(null,seq__19847_19903__$1);
var G__19905 = cljs.core.chunk_rest.call(null,seq__19847_19903__$1);
var G__19906 = c__11155__auto___19904;
var G__19907 = cljs.core.count.call(null,c__11155__auto___19904);
var G__19908 = (0);
seq__19847_19893 = G__19905;
chunk__19848_19894 = G__19906;
count__19849_19895 = G__19907;
i__19850_19896 = G__19908;
continue;
} else {
var test_19909 = cljs.core.first.call(null,seq__19847_19903__$1);
cljs.compiler.emitln.call(null,"case ",test_19909,":");

var G__19910 = cljs.core.next.call(null,seq__19847_19903__$1);
var G__19911 = null;
var G__19912 = (0);
var G__19913 = (0);
seq__19847_19893 = G__19910;
chunk__19848_19894 = G__19911;
count__19849_19895 = G__19912;
i__19850_19896 = G__19913;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_19892);
} else {
cljs.compiler.emitln.call(null,then_19892);
}

cljs.compiler.emitln.call(null,"break;");

var G__19914 = cljs.core.next.call(null,seq__19833_19884__$1);
var G__19915 = null;
var G__19916 = (0);
var G__19917 = (0);
seq__19833_19851 = G__19914;
chunk__19834_19852 = G__19915;
count__19835_19853 = G__19916;
i__19836_19854 = G__19917;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__19918){
var map__19919 = p__19918;
var map__19919__$1 = ((((!((map__19919 == null)))?((((map__19919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19919):map__19919);
var throw$ = cljs.core.get.call(null,map__19919__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__19919__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__19926 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__19926,(0),null);
var rstr = cljs.core.nth.call(null,vec__19926,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__19926,fstr,rstr,ret_t,axstr){
return (function (p1__19921_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__19921_SHARP_);
});})(idx,vec__19926,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__19929 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("function("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19929),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__19929;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__19930_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__19930_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__19937 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__19938 = cljs.core.seq.call(null,vec__19937);
var first__19939 = cljs.core.first.call(null,seq__19938);
var seq__19938__$1 = cljs.core.next.call(null,seq__19938);
var p = first__19939;
var first__19939__$1 = cljs.core.first.call(null,seq__19938__$1);
var seq__19938__$2 = cljs.core.next.call(null,seq__19938__$1);
var ts = first__19939__$1;
var first__19939__$2 = cljs.core.first.call(null,seq__19938__$2);
var seq__19938__$3 = cljs.core.next.call(null,seq__19938__$2);
var n = first__19939__$2;
var xs = seq__19938__$3;
if(cljs.core.truth_((function (){var and__10324__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__10324__auto__){
var and__10324__auto____$1 = ts;
if(cljs.core.truth_(and__10324__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__19940 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__19941 = cljs.core.seq.call(null,vec__19940);
var first__19942 = cljs.core.first.call(null,seq__19941);
var seq__19941__$1 = cljs.core.next.call(null,seq__19941);
var p = first__19942;
var first__19942__$1 = cljs.core.first.call(null,seq__19941__$1);
var seq__19941__$2 = cljs.core.next.call(null,seq__19941__$1);
var ts = first__19942__$1;
var xs = seq__19941__$2;
if(cljs.core.truth_((function (){var and__10324__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__10324__auto__){
var and__10324__auto____$1 = ts;
if(cljs.core.truth_(and__10324__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args19944 = [];
var len__11449__auto___19979 = arguments.length;
var i__11450__auto___19980 = (0);
while(true){
if((i__11450__auto___19980 < len__11449__auto___19979)){
args19944.push((arguments[i__11450__auto___19980]));

var G__19981 = (i__11450__auto___19980 + (1));
i__11450__auto___19980 = G__19981;
continue;
} else {
}
break;
}

var G__19946 = args19944.length;
switch (G__19946) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19944.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__19968 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__19943_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__19943_SHARP_);
} else {
return p1__19943_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__19969 = cljs.core.seq.call(null,vec__19968);
var first__19970 = cljs.core.first.call(null,seq__19969);
var seq__19969__$1 = cljs.core.next.call(null,seq__19969);
var x = first__19970;
var ys = seq__19969__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__19971 = cljs.core.seq.call(null,ys);
var chunk__19972 = null;
var count__19973 = (0);
var i__19974 = (0);
while(true){
if((i__19974 < count__19973)){
var next_line = cljs.core._nth.call(null,chunk__19972,i__19974);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__19983 = seq__19971;
var G__19984 = chunk__19972;
var G__19985 = count__19973;
var G__19986 = (i__19974 + (1));
seq__19971 = G__19983;
chunk__19972 = G__19984;
count__19973 = G__19985;
i__19974 = G__19986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19971);
if(temp__4657__auto__){
var seq__19971__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19971__$1)){
var c__11155__auto__ = cljs.core.chunk_first.call(null,seq__19971__$1);
var G__19987 = cljs.core.chunk_rest.call(null,seq__19971__$1);
var G__19988 = c__11155__auto__;
var G__19989 = cljs.core.count.call(null,c__11155__auto__);
var G__19990 = (0);
seq__19971 = G__19987;
chunk__19972 = G__19988;
count__19973 = G__19989;
i__19974 = G__19990;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__19971__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__19991 = cljs.core.next.call(null,seq__19971__$1);
var G__19992 = null;
var G__19993 = (0);
var G__19994 = (0);
seq__19971 = G__19991;
chunk__19972 = G__19992;
count__19973 = G__19993;
i__19974 = G__19994;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__19975_19995 = cljs.core.seq.call(null,docs__$2);
var chunk__19976_19996 = null;
var count__19977_19997 = (0);
var i__19978_19998 = (0);
while(true){
if((i__19978_19998 < count__19977_19997)){
var e_19999 = cljs.core._nth.call(null,chunk__19976_19996,i__19978_19998);
if(cljs.core.truth_(e_19999)){
print_comment_lines.call(null,e_19999);
} else {
}

var G__20000 = seq__19975_19995;
var G__20001 = chunk__19976_19996;
var G__20002 = count__19977_19997;
var G__20003 = (i__19978_19998 + (1));
seq__19975_19995 = G__20000;
chunk__19976_19996 = G__20001;
count__19977_19997 = G__20002;
i__19978_19998 = G__20003;
continue;
} else {
var temp__4657__auto___20004 = cljs.core.seq.call(null,seq__19975_19995);
if(temp__4657__auto___20004){
var seq__19975_20005__$1 = temp__4657__auto___20004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19975_20005__$1)){
var c__11155__auto___20006 = cljs.core.chunk_first.call(null,seq__19975_20005__$1);
var G__20007 = cljs.core.chunk_rest.call(null,seq__19975_20005__$1);
var G__20008 = c__11155__auto___20006;
var G__20009 = cljs.core.count.call(null,c__11155__auto___20006);
var G__20010 = (0);
seq__19975_19995 = G__20007;
chunk__19976_19996 = G__20008;
count__19977_19997 = G__20009;
i__19978_19998 = G__20010;
continue;
} else {
var e_20011 = cljs.core.first.call(null,seq__19975_20005__$1);
if(cljs.core.truth_(e_20011)){
print_comment_lines.call(null,e_20011);
} else {
}

var G__20012 = cljs.core.next.call(null,seq__19975_20005__$1);
var G__20013 = null;
var G__20014 = (0);
var G__20015 = (0);
seq__19975_19995 = G__20012;
chunk__19976_19996 = G__20013;
count__19977_19997 = G__20014;
i__19978_19998 = G__20015;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__10324__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__20017_SHARP_){
return goog.string.startsWith(p1__20017_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__10324__auto__)){
var and__10324__auto____$1 = opts;
if(cljs.core.truth_(and__10324__auto____$1)){
var and__10324__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__10324__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__10324__auto____$2;
}
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__20018){
var map__20019 = p__20018;
var map__20019__$1 = ((((!((map__20019 == null)))?((((map__20019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20019):map__20019);
var name = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__10336__auto__ = init;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__10324__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__10324__auto__){
return test;
} else {
return and__10324__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__20021){
var map__20042 = p__20021;
var map__20042__$1 = ((((!((map__20042 == null)))?((((map__20042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20042):map__20042);
var name = cljs.core.get.call(null,map__20042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__20042__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__20042__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__20044_20062 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__20045_20063 = null;
var count__20046_20064 = (0);
var i__20047_20065 = (0);
while(true){
if((i__20047_20065 < count__20046_20064)){
var vec__20048_20066 = cljs.core._nth.call(null,chunk__20045_20063,i__20047_20065);
var i_20067 = cljs.core.nth.call(null,vec__20048_20066,(0),null);
var param_20068 = cljs.core.nth.call(null,vec__20048_20066,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20068);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20069 = seq__20044_20062;
var G__20070 = chunk__20045_20063;
var G__20071 = count__20046_20064;
var G__20072 = (i__20047_20065 + (1));
seq__20044_20062 = G__20069;
chunk__20045_20063 = G__20070;
count__20046_20064 = G__20071;
i__20047_20065 = G__20072;
continue;
} else {
var temp__4657__auto___20073 = cljs.core.seq.call(null,seq__20044_20062);
if(temp__4657__auto___20073){
var seq__20044_20074__$1 = temp__4657__auto___20073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20044_20074__$1)){
var c__11155__auto___20075 = cljs.core.chunk_first.call(null,seq__20044_20074__$1);
var G__20076 = cljs.core.chunk_rest.call(null,seq__20044_20074__$1);
var G__20077 = c__11155__auto___20075;
var G__20078 = cljs.core.count.call(null,c__11155__auto___20075);
var G__20079 = (0);
seq__20044_20062 = G__20076;
chunk__20045_20063 = G__20077;
count__20046_20064 = G__20078;
i__20047_20065 = G__20079;
continue;
} else {
var vec__20051_20080 = cljs.core.first.call(null,seq__20044_20074__$1);
var i_20081 = cljs.core.nth.call(null,vec__20051_20080,(0),null);
var param_20082 = cljs.core.nth.call(null,vec__20051_20080,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20082);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20083 = cljs.core.next.call(null,seq__20044_20074__$1);
var G__20084 = null;
var G__20085 = (0);
var G__20086 = (0);
seq__20044_20062 = G__20083;
chunk__20045_20063 = G__20084;
count__20046_20064 = G__20085;
i__20047_20065 = G__20086;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__20054_20087 = cljs.core.seq.call(null,params);
var chunk__20055_20088 = null;
var count__20056_20089 = (0);
var i__20057_20090 = (0);
while(true){
if((i__20057_20090 < count__20056_20089)){
var param_20091 = cljs.core._nth.call(null,chunk__20055_20088,i__20057_20090);
cljs.compiler.emit.call(null,param_20091);

if(cljs.core._EQ_.call(null,param_20091,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20092 = seq__20054_20087;
var G__20093 = chunk__20055_20088;
var G__20094 = count__20056_20089;
var G__20095 = (i__20057_20090 + (1));
seq__20054_20087 = G__20092;
chunk__20055_20088 = G__20093;
count__20056_20089 = G__20094;
i__20057_20090 = G__20095;
continue;
} else {
var temp__4657__auto___20096 = cljs.core.seq.call(null,seq__20054_20087);
if(temp__4657__auto___20096){
var seq__20054_20097__$1 = temp__4657__auto___20096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20054_20097__$1)){
var c__11155__auto___20098 = cljs.core.chunk_first.call(null,seq__20054_20097__$1);
var G__20099 = cljs.core.chunk_rest.call(null,seq__20054_20097__$1);
var G__20100 = c__11155__auto___20098;
var G__20101 = cljs.core.count.call(null,c__11155__auto___20098);
var G__20102 = (0);
seq__20054_20087 = G__20099;
chunk__20055_20088 = G__20100;
count__20056_20089 = G__20101;
i__20057_20090 = G__20102;
continue;
} else {
var param_20103 = cljs.core.first.call(null,seq__20054_20097__$1);
cljs.compiler.emit.call(null,param_20103);

if(cljs.core._EQ_.call(null,param_20103,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20104 = cljs.core.next.call(null,seq__20054_20097__$1);
var G__20105 = null;
var G__20106 = (0);
var G__20107 = (0);
seq__20054_20087 = G__20104;
chunk__20055_20088 = G__20105;
count__20056_20089 = G__20106;
i__20057_20090 = G__20107;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__20058_20108 = cljs.core.seq.call(null,params);
var chunk__20059_20109 = null;
var count__20060_20110 = (0);
var i__20061_20111 = (0);
while(true){
if((i__20061_20111 < count__20060_20110)){
var param_20112 = cljs.core._nth.call(null,chunk__20059_20109,i__20061_20111);
cljs.compiler.emit.call(null,param_20112);

if(cljs.core._EQ_.call(null,param_20112,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20113 = seq__20058_20108;
var G__20114 = chunk__20059_20109;
var G__20115 = count__20060_20110;
var G__20116 = (i__20061_20111 + (1));
seq__20058_20108 = G__20113;
chunk__20059_20109 = G__20114;
count__20060_20110 = G__20115;
i__20061_20111 = G__20116;
continue;
} else {
var temp__4657__auto___20117 = cljs.core.seq.call(null,seq__20058_20108);
if(temp__4657__auto___20117){
var seq__20058_20118__$1 = temp__4657__auto___20117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20058_20118__$1)){
var c__11155__auto___20119 = cljs.core.chunk_first.call(null,seq__20058_20118__$1);
var G__20120 = cljs.core.chunk_rest.call(null,seq__20058_20118__$1);
var G__20121 = c__11155__auto___20119;
var G__20122 = cljs.core.count.call(null,c__11155__auto___20119);
var G__20123 = (0);
seq__20058_20108 = G__20120;
chunk__20059_20109 = G__20121;
count__20060_20110 = G__20122;
i__20061_20111 = G__20123;
continue;
} else {
var param_20124 = cljs.core.first.call(null,seq__20058_20118__$1);
cljs.compiler.emit.call(null,param_20124);

if(cljs.core._EQ_.call(null,param_20124,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20125 = cljs.core.next.call(null,seq__20058_20118__$1);
var G__20126 = null;
var G__20127 = (0);
var G__20128 = (0);
seq__20058_20108 = G__20125;
chunk__20059_20109 = G__20126;
count__20060_20110 = G__20127;
i__20061_20111 = G__20128;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__20133 = cljs.core.seq.call(null,params);
var chunk__20134 = null;
var count__20135 = (0);
var i__20136 = (0);
while(true){
if((i__20136 < count__20135)){
var param = cljs.core._nth.call(null,chunk__20134,i__20136);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20137 = seq__20133;
var G__20138 = chunk__20134;
var G__20139 = count__20135;
var G__20140 = (i__20136 + (1));
seq__20133 = G__20137;
chunk__20134 = G__20138;
count__20135 = G__20139;
i__20136 = G__20140;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20133);
if(temp__4657__auto__){
var seq__20133__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20133__$1)){
var c__11155__auto__ = cljs.core.chunk_first.call(null,seq__20133__$1);
var G__20141 = cljs.core.chunk_rest.call(null,seq__20133__$1);
var G__20142 = c__11155__auto__;
var G__20143 = cljs.core.count.call(null,c__11155__auto__);
var G__20144 = (0);
seq__20133 = G__20141;
chunk__20134 = G__20142;
count__20135 = G__20143;
i__20136 = G__20144;
continue;
} else {
var param = cljs.core.first.call(null,seq__20133__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20145 = cljs.core.next.call(null,seq__20133__$1);
var G__20146 = null;
var G__20147 = (0);
var G__20148 = (0);
seq__20133 = G__20145;
chunk__20134 = G__20146;
count__20135 = G__20147;
i__20136 = G__20148;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__20149){
var map__20152 = p__20149;
var map__20152__$1 = ((((!((map__20152 == null)))?((((map__20152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20152):map__20152);
var type = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__i")].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__20154){
var map__20165 = p__20154;
var map__20165__$1 = ((((!((map__20165 == null)))?((((map__20165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20165):map__20165);
var f = map__20165__$1;
var type = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20165__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_20175__$1 = (function (){var or__10336__auto__ = name;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20176 = cljs.compiler.munge.call(null,name_20175__$1);
var delegate_name_20177 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_20176),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_20177," = function (");

var seq__20167_20178 = cljs.core.seq.call(null,params);
var chunk__20168_20179 = null;
var count__20169_20180 = (0);
var i__20170_20181 = (0);
while(true){
if((i__20170_20181 < count__20169_20180)){
var param_20182 = cljs.core._nth.call(null,chunk__20168_20179,i__20170_20181);
cljs.compiler.emit.call(null,param_20182);

if(cljs.core._EQ_.call(null,param_20182,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20183 = seq__20167_20178;
var G__20184 = chunk__20168_20179;
var G__20185 = count__20169_20180;
var G__20186 = (i__20170_20181 + (1));
seq__20167_20178 = G__20183;
chunk__20168_20179 = G__20184;
count__20169_20180 = G__20185;
i__20170_20181 = G__20186;
continue;
} else {
var temp__4657__auto___20187 = cljs.core.seq.call(null,seq__20167_20178);
if(temp__4657__auto___20187){
var seq__20167_20188__$1 = temp__4657__auto___20187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20167_20188__$1)){
var c__11155__auto___20189 = cljs.core.chunk_first.call(null,seq__20167_20188__$1);
var G__20190 = cljs.core.chunk_rest.call(null,seq__20167_20188__$1);
var G__20191 = c__11155__auto___20189;
var G__20192 = cljs.core.count.call(null,c__11155__auto___20189);
var G__20193 = (0);
seq__20167_20178 = G__20190;
chunk__20168_20179 = G__20191;
count__20169_20180 = G__20192;
i__20170_20181 = G__20193;
continue;
} else {
var param_20194 = cljs.core.first.call(null,seq__20167_20188__$1);
cljs.compiler.emit.call(null,param_20194);

if(cljs.core._EQ_.call(null,param_20194,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20195 = cljs.core.next.call(null,seq__20167_20188__$1);
var G__20196 = null;
var G__20197 = (0);
var G__20198 = (0);
seq__20167_20178 = G__20195;
chunk__20168_20179 = G__20196;
count__20169_20180 = G__20197;
i__20170_20181 = G__20198;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_20176," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_20199 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_20199,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_20177,".call(this,");

var seq__20171_20200 = cljs.core.seq.call(null,params);
var chunk__20172_20201 = null;
var count__20173_20202 = (0);
var i__20174_20203 = (0);
while(true){
if((i__20174_20203 < count__20173_20202)){
var param_20204 = cljs.core._nth.call(null,chunk__20172_20201,i__20174_20203);
cljs.compiler.emit.call(null,param_20204);

if(cljs.core._EQ_.call(null,param_20204,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20205 = seq__20171_20200;
var G__20206 = chunk__20172_20201;
var G__20207 = count__20173_20202;
var G__20208 = (i__20174_20203 + (1));
seq__20171_20200 = G__20205;
chunk__20172_20201 = G__20206;
count__20173_20202 = G__20207;
i__20174_20203 = G__20208;
continue;
} else {
var temp__4657__auto___20209 = cljs.core.seq.call(null,seq__20171_20200);
if(temp__4657__auto___20209){
var seq__20171_20210__$1 = temp__4657__auto___20209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20171_20210__$1)){
var c__11155__auto___20211 = cljs.core.chunk_first.call(null,seq__20171_20210__$1);
var G__20212 = cljs.core.chunk_rest.call(null,seq__20171_20210__$1);
var G__20213 = c__11155__auto___20211;
var G__20214 = cljs.core.count.call(null,c__11155__auto___20211);
var G__20215 = (0);
seq__20171_20200 = G__20212;
chunk__20172_20201 = G__20213;
count__20173_20202 = G__20214;
i__20174_20203 = G__20215;
continue;
} else {
var param_20216 = cljs.core.first.call(null,seq__20171_20210__$1);
cljs.compiler.emit.call(null,param_20216);

if(cljs.core._EQ_.call(null,param_20216,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20217 = cljs.core.next.call(null,seq__20171_20210__$1);
var G__20218 = null;
var G__20219 = (0);
var G__20220 = (0);
seq__20171_20200 = G__20217;
chunk__20172_20201 = G__20218;
count__20173_20202 = G__20219;
i__20174_20203 = G__20220;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_20176,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_20176,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_20175__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_20176,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_20177,";");

cljs.compiler.emitln.call(null,"return ",mname_20176,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__20224){
var map__20225 = p__20224;
var map__20225__$1 = ((((!((map__20225 == null)))?((((map__20225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20225):map__20225);
var name = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__20225__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20221_SHARP_){
var and__10324__auto__ = p1__20221_SHARP_;
if(cljs.core.truth_(and__10324__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__20221_SHARP_));
} else {
return and__10324__auto__;
}
});})(map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_20260__$1 = (function (){var or__10336__auto__ = name;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20261 = cljs.compiler.munge.call(null,name_20260__$1);
var maxparams_20262 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_20263 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_20260__$1,mname_20261,maxparams_20262,loop_locals,map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_20261),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_20260__$1,mname_20261,maxparams_20262,loop_locals,map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_20264 = cljs.core.sort_by.call(null,((function (name_20260__$1,mname_20261,maxparams_20262,mmap_20263,loop_locals,map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20222_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20222_SHARP_)));
});})(name_20260__$1,mname_20261,maxparams_20262,mmap_20263,loop_locals,map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_20263));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_20261," = null;");

var seq__20227_20265 = cljs.core.seq.call(null,ms_20264);
var chunk__20228_20266 = null;
var count__20229_20267 = (0);
var i__20230_20268 = (0);
while(true){
if((i__20230_20268 < count__20229_20267)){
var vec__20231_20269 = cljs.core._nth.call(null,chunk__20228_20266,i__20230_20268);
var n_20270 = cljs.core.nth.call(null,vec__20231_20269,(0),null);
var meth_20271 = cljs.core.nth.call(null,vec__20231_20269,(1),null);
cljs.compiler.emits.call(null,"var ",n_20270," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20271))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20271);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20271);
}

cljs.compiler.emitln.call(null,";");

var G__20272 = seq__20227_20265;
var G__20273 = chunk__20228_20266;
var G__20274 = count__20229_20267;
var G__20275 = (i__20230_20268 + (1));
seq__20227_20265 = G__20272;
chunk__20228_20266 = G__20273;
count__20229_20267 = G__20274;
i__20230_20268 = G__20275;
continue;
} else {
var temp__4657__auto___20276 = cljs.core.seq.call(null,seq__20227_20265);
if(temp__4657__auto___20276){
var seq__20227_20277__$1 = temp__4657__auto___20276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20227_20277__$1)){
var c__11155__auto___20278 = cljs.core.chunk_first.call(null,seq__20227_20277__$1);
var G__20279 = cljs.core.chunk_rest.call(null,seq__20227_20277__$1);
var G__20280 = c__11155__auto___20278;
var G__20281 = cljs.core.count.call(null,c__11155__auto___20278);
var G__20282 = (0);
seq__20227_20265 = G__20279;
chunk__20228_20266 = G__20280;
count__20229_20267 = G__20281;
i__20230_20268 = G__20282;
continue;
} else {
var vec__20234_20283 = cljs.core.first.call(null,seq__20227_20277__$1);
var n_20284 = cljs.core.nth.call(null,vec__20234_20283,(0),null);
var meth_20285 = cljs.core.nth.call(null,vec__20234_20283,(1),null);
cljs.compiler.emits.call(null,"var ",n_20284," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20285))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20285);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20285);
}

cljs.compiler.emitln.call(null,";");

var G__20286 = cljs.core.next.call(null,seq__20227_20277__$1);
var G__20287 = null;
var G__20288 = (0);
var G__20289 = (0);
seq__20227_20265 = G__20286;
chunk__20228_20266 = G__20287;
count__20229_20267 = G__20288;
i__20230_20268 = G__20289;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_20261," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_20262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_20262)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_20262));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__20237_20290 = cljs.core.seq.call(null,ms_20264);
var chunk__20238_20291 = null;
var count__20239_20292 = (0);
var i__20240_20293 = (0);
while(true){
if((i__20240_20293 < count__20239_20292)){
var vec__20241_20294 = cljs.core._nth.call(null,chunk__20238_20291,i__20240_20293);
var n_20295 = cljs.core.nth.call(null,vec__20241_20294,(0),null);
var meth_20296 = cljs.core.nth.call(null,vec__20241_20294,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20296))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20297 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20297," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20298 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20297," = new cljs.core.IndexedSeq(",a_20298,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20295,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20262)),(((cljs.core.count.call(null,maxparams_20262) > (1)))?", ":null),restarg_20297,");");
} else {
var pcnt_20299 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20296));
cljs.compiler.emitln.call(null,"case ",pcnt_20299,":");

cljs.compiler.emitln.call(null,"return ",n_20295,".call(this",(((pcnt_20299 === (0)))?null:cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20299,maxparams_20262));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),",")),");");
}

var G__20300 = seq__20237_20290;
var G__20301 = chunk__20238_20291;
var G__20302 = count__20239_20292;
var G__20303 = (i__20240_20293 + (1));
seq__20237_20290 = G__20300;
chunk__20238_20291 = G__20301;
count__20239_20292 = G__20302;
i__20240_20293 = G__20303;
continue;
} else {
var temp__4657__auto___20304 = cljs.core.seq.call(null,seq__20237_20290);
if(temp__4657__auto___20304){
var seq__20237_20305__$1 = temp__4657__auto___20304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20237_20305__$1)){
var c__11155__auto___20306 = cljs.core.chunk_first.call(null,seq__20237_20305__$1);
var G__20307 = cljs.core.chunk_rest.call(null,seq__20237_20305__$1);
var G__20308 = c__11155__auto___20306;
var G__20309 = cljs.core.count.call(null,c__11155__auto___20306);
var G__20310 = (0);
seq__20237_20290 = G__20307;
chunk__20238_20291 = G__20308;
count__20239_20292 = G__20309;
i__20240_20293 = G__20310;
continue;
} else {
var vec__20244_20311 = cljs.core.first.call(null,seq__20237_20305__$1);
var n_20312 = cljs.core.nth.call(null,vec__20244_20311,(0),null);
var meth_20313 = cljs.core.nth.call(null,vec__20244_20311,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20313))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20314 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20314," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20315 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20314," = new cljs.core.IndexedSeq(",a_20315,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20312,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20262)),(((cljs.core.count.call(null,maxparams_20262) > (1)))?", ":null),restarg_20314,");");
} else {
var pcnt_20316 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20313));
cljs.compiler.emitln.call(null,"case ",pcnt_20316,":");

cljs.compiler.emitln.call(null,"return ",n_20312,".call(this",(((pcnt_20316 === (0)))?null:cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20316,maxparams_20262));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),",")),");");
}

var G__20317 = cljs.core.next.call(null,seq__20237_20305__$1);
var G__20318 = null;
var G__20319 = (0);
var G__20320 = (0);
seq__20237_20290 = G__20317;
chunk__20238_20291 = G__20318;
count__20239_20292 = G__20319;
i__20240_20293 = G__20320;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_20261,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_20261,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_20260__$1,mname_20261,maxparams_20262,mmap_20263,ms_20264,loop_locals,map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20223_SHARP_){
var vec__20247 = p1__20223_SHARP_;
var n = cljs.core.nth.call(null,vec__20247,(0),null);
var m = cljs.core.nth.call(null,vec__20247,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_20260__$1,mname_20261,maxparams_20262,mmap_20263,ms_20264,loop_locals,map__20225,map__20225__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_20264),".cljs$lang$applyTo;");
} else {
}

var seq__20250_20321 = cljs.core.seq.call(null,ms_20264);
var chunk__20251_20322 = null;
var count__20252_20323 = (0);
var i__20253_20324 = (0);
while(true){
if((i__20253_20324 < count__20252_20323)){
var vec__20254_20325 = cljs.core._nth.call(null,chunk__20251_20322,i__20253_20324);
var n_20326 = cljs.core.nth.call(null,vec__20254_20325,(0),null);
var meth_20327 = cljs.core.nth.call(null,vec__20254_20325,(1),null);
var c_20328 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20327));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20327))){
cljs.compiler.emitln.call(null,mname_20261,".cljs$core$IFn$_invoke$arity$variadic = ",n_20326,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20261,".cljs$core$IFn$_invoke$arity$",c_20328," = ",n_20326,";");
}

var G__20329 = seq__20250_20321;
var G__20330 = chunk__20251_20322;
var G__20331 = count__20252_20323;
var G__20332 = (i__20253_20324 + (1));
seq__20250_20321 = G__20329;
chunk__20251_20322 = G__20330;
count__20252_20323 = G__20331;
i__20253_20324 = G__20332;
continue;
} else {
var temp__4657__auto___20333 = cljs.core.seq.call(null,seq__20250_20321);
if(temp__4657__auto___20333){
var seq__20250_20334__$1 = temp__4657__auto___20333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20250_20334__$1)){
var c__11155__auto___20335 = cljs.core.chunk_first.call(null,seq__20250_20334__$1);
var G__20336 = cljs.core.chunk_rest.call(null,seq__20250_20334__$1);
var G__20337 = c__11155__auto___20335;
var G__20338 = cljs.core.count.call(null,c__11155__auto___20335);
var G__20339 = (0);
seq__20250_20321 = G__20336;
chunk__20251_20322 = G__20337;
count__20252_20323 = G__20338;
i__20253_20324 = G__20339;
continue;
} else {
var vec__20257_20340 = cljs.core.first.call(null,seq__20250_20334__$1);
var n_20341 = cljs.core.nth.call(null,vec__20257_20340,(0),null);
var meth_20342 = cljs.core.nth.call(null,vec__20257_20340,(1),null);
var c_20343 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20342));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20342))){
cljs.compiler.emitln.call(null,mname_20261,".cljs$core$IFn$_invoke$arity$variadic = ",n_20341,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20261,".cljs$core$IFn$_invoke$arity$",c_20343," = ",n_20341,";");
}

var G__20344 = cljs.core.next.call(null,seq__20250_20334__$1);
var G__20345 = null;
var G__20346 = (0);
var G__20347 = (0);
seq__20250_20321 = G__20344;
chunk__20251_20322 = G__20345;
count__20252_20323 = G__20346;
i__20253_20324 = G__20347;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_20261,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__20348){
var map__20349 = p__20348;
var map__20349__$1 = ((((!((map__20349 == null)))?((((map__20349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20349):map__20349);
var statements = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__10324__auto__ = statements;
if(cljs.core.truth_(and__10324__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__10324__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__20351_20355 = cljs.core.seq.call(null,statements);
var chunk__20352_20356 = null;
var count__20353_20357 = (0);
var i__20354_20358 = (0);
while(true){
if((i__20354_20358 < count__20353_20357)){
var s_20359 = cljs.core._nth.call(null,chunk__20352_20356,i__20354_20358);
cljs.compiler.emitln.call(null,s_20359);

var G__20360 = seq__20351_20355;
var G__20361 = chunk__20352_20356;
var G__20362 = count__20353_20357;
var G__20363 = (i__20354_20358 + (1));
seq__20351_20355 = G__20360;
chunk__20352_20356 = G__20361;
count__20353_20357 = G__20362;
i__20354_20358 = G__20363;
continue;
} else {
var temp__4657__auto___20364 = cljs.core.seq.call(null,seq__20351_20355);
if(temp__4657__auto___20364){
var seq__20351_20365__$1 = temp__4657__auto___20364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20351_20365__$1)){
var c__11155__auto___20366 = cljs.core.chunk_first.call(null,seq__20351_20365__$1);
var G__20367 = cljs.core.chunk_rest.call(null,seq__20351_20365__$1);
var G__20368 = c__11155__auto___20366;
var G__20369 = cljs.core.count.call(null,c__11155__auto___20366);
var G__20370 = (0);
seq__20351_20355 = G__20367;
chunk__20352_20356 = G__20368;
count__20353_20357 = G__20369;
i__20354_20358 = G__20370;
continue;
} else {
var s_20371 = cljs.core.first.call(null,seq__20351_20365__$1);
cljs.compiler.emitln.call(null,s_20371);

var G__20372 = cljs.core.next.call(null,seq__20351_20365__$1);
var G__20373 = null;
var G__20374 = (0);
var G__20375 = (0);
seq__20351_20355 = G__20372;
chunk__20352_20356 = G__20373;
count__20353_20357 = G__20374;
i__20354_20358 = G__20375;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__10324__auto__ = statements;
if(cljs.core.truth_(and__10324__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__10324__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__20376){
var map__20377 = p__20376;
var map__20377__$1 = ((((!((map__20377 == null)))?((((map__20377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20377):map__20377);
var env = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__10336__auto__ = name;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("finally block cannot contain constant"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__20379,is_loop){
var map__20391 = p__20379;
var map__20391__$1 = ((((!((map__20391 == null)))?((((map__20391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20391):map__20391);
var bindings = cljs.core.get.call(null,map__20391__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20391__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_20393_20402 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_20393_20402,context,map__20391,map__20391__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_20393_20402,context,map__20391,map__20391__$1,bindings,expr,env))
,bindings):null));

try{var seq__20394_20403 = cljs.core.seq.call(null,bindings);
var chunk__20395_20404 = null;
var count__20396_20405 = (0);
var i__20397_20406 = (0);
while(true){
if((i__20397_20406 < count__20396_20405)){
var map__20398_20407 = cljs.core._nth.call(null,chunk__20395_20404,i__20397_20406);
var map__20398_20408__$1 = ((((!((map__20398_20407 == null)))?((((map__20398_20407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20398_20407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20398_20407):map__20398_20407);
var binding_20409 = map__20398_20408__$1;
var init_20410 = cljs.core.get.call(null,map__20398_20408__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20409);

cljs.compiler.emitln.call(null," = ",init_20410,";");

var G__20411 = seq__20394_20403;
var G__20412 = chunk__20395_20404;
var G__20413 = count__20396_20405;
var G__20414 = (i__20397_20406 + (1));
seq__20394_20403 = G__20411;
chunk__20395_20404 = G__20412;
count__20396_20405 = G__20413;
i__20397_20406 = G__20414;
continue;
} else {
var temp__4657__auto___20415 = cljs.core.seq.call(null,seq__20394_20403);
if(temp__4657__auto___20415){
var seq__20394_20416__$1 = temp__4657__auto___20415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20394_20416__$1)){
var c__11155__auto___20417 = cljs.core.chunk_first.call(null,seq__20394_20416__$1);
var G__20418 = cljs.core.chunk_rest.call(null,seq__20394_20416__$1);
var G__20419 = c__11155__auto___20417;
var G__20420 = cljs.core.count.call(null,c__11155__auto___20417);
var G__20421 = (0);
seq__20394_20403 = G__20418;
chunk__20395_20404 = G__20419;
count__20396_20405 = G__20420;
i__20397_20406 = G__20421;
continue;
} else {
var map__20400_20422 = cljs.core.first.call(null,seq__20394_20416__$1);
var map__20400_20423__$1 = ((((!((map__20400_20422 == null)))?((((map__20400_20422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20400_20422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20400_20422):map__20400_20422);
var binding_20424 = map__20400_20423__$1;
var init_20425 = cljs.core.get.call(null,map__20400_20423__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20424);

cljs.compiler.emitln.call(null," = ",init_20425,";");

var G__20426 = cljs.core.next.call(null,seq__20394_20416__$1);
var G__20427 = null;
var G__20428 = (0);
var G__20429 = (0);
seq__20394_20403 = G__20426;
chunk__20395_20404 = G__20427;
count__20396_20405 = G__20428;
i__20397_20406 = G__20429;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_20393_20402;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__20430){
var map__20431 = p__20430;
var map__20431__$1 = ((((!((map__20431 == null)))?((((map__20431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20431):map__20431);
var frame = cljs.core.get.call(null,map__20431__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__20431__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__20431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__11259__auto___20433 = cljs.core.count.call(null,exprs);
var i_20434 = (0);
while(true){
if((i_20434 < n__11259__auto___20433)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_20434)," = ",exprs.call(null,i_20434),";");

var G__20435 = (i_20434 + (1));
i_20434 = G__20435;
continue;
} else {
}
break;
}

var n__11259__auto___20436 = cljs.core.count.call(null,exprs);
var i_20437 = (0);
while(true){
if((i_20437 < n__11259__auto___20436)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_20437))," = ",temps.call(null,i_20437),";");

var G__20438 = (i_20437 + (1));
i_20437 = G__20438;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__20439){
var map__20440 = p__20439;
var map__20440__$1 = ((((!((map__20440 == null)))?((((map__20440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20440):map__20440);
var bindings = cljs.core.get.call(null,map__20440__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20440__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20440__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__20442_20450 = cljs.core.seq.call(null,bindings);
var chunk__20443_20451 = null;
var count__20444_20452 = (0);
var i__20445_20453 = (0);
while(true){
if((i__20445_20453 < count__20444_20452)){
var map__20446_20454 = cljs.core._nth.call(null,chunk__20443_20451,i__20445_20453);
var map__20446_20455__$1 = ((((!((map__20446_20454 == null)))?((((map__20446_20454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20446_20454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20446_20454):map__20446_20454);
var binding_20456 = map__20446_20455__$1;
var init_20457 = cljs.core.get.call(null,map__20446_20455__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20456)," = ",init_20457,";");

var G__20458 = seq__20442_20450;
var G__20459 = chunk__20443_20451;
var G__20460 = count__20444_20452;
var G__20461 = (i__20445_20453 + (1));
seq__20442_20450 = G__20458;
chunk__20443_20451 = G__20459;
count__20444_20452 = G__20460;
i__20445_20453 = G__20461;
continue;
} else {
var temp__4657__auto___20462 = cljs.core.seq.call(null,seq__20442_20450);
if(temp__4657__auto___20462){
var seq__20442_20463__$1 = temp__4657__auto___20462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20442_20463__$1)){
var c__11155__auto___20464 = cljs.core.chunk_first.call(null,seq__20442_20463__$1);
var G__20465 = cljs.core.chunk_rest.call(null,seq__20442_20463__$1);
var G__20466 = c__11155__auto___20464;
var G__20467 = cljs.core.count.call(null,c__11155__auto___20464);
var G__20468 = (0);
seq__20442_20450 = G__20465;
chunk__20443_20451 = G__20466;
count__20444_20452 = G__20467;
i__20445_20453 = G__20468;
continue;
} else {
var map__20448_20469 = cljs.core.first.call(null,seq__20442_20463__$1);
var map__20448_20470__$1 = ((((!((map__20448_20469 == null)))?((((map__20448_20469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20448_20469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20448_20469):map__20448_20469);
var binding_20471 = map__20448_20470__$1;
var init_20472 = cljs.core.get.call(null,map__20448_20470__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20471)," = ",init_20472,";");

var G__20473 = cljs.core.next.call(null,seq__20442_20463__$1);
var G__20474 = null;
var G__20475 = (0);
var G__20476 = (0);
seq__20442_20450 = G__20473;
chunk__20443_20451 = G__20474;
count__20444_20452 = G__20475;
i__20445_20453 = G__20476;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__20479){
var map__20480 = p__20479;
var map__20480__$1 = ((((!((map__20480 == null)))?((((map__20480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20480):map__20480);
var expr = map__20480__$1;
var f = cljs.core.get.call(null,map__20480__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__20480__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20480__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__10324__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__10324__auto__){
var and__10324__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__10324__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__10324__auto__ = protocol;
if(cljs.core.truth_(and__10324__auto__)){
var and__10324__auto____$1 = tag;
if(cljs.core.truth_(and__10324__auto____$1)){
var or__10336__auto__ = (function (){var and__10324__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__10324__auto____$2){
var and__10324__auto____$3 = protocol;
if(cljs.core.truth_(and__10324__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__10324__auto____$3;
}
} else {
return and__10324__auto____$2;
}
})();
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
var and__10324__auto____$2 = (function (){var or__10336__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__10336__auto____$1){
return or__10336__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__10324__auto____$2)){
var or__10336__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__10336__auto____$1){
return or__10336__auto____$1;
} else {
var and__10324__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__10324__auto____$3){
var and__10324__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__10324__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__10324__auto____$4;
}
} else {
return and__10324__auto____$3;
}
}
} else {
return and__10324__auto____$2;
}
}
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__10336__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__10336__auto__){
return or__10336__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__20482 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__10324__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__10324__auto__)){
return (arity > mfa);
} else {
return and__10324__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env){
return (function (p1__20477_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20477_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env){
return (function (p1__20478_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20478_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20480,map__20480__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__20482,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__20482,(1),null);
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_20485 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_20485,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_20486 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_20486,args)),(((mfa_20486 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_20486,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__10336__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
var or__10336__auto____$1 = js_QMARK_;
if(or__10336__auto____$1){
return or__10336__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_20487 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_20487," ? ",f__$1,fprop_20487,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__20488){
var map__20489 = p__20488;
var map__20489__$1 = ((((!((map__20489 == null)))?((((map__20489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20489):map__20489);
var ctor = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__20491){
var map__20492 = p__20491;
var map__20492__$1 = ((((!((map__20492 == null)))?((((map__20492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20492):map__20492);
var target = cljs.core.get.call(null,map__20492__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__20492__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__20492__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__20506_20518 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps)));
var chunk__20507_20519 = null;
var count__20508_20520 = (0);
var i__20509_20521 = (0);
while(true){
if((i__20509_20521 < count__20508_20520)){
var lib_20522 = cljs.core._nth.call(null,chunk__20507_20519,i__20509_20521);
if(cljs.core.truth_((function (){var and__10324__auto__ = cljs.analyzer.foreign_dep_QMARK_.call(null,lib_20522);
if(and__10324__auto__){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__4657__auto__)){
var map__20512 = temp__4657__auto__;
var map__20512__$1 = ((((!((map__20512 == null)))?((((map__20512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20512):map__20512);
var optimizations = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__10324__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__10336__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20522),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20522),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__10336__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20522),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20522),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20522),"');");

}
}
}

var G__20523 = seq__20506_20518;
var G__20524 = chunk__20507_20519;
var G__20525 = count__20508_20520;
var G__20526 = (i__20509_20521 + (1));
seq__20506_20518 = G__20523;
chunk__20507_20519 = G__20524;
count__20508_20520 = G__20525;
i__20509_20521 = G__20526;
continue;
} else {
var temp__4657__auto___20527 = cljs.core.seq.call(null,seq__20506_20518);
if(temp__4657__auto___20527){
var seq__20506_20528__$1 = temp__4657__auto___20527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20506_20528__$1)){
var c__11155__auto___20529 = cljs.core.chunk_first.call(null,seq__20506_20528__$1);
var G__20530 = cljs.core.chunk_rest.call(null,seq__20506_20528__$1);
var G__20531 = c__11155__auto___20529;
var G__20532 = cljs.core.count.call(null,c__11155__auto___20529);
var G__20533 = (0);
seq__20506_20518 = G__20530;
chunk__20507_20519 = G__20531;
count__20508_20520 = G__20532;
i__20509_20521 = G__20533;
continue;
} else {
var lib_20534 = cljs.core.first.call(null,seq__20506_20528__$1);
if(cljs.core.truth_((function (){var and__10324__auto__ = cljs.analyzer.foreign_dep_QMARK_.call(null,lib_20534);
if(and__10324__auto__){
var temp__4657__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__4657__auto____$1)){
var map__20516 = temp__4657__auto____$1;
var map__20516__$1 = ((((!((map__20516 == null)))?((((map__20516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20516):map__20516);
var optimizations = cljs.core.get.call(null,map__20516__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__10324__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__10336__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20534),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20534),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__10336__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20534),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20534),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20534),"');");

}
}
}

var G__20535 = cljs.core.next.call(null,seq__20506_20528__$1);
var G__20536 = null;
var G__20537 = (0);
var G__20538 = (0);
seq__20506_20518 = G__20535;
chunk__20507_20519 = G__20536;
count__20508_20520 = G__20537;
i__20509_20521 = G__20538;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__20539){
var map__20540 = p__20539;
var map__20540__$1 = ((((!((map__20540 == null)))?((((map__20540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20540):map__20540);
var name = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__20542){
var map__20543 = p__20542;
var map__20543__$1 = ((((!((map__20543 == null)))?((((map__20543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20543):map__20543);
var name = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__20545){
var map__20546 = p__20545;
var map__20546__$1 = ((((!((map__20546 == null)))?((((map__20546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20546):map__20546);
var t = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20548_20566 = cljs.core.seq.call(null,protocols);
var chunk__20549_20567 = null;
var count__20550_20568 = (0);
var i__20551_20569 = (0);
while(true){
if((i__20551_20569 < count__20550_20568)){
var protocol_20570 = cljs.core._nth.call(null,chunk__20549_20567,i__20551_20569);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20570)].join('')),"}");

var G__20571 = seq__20548_20566;
var G__20572 = chunk__20549_20567;
var G__20573 = count__20550_20568;
var G__20574 = (i__20551_20569 + (1));
seq__20548_20566 = G__20571;
chunk__20549_20567 = G__20572;
count__20550_20568 = G__20573;
i__20551_20569 = G__20574;
continue;
} else {
var temp__4657__auto___20575 = cljs.core.seq.call(null,seq__20548_20566);
if(temp__4657__auto___20575){
var seq__20548_20576__$1 = temp__4657__auto___20575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20548_20576__$1)){
var c__11155__auto___20577 = cljs.core.chunk_first.call(null,seq__20548_20576__$1);
var G__20578 = cljs.core.chunk_rest.call(null,seq__20548_20576__$1);
var G__20579 = c__11155__auto___20577;
var G__20580 = cljs.core.count.call(null,c__11155__auto___20577);
var G__20581 = (0);
seq__20548_20566 = G__20578;
chunk__20549_20567 = G__20579;
count__20550_20568 = G__20580;
i__20551_20569 = G__20581;
continue;
} else {
var protocol_20582 = cljs.core.first.call(null,seq__20548_20576__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20582)].join('')),"}");

var G__20583 = cljs.core.next.call(null,seq__20548_20576__$1);
var G__20584 = null;
var G__20585 = (0);
var G__20586 = (0);
seq__20548_20566 = G__20583;
chunk__20549_20567 = G__20584;
count__20550_20568 = G__20585;
i__20551_20569 = G__20586;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20552_20587 = cljs.core.seq.call(null,fields__$1);
var chunk__20553_20588 = null;
var count__20554_20589 = (0);
var i__20555_20590 = (0);
while(true){
if((i__20555_20590 < count__20554_20589)){
var fld_20591 = cljs.core._nth.call(null,chunk__20553_20588,i__20555_20590);
cljs.compiler.emitln.call(null,"this.",fld_20591," = ",fld_20591,";");

var G__20592 = seq__20552_20587;
var G__20593 = chunk__20553_20588;
var G__20594 = count__20554_20589;
var G__20595 = (i__20555_20590 + (1));
seq__20552_20587 = G__20592;
chunk__20553_20588 = G__20593;
count__20554_20589 = G__20594;
i__20555_20590 = G__20595;
continue;
} else {
var temp__4657__auto___20596 = cljs.core.seq.call(null,seq__20552_20587);
if(temp__4657__auto___20596){
var seq__20552_20597__$1 = temp__4657__auto___20596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20552_20597__$1)){
var c__11155__auto___20598 = cljs.core.chunk_first.call(null,seq__20552_20597__$1);
var G__20599 = cljs.core.chunk_rest.call(null,seq__20552_20597__$1);
var G__20600 = c__11155__auto___20598;
var G__20601 = cljs.core.count.call(null,c__11155__auto___20598);
var G__20602 = (0);
seq__20552_20587 = G__20599;
chunk__20553_20588 = G__20600;
count__20554_20589 = G__20601;
i__20555_20590 = G__20602;
continue;
} else {
var fld_20603 = cljs.core.first.call(null,seq__20552_20597__$1);
cljs.compiler.emitln.call(null,"this.",fld_20603," = ",fld_20603,";");

var G__20604 = cljs.core.next.call(null,seq__20552_20597__$1);
var G__20605 = null;
var G__20606 = (0);
var G__20607 = (0);
seq__20552_20587 = G__20604;
chunk__20553_20588 = G__20605;
count__20554_20589 = G__20606;
i__20555_20590 = G__20607;
continue;
}
} else {
}
}
break;
}

var seq__20556_20608 = cljs.core.seq.call(null,pmasks);
var chunk__20557_20609 = null;
var count__20558_20610 = (0);
var i__20559_20611 = (0);
while(true){
if((i__20559_20611 < count__20558_20610)){
var vec__20560_20612 = cljs.core._nth.call(null,chunk__20557_20609,i__20559_20611);
var pno_20613 = cljs.core.nth.call(null,vec__20560_20612,(0),null);
var pmask_20614 = cljs.core.nth.call(null,vec__20560_20612,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20613,"$ = ",pmask_20614,";");

var G__20615 = seq__20556_20608;
var G__20616 = chunk__20557_20609;
var G__20617 = count__20558_20610;
var G__20618 = (i__20559_20611 + (1));
seq__20556_20608 = G__20615;
chunk__20557_20609 = G__20616;
count__20558_20610 = G__20617;
i__20559_20611 = G__20618;
continue;
} else {
var temp__4657__auto___20619 = cljs.core.seq.call(null,seq__20556_20608);
if(temp__4657__auto___20619){
var seq__20556_20620__$1 = temp__4657__auto___20619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20556_20620__$1)){
var c__11155__auto___20621 = cljs.core.chunk_first.call(null,seq__20556_20620__$1);
var G__20622 = cljs.core.chunk_rest.call(null,seq__20556_20620__$1);
var G__20623 = c__11155__auto___20621;
var G__20624 = cljs.core.count.call(null,c__11155__auto___20621);
var G__20625 = (0);
seq__20556_20608 = G__20622;
chunk__20557_20609 = G__20623;
count__20558_20610 = G__20624;
i__20559_20611 = G__20625;
continue;
} else {
var vec__20563_20626 = cljs.core.first.call(null,seq__20556_20620__$1);
var pno_20627 = cljs.core.nth.call(null,vec__20563_20626,(0),null);
var pmask_20628 = cljs.core.nth.call(null,vec__20563_20626,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20627,"$ = ",pmask_20628,";");

var G__20629 = cljs.core.next.call(null,seq__20556_20620__$1);
var G__20630 = null;
var G__20631 = (0);
var G__20632 = (0);
seq__20556_20608 = G__20629;
chunk__20557_20609 = G__20630;
count__20558_20610 = G__20631;
i__20559_20611 = G__20632;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__20633){
var map__20634 = p__20633;
var map__20634__$1 = ((((!((map__20634 == null)))?((((map__20634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20634):map__20634);
var t = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20636_20654 = cljs.core.seq.call(null,protocols);
var chunk__20637_20655 = null;
var count__20638_20656 = (0);
var i__20639_20657 = (0);
while(true){
if((i__20639_20657 < count__20638_20656)){
var protocol_20658 = cljs.core._nth.call(null,chunk__20637_20655,i__20639_20657);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20658)].join('')),"}");

var G__20659 = seq__20636_20654;
var G__20660 = chunk__20637_20655;
var G__20661 = count__20638_20656;
var G__20662 = (i__20639_20657 + (1));
seq__20636_20654 = G__20659;
chunk__20637_20655 = G__20660;
count__20638_20656 = G__20661;
i__20639_20657 = G__20662;
continue;
} else {
var temp__4657__auto___20663 = cljs.core.seq.call(null,seq__20636_20654);
if(temp__4657__auto___20663){
var seq__20636_20664__$1 = temp__4657__auto___20663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20636_20664__$1)){
var c__11155__auto___20665 = cljs.core.chunk_first.call(null,seq__20636_20664__$1);
var G__20666 = cljs.core.chunk_rest.call(null,seq__20636_20664__$1);
var G__20667 = c__11155__auto___20665;
var G__20668 = cljs.core.count.call(null,c__11155__auto___20665);
var G__20669 = (0);
seq__20636_20654 = G__20666;
chunk__20637_20655 = G__20667;
count__20638_20656 = G__20668;
i__20639_20657 = G__20669;
continue;
} else {
var protocol_20670 = cljs.core.first.call(null,seq__20636_20664__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20670)].join('')),"}");

var G__20671 = cljs.core.next.call(null,seq__20636_20664__$1);
var G__20672 = null;
var G__20673 = (0);
var G__20674 = (0);
seq__20636_20654 = G__20671;
chunk__20637_20655 = G__20672;
count__20638_20656 = G__20673;
i__20639_20657 = G__20674;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20640_20675 = cljs.core.seq.call(null,fields__$1);
var chunk__20641_20676 = null;
var count__20642_20677 = (0);
var i__20643_20678 = (0);
while(true){
if((i__20643_20678 < count__20642_20677)){
var fld_20679 = cljs.core._nth.call(null,chunk__20641_20676,i__20643_20678);
cljs.compiler.emitln.call(null,"this.",fld_20679," = ",fld_20679,";");

var G__20680 = seq__20640_20675;
var G__20681 = chunk__20641_20676;
var G__20682 = count__20642_20677;
var G__20683 = (i__20643_20678 + (1));
seq__20640_20675 = G__20680;
chunk__20641_20676 = G__20681;
count__20642_20677 = G__20682;
i__20643_20678 = G__20683;
continue;
} else {
var temp__4657__auto___20684 = cljs.core.seq.call(null,seq__20640_20675);
if(temp__4657__auto___20684){
var seq__20640_20685__$1 = temp__4657__auto___20684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20640_20685__$1)){
var c__11155__auto___20686 = cljs.core.chunk_first.call(null,seq__20640_20685__$1);
var G__20687 = cljs.core.chunk_rest.call(null,seq__20640_20685__$1);
var G__20688 = c__11155__auto___20686;
var G__20689 = cljs.core.count.call(null,c__11155__auto___20686);
var G__20690 = (0);
seq__20640_20675 = G__20687;
chunk__20641_20676 = G__20688;
count__20642_20677 = G__20689;
i__20643_20678 = G__20690;
continue;
} else {
var fld_20691 = cljs.core.first.call(null,seq__20640_20685__$1);
cljs.compiler.emitln.call(null,"this.",fld_20691," = ",fld_20691,";");

var G__20692 = cljs.core.next.call(null,seq__20640_20685__$1);
var G__20693 = null;
var G__20694 = (0);
var G__20695 = (0);
seq__20640_20675 = G__20692;
chunk__20641_20676 = G__20693;
count__20642_20677 = G__20694;
i__20643_20678 = G__20695;
continue;
}
} else {
}
}
break;
}

var seq__20644_20696 = cljs.core.seq.call(null,pmasks);
var chunk__20645_20697 = null;
var count__20646_20698 = (0);
var i__20647_20699 = (0);
while(true){
if((i__20647_20699 < count__20646_20698)){
var vec__20648_20700 = cljs.core._nth.call(null,chunk__20645_20697,i__20647_20699);
var pno_20701 = cljs.core.nth.call(null,vec__20648_20700,(0),null);
var pmask_20702 = cljs.core.nth.call(null,vec__20648_20700,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20701,"$ = ",pmask_20702,";");

var G__20703 = seq__20644_20696;
var G__20704 = chunk__20645_20697;
var G__20705 = count__20646_20698;
var G__20706 = (i__20647_20699 + (1));
seq__20644_20696 = G__20703;
chunk__20645_20697 = G__20704;
count__20646_20698 = G__20705;
i__20647_20699 = G__20706;
continue;
} else {
var temp__4657__auto___20707 = cljs.core.seq.call(null,seq__20644_20696);
if(temp__4657__auto___20707){
var seq__20644_20708__$1 = temp__4657__auto___20707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20644_20708__$1)){
var c__11155__auto___20709 = cljs.core.chunk_first.call(null,seq__20644_20708__$1);
var G__20710 = cljs.core.chunk_rest.call(null,seq__20644_20708__$1);
var G__20711 = c__11155__auto___20709;
var G__20712 = cljs.core.count.call(null,c__11155__auto___20709);
var G__20713 = (0);
seq__20644_20696 = G__20710;
chunk__20645_20697 = G__20711;
count__20646_20698 = G__20712;
i__20647_20699 = G__20713;
continue;
} else {
var vec__20651_20714 = cljs.core.first.call(null,seq__20644_20708__$1);
var pno_20715 = cljs.core.nth.call(null,vec__20651_20714,(0),null);
var pmask_20716 = cljs.core.nth.call(null,vec__20651_20714,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20715,"$ = ",pmask_20716,";");

var G__20717 = cljs.core.next.call(null,seq__20644_20708__$1);
var G__20718 = null;
var G__20719 = (0);
var G__20720 = (0);
seq__20644_20696 = G__20717;
chunk__20645_20697 = G__20718;
count__20646_20698 = G__20719;
i__20647_20699 = G__20720;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__20721){
var map__20722 = p__20721;
var map__20722__$1 = ((((!((map__20722 == null)))?((((map__20722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20722):map__20722);
var target = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__20724){
var map__20725 = p__20724;
var map__20725__$1 = ((((!((map__20725 == null)))?((((map__20725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20725):map__20725);
var op = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__10324__auto__ = code;
if(cljs.core.truth_(and__10324__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__10324__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__19593__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19593__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__20740 = cljs.core.seq.call(null,table);
var chunk__20741 = null;
var count__20742 = (0);
var i__20743 = (0);
while(true){
if((i__20743 < count__20742)){
var vec__20744 = cljs.core._nth.call(null,chunk__20741,i__20743);
var sym = cljs.core.nth.call(null,vec__20744,(0),null);
var value = cljs.core.nth.call(null,vec__20744,(1),null);
var ns_20750 = cljs.core.namespace.call(null,sym);
var name_20751 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__20752 = seq__20740;
var G__20753 = chunk__20741;
var G__20754 = count__20742;
var G__20755 = (i__20743 + (1));
seq__20740 = G__20752;
chunk__20741 = G__20753;
count__20742 = G__20754;
i__20743 = G__20755;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20740);
if(temp__4657__auto__){
var seq__20740__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20740__$1)){
var c__11155__auto__ = cljs.core.chunk_first.call(null,seq__20740__$1);
var G__20756 = cljs.core.chunk_rest.call(null,seq__20740__$1);
var G__20757 = c__11155__auto__;
var G__20758 = cljs.core.count.call(null,c__11155__auto__);
var G__20759 = (0);
seq__20740 = G__20756;
chunk__20741 = G__20757;
count__20742 = G__20758;
i__20743 = G__20759;
continue;
} else {
var vec__20747 = cljs.core.first.call(null,seq__20740__$1);
var sym = cljs.core.nth.call(null,vec__20747,(0),null);
var value = cljs.core.nth.call(null,vec__20747,(1),null);
var ns_20760 = cljs.core.namespace.call(null,sym);
var name_20761 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__20762 = cljs.core.next.call(null,seq__20740__$1);
var G__20763 = null;
var G__20764 = (0);
var G__20765 = (0);
seq__20740 = G__20762;
chunk__20741 = G__20763;
count__20742 = G__20764;
i__20743 = G__20765;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var args20766 = [];
var len__11449__auto___20772 = arguments.length;
var i__11450__auto___20773 = (0);
while(true){
if((i__11450__auto___20773 < len__11449__auto___20772)){
args20766.push((arguments[i__11450__auto___20773]));

var G__20774 = (i__11450__auto___20773 + (1));
i__11450__auto___20773 = G__20774;
continue;
} else {
}
break;
}

var G__20768 = args20766.length;
switch (G__20768) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20766.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_20776 = cljs.core.first.call(null,ks);
var vec__20769_20777 = cljs.core.conj.call(null,prefix,k_20776);
var top_20778 = cljs.core.nth.call(null,vec__20769_20777,(0),null);
var prefix_SINGLEQUOTE__20779 = vec__20769_20777;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_20776)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__20779) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_20778)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_20778)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__20779)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_20778);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__20779)),";");
}
} else {
}

var m_20780 = cljs.core.get.call(null,externs,k_20776);
if(cljs.core.empty_QMARK_.call(null,m_20780)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__20779,m_20780,top_level,known_externs);
}

var G__20781 = cljs.core.next.call(null,ks);
ks = G__20781;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map