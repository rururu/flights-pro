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
var map__23421 = s;
var map__23421__$1 = ((((!((map__23421 == null)))?((((map__23421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23421):map__23421);
var name = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__23424 = info;
var map__23425 = G__23424;
var map__23425__$1 = ((((!((map__23425 == null)))?((((map__23425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23425):map__23425);
var shadow = cljs.core.get.call(null,map__23425__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__23424__$1 = G__23424;
while(true){
var d__$2 = d__$1;
var map__23427 = G__23424__$1;
var map__23427__$1 = ((((!((map__23427 == null)))?((((map__23427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23427):map__23427);
var shadow__$1 = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__23429 = (d__$2 + (1));
var G__23430 = shadow__$1;
d__$1 = G__23429;
G__23424__$1 = G__23430;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23431){
var map__23436 = p__23431;
var map__23436__$1 = ((((!((map__23436 == null)))?((((map__23436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23436):map__23436);
var name_var = map__23436__$1;
var name = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__23438 = info;
var map__23438__$1 = ((((!((map__23438 == null)))?((((map__23438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23438):map__23438);
var ns = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args23440 = [];
var len__20732__auto___23443 = arguments.length;
var i__20733__auto___23444 = (0);
while(true){
if((i__20733__auto___23444 < len__20732__auto___23443)){
args23440.push((arguments[i__20733__auto___23444]));

var G__23445 = (i__20733__auto___23444 + (1));
i__20733__auto___23444 = G__23445;
continue;
} else {
}
break;
}

var G__23442 = args23440.length;
switch (G__23442) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23440.length)].join('')));

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
var G__23448 = cp;
switch (G__23448) {
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
var seq__23454_23458 = cljs.core.seq.call(null,s);
var chunk__23455_23459 = null;
var count__23456_23460 = (0);
var i__23457_23461 = (0);
while(true){
if((i__23457_23461 < count__23456_23460)){
var c_23462 = cljs.core._nth.call(null,chunk__23455_23459,i__23457_23461);
sb.append(cljs.compiler.escape_char.call(null,c_23462));

var G__23463 = seq__23454_23458;
var G__23464 = chunk__23455_23459;
var G__23465 = count__23456_23460;
var G__23466 = (i__23457_23461 + (1));
seq__23454_23458 = G__23463;
chunk__23455_23459 = G__23464;
count__23456_23460 = G__23465;
i__23457_23461 = G__23466;
continue;
} else {
var temp__4657__auto___23467 = cljs.core.seq.call(null,seq__23454_23458);
if(temp__4657__auto___23467){
var seq__23454_23468__$1 = temp__4657__auto___23467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23454_23468__$1)){
var c__20438__auto___23469 = cljs.core.chunk_first.call(null,seq__23454_23468__$1);
var G__23470 = cljs.core.chunk_rest.call(null,seq__23454_23468__$1);
var G__23471 = c__20438__auto___23469;
var G__23472 = cljs.core.count.call(null,c__20438__auto___23469);
var G__23473 = (0);
seq__23454_23458 = G__23470;
chunk__23455_23459 = G__23471;
count__23456_23460 = G__23472;
i__23457_23461 = G__23473;
continue;
} else {
var c_23474 = cljs.core.first.call(null,seq__23454_23468__$1);
sb.append(cljs.compiler.escape_char.call(null,c_23474));

var G__23475 = cljs.core.next.call(null,seq__23454_23468__$1);
var G__23476 = null;
var G__23477 = (0);
var G__23478 = (0);
seq__23454_23458 = G__23475;
chunk__23455_23459 = G__23476;
count__23456_23460 = G__23477;
i__23457_23461 = G__23478;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__20552__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20556__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20556__auto__,method_table__20552__auto__,prefer_table__20553__auto__,method_cache__20554__auto__,cached_hierarchy__20555__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__21521__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__21521__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__23484_23489 = ast;
var map__23484_23490__$1 = ((((!((map__23484_23489 == null)))?((((map__23484_23489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23484_23489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23484_23489):map__23484_23489);
var env_23491 = cljs.core.get.call(null,map__23484_23490__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_23491))){
var map__23486_23492 = env_23491;
var map__23486_23493__$1 = ((((!((map__23486_23492 == null)))?((((map__23486_23492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23486_23492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23486_23492):map__23486_23492);
var line_23494 = cljs.core.get.call(null,map__23486_23493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23495 = cljs.core.get.call(null,map__23486_23493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__23486_23492,map__23486_23493__$1,line_23494,column_23495,map__23484_23489,map__23484_23490__$1,env_23491,val__21521__auto__){
return (function (m){
var minfo = (function (){var G__23488 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__23488,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__23488;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_23494 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__23486_23492,map__23486_23493__$1,line_23494,column_23495,map__23484_23489,map__23484_23490__$1,env_23491,val__21521__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_23495)?(column_23495 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__23486_23492,map__23486_23493__$1,line_23494,column_23495,map__23484_23489,map__23484_23490__$1,env_23491,val__21521__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__23486_23492,map__23486_23493__$1,line_23494,column_23495,map__23484_23489,map__23484_23490__$1,env_23491,val__21521__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__23486_23492,map__23486_23493__$1,line_23494,column_23495,map__23484_23489,map__23484_23490__$1,env_23491,val__21521__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__23486_23492,map__23486_23493__$1,line_23494,column_23495,map__23484_23489,map__23484_23490__$1,env_23491,val__21521__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__21521__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__20739__auto__ = [];
var len__20732__auto___23502 = arguments.length;
var i__20733__auto___23503 = (0);
while(true){
if((i__20733__auto___23503 < len__20732__auto___23502)){
args__20739__auto__.push((arguments[i__20733__auto___23503]));

var G__23504 = (i__20733__auto___23503 + (1));
i__20733__auto___23503 = G__23504;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((0) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__20740__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__23498_23505 = cljs.core.seq.call(null,xs);
var chunk__23499_23506 = null;
var count__23500_23507 = (0);
var i__23501_23508 = (0);
while(true){
if((i__23501_23508 < count__23500_23507)){
var x_23509 = cljs.core._nth.call(null,chunk__23499_23506,i__23501_23508);
if((x_23509 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_23509)){
cljs.compiler.emit.call(null,x_23509);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_23509)){
cljs.core.apply.call(null,cljs.compiler.emits,x_23509);
} else {
if(goog.isFunction(x_23509)){
x_23509.call(null);
} else {
var s_23510 = cljs.core.print_str.call(null,x_23509);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__23498_23505,chunk__23499_23506,count__23500_23507,i__23501_23508,s_23510,x_23509){
return (function (p1__23496_SHARP_){
return (p1__23496_SHARP_ + cljs.core.count.call(null,s_23510));
});})(seq__23498_23505,chunk__23499_23506,count__23500_23507,i__23501_23508,s_23510,x_23509))
);
}

cljs.core.print.call(null,s_23510);

}
}
}
}

var G__23511 = seq__23498_23505;
var G__23512 = chunk__23499_23506;
var G__23513 = count__23500_23507;
var G__23514 = (i__23501_23508 + (1));
seq__23498_23505 = G__23511;
chunk__23499_23506 = G__23512;
count__23500_23507 = G__23513;
i__23501_23508 = G__23514;
continue;
} else {
var temp__4657__auto___23515 = cljs.core.seq.call(null,seq__23498_23505);
if(temp__4657__auto___23515){
var seq__23498_23516__$1 = temp__4657__auto___23515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23498_23516__$1)){
var c__20438__auto___23517 = cljs.core.chunk_first.call(null,seq__23498_23516__$1);
var G__23518 = cljs.core.chunk_rest.call(null,seq__23498_23516__$1);
var G__23519 = c__20438__auto___23517;
var G__23520 = cljs.core.count.call(null,c__20438__auto___23517);
var G__23521 = (0);
seq__23498_23505 = G__23518;
chunk__23499_23506 = G__23519;
count__23500_23507 = G__23520;
i__23501_23508 = G__23521;
continue;
} else {
var x_23522 = cljs.core.first.call(null,seq__23498_23516__$1);
if((x_23522 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_23522)){
cljs.compiler.emit.call(null,x_23522);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_23522)){
cljs.core.apply.call(null,cljs.compiler.emits,x_23522);
} else {
if(goog.isFunction(x_23522)){
x_23522.call(null);
} else {
var s_23523 = cljs.core.print_str.call(null,x_23522);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__23498_23505,chunk__23499_23506,count__23500_23507,i__23501_23508,s_23523,x_23522,seq__23498_23516__$1,temp__4657__auto___23515){
return (function (p1__23496_SHARP_){
return (p1__23496_SHARP_ + cljs.core.count.call(null,s_23523));
});})(seq__23498_23505,chunk__23499_23506,count__23500_23507,i__23501_23508,s_23523,x_23522,seq__23498_23516__$1,temp__4657__auto___23515))
);
}

cljs.core.print.call(null,s_23523);

}
}
}
}

var G__23524 = cljs.core.next.call(null,seq__23498_23516__$1);
var G__23525 = null;
var G__23526 = (0);
var G__23527 = (0);
seq__23498_23505 = G__23524;
chunk__23499_23506 = G__23525;
count__23500_23507 = G__23526;
i__23501_23508 = G__23527;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq23497){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23497));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__20739__auto__ = [];
var len__20732__auto___23532 = arguments.length;
var i__20733__auto___23533 = (0);
while(true){
if((i__20733__auto___23533 < len__20732__auto___23532)){
args__20739__auto__.push((arguments[i__20733__auto___23533]));

var G__23534 = (i__20733__auto___23533 + (1));
i__20733__auto___23533 = G__23534;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((0) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__20740__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__23529){
var map__23530 = p__23529;
var map__23530__$1 = ((((!((map__23530 == null)))?((((map__23530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23530):map__23530);
var m = map__23530__$1;
var gen_line = cljs.core.get.call(null,map__23530__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23528){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23528));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__20613__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23537_23539 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23538_23540 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23537_23539,_STAR_print_fn_STAR_23538_23540,sb__20613__auto__){
return (function (x__20614__auto__){
return sb__20613__auto__.append(x__20614__auto__);
});})(_STAR_print_newline_STAR_23537_23539,_STAR_print_fn_STAR_23538_23540,sb__20613__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23538_23540;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23537_23539;
}
return [cljs.core.str(sb__20613__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__20552__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20556__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20556__auto__,method_table__20552__auto__,prefer_table__20553__auto__,method_cache__20554__auto__,cached_hierarchy__20555__auto__));
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
var vec__23541 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__23541,(0),null);
var flags = cljs.core.nth.call(null,vec__23541,(1),null);
var pattern = cljs.core.nth.call(null,vec__23541,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__23545){
var map__23546 = p__23545;
var map__23546__$1 = ((((!((map__23546 == null)))?((((map__23546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23546):map__23546);
var arg = map__23546__$1;
var info = cljs.core.get.call(null,map__23546__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__23546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__23546__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__19624__auto__ = js_module_name;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__23548 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__23548);
} else {
return G__23548;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__23549){
var map__23550 = p__23549;
var map__23550__$1 = ((((!((map__23550 == null)))?((((map__23550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23550):map__23550);
var arg = map__23550__$1;
var env = cljs.core.get.call(null,map__23550__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__23550__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__23550__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__23550__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__23552 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__23552__$1 = ((((!((map__23552 == null)))?((((map__23552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23552):map__23552);
var name = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__23554){
var map__23555 = p__23554;
var map__23555__$1 = ((((!((map__23555 == null)))?((((map__23555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23555):map__23555);
var expr = cljs.core.get.call(null,map__23555__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__23555__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__23555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__23557_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23557_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__23558){
var map__23559 = p__23558;
var map__23559__$1 = ((((!((map__23559 == null)))?((((map__23559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23559):map__23559);
var env = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__23561){
var map__23562 = p__23561;
var map__23562__$1 = ((((!((map__23562 == null)))?((((map__23562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23562):map__23562);
var items = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__23564){
var map__23565 = p__23564;
var map__23565__$1 = ((((!((map__23565 == null)))?((((map__23565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23565):map__23565);
var items = cljs.core.get.call(null,map__23565__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23565__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_23567 = cljs.core.count.call(null,items);
if((cnt_23567 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_23567,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__23568_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23568_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__23569){
var map__23570 = p__23569;
var map__23570__$1 = ((((!((map__23570 == null)))?((((map__23570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23570):map__23570);
var items = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__23572){
var map__23573 = p__23572;
var map__23573__$1 = ((((!((map__23573 == null)))?((((map__23573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23573):map__23573);
var items = cljs.core.get.call(null,map__23573__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__23573__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__23573__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___23591 = cljs.core.seq.call(null,items);
if(temp__4657__auto___23591){
var items_23592__$1 = temp__4657__auto___23591;
var vec__23575_23593 = items_23592__$1;
var seq__23576_23594 = cljs.core.seq.call(null,vec__23575_23593);
var first__23577_23595 = cljs.core.first.call(null,seq__23576_23594);
var seq__23576_23596__$1 = cljs.core.next.call(null,seq__23576_23594);
var vec__23578_23597 = first__23577_23595;
var k_23598 = cljs.core.nth.call(null,vec__23578_23597,(0),null);
var v_23599 = cljs.core.nth.call(null,vec__23578_23597,(1),null);
var r_23600 = seq__23576_23596__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_23598),"\": ",v_23599);

var seq__23581_23601 = cljs.core.seq.call(null,r_23600);
var chunk__23582_23602 = null;
var count__23583_23603 = (0);
var i__23584_23604 = (0);
while(true){
if((i__23584_23604 < count__23583_23603)){
var vec__23585_23605 = cljs.core._nth.call(null,chunk__23582_23602,i__23584_23604);
var k_23606__$1 = cljs.core.nth.call(null,vec__23585_23605,(0),null);
var v_23607__$1 = cljs.core.nth.call(null,vec__23585_23605,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_23606__$1),"\": ",v_23607__$1);

var G__23608 = seq__23581_23601;
var G__23609 = chunk__23582_23602;
var G__23610 = count__23583_23603;
var G__23611 = (i__23584_23604 + (1));
seq__23581_23601 = G__23608;
chunk__23582_23602 = G__23609;
count__23583_23603 = G__23610;
i__23584_23604 = G__23611;
continue;
} else {
var temp__4657__auto___23612__$1 = cljs.core.seq.call(null,seq__23581_23601);
if(temp__4657__auto___23612__$1){
var seq__23581_23613__$1 = temp__4657__auto___23612__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23581_23613__$1)){
var c__20438__auto___23614 = cljs.core.chunk_first.call(null,seq__23581_23613__$1);
var G__23615 = cljs.core.chunk_rest.call(null,seq__23581_23613__$1);
var G__23616 = c__20438__auto___23614;
var G__23617 = cljs.core.count.call(null,c__20438__auto___23614);
var G__23618 = (0);
seq__23581_23601 = G__23615;
chunk__23582_23602 = G__23616;
count__23583_23603 = G__23617;
i__23584_23604 = G__23618;
continue;
} else {
var vec__23588_23619 = cljs.core.first.call(null,seq__23581_23613__$1);
var k_23620__$1 = cljs.core.nth.call(null,vec__23588_23619,(0),null);
var v_23621__$1 = cljs.core.nth.call(null,vec__23588_23619,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_23620__$1),"\": ",v_23621__$1);

var G__23622 = cljs.core.next.call(null,seq__23581_23613__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__23581_23601 = G__23622;
chunk__23582_23602 = G__23623;
count__23583_23603 = G__23624;
i__23584_23604 = G__23625;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__23626){
var map__23627 = p__23626;
var map__23627__$1 = ((((!((map__23627 == null)))?((((map__23627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23627):map__23627);
var form = cljs.core.get.call(null,map__23627__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__23627__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__23629){
var map__23632 = p__23629;
var map__23632__$1 = ((((!((map__23632 == null)))?((((map__23632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23632):map__23632);
var op = cljs.core.get.call(null,map__23632__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23632__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__19612__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__19612__auto__){
var and__19612__auto____$1 = form;
if(cljs.core.truth_(and__19612__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__23634){
var map__23637 = p__23634;
var map__23637__$1 = ((((!((map__23637 == null)))?((((map__23637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23637):map__23637);
var op = cljs.core.get.call(null,map__23637__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23637__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__19624__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__23639){
var map__23640 = p__23639;
var map__23640__$1 = ((((!((map__23640 == null)))?((((map__23640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);
var test = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__19624__auto__ = unchecked;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__23642){
var map__23643 = p__23642;
var map__23643__$1 = ((((!((map__23643 == null)))?((((map__23643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23643):map__23643);
var v = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__23645_23663 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__23646_23664 = null;
var count__23647_23665 = (0);
var i__23648_23666 = (0);
while(true){
if((i__23648_23666 < count__23647_23665)){
var vec__23649_23667 = cljs.core._nth.call(null,chunk__23646_23664,i__23648_23666);
var ts_23668 = cljs.core.nth.call(null,vec__23649_23667,(0),null);
var then_23669 = cljs.core.nth.call(null,vec__23649_23667,(1),null);
var seq__23652_23670 = cljs.core.seq.call(null,ts_23668);
var chunk__23653_23671 = null;
var count__23654_23672 = (0);
var i__23655_23673 = (0);
while(true){
if((i__23655_23673 < count__23654_23672)){
var test_23674 = cljs.core._nth.call(null,chunk__23653_23671,i__23655_23673);
cljs.compiler.emitln.call(null,"case ",test_23674,":");

var G__23675 = seq__23652_23670;
var G__23676 = chunk__23653_23671;
var G__23677 = count__23654_23672;
var G__23678 = (i__23655_23673 + (1));
seq__23652_23670 = G__23675;
chunk__23653_23671 = G__23676;
count__23654_23672 = G__23677;
i__23655_23673 = G__23678;
continue;
} else {
var temp__4657__auto___23679 = cljs.core.seq.call(null,seq__23652_23670);
if(temp__4657__auto___23679){
var seq__23652_23680__$1 = temp__4657__auto___23679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23652_23680__$1)){
var c__20438__auto___23681 = cljs.core.chunk_first.call(null,seq__23652_23680__$1);
var G__23682 = cljs.core.chunk_rest.call(null,seq__23652_23680__$1);
var G__23683 = c__20438__auto___23681;
var G__23684 = cljs.core.count.call(null,c__20438__auto___23681);
var G__23685 = (0);
seq__23652_23670 = G__23682;
chunk__23653_23671 = G__23683;
count__23654_23672 = G__23684;
i__23655_23673 = G__23685;
continue;
} else {
var test_23686 = cljs.core.first.call(null,seq__23652_23680__$1);
cljs.compiler.emitln.call(null,"case ",test_23686,":");

var G__23687 = cljs.core.next.call(null,seq__23652_23680__$1);
var G__23688 = null;
var G__23689 = (0);
var G__23690 = (0);
seq__23652_23670 = G__23687;
chunk__23653_23671 = G__23688;
count__23654_23672 = G__23689;
i__23655_23673 = G__23690;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_23669);
} else {
cljs.compiler.emitln.call(null,then_23669);
}

cljs.compiler.emitln.call(null,"break;");

var G__23691 = seq__23645_23663;
var G__23692 = chunk__23646_23664;
var G__23693 = count__23647_23665;
var G__23694 = (i__23648_23666 + (1));
seq__23645_23663 = G__23691;
chunk__23646_23664 = G__23692;
count__23647_23665 = G__23693;
i__23648_23666 = G__23694;
continue;
} else {
var temp__4657__auto___23695 = cljs.core.seq.call(null,seq__23645_23663);
if(temp__4657__auto___23695){
var seq__23645_23696__$1 = temp__4657__auto___23695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23645_23696__$1)){
var c__20438__auto___23697 = cljs.core.chunk_first.call(null,seq__23645_23696__$1);
var G__23698 = cljs.core.chunk_rest.call(null,seq__23645_23696__$1);
var G__23699 = c__20438__auto___23697;
var G__23700 = cljs.core.count.call(null,c__20438__auto___23697);
var G__23701 = (0);
seq__23645_23663 = G__23698;
chunk__23646_23664 = G__23699;
count__23647_23665 = G__23700;
i__23648_23666 = G__23701;
continue;
} else {
var vec__23656_23702 = cljs.core.first.call(null,seq__23645_23696__$1);
var ts_23703 = cljs.core.nth.call(null,vec__23656_23702,(0),null);
var then_23704 = cljs.core.nth.call(null,vec__23656_23702,(1),null);
var seq__23659_23705 = cljs.core.seq.call(null,ts_23703);
var chunk__23660_23706 = null;
var count__23661_23707 = (0);
var i__23662_23708 = (0);
while(true){
if((i__23662_23708 < count__23661_23707)){
var test_23709 = cljs.core._nth.call(null,chunk__23660_23706,i__23662_23708);
cljs.compiler.emitln.call(null,"case ",test_23709,":");

var G__23710 = seq__23659_23705;
var G__23711 = chunk__23660_23706;
var G__23712 = count__23661_23707;
var G__23713 = (i__23662_23708 + (1));
seq__23659_23705 = G__23710;
chunk__23660_23706 = G__23711;
count__23661_23707 = G__23712;
i__23662_23708 = G__23713;
continue;
} else {
var temp__4657__auto___23714__$1 = cljs.core.seq.call(null,seq__23659_23705);
if(temp__4657__auto___23714__$1){
var seq__23659_23715__$1 = temp__4657__auto___23714__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23659_23715__$1)){
var c__20438__auto___23716 = cljs.core.chunk_first.call(null,seq__23659_23715__$1);
var G__23717 = cljs.core.chunk_rest.call(null,seq__23659_23715__$1);
var G__23718 = c__20438__auto___23716;
var G__23719 = cljs.core.count.call(null,c__20438__auto___23716);
var G__23720 = (0);
seq__23659_23705 = G__23717;
chunk__23660_23706 = G__23718;
count__23661_23707 = G__23719;
i__23662_23708 = G__23720;
continue;
} else {
var test_23721 = cljs.core.first.call(null,seq__23659_23715__$1);
cljs.compiler.emitln.call(null,"case ",test_23721,":");

var G__23722 = cljs.core.next.call(null,seq__23659_23715__$1);
var G__23723 = null;
var G__23724 = (0);
var G__23725 = (0);
seq__23659_23705 = G__23722;
chunk__23660_23706 = G__23723;
count__23661_23707 = G__23724;
i__23662_23708 = G__23725;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_23704);
} else {
cljs.compiler.emitln.call(null,then_23704);
}

cljs.compiler.emitln.call(null,"break;");

var G__23726 = cljs.core.next.call(null,seq__23645_23696__$1);
var G__23727 = null;
var G__23728 = (0);
var G__23729 = (0);
seq__23645_23663 = G__23726;
chunk__23646_23664 = G__23727;
count__23647_23665 = G__23728;
i__23648_23666 = G__23729;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__23730){
var map__23731 = p__23730;
var map__23731__$1 = ((((!((map__23731 == null)))?((((map__23731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23731):map__23731);
var throw$ = cljs.core.get.call(null,map__23731__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__23731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__23738 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__23738,(0),null);
var rstr = cljs.core.nth.call(null,vec__23738,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__23738,fstr,rstr,ret_t,axstr){
return (function (p1__23733_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__23733_SHARP_);
});})(idx,vec__23738,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__23741 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__23741),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__23741;
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
return (function (p1__23742_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__23742_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__23749 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__23750 = cljs.core.seq.call(null,vec__23749);
var first__23751 = cljs.core.first.call(null,seq__23750);
var seq__23750__$1 = cljs.core.next.call(null,seq__23750);
var p = first__23751;
var first__23751__$1 = cljs.core.first.call(null,seq__23750__$1);
var seq__23750__$2 = cljs.core.next.call(null,seq__23750__$1);
var ts = first__23751__$1;
var first__23751__$2 = cljs.core.first.call(null,seq__23750__$2);
var seq__23750__$3 = cljs.core.next.call(null,seq__23750__$2);
var n = first__23751__$2;
var xs = seq__23750__$3;
if(cljs.core.truth_((function (){var and__19612__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__19612__auto__){
var and__19612__auto____$1 = ts;
if(cljs.core.truth_(and__19612__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__23752 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__23753 = cljs.core.seq.call(null,vec__23752);
var first__23754 = cljs.core.first.call(null,seq__23753);
var seq__23753__$1 = cljs.core.next.call(null,seq__23753);
var p = first__23754;
var first__23754__$1 = cljs.core.first.call(null,seq__23753__$1);
var seq__23753__$2 = cljs.core.next.call(null,seq__23753__$1);
var ts = first__23754__$1;
var xs = seq__23753__$2;
if(cljs.core.truth_((function (){var and__19612__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__19612__auto__){
var and__19612__auto____$1 = ts;
if(cljs.core.truth_(and__19612__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
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
var args23756 = [];
var len__20732__auto___23791 = arguments.length;
var i__20733__auto___23792 = (0);
while(true){
if((i__20733__auto___23792 < len__20732__auto___23791)){
args23756.push((arguments[i__20733__auto___23792]));

var G__23793 = (i__20733__auto___23792 + (1));
i__20733__auto___23792 = G__23793;
continue;
} else {
}
break;
}

var G__23758 = args23756.length;
switch (G__23758) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23756.length)].join('')));

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
var vec__23780 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__23755_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__23755_SHARP_);
} else {
return p1__23755_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__23781 = cljs.core.seq.call(null,vec__23780);
var first__23782 = cljs.core.first.call(null,seq__23781);
var seq__23781__$1 = cljs.core.next.call(null,seq__23781);
var x = first__23782;
var ys = seq__23781__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__23783 = cljs.core.seq.call(null,ys);
var chunk__23784 = null;
var count__23785 = (0);
var i__23786 = (0);
while(true){
if((i__23786 < count__23785)){
var next_line = cljs.core._nth.call(null,chunk__23784,i__23786);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__23795 = seq__23783;
var G__23796 = chunk__23784;
var G__23797 = count__23785;
var G__23798 = (i__23786 + (1));
seq__23783 = G__23795;
chunk__23784 = G__23796;
count__23785 = G__23797;
i__23786 = G__23798;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23783);
if(temp__4657__auto__){
var seq__23783__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23783__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__23783__$1);
var G__23799 = cljs.core.chunk_rest.call(null,seq__23783__$1);
var G__23800 = c__20438__auto__;
var G__23801 = cljs.core.count.call(null,c__20438__auto__);
var G__23802 = (0);
seq__23783 = G__23799;
chunk__23784 = G__23800;
count__23785 = G__23801;
i__23786 = G__23802;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__23783__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__23803 = cljs.core.next.call(null,seq__23783__$1);
var G__23804 = null;
var G__23805 = (0);
var G__23806 = (0);
seq__23783 = G__23803;
chunk__23784 = G__23804;
count__23785 = G__23805;
i__23786 = G__23806;
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

var seq__23787_23807 = cljs.core.seq.call(null,docs__$2);
var chunk__23788_23808 = null;
var count__23789_23809 = (0);
var i__23790_23810 = (0);
while(true){
if((i__23790_23810 < count__23789_23809)){
var e_23811 = cljs.core._nth.call(null,chunk__23788_23808,i__23790_23810);
if(cljs.core.truth_(e_23811)){
print_comment_lines.call(null,e_23811);
} else {
}

var G__23812 = seq__23787_23807;
var G__23813 = chunk__23788_23808;
var G__23814 = count__23789_23809;
var G__23815 = (i__23790_23810 + (1));
seq__23787_23807 = G__23812;
chunk__23788_23808 = G__23813;
count__23789_23809 = G__23814;
i__23790_23810 = G__23815;
continue;
} else {
var temp__4657__auto___23816 = cljs.core.seq.call(null,seq__23787_23807);
if(temp__4657__auto___23816){
var seq__23787_23817__$1 = temp__4657__auto___23816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23787_23817__$1)){
var c__20438__auto___23818 = cljs.core.chunk_first.call(null,seq__23787_23817__$1);
var G__23819 = cljs.core.chunk_rest.call(null,seq__23787_23817__$1);
var G__23820 = c__20438__auto___23818;
var G__23821 = cljs.core.count.call(null,c__20438__auto___23818);
var G__23822 = (0);
seq__23787_23807 = G__23819;
chunk__23788_23808 = G__23820;
count__23789_23809 = G__23821;
i__23790_23810 = G__23822;
continue;
} else {
var e_23823 = cljs.core.first.call(null,seq__23787_23817__$1);
if(cljs.core.truth_(e_23823)){
print_comment_lines.call(null,e_23823);
} else {
}

var G__23824 = cljs.core.next.call(null,seq__23787_23817__$1);
var G__23825 = null;
var G__23826 = (0);
var G__23827 = (0);
seq__23787_23807 = G__23824;
chunk__23788_23808 = G__23825;
count__23789_23809 = G__23826;
i__23790_23810 = G__23827;
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
var and__19612__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__23829_SHARP_){
return goog.string.startsWith(p1__23829_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__19612__auto__)){
var and__19612__auto____$1 = opts;
if(cljs.core.truth_(and__19612__auto____$1)){
var and__19612__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__19612__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__19612__auto____$2;
}
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__23830){
var map__23831 = p__23830;
var map__23831__$1 = ((((!((map__23831 == null)))?((((map__23831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23831):map__23831);
var name = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__19624__auto__ = init;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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

if(cljs.core.truth_((function (){var and__19612__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__19612__auto__)){
return test;
} else {
return and__19612__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__23833){
var map__23854 = p__23833;
var map__23854__$1 = ((((!((map__23854 == null)))?((((map__23854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23854):map__23854);
var name = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__23856_23874 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__23857_23875 = null;
var count__23858_23876 = (0);
var i__23859_23877 = (0);
while(true){
if((i__23859_23877 < count__23858_23876)){
var vec__23860_23878 = cljs.core._nth.call(null,chunk__23857_23875,i__23859_23877);
var i_23879 = cljs.core.nth.call(null,vec__23860_23878,(0),null);
var param_23880 = cljs.core.nth.call(null,vec__23860_23878,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_23880);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__23881 = seq__23856_23874;
var G__23882 = chunk__23857_23875;
var G__23883 = count__23858_23876;
var G__23884 = (i__23859_23877 + (1));
seq__23856_23874 = G__23881;
chunk__23857_23875 = G__23882;
count__23858_23876 = G__23883;
i__23859_23877 = G__23884;
continue;
} else {
var temp__4657__auto___23885 = cljs.core.seq.call(null,seq__23856_23874);
if(temp__4657__auto___23885){
var seq__23856_23886__$1 = temp__4657__auto___23885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23856_23886__$1)){
var c__20438__auto___23887 = cljs.core.chunk_first.call(null,seq__23856_23886__$1);
var G__23888 = cljs.core.chunk_rest.call(null,seq__23856_23886__$1);
var G__23889 = c__20438__auto___23887;
var G__23890 = cljs.core.count.call(null,c__20438__auto___23887);
var G__23891 = (0);
seq__23856_23874 = G__23888;
chunk__23857_23875 = G__23889;
count__23858_23876 = G__23890;
i__23859_23877 = G__23891;
continue;
} else {
var vec__23863_23892 = cljs.core.first.call(null,seq__23856_23886__$1);
var i_23893 = cljs.core.nth.call(null,vec__23863_23892,(0),null);
var param_23894 = cljs.core.nth.call(null,vec__23863_23892,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_23894);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__23895 = cljs.core.next.call(null,seq__23856_23886__$1);
var G__23896 = null;
var G__23897 = (0);
var G__23898 = (0);
seq__23856_23874 = G__23895;
chunk__23857_23875 = G__23896;
count__23858_23876 = G__23897;
i__23859_23877 = G__23898;
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

var seq__23866_23899 = cljs.core.seq.call(null,params);
var chunk__23867_23900 = null;
var count__23868_23901 = (0);
var i__23869_23902 = (0);
while(true){
if((i__23869_23902 < count__23868_23901)){
var param_23903 = cljs.core._nth.call(null,chunk__23867_23900,i__23869_23902);
cljs.compiler.emit.call(null,param_23903);

if(cljs.core._EQ_.call(null,param_23903,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23904 = seq__23866_23899;
var G__23905 = chunk__23867_23900;
var G__23906 = count__23868_23901;
var G__23907 = (i__23869_23902 + (1));
seq__23866_23899 = G__23904;
chunk__23867_23900 = G__23905;
count__23868_23901 = G__23906;
i__23869_23902 = G__23907;
continue;
} else {
var temp__4657__auto___23908 = cljs.core.seq.call(null,seq__23866_23899);
if(temp__4657__auto___23908){
var seq__23866_23909__$1 = temp__4657__auto___23908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23866_23909__$1)){
var c__20438__auto___23910 = cljs.core.chunk_first.call(null,seq__23866_23909__$1);
var G__23911 = cljs.core.chunk_rest.call(null,seq__23866_23909__$1);
var G__23912 = c__20438__auto___23910;
var G__23913 = cljs.core.count.call(null,c__20438__auto___23910);
var G__23914 = (0);
seq__23866_23899 = G__23911;
chunk__23867_23900 = G__23912;
count__23868_23901 = G__23913;
i__23869_23902 = G__23914;
continue;
} else {
var param_23915 = cljs.core.first.call(null,seq__23866_23909__$1);
cljs.compiler.emit.call(null,param_23915);

if(cljs.core._EQ_.call(null,param_23915,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23916 = cljs.core.next.call(null,seq__23866_23909__$1);
var G__23917 = null;
var G__23918 = (0);
var G__23919 = (0);
seq__23866_23899 = G__23916;
chunk__23867_23900 = G__23917;
count__23868_23901 = G__23918;
i__23869_23902 = G__23919;
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

var seq__23870_23920 = cljs.core.seq.call(null,params);
var chunk__23871_23921 = null;
var count__23872_23922 = (0);
var i__23873_23923 = (0);
while(true){
if((i__23873_23923 < count__23872_23922)){
var param_23924 = cljs.core._nth.call(null,chunk__23871_23921,i__23873_23923);
cljs.compiler.emit.call(null,param_23924);

if(cljs.core._EQ_.call(null,param_23924,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23925 = seq__23870_23920;
var G__23926 = chunk__23871_23921;
var G__23927 = count__23872_23922;
var G__23928 = (i__23873_23923 + (1));
seq__23870_23920 = G__23925;
chunk__23871_23921 = G__23926;
count__23872_23922 = G__23927;
i__23873_23923 = G__23928;
continue;
} else {
var temp__4657__auto___23929 = cljs.core.seq.call(null,seq__23870_23920);
if(temp__4657__auto___23929){
var seq__23870_23930__$1 = temp__4657__auto___23929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23870_23930__$1)){
var c__20438__auto___23931 = cljs.core.chunk_first.call(null,seq__23870_23930__$1);
var G__23932 = cljs.core.chunk_rest.call(null,seq__23870_23930__$1);
var G__23933 = c__20438__auto___23931;
var G__23934 = cljs.core.count.call(null,c__20438__auto___23931);
var G__23935 = (0);
seq__23870_23920 = G__23932;
chunk__23871_23921 = G__23933;
count__23872_23922 = G__23934;
i__23873_23923 = G__23935;
continue;
} else {
var param_23936 = cljs.core.first.call(null,seq__23870_23930__$1);
cljs.compiler.emit.call(null,param_23936);

if(cljs.core._EQ_.call(null,param_23936,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23937 = cljs.core.next.call(null,seq__23870_23930__$1);
var G__23938 = null;
var G__23939 = (0);
var G__23940 = (0);
seq__23870_23920 = G__23937;
chunk__23871_23921 = G__23938;
count__23872_23922 = G__23939;
i__23873_23923 = G__23940;
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
var seq__23945 = cljs.core.seq.call(null,params);
var chunk__23946 = null;
var count__23947 = (0);
var i__23948 = (0);
while(true){
if((i__23948 < count__23947)){
var param = cljs.core._nth.call(null,chunk__23946,i__23948);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23949 = seq__23945;
var G__23950 = chunk__23946;
var G__23951 = count__23947;
var G__23952 = (i__23948 + (1));
seq__23945 = G__23949;
chunk__23946 = G__23950;
count__23947 = G__23951;
i__23948 = G__23952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23945);
if(temp__4657__auto__){
var seq__23945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23945__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__23945__$1);
var G__23953 = cljs.core.chunk_rest.call(null,seq__23945__$1);
var G__23954 = c__20438__auto__;
var G__23955 = cljs.core.count.call(null,c__20438__auto__);
var G__23956 = (0);
seq__23945 = G__23953;
chunk__23946 = G__23954;
count__23947 = G__23955;
i__23948 = G__23956;
continue;
} else {
var param = cljs.core.first.call(null,seq__23945__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23957 = cljs.core.next.call(null,seq__23945__$1);
var G__23958 = null;
var G__23959 = (0);
var G__23960 = (0);
seq__23945 = G__23957;
chunk__23946 = G__23958;
count__23947 = G__23959;
i__23948 = G__23960;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__23961){
var map__23964 = p__23961;
var map__23964__$1 = ((((!((map__23964 == null)))?((((map__23964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23964):map__23964);
var type = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__23966){
var map__23977 = p__23966;
var map__23977__$1 = ((((!((map__23977 == null)))?((((map__23977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23977):map__23977);
var f = map__23977__$1;
var type = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__23977__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_23987__$1 = (function (){var or__19624__auto__ = name;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_23988 = cljs.compiler.munge.call(null,name_23987__$1);
var delegate_name_23989 = [cljs.core.str(mname_23988),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_23989," = function (");

var seq__23979_23990 = cljs.core.seq.call(null,params);
var chunk__23980_23991 = null;
var count__23981_23992 = (0);
var i__23982_23993 = (0);
while(true){
if((i__23982_23993 < count__23981_23992)){
var param_23994 = cljs.core._nth.call(null,chunk__23980_23991,i__23982_23993);
cljs.compiler.emit.call(null,param_23994);

if(cljs.core._EQ_.call(null,param_23994,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__23995 = seq__23979_23990;
var G__23996 = chunk__23980_23991;
var G__23997 = count__23981_23992;
var G__23998 = (i__23982_23993 + (1));
seq__23979_23990 = G__23995;
chunk__23980_23991 = G__23996;
count__23981_23992 = G__23997;
i__23982_23993 = G__23998;
continue;
} else {
var temp__4657__auto___23999 = cljs.core.seq.call(null,seq__23979_23990);
if(temp__4657__auto___23999){
var seq__23979_24000__$1 = temp__4657__auto___23999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23979_24000__$1)){
var c__20438__auto___24001 = cljs.core.chunk_first.call(null,seq__23979_24000__$1);
var G__24002 = cljs.core.chunk_rest.call(null,seq__23979_24000__$1);
var G__24003 = c__20438__auto___24001;
var G__24004 = cljs.core.count.call(null,c__20438__auto___24001);
var G__24005 = (0);
seq__23979_23990 = G__24002;
chunk__23980_23991 = G__24003;
count__23981_23992 = G__24004;
i__23982_23993 = G__24005;
continue;
} else {
var param_24006 = cljs.core.first.call(null,seq__23979_24000__$1);
cljs.compiler.emit.call(null,param_24006);

if(cljs.core._EQ_.call(null,param_24006,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24007 = cljs.core.next.call(null,seq__23979_24000__$1);
var G__24008 = null;
var G__24009 = (0);
var G__24010 = (0);
seq__23979_23990 = G__24007;
chunk__23980_23991 = G__24008;
count__23981_23992 = G__24009;
i__23982_23993 = G__24010;
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

cljs.compiler.emitln.call(null,"var ",mname_23988," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_24011 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_24011,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_23989,".call(this,");

var seq__23983_24012 = cljs.core.seq.call(null,params);
var chunk__23984_24013 = null;
var count__23985_24014 = (0);
var i__23986_24015 = (0);
while(true){
if((i__23986_24015 < count__23985_24014)){
var param_24016 = cljs.core._nth.call(null,chunk__23984_24013,i__23986_24015);
cljs.compiler.emit.call(null,param_24016);

if(cljs.core._EQ_.call(null,param_24016,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24017 = seq__23983_24012;
var G__24018 = chunk__23984_24013;
var G__24019 = count__23985_24014;
var G__24020 = (i__23986_24015 + (1));
seq__23983_24012 = G__24017;
chunk__23984_24013 = G__24018;
count__23985_24014 = G__24019;
i__23986_24015 = G__24020;
continue;
} else {
var temp__4657__auto___24021 = cljs.core.seq.call(null,seq__23983_24012);
if(temp__4657__auto___24021){
var seq__23983_24022__$1 = temp__4657__auto___24021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23983_24022__$1)){
var c__20438__auto___24023 = cljs.core.chunk_first.call(null,seq__23983_24022__$1);
var G__24024 = cljs.core.chunk_rest.call(null,seq__23983_24022__$1);
var G__24025 = c__20438__auto___24023;
var G__24026 = cljs.core.count.call(null,c__20438__auto___24023);
var G__24027 = (0);
seq__23983_24012 = G__24024;
chunk__23984_24013 = G__24025;
count__23985_24014 = G__24026;
i__23986_24015 = G__24027;
continue;
} else {
var param_24028 = cljs.core.first.call(null,seq__23983_24022__$1);
cljs.compiler.emit.call(null,param_24028);

if(cljs.core._EQ_.call(null,param_24028,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24029 = cljs.core.next.call(null,seq__23983_24022__$1);
var G__24030 = null;
var G__24031 = (0);
var G__24032 = (0);
seq__23983_24012 = G__24029;
chunk__23984_24013 = G__24030;
count__23985_24014 = G__24031;
i__23986_24015 = G__24032;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_23988,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_23988,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_23987__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_23988,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_23989,";");

cljs.compiler.emitln.call(null,"return ",mname_23988,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24036){
var map__24037 = p__24036;
var map__24037__$1 = ((((!((map__24037 == null)))?((((map__24037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24037):map__24037);
var name = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24033_SHARP_){
var and__19612__auto__ = p1__24033_SHARP_;
if(cljs.core.truth_(and__19612__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24033_SHARP_));
} else {
return and__19612__auto__;
}
});})(map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_24072__$1 = (function (){var or__19624__auto__ = name;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24073 = cljs.compiler.munge.call(null,name_24072__$1);
var maxparams_24074 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_24075 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_24072__$1,mname_24073,maxparams_24074,loop_locals,map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_24073),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_24072__$1,mname_24073,maxparams_24074,loop_locals,map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_24076 = cljs.core.sort_by.call(null,((function (name_24072__$1,mname_24073,maxparams_24074,mmap_24075,loop_locals,map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24034_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__24034_SHARP_)));
});})(name_24072__$1,mname_24073,maxparams_24074,mmap_24075,loop_locals,map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_24075));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_24073," = null;");

var seq__24039_24077 = cljs.core.seq.call(null,ms_24076);
var chunk__24040_24078 = null;
var count__24041_24079 = (0);
var i__24042_24080 = (0);
while(true){
if((i__24042_24080 < count__24041_24079)){
var vec__24043_24081 = cljs.core._nth.call(null,chunk__24040_24078,i__24042_24080);
var n_24082 = cljs.core.nth.call(null,vec__24043_24081,(0),null);
var meth_24083 = cljs.core.nth.call(null,vec__24043_24081,(1),null);
cljs.compiler.emits.call(null,"var ",n_24082," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24083))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24083);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24083);
}

cljs.compiler.emitln.call(null,";");

var G__24084 = seq__24039_24077;
var G__24085 = chunk__24040_24078;
var G__24086 = count__24041_24079;
var G__24087 = (i__24042_24080 + (1));
seq__24039_24077 = G__24084;
chunk__24040_24078 = G__24085;
count__24041_24079 = G__24086;
i__24042_24080 = G__24087;
continue;
} else {
var temp__4657__auto___24088 = cljs.core.seq.call(null,seq__24039_24077);
if(temp__4657__auto___24088){
var seq__24039_24089__$1 = temp__4657__auto___24088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24039_24089__$1)){
var c__20438__auto___24090 = cljs.core.chunk_first.call(null,seq__24039_24089__$1);
var G__24091 = cljs.core.chunk_rest.call(null,seq__24039_24089__$1);
var G__24092 = c__20438__auto___24090;
var G__24093 = cljs.core.count.call(null,c__20438__auto___24090);
var G__24094 = (0);
seq__24039_24077 = G__24091;
chunk__24040_24078 = G__24092;
count__24041_24079 = G__24093;
i__24042_24080 = G__24094;
continue;
} else {
var vec__24046_24095 = cljs.core.first.call(null,seq__24039_24089__$1);
var n_24096 = cljs.core.nth.call(null,vec__24046_24095,(0),null);
var meth_24097 = cljs.core.nth.call(null,vec__24046_24095,(1),null);
cljs.compiler.emits.call(null,"var ",n_24096," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24097))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24097);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24097);
}

cljs.compiler.emitln.call(null,";");

var G__24098 = cljs.core.next.call(null,seq__24039_24089__$1);
var G__24099 = null;
var G__24100 = (0);
var G__24101 = (0);
seq__24039_24077 = G__24098;
chunk__24040_24078 = G__24099;
count__24041_24079 = G__24100;
i__24042_24080 = G__24101;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_24073," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_24074),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_24074)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_24074));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__24049_24102 = cljs.core.seq.call(null,ms_24076);
var chunk__24050_24103 = null;
var count__24051_24104 = (0);
var i__24052_24105 = (0);
while(true){
if((i__24052_24105 < count__24051_24104)){
var vec__24053_24106 = cljs.core._nth.call(null,chunk__24050_24103,i__24052_24105);
var n_24107 = cljs.core.nth.call(null,vec__24053_24106,(0),null);
var meth_24108 = cljs.core.nth.call(null,vec__24053_24106,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24108))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24109 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24109," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24110 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24109," = new cljs.core.IndexedSeq(",a_24110,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24107,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24074)),(((cljs.core.count.call(null,maxparams_24074) > (1)))?", ":null),restarg_24109,");");
} else {
var pcnt_24111 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24108));
cljs.compiler.emitln.call(null,"case ",pcnt_24111,":");

cljs.compiler.emitln.call(null,"return ",n_24107,".call(this",(((pcnt_24111 === (0)))?null:cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24111,maxparams_24074));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),",")),");");
}

var G__24112 = seq__24049_24102;
var G__24113 = chunk__24050_24103;
var G__24114 = count__24051_24104;
var G__24115 = (i__24052_24105 + (1));
seq__24049_24102 = G__24112;
chunk__24050_24103 = G__24113;
count__24051_24104 = G__24114;
i__24052_24105 = G__24115;
continue;
} else {
var temp__4657__auto___24116 = cljs.core.seq.call(null,seq__24049_24102);
if(temp__4657__auto___24116){
var seq__24049_24117__$1 = temp__4657__auto___24116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24049_24117__$1)){
var c__20438__auto___24118 = cljs.core.chunk_first.call(null,seq__24049_24117__$1);
var G__24119 = cljs.core.chunk_rest.call(null,seq__24049_24117__$1);
var G__24120 = c__20438__auto___24118;
var G__24121 = cljs.core.count.call(null,c__20438__auto___24118);
var G__24122 = (0);
seq__24049_24102 = G__24119;
chunk__24050_24103 = G__24120;
count__24051_24104 = G__24121;
i__24052_24105 = G__24122;
continue;
} else {
var vec__24056_24123 = cljs.core.first.call(null,seq__24049_24117__$1);
var n_24124 = cljs.core.nth.call(null,vec__24056_24123,(0),null);
var meth_24125 = cljs.core.nth.call(null,vec__24056_24123,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24125))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24126 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24126," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24127 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24126," = new cljs.core.IndexedSeq(",a_24127,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24124,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24074)),(((cljs.core.count.call(null,maxparams_24074) > (1)))?", ":null),restarg_24126,");");
} else {
var pcnt_24128 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24125));
cljs.compiler.emitln.call(null,"case ",pcnt_24128,":");

cljs.compiler.emitln.call(null,"return ",n_24124,".call(this",(((pcnt_24128 === (0)))?null:cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24128,maxparams_24074));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),",")),");");
}

var G__24129 = cljs.core.next.call(null,seq__24049_24117__$1);
var G__24130 = null;
var G__24131 = (0);
var G__24132 = (0);
seq__24049_24102 = G__24129;
chunk__24050_24103 = G__24130;
count__24051_24104 = G__24131;
i__24052_24105 = G__24132;
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
cljs.compiler.emitln.call(null,mname_24073,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_24073,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_24072__$1,mname_24073,maxparams_24074,mmap_24075,ms_24076,loop_locals,map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24035_SHARP_){
var vec__24059 = p1__24035_SHARP_;
var n = cljs.core.nth.call(null,vec__24059,(0),null);
var m = cljs.core.nth.call(null,vec__24059,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_24072__$1,mname_24073,maxparams_24074,mmap_24075,ms_24076,loop_locals,map__24037,map__24037__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_24076),".cljs$lang$applyTo;");
} else {
}

var seq__24062_24133 = cljs.core.seq.call(null,ms_24076);
var chunk__24063_24134 = null;
var count__24064_24135 = (0);
var i__24065_24136 = (0);
while(true){
if((i__24065_24136 < count__24064_24135)){
var vec__24066_24137 = cljs.core._nth.call(null,chunk__24063_24134,i__24065_24136);
var n_24138 = cljs.core.nth.call(null,vec__24066_24137,(0),null);
var meth_24139 = cljs.core.nth.call(null,vec__24066_24137,(1),null);
var c_24140 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24139));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24139))){
cljs.compiler.emitln.call(null,mname_24073,".cljs$core$IFn$_invoke$arity$variadic = ",n_24138,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24073,".cljs$core$IFn$_invoke$arity$",c_24140," = ",n_24138,";");
}

var G__24141 = seq__24062_24133;
var G__24142 = chunk__24063_24134;
var G__24143 = count__24064_24135;
var G__24144 = (i__24065_24136 + (1));
seq__24062_24133 = G__24141;
chunk__24063_24134 = G__24142;
count__24064_24135 = G__24143;
i__24065_24136 = G__24144;
continue;
} else {
var temp__4657__auto___24145 = cljs.core.seq.call(null,seq__24062_24133);
if(temp__4657__auto___24145){
var seq__24062_24146__$1 = temp__4657__auto___24145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24062_24146__$1)){
var c__20438__auto___24147 = cljs.core.chunk_first.call(null,seq__24062_24146__$1);
var G__24148 = cljs.core.chunk_rest.call(null,seq__24062_24146__$1);
var G__24149 = c__20438__auto___24147;
var G__24150 = cljs.core.count.call(null,c__20438__auto___24147);
var G__24151 = (0);
seq__24062_24133 = G__24148;
chunk__24063_24134 = G__24149;
count__24064_24135 = G__24150;
i__24065_24136 = G__24151;
continue;
} else {
var vec__24069_24152 = cljs.core.first.call(null,seq__24062_24146__$1);
var n_24153 = cljs.core.nth.call(null,vec__24069_24152,(0),null);
var meth_24154 = cljs.core.nth.call(null,vec__24069_24152,(1),null);
var c_24155 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24154));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24154))){
cljs.compiler.emitln.call(null,mname_24073,".cljs$core$IFn$_invoke$arity$variadic = ",n_24153,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24073,".cljs$core$IFn$_invoke$arity$",c_24155," = ",n_24153,";");
}

var G__24156 = cljs.core.next.call(null,seq__24062_24146__$1);
var G__24157 = null;
var G__24158 = (0);
var G__24159 = (0);
seq__24062_24133 = G__24156;
chunk__24063_24134 = G__24157;
count__24064_24135 = G__24158;
i__24065_24136 = G__24159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_24073,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24160){
var map__24161 = p__24160;
var map__24161__$1 = ((((!((map__24161 == null)))?((((map__24161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24161):map__24161);
var statements = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__19612__auto__ = statements;
if(cljs.core.truth_(and__19612__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__19612__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__24163_24167 = cljs.core.seq.call(null,statements);
var chunk__24164_24168 = null;
var count__24165_24169 = (0);
var i__24166_24170 = (0);
while(true){
if((i__24166_24170 < count__24165_24169)){
var s_24171 = cljs.core._nth.call(null,chunk__24164_24168,i__24166_24170);
cljs.compiler.emitln.call(null,s_24171);

var G__24172 = seq__24163_24167;
var G__24173 = chunk__24164_24168;
var G__24174 = count__24165_24169;
var G__24175 = (i__24166_24170 + (1));
seq__24163_24167 = G__24172;
chunk__24164_24168 = G__24173;
count__24165_24169 = G__24174;
i__24166_24170 = G__24175;
continue;
} else {
var temp__4657__auto___24176 = cljs.core.seq.call(null,seq__24163_24167);
if(temp__4657__auto___24176){
var seq__24163_24177__$1 = temp__4657__auto___24176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24163_24177__$1)){
var c__20438__auto___24178 = cljs.core.chunk_first.call(null,seq__24163_24177__$1);
var G__24179 = cljs.core.chunk_rest.call(null,seq__24163_24177__$1);
var G__24180 = c__20438__auto___24178;
var G__24181 = cljs.core.count.call(null,c__20438__auto___24178);
var G__24182 = (0);
seq__24163_24167 = G__24179;
chunk__24164_24168 = G__24180;
count__24165_24169 = G__24181;
i__24166_24170 = G__24182;
continue;
} else {
var s_24183 = cljs.core.first.call(null,seq__24163_24177__$1);
cljs.compiler.emitln.call(null,s_24183);

var G__24184 = cljs.core.next.call(null,seq__24163_24177__$1);
var G__24185 = null;
var G__24186 = (0);
var G__24187 = (0);
seq__24163_24167 = G__24184;
chunk__24164_24168 = G__24185;
count__24165_24169 = G__24186;
i__24166_24170 = G__24187;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__19612__auto__ = statements;
if(cljs.core.truth_(and__19612__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__19612__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24188){
var map__24189 = p__24188;
var map__24189__$1 = ((((!((map__24189 == null)))?((((map__24189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);
var env = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__19624__auto__ = name;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24191,is_loop){
var map__24203 = p__24191;
var map__24203__$1 = ((((!((map__24203 == null)))?((((map__24203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24203):map__24203);
var bindings = cljs.core.get.call(null,map__24203__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__24203__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24203__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_24205_24214 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_24205_24214,context,map__24203,map__24203__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_24205_24214,context,map__24203,map__24203__$1,bindings,expr,env))
,bindings):null));

try{var seq__24206_24215 = cljs.core.seq.call(null,bindings);
var chunk__24207_24216 = null;
var count__24208_24217 = (0);
var i__24209_24218 = (0);
while(true){
if((i__24209_24218 < count__24208_24217)){
var map__24210_24219 = cljs.core._nth.call(null,chunk__24207_24216,i__24209_24218);
var map__24210_24220__$1 = ((((!((map__24210_24219 == null)))?((((map__24210_24219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24210_24219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24210_24219):map__24210_24219);
var binding_24221 = map__24210_24220__$1;
var init_24222 = cljs.core.get.call(null,map__24210_24220__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24221);

cljs.compiler.emitln.call(null," = ",init_24222,";");

var G__24223 = seq__24206_24215;
var G__24224 = chunk__24207_24216;
var G__24225 = count__24208_24217;
var G__24226 = (i__24209_24218 + (1));
seq__24206_24215 = G__24223;
chunk__24207_24216 = G__24224;
count__24208_24217 = G__24225;
i__24209_24218 = G__24226;
continue;
} else {
var temp__4657__auto___24227 = cljs.core.seq.call(null,seq__24206_24215);
if(temp__4657__auto___24227){
var seq__24206_24228__$1 = temp__4657__auto___24227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24206_24228__$1)){
var c__20438__auto___24229 = cljs.core.chunk_first.call(null,seq__24206_24228__$1);
var G__24230 = cljs.core.chunk_rest.call(null,seq__24206_24228__$1);
var G__24231 = c__20438__auto___24229;
var G__24232 = cljs.core.count.call(null,c__20438__auto___24229);
var G__24233 = (0);
seq__24206_24215 = G__24230;
chunk__24207_24216 = G__24231;
count__24208_24217 = G__24232;
i__24209_24218 = G__24233;
continue;
} else {
var map__24212_24234 = cljs.core.first.call(null,seq__24206_24228__$1);
var map__24212_24235__$1 = ((((!((map__24212_24234 == null)))?((((map__24212_24234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24212_24234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24212_24234):map__24212_24234);
var binding_24236 = map__24212_24235__$1;
var init_24237 = cljs.core.get.call(null,map__24212_24235__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24236);

cljs.compiler.emitln.call(null," = ",init_24237,";");

var G__24238 = cljs.core.next.call(null,seq__24206_24228__$1);
var G__24239 = null;
var G__24240 = (0);
var G__24241 = (0);
seq__24206_24215 = G__24238;
chunk__24207_24216 = G__24239;
count__24208_24217 = G__24240;
i__24209_24218 = G__24241;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_24205_24214;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24242){
var map__24243 = p__24242;
var map__24243__$1 = ((((!((map__24243 == null)))?((((map__24243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24243):map__24243);
var frame = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__20542__auto___24245 = cljs.core.count.call(null,exprs);
var i_24246 = (0);
while(true){
if((i_24246 < n__20542__auto___24245)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_24246)," = ",exprs.call(null,i_24246),";");

var G__24247 = (i_24246 + (1));
i_24246 = G__24247;
continue;
} else {
}
break;
}

var n__20542__auto___24248 = cljs.core.count.call(null,exprs);
var i_24249 = (0);
while(true){
if((i_24249 < n__20542__auto___24248)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_24249))," = ",temps.call(null,i_24249),";");

var G__24250 = (i_24249 + (1));
i_24249 = G__24250;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24251){
var map__24252 = p__24251;
var map__24252__$1 = ((((!((map__24252 == null)))?((((map__24252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24252):map__24252);
var bindings = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__24254_24262 = cljs.core.seq.call(null,bindings);
var chunk__24255_24263 = null;
var count__24256_24264 = (0);
var i__24257_24265 = (0);
while(true){
if((i__24257_24265 < count__24256_24264)){
var map__24258_24266 = cljs.core._nth.call(null,chunk__24255_24263,i__24257_24265);
var map__24258_24267__$1 = ((((!((map__24258_24266 == null)))?((((map__24258_24266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24258_24266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24258_24266):map__24258_24266);
var binding_24268 = map__24258_24267__$1;
var init_24269 = cljs.core.get.call(null,map__24258_24267__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24268)," = ",init_24269,";");

var G__24270 = seq__24254_24262;
var G__24271 = chunk__24255_24263;
var G__24272 = count__24256_24264;
var G__24273 = (i__24257_24265 + (1));
seq__24254_24262 = G__24270;
chunk__24255_24263 = G__24271;
count__24256_24264 = G__24272;
i__24257_24265 = G__24273;
continue;
} else {
var temp__4657__auto___24274 = cljs.core.seq.call(null,seq__24254_24262);
if(temp__4657__auto___24274){
var seq__24254_24275__$1 = temp__4657__auto___24274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24254_24275__$1)){
var c__20438__auto___24276 = cljs.core.chunk_first.call(null,seq__24254_24275__$1);
var G__24277 = cljs.core.chunk_rest.call(null,seq__24254_24275__$1);
var G__24278 = c__20438__auto___24276;
var G__24279 = cljs.core.count.call(null,c__20438__auto___24276);
var G__24280 = (0);
seq__24254_24262 = G__24277;
chunk__24255_24263 = G__24278;
count__24256_24264 = G__24279;
i__24257_24265 = G__24280;
continue;
} else {
var map__24260_24281 = cljs.core.first.call(null,seq__24254_24275__$1);
var map__24260_24282__$1 = ((((!((map__24260_24281 == null)))?((((map__24260_24281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24260_24281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24260_24281):map__24260_24281);
var binding_24283 = map__24260_24282__$1;
var init_24284 = cljs.core.get.call(null,map__24260_24282__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24283)," = ",init_24284,";");

var G__24285 = cljs.core.next.call(null,seq__24254_24275__$1);
var G__24286 = null;
var G__24287 = (0);
var G__24288 = (0);
seq__24254_24262 = G__24285;
chunk__24255_24263 = G__24286;
count__24256_24264 = G__24287;
i__24257_24265 = G__24288;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24291){
var map__24292 = p__24291;
var map__24292__$1 = ((((!((map__24292 == null)))?((((map__24292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24292):map__24292);
var expr = map__24292__$1;
var f = cljs.core.get.call(null,map__24292__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__24292__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24292__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__19612__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__19612__auto__)){
var and__19612__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__19612__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__19612__auto__ = protocol;
if(cljs.core.truth_(and__19612__auto__)){
var and__19612__auto____$1 = tag;
if(cljs.core.truth_(and__19612__auto____$1)){
var or__19624__auto__ = (function (){var and__19612__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__19612__auto____$2)){
var and__19612__auto____$3 = protocol;
if(cljs.core.truth_(and__19612__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__19612__auto____$3;
}
} else {
return and__19612__auto____$2;
}
})();
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
var and__19612__auto____$2 = (function (){var or__19624__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__19624__auto____$1)){
return or__19624__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__19612__auto____$2)){
var or__19624__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__19624__auto____$1){
return or__19624__auto____$1;
} else {
var and__19612__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__19612__auto____$3){
var and__19612__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__19612__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__19612__auto____$4;
}
} else {
return and__19612__auto____$3;
}
}
} else {
return and__19612__auto____$2;
}
}
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__19624__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__19624__auto__){
return or__19624__auto__;
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
var vec__24294 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__19612__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__19612__auto__)){
return (arity > mfa);
} else {
return and__19612__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env){
return (function (p1__24289_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24289_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env){
return (function (p1__24290_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24290_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24292,map__24292__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__24294,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__24294,(1),null);
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_24297 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_24297,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_24298 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_24298,args)),(((mfa_24298 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_24298,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__19624__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
var or__19624__auto____$1 = js_QMARK_;
if(or__19624__auto____$1){
return or__19624__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__19612__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__19612__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__19612__auto__;
}
})())){
var fprop_24299 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_24299," ? ",f__$1,fprop_24299,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24300){
var map__24301 = p__24300;
var map__24301__$1 = ((((!((map__24301 == null)))?((((map__24301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24301):map__24301);
var ctor = cljs.core.get.call(null,map__24301__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__24301__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24303){
var map__24304 = p__24303;
var map__24304__$1 = ((((!((map__24304 == null)))?((((map__24304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24304):map__24304);
var target = cljs.core.get.call(null,map__24304__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__24304__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__24304__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
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

var seq__24310_24314 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__24311_24315 = null;
var count__24312_24316 = (0);
var i__24313_24317 = (0);
while(true){
if((i__24313_24317 < count__24312_24316)){
var lib_24318 = cljs.core._nth.call(null,chunk__24311_24315,i__24313_24317);
if(cljs.core.truth_((function (){var or__19624__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24318),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24318),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__19624__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24318),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24318),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24318),"');");

}
}

var G__24319 = seq__24310_24314;
var G__24320 = chunk__24311_24315;
var G__24321 = count__24312_24316;
var G__24322 = (i__24313_24317 + (1));
seq__24310_24314 = G__24319;
chunk__24311_24315 = G__24320;
count__24312_24316 = G__24321;
i__24313_24317 = G__24322;
continue;
} else {
var temp__4657__auto___24323 = cljs.core.seq.call(null,seq__24310_24314);
if(temp__4657__auto___24323){
var seq__24310_24324__$1 = temp__4657__auto___24323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24310_24324__$1)){
var c__20438__auto___24325 = cljs.core.chunk_first.call(null,seq__24310_24324__$1);
var G__24326 = cljs.core.chunk_rest.call(null,seq__24310_24324__$1);
var G__24327 = c__20438__auto___24325;
var G__24328 = cljs.core.count.call(null,c__20438__auto___24325);
var G__24329 = (0);
seq__24310_24314 = G__24326;
chunk__24311_24315 = G__24327;
count__24312_24316 = G__24328;
i__24313_24317 = G__24329;
continue;
} else {
var lib_24330 = cljs.core.first.call(null,seq__24310_24324__$1);
if(cljs.core.truth_((function (){var or__19624__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24330),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24330),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__19624__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24330),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24330),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24330),"');");

}
}

var G__24331 = cljs.core.next.call(null,seq__24310_24324__$1);
var G__24332 = null;
var G__24333 = (0);
var G__24334 = (0);
seq__24310_24314 = G__24331;
chunk__24311_24315 = G__24332;
count__24312_24316 = G__24333;
i__24313_24317 = G__24334;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24335){
var map__24336 = p__24335;
var map__24336__$1 = ((((!((map__24336 == null)))?((((map__24336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24336):map__24336);
var name = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24338){
var map__24339 = p__24338;
var map__24339__$1 = ((((!((map__24339 == null)))?((((map__24339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24339):map__24339);
var name = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__24341){
var map__24342 = p__24341;
var map__24342__$1 = ((((!((map__24342 == null)))?((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var t = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24344_24362 = cljs.core.seq.call(null,protocols);
var chunk__24345_24363 = null;
var count__24346_24364 = (0);
var i__24347_24365 = (0);
while(true){
if((i__24347_24365 < count__24346_24364)){
var protocol_24366 = cljs.core._nth.call(null,chunk__24345_24363,i__24347_24365);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_24366)].join('')),"}");

var G__24367 = seq__24344_24362;
var G__24368 = chunk__24345_24363;
var G__24369 = count__24346_24364;
var G__24370 = (i__24347_24365 + (1));
seq__24344_24362 = G__24367;
chunk__24345_24363 = G__24368;
count__24346_24364 = G__24369;
i__24347_24365 = G__24370;
continue;
} else {
var temp__4657__auto___24371 = cljs.core.seq.call(null,seq__24344_24362);
if(temp__4657__auto___24371){
var seq__24344_24372__$1 = temp__4657__auto___24371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24344_24372__$1)){
var c__20438__auto___24373 = cljs.core.chunk_first.call(null,seq__24344_24372__$1);
var G__24374 = cljs.core.chunk_rest.call(null,seq__24344_24372__$1);
var G__24375 = c__20438__auto___24373;
var G__24376 = cljs.core.count.call(null,c__20438__auto___24373);
var G__24377 = (0);
seq__24344_24362 = G__24374;
chunk__24345_24363 = G__24375;
count__24346_24364 = G__24376;
i__24347_24365 = G__24377;
continue;
} else {
var protocol_24378 = cljs.core.first.call(null,seq__24344_24372__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_24378)].join('')),"}");

var G__24379 = cljs.core.next.call(null,seq__24344_24372__$1);
var G__24380 = null;
var G__24381 = (0);
var G__24382 = (0);
seq__24344_24362 = G__24379;
chunk__24345_24363 = G__24380;
count__24346_24364 = G__24381;
i__24347_24365 = G__24382;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24348_24383 = cljs.core.seq.call(null,fields__$1);
var chunk__24349_24384 = null;
var count__24350_24385 = (0);
var i__24351_24386 = (0);
while(true){
if((i__24351_24386 < count__24350_24385)){
var fld_24387 = cljs.core._nth.call(null,chunk__24349_24384,i__24351_24386);
cljs.compiler.emitln.call(null,"this.",fld_24387," = ",fld_24387,";");

var G__24388 = seq__24348_24383;
var G__24389 = chunk__24349_24384;
var G__24390 = count__24350_24385;
var G__24391 = (i__24351_24386 + (1));
seq__24348_24383 = G__24388;
chunk__24349_24384 = G__24389;
count__24350_24385 = G__24390;
i__24351_24386 = G__24391;
continue;
} else {
var temp__4657__auto___24392 = cljs.core.seq.call(null,seq__24348_24383);
if(temp__4657__auto___24392){
var seq__24348_24393__$1 = temp__4657__auto___24392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24348_24393__$1)){
var c__20438__auto___24394 = cljs.core.chunk_first.call(null,seq__24348_24393__$1);
var G__24395 = cljs.core.chunk_rest.call(null,seq__24348_24393__$1);
var G__24396 = c__20438__auto___24394;
var G__24397 = cljs.core.count.call(null,c__20438__auto___24394);
var G__24398 = (0);
seq__24348_24383 = G__24395;
chunk__24349_24384 = G__24396;
count__24350_24385 = G__24397;
i__24351_24386 = G__24398;
continue;
} else {
var fld_24399 = cljs.core.first.call(null,seq__24348_24393__$1);
cljs.compiler.emitln.call(null,"this.",fld_24399," = ",fld_24399,";");

var G__24400 = cljs.core.next.call(null,seq__24348_24393__$1);
var G__24401 = null;
var G__24402 = (0);
var G__24403 = (0);
seq__24348_24383 = G__24400;
chunk__24349_24384 = G__24401;
count__24350_24385 = G__24402;
i__24351_24386 = G__24403;
continue;
}
} else {
}
}
break;
}

var seq__24352_24404 = cljs.core.seq.call(null,pmasks);
var chunk__24353_24405 = null;
var count__24354_24406 = (0);
var i__24355_24407 = (0);
while(true){
if((i__24355_24407 < count__24354_24406)){
var vec__24356_24408 = cljs.core._nth.call(null,chunk__24353_24405,i__24355_24407);
var pno_24409 = cljs.core.nth.call(null,vec__24356_24408,(0),null);
var pmask_24410 = cljs.core.nth.call(null,vec__24356_24408,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24409,"$ = ",pmask_24410,";");

var G__24411 = seq__24352_24404;
var G__24412 = chunk__24353_24405;
var G__24413 = count__24354_24406;
var G__24414 = (i__24355_24407 + (1));
seq__24352_24404 = G__24411;
chunk__24353_24405 = G__24412;
count__24354_24406 = G__24413;
i__24355_24407 = G__24414;
continue;
} else {
var temp__4657__auto___24415 = cljs.core.seq.call(null,seq__24352_24404);
if(temp__4657__auto___24415){
var seq__24352_24416__$1 = temp__4657__auto___24415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24352_24416__$1)){
var c__20438__auto___24417 = cljs.core.chunk_first.call(null,seq__24352_24416__$1);
var G__24418 = cljs.core.chunk_rest.call(null,seq__24352_24416__$1);
var G__24419 = c__20438__auto___24417;
var G__24420 = cljs.core.count.call(null,c__20438__auto___24417);
var G__24421 = (0);
seq__24352_24404 = G__24418;
chunk__24353_24405 = G__24419;
count__24354_24406 = G__24420;
i__24355_24407 = G__24421;
continue;
} else {
var vec__24359_24422 = cljs.core.first.call(null,seq__24352_24416__$1);
var pno_24423 = cljs.core.nth.call(null,vec__24359_24422,(0),null);
var pmask_24424 = cljs.core.nth.call(null,vec__24359_24422,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24423,"$ = ",pmask_24424,";");

var G__24425 = cljs.core.next.call(null,seq__24352_24416__$1);
var G__24426 = null;
var G__24427 = (0);
var G__24428 = (0);
seq__24352_24404 = G__24425;
chunk__24353_24405 = G__24426;
count__24354_24406 = G__24427;
i__24355_24407 = G__24428;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__24429){
var map__24430 = p__24429;
var map__24430__$1 = ((((!((map__24430 == null)))?((((map__24430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24430):map__24430);
var t = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24432_24450 = cljs.core.seq.call(null,protocols);
var chunk__24433_24451 = null;
var count__24434_24452 = (0);
var i__24435_24453 = (0);
while(true){
if((i__24435_24453 < count__24434_24452)){
var protocol_24454 = cljs.core._nth.call(null,chunk__24433_24451,i__24435_24453);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_24454)].join('')),"}");

var G__24455 = seq__24432_24450;
var G__24456 = chunk__24433_24451;
var G__24457 = count__24434_24452;
var G__24458 = (i__24435_24453 + (1));
seq__24432_24450 = G__24455;
chunk__24433_24451 = G__24456;
count__24434_24452 = G__24457;
i__24435_24453 = G__24458;
continue;
} else {
var temp__4657__auto___24459 = cljs.core.seq.call(null,seq__24432_24450);
if(temp__4657__auto___24459){
var seq__24432_24460__$1 = temp__4657__auto___24459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24432_24460__$1)){
var c__20438__auto___24461 = cljs.core.chunk_first.call(null,seq__24432_24460__$1);
var G__24462 = cljs.core.chunk_rest.call(null,seq__24432_24460__$1);
var G__24463 = c__20438__auto___24461;
var G__24464 = cljs.core.count.call(null,c__20438__auto___24461);
var G__24465 = (0);
seq__24432_24450 = G__24462;
chunk__24433_24451 = G__24463;
count__24434_24452 = G__24464;
i__24435_24453 = G__24465;
continue;
} else {
var protocol_24466 = cljs.core.first.call(null,seq__24432_24460__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_24466)].join('')),"}");

var G__24467 = cljs.core.next.call(null,seq__24432_24460__$1);
var G__24468 = null;
var G__24469 = (0);
var G__24470 = (0);
seq__24432_24450 = G__24467;
chunk__24433_24451 = G__24468;
count__24434_24452 = G__24469;
i__24435_24453 = G__24470;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24436_24471 = cljs.core.seq.call(null,fields__$1);
var chunk__24437_24472 = null;
var count__24438_24473 = (0);
var i__24439_24474 = (0);
while(true){
if((i__24439_24474 < count__24438_24473)){
var fld_24475 = cljs.core._nth.call(null,chunk__24437_24472,i__24439_24474);
cljs.compiler.emitln.call(null,"this.",fld_24475," = ",fld_24475,";");

var G__24476 = seq__24436_24471;
var G__24477 = chunk__24437_24472;
var G__24478 = count__24438_24473;
var G__24479 = (i__24439_24474 + (1));
seq__24436_24471 = G__24476;
chunk__24437_24472 = G__24477;
count__24438_24473 = G__24478;
i__24439_24474 = G__24479;
continue;
} else {
var temp__4657__auto___24480 = cljs.core.seq.call(null,seq__24436_24471);
if(temp__4657__auto___24480){
var seq__24436_24481__$1 = temp__4657__auto___24480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24436_24481__$1)){
var c__20438__auto___24482 = cljs.core.chunk_first.call(null,seq__24436_24481__$1);
var G__24483 = cljs.core.chunk_rest.call(null,seq__24436_24481__$1);
var G__24484 = c__20438__auto___24482;
var G__24485 = cljs.core.count.call(null,c__20438__auto___24482);
var G__24486 = (0);
seq__24436_24471 = G__24483;
chunk__24437_24472 = G__24484;
count__24438_24473 = G__24485;
i__24439_24474 = G__24486;
continue;
} else {
var fld_24487 = cljs.core.first.call(null,seq__24436_24481__$1);
cljs.compiler.emitln.call(null,"this.",fld_24487," = ",fld_24487,";");

var G__24488 = cljs.core.next.call(null,seq__24436_24481__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24436_24471 = G__24488;
chunk__24437_24472 = G__24489;
count__24438_24473 = G__24490;
i__24439_24474 = G__24491;
continue;
}
} else {
}
}
break;
}

var seq__24440_24492 = cljs.core.seq.call(null,pmasks);
var chunk__24441_24493 = null;
var count__24442_24494 = (0);
var i__24443_24495 = (0);
while(true){
if((i__24443_24495 < count__24442_24494)){
var vec__24444_24496 = cljs.core._nth.call(null,chunk__24441_24493,i__24443_24495);
var pno_24497 = cljs.core.nth.call(null,vec__24444_24496,(0),null);
var pmask_24498 = cljs.core.nth.call(null,vec__24444_24496,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24497,"$ = ",pmask_24498,";");

var G__24499 = seq__24440_24492;
var G__24500 = chunk__24441_24493;
var G__24501 = count__24442_24494;
var G__24502 = (i__24443_24495 + (1));
seq__24440_24492 = G__24499;
chunk__24441_24493 = G__24500;
count__24442_24494 = G__24501;
i__24443_24495 = G__24502;
continue;
} else {
var temp__4657__auto___24503 = cljs.core.seq.call(null,seq__24440_24492);
if(temp__4657__auto___24503){
var seq__24440_24504__$1 = temp__4657__auto___24503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24440_24504__$1)){
var c__20438__auto___24505 = cljs.core.chunk_first.call(null,seq__24440_24504__$1);
var G__24506 = cljs.core.chunk_rest.call(null,seq__24440_24504__$1);
var G__24507 = c__20438__auto___24505;
var G__24508 = cljs.core.count.call(null,c__20438__auto___24505);
var G__24509 = (0);
seq__24440_24492 = G__24506;
chunk__24441_24493 = G__24507;
count__24442_24494 = G__24508;
i__24443_24495 = G__24509;
continue;
} else {
var vec__24447_24510 = cljs.core.first.call(null,seq__24440_24504__$1);
var pno_24511 = cljs.core.nth.call(null,vec__24447_24510,(0),null);
var pmask_24512 = cljs.core.nth.call(null,vec__24447_24510,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24511,"$ = ",pmask_24512,";");

var G__24513 = cljs.core.next.call(null,seq__24440_24504__$1);
var G__24514 = null;
var G__24515 = (0);
var G__24516 = (0);
seq__24440_24492 = G__24513;
chunk__24441_24493 = G__24514;
count__24442_24494 = G__24515;
i__24443_24495 = G__24516;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__24517){
var map__24518 = p__24517;
var map__24518__$1 = ((((!((map__24518 == null)))?((((map__24518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24518):map__24518);
var target = cljs.core.get.call(null,map__24518__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__24518__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__24518__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__24518__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24518__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24520){
var map__24521 = p__24520;
var map__24521__$1 = ((((!((map__24521 == null)))?((((map__24521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24521):map__24521);
var op = cljs.core.get.call(null,map__24521__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__24521__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__24521__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__24521__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__24521__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__19612__auto__ = code;
if(cljs.core.truth_(and__19612__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__19612__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__23405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23405__auto__))){
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
var seq__24535 = cljs.core.seq.call(null,table);
var chunk__24536 = null;
var count__24537 = (0);
var i__24538 = (0);
while(true){
if((i__24538 < count__24537)){
var vec__24539 = cljs.core._nth.call(null,chunk__24536,i__24538);
var sym = cljs.core.nth.call(null,vec__24539,(0),null);
var value = cljs.core.nth.call(null,vec__24539,(1),null);
var ns_24545 = cljs.core.namespace.call(null,sym);
var name_24546 = cljs.core.name.call(null,sym);
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

var G__24547 = seq__24535;
var G__24548 = chunk__24536;
var G__24549 = count__24537;
var G__24550 = (i__24538 + (1));
seq__24535 = G__24547;
chunk__24536 = G__24548;
count__24537 = G__24549;
i__24538 = G__24550;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24535);
if(temp__4657__auto__){
var seq__24535__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24535__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__24535__$1);
var G__24551 = cljs.core.chunk_rest.call(null,seq__24535__$1);
var G__24552 = c__20438__auto__;
var G__24553 = cljs.core.count.call(null,c__20438__auto__);
var G__24554 = (0);
seq__24535 = G__24551;
chunk__24536 = G__24552;
count__24537 = G__24553;
i__24538 = G__24554;
continue;
} else {
var vec__24542 = cljs.core.first.call(null,seq__24535__$1);
var sym = cljs.core.nth.call(null,vec__24542,(0),null);
var value = cljs.core.nth.call(null,vec__24542,(1),null);
var ns_24555 = cljs.core.namespace.call(null,sym);
var name_24556 = cljs.core.name.call(null,sym);
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

var G__24557 = cljs.core.next.call(null,seq__24535__$1);
var G__24558 = null;
var G__24559 = (0);
var G__24560 = (0);
seq__24535 = G__24557;
chunk__24536 = G__24558;
count__24537 = G__24559;
i__24538 = G__24560;
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