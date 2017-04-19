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
var map__14096 = s;
var map__14096__$1 = ((((!((map__14096 == null)))?((((map__14096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14096):map__14096);
var name = cljs.core.get.call(null,map__14096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14096__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14099 = info;
var map__14100 = G__14099;
var map__14100__$1 = ((((!((map__14100 == null)))?((((map__14100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14100):map__14100);
var shadow = cljs.core.get.call(null,map__14100__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14099__$1 = G__14099;
while(true){
var d__$2 = d__$1;
var map__14102 = G__14099__$1;
var map__14102__$1 = ((((!((map__14102 == null)))?((((map__14102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14102):map__14102);
var shadow__$1 = cljs.core.get.call(null,map__14102__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14104 = (d__$2 + (1));
var G__14105 = shadow__$1;
d__$1 = G__14104;
G__14099__$1 = G__14105;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14106){
var map__14111 = p__14106;
var map__14111__$1 = ((((!((map__14111 == null)))?((((map__14111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14111):map__14111);
var name_var = map__14111__$1;
var name = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14111__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__14113 = info;
var map__14113__$1 = ((((!((map__14113 == null)))?((((map__14113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14113):map__14113);
var ns = cljs.core.get.call(null,map__14113__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14113__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args14115 = [];
var len__11385__auto___14118 = arguments.length;
var i__11386__auto___14119 = (0);
while(true){
if((i__11386__auto___14119 < len__11385__auto___14118)){
args14115.push((arguments[i__11386__auto___14119]));

var G__14120 = (i__11386__auto___14119 + (1));
i__11386__auto___14119 = G__14120;
continue;
} else {
}
break;
}

var G__14117 = args14115.length;
switch (G__14117) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14115.length)].join('')));

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
var G__14123 = cp;
switch (G__14123) {
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
var seq__14129_14133 = cljs.core.seq.call(null,s);
var chunk__14130_14134 = null;
var count__14131_14135 = (0);
var i__14132_14136 = (0);
while(true){
if((i__14132_14136 < count__14131_14135)){
var c_14137 = cljs.core._nth.call(null,chunk__14130_14134,i__14132_14136);
sb.append(cljs.compiler.escape_char.call(null,c_14137));

var G__14138 = seq__14129_14133;
var G__14139 = chunk__14130_14134;
var G__14140 = count__14131_14135;
var G__14141 = (i__14132_14136 + (1));
seq__14129_14133 = G__14138;
chunk__14130_14134 = G__14139;
count__14131_14135 = G__14140;
i__14132_14136 = G__14141;
continue;
} else {
var temp__4657__auto___14142 = cljs.core.seq.call(null,seq__14129_14133);
if(temp__4657__auto___14142){
var seq__14129_14143__$1 = temp__4657__auto___14142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14129_14143__$1)){
var c__11091__auto___14144 = cljs.core.chunk_first.call(null,seq__14129_14143__$1);
var G__14145 = cljs.core.chunk_rest.call(null,seq__14129_14143__$1);
var G__14146 = c__11091__auto___14144;
var G__14147 = cljs.core.count.call(null,c__11091__auto___14144);
var G__14148 = (0);
seq__14129_14133 = G__14145;
chunk__14130_14134 = G__14146;
count__14131_14135 = G__14147;
i__14132_14136 = G__14148;
continue;
} else {
var c_14149 = cljs.core.first.call(null,seq__14129_14143__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14149));

var G__14150 = cljs.core.next.call(null,seq__14129_14143__$1);
var G__14151 = null;
var G__14152 = (0);
var G__14153 = (0);
seq__14129_14133 = G__14150;
chunk__14130_14134 = G__14151;
count__14131_14135 = G__14152;
i__14132_14136 = G__14153;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__11205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11208__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11209__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11209__auto__,method_table__11205__auto__,prefer_table__11206__auto__,method_cache__11207__auto__,cached_hierarchy__11208__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__12198__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__12198__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14159_14164 = ast;
var map__14159_14165__$1 = ((((!((map__14159_14164 == null)))?((((map__14159_14164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14159_14164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14159_14164):map__14159_14164);
var env_14166 = cljs.core.get.call(null,map__14159_14165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14166))){
var map__14161_14167 = env_14166;
var map__14161_14168__$1 = ((((!((map__14161_14167 == null)))?((((map__14161_14167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14161_14167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14161_14167):map__14161_14167);
var line_14169 = cljs.core.get.call(null,map__14161_14168__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14170 = cljs.core.get.call(null,map__14161_14168__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__14161_14167,map__14161_14168__$1,line_14169,column_14170,map__14159_14164,map__14159_14165__$1,env_14166,val__12198__auto__){
return (function (m){
var minfo = (function (){var G__14163 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__14163,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__14163;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14169 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__14161_14167,map__14161_14168__$1,line_14169,column_14170,map__14159_14164,map__14159_14165__$1,env_14166,val__12198__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14170)?(column_14170 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__14161_14167,map__14161_14168__$1,line_14169,column_14170,map__14159_14164,map__14159_14165__$1,env_14166,val__12198__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__14161_14167,map__14161_14168__$1,line_14169,column_14170,map__14159_14164,map__14159_14165__$1,env_14166,val__12198__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14161_14167,map__14161_14168__$1,line_14169,column_14170,map__14159_14164,map__14159_14165__$1,env_14166,val__12198__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__14161_14167,map__14161_14168__$1,line_14169,column_14170,map__14159_14164,map__14159_14165__$1,env_14166,val__12198__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__12198__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__11392__auto__ = [];
var len__11385__auto___14177 = arguments.length;
var i__11386__auto___14178 = (0);
while(true){
if((i__11386__auto___14178 < len__11385__auto___14177)){
args__11392__auto__.push((arguments[i__11386__auto___14178]));

var G__14179 = (i__11386__auto___14178 + (1));
i__11386__auto___14178 = G__14179;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((0) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__11393__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14173_14180 = cljs.core.seq.call(null,xs);
var chunk__14174_14181 = null;
var count__14175_14182 = (0);
var i__14176_14183 = (0);
while(true){
if((i__14176_14183 < count__14175_14182)){
var x_14184 = cljs.core._nth.call(null,chunk__14174_14181,i__14176_14183);
if((x_14184 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14184)){
cljs.compiler.emit.call(null,x_14184);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14184)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14184);
} else {
if(goog.isFunction(x_14184)){
x_14184.call(null);
} else {
var s_14185 = cljs.core.print_str.call(null,x_14184);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14173_14180,chunk__14174_14181,count__14175_14182,i__14176_14183,s_14185,x_14184){
return (function (p1__14171_SHARP_){
return (p1__14171_SHARP_ + cljs.core.count.call(null,s_14185));
});})(seq__14173_14180,chunk__14174_14181,count__14175_14182,i__14176_14183,s_14185,x_14184))
);
}

cljs.core.print.call(null,s_14185);

}
}
}
}

var G__14186 = seq__14173_14180;
var G__14187 = chunk__14174_14181;
var G__14188 = count__14175_14182;
var G__14189 = (i__14176_14183 + (1));
seq__14173_14180 = G__14186;
chunk__14174_14181 = G__14187;
count__14175_14182 = G__14188;
i__14176_14183 = G__14189;
continue;
} else {
var temp__4657__auto___14190 = cljs.core.seq.call(null,seq__14173_14180);
if(temp__4657__auto___14190){
var seq__14173_14191__$1 = temp__4657__auto___14190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14173_14191__$1)){
var c__11091__auto___14192 = cljs.core.chunk_first.call(null,seq__14173_14191__$1);
var G__14193 = cljs.core.chunk_rest.call(null,seq__14173_14191__$1);
var G__14194 = c__11091__auto___14192;
var G__14195 = cljs.core.count.call(null,c__11091__auto___14192);
var G__14196 = (0);
seq__14173_14180 = G__14193;
chunk__14174_14181 = G__14194;
count__14175_14182 = G__14195;
i__14176_14183 = G__14196;
continue;
} else {
var x_14197 = cljs.core.first.call(null,seq__14173_14191__$1);
if((x_14197 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14197)){
cljs.compiler.emit.call(null,x_14197);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14197)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14197);
} else {
if(goog.isFunction(x_14197)){
x_14197.call(null);
} else {
var s_14198 = cljs.core.print_str.call(null,x_14197);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14173_14180,chunk__14174_14181,count__14175_14182,i__14176_14183,s_14198,x_14197,seq__14173_14191__$1,temp__4657__auto___14190){
return (function (p1__14171_SHARP_){
return (p1__14171_SHARP_ + cljs.core.count.call(null,s_14198));
});})(seq__14173_14180,chunk__14174_14181,count__14175_14182,i__14176_14183,s_14198,x_14197,seq__14173_14191__$1,temp__4657__auto___14190))
);
}

cljs.core.print.call(null,s_14198);

}
}
}
}

var G__14199 = cljs.core.next.call(null,seq__14173_14191__$1);
var G__14200 = null;
var G__14201 = (0);
var G__14202 = (0);
seq__14173_14180 = G__14199;
chunk__14174_14181 = G__14200;
count__14175_14182 = G__14201;
i__14176_14183 = G__14202;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq14172){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14172));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__11392__auto__ = [];
var len__11385__auto___14207 = arguments.length;
var i__11386__auto___14208 = (0);
while(true){
if((i__11386__auto___14208 < len__11385__auto___14207)){
args__11392__auto__.push((arguments[i__11386__auto___14208]));

var G__14209 = (i__11386__auto___14208 + (1));
i__11386__auto___14208 = G__14209;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((0) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__11393__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__14204){
var map__14205 = p__14204;
var map__14205__$1 = ((((!((map__14205 == null)))?((((map__14205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14205):map__14205);
var m = map__14205__$1;
var gen_line = cljs.core.get.call(null,map__14205__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14203){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14203));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__11266__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14212_14214 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14213_14215 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14212_14214,_STAR_print_fn_STAR_14213_14215,sb__11266__auto__){
return (function (x__11267__auto__){
return sb__11266__auto__.append(x__11267__auto__);
});})(_STAR_print_newline_STAR_14212_14214,_STAR_print_fn_STAR_14213_14215,sb__11266__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14213_14215;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14212_14214;
}
return [cljs.core.str(sb__11266__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__11205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11208__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11209__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11209__auto__,method_table__11205__auto__,prefer_table__11206__auto__,method_cache__11207__auto__,cached_hierarchy__11208__auto__));
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
var vec__14216 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__14216,(0),null);
var flags = cljs.core.nth.call(null,vec__14216,(1),null);
var pattern = cljs.core.nth.call(null,vec__14216,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__14220){
var map__14221 = p__14220;
var map__14221__$1 = ((((!((map__14221 == null)))?((((map__14221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14221):map__14221);
var arg = map__14221__$1;
var info = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__10277__auto__ = js_module_name;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__14223 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__14223);
} else {
return G__14223;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__14224){
var map__14225 = p__14224;
var map__14225__$1 = ((((!((map__14225 == null)))?((((map__14225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14225):map__14225);
var arg = map__14225__$1;
var env = cljs.core.get.call(null,map__14225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__14225__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__14225__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__14225__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__14227 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__14227__$1 = ((((!((map__14227 == null)))?((((map__14227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14227):map__14227);
var name = cljs.core.get.call(null,map__14227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__14229){
var map__14230 = p__14229;
var map__14230__$1 = ((((!((map__14230 == null)))?((((map__14230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14230):map__14230);
var expr = cljs.core.get.call(null,map__14230__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__14230__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__14230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__14232_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14232_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__14233){
var map__14234 = p__14233;
var map__14234__$1 = ((((!((map__14234 == null)))?((((map__14234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14234):map__14234);
var env = cljs.core.get.call(null,map__14234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__14234__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__14234__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__14236){
var map__14237 = p__14236;
var map__14237__$1 = ((((!((map__14237 == null)))?((((map__14237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14237):map__14237);
var items = cljs.core.get.call(null,map__14237__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14237__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__14239){
var map__14240 = p__14239;
var map__14240__$1 = ((((!((map__14240 == null)))?((((map__14240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14240):map__14240);
var items = cljs.core.get.call(null,map__14240__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14240__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_14242 = cljs.core.count.call(null,items);
if((cnt_14242 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_14242,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__14243_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14243_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__14244){
var map__14245 = p__14244;
var map__14245__$1 = ((((!((map__14245 == null)))?((((map__14245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14245):map__14245);
var items = cljs.core.get.call(null,map__14245__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14245__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__14247){
var map__14248 = p__14247;
var map__14248__$1 = ((((!((map__14248 == null)))?((((map__14248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14248):map__14248);
var items = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___14266 = cljs.core.seq.call(null,items);
if(temp__4657__auto___14266){
var items_14267__$1 = temp__4657__auto___14266;
var vec__14250_14268 = items_14267__$1;
var seq__14251_14269 = cljs.core.seq.call(null,vec__14250_14268);
var first__14252_14270 = cljs.core.first.call(null,seq__14251_14269);
var seq__14251_14271__$1 = cljs.core.next.call(null,seq__14251_14269);
var vec__14253_14272 = first__14252_14270;
var k_14273 = cljs.core.nth.call(null,vec__14253_14272,(0),null);
var v_14274 = cljs.core.nth.call(null,vec__14253_14272,(1),null);
var r_14275 = seq__14251_14271__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_14273),"\": ",v_14274);

var seq__14256_14276 = cljs.core.seq.call(null,r_14275);
var chunk__14257_14277 = null;
var count__14258_14278 = (0);
var i__14259_14279 = (0);
while(true){
if((i__14259_14279 < count__14258_14278)){
var vec__14260_14280 = cljs.core._nth.call(null,chunk__14257_14277,i__14259_14279);
var k_14281__$1 = cljs.core.nth.call(null,vec__14260_14280,(0),null);
var v_14282__$1 = cljs.core.nth.call(null,vec__14260_14280,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14281__$1),"\": ",v_14282__$1);

var G__14283 = seq__14256_14276;
var G__14284 = chunk__14257_14277;
var G__14285 = count__14258_14278;
var G__14286 = (i__14259_14279 + (1));
seq__14256_14276 = G__14283;
chunk__14257_14277 = G__14284;
count__14258_14278 = G__14285;
i__14259_14279 = G__14286;
continue;
} else {
var temp__4657__auto___14287__$1 = cljs.core.seq.call(null,seq__14256_14276);
if(temp__4657__auto___14287__$1){
var seq__14256_14288__$1 = temp__4657__auto___14287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14256_14288__$1)){
var c__11091__auto___14289 = cljs.core.chunk_first.call(null,seq__14256_14288__$1);
var G__14290 = cljs.core.chunk_rest.call(null,seq__14256_14288__$1);
var G__14291 = c__11091__auto___14289;
var G__14292 = cljs.core.count.call(null,c__11091__auto___14289);
var G__14293 = (0);
seq__14256_14276 = G__14290;
chunk__14257_14277 = G__14291;
count__14258_14278 = G__14292;
i__14259_14279 = G__14293;
continue;
} else {
var vec__14263_14294 = cljs.core.first.call(null,seq__14256_14288__$1);
var k_14295__$1 = cljs.core.nth.call(null,vec__14263_14294,(0),null);
var v_14296__$1 = cljs.core.nth.call(null,vec__14263_14294,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14295__$1),"\": ",v_14296__$1);

var G__14297 = cljs.core.next.call(null,seq__14256_14288__$1);
var G__14298 = null;
var G__14299 = (0);
var G__14300 = (0);
seq__14256_14276 = G__14297;
chunk__14257_14277 = G__14298;
count__14258_14278 = G__14299;
i__14259_14279 = G__14300;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__14301){
var map__14302 = p__14301;
var map__14302__$1 = ((((!((map__14302 == null)))?((((map__14302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14302):map__14302);
var form = cljs.core.get.call(null,map__14302__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__14302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__14304){
var map__14307 = p__14304;
var map__14307__$1 = ((((!((map__14307 == null)))?((((map__14307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14307):map__14307);
var op = cljs.core.get.call(null,map__14307__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14307__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__10265__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__10265__auto__){
var and__10265__auto____$1 = form;
if(cljs.core.truth_(and__10265__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__14309){
var map__14312 = p__14309;
var map__14312__$1 = ((((!((map__14312 == null)))?((((map__14312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14312):map__14312);
var op = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14312__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__10277__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__14314){
var map__14315 = p__14314;
var map__14315__$1 = ((((!((map__14315 == null)))?((((map__14315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14315):map__14315);
var test = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__14315__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__10277__auto__ = unchecked;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__14317){
var map__14318 = p__14317;
var map__14318__$1 = ((((!((map__14318 == null)))?((((map__14318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14318):map__14318);
var v = cljs.core.get.call(null,map__14318__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__14318__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__14318__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__14318__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__14318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14320_14338 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__14321_14339 = null;
var count__14322_14340 = (0);
var i__14323_14341 = (0);
while(true){
if((i__14323_14341 < count__14322_14340)){
var vec__14324_14342 = cljs.core._nth.call(null,chunk__14321_14339,i__14323_14341);
var ts_14343 = cljs.core.nth.call(null,vec__14324_14342,(0),null);
var then_14344 = cljs.core.nth.call(null,vec__14324_14342,(1),null);
var seq__14327_14345 = cljs.core.seq.call(null,ts_14343);
var chunk__14328_14346 = null;
var count__14329_14347 = (0);
var i__14330_14348 = (0);
while(true){
if((i__14330_14348 < count__14329_14347)){
var test_14349 = cljs.core._nth.call(null,chunk__14328_14346,i__14330_14348);
cljs.compiler.emitln.call(null,"case ",test_14349,":");

var G__14350 = seq__14327_14345;
var G__14351 = chunk__14328_14346;
var G__14352 = count__14329_14347;
var G__14353 = (i__14330_14348 + (1));
seq__14327_14345 = G__14350;
chunk__14328_14346 = G__14351;
count__14329_14347 = G__14352;
i__14330_14348 = G__14353;
continue;
} else {
var temp__4657__auto___14354 = cljs.core.seq.call(null,seq__14327_14345);
if(temp__4657__auto___14354){
var seq__14327_14355__$1 = temp__4657__auto___14354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14327_14355__$1)){
var c__11091__auto___14356 = cljs.core.chunk_first.call(null,seq__14327_14355__$1);
var G__14357 = cljs.core.chunk_rest.call(null,seq__14327_14355__$1);
var G__14358 = c__11091__auto___14356;
var G__14359 = cljs.core.count.call(null,c__11091__auto___14356);
var G__14360 = (0);
seq__14327_14345 = G__14357;
chunk__14328_14346 = G__14358;
count__14329_14347 = G__14359;
i__14330_14348 = G__14360;
continue;
} else {
var test_14361 = cljs.core.first.call(null,seq__14327_14355__$1);
cljs.compiler.emitln.call(null,"case ",test_14361,":");

var G__14362 = cljs.core.next.call(null,seq__14327_14355__$1);
var G__14363 = null;
var G__14364 = (0);
var G__14365 = (0);
seq__14327_14345 = G__14362;
chunk__14328_14346 = G__14363;
count__14329_14347 = G__14364;
i__14330_14348 = G__14365;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14344);
} else {
cljs.compiler.emitln.call(null,then_14344);
}

cljs.compiler.emitln.call(null,"break;");

var G__14366 = seq__14320_14338;
var G__14367 = chunk__14321_14339;
var G__14368 = count__14322_14340;
var G__14369 = (i__14323_14341 + (1));
seq__14320_14338 = G__14366;
chunk__14321_14339 = G__14367;
count__14322_14340 = G__14368;
i__14323_14341 = G__14369;
continue;
} else {
var temp__4657__auto___14370 = cljs.core.seq.call(null,seq__14320_14338);
if(temp__4657__auto___14370){
var seq__14320_14371__$1 = temp__4657__auto___14370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14320_14371__$1)){
var c__11091__auto___14372 = cljs.core.chunk_first.call(null,seq__14320_14371__$1);
var G__14373 = cljs.core.chunk_rest.call(null,seq__14320_14371__$1);
var G__14374 = c__11091__auto___14372;
var G__14375 = cljs.core.count.call(null,c__11091__auto___14372);
var G__14376 = (0);
seq__14320_14338 = G__14373;
chunk__14321_14339 = G__14374;
count__14322_14340 = G__14375;
i__14323_14341 = G__14376;
continue;
} else {
var vec__14331_14377 = cljs.core.first.call(null,seq__14320_14371__$1);
var ts_14378 = cljs.core.nth.call(null,vec__14331_14377,(0),null);
var then_14379 = cljs.core.nth.call(null,vec__14331_14377,(1),null);
var seq__14334_14380 = cljs.core.seq.call(null,ts_14378);
var chunk__14335_14381 = null;
var count__14336_14382 = (0);
var i__14337_14383 = (0);
while(true){
if((i__14337_14383 < count__14336_14382)){
var test_14384 = cljs.core._nth.call(null,chunk__14335_14381,i__14337_14383);
cljs.compiler.emitln.call(null,"case ",test_14384,":");

var G__14385 = seq__14334_14380;
var G__14386 = chunk__14335_14381;
var G__14387 = count__14336_14382;
var G__14388 = (i__14337_14383 + (1));
seq__14334_14380 = G__14385;
chunk__14335_14381 = G__14386;
count__14336_14382 = G__14387;
i__14337_14383 = G__14388;
continue;
} else {
var temp__4657__auto___14389__$1 = cljs.core.seq.call(null,seq__14334_14380);
if(temp__4657__auto___14389__$1){
var seq__14334_14390__$1 = temp__4657__auto___14389__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14334_14390__$1)){
var c__11091__auto___14391 = cljs.core.chunk_first.call(null,seq__14334_14390__$1);
var G__14392 = cljs.core.chunk_rest.call(null,seq__14334_14390__$1);
var G__14393 = c__11091__auto___14391;
var G__14394 = cljs.core.count.call(null,c__11091__auto___14391);
var G__14395 = (0);
seq__14334_14380 = G__14392;
chunk__14335_14381 = G__14393;
count__14336_14382 = G__14394;
i__14337_14383 = G__14395;
continue;
} else {
var test_14396 = cljs.core.first.call(null,seq__14334_14390__$1);
cljs.compiler.emitln.call(null,"case ",test_14396,":");

var G__14397 = cljs.core.next.call(null,seq__14334_14390__$1);
var G__14398 = null;
var G__14399 = (0);
var G__14400 = (0);
seq__14334_14380 = G__14397;
chunk__14335_14381 = G__14398;
count__14336_14382 = G__14399;
i__14337_14383 = G__14400;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14379);
} else {
cljs.compiler.emitln.call(null,then_14379);
}

cljs.compiler.emitln.call(null,"break;");

var G__14401 = cljs.core.next.call(null,seq__14320_14371__$1);
var G__14402 = null;
var G__14403 = (0);
var G__14404 = (0);
seq__14320_14338 = G__14401;
chunk__14321_14339 = G__14402;
count__14322_14340 = G__14403;
i__14323_14341 = G__14404;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__14405){
var map__14406 = p__14405;
var map__14406__$1 = ((((!((map__14406 == null)))?((((map__14406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14406):map__14406);
var throw$ = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__14413 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__14413,(0),null);
var rstr = cljs.core.nth.call(null,vec__14413,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__14413,fstr,rstr,ret_t,axstr){
return (function (p1__14408_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14408_SHARP_);
});})(idx,vec__14413,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__14416 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__14416),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__14416;
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
return (function (p1__14417_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14417_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__14424 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14425 = cljs.core.seq.call(null,vec__14424);
var first__14426 = cljs.core.first.call(null,seq__14425);
var seq__14425__$1 = cljs.core.next.call(null,seq__14425);
var p = first__14426;
var first__14426__$1 = cljs.core.first.call(null,seq__14425__$1);
var seq__14425__$2 = cljs.core.next.call(null,seq__14425__$1);
var ts = first__14426__$1;
var first__14426__$2 = cljs.core.first.call(null,seq__14425__$2);
var seq__14425__$3 = cljs.core.next.call(null,seq__14425__$2);
var n = first__14426__$2;
var xs = seq__14425__$3;
if(cljs.core.truth_((function (){var and__10265__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__10265__auto__){
var and__10265__auto____$1 = ts;
if(cljs.core.truth_(and__10265__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__14427 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14428 = cljs.core.seq.call(null,vec__14427);
var first__14429 = cljs.core.first.call(null,seq__14428);
var seq__14428__$1 = cljs.core.next.call(null,seq__14428);
var p = first__14429;
var first__14429__$1 = cljs.core.first.call(null,seq__14428__$1);
var seq__14428__$2 = cljs.core.next.call(null,seq__14428__$1);
var ts = first__14429__$1;
var xs = seq__14428__$2;
if(cljs.core.truth_((function (){var and__10265__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__10265__auto__){
var and__10265__auto____$1 = ts;
if(cljs.core.truth_(and__10265__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
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
var args14431 = [];
var len__11385__auto___14466 = arguments.length;
var i__11386__auto___14467 = (0);
while(true){
if((i__11386__auto___14467 < len__11385__auto___14466)){
args14431.push((arguments[i__11386__auto___14467]));

var G__14468 = (i__11386__auto___14467 + (1));
i__11386__auto___14467 = G__14468;
continue;
} else {
}
break;
}

var G__14433 = args14431.length;
switch (G__14433) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14431.length)].join('')));

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
var vec__14455 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__14430_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__14430_SHARP_);
} else {
return p1__14430_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__14456 = cljs.core.seq.call(null,vec__14455);
var first__14457 = cljs.core.first.call(null,seq__14456);
var seq__14456__$1 = cljs.core.next.call(null,seq__14456);
var x = first__14457;
var ys = seq__14456__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__14458 = cljs.core.seq.call(null,ys);
var chunk__14459 = null;
var count__14460 = (0);
var i__14461 = (0);
while(true){
if((i__14461 < count__14460)){
var next_line = cljs.core._nth.call(null,chunk__14459,i__14461);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__14470 = seq__14458;
var G__14471 = chunk__14459;
var G__14472 = count__14460;
var G__14473 = (i__14461 + (1));
seq__14458 = G__14470;
chunk__14459 = G__14471;
count__14460 = G__14472;
i__14461 = G__14473;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14458);
if(temp__4657__auto__){
var seq__14458__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14458__$1)){
var c__11091__auto__ = cljs.core.chunk_first.call(null,seq__14458__$1);
var G__14474 = cljs.core.chunk_rest.call(null,seq__14458__$1);
var G__14475 = c__11091__auto__;
var G__14476 = cljs.core.count.call(null,c__11091__auto__);
var G__14477 = (0);
seq__14458 = G__14474;
chunk__14459 = G__14475;
count__14460 = G__14476;
i__14461 = G__14477;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__14458__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__14478 = cljs.core.next.call(null,seq__14458__$1);
var G__14479 = null;
var G__14480 = (0);
var G__14481 = (0);
seq__14458 = G__14478;
chunk__14459 = G__14479;
count__14460 = G__14480;
i__14461 = G__14481;
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

var seq__14462_14482 = cljs.core.seq.call(null,docs__$2);
var chunk__14463_14483 = null;
var count__14464_14484 = (0);
var i__14465_14485 = (0);
while(true){
if((i__14465_14485 < count__14464_14484)){
var e_14486 = cljs.core._nth.call(null,chunk__14463_14483,i__14465_14485);
if(cljs.core.truth_(e_14486)){
print_comment_lines.call(null,e_14486);
} else {
}

var G__14487 = seq__14462_14482;
var G__14488 = chunk__14463_14483;
var G__14489 = count__14464_14484;
var G__14490 = (i__14465_14485 + (1));
seq__14462_14482 = G__14487;
chunk__14463_14483 = G__14488;
count__14464_14484 = G__14489;
i__14465_14485 = G__14490;
continue;
} else {
var temp__4657__auto___14491 = cljs.core.seq.call(null,seq__14462_14482);
if(temp__4657__auto___14491){
var seq__14462_14492__$1 = temp__4657__auto___14491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14462_14492__$1)){
var c__11091__auto___14493 = cljs.core.chunk_first.call(null,seq__14462_14492__$1);
var G__14494 = cljs.core.chunk_rest.call(null,seq__14462_14492__$1);
var G__14495 = c__11091__auto___14493;
var G__14496 = cljs.core.count.call(null,c__11091__auto___14493);
var G__14497 = (0);
seq__14462_14482 = G__14494;
chunk__14463_14483 = G__14495;
count__14464_14484 = G__14496;
i__14465_14485 = G__14497;
continue;
} else {
var e_14498 = cljs.core.first.call(null,seq__14462_14492__$1);
if(cljs.core.truth_(e_14498)){
print_comment_lines.call(null,e_14498);
} else {
}

var G__14499 = cljs.core.next.call(null,seq__14462_14492__$1);
var G__14500 = null;
var G__14501 = (0);
var G__14502 = (0);
seq__14462_14482 = G__14499;
chunk__14463_14483 = G__14500;
count__14464_14484 = G__14501;
i__14465_14485 = G__14502;
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
var and__10265__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__14504_SHARP_){
return goog.string.startsWith(p1__14504_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__10265__auto__)){
var and__10265__auto____$1 = opts;
if(cljs.core.truth_(and__10265__auto____$1)){
var and__10265__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__10265__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__10265__auto____$2;
}
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14505){
var map__14506 = p__14505;
var map__14506__$1 = ((((!((map__14506 == null)))?((((map__14506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14506):map__14506);
var name = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__10277__auto__ = init;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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

if(cljs.core.truth_((function (){var and__10265__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__10265__auto__)){
return test;
} else {
return and__10265__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14508){
var map__14529 = p__14508;
var map__14529__$1 = ((((!((map__14529 == null)))?((((map__14529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14529):map__14529);
var name = cljs.core.get.call(null,map__14529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14529__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14529__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__14531_14549 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__14532_14550 = null;
var count__14533_14551 = (0);
var i__14534_14552 = (0);
while(true){
if((i__14534_14552 < count__14533_14551)){
var vec__14535_14553 = cljs.core._nth.call(null,chunk__14532_14550,i__14534_14552);
var i_14554 = cljs.core.nth.call(null,vec__14535_14553,(0),null);
var param_14555 = cljs.core.nth.call(null,vec__14535_14553,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14555);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__14556 = seq__14531_14549;
var G__14557 = chunk__14532_14550;
var G__14558 = count__14533_14551;
var G__14559 = (i__14534_14552 + (1));
seq__14531_14549 = G__14556;
chunk__14532_14550 = G__14557;
count__14533_14551 = G__14558;
i__14534_14552 = G__14559;
continue;
} else {
var temp__4657__auto___14560 = cljs.core.seq.call(null,seq__14531_14549);
if(temp__4657__auto___14560){
var seq__14531_14561__$1 = temp__4657__auto___14560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14531_14561__$1)){
var c__11091__auto___14562 = cljs.core.chunk_first.call(null,seq__14531_14561__$1);
var G__14563 = cljs.core.chunk_rest.call(null,seq__14531_14561__$1);
var G__14564 = c__11091__auto___14562;
var G__14565 = cljs.core.count.call(null,c__11091__auto___14562);
var G__14566 = (0);
seq__14531_14549 = G__14563;
chunk__14532_14550 = G__14564;
count__14533_14551 = G__14565;
i__14534_14552 = G__14566;
continue;
} else {
var vec__14538_14567 = cljs.core.first.call(null,seq__14531_14561__$1);
var i_14568 = cljs.core.nth.call(null,vec__14538_14567,(0),null);
var param_14569 = cljs.core.nth.call(null,vec__14538_14567,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14569);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__14570 = cljs.core.next.call(null,seq__14531_14561__$1);
var G__14571 = null;
var G__14572 = (0);
var G__14573 = (0);
seq__14531_14549 = G__14570;
chunk__14532_14550 = G__14571;
count__14533_14551 = G__14572;
i__14534_14552 = G__14573;
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

var seq__14541_14574 = cljs.core.seq.call(null,params);
var chunk__14542_14575 = null;
var count__14543_14576 = (0);
var i__14544_14577 = (0);
while(true){
if((i__14544_14577 < count__14543_14576)){
var param_14578 = cljs.core._nth.call(null,chunk__14542_14575,i__14544_14577);
cljs.compiler.emit.call(null,param_14578);

if(cljs.core._EQ_.call(null,param_14578,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14579 = seq__14541_14574;
var G__14580 = chunk__14542_14575;
var G__14581 = count__14543_14576;
var G__14582 = (i__14544_14577 + (1));
seq__14541_14574 = G__14579;
chunk__14542_14575 = G__14580;
count__14543_14576 = G__14581;
i__14544_14577 = G__14582;
continue;
} else {
var temp__4657__auto___14583 = cljs.core.seq.call(null,seq__14541_14574);
if(temp__4657__auto___14583){
var seq__14541_14584__$1 = temp__4657__auto___14583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14541_14584__$1)){
var c__11091__auto___14585 = cljs.core.chunk_first.call(null,seq__14541_14584__$1);
var G__14586 = cljs.core.chunk_rest.call(null,seq__14541_14584__$1);
var G__14587 = c__11091__auto___14585;
var G__14588 = cljs.core.count.call(null,c__11091__auto___14585);
var G__14589 = (0);
seq__14541_14574 = G__14586;
chunk__14542_14575 = G__14587;
count__14543_14576 = G__14588;
i__14544_14577 = G__14589;
continue;
} else {
var param_14590 = cljs.core.first.call(null,seq__14541_14584__$1);
cljs.compiler.emit.call(null,param_14590);

if(cljs.core._EQ_.call(null,param_14590,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14591 = cljs.core.next.call(null,seq__14541_14584__$1);
var G__14592 = null;
var G__14593 = (0);
var G__14594 = (0);
seq__14541_14574 = G__14591;
chunk__14542_14575 = G__14592;
count__14543_14576 = G__14593;
i__14544_14577 = G__14594;
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

var seq__14545_14595 = cljs.core.seq.call(null,params);
var chunk__14546_14596 = null;
var count__14547_14597 = (0);
var i__14548_14598 = (0);
while(true){
if((i__14548_14598 < count__14547_14597)){
var param_14599 = cljs.core._nth.call(null,chunk__14546_14596,i__14548_14598);
cljs.compiler.emit.call(null,param_14599);

if(cljs.core._EQ_.call(null,param_14599,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14600 = seq__14545_14595;
var G__14601 = chunk__14546_14596;
var G__14602 = count__14547_14597;
var G__14603 = (i__14548_14598 + (1));
seq__14545_14595 = G__14600;
chunk__14546_14596 = G__14601;
count__14547_14597 = G__14602;
i__14548_14598 = G__14603;
continue;
} else {
var temp__4657__auto___14604 = cljs.core.seq.call(null,seq__14545_14595);
if(temp__4657__auto___14604){
var seq__14545_14605__$1 = temp__4657__auto___14604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14545_14605__$1)){
var c__11091__auto___14606 = cljs.core.chunk_first.call(null,seq__14545_14605__$1);
var G__14607 = cljs.core.chunk_rest.call(null,seq__14545_14605__$1);
var G__14608 = c__11091__auto___14606;
var G__14609 = cljs.core.count.call(null,c__11091__auto___14606);
var G__14610 = (0);
seq__14545_14595 = G__14607;
chunk__14546_14596 = G__14608;
count__14547_14597 = G__14609;
i__14548_14598 = G__14610;
continue;
} else {
var param_14611 = cljs.core.first.call(null,seq__14545_14605__$1);
cljs.compiler.emit.call(null,param_14611);

if(cljs.core._EQ_.call(null,param_14611,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14612 = cljs.core.next.call(null,seq__14545_14605__$1);
var G__14613 = null;
var G__14614 = (0);
var G__14615 = (0);
seq__14545_14595 = G__14612;
chunk__14546_14596 = G__14613;
count__14547_14597 = G__14614;
i__14548_14598 = G__14615;
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
var seq__14620 = cljs.core.seq.call(null,params);
var chunk__14621 = null;
var count__14622 = (0);
var i__14623 = (0);
while(true){
if((i__14623 < count__14622)){
var param = cljs.core._nth.call(null,chunk__14621,i__14623);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14624 = seq__14620;
var G__14625 = chunk__14621;
var G__14626 = count__14622;
var G__14627 = (i__14623 + (1));
seq__14620 = G__14624;
chunk__14621 = G__14625;
count__14622 = G__14626;
i__14623 = G__14627;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14620);
if(temp__4657__auto__){
var seq__14620__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14620__$1)){
var c__11091__auto__ = cljs.core.chunk_first.call(null,seq__14620__$1);
var G__14628 = cljs.core.chunk_rest.call(null,seq__14620__$1);
var G__14629 = c__11091__auto__;
var G__14630 = cljs.core.count.call(null,c__11091__auto__);
var G__14631 = (0);
seq__14620 = G__14628;
chunk__14621 = G__14629;
count__14622 = G__14630;
i__14623 = G__14631;
continue;
} else {
var param = cljs.core.first.call(null,seq__14620__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14632 = cljs.core.next.call(null,seq__14620__$1);
var G__14633 = null;
var G__14634 = (0);
var G__14635 = (0);
seq__14620 = G__14632;
chunk__14621 = G__14633;
count__14622 = G__14634;
i__14623 = G__14635;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14636){
var map__14639 = p__14636;
var map__14639__$1 = ((((!((map__14639 == null)))?((((map__14639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14639):map__14639);
var type = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14641){
var map__14652 = p__14641;
var map__14652__$1 = ((((!((map__14652 == null)))?((((map__14652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14652):map__14652);
var f = map__14652__$1;
var type = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_14662__$1 = (function (){var or__10277__auto__ = name;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14663 = cljs.compiler.munge.call(null,name_14662__$1);
var delegate_name_14664 = [cljs.core.str(mname_14663),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_14664," = function (");

var seq__14654_14665 = cljs.core.seq.call(null,params);
var chunk__14655_14666 = null;
var count__14656_14667 = (0);
var i__14657_14668 = (0);
while(true){
if((i__14657_14668 < count__14656_14667)){
var param_14669 = cljs.core._nth.call(null,chunk__14655_14666,i__14657_14668);
cljs.compiler.emit.call(null,param_14669);

if(cljs.core._EQ_.call(null,param_14669,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14670 = seq__14654_14665;
var G__14671 = chunk__14655_14666;
var G__14672 = count__14656_14667;
var G__14673 = (i__14657_14668 + (1));
seq__14654_14665 = G__14670;
chunk__14655_14666 = G__14671;
count__14656_14667 = G__14672;
i__14657_14668 = G__14673;
continue;
} else {
var temp__4657__auto___14674 = cljs.core.seq.call(null,seq__14654_14665);
if(temp__4657__auto___14674){
var seq__14654_14675__$1 = temp__4657__auto___14674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14654_14675__$1)){
var c__11091__auto___14676 = cljs.core.chunk_first.call(null,seq__14654_14675__$1);
var G__14677 = cljs.core.chunk_rest.call(null,seq__14654_14675__$1);
var G__14678 = c__11091__auto___14676;
var G__14679 = cljs.core.count.call(null,c__11091__auto___14676);
var G__14680 = (0);
seq__14654_14665 = G__14677;
chunk__14655_14666 = G__14678;
count__14656_14667 = G__14679;
i__14657_14668 = G__14680;
continue;
} else {
var param_14681 = cljs.core.first.call(null,seq__14654_14675__$1);
cljs.compiler.emit.call(null,param_14681);

if(cljs.core._EQ_.call(null,param_14681,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14682 = cljs.core.next.call(null,seq__14654_14675__$1);
var G__14683 = null;
var G__14684 = (0);
var G__14685 = (0);
seq__14654_14665 = G__14682;
chunk__14655_14666 = G__14683;
count__14656_14667 = G__14684;
i__14657_14668 = G__14685;
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

cljs.compiler.emitln.call(null,"var ",mname_14663," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_14686 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_14686,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_14664,".call(this,");

var seq__14658_14687 = cljs.core.seq.call(null,params);
var chunk__14659_14688 = null;
var count__14660_14689 = (0);
var i__14661_14690 = (0);
while(true){
if((i__14661_14690 < count__14660_14689)){
var param_14691 = cljs.core._nth.call(null,chunk__14659_14688,i__14661_14690);
cljs.compiler.emit.call(null,param_14691);

if(cljs.core._EQ_.call(null,param_14691,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14692 = seq__14658_14687;
var G__14693 = chunk__14659_14688;
var G__14694 = count__14660_14689;
var G__14695 = (i__14661_14690 + (1));
seq__14658_14687 = G__14692;
chunk__14659_14688 = G__14693;
count__14660_14689 = G__14694;
i__14661_14690 = G__14695;
continue;
} else {
var temp__4657__auto___14696 = cljs.core.seq.call(null,seq__14658_14687);
if(temp__4657__auto___14696){
var seq__14658_14697__$1 = temp__4657__auto___14696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14658_14697__$1)){
var c__11091__auto___14698 = cljs.core.chunk_first.call(null,seq__14658_14697__$1);
var G__14699 = cljs.core.chunk_rest.call(null,seq__14658_14697__$1);
var G__14700 = c__11091__auto___14698;
var G__14701 = cljs.core.count.call(null,c__11091__auto___14698);
var G__14702 = (0);
seq__14658_14687 = G__14699;
chunk__14659_14688 = G__14700;
count__14660_14689 = G__14701;
i__14661_14690 = G__14702;
continue;
} else {
var param_14703 = cljs.core.first.call(null,seq__14658_14697__$1);
cljs.compiler.emit.call(null,param_14703);

if(cljs.core._EQ_.call(null,param_14703,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__14704 = cljs.core.next.call(null,seq__14658_14697__$1);
var G__14705 = null;
var G__14706 = (0);
var G__14707 = (0);
seq__14658_14687 = G__14704;
chunk__14659_14688 = G__14705;
count__14660_14689 = G__14706;
i__14661_14690 = G__14707;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_14663,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_14663,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_14662__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_14663,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14664,";");

cljs.compiler.emitln.call(null,"return ",mname_14663,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14711){
var map__14712 = p__14711;
var map__14712__$1 = ((((!((map__14712 == null)))?((((map__14712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14712):map__14712);
var name = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14708_SHARP_){
var and__10265__auto__ = p1__14708_SHARP_;
if(cljs.core.truth_(and__10265__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14708_SHARP_));
} else {
return and__10265__auto__;
}
});})(map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_14747__$1 = (function (){var or__10277__auto__ = name;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14748 = cljs.compiler.munge.call(null,name_14747__$1);
var maxparams_14749 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14750 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_14747__$1,mname_14748,maxparams_14749,loop_locals,map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_14748),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_14747__$1,mname_14748,maxparams_14749,loop_locals,map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_14751 = cljs.core.sort_by.call(null,((function (name_14747__$1,mname_14748,maxparams_14749,mmap_14750,loop_locals,map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14709_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14709_SHARP_)));
});})(name_14747__$1,mname_14748,maxparams_14749,mmap_14750,loop_locals,map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_14750));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_14748," = null;");

var seq__14714_14752 = cljs.core.seq.call(null,ms_14751);
var chunk__14715_14753 = null;
var count__14716_14754 = (0);
var i__14717_14755 = (0);
while(true){
if((i__14717_14755 < count__14716_14754)){
var vec__14718_14756 = cljs.core._nth.call(null,chunk__14715_14753,i__14717_14755);
var n_14757 = cljs.core.nth.call(null,vec__14718_14756,(0),null);
var meth_14758 = cljs.core.nth.call(null,vec__14718_14756,(1),null);
cljs.compiler.emits.call(null,"var ",n_14757," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14758))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14758);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14758);
}

cljs.compiler.emitln.call(null,";");

var G__14759 = seq__14714_14752;
var G__14760 = chunk__14715_14753;
var G__14761 = count__14716_14754;
var G__14762 = (i__14717_14755 + (1));
seq__14714_14752 = G__14759;
chunk__14715_14753 = G__14760;
count__14716_14754 = G__14761;
i__14717_14755 = G__14762;
continue;
} else {
var temp__4657__auto___14763 = cljs.core.seq.call(null,seq__14714_14752);
if(temp__4657__auto___14763){
var seq__14714_14764__$1 = temp__4657__auto___14763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14714_14764__$1)){
var c__11091__auto___14765 = cljs.core.chunk_first.call(null,seq__14714_14764__$1);
var G__14766 = cljs.core.chunk_rest.call(null,seq__14714_14764__$1);
var G__14767 = c__11091__auto___14765;
var G__14768 = cljs.core.count.call(null,c__11091__auto___14765);
var G__14769 = (0);
seq__14714_14752 = G__14766;
chunk__14715_14753 = G__14767;
count__14716_14754 = G__14768;
i__14717_14755 = G__14769;
continue;
} else {
var vec__14721_14770 = cljs.core.first.call(null,seq__14714_14764__$1);
var n_14771 = cljs.core.nth.call(null,vec__14721_14770,(0),null);
var meth_14772 = cljs.core.nth.call(null,vec__14721_14770,(1),null);
cljs.compiler.emits.call(null,"var ",n_14771," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14772))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14772);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14772);
}

cljs.compiler.emitln.call(null,";");

var G__14773 = cljs.core.next.call(null,seq__14714_14764__$1);
var G__14774 = null;
var G__14775 = (0);
var G__14776 = (0);
seq__14714_14752 = G__14773;
chunk__14715_14753 = G__14774;
count__14716_14754 = G__14775;
i__14717_14755 = G__14776;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_14748," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_14749),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14749)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_14749));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__14724_14777 = cljs.core.seq.call(null,ms_14751);
var chunk__14725_14778 = null;
var count__14726_14779 = (0);
var i__14727_14780 = (0);
while(true){
if((i__14727_14780 < count__14726_14779)){
var vec__14728_14781 = cljs.core._nth.call(null,chunk__14725_14778,i__14727_14780);
var n_14782 = cljs.core.nth.call(null,vec__14728_14781,(0),null);
var meth_14783 = cljs.core.nth.call(null,vec__14728_14781,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14783))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14784 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14784," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14785 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14784," = new cljs.core.IndexedSeq(",a_14785,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14782,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14749)),(((cljs.core.count.call(null,maxparams_14749) > (1)))?", ":null),restarg_14784,");");
} else {
var pcnt_14786 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14783));
cljs.compiler.emitln.call(null,"case ",pcnt_14786,":");

cljs.compiler.emitln.call(null,"return ",n_14782,".call(this",(((pcnt_14786 === (0)))?null:cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14786,maxparams_14749));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),",")),");");
}

var G__14787 = seq__14724_14777;
var G__14788 = chunk__14725_14778;
var G__14789 = count__14726_14779;
var G__14790 = (i__14727_14780 + (1));
seq__14724_14777 = G__14787;
chunk__14725_14778 = G__14788;
count__14726_14779 = G__14789;
i__14727_14780 = G__14790;
continue;
} else {
var temp__4657__auto___14791 = cljs.core.seq.call(null,seq__14724_14777);
if(temp__4657__auto___14791){
var seq__14724_14792__$1 = temp__4657__auto___14791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14724_14792__$1)){
var c__11091__auto___14793 = cljs.core.chunk_first.call(null,seq__14724_14792__$1);
var G__14794 = cljs.core.chunk_rest.call(null,seq__14724_14792__$1);
var G__14795 = c__11091__auto___14793;
var G__14796 = cljs.core.count.call(null,c__11091__auto___14793);
var G__14797 = (0);
seq__14724_14777 = G__14794;
chunk__14725_14778 = G__14795;
count__14726_14779 = G__14796;
i__14727_14780 = G__14797;
continue;
} else {
var vec__14731_14798 = cljs.core.first.call(null,seq__14724_14792__$1);
var n_14799 = cljs.core.nth.call(null,vec__14731_14798,(0),null);
var meth_14800 = cljs.core.nth.call(null,vec__14731_14798,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14800))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14801 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14801," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14802 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14801," = new cljs.core.IndexedSeq(",a_14802,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14799,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14749)),(((cljs.core.count.call(null,maxparams_14749) > (1)))?", ":null),restarg_14801,");");
} else {
var pcnt_14803 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14800));
cljs.compiler.emitln.call(null,"case ",pcnt_14803,":");

cljs.compiler.emitln.call(null,"return ",n_14799,".call(this",(((pcnt_14803 === (0)))?null:cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14803,maxparams_14749));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),",")),");");
}

var G__14804 = cljs.core.next.call(null,seq__14724_14792__$1);
var G__14805 = null;
var G__14806 = (0);
var G__14807 = (0);
seq__14724_14777 = G__14804;
chunk__14725_14778 = G__14805;
count__14726_14779 = G__14806;
i__14727_14780 = G__14807;
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
cljs.compiler.emitln.call(null,mname_14748,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_14748,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_14747__$1,mname_14748,maxparams_14749,mmap_14750,ms_14751,loop_locals,map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14710_SHARP_){
var vec__14734 = p1__14710_SHARP_;
var n = cljs.core.nth.call(null,vec__14734,(0),null);
var m = cljs.core.nth.call(null,vec__14734,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_14747__$1,mname_14748,maxparams_14749,mmap_14750,ms_14751,loop_locals,map__14712,map__14712__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_14751),".cljs$lang$applyTo;");
} else {
}

var seq__14737_14808 = cljs.core.seq.call(null,ms_14751);
var chunk__14738_14809 = null;
var count__14739_14810 = (0);
var i__14740_14811 = (0);
while(true){
if((i__14740_14811 < count__14739_14810)){
var vec__14741_14812 = cljs.core._nth.call(null,chunk__14738_14809,i__14740_14811);
var n_14813 = cljs.core.nth.call(null,vec__14741_14812,(0),null);
var meth_14814 = cljs.core.nth.call(null,vec__14741_14812,(1),null);
var c_14815 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14814));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14814))){
cljs.compiler.emitln.call(null,mname_14748,".cljs$core$IFn$_invoke$arity$variadic = ",n_14813,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14748,".cljs$core$IFn$_invoke$arity$",c_14815," = ",n_14813,";");
}

var G__14816 = seq__14737_14808;
var G__14817 = chunk__14738_14809;
var G__14818 = count__14739_14810;
var G__14819 = (i__14740_14811 + (1));
seq__14737_14808 = G__14816;
chunk__14738_14809 = G__14817;
count__14739_14810 = G__14818;
i__14740_14811 = G__14819;
continue;
} else {
var temp__4657__auto___14820 = cljs.core.seq.call(null,seq__14737_14808);
if(temp__4657__auto___14820){
var seq__14737_14821__$1 = temp__4657__auto___14820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14737_14821__$1)){
var c__11091__auto___14822 = cljs.core.chunk_first.call(null,seq__14737_14821__$1);
var G__14823 = cljs.core.chunk_rest.call(null,seq__14737_14821__$1);
var G__14824 = c__11091__auto___14822;
var G__14825 = cljs.core.count.call(null,c__11091__auto___14822);
var G__14826 = (0);
seq__14737_14808 = G__14823;
chunk__14738_14809 = G__14824;
count__14739_14810 = G__14825;
i__14740_14811 = G__14826;
continue;
} else {
var vec__14744_14827 = cljs.core.first.call(null,seq__14737_14821__$1);
var n_14828 = cljs.core.nth.call(null,vec__14744_14827,(0),null);
var meth_14829 = cljs.core.nth.call(null,vec__14744_14827,(1),null);
var c_14830 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14829));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14829))){
cljs.compiler.emitln.call(null,mname_14748,".cljs$core$IFn$_invoke$arity$variadic = ",n_14828,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14748,".cljs$core$IFn$_invoke$arity$",c_14830," = ",n_14828,";");
}

var G__14831 = cljs.core.next.call(null,seq__14737_14821__$1);
var G__14832 = null;
var G__14833 = (0);
var G__14834 = (0);
seq__14737_14808 = G__14831;
chunk__14738_14809 = G__14832;
count__14739_14810 = G__14833;
i__14740_14811 = G__14834;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_14748,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14835){
var map__14836 = p__14835;
var map__14836__$1 = ((((!((map__14836 == null)))?((((map__14836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14836):map__14836);
var statements = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__14836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__10265__auto__ = statements;
if(cljs.core.truth_(and__10265__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__10265__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__14838_14842 = cljs.core.seq.call(null,statements);
var chunk__14839_14843 = null;
var count__14840_14844 = (0);
var i__14841_14845 = (0);
while(true){
if((i__14841_14845 < count__14840_14844)){
var s_14846 = cljs.core._nth.call(null,chunk__14839_14843,i__14841_14845);
cljs.compiler.emitln.call(null,s_14846);

var G__14847 = seq__14838_14842;
var G__14848 = chunk__14839_14843;
var G__14849 = count__14840_14844;
var G__14850 = (i__14841_14845 + (1));
seq__14838_14842 = G__14847;
chunk__14839_14843 = G__14848;
count__14840_14844 = G__14849;
i__14841_14845 = G__14850;
continue;
} else {
var temp__4657__auto___14851 = cljs.core.seq.call(null,seq__14838_14842);
if(temp__4657__auto___14851){
var seq__14838_14852__$1 = temp__4657__auto___14851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14838_14852__$1)){
var c__11091__auto___14853 = cljs.core.chunk_first.call(null,seq__14838_14852__$1);
var G__14854 = cljs.core.chunk_rest.call(null,seq__14838_14852__$1);
var G__14855 = c__11091__auto___14853;
var G__14856 = cljs.core.count.call(null,c__11091__auto___14853);
var G__14857 = (0);
seq__14838_14842 = G__14854;
chunk__14839_14843 = G__14855;
count__14840_14844 = G__14856;
i__14841_14845 = G__14857;
continue;
} else {
var s_14858 = cljs.core.first.call(null,seq__14838_14852__$1);
cljs.compiler.emitln.call(null,s_14858);

var G__14859 = cljs.core.next.call(null,seq__14838_14852__$1);
var G__14860 = null;
var G__14861 = (0);
var G__14862 = (0);
seq__14838_14842 = G__14859;
chunk__14839_14843 = G__14860;
count__14840_14844 = G__14861;
i__14841_14845 = G__14862;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__10265__auto__ = statements;
if(cljs.core.truth_(and__10265__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__10265__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14863){
var map__14864 = p__14863;
var map__14864__$1 = ((((!((map__14864 == null)))?((((map__14864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14864):map__14864);
var env = cljs.core.get.call(null,map__14864__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__14864__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__14864__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__14864__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__14864__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__10277__auto__ = name;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14866,is_loop){
var map__14878 = p__14866;
var map__14878__$1 = ((((!((map__14878 == null)))?((((map__14878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14878):map__14878);
var bindings = cljs.core.get.call(null,map__14878__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14878__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14878__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_14880_14889 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_14880_14889,context,map__14878,map__14878__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_14880_14889,context,map__14878,map__14878__$1,bindings,expr,env))
,bindings):null));

try{var seq__14881_14890 = cljs.core.seq.call(null,bindings);
var chunk__14882_14891 = null;
var count__14883_14892 = (0);
var i__14884_14893 = (0);
while(true){
if((i__14884_14893 < count__14883_14892)){
var map__14885_14894 = cljs.core._nth.call(null,chunk__14882_14891,i__14884_14893);
var map__14885_14895__$1 = ((((!((map__14885_14894 == null)))?((((map__14885_14894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14885_14894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14885_14894):map__14885_14894);
var binding_14896 = map__14885_14895__$1;
var init_14897 = cljs.core.get.call(null,map__14885_14895__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14896);

cljs.compiler.emitln.call(null," = ",init_14897,";");

var G__14898 = seq__14881_14890;
var G__14899 = chunk__14882_14891;
var G__14900 = count__14883_14892;
var G__14901 = (i__14884_14893 + (1));
seq__14881_14890 = G__14898;
chunk__14882_14891 = G__14899;
count__14883_14892 = G__14900;
i__14884_14893 = G__14901;
continue;
} else {
var temp__4657__auto___14902 = cljs.core.seq.call(null,seq__14881_14890);
if(temp__4657__auto___14902){
var seq__14881_14903__$1 = temp__4657__auto___14902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14881_14903__$1)){
var c__11091__auto___14904 = cljs.core.chunk_first.call(null,seq__14881_14903__$1);
var G__14905 = cljs.core.chunk_rest.call(null,seq__14881_14903__$1);
var G__14906 = c__11091__auto___14904;
var G__14907 = cljs.core.count.call(null,c__11091__auto___14904);
var G__14908 = (0);
seq__14881_14890 = G__14905;
chunk__14882_14891 = G__14906;
count__14883_14892 = G__14907;
i__14884_14893 = G__14908;
continue;
} else {
var map__14887_14909 = cljs.core.first.call(null,seq__14881_14903__$1);
var map__14887_14910__$1 = ((((!((map__14887_14909 == null)))?((((map__14887_14909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14887_14909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14887_14909):map__14887_14909);
var binding_14911 = map__14887_14910__$1;
var init_14912 = cljs.core.get.call(null,map__14887_14910__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14911);

cljs.compiler.emitln.call(null," = ",init_14912,";");

var G__14913 = cljs.core.next.call(null,seq__14881_14903__$1);
var G__14914 = null;
var G__14915 = (0);
var G__14916 = (0);
seq__14881_14890 = G__14913;
chunk__14882_14891 = G__14914;
count__14883_14892 = G__14915;
i__14884_14893 = G__14916;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_14880_14889;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14917){
var map__14918 = p__14917;
var map__14918__$1 = ((((!((map__14918 == null)))?((((map__14918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14918):map__14918);
var frame = cljs.core.get.call(null,map__14918__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14918__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__11195__auto___14920 = cljs.core.count.call(null,exprs);
var i_14921 = (0);
while(true){
if((i_14921 < n__11195__auto___14920)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14921)," = ",exprs.call(null,i_14921),";");

var G__14922 = (i_14921 + (1));
i_14921 = G__14922;
continue;
} else {
}
break;
}

var n__11195__auto___14923 = cljs.core.count.call(null,exprs);
var i_14924 = (0);
while(true){
if((i_14924 < n__11195__auto___14923)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14924))," = ",temps.call(null,i_14924),";");

var G__14925 = (i_14924 + (1));
i_14924 = G__14925;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14926){
var map__14927 = p__14926;
var map__14927__$1 = ((((!((map__14927 == null)))?((((map__14927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14927):map__14927);
var bindings = cljs.core.get.call(null,map__14927__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14927__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14927__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14929_14937 = cljs.core.seq.call(null,bindings);
var chunk__14930_14938 = null;
var count__14931_14939 = (0);
var i__14932_14940 = (0);
while(true){
if((i__14932_14940 < count__14931_14939)){
var map__14933_14941 = cljs.core._nth.call(null,chunk__14930_14938,i__14932_14940);
var map__14933_14942__$1 = ((((!((map__14933_14941 == null)))?((((map__14933_14941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14933_14941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14933_14941):map__14933_14941);
var binding_14943 = map__14933_14942__$1;
var init_14944 = cljs.core.get.call(null,map__14933_14942__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14943)," = ",init_14944,";");

var G__14945 = seq__14929_14937;
var G__14946 = chunk__14930_14938;
var G__14947 = count__14931_14939;
var G__14948 = (i__14932_14940 + (1));
seq__14929_14937 = G__14945;
chunk__14930_14938 = G__14946;
count__14931_14939 = G__14947;
i__14932_14940 = G__14948;
continue;
} else {
var temp__4657__auto___14949 = cljs.core.seq.call(null,seq__14929_14937);
if(temp__4657__auto___14949){
var seq__14929_14950__$1 = temp__4657__auto___14949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14929_14950__$1)){
var c__11091__auto___14951 = cljs.core.chunk_first.call(null,seq__14929_14950__$1);
var G__14952 = cljs.core.chunk_rest.call(null,seq__14929_14950__$1);
var G__14953 = c__11091__auto___14951;
var G__14954 = cljs.core.count.call(null,c__11091__auto___14951);
var G__14955 = (0);
seq__14929_14937 = G__14952;
chunk__14930_14938 = G__14953;
count__14931_14939 = G__14954;
i__14932_14940 = G__14955;
continue;
} else {
var map__14935_14956 = cljs.core.first.call(null,seq__14929_14950__$1);
var map__14935_14957__$1 = ((((!((map__14935_14956 == null)))?((((map__14935_14956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14935_14956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14935_14956):map__14935_14956);
var binding_14958 = map__14935_14957__$1;
var init_14959 = cljs.core.get.call(null,map__14935_14957__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14958)," = ",init_14959,";");

var G__14960 = cljs.core.next.call(null,seq__14929_14950__$1);
var G__14961 = null;
var G__14962 = (0);
var G__14963 = (0);
seq__14929_14937 = G__14960;
chunk__14930_14938 = G__14961;
count__14931_14939 = G__14962;
i__14932_14940 = G__14963;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14966){
var map__14967 = p__14966;
var map__14967__$1 = ((((!((map__14967 == null)))?((((map__14967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14967):map__14967);
var expr = map__14967__$1;
var f = cljs.core.get.call(null,map__14967__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14967__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14967__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__10265__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__10265__auto__)){
var and__10265__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__10265__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__10265__auto__ = protocol;
if(cljs.core.truth_(and__10265__auto__)){
var and__10265__auto____$1 = tag;
if(cljs.core.truth_(and__10265__auto____$1)){
var or__10277__auto__ = (function (){var and__10265__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__10265__auto____$2)){
var and__10265__auto____$3 = protocol;
if(cljs.core.truth_(and__10265__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__10265__auto____$3;
}
} else {
return and__10265__auto____$2;
}
})();
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
var and__10265__auto____$2 = (function (){var or__10277__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__10277__auto____$1)){
return or__10277__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__10265__auto____$2)){
var or__10277__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__10277__auto____$1){
return or__10277__auto____$1;
} else {
var and__10265__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__10265__auto____$3){
var and__10265__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__10265__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__10265__auto____$4;
}
} else {
return and__10265__auto____$3;
}
}
} else {
return and__10265__auto____$2;
}
}
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__10277__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__10277__auto__){
return or__10277__auto__;
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
var vec__14969 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__10265__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__10265__auto__)){
return (arity > mfa);
} else {
return and__10265__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env){
return (function (p1__14964_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14964_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env){
return (function (p1__14965_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14965_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14967,map__14967__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14969,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14969,(1),null);
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14972 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14972,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14973 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14973,args)),(((mfa_14973 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14973,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__10277__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
var or__10277__auto____$1 = js_QMARK_;
if(or__10277__auto____$1){
return or__10277__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__10265__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__10265__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__10265__auto__;
}
})())){
var fprop_14974 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_14974," ? ",f__$1,fprop_14974,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14975){
var map__14976 = p__14975;
var map__14976__$1 = ((((!((map__14976 == null)))?((((map__14976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14976):map__14976);
var ctor = cljs.core.get.call(null,map__14976__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__14976__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14978){
var map__14979 = p__14978;
var map__14979__$1 = ((((!((map__14979 == null)))?((((map__14979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14979):map__14979);
var target = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
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

var seq__14985_14989 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__14986_14990 = null;
var count__14987_14991 = (0);
var i__14988_14992 = (0);
while(true){
if((i__14988_14992 < count__14987_14991)){
var lib_14993 = cljs.core._nth.call(null,chunk__14986_14990,i__14988_14992);
if(cljs.core.truth_((function (){var or__10277__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14993),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14993),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__10277__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14993),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14993),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14993),"');");

}
}

var G__14994 = seq__14985_14989;
var G__14995 = chunk__14986_14990;
var G__14996 = count__14987_14991;
var G__14997 = (i__14988_14992 + (1));
seq__14985_14989 = G__14994;
chunk__14986_14990 = G__14995;
count__14987_14991 = G__14996;
i__14988_14992 = G__14997;
continue;
} else {
var temp__4657__auto___14998 = cljs.core.seq.call(null,seq__14985_14989);
if(temp__4657__auto___14998){
var seq__14985_14999__$1 = temp__4657__auto___14998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14985_14999__$1)){
var c__11091__auto___15000 = cljs.core.chunk_first.call(null,seq__14985_14999__$1);
var G__15001 = cljs.core.chunk_rest.call(null,seq__14985_14999__$1);
var G__15002 = c__11091__auto___15000;
var G__15003 = cljs.core.count.call(null,c__11091__auto___15000);
var G__15004 = (0);
seq__14985_14989 = G__15001;
chunk__14986_14990 = G__15002;
count__14987_14991 = G__15003;
i__14988_14992 = G__15004;
continue;
} else {
var lib_15005 = cljs.core.first.call(null,seq__14985_14999__$1);
if(cljs.core.truth_((function (){var or__10277__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15005),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15005),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__10277__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15005),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15005),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15005),"');");

}
}

var G__15006 = cljs.core.next.call(null,seq__14985_14999__$1);
var G__15007 = null;
var G__15008 = (0);
var G__15009 = (0);
seq__14985_14989 = G__15006;
chunk__14986_14990 = G__15007;
count__14987_14991 = G__15008;
i__14988_14992 = G__15009;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__15010){
var map__15011 = p__15010;
var map__15011__$1 = ((((!((map__15011 == null)))?((((map__15011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15011):map__15011);
var name = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15013){
var map__15014 = p__15013;
var map__15014__$1 = ((((!((map__15014 == null)))?((((map__15014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15014):map__15014);
var name = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__15016){
var map__15017 = p__15016;
var map__15017__$1 = ((((!((map__15017 == null)))?((((map__15017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15017):map__15017);
var t = cljs.core.get.call(null,map__15017__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15017__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15017__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15017__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15017__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15019_15037 = cljs.core.seq.call(null,protocols);
var chunk__15020_15038 = null;
var count__15021_15039 = (0);
var i__15022_15040 = (0);
while(true){
if((i__15022_15040 < count__15021_15039)){
var protocol_15041 = cljs.core._nth.call(null,chunk__15020_15038,i__15022_15040);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15041)].join('')),"}");

var G__15042 = seq__15019_15037;
var G__15043 = chunk__15020_15038;
var G__15044 = count__15021_15039;
var G__15045 = (i__15022_15040 + (1));
seq__15019_15037 = G__15042;
chunk__15020_15038 = G__15043;
count__15021_15039 = G__15044;
i__15022_15040 = G__15045;
continue;
} else {
var temp__4657__auto___15046 = cljs.core.seq.call(null,seq__15019_15037);
if(temp__4657__auto___15046){
var seq__15019_15047__$1 = temp__4657__auto___15046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15019_15047__$1)){
var c__11091__auto___15048 = cljs.core.chunk_first.call(null,seq__15019_15047__$1);
var G__15049 = cljs.core.chunk_rest.call(null,seq__15019_15047__$1);
var G__15050 = c__11091__auto___15048;
var G__15051 = cljs.core.count.call(null,c__11091__auto___15048);
var G__15052 = (0);
seq__15019_15037 = G__15049;
chunk__15020_15038 = G__15050;
count__15021_15039 = G__15051;
i__15022_15040 = G__15052;
continue;
} else {
var protocol_15053 = cljs.core.first.call(null,seq__15019_15047__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15053)].join('')),"}");

var G__15054 = cljs.core.next.call(null,seq__15019_15047__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__15019_15037 = G__15054;
chunk__15020_15038 = G__15055;
count__15021_15039 = G__15056;
i__15022_15040 = G__15057;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15023_15058 = cljs.core.seq.call(null,fields__$1);
var chunk__15024_15059 = null;
var count__15025_15060 = (0);
var i__15026_15061 = (0);
while(true){
if((i__15026_15061 < count__15025_15060)){
var fld_15062 = cljs.core._nth.call(null,chunk__15024_15059,i__15026_15061);
cljs.compiler.emitln.call(null,"this.",fld_15062," = ",fld_15062,";");

var G__15063 = seq__15023_15058;
var G__15064 = chunk__15024_15059;
var G__15065 = count__15025_15060;
var G__15066 = (i__15026_15061 + (1));
seq__15023_15058 = G__15063;
chunk__15024_15059 = G__15064;
count__15025_15060 = G__15065;
i__15026_15061 = G__15066;
continue;
} else {
var temp__4657__auto___15067 = cljs.core.seq.call(null,seq__15023_15058);
if(temp__4657__auto___15067){
var seq__15023_15068__$1 = temp__4657__auto___15067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15023_15068__$1)){
var c__11091__auto___15069 = cljs.core.chunk_first.call(null,seq__15023_15068__$1);
var G__15070 = cljs.core.chunk_rest.call(null,seq__15023_15068__$1);
var G__15071 = c__11091__auto___15069;
var G__15072 = cljs.core.count.call(null,c__11091__auto___15069);
var G__15073 = (0);
seq__15023_15058 = G__15070;
chunk__15024_15059 = G__15071;
count__15025_15060 = G__15072;
i__15026_15061 = G__15073;
continue;
} else {
var fld_15074 = cljs.core.first.call(null,seq__15023_15068__$1);
cljs.compiler.emitln.call(null,"this.",fld_15074," = ",fld_15074,";");

var G__15075 = cljs.core.next.call(null,seq__15023_15068__$1);
var G__15076 = null;
var G__15077 = (0);
var G__15078 = (0);
seq__15023_15058 = G__15075;
chunk__15024_15059 = G__15076;
count__15025_15060 = G__15077;
i__15026_15061 = G__15078;
continue;
}
} else {
}
}
break;
}

var seq__15027_15079 = cljs.core.seq.call(null,pmasks);
var chunk__15028_15080 = null;
var count__15029_15081 = (0);
var i__15030_15082 = (0);
while(true){
if((i__15030_15082 < count__15029_15081)){
var vec__15031_15083 = cljs.core._nth.call(null,chunk__15028_15080,i__15030_15082);
var pno_15084 = cljs.core.nth.call(null,vec__15031_15083,(0),null);
var pmask_15085 = cljs.core.nth.call(null,vec__15031_15083,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15084,"$ = ",pmask_15085,";");

var G__15086 = seq__15027_15079;
var G__15087 = chunk__15028_15080;
var G__15088 = count__15029_15081;
var G__15089 = (i__15030_15082 + (1));
seq__15027_15079 = G__15086;
chunk__15028_15080 = G__15087;
count__15029_15081 = G__15088;
i__15030_15082 = G__15089;
continue;
} else {
var temp__4657__auto___15090 = cljs.core.seq.call(null,seq__15027_15079);
if(temp__4657__auto___15090){
var seq__15027_15091__$1 = temp__4657__auto___15090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15027_15091__$1)){
var c__11091__auto___15092 = cljs.core.chunk_first.call(null,seq__15027_15091__$1);
var G__15093 = cljs.core.chunk_rest.call(null,seq__15027_15091__$1);
var G__15094 = c__11091__auto___15092;
var G__15095 = cljs.core.count.call(null,c__11091__auto___15092);
var G__15096 = (0);
seq__15027_15079 = G__15093;
chunk__15028_15080 = G__15094;
count__15029_15081 = G__15095;
i__15030_15082 = G__15096;
continue;
} else {
var vec__15034_15097 = cljs.core.first.call(null,seq__15027_15091__$1);
var pno_15098 = cljs.core.nth.call(null,vec__15034_15097,(0),null);
var pmask_15099 = cljs.core.nth.call(null,vec__15034_15097,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15098,"$ = ",pmask_15099,";");

var G__15100 = cljs.core.next.call(null,seq__15027_15091__$1);
var G__15101 = null;
var G__15102 = (0);
var G__15103 = (0);
seq__15027_15079 = G__15100;
chunk__15028_15080 = G__15101;
count__15029_15081 = G__15102;
i__15030_15082 = G__15103;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__15104){
var map__15105 = p__15104;
var map__15105__$1 = ((((!((map__15105 == null)))?((((map__15105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15105):map__15105);
var t = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15107_15125 = cljs.core.seq.call(null,protocols);
var chunk__15108_15126 = null;
var count__15109_15127 = (0);
var i__15110_15128 = (0);
while(true){
if((i__15110_15128 < count__15109_15127)){
var protocol_15129 = cljs.core._nth.call(null,chunk__15108_15126,i__15110_15128);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15129)].join('')),"}");

var G__15130 = seq__15107_15125;
var G__15131 = chunk__15108_15126;
var G__15132 = count__15109_15127;
var G__15133 = (i__15110_15128 + (1));
seq__15107_15125 = G__15130;
chunk__15108_15126 = G__15131;
count__15109_15127 = G__15132;
i__15110_15128 = G__15133;
continue;
} else {
var temp__4657__auto___15134 = cljs.core.seq.call(null,seq__15107_15125);
if(temp__4657__auto___15134){
var seq__15107_15135__$1 = temp__4657__auto___15134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15107_15135__$1)){
var c__11091__auto___15136 = cljs.core.chunk_first.call(null,seq__15107_15135__$1);
var G__15137 = cljs.core.chunk_rest.call(null,seq__15107_15135__$1);
var G__15138 = c__11091__auto___15136;
var G__15139 = cljs.core.count.call(null,c__11091__auto___15136);
var G__15140 = (0);
seq__15107_15125 = G__15137;
chunk__15108_15126 = G__15138;
count__15109_15127 = G__15139;
i__15110_15128 = G__15140;
continue;
} else {
var protocol_15141 = cljs.core.first.call(null,seq__15107_15135__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15141)].join('')),"}");

var G__15142 = cljs.core.next.call(null,seq__15107_15135__$1);
var G__15143 = null;
var G__15144 = (0);
var G__15145 = (0);
seq__15107_15125 = G__15142;
chunk__15108_15126 = G__15143;
count__15109_15127 = G__15144;
i__15110_15128 = G__15145;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15111_15146 = cljs.core.seq.call(null,fields__$1);
var chunk__15112_15147 = null;
var count__15113_15148 = (0);
var i__15114_15149 = (0);
while(true){
if((i__15114_15149 < count__15113_15148)){
var fld_15150 = cljs.core._nth.call(null,chunk__15112_15147,i__15114_15149);
cljs.compiler.emitln.call(null,"this.",fld_15150," = ",fld_15150,";");

var G__15151 = seq__15111_15146;
var G__15152 = chunk__15112_15147;
var G__15153 = count__15113_15148;
var G__15154 = (i__15114_15149 + (1));
seq__15111_15146 = G__15151;
chunk__15112_15147 = G__15152;
count__15113_15148 = G__15153;
i__15114_15149 = G__15154;
continue;
} else {
var temp__4657__auto___15155 = cljs.core.seq.call(null,seq__15111_15146);
if(temp__4657__auto___15155){
var seq__15111_15156__$1 = temp__4657__auto___15155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15111_15156__$1)){
var c__11091__auto___15157 = cljs.core.chunk_first.call(null,seq__15111_15156__$1);
var G__15158 = cljs.core.chunk_rest.call(null,seq__15111_15156__$1);
var G__15159 = c__11091__auto___15157;
var G__15160 = cljs.core.count.call(null,c__11091__auto___15157);
var G__15161 = (0);
seq__15111_15146 = G__15158;
chunk__15112_15147 = G__15159;
count__15113_15148 = G__15160;
i__15114_15149 = G__15161;
continue;
} else {
var fld_15162 = cljs.core.first.call(null,seq__15111_15156__$1);
cljs.compiler.emitln.call(null,"this.",fld_15162," = ",fld_15162,";");

var G__15163 = cljs.core.next.call(null,seq__15111_15156__$1);
var G__15164 = null;
var G__15165 = (0);
var G__15166 = (0);
seq__15111_15146 = G__15163;
chunk__15112_15147 = G__15164;
count__15113_15148 = G__15165;
i__15114_15149 = G__15166;
continue;
}
} else {
}
}
break;
}

var seq__15115_15167 = cljs.core.seq.call(null,pmasks);
var chunk__15116_15168 = null;
var count__15117_15169 = (0);
var i__15118_15170 = (0);
while(true){
if((i__15118_15170 < count__15117_15169)){
var vec__15119_15171 = cljs.core._nth.call(null,chunk__15116_15168,i__15118_15170);
var pno_15172 = cljs.core.nth.call(null,vec__15119_15171,(0),null);
var pmask_15173 = cljs.core.nth.call(null,vec__15119_15171,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15172,"$ = ",pmask_15173,";");

var G__15174 = seq__15115_15167;
var G__15175 = chunk__15116_15168;
var G__15176 = count__15117_15169;
var G__15177 = (i__15118_15170 + (1));
seq__15115_15167 = G__15174;
chunk__15116_15168 = G__15175;
count__15117_15169 = G__15176;
i__15118_15170 = G__15177;
continue;
} else {
var temp__4657__auto___15178 = cljs.core.seq.call(null,seq__15115_15167);
if(temp__4657__auto___15178){
var seq__15115_15179__$1 = temp__4657__auto___15178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15115_15179__$1)){
var c__11091__auto___15180 = cljs.core.chunk_first.call(null,seq__15115_15179__$1);
var G__15181 = cljs.core.chunk_rest.call(null,seq__15115_15179__$1);
var G__15182 = c__11091__auto___15180;
var G__15183 = cljs.core.count.call(null,c__11091__auto___15180);
var G__15184 = (0);
seq__15115_15167 = G__15181;
chunk__15116_15168 = G__15182;
count__15117_15169 = G__15183;
i__15118_15170 = G__15184;
continue;
} else {
var vec__15122_15185 = cljs.core.first.call(null,seq__15115_15179__$1);
var pno_15186 = cljs.core.nth.call(null,vec__15122_15185,(0),null);
var pmask_15187 = cljs.core.nth.call(null,vec__15122_15185,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15186,"$ = ",pmask_15187,";");

var G__15188 = cljs.core.next.call(null,seq__15115_15179__$1);
var G__15189 = null;
var G__15190 = (0);
var G__15191 = (0);
seq__15115_15167 = G__15188;
chunk__15116_15168 = G__15189;
count__15117_15169 = G__15190;
i__15118_15170 = G__15191;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15192){
var map__15193 = p__15192;
var map__15193__$1 = ((((!((map__15193 == null)))?((((map__15193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15193):map__15193);
var target = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15195){
var map__15196 = p__15195;
var map__15196__$1 = ((((!((map__15196 == null)))?((((map__15196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15196):map__15196);
var op = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__10265__auto__ = code;
if(cljs.core.truth_(and__10265__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__10265__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__14080__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14080__auto__))){
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
var seq__15210 = cljs.core.seq.call(null,table);
var chunk__15211 = null;
var count__15212 = (0);
var i__15213 = (0);
while(true){
if((i__15213 < count__15212)){
var vec__15214 = cljs.core._nth.call(null,chunk__15211,i__15213);
var sym = cljs.core.nth.call(null,vec__15214,(0),null);
var value = cljs.core.nth.call(null,vec__15214,(1),null);
var ns_15220 = cljs.core.namespace.call(null,sym);
var name_15221 = cljs.core.name.call(null,sym);
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

var G__15222 = seq__15210;
var G__15223 = chunk__15211;
var G__15224 = count__15212;
var G__15225 = (i__15213 + (1));
seq__15210 = G__15222;
chunk__15211 = G__15223;
count__15212 = G__15224;
i__15213 = G__15225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15210);
if(temp__4657__auto__){
var seq__15210__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15210__$1)){
var c__11091__auto__ = cljs.core.chunk_first.call(null,seq__15210__$1);
var G__15226 = cljs.core.chunk_rest.call(null,seq__15210__$1);
var G__15227 = c__11091__auto__;
var G__15228 = cljs.core.count.call(null,c__11091__auto__);
var G__15229 = (0);
seq__15210 = G__15226;
chunk__15211 = G__15227;
count__15212 = G__15228;
i__15213 = G__15229;
continue;
} else {
var vec__15217 = cljs.core.first.call(null,seq__15210__$1);
var sym = cljs.core.nth.call(null,vec__15217,(0),null);
var value = cljs.core.nth.call(null,vec__15217,(1),null);
var ns_15230 = cljs.core.namespace.call(null,sym);
var name_15231 = cljs.core.name.call(null,sym);
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

var G__15232 = cljs.core.next.call(null,seq__15210__$1);
var G__15233 = null;
var G__15234 = (0);
var G__15235 = (0);
seq__15210 = G__15232;
chunk__15211 = G__15233;
count__15212 = G__15234;
i__15213 = G__15235;
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