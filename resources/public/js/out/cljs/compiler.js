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
var map__13229 = s;
var map__13229__$1 = ((((!((map__13229 == null)))?((((map__13229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13229):map__13229);
var name = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__13232 = info;
var map__13233 = G__13232;
var map__13233__$1 = ((((!((map__13233 == null)))?((((map__13233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13233):map__13233);
var shadow = cljs.core.get.call(null,map__13233__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__13232__$1 = G__13232;
while(true){
var d__$2 = d__$1;
var map__13235 = G__13232__$1;
var map__13235__$1 = ((((!((map__13235 == null)))?((((map__13235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13235):map__13235);
var shadow__$1 = cljs.core.get.call(null,map__13235__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13237 = (d__$2 + (1));
var G__13238 = shadow__$1;
d__$1 = G__13237;
G__13232__$1 = G__13238;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13239){
var map__13244 = p__13239;
var map__13244__$1 = ((((!((map__13244 == null)))?((((map__13244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13244):map__13244);
var name_var = map__13244__$1;
var name = cljs.core.get.call(null,map__13244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13244__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__13246 = info;
var map__13246__$1 = ((((!((map__13246 == null)))?((((map__13246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13246):map__13246);
var ns = cljs.core.get.call(null,map__13246__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__13246__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args13248 = [];
var len__10516__auto___13251 = arguments.length;
var i__10517__auto___13252 = (0);
while(true){
if((i__10517__auto___13252 < len__10516__auto___13251)){
args13248.push((arguments[i__10517__auto___13252]));

var G__13253 = (i__10517__auto___13252 + (1));
i__10517__auto___13252 = G__13253;
continue;
} else {
}
break;
}

var G__13250 = args13248.length;
switch (G__13250) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13248.length)].join('')));

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
var G__13256 = cp;
switch (G__13256) {
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
var seq__13262_13266 = cljs.core.seq.call(null,s);
var chunk__13263_13267 = null;
var count__13264_13268 = (0);
var i__13265_13269 = (0);
while(true){
if((i__13265_13269 < count__13264_13268)){
var c_13270 = cljs.core._nth.call(null,chunk__13263_13267,i__13265_13269);
sb.append(cljs.compiler.escape_char.call(null,c_13270));

var G__13271 = seq__13262_13266;
var G__13272 = chunk__13263_13267;
var G__13273 = count__13264_13268;
var G__13274 = (i__13265_13269 + (1));
seq__13262_13266 = G__13271;
chunk__13263_13267 = G__13272;
count__13264_13268 = G__13273;
i__13265_13269 = G__13274;
continue;
} else {
var temp__4657__auto___13275 = cljs.core.seq.call(null,seq__13262_13266);
if(temp__4657__auto___13275){
var seq__13262_13276__$1 = temp__4657__auto___13275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13262_13276__$1)){
var c__10222__auto___13277 = cljs.core.chunk_first.call(null,seq__13262_13276__$1);
var G__13278 = cljs.core.chunk_rest.call(null,seq__13262_13276__$1);
var G__13279 = c__10222__auto___13277;
var G__13280 = cljs.core.count.call(null,c__10222__auto___13277);
var G__13281 = (0);
seq__13262_13266 = G__13278;
chunk__13263_13267 = G__13279;
count__13264_13268 = G__13280;
i__13265_13269 = G__13281;
continue;
} else {
var c_13282 = cljs.core.first.call(null,seq__13262_13276__$1);
sb.append(cljs.compiler.escape_char.call(null,c_13282));

var G__13283 = cljs.core.next.call(null,seq__13262_13276__$1);
var G__13284 = null;
var G__13285 = (0);
var G__13286 = (0);
seq__13262_13266 = G__13283;
chunk__13263_13267 = G__13284;
count__13264_13268 = G__13285;
i__13265_13269 = G__13286;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__10336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10340__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10340__auto__,method_table__10336__auto__,prefer_table__10337__auto__,method_cache__10338__auto__,cached_hierarchy__10339__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__11329__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__11329__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13292_13297 = ast;
var map__13292_13298__$1 = ((((!((map__13292_13297 == null)))?((((map__13292_13297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13292_13297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13292_13297):map__13292_13297);
var env_13299 = cljs.core.get.call(null,map__13292_13298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13299))){
var map__13294_13300 = env_13299;
var map__13294_13301__$1 = ((((!((map__13294_13300 == null)))?((((map__13294_13300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13294_13300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13294_13300):map__13294_13300);
var line_13302 = cljs.core.get.call(null,map__13294_13301__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13303 = cljs.core.get.call(null,map__13294_13301__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__13294_13300,map__13294_13301__$1,line_13302,column_13303,map__13292_13297,map__13292_13298__$1,env_13299,val__11329__auto__){
return (function (m){
var minfo = (function (){var G__13296 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__13296,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__13296;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13302 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__13294_13300,map__13294_13301__$1,line_13302,column_13303,map__13292_13297,map__13292_13298__$1,env_13299,val__11329__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13303)?(column_13303 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__13294_13300,map__13294_13301__$1,line_13302,column_13303,map__13292_13297,map__13292_13298__$1,env_13299,val__11329__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__13294_13300,map__13294_13301__$1,line_13302,column_13303,map__13292_13297,map__13292_13298__$1,env_13299,val__11329__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13294_13300,map__13294_13301__$1,line_13302,column_13303,map__13292_13297,map__13292_13298__$1,env_13299,val__11329__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__13294_13300,map__13294_13301__$1,line_13302,column_13303,map__13292_13297,map__13292_13298__$1,env_13299,val__11329__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__11329__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10523__auto__ = [];
var len__10516__auto___13310 = arguments.length;
var i__10517__auto___13311 = (0);
while(true){
if((i__10517__auto___13311 < len__10516__auto___13310)){
args__10523__auto__.push((arguments[i__10517__auto___13311]));

var G__13312 = (i__10517__auto___13311 + (1));
i__10517__auto___13311 = G__13312;
continue;
} else {
}
break;
}

var argseq__10524__auto__ = ((((0) < args__10523__auto__.length))?(new cljs.core.IndexedSeq(args__10523__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10524__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__13306_13313 = cljs.core.seq.call(null,xs);
var chunk__13307_13314 = null;
var count__13308_13315 = (0);
var i__13309_13316 = (0);
while(true){
if((i__13309_13316 < count__13308_13315)){
var x_13317 = cljs.core._nth.call(null,chunk__13307_13314,i__13309_13316);
if((x_13317 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13317)){
cljs.compiler.emit.call(null,x_13317);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13317)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13317);
} else {
if(goog.isFunction(x_13317)){
x_13317.call(null);
} else {
var s_13318 = cljs.core.print_str.call(null,x_13317);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13306_13313,chunk__13307_13314,count__13308_13315,i__13309_13316,s_13318,x_13317){
return (function (p1__13304_SHARP_){
return (p1__13304_SHARP_ + cljs.core.count.call(null,s_13318));
});})(seq__13306_13313,chunk__13307_13314,count__13308_13315,i__13309_13316,s_13318,x_13317))
);
}

cljs.core.print.call(null,s_13318);

}
}
}
}

var G__13319 = seq__13306_13313;
var G__13320 = chunk__13307_13314;
var G__13321 = count__13308_13315;
var G__13322 = (i__13309_13316 + (1));
seq__13306_13313 = G__13319;
chunk__13307_13314 = G__13320;
count__13308_13315 = G__13321;
i__13309_13316 = G__13322;
continue;
} else {
var temp__4657__auto___13323 = cljs.core.seq.call(null,seq__13306_13313);
if(temp__4657__auto___13323){
var seq__13306_13324__$1 = temp__4657__auto___13323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13306_13324__$1)){
var c__10222__auto___13325 = cljs.core.chunk_first.call(null,seq__13306_13324__$1);
var G__13326 = cljs.core.chunk_rest.call(null,seq__13306_13324__$1);
var G__13327 = c__10222__auto___13325;
var G__13328 = cljs.core.count.call(null,c__10222__auto___13325);
var G__13329 = (0);
seq__13306_13313 = G__13326;
chunk__13307_13314 = G__13327;
count__13308_13315 = G__13328;
i__13309_13316 = G__13329;
continue;
} else {
var x_13330 = cljs.core.first.call(null,seq__13306_13324__$1);
if((x_13330 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13330)){
cljs.compiler.emit.call(null,x_13330);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13330)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13330);
} else {
if(goog.isFunction(x_13330)){
x_13330.call(null);
} else {
var s_13331 = cljs.core.print_str.call(null,x_13330);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13306_13313,chunk__13307_13314,count__13308_13315,i__13309_13316,s_13331,x_13330,seq__13306_13324__$1,temp__4657__auto___13323){
return (function (p1__13304_SHARP_){
return (p1__13304_SHARP_ + cljs.core.count.call(null,s_13331));
});})(seq__13306_13313,chunk__13307_13314,count__13308_13315,i__13309_13316,s_13331,x_13330,seq__13306_13324__$1,temp__4657__auto___13323))
);
}

cljs.core.print.call(null,s_13331);

}
}
}
}

var G__13332 = cljs.core.next.call(null,seq__13306_13324__$1);
var G__13333 = null;
var G__13334 = (0);
var G__13335 = (0);
seq__13306_13313 = G__13332;
chunk__13307_13314 = G__13333;
count__13308_13315 = G__13334;
i__13309_13316 = G__13335;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq13305){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13305));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10523__auto__ = [];
var len__10516__auto___13340 = arguments.length;
var i__10517__auto___13341 = (0);
while(true){
if((i__10517__auto___13341 < len__10516__auto___13340)){
args__10523__auto__.push((arguments[i__10517__auto___13341]));

var G__13342 = (i__10517__auto___13341 + (1));
i__10517__auto___13341 = G__13342;
continue;
} else {
}
break;
}

var argseq__10524__auto__ = ((((0) < args__10523__auto__.length))?(new cljs.core.IndexedSeq(args__10523__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10524__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__13337){
var map__13338 = p__13337;
var map__13338__$1 = ((((!((map__13338 == null)))?((((map__13338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13338):map__13338);
var m = map__13338__$1;
var gen_line = cljs.core.get.call(null,map__13338__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13336){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13336));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__10397__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13345_13347 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13346_13348 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13345_13347,_STAR_print_fn_STAR_13346_13348,sb__10397__auto__){
return (function (x__10398__auto__){
return sb__10397__auto__.append(x__10398__auto__);
});})(_STAR_print_newline_STAR_13345_13347,_STAR_print_fn_STAR_13346_13348,sb__10397__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13346_13348;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13345_13347;
}
return [cljs.core.str(sb__10397__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__10336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10340__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10340__auto__,method_table__10336__auto__,prefer_table__10337__auto__,method_cache__10338__auto__,cached_hierarchy__10339__auto__));
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
var vec__13349 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__13349,(0),null);
var flags = cljs.core.nth.call(null,vec__13349,(1),null);
var pattern = cljs.core.nth.call(null,vec__13349,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__13353){
var map__13354 = p__13353;
var map__13354__$1 = ((((!((map__13354 == null)))?((((map__13354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13354):map__13354);
var arg = map__13354__$1;
var info = cljs.core.get.call(null,map__13354__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__13354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__13354__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__9408__auto__ = js_module_name;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__13356 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__13356);
} else {
return G__13356;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__13357){
var map__13358 = p__13357;
var map__13358__$1 = ((((!((map__13358 == null)))?((((map__13358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13358):map__13358);
var arg = map__13358__$1;
var env = cljs.core.get.call(null,map__13358__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__13358__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__13358__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__13358__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__13360 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__13360__$1 = ((((!((map__13360 == null)))?((((map__13360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13360):map__13360);
var name = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__13362){
var map__13363 = p__13362;
var map__13363__$1 = ((((!((map__13363 == null)))?((((map__13363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13363):map__13363);
var expr = cljs.core.get.call(null,map__13363__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__13363__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__13363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__13365_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13365_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__13366){
var map__13367 = p__13366;
var map__13367__$1 = ((((!((map__13367 == null)))?((((map__13367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13367):map__13367);
var env = cljs.core.get.call(null,map__13367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__13367__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__13367__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__13369){
var map__13370 = p__13369;
var map__13370__$1 = ((((!((map__13370 == null)))?((((map__13370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13370):map__13370);
var items = cljs.core.get.call(null,map__13370__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__13372){
var map__13373 = p__13372;
var map__13373__$1 = ((((!((map__13373 == null)))?((((map__13373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13373):map__13373);
var items = cljs.core.get.call(null,map__13373__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_13375 = cljs.core.count.call(null,items);
if((cnt_13375 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_13375,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__13376_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13376_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__13377){
var map__13378 = p__13377;
var map__13378__$1 = ((((!((map__13378 == null)))?((((map__13378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13378):map__13378);
var items = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__13380){
var map__13381 = p__13380;
var map__13381__$1 = ((((!((map__13381 == null)))?((((map__13381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13381):map__13381);
var items = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___13399 = cljs.core.seq.call(null,items);
if(temp__4657__auto___13399){
var items_13400__$1 = temp__4657__auto___13399;
var vec__13383_13401 = items_13400__$1;
var seq__13384_13402 = cljs.core.seq.call(null,vec__13383_13401);
var first__13385_13403 = cljs.core.first.call(null,seq__13384_13402);
var seq__13384_13404__$1 = cljs.core.next.call(null,seq__13384_13402);
var vec__13386_13405 = first__13385_13403;
var k_13406 = cljs.core.nth.call(null,vec__13386_13405,(0),null);
var v_13407 = cljs.core.nth.call(null,vec__13386_13405,(1),null);
var r_13408 = seq__13384_13404__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_13406),"\": ",v_13407);

var seq__13389_13409 = cljs.core.seq.call(null,r_13408);
var chunk__13390_13410 = null;
var count__13391_13411 = (0);
var i__13392_13412 = (0);
while(true){
if((i__13392_13412 < count__13391_13411)){
var vec__13393_13413 = cljs.core._nth.call(null,chunk__13390_13410,i__13392_13412);
var k_13414__$1 = cljs.core.nth.call(null,vec__13393_13413,(0),null);
var v_13415__$1 = cljs.core.nth.call(null,vec__13393_13413,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13414__$1),"\": ",v_13415__$1);

var G__13416 = seq__13389_13409;
var G__13417 = chunk__13390_13410;
var G__13418 = count__13391_13411;
var G__13419 = (i__13392_13412 + (1));
seq__13389_13409 = G__13416;
chunk__13390_13410 = G__13417;
count__13391_13411 = G__13418;
i__13392_13412 = G__13419;
continue;
} else {
var temp__4657__auto___13420__$1 = cljs.core.seq.call(null,seq__13389_13409);
if(temp__4657__auto___13420__$1){
var seq__13389_13421__$1 = temp__4657__auto___13420__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13389_13421__$1)){
var c__10222__auto___13422 = cljs.core.chunk_first.call(null,seq__13389_13421__$1);
var G__13423 = cljs.core.chunk_rest.call(null,seq__13389_13421__$1);
var G__13424 = c__10222__auto___13422;
var G__13425 = cljs.core.count.call(null,c__10222__auto___13422);
var G__13426 = (0);
seq__13389_13409 = G__13423;
chunk__13390_13410 = G__13424;
count__13391_13411 = G__13425;
i__13392_13412 = G__13426;
continue;
} else {
var vec__13396_13427 = cljs.core.first.call(null,seq__13389_13421__$1);
var k_13428__$1 = cljs.core.nth.call(null,vec__13396_13427,(0),null);
var v_13429__$1 = cljs.core.nth.call(null,vec__13396_13427,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13428__$1),"\": ",v_13429__$1);

var G__13430 = cljs.core.next.call(null,seq__13389_13421__$1);
var G__13431 = null;
var G__13432 = (0);
var G__13433 = (0);
seq__13389_13409 = G__13430;
chunk__13390_13410 = G__13431;
count__13391_13411 = G__13432;
i__13392_13412 = G__13433;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__13434){
var map__13435 = p__13434;
var map__13435__$1 = ((((!((map__13435 == null)))?((((map__13435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13435):map__13435);
var form = cljs.core.get.call(null,map__13435__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__13435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__13437){
var map__13440 = p__13437;
var map__13440__$1 = ((((!((map__13440 == null)))?((((map__13440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13440):map__13440);
var op = cljs.core.get.call(null,map__13440__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13440__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__9396__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__9396__auto__){
var and__9396__auto____$1 = form;
if(cljs.core.truth_(and__9396__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__9396__auto____$1;
}
} else {
return and__9396__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__13442){
var map__13445 = p__13442;
var map__13445__$1 = ((((!((map__13445 == null)))?((((map__13445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13445):map__13445);
var op = cljs.core.get.call(null,map__13445__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13445__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__9408__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__13447){
var map__13448 = p__13447;
var map__13448__$1 = ((((!((map__13448 == null)))?((((map__13448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13448):map__13448);
var test = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__9408__auto__ = unchecked;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__13450){
var map__13451 = p__13450;
var map__13451__$1 = ((((!((map__13451 == null)))?((((map__13451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13451):map__13451);
var v = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__13451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__13453_13471 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__13454_13472 = null;
var count__13455_13473 = (0);
var i__13456_13474 = (0);
while(true){
if((i__13456_13474 < count__13455_13473)){
var vec__13457_13475 = cljs.core._nth.call(null,chunk__13454_13472,i__13456_13474);
var ts_13476 = cljs.core.nth.call(null,vec__13457_13475,(0),null);
var then_13477 = cljs.core.nth.call(null,vec__13457_13475,(1),null);
var seq__13460_13478 = cljs.core.seq.call(null,ts_13476);
var chunk__13461_13479 = null;
var count__13462_13480 = (0);
var i__13463_13481 = (0);
while(true){
if((i__13463_13481 < count__13462_13480)){
var test_13482 = cljs.core._nth.call(null,chunk__13461_13479,i__13463_13481);
cljs.compiler.emitln.call(null,"case ",test_13482,":");

var G__13483 = seq__13460_13478;
var G__13484 = chunk__13461_13479;
var G__13485 = count__13462_13480;
var G__13486 = (i__13463_13481 + (1));
seq__13460_13478 = G__13483;
chunk__13461_13479 = G__13484;
count__13462_13480 = G__13485;
i__13463_13481 = G__13486;
continue;
} else {
var temp__4657__auto___13487 = cljs.core.seq.call(null,seq__13460_13478);
if(temp__4657__auto___13487){
var seq__13460_13488__$1 = temp__4657__auto___13487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13460_13488__$1)){
var c__10222__auto___13489 = cljs.core.chunk_first.call(null,seq__13460_13488__$1);
var G__13490 = cljs.core.chunk_rest.call(null,seq__13460_13488__$1);
var G__13491 = c__10222__auto___13489;
var G__13492 = cljs.core.count.call(null,c__10222__auto___13489);
var G__13493 = (0);
seq__13460_13478 = G__13490;
chunk__13461_13479 = G__13491;
count__13462_13480 = G__13492;
i__13463_13481 = G__13493;
continue;
} else {
var test_13494 = cljs.core.first.call(null,seq__13460_13488__$1);
cljs.compiler.emitln.call(null,"case ",test_13494,":");

var G__13495 = cljs.core.next.call(null,seq__13460_13488__$1);
var G__13496 = null;
var G__13497 = (0);
var G__13498 = (0);
seq__13460_13478 = G__13495;
chunk__13461_13479 = G__13496;
count__13462_13480 = G__13497;
i__13463_13481 = G__13498;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13477);
} else {
cljs.compiler.emitln.call(null,then_13477);
}

cljs.compiler.emitln.call(null,"break;");

var G__13499 = seq__13453_13471;
var G__13500 = chunk__13454_13472;
var G__13501 = count__13455_13473;
var G__13502 = (i__13456_13474 + (1));
seq__13453_13471 = G__13499;
chunk__13454_13472 = G__13500;
count__13455_13473 = G__13501;
i__13456_13474 = G__13502;
continue;
} else {
var temp__4657__auto___13503 = cljs.core.seq.call(null,seq__13453_13471);
if(temp__4657__auto___13503){
var seq__13453_13504__$1 = temp__4657__auto___13503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13453_13504__$1)){
var c__10222__auto___13505 = cljs.core.chunk_first.call(null,seq__13453_13504__$1);
var G__13506 = cljs.core.chunk_rest.call(null,seq__13453_13504__$1);
var G__13507 = c__10222__auto___13505;
var G__13508 = cljs.core.count.call(null,c__10222__auto___13505);
var G__13509 = (0);
seq__13453_13471 = G__13506;
chunk__13454_13472 = G__13507;
count__13455_13473 = G__13508;
i__13456_13474 = G__13509;
continue;
} else {
var vec__13464_13510 = cljs.core.first.call(null,seq__13453_13504__$1);
var ts_13511 = cljs.core.nth.call(null,vec__13464_13510,(0),null);
var then_13512 = cljs.core.nth.call(null,vec__13464_13510,(1),null);
var seq__13467_13513 = cljs.core.seq.call(null,ts_13511);
var chunk__13468_13514 = null;
var count__13469_13515 = (0);
var i__13470_13516 = (0);
while(true){
if((i__13470_13516 < count__13469_13515)){
var test_13517 = cljs.core._nth.call(null,chunk__13468_13514,i__13470_13516);
cljs.compiler.emitln.call(null,"case ",test_13517,":");

var G__13518 = seq__13467_13513;
var G__13519 = chunk__13468_13514;
var G__13520 = count__13469_13515;
var G__13521 = (i__13470_13516 + (1));
seq__13467_13513 = G__13518;
chunk__13468_13514 = G__13519;
count__13469_13515 = G__13520;
i__13470_13516 = G__13521;
continue;
} else {
var temp__4657__auto___13522__$1 = cljs.core.seq.call(null,seq__13467_13513);
if(temp__4657__auto___13522__$1){
var seq__13467_13523__$1 = temp__4657__auto___13522__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13467_13523__$1)){
var c__10222__auto___13524 = cljs.core.chunk_first.call(null,seq__13467_13523__$1);
var G__13525 = cljs.core.chunk_rest.call(null,seq__13467_13523__$1);
var G__13526 = c__10222__auto___13524;
var G__13527 = cljs.core.count.call(null,c__10222__auto___13524);
var G__13528 = (0);
seq__13467_13513 = G__13525;
chunk__13468_13514 = G__13526;
count__13469_13515 = G__13527;
i__13470_13516 = G__13528;
continue;
} else {
var test_13529 = cljs.core.first.call(null,seq__13467_13523__$1);
cljs.compiler.emitln.call(null,"case ",test_13529,":");

var G__13530 = cljs.core.next.call(null,seq__13467_13523__$1);
var G__13531 = null;
var G__13532 = (0);
var G__13533 = (0);
seq__13467_13513 = G__13530;
chunk__13468_13514 = G__13531;
count__13469_13515 = G__13532;
i__13470_13516 = G__13533;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13512);
} else {
cljs.compiler.emitln.call(null,then_13512);
}

cljs.compiler.emitln.call(null,"break;");

var G__13534 = cljs.core.next.call(null,seq__13453_13504__$1);
var G__13535 = null;
var G__13536 = (0);
var G__13537 = (0);
seq__13453_13471 = G__13534;
chunk__13454_13472 = G__13535;
count__13455_13473 = G__13536;
i__13456_13474 = G__13537;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__13538){
var map__13539 = p__13538;
var map__13539__$1 = ((((!((map__13539 == null)))?((((map__13539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13539):map__13539);
var throw$ = cljs.core.get.call(null,map__13539__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__13539__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__13546 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__13546,(0),null);
var rstr = cljs.core.nth.call(null,vec__13546,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__13546,fstr,rstr,ret_t,axstr){
return (function (p1__13541_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13541_SHARP_);
});})(idx,vec__13546,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__13549 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__13549),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__13549;
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
return (function (p1__13550_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13550_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__13557 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13558 = cljs.core.seq.call(null,vec__13557);
var first__13559 = cljs.core.first.call(null,seq__13558);
var seq__13558__$1 = cljs.core.next.call(null,seq__13558);
var p = first__13559;
var first__13559__$1 = cljs.core.first.call(null,seq__13558__$1);
var seq__13558__$2 = cljs.core.next.call(null,seq__13558__$1);
var ts = first__13559__$1;
var first__13559__$2 = cljs.core.first.call(null,seq__13558__$2);
var seq__13558__$3 = cljs.core.next.call(null,seq__13558__$2);
var n = first__13559__$2;
var xs = seq__13558__$3;
if(cljs.core.truth_((function (){var and__9396__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__9396__auto__){
var and__9396__auto____$1 = ts;
if(cljs.core.truth_(and__9396__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__9396__auto____$1;
}
} else {
return and__9396__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__13560 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13561 = cljs.core.seq.call(null,vec__13560);
var first__13562 = cljs.core.first.call(null,seq__13561);
var seq__13561__$1 = cljs.core.next.call(null,seq__13561);
var p = first__13562;
var first__13562__$1 = cljs.core.first.call(null,seq__13561__$1);
var seq__13561__$2 = cljs.core.next.call(null,seq__13561__$1);
var ts = first__13562__$1;
var xs = seq__13561__$2;
if(cljs.core.truth_((function (){var and__9396__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__9396__auto__){
var and__9396__auto____$1 = ts;
if(cljs.core.truth_(and__9396__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__9396__auto____$1;
}
} else {
return and__9396__auto__;
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
var args13564 = [];
var len__10516__auto___13599 = arguments.length;
var i__10517__auto___13600 = (0);
while(true){
if((i__10517__auto___13600 < len__10516__auto___13599)){
args13564.push((arguments[i__10517__auto___13600]));

var G__13601 = (i__10517__auto___13600 + (1));
i__10517__auto___13600 = G__13601;
continue;
} else {
}
break;
}

var G__13566 = args13564.length;
switch (G__13566) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13564.length)].join('')));

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
var vec__13588 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__13563_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__13563_SHARP_);
} else {
return p1__13563_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__13589 = cljs.core.seq.call(null,vec__13588);
var first__13590 = cljs.core.first.call(null,seq__13589);
var seq__13589__$1 = cljs.core.next.call(null,seq__13589);
var x = first__13590;
var ys = seq__13589__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__13591 = cljs.core.seq.call(null,ys);
var chunk__13592 = null;
var count__13593 = (0);
var i__13594 = (0);
while(true){
if((i__13594 < count__13593)){
var next_line = cljs.core._nth.call(null,chunk__13592,i__13594);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13603 = seq__13591;
var G__13604 = chunk__13592;
var G__13605 = count__13593;
var G__13606 = (i__13594 + (1));
seq__13591 = G__13603;
chunk__13592 = G__13604;
count__13593 = G__13605;
i__13594 = G__13606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13591);
if(temp__4657__auto__){
var seq__13591__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13591__$1)){
var c__10222__auto__ = cljs.core.chunk_first.call(null,seq__13591__$1);
var G__13607 = cljs.core.chunk_rest.call(null,seq__13591__$1);
var G__13608 = c__10222__auto__;
var G__13609 = cljs.core.count.call(null,c__10222__auto__);
var G__13610 = (0);
seq__13591 = G__13607;
chunk__13592 = G__13608;
count__13593 = G__13609;
i__13594 = G__13610;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__13591__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13611 = cljs.core.next.call(null,seq__13591__$1);
var G__13612 = null;
var G__13613 = (0);
var G__13614 = (0);
seq__13591 = G__13611;
chunk__13592 = G__13612;
count__13593 = G__13613;
i__13594 = G__13614;
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

var seq__13595_13615 = cljs.core.seq.call(null,docs__$2);
var chunk__13596_13616 = null;
var count__13597_13617 = (0);
var i__13598_13618 = (0);
while(true){
if((i__13598_13618 < count__13597_13617)){
var e_13619 = cljs.core._nth.call(null,chunk__13596_13616,i__13598_13618);
if(cljs.core.truth_(e_13619)){
print_comment_lines.call(null,e_13619);
} else {
}

var G__13620 = seq__13595_13615;
var G__13621 = chunk__13596_13616;
var G__13622 = count__13597_13617;
var G__13623 = (i__13598_13618 + (1));
seq__13595_13615 = G__13620;
chunk__13596_13616 = G__13621;
count__13597_13617 = G__13622;
i__13598_13618 = G__13623;
continue;
} else {
var temp__4657__auto___13624 = cljs.core.seq.call(null,seq__13595_13615);
if(temp__4657__auto___13624){
var seq__13595_13625__$1 = temp__4657__auto___13624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13595_13625__$1)){
var c__10222__auto___13626 = cljs.core.chunk_first.call(null,seq__13595_13625__$1);
var G__13627 = cljs.core.chunk_rest.call(null,seq__13595_13625__$1);
var G__13628 = c__10222__auto___13626;
var G__13629 = cljs.core.count.call(null,c__10222__auto___13626);
var G__13630 = (0);
seq__13595_13615 = G__13627;
chunk__13596_13616 = G__13628;
count__13597_13617 = G__13629;
i__13598_13618 = G__13630;
continue;
} else {
var e_13631 = cljs.core.first.call(null,seq__13595_13625__$1);
if(cljs.core.truth_(e_13631)){
print_comment_lines.call(null,e_13631);
} else {
}

var G__13632 = cljs.core.next.call(null,seq__13595_13625__$1);
var G__13633 = null;
var G__13634 = (0);
var G__13635 = (0);
seq__13595_13615 = G__13632;
chunk__13596_13616 = G__13633;
count__13597_13617 = G__13634;
i__13598_13618 = G__13635;
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
var and__9396__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__13637_SHARP_){
return goog.string.startsWith(p1__13637_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__9396__auto__)){
var and__9396__auto____$1 = opts;
if(cljs.core.truth_(and__9396__auto____$1)){
var and__9396__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__9396__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__9396__auto____$2;
}
} else {
return and__9396__auto____$1;
}
} else {
return and__9396__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__13638){
var map__13639 = p__13638;
var map__13639__$1 = ((((!((map__13639 == null)))?((((map__13639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13639):map__13639);
var name = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__9408__auto__ = init;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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

if(cljs.core.truth_((function (){var and__9396__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__9396__auto__)){
return test;
} else {
return and__9396__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13641){
var map__13662 = p__13641;
var map__13662__$1 = ((((!((map__13662 == null)))?((((map__13662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13662):map__13662);
var name = cljs.core.get.call(null,map__13662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13662__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13662__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__13664_13682 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__13665_13683 = null;
var count__13666_13684 = (0);
var i__13667_13685 = (0);
while(true){
if((i__13667_13685 < count__13666_13684)){
var vec__13668_13686 = cljs.core._nth.call(null,chunk__13665_13683,i__13667_13685);
var i_13687 = cljs.core.nth.call(null,vec__13668_13686,(0),null);
var param_13688 = cljs.core.nth.call(null,vec__13668_13686,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13688);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13689 = seq__13664_13682;
var G__13690 = chunk__13665_13683;
var G__13691 = count__13666_13684;
var G__13692 = (i__13667_13685 + (1));
seq__13664_13682 = G__13689;
chunk__13665_13683 = G__13690;
count__13666_13684 = G__13691;
i__13667_13685 = G__13692;
continue;
} else {
var temp__4657__auto___13693 = cljs.core.seq.call(null,seq__13664_13682);
if(temp__4657__auto___13693){
var seq__13664_13694__$1 = temp__4657__auto___13693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13664_13694__$1)){
var c__10222__auto___13695 = cljs.core.chunk_first.call(null,seq__13664_13694__$1);
var G__13696 = cljs.core.chunk_rest.call(null,seq__13664_13694__$1);
var G__13697 = c__10222__auto___13695;
var G__13698 = cljs.core.count.call(null,c__10222__auto___13695);
var G__13699 = (0);
seq__13664_13682 = G__13696;
chunk__13665_13683 = G__13697;
count__13666_13684 = G__13698;
i__13667_13685 = G__13699;
continue;
} else {
var vec__13671_13700 = cljs.core.first.call(null,seq__13664_13694__$1);
var i_13701 = cljs.core.nth.call(null,vec__13671_13700,(0),null);
var param_13702 = cljs.core.nth.call(null,vec__13671_13700,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13702);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13703 = cljs.core.next.call(null,seq__13664_13694__$1);
var G__13704 = null;
var G__13705 = (0);
var G__13706 = (0);
seq__13664_13682 = G__13703;
chunk__13665_13683 = G__13704;
count__13666_13684 = G__13705;
i__13667_13685 = G__13706;
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

var seq__13674_13707 = cljs.core.seq.call(null,params);
var chunk__13675_13708 = null;
var count__13676_13709 = (0);
var i__13677_13710 = (0);
while(true){
if((i__13677_13710 < count__13676_13709)){
var param_13711 = cljs.core._nth.call(null,chunk__13675_13708,i__13677_13710);
cljs.compiler.emit.call(null,param_13711);

if(cljs.core._EQ_.call(null,param_13711,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13712 = seq__13674_13707;
var G__13713 = chunk__13675_13708;
var G__13714 = count__13676_13709;
var G__13715 = (i__13677_13710 + (1));
seq__13674_13707 = G__13712;
chunk__13675_13708 = G__13713;
count__13676_13709 = G__13714;
i__13677_13710 = G__13715;
continue;
} else {
var temp__4657__auto___13716 = cljs.core.seq.call(null,seq__13674_13707);
if(temp__4657__auto___13716){
var seq__13674_13717__$1 = temp__4657__auto___13716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13674_13717__$1)){
var c__10222__auto___13718 = cljs.core.chunk_first.call(null,seq__13674_13717__$1);
var G__13719 = cljs.core.chunk_rest.call(null,seq__13674_13717__$1);
var G__13720 = c__10222__auto___13718;
var G__13721 = cljs.core.count.call(null,c__10222__auto___13718);
var G__13722 = (0);
seq__13674_13707 = G__13719;
chunk__13675_13708 = G__13720;
count__13676_13709 = G__13721;
i__13677_13710 = G__13722;
continue;
} else {
var param_13723 = cljs.core.first.call(null,seq__13674_13717__$1);
cljs.compiler.emit.call(null,param_13723);

if(cljs.core._EQ_.call(null,param_13723,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13724 = cljs.core.next.call(null,seq__13674_13717__$1);
var G__13725 = null;
var G__13726 = (0);
var G__13727 = (0);
seq__13674_13707 = G__13724;
chunk__13675_13708 = G__13725;
count__13676_13709 = G__13726;
i__13677_13710 = G__13727;
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

var seq__13678_13728 = cljs.core.seq.call(null,params);
var chunk__13679_13729 = null;
var count__13680_13730 = (0);
var i__13681_13731 = (0);
while(true){
if((i__13681_13731 < count__13680_13730)){
var param_13732 = cljs.core._nth.call(null,chunk__13679_13729,i__13681_13731);
cljs.compiler.emit.call(null,param_13732);

if(cljs.core._EQ_.call(null,param_13732,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13733 = seq__13678_13728;
var G__13734 = chunk__13679_13729;
var G__13735 = count__13680_13730;
var G__13736 = (i__13681_13731 + (1));
seq__13678_13728 = G__13733;
chunk__13679_13729 = G__13734;
count__13680_13730 = G__13735;
i__13681_13731 = G__13736;
continue;
} else {
var temp__4657__auto___13737 = cljs.core.seq.call(null,seq__13678_13728);
if(temp__4657__auto___13737){
var seq__13678_13738__$1 = temp__4657__auto___13737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13678_13738__$1)){
var c__10222__auto___13739 = cljs.core.chunk_first.call(null,seq__13678_13738__$1);
var G__13740 = cljs.core.chunk_rest.call(null,seq__13678_13738__$1);
var G__13741 = c__10222__auto___13739;
var G__13742 = cljs.core.count.call(null,c__10222__auto___13739);
var G__13743 = (0);
seq__13678_13728 = G__13740;
chunk__13679_13729 = G__13741;
count__13680_13730 = G__13742;
i__13681_13731 = G__13743;
continue;
} else {
var param_13744 = cljs.core.first.call(null,seq__13678_13738__$1);
cljs.compiler.emit.call(null,param_13744);

if(cljs.core._EQ_.call(null,param_13744,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13745 = cljs.core.next.call(null,seq__13678_13738__$1);
var G__13746 = null;
var G__13747 = (0);
var G__13748 = (0);
seq__13678_13728 = G__13745;
chunk__13679_13729 = G__13746;
count__13680_13730 = G__13747;
i__13681_13731 = G__13748;
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
var seq__13753 = cljs.core.seq.call(null,params);
var chunk__13754 = null;
var count__13755 = (0);
var i__13756 = (0);
while(true){
if((i__13756 < count__13755)){
var param = cljs.core._nth.call(null,chunk__13754,i__13756);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13757 = seq__13753;
var G__13758 = chunk__13754;
var G__13759 = count__13755;
var G__13760 = (i__13756 + (1));
seq__13753 = G__13757;
chunk__13754 = G__13758;
count__13755 = G__13759;
i__13756 = G__13760;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13753);
if(temp__4657__auto__){
var seq__13753__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13753__$1)){
var c__10222__auto__ = cljs.core.chunk_first.call(null,seq__13753__$1);
var G__13761 = cljs.core.chunk_rest.call(null,seq__13753__$1);
var G__13762 = c__10222__auto__;
var G__13763 = cljs.core.count.call(null,c__10222__auto__);
var G__13764 = (0);
seq__13753 = G__13761;
chunk__13754 = G__13762;
count__13755 = G__13763;
i__13756 = G__13764;
continue;
} else {
var param = cljs.core.first.call(null,seq__13753__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13765 = cljs.core.next.call(null,seq__13753__$1);
var G__13766 = null;
var G__13767 = (0);
var G__13768 = (0);
seq__13753 = G__13765;
chunk__13754 = G__13766;
count__13755 = G__13767;
i__13756 = G__13768;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13769){
var map__13772 = p__13769;
var map__13772__$1 = ((((!((map__13772 == null)))?((((map__13772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13772):map__13772);
var type = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13772__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13774){
var map__13785 = p__13774;
var map__13785__$1 = ((((!((map__13785 == null)))?((((map__13785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13785):map__13785);
var f = map__13785__$1;
var type = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13795__$1 = (function (){var or__9408__auto__ = name;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13796 = cljs.compiler.munge.call(null,name_13795__$1);
var delegate_name_13797 = [cljs.core.str(mname_13796),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13797," = function (");

var seq__13787_13798 = cljs.core.seq.call(null,params);
var chunk__13788_13799 = null;
var count__13789_13800 = (0);
var i__13790_13801 = (0);
while(true){
if((i__13790_13801 < count__13789_13800)){
var param_13802 = cljs.core._nth.call(null,chunk__13788_13799,i__13790_13801);
cljs.compiler.emit.call(null,param_13802);

if(cljs.core._EQ_.call(null,param_13802,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13803 = seq__13787_13798;
var G__13804 = chunk__13788_13799;
var G__13805 = count__13789_13800;
var G__13806 = (i__13790_13801 + (1));
seq__13787_13798 = G__13803;
chunk__13788_13799 = G__13804;
count__13789_13800 = G__13805;
i__13790_13801 = G__13806;
continue;
} else {
var temp__4657__auto___13807 = cljs.core.seq.call(null,seq__13787_13798);
if(temp__4657__auto___13807){
var seq__13787_13808__$1 = temp__4657__auto___13807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13787_13808__$1)){
var c__10222__auto___13809 = cljs.core.chunk_first.call(null,seq__13787_13808__$1);
var G__13810 = cljs.core.chunk_rest.call(null,seq__13787_13808__$1);
var G__13811 = c__10222__auto___13809;
var G__13812 = cljs.core.count.call(null,c__10222__auto___13809);
var G__13813 = (0);
seq__13787_13798 = G__13810;
chunk__13788_13799 = G__13811;
count__13789_13800 = G__13812;
i__13790_13801 = G__13813;
continue;
} else {
var param_13814 = cljs.core.first.call(null,seq__13787_13808__$1);
cljs.compiler.emit.call(null,param_13814);

if(cljs.core._EQ_.call(null,param_13814,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13815 = cljs.core.next.call(null,seq__13787_13808__$1);
var G__13816 = null;
var G__13817 = (0);
var G__13818 = (0);
seq__13787_13798 = G__13815;
chunk__13788_13799 = G__13816;
count__13789_13800 = G__13817;
i__13790_13801 = G__13818;
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

cljs.compiler.emitln.call(null,"var ",mname_13796," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13819 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13819,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13797,".call(this,");

var seq__13791_13820 = cljs.core.seq.call(null,params);
var chunk__13792_13821 = null;
var count__13793_13822 = (0);
var i__13794_13823 = (0);
while(true){
if((i__13794_13823 < count__13793_13822)){
var param_13824 = cljs.core._nth.call(null,chunk__13792_13821,i__13794_13823);
cljs.compiler.emit.call(null,param_13824);

if(cljs.core._EQ_.call(null,param_13824,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13825 = seq__13791_13820;
var G__13826 = chunk__13792_13821;
var G__13827 = count__13793_13822;
var G__13828 = (i__13794_13823 + (1));
seq__13791_13820 = G__13825;
chunk__13792_13821 = G__13826;
count__13793_13822 = G__13827;
i__13794_13823 = G__13828;
continue;
} else {
var temp__4657__auto___13829 = cljs.core.seq.call(null,seq__13791_13820);
if(temp__4657__auto___13829){
var seq__13791_13830__$1 = temp__4657__auto___13829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13791_13830__$1)){
var c__10222__auto___13831 = cljs.core.chunk_first.call(null,seq__13791_13830__$1);
var G__13832 = cljs.core.chunk_rest.call(null,seq__13791_13830__$1);
var G__13833 = c__10222__auto___13831;
var G__13834 = cljs.core.count.call(null,c__10222__auto___13831);
var G__13835 = (0);
seq__13791_13820 = G__13832;
chunk__13792_13821 = G__13833;
count__13793_13822 = G__13834;
i__13794_13823 = G__13835;
continue;
} else {
var param_13836 = cljs.core.first.call(null,seq__13791_13830__$1);
cljs.compiler.emit.call(null,param_13836);

if(cljs.core._EQ_.call(null,param_13836,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13837 = cljs.core.next.call(null,seq__13791_13830__$1);
var G__13838 = null;
var G__13839 = (0);
var G__13840 = (0);
seq__13791_13820 = G__13837;
chunk__13792_13821 = G__13838;
count__13793_13822 = G__13839;
i__13794_13823 = G__13840;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13796,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13796,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13795__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13796,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13797,";");

cljs.compiler.emitln.call(null,"return ",mname_13796,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13844){
var map__13845 = p__13844;
var map__13845__$1 = ((((!((map__13845 == null)))?((((map__13845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13845):map__13845);
var name = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13845__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13841_SHARP_){
var and__9396__auto__ = p1__13841_SHARP_;
if(cljs.core.truth_(and__9396__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13841_SHARP_));
} else {
return and__9396__auto__;
}
});})(map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_13880__$1 = (function (){var or__9408__auto__ = name;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13881 = cljs.compiler.munge.call(null,name_13880__$1);
var maxparams_13882 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13883 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13880__$1,mname_13881,maxparams_13882,loop_locals,map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_13881),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13880__$1,mname_13881,maxparams_13882,loop_locals,map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13884 = cljs.core.sort_by.call(null,((function (name_13880__$1,mname_13881,maxparams_13882,mmap_13883,loop_locals,map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13842_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13842_SHARP_)));
});})(name_13880__$1,mname_13881,maxparams_13882,mmap_13883,loop_locals,map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13883));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13881," = null;");

var seq__13847_13885 = cljs.core.seq.call(null,ms_13884);
var chunk__13848_13886 = null;
var count__13849_13887 = (0);
var i__13850_13888 = (0);
while(true){
if((i__13850_13888 < count__13849_13887)){
var vec__13851_13889 = cljs.core._nth.call(null,chunk__13848_13886,i__13850_13888);
var n_13890 = cljs.core.nth.call(null,vec__13851_13889,(0),null);
var meth_13891 = cljs.core.nth.call(null,vec__13851_13889,(1),null);
cljs.compiler.emits.call(null,"var ",n_13890," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13891))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13891);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13891);
}

cljs.compiler.emitln.call(null,";");

var G__13892 = seq__13847_13885;
var G__13893 = chunk__13848_13886;
var G__13894 = count__13849_13887;
var G__13895 = (i__13850_13888 + (1));
seq__13847_13885 = G__13892;
chunk__13848_13886 = G__13893;
count__13849_13887 = G__13894;
i__13850_13888 = G__13895;
continue;
} else {
var temp__4657__auto___13896 = cljs.core.seq.call(null,seq__13847_13885);
if(temp__4657__auto___13896){
var seq__13847_13897__$1 = temp__4657__auto___13896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13847_13897__$1)){
var c__10222__auto___13898 = cljs.core.chunk_first.call(null,seq__13847_13897__$1);
var G__13899 = cljs.core.chunk_rest.call(null,seq__13847_13897__$1);
var G__13900 = c__10222__auto___13898;
var G__13901 = cljs.core.count.call(null,c__10222__auto___13898);
var G__13902 = (0);
seq__13847_13885 = G__13899;
chunk__13848_13886 = G__13900;
count__13849_13887 = G__13901;
i__13850_13888 = G__13902;
continue;
} else {
var vec__13854_13903 = cljs.core.first.call(null,seq__13847_13897__$1);
var n_13904 = cljs.core.nth.call(null,vec__13854_13903,(0),null);
var meth_13905 = cljs.core.nth.call(null,vec__13854_13903,(1),null);
cljs.compiler.emits.call(null,"var ",n_13904," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13905))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13905);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13905);
}

cljs.compiler.emitln.call(null,";");

var G__13906 = cljs.core.next.call(null,seq__13847_13897__$1);
var G__13907 = null;
var G__13908 = (0);
var G__13909 = (0);
seq__13847_13885 = G__13906;
chunk__13848_13886 = G__13907;
count__13849_13887 = G__13908;
i__13850_13888 = G__13909;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13881," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13882)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13882));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13857_13910 = cljs.core.seq.call(null,ms_13884);
var chunk__13858_13911 = null;
var count__13859_13912 = (0);
var i__13860_13913 = (0);
while(true){
if((i__13860_13913 < count__13859_13912)){
var vec__13861_13914 = cljs.core._nth.call(null,chunk__13858_13911,i__13860_13913);
var n_13915 = cljs.core.nth.call(null,vec__13861_13914,(0),null);
var meth_13916 = cljs.core.nth.call(null,vec__13861_13914,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13916))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13917 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13917," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13918 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13917," = new cljs.core.IndexedSeq(",a_13918,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13915,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13882)),(((cljs.core.count.call(null,maxparams_13882) > (1)))?", ":null),restarg_13917,");");
} else {
var pcnt_13919 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13916));
cljs.compiler.emitln.call(null,"case ",pcnt_13919,":");

cljs.compiler.emitln.call(null,"return ",n_13915,".call(this",(((pcnt_13919 === (0)))?null:cljs.core._conj.call(null,(function (){var x__10245__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13919,maxparams_13882));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto__);
})(),",")),");");
}

var G__13920 = seq__13857_13910;
var G__13921 = chunk__13858_13911;
var G__13922 = count__13859_13912;
var G__13923 = (i__13860_13913 + (1));
seq__13857_13910 = G__13920;
chunk__13858_13911 = G__13921;
count__13859_13912 = G__13922;
i__13860_13913 = G__13923;
continue;
} else {
var temp__4657__auto___13924 = cljs.core.seq.call(null,seq__13857_13910);
if(temp__4657__auto___13924){
var seq__13857_13925__$1 = temp__4657__auto___13924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13857_13925__$1)){
var c__10222__auto___13926 = cljs.core.chunk_first.call(null,seq__13857_13925__$1);
var G__13927 = cljs.core.chunk_rest.call(null,seq__13857_13925__$1);
var G__13928 = c__10222__auto___13926;
var G__13929 = cljs.core.count.call(null,c__10222__auto___13926);
var G__13930 = (0);
seq__13857_13910 = G__13927;
chunk__13858_13911 = G__13928;
count__13859_13912 = G__13929;
i__13860_13913 = G__13930;
continue;
} else {
var vec__13864_13931 = cljs.core.first.call(null,seq__13857_13925__$1);
var n_13932 = cljs.core.nth.call(null,vec__13864_13931,(0),null);
var meth_13933 = cljs.core.nth.call(null,vec__13864_13931,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13933))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13934 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13934," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13935 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13934," = new cljs.core.IndexedSeq(",a_13935,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13932,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13882)),(((cljs.core.count.call(null,maxparams_13882) > (1)))?", ":null),restarg_13934,");");
} else {
var pcnt_13936 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13933));
cljs.compiler.emitln.call(null,"case ",pcnt_13936,":");

cljs.compiler.emitln.call(null,"return ",n_13932,".call(this",(((pcnt_13936 === (0)))?null:cljs.core._conj.call(null,(function (){var x__10245__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13936,maxparams_13882));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto__);
})(),",")),");");
}

var G__13937 = cljs.core.next.call(null,seq__13857_13925__$1);
var G__13938 = null;
var G__13939 = (0);
var G__13940 = (0);
seq__13857_13910 = G__13937;
chunk__13858_13911 = G__13938;
count__13859_13912 = G__13939;
i__13860_13913 = G__13940;
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
cljs.compiler.emitln.call(null,mname_13881,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13881,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13880__$1,mname_13881,maxparams_13882,mmap_13883,ms_13884,loop_locals,map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13843_SHARP_){
var vec__13867 = p1__13843_SHARP_;
var n = cljs.core.nth.call(null,vec__13867,(0),null);
var m = cljs.core.nth.call(null,vec__13867,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13880__$1,mname_13881,maxparams_13882,mmap_13883,ms_13884,loop_locals,map__13845,map__13845__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13884),".cljs$lang$applyTo;");
} else {
}

var seq__13870_13941 = cljs.core.seq.call(null,ms_13884);
var chunk__13871_13942 = null;
var count__13872_13943 = (0);
var i__13873_13944 = (0);
while(true){
if((i__13873_13944 < count__13872_13943)){
var vec__13874_13945 = cljs.core._nth.call(null,chunk__13871_13942,i__13873_13944);
var n_13946 = cljs.core.nth.call(null,vec__13874_13945,(0),null);
var meth_13947 = cljs.core.nth.call(null,vec__13874_13945,(1),null);
var c_13948 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13947));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13947))){
cljs.compiler.emitln.call(null,mname_13881,".cljs$core$IFn$_invoke$arity$variadic = ",n_13946,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13881,".cljs$core$IFn$_invoke$arity$",c_13948," = ",n_13946,";");
}

var G__13949 = seq__13870_13941;
var G__13950 = chunk__13871_13942;
var G__13951 = count__13872_13943;
var G__13952 = (i__13873_13944 + (1));
seq__13870_13941 = G__13949;
chunk__13871_13942 = G__13950;
count__13872_13943 = G__13951;
i__13873_13944 = G__13952;
continue;
} else {
var temp__4657__auto___13953 = cljs.core.seq.call(null,seq__13870_13941);
if(temp__4657__auto___13953){
var seq__13870_13954__$1 = temp__4657__auto___13953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13870_13954__$1)){
var c__10222__auto___13955 = cljs.core.chunk_first.call(null,seq__13870_13954__$1);
var G__13956 = cljs.core.chunk_rest.call(null,seq__13870_13954__$1);
var G__13957 = c__10222__auto___13955;
var G__13958 = cljs.core.count.call(null,c__10222__auto___13955);
var G__13959 = (0);
seq__13870_13941 = G__13956;
chunk__13871_13942 = G__13957;
count__13872_13943 = G__13958;
i__13873_13944 = G__13959;
continue;
} else {
var vec__13877_13960 = cljs.core.first.call(null,seq__13870_13954__$1);
var n_13961 = cljs.core.nth.call(null,vec__13877_13960,(0),null);
var meth_13962 = cljs.core.nth.call(null,vec__13877_13960,(1),null);
var c_13963 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13962));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13962))){
cljs.compiler.emitln.call(null,mname_13881,".cljs$core$IFn$_invoke$arity$variadic = ",n_13961,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13881,".cljs$core$IFn$_invoke$arity$",c_13963," = ",n_13961,";");
}

var G__13964 = cljs.core.next.call(null,seq__13870_13954__$1);
var G__13965 = null;
var G__13966 = (0);
var G__13967 = (0);
seq__13870_13941 = G__13964;
chunk__13871_13942 = G__13965;
count__13872_13943 = G__13966;
i__13873_13944 = G__13967;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13881,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13968){
var map__13969 = p__13968;
var map__13969__$1 = ((((!((map__13969 == null)))?((((map__13969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13969):map__13969);
var statements = cljs.core.get.call(null,map__13969__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13969__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13969__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__9396__auto__ = statements;
if(cljs.core.truth_(and__9396__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__9396__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13971_13975 = cljs.core.seq.call(null,statements);
var chunk__13972_13976 = null;
var count__13973_13977 = (0);
var i__13974_13978 = (0);
while(true){
if((i__13974_13978 < count__13973_13977)){
var s_13979 = cljs.core._nth.call(null,chunk__13972_13976,i__13974_13978);
cljs.compiler.emitln.call(null,s_13979);

var G__13980 = seq__13971_13975;
var G__13981 = chunk__13972_13976;
var G__13982 = count__13973_13977;
var G__13983 = (i__13974_13978 + (1));
seq__13971_13975 = G__13980;
chunk__13972_13976 = G__13981;
count__13973_13977 = G__13982;
i__13974_13978 = G__13983;
continue;
} else {
var temp__4657__auto___13984 = cljs.core.seq.call(null,seq__13971_13975);
if(temp__4657__auto___13984){
var seq__13971_13985__$1 = temp__4657__auto___13984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13971_13985__$1)){
var c__10222__auto___13986 = cljs.core.chunk_first.call(null,seq__13971_13985__$1);
var G__13987 = cljs.core.chunk_rest.call(null,seq__13971_13985__$1);
var G__13988 = c__10222__auto___13986;
var G__13989 = cljs.core.count.call(null,c__10222__auto___13986);
var G__13990 = (0);
seq__13971_13975 = G__13987;
chunk__13972_13976 = G__13988;
count__13973_13977 = G__13989;
i__13974_13978 = G__13990;
continue;
} else {
var s_13991 = cljs.core.first.call(null,seq__13971_13985__$1);
cljs.compiler.emitln.call(null,s_13991);

var G__13992 = cljs.core.next.call(null,seq__13971_13985__$1);
var G__13993 = null;
var G__13994 = (0);
var G__13995 = (0);
seq__13971_13975 = G__13992;
chunk__13972_13976 = G__13993;
count__13973_13977 = G__13994;
i__13974_13978 = G__13995;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__9396__auto__ = statements;
if(cljs.core.truth_(and__9396__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__9396__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13996){
var map__13997 = p__13996;
var map__13997__$1 = ((((!((map__13997 == null)))?((((map__13997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13997):map__13997);
var env = cljs.core.get.call(null,map__13997__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13997__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13997__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13997__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__9408__auto__ = name;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13999,is_loop){
var map__14011 = p__13999;
var map__14011__$1 = ((((!((map__14011 == null)))?((((map__14011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14011):map__14011);
var bindings = cljs.core.get.call(null,map__14011__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14011__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_14013_14022 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_14013_14022,context,map__14011,map__14011__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_14013_14022,context,map__14011,map__14011__$1,bindings,expr,env))
,bindings):null));

try{var seq__14014_14023 = cljs.core.seq.call(null,bindings);
var chunk__14015_14024 = null;
var count__14016_14025 = (0);
var i__14017_14026 = (0);
while(true){
if((i__14017_14026 < count__14016_14025)){
var map__14018_14027 = cljs.core._nth.call(null,chunk__14015_14024,i__14017_14026);
var map__14018_14028__$1 = ((((!((map__14018_14027 == null)))?((((map__14018_14027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14018_14027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14018_14027):map__14018_14027);
var binding_14029 = map__14018_14028__$1;
var init_14030 = cljs.core.get.call(null,map__14018_14028__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14029);

cljs.compiler.emitln.call(null," = ",init_14030,";");

var G__14031 = seq__14014_14023;
var G__14032 = chunk__14015_14024;
var G__14033 = count__14016_14025;
var G__14034 = (i__14017_14026 + (1));
seq__14014_14023 = G__14031;
chunk__14015_14024 = G__14032;
count__14016_14025 = G__14033;
i__14017_14026 = G__14034;
continue;
} else {
var temp__4657__auto___14035 = cljs.core.seq.call(null,seq__14014_14023);
if(temp__4657__auto___14035){
var seq__14014_14036__$1 = temp__4657__auto___14035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14014_14036__$1)){
var c__10222__auto___14037 = cljs.core.chunk_first.call(null,seq__14014_14036__$1);
var G__14038 = cljs.core.chunk_rest.call(null,seq__14014_14036__$1);
var G__14039 = c__10222__auto___14037;
var G__14040 = cljs.core.count.call(null,c__10222__auto___14037);
var G__14041 = (0);
seq__14014_14023 = G__14038;
chunk__14015_14024 = G__14039;
count__14016_14025 = G__14040;
i__14017_14026 = G__14041;
continue;
} else {
var map__14020_14042 = cljs.core.first.call(null,seq__14014_14036__$1);
var map__14020_14043__$1 = ((((!((map__14020_14042 == null)))?((((map__14020_14042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14020_14042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14020_14042):map__14020_14042);
var binding_14044 = map__14020_14043__$1;
var init_14045 = cljs.core.get.call(null,map__14020_14043__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14044);

cljs.compiler.emitln.call(null," = ",init_14045,";");

var G__14046 = cljs.core.next.call(null,seq__14014_14036__$1);
var G__14047 = null;
var G__14048 = (0);
var G__14049 = (0);
seq__14014_14023 = G__14046;
chunk__14015_14024 = G__14047;
count__14016_14025 = G__14048;
i__14017_14026 = G__14049;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_14013_14022;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14050){
var map__14051 = p__14050;
var map__14051__$1 = ((((!((map__14051 == null)))?((((map__14051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14051):map__14051);
var frame = cljs.core.get.call(null,map__14051__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14051__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14051__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__10326__auto___14053 = cljs.core.count.call(null,exprs);
var i_14054 = (0);
while(true){
if((i_14054 < n__10326__auto___14053)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14054)," = ",exprs.call(null,i_14054),";");

var G__14055 = (i_14054 + (1));
i_14054 = G__14055;
continue;
} else {
}
break;
}

var n__10326__auto___14056 = cljs.core.count.call(null,exprs);
var i_14057 = (0);
while(true){
if((i_14057 < n__10326__auto___14056)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14057))," = ",temps.call(null,i_14057),";");

var G__14058 = (i_14057 + (1));
i_14057 = G__14058;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14059){
var map__14060 = p__14059;
var map__14060__$1 = ((((!((map__14060 == null)))?((((map__14060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14060):map__14060);
var bindings = cljs.core.get.call(null,map__14060__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14060__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14062_14070 = cljs.core.seq.call(null,bindings);
var chunk__14063_14071 = null;
var count__14064_14072 = (0);
var i__14065_14073 = (0);
while(true){
if((i__14065_14073 < count__14064_14072)){
var map__14066_14074 = cljs.core._nth.call(null,chunk__14063_14071,i__14065_14073);
var map__14066_14075__$1 = ((((!((map__14066_14074 == null)))?((((map__14066_14074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14066_14074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14066_14074):map__14066_14074);
var binding_14076 = map__14066_14075__$1;
var init_14077 = cljs.core.get.call(null,map__14066_14075__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14076)," = ",init_14077,";");

var G__14078 = seq__14062_14070;
var G__14079 = chunk__14063_14071;
var G__14080 = count__14064_14072;
var G__14081 = (i__14065_14073 + (1));
seq__14062_14070 = G__14078;
chunk__14063_14071 = G__14079;
count__14064_14072 = G__14080;
i__14065_14073 = G__14081;
continue;
} else {
var temp__4657__auto___14082 = cljs.core.seq.call(null,seq__14062_14070);
if(temp__4657__auto___14082){
var seq__14062_14083__$1 = temp__4657__auto___14082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14062_14083__$1)){
var c__10222__auto___14084 = cljs.core.chunk_first.call(null,seq__14062_14083__$1);
var G__14085 = cljs.core.chunk_rest.call(null,seq__14062_14083__$1);
var G__14086 = c__10222__auto___14084;
var G__14087 = cljs.core.count.call(null,c__10222__auto___14084);
var G__14088 = (0);
seq__14062_14070 = G__14085;
chunk__14063_14071 = G__14086;
count__14064_14072 = G__14087;
i__14065_14073 = G__14088;
continue;
} else {
var map__14068_14089 = cljs.core.first.call(null,seq__14062_14083__$1);
var map__14068_14090__$1 = ((((!((map__14068_14089 == null)))?((((map__14068_14089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14068_14089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14068_14089):map__14068_14089);
var binding_14091 = map__14068_14090__$1;
var init_14092 = cljs.core.get.call(null,map__14068_14090__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14091)," = ",init_14092,";");

var G__14093 = cljs.core.next.call(null,seq__14062_14083__$1);
var G__14094 = null;
var G__14095 = (0);
var G__14096 = (0);
seq__14062_14070 = G__14093;
chunk__14063_14071 = G__14094;
count__14064_14072 = G__14095;
i__14065_14073 = G__14096;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14099){
var map__14100 = p__14099;
var map__14100__$1 = ((((!((map__14100 == null)))?((((map__14100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14100):map__14100);
var expr = map__14100__$1;
var f = cljs.core.get.call(null,map__14100__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14100__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14100__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__9396__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__9396__auto__)){
var and__9396__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__9396__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__9396__auto____$1;
}
} else {
return and__9396__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__9396__auto__ = protocol;
if(cljs.core.truth_(and__9396__auto__)){
var and__9396__auto____$1 = tag;
if(cljs.core.truth_(and__9396__auto____$1)){
var or__9408__auto__ = (function (){var and__9396__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__9396__auto____$2)){
var and__9396__auto____$3 = protocol;
if(cljs.core.truth_(and__9396__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__9396__auto____$3;
}
} else {
return and__9396__auto____$2;
}
})();
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
var and__9396__auto____$2 = (function (){var or__9408__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__9408__auto____$1)){
return or__9408__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__9396__auto____$2)){
var or__9408__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__9408__auto____$1){
return or__9408__auto____$1;
} else {
var and__9396__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__9396__auto____$3){
var and__9396__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__9396__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__9396__auto____$4;
}
} else {
return and__9396__auto____$3;
}
}
} else {
return and__9396__auto____$2;
}
}
} else {
return and__9396__auto____$1;
}
} else {
return and__9396__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__9408__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__9408__auto__){
return or__9408__auto__;
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
var vec__14102 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__9396__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__9396__auto__)){
return (arity > mfa);
} else {
return and__9396__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env){
return (function (p1__14097_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14097_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env){
return (function (p1__14098_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14098_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14100,map__14100__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14102,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14102,(1),null);
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14105 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14105,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14106 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14106,args)),(((mfa_14106 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14106,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__9408__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
var or__9408__auto____$1 = js_QMARK_;
if(or__9408__auto____$1){
return or__9408__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__9396__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__9396__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__9396__auto__;
}
})())){
var fprop_14107 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_14107," ? ",f__$1,fprop_14107,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14108){
var map__14109 = p__14108;
var map__14109__$1 = ((((!((map__14109 == null)))?((((map__14109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14109):map__14109);
var ctor = cljs.core.get.call(null,map__14109__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__14109__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14109__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14111){
var map__14112 = p__14111;
var map__14112__$1 = ((((!((map__14112 == null)))?((((map__14112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14112):map__14112);
var target = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
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

var seq__14118_14122 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__14119_14123 = null;
var count__14120_14124 = (0);
var i__14121_14125 = (0);
while(true){
if((i__14121_14125 < count__14120_14124)){
var lib_14126 = cljs.core._nth.call(null,chunk__14119_14123,i__14121_14125);
if(cljs.core.truth_((function (){var or__9408__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14126),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14126),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__9408__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14126),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14126),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14126),"');");

}
}

var G__14127 = seq__14118_14122;
var G__14128 = chunk__14119_14123;
var G__14129 = count__14120_14124;
var G__14130 = (i__14121_14125 + (1));
seq__14118_14122 = G__14127;
chunk__14119_14123 = G__14128;
count__14120_14124 = G__14129;
i__14121_14125 = G__14130;
continue;
} else {
var temp__4657__auto___14131 = cljs.core.seq.call(null,seq__14118_14122);
if(temp__4657__auto___14131){
var seq__14118_14132__$1 = temp__4657__auto___14131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14118_14132__$1)){
var c__10222__auto___14133 = cljs.core.chunk_first.call(null,seq__14118_14132__$1);
var G__14134 = cljs.core.chunk_rest.call(null,seq__14118_14132__$1);
var G__14135 = c__10222__auto___14133;
var G__14136 = cljs.core.count.call(null,c__10222__auto___14133);
var G__14137 = (0);
seq__14118_14122 = G__14134;
chunk__14119_14123 = G__14135;
count__14120_14124 = G__14136;
i__14121_14125 = G__14137;
continue;
} else {
var lib_14138 = cljs.core.first.call(null,seq__14118_14132__$1);
if(cljs.core.truth_((function (){var or__9408__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14138),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14138),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__9408__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14138),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14138),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14138),"');");

}
}

var G__14139 = cljs.core.next.call(null,seq__14118_14132__$1);
var G__14140 = null;
var G__14141 = (0);
var G__14142 = (0);
seq__14118_14122 = G__14139;
chunk__14119_14123 = G__14140;
count__14120_14124 = G__14141;
i__14121_14125 = G__14142;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__14143){
var map__14144 = p__14143;
var map__14144__$1 = ((((!((map__14144 == null)))?((((map__14144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14144):map__14144);
var name = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14146){
var map__14147 = p__14146;
var map__14147__$1 = ((((!((map__14147 == null)))?((((map__14147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14147):map__14147);
var name = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__14149){
var map__14150 = p__14149;
var map__14150__$1 = ((((!((map__14150 == null)))?((((map__14150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14150):map__14150);
var t = cljs.core.get.call(null,map__14150__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14150__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14150__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14150__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14150__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14152_14170 = cljs.core.seq.call(null,protocols);
var chunk__14153_14171 = null;
var count__14154_14172 = (0);
var i__14155_14173 = (0);
while(true){
if((i__14155_14173 < count__14154_14172)){
var protocol_14174 = cljs.core._nth.call(null,chunk__14153_14171,i__14155_14173);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14174)].join('')),"}");

var G__14175 = seq__14152_14170;
var G__14176 = chunk__14153_14171;
var G__14177 = count__14154_14172;
var G__14178 = (i__14155_14173 + (1));
seq__14152_14170 = G__14175;
chunk__14153_14171 = G__14176;
count__14154_14172 = G__14177;
i__14155_14173 = G__14178;
continue;
} else {
var temp__4657__auto___14179 = cljs.core.seq.call(null,seq__14152_14170);
if(temp__4657__auto___14179){
var seq__14152_14180__$1 = temp__4657__auto___14179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14152_14180__$1)){
var c__10222__auto___14181 = cljs.core.chunk_first.call(null,seq__14152_14180__$1);
var G__14182 = cljs.core.chunk_rest.call(null,seq__14152_14180__$1);
var G__14183 = c__10222__auto___14181;
var G__14184 = cljs.core.count.call(null,c__10222__auto___14181);
var G__14185 = (0);
seq__14152_14170 = G__14182;
chunk__14153_14171 = G__14183;
count__14154_14172 = G__14184;
i__14155_14173 = G__14185;
continue;
} else {
var protocol_14186 = cljs.core.first.call(null,seq__14152_14180__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14186)].join('')),"}");

var G__14187 = cljs.core.next.call(null,seq__14152_14180__$1);
var G__14188 = null;
var G__14189 = (0);
var G__14190 = (0);
seq__14152_14170 = G__14187;
chunk__14153_14171 = G__14188;
count__14154_14172 = G__14189;
i__14155_14173 = G__14190;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14156_14191 = cljs.core.seq.call(null,fields__$1);
var chunk__14157_14192 = null;
var count__14158_14193 = (0);
var i__14159_14194 = (0);
while(true){
if((i__14159_14194 < count__14158_14193)){
var fld_14195 = cljs.core._nth.call(null,chunk__14157_14192,i__14159_14194);
cljs.compiler.emitln.call(null,"this.",fld_14195," = ",fld_14195,";");

var G__14196 = seq__14156_14191;
var G__14197 = chunk__14157_14192;
var G__14198 = count__14158_14193;
var G__14199 = (i__14159_14194 + (1));
seq__14156_14191 = G__14196;
chunk__14157_14192 = G__14197;
count__14158_14193 = G__14198;
i__14159_14194 = G__14199;
continue;
} else {
var temp__4657__auto___14200 = cljs.core.seq.call(null,seq__14156_14191);
if(temp__4657__auto___14200){
var seq__14156_14201__$1 = temp__4657__auto___14200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14156_14201__$1)){
var c__10222__auto___14202 = cljs.core.chunk_first.call(null,seq__14156_14201__$1);
var G__14203 = cljs.core.chunk_rest.call(null,seq__14156_14201__$1);
var G__14204 = c__10222__auto___14202;
var G__14205 = cljs.core.count.call(null,c__10222__auto___14202);
var G__14206 = (0);
seq__14156_14191 = G__14203;
chunk__14157_14192 = G__14204;
count__14158_14193 = G__14205;
i__14159_14194 = G__14206;
continue;
} else {
var fld_14207 = cljs.core.first.call(null,seq__14156_14201__$1);
cljs.compiler.emitln.call(null,"this.",fld_14207," = ",fld_14207,";");

var G__14208 = cljs.core.next.call(null,seq__14156_14201__$1);
var G__14209 = null;
var G__14210 = (0);
var G__14211 = (0);
seq__14156_14191 = G__14208;
chunk__14157_14192 = G__14209;
count__14158_14193 = G__14210;
i__14159_14194 = G__14211;
continue;
}
} else {
}
}
break;
}

var seq__14160_14212 = cljs.core.seq.call(null,pmasks);
var chunk__14161_14213 = null;
var count__14162_14214 = (0);
var i__14163_14215 = (0);
while(true){
if((i__14163_14215 < count__14162_14214)){
var vec__14164_14216 = cljs.core._nth.call(null,chunk__14161_14213,i__14163_14215);
var pno_14217 = cljs.core.nth.call(null,vec__14164_14216,(0),null);
var pmask_14218 = cljs.core.nth.call(null,vec__14164_14216,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14217,"$ = ",pmask_14218,";");

var G__14219 = seq__14160_14212;
var G__14220 = chunk__14161_14213;
var G__14221 = count__14162_14214;
var G__14222 = (i__14163_14215 + (1));
seq__14160_14212 = G__14219;
chunk__14161_14213 = G__14220;
count__14162_14214 = G__14221;
i__14163_14215 = G__14222;
continue;
} else {
var temp__4657__auto___14223 = cljs.core.seq.call(null,seq__14160_14212);
if(temp__4657__auto___14223){
var seq__14160_14224__$1 = temp__4657__auto___14223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14160_14224__$1)){
var c__10222__auto___14225 = cljs.core.chunk_first.call(null,seq__14160_14224__$1);
var G__14226 = cljs.core.chunk_rest.call(null,seq__14160_14224__$1);
var G__14227 = c__10222__auto___14225;
var G__14228 = cljs.core.count.call(null,c__10222__auto___14225);
var G__14229 = (0);
seq__14160_14212 = G__14226;
chunk__14161_14213 = G__14227;
count__14162_14214 = G__14228;
i__14163_14215 = G__14229;
continue;
} else {
var vec__14167_14230 = cljs.core.first.call(null,seq__14160_14224__$1);
var pno_14231 = cljs.core.nth.call(null,vec__14167_14230,(0),null);
var pmask_14232 = cljs.core.nth.call(null,vec__14167_14230,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14231,"$ = ",pmask_14232,";");

var G__14233 = cljs.core.next.call(null,seq__14160_14224__$1);
var G__14234 = null;
var G__14235 = (0);
var G__14236 = (0);
seq__14160_14212 = G__14233;
chunk__14161_14213 = G__14234;
count__14162_14214 = G__14235;
i__14163_14215 = G__14236;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__14237){
var map__14238 = p__14237;
var map__14238__$1 = ((((!((map__14238 == null)))?((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14238):map__14238);
var t = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14240_14258 = cljs.core.seq.call(null,protocols);
var chunk__14241_14259 = null;
var count__14242_14260 = (0);
var i__14243_14261 = (0);
while(true){
if((i__14243_14261 < count__14242_14260)){
var protocol_14262 = cljs.core._nth.call(null,chunk__14241_14259,i__14243_14261);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14262)].join('')),"}");

var G__14263 = seq__14240_14258;
var G__14264 = chunk__14241_14259;
var G__14265 = count__14242_14260;
var G__14266 = (i__14243_14261 + (1));
seq__14240_14258 = G__14263;
chunk__14241_14259 = G__14264;
count__14242_14260 = G__14265;
i__14243_14261 = G__14266;
continue;
} else {
var temp__4657__auto___14267 = cljs.core.seq.call(null,seq__14240_14258);
if(temp__4657__auto___14267){
var seq__14240_14268__$1 = temp__4657__auto___14267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14240_14268__$1)){
var c__10222__auto___14269 = cljs.core.chunk_first.call(null,seq__14240_14268__$1);
var G__14270 = cljs.core.chunk_rest.call(null,seq__14240_14268__$1);
var G__14271 = c__10222__auto___14269;
var G__14272 = cljs.core.count.call(null,c__10222__auto___14269);
var G__14273 = (0);
seq__14240_14258 = G__14270;
chunk__14241_14259 = G__14271;
count__14242_14260 = G__14272;
i__14243_14261 = G__14273;
continue;
} else {
var protocol_14274 = cljs.core.first.call(null,seq__14240_14268__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_14274)].join('')),"}");

var G__14275 = cljs.core.next.call(null,seq__14240_14268__$1);
var G__14276 = null;
var G__14277 = (0);
var G__14278 = (0);
seq__14240_14258 = G__14275;
chunk__14241_14259 = G__14276;
count__14242_14260 = G__14277;
i__14243_14261 = G__14278;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14244_14279 = cljs.core.seq.call(null,fields__$1);
var chunk__14245_14280 = null;
var count__14246_14281 = (0);
var i__14247_14282 = (0);
while(true){
if((i__14247_14282 < count__14246_14281)){
var fld_14283 = cljs.core._nth.call(null,chunk__14245_14280,i__14247_14282);
cljs.compiler.emitln.call(null,"this.",fld_14283," = ",fld_14283,";");

var G__14284 = seq__14244_14279;
var G__14285 = chunk__14245_14280;
var G__14286 = count__14246_14281;
var G__14287 = (i__14247_14282 + (1));
seq__14244_14279 = G__14284;
chunk__14245_14280 = G__14285;
count__14246_14281 = G__14286;
i__14247_14282 = G__14287;
continue;
} else {
var temp__4657__auto___14288 = cljs.core.seq.call(null,seq__14244_14279);
if(temp__4657__auto___14288){
var seq__14244_14289__$1 = temp__4657__auto___14288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14244_14289__$1)){
var c__10222__auto___14290 = cljs.core.chunk_first.call(null,seq__14244_14289__$1);
var G__14291 = cljs.core.chunk_rest.call(null,seq__14244_14289__$1);
var G__14292 = c__10222__auto___14290;
var G__14293 = cljs.core.count.call(null,c__10222__auto___14290);
var G__14294 = (0);
seq__14244_14279 = G__14291;
chunk__14245_14280 = G__14292;
count__14246_14281 = G__14293;
i__14247_14282 = G__14294;
continue;
} else {
var fld_14295 = cljs.core.first.call(null,seq__14244_14289__$1);
cljs.compiler.emitln.call(null,"this.",fld_14295," = ",fld_14295,";");

var G__14296 = cljs.core.next.call(null,seq__14244_14289__$1);
var G__14297 = null;
var G__14298 = (0);
var G__14299 = (0);
seq__14244_14279 = G__14296;
chunk__14245_14280 = G__14297;
count__14246_14281 = G__14298;
i__14247_14282 = G__14299;
continue;
}
} else {
}
}
break;
}

var seq__14248_14300 = cljs.core.seq.call(null,pmasks);
var chunk__14249_14301 = null;
var count__14250_14302 = (0);
var i__14251_14303 = (0);
while(true){
if((i__14251_14303 < count__14250_14302)){
var vec__14252_14304 = cljs.core._nth.call(null,chunk__14249_14301,i__14251_14303);
var pno_14305 = cljs.core.nth.call(null,vec__14252_14304,(0),null);
var pmask_14306 = cljs.core.nth.call(null,vec__14252_14304,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14305,"$ = ",pmask_14306,";");

var G__14307 = seq__14248_14300;
var G__14308 = chunk__14249_14301;
var G__14309 = count__14250_14302;
var G__14310 = (i__14251_14303 + (1));
seq__14248_14300 = G__14307;
chunk__14249_14301 = G__14308;
count__14250_14302 = G__14309;
i__14251_14303 = G__14310;
continue;
} else {
var temp__4657__auto___14311 = cljs.core.seq.call(null,seq__14248_14300);
if(temp__4657__auto___14311){
var seq__14248_14312__$1 = temp__4657__auto___14311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14248_14312__$1)){
var c__10222__auto___14313 = cljs.core.chunk_first.call(null,seq__14248_14312__$1);
var G__14314 = cljs.core.chunk_rest.call(null,seq__14248_14312__$1);
var G__14315 = c__10222__auto___14313;
var G__14316 = cljs.core.count.call(null,c__10222__auto___14313);
var G__14317 = (0);
seq__14248_14300 = G__14314;
chunk__14249_14301 = G__14315;
count__14250_14302 = G__14316;
i__14251_14303 = G__14317;
continue;
} else {
var vec__14255_14318 = cljs.core.first.call(null,seq__14248_14312__$1);
var pno_14319 = cljs.core.nth.call(null,vec__14255_14318,(0),null);
var pmask_14320 = cljs.core.nth.call(null,vec__14255_14318,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14319,"$ = ",pmask_14320,";");

var G__14321 = cljs.core.next.call(null,seq__14248_14312__$1);
var G__14322 = null;
var G__14323 = (0);
var G__14324 = (0);
seq__14248_14300 = G__14321;
chunk__14249_14301 = G__14322;
count__14250_14302 = G__14323;
i__14251_14303 = G__14324;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__14325){
var map__14326 = p__14325;
var map__14326__$1 = ((((!((map__14326 == null)))?((((map__14326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14326):map__14326);
var target = cljs.core.get.call(null,map__14326__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__14326__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__14326__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__14326__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__14328){
var map__14329 = p__14328;
var map__14329__$1 = ((((!((map__14329 == null)))?((((map__14329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14329):map__14329);
var op = cljs.core.get.call(null,map__14329__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__14329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__14329__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__14329__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__14329__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__9396__auto__ = code;
if(cljs.core.truth_(and__9396__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__9396__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13213__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13213__auto__))){
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
var seq__14343 = cljs.core.seq.call(null,table);
var chunk__14344 = null;
var count__14345 = (0);
var i__14346 = (0);
while(true){
if((i__14346 < count__14345)){
var vec__14347 = cljs.core._nth.call(null,chunk__14344,i__14346);
var sym = cljs.core.nth.call(null,vec__14347,(0),null);
var value = cljs.core.nth.call(null,vec__14347,(1),null);
var ns_14353 = cljs.core.namespace.call(null,sym);
var name_14354 = cljs.core.name.call(null,sym);
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

var G__14355 = seq__14343;
var G__14356 = chunk__14344;
var G__14357 = count__14345;
var G__14358 = (i__14346 + (1));
seq__14343 = G__14355;
chunk__14344 = G__14356;
count__14345 = G__14357;
i__14346 = G__14358;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14343);
if(temp__4657__auto__){
var seq__14343__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14343__$1)){
var c__10222__auto__ = cljs.core.chunk_first.call(null,seq__14343__$1);
var G__14359 = cljs.core.chunk_rest.call(null,seq__14343__$1);
var G__14360 = c__10222__auto__;
var G__14361 = cljs.core.count.call(null,c__10222__auto__);
var G__14362 = (0);
seq__14343 = G__14359;
chunk__14344 = G__14360;
count__14345 = G__14361;
i__14346 = G__14362;
continue;
} else {
var vec__14350 = cljs.core.first.call(null,seq__14343__$1);
var sym = cljs.core.nth.call(null,vec__14350,(0),null);
var value = cljs.core.nth.call(null,vec__14350,(1),null);
var ns_14363 = cljs.core.namespace.call(null,sym);
var name_14364 = cljs.core.name.call(null,sym);
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

var G__14365 = cljs.core.next.call(null,seq__14343__$1);
var G__14366 = null;
var G__14367 = (0);
var G__14368 = (0);
seq__14343 = G__14365;
chunk__14344 = G__14366;
count__14345 = G__14367;
i__14346 = G__14368;
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