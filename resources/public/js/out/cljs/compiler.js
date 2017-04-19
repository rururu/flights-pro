// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__13064 = s;
var map__13064__$1 = ((((!((map__13064 == null)))?((((map__13064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13064):map__13064);
var name = cljs.core.get.call(null,map__13064__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13064__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__13067 = info;
var map__13068 = G__13067;
var map__13068__$1 = ((((!((map__13068 == null)))?((((map__13068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13068):map__13068);
var shadow = cljs.core.get.call(null,map__13068__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__13067__$1 = G__13067;
while(true){
var d__$2 = d__$1;
var map__13070 = G__13067__$1;
var map__13070__$1 = ((((!((map__13070 == null)))?((((map__13070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13070):map__13070);
var shadow__$1 = cljs.core.get.call(null,map__13070__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13072 = (d__$2 + (1));
var G__13073 = shadow__$1;
d__$1 = G__13072;
G__13067__$1 = G__13073;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13074){
var map__13079 = p__13074;
var map__13079__$1 = ((((!((map__13079 == null)))?((((map__13079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13079):map__13079);
var name_var = map__13079__$1;
var name = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__13081 = info;
var map__13081__$1 = ((((!((map__13081 == null)))?((((map__13081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13081):map__13081);
var ns = cljs.core.get.call(null,map__13081__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__13081__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args13083 = [];
var len__10353__auto___13086 = arguments.length;
var i__10354__auto___13087 = (0);
while(true){
if((i__10354__auto___13087 < len__10353__auto___13086)){
args13083.push((arguments[i__10354__auto___13087]));

var G__13088 = (i__10354__auto___13087 + (1));
i__10354__auto___13087 = G__13088;
continue;
} else {
}
break;
}

var G__13085 = args13083.length;
switch (G__13085) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13083.length)].join('')));

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
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
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
var G__13091 = cp;
switch (G__13091) {
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
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__13097_13101 = cljs.core.seq.call(null,s);
var chunk__13098_13102 = null;
var count__13099_13103 = (0);
var i__13100_13104 = (0);
while(true){
if((i__13100_13104 < count__13099_13103)){
var c_13105 = cljs.core._nth.call(null,chunk__13098_13102,i__13100_13104);
sb.append(cljs.compiler.escape_char.call(null,c_13105));

var G__13106 = seq__13097_13101;
var G__13107 = chunk__13098_13102;
var G__13108 = count__13099_13103;
var G__13109 = (i__13100_13104 + (1));
seq__13097_13101 = G__13106;
chunk__13098_13102 = G__13107;
count__13099_13103 = G__13108;
i__13100_13104 = G__13109;
continue;
} else {
var temp__4657__auto___13110 = cljs.core.seq.call(null,seq__13097_13101);
if(temp__4657__auto___13110){
var seq__13097_13111__$1 = temp__4657__auto___13110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13097_13111__$1)){
var c__10059__auto___13112 = cljs.core.chunk_first.call(null,seq__13097_13111__$1);
var G__13113 = cljs.core.chunk_rest.call(null,seq__13097_13111__$1);
var G__13114 = c__10059__auto___13112;
var G__13115 = cljs.core.count.call(null,c__10059__auto___13112);
var G__13116 = (0);
seq__13097_13101 = G__13113;
chunk__13098_13102 = G__13114;
count__13099_13103 = G__13115;
i__13100_13104 = G__13116;
continue;
} else {
var c_13117 = cljs.core.first.call(null,seq__13097_13111__$1);
sb.append(cljs.compiler.escape_char.call(null,c_13117));

var G__13118 = cljs.core.next.call(null,seq__13097_13111__$1);
var G__13119 = null;
var G__13120 = (0);
var G__13121 = (0);
seq__13097_13101 = G__13118;
chunk__13098_13102 = G__13119;
count__13099_13103 = G__13120;
i__13100_13104 = G__13121;
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
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__10173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10177__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10177__auto__,method_table__10173__auto__,prefer_table__10174__auto__,method_cache__10175__auto__,cached_hierarchy__10176__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__11166__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__11166__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13127_13132 = ast;
var map__13127_13133__$1 = ((((!((map__13127_13132 == null)))?((((map__13127_13132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13127_13132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13127_13132):map__13127_13132);
var env_13134 = cljs.core.get.call(null,map__13127_13133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13134))){
var map__13129_13135 = env_13134;
var map__13129_13136__$1 = ((((!((map__13129_13135 == null)))?((((map__13129_13135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13129_13135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13129_13135):map__13129_13135);
var line_13137 = cljs.core.get.call(null,map__13129_13136__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13138 = cljs.core.get.call(null,map__13129_13136__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__13129_13135,map__13129_13136__$1,line_13137,column_13138,map__13127_13132,map__13127_13133__$1,env_13134,val__11166__auto__){
return (function (m){
var minfo = (function (){var G__13131 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__13131,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__13131;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13137 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__13129_13135,map__13129_13136__$1,line_13137,column_13138,map__13127_13132,map__13127_13133__$1,env_13134,val__11166__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13138)?(column_13138 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__13129_13135,map__13129_13136__$1,line_13137,column_13138,map__13127_13132,map__13127_13133__$1,env_13134,val__11166__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__13129_13135,map__13129_13136__$1,line_13137,column_13138,map__13127_13132,map__13127_13133__$1,env_13134,val__11166__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13129_13135,map__13129_13136__$1,line_13137,column_13138,map__13127_13132,map__13127_13133__$1,env_13134,val__11166__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__13129_13135,map__13129_13136__$1,line_13137,column_13138,map__13127_13132,map__13127_13133__$1,env_13134,val__11166__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__11166__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10360__auto__ = [];
var len__10353__auto___13145 = arguments.length;
var i__10354__auto___13146 = (0);
while(true){
if((i__10354__auto___13146 < len__10353__auto___13145)){
args__10360__auto__.push((arguments[i__10354__auto___13146]));

var G__13147 = (i__10354__auto___13146 + (1));
i__10354__auto___13146 = G__13147;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((0) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10361__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__13141_13148 = cljs.core.seq.call(null,xs);
var chunk__13142_13149 = null;
var count__13143_13150 = (0);
var i__13144_13151 = (0);
while(true){
if((i__13144_13151 < count__13143_13150)){
var x_13152 = cljs.core._nth.call(null,chunk__13142_13149,i__13144_13151);
if((x_13152 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13152)){
cljs.compiler.emit.call(null,x_13152);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13152)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13152);
} else {
if(goog.isFunction(x_13152)){
x_13152.call(null);
} else {
var s_13153 = cljs.core.print_str.call(null,x_13152);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13141_13148,chunk__13142_13149,count__13143_13150,i__13144_13151,s_13153,x_13152){
return (function (p1__13139_SHARP_){
return (p1__13139_SHARP_ + cljs.core.count.call(null,s_13153));
});})(seq__13141_13148,chunk__13142_13149,count__13143_13150,i__13144_13151,s_13153,x_13152))
);
}

cljs.core.print.call(null,s_13153);

}
}
}
}

var G__13154 = seq__13141_13148;
var G__13155 = chunk__13142_13149;
var G__13156 = count__13143_13150;
var G__13157 = (i__13144_13151 + (1));
seq__13141_13148 = G__13154;
chunk__13142_13149 = G__13155;
count__13143_13150 = G__13156;
i__13144_13151 = G__13157;
continue;
} else {
var temp__4657__auto___13158 = cljs.core.seq.call(null,seq__13141_13148);
if(temp__4657__auto___13158){
var seq__13141_13159__$1 = temp__4657__auto___13158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13141_13159__$1)){
var c__10059__auto___13160 = cljs.core.chunk_first.call(null,seq__13141_13159__$1);
var G__13161 = cljs.core.chunk_rest.call(null,seq__13141_13159__$1);
var G__13162 = c__10059__auto___13160;
var G__13163 = cljs.core.count.call(null,c__10059__auto___13160);
var G__13164 = (0);
seq__13141_13148 = G__13161;
chunk__13142_13149 = G__13162;
count__13143_13150 = G__13163;
i__13144_13151 = G__13164;
continue;
} else {
var x_13165 = cljs.core.first.call(null,seq__13141_13159__$1);
if((x_13165 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13165)){
cljs.compiler.emit.call(null,x_13165);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13165)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13165);
} else {
if(goog.isFunction(x_13165)){
x_13165.call(null);
} else {
var s_13166 = cljs.core.print_str.call(null,x_13165);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13141_13148,chunk__13142_13149,count__13143_13150,i__13144_13151,s_13166,x_13165,seq__13141_13159__$1,temp__4657__auto___13158){
return (function (p1__13139_SHARP_){
return (p1__13139_SHARP_ + cljs.core.count.call(null,s_13166));
});})(seq__13141_13148,chunk__13142_13149,count__13143_13150,i__13144_13151,s_13166,x_13165,seq__13141_13159__$1,temp__4657__auto___13158))
);
}

cljs.core.print.call(null,s_13166);

}
}
}
}

var G__13167 = cljs.core.next.call(null,seq__13141_13159__$1);
var G__13168 = null;
var G__13169 = (0);
var G__13170 = (0);
seq__13141_13148 = G__13167;
chunk__13142_13149 = G__13168;
count__13143_13150 = G__13169;
i__13144_13151 = G__13170;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq13140){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13140));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10360__auto__ = [];
var len__10353__auto___13175 = arguments.length;
var i__10354__auto___13176 = (0);
while(true){
if((i__10354__auto___13176 < len__10353__auto___13175)){
args__10360__auto__.push((arguments[i__10354__auto___13176]));

var G__13177 = (i__10354__auto___13176 + (1));
i__10354__auto___13176 = G__13177;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((0) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10361__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__13172){
var map__13173 = p__13172;
var map__13173__$1 = ((((!((map__13173 == null)))?((((map__13173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13173):map__13173);
var m = map__13173__$1;
var gen_line = cljs.core.get.call(null,map__13173__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13171){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13171));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__10234__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13180_13182 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13181_13183 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13180_13182,_STAR_print_fn_STAR_13181_13183,sb__10234__auto__){
return (function (x__10235__auto__){
return sb__10234__auto__.append(x__10235__auto__);
});})(_STAR_print_newline_STAR_13180_13182,_STAR_print_fn_STAR_13181_13183,sb__10234__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13181_13183;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13180_13182;
}
return [cljs.core.str(sb__10234__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__10173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10177__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10177__auto__,method_table__10173__auto__,prefer_table__10174__auto__,method_cache__10175__auto__,cached_hierarchy__10176__auto__));
})();
}
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
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__13184 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__13184,(0),null);
var flags = cljs.core.nth.call(null,vec__13184,(1),null);
var pattern = cljs.core.nth.call(null,vec__13184,(2),null);
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

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__13188){
var map__13189 = p__13188;
var map__13189__$1 = ((((!((map__13189 == null)))?((((map__13189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13189):map__13189);
var arg = map__13189__$1;
var info = cljs.core.get.call(null,map__13189__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__13189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__13189__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__9245__auto__ = js_module_name;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__13191 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__13191);
} else {
return G__13191;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__13192){
var map__13193 = p__13192;
var map__13193__$1 = ((((!((map__13193 == null)))?((((map__13193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13193):map__13193);
var arg = map__13193__$1;
var env = cljs.core.get.call(null,map__13193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__13193__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__13193__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__13193__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__13195 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__13195__$1 = ((((!((map__13195 == null)))?((((map__13195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13195):map__13195);
var name = cljs.core.get.call(null,map__13195__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__13197){
var map__13198 = p__13197;
var map__13198__$1 = ((((!((map__13198 == null)))?((((map__13198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13198):map__13198);
var expr = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__13200_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13200_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__13201){
var map__13202 = p__13201;
var map__13202__$1 = ((((!((map__13202 == null)))?((((map__13202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13202):map__13202);
var env = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
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
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__13204){
var map__13205 = p__13204;
var map__13205__$1 = ((((!((map__13205 == null)))?((((map__13205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13205):map__13205);
var items = cljs.core.get.call(null,map__13205__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13205__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__13207){
var map__13208 = p__13207;
var map__13208__$1 = ((((!((map__13208 == null)))?((((map__13208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13208):map__13208);
var items = cljs.core.get.call(null,map__13208__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13208__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_13210 = cljs.core.count.call(null,items);
if((cnt_13210 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_13210,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__13211_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13211_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__13212){
var map__13213 = p__13212;
var map__13213__$1 = ((((!((map__13213 == null)))?((((map__13213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13213):map__13213);
var items = cljs.core.get.call(null,map__13213__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__13215){
var map__13216 = p__13215;
var map__13216__$1 = ((((!((map__13216 == null)))?((((map__13216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13216):map__13216);
var items = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___13234 = cljs.core.seq.call(null,items);
if(temp__4657__auto___13234){
var items_13235__$1 = temp__4657__auto___13234;
var vec__13218_13236 = items_13235__$1;
var seq__13219_13237 = cljs.core.seq.call(null,vec__13218_13236);
var first__13220_13238 = cljs.core.first.call(null,seq__13219_13237);
var seq__13219_13239__$1 = cljs.core.next.call(null,seq__13219_13237);
var vec__13221_13240 = first__13220_13238;
var k_13241 = cljs.core.nth.call(null,vec__13221_13240,(0),null);
var v_13242 = cljs.core.nth.call(null,vec__13221_13240,(1),null);
var r_13243 = seq__13219_13239__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_13241),"\": ",v_13242);

var seq__13224_13244 = cljs.core.seq.call(null,r_13243);
var chunk__13225_13245 = null;
var count__13226_13246 = (0);
var i__13227_13247 = (0);
while(true){
if((i__13227_13247 < count__13226_13246)){
var vec__13228_13248 = cljs.core._nth.call(null,chunk__13225_13245,i__13227_13247);
var k_13249__$1 = cljs.core.nth.call(null,vec__13228_13248,(0),null);
var v_13250__$1 = cljs.core.nth.call(null,vec__13228_13248,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13249__$1),"\": ",v_13250__$1);

var G__13251 = seq__13224_13244;
var G__13252 = chunk__13225_13245;
var G__13253 = count__13226_13246;
var G__13254 = (i__13227_13247 + (1));
seq__13224_13244 = G__13251;
chunk__13225_13245 = G__13252;
count__13226_13246 = G__13253;
i__13227_13247 = G__13254;
continue;
} else {
var temp__4657__auto___13255__$1 = cljs.core.seq.call(null,seq__13224_13244);
if(temp__4657__auto___13255__$1){
var seq__13224_13256__$1 = temp__4657__auto___13255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13224_13256__$1)){
var c__10059__auto___13257 = cljs.core.chunk_first.call(null,seq__13224_13256__$1);
var G__13258 = cljs.core.chunk_rest.call(null,seq__13224_13256__$1);
var G__13259 = c__10059__auto___13257;
var G__13260 = cljs.core.count.call(null,c__10059__auto___13257);
var G__13261 = (0);
seq__13224_13244 = G__13258;
chunk__13225_13245 = G__13259;
count__13226_13246 = G__13260;
i__13227_13247 = G__13261;
continue;
} else {
var vec__13231_13262 = cljs.core.first.call(null,seq__13224_13256__$1);
var k_13263__$1 = cljs.core.nth.call(null,vec__13231_13262,(0),null);
var v_13264__$1 = cljs.core.nth.call(null,vec__13231_13262,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13263__$1),"\": ",v_13264__$1);

var G__13265 = cljs.core.next.call(null,seq__13224_13256__$1);
var G__13266 = null;
var G__13267 = (0);
var G__13268 = (0);
seq__13224_13244 = G__13265;
chunk__13225_13245 = G__13266;
count__13226_13246 = G__13267;
i__13227_13247 = G__13268;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__13269){
var map__13270 = p__13269;
var map__13270__$1 = ((((!((map__13270 == null)))?((((map__13270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13270):map__13270);
var form = cljs.core.get.call(null,map__13270__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__13270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__13272){
var map__13275 = p__13272;
var map__13275__$1 = ((((!((map__13275 == null)))?((((map__13275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13275):map__13275);
var op = cljs.core.get.call(null,map__13275__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13275__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__9233__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__9233__auto__){
var and__9233__auto____$1 = form;
if(cljs.core.truth_(and__9233__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__13277){
var map__13280 = p__13277;
var map__13280__$1 = ((((!((map__13280 == null)))?((((map__13280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13280):map__13280);
var op = cljs.core.get.call(null,map__13280__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13280__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__9245__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__13282){
var map__13283 = p__13282;
var map__13283__$1 = ((((!((map__13283 == null)))?((((map__13283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13283):map__13283);
var test = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__9245__auto__ = unchecked;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__13285){
var map__13286 = p__13285;
var map__13286__$1 = ((((!((map__13286 == null)))?((((map__13286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13286):map__13286);
var v = cljs.core.get.call(null,map__13286__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__13286__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__13286__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__13286__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__13286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__13288_13306 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__13289_13307 = null;
var count__13290_13308 = (0);
var i__13291_13309 = (0);
while(true){
if((i__13291_13309 < count__13290_13308)){
var vec__13292_13310 = cljs.core._nth.call(null,chunk__13289_13307,i__13291_13309);
var ts_13311 = cljs.core.nth.call(null,vec__13292_13310,(0),null);
var then_13312 = cljs.core.nth.call(null,vec__13292_13310,(1),null);
var seq__13295_13313 = cljs.core.seq.call(null,ts_13311);
var chunk__13296_13314 = null;
var count__13297_13315 = (0);
var i__13298_13316 = (0);
while(true){
if((i__13298_13316 < count__13297_13315)){
var test_13317 = cljs.core._nth.call(null,chunk__13296_13314,i__13298_13316);
cljs.compiler.emitln.call(null,"case ",test_13317,":");

var G__13318 = seq__13295_13313;
var G__13319 = chunk__13296_13314;
var G__13320 = count__13297_13315;
var G__13321 = (i__13298_13316 + (1));
seq__13295_13313 = G__13318;
chunk__13296_13314 = G__13319;
count__13297_13315 = G__13320;
i__13298_13316 = G__13321;
continue;
} else {
var temp__4657__auto___13322 = cljs.core.seq.call(null,seq__13295_13313);
if(temp__4657__auto___13322){
var seq__13295_13323__$1 = temp__4657__auto___13322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13295_13323__$1)){
var c__10059__auto___13324 = cljs.core.chunk_first.call(null,seq__13295_13323__$1);
var G__13325 = cljs.core.chunk_rest.call(null,seq__13295_13323__$1);
var G__13326 = c__10059__auto___13324;
var G__13327 = cljs.core.count.call(null,c__10059__auto___13324);
var G__13328 = (0);
seq__13295_13313 = G__13325;
chunk__13296_13314 = G__13326;
count__13297_13315 = G__13327;
i__13298_13316 = G__13328;
continue;
} else {
var test_13329 = cljs.core.first.call(null,seq__13295_13323__$1);
cljs.compiler.emitln.call(null,"case ",test_13329,":");

var G__13330 = cljs.core.next.call(null,seq__13295_13323__$1);
var G__13331 = null;
var G__13332 = (0);
var G__13333 = (0);
seq__13295_13313 = G__13330;
chunk__13296_13314 = G__13331;
count__13297_13315 = G__13332;
i__13298_13316 = G__13333;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13312);
} else {
cljs.compiler.emitln.call(null,then_13312);
}

cljs.compiler.emitln.call(null,"break;");

var G__13334 = seq__13288_13306;
var G__13335 = chunk__13289_13307;
var G__13336 = count__13290_13308;
var G__13337 = (i__13291_13309 + (1));
seq__13288_13306 = G__13334;
chunk__13289_13307 = G__13335;
count__13290_13308 = G__13336;
i__13291_13309 = G__13337;
continue;
} else {
var temp__4657__auto___13338 = cljs.core.seq.call(null,seq__13288_13306);
if(temp__4657__auto___13338){
var seq__13288_13339__$1 = temp__4657__auto___13338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13288_13339__$1)){
var c__10059__auto___13340 = cljs.core.chunk_first.call(null,seq__13288_13339__$1);
var G__13341 = cljs.core.chunk_rest.call(null,seq__13288_13339__$1);
var G__13342 = c__10059__auto___13340;
var G__13343 = cljs.core.count.call(null,c__10059__auto___13340);
var G__13344 = (0);
seq__13288_13306 = G__13341;
chunk__13289_13307 = G__13342;
count__13290_13308 = G__13343;
i__13291_13309 = G__13344;
continue;
} else {
var vec__13299_13345 = cljs.core.first.call(null,seq__13288_13339__$1);
var ts_13346 = cljs.core.nth.call(null,vec__13299_13345,(0),null);
var then_13347 = cljs.core.nth.call(null,vec__13299_13345,(1),null);
var seq__13302_13348 = cljs.core.seq.call(null,ts_13346);
var chunk__13303_13349 = null;
var count__13304_13350 = (0);
var i__13305_13351 = (0);
while(true){
if((i__13305_13351 < count__13304_13350)){
var test_13352 = cljs.core._nth.call(null,chunk__13303_13349,i__13305_13351);
cljs.compiler.emitln.call(null,"case ",test_13352,":");

var G__13353 = seq__13302_13348;
var G__13354 = chunk__13303_13349;
var G__13355 = count__13304_13350;
var G__13356 = (i__13305_13351 + (1));
seq__13302_13348 = G__13353;
chunk__13303_13349 = G__13354;
count__13304_13350 = G__13355;
i__13305_13351 = G__13356;
continue;
} else {
var temp__4657__auto___13357__$1 = cljs.core.seq.call(null,seq__13302_13348);
if(temp__4657__auto___13357__$1){
var seq__13302_13358__$1 = temp__4657__auto___13357__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13302_13358__$1)){
var c__10059__auto___13359 = cljs.core.chunk_first.call(null,seq__13302_13358__$1);
var G__13360 = cljs.core.chunk_rest.call(null,seq__13302_13358__$1);
var G__13361 = c__10059__auto___13359;
var G__13362 = cljs.core.count.call(null,c__10059__auto___13359);
var G__13363 = (0);
seq__13302_13348 = G__13360;
chunk__13303_13349 = G__13361;
count__13304_13350 = G__13362;
i__13305_13351 = G__13363;
continue;
} else {
var test_13364 = cljs.core.first.call(null,seq__13302_13358__$1);
cljs.compiler.emitln.call(null,"case ",test_13364,":");

var G__13365 = cljs.core.next.call(null,seq__13302_13358__$1);
var G__13366 = null;
var G__13367 = (0);
var G__13368 = (0);
seq__13302_13348 = G__13365;
chunk__13303_13349 = G__13366;
count__13304_13350 = G__13367;
i__13305_13351 = G__13368;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13347);
} else {
cljs.compiler.emitln.call(null,then_13347);
}

cljs.compiler.emitln.call(null,"break;");

var G__13369 = cljs.core.next.call(null,seq__13288_13339__$1);
var G__13370 = null;
var G__13371 = (0);
var G__13372 = (0);
seq__13288_13306 = G__13369;
chunk__13289_13307 = G__13370;
count__13290_13308 = G__13371;
i__13291_13309 = G__13372;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__13373){
var map__13374 = p__13373;
var map__13374__$1 = ((((!((map__13374 == null)))?((((map__13374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13374):map__13374);
var throw$ = cljs.core.get.call(null,map__13374__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__13374__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return [cljs.core.str("!"),cljs.core.str(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__13381 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__13381,(0),null);
var rstr = cljs.core.nth.call(null,vec__13381,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__13381,fstr,rstr,ret_t,axstr){
return (function (p1__13376_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13376_SHARP_);
});})(idx,vec__13381,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__13384 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__13384),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__13384;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

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
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__13385_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13385_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__13392 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13393 = cljs.core.seq.call(null,vec__13392);
var first__13394 = cljs.core.first.call(null,seq__13393);
var seq__13393__$1 = cljs.core.next.call(null,seq__13393);
var p = first__13394;
var first__13394__$1 = cljs.core.first.call(null,seq__13393__$1);
var seq__13393__$2 = cljs.core.next.call(null,seq__13393__$1);
var ts = first__13394__$1;
var first__13394__$2 = cljs.core.first.call(null,seq__13393__$2);
var seq__13393__$3 = cljs.core.next.call(null,seq__13393__$2);
var n = first__13394__$2;
var xs = seq__13393__$3;
if(cljs.core.truth_((function (){var and__9233__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__9233__auto__){
var and__9233__auto____$1 = ts;
if(cljs.core.truth_(and__9233__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__13395 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13396 = cljs.core.seq.call(null,vec__13395);
var first__13397 = cljs.core.first.call(null,seq__13396);
var seq__13396__$1 = cljs.core.next.call(null,seq__13396);
var p = first__13397;
var first__13397__$1 = cljs.core.first.call(null,seq__13396__$1);
var seq__13396__$2 = cljs.core.next.call(null,seq__13396__$1);
var ts = first__13397__$1;
var xs = seq__13396__$2;
if(cljs.core.truth_((function (){var and__9233__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__9233__auto__){
var and__9233__auto____$1 = ts;
if(cljs.core.truth_(and__9233__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
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
var args13399 = [];
var len__10353__auto___13434 = arguments.length;
var i__10354__auto___13435 = (0);
while(true){
if((i__10354__auto___13435 < len__10353__auto___13434)){
args13399.push((arguments[i__10354__auto___13435]));

var G__13436 = (i__10354__auto___13435 + (1));
i__10354__auto___13435 = G__13436;
continue;
} else {
}
break;
}

var G__13401 = args13399.length;
switch (G__13401) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13399.length)].join('')));

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
var vec__13423 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__13398_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__13398_SHARP_);
} else {
return p1__13398_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__13424 = cljs.core.seq.call(null,vec__13423);
var first__13425 = cljs.core.first.call(null,seq__13424);
var seq__13424__$1 = cljs.core.next.call(null,seq__13424);
var x = first__13425;
var ys = seq__13424__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__13426 = cljs.core.seq.call(null,ys);
var chunk__13427 = null;
var count__13428 = (0);
var i__13429 = (0);
while(true){
if((i__13429 < count__13428)){
var next_line = cljs.core._nth.call(null,chunk__13427,i__13429);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13438 = seq__13426;
var G__13439 = chunk__13427;
var G__13440 = count__13428;
var G__13441 = (i__13429 + (1));
seq__13426 = G__13438;
chunk__13427 = G__13439;
count__13428 = G__13440;
i__13429 = G__13441;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13426);
if(temp__4657__auto__){
var seq__13426__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13426__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__13426__$1);
var G__13442 = cljs.core.chunk_rest.call(null,seq__13426__$1);
var G__13443 = c__10059__auto__;
var G__13444 = cljs.core.count.call(null,c__10059__auto__);
var G__13445 = (0);
seq__13426 = G__13442;
chunk__13427 = G__13443;
count__13428 = G__13444;
i__13429 = G__13445;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__13426__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13446 = cljs.core.next.call(null,seq__13426__$1);
var G__13447 = null;
var G__13448 = (0);
var G__13449 = (0);
seq__13426 = G__13446;
chunk__13427 = G__13447;
count__13428 = G__13448;
i__13429 = G__13449;
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

var seq__13430_13450 = cljs.core.seq.call(null,docs__$2);
var chunk__13431_13451 = null;
var count__13432_13452 = (0);
var i__13433_13453 = (0);
while(true){
if((i__13433_13453 < count__13432_13452)){
var e_13454 = cljs.core._nth.call(null,chunk__13431_13451,i__13433_13453);
if(cljs.core.truth_(e_13454)){
print_comment_lines.call(null,e_13454);
} else {
}

var G__13455 = seq__13430_13450;
var G__13456 = chunk__13431_13451;
var G__13457 = count__13432_13452;
var G__13458 = (i__13433_13453 + (1));
seq__13430_13450 = G__13455;
chunk__13431_13451 = G__13456;
count__13432_13452 = G__13457;
i__13433_13453 = G__13458;
continue;
} else {
var temp__4657__auto___13459 = cljs.core.seq.call(null,seq__13430_13450);
if(temp__4657__auto___13459){
var seq__13430_13460__$1 = temp__4657__auto___13459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13430_13460__$1)){
var c__10059__auto___13461 = cljs.core.chunk_first.call(null,seq__13430_13460__$1);
var G__13462 = cljs.core.chunk_rest.call(null,seq__13430_13460__$1);
var G__13463 = c__10059__auto___13461;
var G__13464 = cljs.core.count.call(null,c__10059__auto___13461);
var G__13465 = (0);
seq__13430_13450 = G__13462;
chunk__13431_13451 = G__13463;
count__13432_13452 = G__13464;
i__13433_13453 = G__13465;
continue;
} else {
var e_13466 = cljs.core.first.call(null,seq__13430_13460__$1);
if(cljs.core.truth_(e_13466)){
print_comment_lines.call(null,e_13466);
} else {
}

var G__13467 = cljs.core.next.call(null,seq__13430_13460__$1);
var G__13468 = null;
var G__13469 = (0);
var G__13470 = (0);
seq__13430_13450 = G__13467;
chunk__13431_13451 = G__13468;
count__13432_13452 = G__13469;
i__13433_13453 = G__13470;
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
var and__9233__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__13472_SHARP_){
return goog.string.startsWith(p1__13472_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = opts;
if(cljs.core.truth_(and__9233__auto____$1)){
var and__9233__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__9233__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__9233__auto____$2;
}
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__13473){
var map__13474 = p__13473;
var map__13474__$1 = ((((!((map__13474 == null)))?((((map__13474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13474):map__13474);
var name = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__9245__auto__ = init;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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

if(cljs.core.truth_((function (){var and__9233__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__9233__auto__)){
return test;
} else {
return and__9233__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13476){
var map__13497 = p__13476;
var map__13497__$1 = ((((!((map__13497 == null)))?((((map__13497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13497):map__13497);
var name = cljs.core.get.call(null,map__13497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13497__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13497__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__13499_13517 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__13500_13518 = null;
var count__13501_13519 = (0);
var i__13502_13520 = (0);
while(true){
if((i__13502_13520 < count__13501_13519)){
var vec__13503_13521 = cljs.core._nth.call(null,chunk__13500_13518,i__13502_13520);
var i_13522 = cljs.core.nth.call(null,vec__13503_13521,(0),null);
var param_13523 = cljs.core.nth.call(null,vec__13503_13521,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13523);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13524 = seq__13499_13517;
var G__13525 = chunk__13500_13518;
var G__13526 = count__13501_13519;
var G__13527 = (i__13502_13520 + (1));
seq__13499_13517 = G__13524;
chunk__13500_13518 = G__13525;
count__13501_13519 = G__13526;
i__13502_13520 = G__13527;
continue;
} else {
var temp__4657__auto___13528 = cljs.core.seq.call(null,seq__13499_13517);
if(temp__4657__auto___13528){
var seq__13499_13529__$1 = temp__4657__auto___13528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13499_13529__$1)){
var c__10059__auto___13530 = cljs.core.chunk_first.call(null,seq__13499_13529__$1);
var G__13531 = cljs.core.chunk_rest.call(null,seq__13499_13529__$1);
var G__13532 = c__10059__auto___13530;
var G__13533 = cljs.core.count.call(null,c__10059__auto___13530);
var G__13534 = (0);
seq__13499_13517 = G__13531;
chunk__13500_13518 = G__13532;
count__13501_13519 = G__13533;
i__13502_13520 = G__13534;
continue;
} else {
var vec__13506_13535 = cljs.core.first.call(null,seq__13499_13529__$1);
var i_13536 = cljs.core.nth.call(null,vec__13506_13535,(0),null);
var param_13537 = cljs.core.nth.call(null,vec__13506_13535,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13537);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13538 = cljs.core.next.call(null,seq__13499_13529__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__13499_13517 = G__13538;
chunk__13500_13518 = G__13539;
count__13501_13519 = G__13540;
i__13502_13520 = G__13541;
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

var seq__13509_13542 = cljs.core.seq.call(null,params);
var chunk__13510_13543 = null;
var count__13511_13544 = (0);
var i__13512_13545 = (0);
while(true){
if((i__13512_13545 < count__13511_13544)){
var param_13546 = cljs.core._nth.call(null,chunk__13510_13543,i__13512_13545);
cljs.compiler.emit.call(null,param_13546);

if(cljs.core._EQ_.call(null,param_13546,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13547 = seq__13509_13542;
var G__13548 = chunk__13510_13543;
var G__13549 = count__13511_13544;
var G__13550 = (i__13512_13545 + (1));
seq__13509_13542 = G__13547;
chunk__13510_13543 = G__13548;
count__13511_13544 = G__13549;
i__13512_13545 = G__13550;
continue;
} else {
var temp__4657__auto___13551 = cljs.core.seq.call(null,seq__13509_13542);
if(temp__4657__auto___13551){
var seq__13509_13552__$1 = temp__4657__auto___13551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13509_13552__$1)){
var c__10059__auto___13553 = cljs.core.chunk_first.call(null,seq__13509_13552__$1);
var G__13554 = cljs.core.chunk_rest.call(null,seq__13509_13552__$1);
var G__13555 = c__10059__auto___13553;
var G__13556 = cljs.core.count.call(null,c__10059__auto___13553);
var G__13557 = (0);
seq__13509_13542 = G__13554;
chunk__13510_13543 = G__13555;
count__13511_13544 = G__13556;
i__13512_13545 = G__13557;
continue;
} else {
var param_13558 = cljs.core.first.call(null,seq__13509_13552__$1);
cljs.compiler.emit.call(null,param_13558);

if(cljs.core._EQ_.call(null,param_13558,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13559 = cljs.core.next.call(null,seq__13509_13552__$1);
var G__13560 = null;
var G__13561 = (0);
var G__13562 = (0);
seq__13509_13542 = G__13559;
chunk__13510_13543 = G__13560;
count__13511_13544 = G__13561;
i__13512_13545 = G__13562;
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

var seq__13513_13563 = cljs.core.seq.call(null,params);
var chunk__13514_13564 = null;
var count__13515_13565 = (0);
var i__13516_13566 = (0);
while(true){
if((i__13516_13566 < count__13515_13565)){
var param_13567 = cljs.core._nth.call(null,chunk__13514_13564,i__13516_13566);
cljs.compiler.emit.call(null,param_13567);

if(cljs.core._EQ_.call(null,param_13567,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13568 = seq__13513_13563;
var G__13569 = chunk__13514_13564;
var G__13570 = count__13515_13565;
var G__13571 = (i__13516_13566 + (1));
seq__13513_13563 = G__13568;
chunk__13514_13564 = G__13569;
count__13515_13565 = G__13570;
i__13516_13566 = G__13571;
continue;
} else {
var temp__4657__auto___13572 = cljs.core.seq.call(null,seq__13513_13563);
if(temp__4657__auto___13572){
var seq__13513_13573__$1 = temp__4657__auto___13572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13513_13573__$1)){
var c__10059__auto___13574 = cljs.core.chunk_first.call(null,seq__13513_13573__$1);
var G__13575 = cljs.core.chunk_rest.call(null,seq__13513_13573__$1);
var G__13576 = c__10059__auto___13574;
var G__13577 = cljs.core.count.call(null,c__10059__auto___13574);
var G__13578 = (0);
seq__13513_13563 = G__13575;
chunk__13514_13564 = G__13576;
count__13515_13565 = G__13577;
i__13516_13566 = G__13578;
continue;
} else {
var param_13579 = cljs.core.first.call(null,seq__13513_13573__$1);
cljs.compiler.emit.call(null,param_13579);

if(cljs.core._EQ_.call(null,param_13579,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13580 = cljs.core.next.call(null,seq__13513_13573__$1);
var G__13581 = null;
var G__13582 = (0);
var G__13583 = (0);
seq__13513_13563 = G__13580;
chunk__13514_13564 = G__13581;
count__13515_13565 = G__13582;
i__13516_13566 = G__13583;
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
var seq__13588 = cljs.core.seq.call(null,params);
var chunk__13589 = null;
var count__13590 = (0);
var i__13591 = (0);
while(true){
if((i__13591 < count__13590)){
var param = cljs.core._nth.call(null,chunk__13589,i__13591);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13592 = seq__13588;
var G__13593 = chunk__13589;
var G__13594 = count__13590;
var G__13595 = (i__13591 + (1));
seq__13588 = G__13592;
chunk__13589 = G__13593;
count__13590 = G__13594;
i__13591 = G__13595;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13588);
if(temp__4657__auto__){
var seq__13588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13588__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__13588__$1);
var G__13596 = cljs.core.chunk_rest.call(null,seq__13588__$1);
var G__13597 = c__10059__auto__;
var G__13598 = cljs.core.count.call(null,c__10059__auto__);
var G__13599 = (0);
seq__13588 = G__13596;
chunk__13589 = G__13597;
count__13590 = G__13598;
i__13591 = G__13599;
continue;
} else {
var param = cljs.core.first.call(null,seq__13588__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13600 = cljs.core.next.call(null,seq__13588__$1);
var G__13601 = null;
var G__13602 = (0);
var G__13603 = (0);
seq__13588 = G__13600;
chunk__13589 = G__13601;
count__13590 = G__13602;
i__13591 = G__13603;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13604){
var map__13607 = p__13604;
var map__13607__$1 = ((((!((map__13607 == null)))?((((map__13607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13607):map__13607);
var type = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13607__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
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
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13609){
var map__13620 = p__13609;
var map__13620__$1 = ((((!((map__13620 == null)))?((((map__13620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13620):map__13620);
var f = map__13620__$1;
var type = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13630__$1 = (function (){var or__9245__auto__ = name;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13631 = cljs.compiler.munge.call(null,name_13630__$1);
var delegate_name_13632 = [cljs.core.str(mname_13631),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13632," = function (");

var seq__13622_13633 = cljs.core.seq.call(null,params);
var chunk__13623_13634 = null;
var count__13624_13635 = (0);
var i__13625_13636 = (0);
while(true){
if((i__13625_13636 < count__13624_13635)){
var param_13637 = cljs.core._nth.call(null,chunk__13623_13634,i__13625_13636);
cljs.compiler.emit.call(null,param_13637);

if(cljs.core._EQ_.call(null,param_13637,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13638 = seq__13622_13633;
var G__13639 = chunk__13623_13634;
var G__13640 = count__13624_13635;
var G__13641 = (i__13625_13636 + (1));
seq__13622_13633 = G__13638;
chunk__13623_13634 = G__13639;
count__13624_13635 = G__13640;
i__13625_13636 = G__13641;
continue;
} else {
var temp__4657__auto___13642 = cljs.core.seq.call(null,seq__13622_13633);
if(temp__4657__auto___13642){
var seq__13622_13643__$1 = temp__4657__auto___13642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13622_13643__$1)){
var c__10059__auto___13644 = cljs.core.chunk_first.call(null,seq__13622_13643__$1);
var G__13645 = cljs.core.chunk_rest.call(null,seq__13622_13643__$1);
var G__13646 = c__10059__auto___13644;
var G__13647 = cljs.core.count.call(null,c__10059__auto___13644);
var G__13648 = (0);
seq__13622_13633 = G__13645;
chunk__13623_13634 = G__13646;
count__13624_13635 = G__13647;
i__13625_13636 = G__13648;
continue;
} else {
var param_13649 = cljs.core.first.call(null,seq__13622_13643__$1);
cljs.compiler.emit.call(null,param_13649);

if(cljs.core._EQ_.call(null,param_13649,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13650 = cljs.core.next.call(null,seq__13622_13643__$1);
var G__13651 = null;
var G__13652 = (0);
var G__13653 = (0);
seq__13622_13633 = G__13650;
chunk__13623_13634 = G__13651;
count__13624_13635 = G__13652;
i__13625_13636 = G__13653;
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

cljs.compiler.emitln.call(null,"var ",mname_13631," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13654 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13654,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13632,".call(this,");

var seq__13626_13655 = cljs.core.seq.call(null,params);
var chunk__13627_13656 = null;
var count__13628_13657 = (0);
var i__13629_13658 = (0);
while(true){
if((i__13629_13658 < count__13628_13657)){
var param_13659 = cljs.core._nth.call(null,chunk__13627_13656,i__13629_13658);
cljs.compiler.emit.call(null,param_13659);

if(cljs.core._EQ_.call(null,param_13659,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13660 = seq__13626_13655;
var G__13661 = chunk__13627_13656;
var G__13662 = count__13628_13657;
var G__13663 = (i__13629_13658 + (1));
seq__13626_13655 = G__13660;
chunk__13627_13656 = G__13661;
count__13628_13657 = G__13662;
i__13629_13658 = G__13663;
continue;
} else {
var temp__4657__auto___13664 = cljs.core.seq.call(null,seq__13626_13655);
if(temp__4657__auto___13664){
var seq__13626_13665__$1 = temp__4657__auto___13664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13626_13665__$1)){
var c__10059__auto___13666 = cljs.core.chunk_first.call(null,seq__13626_13665__$1);
var G__13667 = cljs.core.chunk_rest.call(null,seq__13626_13665__$1);
var G__13668 = c__10059__auto___13666;
var G__13669 = cljs.core.count.call(null,c__10059__auto___13666);
var G__13670 = (0);
seq__13626_13655 = G__13667;
chunk__13627_13656 = G__13668;
count__13628_13657 = G__13669;
i__13629_13658 = G__13670;
continue;
} else {
var param_13671 = cljs.core.first.call(null,seq__13626_13665__$1);
cljs.compiler.emit.call(null,param_13671);

if(cljs.core._EQ_.call(null,param_13671,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13672 = cljs.core.next.call(null,seq__13626_13665__$1);
var G__13673 = null;
var G__13674 = (0);
var G__13675 = (0);
seq__13626_13655 = G__13672;
chunk__13627_13656 = G__13673;
count__13628_13657 = G__13674;
i__13629_13658 = G__13675;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13631,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13631,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13630__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13631,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13632,";");

cljs.compiler.emitln.call(null,"return ",mname_13631,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13679){
var map__13680 = p__13679;
var map__13680__$1 = ((((!((map__13680 == null)))?((((map__13680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13680):map__13680);
var name = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13676_SHARP_){
var and__9233__auto__ = p1__13676_SHARP_;
if(cljs.core.truth_(and__9233__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13676_SHARP_));
} else {
return and__9233__auto__;
}
});})(map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_13715__$1 = (function (){var or__9245__auto__ = name;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13716 = cljs.compiler.munge.call(null,name_13715__$1);
var maxparams_13717 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13718 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13715__$1,mname_13716,maxparams_13717,loop_locals,map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_13716),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13715__$1,mname_13716,maxparams_13717,loop_locals,map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13719 = cljs.core.sort_by.call(null,((function (name_13715__$1,mname_13716,maxparams_13717,mmap_13718,loop_locals,map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13677_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13677_SHARP_)));
});})(name_13715__$1,mname_13716,maxparams_13717,mmap_13718,loop_locals,map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13718));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13716," = null;");

var seq__13682_13720 = cljs.core.seq.call(null,ms_13719);
var chunk__13683_13721 = null;
var count__13684_13722 = (0);
var i__13685_13723 = (0);
while(true){
if((i__13685_13723 < count__13684_13722)){
var vec__13686_13724 = cljs.core._nth.call(null,chunk__13683_13721,i__13685_13723);
var n_13725 = cljs.core.nth.call(null,vec__13686_13724,(0),null);
var meth_13726 = cljs.core.nth.call(null,vec__13686_13724,(1),null);
cljs.compiler.emits.call(null,"var ",n_13725," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13726))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13726);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13726);
}

cljs.compiler.emitln.call(null,";");

var G__13727 = seq__13682_13720;
var G__13728 = chunk__13683_13721;
var G__13729 = count__13684_13722;
var G__13730 = (i__13685_13723 + (1));
seq__13682_13720 = G__13727;
chunk__13683_13721 = G__13728;
count__13684_13722 = G__13729;
i__13685_13723 = G__13730;
continue;
} else {
var temp__4657__auto___13731 = cljs.core.seq.call(null,seq__13682_13720);
if(temp__4657__auto___13731){
var seq__13682_13732__$1 = temp__4657__auto___13731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13682_13732__$1)){
var c__10059__auto___13733 = cljs.core.chunk_first.call(null,seq__13682_13732__$1);
var G__13734 = cljs.core.chunk_rest.call(null,seq__13682_13732__$1);
var G__13735 = c__10059__auto___13733;
var G__13736 = cljs.core.count.call(null,c__10059__auto___13733);
var G__13737 = (0);
seq__13682_13720 = G__13734;
chunk__13683_13721 = G__13735;
count__13684_13722 = G__13736;
i__13685_13723 = G__13737;
continue;
} else {
var vec__13689_13738 = cljs.core.first.call(null,seq__13682_13732__$1);
var n_13739 = cljs.core.nth.call(null,vec__13689_13738,(0),null);
var meth_13740 = cljs.core.nth.call(null,vec__13689_13738,(1),null);
cljs.compiler.emits.call(null,"var ",n_13739," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13740))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13740);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13740);
}

cljs.compiler.emitln.call(null,";");

var G__13741 = cljs.core.next.call(null,seq__13682_13732__$1);
var G__13742 = null;
var G__13743 = (0);
var G__13744 = (0);
seq__13682_13720 = G__13741;
chunk__13683_13721 = G__13742;
count__13684_13722 = G__13743;
i__13685_13723 = G__13744;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13716," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13717)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13717));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13692_13745 = cljs.core.seq.call(null,ms_13719);
var chunk__13693_13746 = null;
var count__13694_13747 = (0);
var i__13695_13748 = (0);
while(true){
if((i__13695_13748 < count__13694_13747)){
var vec__13696_13749 = cljs.core._nth.call(null,chunk__13693_13746,i__13695_13748);
var n_13750 = cljs.core.nth.call(null,vec__13696_13749,(0),null);
var meth_13751 = cljs.core.nth.call(null,vec__13696_13749,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13751))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13752 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13752," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13753 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13752," = new cljs.core.IndexedSeq(",a_13753,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13750,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13717)),(((cljs.core.count.call(null,maxparams_13717) > (1)))?", ":null),restarg_13752,");");
} else {
var pcnt_13754 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13751));
cljs.compiler.emitln.call(null,"case ",pcnt_13754,":");

cljs.compiler.emitln.call(null,"return ",n_13750,".call(this",(((pcnt_13754 === (0)))?null:cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13754,maxparams_13717));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),",")),");");
}

var G__13755 = seq__13692_13745;
var G__13756 = chunk__13693_13746;
var G__13757 = count__13694_13747;
var G__13758 = (i__13695_13748 + (1));
seq__13692_13745 = G__13755;
chunk__13693_13746 = G__13756;
count__13694_13747 = G__13757;
i__13695_13748 = G__13758;
continue;
} else {
var temp__4657__auto___13759 = cljs.core.seq.call(null,seq__13692_13745);
if(temp__4657__auto___13759){
var seq__13692_13760__$1 = temp__4657__auto___13759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13692_13760__$1)){
var c__10059__auto___13761 = cljs.core.chunk_first.call(null,seq__13692_13760__$1);
var G__13762 = cljs.core.chunk_rest.call(null,seq__13692_13760__$1);
var G__13763 = c__10059__auto___13761;
var G__13764 = cljs.core.count.call(null,c__10059__auto___13761);
var G__13765 = (0);
seq__13692_13745 = G__13762;
chunk__13693_13746 = G__13763;
count__13694_13747 = G__13764;
i__13695_13748 = G__13765;
continue;
} else {
var vec__13699_13766 = cljs.core.first.call(null,seq__13692_13760__$1);
var n_13767 = cljs.core.nth.call(null,vec__13699_13766,(0),null);
var meth_13768 = cljs.core.nth.call(null,vec__13699_13766,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13768))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13769 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13769," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13770 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13769," = new cljs.core.IndexedSeq(",a_13770,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13767,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13717)),(((cljs.core.count.call(null,maxparams_13717) > (1)))?", ":null),restarg_13769,");");
} else {
var pcnt_13771 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13768));
cljs.compiler.emitln.call(null,"case ",pcnt_13771,":");

cljs.compiler.emitln.call(null,"return ",n_13767,".call(this",(((pcnt_13771 === (0)))?null:cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13771,maxparams_13717));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),",")),");");
}

var G__13772 = cljs.core.next.call(null,seq__13692_13760__$1);
var G__13773 = null;
var G__13774 = (0);
var G__13775 = (0);
seq__13692_13745 = G__13772;
chunk__13693_13746 = G__13773;
count__13694_13747 = G__13774;
i__13695_13748 = G__13775;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_13716,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13716,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13715__$1,mname_13716,maxparams_13717,mmap_13718,ms_13719,loop_locals,map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13678_SHARP_){
var vec__13702 = p1__13678_SHARP_;
var n = cljs.core.nth.call(null,vec__13702,(0),null);
var m = cljs.core.nth.call(null,vec__13702,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13715__$1,mname_13716,maxparams_13717,mmap_13718,ms_13719,loop_locals,map__13680,map__13680__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13719),".cljs$lang$applyTo;");
} else {
}

var seq__13705_13776 = cljs.core.seq.call(null,ms_13719);
var chunk__13706_13777 = null;
var count__13707_13778 = (0);
var i__13708_13779 = (0);
while(true){
if((i__13708_13779 < count__13707_13778)){
var vec__13709_13780 = cljs.core._nth.call(null,chunk__13706_13777,i__13708_13779);
var n_13781 = cljs.core.nth.call(null,vec__13709_13780,(0),null);
var meth_13782 = cljs.core.nth.call(null,vec__13709_13780,(1),null);
var c_13783 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13782));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13782))){
cljs.compiler.emitln.call(null,mname_13716,".cljs$core$IFn$_invoke$arity$variadic = ",n_13781,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13716,".cljs$core$IFn$_invoke$arity$",c_13783," = ",n_13781,";");
}

var G__13784 = seq__13705_13776;
var G__13785 = chunk__13706_13777;
var G__13786 = count__13707_13778;
var G__13787 = (i__13708_13779 + (1));
seq__13705_13776 = G__13784;
chunk__13706_13777 = G__13785;
count__13707_13778 = G__13786;
i__13708_13779 = G__13787;
continue;
} else {
var temp__4657__auto___13788 = cljs.core.seq.call(null,seq__13705_13776);
if(temp__4657__auto___13788){
var seq__13705_13789__$1 = temp__4657__auto___13788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13705_13789__$1)){
var c__10059__auto___13790 = cljs.core.chunk_first.call(null,seq__13705_13789__$1);
var G__13791 = cljs.core.chunk_rest.call(null,seq__13705_13789__$1);
var G__13792 = c__10059__auto___13790;
var G__13793 = cljs.core.count.call(null,c__10059__auto___13790);
var G__13794 = (0);
seq__13705_13776 = G__13791;
chunk__13706_13777 = G__13792;
count__13707_13778 = G__13793;
i__13708_13779 = G__13794;
continue;
} else {
var vec__13712_13795 = cljs.core.first.call(null,seq__13705_13789__$1);
var n_13796 = cljs.core.nth.call(null,vec__13712_13795,(0),null);
var meth_13797 = cljs.core.nth.call(null,vec__13712_13795,(1),null);
var c_13798 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13797));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13797))){
cljs.compiler.emitln.call(null,mname_13716,".cljs$core$IFn$_invoke$arity$variadic = ",n_13796,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13716,".cljs$core$IFn$_invoke$arity$",c_13798," = ",n_13796,";");
}

var G__13799 = cljs.core.next.call(null,seq__13705_13789__$1);
var G__13800 = null;
var G__13801 = (0);
var G__13802 = (0);
seq__13705_13776 = G__13799;
chunk__13706_13777 = G__13800;
count__13707_13778 = G__13801;
i__13708_13779 = G__13802;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13716,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13803){
var map__13804 = p__13803;
var map__13804__$1 = ((((!((map__13804 == null)))?((((map__13804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13804):map__13804);
var statements = cljs.core.get.call(null,map__13804__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13804__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13804__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__9233__auto__ = statements;
if(cljs.core.truth_(and__9233__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__9233__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13806_13810 = cljs.core.seq.call(null,statements);
var chunk__13807_13811 = null;
var count__13808_13812 = (0);
var i__13809_13813 = (0);
while(true){
if((i__13809_13813 < count__13808_13812)){
var s_13814 = cljs.core._nth.call(null,chunk__13807_13811,i__13809_13813);
cljs.compiler.emitln.call(null,s_13814);

var G__13815 = seq__13806_13810;
var G__13816 = chunk__13807_13811;
var G__13817 = count__13808_13812;
var G__13818 = (i__13809_13813 + (1));
seq__13806_13810 = G__13815;
chunk__13807_13811 = G__13816;
count__13808_13812 = G__13817;
i__13809_13813 = G__13818;
continue;
} else {
var temp__4657__auto___13819 = cljs.core.seq.call(null,seq__13806_13810);
if(temp__4657__auto___13819){
var seq__13806_13820__$1 = temp__4657__auto___13819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13806_13820__$1)){
var c__10059__auto___13821 = cljs.core.chunk_first.call(null,seq__13806_13820__$1);
var G__13822 = cljs.core.chunk_rest.call(null,seq__13806_13820__$1);
var G__13823 = c__10059__auto___13821;
var G__13824 = cljs.core.count.call(null,c__10059__auto___13821);
var G__13825 = (0);
seq__13806_13810 = G__13822;
chunk__13807_13811 = G__13823;
count__13808_13812 = G__13824;
i__13809_13813 = G__13825;
continue;
} else {
var s_13826 = cljs.core.first.call(null,seq__13806_13820__$1);
cljs.compiler.emitln.call(null,s_13826);

var G__13827 = cljs.core.next.call(null,seq__13806_13820__$1);
var G__13828 = null;
var G__13829 = (0);
var G__13830 = (0);
seq__13806_13810 = G__13827;
chunk__13807_13811 = G__13828;
count__13808_13812 = G__13829;
i__13809_13813 = G__13830;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__9233__auto__ = statements;
if(cljs.core.truth_(and__9233__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__9233__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13831){
var map__13832 = p__13831;
var map__13832__$1 = ((((!((map__13832 == null)))?((((map__13832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13832):map__13832);
var env = cljs.core.get.call(null,map__13832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13832__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13832__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13832__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__9245__auto__ = name;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13834,is_loop){
var map__13846 = p__13834;
var map__13846__$1 = ((((!((map__13846 == null)))?((((map__13846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13846):map__13846);
var bindings = cljs.core.get.call(null,map__13846__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13846__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_13848_13857 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_13848_13857,context,map__13846,map__13846__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_13848_13857,context,map__13846,map__13846__$1,bindings,expr,env))
,bindings):null));

try{var seq__13849_13858 = cljs.core.seq.call(null,bindings);
var chunk__13850_13859 = null;
var count__13851_13860 = (0);
var i__13852_13861 = (0);
while(true){
if((i__13852_13861 < count__13851_13860)){
var map__13853_13862 = cljs.core._nth.call(null,chunk__13850_13859,i__13852_13861);
var map__13853_13863__$1 = ((((!((map__13853_13862 == null)))?((((map__13853_13862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13853_13862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13853_13862):map__13853_13862);
var binding_13864 = map__13853_13863__$1;
var init_13865 = cljs.core.get.call(null,map__13853_13863__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13864);

cljs.compiler.emitln.call(null," = ",init_13865,";");

var G__13866 = seq__13849_13858;
var G__13867 = chunk__13850_13859;
var G__13868 = count__13851_13860;
var G__13869 = (i__13852_13861 + (1));
seq__13849_13858 = G__13866;
chunk__13850_13859 = G__13867;
count__13851_13860 = G__13868;
i__13852_13861 = G__13869;
continue;
} else {
var temp__4657__auto___13870 = cljs.core.seq.call(null,seq__13849_13858);
if(temp__4657__auto___13870){
var seq__13849_13871__$1 = temp__4657__auto___13870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13849_13871__$1)){
var c__10059__auto___13872 = cljs.core.chunk_first.call(null,seq__13849_13871__$1);
var G__13873 = cljs.core.chunk_rest.call(null,seq__13849_13871__$1);
var G__13874 = c__10059__auto___13872;
var G__13875 = cljs.core.count.call(null,c__10059__auto___13872);
var G__13876 = (0);
seq__13849_13858 = G__13873;
chunk__13850_13859 = G__13874;
count__13851_13860 = G__13875;
i__13852_13861 = G__13876;
continue;
} else {
var map__13855_13877 = cljs.core.first.call(null,seq__13849_13871__$1);
var map__13855_13878__$1 = ((((!((map__13855_13877 == null)))?((((map__13855_13877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13855_13877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13855_13877):map__13855_13877);
var binding_13879 = map__13855_13878__$1;
var init_13880 = cljs.core.get.call(null,map__13855_13878__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13879);

cljs.compiler.emitln.call(null," = ",init_13880,";");

var G__13881 = cljs.core.next.call(null,seq__13849_13871__$1);
var G__13882 = null;
var G__13883 = (0);
var G__13884 = (0);
seq__13849_13858 = G__13881;
chunk__13850_13859 = G__13882;
count__13851_13860 = G__13883;
i__13852_13861 = G__13884;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13848_13857;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13885){
var map__13886 = p__13885;
var map__13886__$1 = ((((!((map__13886 == null)))?((((map__13886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13886):map__13886);
var frame = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__10163__auto___13888 = cljs.core.count.call(null,exprs);
var i_13889 = (0);
while(true){
if((i_13889 < n__10163__auto___13888)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13889)," = ",exprs.call(null,i_13889),";");

var G__13890 = (i_13889 + (1));
i_13889 = G__13890;
continue;
} else {
}
break;
}

var n__10163__auto___13891 = cljs.core.count.call(null,exprs);
var i_13892 = (0);
while(true){
if((i_13892 < n__10163__auto___13891)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13892))," = ",temps.call(null,i_13892),";");

var G__13893 = (i_13892 + (1));
i_13892 = G__13893;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13894){
var map__13895 = p__13894;
var map__13895__$1 = ((((!((map__13895 == null)))?((((map__13895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13895):map__13895);
var bindings = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13897_13905 = cljs.core.seq.call(null,bindings);
var chunk__13898_13906 = null;
var count__13899_13907 = (0);
var i__13900_13908 = (0);
while(true){
if((i__13900_13908 < count__13899_13907)){
var map__13901_13909 = cljs.core._nth.call(null,chunk__13898_13906,i__13900_13908);
var map__13901_13910__$1 = ((((!((map__13901_13909 == null)))?((((map__13901_13909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13901_13909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13901_13909):map__13901_13909);
var binding_13911 = map__13901_13910__$1;
var init_13912 = cljs.core.get.call(null,map__13901_13910__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13911)," = ",init_13912,";");

var G__13913 = seq__13897_13905;
var G__13914 = chunk__13898_13906;
var G__13915 = count__13899_13907;
var G__13916 = (i__13900_13908 + (1));
seq__13897_13905 = G__13913;
chunk__13898_13906 = G__13914;
count__13899_13907 = G__13915;
i__13900_13908 = G__13916;
continue;
} else {
var temp__4657__auto___13917 = cljs.core.seq.call(null,seq__13897_13905);
if(temp__4657__auto___13917){
var seq__13897_13918__$1 = temp__4657__auto___13917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13897_13918__$1)){
var c__10059__auto___13919 = cljs.core.chunk_first.call(null,seq__13897_13918__$1);
var G__13920 = cljs.core.chunk_rest.call(null,seq__13897_13918__$1);
var G__13921 = c__10059__auto___13919;
var G__13922 = cljs.core.count.call(null,c__10059__auto___13919);
var G__13923 = (0);
seq__13897_13905 = G__13920;
chunk__13898_13906 = G__13921;
count__13899_13907 = G__13922;
i__13900_13908 = G__13923;
continue;
} else {
var map__13903_13924 = cljs.core.first.call(null,seq__13897_13918__$1);
var map__13903_13925__$1 = ((((!((map__13903_13924 == null)))?((((map__13903_13924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13903_13924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13903_13924):map__13903_13924);
var binding_13926 = map__13903_13925__$1;
var init_13927 = cljs.core.get.call(null,map__13903_13925__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13926)," = ",init_13927,";");

var G__13928 = cljs.core.next.call(null,seq__13897_13918__$1);
var G__13929 = null;
var G__13930 = (0);
var G__13931 = (0);
seq__13897_13905 = G__13928;
chunk__13898_13906 = G__13929;
count__13899_13907 = G__13930;
i__13900_13908 = G__13931;
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
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13934){
var map__13935 = p__13934;
var map__13935__$1 = ((((!((map__13935 == null)))?((((map__13935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13935):map__13935);
var expr = map__13935__$1;
var f = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__9233__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__9233__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__9233__auto__ = protocol;
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = tag;
if(cljs.core.truth_(and__9233__auto____$1)){
var or__9245__auto__ = (function (){var and__9233__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__9233__auto____$2)){
var and__9233__auto____$3 = protocol;
if(cljs.core.truth_(and__9233__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__9233__auto____$3;
}
} else {
return and__9233__auto____$2;
}
})();
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
var and__9233__auto____$2 = (function (){var or__9245__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__9245__auto____$1)){
return or__9245__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__9233__auto____$2)){
var or__9245__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__9245__auto____$1){
return or__9245__auto____$1;
} else {
var and__9233__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__9233__auto____$3){
var and__9233__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__9233__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__9233__auto____$4;
}
} else {
return and__9233__auto____$3;
}
}
} else {
return and__9233__auto____$2;
}
}
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__9245__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__9245__auto__){
return or__9245__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__13937 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__9233__auto__)){
return (arity > mfa);
} else {
return and__9233__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env){
return (function (p1__13932_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13932_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env){
return (function (p1__13933_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13933_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13935,map__13935__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13937,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13937,(1),null);
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13940 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13940,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13941 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13941,args)),(((mfa_13941 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13941,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__9245__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
var or__9245__auto____$1 = js_QMARK_;
if(or__9245__auto____$1){
return or__9245__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__9233__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__9233__auto__;
}
})())){
var fprop_13942 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_13942," ? ",f__$1,fprop_13942,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13943){
var map__13944 = p__13943;
var map__13944__$1 = ((((!((map__13944 == null)))?((((map__13944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13944):map__13944);
var ctor = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13946){
var map__13947 = p__13946;
var map__13947__$1 = ((((!((map__13947 == null)))?((((map__13947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13947):map__13947);
var target = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__13953_13957 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__13954_13958 = null;
var count__13955_13959 = (0);
var i__13956_13960 = (0);
while(true){
if((i__13956_13960 < count__13955_13959)){
var lib_13961 = cljs.core._nth.call(null,chunk__13954_13958,i__13956_13960);
if(cljs.core.truth_((function (){var or__9245__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13961),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13961),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__9245__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13961),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13961),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13961),"');");

}
}

var G__13962 = seq__13953_13957;
var G__13963 = chunk__13954_13958;
var G__13964 = count__13955_13959;
var G__13965 = (i__13956_13960 + (1));
seq__13953_13957 = G__13962;
chunk__13954_13958 = G__13963;
count__13955_13959 = G__13964;
i__13956_13960 = G__13965;
continue;
} else {
var temp__4657__auto___13966 = cljs.core.seq.call(null,seq__13953_13957);
if(temp__4657__auto___13966){
var seq__13953_13967__$1 = temp__4657__auto___13966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13953_13967__$1)){
var c__10059__auto___13968 = cljs.core.chunk_first.call(null,seq__13953_13967__$1);
var G__13969 = cljs.core.chunk_rest.call(null,seq__13953_13967__$1);
var G__13970 = c__10059__auto___13968;
var G__13971 = cljs.core.count.call(null,c__10059__auto___13968);
var G__13972 = (0);
seq__13953_13957 = G__13969;
chunk__13954_13958 = G__13970;
count__13955_13959 = G__13971;
i__13956_13960 = G__13972;
continue;
} else {
var lib_13973 = cljs.core.first.call(null,seq__13953_13967__$1);
if(cljs.core.truth_((function (){var or__9245__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13973),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13973),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__9245__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13973),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13973),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13973),"');");

}
}

var G__13974 = cljs.core.next.call(null,seq__13953_13967__$1);
var G__13975 = null;
var G__13976 = (0);
var G__13977 = (0);
seq__13953_13957 = G__13974;
chunk__13954_13958 = G__13975;
count__13955_13959 = G__13976;
i__13956_13960 = G__13977;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13978){
var map__13979 = p__13978;
var map__13979__$1 = ((((!((map__13979 == null)))?((((map__13979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13979):map__13979);
var name = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13981){
var map__13982 = p__13981;
var map__13982__$1 = ((((!((map__13982 == null)))?((((map__13982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13982):map__13982);
var name = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__13984){
var map__13985 = p__13984;
var map__13985__$1 = ((((!((map__13985 == null)))?((((map__13985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13985):map__13985);
var t = cljs.core.get.call(null,map__13985__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13985__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13985__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13985__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13985__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13987_14005 = cljs.core.seq.call(null,protocols);
var chunk__13988_14006 = null;
var count__13989_14007 = (0);
var i__13990_14008 = (0);
while(true){
if((i__13990_14008 < count__13989_14007)){
var protocol_14009 = cljs.core._nth.call(null,chunk__13988_14006,i__13990_14008);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14009)].join('')),"}");

var G__14010 = seq__13987_14005;
var G__14011 = chunk__13988_14006;
var G__14012 = count__13989_14007;
var G__14013 = (i__13990_14008 + (1));
seq__13987_14005 = G__14010;
chunk__13988_14006 = G__14011;
count__13989_14007 = G__14012;
i__13990_14008 = G__14013;
continue;
} else {
var temp__4657__auto___14014 = cljs.core.seq.call(null,seq__13987_14005);
if(temp__4657__auto___14014){
var seq__13987_14015__$1 = temp__4657__auto___14014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13987_14015__$1)){
var c__10059__auto___14016 = cljs.core.chunk_first.call(null,seq__13987_14015__$1);
var G__14017 = cljs.core.chunk_rest.call(null,seq__13987_14015__$1);
var G__14018 = c__10059__auto___14016;
var G__14019 = cljs.core.count.call(null,c__10059__auto___14016);
var G__14020 = (0);
seq__13987_14005 = G__14017;
chunk__13988_14006 = G__14018;
count__13989_14007 = G__14019;
i__13990_14008 = G__14020;
continue;
} else {
var protocol_14021 = cljs.core.first.call(null,seq__13987_14015__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14021)].join('')),"}");

var G__14022 = cljs.core.next.call(null,seq__13987_14015__$1);
var G__14023 = null;
var G__14024 = (0);
var G__14025 = (0);
seq__13987_14005 = G__14022;
chunk__13988_14006 = G__14023;
count__13989_14007 = G__14024;
i__13990_14008 = G__14025;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13991_14026 = cljs.core.seq.call(null,fields__$1);
var chunk__13992_14027 = null;
var count__13993_14028 = (0);
var i__13994_14029 = (0);
while(true){
if((i__13994_14029 < count__13993_14028)){
var fld_14030 = cljs.core._nth.call(null,chunk__13992_14027,i__13994_14029);
cljs.compiler.emitln.call(null,"this.",fld_14030," = ",fld_14030,";");

var G__14031 = seq__13991_14026;
var G__14032 = chunk__13992_14027;
var G__14033 = count__13993_14028;
var G__14034 = (i__13994_14029 + (1));
seq__13991_14026 = G__14031;
chunk__13992_14027 = G__14032;
count__13993_14028 = G__14033;
i__13994_14029 = G__14034;
continue;
} else {
var temp__4657__auto___14035 = cljs.core.seq.call(null,seq__13991_14026);
if(temp__4657__auto___14035){
var seq__13991_14036__$1 = temp__4657__auto___14035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13991_14036__$1)){
var c__10059__auto___14037 = cljs.core.chunk_first.call(null,seq__13991_14036__$1);
var G__14038 = cljs.core.chunk_rest.call(null,seq__13991_14036__$1);
var G__14039 = c__10059__auto___14037;
var G__14040 = cljs.core.count.call(null,c__10059__auto___14037);
var G__14041 = (0);
seq__13991_14026 = G__14038;
chunk__13992_14027 = G__14039;
count__13993_14028 = G__14040;
i__13994_14029 = G__14041;
continue;
} else {
var fld_14042 = cljs.core.first.call(null,seq__13991_14036__$1);
cljs.compiler.emitln.call(null,"this.",fld_14042," = ",fld_14042,";");

var G__14043 = cljs.core.next.call(null,seq__13991_14036__$1);
var G__14044 = null;
var G__14045 = (0);
var G__14046 = (0);
seq__13991_14026 = G__14043;
chunk__13992_14027 = G__14044;
count__13993_14028 = G__14045;
i__13994_14029 = G__14046;
continue;
}
} else {
}
}
break;
}

var seq__13995_14047 = cljs.core.seq.call(null,pmasks);
var chunk__13996_14048 = null;
var count__13997_14049 = (0);
var i__13998_14050 = (0);
while(true){
if((i__13998_14050 < count__13997_14049)){
var vec__13999_14051 = cljs.core._nth.call(null,chunk__13996_14048,i__13998_14050);
var pno_14052 = cljs.core.nth.call(null,vec__13999_14051,(0),null);
var pmask_14053 = cljs.core.nth.call(null,vec__13999_14051,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14052,"$ = ",pmask_14053,";");

var G__14054 = seq__13995_14047;
var G__14055 = chunk__13996_14048;
var G__14056 = count__13997_14049;
var G__14057 = (i__13998_14050 + (1));
seq__13995_14047 = G__14054;
chunk__13996_14048 = G__14055;
count__13997_14049 = G__14056;
i__13998_14050 = G__14057;
continue;
} else {
var temp__4657__auto___14058 = cljs.core.seq.call(null,seq__13995_14047);
if(temp__4657__auto___14058){
var seq__13995_14059__$1 = temp__4657__auto___14058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13995_14059__$1)){
var c__10059__auto___14060 = cljs.core.chunk_first.call(null,seq__13995_14059__$1);
var G__14061 = cljs.core.chunk_rest.call(null,seq__13995_14059__$1);
var G__14062 = c__10059__auto___14060;
var G__14063 = cljs.core.count.call(null,c__10059__auto___14060);
var G__14064 = (0);
seq__13995_14047 = G__14061;
chunk__13996_14048 = G__14062;
count__13997_14049 = G__14063;
i__13998_14050 = G__14064;
continue;
} else {
var vec__14002_14065 = cljs.core.first.call(null,seq__13995_14059__$1);
var pno_14066 = cljs.core.nth.call(null,vec__14002_14065,(0),null);
var pmask_14067 = cljs.core.nth.call(null,vec__14002_14065,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14066,"$ = ",pmask_14067,";");

var G__14068 = cljs.core.next.call(null,seq__13995_14059__$1);
var G__14069 = null;
var G__14070 = (0);
var G__14071 = (0);
seq__13995_14047 = G__14068;
chunk__13996_14048 = G__14069;
count__13997_14049 = G__14070;
i__13998_14050 = G__14071;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__14072){
var map__14073 = p__14072;
var map__14073__$1 = ((((!((map__14073 == null)))?((((map__14073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14073):map__14073);
var t = cljs.core.get.call(null,map__14073__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14073__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14073__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14073__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14073__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14075_14093 = cljs.core.seq.call(null,protocols);
var chunk__14076_14094 = null;
var count__14077_14095 = (0);
var i__14078_14096 = (0);
while(true){
if((i__14078_14096 < count__14077_14095)){
var protocol_14097 = cljs.core._nth.call(null,chunk__14076_14094,i__14078_14096);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14097)].join('')),"}");

var G__14098 = seq__14075_14093;
var G__14099 = chunk__14076_14094;
var G__14100 = count__14077_14095;
var G__14101 = (i__14078_14096 + (1));
seq__14075_14093 = G__14098;
chunk__14076_14094 = G__14099;
count__14077_14095 = G__14100;
i__14078_14096 = G__14101;
continue;
} else {
var temp__4657__auto___14102 = cljs.core.seq.call(null,seq__14075_14093);
if(temp__4657__auto___14102){
var seq__14075_14103__$1 = temp__4657__auto___14102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14075_14103__$1)){
var c__10059__auto___14104 = cljs.core.chunk_first.call(null,seq__14075_14103__$1);
var G__14105 = cljs.core.chunk_rest.call(null,seq__14075_14103__$1);
var G__14106 = c__10059__auto___14104;
var G__14107 = cljs.core.count.call(null,c__10059__auto___14104);
var G__14108 = (0);
seq__14075_14093 = G__14105;
chunk__14076_14094 = G__14106;
count__14077_14095 = G__14107;
i__14078_14096 = G__14108;
continue;
} else {
var protocol_14109 = cljs.core.first.call(null,seq__14075_14103__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14109)].join('')),"}");

var G__14110 = cljs.core.next.call(null,seq__14075_14103__$1);
var G__14111 = null;
var G__14112 = (0);
var G__14113 = (0);
seq__14075_14093 = G__14110;
chunk__14076_14094 = G__14111;
count__14077_14095 = G__14112;
i__14078_14096 = G__14113;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14079_14114 = cljs.core.seq.call(null,fields__$1);
var chunk__14080_14115 = null;
var count__14081_14116 = (0);
var i__14082_14117 = (0);
while(true){
if((i__14082_14117 < count__14081_14116)){
var fld_14118 = cljs.core._nth.call(null,chunk__14080_14115,i__14082_14117);
cljs.compiler.emitln.call(null,"this.",fld_14118," = ",fld_14118,";");

var G__14119 = seq__14079_14114;
var G__14120 = chunk__14080_14115;
var G__14121 = count__14081_14116;
var G__14122 = (i__14082_14117 + (1));
seq__14079_14114 = G__14119;
chunk__14080_14115 = G__14120;
count__14081_14116 = G__14121;
i__14082_14117 = G__14122;
continue;
} else {
var temp__4657__auto___14123 = cljs.core.seq.call(null,seq__14079_14114);
if(temp__4657__auto___14123){
var seq__14079_14124__$1 = temp__4657__auto___14123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14079_14124__$1)){
var c__10059__auto___14125 = cljs.core.chunk_first.call(null,seq__14079_14124__$1);
var G__14126 = cljs.core.chunk_rest.call(null,seq__14079_14124__$1);
var G__14127 = c__10059__auto___14125;
var G__14128 = cljs.core.count.call(null,c__10059__auto___14125);
var G__14129 = (0);
seq__14079_14114 = G__14126;
chunk__14080_14115 = G__14127;
count__14081_14116 = G__14128;
i__14082_14117 = G__14129;
continue;
} else {
var fld_14130 = cljs.core.first.call(null,seq__14079_14124__$1);
cljs.compiler.emitln.call(null,"this.",fld_14130," = ",fld_14130,";");

var G__14131 = cljs.core.next.call(null,seq__14079_14124__$1);
var G__14132 = null;
var G__14133 = (0);
var G__14134 = (0);
seq__14079_14114 = G__14131;
chunk__14080_14115 = G__14132;
count__14081_14116 = G__14133;
i__14082_14117 = G__14134;
continue;
}
} else {
}
}
break;
}

var seq__14083_14135 = cljs.core.seq.call(null,pmasks);
var chunk__14084_14136 = null;
var count__14085_14137 = (0);
var i__14086_14138 = (0);
while(true){
if((i__14086_14138 < count__14085_14137)){
var vec__14087_14139 = cljs.core._nth.call(null,chunk__14084_14136,i__14086_14138);
var pno_14140 = cljs.core.nth.call(null,vec__14087_14139,(0),null);
var pmask_14141 = cljs.core.nth.call(null,vec__14087_14139,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14140,"$ = ",pmask_14141,";");

var G__14142 = seq__14083_14135;
var G__14143 = chunk__14084_14136;
var G__14144 = count__14085_14137;
var G__14145 = (i__14086_14138 + (1));
seq__14083_14135 = G__14142;
chunk__14084_14136 = G__14143;
count__14085_14137 = G__14144;
i__14086_14138 = G__14145;
continue;
} else {
var temp__4657__auto___14146 = cljs.core.seq.call(null,seq__14083_14135);
if(temp__4657__auto___14146){
var seq__14083_14147__$1 = temp__4657__auto___14146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14083_14147__$1)){
var c__10059__auto___14148 = cljs.core.chunk_first.call(null,seq__14083_14147__$1);
var G__14149 = cljs.core.chunk_rest.call(null,seq__14083_14147__$1);
var G__14150 = c__10059__auto___14148;
var G__14151 = cljs.core.count.call(null,c__10059__auto___14148);
var G__14152 = (0);
seq__14083_14135 = G__14149;
chunk__14084_14136 = G__14150;
count__14085_14137 = G__14151;
i__14086_14138 = G__14152;
continue;
} else {
var vec__14090_14153 = cljs.core.first.call(null,seq__14083_14147__$1);
var pno_14154 = cljs.core.nth.call(null,vec__14090_14153,(0),null);
var pmask_14155 = cljs.core.nth.call(null,vec__14090_14153,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14154,"$ = ",pmask_14155,";");

var G__14156 = cljs.core.next.call(null,seq__14083_14147__$1);
var G__14157 = null;
var G__14158 = (0);
var G__14159 = (0);
seq__14083_14135 = G__14156;
chunk__14084_14136 = G__14157;
count__14085_14137 = G__14158;
i__14086_14138 = G__14159;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__14160){
var map__14161 = p__14160;
var map__14161__$1 = ((((!((map__14161 == null)))?((((map__14161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14161):map__14161);
var target = cljs.core.get.call(null,map__14161__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__14161__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__14161__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__14161__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14161__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__14163){
var map__14164 = p__14163;
var map__14164__$1 = ((((!((map__14164 == null)))?((((map__14164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14164):map__14164);
var op = cljs.core.get.call(null,map__14164__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__14164__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__14164__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__14164__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__14164__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__9233__auto__ = code;
if(cljs.core.truth_(and__9233__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__9233__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13048__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13048__auto__))){
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
var seq__14178 = cljs.core.seq.call(null,table);
var chunk__14179 = null;
var count__14180 = (0);
var i__14181 = (0);
while(true){
if((i__14181 < count__14180)){
var vec__14182 = cljs.core._nth.call(null,chunk__14179,i__14181);
var sym = cljs.core.nth.call(null,vec__14182,(0),null);
var value = cljs.core.nth.call(null,vec__14182,(1),null);
var ns_14188 = cljs.core.namespace.call(null,sym);
var name_14189 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__14190 = seq__14178;
var G__14191 = chunk__14179;
var G__14192 = count__14180;
var G__14193 = (i__14181 + (1));
seq__14178 = G__14190;
chunk__14179 = G__14191;
count__14180 = G__14192;
i__14181 = G__14193;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14178);
if(temp__4657__auto__){
var seq__14178__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14178__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__14178__$1);
var G__14194 = cljs.core.chunk_rest.call(null,seq__14178__$1);
var G__14195 = c__10059__auto__;
var G__14196 = cljs.core.count.call(null,c__10059__auto__);
var G__14197 = (0);
seq__14178 = G__14194;
chunk__14179 = G__14195;
count__14180 = G__14196;
i__14181 = G__14197;
continue;
} else {
var vec__14185 = cljs.core.first.call(null,seq__14178__$1);
var sym = cljs.core.nth.call(null,vec__14185,(0),null);
var value = cljs.core.nth.call(null,vec__14185,(1),null);
var ns_14198 = cljs.core.namespace.call(null,sym);
var name_14199 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__14200 = cljs.core.next.call(null,seq__14178__$1);
var G__14201 = null;
var G__14202 = (0);
var G__14203 = (0);
seq__14178 = G__14200;
chunk__14179 = G__14201;
count__14180 = G__14202;
i__14181 = G__14203;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map