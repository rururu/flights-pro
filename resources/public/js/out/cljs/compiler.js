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
var map__13976 = s;
var map__13976__$1 = ((((!((map__13976 == null)))?((((map__13976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13976):map__13976);
var name = cljs.core.get.call(null,map__13976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13976__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__13979 = info;
var map__13980 = G__13979;
var map__13980__$1 = ((((!((map__13980 == null)))?((((map__13980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13980):map__13980);
var shadow = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__13979__$1 = G__13979;
while(true){
var d__$2 = d__$1;
var map__13982 = G__13979__$1;
var map__13982__$1 = ((((!((map__13982 == null)))?((((map__13982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13982):map__13982);
var shadow__$1 = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13984 = (d__$2 + (1));
var G__13985 = shadow__$1;
d__$1 = G__13984;
G__13979__$1 = G__13985;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13986){
var map__13991 = p__13986;
var map__13991__$1 = ((((!((map__13991 == null)))?((((map__13991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13991):map__13991);
var name_var = map__13991__$1;
var name = cljs.core.get.call(null,map__13991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13991__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__13993 = info;
var map__13993__$1 = ((((!((map__13993 == null)))?((((map__13993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13993):map__13993);
var ns = cljs.core.get.call(null,map__13993__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__13993__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args13995 = [];
var len__10030__auto___13998 = arguments.length;
var i__10031__auto___13999 = (0);
while(true){
if((i__10031__auto___13999 < len__10030__auto___13998)){
args13995.push((arguments[i__10031__auto___13999]));

var G__14000 = (i__10031__auto___13999 + (1));
i__10031__auto___13999 = G__14000;
continue;
} else {
}
break;
}

var G__13997 = args13995.length;
switch (G__13997) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13995.length)].join('')));

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
var G__14003 = cp;
switch (G__14003) {
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
var seq__14009_14013 = cljs.core.seq.call(null,s);
var chunk__14010_14014 = null;
var count__14011_14015 = (0);
var i__14012_14016 = (0);
while(true){
if((i__14012_14016 < count__14011_14015)){
var c_14017 = cljs.core._nth.call(null,chunk__14010_14014,i__14012_14016);
sb.append(cljs.compiler.escape_char.call(null,c_14017));

var G__14018 = seq__14009_14013;
var G__14019 = chunk__14010_14014;
var G__14020 = count__14011_14015;
var G__14021 = (i__14012_14016 + (1));
seq__14009_14013 = G__14018;
chunk__14010_14014 = G__14019;
count__14011_14015 = G__14020;
i__14012_14016 = G__14021;
continue;
} else {
var temp__4657__auto___14022 = cljs.core.seq.call(null,seq__14009_14013);
if(temp__4657__auto___14022){
var seq__14009_14023__$1 = temp__4657__auto___14022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14009_14023__$1)){
var c__9736__auto___14024 = cljs.core.chunk_first.call(null,seq__14009_14023__$1);
var G__14025 = cljs.core.chunk_rest.call(null,seq__14009_14023__$1);
var G__14026 = c__9736__auto___14024;
var G__14027 = cljs.core.count.call(null,c__9736__auto___14024);
var G__14028 = (0);
seq__14009_14013 = G__14025;
chunk__14010_14014 = G__14026;
count__14011_14015 = G__14027;
i__14012_14016 = G__14028;
continue;
} else {
var c_14029 = cljs.core.first.call(null,seq__14009_14023__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14029));

var G__14030 = cljs.core.next.call(null,seq__14009_14023__$1);
var G__14031 = null;
var G__14032 = (0);
var G__14033 = (0);
seq__14009_14013 = G__14030;
chunk__14010_14014 = G__14031;
count__14011_14015 = G__14032;
i__14012_14016 = G__14033;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__9850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9854__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9854__auto__,method_table__9850__auto__,prefer_table__9851__auto__,method_cache__9852__auto__,cached_hierarchy__9853__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__12007__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__12007__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14039_14044 = ast;
var map__14039_14045__$1 = ((((!((map__14039_14044 == null)))?((((map__14039_14044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14039_14044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14039_14044):map__14039_14044);
var env_14046 = cljs.core.get.call(null,map__14039_14045__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14046))){
var map__14041_14047 = env_14046;
var map__14041_14048__$1 = ((((!((map__14041_14047 == null)))?((((map__14041_14047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14041_14047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14041_14047):map__14041_14047);
var line_14049 = cljs.core.get.call(null,map__14041_14048__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14050 = cljs.core.get.call(null,map__14041_14048__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__14041_14047,map__14041_14048__$1,line_14049,column_14050,map__14039_14044,map__14039_14045__$1,env_14046,val__12007__auto__){
return (function (m){
var minfo = (function (){var G__14043 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__14043,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__14043;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14049 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__14041_14047,map__14041_14048__$1,line_14049,column_14050,map__14039_14044,map__14039_14045__$1,env_14046,val__12007__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14050)?(column_14050 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__14041_14047,map__14041_14048__$1,line_14049,column_14050,map__14039_14044,map__14039_14045__$1,env_14046,val__12007__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__14041_14047,map__14041_14048__$1,line_14049,column_14050,map__14039_14044,map__14039_14045__$1,env_14046,val__12007__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14041_14047,map__14041_14048__$1,line_14049,column_14050,map__14039_14044,map__14039_14045__$1,env_14046,val__12007__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__14041_14047,map__14041_14048__$1,line_14049,column_14050,map__14039_14044,map__14039_14045__$1,env_14046,val__12007__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__12007__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10037__auto__ = [];
var len__10030__auto___14057 = arguments.length;
var i__10031__auto___14058 = (0);
while(true){
if((i__10031__auto___14058 < len__10030__auto___14057)){
args__10037__auto__.push((arguments[i__10031__auto___14058]));

var G__14059 = (i__10031__auto___14058 + (1));
i__10031__auto___14058 = G__14059;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((0) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10038__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14053_14060 = cljs.core.seq.call(null,xs);
var chunk__14054_14061 = null;
var count__14055_14062 = (0);
var i__14056_14063 = (0);
while(true){
if((i__14056_14063 < count__14055_14062)){
var x_14064 = cljs.core._nth.call(null,chunk__14054_14061,i__14056_14063);
if((x_14064 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14064)){
cljs.compiler.emit.call(null,x_14064);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14064)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14064);
} else {
if(goog.isFunction(x_14064)){
x_14064.call(null);
} else {
var s_14065 = cljs.core.print_str.call(null,x_14064);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14053_14060,chunk__14054_14061,count__14055_14062,i__14056_14063,s_14065,x_14064){
return (function (p1__14051_SHARP_){
return (p1__14051_SHARP_ + cljs.core.count.call(null,s_14065));
});})(seq__14053_14060,chunk__14054_14061,count__14055_14062,i__14056_14063,s_14065,x_14064))
);
}

cljs.core.print.call(null,s_14065);

}
}
}
}

var G__14066 = seq__14053_14060;
var G__14067 = chunk__14054_14061;
var G__14068 = count__14055_14062;
var G__14069 = (i__14056_14063 + (1));
seq__14053_14060 = G__14066;
chunk__14054_14061 = G__14067;
count__14055_14062 = G__14068;
i__14056_14063 = G__14069;
continue;
} else {
var temp__4657__auto___14070 = cljs.core.seq.call(null,seq__14053_14060);
if(temp__4657__auto___14070){
var seq__14053_14071__$1 = temp__4657__auto___14070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14053_14071__$1)){
var c__9736__auto___14072 = cljs.core.chunk_first.call(null,seq__14053_14071__$1);
var G__14073 = cljs.core.chunk_rest.call(null,seq__14053_14071__$1);
var G__14074 = c__9736__auto___14072;
var G__14075 = cljs.core.count.call(null,c__9736__auto___14072);
var G__14076 = (0);
seq__14053_14060 = G__14073;
chunk__14054_14061 = G__14074;
count__14055_14062 = G__14075;
i__14056_14063 = G__14076;
continue;
} else {
var x_14077 = cljs.core.first.call(null,seq__14053_14071__$1);
if((x_14077 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14077)){
cljs.compiler.emit.call(null,x_14077);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14077)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14077);
} else {
if(goog.isFunction(x_14077)){
x_14077.call(null);
} else {
var s_14078 = cljs.core.print_str.call(null,x_14077);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14053_14060,chunk__14054_14061,count__14055_14062,i__14056_14063,s_14078,x_14077,seq__14053_14071__$1,temp__4657__auto___14070){
return (function (p1__14051_SHARP_){
return (p1__14051_SHARP_ + cljs.core.count.call(null,s_14078));
});})(seq__14053_14060,chunk__14054_14061,count__14055_14062,i__14056_14063,s_14078,x_14077,seq__14053_14071__$1,temp__4657__auto___14070))
);
}

cljs.core.print.call(null,s_14078);

}
}
}
}

var G__14079 = cljs.core.next.call(null,seq__14053_14071__$1);
var G__14080 = null;
var G__14081 = (0);
var G__14082 = (0);
seq__14053_14060 = G__14079;
chunk__14054_14061 = G__14080;
count__14055_14062 = G__14081;
i__14056_14063 = G__14082;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq14052){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14052));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10037__auto__ = [];
var len__10030__auto___14087 = arguments.length;
var i__10031__auto___14088 = (0);
while(true){
if((i__10031__auto___14088 < len__10030__auto___14087)){
args__10037__auto__.push((arguments[i__10031__auto___14088]));

var G__14089 = (i__10031__auto___14088 + (1));
i__10031__auto___14088 = G__14089;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((0) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10038__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__14084){
var map__14085 = p__14084;
var map__14085__$1 = ((((!((map__14085 == null)))?((((map__14085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14085):map__14085);
var m = map__14085__$1;
var gen_line = cljs.core.get.call(null,map__14085__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14083){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14083));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9911__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14092_14094 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14093_14095 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14092_14094,_STAR_print_fn_STAR_14093_14095,sb__9911__auto__){
return (function (x__9912__auto__){
return sb__9911__auto__.append(x__9912__auto__);
});})(_STAR_print_newline_STAR_14092_14094,_STAR_print_fn_STAR_14093_14095,sb__9911__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14093_14095;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14092_14094;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9911__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9854__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9854__auto__,method_table__9850__auto__,prefer_table__9851__auto__,method_cache__9852__auto__,cached_hierarchy__9853__auto__));
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
var vec__14096 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__14096,(0),null);
var flags = cljs.core.nth.call(null,vec__14096,(1),null);
var pattern = cljs.core.nth.call(null,vec__14096,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__14100){
var map__14101 = p__14100;
var map__14101__$1 = ((((!((map__14101 == null)))?((((map__14101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14101):map__14101);
var arg = map__14101__$1;
var info = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__8917__auto__ = js_module_name;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__14103 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__14103);
} else {
return G__14103;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__14104){
var map__14105 = p__14104;
var map__14105__$1 = ((((!((map__14105 == null)))?((((map__14105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14105):map__14105);
var arg = map__14105__$1;
var env = cljs.core.get.call(null,map__14105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__14105__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__14105__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__14105__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__14107 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__14107__$1 = ((((!((map__14107 == null)))?((((map__14107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14107):map__14107);
var name = cljs.core.get.call(null,map__14107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__14109){
var map__14110 = p__14109;
var map__14110__$1 = ((((!((map__14110 == null)))?((((map__14110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14110):map__14110);
var expr = cljs.core.get.call(null,map__14110__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__14110__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__14110__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__14112_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14112_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__14113){
var map__14114 = p__14113;
var map__14114__$1 = ((((!((map__14114 == null)))?((((map__14114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14114):map__14114);
var env = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__14114__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__14116){
var map__14117 = p__14116;
var map__14117__$1 = ((((!((map__14117 == null)))?((((map__14117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14117):map__14117);
var items = cljs.core.get.call(null,map__14117__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14117__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__14119){
var map__14120 = p__14119;
var map__14120__$1 = ((((!((map__14120 == null)))?((((map__14120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14120):map__14120);
var items = cljs.core.get.call(null,map__14120__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14120__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_14122 = cljs.core.count.call(null,items);
if((cnt_14122 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_14122,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__14123_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14123_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__14124){
var map__14125 = p__14124;
var map__14125__$1 = ((((!((map__14125 == null)))?((((map__14125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14125):map__14125);
var items = cljs.core.get.call(null,map__14125__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__14127){
var map__14128 = p__14127;
var map__14128__$1 = ((((!((map__14128 == null)))?((((map__14128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14128):map__14128);
var items = cljs.core.get.call(null,map__14128__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__14128__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__14128__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___14146 = cljs.core.seq.call(null,items);
if(temp__4657__auto___14146){
var items_14147__$1 = temp__4657__auto___14146;
var vec__14130_14148 = items_14147__$1;
var seq__14131_14149 = cljs.core.seq.call(null,vec__14130_14148);
var first__14132_14150 = cljs.core.first.call(null,seq__14131_14149);
var seq__14131_14151__$1 = cljs.core.next.call(null,seq__14131_14149);
var vec__14133_14152 = first__14132_14150;
var k_14153 = cljs.core.nth.call(null,vec__14133_14152,(0),null);
var v_14154 = cljs.core.nth.call(null,vec__14133_14152,(1),null);
var r_14155 = seq__14131_14151__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_14153),"\": ",v_14154);

var seq__14136_14156 = cljs.core.seq.call(null,r_14155);
var chunk__14137_14157 = null;
var count__14138_14158 = (0);
var i__14139_14159 = (0);
while(true){
if((i__14139_14159 < count__14138_14158)){
var vec__14140_14160 = cljs.core._nth.call(null,chunk__14137_14157,i__14139_14159);
var k_14161__$1 = cljs.core.nth.call(null,vec__14140_14160,(0),null);
var v_14162__$1 = cljs.core.nth.call(null,vec__14140_14160,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14161__$1),"\": ",v_14162__$1);

var G__14163 = seq__14136_14156;
var G__14164 = chunk__14137_14157;
var G__14165 = count__14138_14158;
var G__14166 = (i__14139_14159 + (1));
seq__14136_14156 = G__14163;
chunk__14137_14157 = G__14164;
count__14138_14158 = G__14165;
i__14139_14159 = G__14166;
continue;
} else {
var temp__4657__auto___14167__$1 = cljs.core.seq.call(null,seq__14136_14156);
if(temp__4657__auto___14167__$1){
var seq__14136_14168__$1 = temp__4657__auto___14167__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14136_14168__$1)){
var c__9736__auto___14169 = cljs.core.chunk_first.call(null,seq__14136_14168__$1);
var G__14170 = cljs.core.chunk_rest.call(null,seq__14136_14168__$1);
var G__14171 = c__9736__auto___14169;
var G__14172 = cljs.core.count.call(null,c__9736__auto___14169);
var G__14173 = (0);
seq__14136_14156 = G__14170;
chunk__14137_14157 = G__14171;
count__14138_14158 = G__14172;
i__14139_14159 = G__14173;
continue;
} else {
var vec__14143_14174 = cljs.core.first.call(null,seq__14136_14168__$1);
var k_14175__$1 = cljs.core.nth.call(null,vec__14143_14174,(0),null);
var v_14176__$1 = cljs.core.nth.call(null,vec__14143_14174,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14175__$1),"\": ",v_14176__$1);

var G__14177 = cljs.core.next.call(null,seq__14136_14168__$1);
var G__14178 = null;
var G__14179 = (0);
var G__14180 = (0);
seq__14136_14156 = G__14177;
chunk__14137_14157 = G__14178;
count__14138_14158 = G__14179;
i__14139_14159 = G__14180;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__14181){
var map__14182 = p__14181;
var map__14182__$1 = ((((!((map__14182 == null)))?((((map__14182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14182):map__14182);
var form = cljs.core.get.call(null,map__14182__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__14182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__14184){
var map__14187 = p__14184;
var map__14187__$1 = ((((!((map__14187 == null)))?((((map__14187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14187):map__14187);
var op = cljs.core.get.call(null,map__14187__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14187__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__8905__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8905__auto__){
var and__8905__auto____$1 = form;
if(cljs.core.truth_(and__8905__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__14189){
var map__14192 = p__14189;
var map__14192__$1 = ((((!((map__14192 == null)))?((((map__14192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14192):map__14192);
var op = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8917__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__14194){
var map__14195 = p__14194;
var map__14195__$1 = ((((!((map__14195 == null)))?((((map__14195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14195):map__14195);
var test = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8917__auto__ = unchecked;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__14197){
var map__14198 = p__14197;
var map__14198__$1 = ((((!((map__14198 == null)))?((((map__14198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14198):map__14198);
var v = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14200_14218 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__14201_14219 = null;
var count__14202_14220 = (0);
var i__14203_14221 = (0);
while(true){
if((i__14203_14221 < count__14202_14220)){
var vec__14204_14222 = cljs.core._nth.call(null,chunk__14201_14219,i__14203_14221);
var ts_14223 = cljs.core.nth.call(null,vec__14204_14222,(0),null);
var then_14224 = cljs.core.nth.call(null,vec__14204_14222,(1),null);
var seq__14207_14225 = cljs.core.seq.call(null,ts_14223);
var chunk__14208_14226 = null;
var count__14209_14227 = (0);
var i__14210_14228 = (0);
while(true){
if((i__14210_14228 < count__14209_14227)){
var test_14229 = cljs.core._nth.call(null,chunk__14208_14226,i__14210_14228);
cljs.compiler.emitln.call(null,"case ",test_14229,":");

var G__14230 = seq__14207_14225;
var G__14231 = chunk__14208_14226;
var G__14232 = count__14209_14227;
var G__14233 = (i__14210_14228 + (1));
seq__14207_14225 = G__14230;
chunk__14208_14226 = G__14231;
count__14209_14227 = G__14232;
i__14210_14228 = G__14233;
continue;
} else {
var temp__4657__auto___14234 = cljs.core.seq.call(null,seq__14207_14225);
if(temp__4657__auto___14234){
var seq__14207_14235__$1 = temp__4657__auto___14234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14207_14235__$1)){
var c__9736__auto___14236 = cljs.core.chunk_first.call(null,seq__14207_14235__$1);
var G__14237 = cljs.core.chunk_rest.call(null,seq__14207_14235__$1);
var G__14238 = c__9736__auto___14236;
var G__14239 = cljs.core.count.call(null,c__9736__auto___14236);
var G__14240 = (0);
seq__14207_14225 = G__14237;
chunk__14208_14226 = G__14238;
count__14209_14227 = G__14239;
i__14210_14228 = G__14240;
continue;
} else {
var test_14241 = cljs.core.first.call(null,seq__14207_14235__$1);
cljs.compiler.emitln.call(null,"case ",test_14241,":");

var G__14242 = cljs.core.next.call(null,seq__14207_14235__$1);
var G__14243 = null;
var G__14244 = (0);
var G__14245 = (0);
seq__14207_14225 = G__14242;
chunk__14208_14226 = G__14243;
count__14209_14227 = G__14244;
i__14210_14228 = G__14245;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14224);
} else {
cljs.compiler.emitln.call(null,then_14224);
}

cljs.compiler.emitln.call(null,"break;");

var G__14246 = seq__14200_14218;
var G__14247 = chunk__14201_14219;
var G__14248 = count__14202_14220;
var G__14249 = (i__14203_14221 + (1));
seq__14200_14218 = G__14246;
chunk__14201_14219 = G__14247;
count__14202_14220 = G__14248;
i__14203_14221 = G__14249;
continue;
} else {
var temp__4657__auto___14250 = cljs.core.seq.call(null,seq__14200_14218);
if(temp__4657__auto___14250){
var seq__14200_14251__$1 = temp__4657__auto___14250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14200_14251__$1)){
var c__9736__auto___14252 = cljs.core.chunk_first.call(null,seq__14200_14251__$1);
var G__14253 = cljs.core.chunk_rest.call(null,seq__14200_14251__$1);
var G__14254 = c__9736__auto___14252;
var G__14255 = cljs.core.count.call(null,c__9736__auto___14252);
var G__14256 = (0);
seq__14200_14218 = G__14253;
chunk__14201_14219 = G__14254;
count__14202_14220 = G__14255;
i__14203_14221 = G__14256;
continue;
} else {
var vec__14211_14257 = cljs.core.first.call(null,seq__14200_14251__$1);
var ts_14258 = cljs.core.nth.call(null,vec__14211_14257,(0),null);
var then_14259 = cljs.core.nth.call(null,vec__14211_14257,(1),null);
var seq__14214_14260 = cljs.core.seq.call(null,ts_14258);
var chunk__14215_14261 = null;
var count__14216_14262 = (0);
var i__14217_14263 = (0);
while(true){
if((i__14217_14263 < count__14216_14262)){
var test_14264 = cljs.core._nth.call(null,chunk__14215_14261,i__14217_14263);
cljs.compiler.emitln.call(null,"case ",test_14264,":");

var G__14265 = seq__14214_14260;
var G__14266 = chunk__14215_14261;
var G__14267 = count__14216_14262;
var G__14268 = (i__14217_14263 + (1));
seq__14214_14260 = G__14265;
chunk__14215_14261 = G__14266;
count__14216_14262 = G__14267;
i__14217_14263 = G__14268;
continue;
} else {
var temp__4657__auto___14269__$1 = cljs.core.seq.call(null,seq__14214_14260);
if(temp__4657__auto___14269__$1){
var seq__14214_14270__$1 = temp__4657__auto___14269__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14214_14270__$1)){
var c__9736__auto___14271 = cljs.core.chunk_first.call(null,seq__14214_14270__$1);
var G__14272 = cljs.core.chunk_rest.call(null,seq__14214_14270__$1);
var G__14273 = c__9736__auto___14271;
var G__14274 = cljs.core.count.call(null,c__9736__auto___14271);
var G__14275 = (0);
seq__14214_14260 = G__14272;
chunk__14215_14261 = G__14273;
count__14216_14262 = G__14274;
i__14217_14263 = G__14275;
continue;
} else {
var test_14276 = cljs.core.first.call(null,seq__14214_14270__$1);
cljs.compiler.emitln.call(null,"case ",test_14276,":");

var G__14277 = cljs.core.next.call(null,seq__14214_14270__$1);
var G__14278 = null;
var G__14279 = (0);
var G__14280 = (0);
seq__14214_14260 = G__14277;
chunk__14215_14261 = G__14278;
count__14216_14262 = G__14279;
i__14217_14263 = G__14280;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14259);
} else {
cljs.compiler.emitln.call(null,then_14259);
}

cljs.compiler.emitln.call(null,"break;");

var G__14281 = cljs.core.next.call(null,seq__14200_14251__$1);
var G__14282 = null;
var G__14283 = (0);
var G__14284 = (0);
seq__14200_14218 = G__14281;
chunk__14201_14219 = G__14282;
count__14202_14220 = G__14283;
i__14203_14221 = G__14284;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__14285){
var map__14286 = p__14285;
var map__14286__$1 = ((((!((map__14286 == null)))?((((map__14286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14286):map__14286);
var throw$ = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__14293 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__14293,(0),null);
var rstr = cljs.core.nth.call(null,vec__14293,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__14293,fstr,rstr,ret_t,axstr){
return (function (p1__14288_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14288_SHARP_);
});})(idx,vec__14293,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__14296 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("function("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14296),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__14296;
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
return (function (p1__14297_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14297_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__14304 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14305 = cljs.core.seq.call(null,vec__14304);
var first__14306 = cljs.core.first.call(null,seq__14305);
var seq__14305__$1 = cljs.core.next.call(null,seq__14305);
var p = first__14306;
var first__14306__$1 = cljs.core.first.call(null,seq__14305__$1);
var seq__14305__$2 = cljs.core.next.call(null,seq__14305__$1);
var ts = first__14306__$1;
var first__14306__$2 = cljs.core.first.call(null,seq__14305__$2);
var seq__14305__$3 = cljs.core.next.call(null,seq__14305__$2);
var n = first__14306__$2;
var xs = seq__14305__$3;
if(cljs.core.truth_((function (){var and__8905__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8905__auto__){
var and__8905__auto____$1 = ts;
if(cljs.core.truth_(and__8905__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__14307 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14308 = cljs.core.seq.call(null,vec__14307);
var first__14309 = cljs.core.first.call(null,seq__14308);
var seq__14308__$1 = cljs.core.next.call(null,seq__14308);
var p = first__14309;
var first__14309__$1 = cljs.core.first.call(null,seq__14308__$1);
var seq__14308__$2 = cljs.core.next.call(null,seq__14308__$1);
var ts = first__14309__$1;
var xs = seq__14308__$2;
if(cljs.core.truth_((function (){var and__8905__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8905__auto__){
var and__8905__auto____$1 = ts;
if(cljs.core.truth_(and__8905__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
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
var args14311 = [];
var len__10030__auto___14346 = arguments.length;
var i__10031__auto___14347 = (0);
while(true){
if((i__10031__auto___14347 < len__10030__auto___14346)){
args14311.push((arguments[i__10031__auto___14347]));

var G__14348 = (i__10031__auto___14347 + (1));
i__10031__auto___14347 = G__14348;
continue;
} else {
}
break;
}

var G__14313 = args14311.length;
switch (G__14313) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14311.length)].join('')));

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
var vec__14335 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__14310_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__14310_SHARP_);
} else {
return p1__14310_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__14336 = cljs.core.seq.call(null,vec__14335);
var first__14337 = cljs.core.first.call(null,seq__14336);
var seq__14336__$1 = cljs.core.next.call(null,seq__14336);
var x = first__14337;
var ys = seq__14336__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__14338 = cljs.core.seq.call(null,ys);
var chunk__14339 = null;
var count__14340 = (0);
var i__14341 = (0);
while(true){
if((i__14341 < count__14340)){
var next_line = cljs.core._nth.call(null,chunk__14339,i__14341);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__14350 = seq__14338;
var G__14351 = chunk__14339;
var G__14352 = count__14340;
var G__14353 = (i__14341 + (1));
seq__14338 = G__14350;
chunk__14339 = G__14351;
count__14340 = G__14352;
i__14341 = G__14353;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14338);
if(temp__4657__auto__){
var seq__14338__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14338__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__14338__$1);
var G__14354 = cljs.core.chunk_rest.call(null,seq__14338__$1);
var G__14355 = c__9736__auto__;
var G__14356 = cljs.core.count.call(null,c__9736__auto__);
var G__14357 = (0);
seq__14338 = G__14354;
chunk__14339 = G__14355;
count__14340 = G__14356;
i__14341 = G__14357;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__14338__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__14358 = cljs.core.next.call(null,seq__14338__$1);
var G__14359 = null;
var G__14360 = (0);
var G__14361 = (0);
seq__14338 = G__14358;
chunk__14339 = G__14359;
count__14340 = G__14360;
i__14341 = G__14361;
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

var seq__14342_14362 = cljs.core.seq.call(null,docs__$2);
var chunk__14343_14363 = null;
var count__14344_14364 = (0);
var i__14345_14365 = (0);
while(true){
if((i__14345_14365 < count__14344_14364)){
var e_14366 = cljs.core._nth.call(null,chunk__14343_14363,i__14345_14365);
if(cljs.core.truth_(e_14366)){
print_comment_lines.call(null,e_14366);
} else {
}

var G__14367 = seq__14342_14362;
var G__14368 = chunk__14343_14363;
var G__14369 = count__14344_14364;
var G__14370 = (i__14345_14365 + (1));
seq__14342_14362 = G__14367;
chunk__14343_14363 = G__14368;
count__14344_14364 = G__14369;
i__14345_14365 = G__14370;
continue;
} else {
var temp__4657__auto___14371 = cljs.core.seq.call(null,seq__14342_14362);
if(temp__4657__auto___14371){
var seq__14342_14372__$1 = temp__4657__auto___14371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14342_14372__$1)){
var c__9736__auto___14373 = cljs.core.chunk_first.call(null,seq__14342_14372__$1);
var G__14374 = cljs.core.chunk_rest.call(null,seq__14342_14372__$1);
var G__14375 = c__9736__auto___14373;
var G__14376 = cljs.core.count.call(null,c__9736__auto___14373);
var G__14377 = (0);
seq__14342_14362 = G__14374;
chunk__14343_14363 = G__14375;
count__14344_14364 = G__14376;
i__14345_14365 = G__14377;
continue;
} else {
var e_14378 = cljs.core.first.call(null,seq__14342_14372__$1);
if(cljs.core.truth_(e_14378)){
print_comment_lines.call(null,e_14378);
} else {
}

var G__14379 = cljs.core.next.call(null,seq__14342_14372__$1);
var G__14380 = null;
var G__14381 = (0);
var G__14382 = (0);
seq__14342_14362 = G__14379;
chunk__14343_14363 = G__14380;
count__14344_14364 = G__14381;
i__14345_14365 = G__14382;
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
var and__8905__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__14384_SHARP_){
return goog.string.startsWith(p1__14384_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = opts;
if(cljs.core.truth_(and__8905__auto____$1)){
var and__8905__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8905__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8905__auto____$2;
}
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14385){
var map__14386 = p__14385;
var map__14386__$1 = ((((!((map__14386 == null)))?((((map__14386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14386):map__14386);
var name = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__14386__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8917__auto__ = init;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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

if(cljs.core.truth_((function (){var and__8905__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8905__auto__){
return test;
} else {
return and__8905__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14388){
var map__14409 = p__14388;
var map__14409__$1 = ((((!((map__14409 == null)))?((((map__14409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14409):map__14409);
var name = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__14411_14429 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__14412_14430 = null;
var count__14413_14431 = (0);
var i__14414_14432 = (0);
while(true){
if((i__14414_14432 < count__14413_14431)){
var vec__14415_14433 = cljs.core._nth.call(null,chunk__14412_14430,i__14414_14432);
var i_14434 = cljs.core.nth.call(null,vec__14415_14433,(0),null);
var param_14435 = cljs.core.nth.call(null,vec__14415_14433,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14435);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__14436 = seq__14411_14429;
var G__14437 = chunk__14412_14430;
var G__14438 = count__14413_14431;
var G__14439 = (i__14414_14432 + (1));
seq__14411_14429 = G__14436;
chunk__14412_14430 = G__14437;
count__14413_14431 = G__14438;
i__14414_14432 = G__14439;
continue;
} else {
var temp__4657__auto___14440 = cljs.core.seq.call(null,seq__14411_14429);
if(temp__4657__auto___14440){
var seq__14411_14441__$1 = temp__4657__auto___14440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14411_14441__$1)){
var c__9736__auto___14442 = cljs.core.chunk_first.call(null,seq__14411_14441__$1);
var G__14443 = cljs.core.chunk_rest.call(null,seq__14411_14441__$1);
var G__14444 = c__9736__auto___14442;
var G__14445 = cljs.core.count.call(null,c__9736__auto___14442);
var G__14446 = (0);
seq__14411_14429 = G__14443;
chunk__14412_14430 = G__14444;
count__14413_14431 = G__14445;
i__14414_14432 = G__14446;
continue;
} else {
var vec__14418_14447 = cljs.core.first.call(null,seq__14411_14441__$1);
var i_14448 = cljs.core.nth.call(null,vec__14418_14447,(0),null);
var param_14449 = cljs.core.nth.call(null,vec__14418_14447,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14449);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__14450 = cljs.core.next.call(null,seq__14411_14441__$1);
var G__14451 = null;
var G__14452 = (0);
var G__14453 = (0);
seq__14411_14429 = G__14450;
chunk__14412_14430 = G__14451;
count__14413_14431 = G__14452;
i__14414_14432 = G__14453;
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

var seq__14421_14454 = cljs.core.seq.call(null,params);
var chunk__14422_14455 = null;
var count__14423_14456 = (0);
var i__14424_14457 = (0);
while(true){
if((i__14424_14457 < count__14423_14456)){
var param_14458 = cljs.core._nth.call(null,chunk__14422_14455,i__14424_14457);
cljs.compiler.emit.call(null,param_14458);

if(cljs.core._EQ_.call(null,param_14458,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14459 = seq__14421_14454;
var G__14460 = chunk__14422_14455;
var G__14461 = count__14423_14456;
var G__14462 = (i__14424_14457 + (1));
seq__14421_14454 = G__14459;
chunk__14422_14455 = G__14460;
count__14423_14456 = G__14461;
i__14424_14457 = G__14462;
continue;
} else {
var temp__4657__auto___14463 = cljs.core.seq.call(null,seq__14421_14454);
if(temp__4657__auto___14463){
var seq__14421_14464__$1 = temp__4657__auto___14463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14421_14464__$1)){
var c__9736__auto___14465 = cljs.core.chunk_first.call(null,seq__14421_14464__$1);
var G__14466 = cljs.core.chunk_rest.call(null,seq__14421_14464__$1);
var G__14467 = c__9736__auto___14465;
var G__14468 = cljs.core.count.call(null,c__9736__auto___14465);
var G__14469 = (0);
seq__14421_14454 = G__14466;
chunk__14422_14455 = G__14467;
count__14423_14456 = G__14468;
i__14424_14457 = G__14469;
continue;
} else {
var param_14470 = cljs.core.first.call(null,seq__14421_14464__$1);
cljs.compiler.emit.call(null,param_14470);

if(cljs.core._EQ_.call(null,param_14470,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14471 = cljs.core.next.call(null,seq__14421_14464__$1);
var G__14472 = null;
var G__14473 = (0);
var G__14474 = (0);
seq__14421_14454 = G__14471;
chunk__14422_14455 = G__14472;
count__14423_14456 = G__14473;
i__14424_14457 = G__14474;
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

var seq__14425_14475 = cljs.core.seq.call(null,params);
var chunk__14426_14476 = null;
var count__14427_14477 = (0);
var i__14428_14478 = (0);
while(true){
if((i__14428_14478 < count__14427_14477)){
var param_14479 = cljs.core._nth.call(null,chunk__14426_14476,i__14428_14478);
cljs.compiler.emit.call(null,param_14479);

if(cljs.core._EQ_.call(null,param_14479,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14480 = seq__14425_14475;
var G__14481 = chunk__14426_14476;
var G__14482 = count__14427_14477;
var G__14483 = (i__14428_14478 + (1));
seq__14425_14475 = G__14480;
chunk__14426_14476 = G__14481;
count__14427_14477 = G__14482;
i__14428_14478 = G__14483;
continue;
} else {
var temp__4657__auto___14484 = cljs.core.seq.call(null,seq__14425_14475);
if(temp__4657__auto___14484){
var seq__14425_14485__$1 = temp__4657__auto___14484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14425_14485__$1)){
var c__9736__auto___14486 = cljs.core.chunk_first.call(null,seq__14425_14485__$1);
var G__14487 = cljs.core.chunk_rest.call(null,seq__14425_14485__$1);
var G__14488 = c__9736__auto___14486;
var G__14489 = cljs.core.count.call(null,c__9736__auto___14486);
var G__14490 = (0);
seq__14425_14475 = G__14487;
chunk__14426_14476 = G__14488;
count__14427_14477 = G__14489;
i__14428_14478 = G__14490;
continue;
} else {
var param_14491 = cljs.core.first.call(null,seq__14425_14485__$1);
cljs.compiler.emit.call(null,param_14491);

if(cljs.core._EQ_.call(null,param_14491,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14492 = cljs.core.next.call(null,seq__14425_14485__$1);
var G__14493 = null;
var G__14494 = (0);
var G__14495 = (0);
seq__14425_14475 = G__14492;
chunk__14426_14476 = G__14493;
count__14427_14477 = G__14494;
i__14428_14478 = G__14495;
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
var seq__14500 = cljs.core.seq.call(null,params);
var chunk__14501 = null;
var count__14502 = (0);
var i__14503 = (0);
while(true){
if((i__14503 < count__14502)){
var param = cljs.core._nth.call(null,chunk__14501,i__14503);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14504 = seq__14500;
var G__14505 = chunk__14501;
var G__14506 = count__14502;
var G__14507 = (i__14503 + (1));
seq__14500 = G__14504;
chunk__14501 = G__14505;
count__14502 = G__14506;
i__14503 = G__14507;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14500);
if(temp__4657__auto__){
var seq__14500__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14500__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__14500__$1);
var G__14508 = cljs.core.chunk_rest.call(null,seq__14500__$1);
var G__14509 = c__9736__auto__;
var G__14510 = cljs.core.count.call(null,c__9736__auto__);
var G__14511 = (0);
seq__14500 = G__14508;
chunk__14501 = G__14509;
count__14502 = G__14510;
i__14503 = G__14511;
continue;
} else {
var param = cljs.core.first.call(null,seq__14500__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14512 = cljs.core.next.call(null,seq__14500__$1);
var G__14513 = null;
var G__14514 = (0);
var G__14515 = (0);
seq__14500 = G__14512;
chunk__14501 = G__14513;
count__14502 = G__14514;
i__14503 = G__14515;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14516){
var map__14519 = p__14516;
var map__14519__$1 = ((((!((map__14519 == null)))?((((map__14519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14519):map__14519);
var type = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14521){
var map__14532 = p__14521;
var map__14532__$1 = ((((!((map__14532 == null)))?((((map__14532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14532):map__14532);
var f = map__14532__$1;
var type = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_14542__$1 = (function (){var or__8917__auto__ = name;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14543 = cljs.compiler.munge.call(null,name_14542__$1);
var delegate_name_14544 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14543),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_14544," = function (");

var seq__14534_14545 = cljs.core.seq.call(null,params);
var chunk__14535_14546 = null;
var count__14536_14547 = (0);
var i__14537_14548 = (0);
while(true){
if((i__14537_14548 < count__14536_14547)){
var param_14549 = cljs.core._nth.call(null,chunk__14535_14546,i__14537_14548);
cljs.compiler.emit.call(null,param_14549);

if(cljs.core._EQ_.call(null,param_14549,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14550 = seq__14534_14545;
var G__14551 = chunk__14535_14546;
var G__14552 = count__14536_14547;
var G__14553 = (i__14537_14548 + (1));
seq__14534_14545 = G__14550;
chunk__14535_14546 = G__14551;
count__14536_14547 = G__14552;
i__14537_14548 = G__14553;
continue;
} else {
var temp__4657__auto___14554 = cljs.core.seq.call(null,seq__14534_14545);
if(temp__4657__auto___14554){
var seq__14534_14555__$1 = temp__4657__auto___14554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14534_14555__$1)){
var c__9736__auto___14556 = cljs.core.chunk_first.call(null,seq__14534_14555__$1);
var G__14557 = cljs.core.chunk_rest.call(null,seq__14534_14555__$1);
var G__14558 = c__9736__auto___14556;
var G__14559 = cljs.core.count.call(null,c__9736__auto___14556);
var G__14560 = (0);
seq__14534_14545 = G__14557;
chunk__14535_14546 = G__14558;
count__14536_14547 = G__14559;
i__14537_14548 = G__14560;
continue;
} else {
var param_14561 = cljs.core.first.call(null,seq__14534_14555__$1);
cljs.compiler.emit.call(null,param_14561);

if(cljs.core._EQ_.call(null,param_14561,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14562 = cljs.core.next.call(null,seq__14534_14555__$1);
var G__14563 = null;
var G__14564 = (0);
var G__14565 = (0);
seq__14534_14545 = G__14562;
chunk__14535_14546 = G__14563;
count__14536_14547 = G__14564;
i__14537_14548 = G__14565;
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

cljs.compiler.emitln.call(null,"var ",mname_14543," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_14566 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_14566,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_14544,".call(this,");

var seq__14538_14567 = cljs.core.seq.call(null,params);
var chunk__14539_14568 = null;
var count__14540_14569 = (0);
var i__14541_14570 = (0);
while(true){
if((i__14541_14570 < count__14540_14569)){
var param_14571 = cljs.core._nth.call(null,chunk__14539_14568,i__14541_14570);
cljs.compiler.emit.call(null,param_14571);

if(cljs.core._EQ_.call(null,param_14571,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14572 = seq__14538_14567;
var G__14573 = chunk__14539_14568;
var G__14574 = count__14540_14569;
var G__14575 = (i__14541_14570 + (1));
seq__14538_14567 = G__14572;
chunk__14539_14568 = G__14573;
count__14540_14569 = G__14574;
i__14541_14570 = G__14575;
continue;
} else {
var temp__4657__auto___14576 = cljs.core.seq.call(null,seq__14538_14567);
if(temp__4657__auto___14576){
var seq__14538_14577__$1 = temp__4657__auto___14576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14538_14577__$1)){
var c__9736__auto___14578 = cljs.core.chunk_first.call(null,seq__14538_14577__$1);
var G__14579 = cljs.core.chunk_rest.call(null,seq__14538_14577__$1);
var G__14580 = c__9736__auto___14578;
var G__14581 = cljs.core.count.call(null,c__9736__auto___14578);
var G__14582 = (0);
seq__14538_14567 = G__14579;
chunk__14539_14568 = G__14580;
count__14540_14569 = G__14581;
i__14541_14570 = G__14582;
continue;
} else {
var param_14583 = cljs.core.first.call(null,seq__14538_14577__$1);
cljs.compiler.emit.call(null,param_14583);

if(cljs.core._EQ_.call(null,param_14583,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14584 = cljs.core.next.call(null,seq__14538_14577__$1);
var G__14585 = null;
var G__14586 = (0);
var G__14587 = (0);
seq__14538_14567 = G__14584;
chunk__14539_14568 = G__14585;
count__14540_14569 = G__14586;
i__14541_14570 = G__14587;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_14543,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_14543,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_14542__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_14543,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14544,";");

cljs.compiler.emitln.call(null,"return ",mname_14543,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14591){
var map__14592 = p__14591;
var map__14592__$1 = ((((!((map__14592 == null)))?((((map__14592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14592):map__14592);
var name = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14588_SHARP_){
var and__8905__auto__ = p1__14588_SHARP_;
if(cljs.core.truth_(and__8905__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14588_SHARP_));
} else {
return and__8905__auto__;
}
});})(map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_14627__$1 = (function (){var or__8917__auto__ = name;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14628 = cljs.compiler.munge.call(null,name_14627__$1);
var maxparams_14629 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14630 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_14627__$1,mname_14628,maxparams_14629,loop_locals,map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14628),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_14627__$1,mname_14628,maxparams_14629,loop_locals,map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_14631 = cljs.core.sort_by.call(null,((function (name_14627__$1,mname_14628,maxparams_14629,mmap_14630,loop_locals,map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14589_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14589_SHARP_)));
});})(name_14627__$1,mname_14628,maxparams_14629,mmap_14630,loop_locals,map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_14630));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_14628," = null;");

var seq__14594_14632 = cljs.core.seq.call(null,ms_14631);
var chunk__14595_14633 = null;
var count__14596_14634 = (0);
var i__14597_14635 = (0);
while(true){
if((i__14597_14635 < count__14596_14634)){
var vec__14598_14636 = cljs.core._nth.call(null,chunk__14595_14633,i__14597_14635);
var n_14637 = cljs.core.nth.call(null,vec__14598_14636,(0),null);
var meth_14638 = cljs.core.nth.call(null,vec__14598_14636,(1),null);
cljs.compiler.emits.call(null,"var ",n_14637," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14638))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14638);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14638);
}

cljs.compiler.emitln.call(null,";");

var G__14639 = seq__14594_14632;
var G__14640 = chunk__14595_14633;
var G__14641 = count__14596_14634;
var G__14642 = (i__14597_14635 + (1));
seq__14594_14632 = G__14639;
chunk__14595_14633 = G__14640;
count__14596_14634 = G__14641;
i__14597_14635 = G__14642;
continue;
} else {
var temp__4657__auto___14643 = cljs.core.seq.call(null,seq__14594_14632);
if(temp__4657__auto___14643){
var seq__14594_14644__$1 = temp__4657__auto___14643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14594_14644__$1)){
var c__9736__auto___14645 = cljs.core.chunk_first.call(null,seq__14594_14644__$1);
var G__14646 = cljs.core.chunk_rest.call(null,seq__14594_14644__$1);
var G__14647 = c__9736__auto___14645;
var G__14648 = cljs.core.count.call(null,c__9736__auto___14645);
var G__14649 = (0);
seq__14594_14632 = G__14646;
chunk__14595_14633 = G__14647;
count__14596_14634 = G__14648;
i__14597_14635 = G__14649;
continue;
} else {
var vec__14601_14650 = cljs.core.first.call(null,seq__14594_14644__$1);
var n_14651 = cljs.core.nth.call(null,vec__14601_14650,(0),null);
var meth_14652 = cljs.core.nth.call(null,vec__14601_14650,(1),null);
cljs.compiler.emits.call(null,"var ",n_14651," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14652))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14652);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14652);
}

cljs.compiler.emitln.call(null,";");

var G__14653 = cljs.core.next.call(null,seq__14594_14644__$1);
var G__14654 = null;
var G__14655 = (0);
var G__14656 = (0);
seq__14594_14632 = G__14653;
chunk__14595_14633 = G__14654;
count__14596_14634 = G__14655;
i__14597_14635 = G__14656;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_14628," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_14629),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14629)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_14629));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__14604_14657 = cljs.core.seq.call(null,ms_14631);
var chunk__14605_14658 = null;
var count__14606_14659 = (0);
var i__14607_14660 = (0);
while(true){
if((i__14607_14660 < count__14606_14659)){
var vec__14608_14661 = cljs.core._nth.call(null,chunk__14605_14658,i__14607_14660);
var n_14662 = cljs.core.nth.call(null,vec__14608_14661,(0),null);
var meth_14663 = cljs.core.nth.call(null,vec__14608_14661,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14663))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14664 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14664," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14665 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14664," = new cljs.core.IndexedSeq(",a_14665,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14662,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14629)),(((cljs.core.count.call(null,maxparams_14629) > (1)))?", ":null),restarg_14664,");");
} else {
var pcnt_14666 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14663));
cljs.compiler.emitln.call(null,"case ",pcnt_14666,":");

cljs.compiler.emitln.call(null,"return ",n_14662,".call(this",(((pcnt_14666 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14666,maxparams_14629));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),",")),");");
}

var G__14667 = seq__14604_14657;
var G__14668 = chunk__14605_14658;
var G__14669 = count__14606_14659;
var G__14670 = (i__14607_14660 + (1));
seq__14604_14657 = G__14667;
chunk__14605_14658 = G__14668;
count__14606_14659 = G__14669;
i__14607_14660 = G__14670;
continue;
} else {
var temp__4657__auto___14671 = cljs.core.seq.call(null,seq__14604_14657);
if(temp__4657__auto___14671){
var seq__14604_14672__$1 = temp__4657__auto___14671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14604_14672__$1)){
var c__9736__auto___14673 = cljs.core.chunk_first.call(null,seq__14604_14672__$1);
var G__14674 = cljs.core.chunk_rest.call(null,seq__14604_14672__$1);
var G__14675 = c__9736__auto___14673;
var G__14676 = cljs.core.count.call(null,c__9736__auto___14673);
var G__14677 = (0);
seq__14604_14657 = G__14674;
chunk__14605_14658 = G__14675;
count__14606_14659 = G__14676;
i__14607_14660 = G__14677;
continue;
} else {
var vec__14611_14678 = cljs.core.first.call(null,seq__14604_14672__$1);
var n_14679 = cljs.core.nth.call(null,vec__14611_14678,(0),null);
var meth_14680 = cljs.core.nth.call(null,vec__14611_14678,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14680))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14681 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14681," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14682 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14681," = new cljs.core.IndexedSeq(",a_14682,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14679,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14629)),(((cljs.core.count.call(null,maxparams_14629) > (1)))?", ":null),restarg_14681,");");
} else {
var pcnt_14683 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14680));
cljs.compiler.emitln.call(null,"case ",pcnt_14683,":");

cljs.compiler.emitln.call(null,"return ",n_14679,".call(this",(((pcnt_14683 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14683,maxparams_14629));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),",")),");");
}

var G__14684 = cljs.core.next.call(null,seq__14604_14672__$1);
var G__14685 = null;
var G__14686 = (0);
var G__14687 = (0);
seq__14604_14657 = G__14684;
chunk__14605_14658 = G__14685;
count__14606_14659 = G__14686;
i__14607_14660 = G__14687;
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
cljs.compiler.emitln.call(null,mname_14628,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_14628,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_14627__$1,mname_14628,maxparams_14629,mmap_14630,ms_14631,loop_locals,map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14590_SHARP_){
var vec__14614 = p1__14590_SHARP_;
var n = cljs.core.nth.call(null,vec__14614,(0),null);
var m = cljs.core.nth.call(null,vec__14614,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_14627__$1,mname_14628,maxparams_14629,mmap_14630,ms_14631,loop_locals,map__14592,map__14592__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_14631),".cljs$lang$applyTo;");
} else {
}

var seq__14617_14688 = cljs.core.seq.call(null,ms_14631);
var chunk__14618_14689 = null;
var count__14619_14690 = (0);
var i__14620_14691 = (0);
while(true){
if((i__14620_14691 < count__14619_14690)){
var vec__14621_14692 = cljs.core._nth.call(null,chunk__14618_14689,i__14620_14691);
var n_14693 = cljs.core.nth.call(null,vec__14621_14692,(0),null);
var meth_14694 = cljs.core.nth.call(null,vec__14621_14692,(1),null);
var c_14695 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14694));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14694))){
cljs.compiler.emitln.call(null,mname_14628,".cljs$core$IFn$_invoke$arity$variadic = ",n_14693,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14628,".cljs$core$IFn$_invoke$arity$",c_14695," = ",n_14693,";");
}

var G__14696 = seq__14617_14688;
var G__14697 = chunk__14618_14689;
var G__14698 = count__14619_14690;
var G__14699 = (i__14620_14691 + (1));
seq__14617_14688 = G__14696;
chunk__14618_14689 = G__14697;
count__14619_14690 = G__14698;
i__14620_14691 = G__14699;
continue;
} else {
var temp__4657__auto___14700 = cljs.core.seq.call(null,seq__14617_14688);
if(temp__4657__auto___14700){
var seq__14617_14701__$1 = temp__4657__auto___14700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14617_14701__$1)){
var c__9736__auto___14702 = cljs.core.chunk_first.call(null,seq__14617_14701__$1);
var G__14703 = cljs.core.chunk_rest.call(null,seq__14617_14701__$1);
var G__14704 = c__9736__auto___14702;
var G__14705 = cljs.core.count.call(null,c__9736__auto___14702);
var G__14706 = (0);
seq__14617_14688 = G__14703;
chunk__14618_14689 = G__14704;
count__14619_14690 = G__14705;
i__14620_14691 = G__14706;
continue;
} else {
var vec__14624_14707 = cljs.core.first.call(null,seq__14617_14701__$1);
var n_14708 = cljs.core.nth.call(null,vec__14624_14707,(0),null);
var meth_14709 = cljs.core.nth.call(null,vec__14624_14707,(1),null);
var c_14710 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14709));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14709))){
cljs.compiler.emitln.call(null,mname_14628,".cljs$core$IFn$_invoke$arity$variadic = ",n_14708,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14628,".cljs$core$IFn$_invoke$arity$",c_14710," = ",n_14708,";");
}

var G__14711 = cljs.core.next.call(null,seq__14617_14701__$1);
var G__14712 = null;
var G__14713 = (0);
var G__14714 = (0);
seq__14617_14688 = G__14711;
chunk__14618_14689 = G__14712;
count__14619_14690 = G__14713;
i__14620_14691 = G__14714;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_14628,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14715){
var map__14716 = p__14715;
var map__14716__$1 = ((((!((map__14716 == null)))?((((map__14716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14716):map__14716);
var statements = cljs.core.get.call(null,map__14716__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__14716__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__14716__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8905__auto__ = statements;
if(cljs.core.truth_(and__8905__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8905__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__14718_14722 = cljs.core.seq.call(null,statements);
var chunk__14719_14723 = null;
var count__14720_14724 = (0);
var i__14721_14725 = (0);
while(true){
if((i__14721_14725 < count__14720_14724)){
var s_14726 = cljs.core._nth.call(null,chunk__14719_14723,i__14721_14725);
cljs.compiler.emitln.call(null,s_14726);

var G__14727 = seq__14718_14722;
var G__14728 = chunk__14719_14723;
var G__14729 = count__14720_14724;
var G__14730 = (i__14721_14725 + (1));
seq__14718_14722 = G__14727;
chunk__14719_14723 = G__14728;
count__14720_14724 = G__14729;
i__14721_14725 = G__14730;
continue;
} else {
var temp__4657__auto___14731 = cljs.core.seq.call(null,seq__14718_14722);
if(temp__4657__auto___14731){
var seq__14718_14732__$1 = temp__4657__auto___14731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14718_14732__$1)){
var c__9736__auto___14733 = cljs.core.chunk_first.call(null,seq__14718_14732__$1);
var G__14734 = cljs.core.chunk_rest.call(null,seq__14718_14732__$1);
var G__14735 = c__9736__auto___14733;
var G__14736 = cljs.core.count.call(null,c__9736__auto___14733);
var G__14737 = (0);
seq__14718_14722 = G__14734;
chunk__14719_14723 = G__14735;
count__14720_14724 = G__14736;
i__14721_14725 = G__14737;
continue;
} else {
var s_14738 = cljs.core.first.call(null,seq__14718_14732__$1);
cljs.compiler.emitln.call(null,s_14738);

var G__14739 = cljs.core.next.call(null,seq__14718_14732__$1);
var G__14740 = null;
var G__14741 = (0);
var G__14742 = (0);
seq__14718_14722 = G__14739;
chunk__14719_14723 = G__14740;
count__14720_14724 = G__14741;
i__14721_14725 = G__14742;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8905__auto__ = statements;
if(cljs.core.truth_(and__8905__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8905__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14743){
var map__14744 = p__14743;
var map__14744__$1 = ((((!((map__14744 == null)))?((((map__14744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14744):map__14744);
var env = cljs.core.get.call(null,map__14744__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__14744__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__14744__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__14744__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__14744__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8917__auto__ = name;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14746,is_loop){
var map__14758 = p__14746;
var map__14758__$1 = ((((!((map__14758 == null)))?((((map__14758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14758):map__14758);
var bindings = cljs.core.get.call(null,map__14758__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14758__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_14760_14769 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_14760_14769,context,map__14758,map__14758__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_14760_14769,context,map__14758,map__14758__$1,bindings,expr,env))
,bindings):null));

try{var seq__14761_14770 = cljs.core.seq.call(null,bindings);
var chunk__14762_14771 = null;
var count__14763_14772 = (0);
var i__14764_14773 = (0);
while(true){
if((i__14764_14773 < count__14763_14772)){
var map__14765_14774 = cljs.core._nth.call(null,chunk__14762_14771,i__14764_14773);
var map__14765_14775__$1 = ((((!((map__14765_14774 == null)))?((((map__14765_14774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14765_14774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14765_14774):map__14765_14774);
var binding_14776 = map__14765_14775__$1;
var init_14777 = cljs.core.get.call(null,map__14765_14775__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14776);

cljs.compiler.emitln.call(null," = ",init_14777,";");

var G__14778 = seq__14761_14770;
var G__14779 = chunk__14762_14771;
var G__14780 = count__14763_14772;
var G__14781 = (i__14764_14773 + (1));
seq__14761_14770 = G__14778;
chunk__14762_14771 = G__14779;
count__14763_14772 = G__14780;
i__14764_14773 = G__14781;
continue;
} else {
var temp__4657__auto___14782 = cljs.core.seq.call(null,seq__14761_14770);
if(temp__4657__auto___14782){
var seq__14761_14783__$1 = temp__4657__auto___14782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14761_14783__$1)){
var c__9736__auto___14784 = cljs.core.chunk_first.call(null,seq__14761_14783__$1);
var G__14785 = cljs.core.chunk_rest.call(null,seq__14761_14783__$1);
var G__14786 = c__9736__auto___14784;
var G__14787 = cljs.core.count.call(null,c__9736__auto___14784);
var G__14788 = (0);
seq__14761_14770 = G__14785;
chunk__14762_14771 = G__14786;
count__14763_14772 = G__14787;
i__14764_14773 = G__14788;
continue;
} else {
var map__14767_14789 = cljs.core.first.call(null,seq__14761_14783__$1);
var map__14767_14790__$1 = ((((!((map__14767_14789 == null)))?((((map__14767_14789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14767_14789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14767_14789):map__14767_14789);
var binding_14791 = map__14767_14790__$1;
var init_14792 = cljs.core.get.call(null,map__14767_14790__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14791);

cljs.compiler.emitln.call(null," = ",init_14792,";");

var G__14793 = cljs.core.next.call(null,seq__14761_14783__$1);
var G__14794 = null;
var G__14795 = (0);
var G__14796 = (0);
seq__14761_14770 = G__14793;
chunk__14762_14771 = G__14794;
count__14763_14772 = G__14795;
i__14764_14773 = G__14796;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_14760_14769;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14797){
var map__14798 = p__14797;
var map__14798__$1 = ((((!((map__14798 == null)))?((((map__14798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14798):map__14798);
var frame = cljs.core.get.call(null,map__14798__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14798__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9840__auto___14800 = cljs.core.count.call(null,exprs);
var i_14801 = (0);
while(true){
if((i_14801 < n__9840__auto___14800)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14801)," = ",exprs.call(null,i_14801),";");

var G__14802 = (i_14801 + (1));
i_14801 = G__14802;
continue;
} else {
}
break;
}

var n__9840__auto___14803 = cljs.core.count.call(null,exprs);
var i_14804 = (0);
while(true){
if((i_14804 < n__9840__auto___14803)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14804))," = ",temps.call(null,i_14804),";");

var G__14805 = (i_14804 + (1));
i_14804 = G__14805;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14806){
var map__14807 = p__14806;
var map__14807__$1 = ((((!((map__14807 == null)))?((((map__14807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14807):map__14807);
var bindings = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14809_14817 = cljs.core.seq.call(null,bindings);
var chunk__14810_14818 = null;
var count__14811_14819 = (0);
var i__14812_14820 = (0);
while(true){
if((i__14812_14820 < count__14811_14819)){
var map__14813_14821 = cljs.core._nth.call(null,chunk__14810_14818,i__14812_14820);
var map__14813_14822__$1 = ((((!((map__14813_14821 == null)))?((((map__14813_14821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14813_14821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14813_14821):map__14813_14821);
var binding_14823 = map__14813_14822__$1;
var init_14824 = cljs.core.get.call(null,map__14813_14822__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14823)," = ",init_14824,";");

var G__14825 = seq__14809_14817;
var G__14826 = chunk__14810_14818;
var G__14827 = count__14811_14819;
var G__14828 = (i__14812_14820 + (1));
seq__14809_14817 = G__14825;
chunk__14810_14818 = G__14826;
count__14811_14819 = G__14827;
i__14812_14820 = G__14828;
continue;
} else {
var temp__4657__auto___14829 = cljs.core.seq.call(null,seq__14809_14817);
if(temp__4657__auto___14829){
var seq__14809_14830__$1 = temp__4657__auto___14829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14809_14830__$1)){
var c__9736__auto___14831 = cljs.core.chunk_first.call(null,seq__14809_14830__$1);
var G__14832 = cljs.core.chunk_rest.call(null,seq__14809_14830__$1);
var G__14833 = c__9736__auto___14831;
var G__14834 = cljs.core.count.call(null,c__9736__auto___14831);
var G__14835 = (0);
seq__14809_14817 = G__14832;
chunk__14810_14818 = G__14833;
count__14811_14819 = G__14834;
i__14812_14820 = G__14835;
continue;
} else {
var map__14815_14836 = cljs.core.first.call(null,seq__14809_14830__$1);
var map__14815_14837__$1 = ((((!((map__14815_14836 == null)))?((((map__14815_14836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14815_14836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14815_14836):map__14815_14836);
var binding_14838 = map__14815_14837__$1;
var init_14839 = cljs.core.get.call(null,map__14815_14837__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14838)," = ",init_14839,";");

var G__14840 = cljs.core.next.call(null,seq__14809_14830__$1);
var G__14841 = null;
var G__14842 = (0);
var G__14843 = (0);
seq__14809_14817 = G__14840;
chunk__14810_14818 = G__14841;
count__14811_14819 = G__14842;
i__14812_14820 = G__14843;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14846){
var map__14847 = p__14846;
var map__14847__$1 = ((((!((map__14847 == null)))?((((map__14847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14847):map__14847);
var expr = map__14847__$1;
var f = cljs.core.get.call(null,map__14847__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14847__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14847__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8905__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8905__auto__){
var and__8905__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8905__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8905__auto__ = protocol;
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = tag;
if(cljs.core.truth_(and__8905__auto____$1)){
var or__8917__auto__ = (function (){var and__8905__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8905__auto____$2){
var and__8905__auto____$3 = protocol;
if(cljs.core.truth_(and__8905__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8905__auto____$3;
}
} else {
return and__8905__auto____$2;
}
})();
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
var and__8905__auto____$2 = (function (){var or__8917__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8917__auto____$1){
return or__8917__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8905__auto____$2)){
var or__8917__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8917__auto____$1){
return or__8917__auto____$1;
} else {
var and__8905__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8905__auto____$3){
var and__8905__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8905__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8905__auto____$4;
}
} else {
return and__8905__auto____$3;
}
}
} else {
return and__8905__auto____$2;
}
}
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8917__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8917__auto__){
return or__8917__auto__;
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
var vec__14849 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8905__auto__)){
return (arity > mfa);
} else {
return and__8905__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env){
return (function (p1__14844_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14844_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env){
return (function (p1__14845_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14845_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14847,map__14847__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14849,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14849,(1),null);
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14852 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14852,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14853 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14853,args)),(((mfa_14853 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14853,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8917__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
var or__8917__auto____$1 = js_QMARK_;
if(or__8917__auto____$1){
return or__8917__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_14854 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_14854," ? ",f__$1,fprop_14854,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14855){
var map__14856 = p__14855;
var map__14856__$1 = ((((!((map__14856 == null)))?((((map__14856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14856):map__14856);
var ctor = cljs.core.get.call(null,map__14856__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__14856__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14858){
var map__14859 = p__14858;
var map__14859__$1 = ((((!((map__14859 == null)))?((((map__14859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14859):map__14859);
var target = cljs.core.get.call(null,map__14859__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14859__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14859__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
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

var seq__14873_14885 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps)));
var chunk__14874_14886 = null;
var count__14875_14887 = (0);
var i__14876_14888 = (0);
while(true){
if((i__14876_14888 < count__14875_14887)){
var lib_14889 = cljs.core._nth.call(null,chunk__14874_14886,i__14876_14888);
if(cljs.core.truth_((function (){var and__8905__auto__ = cljs.analyzer.foreign_dep_QMARK_.call(null,lib_14889);
if(and__8905__auto__){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__4657__auto__)){
var map__14879 = temp__4657__auto__;
var map__14879__$1 = ((((!((map__14879 == null)))?((((map__14879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14879):map__14879);
var optimizations = cljs.core.get.call(null,map__14879__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__8905__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__8917__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14889),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14889),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8917__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14889),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14889),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14889),"');");

}
}
}

var G__14890 = seq__14873_14885;
var G__14891 = chunk__14874_14886;
var G__14892 = count__14875_14887;
var G__14893 = (i__14876_14888 + (1));
seq__14873_14885 = G__14890;
chunk__14874_14886 = G__14891;
count__14875_14887 = G__14892;
i__14876_14888 = G__14893;
continue;
} else {
var temp__4657__auto___14894 = cljs.core.seq.call(null,seq__14873_14885);
if(temp__4657__auto___14894){
var seq__14873_14895__$1 = temp__4657__auto___14894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14873_14895__$1)){
var c__9736__auto___14896 = cljs.core.chunk_first.call(null,seq__14873_14895__$1);
var G__14897 = cljs.core.chunk_rest.call(null,seq__14873_14895__$1);
var G__14898 = c__9736__auto___14896;
var G__14899 = cljs.core.count.call(null,c__9736__auto___14896);
var G__14900 = (0);
seq__14873_14885 = G__14897;
chunk__14874_14886 = G__14898;
count__14875_14887 = G__14899;
i__14876_14888 = G__14900;
continue;
} else {
var lib_14901 = cljs.core.first.call(null,seq__14873_14895__$1);
if(cljs.core.truth_((function (){var and__8905__auto__ = cljs.analyzer.foreign_dep_QMARK_.call(null,lib_14901);
if(and__8905__auto__){
var temp__4657__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__4657__auto____$1)){
var map__14883 = temp__4657__auto____$1;
var map__14883__$1 = ((((!((map__14883 == null)))?((((map__14883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14883):map__14883);
var optimizations = cljs.core.get.call(null,map__14883__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__8905__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__8917__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14901),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14901),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8917__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14901),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14901),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14901),"');");

}
}
}

var G__14902 = cljs.core.next.call(null,seq__14873_14895__$1);
var G__14903 = null;
var G__14904 = (0);
var G__14905 = (0);
seq__14873_14885 = G__14902;
chunk__14874_14886 = G__14903;
count__14875_14887 = G__14904;
i__14876_14888 = G__14905;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__14906){
var map__14907 = p__14906;
var map__14907__$1 = ((((!((map__14907 == null)))?((((map__14907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14907):map__14907);
var name = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14909){
var map__14910 = p__14909;
var map__14910__$1 = ((((!((map__14910 == null)))?((((map__14910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14910):map__14910);
var name = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__14912){
var map__14913 = p__14912;
var map__14913__$1 = ((((!((map__14913 == null)))?((((map__14913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14913):map__14913);
var t = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14913__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14915_14933 = cljs.core.seq.call(null,protocols);
var chunk__14916_14934 = null;
var count__14917_14935 = (0);
var i__14918_14936 = (0);
while(true){
if((i__14918_14936 < count__14917_14935)){
var protocol_14937 = cljs.core._nth.call(null,chunk__14916_14934,i__14918_14936);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14937)].join('')),"}");

var G__14938 = seq__14915_14933;
var G__14939 = chunk__14916_14934;
var G__14940 = count__14917_14935;
var G__14941 = (i__14918_14936 + (1));
seq__14915_14933 = G__14938;
chunk__14916_14934 = G__14939;
count__14917_14935 = G__14940;
i__14918_14936 = G__14941;
continue;
} else {
var temp__4657__auto___14942 = cljs.core.seq.call(null,seq__14915_14933);
if(temp__4657__auto___14942){
var seq__14915_14943__$1 = temp__4657__auto___14942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14915_14943__$1)){
var c__9736__auto___14944 = cljs.core.chunk_first.call(null,seq__14915_14943__$1);
var G__14945 = cljs.core.chunk_rest.call(null,seq__14915_14943__$1);
var G__14946 = c__9736__auto___14944;
var G__14947 = cljs.core.count.call(null,c__9736__auto___14944);
var G__14948 = (0);
seq__14915_14933 = G__14945;
chunk__14916_14934 = G__14946;
count__14917_14935 = G__14947;
i__14918_14936 = G__14948;
continue;
} else {
var protocol_14949 = cljs.core.first.call(null,seq__14915_14943__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14949)].join('')),"}");

var G__14950 = cljs.core.next.call(null,seq__14915_14943__$1);
var G__14951 = null;
var G__14952 = (0);
var G__14953 = (0);
seq__14915_14933 = G__14950;
chunk__14916_14934 = G__14951;
count__14917_14935 = G__14952;
i__14918_14936 = G__14953;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14919_14954 = cljs.core.seq.call(null,fields__$1);
var chunk__14920_14955 = null;
var count__14921_14956 = (0);
var i__14922_14957 = (0);
while(true){
if((i__14922_14957 < count__14921_14956)){
var fld_14958 = cljs.core._nth.call(null,chunk__14920_14955,i__14922_14957);
cljs.compiler.emitln.call(null,"this.",fld_14958," = ",fld_14958,";");

var G__14959 = seq__14919_14954;
var G__14960 = chunk__14920_14955;
var G__14961 = count__14921_14956;
var G__14962 = (i__14922_14957 + (1));
seq__14919_14954 = G__14959;
chunk__14920_14955 = G__14960;
count__14921_14956 = G__14961;
i__14922_14957 = G__14962;
continue;
} else {
var temp__4657__auto___14963 = cljs.core.seq.call(null,seq__14919_14954);
if(temp__4657__auto___14963){
var seq__14919_14964__$1 = temp__4657__auto___14963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14919_14964__$1)){
var c__9736__auto___14965 = cljs.core.chunk_first.call(null,seq__14919_14964__$1);
var G__14966 = cljs.core.chunk_rest.call(null,seq__14919_14964__$1);
var G__14967 = c__9736__auto___14965;
var G__14968 = cljs.core.count.call(null,c__9736__auto___14965);
var G__14969 = (0);
seq__14919_14954 = G__14966;
chunk__14920_14955 = G__14967;
count__14921_14956 = G__14968;
i__14922_14957 = G__14969;
continue;
} else {
var fld_14970 = cljs.core.first.call(null,seq__14919_14964__$1);
cljs.compiler.emitln.call(null,"this.",fld_14970," = ",fld_14970,";");

var G__14971 = cljs.core.next.call(null,seq__14919_14964__$1);
var G__14972 = null;
var G__14973 = (0);
var G__14974 = (0);
seq__14919_14954 = G__14971;
chunk__14920_14955 = G__14972;
count__14921_14956 = G__14973;
i__14922_14957 = G__14974;
continue;
}
} else {
}
}
break;
}

var seq__14923_14975 = cljs.core.seq.call(null,pmasks);
var chunk__14924_14976 = null;
var count__14925_14977 = (0);
var i__14926_14978 = (0);
while(true){
if((i__14926_14978 < count__14925_14977)){
var vec__14927_14979 = cljs.core._nth.call(null,chunk__14924_14976,i__14926_14978);
var pno_14980 = cljs.core.nth.call(null,vec__14927_14979,(0),null);
var pmask_14981 = cljs.core.nth.call(null,vec__14927_14979,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14980,"$ = ",pmask_14981,";");

var G__14982 = seq__14923_14975;
var G__14983 = chunk__14924_14976;
var G__14984 = count__14925_14977;
var G__14985 = (i__14926_14978 + (1));
seq__14923_14975 = G__14982;
chunk__14924_14976 = G__14983;
count__14925_14977 = G__14984;
i__14926_14978 = G__14985;
continue;
} else {
var temp__4657__auto___14986 = cljs.core.seq.call(null,seq__14923_14975);
if(temp__4657__auto___14986){
var seq__14923_14987__$1 = temp__4657__auto___14986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14923_14987__$1)){
var c__9736__auto___14988 = cljs.core.chunk_first.call(null,seq__14923_14987__$1);
var G__14989 = cljs.core.chunk_rest.call(null,seq__14923_14987__$1);
var G__14990 = c__9736__auto___14988;
var G__14991 = cljs.core.count.call(null,c__9736__auto___14988);
var G__14992 = (0);
seq__14923_14975 = G__14989;
chunk__14924_14976 = G__14990;
count__14925_14977 = G__14991;
i__14926_14978 = G__14992;
continue;
} else {
var vec__14930_14993 = cljs.core.first.call(null,seq__14923_14987__$1);
var pno_14994 = cljs.core.nth.call(null,vec__14930_14993,(0),null);
var pmask_14995 = cljs.core.nth.call(null,vec__14930_14993,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14994,"$ = ",pmask_14995,";");

var G__14996 = cljs.core.next.call(null,seq__14923_14987__$1);
var G__14997 = null;
var G__14998 = (0);
var G__14999 = (0);
seq__14923_14975 = G__14996;
chunk__14924_14976 = G__14997;
count__14925_14977 = G__14998;
i__14926_14978 = G__14999;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__15000){
var map__15001 = p__15000;
var map__15001__$1 = ((((!((map__15001 == null)))?((((map__15001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15001):map__15001);
var t = cljs.core.get.call(null,map__15001__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15001__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15001__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15001__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15001__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15003_15021 = cljs.core.seq.call(null,protocols);
var chunk__15004_15022 = null;
var count__15005_15023 = (0);
var i__15006_15024 = (0);
while(true){
if((i__15006_15024 < count__15005_15023)){
var protocol_15025 = cljs.core._nth.call(null,chunk__15004_15022,i__15006_15024);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15025)].join('')),"}");

var G__15026 = seq__15003_15021;
var G__15027 = chunk__15004_15022;
var G__15028 = count__15005_15023;
var G__15029 = (i__15006_15024 + (1));
seq__15003_15021 = G__15026;
chunk__15004_15022 = G__15027;
count__15005_15023 = G__15028;
i__15006_15024 = G__15029;
continue;
} else {
var temp__4657__auto___15030 = cljs.core.seq.call(null,seq__15003_15021);
if(temp__4657__auto___15030){
var seq__15003_15031__$1 = temp__4657__auto___15030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15003_15031__$1)){
var c__9736__auto___15032 = cljs.core.chunk_first.call(null,seq__15003_15031__$1);
var G__15033 = cljs.core.chunk_rest.call(null,seq__15003_15031__$1);
var G__15034 = c__9736__auto___15032;
var G__15035 = cljs.core.count.call(null,c__9736__auto___15032);
var G__15036 = (0);
seq__15003_15021 = G__15033;
chunk__15004_15022 = G__15034;
count__15005_15023 = G__15035;
i__15006_15024 = G__15036;
continue;
} else {
var protocol_15037 = cljs.core.first.call(null,seq__15003_15031__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15037)].join('')),"}");

var G__15038 = cljs.core.next.call(null,seq__15003_15031__$1);
var G__15039 = null;
var G__15040 = (0);
var G__15041 = (0);
seq__15003_15021 = G__15038;
chunk__15004_15022 = G__15039;
count__15005_15023 = G__15040;
i__15006_15024 = G__15041;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15007_15042 = cljs.core.seq.call(null,fields__$1);
var chunk__15008_15043 = null;
var count__15009_15044 = (0);
var i__15010_15045 = (0);
while(true){
if((i__15010_15045 < count__15009_15044)){
var fld_15046 = cljs.core._nth.call(null,chunk__15008_15043,i__15010_15045);
cljs.compiler.emitln.call(null,"this.",fld_15046," = ",fld_15046,";");

var G__15047 = seq__15007_15042;
var G__15048 = chunk__15008_15043;
var G__15049 = count__15009_15044;
var G__15050 = (i__15010_15045 + (1));
seq__15007_15042 = G__15047;
chunk__15008_15043 = G__15048;
count__15009_15044 = G__15049;
i__15010_15045 = G__15050;
continue;
} else {
var temp__4657__auto___15051 = cljs.core.seq.call(null,seq__15007_15042);
if(temp__4657__auto___15051){
var seq__15007_15052__$1 = temp__4657__auto___15051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15007_15052__$1)){
var c__9736__auto___15053 = cljs.core.chunk_first.call(null,seq__15007_15052__$1);
var G__15054 = cljs.core.chunk_rest.call(null,seq__15007_15052__$1);
var G__15055 = c__9736__auto___15053;
var G__15056 = cljs.core.count.call(null,c__9736__auto___15053);
var G__15057 = (0);
seq__15007_15042 = G__15054;
chunk__15008_15043 = G__15055;
count__15009_15044 = G__15056;
i__15010_15045 = G__15057;
continue;
} else {
var fld_15058 = cljs.core.first.call(null,seq__15007_15052__$1);
cljs.compiler.emitln.call(null,"this.",fld_15058," = ",fld_15058,";");

var G__15059 = cljs.core.next.call(null,seq__15007_15052__$1);
var G__15060 = null;
var G__15061 = (0);
var G__15062 = (0);
seq__15007_15042 = G__15059;
chunk__15008_15043 = G__15060;
count__15009_15044 = G__15061;
i__15010_15045 = G__15062;
continue;
}
} else {
}
}
break;
}

var seq__15011_15063 = cljs.core.seq.call(null,pmasks);
var chunk__15012_15064 = null;
var count__15013_15065 = (0);
var i__15014_15066 = (0);
while(true){
if((i__15014_15066 < count__15013_15065)){
var vec__15015_15067 = cljs.core._nth.call(null,chunk__15012_15064,i__15014_15066);
var pno_15068 = cljs.core.nth.call(null,vec__15015_15067,(0),null);
var pmask_15069 = cljs.core.nth.call(null,vec__15015_15067,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15068,"$ = ",pmask_15069,";");

var G__15070 = seq__15011_15063;
var G__15071 = chunk__15012_15064;
var G__15072 = count__15013_15065;
var G__15073 = (i__15014_15066 + (1));
seq__15011_15063 = G__15070;
chunk__15012_15064 = G__15071;
count__15013_15065 = G__15072;
i__15014_15066 = G__15073;
continue;
} else {
var temp__4657__auto___15074 = cljs.core.seq.call(null,seq__15011_15063);
if(temp__4657__auto___15074){
var seq__15011_15075__$1 = temp__4657__auto___15074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15011_15075__$1)){
var c__9736__auto___15076 = cljs.core.chunk_first.call(null,seq__15011_15075__$1);
var G__15077 = cljs.core.chunk_rest.call(null,seq__15011_15075__$1);
var G__15078 = c__9736__auto___15076;
var G__15079 = cljs.core.count.call(null,c__9736__auto___15076);
var G__15080 = (0);
seq__15011_15063 = G__15077;
chunk__15012_15064 = G__15078;
count__15013_15065 = G__15079;
i__15014_15066 = G__15080;
continue;
} else {
var vec__15018_15081 = cljs.core.first.call(null,seq__15011_15075__$1);
var pno_15082 = cljs.core.nth.call(null,vec__15018_15081,(0),null);
var pmask_15083 = cljs.core.nth.call(null,vec__15018_15081,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15082,"$ = ",pmask_15083,";");

var G__15084 = cljs.core.next.call(null,seq__15011_15075__$1);
var G__15085 = null;
var G__15086 = (0);
var G__15087 = (0);
seq__15011_15063 = G__15084;
chunk__15012_15064 = G__15085;
count__15013_15065 = G__15086;
i__15014_15066 = G__15087;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15088){
var map__15089 = p__15088;
var map__15089__$1 = ((((!((map__15089 == null)))?((((map__15089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15089):map__15089);
var target = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15091){
var map__15092 = p__15091;
var map__15092__$1 = ((((!((map__15092 == null)))?((((map__15092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15092):map__15092);
var op = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8905__auto__ = code;
if(cljs.core.truth_(and__8905__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8905__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13960__auto__))){
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

var seq__15107 = cljs.core.seq.call(null,table);
var chunk__15108 = null;
var count__15109 = (0);
var i__15110 = (0);
while(true){
if((i__15110 < count__15109)){
var vec__15111 = cljs.core._nth.call(null,chunk__15108,i__15110);
var sym = cljs.core.nth.call(null,vec__15111,(0),null);
var value = cljs.core.nth.call(null,vec__15111,(1),null);
var ns_15117 = cljs.core.namespace.call(null,sym);
var name_15118 = cljs.core.name.call(null,sym);
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

var G__15119 = seq__15107;
var G__15120 = chunk__15108;
var G__15121 = count__15109;
var G__15122 = (i__15110 + (1));
seq__15107 = G__15119;
chunk__15108 = G__15120;
count__15109 = G__15121;
i__15110 = G__15122;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15107);
if(temp__4657__auto__){
var seq__15107__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15107__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__15107__$1);
var G__15123 = cljs.core.chunk_rest.call(null,seq__15107__$1);
var G__15124 = c__9736__auto__;
var G__15125 = cljs.core.count.call(null,c__9736__auto__);
var G__15126 = (0);
seq__15107 = G__15123;
chunk__15108 = G__15124;
count__15109 = G__15125;
i__15110 = G__15126;
continue;
} else {
var vec__15114 = cljs.core.first.call(null,seq__15107__$1);
var sym = cljs.core.nth.call(null,vec__15114,(0),null);
var value = cljs.core.nth.call(null,vec__15114,(1),null);
var ns_15127 = cljs.core.namespace.call(null,sym);
var name_15128 = cljs.core.name.call(null,sym);
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

var G__15129 = cljs.core.next.call(null,seq__15107__$1);
var G__15130 = null;
var G__15131 = (0);
var G__15132 = (0);
seq__15107 = G__15129;
chunk__15108 = G__15130;
count__15109 = G__15131;
i__15110 = G__15132;
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
var args15133 = [];
var len__10030__auto___15139 = arguments.length;
var i__10031__auto___15140 = (0);
while(true){
if((i__10031__auto___15140 < len__10030__auto___15139)){
args15133.push((arguments[i__10031__auto___15140]));

var G__15141 = (i__10031__auto___15140 + (1));
i__10031__auto___15140 = G__15141;
continue;
} else {
}
break;
}

var G__15135 = args15133.length;
switch (G__15135) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15133.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_15143 = cljs.core.first.call(null,ks);
var vec__15136_15144 = cljs.core.conj.call(null,prefix,k_15143);
var top_15145 = cljs.core.nth.call(null,vec__15136_15144,(0),null);
var prefix_SINGLEQUOTE__15146 = vec__15136_15144;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_15143)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__15146) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_15145)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_15145)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__15146)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_15145);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__15146)),";");
}
} else {
}

var m_15147 = cljs.core.get.call(null,externs,k_15143);
if(cljs.core.empty_QMARK_.call(null,m_15147)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__15146,m_15147,top_level,known_externs);
}

var G__15148 = cljs.core.next.call(null,ks);
ks = G__15148;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map