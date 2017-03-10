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
var map__50950 = s;
var map__50950__$1 = ((((!((map__50950 == null)))?((((map__50950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50950):map__50950);
var name = cljs.core.get.call(null,map__50950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__50950__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__50953 = info;
var map__50954 = G__50953;
var map__50954__$1 = ((((!((map__50954 == null)))?((((map__50954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50954):map__50954);
var shadow = cljs.core.get.call(null,map__50954__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__50953__$1 = G__50953;
while(true){
var d__$2 = d__$1;
var map__50956 = G__50953__$1;
var map__50956__$1 = ((((!((map__50956 == null)))?((((map__50956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50956):map__50956);
var shadow__$1 = cljs.core.get.call(null,map__50956__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__50958 = (d__$2 + (1));
var G__50959 = shadow__$1;
d__$1 = G__50958;
G__50953__$1 = G__50959;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__50960){
var map__50965 = p__50960;
var map__50965__$1 = ((((!((map__50965 == null)))?((((map__50965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50965):map__50965);
var name_var = map__50965__$1;
var name = cljs.core.get.call(null,map__50965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__50965__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__50967 = info;
var map__50967__$1 = ((((!((map__50967 == null)))?((((map__50967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50967):map__50967);
var ns = cljs.core.get.call(null,map__50967__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__50967__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args50969 = [];
var len__48239__auto___50972 = arguments.length;
var i__48240__auto___50973 = (0);
while(true){
if((i__48240__auto___50973 < len__48239__auto___50972)){
args50969.push((arguments[i__48240__auto___50973]));

var G__50974 = (i__48240__auto___50973 + (1));
i__48240__auto___50973 = G__50974;
continue;
} else {
}
break;
}

var G__50971 = args50969.length;
switch (G__50971) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50969.length)].join('')));

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
var G__50977 = cp;
switch (G__50977) {
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
var seq__50983_50987 = cljs.core.seq.call(null,s);
var chunk__50984_50988 = null;
var count__50985_50989 = (0);
var i__50986_50990 = (0);
while(true){
if((i__50986_50990 < count__50985_50989)){
var c_50991 = cljs.core._nth.call(null,chunk__50984_50988,i__50986_50990);
sb.append(cljs.compiler.escape_char.call(null,c_50991));

var G__50992 = seq__50983_50987;
var G__50993 = chunk__50984_50988;
var G__50994 = count__50985_50989;
var G__50995 = (i__50986_50990 + (1));
seq__50983_50987 = G__50992;
chunk__50984_50988 = G__50993;
count__50985_50989 = G__50994;
i__50986_50990 = G__50995;
continue;
} else {
var temp__4657__auto___50996 = cljs.core.seq.call(null,seq__50983_50987);
if(temp__4657__auto___50996){
var seq__50983_50997__$1 = temp__4657__auto___50996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50983_50997__$1)){
var c__47945__auto___50998 = cljs.core.chunk_first.call(null,seq__50983_50997__$1);
var G__50999 = cljs.core.chunk_rest.call(null,seq__50983_50997__$1);
var G__51000 = c__47945__auto___50998;
var G__51001 = cljs.core.count.call(null,c__47945__auto___50998);
var G__51002 = (0);
seq__50983_50987 = G__50999;
chunk__50984_50988 = G__51000;
count__50985_50989 = G__51001;
i__50986_50990 = G__51002;
continue;
} else {
var c_51003 = cljs.core.first.call(null,seq__50983_50997__$1);
sb.append(cljs.compiler.escape_char.call(null,c_51003));

var G__51004 = cljs.core.next.call(null,seq__50983_50997__$1);
var G__51005 = null;
var G__51006 = (0);
var G__51007 = (0);
seq__50983_50987 = G__51004;
chunk__50984_50988 = G__51005;
count__50985_50989 = G__51006;
i__50986_50990 = G__51007;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__48059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__48060__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__48061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__48062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__48063__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__48063__auto__,method_table__48059__auto__,prefer_table__48060__auto__,method_cache__48061__auto__,cached_hierarchy__48062__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__49052__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__49052__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__51013_51018 = ast;
var map__51013_51019__$1 = ((((!((map__51013_51018 == null)))?((((map__51013_51018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51013_51018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51013_51018):map__51013_51018);
var env_51020 = cljs.core.get.call(null,map__51013_51019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_51020))){
var map__51015_51021 = env_51020;
var map__51015_51022__$1 = ((((!((map__51015_51021 == null)))?((((map__51015_51021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51015_51021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51015_51021):map__51015_51021);
var line_51023 = cljs.core.get.call(null,map__51015_51022__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51024 = cljs.core.get.call(null,map__51015_51022__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__51015_51021,map__51015_51022__$1,line_51023,column_51024,map__51013_51018,map__51013_51019__$1,env_51020,val__49052__auto__){
return (function (m){
var minfo = (function (){var G__51017 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__51017,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__51017;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_51023 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__51015_51021,map__51015_51022__$1,line_51023,column_51024,map__51013_51018,map__51013_51019__$1,env_51020,val__49052__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_51024)?(column_51024 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__51015_51021,map__51015_51022__$1,line_51023,column_51024,map__51013_51018,map__51013_51019__$1,env_51020,val__49052__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__51015_51021,map__51015_51022__$1,line_51023,column_51024,map__51013_51018,map__51013_51019__$1,env_51020,val__49052__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__51015_51021,map__51015_51022__$1,line_51023,column_51024,map__51013_51018,map__51013_51019__$1,env_51020,val__49052__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__51015_51021,map__51015_51022__$1,line_51023,column_51024,map__51013_51018,map__51013_51019__$1,env_51020,val__49052__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__49052__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__48246__auto__ = [];
var len__48239__auto___51031 = arguments.length;
var i__48240__auto___51032 = (0);
while(true){
if((i__48240__auto___51032 < len__48239__auto___51031)){
args__48246__auto__.push((arguments[i__48240__auto___51032]));

var G__51033 = (i__48240__auto___51032 + (1));
i__48240__auto___51032 = G__51033;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((0) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__48247__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__51027_51034 = cljs.core.seq.call(null,xs);
var chunk__51028_51035 = null;
var count__51029_51036 = (0);
var i__51030_51037 = (0);
while(true){
if((i__51030_51037 < count__51029_51036)){
var x_51038 = cljs.core._nth.call(null,chunk__51028_51035,i__51030_51037);
if((x_51038 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_51038)){
cljs.compiler.emit.call(null,x_51038);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_51038)){
cljs.core.apply.call(null,cljs.compiler.emits,x_51038);
} else {
if(goog.isFunction(x_51038)){
x_51038.call(null);
} else {
var s_51039 = cljs.core.print_str.call(null,x_51038);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__51027_51034,chunk__51028_51035,count__51029_51036,i__51030_51037,s_51039,x_51038){
return (function (p1__51025_SHARP_){
return (p1__51025_SHARP_ + cljs.core.count.call(null,s_51039));
});})(seq__51027_51034,chunk__51028_51035,count__51029_51036,i__51030_51037,s_51039,x_51038))
);
}

cljs.core.print.call(null,s_51039);

}
}
}
}

var G__51040 = seq__51027_51034;
var G__51041 = chunk__51028_51035;
var G__51042 = count__51029_51036;
var G__51043 = (i__51030_51037 + (1));
seq__51027_51034 = G__51040;
chunk__51028_51035 = G__51041;
count__51029_51036 = G__51042;
i__51030_51037 = G__51043;
continue;
} else {
var temp__4657__auto___51044 = cljs.core.seq.call(null,seq__51027_51034);
if(temp__4657__auto___51044){
var seq__51027_51045__$1 = temp__4657__auto___51044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51027_51045__$1)){
var c__47945__auto___51046 = cljs.core.chunk_first.call(null,seq__51027_51045__$1);
var G__51047 = cljs.core.chunk_rest.call(null,seq__51027_51045__$1);
var G__51048 = c__47945__auto___51046;
var G__51049 = cljs.core.count.call(null,c__47945__auto___51046);
var G__51050 = (0);
seq__51027_51034 = G__51047;
chunk__51028_51035 = G__51048;
count__51029_51036 = G__51049;
i__51030_51037 = G__51050;
continue;
} else {
var x_51051 = cljs.core.first.call(null,seq__51027_51045__$1);
if((x_51051 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_51051)){
cljs.compiler.emit.call(null,x_51051);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_51051)){
cljs.core.apply.call(null,cljs.compiler.emits,x_51051);
} else {
if(goog.isFunction(x_51051)){
x_51051.call(null);
} else {
var s_51052 = cljs.core.print_str.call(null,x_51051);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__51027_51034,chunk__51028_51035,count__51029_51036,i__51030_51037,s_51052,x_51051,seq__51027_51045__$1,temp__4657__auto___51044){
return (function (p1__51025_SHARP_){
return (p1__51025_SHARP_ + cljs.core.count.call(null,s_51052));
});})(seq__51027_51034,chunk__51028_51035,count__51029_51036,i__51030_51037,s_51052,x_51051,seq__51027_51045__$1,temp__4657__auto___51044))
);
}

cljs.core.print.call(null,s_51052);

}
}
}
}

var G__51053 = cljs.core.next.call(null,seq__51027_51045__$1);
var G__51054 = null;
var G__51055 = (0);
var G__51056 = (0);
seq__51027_51034 = G__51053;
chunk__51028_51035 = G__51054;
count__51029_51036 = G__51055;
i__51030_51037 = G__51056;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq51026){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51026));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__48246__auto__ = [];
var len__48239__auto___51061 = arguments.length;
var i__48240__auto___51062 = (0);
while(true){
if((i__48240__auto___51062 < len__48239__auto___51061)){
args__48246__auto__.push((arguments[i__48240__auto___51062]));

var G__51063 = (i__48240__auto___51062 + (1));
i__48240__auto___51062 = G__51063;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((0) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__48247__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__51058){
var map__51059 = p__51058;
var map__51059__$1 = ((((!((map__51059 == null)))?((((map__51059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51059):map__51059);
var m = map__51059__$1;
var gen_line = cljs.core.get.call(null,map__51059__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq51057){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51057));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__48120__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51066_51068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51067_51069 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51066_51068,_STAR_print_fn_STAR_51067_51069,sb__48120__auto__){
return (function (x__48121__auto__){
return sb__48120__auto__.append(x__48121__auto__);
});})(_STAR_print_newline_STAR_51066_51068,_STAR_print_fn_STAR_51067_51069,sb__48120__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51067_51069;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51066_51068;
}
return [cljs.core.str(sb__48120__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__48059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__48060__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__48061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__48062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__48063__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__48063__auto__,method_table__48059__auto__,prefer_table__48060__auto__,method_cache__48061__auto__,cached_hierarchy__48062__auto__));
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
var vec__51070 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__51070,(0),null);
var flags = cljs.core.nth.call(null,vec__51070,(1),null);
var pattern = cljs.core.nth.call(null,vec__51070,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__51074){
var map__51075 = p__51074;
var map__51075__$1 = ((((!((map__51075 == null)))?((((map__51075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51075):map__51075);
var arg = map__51075__$1;
var info = cljs.core.get.call(null,map__51075__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__51075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__51075__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__47131__auto__ = js_module_name;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__51077 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__51077);
} else {
return G__51077;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__51078){
var map__51079 = p__51078;
var map__51079__$1 = ((((!((map__51079 == null)))?((((map__51079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51079):map__51079);
var arg = map__51079__$1;
var env = cljs.core.get.call(null,map__51079__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__51079__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__51079__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__51079__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__51081 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__51081__$1 = ((((!((map__51081 == null)))?((((map__51081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51081):map__51081);
var name = cljs.core.get.call(null,map__51081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__51083){
var map__51084 = p__51083;
var map__51084__$1 = ((((!((map__51084 == null)))?((((map__51084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51084):map__51084);
var expr = cljs.core.get.call(null,map__51084__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__51084__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__51084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__51086_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51086_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__51087){
var map__51088 = p__51087;
var map__51088__$1 = ((((!((map__51088 == null)))?((((map__51088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51088):map__51088);
var env = cljs.core.get.call(null,map__51088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__51088__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__51088__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__51090){
var map__51091 = p__51090;
var map__51091__$1 = ((((!((map__51091 == null)))?((((map__51091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51091):map__51091);
var items = cljs.core.get.call(null,map__51091__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__51091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__51093){
var map__51094 = p__51093;
var map__51094__$1 = ((((!((map__51094 == null)))?((((map__51094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51094):map__51094);
var items = cljs.core.get.call(null,map__51094__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__51094__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_51096 = cljs.core.count.call(null,items);
if((cnt_51096 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_51096,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__51097_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51097_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__51098){
var map__51099 = p__51098;
var map__51099__$1 = ((((!((map__51099 == null)))?((((map__51099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51099):map__51099);
var items = cljs.core.get.call(null,map__51099__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__51099__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__51101){
var map__51102 = p__51101;
var map__51102__$1 = ((((!((map__51102 == null)))?((((map__51102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51102):map__51102);
var items = cljs.core.get.call(null,map__51102__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__51102__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__51102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___51120 = cljs.core.seq.call(null,items);
if(temp__4657__auto___51120){
var items_51121__$1 = temp__4657__auto___51120;
var vec__51104_51122 = items_51121__$1;
var seq__51105_51123 = cljs.core.seq.call(null,vec__51104_51122);
var first__51106_51124 = cljs.core.first.call(null,seq__51105_51123);
var seq__51105_51125__$1 = cljs.core.next.call(null,seq__51105_51123);
var vec__51107_51126 = first__51106_51124;
var k_51127 = cljs.core.nth.call(null,vec__51107_51126,(0),null);
var v_51128 = cljs.core.nth.call(null,vec__51107_51126,(1),null);
var r_51129 = seq__51105_51125__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_51127),"\": ",v_51128);

var seq__51110_51130 = cljs.core.seq.call(null,r_51129);
var chunk__51111_51131 = null;
var count__51112_51132 = (0);
var i__51113_51133 = (0);
while(true){
if((i__51113_51133 < count__51112_51132)){
var vec__51114_51134 = cljs.core._nth.call(null,chunk__51111_51131,i__51113_51133);
var k_51135__$1 = cljs.core.nth.call(null,vec__51114_51134,(0),null);
var v_51136__$1 = cljs.core.nth.call(null,vec__51114_51134,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_51135__$1),"\": ",v_51136__$1);

var G__51137 = seq__51110_51130;
var G__51138 = chunk__51111_51131;
var G__51139 = count__51112_51132;
var G__51140 = (i__51113_51133 + (1));
seq__51110_51130 = G__51137;
chunk__51111_51131 = G__51138;
count__51112_51132 = G__51139;
i__51113_51133 = G__51140;
continue;
} else {
var temp__4657__auto___51141__$1 = cljs.core.seq.call(null,seq__51110_51130);
if(temp__4657__auto___51141__$1){
var seq__51110_51142__$1 = temp__4657__auto___51141__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51110_51142__$1)){
var c__47945__auto___51143 = cljs.core.chunk_first.call(null,seq__51110_51142__$1);
var G__51144 = cljs.core.chunk_rest.call(null,seq__51110_51142__$1);
var G__51145 = c__47945__auto___51143;
var G__51146 = cljs.core.count.call(null,c__47945__auto___51143);
var G__51147 = (0);
seq__51110_51130 = G__51144;
chunk__51111_51131 = G__51145;
count__51112_51132 = G__51146;
i__51113_51133 = G__51147;
continue;
} else {
var vec__51117_51148 = cljs.core.first.call(null,seq__51110_51142__$1);
var k_51149__$1 = cljs.core.nth.call(null,vec__51117_51148,(0),null);
var v_51150__$1 = cljs.core.nth.call(null,vec__51117_51148,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_51149__$1),"\": ",v_51150__$1);

var G__51151 = cljs.core.next.call(null,seq__51110_51142__$1);
var G__51152 = null;
var G__51153 = (0);
var G__51154 = (0);
seq__51110_51130 = G__51151;
chunk__51111_51131 = G__51152;
count__51112_51132 = G__51153;
i__51113_51133 = G__51154;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__51155){
var map__51156 = p__51155;
var map__51156__$1 = ((((!((map__51156 == null)))?((((map__51156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51156):map__51156);
var form = cljs.core.get.call(null,map__51156__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__51156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__51158){
var map__51161 = p__51158;
var map__51161__$1 = ((((!((map__51161 == null)))?((((map__51161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51161):map__51161);
var op = cljs.core.get.call(null,map__51161__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__51161__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__47119__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__47119__auto__){
var and__47119__auto____$1 = form;
if(cljs.core.truth_(and__47119__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__51163){
var map__51166 = p__51163;
var map__51166__$1 = ((((!((map__51166 == null)))?((((map__51166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51166):map__51166);
var op = cljs.core.get.call(null,map__51166__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__51166__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__47131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__51168){
var map__51169 = p__51168;
var map__51169__$1 = ((((!((map__51169 == null)))?((((map__51169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51169):map__51169);
var test = cljs.core.get.call(null,map__51169__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__51169__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__51169__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__51169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__51169__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__47131__auto__ = unchecked;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__51171){
var map__51172 = p__51171;
var map__51172__$1 = ((((!((map__51172 == null)))?((((map__51172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51172):map__51172);
var v = cljs.core.get.call(null,map__51172__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__51172__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__51172__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__51172__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__51172__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__51174_51192 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__51175_51193 = null;
var count__51176_51194 = (0);
var i__51177_51195 = (0);
while(true){
if((i__51177_51195 < count__51176_51194)){
var vec__51178_51196 = cljs.core._nth.call(null,chunk__51175_51193,i__51177_51195);
var ts_51197 = cljs.core.nth.call(null,vec__51178_51196,(0),null);
var then_51198 = cljs.core.nth.call(null,vec__51178_51196,(1),null);
var seq__51181_51199 = cljs.core.seq.call(null,ts_51197);
var chunk__51182_51200 = null;
var count__51183_51201 = (0);
var i__51184_51202 = (0);
while(true){
if((i__51184_51202 < count__51183_51201)){
var test_51203 = cljs.core._nth.call(null,chunk__51182_51200,i__51184_51202);
cljs.compiler.emitln.call(null,"case ",test_51203,":");

var G__51204 = seq__51181_51199;
var G__51205 = chunk__51182_51200;
var G__51206 = count__51183_51201;
var G__51207 = (i__51184_51202 + (1));
seq__51181_51199 = G__51204;
chunk__51182_51200 = G__51205;
count__51183_51201 = G__51206;
i__51184_51202 = G__51207;
continue;
} else {
var temp__4657__auto___51208 = cljs.core.seq.call(null,seq__51181_51199);
if(temp__4657__auto___51208){
var seq__51181_51209__$1 = temp__4657__auto___51208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51181_51209__$1)){
var c__47945__auto___51210 = cljs.core.chunk_first.call(null,seq__51181_51209__$1);
var G__51211 = cljs.core.chunk_rest.call(null,seq__51181_51209__$1);
var G__51212 = c__47945__auto___51210;
var G__51213 = cljs.core.count.call(null,c__47945__auto___51210);
var G__51214 = (0);
seq__51181_51199 = G__51211;
chunk__51182_51200 = G__51212;
count__51183_51201 = G__51213;
i__51184_51202 = G__51214;
continue;
} else {
var test_51215 = cljs.core.first.call(null,seq__51181_51209__$1);
cljs.compiler.emitln.call(null,"case ",test_51215,":");

var G__51216 = cljs.core.next.call(null,seq__51181_51209__$1);
var G__51217 = null;
var G__51218 = (0);
var G__51219 = (0);
seq__51181_51199 = G__51216;
chunk__51182_51200 = G__51217;
count__51183_51201 = G__51218;
i__51184_51202 = G__51219;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_51198);
} else {
cljs.compiler.emitln.call(null,then_51198);
}

cljs.compiler.emitln.call(null,"break;");

var G__51220 = seq__51174_51192;
var G__51221 = chunk__51175_51193;
var G__51222 = count__51176_51194;
var G__51223 = (i__51177_51195 + (1));
seq__51174_51192 = G__51220;
chunk__51175_51193 = G__51221;
count__51176_51194 = G__51222;
i__51177_51195 = G__51223;
continue;
} else {
var temp__4657__auto___51224 = cljs.core.seq.call(null,seq__51174_51192);
if(temp__4657__auto___51224){
var seq__51174_51225__$1 = temp__4657__auto___51224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51174_51225__$1)){
var c__47945__auto___51226 = cljs.core.chunk_first.call(null,seq__51174_51225__$1);
var G__51227 = cljs.core.chunk_rest.call(null,seq__51174_51225__$1);
var G__51228 = c__47945__auto___51226;
var G__51229 = cljs.core.count.call(null,c__47945__auto___51226);
var G__51230 = (0);
seq__51174_51192 = G__51227;
chunk__51175_51193 = G__51228;
count__51176_51194 = G__51229;
i__51177_51195 = G__51230;
continue;
} else {
var vec__51185_51231 = cljs.core.first.call(null,seq__51174_51225__$1);
var ts_51232 = cljs.core.nth.call(null,vec__51185_51231,(0),null);
var then_51233 = cljs.core.nth.call(null,vec__51185_51231,(1),null);
var seq__51188_51234 = cljs.core.seq.call(null,ts_51232);
var chunk__51189_51235 = null;
var count__51190_51236 = (0);
var i__51191_51237 = (0);
while(true){
if((i__51191_51237 < count__51190_51236)){
var test_51238 = cljs.core._nth.call(null,chunk__51189_51235,i__51191_51237);
cljs.compiler.emitln.call(null,"case ",test_51238,":");

var G__51239 = seq__51188_51234;
var G__51240 = chunk__51189_51235;
var G__51241 = count__51190_51236;
var G__51242 = (i__51191_51237 + (1));
seq__51188_51234 = G__51239;
chunk__51189_51235 = G__51240;
count__51190_51236 = G__51241;
i__51191_51237 = G__51242;
continue;
} else {
var temp__4657__auto___51243__$1 = cljs.core.seq.call(null,seq__51188_51234);
if(temp__4657__auto___51243__$1){
var seq__51188_51244__$1 = temp__4657__auto___51243__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51188_51244__$1)){
var c__47945__auto___51245 = cljs.core.chunk_first.call(null,seq__51188_51244__$1);
var G__51246 = cljs.core.chunk_rest.call(null,seq__51188_51244__$1);
var G__51247 = c__47945__auto___51245;
var G__51248 = cljs.core.count.call(null,c__47945__auto___51245);
var G__51249 = (0);
seq__51188_51234 = G__51246;
chunk__51189_51235 = G__51247;
count__51190_51236 = G__51248;
i__51191_51237 = G__51249;
continue;
} else {
var test_51250 = cljs.core.first.call(null,seq__51188_51244__$1);
cljs.compiler.emitln.call(null,"case ",test_51250,":");

var G__51251 = cljs.core.next.call(null,seq__51188_51244__$1);
var G__51252 = null;
var G__51253 = (0);
var G__51254 = (0);
seq__51188_51234 = G__51251;
chunk__51189_51235 = G__51252;
count__51190_51236 = G__51253;
i__51191_51237 = G__51254;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_51233);
} else {
cljs.compiler.emitln.call(null,then_51233);
}

cljs.compiler.emitln.call(null,"break;");

var G__51255 = cljs.core.next.call(null,seq__51174_51225__$1);
var G__51256 = null;
var G__51257 = (0);
var G__51258 = (0);
seq__51174_51192 = G__51255;
chunk__51175_51193 = G__51256;
count__51176_51194 = G__51257;
i__51177_51195 = G__51258;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__51259){
var map__51260 = p__51259;
var map__51260__$1 = ((((!((map__51260 == null)))?((((map__51260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51260):map__51260);
var throw$ = cljs.core.get.call(null,map__51260__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__51260__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__51267 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__51267,(0),null);
var rstr = cljs.core.nth.call(null,vec__51267,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__51267,fstr,rstr,ret_t,axstr){
return (function (p1__51262_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__51262_SHARP_);
});})(idx,vec__51267,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__51270 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__51270),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__51270;
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
return (function (p1__51271_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__51271_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__51278 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__51279 = cljs.core.seq.call(null,vec__51278);
var first__51280 = cljs.core.first.call(null,seq__51279);
var seq__51279__$1 = cljs.core.next.call(null,seq__51279);
var p = first__51280;
var first__51280__$1 = cljs.core.first.call(null,seq__51279__$1);
var seq__51279__$2 = cljs.core.next.call(null,seq__51279__$1);
var ts = first__51280__$1;
var first__51280__$2 = cljs.core.first.call(null,seq__51279__$2);
var seq__51279__$3 = cljs.core.next.call(null,seq__51279__$2);
var n = first__51280__$2;
var xs = seq__51279__$3;
if(cljs.core.truth_((function (){var and__47119__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__47119__auto__){
var and__47119__auto____$1 = ts;
if(cljs.core.truth_(and__47119__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__51281 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__51282 = cljs.core.seq.call(null,vec__51281);
var first__51283 = cljs.core.first.call(null,seq__51282);
var seq__51282__$1 = cljs.core.next.call(null,seq__51282);
var p = first__51283;
var first__51283__$1 = cljs.core.first.call(null,seq__51282__$1);
var seq__51282__$2 = cljs.core.next.call(null,seq__51282__$1);
var ts = first__51283__$1;
var xs = seq__51282__$2;
if(cljs.core.truth_((function (){var and__47119__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__47119__auto__){
var and__47119__auto____$1 = ts;
if(cljs.core.truth_(and__47119__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
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
var args51285 = [];
var len__48239__auto___51320 = arguments.length;
var i__48240__auto___51321 = (0);
while(true){
if((i__48240__auto___51321 < len__48239__auto___51320)){
args51285.push((arguments[i__48240__auto___51321]));

var G__51322 = (i__48240__auto___51321 + (1));
i__48240__auto___51321 = G__51322;
continue;
} else {
}
break;
}

var G__51287 = args51285.length;
switch (G__51287) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51285.length)].join('')));

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
var vec__51309 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__51284_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__51284_SHARP_);
} else {
return p1__51284_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__51310 = cljs.core.seq.call(null,vec__51309);
var first__51311 = cljs.core.first.call(null,seq__51310);
var seq__51310__$1 = cljs.core.next.call(null,seq__51310);
var x = first__51311;
var ys = seq__51310__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__51312 = cljs.core.seq.call(null,ys);
var chunk__51313 = null;
var count__51314 = (0);
var i__51315 = (0);
while(true){
if((i__51315 < count__51314)){
var next_line = cljs.core._nth.call(null,chunk__51313,i__51315);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__51324 = seq__51312;
var G__51325 = chunk__51313;
var G__51326 = count__51314;
var G__51327 = (i__51315 + (1));
seq__51312 = G__51324;
chunk__51313 = G__51325;
count__51314 = G__51326;
i__51315 = G__51327;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51312);
if(temp__4657__auto__){
var seq__51312__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51312__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__51312__$1);
var G__51328 = cljs.core.chunk_rest.call(null,seq__51312__$1);
var G__51329 = c__47945__auto__;
var G__51330 = cljs.core.count.call(null,c__47945__auto__);
var G__51331 = (0);
seq__51312 = G__51328;
chunk__51313 = G__51329;
count__51314 = G__51330;
i__51315 = G__51331;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__51312__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__51332 = cljs.core.next.call(null,seq__51312__$1);
var G__51333 = null;
var G__51334 = (0);
var G__51335 = (0);
seq__51312 = G__51332;
chunk__51313 = G__51333;
count__51314 = G__51334;
i__51315 = G__51335;
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

var seq__51316_51336 = cljs.core.seq.call(null,docs__$2);
var chunk__51317_51337 = null;
var count__51318_51338 = (0);
var i__51319_51339 = (0);
while(true){
if((i__51319_51339 < count__51318_51338)){
var e_51340 = cljs.core._nth.call(null,chunk__51317_51337,i__51319_51339);
if(cljs.core.truth_(e_51340)){
print_comment_lines.call(null,e_51340);
} else {
}

var G__51341 = seq__51316_51336;
var G__51342 = chunk__51317_51337;
var G__51343 = count__51318_51338;
var G__51344 = (i__51319_51339 + (1));
seq__51316_51336 = G__51341;
chunk__51317_51337 = G__51342;
count__51318_51338 = G__51343;
i__51319_51339 = G__51344;
continue;
} else {
var temp__4657__auto___51345 = cljs.core.seq.call(null,seq__51316_51336);
if(temp__4657__auto___51345){
var seq__51316_51346__$1 = temp__4657__auto___51345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51316_51346__$1)){
var c__47945__auto___51347 = cljs.core.chunk_first.call(null,seq__51316_51346__$1);
var G__51348 = cljs.core.chunk_rest.call(null,seq__51316_51346__$1);
var G__51349 = c__47945__auto___51347;
var G__51350 = cljs.core.count.call(null,c__47945__auto___51347);
var G__51351 = (0);
seq__51316_51336 = G__51348;
chunk__51317_51337 = G__51349;
count__51318_51338 = G__51350;
i__51319_51339 = G__51351;
continue;
} else {
var e_51352 = cljs.core.first.call(null,seq__51316_51346__$1);
if(cljs.core.truth_(e_51352)){
print_comment_lines.call(null,e_51352);
} else {
}

var G__51353 = cljs.core.next.call(null,seq__51316_51346__$1);
var G__51354 = null;
var G__51355 = (0);
var G__51356 = (0);
seq__51316_51336 = G__51353;
chunk__51317_51337 = G__51354;
count__51318_51338 = G__51355;
i__51319_51339 = G__51356;
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
var and__47119__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__51358_SHARP_){
return goog.string.startsWith(p1__51358_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__47119__auto__)){
var and__47119__auto____$1 = opts;
if(cljs.core.truth_(and__47119__auto____$1)){
var and__47119__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__47119__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__47119__auto____$2;
}
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__51359){
var map__51360 = p__51359;
var map__51360__$1 = ((((!((map__51360 == null)))?((((map__51360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51360):map__51360);
var name = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__51360__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__47131__auto__ = init;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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

if(cljs.core.truth_((function (){var and__47119__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__47119__auto__)){
return test;
} else {
return and__47119__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__51362){
var map__51383 = p__51362;
var map__51383__$1 = ((((!((map__51383 == null)))?((((map__51383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51383):map__51383);
var name = cljs.core.get.call(null,map__51383__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__51383__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__51383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__51385_51403 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__51386_51404 = null;
var count__51387_51405 = (0);
var i__51388_51406 = (0);
while(true){
if((i__51388_51406 < count__51387_51405)){
var vec__51389_51407 = cljs.core._nth.call(null,chunk__51386_51404,i__51388_51406);
var i_51408 = cljs.core.nth.call(null,vec__51389_51407,(0),null);
var param_51409 = cljs.core.nth.call(null,vec__51389_51407,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_51409);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__51410 = seq__51385_51403;
var G__51411 = chunk__51386_51404;
var G__51412 = count__51387_51405;
var G__51413 = (i__51388_51406 + (1));
seq__51385_51403 = G__51410;
chunk__51386_51404 = G__51411;
count__51387_51405 = G__51412;
i__51388_51406 = G__51413;
continue;
} else {
var temp__4657__auto___51414 = cljs.core.seq.call(null,seq__51385_51403);
if(temp__4657__auto___51414){
var seq__51385_51415__$1 = temp__4657__auto___51414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51385_51415__$1)){
var c__47945__auto___51416 = cljs.core.chunk_first.call(null,seq__51385_51415__$1);
var G__51417 = cljs.core.chunk_rest.call(null,seq__51385_51415__$1);
var G__51418 = c__47945__auto___51416;
var G__51419 = cljs.core.count.call(null,c__47945__auto___51416);
var G__51420 = (0);
seq__51385_51403 = G__51417;
chunk__51386_51404 = G__51418;
count__51387_51405 = G__51419;
i__51388_51406 = G__51420;
continue;
} else {
var vec__51392_51421 = cljs.core.first.call(null,seq__51385_51415__$1);
var i_51422 = cljs.core.nth.call(null,vec__51392_51421,(0),null);
var param_51423 = cljs.core.nth.call(null,vec__51392_51421,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_51423);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__51424 = cljs.core.next.call(null,seq__51385_51415__$1);
var G__51425 = null;
var G__51426 = (0);
var G__51427 = (0);
seq__51385_51403 = G__51424;
chunk__51386_51404 = G__51425;
count__51387_51405 = G__51426;
i__51388_51406 = G__51427;
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

var seq__51395_51428 = cljs.core.seq.call(null,params);
var chunk__51396_51429 = null;
var count__51397_51430 = (0);
var i__51398_51431 = (0);
while(true){
if((i__51398_51431 < count__51397_51430)){
var param_51432 = cljs.core._nth.call(null,chunk__51396_51429,i__51398_51431);
cljs.compiler.emit.call(null,param_51432);

if(cljs.core._EQ_.call(null,param_51432,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51433 = seq__51395_51428;
var G__51434 = chunk__51396_51429;
var G__51435 = count__51397_51430;
var G__51436 = (i__51398_51431 + (1));
seq__51395_51428 = G__51433;
chunk__51396_51429 = G__51434;
count__51397_51430 = G__51435;
i__51398_51431 = G__51436;
continue;
} else {
var temp__4657__auto___51437 = cljs.core.seq.call(null,seq__51395_51428);
if(temp__4657__auto___51437){
var seq__51395_51438__$1 = temp__4657__auto___51437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51395_51438__$1)){
var c__47945__auto___51439 = cljs.core.chunk_first.call(null,seq__51395_51438__$1);
var G__51440 = cljs.core.chunk_rest.call(null,seq__51395_51438__$1);
var G__51441 = c__47945__auto___51439;
var G__51442 = cljs.core.count.call(null,c__47945__auto___51439);
var G__51443 = (0);
seq__51395_51428 = G__51440;
chunk__51396_51429 = G__51441;
count__51397_51430 = G__51442;
i__51398_51431 = G__51443;
continue;
} else {
var param_51444 = cljs.core.first.call(null,seq__51395_51438__$1);
cljs.compiler.emit.call(null,param_51444);

if(cljs.core._EQ_.call(null,param_51444,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51445 = cljs.core.next.call(null,seq__51395_51438__$1);
var G__51446 = null;
var G__51447 = (0);
var G__51448 = (0);
seq__51395_51428 = G__51445;
chunk__51396_51429 = G__51446;
count__51397_51430 = G__51447;
i__51398_51431 = G__51448;
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

var seq__51399_51449 = cljs.core.seq.call(null,params);
var chunk__51400_51450 = null;
var count__51401_51451 = (0);
var i__51402_51452 = (0);
while(true){
if((i__51402_51452 < count__51401_51451)){
var param_51453 = cljs.core._nth.call(null,chunk__51400_51450,i__51402_51452);
cljs.compiler.emit.call(null,param_51453);

if(cljs.core._EQ_.call(null,param_51453,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51454 = seq__51399_51449;
var G__51455 = chunk__51400_51450;
var G__51456 = count__51401_51451;
var G__51457 = (i__51402_51452 + (1));
seq__51399_51449 = G__51454;
chunk__51400_51450 = G__51455;
count__51401_51451 = G__51456;
i__51402_51452 = G__51457;
continue;
} else {
var temp__4657__auto___51458 = cljs.core.seq.call(null,seq__51399_51449);
if(temp__4657__auto___51458){
var seq__51399_51459__$1 = temp__4657__auto___51458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51399_51459__$1)){
var c__47945__auto___51460 = cljs.core.chunk_first.call(null,seq__51399_51459__$1);
var G__51461 = cljs.core.chunk_rest.call(null,seq__51399_51459__$1);
var G__51462 = c__47945__auto___51460;
var G__51463 = cljs.core.count.call(null,c__47945__auto___51460);
var G__51464 = (0);
seq__51399_51449 = G__51461;
chunk__51400_51450 = G__51462;
count__51401_51451 = G__51463;
i__51402_51452 = G__51464;
continue;
} else {
var param_51465 = cljs.core.first.call(null,seq__51399_51459__$1);
cljs.compiler.emit.call(null,param_51465);

if(cljs.core._EQ_.call(null,param_51465,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51466 = cljs.core.next.call(null,seq__51399_51459__$1);
var G__51467 = null;
var G__51468 = (0);
var G__51469 = (0);
seq__51399_51449 = G__51466;
chunk__51400_51450 = G__51467;
count__51401_51451 = G__51468;
i__51402_51452 = G__51469;
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
var seq__51474 = cljs.core.seq.call(null,params);
var chunk__51475 = null;
var count__51476 = (0);
var i__51477 = (0);
while(true){
if((i__51477 < count__51476)){
var param = cljs.core._nth.call(null,chunk__51475,i__51477);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51478 = seq__51474;
var G__51479 = chunk__51475;
var G__51480 = count__51476;
var G__51481 = (i__51477 + (1));
seq__51474 = G__51478;
chunk__51475 = G__51479;
count__51476 = G__51480;
i__51477 = G__51481;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51474);
if(temp__4657__auto__){
var seq__51474__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51474__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__51474__$1);
var G__51482 = cljs.core.chunk_rest.call(null,seq__51474__$1);
var G__51483 = c__47945__auto__;
var G__51484 = cljs.core.count.call(null,c__47945__auto__);
var G__51485 = (0);
seq__51474 = G__51482;
chunk__51475 = G__51483;
count__51476 = G__51484;
i__51477 = G__51485;
continue;
} else {
var param = cljs.core.first.call(null,seq__51474__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51486 = cljs.core.next.call(null,seq__51474__$1);
var G__51487 = null;
var G__51488 = (0);
var G__51489 = (0);
seq__51474 = G__51486;
chunk__51475 = G__51487;
count__51476 = G__51488;
i__51477 = G__51489;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__51490){
var map__51493 = p__51490;
var map__51493__$1 = ((((!((map__51493 == null)))?((((map__51493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51493):map__51493);
var type = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__51495){
var map__51506 = p__51495;
var map__51506__$1 = ((((!((map__51506 == null)))?((((map__51506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51506):map__51506);
var f = map__51506__$1;
var type = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__51506__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_51516__$1 = (function (){var or__47131__auto__ = name;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_51517 = cljs.compiler.munge.call(null,name_51516__$1);
var delegate_name_51518 = [cljs.core.str(mname_51517),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_51518," = function (");

var seq__51508_51519 = cljs.core.seq.call(null,params);
var chunk__51509_51520 = null;
var count__51510_51521 = (0);
var i__51511_51522 = (0);
while(true){
if((i__51511_51522 < count__51510_51521)){
var param_51523 = cljs.core._nth.call(null,chunk__51509_51520,i__51511_51522);
cljs.compiler.emit.call(null,param_51523);

if(cljs.core._EQ_.call(null,param_51523,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51524 = seq__51508_51519;
var G__51525 = chunk__51509_51520;
var G__51526 = count__51510_51521;
var G__51527 = (i__51511_51522 + (1));
seq__51508_51519 = G__51524;
chunk__51509_51520 = G__51525;
count__51510_51521 = G__51526;
i__51511_51522 = G__51527;
continue;
} else {
var temp__4657__auto___51528 = cljs.core.seq.call(null,seq__51508_51519);
if(temp__4657__auto___51528){
var seq__51508_51529__$1 = temp__4657__auto___51528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51508_51529__$1)){
var c__47945__auto___51530 = cljs.core.chunk_first.call(null,seq__51508_51529__$1);
var G__51531 = cljs.core.chunk_rest.call(null,seq__51508_51529__$1);
var G__51532 = c__47945__auto___51530;
var G__51533 = cljs.core.count.call(null,c__47945__auto___51530);
var G__51534 = (0);
seq__51508_51519 = G__51531;
chunk__51509_51520 = G__51532;
count__51510_51521 = G__51533;
i__51511_51522 = G__51534;
continue;
} else {
var param_51535 = cljs.core.first.call(null,seq__51508_51529__$1);
cljs.compiler.emit.call(null,param_51535);

if(cljs.core._EQ_.call(null,param_51535,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51536 = cljs.core.next.call(null,seq__51508_51529__$1);
var G__51537 = null;
var G__51538 = (0);
var G__51539 = (0);
seq__51508_51519 = G__51536;
chunk__51509_51520 = G__51537;
count__51510_51521 = G__51538;
i__51511_51522 = G__51539;
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

cljs.compiler.emitln.call(null,"var ",mname_51517," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_51540 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_51540,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_51518,".call(this,");

var seq__51512_51541 = cljs.core.seq.call(null,params);
var chunk__51513_51542 = null;
var count__51514_51543 = (0);
var i__51515_51544 = (0);
while(true){
if((i__51515_51544 < count__51514_51543)){
var param_51545 = cljs.core._nth.call(null,chunk__51513_51542,i__51515_51544);
cljs.compiler.emit.call(null,param_51545);

if(cljs.core._EQ_.call(null,param_51545,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51546 = seq__51512_51541;
var G__51547 = chunk__51513_51542;
var G__51548 = count__51514_51543;
var G__51549 = (i__51515_51544 + (1));
seq__51512_51541 = G__51546;
chunk__51513_51542 = G__51547;
count__51514_51543 = G__51548;
i__51515_51544 = G__51549;
continue;
} else {
var temp__4657__auto___51550 = cljs.core.seq.call(null,seq__51512_51541);
if(temp__4657__auto___51550){
var seq__51512_51551__$1 = temp__4657__auto___51550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51512_51551__$1)){
var c__47945__auto___51552 = cljs.core.chunk_first.call(null,seq__51512_51551__$1);
var G__51553 = cljs.core.chunk_rest.call(null,seq__51512_51551__$1);
var G__51554 = c__47945__auto___51552;
var G__51555 = cljs.core.count.call(null,c__47945__auto___51552);
var G__51556 = (0);
seq__51512_51541 = G__51553;
chunk__51513_51542 = G__51554;
count__51514_51543 = G__51555;
i__51515_51544 = G__51556;
continue;
} else {
var param_51557 = cljs.core.first.call(null,seq__51512_51551__$1);
cljs.compiler.emit.call(null,param_51557);

if(cljs.core._EQ_.call(null,param_51557,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__51558 = cljs.core.next.call(null,seq__51512_51551__$1);
var G__51559 = null;
var G__51560 = (0);
var G__51561 = (0);
seq__51512_51541 = G__51558;
chunk__51513_51542 = G__51559;
count__51514_51543 = G__51560;
i__51515_51544 = G__51561;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_51517,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_51517,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_51516__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_51517,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_51518,";");

cljs.compiler.emitln.call(null,"return ",mname_51517,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__51565){
var map__51566 = p__51565;
var map__51566__$1 = ((((!((map__51566 == null)))?((((map__51566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51566):map__51566);
var name = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__51566__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__51562_SHARP_){
var and__47119__auto__ = p1__51562_SHARP_;
if(cljs.core.truth_(and__47119__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__51562_SHARP_));
} else {
return and__47119__auto__;
}
});})(map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_51601__$1 = (function (){var or__47131__auto__ = name;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_51602 = cljs.compiler.munge.call(null,name_51601__$1);
var maxparams_51603 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_51604 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_51601__$1,mname_51602,maxparams_51603,loop_locals,map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_51602),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_51601__$1,mname_51602,maxparams_51603,loop_locals,map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_51605 = cljs.core.sort_by.call(null,((function (name_51601__$1,mname_51602,maxparams_51603,mmap_51604,loop_locals,map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__51563_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__51563_SHARP_)));
});})(name_51601__$1,mname_51602,maxparams_51603,mmap_51604,loop_locals,map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_51604));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_51602," = null;");

var seq__51568_51606 = cljs.core.seq.call(null,ms_51605);
var chunk__51569_51607 = null;
var count__51570_51608 = (0);
var i__51571_51609 = (0);
while(true){
if((i__51571_51609 < count__51570_51608)){
var vec__51572_51610 = cljs.core._nth.call(null,chunk__51569_51607,i__51571_51609);
var n_51611 = cljs.core.nth.call(null,vec__51572_51610,(0),null);
var meth_51612 = cljs.core.nth.call(null,vec__51572_51610,(1),null);
cljs.compiler.emits.call(null,"var ",n_51611," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_51612))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_51612);
} else {
cljs.compiler.emit_fn_method.call(null,meth_51612);
}

cljs.compiler.emitln.call(null,";");

var G__51613 = seq__51568_51606;
var G__51614 = chunk__51569_51607;
var G__51615 = count__51570_51608;
var G__51616 = (i__51571_51609 + (1));
seq__51568_51606 = G__51613;
chunk__51569_51607 = G__51614;
count__51570_51608 = G__51615;
i__51571_51609 = G__51616;
continue;
} else {
var temp__4657__auto___51617 = cljs.core.seq.call(null,seq__51568_51606);
if(temp__4657__auto___51617){
var seq__51568_51618__$1 = temp__4657__auto___51617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51568_51618__$1)){
var c__47945__auto___51619 = cljs.core.chunk_first.call(null,seq__51568_51618__$1);
var G__51620 = cljs.core.chunk_rest.call(null,seq__51568_51618__$1);
var G__51621 = c__47945__auto___51619;
var G__51622 = cljs.core.count.call(null,c__47945__auto___51619);
var G__51623 = (0);
seq__51568_51606 = G__51620;
chunk__51569_51607 = G__51621;
count__51570_51608 = G__51622;
i__51571_51609 = G__51623;
continue;
} else {
var vec__51575_51624 = cljs.core.first.call(null,seq__51568_51618__$1);
var n_51625 = cljs.core.nth.call(null,vec__51575_51624,(0),null);
var meth_51626 = cljs.core.nth.call(null,vec__51575_51624,(1),null);
cljs.compiler.emits.call(null,"var ",n_51625," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_51626))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_51626);
} else {
cljs.compiler.emit_fn_method.call(null,meth_51626);
}

cljs.compiler.emitln.call(null,";");

var G__51627 = cljs.core.next.call(null,seq__51568_51618__$1);
var G__51628 = null;
var G__51629 = (0);
var G__51630 = (0);
seq__51568_51606 = G__51627;
chunk__51569_51607 = G__51628;
count__51570_51608 = G__51629;
i__51571_51609 = G__51630;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_51602," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_51603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_51603)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_51603));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__51578_51631 = cljs.core.seq.call(null,ms_51605);
var chunk__51579_51632 = null;
var count__51580_51633 = (0);
var i__51581_51634 = (0);
while(true){
if((i__51581_51634 < count__51580_51633)){
var vec__51582_51635 = cljs.core._nth.call(null,chunk__51579_51632,i__51581_51634);
var n_51636 = cljs.core.nth.call(null,vec__51582_51635,(0),null);
var meth_51637 = cljs.core.nth.call(null,vec__51582_51635,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_51637))){
cljs.compiler.emitln.call(null,"default:");

var restarg_51638 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_51638," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_51639 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_51638," = new cljs.core.IndexedSeq(",a_51639,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_51636,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_51603)),(((cljs.core.count.call(null,maxparams_51603) > (1)))?", ":null),restarg_51638,");");
} else {
var pcnt_51640 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51637));
cljs.compiler.emitln.call(null,"case ",pcnt_51640,":");

cljs.compiler.emitln.call(null,"return ",n_51636,".call(this",(((pcnt_51640 === (0)))?null:cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_51640,maxparams_51603));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),",")),");");
}

var G__51641 = seq__51578_51631;
var G__51642 = chunk__51579_51632;
var G__51643 = count__51580_51633;
var G__51644 = (i__51581_51634 + (1));
seq__51578_51631 = G__51641;
chunk__51579_51632 = G__51642;
count__51580_51633 = G__51643;
i__51581_51634 = G__51644;
continue;
} else {
var temp__4657__auto___51645 = cljs.core.seq.call(null,seq__51578_51631);
if(temp__4657__auto___51645){
var seq__51578_51646__$1 = temp__4657__auto___51645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51578_51646__$1)){
var c__47945__auto___51647 = cljs.core.chunk_first.call(null,seq__51578_51646__$1);
var G__51648 = cljs.core.chunk_rest.call(null,seq__51578_51646__$1);
var G__51649 = c__47945__auto___51647;
var G__51650 = cljs.core.count.call(null,c__47945__auto___51647);
var G__51651 = (0);
seq__51578_51631 = G__51648;
chunk__51579_51632 = G__51649;
count__51580_51633 = G__51650;
i__51581_51634 = G__51651;
continue;
} else {
var vec__51585_51652 = cljs.core.first.call(null,seq__51578_51646__$1);
var n_51653 = cljs.core.nth.call(null,vec__51585_51652,(0),null);
var meth_51654 = cljs.core.nth.call(null,vec__51585_51652,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_51654))){
cljs.compiler.emitln.call(null,"default:");

var restarg_51655 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_51655," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_51656 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_51655," = new cljs.core.IndexedSeq(",a_51656,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_51653,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_51603)),(((cljs.core.count.call(null,maxparams_51603) > (1)))?", ":null),restarg_51655,");");
} else {
var pcnt_51657 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51654));
cljs.compiler.emitln.call(null,"case ",pcnt_51657,":");

cljs.compiler.emitln.call(null,"return ",n_51653,".call(this",(((pcnt_51657 === (0)))?null:cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_51657,maxparams_51603));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),",")),");");
}

var G__51658 = cljs.core.next.call(null,seq__51578_51646__$1);
var G__51659 = null;
var G__51660 = (0);
var G__51661 = (0);
seq__51578_51631 = G__51658;
chunk__51579_51632 = G__51659;
count__51580_51633 = G__51660;
i__51581_51634 = G__51661;
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
cljs.compiler.emitln.call(null,mname_51602,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_51602,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_51601__$1,mname_51602,maxparams_51603,mmap_51604,ms_51605,loop_locals,map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__51564_SHARP_){
var vec__51588 = p1__51564_SHARP_;
var n = cljs.core.nth.call(null,vec__51588,(0),null);
var m = cljs.core.nth.call(null,vec__51588,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_51601__$1,mname_51602,maxparams_51603,mmap_51604,ms_51605,loop_locals,map__51566,map__51566__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_51605),".cljs$lang$applyTo;");
} else {
}

var seq__51591_51662 = cljs.core.seq.call(null,ms_51605);
var chunk__51592_51663 = null;
var count__51593_51664 = (0);
var i__51594_51665 = (0);
while(true){
if((i__51594_51665 < count__51593_51664)){
var vec__51595_51666 = cljs.core._nth.call(null,chunk__51592_51663,i__51594_51665);
var n_51667 = cljs.core.nth.call(null,vec__51595_51666,(0),null);
var meth_51668 = cljs.core.nth.call(null,vec__51595_51666,(1),null);
var c_51669 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51668));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_51668))){
cljs.compiler.emitln.call(null,mname_51602,".cljs$core$IFn$_invoke$arity$variadic = ",n_51667,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_51602,".cljs$core$IFn$_invoke$arity$",c_51669," = ",n_51667,";");
}

var G__51670 = seq__51591_51662;
var G__51671 = chunk__51592_51663;
var G__51672 = count__51593_51664;
var G__51673 = (i__51594_51665 + (1));
seq__51591_51662 = G__51670;
chunk__51592_51663 = G__51671;
count__51593_51664 = G__51672;
i__51594_51665 = G__51673;
continue;
} else {
var temp__4657__auto___51674 = cljs.core.seq.call(null,seq__51591_51662);
if(temp__4657__auto___51674){
var seq__51591_51675__$1 = temp__4657__auto___51674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51591_51675__$1)){
var c__47945__auto___51676 = cljs.core.chunk_first.call(null,seq__51591_51675__$1);
var G__51677 = cljs.core.chunk_rest.call(null,seq__51591_51675__$1);
var G__51678 = c__47945__auto___51676;
var G__51679 = cljs.core.count.call(null,c__47945__auto___51676);
var G__51680 = (0);
seq__51591_51662 = G__51677;
chunk__51592_51663 = G__51678;
count__51593_51664 = G__51679;
i__51594_51665 = G__51680;
continue;
} else {
var vec__51598_51681 = cljs.core.first.call(null,seq__51591_51675__$1);
var n_51682 = cljs.core.nth.call(null,vec__51598_51681,(0),null);
var meth_51683 = cljs.core.nth.call(null,vec__51598_51681,(1),null);
var c_51684 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_51683));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_51683))){
cljs.compiler.emitln.call(null,mname_51602,".cljs$core$IFn$_invoke$arity$variadic = ",n_51682,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_51602,".cljs$core$IFn$_invoke$arity$",c_51684," = ",n_51682,";");
}

var G__51685 = cljs.core.next.call(null,seq__51591_51675__$1);
var G__51686 = null;
var G__51687 = (0);
var G__51688 = (0);
seq__51591_51662 = G__51685;
chunk__51592_51663 = G__51686;
count__51593_51664 = G__51687;
i__51594_51665 = G__51688;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_51602,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__51689){
var map__51690 = p__51689;
var map__51690__$1 = ((((!((map__51690 == null)))?((((map__51690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51690):map__51690);
var statements = cljs.core.get.call(null,map__51690__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__51690__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__51690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__47119__auto__ = statements;
if(cljs.core.truth_(and__47119__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__47119__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__51692_51696 = cljs.core.seq.call(null,statements);
var chunk__51693_51697 = null;
var count__51694_51698 = (0);
var i__51695_51699 = (0);
while(true){
if((i__51695_51699 < count__51694_51698)){
var s_51700 = cljs.core._nth.call(null,chunk__51693_51697,i__51695_51699);
cljs.compiler.emitln.call(null,s_51700);

var G__51701 = seq__51692_51696;
var G__51702 = chunk__51693_51697;
var G__51703 = count__51694_51698;
var G__51704 = (i__51695_51699 + (1));
seq__51692_51696 = G__51701;
chunk__51693_51697 = G__51702;
count__51694_51698 = G__51703;
i__51695_51699 = G__51704;
continue;
} else {
var temp__4657__auto___51705 = cljs.core.seq.call(null,seq__51692_51696);
if(temp__4657__auto___51705){
var seq__51692_51706__$1 = temp__4657__auto___51705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51692_51706__$1)){
var c__47945__auto___51707 = cljs.core.chunk_first.call(null,seq__51692_51706__$1);
var G__51708 = cljs.core.chunk_rest.call(null,seq__51692_51706__$1);
var G__51709 = c__47945__auto___51707;
var G__51710 = cljs.core.count.call(null,c__47945__auto___51707);
var G__51711 = (0);
seq__51692_51696 = G__51708;
chunk__51693_51697 = G__51709;
count__51694_51698 = G__51710;
i__51695_51699 = G__51711;
continue;
} else {
var s_51712 = cljs.core.first.call(null,seq__51692_51706__$1);
cljs.compiler.emitln.call(null,s_51712);

var G__51713 = cljs.core.next.call(null,seq__51692_51706__$1);
var G__51714 = null;
var G__51715 = (0);
var G__51716 = (0);
seq__51692_51696 = G__51713;
chunk__51693_51697 = G__51714;
count__51694_51698 = G__51715;
i__51695_51699 = G__51716;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__47119__auto__ = statements;
if(cljs.core.truth_(and__47119__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__47119__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__51717){
var map__51718 = p__51717;
var map__51718__$1 = ((((!((map__51718 == null)))?((((map__51718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51718):map__51718);
var env = cljs.core.get.call(null,map__51718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__51718__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__51718__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__51718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__51718__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__47131__auto__ = name;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__51720,is_loop){
var map__51732 = p__51720;
var map__51732__$1 = ((((!((map__51732 == null)))?((((map__51732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51732):map__51732);
var bindings = cljs.core.get.call(null,map__51732__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__51732__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__51732__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_51734_51743 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_51734_51743,context,map__51732,map__51732__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_51734_51743,context,map__51732,map__51732__$1,bindings,expr,env))
,bindings):null));

try{var seq__51735_51744 = cljs.core.seq.call(null,bindings);
var chunk__51736_51745 = null;
var count__51737_51746 = (0);
var i__51738_51747 = (0);
while(true){
if((i__51738_51747 < count__51737_51746)){
var map__51739_51748 = cljs.core._nth.call(null,chunk__51736_51745,i__51738_51747);
var map__51739_51749__$1 = ((((!((map__51739_51748 == null)))?((((map__51739_51748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51739_51748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51739_51748):map__51739_51748);
var binding_51750 = map__51739_51749__$1;
var init_51751 = cljs.core.get.call(null,map__51739_51749__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_51750);

cljs.compiler.emitln.call(null," = ",init_51751,";");

var G__51752 = seq__51735_51744;
var G__51753 = chunk__51736_51745;
var G__51754 = count__51737_51746;
var G__51755 = (i__51738_51747 + (1));
seq__51735_51744 = G__51752;
chunk__51736_51745 = G__51753;
count__51737_51746 = G__51754;
i__51738_51747 = G__51755;
continue;
} else {
var temp__4657__auto___51756 = cljs.core.seq.call(null,seq__51735_51744);
if(temp__4657__auto___51756){
var seq__51735_51757__$1 = temp__4657__auto___51756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51735_51757__$1)){
var c__47945__auto___51758 = cljs.core.chunk_first.call(null,seq__51735_51757__$1);
var G__51759 = cljs.core.chunk_rest.call(null,seq__51735_51757__$1);
var G__51760 = c__47945__auto___51758;
var G__51761 = cljs.core.count.call(null,c__47945__auto___51758);
var G__51762 = (0);
seq__51735_51744 = G__51759;
chunk__51736_51745 = G__51760;
count__51737_51746 = G__51761;
i__51738_51747 = G__51762;
continue;
} else {
var map__51741_51763 = cljs.core.first.call(null,seq__51735_51757__$1);
var map__51741_51764__$1 = ((((!((map__51741_51763 == null)))?((((map__51741_51763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51741_51763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51741_51763):map__51741_51763);
var binding_51765 = map__51741_51764__$1;
var init_51766 = cljs.core.get.call(null,map__51741_51764__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_51765);

cljs.compiler.emitln.call(null," = ",init_51766,";");

var G__51767 = cljs.core.next.call(null,seq__51735_51757__$1);
var G__51768 = null;
var G__51769 = (0);
var G__51770 = (0);
seq__51735_51744 = G__51767;
chunk__51736_51745 = G__51768;
count__51737_51746 = G__51769;
i__51738_51747 = G__51770;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_51734_51743;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__51771){
var map__51772 = p__51771;
var map__51772__$1 = ((((!((map__51772 == null)))?((((map__51772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51772):map__51772);
var frame = cljs.core.get.call(null,map__51772__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__51772__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__51772__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__48049__auto___51774 = cljs.core.count.call(null,exprs);
var i_51775 = (0);
while(true){
if((i_51775 < n__48049__auto___51774)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_51775)," = ",exprs.call(null,i_51775),";");

var G__51776 = (i_51775 + (1));
i_51775 = G__51776;
continue;
} else {
}
break;
}

var n__48049__auto___51777 = cljs.core.count.call(null,exprs);
var i_51778 = (0);
while(true){
if((i_51778 < n__48049__auto___51777)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_51778))," = ",temps.call(null,i_51778),";");

var G__51779 = (i_51778 + (1));
i_51778 = G__51779;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__51780){
var map__51781 = p__51780;
var map__51781__$1 = ((((!((map__51781 == null)))?((((map__51781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51781):map__51781);
var bindings = cljs.core.get.call(null,map__51781__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__51781__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__51781__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__51783_51791 = cljs.core.seq.call(null,bindings);
var chunk__51784_51792 = null;
var count__51785_51793 = (0);
var i__51786_51794 = (0);
while(true){
if((i__51786_51794 < count__51785_51793)){
var map__51787_51795 = cljs.core._nth.call(null,chunk__51784_51792,i__51786_51794);
var map__51787_51796__$1 = ((((!((map__51787_51795 == null)))?((((map__51787_51795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51787_51795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51787_51795):map__51787_51795);
var binding_51797 = map__51787_51796__$1;
var init_51798 = cljs.core.get.call(null,map__51787_51796__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_51797)," = ",init_51798,";");

var G__51799 = seq__51783_51791;
var G__51800 = chunk__51784_51792;
var G__51801 = count__51785_51793;
var G__51802 = (i__51786_51794 + (1));
seq__51783_51791 = G__51799;
chunk__51784_51792 = G__51800;
count__51785_51793 = G__51801;
i__51786_51794 = G__51802;
continue;
} else {
var temp__4657__auto___51803 = cljs.core.seq.call(null,seq__51783_51791);
if(temp__4657__auto___51803){
var seq__51783_51804__$1 = temp__4657__auto___51803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51783_51804__$1)){
var c__47945__auto___51805 = cljs.core.chunk_first.call(null,seq__51783_51804__$1);
var G__51806 = cljs.core.chunk_rest.call(null,seq__51783_51804__$1);
var G__51807 = c__47945__auto___51805;
var G__51808 = cljs.core.count.call(null,c__47945__auto___51805);
var G__51809 = (0);
seq__51783_51791 = G__51806;
chunk__51784_51792 = G__51807;
count__51785_51793 = G__51808;
i__51786_51794 = G__51809;
continue;
} else {
var map__51789_51810 = cljs.core.first.call(null,seq__51783_51804__$1);
var map__51789_51811__$1 = ((((!((map__51789_51810 == null)))?((((map__51789_51810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51789_51810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51789_51810):map__51789_51810);
var binding_51812 = map__51789_51811__$1;
var init_51813 = cljs.core.get.call(null,map__51789_51811__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_51812)," = ",init_51813,";");

var G__51814 = cljs.core.next.call(null,seq__51783_51804__$1);
var G__51815 = null;
var G__51816 = (0);
var G__51817 = (0);
seq__51783_51791 = G__51814;
chunk__51784_51792 = G__51815;
count__51785_51793 = G__51816;
i__51786_51794 = G__51817;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__51820){
var map__51821 = p__51820;
var map__51821__$1 = ((((!((map__51821 == null)))?((((map__51821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51821):map__51821);
var expr = map__51821__$1;
var f = cljs.core.get.call(null,map__51821__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__51821__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__51821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__47119__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__47119__auto__)){
var and__47119__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__47119__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__47119__auto__ = protocol;
if(cljs.core.truth_(and__47119__auto__)){
var and__47119__auto____$1 = tag;
if(cljs.core.truth_(and__47119__auto____$1)){
var or__47131__auto__ = (function (){var and__47119__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__47119__auto____$2)){
var and__47119__auto____$3 = protocol;
if(cljs.core.truth_(and__47119__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__47119__auto____$3;
}
} else {
return and__47119__auto____$2;
}
})();
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
var and__47119__auto____$2 = (function (){var or__47131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__47131__auto____$1)){
return or__47131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__47119__auto____$2)){
var or__47131__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__47131__auto____$1){
return or__47131__auto____$1;
} else {
var and__47119__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__47119__auto____$3){
var and__47119__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__47119__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__47119__auto____$4;
}
} else {
return and__47119__auto____$3;
}
}
} else {
return and__47119__auto____$2;
}
}
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__47131__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__47131__auto__){
return or__47131__auto__;
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
var vec__51823 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__47119__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__47119__auto__)){
return (arity > mfa);
} else {
return and__47119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env){
return (function (p1__51818_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__51818_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env){
return (function (p1__51819_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__51819_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__51821,map__51821__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__51823,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__51823,(1),null);
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_51826 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_51826,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_51827 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_51827,args)),(((mfa_51827 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_51827,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__47131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
var or__47131__auto____$1 = js_QMARK_;
if(or__47131__auto____$1){
return or__47131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__47119__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__47119__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__47119__auto__;
}
})())){
var fprop_51828 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_51828," ? ",f__$1,fprop_51828,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__51829){
var map__51830 = p__51829;
var map__51830__$1 = ((((!((map__51830 == null)))?((((map__51830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51830):map__51830);
var ctor = cljs.core.get.call(null,map__51830__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__51830__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__51830__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__51832){
var map__51833 = p__51832;
var map__51833__$1 = ((((!((map__51833 == null)))?((((map__51833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51833):map__51833);
var target = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
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

var seq__51839_51843 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__51840_51844 = null;
var count__51841_51845 = (0);
var i__51842_51846 = (0);
while(true){
if((i__51842_51846 < count__51841_51845)){
var lib_51847 = cljs.core._nth.call(null,chunk__51840_51844,i__51842_51846);
if(cljs.core.truth_((function (){var or__47131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_51847),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_51847),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__47131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_51847),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_51847),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_51847),"');");

}
}

var G__51848 = seq__51839_51843;
var G__51849 = chunk__51840_51844;
var G__51850 = count__51841_51845;
var G__51851 = (i__51842_51846 + (1));
seq__51839_51843 = G__51848;
chunk__51840_51844 = G__51849;
count__51841_51845 = G__51850;
i__51842_51846 = G__51851;
continue;
} else {
var temp__4657__auto___51852 = cljs.core.seq.call(null,seq__51839_51843);
if(temp__4657__auto___51852){
var seq__51839_51853__$1 = temp__4657__auto___51852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51839_51853__$1)){
var c__47945__auto___51854 = cljs.core.chunk_first.call(null,seq__51839_51853__$1);
var G__51855 = cljs.core.chunk_rest.call(null,seq__51839_51853__$1);
var G__51856 = c__47945__auto___51854;
var G__51857 = cljs.core.count.call(null,c__47945__auto___51854);
var G__51858 = (0);
seq__51839_51843 = G__51855;
chunk__51840_51844 = G__51856;
count__51841_51845 = G__51857;
i__51842_51846 = G__51858;
continue;
} else {
var lib_51859 = cljs.core.first.call(null,seq__51839_51853__$1);
if(cljs.core.truth_((function (){var or__47131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_51859),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_51859),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__47131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_51859),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_51859),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_51859),"');");

}
}

var G__51860 = cljs.core.next.call(null,seq__51839_51853__$1);
var G__51861 = null;
var G__51862 = (0);
var G__51863 = (0);
seq__51839_51843 = G__51860;
chunk__51840_51844 = G__51861;
count__51841_51845 = G__51862;
i__51842_51846 = G__51863;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__51864){
var map__51865 = p__51864;
var map__51865__$1 = ((((!((map__51865 == null)))?((((map__51865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51865):map__51865);
var name = cljs.core.get.call(null,map__51865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__51865__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__51865__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__51865__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__51865__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__51865__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__51867){
var map__51868 = p__51867;
var map__51868__$1 = ((((!((map__51868 == null)))?((((map__51868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51868):map__51868);
var name = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__51868__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__51870){
var map__51871 = p__51870;
var map__51871__$1 = ((((!((map__51871 == null)))?((((map__51871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51871):map__51871);
var t = cljs.core.get.call(null,map__51871__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__51871__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__51871__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__51871__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__51871__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__51873_51891 = cljs.core.seq.call(null,protocols);
var chunk__51874_51892 = null;
var count__51875_51893 = (0);
var i__51876_51894 = (0);
while(true){
if((i__51876_51894 < count__51875_51893)){
var protocol_51895 = cljs.core._nth.call(null,chunk__51874_51892,i__51876_51894);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_51895)].join('')),"}");

var G__51896 = seq__51873_51891;
var G__51897 = chunk__51874_51892;
var G__51898 = count__51875_51893;
var G__51899 = (i__51876_51894 + (1));
seq__51873_51891 = G__51896;
chunk__51874_51892 = G__51897;
count__51875_51893 = G__51898;
i__51876_51894 = G__51899;
continue;
} else {
var temp__4657__auto___51900 = cljs.core.seq.call(null,seq__51873_51891);
if(temp__4657__auto___51900){
var seq__51873_51901__$1 = temp__4657__auto___51900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51873_51901__$1)){
var c__47945__auto___51902 = cljs.core.chunk_first.call(null,seq__51873_51901__$1);
var G__51903 = cljs.core.chunk_rest.call(null,seq__51873_51901__$1);
var G__51904 = c__47945__auto___51902;
var G__51905 = cljs.core.count.call(null,c__47945__auto___51902);
var G__51906 = (0);
seq__51873_51891 = G__51903;
chunk__51874_51892 = G__51904;
count__51875_51893 = G__51905;
i__51876_51894 = G__51906;
continue;
} else {
var protocol_51907 = cljs.core.first.call(null,seq__51873_51901__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_51907)].join('')),"}");

var G__51908 = cljs.core.next.call(null,seq__51873_51901__$1);
var G__51909 = null;
var G__51910 = (0);
var G__51911 = (0);
seq__51873_51891 = G__51908;
chunk__51874_51892 = G__51909;
count__51875_51893 = G__51910;
i__51876_51894 = G__51911;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__51877_51912 = cljs.core.seq.call(null,fields__$1);
var chunk__51878_51913 = null;
var count__51879_51914 = (0);
var i__51880_51915 = (0);
while(true){
if((i__51880_51915 < count__51879_51914)){
var fld_51916 = cljs.core._nth.call(null,chunk__51878_51913,i__51880_51915);
cljs.compiler.emitln.call(null,"this.",fld_51916," = ",fld_51916,";");

var G__51917 = seq__51877_51912;
var G__51918 = chunk__51878_51913;
var G__51919 = count__51879_51914;
var G__51920 = (i__51880_51915 + (1));
seq__51877_51912 = G__51917;
chunk__51878_51913 = G__51918;
count__51879_51914 = G__51919;
i__51880_51915 = G__51920;
continue;
} else {
var temp__4657__auto___51921 = cljs.core.seq.call(null,seq__51877_51912);
if(temp__4657__auto___51921){
var seq__51877_51922__$1 = temp__4657__auto___51921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51877_51922__$1)){
var c__47945__auto___51923 = cljs.core.chunk_first.call(null,seq__51877_51922__$1);
var G__51924 = cljs.core.chunk_rest.call(null,seq__51877_51922__$1);
var G__51925 = c__47945__auto___51923;
var G__51926 = cljs.core.count.call(null,c__47945__auto___51923);
var G__51927 = (0);
seq__51877_51912 = G__51924;
chunk__51878_51913 = G__51925;
count__51879_51914 = G__51926;
i__51880_51915 = G__51927;
continue;
} else {
var fld_51928 = cljs.core.first.call(null,seq__51877_51922__$1);
cljs.compiler.emitln.call(null,"this.",fld_51928," = ",fld_51928,";");

var G__51929 = cljs.core.next.call(null,seq__51877_51922__$1);
var G__51930 = null;
var G__51931 = (0);
var G__51932 = (0);
seq__51877_51912 = G__51929;
chunk__51878_51913 = G__51930;
count__51879_51914 = G__51931;
i__51880_51915 = G__51932;
continue;
}
} else {
}
}
break;
}

var seq__51881_51933 = cljs.core.seq.call(null,pmasks);
var chunk__51882_51934 = null;
var count__51883_51935 = (0);
var i__51884_51936 = (0);
while(true){
if((i__51884_51936 < count__51883_51935)){
var vec__51885_51937 = cljs.core._nth.call(null,chunk__51882_51934,i__51884_51936);
var pno_51938 = cljs.core.nth.call(null,vec__51885_51937,(0),null);
var pmask_51939 = cljs.core.nth.call(null,vec__51885_51937,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_51938,"$ = ",pmask_51939,";");

var G__51940 = seq__51881_51933;
var G__51941 = chunk__51882_51934;
var G__51942 = count__51883_51935;
var G__51943 = (i__51884_51936 + (1));
seq__51881_51933 = G__51940;
chunk__51882_51934 = G__51941;
count__51883_51935 = G__51942;
i__51884_51936 = G__51943;
continue;
} else {
var temp__4657__auto___51944 = cljs.core.seq.call(null,seq__51881_51933);
if(temp__4657__auto___51944){
var seq__51881_51945__$1 = temp__4657__auto___51944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51881_51945__$1)){
var c__47945__auto___51946 = cljs.core.chunk_first.call(null,seq__51881_51945__$1);
var G__51947 = cljs.core.chunk_rest.call(null,seq__51881_51945__$1);
var G__51948 = c__47945__auto___51946;
var G__51949 = cljs.core.count.call(null,c__47945__auto___51946);
var G__51950 = (0);
seq__51881_51933 = G__51947;
chunk__51882_51934 = G__51948;
count__51883_51935 = G__51949;
i__51884_51936 = G__51950;
continue;
} else {
var vec__51888_51951 = cljs.core.first.call(null,seq__51881_51945__$1);
var pno_51952 = cljs.core.nth.call(null,vec__51888_51951,(0),null);
var pmask_51953 = cljs.core.nth.call(null,vec__51888_51951,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_51952,"$ = ",pmask_51953,";");

var G__51954 = cljs.core.next.call(null,seq__51881_51945__$1);
var G__51955 = null;
var G__51956 = (0);
var G__51957 = (0);
seq__51881_51933 = G__51954;
chunk__51882_51934 = G__51955;
count__51883_51935 = G__51956;
i__51884_51936 = G__51957;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__51958){
var map__51959 = p__51958;
var map__51959__$1 = ((((!((map__51959 == null)))?((((map__51959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51959):map__51959);
var t = cljs.core.get.call(null,map__51959__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__51959__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__51959__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__51959__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__51959__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__51961_51979 = cljs.core.seq.call(null,protocols);
var chunk__51962_51980 = null;
var count__51963_51981 = (0);
var i__51964_51982 = (0);
while(true){
if((i__51964_51982 < count__51963_51981)){
var protocol_51983 = cljs.core._nth.call(null,chunk__51962_51980,i__51964_51982);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_51983)].join('')),"}");

var G__51984 = seq__51961_51979;
var G__51985 = chunk__51962_51980;
var G__51986 = count__51963_51981;
var G__51987 = (i__51964_51982 + (1));
seq__51961_51979 = G__51984;
chunk__51962_51980 = G__51985;
count__51963_51981 = G__51986;
i__51964_51982 = G__51987;
continue;
} else {
var temp__4657__auto___51988 = cljs.core.seq.call(null,seq__51961_51979);
if(temp__4657__auto___51988){
var seq__51961_51989__$1 = temp__4657__auto___51988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51961_51989__$1)){
var c__47945__auto___51990 = cljs.core.chunk_first.call(null,seq__51961_51989__$1);
var G__51991 = cljs.core.chunk_rest.call(null,seq__51961_51989__$1);
var G__51992 = c__47945__auto___51990;
var G__51993 = cljs.core.count.call(null,c__47945__auto___51990);
var G__51994 = (0);
seq__51961_51979 = G__51991;
chunk__51962_51980 = G__51992;
count__51963_51981 = G__51993;
i__51964_51982 = G__51994;
continue;
} else {
var protocol_51995 = cljs.core.first.call(null,seq__51961_51989__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_51995)].join('')),"}");

var G__51996 = cljs.core.next.call(null,seq__51961_51989__$1);
var G__51997 = null;
var G__51998 = (0);
var G__51999 = (0);
seq__51961_51979 = G__51996;
chunk__51962_51980 = G__51997;
count__51963_51981 = G__51998;
i__51964_51982 = G__51999;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__51965_52000 = cljs.core.seq.call(null,fields__$1);
var chunk__51966_52001 = null;
var count__51967_52002 = (0);
var i__51968_52003 = (0);
while(true){
if((i__51968_52003 < count__51967_52002)){
var fld_52004 = cljs.core._nth.call(null,chunk__51966_52001,i__51968_52003);
cljs.compiler.emitln.call(null,"this.",fld_52004," = ",fld_52004,";");

var G__52005 = seq__51965_52000;
var G__52006 = chunk__51966_52001;
var G__52007 = count__51967_52002;
var G__52008 = (i__51968_52003 + (1));
seq__51965_52000 = G__52005;
chunk__51966_52001 = G__52006;
count__51967_52002 = G__52007;
i__51968_52003 = G__52008;
continue;
} else {
var temp__4657__auto___52009 = cljs.core.seq.call(null,seq__51965_52000);
if(temp__4657__auto___52009){
var seq__51965_52010__$1 = temp__4657__auto___52009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51965_52010__$1)){
var c__47945__auto___52011 = cljs.core.chunk_first.call(null,seq__51965_52010__$1);
var G__52012 = cljs.core.chunk_rest.call(null,seq__51965_52010__$1);
var G__52013 = c__47945__auto___52011;
var G__52014 = cljs.core.count.call(null,c__47945__auto___52011);
var G__52015 = (0);
seq__51965_52000 = G__52012;
chunk__51966_52001 = G__52013;
count__51967_52002 = G__52014;
i__51968_52003 = G__52015;
continue;
} else {
var fld_52016 = cljs.core.first.call(null,seq__51965_52010__$1);
cljs.compiler.emitln.call(null,"this.",fld_52016," = ",fld_52016,";");

var G__52017 = cljs.core.next.call(null,seq__51965_52010__$1);
var G__52018 = null;
var G__52019 = (0);
var G__52020 = (0);
seq__51965_52000 = G__52017;
chunk__51966_52001 = G__52018;
count__51967_52002 = G__52019;
i__51968_52003 = G__52020;
continue;
}
} else {
}
}
break;
}

var seq__51969_52021 = cljs.core.seq.call(null,pmasks);
var chunk__51970_52022 = null;
var count__51971_52023 = (0);
var i__51972_52024 = (0);
while(true){
if((i__51972_52024 < count__51971_52023)){
var vec__51973_52025 = cljs.core._nth.call(null,chunk__51970_52022,i__51972_52024);
var pno_52026 = cljs.core.nth.call(null,vec__51973_52025,(0),null);
var pmask_52027 = cljs.core.nth.call(null,vec__51973_52025,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_52026,"$ = ",pmask_52027,";");

var G__52028 = seq__51969_52021;
var G__52029 = chunk__51970_52022;
var G__52030 = count__51971_52023;
var G__52031 = (i__51972_52024 + (1));
seq__51969_52021 = G__52028;
chunk__51970_52022 = G__52029;
count__51971_52023 = G__52030;
i__51972_52024 = G__52031;
continue;
} else {
var temp__4657__auto___52032 = cljs.core.seq.call(null,seq__51969_52021);
if(temp__4657__auto___52032){
var seq__51969_52033__$1 = temp__4657__auto___52032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51969_52033__$1)){
var c__47945__auto___52034 = cljs.core.chunk_first.call(null,seq__51969_52033__$1);
var G__52035 = cljs.core.chunk_rest.call(null,seq__51969_52033__$1);
var G__52036 = c__47945__auto___52034;
var G__52037 = cljs.core.count.call(null,c__47945__auto___52034);
var G__52038 = (0);
seq__51969_52021 = G__52035;
chunk__51970_52022 = G__52036;
count__51971_52023 = G__52037;
i__51972_52024 = G__52038;
continue;
} else {
var vec__51976_52039 = cljs.core.first.call(null,seq__51969_52033__$1);
var pno_52040 = cljs.core.nth.call(null,vec__51976_52039,(0),null);
var pmask_52041 = cljs.core.nth.call(null,vec__51976_52039,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_52040,"$ = ",pmask_52041,";");

var G__52042 = cljs.core.next.call(null,seq__51969_52033__$1);
var G__52043 = null;
var G__52044 = (0);
var G__52045 = (0);
seq__51969_52021 = G__52042;
chunk__51970_52022 = G__52043;
count__51971_52023 = G__52044;
i__51972_52024 = G__52045;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__52046){
var map__52047 = p__52046;
var map__52047__$1 = ((((!((map__52047 == null)))?((((map__52047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52047):map__52047);
var target = cljs.core.get.call(null,map__52047__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__52047__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__52047__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__52047__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__52047__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__52049){
var map__52050 = p__52049;
var map__52050__$1 = ((((!((map__52050 == null)))?((((map__52050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52050):map__52050);
var op = cljs.core.get.call(null,map__52050__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__52050__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__52050__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__52050__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__52050__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__47119__auto__ = code;
if(cljs.core.truth_(and__47119__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__47119__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__50934__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__50934__auto__))){
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
var seq__52064 = cljs.core.seq.call(null,table);
var chunk__52065 = null;
var count__52066 = (0);
var i__52067 = (0);
while(true){
if((i__52067 < count__52066)){
var vec__52068 = cljs.core._nth.call(null,chunk__52065,i__52067);
var sym = cljs.core.nth.call(null,vec__52068,(0),null);
var value = cljs.core.nth.call(null,vec__52068,(1),null);
var ns_52074 = cljs.core.namespace.call(null,sym);
var name_52075 = cljs.core.name.call(null,sym);
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

var G__52076 = seq__52064;
var G__52077 = chunk__52065;
var G__52078 = count__52066;
var G__52079 = (i__52067 + (1));
seq__52064 = G__52076;
chunk__52065 = G__52077;
count__52066 = G__52078;
i__52067 = G__52079;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52064);
if(temp__4657__auto__){
var seq__52064__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52064__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__52064__$1);
var G__52080 = cljs.core.chunk_rest.call(null,seq__52064__$1);
var G__52081 = c__47945__auto__;
var G__52082 = cljs.core.count.call(null,c__47945__auto__);
var G__52083 = (0);
seq__52064 = G__52080;
chunk__52065 = G__52081;
count__52066 = G__52082;
i__52067 = G__52083;
continue;
} else {
var vec__52071 = cljs.core.first.call(null,seq__52064__$1);
var sym = cljs.core.nth.call(null,vec__52071,(0),null);
var value = cljs.core.nth.call(null,vec__52071,(1),null);
var ns_52084 = cljs.core.namespace.call(null,sym);
var name_52085 = cljs.core.name.call(null,sym);
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

var G__52086 = cljs.core.next.call(null,seq__52064__$1);
var G__52087 = null;
var G__52088 = (0);
var G__52089 = (0);
seq__52064 = G__52086;
chunk__52065 = G__52087;
count__52066 = G__52088;
i__52067 = G__52089;
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