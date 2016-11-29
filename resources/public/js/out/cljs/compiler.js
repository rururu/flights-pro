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
var map__12300 = s;
var map__12300__$1 = ((((!((map__12300 == null)))?((((map__12300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12300):map__12300);
var name = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12303 = info;
var map__12304 = G__12303;
var map__12304__$1 = ((((!((map__12304 == null)))?((((map__12304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12304):map__12304);
var shadow = cljs.core.get.call(null,map__12304__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12303__$1 = G__12303;
while(true){
var d__$2 = d__$1;
var map__12306 = G__12303__$1;
var map__12306__$1 = ((((!((map__12306 == null)))?((((map__12306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12306):map__12306);
var shadow__$1 = cljs.core.get.call(null,map__12306__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12308 = (d__$2 + (1));
var G__12309 = shadow__$1;
d__$1 = G__12308;
G__12303__$1 = G__12309;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12310){
var map__12315 = p__12310;
var map__12315__$1 = ((((!((map__12315 == null)))?((((map__12315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12315):map__12315);
var name_var = map__12315__$1;
var name = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12315__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__12317 = info;
var map__12317__$1 = ((((!((map__12317 == null)))?((((map__12317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12317):map__12317);
var ns = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args12319 = [];
var len__9613__auto___12322 = arguments.length;
var i__9614__auto___12323 = (0);
while(true){
if((i__9614__auto___12323 < len__9613__auto___12322)){
args12319.push((arguments[i__9614__auto___12323]));

var G__12324 = (i__9614__auto___12323 + (1));
i__9614__auto___12323 = G__12324;
continue;
} else {
}
break;
}

var G__12321 = args12319.length;
switch (G__12321) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12319.length)].join('')));

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
var G__12327 = cp;
switch (G__12327) {
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
var seq__12333_12337 = cljs.core.seq.call(null,s);
var chunk__12334_12338 = null;
var count__12335_12339 = (0);
var i__12336_12340 = (0);
while(true){
if((i__12336_12340 < count__12335_12339)){
var c_12341 = cljs.core._nth.call(null,chunk__12334_12338,i__12336_12340);
sb.append(cljs.compiler.escape_char.call(null,c_12341));

var G__12342 = seq__12333_12337;
var G__12343 = chunk__12334_12338;
var G__12344 = count__12335_12339;
var G__12345 = (i__12336_12340 + (1));
seq__12333_12337 = G__12342;
chunk__12334_12338 = G__12343;
count__12335_12339 = G__12344;
i__12336_12340 = G__12345;
continue;
} else {
var temp__4657__auto___12346 = cljs.core.seq.call(null,seq__12333_12337);
if(temp__4657__auto___12346){
var seq__12333_12347__$1 = temp__4657__auto___12346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12333_12347__$1)){
var c__9319__auto___12348 = cljs.core.chunk_first.call(null,seq__12333_12347__$1);
var G__12349 = cljs.core.chunk_rest.call(null,seq__12333_12347__$1);
var G__12350 = c__9319__auto___12348;
var G__12351 = cljs.core.count.call(null,c__9319__auto___12348);
var G__12352 = (0);
seq__12333_12337 = G__12349;
chunk__12334_12338 = G__12350;
count__12335_12339 = G__12351;
i__12336_12340 = G__12352;
continue;
} else {
var c_12353 = cljs.core.first.call(null,seq__12333_12347__$1);
sb.append(cljs.compiler.escape_char.call(null,c_12353));

var G__12354 = cljs.core.next.call(null,seq__12333_12347__$1);
var G__12355 = null;
var G__12356 = (0);
var G__12357 = (0);
seq__12333_12337 = G__12354;
chunk__12334_12338 = G__12355;
count__12335_12339 = G__12356;
i__12336_12340 = G__12357;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__9433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9437__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9437__auto__,method_table__9433__auto__,prefer_table__9434__auto__,method_cache__9435__auto__,cached_hierarchy__9436__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__10402__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__10402__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__12363_12368 = ast;
var map__12363_12369__$1 = ((((!((map__12363_12368 == null)))?((((map__12363_12368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12363_12368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12363_12368):map__12363_12368);
var env_12370 = cljs.core.get.call(null,map__12363_12369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12370))){
var map__12365_12371 = env_12370;
var map__12365_12372__$1 = ((((!((map__12365_12371 == null)))?((((map__12365_12371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12365_12371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12365_12371):map__12365_12371);
var line_12373 = cljs.core.get.call(null,map__12365_12372__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12374 = cljs.core.get.call(null,map__12365_12372__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__12365_12371,map__12365_12372__$1,line_12373,column_12374,map__12363_12368,map__12363_12369__$1,env_12370,val__10402__auto__){
return (function (m){
var minfo = (function (){var G__12367 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__12367,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__12367;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12373 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__12365_12371,map__12365_12372__$1,line_12373,column_12374,map__12363_12368,map__12363_12369__$1,env_12370,val__10402__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12374)?(column_12374 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__12365_12371,map__12365_12372__$1,line_12373,column_12374,map__12363_12368,map__12363_12369__$1,env_12370,val__10402__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__12365_12371,map__12365_12372__$1,line_12373,column_12374,map__12363_12368,map__12363_12369__$1,env_12370,val__10402__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__12365_12371,map__12365_12372__$1,line_12373,column_12374,map__12363_12368,map__12363_12369__$1,env_12370,val__10402__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__12365_12371,map__12365_12372__$1,line_12373,column_12374,map__12363_12368,map__12363_12369__$1,env_12370,val__10402__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__10402__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9620__auto__ = [];
var len__9613__auto___12381 = arguments.length;
var i__9614__auto___12382 = (0);
while(true){
if((i__9614__auto___12382 < len__9613__auto___12381)){
args__9620__auto__.push((arguments[i__9614__auto___12382]));

var G__12383 = (i__9614__auto___12382 + (1));
i__9614__auto___12382 = G__12383;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((0) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9621__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__12377_12384 = cljs.core.seq.call(null,xs);
var chunk__12378_12385 = null;
var count__12379_12386 = (0);
var i__12380_12387 = (0);
while(true){
if((i__12380_12387 < count__12379_12386)){
var x_12388 = cljs.core._nth.call(null,chunk__12378_12385,i__12380_12387);
if((x_12388 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12388)){
cljs.compiler.emit.call(null,x_12388);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12388)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12388);
} else {
if(goog.isFunction(x_12388)){
x_12388.call(null);
} else {
var s_12389 = cljs.core.print_str.call(null,x_12388);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12377_12384,chunk__12378_12385,count__12379_12386,i__12380_12387,s_12389,x_12388){
return (function (p1__12375_SHARP_){
return (p1__12375_SHARP_ + cljs.core.count.call(null,s_12389));
});})(seq__12377_12384,chunk__12378_12385,count__12379_12386,i__12380_12387,s_12389,x_12388))
);
}

cljs.core.print.call(null,s_12389);

}
}
}
}

var G__12390 = seq__12377_12384;
var G__12391 = chunk__12378_12385;
var G__12392 = count__12379_12386;
var G__12393 = (i__12380_12387 + (1));
seq__12377_12384 = G__12390;
chunk__12378_12385 = G__12391;
count__12379_12386 = G__12392;
i__12380_12387 = G__12393;
continue;
} else {
var temp__4657__auto___12394 = cljs.core.seq.call(null,seq__12377_12384);
if(temp__4657__auto___12394){
var seq__12377_12395__$1 = temp__4657__auto___12394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12377_12395__$1)){
var c__9319__auto___12396 = cljs.core.chunk_first.call(null,seq__12377_12395__$1);
var G__12397 = cljs.core.chunk_rest.call(null,seq__12377_12395__$1);
var G__12398 = c__9319__auto___12396;
var G__12399 = cljs.core.count.call(null,c__9319__auto___12396);
var G__12400 = (0);
seq__12377_12384 = G__12397;
chunk__12378_12385 = G__12398;
count__12379_12386 = G__12399;
i__12380_12387 = G__12400;
continue;
} else {
var x_12401 = cljs.core.first.call(null,seq__12377_12395__$1);
if((x_12401 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12401)){
cljs.compiler.emit.call(null,x_12401);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12401)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12401);
} else {
if(goog.isFunction(x_12401)){
x_12401.call(null);
} else {
var s_12402 = cljs.core.print_str.call(null,x_12401);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12377_12384,chunk__12378_12385,count__12379_12386,i__12380_12387,s_12402,x_12401,seq__12377_12395__$1,temp__4657__auto___12394){
return (function (p1__12375_SHARP_){
return (p1__12375_SHARP_ + cljs.core.count.call(null,s_12402));
});})(seq__12377_12384,chunk__12378_12385,count__12379_12386,i__12380_12387,s_12402,x_12401,seq__12377_12395__$1,temp__4657__auto___12394))
);
}

cljs.core.print.call(null,s_12402);

}
}
}
}

var G__12403 = cljs.core.next.call(null,seq__12377_12395__$1);
var G__12404 = null;
var G__12405 = (0);
var G__12406 = (0);
seq__12377_12384 = G__12403;
chunk__12378_12385 = G__12404;
count__12379_12386 = G__12405;
i__12380_12387 = G__12406;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq12376){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12376));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9620__auto__ = [];
var len__9613__auto___12411 = arguments.length;
var i__9614__auto___12412 = (0);
while(true){
if((i__9614__auto___12412 < len__9613__auto___12411)){
args__9620__auto__.push((arguments[i__9614__auto___12412]));

var G__12413 = (i__9614__auto___12412 + (1));
i__9614__auto___12412 = G__12413;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((0) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9621__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__12408){
var map__12409 = p__12408;
var map__12409__$1 = ((((!((map__12409 == null)))?((((map__12409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12409):map__12409);
var m = map__12409__$1;
var gen_line = cljs.core.get.call(null,map__12409__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12407){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12407));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9494__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12416_12418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12417_12419 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12416_12418,_STAR_print_fn_STAR_12417_12419,sb__9494__auto__){
return (function (x__9495__auto__){
return sb__9494__auto__.append(x__9495__auto__);
});})(_STAR_print_newline_STAR_12416_12418,_STAR_print_fn_STAR_12417_12419,sb__9494__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12417_12419;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12416_12418;
}
return [cljs.core.str(sb__9494__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9437__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9437__auto__,method_table__9433__auto__,prefer_table__9434__auto__,method_cache__9435__auto__,cached_hierarchy__9436__auto__));
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
var vec__12420 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__12420,(0),null);
var flags = cljs.core.nth.call(null,vec__12420,(1),null);
var pattern = cljs.core.nth.call(null,vec__12420,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__12424){
var map__12425 = p__12424;
var map__12425__$1 = ((((!((map__12425 == null)))?((((map__12425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12425):map__12425);
var arg = map__12425__$1;
var info = cljs.core.get.call(null,map__12425__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12425__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__8505__auto__ = js_module_name;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__12427 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12427);
} else {
return G__12427;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__12428){
var map__12429 = p__12428;
var map__12429__$1 = ((((!((map__12429 == null)))?((((map__12429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12429):map__12429);
var arg = map__12429__$1;
var env = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12431 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12431__$1 = ((((!((map__12431 == null)))?((((map__12431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12431):map__12431);
var name = cljs.core.get.call(null,map__12431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__12433){
var map__12434 = p__12433;
var map__12434__$1 = ((((!((map__12434 == null)))?((((map__12434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12434):map__12434);
var expr = cljs.core.get.call(null,map__12434__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12434__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12434__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__12436_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12436_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12437){
var map__12438 = p__12437;
var map__12438__$1 = ((((!((map__12438 == null)))?((((map__12438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12438):map__12438);
var env = cljs.core.get.call(null,map__12438__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12438__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12438__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__12440){
var map__12441 = p__12440;
var map__12441__$1 = ((((!((map__12441 == null)))?((((map__12441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12441):map__12441);
var items = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12443){
var map__12444 = p__12443;
var map__12444__$1 = ((((!((map__12444 == null)))?((((map__12444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12444):map__12444);
var items = cljs.core.get.call(null,map__12444__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12444__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_12446 = cljs.core.count.call(null,items);
if((cnt_12446 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_12446,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__12447_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12447_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12448){
var map__12449 = p__12448;
var map__12449__$1 = ((((!((map__12449 == null)))?((((map__12449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12449):map__12449);
var items = cljs.core.get.call(null,map__12449__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12449__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__12451){
var map__12452 = p__12451;
var map__12452__$1 = ((((!((map__12452 == null)))?((((map__12452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12452):map__12452);
var items = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___12470 = cljs.core.seq.call(null,items);
if(temp__4657__auto___12470){
var items_12471__$1 = temp__4657__auto___12470;
var vec__12454_12472 = items_12471__$1;
var seq__12455_12473 = cljs.core.seq.call(null,vec__12454_12472);
var first__12456_12474 = cljs.core.first.call(null,seq__12455_12473);
var seq__12455_12475__$1 = cljs.core.next.call(null,seq__12455_12473);
var vec__12457_12476 = first__12456_12474;
var k_12477 = cljs.core.nth.call(null,vec__12457_12476,(0),null);
var v_12478 = cljs.core.nth.call(null,vec__12457_12476,(1),null);
var r_12479 = seq__12455_12475__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12477),"\": ",v_12478);

var seq__12460_12480 = cljs.core.seq.call(null,r_12479);
var chunk__12461_12481 = null;
var count__12462_12482 = (0);
var i__12463_12483 = (0);
while(true){
if((i__12463_12483 < count__12462_12482)){
var vec__12464_12484 = cljs.core._nth.call(null,chunk__12461_12481,i__12463_12483);
var k_12485__$1 = cljs.core.nth.call(null,vec__12464_12484,(0),null);
var v_12486__$1 = cljs.core.nth.call(null,vec__12464_12484,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12485__$1),"\": ",v_12486__$1);

var G__12487 = seq__12460_12480;
var G__12488 = chunk__12461_12481;
var G__12489 = count__12462_12482;
var G__12490 = (i__12463_12483 + (1));
seq__12460_12480 = G__12487;
chunk__12461_12481 = G__12488;
count__12462_12482 = G__12489;
i__12463_12483 = G__12490;
continue;
} else {
var temp__4657__auto___12491__$1 = cljs.core.seq.call(null,seq__12460_12480);
if(temp__4657__auto___12491__$1){
var seq__12460_12492__$1 = temp__4657__auto___12491__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12460_12492__$1)){
var c__9319__auto___12493 = cljs.core.chunk_first.call(null,seq__12460_12492__$1);
var G__12494 = cljs.core.chunk_rest.call(null,seq__12460_12492__$1);
var G__12495 = c__9319__auto___12493;
var G__12496 = cljs.core.count.call(null,c__9319__auto___12493);
var G__12497 = (0);
seq__12460_12480 = G__12494;
chunk__12461_12481 = G__12495;
count__12462_12482 = G__12496;
i__12463_12483 = G__12497;
continue;
} else {
var vec__12467_12498 = cljs.core.first.call(null,seq__12460_12492__$1);
var k_12499__$1 = cljs.core.nth.call(null,vec__12467_12498,(0),null);
var v_12500__$1 = cljs.core.nth.call(null,vec__12467_12498,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12499__$1),"\": ",v_12500__$1);

var G__12501 = cljs.core.next.call(null,seq__12460_12492__$1);
var G__12502 = null;
var G__12503 = (0);
var G__12504 = (0);
seq__12460_12480 = G__12501;
chunk__12461_12481 = G__12502;
count__12462_12482 = G__12503;
i__12463_12483 = G__12504;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__12505){
var map__12506 = p__12505;
var map__12506__$1 = ((((!((map__12506 == null)))?((((map__12506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12506):map__12506);
var form = cljs.core.get.call(null,map__12506__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12506__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__12508){
var map__12511 = p__12508;
var map__12511__$1 = ((((!((map__12511 == null)))?((((map__12511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12511):map__12511);
var op = cljs.core.get.call(null,map__12511__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12511__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__8493__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8493__auto__){
var and__8493__auto____$1 = form;
if(cljs.core.truth_(and__8493__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__12513){
var map__12516 = p__12513;
var map__12516__$1 = ((((!((map__12516 == null)))?((((map__12516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12516):map__12516);
var op = cljs.core.get.call(null,map__12516__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12516__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8505__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12518){
var map__12519 = p__12518;
var map__12519__$1 = ((((!((map__12519 == null)))?((((map__12519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12519):map__12519);
var test = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8505__auto__ = unchecked;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__12521){
var map__12522 = p__12521;
var map__12522__$1 = ((((!((map__12522 == null)))?((((map__12522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12522):map__12522);
var v = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12522__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12524_12542 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__12525_12543 = null;
var count__12526_12544 = (0);
var i__12527_12545 = (0);
while(true){
if((i__12527_12545 < count__12526_12544)){
var vec__12528_12546 = cljs.core._nth.call(null,chunk__12525_12543,i__12527_12545);
var ts_12547 = cljs.core.nth.call(null,vec__12528_12546,(0),null);
var then_12548 = cljs.core.nth.call(null,vec__12528_12546,(1),null);
var seq__12531_12549 = cljs.core.seq.call(null,ts_12547);
var chunk__12532_12550 = null;
var count__12533_12551 = (0);
var i__12534_12552 = (0);
while(true){
if((i__12534_12552 < count__12533_12551)){
var test_12553 = cljs.core._nth.call(null,chunk__12532_12550,i__12534_12552);
cljs.compiler.emitln.call(null,"case ",test_12553,":");

var G__12554 = seq__12531_12549;
var G__12555 = chunk__12532_12550;
var G__12556 = count__12533_12551;
var G__12557 = (i__12534_12552 + (1));
seq__12531_12549 = G__12554;
chunk__12532_12550 = G__12555;
count__12533_12551 = G__12556;
i__12534_12552 = G__12557;
continue;
} else {
var temp__4657__auto___12558 = cljs.core.seq.call(null,seq__12531_12549);
if(temp__4657__auto___12558){
var seq__12531_12559__$1 = temp__4657__auto___12558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12531_12559__$1)){
var c__9319__auto___12560 = cljs.core.chunk_first.call(null,seq__12531_12559__$1);
var G__12561 = cljs.core.chunk_rest.call(null,seq__12531_12559__$1);
var G__12562 = c__9319__auto___12560;
var G__12563 = cljs.core.count.call(null,c__9319__auto___12560);
var G__12564 = (0);
seq__12531_12549 = G__12561;
chunk__12532_12550 = G__12562;
count__12533_12551 = G__12563;
i__12534_12552 = G__12564;
continue;
} else {
var test_12565 = cljs.core.first.call(null,seq__12531_12559__$1);
cljs.compiler.emitln.call(null,"case ",test_12565,":");

var G__12566 = cljs.core.next.call(null,seq__12531_12559__$1);
var G__12567 = null;
var G__12568 = (0);
var G__12569 = (0);
seq__12531_12549 = G__12566;
chunk__12532_12550 = G__12567;
count__12533_12551 = G__12568;
i__12534_12552 = G__12569;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12548);
} else {
cljs.compiler.emitln.call(null,then_12548);
}

cljs.compiler.emitln.call(null,"break;");

var G__12570 = seq__12524_12542;
var G__12571 = chunk__12525_12543;
var G__12572 = count__12526_12544;
var G__12573 = (i__12527_12545 + (1));
seq__12524_12542 = G__12570;
chunk__12525_12543 = G__12571;
count__12526_12544 = G__12572;
i__12527_12545 = G__12573;
continue;
} else {
var temp__4657__auto___12574 = cljs.core.seq.call(null,seq__12524_12542);
if(temp__4657__auto___12574){
var seq__12524_12575__$1 = temp__4657__auto___12574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12524_12575__$1)){
var c__9319__auto___12576 = cljs.core.chunk_first.call(null,seq__12524_12575__$1);
var G__12577 = cljs.core.chunk_rest.call(null,seq__12524_12575__$1);
var G__12578 = c__9319__auto___12576;
var G__12579 = cljs.core.count.call(null,c__9319__auto___12576);
var G__12580 = (0);
seq__12524_12542 = G__12577;
chunk__12525_12543 = G__12578;
count__12526_12544 = G__12579;
i__12527_12545 = G__12580;
continue;
} else {
var vec__12535_12581 = cljs.core.first.call(null,seq__12524_12575__$1);
var ts_12582 = cljs.core.nth.call(null,vec__12535_12581,(0),null);
var then_12583 = cljs.core.nth.call(null,vec__12535_12581,(1),null);
var seq__12538_12584 = cljs.core.seq.call(null,ts_12582);
var chunk__12539_12585 = null;
var count__12540_12586 = (0);
var i__12541_12587 = (0);
while(true){
if((i__12541_12587 < count__12540_12586)){
var test_12588 = cljs.core._nth.call(null,chunk__12539_12585,i__12541_12587);
cljs.compiler.emitln.call(null,"case ",test_12588,":");

var G__12589 = seq__12538_12584;
var G__12590 = chunk__12539_12585;
var G__12591 = count__12540_12586;
var G__12592 = (i__12541_12587 + (1));
seq__12538_12584 = G__12589;
chunk__12539_12585 = G__12590;
count__12540_12586 = G__12591;
i__12541_12587 = G__12592;
continue;
} else {
var temp__4657__auto___12593__$1 = cljs.core.seq.call(null,seq__12538_12584);
if(temp__4657__auto___12593__$1){
var seq__12538_12594__$1 = temp__4657__auto___12593__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12538_12594__$1)){
var c__9319__auto___12595 = cljs.core.chunk_first.call(null,seq__12538_12594__$1);
var G__12596 = cljs.core.chunk_rest.call(null,seq__12538_12594__$1);
var G__12597 = c__9319__auto___12595;
var G__12598 = cljs.core.count.call(null,c__9319__auto___12595);
var G__12599 = (0);
seq__12538_12584 = G__12596;
chunk__12539_12585 = G__12597;
count__12540_12586 = G__12598;
i__12541_12587 = G__12599;
continue;
} else {
var test_12600 = cljs.core.first.call(null,seq__12538_12594__$1);
cljs.compiler.emitln.call(null,"case ",test_12600,":");

var G__12601 = cljs.core.next.call(null,seq__12538_12594__$1);
var G__12602 = null;
var G__12603 = (0);
var G__12604 = (0);
seq__12538_12584 = G__12601;
chunk__12539_12585 = G__12602;
count__12540_12586 = G__12603;
i__12541_12587 = G__12604;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12583);
} else {
cljs.compiler.emitln.call(null,then_12583);
}

cljs.compiler.emitln.call(null,"break;");

var G__12605 = cljs.core.next.call(null,seq__12524_12575__$1);
var G__12606 = null;
var G__12607 = (0);
var G__12608 = (0);
seq__12524_12542 = G__12605;
chunk__12525_12543 = G__12606;
count__12526_12544 = G__12607;
i__12527_12545 = G__12608;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12609){
var map__12610 = p__12609;
var map__12610__$1 = ((((!((map__12610 == null)))?((((map__12610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12610):map__12610);
var throw$ = cljs.core.get.call(null,map__12610__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__12610__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12617 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12617,(0),null);
var rstr = cljs.core.nth.call(null,vec__12617,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__12617,fstr,rstr,ret_t,axstr){
return (function (p1__12612_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12612_SHARP_);
});})(idx,vec__12617,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12620 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__12620),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__12620;
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
return (function (p1__12621_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12621_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12628 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12629 = cljs.core.seq.call(null,vec__12628);
var first__12630 = cljs.core.first.call(null,seq__12629);
var seq__12629__$1 = cljs.core.next.call(null,seq__12629);
var p = first__12630;
var first__12630__$1 = cljs.core.first.call(null,seq__12629__$1);
var seq__12629__$2 = cljs.core.next.call(null,seq__12629__$1);
var ts = first__12630__$1;
var first__12630__$2 = cljs.core.first.call(null,seq__12629__$2);
var seq__12629__$3 = cljs.core.next.call(null,seq__12629__$2);
var n = first__12630__$2;
var xs = seq__12629__$3;
if(cljs.core.truth_((function (){var and__8493__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8493__auto__){
var and__8493__auto____$1 = ts;
if(cljs.core.truth_(and__8493__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__12631 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12632 = cljs.core.seq.call(null,vec__12631);
var first__12633 = cljs.core.first.call(null,seq__12632);
var seq__12632__$1 = cljs.core.next.call(null,seq__12632);
var p = first__12633;
var first__12633__$1 = cljs.core.first.call(null,seq__12632__$1);
var seq__12632__$2 = cljs.core.next.call(null,seq__12632__$1);
var ts = first__12633__$1;
var xs = seq__12632__$2;
if(cljs.core.truth_((function (){var and__8493__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8493__auto__){
var and__8493__auto____$1 = ts;
if(cljs.core.truth_(and__8493__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
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
var args12635 = [];
var len__9613__auto___12670 = arguments.length;
var i__9614__auto___12671 = (0);
while(true){
if((i__9614__auto___12671 < len__9613__auto___12670)){
args12635.push((arguments[i__9614__auto___12671]));

var G__12672 = (i__9614__auto___12671 + (1));
i__9614__auto___12671 = G__12672;
continue;
} else {
}
break;
}

var G__12637 = args12635.length;
switch (G__12637) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12635.length)].join('')));

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
var vec__12659 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__12634_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12634_SHARP_);
} else {
return p1__12634_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__12660 = cljs.core.seq.call(null,vec__12659);
var first__12661 = cljs.core.first.call(null,seq__12660);
var seq__12660__$1 = cljs.core.next.call(null,seq__12660);
var x = first__12661;
var ys = seq__12660__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__12662 = cljs.core.seq.call(null,ys);
var chunk__12663 = null;
var count__12664 = (0);
var i__12665 = (0);
while(true){
if((i__12665 < count__12664)){
var next_line = cljs.core._nth.call(null,chunk__12663,i__12665);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12674 = seq__12662;
var G__12675 = chunk__12663;
var G__12676 = count__12664;
var G__12677 = (i__12665 + (1));
seq__12662 = G__12674;
chunk__12663 = G__12675;
count__12664 = G__12676;
i__12665 = G__12677;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12662);
if(temp__4657__auto__){
var seq__12662__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12662__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__12662__$1);
var G__12678 = cljs.core.chunk_rest.call(null,seq__12662__$1);
var G__12679 = c__9319__auto__;
var G__12680 = cljs.core.count.call(null,c__9319__auto__);
var G__12681 = (0);
seq__12662 = G__12678;
chunk__12663 = G__12679;
count__12664 = G__12680;
i__12665 = G__12681;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__12662__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12682 = cljs.core.next.call(null,seq__12662__$1);
var G__12683 = null;
var G__12684 = (0);
var G__12685 = (0);
seq__12662 = G__12682;
chunk__12663 = G__12683;
count__12664 = G__12684;
i__12665 = G__12685;
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

var seq__12666_12686 = cljs.core.seq.call(null,docs__$2);
var chunk__12667_12687 = null;
var count__12668_12688 = (0);
var i__12669_12689 = (0);
while(true){
if((i__12669_12689 < count__12668_12688)){
var e_12690 = cljs.core._nth.call(null,chunk__12667_12687,i__12669_12689);
if(cljs.core.truth_(e_12690)){
print_comment_lines.call(null,e_12690);
} else {
}

var G__12691 = seq__12666_12686;
var G__12692 = chunk__12667_12687;
var G__12693 = count__12668_12688;
var G__12694 = (i__12669_12689 + (1));
seq__12666_12686 = G__12691;
chunk__12667_12687 = G__12692;
count__12668_12688 = G__12693;
i__12669_12689 = G__12694;
continue;
} else {
var temp__4657__auto___12695 = cljs.core.seq.call(null,seq__12666_12686);
if(temp__4657__auto___12695){
var seq__12666_12696__$1 = temp__4657__auto___12695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12666_12696__$1)){
var c__9319__auto___12697 = cljs.core.chunk_first.call(null,seq__12666_12696__$1);
var G__12698 = cljs.core.chunk_rest.call(null,seq__12666_12696__$1);
var G__12699 = c__9319__auto___12697;
var G__12700 = cljs.core.count.call(null,c__9319__auto___12697);
var G__12701 = (0);
seq__12666_12686 = G__12698;
chunk__12667_12687 = G__12699;
count__12668_12688 = G__12700;
i__12669_12689 = G__12701;
continue;
} else {
var e_12702 = cljs.core.first.call(null,seq__12666_12696__$1);
if(cljs.core.truth_(e_12702)){
print_comment_lines.call(null,e_12702);
} else {
}

var G__12703 = cljs.core.next.call(null,seq__12666_12696__$1);
var G__12704 = null;
var G__12705 = (0);
var G__12706 = (0);
seq__12666_12686 = G__12703;
chunk__12667_12687 = G__12704;
count__12668_12688 = G__12705;
i__12669_12689 = G__12706;
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
var and__8493__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__12708_SHARP_){
return goog.string.startsWith(p1__12708_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8493__auto__)){
var and__8493__auto____$1 = opts;
if(cljs.core.truth_(and__8493__auto____$1)){
var and__8493__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8493__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8493__auto____$2;
}
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12709){
var map__12710 = p__12709;
var map__12710__$1 = ((((!((map__12710 == null)))?((((map__12710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12710):map__12710);
var name = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8505__auto__ = init;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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

if(cljs.core.truth_((function (){var and__8493__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__8493__auto__)){
return test;
} else {
return and__8493__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12712){
var map__12733 = p__12712;
var map__12733__$1 = ((((!((map__12733 == null)))?((((map__12733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12733):map__12733);
var name = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__12735_12753 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__12736_12754 = null;
var count__12737_12755 = (0);
var i__12738_12756 = (0);
while(true){
if((i__12738_12756 < count__12737_12755)){
var vec__12739_12757 = cljs.core._nth.call(null,chunk__12736_12754,i__12738_12756);
var i_12758 = cljs.core.nth.call(null,vec__12739_12757,(0),null);
var param_12759 = cljs.core.nth.call(null,vec__12739_12757,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12759);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__12760 = seq__12735_12753;
var G__12761 = chunk__12736_12754;
var G__12762 = count__12737_12755;
var G__12763 = (i__12738_12756 + (1));
seq__12735_12753 = G__12760;
chunk__12736_12754 = G__12761;
count__12737_12755 = G__12762;
i__12738_12756 = G__12763;
continue;
} else {
var temp__4657__auto___12764 = cljs.core.seq.call(null,seq__12735_12753);
if(temp__4657__auto___12764){
var seq__12735_12765__$1 = temp__4657__auto___12764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12735_12765__$1)){
var c__9319__auto___12766 = cljs.core.chunk_first.call(null,seq__12735_12765__$1);
var G__12767 = cljs.core.chunk_rest.call(null,seq__12735_12765__$1);
var G__12768 = c__9319__auto___12766;
var G__12769 = cljs.core.count.call(null,c__9319__auto___12766);
var G__12770 = (0);
seq__12735_12753 = G__12767;
chunk__12736_12754 = G__12768;
count__12737_12755 = G__12769;
i__12738_12756 = G__12770;
continue;
} else {
var vec__12742_12771 = cljs.core.first.call(null,seq__12735_12765__$1);
var i_12772 = cljs.core.nth.call(null,vec__12742_12771,(0),null);
var param_12773 = cljs.core.nth.call(null,vec__12742_12771,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12773);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__12774 = cljs.core.next.call(null,seq__12735_12765__$1);
var G__12775 = null;
var G__12776 = (0);
var G__12777 = (0);
seq__12735_12753 = G__12774;
chunk__12736_12754 = G__12775;
count__12737_12755 = G__12776;
i__12738_12756 = G__12777;
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

var seq__12745_12778 = cljs.core.seq.call(null,params);
var chunk__12746_12779 = null;
var count__12747_12780 = (0);
var i__12748_12781 = (0);
while(true){
if((i__12748_12781 < count__12747_12780)){
var param_12782 = cljs.core._nth.call(null,chunk__12746_12779,i__12748_12781);
cljs.compiler.emit.call(null,param_12782);

if(cljs.core._EQ_.call(null,param_12782,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12783 = seq__12745_12778;
var G__12784 = chunk__12746_12779;
var G__12785 = count__12747_12780;
var G__12786 = (i__12748_12781 + (1));
seq__12745_12778 = G__12783;
chunk__12746_12779 = G__12784;
count__12747_12780 = G__12785;
i__12748_12781 = G__12786;
continue;
} else {
var temp__4657__auto___12787 = cljs.core.seq.call(null,seq__12745_12778);
if(temp__4657__auto___12787){
var seq__12745_12788__$1 = temp__4657__auto___12787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12745_12788__$1)){
var c__9319__auto___12789 = cljs.core.chunk_first.call(null,seq__12745_12788__$1);
var G__12790 = cljs.core.chunk_rest.call(null,seq__12745_12788__$1);
var G__12791 = c__9319__auto___12789;
var G__12792 = cljs.core.count.call(null,c__9319__auto___12789);
var G__12793 = (0);
seq__12745_12778 = G__12790;
chunk__12746_12779 = G__12791;
count__12747_12780 = G__12792;
i__12748_12781 = G__12793;
continue;
} else {
var param_12794 = cljs.core.first.call(null,seq__12745_12788__$1);
cljs.compiler.emit.call(null,param_12794);

if(cljs.core._EQ_.call(null,param_12794,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12795 = cljs.core.next.call(null,seq__12745_12788__$1);
var G__12796 = null;
var G__12797 = (0);
var G__12798 = (0);
seq__12745_12778 = G__12795;
chunk__12746_12779 = G__12796;
count__12747_12780 = G__12797;
i__12748_12781 = G__12798;
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

var seq__12749_12799 = cljs.core.seq.call(null,params);
var chunk__12750_12800 = null;
var count__12751_12801 = (0);
var i__12752_12802 = (0);
while(true){
if((i__12752_12802 < count__12751_12801)){
var param_12803 = cljs.core._nth.call(null,chunk__12750_12800,i__12752_12802);
cljs.compiler.emit.call(null,param_12803);

if(cljs.core._EQ_.call(null,param_12803,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12804 = seq__12749_12799;
var G__12805 = chunk__12750_12800;
var G__12806 = count__12751_12801;
var G__12807 = (i__12752_12802 + (1));
seq__12749_12799 = G__12804;
chunk__12750_12800 = G__12805;
count__12751_12801 = G__12806;
i__12752_12802 = G__12807;
continue;
} else {
var temp__4657__auto___12808 = cljs.core.seq.call(null,seq__12749_12799);
if(temp__4657__auto___12808){
var seq__12749_12809__$1 = temp__4657__auto___12808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12749_12809__$1)){
var c__9319__auto___12810 = cljs.core.chunk_first.call(null,seq__12749_12809__$1);
var G__12811 = cljs.core.chunk_rest.call(null,seq__12749_12809__$1);
var G__12812 = c__9319__auto___12810;
var G__12813 = cljs.core.count.call(null,c__9319__auto___12810);
var G__12814 = (0);
seq__12749_12799 = G__12811;
chunk__12750_12800 = G__12812;
count__12751_12801 = G__12813;
i__12752_12802 = G__12814;
continue;
} else {
var param_12815 = cljs.core.first.call(null,seq__12749_12809__$1);
cljs.compiler.emit.call(null,param_12815);

if(cljs.core._EQ_.call(null,param_12815,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12816 = cljs.core.next.call(null,seq__12749_12809__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12749_12799 = G__12816;
chunk__12750_12800 = G__12817;
count__12751_12801 = G__12818;
i__12752_12802 = G__12819;
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
var seq__12824 = cljs.core.seq.call(null,params);
var chunk__12825 = null;
var count__12826 = (0);
var i__12827 = (0);
while(true){
if((i__12827 < count__12826)){
var param = cljs.core._nth.call(null,chunk__12825,i__12827);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12828 = seq__12824;
var G__12829 = chunk__12825;
var G__12830 = count__12826;
var G__12831 = (i__12827 + (1));
seq__12824 = G__12828;
chunk__12825 = G__12829;
count__12826 = G__12830;
i__12827 = G__12831;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12824);
if(temp__4657__auto__){
var seq__12824__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12824__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__12824__$1);
var G__12832 = cljs.core.chunk_rest.call(null,seq__12824__$1);
var G__12833 = c__9319__auto__;
var G__12834 = cljs.core.count.call(null,c__9319__auto__);
var G__12835 = (0);
seq__12824 = G__12832;
chunk__12825 = G__12833;
count__12826 = G__12834;
i__12827 = G__12835;
continue;
} else {
var param = cljs.core.first.call(null,seq__12824__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12836 = cljs.core.next.call(null,seq__12824__$1);
var G__12837 = null;
var G__12838 = (0);
var G__12839 = (0);
seq__12824 = G__12836;
chunk__12825 = G__12837;
count__12826 = G__12838;
i__12827 = G__12839;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12840){
var map__12843 = p__12840;
var map__12843__$1 = ((((!((map__12843 == null)))?((((map__12843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12843):map__12843);
var type = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12845){
var map__12856 = p__12845;
var map__12856__$1 = ((((!((map__12856 == null)))?((((map__12856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12856):map__12856);
var f = map__12856__$1;
var type = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_12866__$1 = (function (){var or__8505__auto__ = name;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12867 = cljs.compiler.munge.call(null,name_12866__$1);
var delegate_name_12868 = [cljs.core.str(mname_12867),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_12868," = function (");

var seq__12858_12869 = cljs.core.seq.call(null,params);
var chunk__12859_12870 = null;
var count__12860_12871 = (0);
var i__12861_12872 = (0);
while(true){
if((i__12861_12872 < count__12860_12871)){
var param_12873 = cljs.core._nth.call(null,chunk__12859_12870,i__12861_12872);
cljs.compiler.emit.call(null,param_12873);

if(cljs.core._EQ_.call(null,param_12873,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12874 = seq__12858_12869;
var G__12875 = chunk__12859_12870;
var G__12876 = count__12860_12871;
var G__12877 = (i__12861_12872 + (1));
seq__12858_12869 = G__12874;
chunk__12859_12870 = G__12875;
count__12860_12871 = G__12876;
i__12861_12872 = G__12877;
continue;
} else {
var temp__4657__auto___12878 = cljs.core.seq.call(null,seq__12858_12869);
if(temp__4657__auto___12878){
var seq__12858_12879__$1 = temp__4657__auto___12878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12858_12879__$1)){
var c__9319__auto___12880 = cljs.core.chunk_first.call(null,seq__12858_12879__$1);
var G__12881 = cljs.core.chunk_rest.call(null,seq__12858_12879__$1);
var G__12882 = c__9319__auto___12880;
var G__12883 = cljs.core.count.call(null,c__9319__auto___12880);
var G__12884 = (0);
seq__12858_12869 = G__12881;
chunk__12859_12870 = G__12882;
count__12860_12871 = G__12883;
i__12861_12872 = G__12884;
continue;
} else {
var param_12885 = cljs.core.first.call(null,seq__12858_12879__$1);
cljs.compiler.emit.call(null,param_12885);

if(cljs.core._EQ_.call(null,param_12885,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12886 = cljs.core.next.call(null,seq__12858_12879__$1);
var G__12887 = null;
var G__12888 = (0);
var G__12889 = (0);
seq__12858_12869 = G__12886;
chunk__12859_12870 = G__12887;
count__12860_12871 = G__12888;
i__12861_12872 = G__12889;
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

cljs.compiler.emitln.call(null,"var ",mname_12867," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_12890 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_12890,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_12868,".call(this,");

var seq__12862_12891 = cljs.core.seq.call(null,params);
var chunk__12863_12892 = null;
var count__12864_12893 = (0);
var i__12865_12894 = (0);
while(true){
if((i__12865_12894 < count__12864_12893)){
var param_12895 = cljs.core._nth.call(null,chunk__12863_12892,i__12865_12894);
cljs.compiler.emit.call(null,param_12895);

if(cljs.core._EQ_.call(null,param_12895,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12896 = seq__12862_12891;
var G__12897 = chunk__12863_12892;
var G__12898 = count__12864_12893;
var G__12899 = (i__12865_12894 + (1));
seq__12862_12891 = G__12896;
chunk__12863_12892 = G__12897;
count__12864_12893 = G__12898;
i__12865_12894 = G__12899;
continue;
} else {
var temp__4657__auto___12900 = cljs.core.seq.call(null,seq__12862_12891);
if(temp__4657__auto___12900){
var seq__12862_12901__$1 = temp__4657__auto___12900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12862_12901__$1)){
var c__9319__auto___12902 = cljs.core.chunk_first.call(null,seq__12862_12901__$1);
var G__12903 = cljs.core.chunk_rest.call(null,seq__12862_12901__$1);
var G__12904 = c__9319__auto___12902;
var G__12905 = cljs.core.count.call(null,c__9319__auto___12902);
var G__12906 = (0);
seq__12862_12891 = G__12903;
chunk__12863_12892 = G__12904;
count__12864_12893 = G__12905;
i__12865_12894 = G__12906;
continue;
} else {
var param_12907 = cljs.core.first.call(null,seq__12862_12901__$1);
cljs.compiler.emit.call(null,param_12907);

if(cljs.core._EQ_.call(null,param_12907,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12908 = cljs.core.next.call(null,seq__12862_12901__$1);
var G__12909 = null;
var G__12910 = (0);
var G__12911 = (0);
seq__12862_12891 = G__12908;
chunk__12863_12892 = G__12909;
count__12864_12893 = G__12910;
i__12865_12894 = G__12911;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_12867,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_12867,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_12866__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_12867,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_12868,";");

cljs.compiler.emitln.call(null,"return ",mname_12867,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12915){
var map__12916 = p__12915;
var map__12916__$1 = ((((!((map__12916 == null)))?((((map__12916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12916):map__12916);
var name = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__12916__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12912_SHARP_){
var and__8493__auto__ = p1__12912_SHARP_;
if(cljs.core.truth_(and__8493__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12912_SHARP_));
} else {
return and__8493__auto__;
}
});})(map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_12951__$1 = (function (){var or__8505__auto__ = name;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12952 = cljs.compiler.munge.call(null,name_12951__$1);
var maxparams_12953 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12954 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_12951__$1,mname_12952,maxparams_12953,loop_locals,map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_12952),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_12951__$1,mname_12952,maxparams_12953,loop_locals,map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_12955 = cljs.core.sort_by.call(null,((function (name_12951__$1,mname_12952,maxparams_12953,mmap_12954,loop_locals,map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12913_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12913_SHARP_)));
});})(name_12951__$1,mname_12952,maxparams_12953,mmap_12954,loop_locals,map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_12954));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12952," = null;");

var seq__12918_12956 = cljs.core.seq.call(null,ms_12955);
var chunk__12919_12957 = null;
var count__12920_12958 = (0);
var i__12921_12959 = (0);
while(true){
if((i__12921_12959 < count__12920_12958)){
var vec__12922_12960 = cljs.core._nth.call(null,chunk__12919_12957,i__12921_12959);
var n_12961 = cljs.core.nth.call(null,vec__12922_12960,(0),null);
var meth_12962 = cljs.core.nth.call(null,vec__12922_12960,(1),null);
cljs.compiler.emits.call(null,"var ",n_12961," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12962))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12962);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12962);
}

cljs.compiler.emitln.call(null,";");

var G__12963 = seq__12918_12956;
var G__12964 = chunk__12919_12957;
var G__12965 = count__12920_12958;
var G__12966 = (i__12921_12959 + (1));
seq__12918_12956 = G__12963;
chunk__12919_12957 = G__12964;
count__12920_12958 = G__12965;
i__12921_12959 = G__12966;
continue;
} else {
var temp__4657__auto___12967 = cljs.core.seq.call(null,seq__12918_12956);
if(temp__4657__auto___12967){
var seq__12918_12968__$1 = temp__4657__auto___12967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12918_12968__$1)){
var c__9319__auto___12969 = cljs.core.chunk_first.call(null,seq__12918_12968__$1);
var G__12970 = cljs.core.chunk_rest.call(null,seq__12918_12968__$1);
var G__12971 = c__9319__auto___12969;
var G__12972 = cljs.core.count.call(null,c__9319__auto___12969);
var G__12973 = (0);
seq__12918_12956 = G__12970;
chunk__12919_12957 = G__12971;
count__12920_12958 = G__12972;
i__12921_12959 = G__12973;
continue;
} else {
var vec__12925_12974 = cljs.core.first.call(null,seq__12918_12968__$1);
var n_12975 = cljs.core.nth.call(null,vec__12925_12974,(0),null);
var meth_12976 = cljs.core.nth.call(null,vec__12925_12974,(1),null);
cljs.compiler.emits.call(null,"var ",n_12975," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12976))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12976);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12976);
}

cljs.compiler.emitln.call(null,";");

var G__12977 = cljs.core.next.call(null,seq__12918_12968__$1);
var G__12978 = null;
var G__12979 = (0);
var G__12980 = (0);
seq__12918_12956 = G__12977;
chunk__12919_12957 = G__12978;
count__12920_12958 = G__12979;
i__12921_12959 = G__12980;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12952," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12953),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12953)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12953));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__12928_12981 = cljs.core.seq.call(null,ms_12955);
var chunk__12929_12982 = null;
var count__12930_12983 = (0);
var i__12931_12984 = (0);
while(true){
if((i__12931_12984 < count__12930_12983)){
var vec__12932_12985 = cljs.core._nth.call(null,chunk__12929_12982,i__12931_12984);
var n_12986 = cljs.core.nth.call(null,vec__12932_12985,(0),null);
var meth_12987 = cljs.core.nth.call(null,vec__12932_12985,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12987))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12988 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12988," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12989 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12988," = new cljs.core.IndexedSeq(",a_12989,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12986,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12953)),(((cljs.core.count.call(null,maxparams_12953) > (1)))?", ":null),restarg_12988,");");
} else {
var pcnt_12990 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12987));
cljs.compiler.emitln.call(null,"case ",pcnt_12990,":");

cljs.compiler.emitln.call(null,"return ",n_12986,".call(this",(((pcnt_12990 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12990,maxparams_12953));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),",")),");");
}

var G__12991 = seq__12928_12981;
var G__12992 = chunk__12929_12982;
var G__12993 = count__12930_12983;
var G__12994 = (i__12931_12984 + (1));
seq__12928_12981 = G__12991;
chunk__12929_12982 = G__12992;
count__12930_12983 = G__12993;
i__12931_12984 = G__12994;
continue;
} else {
var temp__4657__auto___12995 = cljs.core.seq.call(null,seq__12928_12981);
if(temp__4657__auto___12995){
var seq__12928_12996__$1 = temp__4657__auto___12995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12928_12996__$1)){
var c__9319__auto___12997 = cljs.core.chunk_first.call(null,seq__12928_12996__$1);
var G__12998 = cljs.core.chunk_rest.call(null,seq__12928_12996__$1);
var G__12999 = c__9319__auto___12997;
var G__13000 = cljs.core.count.call(null,c__9319__auto___12997);
var G__13001 = (0);
seq__12928_12981 = G__12998;
chunk__12929_12982 = G__12999;
count__12930_12983 = G__13000;
i__12931_12984 = G__13001;
continue;
} else {
var vec__12935_13002 = cljs.core.first.call(null,seq__12928_12996__$1);
var n_13003 = cljs.core.nth.call(null,vec__12935_13002,(0),null);
var meth_13004 = cljs.core.nth.call(null,vec__12935_13002,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13004))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13005 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13005," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13006 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13005," = new cljs.core.IndexedSeq(",a_13006,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13003,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12953)),(((cljs.core.count.call(null,maxparams_12953) > (1)))?", ":null),restarg_13005,");");
} else {
var pcnt_13007 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13004));
cljs.compiler.emitln.call(null,"case ",pcnt_13007,":");

cljs.compiler.emitln.call(null,"return ",n_13003,".call(this",(((pcnt_13007 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13007,maxparams_12953));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),",")),");");
}

var G__13008 = cljs.core.next.call(null,seq__12928_12996__$1);
var G__13009 = null;
var G__13010 = (0);
var G__13011 = (0);
seq__12928_12981 = G__13008;
chunk__12929_12982 = G__13009;
count__12930_12983 = G__13010;
i__12931_12984 = G__13011;
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
cljs.compiler.emitln.call(null,mname_12952,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12952,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_12951__$1,mname_12952,maxparams_12953,mmap_12954,ms_12955,loop_locals,map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12914_SHARP_){
var vec__12938 = p1__12914_SHARP_;
var n = cljs.core.nth.call(null,vec__12938,(0),null);
var m = cljs.core.nth.call(null,vec__12938,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_12951__$1,mname_12952,maxparams_12953,mmap_12954,ms_12955,loop_locals,map__12916,map__12916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_12955),".cljs$lang$applyTo;");
} else {
}

var seq__12941_13012 = cljs.core.seq.call(null,ms_12955);
var chunk__12942_13013 = null;
var count__12943_13014 = (0);
var i__12944_13015 = (0);
while(true){
if((i__12944_13015 < count__12943_13014)){
var vec__12945_13016 = cljs.core._nth.call(null,chunk__12942_13013,i__12944_13015);
var n_13017 = cljs.core.nth.call(null,vec__12945_13016,(0),null);
var meth_13018 = cljs.core.nth.call(null,vec__12945_13016,(1),null);
var c_13019 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13018));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13018))){
cljs.compiler.emitln.call(null,mname_12952,".cljs$core$IFn$_invoke$arity$variadic = ",n_13017,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12952,".cljs$core$IFn$_invoke$arity$",c_13019," = ",n_13017,";");
}

var G__13020 = seq__12941_13012;
var G__13021 = chunk__12942_13013;
var G__13022 = count__12943_13014;
var G__13023 = (i__12944_13015 + (1));
seq__12941_13012 = G__13020;
chunk__12942_13013 = G__13021;
count__12943_13014 = G__13022;
i__12944_13015 = G__13023;
continue;
} else {
var temp__4657__auto___13024 = cljs.core.seq.call(null,seq__12941_13012);
if(temp__4657__auto___13024){
var seq__12941_13025__$1 = temp__4657__auto___13024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12941_13025__$1)){
var c__9319__auto___13026 = cljs.core.chunk_first.call(null,seq__12941_13025__$1);
var G__13027 = cljs.core.chunk_rest.call(null,seq__12941_13025__$1);
var G__13028 = c__9319__auto___13026;
var G__13029 = cljs.core.count.call(null,c__9319__auto___13026);
var G__13030 = (0);
seq__12941_13012 = G__13027;
chunk__12942_13013 = G__13028;
count__12943_13014 = G__13029;
i__12944_13015 = G__13030;
continue;
} else {
var vec__12948_13031 = cljs.core.first.call(null,seq__12941_13025__$1);
var n_13032 = cljs.core.nth.call(null,vec__12948_13031,(0),null);
var meth_13033 = cljs.core.nth.call(null,vec__12948_13031,(1),null);
var c_13034 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13033));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13033))){
cljs.compiler.emitln.call(null,mname_12952,".cljs$core$IFn$_invoke$arity$variadic = ",n_13032,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12952,".cljs$core$IFn$_invoke$arity$",c_13034," = ",n_13032,";");
}

var G__13035 = cljs.core.next.call(null,seq__12941_13025__$1);
var G__13036 = null;
var G__13037 = (0);
var G__13038 = (0);
seq__12941_13012 = G__13035;
chunk__12942_13013 = G__13036;
count__12943_13014 = G__13037;
i__12944_13015 = G__13038;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12952,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13039){
var map__13040 = p__13039;
var map__13040__$1 = ((((!((map__13040 == null)))?((((map__13040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13040):map__13040);
var statements = cljs.core.get.call(null,map__13040__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13040__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8493__auto__ = statements;
if(cljs.core.truth_(and__8493__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8493__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13042_13046 = cljs.core.seq.call(null,statements);
var chunk__13043_13047 = null;
var count__13044_13048 = (0);
var i__13045_13049 = (0);
while(true){
if((i__13045_13049 < count__13044_13048)){
var s_13050 = cljs.core._nth.call(null,chunk__13043_13047,i__13045_13049);
cljs.compiler.emitln.call(null,s_13050);

var G__13051 = seq__13042_13046;
var G__13052 = chunk__13043_13047;
var G__13053 = count__13044_13048;
var G__13054 = (i__13045_13049 + (1));
seq__13042_13046 = G__13051;
chunk__13043_13047 = G__13052;
count__13044_13048 = G__13053;
i__13045_13049 = G__13054;
continue;
} else {
var temp__4657__auto___13055 = cljs.core.seq.call(null,seq__13042_13046);
if(temp__4657__auto___13055){
var seq__13042_13056__$1 = temp__4657__auto___13055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13042_13056__$1)){
var c__9319__auto___13057 = cljs.core.chunk_first.call(null,seq__13042_13056__$1);
var G__13058 = cljs.core.chunk_rest.call(null,seq__13042_13056__$1);
var G__13059 = c__9319__auto___13057;
var G__13060 = cljs.core.count.call(null,c__9319__auto___13057);
var G__13061 = (0);
seq__13042_13046 = G__13058;
chunk__13043_13047 = G__13059;
count__13044_13048 = G__13060;
i__13045_13049 = G__13061;
continue;
} else {
var s_13062 = cljs.core.first.call(null,seq__13042_13056__$1);
cljs.compiler.emitln.call(null,s_13062);

var G__13063 = cljs.core.next.call(null,seq__13042_13056__$1);
var G__13064 = null;
var G__13065 = (0);
var G__13066 = (0);
seq__13042_13046 = G__13063;
chunk__13043_13047 = G__13064;
count__13044_13048 = G__13065;
i__13045_13049 = G__13066;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8493__auto__ = statements;
if(cljs.core.truth_(and__8493__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8493__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13067){
var map__13068 = p__13067;
var map__13068__$1 = ((((!((map__13068 == null)))?((((map__13068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13068):map__13068);
var env = cljs.core.get.call(null,map__13068__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13068__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13068__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13068__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8505__auto__ = name;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13070,is_loop){
var map__13082 = p__13070;
var map__13082__$1 = ((((!((map__13082 == null)))?((((map__13082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13082):map__13082);
var bindings = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_13084_13093 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_13084_13093,context,map__13082,map__13082__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_13084_13093,context,map__13082,map__13082__$1,bindings,expr,env))
,bindings):null));

try{var seq__13085_13094 = cljs.core.seq.call(null,bindings);
var chunk__13086_13095 = null;
var count__13087_13096 = (0);
var i__13088_13097 = (0);
while(true){
if((i__13088_13097 < count__13087_13096)){
var map__13089_13098 = cljs.core._nth.call(null,chunk__13086_13095,i__13088_13097);
var map__13089_13099__$1 = ((((!((map__13089_13098 == null)))?((((map__13089_13098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13089_13098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13089_13098):map__13089_13098);
var binding_13100 = map__13089_13099__$1;
var init_13101 = cljs.core.get.call(null,map__13089_13099__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13100);

cljs.compiler.emitln.call(null," = ",init_13101,";");

var G__13102 = seq__13085_13094;
var G__13103 = chunk__13086_13095;
var G__13104 = count__13087_13096;
var G__13105 = (i__13088_13097 + (1));
seq__13085_13094 = G__13102;
chunk__13086_13095 = G__13103;
count__13087_13096 = G__13104;
i__13088_13097 = G__13105;
continue;
} else {
var temp__4657__auto___13106 = cljs.core.seq.call(null,seq__13085_13094);
if(temp__4657__auto___13106){
var seq__13085_13107__$1 = temp__4657__auto___13106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13085_13107__$1)){
var c__9319__auto___13108 = cljs.core.chunk_first.call(null,seq__13085_13107__$1);
var G__13109 = cljs.core.chunk_rest.call(null,seq__13085_13107__$1);
var G__13110 = c__9319__auto___13108;
var G__13111 = cljs.core.count.call(null,c__9319__auto___13108);
var G__13112 = (0);
seq__13085_13094 = G__13109;
chunk__13086_13095 = G__13110;
count__13087_13096 = G__13111;
i__13088_13097 = G__13112;
continue;
} else {
var map__13091_13113 = cljs.core.first.call(null,seq__13085_13107__$1);
var map__13091_13114__$1 = ((((!((map__13091_13113 == null)))?((((map__13091_13113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13091_13113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13091_13113):map__13091_13113);
var binding_13115 = map__13091_13114__$1;
var init_13116 = cljs.core.get.call(null,map__13091_13114__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13115);

cljs.compiler.emitln.call(null," = ",init_13116,";");

var G__13117 = cljs.core.next.call(null,seq__13085_13107__$1);
var G__13118 = null;
var G__13119 = (0);
var G__13120 = (0);
seq__13085_13094 = G__13117;
chunk__13086_13095 = G__13118;
count__13087_13096 = G__13119;
i__13088_13097 = G__13120;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13084_13093;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13121){
var map__13122 = p__13121;
var map__13122__$1 = ((((!((map__13122 == null)))?((((map__13122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13122):map__13122);
var frame = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9423__auto___13124 = cljs.core.count.call(null,exprs);
var i_13125 = (0);
while(true){
if((i_13125 < n__9423__auto___13124)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13125)," = ",exprs.call(null,i_13125),";");

var G__13126 = (i_13125 + (1));
i_13125 = G__13126;
continue;
} else {
}
break;
}

var n__9423__auto___13127 = cljs.core.count.call(null,exprs);
var i_13128 = (0);
while(true){
if((i_13128 < n__9423__auto___13127)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13128))," = ",temps.call(null,i_13128),";");

var G__13129 = (i_13128 + (1));
i_13128 = G__13129;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13130){
var map__13131 = p__13130;
var map__13131__$1 = ((((!((map__13131 == null)))?((((map__13131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13131):map__13131);
var bindings = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13133_13141 = cljs.core.seq.call(null,bindings);
var chunk__13134_13142 = null;
var count__13135_13143 = (0);
var i__13136_13144 = (0);
while(true){
if((i__13136_13144 < count__13135_13143)){
var map__13137_13145 = cljs.core._nth.call(null,chunk__13134_13142,i__13136_13144);
var map__13137_13146__$1 = ((((!((map__13137_13145 == null)))?((((map__13137_13145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13137_13145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13137_13145):map__13137_13145);
var binding_13147 = map__13137_13146__$1;
var init_13148 = cljs.core.get.call(null,map__13137_13146__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13147)," = ",init_13148,";");

var G__13149 = seq__13133_13141;
var G__13150 = chunk__13134_13142;
var G__13151 = count__13135_13143;
var G__13152 = (i__13136_13144 + (1));
seq__13133_13141 = G__13149;
chunk__13134_13142 = G__13150;
count__13135_13143 = G__13151;
i__13136_13144 = G__13152;
continue;
} else {
var temp__4657__auto___13153 = cljs.core.seq.call(null,seq__13133_13141);
if(temp__4657__auto___13153){
var seq__13133_13154__$1 = temp__4657__auto___13153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13133_13154__$1)){
var c__9319__auto___13155 = cljs.core.chunk_first.call(null,seq__13133_13154__$1);
var G__13156 = cljs.core.chunk_rest.call(null,seq__13133_13154__$1);
var G__13157 = c__9319__auto___13155;
var G__13158 = cljs.core.count.call(null,c__9319__auto___13155);
var G__13159 = (0);
seq__13133_13141 = G__13156;
chunk__13134_13142 = G__13157;
count__13135_13143 = G__13158;
i__13136_13144 = G__13159;
continue;
} else {
var map__13139_13160 = cljs.core.first.call(null,seq__13133_13154__$1);
var map__13139_13161__$1 = ((((!((map__13139_13160 == null)))?((((map__13139_13160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13139_13160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13139_13160):map__13139_13160);
var binding_13162 = map__13139_13161__$1;
var init_13163 = cljs.core.get.call(null,map__13139_13161__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13162)," = ",init_13163,";");

var G__13164 = cljs.core.next.call(null,seq__13133_13154__$1);
var G__13165 = null;
var G__13166 = (0);
var G__13167 = (0);
seq__13133_13141 = G__13164;
chunk__13134_13142 = G__13165;
count__13135_13143 = G__13166;
i__13136_13144 = G__13167;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13170){
var map__13171 = p__13170;
var map__13171__$1 = ((((!((map__13171 == null)))?((((map__13171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13171):map__13171);
var expr = map__13171__$1;
var f = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8493__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8493__auto__)){
var and__8493__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8493__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8493__auto__ = protocol;
if(cljs.core.truth_(and__8493__auto__)){
var and__8493__auto____$1 = tag;
if(cljs.core.truth_(and__8493__auto____$1)){
var or__8505__auto__ = (function (){var and__8493__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8493__auto____$2)){
var and__8493__auto____$3 = protocol;
if(cljs.core.truth_(and__8493__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8493__auto____$3;
}
} else {
return and__8493__auto____$2;
}
})();
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
var and__8493__auto____$2 = (function (){var or__8505__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__8505__auto____$1)){
return or__8505__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8493__auto____$2)){
var or__8505__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8505__auto____$1){
return or__8505__auto____$1;
} else {
var and__8493__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8493__auto____$3){
var and__8493__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8493__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8493__auto____$4;
}
} else {
return and__8493__auto____$3;
}
}
} else {
return and__8493__auto____$2;
}
}
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8505__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8505__auto__){
return or__8505__auto__;
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
var vec__13173 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8493__auto__)){
return (arity > mfa);
} else {
return and__8493__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env){
return (function (p1__13168_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13168_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env){
return (function (p1__13169_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13169_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13171,map__13171__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13173,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13173,(1),null);
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13176 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13176,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13177 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13177,args)),(((mfa_13177 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13177,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8505__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
var or__8505__auto____$1 = js_QMARK_;
if(or__8505__auto____$1){
return or__8505__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8493__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__8493__auto__;
}
})())){
var fprop_13178 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_13178," ? ",f__$1,fprop_13178,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13179){
var map__13180 = p__13179;
var map__13180__$1 = ((((!((map__13180 == null)))?((((map__13180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13180):map__13180);
var ctor = cljs.core.get.call(null,map__13180__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__13180__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13180__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13182){
var map__13183 = p__13182;
var map__13183__$1 = ((((!((map__13183 == null)))?((((map__13183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13183):map__13183);
var target = cljs.core.get.call(null,map__13183__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13183__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
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

var seq__13189_13193 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__13190_13194 = null;
var count__13191_13195 = (0);
var i__13192_13196 = (0);
while(true){
if((i__13192_13196 < count__13191_13195)){
var lib_13197 = cljs.core._nth.call(null,chunk__13190_13194,i__13192_13196);
if(cljs.core.truth_((function (){var or__8505__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13197),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13197),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8505__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13197),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13197),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13197),"');");

}
}

var G__13198 = seq__13189_13193;
var G__13199 = chunk__13190_13194;
var G__13200 = count__13191_13195;
var G__13201 = (i__13192_13196 + (1));
seq__13189_13193 = G__13198;
chunk__13190_13194 = G__13199;
count__13191_13195 = G__13200;
i__13192_13196 = G__13201;
continue;
} else {
var temp__4657__auto___13202 = cljs.core.seq.call(null,seq__13189_13193);
if(temp__4657__auto___13202){
var seq__13189_13203__$1 = temp__4657__auto___13202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13189_13203__$1)){
var c__9319__auto___13204 = cljs.core.chunk_first.call(null,seq__13189_13203__$1);
var G__13205 = cljs.core.chunk_rest.call(null,seq__13189_13203__$1);
var G__13206 = c__9319__auto___13204;
var G__13207 = cljs.core.count.call(null,c__9319__auto___13204);
var G__13208 = (0);
seq__13189_13193 = G__13205;
chunk__13190_13194 = G__13206;
count__13191_13195 = G__13207;
i__13192_13196 = G__13208;
continue;
} else {
var lib_13209 = cljs.core.first.call(null,seq__13189_13203__$1);
if(cljs.core.truth_((function (){var or__8505__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13209),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13209),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8505__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13209),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13209),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13209),"');");

}
}

var G__13210 = cljs.core.next.call(null,seq__13189_13203__$1);
var G__13211 = null;
var G__13212 = (0);
var G__13213 = (0);
seq__13189_13193 = G__13210;
chunk__13190_13194 = G__13211;
count__13191_13195 = G__13212;
i__13192_13196 = G__13213;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13214){
var map__13215 = p__13214;
var map__13215__$1 = ((((!((map__13215 == null)))?((((map__13215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13215):map__13215);
var name = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13217){
var map__13218 = p__13217;
var map__13218__$1 = ((((!((map__13218 == null)))?((((map__13218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13218):map__13218);
var name = cljs.core.get.call(null,map__13218__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13218__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13218__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13218__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13218__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13218__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__13220){
var map__13221 = p__13220;
var map__13221__$1 = ((((!((map__13221 == null)))?((((map__13221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13221):map__13221);
var t = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13223_13241 = cljs.core.seq.call(null,protocols);
var chunk__13224_13242 = null;
var count__13225_13243 = (0);
var i__13226_13244 = (0);
while(true){
if((i__13226_13244 < count__13225_13243)){
var protocol_13245 = cljs.core._nth.call(null,chunk__13224_13242,i__13226_13244);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13245)].join('')),"}");

var G__13246 = seq__13223_13241;
var G__13247 = chunk__13224_13242;
var G__13248 = count__13225_13243;
var G__13249 = (i__13226_13244 + (1));
seq__13223_13241 = G__13246;
chunk__13224_13242 = G__13247;
count__13225_13243 = G__13248;
i__13226_13244 = G__13249;
continue;
} else {
var temp__4657__auto___13250 = cljs.core.seq.call(null,seq__13223_13241);
if(temp__4657__auto___13250){
var seq__13223_13251__$1 = temp__4657__auto___13250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13223_13251__$1)){
var c__9319__auto___13252 = cljs.core.chunk_first.call(null,seq__13223_13251__$1);
var G__13253 = cljs.core.chunk_rest.call(null,seq__13223_13251__$1);
var G__13254 = c__9319__auto___13252;
var G__13255 = cljs.core.count.call(null,c__9319__auto___13252);
var G__13256 = (0);
seq__13223_13241 = G__13253;
chunk__13224_13242 = G__13254;
count__13225_13243 = G__13255;
i__13226_13244 = G__13256;
continue;
} else {
var protocol_13257 = cljs.core.first.call(null,seq__13223_13251__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13257)].join('')),"}");

var G__13258 = cljs.core.next.call(null,seq__13223_13251__$1);
var G__13259 = null;
var G__13260 = (0);
var G__13261 = (0);
seq__13223_13241 = G__13258;
chunk__13224_13242 = G__13259;
count__13225_13243 = G__13260;
i__13226_13244 = G__13261;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13227_13262 = cljs.core.seq.call(null,fields__$1);
var chunk__13228_13263 = null;
var count__13229_13264 = (0);
var i__13230_13265 = (0);
while(true){
if((i__13230_13265 < count__13229_13264)){
var fld_13266 = cljs.core._nth.call(null,chunk__13228_13263,i__13230_13265);
cljs.compiler.emitln.call(null,"this.",fld_13266," = ",fld_13266,";");

var G__13267 = seq__13227_13262;
var G__13268 = chunk__13228_13263;
var G__13269 = count__13229_13264;
var G__13270 = (i__13230_13265 + (1));
seq__13227_13262 = G__13267;
chunk__13228_13263 = G__13268;
count__13229_13264 = G__13269;
i__13230_13265 = G__13270;
continue;
} else {
var temp__4657__auto___13271 = cljs.core.seq.call(null,seq__13227_13262);
if(temp__4657__auto___13271){
var seq__13227_13272__$1 = temp__4657__auto___13271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13227_13272__$1)){
var c__9319__auto___13273 = cljs.core.chunk_first.call(null,seq__13227_13272__$1);
var G__13274 = cljs.core.chunk_rest.call(null,seq__13227_13272__$1);
var G__13275 = c__9319__auto___13273;
var G__13276 = cljs.core.count.call(null,c__9319__auto___13273);
var G__13277 = (0);
seq__13227_13262 = G__13274;
chunk__13228_13263 = G__13275;
count__13229_13264 = G__13276;
i__13230_13265 = G__13277;
continue;
} else {
var fld_13278 = cljs.core.first.call(null,seq__13227_13272__$1);
cljs.compiler.emitln.call(null,"this.",fld_13278," = ",fld_13278,";");

var G__13279 = cljs.core.next.call(null,seq__13227_13272__$1);
var G__13280 = null;
var G__13281 = (0);
var G__13282 = (0);
seq__13227_13262 = G__13279;
chunk__13228_13263 = G__13280;
count__13229_13264 = G__13281;
i__13230_13265 = G__13282;
continue;
}
} else {
}
}
break;
}

var seq__13231_13283 = cljs.core.seq.call(null,pmasks);
var chunk__13232_13284 = null;
var count__13233_13285 = (0);
var i__13234_13286 = (0);
while(true){
if((i__13234_13286 < count__13233_13285)){
var vec__13235_13287 = cljs.core._nth.call(null,chunk__13232_13284,i__13234_13286);
var pno_13288 = cljs.core.nth.call(null,vec__13235_13287,(0),null);
var pmask_13289 = cljs.core.nth.call(null,vec__13235_13287,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13288,"$ = ",pmask_13289,";");

var G__13290 = seq__13231_13283;
var G__13291 = chunk__13232_13284;
var G__13292 = count__13233_13285;
var G__13293 = (i__13234_13286 + (1));
seq__13231_13283 = G__13290;
chunk__13232_13284 = G__13291;
count__13233_13285 = G__13292;
i__13234_13286 = G__13293;
continue;
} else {
var temp__4657__auto___13294 = cljs.core.seq.call(null,seq__13231_13283);
if(temp__4657__auto___13294){
var seq__13231_13295__$1 = temp__4657__auto___13294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13231_13295__$1)){
var c__9319__auto___13296 = cljs.core.chunk_first.call(null,seq__13231_13295__$1);
var G__13297 = cljs.core.chunk_rest.call(null,seq__13231_13295__$1);
var G__13298 = c__9319__auto___13296;
var G__13299 = cljs.core.count.call(null,c__9319__auto___13296);
var G__13300 = (0);
seq__13231_13283 = G__13297;
chunk__13232_13284 = G__13298;
count__13233_13285 = G__13299;
i__13234_13286 = G__13300;
continue;
} else {
var vec__13238_13301 = cljs.core.first.call(null,seq__13231_13295__$1);
var pno_13302 = cljs.core.nth.call(null,vec__13238_13301,(0),null);
var pmask_13303 = cljs.core.nth.call(null,vec__13238_13301,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13302,"$ = ",pmask_13303,";");

var G__13304 = cljs.core.next.call(null,seq__13231_13295__$1);
var G__13305 = null;
var G__13306 = (0);
var G__13307 = (0);
seq__13231_13283 = G__13304;
chunk__13232_13284 = G__13305;
count__13233_13285 = G__13306;
i__13234_13286 = G__13307;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__13308){
var map__13309 = p__13308;
var map__13309__$1 = ((((!((map__13309 == null)))?((((map__13309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13309):map__13309);
var t = cljs.core.get.call(null,map__13309__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13309__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13309__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13309__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13309__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13311_13329 = cljs.core.seq.call(null,protocols);
var chunk__13312_13330 = null;
var count__13313_13331 = (0);
var i__13314_13332 = (0);
while(true){
if((i__13314_13332 < count__13313_13331)){
var protocol_13333 = cljs.core._nth.call(null,chunk__13312_13330,i__13314_13332);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13333)].join('')),"}");

var G__13334 = seq__13311_13329;
var G__13335 = chunk__13312_13330;
var G__13336 = count__13313_13331;
var G__13337 = (i__13314_13332 + (1));
seq__13311_13329 = G__13334;
chunk__13312_13330 = G__13335;
count__13313_13331 = G__13336;
i__13314_13332 = G__13337;
continue;
} else {
var temp__4657__auto___13338 = cljs.core.seq.call(null,seq__13311_13329);
if(temp__4657__auto___13338){
var seq__13311_13339__$1 = temp__4657__auto___13338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13311_13339__$1)){
var c__9319__auto___13340 = cljs.core.chunk_first.call(null,seq__13311_13339__$1);
var G__13341 = cljs.core.chunk_rest.call(null,seq__13311_13339__$1);
var G__13342 = c__9319__auto___13340;
var G__13343 = cljs.core.count.call(null,c__9319__auto___13340);
var G__13344 = (0);
seq__13311_13329 = G__13341;
chunk__13312_13330 = G__13342;
count__13313_13331 = G__13343;
i__13314_13332 = G__13344;
continue;
} else {
var protocol_13345 = cljs.core.first.call(null,seq__13311_13339__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13345)].join('')),"}");

var G__13346 = cljs.core.next.call(null,seq__13311_13339__$1);
var G__13347 = null;
var G__13348 = (0);
var G__13349 = (0);
seq__13311_13329 = G__13346;
chunk__13312_13330 = G__13347;
count__13313_13331 = G__13348;
i__13314_13332 = G__13349;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13315_13350 = cljs.core.seq.call(null,fields__$1);
var chunk__13316_13351 = null;
var count__13317_13352 = (0);
var i__13318_13353 = (0);
while(true){
if((i__13318_13353 < count__13317_13352)){
var fld_13354 = cljs.core._nth.call(null,chunk__13316_13351,i__13318_13353);
cljs.compiler.emitln.call(null,"this.",fld_13354," = ",fld_13354,";");

var G__13355 = seq__13315_13350;
var G__13356 = chunk__13316_13351;
var G__13357 = count__13317_13352;
var G__13358 = (i__13318_13353 + (1));
seq__13315_13350 = G__13355;
chunk__13316_13351 = G__13356;
count__13317_13352 = G__13357;
i__13318_13353 = G__13358;
continue;
} else {
var temp__4657__auto___13359 = cljs.core.seq.call(null,seq__13315_13350);
if(temp__4657__auto___13359){
var seq__13315_13360__$1 = temp__4657__auto___13359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13315_13360__$1)){
var c__9319__auto___13361 = cljs.core.chunk_first.call(null,seq__13315_13360__$1);
var G__13362 = cljs.core.chunk_rest.call(null,seq__13315_13360__$1);
var G__13363 = c__9319__auto___13361;
var G__13364 = cljs.core.count.call(null,c__9319__auto___13361);
var G__13365 = (0);
seq__13315_13350 = G__13362;
chunk__13316_13351 = G__13363;
count__13317_13352 = G__13364;
i__13318_13353 = G__13365;
continue;
} else {
var fld_13366 = cljs.core.first.call(null,seq__13315_13360__$1);
cljs.compiler.emitln.call(null,"this.",fld_13366," = ",fld_13366,";");

var G__13367 = cljs.core.next.call(null,seq__13315_13360__$1);
var G__13368 = null;
var G__13369 = (0);
var G__13370 = (0);
seq__13315_13350 = G__13367;
chunk__13316_13351 = G__13368;
count__13317_13352 = G__13369;
i__13318_13353 = G__13370;
continue;
}
} else {
}
}
break;
}

var seq__13319_13371 = cljs.core.seq.call(null,pmasks);
var chunk__13320_13372 = null;
var count__13321_13373 = (0);
var i__13322_13374 = (0);
while(true){
if((i__13322_13374 < count__13321_13373)){
var vec__13323_13375 = cljs.core._nth.call(null,chunk__13320_13372,i__13322_13374);
var pno_13376 = cljs.core.nth.call(null,vec__13323_13375,(0),null);
var pmask_13377 = cljs.core.nth.call(null,vec__13323_13375,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13376,"$ = ",pmask_13377,";");

var G__13378 = seq__13319_13371;
var G__13379 = chunk__13320_13372;
var G__13380 = count__13321_13373;
var G__13381 = (i__13322_13374 + (1));
seq__13319_13371 = G__13378;
chunk__13320_13372 = G__13379;
count__13321_13373 = G__13380;
i__13322_13374 = G__13381;
continue;
} else {
var temp__4657__auto___13382 = cljs.core.seq.call(null,seq__13319_13371);
if(temp__4657__auto___13382){
var seq__13319_13383__$1 = temp__4657__auto___13382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13319_13383__$1)){
var c__9319__auto___13384 = cljs.core.chunk_first.call(null,seq__13319_13383__$1);
var G__13385 = cljs.core.chunk_rest.call(null,seq__13319_13383__$1);
var G__13386 = c__9319__auto___13384;
var G__13387 = cljs.core.count.call(null,c__9319__auto___13384);
var G__13388 = (0);
seq__13319_13371 = G__13385;
chunk__13320_13372 = G__13386;
count__13321_13373 = G__13387;
i__13322_13374 = G__13388;
continue;
} else {
var vec__13326_13389 = cljs.core.first.call(null,seq__13319_13383__$1);
var pno_13390 = cljs.core.nth.call(null,vec__13326_13389,(0),null);
var pmask_13391 = cljs.core.nth.call(null,vec__13326_13389,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13390,"$ = ",pmask_13391,";");

var G__13392 = cljs.core.next.call(null,seq__13319_13383__$1);
var G__13393 = null;
var G__13394 = (0);
var G__13395 = (0);
seq__13319_13371 = G__13392;
chunk__13320_13372 = G__13393;
count__13321_13373 = G__13394;
i__13322_13374 = G__13395;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__13396){
var map__13397 = p__13396;
var map__13397__$1 = ((((!((map__13397 == null)))?((((map__13397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13397):map__13397);
var target = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13399){
var map__13400 = p__13399;
var map__13400__$1 = ((((!((map__13400 == null)))?((((map__13400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13400):map__13400);
var op = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8493__auto__ = code;
if(cljs.core.truth_(and__8493__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8493__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12284__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12284__auto__))){
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
var seq__13414 = cljs.core.seq.call(null,table);
var chunk__13415 = null;
var count__13416 = (0);
var i__13417 = (0);
while(true){
if((i__13417 < count__13416)){
var vec__13418 = cljs.core._nth.call(null,chunk__13415,i__13417);
var sym = cljs.core.nth.call(null,vec__13418,(0),null);
var value = cljs.core.nth.call(null,vec__13418,(1),null);
var ns_13424 = cljs.core.namespace.call(null,sym);
var name_13425 = cljs.core.name.call(null,sym);
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

var G__13426 = seq__13414;
var G__13427 = chunk__13415;
var G__13428 = count__13416;
var G__13429 = (i__13417 + (1));
seq__13414 = G__13426;
chunk__13415 = G__13427;
count__13416 = G__13428;
i__13417 = G__13429;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13414);
if(temp__4657__auto__){
var seq__13414__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13414__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__13414__$1);
var G__13430 = cljs.core.chunk_rest.call(null,seq__13414__$1);
var G__13431 = c__9319__auto__;
var G__13432 = cljs.core.count.call(null,c__9319__auto__);
var G__13433 = (0);
seq__13414 = G__13430;
chunk__13415 = G__13431;
count__13416 = G__13432;
i__13417 = G__13433;
continue;
} else {
var vec__13421 = cljs.core.first.call(null,seq__13414__$1);
var sym = cljs.core.nth.call(null,vec__13421,(0),null);
var value = cljs.core.nth.call(null,vec__13421,(1),null);
var ns_13434 = cljs.core.namespace.call(null,sym);
var name_13435 = cljs.core.name.call(null,sym);
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

var G__13436 = cljs.core.next.call(null,seq__13414__$1);
var G__13437 = null;
var G__13438 = (0);
var G__13439 = (0);
seq__13414 = G__13436;
chunk__13415 = G__13437;
count__13416 = G__13438;
i__13417 = G__13439;
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